
/*
 This function calculates the difference between the maximum and minimum values within the period in the original series, identified by alias.
*/
exports.getValueRange = function (alias, period) {
  // get the maximum value within the current period
  var maxAtPeriod = max(alias, period);
  // get the minimum value within the current period
  var minAtPeriod = min(alias, period);
  // calculate the difference between maximum and minumum values
  var result = maxAtPeriod - minAtPeriod;
  // return the result to the calling function
  return result;
};

/*
 This function calculates the difference between the current value and the average within the period in the original series, identified by alias.
*/
exports.getDifferenceFromAverage = function (alias, period) {
  // calculate the average value for the current period
  var periodAverage = avg(alias, period);
  // calculate the difference between current value and the average
  var result = value(alias) - periodAverage;
  // return the result to the calling function
  return result;
};

/*
 This function calculates the weight if the current value within the sum of all values in the period for the original series, identified by alias.
*/
exports.getWeight = function (alias, period) {
  // calculate the sum total of all values in the current period
  var periodSum = sum(alias, period);
  // calculate weight of the current value
  var result = (periodSum == 0) ? 0 : value(alias) / periodSum;
  // return the result to the calling function
  return result;
};

/*
  This function calculates the difference between the current value and a value with offset in the original series, identified by alias.
*/
exports.getOffsetChange = function (alias, offset) {
  // get the current value
  var current = value(alias);
  // get the value with offset. offset can be positive (past), or negative (future)
  var offsetValue = getValueWithOffset(alias, offset);
  var result = null;
  // check that values are not null
  if (current != null && offsetValue != null) {
    // calculate the absolute difference between values
    result = Math.abs(current - offsetValue);
  }
  // return the result to the calling function
  return result; 
};

/*
  This function calculates the percentage difference between the current value and a value on the specified date in the original series, identified by alias.
*/
exports.getPercentChangeFromBaseDate = function (alias, date) {  // get the current value
  // get the current value
  var current = value(alias);
  // get the value at the specified base date
  var baseValue = getValueAtPoint(alias, date);
  // calculate the percentage change
  var result = null;
  // check that values are not null
  if (current != null && baseValue != null) {
     result = (baseValue == 0) ? 0  : current / baseValue * 100;
  }
  // return the result to the calling function
  return result; 
};

/*
  This function calculates the percentage difference between the current value and the maximum value in the original series, identified by alias.
*/
exports.getPercentageOfMax = function (alias) {
  // get the current value
  var current = value(alias);
  // get the maximum value in the whole series within the loaded timespan
  var maximum = getMaximumValue(alias);
  // calculate the percentage change
  var result = null;
  // check that values are not null
  if (current != null && maximum != null) {
     result = (maximum == 0) ? 0  : current / maximum * 100;
  }
  // return the result to the calling function
  return result;  
};


