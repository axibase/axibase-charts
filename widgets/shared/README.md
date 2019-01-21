# Common Settings

## Overview

The **Common Settings** are shared settings supported by all widgets.

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Description | &nbsp;
:--|:--|:--
<a name="type"></a>[`type`](#type) |Widget visualization type: [`chart`](../time-chart/README.md), [`gauge`](../gauge-chart/README.md), [`bar`](../bar-chart/README.md), [`histogram`](../histogram/README.md), [`box`](../box-chart/README.md), [`calendar`](../calendar-chart/README.md), [`treemap`](../treemap/README.md), [`pie`](../pie-chart/README.md), [`console`](../alert-table/README.md), [`property`](../property-table/README.md), [`text`](../text-widget/README.md), [`page`](../page-widget/README.md), [`graph`](../graph/README.md).<br>**Example**: `type = chart`| [↗](https://apps.axibase.com/chartlab/12d8cdf5)
<a name="title"></a>[`title`](#title) | Title displayed above chart.<br>HTML Markup is supported.<br>**Example**: `title = CPU Usage Statistics` | [↗](https://apps.axibase.com/chartlab/c91c3205)
<a name="tooltip"></a>[`tooltip`](#tooltip)| Widget description displayed on title mouseover.<br>**Example**: `tooltip = CPU Usage` | [↗](https://apps.axibase.com/chartlab/9c41753e)
<a name="widget-style"></a>[`style`](#widget-style)| Widget CSS style.<br>**Example**: `style = background-color: skyblue`| [↗](https://apps.axibase.com/chartlab/aca28019)
<a name="header-style"></a>[`header-style`](#header-style)| Widget header CSS style.<br>**Example**: `header-style = color: red`| [↗](https://apps.axibase.com/chartlab/6fa47d56)
<a name="colors"></a>[`colors`](#colors)| Comma separated list of colors applied to series shapes: lines, rectangles, or circles, depending on the widget type.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors) or hex codes.<br>Default values: `steelblue`, `orange`, `forestgreen`, `blueviolet`, `maroon`, `yellowgreen`, `magenta`, `chocolate`, `deepskyblue`, `gray`.<br>Additional series are assigned colors at random.<br>**Example**: `colors = green, #cccccc`.<br>Recommended color picking tools: [`colorhexa`](https://www.colorhexa.com/ffffff-to-0c9150), [`material.io`](https://material.io/design/color/#tools-for-picking-colors), [`web colors`](https://en.wikipedia.org/wiki/Web_colors). | [↗](https://apps.axibase.com/chartlab/a2977750)

### Position and Size

Name | Description | &nbsp;
:--|:--|:--
<a name="width-units"></a>[`width-units`](#width-units)| Number of columns the widget occupies.<br>Default value: `1`.<br>**Example**: `width-units = 0.5`|[↗](https://apps.axibase.com/chartlab/1b677aa7/2/)
<a name="height-units"></a>[`height-units`](#height-units) | Number of rows the widget occupies.<br>Default value: `1`.<br>**Example**: `height-units = 2`|[↗](https://apps.axibase.com/chartlab/1b677aa7/2/)
<a name="top-units"></a>[`top-units`](#top-units) | Widget offset, in _units_, from the top page border.<br>Default value is equal to the ordinal number of its `[group]` section.<br>**Example**: `top-units = 2`|[↗](https://apps.axibase.com/chartlab/1b677aa7/3/)
<a name="left-units"></a>[`left-units`](#left-units) | Widget offset, in _units_, from the left page border.<br>Default value is equal to the ordinal number of the widget within the `[group]`.<br>**Example**: `left-units = 2`|[↗](https://apps.axibase.com/chartlab/1b677aa7/4/)

> See also [Layout Settings](../../configuration/README.md) that determine the total number of columns and rows in a grid placement.

### Data Loading

Name | Description | &nbsp;
:--|:--|:--
<a name="timespan"></a>[`timespan`](#timespan) | Data interval specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>When specified without `start-time` or `end-time` setting, `end-time` is `now`.<br>Format: `count time_unit`.<br>Default value: `1 hour`.<br>**Example**: `timespan = 6 hour`| [↗](https://apps.axibase.com/chartlab/a49c40a5)
<a name="start-time"></a>[`start-time`](#start-time)| Start time of interval specified in [ISO format](https://axibase.com/docs/atsd/shared/date-format.html), [calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), or local time.<br>When `start-time` is specified, either `end-time` **or** `timespan` is also required.<br>**Example**: `start-time = current_hour`| [↗](https://apps.axibase.com/chartlab/8d40e80d)
<a name="end-time"></a>[`end-time`](#end-time)| End time of interval specified in [ISO format](https://axibase.com/docs/atsd/shared/date-format.html), [calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), or local time.<br>When `end-time` is specified, either `start-time` **or** `timespan` is also required.<br>**Example**: `endtime = 2018-07-05 13:00:00`| [↗](https://apps.axibase.com/chartlab/f784e730)
<a name="timezone"></a>[`timezone`](#timezone)| Time zone for loaded data.<br>Possible values: `UTC`.<br>If `UTC` is set, `start-time` and `end-time` settings specified in local format are evaluated based on UTC time zone.<br>If `UTC` is not set, samples are displayed in the local time zone.<br>**Example**: `timezone = UTC`| [↗](https://apps.axibase.com/chartlab/01bcbf1c)
<a name="time-offset"></a>[`time-offset`](#time-offset)| Time series offset specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>`time-offset > 0`: Offset into the past.<br> `time-offset < 0`: Offset into the future.<br>Format: `count time_unit`.<br>**Example**: `time-offset = 3 month`| [↗](https://apps.axibase.com/chartlab/80152e9f)
<a name="multiple-series"></a>[`multiple-series`](#multiple-series) | Include multiple series in request responses.<br>Possible values: `false`, `true`.<br>Default value: `false` (`true` for wildcard requests).<br>**Example**: `multiple-series = true`| [↗](https://apps.axibase.com/chartlab/7a9e4495/2/)
<a name="series-limit"></a>[`series-limit`](#series-limit)| Maximum number of series retrieved from the database.<br>Default value: `1000`.<br>**Example**: `series-limit = 10`| [↗](https://apps.axibase.com/chartlab/60c6d82c)
<a name="limit"></a>[`limit`](#limit) | Maximum number of samples returned for each returned series.<br>Default value: `0` (not limited).<br>**Example**: `limit = 10`|[↗](https://apps.axibase.com/chartlab/ace8b96d)
<a name="cache"></a>[`cache`](#cache) | Query last values from the cache table for faster response.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `cache = true`| [↗](https://apps.axibase.com/chartlab/6cb1473e)
<a name="add-meta"></a>[`add-meta`](#add-meta)| Include metric and entity metadata in the response.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `add-meta = true`| [↗](https://apps.axibase.com/chartlab/100f5b65/3/)

* Supported formats for `start-time` and `end-time` settings:
  * [Calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), for example: `previous_week`.
  * [ISO format](https://axibase.com/docs/atsd/shared/date-format.html) in UTC time zone: `yyyy-MM-ddTHH:mm:ss[.S]Z`, for example: `2017-07-16T20:00:00Z`.
  * Simple format: `yyyy-MM-dd[ HH:mm:ss[.S]]` in client (browser) time zone, for example: `2017-07-16`, `2017-07-16 20:00:00`.

> See also [Control](https://axibase.com/docs/atsd/api/data/series/query.html#control-fields) fields in REST API.

### Data Update

Name | Description | &nbsp;
:--|:--|:--
<a name="update-interval"></a>[`update-interval`](#update-interval) | Interval for loading incremental data specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>Default value: `1 minute`.<br>**Example**: `update-interval = 5 minute` | [↗](https://apps.axibase.com/chartlab/724a08aa)
<a name="refresh-interval"></a>[`refresh-interval`](#refresh-interval)| Interval for including the series into the update request to load incremental data.<br>While the setting has no effect on the update frequency, set with `update-interval`, it controls which series are included in the request.<br>The interval is specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>**Example**: `refresh-interval = 5 minute` | [↗](https://apps.axibase.com/chartlab/634effc0/2/)
<a name="retry-refresh-interval"></a>[`retry-refresh-interval`](#retry-refresh-interval) | Interval for including **empty** series into the update request to load incremental data. Empty series contain no data.<br>The setting has no effect on the update frequency, set with `update-interval`, however it controls which series are included in the request.<br>The interval is specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>**Example**: `retry-refresh-interval = 5 minute` | [↗](https://apps.axibase.com/chartlab/d7e21c29)
<a name="error-refresh-interval"></a>[`error-refresh-interval`](#error-refresh-interval)| Interval for including **failed** series into the update request to load incremental data. Failed series are series for which a request to load data from server produced an error.<br>The setting has no effect on the update frequency, set with `update-interval`, however it controls which series are included in the request.<br>The interval is specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>**Example**: `error-refresh-interval = 30 minute`| [↗](https://apps.axibase.com/chartlab/48e8b5cc)
<a name="batch-update"></a>[`batch-update`](#batch-update)| Send data queries to the server in batches with size specified in `batch-size` setting.<br>Possible values: `false`, `true`.<br>If `true`, series for which the request has failed are requested separately from successfully updated series.<br>Default value: `false`.<br>**Example**: `batch-update = true`| [↗](https://apps.axibase.com/chartlab/669ac522)
<a name="batch-size"></a>[`batch-size`](#batch-size)| Maximum number of series per server batch request.<br>If `0` is specified, the limit is not set and all series are requested in one query.<br>Valid when `batch-update = true`.<br>Default value: `8`.<br>**Example**: `batch-size = 1`| [↗](https://apps.axibase.com/chartlab/4dda9f75)

> See also [Data API Endpoints](https://axibase.com/docs/atsd/api/data/#data-api-endpoints) in REST API.

### Data Source

Name | Description | &nbsp;
:--|:--|:--
<a name="url"></a>[`url`](#url)| Server URL, if different from the origin host.<br>URL for data requests is built from `{url}{context-path}{method-path}{url-parameters}`.<br>**Example**: `url = https://atsd.example.org:8443`| [↗](https://apps.axibase.com/chartlab/9cd66119)
<a name="context-path"></a>[`context-path`](#context-path)| Context path for data requests.<br>Default value: `/api/v1/`.<br>**Example**: `context-path = /api/v2/`|[↗](https://apps.axibase.com/chartlab/ccab4e32)
<a name="method-path"></a>[`method-path`](#method-path)| [REST API](https://axibase.com/docs/atsd/api/data/) method path.<br>Default value is specific for each data type: `/series/query`, `/properties/query`, `/messages/query`, `/alerts/query`.<br>**Example**: `method-path = /series/query` | [↗](https://apps.axibase.com/chartlab/16e8cdad)
<a name="url-parameters"></a>[`url-parameters`](#url-parameters) | Optional request parameters included in data requests.<br>Parameter names and values must be URL-encoded and separated by `&`.<br>`?` at the beginning of the query is optional.<br>**Example**: `url-parameters = db=1`| [↗](https://apps.axibase.com/chartlab/877e0c6b)

### Legend

Name | Description | &nbsp;
:--|:--|:--
<a name="legend-position"></a>[`legend-position`](#legend-position) | Legend location.<br>Possible values: `hidden`, `top`, `right`, `bottom`, `left`<br>Default value: `hidden` for a single series, `top` for multiple series.<br>Combine values to define corners.<br>**Example**: `legend-position = left`| [↗](https://apps.axibase.com/chartlab/dbffe43c)
<a name="label-format"></a>[`label-format`](#label-format)| Series label pattern consisting of literal text and [placeholders](../../syntax/label-formatting.md).<br>**Example**: `label-format = entity`| [↗](https://apps.axibase.com/chartlab/49f500c1)

### Axis

Name | Description | &nbsp;
:--|:--|:--
<a name="axis-title"></a>[`axis-title`](#axis-title) | Vertical text displayed along the left axis.<br>**Example**: `axis-title = CPU Utilization in %`| [↗](https://apps.axibase.com/chartlab/8f7647ff)
<a name="axis-title-right"></a>[`axis-title-right`](#axis-title-right) | Vertical text displayed along the right axis.<br>**Example**: `axis-title-right = Free Memory`| [↗](https://apps.axibase.com/chartlab/8f7647ff)
<a name="day-format"></a>[`day-format`](#day-format)| Time axis format.<br>**Example**: `day-format = %Y/%m/%d`| [↗](https://apps.axibase.com/chartlab/717b0f73)
<a name="min-range"></a>[`min-range`](#min-range) | Left axis minimum range.<br>If loaded data exceeds `min-range` value, axis range is adjusted to show loaded data.<br>**Example**: `min-range = 0`| [↗](https://apps.axibase.com/chartlab/d9eeeda5)
<a name="max-range"></a>[`max-range`](#max-range) | Left axis maximum range.<br>If loaded data exceeds `max-range` value, axis range is adjusted to show loaded data.<br>**Example**: `max-range = 100`| [↗](https://apps.axibase.com/chartlab/74052e3e)
<a name="min-range-right"></a>[`min-range-right`](#min-range-right)| Right axis minimum range.<br>If loaded data exceeds `min-range-right` value, right axis range is adjusted to show loaded data.<br>**Example**: `min-range-right = 0`| [↗](https://apps.axibase.com/chartlab/a5d7f10b)
<a name="max-range-right"></a>[`max-range-right`](#max-range-right) | Right axis maximum range.<br>If loaded data exceeds `max-range-right` value, right axis range is adjusted to show loaded data.<br>**Example**: `max-range-right = 100`| [↗](https://apps.axibase.com/chartlab/5f1445c6)
<a name="max-range-force"></a>[`max-range-force`](#max-range-force) | Left axis forced minimum and maximum range.<br>If loaded data exceeds `max-range-force`, axis range is **not** adjusted to show loaded data.<br>**Example**: `max-range-force = 100`| [↗](https://apps.axibase.com/chartlab/fa0b58a7)
<a name="min-range-force"></a>[`min-range-force`](#min-range-force)| Left axis forced minimum and maximum range.<br>If loaded data exceeds `min-range-force`, axis range is **not** adjusted to show loaded data.<br>**Example**: `min-range-force = 0`| [↗](https://apps.axibase.com/chartlab/fa0b58a7)
<a name="min-range-right-force"></a>[`min-range-right-force`](#min-range-right-force)| Right axis forced minimum range.<br>If loaded data exceeds `min-range-right-force`, right axis range is **not** adjusted to show loaded data.<br>**Example**: `min-range-right-force = 0`| [↗](https://apps.axibase.com/chartlab/ac40afc3)
<a name="max-range-right-force"></a>[`max-range-right-force`](#max-range-right-force)| Right axis forced maximum range.<br>If loaded data exceeds `max-range-right-force`, right axis range is **not** adjusted to show loaded data.<br>**Example**: `max-range-right-force = 100`| [↗](https://apps.axibase.com/chartlab/ac40afc3)

## Series Settings

* The settings apply to the `[series]` section.

### Series Selection

Name | Description | &nbsp;
:--|:--|:--
<a name="metric"></a>[`metric`](#metric)| Metric name.<br>When requesting data from a relational database specify both `table` and `attribute` as an alternative.<br>**Example**: `metric = cpu_busy`| [↗](https://apps.axibase.com/chartlab/f901f339)
<a name="table"></a>[`table`](#table) | Table in the relational database from which to retrieve numeric values.<br>Alternative to `metric` setting.<br>Both `table` and `attribute` must be defined.<br>**Example**: `table = KLZ_CPU`| [↗](https://apps.axibase.com/chartlab/35fde2bf)
<a name="attribute"></a>[`attribute`](#attribute)| Column name in a relational database table. The column must be of numeric data type.<br>**Example**: `attribute = Current_Average` | [↗](https://apps.axibase.com/chartlab/35fde2bf)
<a name="data-type"></a>[`data-type`](#data-type)| Series data type.<br>Possible values: `history`, `forecast`, `forecast_deviation`, `lower_confidence`, `upper_confidence`.<br>**Example**: `data-type = forecast`| [↗](https://apps.axibase.com/chartlab/2942e708)
<a name="forecast-name"></a>[`forecast-name`](#forecast-name)| [Forecast name](https://axibase.com/docs/atsd/api/data/series/query.html#forecast-filter).<br>If no forecast name is defined, [default series forecast](https://axibase.com/docs/atsd/forecasting/#persistence-settings) is loaded.<br>**Example**: `forecast-name = hw5`| [↗](https://apps.axibase.com/chartlab/533918cc)

### Entity Filter

Name | Description | &nbsp;
:--|:--|:--
<a name="entity"></a>[`entity`](#entity) | Entity name.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).<br>**Example**: `entity = nurswgvml007`| [↗](https://apps.axibase.com/chartlab/d65bdce1)
<a name="entities"></a>[`entities`](#entities)| Select multiple entities with one setting.<br>If both `entity` and `entities` are specified, `entity` takes precedence.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).<br>**Example**: `entities = nurswgvml007, nurswgvml008`| [↗](https://apps.axibase.com/chartlab/fc94835a)
<a name="entity-group"></a>[`entity-group`](#entity-group)| [Entity group](https://axibase.com/docs/atsd/configuration/entity_groups.html) name.<br>**Example**: `entity-group = nmon-sub-group` | [↗](https://apps.axibase.com/chartlab/f67397d7)
<a name="entity-expression"></a>[`entity-expression`](#entity-expression)| Server-side [entity filter](https://axibase.com/docs/atsd/api/data/filter-entity.html) to select series for matching entities by name, tags, and fields.<br>Refer to [Entity Filter](https://axibase.com/docs/atsd/api/data/series/query.html#entity-filter) REST API documentation for more information.<br>**Example**: `entity-expression = tags.app LIKE '*a*'`| [↗](https://apps.axibase.com/chartlab/9b48aaaf)

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

Name | Description | &nbsp;
:--|:--|:--
<a name="tag-expression"></a>[`tag-expression`](#tag-expression)| Server-side [tag filter](https://axibase.com/docs/atsd/api/data/series/query.html#tag-expression) to select series for matching tags.<br>**Example**: `tag-expression = tags.make LIKE 'AU*'`| [↗](https://apps.axibase.com/chartlab/ae493a65)
<a name="exact-match"></a>[`exact-match`](#exact-match)| Ignore series with tags other than those [specified](https://axibase.com/docs/atsd/api/data/series/query.html#tag-filter) in the `[tags]` section.<br>Default value: `false`.<br>**Example**: `exact-match = true`| [↗](https://apps.axibase.com/chartlab/79cd34ec)

### Series Style

Name | Description | &nbsp;
:--|:--|:--
<a name="color"></a>[`color`](#color)| Color applied to series shape.<br>Possible value: color name or hex code.<br>Default values: `steelblue, orange, green, purple`, `maroon`, `yellowgreen`, `hotpink`, `chocolate`, `deepskyblue`.<br>Additional series are assigned colors at random.<br>**Example**: `color = blue`<br>Recommended color picking tools: [`colorhexa`](https://www.colorhexa.com/ffffff-to-0c9150), [`material.io`](https://material.io/design/color/#tools-for-picking-colors).| [↗](https://apps.axibase.com/chartlab/3d6cab08)
<a name="label"></a>[`label`](#label)| Series label displayed in the legend. Overrides `label-format`.<br>**Example**: `label = CPU Busy - nurswgvml007`| [↗](https://apps.axibase.com/chartlab/bca3cf3e)
<a name="style"></a>[`style`](#style)| CSS style applied to the series shape.<br>**Example**: `style = stroke-width: 4`<br>`style = stroke-dasharray: 5 1 2`| [↗](https://apps.axibase.com/chartlab/15b5420b)
<a name="tooltip"></a>[`tooltip`](#tooltip)| Tooltips displayed on mouseover.<br>**Example**: `tooltip = NURSWGVML007`| [↗](https://apps.axibase.com/chartlab/a46ea93e)
<a name="axis"></a>[`axis`](#axis)| Series axis placement.<br>Possible values: `left`, `right`.<br>Default value: `left`.<br>**Example**: `axis = right`| [↗](https://apps.axibase.com/chartlab/8a66a428)
<a name="format"></a>[`format`](#format) | Format series values with a [measurement unit](../../syntax/format-settings.md).<br>**Example**: `format = kilobytes`| [↗](https://apps.axibase.com/chartlab/938f5c6c)
<a name="display"></a>[`display`](#display)| Hide series based on boolean value or expression.<br>Supported fields: `value`, `previous`, `time`, [value](../../syntax/value-functions.md) and [ranking](../../syntax/ranking-functions.md)functions.<br>**Example**: `display = value >= top(3)`<br>`display = false`<br>`display = time < new Date().getTime() - 3600000*24*1`| [↗](https://apps.axibase.com/chartlab/22235081)
<a name="enabled"></a>[`enabled`](#enabled) | Toggle series visibility. Same as the [`display`](#display) setting except that the disabled series legend remains visible.| [↗](https://apps.axibase.com/chartlab/c576ab5d)
<a name="alert-expression"></a>[`alert-expression`](#alert-expression)| Boolean expression to apply conditional CSS style to series shapes.<br>The CSS style must be specified in the `alert-style` setting.<br>The `value` field refers to the series value.<br>**Example**: `alert-expression = value < 95`| [↗](https://apps.axibase.com/chartlab/28e4a7f0)
<a name="alert-style"></a>[`alert-style`](#alert-style) | CSS style applied to the series shape if `alert-expression` returns `true`.<br>**Example**: `alert-style = fill: red; stroke: red`| [↗](https://apps.axibase.com/chartlab/28e4a7f0)
<a name="audio-alert"></a>[`audio-alert`](#audio-alert) | Boolean expression to apply conditional CSS style to series shapes.<br>**Example**: `audio-alert = /portal/resource/alarm.ogg`| [↗](https://apps.axibase.com/chartlab/d3943e68)

### Transformation

#### Aggregation

Aggregation splits the underlying series into periods of equal duration and applies statistical functions to values in each period. The derived series is regular and has fewer samples.

```ls
[series]
  statistics = avg
  period = 5 minute
```

![](./images/aggregate.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/de76132b/3/)

Name | Description | &nbsp;
:--|:--|:--
<a name="statistics"></a>[`statistics`](#statistics) | Statistical [function](../../configuration/aggregators.md) applied to values in each period.<br>**Example**: `statistics = avg`| [↗](https://apps.axibase.com/chartlab/de76132b/2/)
<a name="period"></a>[`period`](#period) | Repeating time interval to split the timespan, specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Possible values: `count time_unit` or `auto`.<br>**Example**: `period = 15 minute`| [↗](https://apps.axibase.com/chartlab/0e1efe88)
<a name="align"></a>[`align`](#align) | [Alignment](https://axibase.com/docs/atsd/api/data/series/aggregate.html#period) of the period start or end time.<br>Possible values: `CALENDAR`, `START_TIME`, `END_TIME`, `FIRST_VALUE_TIME`.<br>Default value: `CALENDAR`.<br>**Example**: `align = END_TIME`| [↗](https://apps.axibase.com/chartlab/017975c4)
<a name="interpolate"></a>[`interpolate`](#interpolate) | Add missing aggregation periods.<br>Possible values: `NONE`, `LINEAR`, `PREVIOUS`, `NEXT`, `VALUE(n)`, where `n` is the numerical value to be used to fill missing samples.<br>Default value: `NONE`.<br>**Example**: `interpolate = LINEAR`| [↗](https://apps.axibase.com/chartlab/7af6f848)
<a name="interpolate-extend"></a>[`interpolate-extend`](#interpolate-extend)| Interpolate leading and trailing periods with `NEXT` or `PREVIOUS` value.<br>**Example**: `interpolate-extend = true`| [↗](https://apps.axibase.com/chartlab/4a3b8f7a)

> See also [Aggregation](https://axibase.com/docs/atsd/api/data/series/aggregate.html) transformation in REST API.

#### Interpolation

Name | Description | &nbsp;
:--|:--|:--
<a name="interpolate-function"></a>[`interpolate-function`](#interpolate-function)| Interpolation function applied to detailed samples.<br>Possible values: `NONE`, `LINEAR`, `PREVIOUS`, `NEXT`, `VALUE(n)`, where `n` is the numerical value to be used to fill missing samples.<br>Default value: `NONE`.<br>**Example**: `interpolate-function = linear`| [↗](https://apps.axibase.com/chartlab/6221d836)
<a name="interpolate-period"></a>[`interpolate-period`](#interpolate-period)| Interpolation period specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>**Example**: `interpolate-period = 1 minute`| [↗](https://apps.axibase.com/chartlab/6221d836)
<a name="interpolate-boundary"></a>[`interpolate-boundary`](#interpolate-boundary)| [Interpolation](https://axibase.com/docs/atsd/api/data/series/interpolate.html#boundary) for leading and trailing values.<br>Possible values: `inner`- Data outside of the selection interval is not loaded by the database. `outer`- One value before and one value after the selection interval is loaded by the database to interpolate leading and trailing values.<br>Default value: `inner`.<br>**Example**: `interpolate-boundary = outer`| [↗](https://apps.axibase.com/chartlab/5713cdf9)
<a name="interpolation-fill"></a>[`interpolation-fill`](#interpolation-fill)| Interpolate values outside of the selection interval.<br>Possible values: `false`, `true`, `count` of values to fill.<br>Default value: `false`.<br>**Example**: `interpolate-fill = true`| [↗](https://apps.axibase.com/chartlab/9361ea19)

> See also [Interpolation](https://axibase.com/docs/atsd/api/data/series/interpolate.html) transformation in REST API.

#### Rate

Name | Description | &nbsp;
:--|:--|:--
<a name="rate"></a>[`rate`](#rate)| Compute the difference between consecutive samples per [period of time](https://axibase.com/docs/atsd/api/data/series/rate.html#rate-period).<br>If the period duration is zero, for example `rate = 0`, the rate function calculates the difference between consecutive samples, without adjusting it by the time difference between the samples.<br>Format: `count time_unit`.<br>**Example**: `rate = 15 second`| [↗](https://apps.axibase.com/chartlab/84c208d4)
<a name="rate-counter"></a>[`rate-counter`](#rate-counter) | Possible values: `false`, `true`.<br>Default value: `true`<br>If `true`, negative differences between consecutive sample values are converted to `0`.<br>**Example**: `rate-counter = true`| [↗](https://apps.axibase.com/chartlab/5e781448)

> See also [Rate](https://axibase.com/docs/atsd/api/data/series/rate.html) transformation in REST API.

#### Grouping

Name | Description | &nbsp;
:--|:--|:--
<a name="merge-fields"></a>[`merge-fields`](#merge-fields) |Group series based on merge field.<br>Only applies in `multiple-series` mode.<br>By default, series which use [wildcard](../../syntax/wildcards.md), `entities`, `entityGroup` settings or comma-separated tag values are treated as multiple series.<br>Possible values: `entity` - Combine all series with the same entity. `tag-name` - Combine all series with tag defined by `tag-name`.<br>**Example**: `merge-fields = mount_point` | [↗](https://apps.axibase.com/chartlab/65f07c02)
<a name="group-statistic"></a>[`group-statistic`](#group-statistic) | Group statistic function assigned to the series.<br>Refer to [Aggregators](../../configuration/aggregators.md) for possible values.<br>**Example**: `group-statistic = sum`| [↗](https://apps.axibase.com/chartlab/d2b23084)
<a name="group-period"></a>[`group-period`](#group-period)|Group period over which to calculate [group statistics](https://axibase.com/docs/atsd/api/data/series/group.html#group-processor) specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>Default value: `auto` (`15 minute`).<br>**Example**: `group period = 1 month`| [↗](https://apps.axibase.com/chartlab/2ee1bace)
<a name="group-first"></a>[`group-first`](#group-first) | The sequence of aggregation and grouping.<br>If set to `true`, grouping is performed before aggregation.<br>**Example**: `group-first = false`| [↗](https://apps.axibase.com/chartlab/732de421)
<a name="group-interpolate"></a>[`group-interpolate`](#group-interpolate)| Interpolate grouped values.<br>Possible values: `LINEAR`, `PREVIOUS`, `VALUE`.<br>**Example**: `group-interpolate = LINEAR`| [↗](https://apps.axibase.com/chartlab/ea0512fa)
<a name="group-interpolate-extend"></a>[`group-interpolate-extend`](#group-interpolate-extend)| Fill missing leading and trailing periods with `NEXT` or `PREVIOUS` values.<br>**Example**: `group-interpolate-extend = true`| [↗](https://apps.axibase.com/chartlab/ea0512fa)

> See also [Grouping](https://axibase.com/docs/atsd/api/data/series/group.html) transformation in REST API.

#### Downsampling

Name | Description | &nbsp;
:--|:--|:--
<a name="downsample"></a>[`downsample`](#downsample)| Enable [downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html#downsampling).<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `downsample = true`| [↗](https://apps.axibase.com/chartlab/ac7866e6)
<a name="downsample-gap"></a>[`downsample-gap`](#downsample-gap)| Frequency of repeated values defined as [`downsample-gap`](https://axibase.com/docs/atsd/api/data/series/downsample.html#parameters) in [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>A larger gap value decreases the occurrence of repeated values.<br>Possible values: `count time_unit`.<br>Default value: `10 minute`.<br>**Example**: `downsample-gap = 10 minute`| [↗](https://apps.axibase.com/chartlab/194e1b66)
<a name="downsample-ratio"></a>[`downsample-ratio`](#downsample-ratio)| Downsample [ratio](https://axibase.com/docs/atsd/api/data/series/downsample.html#ratio-check).<br>**Example**: `downsample-ratio = 1.1`| [↗](https://apps.axibase.com/chartlab/62853a21)
<a name="downsample-algorithm"></a>[`downsample-algorithm`](#downsample-algorithm)| [Downsample algorithm](https://axibase.com/docs/atsd/api/data/series/downsample.html#algorithm) used in calculation.<br>Possible values: `DETAIL`, `INTERPOLATE`.<br>Default value: `DETAIL`.<br>**Example**: `downsample-algorithm = interpolate`| [↗](https://apps.axibase.com/chartlab/0955c2ee)
<a name="downsample-difference"></a>[`downsample-difference`](#downsample-difference)|Deviation between consecutive values which ATSD considers equivalent.<br>Consolidate samples with minor deviations when downsampling.<br>**Example**: `downsample-difference = 4`| [↗](https://apps.axibase.com/chartlab/6764238a)

> See also [Downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html) transformation in REST API.

#### Smoothing

Name | Description | &nbsp;
:--|:--|:--
<a name="smooth"></a>[`smooth`](#smooth)| [Averaging](https://axibase.com/docs/atsd/api/data/series/smooth.html) function applied to window samples.<br>Possible values: `AVG`, `EMA`, `WAVG`, `WTAVG`.<br>**Example**: `smooth = AVG`| [↗](https://apps.axibase.com/chartlab/77d3a87b)
<a name="smooth-factor"></a>[`smooth-factor`](#smooth-factor)| [`EMA`](https://axibase.com/docs/atsd/api/data/series/smooth.html#exponential-moving-average) function weight parameter. Possible values: Between `0` and `1`.<br>**Example**: `smooth-factor = 0.5`| [↗](https://apps.axibase.com/chartlab/7ee5133e)
<a name="smooth-range"></a>[`smooth-range`](#smooth-range) | Alternative [`EMA`](https://axibase.com/docs/atsd/api/data/series/smooth.html#exponential-moving-average) function weight parameter.<br>**Example**: `smooth-range = 60000`| [↗](https://apps.axibase.com/chartlab/d26e18b3)
<a name="smooth-count"></a>[`smooth-count`](#smooth-count)| Window size.<br>A larger window performs greater smoothing.<br>**Example**: `smooth-count = 50`| [↗](https://apps.axibase.com/chartlab/9af9e77b)
<a name="smooth-interval"></a>[`smooth-interval`](#smooth-interval) | Window duration interval, specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>**Example**: `smooth-interval = 15 minute`| [↗](https://apps.axibase.com/chartlab/e3bc966e)
<a name="smooth-minimum-count"></a>[`smooth-minimum-count`](#smooth-minimum-count)| [Minimum number](https://axibase.com/docs/atsd/api/data/series/smooth.html#fields) of samples in a window required to apply the smoothing function.<br>Default value: `1`.<br>**Example**: `smooth-minimum-count = 10`| [↗](https://apps.axibase.com/chartlab/eeeeba28)
<a name="smooth-incomplete-value"></a>[`smooth-incomplete-value`](#smooth-incomplete-value) | Sample value returned when downsampling window is not full.<br>**Example**: `smooth-incomplete-value = NaN`| [↗](https://apps.axibase.com/chartlab/6666ab6c)

> See also [Smoothing](https://axibase.com/docs/atsd/api/data/series/smooth.html) transformation in REST API.

#### Transformation Order

Name | Description | &nbsp;
:--|:--|:--
<a name="transformation-order"></a>[`transformation-order`](#transformation-order)| [`transformation-order`](https://axibase.com/docs/atsd/api/data/series/query.html#transformations) controls the transformation sequence.<br>Possible values: `interpolate`, `group`, `rate`, `aggregate`, `smooth`, `downsample`, `forecast`, `none`. If set to `none`, the default sequence is used.<br>**Example**: `transformation-order = downsample, aggregate`.<br>Default value: `none`<br>If specified, the `server-aggregate` setting is set to `true` by default.| [↗](https://apps.axibase.com/chartlab/745ffe30/2/)

### Derived Value Settings

Specify `value` setting to create calculated series derived from raw series using arithmetic expressions in JavaScript syntax.

The expression must return a number or `null`. Samples with `null` values are hidden.

Name | Description | &nbsp;
:--|:--|:--
<a name="alias"></a>[`alias`](#alias)| Unique series name to pass data to other series.<br>**Example**: `alias = s1`| [↗](https://apps.axibase.com/chartlab/a18e5720)
<a name="value"></a>[`value`](#value) | Formula to calculate derived values at each timestamp of the other series identified by alias.<br>The formula can include [value functions](../../syntax/value-functions.md).<br>**Example**: `value = max('s1') - 10`| [↗](https://apps.axibase.com/chartlab/25a47d0d)
<a name="replace-value"></a>[`replace-value`](#replace-value) | Formula to replace values in the current series.<br>Supported [fields](../../syntax/replace-value-functions.md): `value`, `time`, `previousValue`, `previousTime`.<br>Unlike `value` setting, creating and referring to another series is not required.<br>**Example**: `replace-value = Math.log(value)`| [↗](https://apps.axibase.com/chartlab/5ff83724)<br>[↗](https://apps.axibase.com/chartlab/5ff83724/2/)
