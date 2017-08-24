# `value-expression` settings

## Overiew

| Name | Description | Widgets | Requires Alias |
|------|-------------|---------|----------------|
| value |  | all | true |
| alert-expression |  | [chart][chart], [bar][bar], [box][box], [calendar][calendar], [gauge][gauge], [histogram][histogram], [pie][pie], [table][table], [text][text], [treemap][treemap], [graph][graph] |
| display |  | [chart][], [bar][], [box][], [calendar][], [gauge][], [histogram][], [pie][], [table][], [treemap][] |
| enabled |  | [chart][], [bar][], [box][], [calendar][], [histogram][], [pie][] |
| disconnect-value |  | all |
| thresholds |  | all |
| _total-value_  |  | [pie][] |
| series-labels |  | [pie][] |
| series-value |  | [table][] |
| color |  | [tremap][] |
| size |  | [treemap][] |
| total-size |  | [treemap] |
| node-value |  | [graph][] |
| link-value |  | [graph][] |
| node-alert-expression |  | [graph][] |
| link-alert-expression |  | [graph][] |
| link-threshold |  | [graph][] |
| node-threshold |  | [graph][] |



## Available Variables
Inside described above settings the following variables can be used.
Most of them are functions, that can retrieve and aggregate value of some series, using it's alias.

| Name | Description | Arguments |
|------|-------------|-----------|
| metric |  |  |
| entity |  |  |
| tags |  |  |
| value |  |  |
| previous |  |  |
| movavg |  |  |
| detail |  |  |
| forecast |  |  |
| forecast_deviation |  |  |
| lower_confidence |  |  |
| upper_confidence |  |  |
| percentile |  |  |
| max |  |  |
| min |  |  |
| avg |  |  |
| sum |  |  |
| delta |  |  |
| counter |  |  |
| last |  |  |
| first |  |  |
| min_value_time |  |  |
| max_value_time |  |  |
| count |  |  |
| threshold_count |  |  |
| threshold_percent |  |  |
| threshold_duration |  |  |
| time |  |  |
| bottom |  |  |
| top |  |  |
| [meta](functions.md#meta) | Retrieves the metadata object for a series |  |
| [entityTag](functions.md#entityTag) | Returns the value of the entity tag from the metadata object for the series (`[series]` `add-meta` should be `true`) |  |
| [metricTag](functions.md#metricTag) | Returns the value of the metric tag from the metadata object for the series (`[series]` `add-meta` should be `true`) |  |
| median | alias for `percentile(50)` |  |
| average | alias for `avg` |  |
| minimum | alias for `min` |  |
| maximum | alias for `max` |  |
| series | SeriesGroup - array, containing all created series, including thoose not specified in config or hidden | not a function |





[chart]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/time-chart/ "Time Chart"
[gauge]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/gauge-chart/ "Gauge"
[bar]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/bar-chart-widget/ "Bar"
[histogram]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/histogram-chart/ "Histogram"
[box]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/box-chart-widget/ "Box"
[calendar]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/calendar-chart-widget/ "Calendar"
[treemap]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/treemap-widget/ "Treemap"
[pie]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/pie-chart-widget/ "Pie Widget"
[table]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/streaming-table-widget/ "Streaming Table"
[text]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/text-widget/ "Text Widget"
[graph]: https://axibase.com/products/axibase-time-series-database/visualization/widgets/graph-widget/ "Graph Widget"