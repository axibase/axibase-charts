/* export constructor */
module.exports = FunctionsContainer;

/**
 * contains user-defined functions binded to some value-expression calculator
 * @constructor
 * @param {Calculator} calculator which calculates value-expression
 */
function FunctionsContainer(calculator) {
    this.calc = calculator;     /* expression calculator */
    this.value = getVarFunctionByName(calculator, "value"); /* function to calculate value in current point */
}

/**
 * support function to retrieve the variable function with the defined `name`
 * @param {Calculator} calc which calculates value-expression
 * @param {string} name of the function, which should be found
 */
function getVarFunctionByName(calc, name) {
    var varFunctions = calc.vars();
    return varFunctions.some(function (varFn) {
        return varFn.varName === name;
    });
}

/**
 * gets the difference between current point in the series specified by `alias` and the point with `offset`
 * @param {string} alias of the series, for which value is calculated
 * @param {string} offset by which currently processed point should be shifted
 */
FunctionsContainer.prototype.ChangeByOffset = function (alias, offset) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, offset);

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data arrive */
        this.calc.point.missed = true;
    } else if (currentValue != null) {
        return currentValue - previousValue;
    }
};

/**
 * gets the difference between current point in the series specified by `alias` and the point with offset `1 month`
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.MonthlyChange = function (alias) {
    return this.ChangeAtoffset(alias, "1 month");
};

/**
 * gets the difference between current point in the series specified by `alias` and the point with offset `1 year`
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.ChangeFromYearAgo = function (alias) {
    return this.ChangeAtoffset(alias, "1 year");
};

/**
 * gets the percent change between current point in the series specified by `alias` and the point with `offset`
 * @param {string} alias of the series, for which value is calculated
 * @param {string} offset by which currently processed point should be shifted
 */
FunctionsContainer.prototype.PercentChangeByOffset = function (alias, offset) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, offset);

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data arrive */
        this.calc.point.missed = true;
    } else if (currentValue != null) {
        return (currentValue / previousValue - 1) * 100;
    }
};

/**
 * gets the percent change between current point in the series specified by `alias` and the point with offset `1 month`
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.MonthlyPercentChange = function (alias) {
    return this.PercentChange(alias, "1 month");
};

/**
 * get the percent change between current point in the series specified by `alias` and the point with offset `1 year`
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.PercentChangeFromYearAgo = function (alias) {
    return this.PercentChange(alias, "1 year");
};

/**
 * get the coumpounded annual rate
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.CompoundedAnnualRateOfChange = function (alias) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, "1 year");

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data arrive */
        this.calc.point.missed = true;
    } else if (previousValue != null) {
        return (Math.pow(( currentValue / previousValue ), 12) - 1) * 100;
    }
};

/**
* get the continuously coumpounded rate
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.ContinuouslyCompoundedRateOfChange = function (alias) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, "1 year");

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data arrive */
        this.calc.point.missed = true;
    } else if (previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100;
    }
};

/**
* get the continuously coumpounded annual rate
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.ContinuouslyCompoundedAnnualRateOfChange = function (alias) {
    var currentValue = this.value(alias);
    var previousValue = this.getValueWithOffset(alias, "1 year");

    if (previousValue == null) {
        /* 'missed' flag means, that the value should be recalculated when new data arrive */
        this.calc.point.missed = true;
    } else if (previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100 * 12;
    }
};

/**
 * get the natural log of the current point
 * @param {string} alias of the series, for which value is calculated
 */
FunctionsContainer.prototype.NaturalLog = function (alias) {
    var currentValue = this.value(alias);

    return Math.log(currentValue);
};

/**
 * scale current point value, so that point at the `time` will have value 100
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
 * get the maximum value of the series specified by `alias`
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
 * get value (with interpolation) of the series specified by `alias`
 * at the point with offset `offset` from currently processed point time
 * @param {string} alias of the series, for which value is calculated
 * @param {string} offset offset,
 */
FunctionsContainer.prototype.getValueWithOffset = function (alias, offset) {
    var currentDate = new Date(this.calc.point.t);
    var parsedOffset = lib.getoffsetValue(offset, null, true, true);
    var isUTC = this.calc.isUTC();
    var offsetTimestamp = lib.shiftDate(currentDate, parsedOffset, -1 , isUTC).getTime();
    var previousValue = this.getValueAtPoint(alias, offsetTimestamp);
    return previousValue;
};

/**
 * calculates (with interpolation) value of the series specified by `alias` at the given `time`
 * @param {string} alias - alias of series, for which value should be found
 * @param {number} time - timestamp of the interestig point
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
 * finds series by alias and find maximum value in it's data
 * @param {string} alias of the series, for which value is calculated
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
