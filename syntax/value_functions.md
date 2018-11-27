# Value Functions

## Overview

This document describes fields and functions, which can be referenced in the [`value`](../widgets/shared/README.md#value) setting to create derived series.

The `value` setting is specified in the `[series]` section.

```ls
# Define the original series, which values used in creating a derived (computed) series.
# The original series must exist in the database
[series]
  metric = cpu_busy
  entity = nurswgvml007

  # Specify an alias
  alias = s-1

  # Optionally, hide the original series
  display = false

# Define the derived series by specifying an expression in the `value` setting
[series]
  label = My New Series

  # Specify an expression called for each `time:value` sample in the original series
  value = 2 * value("s-1")
```

![](./images/value-function-1.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/ae6323aa)

The `value` expression is invoked **for each** `time:value` sample in the original series. The expression must return a numeric value or `null` if the value cannot be calculated. `null` values are not displayed on the chart.

```ls
[series]
  metric = cpu_busy
  entity = nurswgvml007
  alias = s1
[series]
  # Show only values that are greater than previous
  value = value("s-1") > previous("s-1") ? 10 + value("s-1") : null
  label = s2
```

![](./images/value-function-2.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/ae6323aa/2/)

## Fields

| Field | Arguments | Description |
|----------|-----------|-------------|
| `value` | `alias` | Value of the series at the current timestamp. |
| `previous` | `alias`, `count` | Value of series `count` samples ago.<br>If `count` is `1` or not set, the function returns the previous value. |
| `time` |  | Timestamp in Unix milliseconds for which the expression is invoked. |

## Statistical Functions

| Function | Arguments | Description |
|----------|-----------|-------------|
| `movavg` | `alias`, `count`, `minCount` | Average value of `count` last samples. If `minCount` parameter is specified, the function returns `null` unless the number of samples exceeds this parameter. |
| `percentile` | `percentage`, `alias`, `period` |  Value, which is greater than the `percentage` of samples in the current `period`.  |
| `max`<br>`maximum` | `alias`, `period` | Maximum in the current `period`. |
| `min`<br>`minimum` | `alias`, `period` | Minimum in the current `period`. |
| `avg`<br>`average` | `alias`, `period` | Average in the current `period`. |
| `sum` | `alias`, `period` | Sum of values in the current `period`. |
| `delta` | `alias`, `period` | Difference between last values of the current and previous periods. |
| `counter` | `alias`, `period`  | Sum of positive differences between subsequent values in the current period. |
| `count` | `alias`, `period` | Number of samples in the current `period`. |
| `last` | `alias`, `period` | Value of the last sample. in the current period. |
| `first` | `alias`, `period` | Value of the first sample in the current period. |
| `min_value_time` | `alias`, `period` | Timestamp of the maximum value in the current period. |
| `max_value_time` | `alias`, `period` | Timestamp of the minimum value in the current period. |
| `median` | `alias`, `period` | Same as `percentile(50)`. |

## Ranking Functions

| Function | Arguments | Description |
|----------|-----------|-------------|
| `bottom` | `rank`, `getValue` | Sort current values in increasing order and return the position index<br>`1` = smallest. |
| `top` | `rank`, `getValue` | Sort current values in decreasing order and return the position index<br>`1` = largest. |

## Metadata Functions

| Function | Arguments | Description |
|----------|-----------|-------------|
| `meta` | `alias` | Metadata object. |
| `entityTag` | `alias`, `tagName` | Entity tag. |
| `metricTag` | `alias`, `tagName` | Metric tag. |

## Window Functions

Define a custom JavaScript function in the `window` object using the `script` / `endscript` section in the configuration text.

```ls
script
  window.checkRange = function (val) {
     if (val > 100) {
       return null;
     }
     return val;
  };
endscript
```

The custom function can be accessed in the `value` field by referencing it by name.

```ls
value = return checkRange(value);
```

Functions in the `window` scope can be invoked in other settings that support functions, for example, in the `format` setting.