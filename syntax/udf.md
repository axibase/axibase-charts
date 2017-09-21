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

### Writing Functions

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
