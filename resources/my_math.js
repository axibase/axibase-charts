/*
 This function multiplies values in the original series, identified by alias, by a constant numeric value.
*/
exports.multiplyBy = function (alias, num) {
  // multiply current value in the referenced series by 'num'
  var result = value(alias) * num;
  // return the product to the calling function
  return result;
};

