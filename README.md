---
sidebar: false
---

# Introduction

**Axibase Charts** is a graphics library for visualizing time series.

The library provides a simple configuration syntax to build [dashboards](https://apps.axibase.com/chartlab/2ef08f32) from  [widgets](./widgets/README.md).

```ls
[widget]
  type = chart
  [series]
    entity = nurswgvml007
    metric = cpu_busy
```

![](./images/charts-3.png)

## Powerful Syntax

* Aligned with [ATSD](https://axibase.com/docs/atsd/) time series schema for quick results.
* Create [derived series](https://apps.axibase.com/chartlab/62e6c18f/3/).
* Join [irregular series](https://apps.axibase.com/chartlab/e0e0be77).
* Re-compute aggregates [on the fly](https://apps.axibase.com/chartlab/57b0a961/3/).
* Utilize [imperative constructs](./syntax/control-structures.md) such as variable assignment, conditional branching, and loops for automation.

```ls
var servers = getEntities('my-app-group')
for server in servers
  [series]
    entity = @{server}
    metric = page_count
endfor
```

## Historical and Streaming Data

* [Incremental](https://apps.axibase.com/chartlab/cc79ed62) real-time data loading.
* Streaming parsing of compressed historical data.

## Development Tools

### Plugins

The [Axibase Charts plugin](https://marketplace.visualstudio.com/items?itemName=Axibase.axibasecharts-syntax) for the Microsoft [VSCode editor](https://code.visualstudio.com/) is a design tool that simplifies portal development and data exploration.

The [plugin](https://marketplace.visualstudio.com/items?itemName=Axibase.axibasecharts-syntax) implements the following functionality:

* Syntax Validation
* Syntax Highlighting
* Settings Reference
* Live Preview
* Code Formatting
* Auto-completion

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

Text Widget | Page Widget | Alert Table
:--:|:--:|:--:
[![](./images/text-widget.png)](./widgets/text-widget/README.md) | [![](./images/page-widget.png)](./widgets/page-widget/README.md) | [![](./images/alert-console.png)](./widgets/alert-table/README.md)

Series Table | Property Table
:--:|:--:
[![](./images/streaming-table.png)](./widgets/series-table/README.md) | [![](./images/property-widget.png)](./widgets/property-table/README.md)

## Supported Browsers

* `Google Chrome 48+`
* `Firefox 44+`
* `Microsoft Edge 14+`
* `Internet Explorer 11`
