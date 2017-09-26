# User Defined Functions

## Overview

This document describes how to develop custom time series functions and to apply them in Axibase chart configurations.

## Importing Functions

Custom functions are loaded with the `import` keyword, followed by package name and the url to the JavaScript file containing  function definitions. 

```
import package_name = url
```

Example:

```
# load functions from the current server
import fred = /portal/resource/udf_fred.js
```

The package name can be any name and it's purpose is to avoid collisions between similarly named functions loaded from different files. Multiple function files can be loaded by assiging different package names.

```
import fred_base = /portal/resources/udf_fred_v.1.js
import fred_advanced = /portal/resources/udf_fred_v.2.js
```

The functions can be loaded from the same or a remove server.

```
# load functions from a remote server
import fred = https://raw.githubusercontent.com/axibase/charts/master/resources/fred.js
```

> Note that configurations loaded over the **http** protocol cannot load functions from **https** links.

If the `url` parameter is relative, the function is loaded from `/portal/resource/scripts/{file_name}` path on the current host.

[Example](https://apps.axibase.com/chartlab/19)

## Usage

The imported functions can be referenced in `value` expressions by specifying the functions full name containing the package name, the function name and its arguments.

```
# Calculate monthly change for series with alias 'raw'
value = fred.MonthlyChange('raw')
```

[ChartLab Example](https://apps.axibase.com/chartlab/d220468d/19)

## Examples

The following example functions are implemented in the [fred.js](https://apps-chartlab.axibase.com/portal/resource/scripts/fred.js) file.

| **Function Name** | **Arguments** |
|-------------|----------------------|
| [MonthlyChange](https://apps.axibase.com/chartlab/d220468d/5/) | alias |
| [ChangeFromYearAgo](https://apps.axibase.com/chartlab/d220468d/6/) | alias |
| [ChangeByOffset](https://apps.axibase.com/chartlab/d220468d/7/) | alias, [interval](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |
| [MonthlyPercentChange](https://apps.axibase.com/chartlab/d220468d/8/) | alias |
| [PercentChangeFromYearAgo](https://apps.axibase.com/chartlab/d220468d/9/) | alias |
| [PercentChangeByOffset](https://apps.axibase.com/chartlab/d220468d/10/) | alias, [interval](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |
| [CompoundedAnnualRateOfChange](https://apps.axibase.com/chartlab/d220468d/11/) | alias |
| [ContinuouslyCompoundedRateOfChange](https://apps.axibase.com/chartlab/d220468d/12/) | alias |
| [NaturalLog](https://apps.axibase.com/chartlab/d220468d/13/) |  alias |
| [IndexMax](https://apps.axibase.com/chartlab/d220468d/14/) | alias |
| [Index](https://apps.axibase.com/chartlab/d220468d/15/) | alias, [time](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |

[Summary Example](https://apps.axibase.com/chartlab/d220468d/3)

## Deploying Function Files

The following directory is used to store user-defined function files on the ATSD server:

```
/opt/atsd/atsd/conf/portal/scripts
```

Copy the JavaScript file containing the function definitions to the functions directory. Create the directory if necessary.
The JavaScript file will be accessible in chart configurations by its file name:

```
import fred = fred_v1.js
```

Server restart is **not** required for the new/updated function files to be accessible.

## Writing Functions

The function declaration must start with `exports.` followed by a valid function name. Function names are case-sensitive.

The function can have any number of arguments however the first argument must be the alias of the series to which the built-in functions and formulas will be applied.

The current value can be accessed with `value(alias)` method.

```javascript
exports.NaturalLog = function (alias) {
    var currentValue = value(alias);
    return Math.log(currentValue);
};
```

The function must return a numeric value or null.

## Example

This example will illustrate how one can develop and deploy a simple user-defined function. For the purpose of this exercise, we will create a function that multiplies original values by the specified constant value.

### Step 1. Create JavaScript File

Let's call the new function `multiplyBy`. The function will accept series alias as the first argument and a numeric constant as the second argument.

```javascript
/*
 This function multiple all values in the original series, identified by alias, by a constant numeric value.
*/
exports.multiplyBy = function (alias, num) {
  // multiple current value from the referenced series by 'num'
  var result = value(alias) * num;
  // return the product to the outer function
  return result;
};
```

The function's definition must start with `exports.` qualifier and followed by a JavaScript [function body](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). 

Notice that each function we define must return a value which is why after using a simple multiplication formula to calculate the product of two numbers, we're returning the computed value stored in `result` variable back to the outer function that called our function with these arguments.

Create a file `my_math.js` and store this function definition in the file.

### Step 2. Deploy the JavaScript File to ATSD Server

Login into ATSD server shell and copy the `my_math.js` file to the `/opt/atsd/atsd/conf/portal/scripts` directory on the ATSD server.

Verify that the file is accessible at the following url: `http://atsd_hostname:8443/portal/resource/scripts/my_math.js`.

### Step 3. Import Functions

Open **Admin>Portals** page and create a new portal. 

Enter the following configuration text. Replace `cpu_busy` and `nurswgvml007` with metric and entity present in your ATSD instance.

```ls
[configuration]
  height-units = 2
  width-units = 2
  import mm = my_math.js

[group]
  [widget]
    type = chart
    timespan = 1 hour
    [series]
      metric = cpu_busy
      entity = nurswgvml007
      alias = s1
    [series]
      value = mm.multiplyBy('s1', 2)
```

Save the file. View the portal to check results.

[Chartlab Example](https://apps.axibase.com/chartlab/bc36b341)

## Functions Available in the Package

### Value-Expression Functions

In the functions file you can use [all functions, which can be used in value-expressions](./value_functions.md).

#### Examples

Below are varians of functions you can write with value-expression functions.
All functions from the examples can be found in [my_math.js file](../resources/my_math.js).

##### Calculate the range between maximum and minimum in each period, using `max()` and `min()` functions

[Chartlab Example](https://apps.axibase.com/chartlab/8f8a0463)

This example shows, how `max()` and `min()` value-expression functions can be used.
Both functions calculate the aggregated value, so the same value is returned for the whole period.

```javascript
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
```

The above function can be used as follows:

```ls
[series]
  value = mm.rangeAtPeriod("s1", "5 minute")
```

##### Calculate the difference between each value of the period and the mean.

[Chartlab Example](https://apps.axibase.com/chartlab/8f8a0463/3/)

This example shows, how `avg()` and `value()` value-expression function can be used.
The `value()` function returns the current value of the series, identified by alias.
While the `avg()` calculates the aggregated value, so it returns the same value during the period.

```javascript
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
```

The above function can be used as follows:

```ls
[series]
  value = mm.distanceAtperiod("s1", "5 minute")
```

##### Normalize each value of the period by the sum of all values in the period.

[Chartlab Example](https://apps.axibase.com/chartlab/8f8a0463/4/)

This example shows, how `sum()` and `value()` value-expression function can be used.
The `value()` function returns the current value of the series, identified by alias.
While the `sum()` calculates the aggregated value, so it returns the same value during the period.


```javascript
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

```

The above function can be used as follows:

```ls
[series]
  value = mm.normalizeAtperiod("s1", "5 minute")
```


### Support Functions

This functions are available only in the user defined functions file.

#### getValueWithOffset()

##### Description

Get the value of the series, identified by `alias`, for the `timestamp`, which is calculated as `current_time - offset`.
(`current_time` is the time of currently processed point)
If there is no point with such `timestamp`, the value will be linearly interpolated.
If `timestamp` is less than the minimum timestamp or greater than the maximum timestamp in the series, then function returns `null`.

##### Syntax

```javascript
getValueWithOffset(alias, offset)
```

##### Return Value

`number|null` - value of the point with `offset` from current

##### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| alias | required | string | alias of the series, from which the value should be retrieved |
| offset | required | string | offset, with which the previous value is retrieved [(syntax)](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |


##### Example

[ChartlabExample](https://apps.axibase.com/chartlab/8f8a0463/6/)

`getValueWithOffset()` can be used to compute the change between current points and points in the past with constant offset.
The function below computes the daily change - difference between the recent value and a value day ago.

```javascript
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
```

The function can be used as follows:

```ls
value = mm.dailyChange('s1', '1 day')
```


#### getValueAtPoint()

##### Description

Get the value of the series, identified by `alias`, in point with `time`.
If there is no point with such `time`, the value will be linearly interpolated.
If `time` is less than the minimum timestamp or greater than the maximum timestamp in the series, then function returns `null`.

##### Syntax

```javascript
getValueAtPoint(alias, time)
```

##### Return Value

`number|null` - value of the point with `time`

##### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| alias | required | string | alias of the series, from which the value should be retrieved |
| time | required | string | time, for which value should be retrieved [(syntax)](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |


##### Example

[Chartlab Example](https://apps.axibase.com/chartlab/8f8a0463/7/)

`getValueAtPoint()` can be used to compare the recent value with the value for some time or modify the recent value, using the constant value.
The function below computes the recent value as the percentage of the value of the specified time.

```javascript
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
```

The function can be used as follows:

```ls
value = mm.percentageOfBaseDate('s1', "2016-05-05")
```




#### getMaximumValue()

##### Description

Get the maximum value of the series, identified by `alias`.


##### Syntax

```javascript
getMaximumValue(alias)
```


##### Return Value

`number` - maximum value in the series

##### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| alias | required | string | alias of the series, from which the value should be retrieved |


##### Example

[Chartlab Example](https://apps.axibase.com/chartlab/8f8a0463/8/)

`getMaximumValue()` can be used to compare the recent value with the maximum value or modify the recent value, using the maximum value.
The function below computes the recent value as the percentage of maximum value.

```javascript
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
```

The function can be used as follows:

```ls
value = mm.percentageOfMax('s1')
```
