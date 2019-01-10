# Series Table

## Overview

The **Series Table** displays last series values.

```ls
[widget]
  type = table
  metric = cpu_busy

  [series]
    entity = nurswgvml0*
```

![](./images/streaming-table-title.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/7c05786f)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Common](../shared/README.md#widget-settings) `[widget]` settings are inherited.
* [Common Table](../shared-table/README.md#widget-settings) `[widget]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="merge-columns"></a>[`merge-columns`](#merge-columns)| Merge multiple series into a single row using a boolean expression or enumerated columns as a grouping key.<br>**Example**: <ul><li>`merge-columns = entity`</li><li>`merge-columns = entity, tags`</li><li>`merge-columns = tags.target`</li><li>`merge-columns = a.tags.country == b.tags.country`</li></ul>| [↗](https://apps.axibase.com/chartlab/6489829c/25/)<br>[↗](https://apps.axibase.com/chartlab/a6853bd2/2/)<br>[↗](https://apps.axibase.com/chartlab/42a161bc/4/)|
<a name="hide-empty-series"></a>[`hide-empty-series`](#hide-empty-series)| Hide series for which no data exists or data whose validity is expired.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `hide-empty-series = false`| [↗](https://apps.axibase.com/chartlab/cfc5c1bd)

## Series Settings

* The settings apply to the `[series]` section.
* [Common](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="series-value"></a>[`series-value`](#series-value) | JavaScript expression to calculate derived column value.<br>**Example**: `series-value = min()` | [↗](https://apps.axibase.com/chartlab/b0a45b83/2/ )

## Examples

### Minimum and Maximum Value Time

![](./images/min-max-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/905f49d0)

### Multiple Offsets

![](./images/offset.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/7c463fac)

### Sliding Window

![](./images/sliding-window.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b09687f9)

### Color Grid

![](./images/st-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/6489829c/8/)

### Multiple Intervals

![](./images/multiple-intervals.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b371626f/2/)

### Alert Styles

![](./images/alert-example-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/4d03229c)

### Toggle Rows

![](./images/toggle-rows-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/ae3ece3f)

### Calculated Columns

![](./images/calculated-columns.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/ff8aabfd)

### Multiple Metrics

![](./images/st-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/ca71ab6d)

### Multiple Tags

![](./images/multiple-tags.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/c9e3624d)

### Metadata Columns

![](./images/configure-columns.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/f804ddc9)

## Configuration Columns

![](./images/st-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/fb8bdf13/4/)