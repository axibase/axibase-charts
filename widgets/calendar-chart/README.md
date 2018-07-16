# Calendar Chart

![](./images/calendar-chart-3.png)

## Overview

The Calendar Chart displays deviation of aggregated series values for each calendar period from the specified threshold. Series values within each period are [aggregated](../../configuration/aggregators.md) with a statistical function, `avg` by default, and the aggregated period value is then assigned a certain color which reflects the magnitude of the deviation.

## Syntax

Calendar Charts support [Shared Widget](../shared/README.md) syntax.

### `[widget]` Settings

Setting |Syntax |Description |Example
--|--|--|--
Period Summary | `summarize-period = 1 hour`<br>`summarize-period = 15 minutes` | Period by which loaded time series data is split. | [![](./images/button.png)](https://apps.axibase.com/chartlab/fb935e05/14/)
