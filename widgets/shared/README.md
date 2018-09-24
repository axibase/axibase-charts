# Shared Settings

## Overview

The **Shared Settings** are common settings supported by all widgets.

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`type`](#type) | `type = chart`| Widget type.<br>Possible values:<br><li>[`chart`](../time-chart/README.md)<br><li>[`gauge`](../gauge-chart/README.md)<br><li>[`bar`](../bar-chart/README.md)<br><li>[`histogram`](../histogram/README.md)<br><li>[`box`](../box-chart/README.md)<br><li>[`calendar`](../calendar-chart/README.md)<br><li>[`treemap`](../treemap/README.md)<br><li>[`pie`](../pie-chart/README.md)<br><li>[`console`](../alert-console/README.md)<br><li>[`property`](../property-table/README.md)<br><li>[`text`](../text-widget/README.md)<br><li>[`page`](../page-widget/README.md)<br><li>[`graph`](../graph/README.md)| [↗](https://apps.axibase.com/chartlab/211741f2)<br>[↗](https://apps.axibase.com/chartlab/9b0e6e9f)<br>[↗](https://apps.axibase.com/chartlab/c6e05640)<br>
[`tooltip`](#tooltip) | `tooltip = Daily Averages` | Widget description displayed on title mouseover. | [↗](https://apps.axibase.com/chartlab/61c9771e)
[`header-style`](#header-style)| `header-style = color: red`| CSS style to apply color to the widget header or to hide it.| [↗](https://apps.axibase.com/chartlab/b4c45b71/2/)
[`offset`](#offset) | `offset-left = 50` | Offset from the specified page border, in pixels.<br>Possible borders: `left`, `right`, `top`, `bottom` | [↗](https://apps.axibase.com/chartlab/720677c3)
[`colors`](#colors) | `colors = green, #ccc` | Comma separated list of colors applied to series.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors) or hex codes.<br>Default colors are: `steelblue, orange, red`.| [↗](https://apps.axibase.com/chartlab/55dde7a7)
[`scale`](#scale) | `scale = 0.8` | Chart scale.<br>Value must exceed `0.0`.<br>Default value: `1.0`.| [↗](https://apps.axibase.com/chartlab/1679114f)
[`centralize-columns`](#centralize-columns)| `centralize-columns = true` | Position columns between ticks.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/96b90a99)
[`markers`](#markers) | `markers = false` | Hide series markers.<br>Default value: `true`. | [↗](https://apps.axibase.com/chartlab/e14a3d7e)
[`display-panels`](#display-panels) | `display-panels = true` | Display control panels in the top left or right corners in [Time](../time-chart/README.md) and [Bar](../bar-chart/README.md) charts.<br>Possible values: `true`, `false`, `hover`.<br>Default value: `hover`.| [↗](https://apps.axibase.com/chartlab/efa832ea/2/)
[`expand-panels`](#expand-panels) | `expand-panels = all`| Display control panels in the top left or right corners in [Time](../time-chart/README.md) and [Bar](../bar-chart/README.md) Charts.<br>Possible values: `true`, `false`, `hover`, `all`.<br>Default value: `hover`.| [↗](https://apps.axibase.com/chartlab/808e5846/18/)

### Data Loading

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`timespan`](#timespan) | `timespan = 6 hour` | Series interval.<br>Possible values:<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html)<br>Default value: `1 hour`.| [↗](https://apps.axibase.com/chartlab/f08405c6)
[`ahead-time-span`](#ahead-time-span) | `ahead-time-span = 80%` | Visualized time ahead of final series value.<br>Possible values:<br><li>Number| [↗](https://apps.axibase.com/chartlab/adf5eeda)
[`cache`](#cache) | `cache = true` | Retrieve only the most recent value from HBase **Last Insert** table.<br>Default value: `false`| [↗](https://apps.axibase.com/chartlab/032bcfcc)
[`limit`](#limit) | `limit = 10` | Samples returned for a loaded series.<br>Not applied to alert queries in [Alert Console](../alert-console/README.md).|[↗](https://apps.axibase.com/chartlab/13549b9c/2/)<br>[↗](https://apps.axibase.com/chartlab/2604d710)
[`refresh-interval`](#refresh-interval) | `refresh-interval = 2 minute` |Interval to refresh data. <br>Possible values:<br><li>`auto`<br><li>Number<br>Default value: `auto` (`5` seconds) | [↗](https://apps.axibase.com/chartlab/da03b8a5/24/)
[`retry-refresh-interval`](#retry-refresh-interval) | `retry-refresh-interval = 5 minute`| Period after ATSD receives empty sample to retry data refresh. <br>Possible values:<br><li>`auto`<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html) | [↗](https://apps.axibase.com/chartlab/bf0babfc)
[`error-refresh-interval`](#error-refresh-interval) | `error-refresh-interval = 30 minute`| Period after ATSD handles a server processing error before refreshing data. <br>Possible values:<br><li>`auto`<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html) | [↗](https://apps.axibase.com/chartlab/9f482e52)

### Legend

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`legend-position`](#legend-position) | `legend-position = left` | Legend location.<br>Possible values:<br><li>`hidden`<br><li>`top`<br><li>`right`<br><li>`bottom`<br><li>`left`<br>Default value: `hidden`.<br>Combine values to define corners.| [↗](https://apps.axibase.com/chartlab/b962dd26)
[`label-format`](#format-labels)| `label-format = tagName`<br>`label-format = statistics - period` | Series labels.<br>Possible values:<br><li>Text<br><li>Chart component placeholders (see example configuration).<br>Refer to [Label Formating](../../syntax/label-formatting.md) for possible values.| [↗](https://apps.axibase.com/chartlab/f2bed31b)

### Axis

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`rotate-ticks`](#rotate-ticks) | `rotate-ticks = 0` | Rotate labels on the time axis by `n` degrees.<br>Possible values: between `0` (horizontal) and `90` (vertical).<br>Default value: `90` (vertical).| [↗](https://apps.axibase.com/chartlab/9370ecd7)
[`centralize-ticks`](#centralize-ticks) | `centralize-ticks = true` | Center time and date markers with respect to ticks.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/834c0e43)
[`max-range`](#max-range) | `max-range = 100`| Left axis maximum range.<br>If loaded data exceeds `max-range` value, visualization is scaled to show true maximum range.| [↗](https://apps.axibase.com/chartlab/74052e3e)
[`min-range`](#min-range) | `min-range = 0`| Left axis minimum range.<br>If loaded data exceeds `min-range` value, visualization is scaled to show true minimum range.| [↗](https://apps.axibase.com/chartlab/d9eeeda5)
[`max-range-right`](#max-range-right) | `max-range-right = 100`| Right axis maximum range.<br>If loaded data exceeds `max-range-right` value, visualization is scaled to show true maximum range.| [↗](https://apps.axibase.com/chartlab/5f1445c6)
[`min-range-right`](#min-range-right) | `min-range-right = 0`| Right axis minimum range.<br>If loaded data exceeds `min-range-right` value, visualization is scaled to show true minimum range.| [↗](https://apps.axibase.com/chartlab/a5d7f10b)
[`max-range-force`](#max-range-force) | `max-range-force = 100` | Left axis forced minimum and maximum range.<br>If loaded data exceeds `max-range-force`, visualization is not scaled to show true maximum range. | [↗](https://apps.axibase.com/chartlab/fa0b58a7)
[`min-range-force`](#min-range-force) | `min-range-force = 0`<br>`min-range-force = 100` | Left axis forced minimum and maximum range.<br>If loaded data exceeds `min-range-force`, visualization is not scaled to show true minimum range. | [↗](https://apps.axibase.com/chartlab/fa0b58a7)
[`max-range-right-force`](#max-range-right-force) | `max-range-right-force = 100` | Right axis forced maximum range.<br>If loaded data exceeds `max-range-right-force`, visualization is not scaled to show true maximum range. | [↗](https://apps.axibase.com/chartlab/ac40afc3)
[`min-range-right-force`](#min-range-right-force) | `min-range-right-force = 0`<br>`min-range-right-force = 0` | Right axis forced minimum range.<br>If loaded data exceeds `min-range-right-force`, visualization is not scaled to show true maximum range. | [↗](https://apps.axibase.com/chartlab/ac40afc3)
[`axis-title`](#axis-title) | `axis-title = CPU Utilization in %`| Vertical text displayed along the left axis.| [↗](https://apps.axibase.com/chartlab/d8adfe73)
[`axis-title-right`](#axis-title) | `axis-title-right = Free Memory`| Vertical text displayed along the right axis.| [↗](https://apps.axibase.com/chartlab/d8adfe73)
[`day-format`](#day-format) | `day-format = %y/%m/%d`| `x` axis format applied to the day part.| [↗](https://apps.axibase.com/chartlab/40dafe6b/2/)

## Series Settings

* The settings apply to the `[series]` section.

### Series Selection

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`data-type`](#data-type) | `data-type = forecast` | Series data type.<br>Possible values:<br><li>`historical`<br><li>`forecast`<br><li>`forecast_deviation`<br><li>`lower_confidence`<br><li>`upper_confidence`.| [↗](https://apps.axibase.com/chartlab/08625792)
[`metric`](#metric) | `metric = cpu_busy` | Metric name. | [↗](https://apps.axibase.com/chartlab/4e4994ea)
[`table`](#table) | `table = KLZ_CPU`| Table in the relational database from which to retrieve numeric values.<br>Alternative to `metric` setting.<br>Both `table` and `attribute` must be defined.| [↗](https://apps.axibase.com/chartlab/35fde2bf)
[`attribute`](#attribute) | `attribute = Current_Average` | Column name in a relational database. The column must be of numeric data type.  | [↗](https://apps.axibase.com/chartlab/35fde2bf)
[`entity`](#entity) | `entity = nurswgvml007`<br>`entity = nurswgvml00*`| Entity name.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).| [↗](https://apps.axibase.com/chartlab/d65bdce1)
[`entities`](#entities)| `entities = nurswgvml007, nurswgvml008`| Define multiple entities with one setting.<br>If both `entity` and `entities` are specified, the former takes precedence.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md)| [↗](https://apps.axibase.com/chartlab/2bc197f4)<br>[↗](https://apps.axibase.com/chartlab/e1d30997/2/)
[`entity-group`](#entity-group) | `entity-group = nmon-sub-group` | [Entity group](https://axibase.com/docs/atsd/configuration/entity_groups.html) name. | [↗](https://apps.axibase.com/chartlab/5e951ce2)
[`entity-expression`](#entity-expression) | `entity-expression = tags.app like '*a*'` | Server-side filter for all series by entity names, tags, and fields.<br>Refer to [Expression Syntax](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax) for more information.| [↗](https://apps.axibase.com/chartlab/ffc97c51)
[`tag-expression`](#tag-expression)| `tag-expression = tags.make LIKE 'AU*'`| Server-side filter for [series tags](https://axibase.com/docs/atsd/api/meta/metric/series-tags.html).<br>Refer to [Expression Syntax](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax) for more information.| [↗](https://apps.axibase.com/chartlab/135a3458)
[`exact-match`](#exact-match) | `exact-match = true` | Ignore series with tags other than those specified in the series configuration.<br>Default value: `false` | [↗](https://apps.axibase.com/chartlab/dada4561/2/)
[`series-limit`](#series-limit) | `series-limit = 10` | Maximum number of series retrieved from the database to prevent excessive processing.| [↗](https://apps.axibase.com/chartlab/af34dc29)
[`forecast-name`](#forecast-name) | `forecast-name = hw5` | Forecast name.<br>If no forecast name is defined, [default series forecast](https://axibase.com/docs/atsd/forecasting/#persistence-settings) is loaded.| [↗](https://apps.axibase.com/chartlab/3e5fa03c)

#### Tags

The tags can be filtered using the `tag-expression` or by specifying specific tags to match in the `[tags]` section.

```ls
[series]
  metric = disk_used
  entity = nurswgvml007
  [tags]
    mount_point = /tmp
    fstype = tmpfs
```

If there are several values for the same tag, separate the values with a comma:

```ls
[tags]
  tag_name = tag_value1, tag_value2
```

If the tag name contains an equals sign `=` or the tag value contains a comma`,`, escape them with a backslash `\`:

```ls
[tags]
  tag\=name = tag\,value
```

The tag name and value are `tag=name` and `tag=value`, respectively.

If the tag name contains reserved names such as setting names, surround the tag name with quotes to avoid collisions:

```ls
[tags]
  "type" = sensor
```

### Style Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`color`](#color) | `color = orange` | Series color. | [↗](https://apps.axibase.com/chartlab/18bbef10)
[`label`](#label) | `label = CPU Busy - nurswgvml007` | Series label, visible in series legend. | [↗](https://apps.axibase.com/chartlab/dad7c267)
[`style`](#style) | `style = stroke-width: 4`<br>`style = stroke-dasharray: 5 1 2` | CSS style applied to series line.| [↗](https://apps.axibase.com/chartlab/fb6d13d9)<br>[↗](https://apps.axibase.com/chartlab/6d91d52f) [↗](https://apps.axibase.com/chartlab/5e47cfbe)
[`tooltip`](#tooltip) | `tooltip = NURSWGVML007` | Tooltips displayed on mouseover. | [↗](https://apps.axibase.com/chartlab/1687516c)
[`axis`](#axis) | `axis = right` | Series axis.<br>Possible values: <br><li>`left`<br><li>`right`<br>Default value: `left`| [↗](https://apps.axibase.com/chartlab/da03b8a5/20/)
[`format`](#format)| `format = kilobytes` | Format series values with a measurement unit.<br>See [Format Settings](../../syntax/format-settings.md) for possible values.| [↗](https://apps.axibase.com/chartlab/c957cf22)
[`display`](#display) | `display = value > top(3)`<br>`display = false` | Hide series based on boolean value or an [expression](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax).| [↗](https://apps.axibase.com/chartlab/fbbab68b)<br>[↗](https://apps.axibase.com/chartlab/628cd2b0)<br>
[`enabled`](#enabled) | `enabled = false`<br>`enabled = max('1 day') > 10` | Hide series based on boolean value or an [expression](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax), however keep the series legend visible. | [↗](https://apps.axibase.com/chartlab/63c18977)
[`alert-expression`](#alert-expression)| `alert-expression = value < 95` | Boolean expression to apply conditional style to the series.<br>The CSS style must be specified in the `alert-style` setting.<br>The `value` field refers to the series value. | [↗](https://apps.axibase.com/chartlab/e389a1ab)
[`alert-style`](#alert-style) | `alert-style = fill: red; stroke: red`| CSS style applied to the series rectangle if `alert-expression` is `true`.| [↗](https://apps.axibase.com/chartlab/ddd854be)
[`audio-alert`](#audio-alert) | `audio-alert = (alert > 0.5) ? '/portal/resource/alarm.oog' : '/portal/resource/klaxon.oog'`| Play an audio file when `alert-expression` evaluates to `true`.<br>Store audio files in the `opt/atsd/atsd/conf/portal` directory of local ATSD installation.<br>Set the following path in the `audio-alert` setting: `/portal/resource/alarm.oog`.<br>Files in this directory must always be referenced with `/resource/` before the file name.<br>Audio is only played on `true` to `false` changes or vise versa.<br>Audio is played once, on initial alert occurrence.<br>Supported audio alert formats:<br><li>`.mp3`<br><li>`.oog`<br><li>`.wav`<br>Refer to [Audio Alerts](../../configuration/audio-alerts.md) for more information.| [↗](https://apps.axibase.com/chartlab/59a834f3/2/)

### Transformation

#### Rate

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`rate`](#rate) | `rate = 15 second` | Compute the difference between consecutive samples per unit of time, or [rate period](https://axibase.com/docs/atsd/api/data/series/rate.html#rate-period).<br>Compute the underlying rate of change when a metric measures a continuously incrementing counter. <br>Possible values:<br><li>`auto`<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html)<br>Default value: `auto` (None)| [↗](https://apps.axibase.com/chartlab/d2daeb40)
[`rate-counter`](#rate-counter) | `rate-counter = true`| Compute the difference between consecutive samples.<br>Boolean expression.<br>Default value: `false`| [↗](https://apps.axibase.com/chartlab/d91e674f)

#### Aggregation

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`statistics`](#statistics) | `statistic = avg`| Aggregation statistic functions.<br>Refer to [Aggregators](../../configuration/aggregators.md) for possible values.| [↗](https://apps.axibase.com/chartlab/0143f4e7)
[`period`](#period) | `period = 15 minute`| [Aggregator](https://axibase.com/docs/atsd/api/data/series/aggregate.html#aggregate-processor) period.<br>Possible values:<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html)| [↗](https://apps.axibase.com/chartlab/661181a3)
[`align`](#align) | `align = END_TIME` | Alignment of the series start/end time.<br>Possible values:<br><li>`START_TIME`<br><li>`END_TIME`<br><li>`CALENDAR`<br><li>`FIRST_VALUE_TIME`.<br>Default value: `CALENDAR`<br>Refer to [Aggregate Processor](https://axibase.com/docs/atsd/api/data/series/aggregate.html#period) for more information.| [↗](https://apps.axibase.com/chartlab/e2b5bc91)

#### Interpolation

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`interpolate`](#interpolate) | `interpolate = LINEAR` | Interpolate missing aggregation periods.<br>Possible values:<br><li>`NONE`<br><li>`LINEAR`<br><li>`PREVIOUS`<br><li>`NEXT`<br><li>`VALUE(n)` where `n` is the numerical value to be used to fill missing samples<br>Default value: `NONE` | [↗](https://apps.axibase.com/chartlab/7af6f848)
[`interpolate-extend`](#interpolate-extend)| `interpolate-extend = true` | Interpolate leading and trailing periods with `NEXT` or `PREVIOUS` value.| [↗](https://apps.axibase.com/chartlab/4a3b8f7a)
[`interpolate-function`](#interpolate-function) | `interpolate-function = linear` | Interpolation function used for entire series, instead of only missing values.<br>Possible values:<br><li>`NONE`<br><li>`LINEAR`<br><li>`PREVIOUS`<br><li>`NEXT`<br><li>`VALUE(n)` where `n` is the numerical value to be used to fill missing samples<br>Default value: `NONE`| [↗](https://apps.axibase.com/chartlab/6221d836)
[`interpolate-period`](#interpolate-period) | `interpolate-period = 1 minute` | Define the period for interpolated values.<br>Possible values:<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html) | [↗](https://apps.axibase.com/chartlab/6221d836)
[`interpolate-boundary`](#interpolate-boundary) | `interpolate-boundary = outer` | [Interpolation](https://axibase.com/docs/atsd/api/data/series/interpolate.html#boundary) for leading and trailing values.<br>Possible values:<br><li>`inner`: Data outside of the selection interval is not loaded by the database.<br><li>`outer`: One value before and one value after the selection interval is loaded by the database to interpolate leading and trailing values.<br>Default value: `inner`| [↗](https://apps.axibase.com/chartlab/5713cdf9)
[`interpolation-fill`](#interpolation-fill) | `interpolate-fill = true` | Interpolate values outside of the selection interval.<br>Possible values:<br><li>`true`<br><li>`false`<br><li>Number of values to fill.<br>Default value: `false`| [↗](https://apps.axibase.com/chartlab/9361ea19)

#### Grouping

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`merge-fields`](#merge-fields) | `merge-fields = mount_point`<br>`merge-fields = entity`|Group series based on merge field.<br>Only applies in `multiple-series` mode.<br>By default, series which use [wildcard](../../syntax/wildcards.md), `entities`, `entityGroup` settings or comma-separated tag values are treated as multiple series.<br>Possible values:<br><li>`entity`: Combine all series with the same entity.<br><li>`tag-name`: Combine all series with tag defined by `tag-name`. | [↗](https://apps.axibase.com/chartlab/3d45a84c)
[`group-statistic`](#group-statistic) | `group-statistic = sum` | Group statistic function assigned to the series.<br>Refer to [Aggregators](../../configuration/aggregators.md) for possible values.| [↗](https://apps.axibase.com/chartlab/fb67609c)
[`group-period`](#group-period) | `group period = 1 month` | Group period over which to calculate [group statistics](https://axibase.com/docs/atsd/api/data/series/group.html#group-processor).<br>Possible values:<br><li>`auto` (`15` minutes)<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html)<br>Default value: `auto` | [↗](https://apps.axibase.com/chartlab/2ee1bace)
[`group-first`](#group-first) | `group-first = false` | Boolean expression controlling the sequence of aggregation and grouping.<br>If set to `true`, grouping is performed before aggregation.| [↗](https://apps.axibase.com/chartlab/732de421)
[`group-interpolate`](#group-interpolation) | `group-interpolate = LINEAR` | Interpolate grouped values.<br>Possible values:<br><li>`LINEAR`<br><li>`PREVIOUS`<br><li>`VALUE` | [↗](https://apps.axibase.com/chartlab/f0a36dac)
[`group-interpolate-extend`](#group-interpolate-extend) | `group-interpolate-extend = true` | Fill missing leading and trailing periods with `NEXT` or `PREVIOUS` values.<br>Boolean expression.| [↗](https://apps.axibase.com/chartlab/f0a36dac)

#### Downsampling

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`downsample`](#downsample) | `downsample = true` | Enable [downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html#downsampling).<br>Boolean expression.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/5d8aba18)
[`downsample-gap`](#downsample-gap) | `downsample-gap = 10 minute` | Frequency of repeated values by defining [`downsample-gap`](https://axibase.com/docs/atsd/api/data/series/downsample.html#parameters) as a time interval.<br>A larger gap value decreases the occurrence of repeated values.<br>Possible values: <br><li>`auto`<br><li>[Time Unit](https://axibase.com/docs/atsd/api/data/series/time-unit.html)<br>Default value: `auto` (`10` minutes)| [↗](https://apps.axibase.com/chartlab/d8d2d8d0)
[`downsample-ratio`](#downsample-ratio) | `downsample-ratio = 1.1` | Downsample [ratio](https://axibase.com/docs/atsd/api/data/series/downsample.html#ratio-check).| [↗](https://apps.axibase.com/chartlab/3945b3cb)
[`downsample-algorithm`](#downsample-algorithm) | `downsample-algorithm = interpolate` | [Downsample algorithm](https://axibase.com/docs/atsd/api/data/series/downsample.html#algorithm) used in calculation.<br>Possible values:<br><li>`DETAIL`<br><li>`INTERPOLATE`.<br>Default value: `DETAIL`.| [↗](https://apps.axibase.com/chartlab/196c2069)
[`downsample-difference`](#downsample-difference) | `downsample-difference = 4` |Deviation between consecutive values which ATSD considers equivalent.<br>Consolidate samples with minor deviations when downsampling. | [↗](https://apps.axibase.com/chartlab/6d27e45f)

#### Smoothing

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`smooth`](#smooth) | `smooth = AVG` | Weighted [averaging](https://axibase.com/docs/atsd/api/data/series/smooth.html) function applied to window samples.<br>Possible values:<br><li>`AVG`<br><li>`EMA`<br><li>`WAVG`<br><li>`WTAVG` | [↗](https://apps.axibase.com/chartlab/3734bd35/4)
[`smooth-factor`](#smooth-range) | `smooth-factor = 0.5` | [`EMA`](https://axibase.com/docs/atsd/api/data/series/smooth.html#exponential-moving-average) function weight parameter. Possible values:<br><li>Number between `0` and `1`. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)
[`smooth-range`](#smooth-range) | `smooth-range = 60000` | Alternative [`EMA`](https://axibase.com/docs/atsd/api/data/series/smooth.html#exponential-moving-average) function weight parameter. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)
[`smooth-count`](#smooth-count) | `smooth-count = 50` | Window size.<br>A larger window performs greater smoothing. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)
[`smooth-interval`](#smooth-interval) | `smooth-interval = 15 minute` | Window duration interval. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)
[`smooth-minimum-count`](#smooth-minimum-count) | `smooth-minimum-count = 10` | [Minimum number](https://axibase.com/docs/atsd/api/data/series/smooth.html#fields) of samples in a window required to apply the smoothing function.<br>Default value: `1` | [↗](https://apps.axibase.com/chartlab/3734bd35/4)
[`smooth-incomplete-value`](#smooth-incomplete-value) | `smooth-incomplete-value = NaN` | Sample value returned when downsampling window is not full. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)

### Derived Value Settings

Specify `value` setting to create calculated series derived from raw series using arithmetic expressions in JavaScript syntax. The expression returns a number or `null`.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`replace-value`](#replace-value) | `replace-value = value < 50 ? null : value`| Modify or filter series values.<br>Example expression filters all values less than `50` from the series.<br>Aggregators are not supported.| [↗](https://apps.axibase.com/chartlab/0fda88a8)<br>[↗](https://apps.axibase.com/chartlab/1e4dccf0/2/)
[`alias`](#alias) | `alias = total`<br>`alias = free` | Unique series designation to pass data to other series. | [↗](https://apps.axibase.com/chartlab/e0623f81)
[`value`](#value) | `value = max('s1')`<br>`value = Math.max(0, value('alias'))`| Define series value.<br>Retrieve the value of the underlying series identified by alias.| [↗](https://apps.axibase.com/chartlab/6428aa9c)<br>[↗](https://apps.axibase.com/chartlab/a39c16f4)
[&nbsp;](#value-aggregators) | `value = avg('s1')`<br>`value = (1 - value('free') / value('total')) * 100`<br>`value = Math.max(0, value('alias'))`| [Aggregate statistic](../../configuration/aggregators.md) applied to the underlying series grouped by period.| [↗](https://apps.axibase.com/chartlab/89d05e9e)
[&nbsp;](#value-percentile) | `value = (1 - percentile(99,'free','5 minute') / percentile(99,'total','5 minute')) * 100`| Percentile statistics applied to underlying series.<br>Possible values: `0` to `100`<br>Apply to:<br><li>`alias`<br><li>`period`.| [↗](https://apps.axibase.com/chartlab/d56b107c)
[&nbsp;](#value-confidence-interval) | `value = (1 - lower_confidence(90, 'free') / forecast('total')) * 100`<br>`value = (1 - upper_confidence(90, 'free') / forecast('total')) * 100`| Upper and lower limits of the confidence interval for the underlying series.<br>Required arguments:<br><li>Level-specified integer from `0` to `100`<br><li>`alias`.| [↗](https://apps.axibase.com/chartlab/f155d312)
