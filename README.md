---
sidebar: false
---

# Introduction

**Axibase Charts** is a graphics library for visualizing time series data with [widgets](./widgets/README.md).

Charts implement a simple, yet powerful, syntax which is closely integrated with [ATSD](https://axibase.com/docs/atsd/) schema to build [real-time dashboards](https://apps.axibase.com/chartlab/2ef08f32) with declarative settings.

![](./images/charts-title-photo.png)

## Interactive Analytics

* Create [derived series](https://apps.axibase.com/chartlab/62e6c18f/3/).
* Join [multiple metrics](https://apps.axibase.com/chartlab/e0e0be77).
* Re-compute aggregates [on the fly](https://apps.axibase.com/chartlab/57b0a961/3/).

## Historical and Streaming Data

* Streaming parsing of compressed historical data.
* [Incremental](https://apps.axibase.com/chartlab/cc79ed62) real-time data loading.

## Tools

* [ChartLab](https://axibase.com/use-cases/tutorials/shared/chartlab.html)
* [Trends](https://axibase.com/use-cases/tutorials/shared/trends.html)

---

## Syntax and Configuration

* [Control Structures](./syntax/control-structures.md)
* [Label Formatting](./syntax/label-formatting.md)
* [Alert Expressions](./syntax/alert-expression.md)
* [Baselines](./configuration/baselines.md)
* [Thresholds and SLA](./syntax/thresholds.md)
* [Extended Aggregators](./syntax/extended-aggregators.md)
* [Linking](./syntax/linking.md)
* [Wildcards](./syntax/wildcards.md)
* [Functions](./syntax/functions.md)  
* [User-Defined Functions](./syntax/udf.md)
* [Drop-down Lists](./configuration/drop-down-lists.md)
* [Inheritance](./configuration/inheritance.md)
* [Display Filters](./configuration/display-filters.md)
* [Computed Metrics](./configuration/computed-metrics.md)
* [Summary Portals](./configuration/summary-portals.md)
* [Meta Data](./configuration/meta-data.md)

---

## Widgets

Time Chart | Gauge Chart | Bar Chart
:--:|:--:|:--:
[![](./images/time-chart.png)](./widgets/time-chart/README.md) | [![](./images/gauge-chart.png)](./widgets/gauge-chart/README.md) | [![](./images/bar-chart.png)](./widgets/bar-chart/README.md)

Histogram Chart | Box Chart | Calendar Chart
:--:|:--:|:--:
[![](./images/histogram.png)](./widgets/histogram/README.md) | [![](./images/box-chart.png)](./widgets/box-chart/README.md) | [![](./images/calendar-chart.png)](./widgets/calendar-chart/README.md)

Treemap Widget | Pie Chart | Graph Widget
:--:|:--:|:--:
[![](./images/treemap-widget.png)](./widgets/treemap/README.md) | [![](./images/pie-chart.png)](./widgets/pie-chart/README.md) | [![](./images/graph.png)](./widgets/graph/README.md)

Text Widget | Page Widget | Alert Console
:--:|:--:|:--:
[![](./images/text-widget.png)](./widgets/text-widget/README.md) | [![](./images/page-widget.png)](./widgets/page-widget/README.md) | [![](./images/alert-console.png)](./widgets/alert-console/README.md)

Streaming Table | Property Table
:--:|:--:
[![](./images/streaming-table.png)](./widgets/streaming-table/README.md) | [![](./images/property-widget.png)](./widgets/property-table/README.md)
