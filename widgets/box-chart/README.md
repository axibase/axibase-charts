# Box Chart

## Overview

The **Box Chart** displays a distribution of observed values over a user-defined time interval. The chart shows the minimum and maximum values, the median, and a customizable percentile [range](#class).

```ls
[widget]
  type = box
  timespan = 1 hour
  metric = memfree

  [series]
    entity = nurswgvml006
  [series]
    entity = nurswgvml007
```

![](./images/box-chart-title-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/81e2eaad)

### Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md) `[widget]` settings are inherited.

Name |Example |Description |&nbsp;
:--|:--|:--|:--
    <a id="class">`class`</a> | `class = metro` | Display percentile markers as circles on a dotted line, as common on subway maps.<br>Possible values:<br><li>`metro`<br><li>`default`<br>Default value: `default`.| [↗](https://apps.axibase.com/chartlab/c147cb06)

### Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md) `[setting]` settings are inherited.

Name |Example |Description |&nbsp;
:--|:--|:--|:--
[`percentiles`](#percentiles) | `percentiles = 10%/90%` | Minimum and maximum percentiles for the shaded box area.<br>Possible values: `0%` to `100%`.<br>Default value: `25%/75%`.| [↗](https://apps.axibase.com/chartlab/5a6925f5)
[`percentile-markers`](#percentile-markers)| `percentile-markers = all`<br>`percentile-markers = top` | Percentiles marker position.<br>Possible values:<br><li>`all`<br><li>`none`<br><li>`top`<br><li>`bottom`.<br>Default value: `none`.|[↗](https://apps.axibase.com/chartlab/866a4521)

## Examples

### Dual Axis

![](./images/dual-axis.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/8544efb0)

### Alert

![](./images/alert-expression-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/84397e8d)

### `metro` Class

![](./images/metro-mode-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/61dd4397)
