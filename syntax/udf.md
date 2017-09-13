# <a name=header></a> User Defined Functions

## Overview

This document adersses a way to use `value-expression` functions, defined in external file.

 - [import function](#import_fn)

 - [FRED functions example](#fred_ex)

 - [ChartLab example of FRED functions usage](https://apps.axibase.com/chartlab/d220468d/3)

 - [Example of FRED functions module](../resources/fred.js)

 - [Module requirements](#module_reqs)


## [⇧](#header) <a name = import_fn></a> import function

### Description

Loads a JavaScript module from a defined `url`.
The module should export a Functions Container consrtuctor function in `module.exports` (CommonJS notation).
Then an instance of Functions Container will be available in `value-expression` settings via `name`.


### Syntax

```
import module_name = url
```

### Scope of usage

Can be used in `preprocessor` stage

### Return value

Instance of Functions Container. (available only in `value-expression` setting)

### Arguments Description

#### `url`

`url` is a locator of the JavaScript file, containing the module.
(Note that if you access your portal via `HTTPS` protocol, you can't use `HTTP` in `url`)
If defined `url` is just a file name, then the file is loaded from the current host by path `/portal/resource/scripts`.

### Examples

#### Load module from other domain bu url

[ChartLab Example](https://apps.axibase.com/chartlab/20)

The below setting loads module from `https://github.com/axibase/charts/resources/fred.js`.

```
import fred = https://github.com/axibase/charts/resources/fred.js
```


#### Load module from origin domain by name

[ChartLab Example](https://apps.axibase.com/chartlab/d220468d/19)

The below setting loads module from `/portal/resource/scripts/fred.js`.

```
import fred = fred.js
```

#### Use the loaded functions

[ChartLab Example](https://apps.axibase.com/chartlab/d220468d/19)

Below is the `value-expression` to create a series for the monthly change of the series with alias `raw`.

```
value = fred.MonthlyChange('raw')
```




<!-- module requirements -->


## [⇧](#header) <a name = fred_ex></a> FRED Functions Example

[ChartLab Example](https://apps.axibase.com/chartlab/d220468d/3)

[Here](../resources/fred.js) the module for FRED econometric functions can be found.

The following functions are available in this module:

| Example | Function Name | Arguments |
|-------------|----------------------|-----------------|
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/5/) | MonthlyChange | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/6/) | ChangeFromYearAgo | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/7/) | ChangeByOffset | alias, [interval](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/8/) | MonthlyPercentChange | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/9/) | PercentChangeFromYearAgo | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/10/) | PercentChangeByOffset | alias, [interval](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/11/) | CompoundedAnnualRateOfChange | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/12/) | ContinuouslyCompoundedRateOfChange | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/13/) | NaturalLog | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/14/) | IndexMax | alias |
| [ChartLab](https://apps.axibase.com/chartlab/d220468d/15/) | Index | alias, [time](https://axibase.com/products/axibase-time-series-database/visualization/end-time/) |





<!-- module requirements -->




##  [⇧](#header) <a name = module_reqs></a> Module Requirements

In this section the requirements for module location and content are described.

### Location requirements

The JavaScript file can be accessed by some `url`.
Note, that if you access the portal via `HTTPS` protocol, you can't use `url` with `HTTP` protocol.
If only the `name` of JavaScript file is specified instead of `url`, the module will be loaded from the url `/portal/resource/scripts/{name}`.
In your ATSD instalation you can place the module into the `{ATSD_DIR}/conf/portal/scripts`

### Module export requirements

The module should export the Functions Container constructor via `module.exports`.

For example,

``` javascript
module.exports = FunctionsContainer;
```

### Constructor requirements

Constructor should get the calculator as argument and should return the object with funcitons.

### Functions requirements

Function can get any arguments, but commonly it should get an `alias` of the series, for which the function should be applied.
The return value should be a number or null.
If the function will be used as independent (not additional for some `value-expression` variable),
it should use on of the `value-expression` variable inside.