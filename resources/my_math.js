/*
 This function multiple all values in the original series, identified by alias, by a constant numeric value.
*/
exports.multiplyBy = function (alias, num) {
  // multiple current value from the referenced series by 'num'
  var result = value(alias) * num;
  // return the product to the outer function
  return result;
};
