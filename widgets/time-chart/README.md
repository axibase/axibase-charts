# Time Chart

## Overview

The **Time Chart** displays series values at successive time intervals for one or more series. Data is loaded for a specified interval and updated as new samples are received.

```ls
[widget]
  type = chart

  [series]
    entity = nurswgvml007
    metric = cpu_busy
```

![](./images/time-chart.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/3146896d)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Common](../shared/README.md) `[widget]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="display-panels"></a>[`display-panels`](#display-panels) |  Display widget controls.<br>Possible values: `false`, `true`, `hover`.<br>Default value: `hover`.<br>**Example**: `display-panels = true`|[↗](https://apps.axibase.com/chartlab/09deba8f)
<a name="expand-panels"></a>[`expand-panels`](#expand-panels)|  Expand widget controls.<br>Possible values: `false`, `true`, `compact`.<br>Default value: `compact`.<br>**Example**: `expand-panels = true`|  [↗](https://apps.axibase.com/chartlab/f5319f9d)
<a name="periods"></a>[`periods`](#periods)|  Custom aggregation periods in widget controls.<br>Specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Format: `count time_unit`.<br>**Example**: `periods = 20 minute, 4 hour`|[↗](https://apps.axibase.com/chartlab/537bf3e3)
<a name="context-height"></a>[`context-height`](#context-height)| Height of the [**Context Chart**](#time-chart-controls), which adjusts displayed timespan.<br>Default value: `0` in the main window, `70` in the dialog window.<br>**Example**: `context-height = 50`| [↗](https://apps.axibase.com/chartlab/4215daf6)
<a name="legend-value"></a>[`legend-value`](#legend-value) | Display last value for each series in the legend.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `legend-value = false` | [↗](https://apps.axibase.com/chartlab/b8399385)
<a name="markers"></a>[`markers`](#markers)| Show series value markers.<br>Toggle `markers` with the **Markers** option on the left axis mouseover menu. <br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Examples**: `markers = false`| [↗](https://apps.axibase.com/chartlab/23e60670)
<a name="last-marker"></a>[`last-marker`](#last-marker)| Show last series value marker.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `last-marker = false`| [↗](https://apps.axibase.com/chartlab/9e3a9398)
<a name="horizontal-grid"></a>[`horizontal-grid`](#horizontal-grid) | Show horizontal grid.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `horizontal-grid = false`| [↗](https://apps.axibase.com/chartlab/35a05b80)
<a name="vertical-grid"></a>[`vertical-grid`](#vertical-grid)| Show vertical grid.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `vertical-grid = false`| [↗](https://apps.axibase.com/chartlab/48ce910e)
<a name="pointer-position"></a>[`pointer-position`](#pointer-position)| Location of final value pointer relative to series.<br>Possible values: `left`, `right`, `none`.<br>Default value: `right`.<br>**Example**: `pointer-position = left`| [↗](https://apps.axibase.com/chartlab/2b05393c)
<a name="step-line"></a>[`step-line`](#step-line)| Display step line instead of one which is linearly interpolated.<br>Toggle `step-line` with the **Step Line** option on the left axis mouseover menu.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `step-line = true`| [↗](https://apps.axibase.com/chartlab/51292e7e)
<a name="auto-period"></a>[`auto-period`](#auto-period)| Assign aggregation period for series based on the chosen time interval.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `auto-period = false`| [↗](https://apps.axibase.com/chartlab/8f622b5e)
<a name="disconnect-interval"></a>[`disconnect-interval`](#disconnect-interval)| Maximum time gap between samples specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>If the gap between samples exceeds the specified interval, data points are not connected.<br>Format:  `count time_unit`.<br>**Example**: `disconnect-interval = 10 minute`| [↗](https://apps.axibase.com/chartlab/64f5c2dd)
<a name="disconnect-count"></a>[`disconnect-count`](#disconnect-count)| Average distance between time values in the series.<br>If the gap between samples exceeds the defined value, data points are not connected.<br>If `disconnect-count = 1`, the interval is equal to the mean interval between samples.<br>**Example**: `disconnect-count = 50`| [↗](https://apps.axibase.com/chartlab/273dc016)
<a name="disconnect-value"></a>[`disconnect-value`](#disconnect-value)| Works together with `disconnect-interval` or `disconnect-count` setting.<br>Fills data gaps with a specific value.<br>Use when ATSD does not collect `null` values or values below a threshold.<br>Toggle display of `disconnect-value` with the **Connect Values** option on left axis mouseover menu.<br>**Example**: `disconnect-value = 0`| [↗](https://apps.axibase.com/chartlab/a4e2f917)
<a name="moving-average"></a>[`moving-average`](#moving-average)| When `moving-average` is enabled, the most recent aggregation period is based on sliding window ending with current time.<br>When `moving-average` is disabled, all aggregate periods are set to start and end at regular times as established by calendar.<br>Only supported together with `server-aggregate = false` setting.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `moving-average = true`| [↗](https://apps.axibase.com/chartlab/4296e02b)
<a name="negative-style"></a>[`negative-style`](#negative-style)| CSS style applied to negative values in `column` or `column-stack` mode.<br>**Example**: `negative-style = fill: red`| [↗](https://apps.axibase.com/chartlab/03326e26)
<a name="current-period-style"></a>[`current-period-style`](#current-period-style)| CSS styles applied to current period values in `column` and `column-stack` mode.<br>**Example**: `current-period-style = fill-opacity: 0; stroke-width: 2; stroke-dasharray: 5, 2, 1, 2`| [↗](https://apps.axibase.com/chartlab/148d5d72)
<a name="forecast-style"></a>[`forecast-style`](#forecast-style)| CSS style applied to [forecasts](https://axibase.com/docs/atsd/forecasting/) in `column` and `column-stack` mode.<br>**Example**: `forecast-style = stroke: magenta; opacity: 0.25`| [↗](https://apps.axibase.com/chartlab/35aa293f)

### Value Axis Settings

Name |Description | &nbsp;
:--|:--|:--
<a name="auto-scale"></a>[`auto-scale`](#auto-scale)| Scale the visible portion of the value axis based on series values.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `auto-scale = true`| [↗](https://apps.axibase.com/chartlab/20de18e9)
<a name="ticks"></a>[`ticks`](#ticks)| Tick marks on the left axis.<br>Default value: `5`.<br>**Example**: `ticks = 10`| [↗](https://apps.axibase.com/chartlab/5e968be4)
<a name="ticks-right"></a>[`ticks-right`](#ticks-right)| Tick marks on the right axis.<br>Default value: `5`.<br>**Example**: `ticks-right = 10`| [↗](https://apps.axibase.com/chartlab/7c971f2d)

### Time Axis Settings

Name | Description | &nbsp;
:--|:--|:--
<a name="ahead-time-span"></a>[`ahead-time-span`](#ahead-time-span)| Visualized time ahead of final series value.<br>Possible values: Percent value in `0.10` notation or `10%` notation.<br>**Example**: `ahead-time-span = 80%`| [↗](https://apps.axibase.com/chartlab/92c46bac)
<a name="rotate-ticks"></a>[`rotate-ticks`](#rotate-ticks)| Rotate labels on the time axis by `n` degrees.<br>Possible values: between `0` (horizontal) and `90` (vertical), or `true` (horizontal).<br>Default value: `90` (vertical).<br>**Example**: `rotate-ticks = 0`| [↗](https://apps.axibase.com/chartlab/7a38cfdd)
<a name="centralize-ticks"></a>[`centralize-ticks`](#centralize-ticks)| Center time and date markers over ticks.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `centralize-ticks = true`| [↗](https://apps.axibase.com/chartlab/4872db9d)
<a name="ticks-time"></a>[`ticks-time`](#ticks-time)| Tick marks on the time axis.<br>Default value: `10`.<br>**Example**: `ticks-time = 20`| [↗](https://apps.axibase.com/chartlab/0e31a579)
<a name="display-date"></a>[`display-date`](#display-date)| Display **Time Chart** time period below the time axis.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `display-date = true`| [↗](https://apps.axibase.com/chartlab/2abd9e1f)
<a name="retain-time-span"></a>[`retain-time-span`](#retain-time-span)| Preserves the length of the specified time interval during widget update.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `retain-time-span = false`| [↗](https://apps.axibase.com/chartlab/b86df9d4)

## Series Settings

* The settings apply to the `[series]` section.
* [Common](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="mode"></a>[`mode`](#mode) | Chart mode, can be applied to both `[widget]` and `[series]` settings.<br>Possible values:<br>`line` - Connect series data points with a line.<br>`stack` - Visually stack series.<br>`column` - Display series as columns.<br>`range` - Display range of series values.<br>`column-stack` - Visually stack series in column-form.<br>Default value: `line`.<br>**Example**: `mode = column`| [↗](https://apps.axibase.com/chartlab/8998bddf)
<a name="fill-value"></a>[`fill-value`](#fill-value) | Interpolate a series with irregularly spaced values.<br>When `fill-value = true`, detailed values are filled using [`linear` interpolation](https://axibase.com/docs/atsd/api/data/series/aggregate.html#interpolation-functions) and aggregated periods are filled with `previous` values.<br>When `fill-value = false`, missing samples are filled with `0` or `null`.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `fill-value = true`| [↗](https://apps.axibase.com/chartlab/9cd3a1b4)
<a name="load-future-data"></a>[`load-future-data`](#load-future-data)| Load future series values on scroll.<br>Applies to `type=forecast` data.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `load-future-data = true`| [↗](https://apps.axibase.com/chartlab/268cc442)
<a name="series-type"></a>[`series-type`](#series-type)| Grouping parameter for use in `stack` mode.<br>Series of the same type are stacked (their values are summed).<br>Set a unique value for each series to achieve fill effect without series stacking.<br>**Example**: `series-type = s1`| [↗](https://apps.axibase.com/chartlab/d9804193)

## Threshold Settings

* The settings apply to the `[threshold]` section.
* Use `[threshold]` settings to define series thresholds:
  * Load the series and include `display = false` settings under `[widget]` settings.
  * Assign the series an `alias`.
  * In the `[threshold]` section, specify threshold value with `value = value('alias')` as seen in the **ChartLab** example below.

![](./images/threshold-settings-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/d32f63e0)

Name | Description | &nbsp;
:--|:--|:--
<a name="threshold-label"></a>[`label`](#threshold-label)| Threshold legend label.<br>**Example**: `label = threshold`| [↗](https://apps.axibase.com/chartlab/5c1dace0)
<a name="threshold-color"></a>[`color`](#threshold-color) | Threshold color.<br>**Example**: `color = red`| [↗](https://apps.axibase.com/chartlab/9ac19488)
<a name="threshold-value"></a>[`value`](#threshold-value)|Threshold value, set in JavaScript when the [`alert-expression`](../shared/README.md#alert-expression) for series uses the same format.<br>**Example**: `value = value('raw') * 2`| [↗](https://apps.axibase.com/chartlab/26e6d5d6)

## Time Chart Controls

* Modify selection interval and aggregation period on the fly.
* Add custom selection intervals and aggregation periods directly on the **Time Chart**.
* Apply various aggregations without reloading the portal.
* Change the chart mode: `line`, `column`, `range`, `stack`.
* View data in the appropriate format: hertz, joules, watts, bytes, percent, currency etc.
* Create custom metrics using custom formulas and aggregations.
* Modify alert rules directly in the portal.
* Instantly generate forecasts in the **Time Chart**.

![](./images/time-chart-controls.png)

1. **Title**: Click the title to expand the widget to fullscreen.
1. **Timespan**: Select one of the available timespans from the menu.
1. **Series Icon**: Toggle visibility of displayed series by clicking the icon to show or hide that series.
1. **Forecast Tools**: Display forecast and confidence intervals for series.
1. **Mode**: Select the display mode for the series.
1. **Aggregation**: Select aggregation method for the series.
1. **Aggregation Period**: Define the aggregation period for the series.
1. **Left Axis**: Scale the left axis manually by dragging. Double click to reset values to default.
1. **Right Axis**: Scale the right axis manually by dragging. Double click to reset values to default.
1. **Scale Options**: Auto-scale the value of axes in the **Time Chart**. Display the series in `step-line` format. Toggle value markers for the series.
1. **Load All Data**: Double click **Time Chart** surface to show all loaded data.
1. **Time Axis**: Scale the time axis manually by dragging. Double click to reset values to default.
1. **Context Chart**: Select a manual `timespan` by dragging context chart endpoints.

### Modifying Time Chart Controls

Add selection intervals and aggregation periods directly in **Time Chart** controls by double clicking the whitespace between the interval or period where the new interval is to be added. An interval or period roughly half way between the two values is added on each double click.

![](./images/add-new-timespan-1.png)

To add a four-day (`4d`) aggregation period, double click between the one-day (`1d`) and one-week (`1w`) aggregation periods in the controls of the **Time Chart**.

![](./images/add-new-timespan-2.png)

To remove selection intervals and aggregation periods, drag and drop the interval or period off the **Time Chart** controls. In the example below, the one-week (`1w`) aggregation period is removed.

![](./images/add-new-timespan-3.png)

## Examples

### `time-offset` Setting

![](./images/time-offset-settings.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b60e02ac)

### Dual Axis

![](./images/dual-axis-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/919df823)

### Stack Average

![](./images/stack-average-settings.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/df90ee29)

### Fill Area

![](./images/fill-area.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/8bc482c9)

### `alert-expression` Example

![](./images/alert-expression-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/188db949)

### Percentile

![](./images/percentile-statistics.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/252829fb)

### Forecast

![](./images/data-type-forecast.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/4d5ef924)

### `disconnect-interval` and `disconnect-value`

![](./images/interval-and-value.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/9b216ba8)

### `[threshold]` Settings

![](./images/threshold-settings-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/85881eef)

### `value` Settings Example

![](./images/value-settings-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/f632a825)

### `value` Statistic Example

![](./images/value-statistic-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/056e6681)

### Message Overlay

Insert messages into the database as series, using series tags to encode message text. Add messages to a **Time Chart** with `mode=column` setting.

![](./images/message-overlay-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/e14cb99c)

### Elapsed Time

Overlay multiple intervals on the time axis with interval formatting.

![](./images/interval-format-settings.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/01de08ad)
