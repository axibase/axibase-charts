# Bar Chart

![](./images/bar-chart.png)

## Table of Contents

* [Overview](#overview)
* [Settings](#syntax)
  * [`[widget]` Settings](#widget-settings)
  * [`[column]` Settings](#column-settings)
* [Examples](#examples)

## Overview

Bar Charts group series into columns and displays them as horizontal or vertical bars. Refer to [Shared Widget Syntax](../shared/README.md) for inherited settings.

## Settings

### `[widget]` Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`horizontal`](#horizontal) | `horizontal = true` | Display bars horizontally.<br>Default value: `false`. | [↗](https://apps.axibase.com/chartlab/e0206a41)
[`stack`](#stack) | `stack = false` | Disable series grouping.<br>Default value: `true`. | [↗](https://apps.axibase.com/chartlab/fe3b8818)
[`group`](#group)|`group = region`<br>`group = entity, metric`|Apply one color to series in the same group.<br>Default value: `metric`.|[↗](https://apps.axibase.com/chartlab/f61bafc0)
[`entity-label`](#entity-label)|`entity-label = srv007`|Override grouped series legend when `group=entity`.|[↗](https://apps.axibase.com/chartlab/7bee2721)
[`metric-label`](#metric-label)|`metric-label = CPU Busy, %`|Override grouped series legend when `group=metric`.|[↗](https://apps.axibase.com/chartlab/7136a0aa)
[`colors`](#colors)|`colors = green, steelblue, orange`|Series colors.|[↗](https://apps.axibase.com/chartlab/163cd950)
[`display-values`](#display-values)|`display-values = false`|Show or hide bar values.<br>If `mode = stack`, displayed total represents sum of all included series.<br>Default value: `true`.|[↗](https://apps.axibase.com/chartlab/29f11556)
[`rotate-ticks`](#rotate-ticks)|`rotate-ticks = 45`<br>`rotate-ticks = true`|Rotate `x` axis labels by `n` degrees.<br>Set to `true` to rotate ticks by `90` degrees clockwise.<br>Default value: `0`.|[↗](https://apps.axibase.com/chartlab/68a42888)
[`sort`](#sort)|`sort = DESC`<br>`sort = value ASC`<br>`sort = cpu_busy DESC`|Sort bars by name or value in ascending (`ASC`) or descending (`DESC`) order.<br>When `mode = stack`, bars are sorted by **total** grouped value.<br>If a column has multiple series, keyword in `sort` setting represents the sum of series values.|[↗](https://apps.axibase.com/chartlab/ab989019)
[`alert-expression`](#alert-expression)|`alert-expression = value > 10`|Alert criteria.|[↗](https://apps.axibase.com/chartlab/da384229)
[`alert-style`](#alert-style) | `alert-style = fill: red; stroke: red` | Alert behavior.<br>Optionally, apply unique behavior for each `alert-expression` and series.| [↗](https://apps.axibase.com/chartlab/754d2f99)
[`column-alert-expression`](#column-alert-expression)|`column-alert-expression = value > 10`|Column alert criteria.|[↗](https://apps.axibase.com/chartlab/c6b766ba)
[`column-alert-style`](#column-alert-style) | `column-alert-style = fill: red; stroke: red` | Column alert behavior.<br>Optionally, apply alert style to total value of series in each bar. | [↗](https://apps.axibase.com/chartlab/66a259c4)
[`hide-empty-columns`](#hide-empty-columns)|`hide-empty-columns = true`|Show or hide columns with no data.<br>Default value:`false`.|[↗](https://apps.axibase.com/chartlab/e4603a5f)<br>[↗](https://apps.axibase.com/chartlab/27050141)

### `[column]` Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
[`label`](#label)|`label = Column-1`|Column legend label displayed below series columns.|[↗](https://apps.axibase.com/chartlab/4ceaa563)
`alert-expression`|`alert-expression = value > 7`|Alert criteria.<br>Apply alert style based on total value of series inside the bar.|[↗](https://apps.axibase.com/chartlab/da384229)
`alert-style` | `alert-style = fill: red; stroke: red` | Alert behavior.<br>Apply alert style based on total value of series inside the bar.| [↗](https://apps.axibase.com/chartlab/754d2f99)
[`column-label-format`](#column-label-format)|`column-label-format = tags.mount_point`|Column label pattern containing text and placeholders.<br>Use any combination of: `entity`, `metric`, `tagName`, `tagValue`,`tags.{tag-name}`,`statistics`, `period`<br>Default value: `entity: metric: tagName=tagValue: statistics - period`|[↗](https://apps.axibase.com/chartlab/7afc353a)
[`multiple-column`](#multiple-column)|`multiple-column = true`|Applicable to [wildcard](../../syntax/wildcards.md) configurations.<br>Default value: `false`.<br>If `true`, series with the same entity and tags are added into the same column.<br>This applies to derived series which are placed in the same column alongside the underlying series.|[↗](https://apps.axibase.com/chartlab/b1609460)

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
