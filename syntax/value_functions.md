# Value-Expression Functions

## Overview

This document describes functions, which can be used in `value` setting.

Here is a small example of how this functions can be used. [Example in ChartLab](https://apps.axibase.com/chartlab/ae6323aa)

```ls
# first, define base series, which data will be used in calculations
[series]
  # provide the base series with an "alias"
  alias = base
  metric = cpu_busy
  entity = nurswgvml007

# than define the computed series with "value" setting
[series]
  # call `value()` function, using the alias of base series as argument "alias"
  value = 2 * value("base")
  label = computed
```

## Statistic functions

| Function | Arguments | Description |
|----------|-----------|-------------|
| value | alias | Current value of series with `alias` |
| previous | alias, offset | Previous value of series with `alias` |
| movavg | alias, count, minCount | Moving average from a desired number of previous points |
| percentile | percentage, alias, period |  Value, which is greater than the `percentage` of samples in the `period`  |
| max | alias, period | Maximum in the `period` |
| min | alias, period | Minimum in the `period` |
| avg | alias, period | Average in the `period` |
| sum | alias, period | Sum in the `period` |
| delta | alias, period | Difference between last values of current and previous periods |
| counter | alias, period  | Difference between last values of current and previous periods with special processing of resets |
| count | alias, period | Number of points in the `period` |
| last | alias, period | Value of the last point in the period |
| first | alias, period | Value of the first point in the period |
| min_value_time | alias, period | Timestamp of the maximum value in the period |
| max_value_time | alias, period | Timestamp of the minimum value in the period |
| median | alias, period | Alias for `percentile(50)` |
| average | alias, period | Alias for `avg` |
| minimum | alias, period | Alias for `min` |
| maximum | alias, period | Alias for `max` |
| time |  | Timestamp of current point |
| bottom | rank, getValue | Sort values, calculated with `getValue` function, in increasing order and return value in `rank` |
| top | rank, getValue | Sort values, calculated with `getValue` function, in decreasing order and return value in `rank` |


## Series Properties Functions

| Function | Arguments | Description |
|----------|-----------|-------------|
| meta | alias | Full metadata of series |
| entityTag | alias, tagName | Entity tag from metadata of series |
| metricTag | alias, tagName | Metric tag from metadata of series |
| series | *(not a function)* | All series of the widget |
| metric | *(not a function)* | Metric of processed series |
| entity | *(not a function)* | Entity of processed series  |
| tags | *(not a function)* | Tags of series processed series  |

