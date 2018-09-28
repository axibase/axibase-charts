# Histogram Chart

## Overview

The **Histogram Chart** visualizes data distribution.

```ls
[widget]
  type = histogram
  mode = stack
  metric = memfree

  [series]
      entity = nurswgvml007
  [series]
      entity = nurswgvml006
```

![](./images/histogram-title-chart.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/be9c9f69)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="mode"></a>[`mode`](#mode)|`mode = stack`|Histogram display mode.<br>Possible values:<br>`stack`: For multiple series, data is displayed as overlapping bars.|[↗](https://apps.axibase.com/chartlab/44f1ce65)
<a name="rotate-ticks"></a>[`rotate-ticks`](#rotate-ticks)| `rotate-ticks = 45` | Rotate labels on the time axis by `n` degrees.<br>Possible values: Between `0` (horizontal) and `90` (vertical).<br>Default value: `0`.|[↗](https://apps.axibase.com/chartlab/8df86220)
<a name="bar-count"></a>[`bar-count`](#bar-count)|`bar-count = 20`|Number of bars in which to group or split loaded data.<br>Default value: `50`.|[↗](https://apps.axibase.com/chartlab/24634074)|
<a name="left-axis"></a>[`left-axis`](#left-axis)|`left-axis = frequency`|Value statistics displayed on the left axis.<br>Possible values:<br>`none`: No scaling applied.<br>`density`: Scales the height of the bars such that the sum of their areas is equal to `1`.<br>`fractions`: Scales the height of the bars such that the sum of their heights is equal to `1`.<br>`frequency`: Scales the height of the bars such that the height of each bar is equal to the number of observations in the series. Thus, the sum of the heights is equal to the total number of observations.<br>Default value: `frequency`.|[↗](https://apps.axibase.com/chartlab/1d08f8e9)
<a name="right-axis"></a>[`right-axis`](#right-axis)|`right-axis = density`|Value statistics displayed on the right axis.<br>Possible values:<br>`none`: No scaling applied.<br>`density`: Scales the height of the bars such that the sum of their areas equals `1`.<br>`fractions`: Scales the height of the bars such that the sum of their heights equals `1`.<br>`frequency`: Scales the height of the bars such that each bar height is equal to the number of observations in the series. Thus, the sum of the heights is equal to the total number of observations.<br>Default value: `none`.|[↗](https://apps.axibase.com/chartlab/df2a42e0)
<a name="top-axis"></a>[`top-axis`](#top-axis)|`top-axis = percentiles`|Top axis ticks format.<br>Possible values: `none`, `percentiles`, `values`.<br>Default value: `none`|[↗](https://apps.axibase.com/chartlab/a0f26c64)
<a name="bottom-axis"></a>[`bottom-axis`](#bottom-axis)|`bottom-axis = percentiles`|Bottom axis ticks format.<br>Possible values: `none`, `percentiles`, `values`.<br>Default value: `values`|[↗](https://apps.axibase.com/chartlab/5fa148e3)
<a name="percentiles"></a>[`percentiles`](#percentiles)|`percentiles = 1, 10, 50, 90, 99.9`|Percentiles displayed when `top-axis` or `bottom-axis = percentiles`.<br>Separate percentiles with commas.<br>Possible values: Between `0` and `100`.|[↗](https://apps.axibase.com/chartlab/1bbed491)
<a name="vertical-grid"></a>[`vertical-grid`](#vertical-grid)|`vertical-grid = percentiles`|Display a vertical line corresponding to each percentile on the top axis.<br>`vertical-grid` must be used with `top-axis = percentiles` setting.<br>Possible values: `none`, `percentiles`.<br>Default value: `none`|[↗](https://apps.axibase.com/chartlab/682a1ddf)
<a name="horizontal-grid"></a>[`horizontal-grid`](#horizontal-grid)|`horizontal-grid = frequency`|Display a horizontal line corresponding to each value on the right or left axis.<br>`horiztonal-grid` setting must be the same as `right-axis` or `left-axis` setting.<br>Possible values: `none`, `density`, `fractions`, `frequency`.<br>Default value: `frequency`|[↗](https://apps.axibase.com/chartlab/7a4a20e6)

## Examples

### Multiple Series

![](./images/multiple-series.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/3d08e797)

### Advanced Configuration Example

![](./images/advanced-configuration.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/5f79628e)