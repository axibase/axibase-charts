/*
 This function multiple all values in the original series, identified by alias, by a constant numeric value.
*/
exports.multiplyBy = function (alias, num) {
  // multiple current value from the referenced series by 'num'
  var result = value(alias) * num;
  // return the product to the outer function
  return result;
};

/*
 This function gets the difference between maximum and minimum values at the specified period in the original series, identified by alias.
*/
exports.rangeAtPeriod = function (alias, period) {
  // get the maximum at the current period
  var maxAtPeriod = max(alias, period);
  // get the minimum at the current period
  var minAtPeriod = min(alias, period);
  //get the difference between minumum and maximum
  var result = maxAtPeriod - minAtPeriod;
  // return the difference to the other function
  return result;
};

/*
 This function gets the distance of each value from the mean of the specified period in the original series, identified by alias.
*/
exports.distanceAtperiod = function (alias, period) {
  // get the mean at the current period
  var meanAtPeriod = avg(alias, period);
  // get the distance of current value and the mean
  var result = value(alias) - meanAtPeriod;
  // return the distance to the other function
  return result;
};

/*
 This function normalize each value, so that sum of values equals "1", in the original series, identified by alias.
*/
exports.normalizeAtperiod = function (alias, period) {
  // get the sum of all values in the current period
  var sumAtperiod = sum(alias, period);
  // normalize current value by the sum
  var result = value(alias) / sumAtperiod;
  // return the normalized value to the other function
  return result;
};

/*
  This function gets the difference between current value and the value in the point a day ago in the original series, identified by alias.
*/
exports.dailyChange = function (alias) {
  // get the current value
  var current = value(alias);
  // get value in the point a day ago
  var offset = getValueWithOffset(alias, "1 day");

  // check that values are not null, so neither will be converted to zero
  if (current != null && offset != null) {
    // calculate the absolute difference between values
    var result = Math.abs(current - offset);
    // return the difference to the other function
    return result;
  }
};

/*
  This function gets current value as the percentage of value at base date in the original series, identified by alias.
*/
exports.percentageOfBaseDate = function (alias, date) {
  // get the value at base date
  var baseValue = getValueAtPoint(alias, date);
  // calculate the percentage of base value
  var result = value(alias) / baseValue * 100;
  // return the percentage to the other function
  return result;
};

/*
  This function gets current value as the percentage of maximum value in the original series, identified by alias.
*/
exports.percentageOfMax = function (alias) {
  // get the maximum value in the whole series
  var maximum = getMaximumValue(alias);
  // calculate the percentage of maximum value
  var result = value(alias) / maximum * 100;
  // return the percentage to the other function
  return result;
};


