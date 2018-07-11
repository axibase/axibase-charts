# Shared Widget Syntax

![](./images/shared-widget-title.png)

## Overview

Shared Widget syntax is common syntax supported by all other widgets.

## Syntax

### `[widget]` Settings

Inherited settings from the `[configuration]` level: `start-time`, `end-time`, `timespan`, `update-interval`, `timezone`, `batch-update`, `batch-size`, `dialog-maximize`, `url`, `path`, `url-parameters`. Overwrite these settings at the `[widget]` level.

Setting | Syntax | Description | Example
--|--|--|--
Type | `type = chart`<br>`type = bar`<br>`type = treemap`| Define widget type.<br>Available widgets: `chart`, `gauge`, `bar`, `histogram`, `box`, `calendar`, `treemap`, `pie`, `table`, `console`, `property`, `text`, `page`, `graph`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/2/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/3/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/4/)<br>
Tooltip | `tooltip = Widget Tooltip` | Display widget description on title mouseover. | [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/5/)
Left Units | `left-units = 1` | Set absolute offset from the left, in units. | [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/5/)
Top Units | `top-units = 1` | Set absolute offset from the top, in units. | [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/7/)
Timespan | `timespan = 6 hour` | Define data load interval.<br>Set to `1 hour` by default.| [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/8/)
Time Span Ahead | `ahead-time-span = 80%` | Show an amount of time ahead of the last series value.<br>Define in percent. | [![](./images/button.png)](https://apps.axibase.com/chartlab/da03b8a5/26/)
Colors | `colors = green` | Redefine default palette.<br>Table, Console, Property, Text, and Page widgets do not support this setting.<br>Default palette is defined by the array `window.defaultColors`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/9/)
Legend Position | `legend-position = left` | Modify legend locations for widgets which contain a legend.<br>Possible values: `hidden`, `top`, `right`, `bottom`, `left`<br>By default, legend position is `hidden` in Time Chart.<br>Legend position is set to `top` on Dialog Chart.<br>Combine values to define corners: `legend-position = bottomright`| [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/10/)
Scale | `scale = 1.5`<br>`scale-x = 0.7` | Scale a widget or axis.<br>Not supported in all browsers.| [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/11/)
Left Axis Range | `max-range = 40`<br>`min-range = 10`| Define minimum and maximum range displayed on the left axis.<br>Actual range can differ based on loaded data samples.| [![](./images/button.png)](https://apps.axibase.com/chartlab/d80980a8/6/)
Right Axis Range | `min-range-right = 250000`<br>`max-range-right = 500000` | Define minimum and maximum range displayed on the right axis.<br>Actual range can differ based on loaded data samples.| [![](./images/button.png)](https://apps.axibase.com/chartlab/d80980a8/7/)
Force Left Axis Range | `min-range-force = 0`<br>`max-range-force = 100` | Apply a forced range to the left axis, regardless of loaded data. | [![](./images/button.png)](https://apps.axibase.com/chartlab/d80980a8/8/)
Force Right Axis Range | `min-range-right-force = 0`<br>`max-range-right-force = 100` | Apply a forced range to the right axis, regardless of loaded data. | [![](./images/button.png)](https://apps.axibase.com/chartlab/d80980a8/9/)
Rotate Ticks | `rotate-ticks = 45`<br>`rotate-ticks = true` | Rotate `x` axis labels.<br>Set in degrees.<br>`true` rotates by `90` degrees.<br>Default value is `90`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/29/)
Center Ticks | `centralize-ticks = true` | Position time and date markers between instead of under ticks.<br>Boolean expression, `false` by default.| [![](./images/button.png)](https://apps.axibase.com/chartlab/8eddbb26)
Center Columns| `centralize-columns = true` | Position columns between ticks instead of directly above ticks.<br>Boolean expresion, `false` by default.| [![](./images/button.png)](https://apps.axibase.com/chartlab/8eddbb26/2/)
Label Axes | `axis-title = CPU Utilization in %`<br>`axis-title-right = Free Memory in KB`| Label left and right axes.| [![](./images/button.png)](https://apps.axibase.com/chartlab/f6d07f8f)
Style | `style = padding: 50`| Apply styles to widget container. | [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/15/)
Header Style| `header-style = background-color: steelblue`<br>`header-style = background: red`<br>`header-style = return 'background: white;'; header-style = display: none`| Customize widget header style.<br>Group diverse portals visually.<br>`background-color`: Replace color, retain pattern.<br> `background`: Replace both color and pattern.<br>`display: none`: Hide header.<br>`header-style = return 'background: white;';`: Remove all styles.| [![](./images/button.png)](https://apps.axibase.com/chartlab/b4c45b71/2/)
Markers | `markers = false` | Hide series marker values.<br>Boolean expression, `true` by default. | [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/12/)
Format| `format = kilobytes` | Display series with the appropriate unit of measurement.<br>See Format Settings for complete syntax.| [![](./images/button.png)](https://apps.axibase.com/chartlab/02b81553)
Format Labels| `label-format = tagName`<br>`label-format = statistics - period` | Label series using text and placeholders.<br>See Label Formating.| [![](./images/button.png)](https://apps.axibase.com/chartlab/6237dd1a/2/)
Date Format | `day-format = %y/%m/%d`<br>`day-format = %Y/%m/%d`<br>`day-format = %Y %m/%d`| Format `x` axis timestamp.| [![](./images/button.png)](https://apps.axibase.com/chartlab/40dafe6b/2/)
Cache | `cache = true` | Retrieve the most recent value from the hbase **Last Insert** table.<br>This setting is useful for widget which only display one value: Gauge, Bar, Text, Treemap, etc.| [![](./images/button.png)](https://apps.axibase.com/chartlab/adfe0fe2/32/)
Limit | `limit = 1000` | Limit the number of returned samples for the loaded series.<br>Limit is not applied to alert queries in the Console widget.|[![](./images/button.png)](https://apps.axibase.com/chartlab/13549b9c/2/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/2604d710)
Onload Audio | `audio-alert = (alert > 1) ? 'path/to/audio/file'` | Play an audio alert on initial widget data load.<br>See Audio Alerts for more information| [![](./images/button.png)](https://apps.axibase.com/chartlab/59a834f3/5/)
Display Panels | `display-panels = true` | Display control panels in the top left or right corners in Time and Bar charts.<br>Possible values: `true`, `false`, `hover`.<br>Default is `hover`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/efa832ea/2/)
Expand Panels | `expand-panels = all`| Display control panels in the top left or right corners in Time and Bar charts.<br>Possible values: `true`, `false`, `hover`.<br>Default is `hover`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/808e5846/18/)

### Series Description

`[widget]` settings include one or more `[series]` settings. For more information about associating `[series]` settings with data stored in ATSD, see Selecting Series.

### `[series]` Settings

Setting | Syntax | Description | Example
--|--|--|--
Metric | `metric = cpu_busy` | Define the Metric | [![](./images/button.png)](https://apps.axibase.com/chartlab/da03b8a5)
Table and Attribute | `table = klz_disk`<br>`attribute = disk_used`| Use as an alternative to `metric` setting.<br>If both `table` and `attribute` are defined, `metric = table,attribute`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/0c8f522e)
Entity | `entity = nurswgvml007`<br>`entity = nurswgvml00*`| Define the Entity.<br>Supports `?` and `*` [wildcards](../../syntax/wildcards.md).| [![](./images/button.png)](https://apps.axibase.com/chartlab/7e1cf18f/2/)
Entities| `entities = nurswgvml007, nurswgvml008`| Define multiple entities with one setting.<br>If both `entity` and `entities` are specified, the former takes precidence.<br>Support `?` and `*` [wildcards](../../syntax/wildcards.md)| [![](./images/button.png)](https://apps.axibase.com/chartlab/2bc197f4)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/e1d30997/2/)
[Entity Group](https://axibase.com/docs/atsd/api/data/#entity-group) | `entity-group = nmon-sub-group` | Define an Entity Group. | [![](./images/button.png)](https://apps.axibase.com/chartlab/56e62e1e/4/)
Entity Expression | `entity-expression = tags.location = 'SVL'` | Apply server-side filter to all series based on entity names, tags, and fields.| [![](./images/button.png)](https://apps.axibase.com/chartlab/56e62e1e/4/)
Tag Expression| `tag-expression = tags.file_system NOT LIKE '/m*'`| Apply server-side filtering based on [series tags](https://axibase.com/docs/atsd/api/meta/metric/series-tags.html).| [![](./images/button.png)](https://apps.axibase.com/chartlab/906238e2/4/)
Statistics | `statistic = avg`<br>`statistic = percentile_95`| Apply aggregation statistical functions.<br>See Aggregators for more information.| [![](./images/button.png)](https://apps.axibase.com/chartlab/ed94c71b)
Period | `period = 15 minute`| Define period for aggregator functions which require one.| [![](./images/button.png)](https://apps.axibase.com/chartlab/da03b8a5/3/)
Align | `align = END_TIME` | Determine a uniform start time for all periods.<br>Possible values: `START_TIME`, `END_TIME`, `CALENDAR`(default), `FIRST_VALUE_TIME`. See [Aggregate Processor](https://axibase.com/docs/atsd/api/data/series/aggregate.html#period) for more information.
Interpolation | `interpolate = LINEAR` | Interpolate missing aggregation periods. | [![](./images/button.png)](https://apps.axibase.com/chartlab/d8c03f11/3/)
Extended Interpolation| `interpolate-extend = true` | Interpolate leading and trailing periods with `NEXT` or `PREVIOUS` values, respectively.| [![](./images/button.png)](https://apps.axibase.com/chartlab/d8c03f11/5/)
Rate | `rate = 15 second` | Compute the difference between consecutive sample per unit of time, or [rate period](https://axibase.com/docs/atsd/api/data/series/rate.html#rate-period).<br>Compute the underlying rate of change when a metric measures a continuosly incrementing counter.<br>`rateInterval = rate.count * rate.unit` (milliseconds)<br>`if (value > previousValue) {`<br>`resultValue = (value - previousValue) / (time - previousTime) * rateInterval;`<br>`aggregator.addValue(timestamp, resultValue);`<br>`}`| [![](./images/button.png)](https://apps.axibase.com/chartlab/da03b8a5/25/)
Rate Counter | `rate-counter = true`| Compute the difference between consecutive samples per unit of time.<br>Boolean expression.| [![](./images/button.png)](https://apps.axibase.com/chartlab/0a163b33)
Replace Value | `replace-value = value < 50 ? null : value`| Modify or filter series values.<br>The example expression filters all values less than `50` from the series.<br>Aggregators are not supported.| [![](./images/button.png)](https://apps.axibase.com/chartlab/6a8cc3e3/3/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/3f080fe4/3/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/1e4dccf0/2/)
Data Type | `data-type = forecast` | Define current series data type.<br>Possible values: `historical`, `forecast`, `forecast_deviation`, `lower_confidence`, `upper_confidence`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/f80b8e53)
Forecast Name | `forecast-name = hw5` | Identify forecast name.<br>Create multiple forecasts for the same series.<br>If no forecast name is set, default forecast is loaded.| [![](./images/button.png)](https://apps.axibase.com/chartlab/92b7e471/3/)
Style Stroke-Dasharray | `style = stroke-dasharray: none;`| Remove dashes from forecast line on Chart, display forecast line as solid. | [![](./images/button.png)](https://apps.axibase.com/chartlab/92b7e471/4/)
Alias | `alias = total`<br>`alias = free` | Create a unique series designation to pass data to other series. | [![](./images/button.png)](https://apps.axibase.com/chartlab/da03b8a5/6/)
Alert Expression| `alert-expression = value < 95` | Apply separate alert rules to several series with one `alert-style` in `[widget]` settings. | [![](./images/button.png)](https://apps.axibase.com/chartlab/b3892525)
Alert Style | `alert-style = fill: red; stroke: red`| Apply separate alert styles to serveral series with one `alert-expression` in `[widget]` settings.| [![](./images/button.png)](https://apps.axibase.com/chartlab/b3892525)
Audio Alert | `audio-alert = (alert > 0.5) ? '/portal/resource/alarm.oog' : '/portal/resource/klaxon.oog'`| Play an audio file when `alert-expression` evaluates to `true`.<br>Store audio files in the `opt/atsd/atsd/conf/portal` directory of your ATSD installation.<br>Set the following path in the `audio-alert` setting: `/portal/resource/alarm.oog`.<br>Files in this directory must always be references with the `/resource/` before the file name.<br>Audio is only played on `true` to `false` changes or vise versa.<br>