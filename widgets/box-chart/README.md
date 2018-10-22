# Box Chart

## Overview

The **Box Chart** displays a distribution of observed values over a user-defined time interval. The chart shows the minimum and maximum values, the median, and a customizable percentile range.

```ls
[widget]
  type = box
  metric = memfree

  [series]
    entity = nurswgvml00*
```

![](./images/box-chart-title-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/50fe6882)

### Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.

Name |Description |&nbsp;
:--|:--|:--
<a name="class"></a>[`class`](#class)| Display percentile markers as circles on a dotted line, as common on subway maps.<br>Possible values: `metro`.<br>**Example**: `class = metro`.| [↗](https://apps.axibase.com/chartlab/faf87dd1)
<a name="rotate-ticks"></a>[`rotate-ticks`](#rotate-ticks)| Rotate labels on the time axis by `n` degrees.<br>Possible values: between `0` (horizontal) and `90` (vertical) or `true` (vertical).<br>Default value: `0`. (vertical).<br>**Example**: `rotate-ticks = 90`.| [↗](https://apps.axibase.com/chartlab/a1df8d83)

### Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md) `[series]` settings are inherited.

Name |Description |&nbsp;
:--|:--|:--
<a name="percentiles"></a>[`percentiles`](#percentiles)| Minimum and maximum percentiles for the shaded box area.<br>Possible values: `0%` to `100%`.<br>Default value: `25%/75%`.<br>**Example**: `percentiles = 10%/90%`.| [↗](https://apps.axibase.com/chartlab/8b0f5ea7)
<a name="percentile-markers"></a>[`percentile-markers`](#percentile-markers)| Circular percentile marker position.<br>Possible values: `all`, `none`, `top`, `bottom`.<br>Default value: `none`.<br>**Example**: `percentile-markers = all`.|[↗](https://apps.axibase.com/chartlab/be900687)

## Examples

### Dual Axis

![](./images/dual-axis.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/8544efb0)

### Alert Expression

![](./images/alert-expression-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/84397e8d)

### `metro` Class

![](./images/metro-class-image.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/61dd4397)
