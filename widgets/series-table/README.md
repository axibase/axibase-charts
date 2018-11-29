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
<a name="hide-empty-series"></a>[`hide-empty-series`](#hide-empty-series)| Hide series for which no data exists or data whose validity is expired.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `hide-empty-series = false`| [↗](https://apps.axibase.com/chartlab/cfc5c1bd)

## Examples

### `min` and `max` Value Time

![](./images/min-max-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/905f49d0)

### Sliding Window

![](./images/sliding-window.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b09687f9)

### Color Grid

![](./images/st-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/6489829c/8/)

### Multiple Intervals

![](./images/multiple-intervals.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b371626f/2/)

### Alert

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

## Config Columns

![](./images/st-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/fb8bdf13/4/)