/* export constructor */
module.exports = FunctionsContainer;

/**
 * contains user-defined functions tied to some value-expression calculator
 * @constructor
 * @param {Calculator} calculator which calculates value-expression
 */
function FunctionsContainer(calculator) {
    this.calc = calculator;     /* expression calculator */
    this.value = getVarFunctionByName(calculator, "value"); /* function to calculate value at current point */
}

/**
 * support function to retrieve the variable function with the defined `name`
 * @param {Calculator} calc which calculates value-expression
 * @param {string} name of function to be used
 */
function getVarFunctionByName(calc, name) {
    var varFunctions = calc.vars();
    return varFunctions.some(function (varFn) {
        return varFn.varName === name;
    });
}

/**
 * calculates the difference between current point in the series, specified by `alias,` and modifies the point by the value of the `offset`
 * @param {string} alias of the series, for which value is calculated
 * @param {string} variable offset, used to modify the underlying data
 */
FunctionsContainer.prototype.ChangeByOffset = function (alias, offset) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, offset);

    if (previousValue == null) {
        /* 'missed' flag means, that the value must be recalculated when new data is available */
        this.calc.point.missed = true;
    } else if (currentValue != null) {
        return currentValue - previousValue;
    }
};

/**
 * gets the difference between current point in the series specified by `alias` and the point with an offset value of `1 month`
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.MonthlyChange = function (alias) {
    return this.ChangeByOffset(alias, "1 month");
};

/**
 * gets the difference between current point in the series specified by `alias` and the point with an offset of `1 year`
 * @param {string} alias of the series for which value is calculated
 */
FunctionsContainer.prototype.ChangeFromYearAgo = function (alias) {
    return this.ChangeByOffset(alias, "1 year");
};

/**
 * gets the percent change between current point in the series specified by `alias` and the point with `offset`
 * @param {string} alias of the series for which value is calculated
 * @param {string} offset by which currently processed point should be shifted
 */
FunctionsContainer.prototype.PercentChangeByOffset = function (alias, offset) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, offset);

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data becomes available */
        this.calc.point.missed = true;
    } else if (currentValue != null) {
        return (currentValue / previousValue - 1) * 100;
    }
};

/**
 * calculates the percent change between the current point in the series specified by `alias` and the point with an offset of `1 month`
 * @param {string} alias of the series for which value is calculated
 */
FunctionsContainer.prototype.MonthlyPercentChange = function (alias) {
    return this.PercentChangeByOffset(alias, "1 month");
};

/**
 * calculates the percent change between the current point in the series specified by `alias` and the point with an offset of `1 year`
 * @param {string} alias of the series for which value is calculated
 */
FunctionsContainer.prototype.PercentChangeFromYearAgo = function (alias) {
    return this.PercentChangeByOffset(alias, "1 year");
};

/**
 * calculates the coumpounded annual rate
 * @param {string} alias of the series for which value is calculated
 */
FunctionsContainer.prototype.CompoundedAnnualRateOfChange = function (alias) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, "1 year");

    if (previousValue == null) {
        /* 'missed' flag means that the value should be recalculated when new data is available */
        this.calc.point.missed = true;
    } else if (previousValue != null) {
        return (Math.pow(( currentValue / previousValue ), 12) - 1) * 100;
    }
};

/**
* calculates the continuously coumpounded rate
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.ContinuouslyCompoundedRateOfChange = function (alias) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, "1 year");

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data is available */
        this.calc.point.missed = true;
    } else if (previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100;
    }
};

/**
* calculates the continuously coumpounded annual rate
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.ContinuouslyCompoundedAnnualRateOfChange = function (alias) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, "1 year");

    if (previousValue == null) {
        /* 'missed' flag means that the value should be recalculated when new data is available */
        this.calc.point.missed = true;
    } else if (previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100 * 12;
    }
};

/**
 * calculates the natural log of the current point
 * @param {string} alias of the series for which value is calculated
 */
FunctionsContainer.prototype.NaturalLog = function (alias) {
    var currentValue = this.value(alias);

    return Math.log(currentValue);
};

/**
 * uses the defined 'time' as the index (value = 100) for the remaining data
 * @param {string} alias of the series, for which value is calculated
 * @param {string} time timespamp, at whic
 */
FunctionsContainer.prototype.Index = function (alias, time) {
    var currentValue = this.value(alias);
    var indexValue;
    if (!this.savedValues) {
        this.savedValues = {};
    }
    if (!this.savedValues[alias]) {
        this.savedValues[alias] = {};
    }
    var aliasSavedValues = this.savedValues[alias];

    if (aliasSavedValues[time] != null) {
        indexValue = aliasSavedValues[time];
    } else {
        var date = lib.getTime(time, this.calc.isUTC)();
        var timestamp = date instanceof Date ? date.getTime() : date;
        indexValue = this.getValueAtPoint(alias, timestamp);
        aliasSavedValues[time] = indexValue;
    }

    return currentValue / indexValue * 100 || null;
};

/**
 * defines the maximum value of the series specified by `alias`
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.IndexMax = function (alias) {
    var currentValue = this.value(alias);
    var indexValue;

    indexValue = this.getMaximumValue(alias);
    return currentValue / indexValue * 100 || null;
};


/***************************** Support Functions ***************************************/


/**
 * defines value (with interpolation) of the series specified by `alias`
 * at the point with some `offset` from the currently processed point in time
 * @param {string} alias of the series, for which value is calculated
 * @param {string} offset,
 */
FunctionsContainer.prototype.getValueWithOffset = function (alias, offset) {
    var currentDate = new Date(this.calc.point.t);
    var parsedOffset = lib.getIntervalValue(offset, null, true, true);
    var isUTC = this.calc.isUTC();
    var offsetTimestamp = lib.shiftDate(currentDate, parsedOffset, -1 , isUTC).getTime();
    var previousValue = this.getValueAtPoint(alias, offsetTimestamp);
    return previousValue;
};

/**
 * calculates (with interpolation) the value of the series specified by `alias` at the given `time`
 * @param {string} alias - alias of series for which value should be found
 * @param {number} time - timestamp of the desired point
*/
FunctionsContainer.prototype.getValueAtPoint = function (alias, time) {
    var point = {
        t: time,
        mode: 0
    };
    var me = this;
    var callGetPoint = function () {
        var res = me.calc.getPointValue()(arguments, point, me.calc.meta);
        return res && res[1] != undefined ? res[1] : null;
    };

    callGetPoint.varIndex = this.value.varIndex;
    callGetPoint.varName = "value";
    return callGetPoint([alias]);
};

/**
 * defines a series maximum value
 * @param {string} alias of the series for which value is calculated
 */
FunctionsContainer.prototype.getMaximumValue = function (alias) {
    var series = this.calc.series.getSeriesByAlias(alias);

    if (!series || !series.data) {
        return;
    }
    return series.data.v.reduce(function (max, value) {
        return value > max ? value : max;
    }, -Infinity);
};
