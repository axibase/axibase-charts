# Calendar Chart

## Overview

The **Calendar Chart** displays the deviation of aggregated series values for a calendar period from a specified threshold. Series values within each period are aggregated by a [statistical function](../../configuration/aggregators.md) and assigned a color which reflects the magnitude of deviation.

```ls
[widget]
  type = calendar
  metric = cpu_busy

  [series]
    entity = nurswgvml0*
```

![](./images/title-chart-calendar.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/ab8e8467)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="summarize-period"></a>[`summarize-period`](#summarize-period) | `summarize-period = 1 hour` | Calendar period specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>Possible values: `count time_unit`.<br>Default value: `5 minute`. | [↗](https://apps.axibase.com/chartlab/48d84a37)
<a name="summarize-statistic"></a>[`summarize-statistic`](#summarize-statistic) | `summarize-statistic = percentile_75` | [Statistical function](../../configuration/aggregators.md) applied to values within each period.<br>Default value: `avg`.| [↗](https://apps.axibase.com/chartlab/c16cbc54)
|<a name="color-range"></a>[`color-range`](#color-range)|`color-range = black`|Color palette assigned to threshold ranges.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors).<br>Built-in ranges: `red`, `blue`, `black`.|[↗](https://apps.axibase.com/chartlab/51192659)|
<a name="gradient-count"></a>[`gradient-count`](#gradient-count) | `gradient-count = 2` | Number of gradients per threshold range.<br>Default value: `3`. | [↗](https://apps.axibase.com/chartlab/780b5d11)
<a name="palette-ticks"></a>[`palette-ticks`](#palette-ticks) | `palette-ticks = true` | Display legend labels.<br>Possible values: `false`, `true`.<br>Default Value: `false`. | [↗](https://apps.axibase.com/chartlab/3e669a88)
<a name="rotate-palette-ticks"></a>[`rotate-palette-ticks`](#rotate-palette-ticks) | `rotate-palette-ticks = true` | Rotate legend labels.<br>Possible values: `false` (horizontal), `true` (vertical).<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/1b5eae65)
<a name="range-merge"></a>[`range-merge`](#range-merge) | `range-merge = true` | Compute a single range for all series with minimum and maximum from all loaded series.<br>Possible values: `false`, `true`.<br>Default value: `false`. | [↗](https://apps.axibase.com/chartlab/6a95615b)
<a name="sort"></a>[`sort`](#sort) | `sort = name DESC` | Sort entities by name or value in ascending (`ASC`) or descending (`DESC`) order.<br> | [↗](https://apps.axibase.com/chartlab/7f49de68)

### Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
|<a name="thresholds"></a>[`thresholds`](#thresholds)|`thresholds = 0, 50, 90, 100`| Threshold values.<br>The number of specified [`colors`](#colors) must be `1` fewer than the number of thresholds.| [↗](https://apps.axibase.com/chartlab/e83310cc)

## Examples

### Custom Color Range

![](./images/custom-color-range.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/3d52aae0)

### Legend Position

![](./images/legend-position-image.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/f354914c)

### No Threshold

![](./images/no-threshold.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/7d6224b8)

### Threshold

![](./images/threshold-image.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/5f49b168)
