# Streaming Table

## Overview

The **Streaming Table** displays a table of values stored in ATSD.

```ls
[widget]
  type = table
  metric = cpu_busy

  [series]
    entity = nurswgvml0*
```

![](./images/streaming-table-title.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/132d37c8)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.
* [Shared Table](../shared-table/README.md#widget-settings) `[widget]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="hide-empty-series"></a>[`hide-empty-series`](#hide-empty-series) | `hide-empty-series = false` | Hide series for which no data exists or data whose validity is expired.<br>Default Setting: `true`.| ↗
<a name="expire-time-span"></a>[`expire-time-span`](#expire-time-span) | `expire-time-span = 10 day` | Interval which determines the validity of series `last insert` data.| ↗

## Examples

### `min` and `max` Value Time

![](./images/min-and-max-value-time.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/5bb723f1)

### Sliding Window

![](./images/sliding-window.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/e9763ce8)

### Color Grid

![](./images/color-grid.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/0d60397e)

### Alert

![](./images/alert.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/243f21ce)

### Toggle Rows

![](./images/toggle-rows-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/ae3ece3f)

### Calculated Columns

![](./images/calculated-columns.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b2a7070a)

### Multiple Metrics

![](./images/multiple-metrics.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b3835e7f)

### Multiple Tags

![](./images/multiple-tags.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/c2c46923)

### Configure Columns

![](./images/configure-columns.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/f804ddc9)
