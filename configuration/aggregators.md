# Aggregation Functions

Statistical functions are applied to values in each period to calculate period statistics.

## Client and Server Calculations

The **Charts** library provides a built-in capability to calculate some of the aggregate statistics in the user's browser (on the client).

In client-side mode, the browser downloads **detailed** samples once from the server and calculates statistics in JavaScript. The detailed samples remain in browser memory. When the user clicks one of the chart controls to modify the aggregation period or to view results a different statistic, the browser is able to recompute statistics locally, without requesting the data from the server.

In server-side mode, the client makes requests for aggregate statistics from the server each time the period or function is changed. The server has more compute and memory resources and is able to calculate statistics much faster then the client. The memory required from the browser is minimized since there is no need to download detailed data. However, if the network is slow, the benefits of server-side processing can be outweighed if the client downloads detailed data once and re-uses it for many subsequent re-calculations.

By default, the calculation is performed on the client, unless the requested statistical function is supported only on the server, such as `wavg` or `standard_deviation`.

To modify the default behavior, use the `server-aggregate` setting.

```ls
server-aggregate = true
```

<!-- markdownlint-disable MD101 -->

## Server and Client Aggregators

Supported both in client- and server-mode. Calculated on client side by default or if `server-aggregate` is set to `false`.

Syntax | Description
--- |--- |
<a name="count"></a>[`count`](#count) | **Number** of samples during the period. |
<a name="min"></a>[`min`](#min) | **Minimum value** during the period. |
<a name="max"></a>[`max`](#max) | **Maximum value** during the period. |
<a name="sum"></a>[`sum`](#sum) | **Sum** of values during the period. |
<a name="avg"></a>[`avg`](#avg) | **Average value** during the period. |
<a name="percentile"></a>[`percentile(n)`](#percentile)| `n`-th [percentile](https://axibase.com/docs/atsd/api/data/aggregation.html#percentile), for example `PERCENTILE(75)` or `PERCENTILE(99.5)`.<br>`n` is a decimal number between `[0, 100]`.|
<a name="median"></a>[`median`](#median) | Median value, same as 50% percentile. |
<a name="first"></a>[`first`](#first) | **First** value received during the period. |
<a name="last"></a>[`last`](#last) | **Last** value received during the period. |
<a name="delta"></a>[`delta`](#delta) | **Delta** is the difference between the last value in the period and the last value in the previous period.<br>If no last value is present in the previous period (empty period), then `delta` is the difference between the last and first values during the current period.<br>See also [`counter`](#counter) aggregator. |
<a name="counter"></a>[`counter`](#counter) | Sum of the differences between consecutive values in the period.<br>If the difference between any two values is negative, the difference is replaced with the value itself.<br>If the difference between values is always non-negative, the `counter` aggregator returns the same value as the `delta` aggregator.<br>Refer to this [**Example**](https://apps.axibase.com/chartlab/86c6b6e0) to better understand the difference between `COUNTER` and `DELTA`. |

## Server Aggregators

**Not supported** in client-mode. Calculated on the server side, regardless of the `server-aggregate` setting.

Syntax | Description
--- |---
<a name="standard_deviation"></a>[`standard_deviation`](#standard_deviation) | **Standard deviation** of values during the period.<br>√ of the variance.|
<a name="median_abs_dev"></a>[`median_abs_dev`](#median_abs_dev) | **Median absolute deviation** of values during the period.<br>`median(abs(value - median(value)))`. |
<a name="wtavg"></a>[`wtavg`](#wtavg) | An **average** created via the multiplication of each component by a factor reflecting importance.<br>Weight is assigned **based on timestamps** rather than index.<br>Data points with older timestamps contribute less to the weighted mean than more recent data.<br>The weight of a sample is proportional to the `current_time – first_time + 1` (in seconds), where `current_time` is the timestamp of the sample, and `first_time` is the timestamp of the first sample received during the period.<br>Weights are normalized, their sum is equal to `1`.<br>Refer to the [calculation example](#avg-wavg-and-wtavg-example) below. |
<a name="wavg"></a>[`wavg`](#wavg) | A **weighted average** of samples received during the period.<br>The weight of a sample is proportional to the index of the sample in the time-ordered array of all samples during the period.<br>Weights are normalized, their sum is equal to `1`.<br>A weighted average is sum of sample values multiplied by weight.<br>Refer to the [**Calculation Example**](#avg-wavg-and-wtavg-example) below. |
<a name="min-value-time"></a>[`min_value_time`](#min-value-time) | **Time** when the minimum value ([`min`](#min)) occurred for the first time during the period. |
<a name="max-value-time"></a>[`max_value_time`](#max-value-time) | **Time** when the maximum value ([`max`](#max)) occurred for the first time during the period. |
<a name="threshold-count"></a>[`threshold_count`](#threshold-count) | Number of **threshold violations** during the period.<br>A violation is a sequence of one or more successive data points exceeding the specified threshold.<br>**Example**: The following values are collected every `5` minutes.<br>`1, 2, 5, 7, 1, 1`. <br>If the threshold is set to `4`, then one sequence (`5`,`7`) exceeds the threshold. |
<a name="threshold-duration"></a>[`threshold_duration`](#threshold-duration) | **Total duration** of threshold violations during the period in **milliseconds**.<br>A violation is a sequence of one or more successive data points exceeding the specified threshold.<br>**Example**: The following values are collected every `5` minutes.<br>`1, 2, 5, 7, 1, 1`.<br>If the threshold is set to `4`, then one sequence (`5`,`7`) exceeds the threshold and its total duration based on linear interpolation is `550` seconds.<br>If the threshold is `5`, then duration is `850` seconds.<br>For periods at the beginning of the timespan, at the end of the timespan or after a missing period, the value at the beginning of the period is set to the first value, and the value at the end of the period is set to last value. |
<a name="threshold-percent"></a>[`threshold-percent`](#threshold-percent) | **Percent** of time during which the value remained below threshold (no violation).<br>Formula: `threshold_percent = 100 - threshold_duration / period_duration * 100` |

<!-- markdownlint-enable MD101 -->

## Interpolation Functions

If the period does not contain any detailed values, they are excluded from the results. The default behavior `NONE` can be modified by specifying an interpolation function to fill missing periods.

|Function |Description |
|--- |--- |
<a name="none"></a>[`NONE`](#none) | No interpolation. Periods without any raw values are excluded from results. |
<a name="linear"></a>[`LINEAR`](#linear) | Calculate period value using linear interpolation between previous and next period values. |
<a name="previous"></a>[`PREVIOUS`](#previous) | Set value for the period based on the previous period’s value. |
<a name="next"></a>[`NEXT`](#next) | Set value for the period based on the next period’s value. |
<a name="value"></a>[`VALUE`](#value) | Set value for the period to a specific number. |

### Examples

![](./images/interpolation-examples.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/d8c03f11/3/#fullscreen)

## `AVG`, `WAVG`, and `WTAVG` Example

See the Excel spreadsheet for testing and calculation.

[![](./images/avg_calculations.png)](./resources/aggregators.xlsx)

[`wtavg()`](#wtavg): Weighted time average.

Calculation: `Weight = (sample.time - first.time)/(last.time - first.time + 1)`

## Examples

**Box Chart with `percentile`**

![](./images/aggregators-1.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/09315b88/7/)

**Histogram with `percentile`**

![](./images/aggregators-2.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/09315b88/6/)

**Time Chart with `delta`**

![](./images/aggregators-3.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/09315b88/5/)

**Time Chart with `count` and `delta`**

![](./images/aggregators-5.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/54e57188)
