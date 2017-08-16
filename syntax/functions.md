# <a name=header></a> Functions
This page contains descriptions of recently implemented functions.

## Overview


| Name | Arguments | Scope | API Request | Description |
|------|-----------|-------|-------------|-------------|
| [getTags()](#getTags) | metric <br> tagName <br> minInsertDate <br> maxInsertDate <br> url <br> queryParams | preprocessor | [/api/v1/metrics/{metric}/series](https://github.com/axibase/atsd/blob/master/api/meta/metric/series.md) | get series of `metric` filtered by `entity`, `minInsertDate` and `maxInsertDate` and return sorted array of unique values of tag with name `tagName` |
| [getSeries()](#getSeries)| metric <br> entity <br> minInsertDate <br> maxInsertDate <br> url <br> queryParams | preprocessor |  [/api/v1/metrics/{metric}/series](https://github.com/axibase/atsd/blob/master/api/meta/metric/series.md)  | return series of metric filtered by `entity`, `minInsertDate` and `maxInsertDate` |
| [getMetrics()](#getMetrics) | entity <br> expression <br> tags <br> url <br> queryParams | preprocessor | [/api/v1/entities/{entity}/metrics](https://github.com/axibase/atsd/blob/master/api/meta/entity/metrics.md) | return names of metrics collected for `entity` filtered by `expression` |
| [getEntities()](#getEntities) | group <br> expression <br> tags <br> url <br> queryParams | preprocessor | [/api/v1/entity-groups/{group}/entities](https://github.com/axibase/atsd/blob/master/api/meta/entity-group/get-entities.md) | return names of entities contained in entity-group filtered by `expression` |
| [range()](#range) | start <br> end <br> step <br> format | preprocessor | does not use network | generate array of numbers from `start` to `end` with `step` formatted with [format](https://axibase.com/products/axibase-time-series-database/visualization/widgets/configuring-the-widgets/format-settings/) |
| [csv name = ...](#csv_inline) |  | preprocessor | does not use network | parse CSV-like text into array of objects |
| [csv name from ...](#csv_from)| url | preprocessor |  `url`  | load CSV file located at the `url` and parse it into array of objects |
| [csv.values()](#csv_values) | column_name | preprocessor | does not use network | get sorted unique values of the `column_name` column |
| [list.escape()](#list_escape) |  | preprocessor | does not use network | join array by comma, escaping commas in every lement |
| global.escape() | string | global | does not use network | escape special characters in `string` with `\\` |
| requestMetricsSeriesValues() | fieldPath <br> callback <br> metric <br> unique <br>  params | dropdown options |  |
| requestEntitiesMetricsValues() | fieldPath <br> callback <br> entity <br> unique <br> params | dropdown |  |
| requestPropertiesValues() | fieldPath <br> callback <br> entity <br> propertyType <br> unique <br> postBody | dropdown |  |
| requestMetricsSeriesOptions() | valueFieldPath <br> textFieldPath <br> callback <br> metric <br> unique <br> params | dropdown |  |
| requestEntitiesMetricsOptions | valueFieldPath <br> textFieldPath <br> callback <br> entity <br> unique <br> params | dropdown |  |
| requestPropertiesOptions | valueFieldPath <br> textFieldPath <br> callback <br> entity <br> propertyType <br> unique <br> postBody |  |
| previous() | alias <br> offset | value-expression | does not use network |  |
| movavg() | alias <br> offset | value-expression | does not use network |  |
| meta() | alias | value-expression | does not use network |  |
| entityTag() | alias <br> tagName | value-expression | does not use network |  |
| metricTag() | alias <br> tagName | value-expression | does not use network |  |

<!-- ************************************ getTags() ************************************ -->
## [⇧](#header) <a name="getTags"></a> getTags()

### Description
Makes a synchronous request to the `{url}api/v1/metrics/{metric}/series?entity={entity}&minInsertDate={minInsertDate}&maxInsertDate={maxInsertDate}`. Receive series descriptor objects and retrieve unique values of `tagName` tag from each series descriptor. Retrived values are then sorted. This function can be used at the stage of preprocessing in the `var` expression. The returned array has `list.escape()` function, which escapes commas in every element and stringifies array.

[More information about API request](https://github.com/axibase/atsd/blob/master/api/meta/metric/series.md)

### Return value
`Array<string>` - unique sorted values of the specified `tagName` series tag.

### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| metric | required | string | `metric` path parameter |
| tagName | required | string | tag which values will be retrieved from series descriptors |
| entity | optional | string | `entity` query parameter |
| minInsertDate | optional | string | `minInsertDate` query parameter ([syntax](https://github.com/axibase/atsd/blob/master/end-time-syntax.md)) |
| maxInsertDate | optional | string | `maxInsertDate` query parameter ([syntax](https://github.com/axibase/atsd/blob/master/end-time-syntax.md)) |
| url | optional | string | protocol, host and path to which `/api/v1` path will be added |
| queryParams | optional | object | object with parameter names as keys and it's values as values, which will be transformed to query parameters string |

### Examples

#### Get values of `mount_point` tag in series for metric `disk_used` and entity `nurswgvml007` received today.

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa)

##### Usage

``` json
var mount_points = getTags("disk_used", "mount_point", "nurswgvml006", "current_day")
```

##### Sent request

```
/api/v1/metrics/disk_used/series?tag=mount_point&entity=nurswgvml006&minInsertDate=current_day
```

##### Result

 ``` json
 ["/", "/media/datadrive", "/mnt/u113452"]
 ```

#### <a name=requestParametersArg></a> Get values of `mount_point` tag in series for metric `disk_used` and entity `nurswgvml007` and send server-specific query parameter `cache` ignoring other parameters

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/2)

##### Usage

``` json
var mount_points = getTags("disk_used", "mount_point", "nurswgvml007", null, null, null, {cache: true})
```

##### Sent Request

```
/api/v1/metrics/disk_used/series?cache=true&tag=mount_point&entity=nurswgvml007
```

##### Result

``` json
["/", "/media/datadrive", "/mnt/u113452"]
```

<!-- ************************************ getSeries() ************************************ -->

## [⇧](#header) <a name="getSeries"></a> getSeries()

### Description
Makes a synchronous request to the `{url}api/v1/metrics/{metric}/series?entity={entity}&minInsertDate={minInsertDate}&maxInsertDate={maxInsertDate}`. Receive series descriptor objects and return it. This function can be used at the stage of preprocessing in the `var` expression.

[More information about API request](https://github.com/axibase/atsd/blob/master/api/meta/metric/series.md)

### Return value
`Array<object>` - received series descriptors.

### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| metric | required | string | `metric` path parameter |
| entity | optional | string | `entity` query parameter |
| minInsertDate | optional | string | `minInsertDate` query parameter ([syntax](https://github.com/axibase/atsd/blob/master/end-time-syntax.md)) |
| maxInsertDate | optional | string | `maxInsertDate` query parameter ([syntax](https://github.com/axibase/atsd/blob/master/end-time-syntax.md)) |
| url | optional | string | protocol, host and path to which `/api/v1` path will be added |
| queryParams | optional | object | object with parameter names as keys and it's values as values, which will be transformed to query parameters string |

### Examples

[Look at the example for `queryParams` argument in the `getTags()` section.](#requestParametersArg)

#### Get series for metric `disk_used` and entity `nurswgvml007`.

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/3)

##### Usage

``` json
var seriesDescriptors = getSeries("disk_used", "nurswgvml007")
```

##### Sent request

```
/api/v1/metrics/disk_used/series?entity=nurswgvml007
```

##### Result

 ``` json
[
    {
        "metric":"disk_used",
        "entity":"nurswgvml007",
        "tags":{
            "file_system":"/dev/mapper/vg_nurswgvml007-lv_root",
            "mount_point":"/"
        },
        "lastInsertDate":"2017-08-15T15:30:25.000Z"
    },
    {
        "metric":"disk_used",
        "entity":"nurswgvml007",
        "tags":{
            "file_system":"10.102.0.2:/home/store/share",
            "mount_point":"/mnt/share"
        },
        "lastInsertDate":"2015-12-25T14:09:49.000Z"
    },
    {
        "metric":"disk_used",
        "entity":"nurswgvml007",
        "tags":{
            "file_system":"//u113452.your-backup.de/backup",
            "mount_point":"/mnt/u113452"
        },
        "lastInsertDate":"2017-06-21T13:26:00.000Z"
    }
]
 ```


<!-- ************************************ getMetrics() ************************************ -->

## [⇧](#header) <a name="getMetrics"></a> getMetrics()

### Description
Makes a synchronous request to the `{url}api/v1/entities/{entity}/metrics?expression={expression}&tags={tags}`. Receive metric descriptor objects and return `name` field. This function can be used at the stage of preprocessing in the `var` expression. The returned array has `list.escape()` function, which escapes commas in every element and stringifies array.

[More information about API request](https://github.com/axibase/atsd/blob/master/api/meta/entity/metrics.md)

### Return value
`Array<string>` - retrieved metrics names.

### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| entity | required | string | `entity` path parameter |
| expression | optional | string | `expression` query parameter ([syntax](https://github.com/axibase/atsd/blob/master/api/meta/expression.md)) |
| tags | optional | string | `tags` request parameter |
| url | optional | string | protocol, host and path to which `/api/v1` path will be added |
| queryParams | optional | object | object with parameter names as keys and it's values as values, which will be transformed to query parameters string |

### Examples

[Look at the example for `queryParams` argument in the `getTags()` section.](#requestParametersArg)

#### Get metrics for entity `nurswgvml007` which contain "cpu" and "user" substrings.

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/4)

##### Usage

``` json
var metrics = getMetrics("nurswgvml007", "name LIKE '*cpu*user*'")
```

##### Sent request

```
/api/v1/entities/nurswgvml007/metrics?expression=name%20LIKE%20%27*cpu*user*%27
```

##### Result

 ``` json
["cpu_user","nmon.cpu.user%","nmon.cpu_total.user%"]
 ```


<!-- ************************************ getEntities() ************************************ -->

## [⇧](#header) <a name="getEntities"></a> getEntities()

### Description
Makes a synchronous request to the `{url}api/v1/entity-groups/{group}/entities?expression={expression}&tags={tags}`. Receive entity descriptor objects and return `name` field. This function can be used at the stage of preprocessing in the `var` expression. The returned array has `list.escape()` function, which escapes commas in every element and stringifies array.

[More information about API request](https://github.com/axibase/atsd/blob/master/api/meta/entity-group/get-entities.md)

### Return value
`Array<string>` - retrieved entities names.

### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| group | required | string | `group` path parameter |
| expression | optional | string | `expression` query parameter ([syntax](https://github.com/axibase/atsd/blob/master/api/meta/expression.md)) |
| tags | optional | string | `tags` request parameter |
| url | optional | string | protocol, host and path to which `/api/v1` path will be added |
| queryParams | optional | object | object with parameter names as keys and it's values as values, which will be transformed to query parameters string |

### Examples

[Look at the example for `queryParams` argument in the `getTags()` section.](#requestParametersArg)

#### Get entities contained in entity-group `docker-hosts` which names are started with `nur` substring.

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/5/)

##### Usage

``` json
var entities = getEntities("docker-hosts", "name LIKE 'nur*'")
```

##### Sent request

```
/api/v1/entity-groups/docker-hosts/entities?expression=name%20LIKE%20%27nur*%27
```

##### Result

 ``` json
["nurswghbs001"]
 ```


<!-- ************************************ range() ************************************ -->

## [⇧](#header) <a name="range"></a> range()

### Description
Generate array of numbers from `start` to `end` with `step` formatted with `format`. The default step equals 1. If start > end then numbers are generated in descending order.

### Return value
`Array<number|string>` - generated (optionally formatted) numbers.

### Arguments

| Name | Necessity | Type | Description |
|------|-----------|------|-------------|
| start | required | number | first number in list |
| end | required | number | last number is list |
| step | optional | number | offset betwen adjacent numbers |
| format | optional | string | formatter name [available formats](https://axibase.com/products/axibase-time-series-database/visualization/widgets/configuring-the-widgets/format-settings) |

### Examples

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/6/)

#### Get sequental numbers from 1 to 10

##### Usage

``` json
range(1,10)
```

##### Result

 ``` json
1,2,3,4,5,6,7,8,9,10
 ```

#### Get numbers from 1 to 10 with step 2

##### Usage

``` json
range(1,10,2)
```

##### Result

 ``` json
1,3,5,7,9
 ```

#### Get numbers from 10 to 1 with step 1

##### Usage

``` json
range(10,1)
```

##### Result

 ``` json
10,9,8,7,6,5,4,3,2,1
 ```

#### Get numbers from 10 to 1 with step 2

##### Usage

``` json
range(10,1,2)
```

##### Result

``` json
10,8,6,4,2
```

#### Format sequental numbers from 1 to 10 with percent

##### Usage

``` json
range(1,10,'percent')
```

##### Result

 ``` json
1%,2%,3%,4%,5%,6%,7%,8%,9%,10%
 ```

#### Get numbers from 1 to 10 with step 2 and format with percent

##### Usage

``` json
range(1,10,2,'percent')
```

##### Result

 ``` json
1%,3%,5%,7%,9%
 ```

#### Format sequental numbers from 1 to 10 as minutes

##### Usage

``` json
range(1,10,1,'intervalFormat("%M:%S")(value*1000)')
```

##### Result

 ``` json
00:01,00:02,00:03,00:04,00:05,00:06,00:07,00:08,00:09,00:10
 ```

#### Format sequental numbers from 1 to 12 with padding left zero

##### Usage

``` json
range(1, 12, "d3.format('02d')(value)")
```

##### Result

 ``` json
01,02,03,04,05,06,07,08,09,10,11,12
 ```



<!-- ************************************ csv inline() ************************************ -->

## [⇧](#header) <a name="csv_inline"></a> CSV inline text mode

### Description
Parse CSV-like text placed between `csv` and `endcsv` keywords. Limitation and features that applied:
 - There can be empty lines and spaces.
 - To escape spaces double-quotes(`"`) should be used.
 - Value should not contain double-quotes(`"`).
 - Multi-line orws are not supported.
 - Delimiter is comma (`,`)

Generated array has `.value(column_name)` method to get unique sorted values of some column.

### Syntax

```
csv name = header1, header2 ...
cell11, cell12 ...
cell21, cell22 ...
...
endcsv
```

### Return value
`Array<object>` - Array of rows represented as objects with headers as keys and cells as corresponding values.

### Examples

#### Create array of objects from tabular structure using `csv`

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/8/)

In the following example we write table in CSV-like format. There are two columns: `name` of the country and `value2006` - value in the year 2006. We want to find how much different from 2006 year the current value is. So we write the following csv:

``` csv
  csv countries =
    name, value2006
    Brazil, 13.2
    Croatia, 4.9
    "Micronesia, Federated States of", 100
    Georgia, 48.2
    Tonga, 40.8
    Honduras, 38
    Liechtenstein, 5.9
    "Congo, Dem. Rep. of the (Kinshasa)",44.2
  endcsv

  country = @{countries.values('name').escape()}
```

This CSV will be transformed into the following array:

 ``` json
[
    {
        "name":"Brazil",
        "value2006":"13.2"
    },
    {
        "name":"Croatia",
        "value2006":"4.9"
    },
    {
        "name":"Micronesia, Federated States of",
        "value2006":"100"
    },
    {
        "name":"Georgia",
        "value2006":"48.2"
    },
    {
        "name":"Tonga",
        "value2006":"40.8"
    },
    {
        "name":"Honduras",
        "value2006":"38"
    },
    {
        "name":"Liechtenstein",
        "value2006":"5.9"
    },
    {
        "name":"Congo, Dem. Rep. of the (Kinshasa)",
        "value2006":"44.2"
    }
]
 ```

Then we iterate over created array and set value and entity based on retrieved country `name` and `value2006`.

```
for country in countries
    [series]
      replace-value = value - @{country.value2006}
      [tags]
        country = @{country.name.replace(",", "\\,")}
endfor
```



<!-- ************************************ csv from ************************************ -->

## [⇧](#header) <a name="csv_from"></a> CSV from mode

### Description
Parse CSV file located at the `url`. Limitation and features that applied to the text:
 - There can be empty lines and spaces.
 - To escape spaces double-quotes(`"`) should be used.
 - Value should not contain double-quotes(`"`).
 - Multi-line orws are not supported.
 - Delimiter is comma (`,`)

Generated array has `.value(column_name)` method to get unique sorted values of some column.

### Syntax

```
csv name = from `{url}`
```

### Return value
`Array<object>` - Array of rows represented as objects with headers as keys and cells as corresponding values.

### Examples

#### Create array of objects from CSV file

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/9/)
In the following example we want to find how much different from 2006 year the current value is.

We load CSV from https://raw.githubusercontent.com/axibase/atsd-use-cases/master/USVisaRefusal/Resources/visa-refusal.csv

Here are first rows of the file:

```
country,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016
Brazil,13.2,9.6,5.5,7,5.2,3.8,3.2,3.5,3.2,5.36,16.7
Croatia,4.9,5.1,5.1,5.3,5.3,6.3,4.4,5.9,6.1,5.29,6.78
"Micronesia, Federated States of",100,0,50,100,0,33.3,50,100,80,85.71,25
Georgia,48.2,55.4,46.6,49.7,43.6,40.2,31.8,38.3,48.2,50.58,62.82
Tonga,40.8,45.4,48.7,47.8,42.8,46.5,41.5,42.1,25.4,28.09,31.58
Honduras,38,37.7,33.6,29.2,29.2,27.6,29.8,37,36.8,39.73,42.76
Liechtenstein,5.9,6.7,0,12.5,5.9,0,0,10,11.1,0,0
```

Below is the setting to load and parse this file:

```
csv rows from https://raw.githubusercontent.com/axibase/atsd-use-cases/master/USVisaRefusal/Resources/visa-refusal.csv
```

Parsed array will be the following:

 ``` json
[
    {
        "2006":"13.2",
        "2007":"9.6",
        "2008":"5.5",
        "2009":"7",
        "2010":"5.2",
        "2011":"3.8",
        "2012":"3.2",
        "2013":"3.5",
        "2014":"3.2",
        "2015":"5.36",
        "2016":"16.7",
        "country":"Brazil"
    },
    {
        "2006":"4.9",
        "2007":"5.1",
        "2008":"5.1",
        "2009":"5.3",
        "2010":"5.3",
        "2011":"6.3",
        "2012":"4.4",
        "2013":"5.9",
        "2014":"6.1",
        "2015":"5.29",
        "2016":"6.78",
        "country":"Croatia"
        ...
    },
 ```

Then we iterate over created array and set value and entity based on retrieved country `name` and value or year `2006`.

``` json
  for row in rows
    [series]
      replace-value = value - @{row[2006]}
    [tags]
      country = @{row.country.replace(",", "\\,")}
  endfor
endfor
```


<!-- ************************************ csv.values() ************************************ -->

## [⇧](#header) <a name="csv_values"></a> csv.values()

### Description
Arrays generated from `csv` have `.values()` method. This function returns sorted array of unique values in the column `column_name`.

Generated array has `.escape()` method which escapes commas in each element and joins them by comma.

### Syntax

```
csv_name.values(column_name)
```

### Return value
`Array<string>` - Array of unique values in the column `column_name`.

### Examples

#### Get escaped values of csv column

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/10/)
In this example we want to get a list of escaped country names.

We write the following csv:

``` csv
  csv countries =
    name, value2006
    Brazil, 13.2
    Croatia, 4.9
    "Micronesia, Federated States of", 100
    Georgia, 48.2
    Tonga, 40.8
    Honduras, 38
    Liechtenstein, 5.9
    "Congo, Dem. Rep. of the (Kinshasa)",44.2
  endcsv

  country = @{countries.values('name').escape()}
```

This CSV will be transformed into the following array:

 ``` json
[
    {
        "name":"Brazil",
        "value2006":"13.2"
    },
    {
        "name":"Croatia",
        "value2006":"4.9"
    },
    {
        "name":"Micronesia, Federated States of",
        "value2006":"100"
    },
    {
        "name":"Georgia",
        "value2006":"48.2"
    },
    {
        "name":"Tonga",
        "value2006":"40.8"
    },
    {
        "name":"Honduras",
        "value2006":"38"
    },
    {
        "name":"Liechtenstein",
        "value2006":"5.9"
    },
    {
        "name":"Congo, Dem. Rep. of the (Kinshasa)",
        "value2006":"44.2"
    }
]
 ```

Then retrieve values of the column `name`:

```
var names = countries.values('name')
```

Returnes values are the following

``` json
["Brazil","Congo, Dem. Rep. of the (Kinshasa)","Croatia","Georgia","Honduras","Liechtenstein","Micronesia, Federated States of","Tonga"]
```

Then we iterate over values and set the country tag.

```
  for country_name in names
    [series]
    [tags]
      country = @{country_name.replace(',', '\\,')}
  endfor
```


<!-- ************************************ list.escape() ************************************ -->

## [⇧](#header) <a name="list_escape"></a> list.escape()

### Description
Escapes commas in each value in the array of strings. `.escape()` method is available in arrays generated from `list` keyword, `var` expression, and `csv.values()` method.

Generated array has `.escape()` method which escapes commas in each element and joins them by comma.

### Syntax

```
list_name.escape()
```

### Return value
`string` - joint by comma elements of array with escaped commas.

### Examples

In the following examples we want to get a list of escaped country names. Countries names are generated from the `list`, `var` and `csv.values()`

#### Apply `.escape()` to array generated from `list`

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/11/)

##### Usage

```
  list countries =
    Brazil,
    Croatia,
    Micronesia\, Federated States of,
    Georgia,
    Tonga,
    Honduras,
    Liechtenstein,
    Congo\, Dem. Rep. of the (Kinshasa)
  endlist

  country = @{countries.escape()}
```

##### Result

```
["Brazil","Croatia","Micronesia\\, Federated States of","Georgia","Tonga","Honduras","Liechtenstein","Congo\\, Dem. Rep. of the (Kinshasa)"]
```

#### Apply `.escape()` to array created in `var` expression

[ChartLab](https://apps.axibase.com/chartlab/df616dfa/12/)

##### Usage

```
var countries = getTags('state.visa-refusal-rate', 'country', 'travel.state.gov')

country = @{countries.escape()}
```

##### Result
Part of result:

``` json
[... "Comoros","Congo\\, Dem. Rep. of the (Kinshasa)","Congo\\, Rep. of the (Brazzaville)","Costa Rica","Cote d'Ivoire" ...]
```

#### Apply `.escape()` to array retrived by `csv.values()`

[ChartLab Example](https://apps.axibase.com/chartlab/df616dfa/7/)

##### Usage

```
csv countries =
  name, value2006
  Brazil, 13.2
  Croatia, 4.9
  "Micronesia, Federated States of", 100
  Georgia, 48.2
  Tonga, 40.8
  Honduras, 38
  Liechtenstein, 5.9
  "Congo, Dem. Rep. of the (Kinshasa)",44.2
endcsv

country = @{countries.values('name').escape()}
```

##### Result

```
["Brazil","Congo\\, Dem. Rep. of the (Kinshasa)","Croatia","Georgia","Honduras","Liechtenstein","Micronesia\\, Federated States of","Tonga"]
```


