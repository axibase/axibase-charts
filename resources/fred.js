/**
 * Calculate the difference between the current value and the historical value at the specified `offset` from current time
 * @param {string} series alias
 * @param {string} time offset, specified using the endtime syntax, for example '3 day'
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
 * Calculate the difference between the current value and the historical value 1 month ago
 * @param {string} series alias
 */
exports.MonthlyChange = function (alias) {
    return ChangeByOffset(alias, "1 month");
};

/**
 * Calculate the difference between the current value and the historical value 1 year ago
 * @param {string} series alias
 */
exports.ChangeFromYearAgo = function (alias) {
    return ChangeByOffset(alias, "1 year");
};

/**
 * Calculate the percent difference between the current value and the historical value at the specified `offset` from current time
 * @param {string} series alias
 * @param {string} time offset, offset specified using the endtime syntax, for example '2 week'
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
 * Calculate the percent difference between the current value and the historical value 1 month ago
 * @param {string} series alias
 */
exports.MonthlyPercentChange = function (alias) {
    return PercentChangeByOffset(alias, "1 month");
};

/**
 * Calculate the percent difference between the current value and the historical value 1 year ago
 * @param {string} series alias
 */
exports.PercentChangeFromYearAgo = function (alias) {
    return PercentChangeByOffset(alias, "1 year");
};

/**
 * Calculate the compounded annual rate of change
 * @param {string} series alias
 */
exports.CompoundedAnnualRateOfChange = function (alias) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, "1 year");

    if (previousValue != null && previousValue != null) {
        return (Math.pow(( currentValue / previousValue ), 12) - 1) * 100;
    }
};

/**
 * Calculate the continuously compounded rate of change
 * @param {string} series alias
 */
exports.ContinuouslyCompoundedRateOfChange = function (alias) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, "1 year");

    if (previousValue != null && previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100;
    }
};

/**
 * Calculate the continuously compounded annual rate of change
 * @param {string} series alias
 */
exports.ContinuouslyCompoundedAnnualRateOfChange = function (alias) {
    var currentValue = value(alias);
    var previousValue = getValueWithOffset(alias, "1 year");

    if (previousValue != null && previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100 * 12;
    }
};

/**
 * Calculate the natural logarithm (base e) of the current value
 * @param {string} series alias
 */
exports.NaturalLog = function (alias) {
    var currentValue = value(alias);
    return Math.log(currentValue);
};

var savedValues = {};
/**
 * Calculate the ratio of the current value to a historical value recorded at the specific time, multiplied by 100.
 * @param {string} series alias
 * @param {string} timespamp. A date specified in ISO 8601 or local datetime format 'YYYY-MM-DD [HH:mm:ss]'
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
        indexValue = getValueForDate(alias, time);
        aliasSavedValues[time] = indexValue;
    }

    return currentValue / indexValue * 100 || null;
};

/**
 * Calculate the ratio of the current value to its maximum observed value, multiplied by 100.
 * @param {string} series alias
 */
exports.IndexMax = function (alias) {
    var currentValue = value(alias);
    var indexValue;

    indexValue = getMaximumValue(alias);
    return currentValue / indexValue * 100 || null;
};

