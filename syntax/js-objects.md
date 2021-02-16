# JavaScript Objects

## `SeriesGroup`

`SeriesGroup` object contains `Series` objects, corresponding to declared [`[series]`](../widgets/shared/README.md#series-settings), and provides properties and util methods for manipulation on them.

Name&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;|Type / Description
---|---
`sorted`|**Series[]**<br>Array of `Series` objects with aliases, sorted by `alias` in ascending order.
`getSeriesByAlias(string alias)`|**function**<br>Returns `Series` corresponding to `alias`.
`zone()`|**function**<br>Returns value of [`timezone`](../widgets/shared/README.md#timezone) setting.

## `DataSeries`

`DataSeries` object provides functionality for manipulation on samples.

Name&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;|Type / Description
---|---
`zone`|**string**<br>Value of [`timezone`](../widgets/shared/README.md#timezone) setting.
`last`|**object**<br>Contains last sample as `{t: <number>, v: <number>}`.
`t`|**number[]**<br>Array of Unix timestamps.
`v`|**number[]**<br>Array of values.
`len`|**number**<br>Number of data samples, equals to lengths of `t` and `v`.
`series`|**Series[]**<br>Array of `Series` objects, corresponding to this `DataSeries`.
`typeIndex`|**number**<br>Index of aggregation statistic, `0` corresponds to `detail` (non-aggregated) series.
`period`|**object**<br>Aggregation period.
`pairs([function filter, function modifier])`|**function**<br>Combines `t` and `v` arrays and returns array of `[t, v]` pairs: `[[t1, v1], ..., [tN, vN]]`. Optional parameters:<br> * `filter` - the function of the form `(time, value) => boolean`, if returns `false`, pair `[time, value]` is excluded from the result.<br>&nbsp; &nbsp;**Example**:<br>&nbsp; &nbsp;`const filter = (t) => { return new Date(t).getMinutes() >= 30 } // Exclude pairs with minutes less than 30` <br> * `modifier` - the function of the form `(time, value) => number[]`, allows to modify both `time` and `value` in pair.<br>&nbsp; &nbsp;**Example**:<br>&nbsp; &nbsp;`const modifier = const modifier = (t, v) => [ t / 1000, v ] // Use seconds instead of millis`<br> [↗](https://apps.axibase.com/chartlab/158546b0/2/ "View in Chart Lab")

