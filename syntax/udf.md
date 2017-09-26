# User Defined Functions

## Overview

This document describes how to develop custom time series functions and then apply them in Axibase chart configurations.

## Importing Functions

Custom functions are loaded with the `import` keyword, followed by a package name and url to the JavaScript file containing  function definitions. 

```
import package_name = url
```

Example:

```
# load functions from the current server
import fred = /portal/resource/udf_fred.js
```

The package name can be anything as its purpose is to avoid collisions between similarly named functions loaded from different files. Multiple function files can be loaded by assiging different package names to each one. 

```
import fred_base = /portal/resources/udf_fred_v.1.js
import fred_advanced = /portal/resources/udf_fred_v.2.js
```

Functions can be loaded from a local server or remote server.

```
# load functions from a remote server
import fred = https://raw.githubusercontent.com/axibase/charts/master/resources/fred.js
```

> Note that configurations loaded over the **http** protocol cannot load functions from **https** links.

If the `url` parameter is relative, the function is loaded from `/portal/resource/scripts/{file_name}` path on the current host.

[Example](https://apps.axibase.com/chartlab/d220468d/19)

## Usage

The imported functions can be referenced in `value` expressions by specifying the functions full name containing the package name, the function name, and its arguments.

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

Server restart is **not** required for new/updated function files to be accessible.

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
 This function multiples all values in the original series, identified with the alias parameter, by a constant numeric value.
*/
exports.multiplyBy = function (alias, num) {
  // multiply current value from the referenced series by number 'num'
  var result = value(alias) * num;
  // return the product of the outer function
  return result;
};
```

The function's definition must start with `exports.` qualifier and followed by a JavaScript [function body](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions). 

Notice that each function we define must return a value, which is why after using a simple multiplication formula to calculate the product of two numbers, we're returning the computed value stored as the `result` variable back to the outer function that called our function with these arguments.

Create a file `my_math.js` and store this function definition in the file.

### Step 2. Deploy the JavaScript File to ATSD Server

Log in to ATSD server shell and copy the `my_math.js` file to the `/opt/atsd/atsd/conf/portal/scripts` directory onto the ATSD server.

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




