# Bar Chart

![](./images/bar-chart.png)

## Overview

Bar Charts group series into columns and displays them as horizontal or vertical bars.

## Syntax

Bar Charts support [Shared Widget](../shared/README.md) syntax.

### `[widget]` Settings

Setting |Syntax |Description |Example
--|--|--|--
|Horizontal|`horizontal = true`|Display bars horizontally<br>Default: `false`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/2/)|
|Stack|`stack = false`|Disable series grouping.<br>Default: `true`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/8/)|
|Group|`group = region`<br>`group = entity, metric`|Grouping keys to apply the same color to series in the same group<br>Default: `metric`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/e56f5bbc)|
|Entity Label|`entity-label = srv007`|Override grouped series legend when `group=entity`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/21/)|
|Metric Label|`metric-label = CPU Busy, %`|Override grouped series legend when `group=metric`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/22/)|
|Colors|`colors = green, steelblue, orange`|Series colors.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/13/)|
|Display Values|`display-values = false`|Show or hide bar total values.<br>Default: `true`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/7/)|
|Rotate Ticks|`rotate-ticks = 45`<br>`rotate-ticks = 90`<br>`rotate-ticks = true`|Rotate `x` axis labels.<br>Set in degrees.<br>Set to `true` to rotate ticks by `90` degrees.<br>Default value: `0`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/29/)|
|Sort|`sort = DESC`<br>`sort = value ASC`<br>`sort = name DESC`<br>`sort = collectd.df.space.free DESC`|Sort bars by name or value in ascending (`ASC`) or descending (`DESC`) order.<br>In stacking mode bars are sorted using total value.<br>Supports sorting of columns composed from multiple series by specifying metric name.<br>If column has multiple series, value keyword in sort settings stands for sum of series values in this column.|[![](./images/button.png)](https://apps.axibase.com/chartlab/4642b100)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/41d456a0)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/4204e221/3)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/4204e221/4)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/76ebf83b/5)|
|[Alert Expression](../../syntax/alert-expression.md) and Style|`alert-expression = value > 10`<br>`alert-style = fill: red; stroke: red`|Apply alert style to each series separately.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/20/)|
|Column Alert Expression and Style|`column-alert-expression = value > 10`<br>`column-alert-style = fill: red; stroke: red`|Apply alert style to total value of series in each bar.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/17/)|
|Hide Empty Columns|`hide-empty-columns=true`|Show or hide columns with no data to display.<br>Default value:`false`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/e4603a5f)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/377091ff)|

### `[column]` Settings

Setting |Syntax |Description |Example
--|--|--|--
|Label|`label = Column-1`|Column legend displayed below bar.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/3/)|
|Alert Expression and Style|`alert-expression = value > 7`<br>`alert-style = fill: red; stroke: red`|Apply alert style based on total value of series inside the bar.|[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/16/)|
|Column Label Format|`column-label-format = tags.mount_point`|Column label pattern containing text and placeholders.<br>Use any combination of the following: `entity`, `metric`, `tagName`, `tagValue`,`tags.{tag-name}`,`statistics`, `period`<br>Default value: `entity: metric: tagName=tagValue: statistics - period`|[![](./images/button.png)](https://apps.axibase.com/chartlab/8bc74658/2/)|
|Multiple Column|`multiple-column = true`|Applicable to [wildcard](../../syntax/wildcards.md) configurations.<br>Default value is `false`.<br>If `true`, series with the same entity and tags are added into the same column.<br>This applies to derived series which are placed in the same column alongside the underlying series.|[![](./images/button.png)](https://apps.axibase.com/chartlab/6e37edc8/2/)|

### `[series]` Settings

Settings inherited from [Shared Widget `[series]` Syntax](../shared/README.md): `entity`, `metric`, `type`, `interval`, `style`, `color`, `label`, `tooltip`, `format`, `display`, `hidden`, `refresh-interval`, `retry-refresh-interval`, `error-refresh-interval`.

## Examples

### Horizontal Bar Chart

![](./images/hor-bar.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/cb231db8/#fullscreen)

### Horizontal Alert

![](./images/horizontal-alert.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/63c825ca)

### Vertical Bar Chart

![](./images/vertical-bar-chart.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b)

### Vertical Alert

![](./images/bar-column-alert.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/17/)

### Alert

![](./images/bar-alert.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/8fe65e1b/11/)