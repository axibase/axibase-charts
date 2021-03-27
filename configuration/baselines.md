# Baselines

Combine multiple timespans of the same series within one widget using the [`time-offset`](../widgets/shared/README.md#time-offset) setting to compare current data versus data from some time ago.

```ls
[series]
  label = today
[series]
  label = yesterday
  time-offset = 1 day
[series]
  label = 1 week ago
  time-offset = 1 week
```

![](./images/time-offset-1.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/e7e3938d)