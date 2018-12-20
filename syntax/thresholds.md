# Thresholds

Threshold aggregators calculate the amount of time or number of occurrences a metric violates a user-defined threshold. The threshold can be defined as an upper boundary, a lower boundary, or both.

## `max-threshold`

Series violates the threshold when a value exceeds the maximum threshold.

```ls
[series]
  max-threshold = 60
```

![](./images/thresholds-10.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/51db2895)

## `min-threshold`

Series violates the threshold when a value is below the minimum threshold.

```ls
[series]
  min-threshold = 7
```

![](./images/thresholds-11.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/93b7aeed)

## `threshold_percent`

Percentage of time within the period when series values do not exceed the threshold. Computed as the sum of violation intervals divided by the period duration.

```ls
[series]
  statistic = threshold_percent
  max-threshold = 10
```

![](./images/thresholds-8.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/93f7242d)

## `threshold_count`

Number of sequences within the period when the series values exceeded the threshold. Consecutive observations violating the threshold are treated as a single sequence.

```ls
[series]
  statistic = threshold_count
  max-threshold = 5
```

![](./images/thresholds-9.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/2f79b846)

## `threshold_duration`

Total duration of intervals within the period when series values exceeded the threshold. Note that when using `threshold_duration` with an `alert-expression` the `value` argument is measured in **milliseconds**.

```ls
[series]
  statistic = threshold_duration
  min-threshold = 10
```

![](./images/thresholds-7.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/e21205a6)