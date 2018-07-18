# Thresholds

Use client-side threshold aggregators to compute the amount of time or number of occurrences a metric violates a user-defined threshold.

Specify lower or upper thresholds or combine the two to trigger a violation when a series value is exceeds the specified range.

## `max-threshold`

Series violates the threshold when its value exceeds the maximum threshold.

```ls
[series]
  max-threshold = 60
  alert-expression = value > 60
  alert-style = color: red
```

![](./images/max-threshold.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/9d4c6263)

## `min-threshold`

Series violates the threshold when its value is below the minimum threshold.

```ls
[series]
  min-threshold = 7
  alert-expression = value > 7
  alert-style = color: green
```

![](./images/min-threshold.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/cb698253)

## `threshold_percent`

Percentage of time within the period when the series values did not exceed the threshold. Computed as sum of violation intervals divided by the period duration.

```ls
[series]
  statistic = threshold_percent
  max-threshold = 10
  period = 1 minute
  alert-expression = value > 100
  alert-style = color: red
```

![](./images/threshold_percent.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/a975165f)

## `threshold_count`

Number of sequences within the period when the series values exceeded the threshold. Consecutive observations violating the threshold are treated as one sequence.

```ls
[series]
  statistic = threshold_count
  max-threshold = 40
  period = 1 hour
  alert-expression = value > 10
  alert-style = color: red
```

![](./images/threshold_count.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/a975165f)

## `threshold_duration`

Total duration of intervals within the period when the series values exceeded the threshold. Note, when using `threshold_duration` with an `alert-expression` the `value` argument is measured in **milliseconds**.

```ls
[series]
  statistic = threshold_duration
  min-threshold = 10
  period = 5 minute
  alert-expression = value > 180000
  alert-style = color: green
```

![](./images/threshold_duration.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/b73f5d71)