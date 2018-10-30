/**
 * Calculate the difference between the current value and the historical value at the specified `offset` from current time
 * @param {string} alias series alias
 * @param {string} offset time offset, specified using the endtime syntax, for example '3 day'
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.ChangeByOffset = ChangeByOffset;
function ChangeByOffset(alias, offset, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    var previousValue = getValueWithOffset(alias, offset, date);

    if (previousValue != null && currentValue != null) {
        return currentValue - previousValue;
    }
};

/**
 * Calculate the difference between the current value and the historical value 1 month ago
 * @param {string} alias series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.MonthlyChange = function (alias, date) {
    return ChangeByOffset(alias, "1 month", date);
};

/**
 * Calculate the difference between the current value and the historical value 1 year ago
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.ChangeFromYearAgo = function (alias, date) {
    return ChangeByOffset(alias, "1 year", date);
};

/**
 * Calculate the percent difference between the current value and the historical value at the specified `offset` from current time
 * @param {string} alias Series alias
 * @param {string} offset Time offset, specified using the endtime syntax, for example '2 week'
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.PercentChangeByOffset = PercentChangeByOffset;
function PercentChangeByOffset(alias, offset, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    var previousValue = getValueWithOffset(alias, offset, date);

    if (previousValue != null && currentValue != null) {
        return (currentValue / previousValue - 1) * 100;
    }
};

/**
 * Calculate the percent difference between the current value and the historical value 1 month ago
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.MonthlyPercentChange = function (alias, date) {
    return PercentChangeByOffset(alias, "1 month", date);
};

/**
 * Calculate the percent difference between the current value and the historical value 1 year ago
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.PercentChangeFromYearAgo = function (alias, date) {
    return PercentChangeByOffset(alias, "1 year", date);
};

/**
 * Calculate the compounded annual rate of change
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.CompoundedAnnualRateOfChange = function (alias, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    var previousValue = getValueWithOffset(alias, "1 year", date);

    if (previousValue != null && previousValue != null) {
        return (Math.pow(( currentValue / previousValue ), 12) - 1) * 100;
    }
};

/**
 * Calculate the continuously compounded rate of change
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.ContinuouslyCompoundedRateOfChange = function (alias, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    var previousValue = getValueWithOffset(alias, "1 year", date);

    if (previousValue != null && previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100;
    }
};

/**
 * Calculate the continuously compounded annual rate of change
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.ContinuouslyCompoundedAnnualRateOfChange = function (alias, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    var previousValue = getValueWithOffset(alias, "1 year", date);

    if (previousValue != null && previousValue != null) {
        return ( Math.log(currentValue) - Math.log(previousValue) ) * 100 * 12;
    }
};

/**
 * Calculate the natural logarithm (base e) of the current value
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.NaturalLog = function (alias, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    return Math.log(currentValue);
};

var savedValues = {};
/**
 * Calculate the ratio of the current value to a historical value recorded at the specific time, multiplied by 100.
 * @param {string} alias Series alias
 * @param {string} time A date specified in ISO 8601 or local datetime format 'YYYY-MM-DD [HH:mm:ss]'
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.Index = function (alias, time, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
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
 * @param {string} alias Series alias
 * @param {string | Date | number} [date] Optional datetime for which value is calculated
 */
exports.IndexMax = function (alias, date) {
    var currentValue = date == null ? value(alias) : getValueForDate(alias, date);
    var indexValue;

    indexValue = getMaximumValue(alias);
    return currentValue / indexValue * 100 || null;
};
