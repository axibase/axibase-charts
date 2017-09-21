/**
 * gets the difference between current point in the series specified by `alias` and the point with `offset`
 * @param {string} alias of the series, for which value is calculated
 * @param {string} offset by which currently processed point should be shifted
 */
exports.ChangeByOffset = ChangeByOffset;
function ChangeByOffset(alias, offset) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, offset);

    if (previousValue != null && currentValue != null) {
        return currentValue - previousValue;
    }
};

/**
 * gets the difference between current point in the series specified by `alias` and the point with offset `1 month`
 * @param {string} alias of the series, for which value is calculated
 */
exports.MonthlyChange = function (alias) {
    return ChangeByOffset(alias, "1 month");
};

/**
 * gets the difference between current point in the series specified by `alias` and the point with offset `1 year`
 * @param {string} alias of the series, for which value is calculated
 */
exports.ChangeFromYearAgo = function (alias) {
    return ChangeByOffset(alias, "1 year");
};

/**
 * gets the percent change between current point in the series specified by `alias` and the point with `offset`
 * @param {string} alias of the series, for which value is calculated
 * @param {string} offset by which currently processed point should be shifted
 */
exports.PercentChangeByOffset = PercentChangeByOffset;
function PercentChangeByOffset(alias, offset) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, offset);

    if (previousValue != null && currentValue != null) {
        return (currentValue / previousValue - 1) * 100;
    }
};

/**
 * gets the percent change between current point in the series specified by `alias` and the point with offset `1 month`
 * @param {string} alias of the series, for which value is calculated
 */
exports.MonthlyPercentChange = function (alias) {
    return PercentChangeByOffset(alias, "1 month");
};

/**
 * get the percent change between current point in the series specified by `alias` and the point with offset `1 year`
 * @param {string} alias of the series, for which value is calculated
 */
exports.PercentChangeFromYearAgo = function (alias) {
    return PercentChangeByOffset(alias, "1 year");
};

/**
 * get the coumpounded annual rate
 * @param {string} alias of the series, for which value is calculated
 */
exports.CompoundedAnnualRateOfChange = function (alias) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, "1 year");

    if (previousValue != null && previousValue != null) {
        return (Math.pow(( currentValue / previousValue ), 12) - 1) * 100;
    }
};

/**
* get the continuously coumpounded rate
 * @param {string} alias of the series, for which value is calculated
 */
exports.ContinuouslyCompoundedRateOfChange = function (alias) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, "1 year");

    if (previousValue != null && previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100;
    }
};

/**
* get the continuously coumpounded annual rate
 * @param {string} alias of the series, for which value is calculated
 */
exports.ContinuouslyCompoundedAnnualRateOfChange = function (alias) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, "1 year");

    if (previousValue != null && previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100 * 12;
    }
};

/**
 * get the natural log of the current point
 * @param {string} alias of the series, for which value is calculated
 */
exports.NaturalLog = function (alias) {
    var currentValue = value(alias);

    return Math.log(currentValue);
};

var savedValues = {};
/**
 * scale current point value, so that point at the `time` will have value 100
 * @param {string} alias of the series, for which value is calculated
 * @param {string} time timespamp, at whic
 */
exports.Index = function (alias, time) {
    var currentValue = value(alias);
    var indexValue;

    if (!savedValues[alias]) {
        savedValues[alias] = {};
    }
    var aliasSavedValues = savedValues[alias];

    if (aliasSavedValues[time] != null) {
        indexValue = aliasSavedValues[time];
    } else {
        indexValue = getValueAtPoint(alias, time);
        aliasSavedValues[time] = indexValue;
    }

    return currentValue / indexValue * 100 || null;
};

/**
 * get the maximum value of the series specified by `alias`
 * @param {string} alias of the series, for which value is calculated
 */
exports.IndexMax = function (alias) {
    var currentValue = value(alias);
    var indexValue;

    indexValue = getMaximumValue(alias);
    return currentValue / indexValue * 100 || null;
};

