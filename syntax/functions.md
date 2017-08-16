# <a name=header></a> Functions
This page contains descriptions of recently implemented functions.

## Overview


| Name | Arguments | Scope | API Request | Description |
|------|-----------|-------|-------------|-------------|
| [getTags()](#getTags) | metric <br> tagName <br> minInsertDate <br> maxInsertDate <br> url <br> queryParams | preprocessor | [/api/v1/metrics/{metric}/series](https://github.com/axibase/atsd/blob/master/api/meta/metric/series.md) | get series of `metric` filtered by `entity`, `minInsertDate` and `maxInsertDate` and return sorted array of unique values of tag with name `tagName` |
| [getSeries()](#getSeries)| metric <br> entity <br> minInsertDate <br> maxInsertDate <br> url <br> queryParams | preprocessor |  [/api/v1/metrics/{metric}/series](https://github.com/axibase/atsd/blob/master/api/meta/metric/series.md)  | return series of metric filtered by `entity`, `minInsertDate` and `maxInsertDate` |
| [getMetrics()](#getMetrics) | entity <br> expression <br> tags <br> url <br> queryParams | preprocessor | [/api/v1/entities/{entity}/metrics](https://github.com/axibase/atsd/blob/master/api/meta/entity/metrics.md) | return names of metrics collected for `entity` filtered by `expression` |
| [getEntities()](#getEntities) | group <br> expression <br> tags <br> url <br> queryParams | preprocessor | [/api/v1/entity-groups/{group}/entities](https://github.com/axibase/atsd/blob/master/api/meta/entity-group/get-entities.md) | return names of entities contained in entity-group filtered by `expression` |
| range() | start <br> end <br> step <br> format | preprocessor |  |
| csv name = ... |  | preprocessor |  |
| csv name from ...| url | preprocessor |  |
| csv.values() |  | preprocessor |  |
| list.escape() |  | preprocessor |  |
| global.escape() | string | global | escape special characters in `string` with `\\` |
| requestMetricsSeriesValues() | fieldPath <br> callback <br> metric <br> unique <br>  params | dropdown options |  |
| requestEntitiesMetricsValues() | fieldPath <br> callback <br> entity <br> unique <br> params | dropdown |  |
| requestPropertiesValues() | fieldPath <br> callback <br> entity <br> propertyType <br> unique <br> postBody | dropdown |  |
| requestMetricsSeriesOptions() | valueFieldPath <br> textFieldPath <br> callback <br> metric <br> unique <br> params | dropdown |  |
| requestEntitiesMetricsOptions | valueFieldPath <br> textFieldPath <br> callback <br> entity <br> unique <br> params | dropdown |  |
| requestPropertiesOptions | valueFieldPath <br> textFieldPath <br> callback <br> entity <br> propertyType <br> unique <br> postBody |  |
| previous() | alias <br> offset | value-expression |  |
| movavg() | alias <br> offset | value-expression |  |
| meta() | alias | value-expression |  |
| entityTag() | alias <br> tagName | value-expression |  |
| metricTag() | alias <br> tagName | value-expression |  |

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
Makes a synchronous request to the `{url}api/v1/entities/{entity}/metrics?expression={expression}&tags={tags}`. Receive metric descriptor objects and return `name` field. This function can be used at the stage of preprocessing in the `var` expression.

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
Makes a synchronous request to the `{url}api/v1/entity-groups/{group}/entities?expression={expression}&tags={tags}`. Receive entity descriptor objects and return `name` field. This function can be used at the stage of preprocessing in the `var` expression.

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
