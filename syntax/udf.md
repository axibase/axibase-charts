# User Defined Functions

## Overview

This document describes how to define custom time series functions and apply them in chart configurations.

## Window Functions

Window functions can be used to perform scalar calculations which do not require access to the series object.

Define a custom JavaScript function in the `window` object using the `script` / `endscript` section in the configuration text.

```ls
script
  window.checkRange = function (val) {
     if (val < 0) {
       return 0;
     }
     return false;
  };
endscript
```

The custom window function can be accessed in any field that supports functions by referencing the function by name, for example, the `value` field or the `format` field.

```ls
value = return checkRange(value);
```

## Function Libraries

A collection of custom functions can be loaded into the configuration with the `import` keyword, followed by package name and the URL to the JavaScript file containing function definitions.

```ls
import package_name = url
```

Example:

```ls
import fred = /portal/resource/udf_fred.js
```

Multiple function files can be loaded by assigning different package names to each one.

```ls
import fred_base = /portal/resources/udf_fred_v.1.js
import fred_advanced = /portal/resources/udf_fred_v.2.js
```

The package name can be anything and its purpose is to avoid collisions between similarly named functions loaded from different files.

The functions can be loaded from a local server or remote server.

```ls
# load functions from a remote server
import fred = https://raw.githubusercontent.com/axibase/charts/master/resources/fred.js
```

> Note that configurations loaded over the **http** protocol cannot load functions from **https** URLs.

If the `url` path is relative, the function is loaded from `/portal/resource/scripts/{file_name}` path on the current host.

[Example](https://apps.axibase.com/chartlab/d220468d/19)

## Usage

The imported functions can be referenced in `value` expressions by specifying the package name, the function name, and the function's arguments.

```ls
# Calculate monthly change for series with alias 'raw'
value = fred.MonthlyChange('raw')
```

[ChartLab Example](https://apps.axibase.com/chartlab/d220468d/19)

## Examples

The following sample functions are implemented in the [fred.js](https://apps-chartlab.axibase.com/portal/resource/scripts/fred.js) file.

| **Function Name** | **Arguments** |
|-------------|----------------------|
| [MonthlyChange](https://apps.axibase.com/chartlab/d220468d/22/) | alias |
| [ChangeFromYearAgo](https://apps.axibase.com/chartlab/d220468d/23/) | alias |
| [ChangeByOffset](https://apps.axibase.com/chartlab/d220468d/27/) | alias, [interval](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |
| [MonthlyPercentChange](https://apps.axibase.com/chartlab/d220468d/25/) | alias |
| [PercentChangeFromYearAgo](https://apps.axibase.com/chartlab/d220468d/26/) | alias |
| [PercentChangeByOffset](https://apps.axibase.com/chartlab/d220468d/28/) | alias, [interval](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |
| [CompoundedAnnualRateOfChange](https://apps.axibase.com/chartlab/d220468d/29/) | alias |
| [ContinuouslyCompoundedRateOfChange](https://apps.axibase.com/chartlab/d220468d/30/) | alias |
| [NaturalLog](https://apps.axibase.com/chartlab/d220468d/31/) |  alias |
| [IndexMax](https://apps.axibase.com/chartlab/d220468d/32/) | alias |
| [Index](https://apps.axibase.com/chartlab/d220468d/33/) | alias, [time](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |

[Summary Example](https://apps.axibase.com/chartlab/d220468d/34)

## Deploying Function Files

On the ATSD server, the function files are stored in the following directory:

```txt
/opt/atsd/atsd/conf/portal/scripts
```

The JavaScript files placed into this directory are accessible by file name:

```ls
import fred = fred_v1.js
```

Server restart is **not** required for new/updated function files to be accessible.

## Writing Functions

The function declaration must start with `exports.` followed by a valid function name. Function names are case-sensitive.

The function can have any number of arguments however the first argument must be the alias of the series to which the formulas will be applied.

The current value can be accessed with `value(alias)` method.

```javascript
exports.NaturalLog = function (alias) {
    var currentValue = value(alias);
    return Math.log(currentValue);
};
```

The function's definition must start with the `exports.` qualifier and implemented as a JavaScript [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions).

The function must return a numeric value or `null` if the result cannot be computed.

```javascript
exports.devideBy = function (alias, num) {
  if (num == 0) {
    //if num is zero, return null
    return null;
  }
  var result = value(alias) / num;
  return result;
};
```

The function body can reference any JavaScript function such as [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [built-in functions, supported in the value setting](value_functions.md), [utility functions](#utility-functions) listed below.

```javascript
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
```

Additional function examples can be found in [examples.js file](../resources/examples.js).

ChartLab examples:

* [getValueRange](https://apps.axibase.com/chartlab/2595a144/1/)
* [getDifferenceFromAverage](https://apps.axibase.com/chartlab/2595a144/2/)
* [getWeight](https://apps.axibase.com/chartlab/2595a144/3/)

## Example

This example illustrates how one can develop and deploy a basic user-defined function. For the purpose of this exercise, we will create a function that multiplies original values by the specified constant value.

### Step 1. Create JavaScript File

Let's call the new function `multiplyBy`. The function will accept series alias as the first argument and a numeric constant as the second argument.

Create a file `my_math.js` and store the below function definition in the file.

```javascript
/*
 This function multiples all values in the original series, identified with the alias parameter, by a constant numeric value.
*/
exports.multiplyBy = function (alias, num) {
  // multiply current value from the referenced series by number 'num'
  var result = value(alias) * num;
  // return the product to the calling function
  return result;
};
```

### Step 2. Copy JavaScript File into ATSD

Copy the `my_math.js` file to the `/opt/atsd/atsd/conf/portal/scripts` directory in the ATSD server.

Verify that the file is accessible at the following url: `http://atsd_hostname:8443/portal/resource/scripts/my_math.js`.

### Step 3. Import Functions

Open the **Portals > Configure** page in the top menu and create a new portal.

Enter the following configuration text. Replace `cpu_busy` and `nurswgvml007` with a metric and an entity present in your ATSD instance.

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

Save the portal. View the portal to check results.

[ChartLab Example](https://apps.axibase.com/chartlab/bc36b341)

## Utility Functions

### getValueWithOffset()

Get the value of the series, identified by `alias`, for the `timestamp`, which is calculated as `current_time - offset`, where  `current_time` is the time of currently processed sample. If there is no sample with such `timestamp`, the value is linearly interpolated from the neighboring samples.

[ChartLab Example](https://apps.axibase.com/chartlab/2595a144/4/)

* Syntax

```javascript
getValueWithOffset(alias, offset)
```

| **Argument** | **Required** | **Type** | **Description** |
|------|-----------|------|-------------|
| alias | yes | string | Alias of the series, from which the value should be retrieved. |
| offset | yes | string | Offset, with which the previous value is retrieved, specified as interval, for example '1 day'. |

### getValueForDate()

Get the value of the series, identified by `alias`, for the specified `datetime`.
If there is no sample recorded for the specified `datetime`, the value is linearly interpolated from the neighboring samples.

[ChartLab Example](https://apps.axibase.com/chartlab/2595a144/5/)

* Syntax

```javascript
getValueForDate(alias, datetime)
```

| **Argument** | **Required** | **Type** | **Description** |
|------|-----------|------|-------------|
| alias | yes | string | Alias of the series, from which the value should be retrieved. |
| datetime | yes | string | Time, for which value should be retrieved. Can be specified as local time, ISO time, or using an [end_time](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) expression. |

### getMaximumValue()

Get the maximum value of the series, identified by `alias`, for the loaded timespan.

[ChartLab Example](https://apps.axibase.com/chartlab/2595a144/6/)

* Syntax

```javascript
getMaximumValue(alias)
```

| **Argument** | **Required** | **Type** | **Description** |
|------|-----------|------|-------------|
| alias | yes | string | Alias of the series, from which the value should be retrieved. |