# Bar Chart

![](./images/bar-chart.png)

## Overview

Bar Charts group series into columns and displays them as horizontal or vertical bars. Refer to [Shared Widget Syntax](../shared/README.md) for inherited settings.

## Syntax

### `[widget]` Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a id="horizontal"></a>`horizontal` | `horizontal = true` | Display bars horizontally<br>Default value: `false`. | [↗](https://apps.axibase.com/chartlab/8fe65e1b/2/)
<a id="stack"></a>`stack` | `stack = false` | Disable series grouping.<br>Default value: `true`. | [↗](https://apps.axibase.com/chartlab/8fe65e1b/8/)
<a id="group"></a>`group`|`group = region`<br>`group = entity, metric`|Apply one color to series in the same group.<br>Default value: `metric`.|[↗](https://apps.axibase.com/chartlab/e56f5bbc)
<a id="entity-label"></a>`entity-label`|`entity-label = srv007`|Override grouped series legend when `group=entity`.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/21/)
<a id="metric-label"></a>`metric-label`|`metric-label = CPU Busy, %`|Override grouped series legend when `group=metric`.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/22/)
<a id="colors"></a>`colors`|`colors = green, steelblue, orange`|Series colors.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/13/)
<a id="display-values"></a>`display-values`|`display-values = false`|Show or hide bar values.<br>If `mode = stack`, total represents total sum of included series.<br>Default value: `true`.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/36/)
<a id="rotate-ticks"></a>`rotate-ticks`|`rotate-ticks = 45`<br>`rotate-ticks = true`|Rotate `x` axis labels by degrees.<br>Set to `true` to rotate ticks by `90` degrees.<br>Default value: `0`.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/29/)
<a id="sort"></a>`sort`|`sort = DESC`<br>`sort = value ASC`<br>`sort = collectd.df.space.free DESC`|Sort bars by name or value in ascending (`ASC`) or descending (`DESC`) order.<br>In `stack` mode bars are sorted by **total** grouped value.<br>If a column has multiple series, keyword in `sort` setting represents the sum of series values.|[↗](https://apps.axibase.com/chartlab/4642b100)<br>[↗](https://apps.axibase.com/chartlab/4204e221/4)<br>[↗](https://apps.axibase.com/chartlab/76ebf83b/5)
<a id="alert-expression"></a>[`alert-expression`](../../syntax/alert-expression.md)|`alert-expression = value > 10`|Alert criteria.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/20/)
<a id="alert-style"></a>`alert-style` | `alert-style = fill: red; stroke: red` | Alert behavior.<br>Optionally, apply unique behavior for each `alert-expression` and series.| [↗](https://apps.axibase.com/chartlab/8fe65e1b/20/)
<a id="column-alert-expression"></a>`column-alert-expresions`|`column-alert-expression = value > 10`|Column alert criteria.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/17/)
<a id="column-alert-style"></a>`column-alert-style` | `column-alert-style = fill: red; stroke: red` | Column alert behavior.<br>Optionally, apply alert style to total value of series in each bar. | [↗](https://apps.axibase.com/chartlab/8fe65e1b/17/)
<a id="hide-empty-columns"></a>`hide-empty-columns`|`hide-empty-columns = true`|Show or hide columns with no data.<br>Default value:`false`.|[↗](https://apps.axibase.com/chartlab/e4603a5f)<br>[↗](https://apps.axibase.com/chartlab/377091ff)

### `[column]` Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a id="label"></a>`label`|`label = Column-1`|Column legend label displayed below series columns.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/3/)
`alert-expression`|`alert-expression = value > 7`|Alert criteria.<br>Apply alert style based on total value of series inside the bar.|[↗](https://apps.axibase.com/chartlab/8fe65e1b/16/)
`alert-style` | `alert-style = fill: red; stroke: red` | Alert behavior.<br>Apply alert style based on total value of series inside the bar.| [↗](https://apps.axibase.com/chartlab/8fe65e1b/16/)
<a id="column-label-format"></a>`column-label-format`|`column-label-format = tags.mount_point`|Column label pattern containing text and placeholders.<br>Use any combination of: `entity`, `metric`, `tagName`, `tagValue`,`tags.{tag-name}`,`statistics`, `period`<br>Default value: `entity: metric: tagName=tagValue: statistics - period`|[↗](https://apps.axibase.com/chartlab/8bc74658/2/)
<a id="multiple-column"></a>`multiple-column`|`multiple-column = true`|Applicable to [wildcard](../../syntax/wildcards.md) configurations.<br>Default value: `false`.<br>If `true`, series with the same entity and tags are added into the same column.<br>This applies to derived series which are placed in the same column alongside the underlying series.|[↗](https://apps.axibase.com/chartlab/6e37edc8/2/)

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
