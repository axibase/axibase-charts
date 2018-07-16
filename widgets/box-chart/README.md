# Box Chart

![](./images/box-chart.png)

## Overview

The Box Chart displays the minimum and maximum values, the median, and two percentiles in a given period of time for each series.

## Syntax

Box Charts support [Shared Widget](../shared/README.md) syntax.

### `[widget]` Settings

Setting |Syntax |Description |Example
--|--|--|--
Percentiles | `percentiles = 10%/90%` | Minimum and maximum percentiles for box chart area.<br>Values must be between `0%` and `100%`.<br>Default value: `25%/75%`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/440aafca/3/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/440aafca/4/)
Percentile Markers| `percentile-markers = all`<br>`percentile-markers = top` | Display percentiles markers.<br>Set at `[widget]` or `[series]` level.<br>Possible values: `all`, `none`, `top`, `bottom`.<br>Default value: `none`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/14cf1974)
Class | `class = metro` | Display percentile markers as circles on a dotted line, as common on subway maps.| [![](./images/button.png)](https://apps.axibase.com/chartlab/6d6ae13c/2)

### `[series]` Settings

Settings inherited from [Shared Widget `[series]` Syntax](../shared/README.md): `entity`, `metric`, `type`, `interval`, `alias`, `alert-expression`, `alert-style`, `style`, `color`, `label`, `tooltip`, `axis`, `format`, `display`, `hidden`, `refresh-interval`, `retry-refresh-interval`, `error-refresh-interval`.

## Examples

### Percentile Markers

![](./images/box-chart-4.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/14cf1974/2/)

### Dual Axis

![](./images/box-chart-1.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/440aafca)

### Alert

![](./images/box-alert.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/440aafca/8/)

### Two Series

![](./images/box-chart-3.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/440aafca/7/)

### Single Series

![](./images/box-chart-2.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/440aafca/7/)

### `metro` Mode

![](./images/box-metro-1.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/6d6ae13c/2/)