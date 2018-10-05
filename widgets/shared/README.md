# Shared Settings

## Overview

The **Shared Settings** are common settings supported by all widgets.

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="type"></a>[`type`](#type) | `type = chart`| Widget visualization type: [`chart`](../time-chart/README.md), [`gauge`](../gauge-chart/README.md), [`bar`](../bar-chart/README.md), [`histogram`](../histogram/README.md), [`box`](../box-chart/README.md), [`calendar`](../calendar-chart/README.md), [`treemap`](../treemap/README.md), [`pie`](../pie-chart/README.md), [`console`](../alert-console/README.md), [`property`](../property-table/README.md), [`text`](../text-widget/README.md), [`page`](../page-widget/README.md), [`graph`](../graph/README.md).| [↗](https://apps.axibase.com/chartlab/12d8cdf5)
<a name="title"></a>[`title`](#title) | `title = CPU Usage Statistics` | Title displayed above chart.<br>HTML Markup is supported. | [↗](https://apps.axibase.com/chartlab/c91c3205)
<a name="tooltip"></a>[`tooltip`](#tooltip) | `tooltip = CPU Usage` | Widget description displayed on title mouseover. | [↗](https://apps.axibase.com/chartlab/9c41753e)
<a name="header-style"></a>[`header-style`](#header-style)| `header-style = color: red`| Widget header CSS style.| [↗](https://apps.axibase.com/chartlab/6fa47d56)
<a name="colors"></a>[`colors`](#colors) | `colors = green, #ccc` | Colors applied to series shapes.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors) or hex codes.<br>Default values: `steelblue, orange, green, purple`, `maroon`, `yellowgreen`, `hotpink`, `chocolate`, `deepskyblue`.<br>Additional series are assigned colors at random.| [↗](https://apps.axibase.com/chartlab/a2977750)
<a name="offset-left"></a>[`offset-left`](#offset-left) | `offset-left = 50` | Offset from the left page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/7d9ac443)
<a name="offset-right"></a>[`offset-right`](#offset-right) | `offset-right = 50` | Offset from the right page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/5d06446b)
<a name="offset-top"></a>[`offset-top`](#offset-top) | `offset-top = 50` | Offset from the top page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/2519e595)
<a name="offset-bottom"></a>[`offset-bottom`](#offset-bottom) | `offset-bottom = 50` | Offset from the bottom page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/6b16f2e5)
<a name="scale"></a>[`scale`](#scale) | `scale = 0.8` | Chart scale.<br>Value must exceed `0.0`.<br>Default value: `1.0`.| [↗](https://apps.axibase.com/chartlab/8af72f3e)

### Data Loading

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="timespan"></a>[`timespan`](#timespan) | `timespan = 6 hour` | Data interval specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>When specified without `start-time` or `end-time` setting, `end-time` is `now`.<br>Format: `count time_unit`.<br>Default value: `1 hour`.| [↗](https://apps.axibase.com/chartlab/f08405c6)
<a name="start-time"></a>[`start-time`](#start-time)| `start-time = 2018-07-05 12:00:00` | Start time of interval specified in [ISO format](https://axibase.com/docs/atsd/shared/date-format.html), [calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), or local time.<br>When `start-time` is specified, either `end-time` **or** `timespan` is also required. | [↗](https://apps.axibase.com/chartlab/8d40e80d)
<a name="end-time"></a>[`end-time`](#end-time) | `endtime = 2018-07-05 13:00:00` | End time of interval specified in [ISO format](https://axibase.com/docs/atsd/shared/date-format.html), [calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), or local time.<br>When `end-time` is specified, either `start-time` **or** `timespan` is also required.| [↗](https://apps.axibase.com/chartlab/f784e730)
<a name="url"></a>[`url`](#url) | `url = https://atsd.example.org:8443` | ATSD server URL.<br>Load data from an ATSD server running on a different host.<br>URL for data requests is assembled from `{url}{context-path}{method-path}{url-parameters}`. | [↗](https://apps.axibase.com/chartlab/9cd66119)
<a name="context-path"></a>[`context-path`](#context-path) | `context-path = /api/v2/`| Context path is the prefix of the URL path used to select the context to which an incoming request to ATSD server is directed.<br>Default value: `/api/v1/`.|[↗](https://apps.axibase.com/chartlab/ccab4e32)
<a name="method-path"></a>[`method-path`](#method-path) | `method-path = /series/query` | [REST API](https://axibase.com/docs/atsd/api/data/) method path.<br>Default value is specific for each data type: `/series/query`, `/properties/query`, `/messages/query`, `/alerts/query`. | [↗](https://apps.axibase.com/chartlab/16e8cdad)
<a name="url-parameters"></a>[`url-parameters`](#url-parameters) | `url-parameters = db=1` | Optional request parameters included in Data API requests.<br>Parameter names and values must be URL-encoded and separated by `&`.<br>`?` at the beginning of the query is optional. | [↗](https://apps.axibase.com/chartlab/877e0c6b)|
<a name="batch-update"></a>[`batch-update`](#batch-update) | `batch-update = true`| Send data queries to the server in batches with size specified in `batch-size` setting.<br>Possible values: `false`, `true`.<br>If `true`, series for which the request has failed are requested separately from successfully updated series.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/669ac522)
<a name="batch-size"></a>[`batch-size`](#batch-size) | `batch-size = 5` | Maximum number of series per server batch request.<br>If `0` is specified, the limit is not set.<br>Valid when `batch-update = true`.<br>Default value: `8`.| [↗](https://apps.axibase.com/chartlab/4dda9f75)
<a name="timezone"></a>[`timezone`](#timezone) | `timezone = UTC` | Time zone for loaded data.<br>Possible values: `UTC`.<br>If `UTC` is set, `start-time` and `end-time` settings specified in local format are evaluated based on UTC time zone.<br>If `UTC` is not set, samples are displayed in the local time zone. | [↗](https://apps.axibase.com/chartlab/01bcbf1c)
<a name="series-limit"></a>[`series-limit`](#series-limit) | `series-limit = 10` | Maximum number of series retrieved from the database.<br>Default value: `1000`| [↗](https://apps.axibase.com/chartlab/60c6d82c)
<a name="limit"></a>[`limit`](#limit) | `limit = 10` | Maximum number of samples returned for each returned series.<br>Default value: `0` (not limited).|[↗](https://apps.axibase.com/chartlab/ace8b96d)
<a name="cache"></a>[`cache`](#cache) | `cache = true` | Query last values from the cache table for faster response.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/6cb1473e)
<a name="update-interval"></a>[`update-interval`](#update-interval) | `update-interval = 5 minute` | Widget update interval specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>`update-interval` can contain several `refresh-interval` periods, whereby data is updated in memory several times but only added to the widget each specified interval.<br>Format: `count time_unit`.<br>Default value: `5 seconds`. | [↗](https://apps.axibase.com/chartlab/724a08aa)
<a name="refresh-interval"></a>[`refresh-interval`](#refresh-interval) | `refresh-interval = 5 minute` | Data refresh interval specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>If `update-interval` is not specified, `update-interval = refresh-interval`.<br>Format: `count time_unit`.<br>Default value: `5 seconds`. | [↗](https://apps.axibase.com/chartlab/724a08aa)
<a name="retry-refresh-interval"></a>[`retry-refresh-interval`](#retry-refresh-interval) | `retry-refresh-interval = 5 minute`| Interval to skip data requests for the given series if the previous request received empty response, specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`. | [↗](https://apps.axibase.com/chartlab/d7e21c29)
<a name="error-refresh-interval"></a>[`error-refresh-interval`](#error-refresh-interval) | `error-refresh-interval = 30 minute`| Interval to skip data requests for the given series if the previous request failed, specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`. | [↗](https://apps.axibase.com/chartlab/48e8b5cc)
<a name="multiple-series"></a>[`multiple-series`](#multiple-series) | `multiple-series = true` | Include multiple series in request responses.<br>Possible values: `false`, `true`.<br>Default value: `true`. | [↗](https://apps.axibase.com/chartlab/7a9e4495)

### Legend

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="legend-position"></a>[`legend-position`](#legend-position) | `legend-position = left` | Legend location.<br>Possible values: `hidden`, `top`, `right`, `bottom`, `left`<br>Default value: `hidden` for a single series, `top` for multiple series.<br>Combine values to define corners.| [↗](https://apps.axibase.com/chartlab/92167b79)
<a name="label-format"></a>[`label-format`](#label-format)| `label-format = entity` | Series label pattern consisting of literal text and [placeholders](../../syntax/label-formatting.md).| [↗](https://apps.axibase.com/chartlab/49f500c1)

### Axis

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="axis-title"></a>[`axis-title`](#axis-title) | `axis-title = CPU Usage in %`| Vertical text displayed along the left axis.| [↗](https://apps.axibase.com/chartlab/8f7647ff)
<a name="axis-title-right"></a>[`axis-title-right`](#axis-title-right) | `axis-title-right = Free Memory`| Vertical text displayed along the right axis.| [↗](https://apps.axibase.com/chartlab/8f7647ff)
<a name="day-format"></a>[`day-format`](#day-format) | `day-format = %Y/%m/%d` | Time axis format. | [↗](https://apps.axibase.com/chartlab/717b0f73)
<a name="min-range"></a>[`min-range`](#min-range) | `min-range = 0`| Left axis minimum range.<br>If loaded data exceeds `min-range` value, axis range is adjusted to show loaded data.| [↗](https://apps.axibase.com/chartlab/d9eeeda5)
<a name="max-range"></a>[`max-range`](#max-range) | `max-range = 100`| Left axis maximum range.<br>If loaded data exceeds `max-range` value, axis range is adjusted to show loaded data.| [↗](https://apps.axibase.com/chartlab/74052e3e)
<a name="min-range-right"></a>[`min-range-right`](#min-range-right) | `min-range-right = 0`| Right axis minimum range.<br>If loaded data exceeds `min-range-right` value, right axis range is adjusted to show loaded data.| [↗](https://apps.axibase.com/chartlab/a5d7f10b)
<a name="max-range-right"></a>[`max-range-right`](#max-range-right) | `max-range-right = 100`| Right axis maximum range.<br>If loaded data exceeds `max-range-right` value, right axis range is adjusted to show loaded data.| [↗](https://apps.axibase.com/chartlab/5f1445c6)
<a name="max-range-force"></a>[`max-range-force`](#max-range-force) | `max-range-force = 100` | Left axis forced minimum and maximum range.<br>If loaded data exceeds `max-range-force`, axis range is **not** adjusted to show loaded data. | [↗](https://apps.axibase.com/chartlab/fa0b58a7)
<a name="min-range-force"></a>[`min-range-force`](#min-range-force) | `min-range-force = 0` | Left axis forced minimum and maximum range.<br>If loaded data exceeds `min-range-force`, axis range is **not** adjusted to show loaded data. | [↗](https://apps.axibase.com/chartlab/fa0b58a7)
<a name="min-range-right-force"></a>[`min-range-right-force`](#min-range-right-force) | `min-range-right-force = 0` | Right axis forced minimum range.<br>If loaded data exceeds `min-range-right-force`, right axis range is **not** adjusted to show loaded data. | [↗](https://apps.axibase.com/chartlab/ac40afc3)
<a name="max-range-right-force"></a>[`max-range-right-force`](#max-range-right-force) | `max-range-right-force = 100` | Right axis forced maximum range.<br>If loaded data exceeds `max-range-right-force`, right axis range is **not** adjusted to show loaded data. | [↗](https://apps.axibase.com/chartlab/ac40afc3)

## Series Settings

* The settings apply to the `[series]` section.

### Series Selection

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="metric"></a>[`metric`](#metric) | `metric = cpu_busy` | Metric name.<br>When requesting data from a relational database specify both `table` and `attribute` as an alternative. | [↗](https://apps.axibase.com/chartlab/f901f339)
<a name="table"></a>[`table`](#table) | `table = KLZ_CPU`| Table in the relational database from which to retrieve numeric values.<br>Alternative to `metric` setting.<br>Both `table` and `attribute` must be defined.| [↗](https://apps.axibase.com/chartlab/35fde2bf)
<a name="attribute"></a>[`attribute`](#attribute) | `attribute = Current_Average` | Column name in a relational database table. The column must be of numeric data type.  | [↗](https://apps.axibase.com/chartlab/35fde2bf)
<a name="data-type"></a>[`data-type`](#data-type) | `data-type = forecast` | Series data type.<br>Possible values: `history`, `forecast`, `forecast_deviation`, `lower_confidence`, `upper_confidence`.| [↗](https://apps.axibase.com/chartlab/2942e708)
<a name="forecast-name"></a>[`forecast-name`](#forecast-name) | `forecast-name = hw5` | Forecast name.<br>If no forecast name is defined, [default series forecast](https://axibase.com/docs/atsd/forecasting/#persistence-settings) is loaded.| [↗](https://apps.axibase.com/chartlab/533918cc)

### Entity Filter

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="entity"></a>[`entity`](#entity) | `entity = nurswgvml007`<br>`entity = nurswgvml00*`| Entity name.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).| [↗](https://apps.axibase.com/chartlab/d65bdce1)
<a name="entities"></a>[`entities`](#entities)| `entities = nurswgvml007, nurswgvml008`| Select multiple entities with one setting.<br>If both `entity` and `entities` are specified, `entity` takes precedence.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).| [↗](https://apps.axibase.com/chartlab/fc94835a)
<a name="entity-group"></a>[`entity-group`](#entity-group) | `entity-group = nmon-sub-group` | [Entity group](https://axibase.com/docs/atsd/configuration/entity_groups.html) name. | [↗](https://apps.axibase.com/chartlab/f67397d7)
<a name="entity-expression"></a>[`entity-expression`](#entity-expression) | `entity-expression = tags.app LIKE '*a*'` | Server-side [entity filter](https://axibase.com/docs/atsd/api/data/filter-entity.html#entityexpression-syntax) to select series for matching entities by name, tags, and fields.| [↗](https://apps.axibase.com/chartlab/9b48aaaf)

### Tag Filter

To select series with specific tags, add a `[tags]` section or define a condition using the `tag-expression` setting.

```ls
[series]
  metric = disk_used
  entity = nurswgvml007
  [tags]
    mount_point = /tmp
    fstype = tmpfs
```

To match multiple values for the same tag, separate the values with a comma. Escape commas if necessary using backslash.

```ls
[tags]
  tag_name = tag_value1, tag\,value
```

To match multiple tag values, use `?` and `*` wildcards:

```ls
[tags]
  tag_name = *val*
```

If the tag name contains an equals sign `=`, a comma`,`, or reserved names such as setting names, enclose the tag name in double quotes to avoid collisions:

```ls
[tags]
  "type" = sensor
  "tag\=name" = tag\,value
```

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="tag-expression"></a>[`tag-expression`](#tag-expression)| `tag-expression = tags.make LIKE 'AU*'`| Server-side [tag filter](https://axibase.com/docs/atsd/api/data/series/query.html#tag-expression) to select series for matching tags.| [↗](https://apps.axibase.com/chartlab/ae493a65)
<a name="exact-match"></a>[`exact-match`](#exact-match) | `exact-match = true` | Ignore series with tags other than those [specified](https://axibase.com/docs/atsd/api/data/series/query.html#tag-filter) in the `[tags]` section.<br>Default value: `false`. | [↗](https://apps.axibase.com/chartlab/79cd34ec)

### Series Style

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="color"></a>[`color`](#color) | `color = blue` | Color applied to series shape.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors) or hex codes.<br>Default values: `steelblue, orange, green, purple`, `maroon`, `yellowgreen`, `hotpink`, `chocolate`, `deepskyblue`.<br>Additional series are assigned colors at random.| [↗](https://apps.axibase.com/chartlab/3d6cab08)
<a name="label"></a>[`label`](#label) | `label = CPU Busy - nurswgvml007` | Series label displayed in the legend. Overrides `label-format`. | [↗](https://apps.axibase.com/chartlab/bca3cf3e)
<a name="style"></a>[`style`](#style) | `style = stroke-width: 4`<br>`style = stroke-dasharray: 5 1 2` | CSS style applied to the series shape.| [↗](https://apps.axibase.com/chartlab/15b5420b)
<a name="tooltip"></a>[`tooltip`](#tooltip) | `tooltip = NURSWGVML007` | Tooltips displayed on mouseover. | [↗](https://apps.axibase.com/chartlab/a46ea93e)
<a name="axis"></a>[`axis`](#axis) | `axis = right` | Series axis placement.<br>Possible values: `left`, `right`.<br>Default value: `left`.| [↗](https://apps.axibase.com/chartlab/8a66a428)
<a name="format"></a>[`format`](#format)| `format = kilobytes` | Format series values with a [measurement unit](../../syntax/format-settings.md).| [↗](https://apps.axibase.com/chartlab/938f5c6c)
<a name="display"></a>[`display`](#display) | `display = value > top(3)`<br>`display = false` | Hide series based on boolean value or [expression](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax).| [↗](https://apps.axibase.com/chartlab/22235081)
<a name="enabled"></a>[`enabled`](#enabled) | `enabled = false`<br>`enabled = max('1 day') > 10` | Toggle series visibility based on boolean value or [expression](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax).<br>Series legend remains visible when `false`. | [↗](https://apps.axibase.com/chartlab/c576ab5d)
<a name="alert-expression"></a>[`alert-expression`](#alert-expression)| `alert-expression = value < 95` | Boolean expression to apply conditional CSS style to series shapes.<br>The CSS style must be specified in the `alert-style` setting.<br>The `value` field refers to the series value. | [↗](https://apps.axibase.com/chartlab/28e4a7f0)
<a name="alert-style"></a>[`alert-style`](#alert-style) | `alert-style = fill: red; stroke: red`| CSS style applied to the series shape if `alert-expression` returns `true`.| [↗](https://apps.axibase.com/chartlab/28e4a7f0)
<a name="audio-alert"></a>[`audio-alert`](#audio-alert) | `audio-alert = /portal/resource/alarm.ogg`| Boolean expression to apply conditional CSS style to series shapes.| [↗](https://apps.axibase.com/chartlab/d3943e68)
<a name="audio-alert-style"></a>[`audio-alert-style`](#audio-alert-style) | `audio-alert = /portal/resource/alarm.ogg`| Play an [audio file](../../configuration/audio-alerts.md) when `audio-alert` evaluates to `true`.| [↗](https://apps.axibase.com/chartlab/d3943e68)

### Transformation

#### Rate

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="rate"></a>[`rate`](#rate) | `rate = 15 second` | Compute the difference between consecutive samples per unit of time, or [rate period](https://axibase.com/docs/atsd/api/data/series/rate.html#rate-period).<br>If `rate = 0 time unit`, the difference between consecutive samples is computed.<br>Format: `count time_unit`.| [↗](https://apps.axibase.com/chartlab/84c208d4)
<a name="rate-counter"></a>[`rate-counter`](#rate-counter) | `rate-counter = true`| Possible values: `false`, `true`.<br>If `true`, negative differences between consecutive sample values are converted to `0`.| [↗](https://apps.axibase.com/chartlab/5e781448)

> See also [Rate](https://axibase.com/docs/atsd/api/data/series/rate.html) transformation in REST API.

#### Aggregation

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="statistics"></a>[`statistics`](#statistics) | `statistics = avg`| Aggregation statistic function.<br>Refer to [Aggregators](../../configuration/aggregators.md) for possible values.| [↗](https://apps.axibase.com/chartlab/de76132b)
<a name="period"></a>[`period`](#period) | `period = 15 minute`| [Aggregator](https://axibase.com/docs/atsd/api/data/series/aggregate.html#aggregate-processor) period specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Possible values: `count time_unit`.| [↗](https://apps.axibase.com/chartlab/0e1efe88)
<a name="align"></a>[`align`](#align) | `align = END_TIME` | [Alignment](https://axibase.com/docs/atsd/api/data/series/aggregate.html#period) of the period start or end time.<br>Possible values: `CALENDAR`, `START_TIME`, `END_TIME`, `FIRST_VALUE_TIME`.<br>Default value: `CALENDAR`.| [↗](https://apps.axibase.com/chartlab/017975c4)
<a name="interpolate"></a>[`interpolate`](#interpolate) | `interpolate = LINEAR` | Interpolate missing aggregation periods.<br>Possible values: `NONE`, `LINEAR`, `PREVIOUS`, `NEXT`, `VALUE(n)`, where `n` is the numerical value to be used to fill missing samples.<br>Default value: `NONE` | [↗](https://apps.axibase.com/chartlab/7af6f848)
<a name="interpolate-extend"></a>[`interpolate-extend`](#interpolate-extend)| `interpolate-extend = true` | Interpolate leading and trailing periods with `NEXT` or `PREVIOUS` value.| [↗](https://apps.axibase.com/chartlab/4a3b8f7a)

> See also [Aggregation](https://axibase.com/docs/atsd/api/data/series/aggregate.html) transformation in REST API.

#### Interpolation

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="interpolate-function"></a>[`interpolate-function`](#interpolate-function) | `interpolate-function = linear` | Interpolation function applied to detailed samples.<br>Possible values: `NONE`, `LINEAR`, `PREVIOUS`, `NEXT`, `VALUE(n)`, where `n` is the numerical value to be used to fill missing samples.<br>Default value: `NONE`.| [↗](https://apps.axibase.com/chartlab/6221d836)
<a name="interpolate-period"></a>[`interpolate-period`](#interpolate-period) | `interpolate-period = 1 minute` | Interpolation period specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.| [↗](https://apps.axibase.com/chartlab/6221d836)
<a name="interpolate-boundary"></a>[`interpolate-boundary`](#interpolate-boundary) | `interpolate-boundary = outer` | [Interpolation](https://axibase.com/docs/atsd/api/data/series/interpolate.html#boundary) for leading and trailing values.<br>Possible values: `inner`- Data outside of the selection interval is not loaded by the database. `outer`- One value before and one value after the selection interval is loaded by the database to interpolate leading and trailing values.<br>Default value: `inner`| [↗](https://apps.axibase.com/chartlab/5713cdf9)
<a name="interpolation-fill"></a>[`interpolation-fill`](#interpolation-fill) | `interpolate-fill = true` | Interpolate values outside of the selection interval.<br>Possible values: `false`, `true`, `count` of values to fill.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/9361ea19)

> See also [Interpolation](https://axibase.com/docs/atsd/api/data/series/interpolate.html) transformation in REST API.

#### Grouping

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="merge-fields"></a>[`merge-fields`](#merge-fields) | `merge-fields = mount_point`|Group series based on merge field.<br>Only applies in `multiple-series` mode.<br>By default, series which use [wildcard](../../syntax/wildcards.md), `entities`, `entityGroup` settings or comma-separated tag values are treated as multiple series.<br>Possible values:<br>`entity`: Combine all series with the same entity.<br>`tag-name`: Combine all series with tag defined by `tag-name`. | [↗](https://apps.axibase.com/chartlab/65f07c02)
<a name="group-statistic"></a>[`group-statistic`](#group-statistic) | `group-statistic = sum` | Group statistic function assigned to the series.<br>Refer to [Aggregators](../../configuration/aggregators.md) for possible values.| [↗](https://apps.axibase.com/chartlab/d2b23084)
<a name="group-period"></a>[`group-period`](#group-period) | `group period = 1 month` |Group period over which to calculate [group statistics](https://axibase.com/docs/atsd/api/data/series/group.html#group-processor) specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>Default value: `auto` (`15 minutes`)| [↗](https://apps.axibase.com/chartlab/2ee1bace)
<a name="group-first"></a>[`group-first`](#group-first) | `group-first = false` | The sequence of aggregation and grouping.<br>If set to `true`, grouping is performed before aggregation.| [↗](https://apps.axibase.com/chartlab/732de421)
<a name="group-interpolate"></a>[`group-interpolate`](#group-interpolate) | `group-interpolate = LINEAR` | Interpolate grouped values.<br>Possible values: `LINEAR`, `PREVIOUS`, `VALUE`.| [↗](https://apps.axibase.com/chartlab/ea0512fa)
<a name="group-interpolate-extend"></a>[`group-interpolate-extend`](#group-interpolate-extend) | `group-interpolate-extend = true` | Fill missing leading and trailing periods with `NEXT` or `PREVIOUS` values.| [↗](https://apps.axibase.com/chartlab/ea0512fa)

> See also [Grouping](https://axibase.com/docs/atsd/api/data/series/group.html) transformation in REST API.

#### Downsampling

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="downsample"></a>[`downsample`](#downsample) | `downsample = true` | Enable [downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html#downsampling).<br>Possible values: `false`, `true`.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/ac7866e6)
<a name="downsample-gap"></a>[`downsample-gap`](#downsample-gap) | `downsample-gap = 10 minute` | Frequency of repeated values defined as [`downsample-gap`](https://axibase.com/docs/atsd/api/data/series/downsample.html#parameters) in [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>A larger gap value decreases the occurrence of repeated values.<br>Possible values: `count time_unit`.<br>Default value: `10 minute`.| [↗](https://apps.axibase.com/chartlab/194e1b66)
<a name="downsample-ratio"></a>[`downsample-ratio`](#downsample-ratio) | `downsample-ratio = 1.1` | Downsample [ratio](https://axibase.com/docs/atsd/api/data/series/downsample.html#ratio-check).| [↗](https://apps.axibase.com/chartlab/62853a21)
<a name="downsample-algorithm"></a>[`downsample-algorithm`](#downsample-algorithm) | `downsample-algorithm = interpolate` | [Downsample algorithm](https://axibase.com/docs/atsd/api/data/series/downsample.html#algorithm) used in calculation.<br>Possible values: `DETAIL`, `INTERPOLATE`.<br>Default value: `DETAIL`.| [↗](https://apps.axibase.com/chartlab/0955c2ee)
<a name="downsample-difference"></a>[`downsample-difference`](#downsample-difference) | `downsample-difference = 4` |Deviation between consecutive values which ATSD considers equivalent.<br>Consolidate samples with minor deviations when downsampling. | [↗](https://apps.axibase.com/chartlab/6764238a)

> See also [Downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html) transformation in REST API.

#### Smoothing

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="smooth"></a>[`smooth`](#smooth) | `smooth = AVG` | [Averaging](https://axibase.com/docs/atsd/api/data/series/smooth.html) function applied to window samples.<br>Possible values: `AVG`, `EMA`, `WAVG`, `WTAVG`. | [↗](https://apps.axibase.com/chartlab/77d3a87b)
<a name="smooth-factor"></a>[`smooth-factor`](#smooth-factor) | `smooth-factor = 0.5` | [`EMA`](https://axibase.com/docs/atsd/api/data/series/smooth.html#exponential-moving-average) function weight parameter. Possible values: Between `0` and `1`. | [↗](https://apps.axibase.com/chartlab/7ee5133e)
<a name="smooth-range"></a>[`smooth-range`](#smooth-range) | `smooth-range = 60000` | Alternative [`EMA`](https://axibase.com/docs/atsd/api/data/series/smooth.html#exponential-moving-average) function weight parameter. | [↗](https://apps.axibase.com/chartlab/d26e18b3)
<a name="smooth-count"></a>[`smooth-count`](#smooth-count) | `smooth-count = 50` | Window size.<br>A larger window performs greater smoothing. | [↗](https://apps.axibase.com/chartlab/9af9e77b)
<a name="smooth-interval"></a>[`smooth-interval`](#smooth-interval) | `smooth-interval = 15 minute` | Window duration interval, specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`. | [↗](https://apps.axibase.com/chartlab/e3bc966e)
<a name="smooth-minimum-count"></a>[`smooth-minimum-count`](#smooth-minimum-count) | `smooth-minimum-count = 10` | [Minimum number](https://axibase.com/docs/atsd/api/data/series/smooth.html#fields) of samples in a window required to apply the smoothing function.<br>Default value: `1`. | [↗](https://apps.axibase.com/chartlab/eeeeba28)
<a name="smooth-incomplete-value"></a>[`smooth-incomplete-value`](#smooth-incomplete-value) | `smooth-incomplete-value = NaN` | Sample value returned when downsampling window is not full. | [↗](https://apps.axibase.com/chartlab/6666ab6c)

> See also [Smoothing](https://axibase.com/docs/atsd/api/data/series/smooth.html) transformation in REST API.

### Derived Value Settings

Specify `value` setting to create calculated series derived from raw series using arithmetic expressions in JavaScript syntax. The expression must return a number or `null`, series with `null` values are hidden.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="alias"></a>[`alias`](#alias) | `alias = s1` | Unique series name to pass data to other series. | [↗](https://apps.axibase.com/chartlab/a18e5720)
<a name="replace-value"></a>[`replace-value`](#replace-value) | `replace-value = value*2`| Modify or filter series values.<br>Possible values: `value`, `previousValue`.| [↗](https://apps.axibase.com/chartlab/5ff83724)
<a name="value"></a>[`value`](#value) | `value = max('s1')`| Series value.<br>Retrieve the value of the underlying series identified by alias.<br>Supported fields: `value`, `previous`, `detail`, `forecast`, `forecast_deviation`, `lower_confidence`, `upper_confidence`, [aggregator functions](../../configuration/aggregators.md).| [↗](https://apps.axibase.com/chartlab/25a47d0d)