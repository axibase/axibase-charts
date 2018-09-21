# Shared Settings

## Overview

The **Shared Settings** are common settings supported by all widgets.

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`type`](#type) | `type = chart`| Widget type.<br>Possible values:<br><li>[`chart`](../time-chart/README.md)<br><li>[`gauge`](../gauge-chart/README.md)<br><li>[`bar`](../bar-chart/README.md)<br><li>[`histogram`](../histogram/README.md)<br><li>[`box`](../box-chart/README.md)<br><li>[`calendar`](../calendar-chart/README.md)<br><li>[`treemap`](../treemap/README.md)<br><li>[`pie`](../pie-chart/README.md)<br><li>[`console`](../alert-console/README.md)<br><li>[`property`](../property-table/README.md)<br><li>[`text`](../text-widget/README.md)<br><li>[`page`](../page-widget/README.md)<br><li>[`graph`](../graph/README.md).| [↗](https://apps.axibase.com/chartlab/211741f2)<br>[↗](https://apps.axibase.com/chartlab/9b0e6e9f)<br>[↗](https://apps.axibase.com/chartlab/c6e05640)<br>
[`tooltip`](#tooltip) | `tooltip = Widget Tooltip Example` | Widget description on title mouseover. | [↗](https://apps.axibase.com/chartlab/61c9771e)
[`offset-left`](#offset-left) | `offset-left = 50` | Absolute offset from left boundary, in units. | [↗](https://apps.axibase.com/chartlab/720677c3)
[`offset-top`](#offset-top) | `offset-top = 50` | Absolute offset from top boundary, in units. | [↗](https://apps.axibase.com/chartlab/011dd3f6)
[`timespan`](#timespan) | `timespan = 6 hour` | Series interval.<br>Possible values:<br><li>`millisecond`<br><li>`second`<br><li>`minute`<br><li>`hour`<br><li>`day`<br><li>`month`<br><li>`quarter`<br><li>`year`.<br>Default value: `1 hour`.| [↗](https://apps.axibase.com/chartlab/f08405c6)
[`ahead-time-span`](#ahead-time-span) | `ahead-time-span = 80%` | Visualize time ahead of the final series value.<br>Defined in percent. | [↗](https://apps.axibase.com/chartlab/adf5eeda)
[`colors`](#colors) | `colors = green` | Define color palette.<br>Possible values: <br><li>CSS color names: `darkgreen`.<br><li>Hexadecimal color values: `#006400`<br>Default palette is defined by the array `window.defaultColors`.| [↗](https://apps.axibase.com/chartlab/fa6f3591)
[`legend-position`](#legend-position) | `legend-position = left`<br>`legend-position = bottomright` | Legend locations.<br>Possible values:<br><li>`hidden`<br><li>`top`<br><li>`right`<br><li>`bottom`<br><li>`left`<br>Default value: `hidden`.<br>Combine values to define corners.| [↗](https://apps.axibase.com/chartlab/adfe0fe2/10/)
[`scale`](#scale) | `scale = 1.5` | Scale widget.<br>Not supported in all browsers.| [↗](https://apps.axibase.com/chartlab/1679114f)
[`range`](#range) | `max-range = 40`<br>`min-range = 10`| Minimum and maximum range for left axis.<br>Loaded data samples can violate defined range.| [↗](https://apps.axibase.com/chartlab/389fc36a)
[`range-right`](#range-right) | `max-range-right = 250`<br>`min-range-right = 50` | Minimum and maximum range for right axis.<br>Loaded data samples can violate defined range.| [↗](https://apps.axibase.com/chartlab/1732e258)
[`force-range`](#force-range) | `min-range-force = 0`<br>`max-range-force = 100` | Forced minimum and maximum range for left axis, regardless of loaded data. | [↗](https://apps.axibase.com/chartlab/fa0b58a7)
[`force-range-right`](#force-range-right) | `min-range-right-force = 0`<br>`max-range-right-force = 100` | Forced minimum and maximum range for right axis, regardless of loaded data. | [↗](https://apps.axibase.com/chartlab/d80980a8/9/)
[`rotate-ticks`](#rotate-ticks) | `rotate-ticks = 45`<br>`rotate-ticks = true` | Rotate labels on the `x` axis by `n` degrees.<br>Set to `true` to rotate ticks by `90` degrees clockwise.<br>Default value: `90`.| [↗](https://apps.axibase.com/chartlab/9370ecd7)
[`centralize-ticks`](#centralize-ticks) | `centralize-ticks = true` | Position time and date markers centered with respect to ticks.<br>Boolean expression.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/834c0e43)
[`centralize-columns`](#centralize-columns)| `centralize-columns = true` | Position columns between ticks.<br>Boolean expression.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/96b90a99)
[`axis-title`](#axis-title) | `axis-title = CPU Utilization in %`<br>`axis-title-right = Free Memory in KB`| Label left and right axes.| [↗](https://apps.axibase.com/chartlab/d8adfe73)
[`style`](#style) | `style = padding: 50`| Apply styles to widget container. | [↗](https://apps.axibase.com/chartlab/6d91d52f)
[`header-style`](#header-style)| `header-style = background-color: steelblue`<br>`header-style = background: red`<br>`header-style = return 'background: white;'; header-style = display: none`| Customize widget header style.<br>Group diverse portals visually.<br>Possible values:<br><li>`background-color`: Replace color, retain pattern.<br><li>`background`: Replace both color and pattern.<br><li>`display: none`: Hide header.<br><li>`header-style = return 'background: white;';`: Remove all styles.| [↗](https://apps.axibase.com/chartlab/b4c45b71/2/)
[`markers`](#markers) | `markers = false` | Hide series marker values.<br>Boolean expression.<br>Default value: `true`. | [↗](https://apps.axibase.com/chartlab/e14a3d7e)
[`format-labels`](#format-labels)| `label-format = tagName`<br>`label-format = statistics - period` | Series labels<br> Text and placeholders are supported.<br>See [Label Formating](../../syntax/label-formatting.md) for possible values.| [↗](https://apps.axibase.com/chartlab/e9ae5adc)
[`date-format`](#date-format) | `day-format = %y/%m/%d`| `x` axis timestamp format.| [↗](https://apps.axibase.com/chartlab/40dafe6b/2/)
[`cache`](#cache) | `cache = true` | Retrieve the most recent value from HBase **Last Insert** table.| [↗](https://apps.axibase.com/chartlab/032bcfcc)
[`limit`](#limit) | `limit = 1000` | The number of samples returned for a loaded series.<br>Not applied to alert queries in [Alert Console](../alert-console/README.md).|[↗](https://apps.axibase.com/chartlab/13549b9c/2/)<br>[↗](https://apps.axibase.com/chartlab/2604d710)
[`audio-alert`](#audio-alert) | `audio-alert = (alert > 1) ? 'path/to/audio/file'` | Audio alert on initial widget data load.<br>Refer to [Audio Alerts](../../configuration/audio-alerts.md) for more information| [↗](https://apps.axibase.com/chartlab/59a834f3/5/)
[`display-panels`](#display-panels) | `display-panels = true` | Display control panels in the top left or right corners in Time and Bar charts.<br>Possible values: `true`, `false`, `hover`.<br>Default value: `hover`.| [↗](https://apps.axibase.com/chartlab/efa832ea/2/)
[`expand-panels`](#expand-panels) | `expand-panels = all`| Display control panels in the top left or right corners in [Time](../time-chart/README.md) and [Bar](../bar-chart/README.md) Charts.<br>Possible values:<br><li>`true`<br><li>`false`<br><li>`hover`<br><li>`all`.<br>Default value: `hover`.| [↗](https://apps.axibase.com/chartlab/808e5846/18/)

## Series Settings

* The settings apply to the `[series]` section.

### Data Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`metric`](#metric) | `metric = cpu_busy` | Metric name. | [↗](https://apps.axibase.com/chartlab/4e4994ea)
`table` | `table = klz_disk`| Alternative to `metric` setting.<br>Both `table` and `attribute` must be defined.<br>`metric = table,attribute`.| [↗](https://apps.axibase.com/chartlab/35fde2bf)
`attribute` | `attribute = disk_used` | Second component of `table`/`attribute` metric declaration. | [↗](https://apps.axibase.com/chartlab/35fde2bf)
[`entity`](#entity) | `entity = nurswgvml007`<br>`entity = nurswgvml00*`| Entity name.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).| [↗](https://apps.axibase.com/chartlab/d65bdce1)
[`entities`](#entities)| `entities = nurswgvml007, nurswgvml008`| Define multiple entities with one setting.<br>If both `entity` and `entities` are specified, the former takes precedence.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md)| [↗](https://apps.axibase.com/chartlab/2bc197f4)<br>[↗](https://apps.axibase.com/chartlab/e1d30997/2/)
[`entity-group`](#entity-group) | `entity-group = nmon-sub-group` | [Entity group](https://axibase.com/docs/atsd/api/data/#entity-group) name. | [↗](https://apps.axibase.com/chartlab/5e951ce2)
[`entity-expression`](#entity-expression) | `entity-expression = tags.location = 'SVL'` | Server-side filter for all series by entity names, tags, and fields.| [↗](https://apps.axibase.com/chartlab/ffc97c51)
[`tag-expression`](#tag-expression)| `tag-expression = tags.file_system NOT LIKE '/m*'`| Server-side filter for [series tags](https://axibase.com/docs/atsd/api/meta/metric/series-tags.html).| [↗](https://apps.axibase.com/chartlab/135a3458)
[`statistics`](#statistics) | `statistic = avg`<br>`statistic = percentile_95`| Aggregation statistic functions.<br>Refer to [Aggregators Documentation](../../configuration/aggregators.md) for more information.| [↗](https://apps.axibase.com/chartlab/ed94c71b)
[`period`](#period) | `period = 15 minute`| [Aggregator](https://axibase.com/docs/atsd/api/data/series/aggregate.html#aggregate-processor) period.<br>Possible values: `auto`,  [`time-unit`](https://axibase.com/docs/atsd/api/data/series/time-unit.html).| [↗](https://apps.axibase.com/chartlab/661181a3)
[`align`](#align) | `align = END_TIME` | Uniform start time for all periods.<br>Possible values:<br><li>`START_TIME`<br><li>`END_TIME`<br><li>`CALENDAR`<br><li>`FIRST_VALUE_TIME`.<br>Default value: `CALENDAR`<br>Refer to [Aggregate Processor Documentation](https://axibase.com/docs/atsd/api/data/series/aggregate.html#period) for more information.| [↗](https://apps.axibase.com/chartlab/e2b5bc91)
[`interpolate`](#interpolate) | `interpolate = LINEAR` | Interpolate missing aggregation periods. | [↗](https://apps.axibase.com/chartlab/7af6f848)
[`interpolate-extend`](#interpolate-extend)| `interpolate-extend = true` | Interpolate leading and trailing periods with `NEXT` or `PREVIOUS` values, respectively.| [↗](https://apps.axibase.com/chartlab/4a3b8f7a)
[`interpolate-function`](#interpolate-function) | `interpolate-function = linear` | Interpolation function for series, instead of only missing values. | [↗](https://apps.axibase.com/chartlab/6221d836)
[`interpolate-period`](#interpolate-period) | `interpolate-period = 1 minute` | Define the period for interpolated values. | [↗](https://apps.axibase.com/chartlab/6221d836)
[`interpolate-boundary`](#interpolate-boundary) | `interpolate-boundary = inner` | [Interpolation behavior](https://axibase.com/docs/atsd/api/data/series/interpolate.html#boundary) for leading and trailing values. | [↗](https://apps.axibase.com/chartlab/93c9b09c)
[`interpolation-fill`](#interpolation-fill) | `interpolate-fill = true` | Interpolate values outside of the selection interval.<br>Possible values: `true`, `false`, number of values to fill. | [↗](https://apps.axibase.com/chartlab/cd85904c)
[`rate`](#rate) | `rate = 15 second` | Compute the difference between consecutive sample per unit of time, or [rate period](https://axibase.com/docs/atsd/api/data/series/rate.html#rate-period).<br>Compute the underlying rate of change when a metric measures a continuously incrementing counter. <br>Possible values: `auto`, [`time_unit`](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Default value: `auto`| [↗](https://apps.axibase.com/chartlab/d2daeb40)
[`rate-counter`](#rate-counter) | `rate-counter = true`| Compute the difference between consecutive samples per unit of time.<br>Boolean expression.<br>Default value: `false`| [↗](https://apps.axibase.com/chartlab/d91e674f)
[`replace-value`](#replace-value) | `replace-value = value < 50 ? null : value`| Modify or filter series values.<br>Example expression filters all values less than `50` from the series.<br>Aggregators are not supported.| [↗](https://apps.axibase.com/chartlab/0fda88a8)<br>[↗](https://apps.axibase.com/chartlab/1e4dccf0/2/)
[`data-type`](#data-type) | `data-type = forecast` | Series data type.<br>Possible values:<br><li>`historical`<br><li>`forecast`<br><li>`forecast_deviation`<br><li>`lower_confidence`<br><li>`upper_confidence`.| [↗](https://apps.axibase.com/chartlab/6755627e)
[`forecast-name`](#forecast-name) | `forecast-name = hw5` | Forecast name.<br>If no forecast name is defined, [default series forecast](https://axibase.com/docs/atsd/forecasting/#persistence-settings) is loaded.| [↗](https://apps.axibase.com/chartlab/3e5fa03c)
[`style-stroke-dasharray`](#style-stroke-dasharray) | `style = stroke-dasharray: none;`| Display forecast as solid line. | [↗](https://apps.axibase.com/chartlab/5e47cfbe)
[`alias`](#alias) | `alias = total`<br>`alias = free` | Unique series designation to pass data to other series. | [↗](https://apps.axibase.com/chartlab/e0623f81)
[`alert-expression`](#alert-expression)| `alert-expression = value < 95` | Boolean expression to apply conditional style to the series.<br>The CSS style must be specified in the alert-style setting.<br>The `value` field refers to the series value. | [↗](https://apps.axibase.com/chartlab/e389a1ab)
[`alert-style`](#alert-style) | `alert-style = fill: red; stroke: red`| CSS style applied to the series rectangle if `alert-expression` is `true`.| [↗](https://apps.axibase.com/chartlab/ddd854be)
[`audio-alert`](#audio-alert) | `audio-alert = (alert > 0.5) ? '/portal/resource/alarm.oog' : '/portal/resource/klaxon.oog'`| Play an audio file when `alert-expression` evaluates to `true`.<br>Store audio files in the `opt/atsd/atsd/conf/portal` directory of local ATSD installation.<br>Set the following path in the `audio-alert` setting: `/portal/resource/alarm.oog`.<br>Files in this directory must always be references with the `/resource/` before the file name.<br>Audio is only played on `true` to `false` changes or vise versa.<br>Audio is played once, on initial alert occurrence.<br>Supported audio alert formats:<br><li>`.mp3`<br><li>`.oog`<br><li>`.wav`<br>Refer to [Audio Alerts](../../configuration/audio-alerts.md) for more information.| [↗](https://apps.axibase.com/chartlab/59a834f3/2/)
[`group-statistic`](#group-statistic) | `group-statistic = sum` | Group statistic function assigned to the series.<br>Refer to [Aggregators](../../configuration/aggregators.md) for possible values.| [↗](https://apps.axibase.com/chartlab/fb67609c)
[`group-period`](#group-period) | `group period = 1 month` | Group period over which to calculate [group statistics](https://axibase.com/docs/atsd/api/data/series/group.html#group-processor).<br>Possible values: `auto`, [`time_unit`](https://axibase.com/docs/atsd/api/data/series/time-unit.html). | [↗](https://apps.axibase.com/chartlab/2ee1bace)
[`group-first`](#group-first) | `group-first = false` | Boolean expression controlling the sequence of aggregation and grouping.<br>If set to `true`, grouping is performed before aggregation.| [↗](https://apps.axibase.com/chartlab/732de421)
[`group-interpolate`](#group-interpolation) | `group-interpolate = LINEAR` | Interpolate grouped values.<br>Possible values:<br><li>`LINEAR`<br><li>`PREVIOUS`<br><li>`VALUE` | [↗](https://apps.axibase.com/chartlab/f0a36dac)
[`group-interpolate-extend`](#group-interpolate-extend) | `group-interpolate-extend = true` | Fill missing leading and trailing periods with `NEXT` or `PREVIOUS` values.| [↗](https://apps.axibase.com/chartlab/f0a36dac)
[`series-limit`](#series-limit) | `series-limit = 10` | Maximum number of series retrieved from ATSD, to prevent excessive series processing.| [↗](https://apps.axibase.com/chartlab/af34dc29)
[`exact-match`](#exact-match) | `exact-match = true` | Ignore series with tags other than those specified in the series configuration. | [↗](https://apps.axibase.com/chartlab/dada4561/2/)
[`merge-fields`](#merge-fields) | `merge-fields = mount_point`<br>`merge-fields = entity`|Group series based on merge field.<br>Only applies in `multiple-series` mode.<br>Series which use [wildcard](../../syntax/wildcards.md), `entities`, `entityGroup` settings or comma-separated tag values are treated as multiple series by default.<br>Possible values:<br><li>`entity`: All series with the same entity are combined.<br><li>`{tag-name}`: All series with the same value of tag `{tag-name}` are combined. | [↗](https://apps.axibase.com/chartlab/3d45a84c)
[`downsample`](#downsample) | `downsample = true` | Enable [downsampling](https://axibase.com/docs/atsd/api/data/series/downsample.html#downsampling). | [↗](https://apps.axibase.com/chartlab/5d8aba18)
[`downsample-gap`](#downsample-gap) | `downsample-gap = 10 minute` | Control the occurrence of repeated values by defining the [gap](https://axibase.com/docs/atsd/api/data/series/downsample.html#parameters) using time interval.<br>A larger gap value decreases the occurrence of repeated values.<br>Possible values: <br><li>`auto`<br><li>[`time_unit`](https://axibase.com/docs/atsd/api/data/series/time-unit.html).| [↗](https://apps.axibase.com/chartlab/d8d2d8d0)
[`downsample-ratio`](#downsample-ratio) | `downsample-ratio = 1.1` | Downsample [ratio](https://axibase.com/docs/atsd/api/data/series/downsample.html#ratio-check).| [↗](https://apps.axibase.com/chartlab/3945b3cb)
[`downsample-algorithm`](#downsample-algorithm) | `downsample-algorithm = interpolate` | [Downsample algorithm](https://axibase.com/docs/atsd/api/data/series/downsample.html#algorithm) used in calculation.<br>Possible values:<br><li>`detail`<br><li>`interpolate`.<br>Default value: `detail`.| [↗](https://apps.axibase.com/chartlab/196c2069)
[`downsample-difference`](#downsample-difference) | `downsample-difference = 4` |Deviation between consecutive values which ATSD considers equivalent.<br>Consolidate samples with minor deviations when downsampling. | [↗](https://apps.axibase.com/chartlab/6d27e45f)
[`smooth`](#smooth) | `smooth = AVG` | Weighted [averaging](https://axibase.com/docs/atsd/api/data/series/smooth.html) function applied to window samples.<br>Possible values:<br><li>`AVG`<br><li>`EMA`<br><li>`WAVG`<br><li>`WTAVG` | [↗](https://apps.axibase.com/chartlab/3734bd35/4) |
[`smooth-factor`](#smooth-range) | `smooth-factor = 0.5` | `EMA` function weight parameter. Possible values: Between `0` and `1`. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)|
[`smooth-range`](#smooth-range) | `smooth-range = 60000` | `EMA` function weight parameter. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)|
[`smooth-count`](#smooth-count) | `smooth-count = 50` | Window samples. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)|
[`smooth-interval`](#smooth-interval) | `smooth-interval = 15 minute` | Window duration interval. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)|
[`smooth-minimum-count`](#smooth-minimum-count) | `smooth-minimum-count = 10` | Minimum number of window samples. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)|
[`smooth-incomplete-value`](#smooth-incomplete-value) | `smooth-incomplete-value = NaN` | Sample value returned if the window is not full. | [↗](https://apps.axibase.com/chartlab/3734bd35/4)|

### Style Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`style`](#style) | `style = stroke-width: 4;` | Series CSS style. | [↗](https://apps.axibase.com/chartlab/fb6d13d9)
[`color`](#color) | `color = orange` | Series color. | [↗](https://apps.axibase.com/chartlab/18bbef10)
[`label`](#label) | `label = CPU Busy - nurswgvml007` | Series label, visible in series legend/ | [↗](https://apps.axibase.com/chartlab/dad7c267)
[`tooltip`](#tooltip) | `tooltip = NURSWGVML007` | Tooltips displayed on mouseover. | [↗](https://apps.axibase.com/chartlab/1687516c)
[`axis`](#axis) | `axis = right` | Assign series axis.<br>Possible values: <br><li>`left`<br><li>`right`<br>Default value: `left`| [↗](https://apps.axibase.com/chartlab/da03b8a5/20/)
[`format`](#format)| `format = kilobytes` | Display series with a measurement unit.<br>See [Format Settings](../../syntax/format-settings.md) for possible values.| [↗](https://apps.axibase.com/chartlab/c957cf22)
[`display`](#display) | `display = value > top(3)`<br>`display = tags.mount_point = '/'`<br>`display = false` | Series display rule.<br> Filter series based on metric values for widgets containing many series.| [↗](https://apps.axibase.com/chartlab/fbbab68b)<br>[↗](https://apps.axibase.com/chartlab/628cd2b0)<br>
[`enabled`](#enabled) | `enabled = false` | Hide series based on expression or boolean statement.| [↗](https://apps.axibase.com/chartlab/63c18977)
[`refresh-interval`](#refresh-interval) | `refresh-interval = 120` |Period in seconds that ATSD waits to refresh data. <br>Possible values:<br><li>`auto`<br><li> Number | [↗](https://apps.axibase.com/chartlab/da03b8a5/24/)
[`retry-refresh-interval`](#retry-refresh-interval) | `retry-refresh-interval = 5 minute`| Period after ATSD receives empty sample to retry data refresh. <br>Possible values:<br><li>`auto`<br><li>[`time_unit`](https://axibase.com/docs/atsd/api/data/series/time-unit.html) | [↗](https://apps.axibase.com/chartlab/bf0babfc)
[`error-refresh-interval`](#error-refresh-interval) | `error-refresh-interval = 30 minute`| Period after ATSD handles a server processing error before refreshing data. <br>Possible values:<br><li>`auto`<br><li>[`time_unit`](https://axibase.com/docs/atsd/api/data/series/time-unit.html) | [↗](https://apps.axibase.com/chartlab/9f482e52)

### Derived Value Settings

Specify `value` setting to create calculated series derived from raw series using arithmetic expressions in JavaScript syntax. The expression returns a number or `null`.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`value`](#value) | `value = max('s1')`<br>`value = min('s1', '10 minute')`<br>`value = (1 - value('free') / value('total')) * 100`<br>`value = Math.max(0, value('alias'))`| Define series value.<br>Retrieve the value of the underlying series identified by alias.| [↗](https://apps.axibase.com/chartlab/2b2e7023/4/)<br>[↗](https://apps.axibase.com/chartlab/da03b8a5/6/)
[`value-aggregator`](#value-aggregators) | `value = avg('s1')`<br>`value = (1 - value('free') / value('total')) * 100`<br>`value = Math.max(0, value('alias'))`| [Aggregate statistic](../../configuration/aggregators.md) applied to the underlying series grouped by period.| [↗](https://apps.axibase.com/chartlab/89d05e9e)
[`value-percentile`](#value-percentile) | `value = (1 - percentile(99,'free','5 minute') / percentile(99,'total','5 minute')) * 100`| Percentile statistics applied to underlying series.<br>Possible values: `0` to `100`<br>Apply to:<br><li>`alias`<br><li>`period`.| [↗](https://apps.axibase.com/chartlab/d56b107c)
[`value-confidence-interval`](#value-confidence-interval) | `value = (1 - lower_confidence(90, 'free') / forecast('total')) * 100`<br>`value = (1 - upper_confidence(90, 'free') / forecast('total')) * 100`| Upper and lower limits of the confidence interval for the underlying series.<br>Required arguments:<br><li>Level-specified integer from `0` to `100`<br><li>`alias`.| [↗](https://apps.axibase.com/chartlab/f155d312)

## Tag Settings

* The settings apply to the `[tag]` section.

```ls
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