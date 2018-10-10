# Graph Widget

## Overview

The **Graph Widget** displays the topology and relationships of servers, virtual machines, and managers alongside corresponding statuses.

![](./images/graph-widget-title.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/00e6e2b6)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="mode"></a>[`mode`](#mode)|Determines the overall look of the widget.<br>Possible values: `hierarchy`, `non-hierarchy`.<br>Default value: `non-hierarchy`.<br>**Example**: `mode = hierarcy`.| [↗]()
<a name="layout"></a>[`layout`](#layout)| Widget form in `non-hierarchy` mode.<br>Possible values: `circle`, `rectangle`.<br>Default value: `circle`.<br>**Example**: `layout = rectange`.|[↗]()
<a name="depth"></a>[`depth`](#depth)|Depth of the displayed vertex hierarchy from `1` to the maximum depth of the vertex hierarchy plus `1`<br>Final level corresponds to edges<br>Maximum depth of the hierarchy is default.<br>**Examples**: `depth = 5`.| [↗]()
<a name="tension"></a>[`tension`](#tension)|The degree curvature of edges.<br>Corresponds to the parameter `C` in the formula for the cardinal spline.<br>Possible values: `0` (straight lines) to `1`.<br>Default value: `0.9`.<br>**Example**: `tension = 0.1`.| [↗]()
<a name="bundled"></a>[`bundled`](#bundled)|Hierarchical contraction of edges ([Danny Holten](https://www.researchgate.net/publication/6715561_Hierarchical_Edge_Bundles_Visualization_of_Adjacency_Relations_in_Hierarchical_Data) algorithm).<br>`true` by default.<br>**Example**: `bundled = false`.| [↗]()
<a name="effects"></a>[`effects`](#effects)|Animation when changing the geometry of the graph.<br> `false` by default.<br>**Example**: `effects = true`.|[↗]()
<a name="duration"></a>[`duration`](#duration)|The duration of a transaction when changing the geometry of the graph in milliseconds.<br>`1000` by default.<br>**Example**: `duration = 2000`.|[↗]()
<a name="min-ring-width"></a>[`min-ring-width`](#min-ring-width) |The minimum allowed width of the vertex ring.<br> The value is from `0` to a maximum permissible value of the ring width.<br>`0.3` by default.<br>**Example**: `min-ring-width = 2`.| [↗]()
<a name="max-ring-width"></a>[`max-ring-width`](#max-ring-width)|The maximum allowed width of the vertex ring from the current minimal value of the ring width.<br> `0.5` by default.<br>**Example**: `max-ring-width = 5`.| [↗]()
<a name="arrows"></a>[`arrows`](#arrows)| Arrows on the directed edges<br>`false` by default.<br>**Example**: `arrows = true`.|[↗]()
<a name="node-connect"></a>[`node-connect`](#node-connect)|Connect vertices on the perimeter<br>`true` by default.<br>**Example**: `node-connect = false`.|[↗]()
<a name="data"></a>[`data`](#data)|Information about the last time series value next to the image of the corresponding vertex.<br>`false` by default.<br>**Example**: `data = true`.|[↗]()
<a name="node-collapse"></a>[`node-collapse`](#node-collapse)|Collapse vertex sectors when clicked.<br>`true` by default.<br>**Example**: `node-collapse = false`.|[↗]()
<a name="node-alert-style"></a>[`node-alert-style`](#node-alert-style) | Style of vertices, in the event of an `alert-expression` being triggered tied to the time series.<br>**Example**: `node-alert-style = fill: red`|[↗]()
<a name="link-alert-style"></a>[`link-alert-style`](#link-alert-style)|Style of edges in the event of an `alert-expression` being triggered and tied to the time series.<br>**Example**: `link-alert-style = fill: red`.|[↗]()
<a name="link-thresholds"></a>[`link-thresholds`](#link-thresholds)|Threshold for time series attached to the edges.<br>Supports both JavaScript and `percentile` functions.<br>**Example**: `link-thresholds =`.|[↗]()
<a name="link-colors"></a>[`link-colors`](#link-colors)| Color to indicate the threshold of time series.<br>Attached to the edges and separated by commas.<br>**Example**: `link-colors = red, yellow, green`.|[↗]()
<a name="link-widths"></a>[`link-widths`](#link-widths)|Width to indicate the thresholds of the time series tied to the edges and separated by commas or spaces.<br>**Example**: `link-widths =`.|[↗]()
<a name="node-thresholds"></a>[`node-thresholds`](#node-thresholds)|Threshold for time series tied to vertices.<br>Supports JavaScript, `percentile` functions, or can be set as an array.<br>**Example**: `node-thresholds =`.|[↗]()
<a name="node-colors"></a>[`node-colors`](#node-colors)| Color to indicate the threshold of time series that are bound to vertices and separated by commas.<br>**Example**: `node-colors = red, yellow, green`.|[↗]()
<a name="node-radiuses"></a>[`node-radiuses`](#node-radiuses)|Radii of the lighting for the display of the time series thresholds linked to the vertices and separated by commas or spaces.<br>**Example**: `node-radiuses =`|[↗]()
<a name="node-radius"></a>[`node-radius`](#node-radius)|Radius of the vertex in pixels.<br>Not valid in `hierarchy` mode.<br>**Example**: `node-radius =`.|[↗]()
<a name="padding"></a>[`padding`](#padding)|Offset from the edge of the container in pixels.<br>**Example**: `padding =`.|[↗]()
<a name="link-animate"></a>[`link-animate`](#link-animate)|Animation of directed vertices.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `link-animate = true`.|[↗]()
<a name="disconnected-node-display"></a>[`disconnected-node-display`](#disconnected-node-display)|Show vertices without edge.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `disconnected-node-display =`.|[↗]()
<a name="node-labels"></a>[`node-labels`](#node-labels)|Display vertex labels.<br>Possible values: `true` or `false`.<br>**Example**: `node-labels = false`.|[↗]()
<a name="link-labels"></a>[`link-labels`](#link-labels)|Display edge labels.<br>Possible values: `false`, `true`.<br>**Example**: `link-labels = false`.|[↗]()
<a name="link-data"></a>[`link-data`](#link-data)|Series last value next to the `link-label`.<br>**Example**: `link-data =`.|[↗]()
<a name="link-color-range"></a>[`link-color-range`](#link-color-range)|Color scheme for `link-threshold`.<br>**Example**: `link-color-range =`.|[↗]()
<a name="link-label-zoom-threshold"></a>[`link-label-zoom-threshold`](#link-label-zoom-threshold)|Parameter value is a value of scale when labels appear based on edge threshold.<br>`value < 1`: Labels disappear on zoom out.<br>`value > 1`: Labels appear on zoom in.<br>**Example**: `link-label-zoom-threshold = 2`.|[↗]()
<a name="node-label-zoom-threshold"></a>[`node-label-zoom-threshold`](#node-label-zoom-threshold)|Parameter value is a value of scale when labels appear based on vertex threshold.<br>`value < 1`: Labels disappear on zoom out.<br>`value > 1`: Labels appear on zoom in.<br>**Example**: `node-label-zoom-threshold = 2`.|[↗]()
<a name="auto-padding"></a>[`auto-padding`](#auto-padding)|Add padding if labels overflow container.<br>Possible values: `true` or `false`.<br>`true` by default.<br>**Example**: `auto-padding = false`.|[↗]()
<a name="link-width-order"></a>[`link-width-order`](#link-width-order)|Sort links according to their width<br> Possible values: `top`, `bottom`, `undefined`<br>Default value: `undefined`.<br>**Example**: `link-width-order = top`.|[↗]()

## Node Settings

* The settings apply to the `[node]` section.

Name | Description | &nbsp;
:--|:--|:--
<a name="id"></a>[`id`](#id)|**Required** Unique name of the vertex.<br>**Example**: `id = HEATHROW`|[↗]()
<a name="parent"></a>[`parent`](#parent)|ID of parent vertex.<br>**Example**: `parent = LONDON`.|[↗]()
<a name="series"></a>[`series`](#series)|`alias` of time series associated with vertex.<br>**Example**: `series = AIRPORTS`.|[↗]()
<a name="alert-style"></a>[`alert-style`](#alert-style)|Vertex style upon breach of `alert-expression` condition.<br>**Example**: `alert-style = color: red`.|[↗]()
<a name="tooltip"></a>[`tooltip`](#tooltip)|Add custom string to tooltip.<br>**Example**: `tooltip = Passenger Information`.|[↗]()
<a name="label"></a>[`label`](#label)|Text on label.<br>`element-id` by default.<br>**Example**: `label = Airport Usage`|[↗]()

Use `[properties]` to specify any values divided by an equal sign. If a value contains `=` or `\` escape them with a backslash: `\=` or `\\`.

![](./images/properties-example-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/aa8a1abf)

### Link Settings

* The settings apply to the `[link]` section.

Name | Description | &nbsp;
:--|:--|:--
<a name="id"></a>[`id`](#id) |Unique edge name.<br>**Example**: `id = HEATHROW`. |[↗]()
<a name="nodes"></a>[`nodes`](#nodes) |Vertices connected by an edge.<br> ID of vertices, separated by a comma or hyphen for undirected edges, `-}` or `{-` for directed edges.<br> If vertex ID contains a hyphen, it must be shielded using `""` double quotes.<br>**Example**: `nodes = HEATHROW-MANCHESTER`. |[↗]()
<a name="series"></a>[`series`](#series)|`alias` of time series associated with the edge.<br>**Example**: `series = HEATHROW`.|[↗]()
<a name="alert-style"></a>[`alert-style`](#alert-style)|Edge style upon breach of `alert-expression` condition.<br>**Examples**: `alert-style =`. |[↗]()
<a name="tooltip"></a>[`tooltip`](#tooltip)|Add custom string to tooltip.<br>**Example**: `tooltip = Passenger Information`.|[↗]()
<a name="label"></a>[`label`](#label) |Text on label.<br>`element-id` by default.<br>**Example**: `label = Airport Usage`.|[↗]()

Use `[properties]` to specify any values divided by an equal sign. If a value contains `=` or `\` escape them with a backslash: `\=` or `\\`.

![](./images/properties-example-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/aa8a1abf)

### Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="nodes"></a>[`nodes`](#nodes)|List of vertices associated with this series.<br>When the vertex ID contains a hyphen, it must be shielded with `""` double quotes.<br>**Example**: `nodes =`.|[↗]()
<a name="links"></a>[`links`](#links)|List of edges associated with this series is defined by an ID or edge ID of the corresponding vertices with a hyphen.<br> When edge ID contains a hyphen, it must be shielded with `""` double quotes.<br>**Example**: `links =`.|[↗]()
<a name="link-alerts-style"></a>[`link-alerts-style`](#link-alerts-style)|Edge style to which a time series is bound in the event of an `alert-expression` being triggered.<br>**Example**: `link-alerts-style =`.|[↗]()
<a name="node-alert-style"></a>[`node-alert-style`](#node-alert-style)|Vertex style to which a time series is bound in the event of an `alert-expression` being triggered.<br>**Example**: `node-alert-style =`.|[↗]()

It is possible to create an expanded mouseover tooltip containing contextual information. Use `[series]` level settings. Use `[properties]` to specify any values divided by an equal sign. If a value contains `=` or `\` escape them with a backslash: `\=` or `\\`. Information is displayed in a table within the tooltip. Use the `>` context setting displayed in the tooltip before the `[properties]` tooltip table. Within the `>` context setting, create a table using standard HTML parameters: `>` table class, `tbody`, `tr`, `td`.

## Controls

* The settings apply to the `[controls]` section.

Name | Description | &nbsp;
:--|:--|:--
<a name="data"></a>[`data`](#data)|Show or hide information about the last value of a time series next to the corresponding image of the vertices.<br>By default, the information is hidden.<br>**Example**: `data =`.|[↗]()
<a name="depth"></a>[`depth`](#depth)|Set the depth of the displayed vertex hierarchy.<br>Allows a value of `1` to a maximum height of the vertex tree plus `1`, the final level corresponds to the edges.<br>By default, the depth is equal to the height of the vertex tree displayed.<br>**Example**: `depth =`.|[↗]()
<a name="width"></a>[`width`](#width)|Maximum and minimum allowed width of the vertex ring is the percent from the radius of the circle.<br>By default, minimum `30%`, maximum `50%`.<br>**Example**: `width =`.|[↗]()
<a name="tension"></a>[`tension`](#tension)|The degree of edge curvature.<br>Corresponds to the parameter `C` in the formula for the cardinal spline.<br>Varies from `0` to `1` where `0` corresponds to direct edges.<br>Default value is `0.9`.<br>**Example**: `tension = 0.1`.|[↗]()
<a name="bundle"></a>[`bundle`](#bundle)|Hierarchical contraction of edges ([Danny Holten](https://www.researchgate.net/publication/6715561_Hierarchical_Edge_Bundles_Visualization_of_Adjacency_Relations_in_Hierarchical_Data) algorithm).<br>Used by default.<br>**Example**: `bundle =`.|[↗]()
<a name="effects"></a>[`effects`](#effects)|Animation when changing the geometry of the graph.<br>Used by default.<br>**Example**: `effects =`.|[↗]()
<a name="node-collapse"></a>[`node-collapse`](#node-collapse)|Collapse sector peaks when clicked.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `node-collapse = false`.|[↗]()
<a name="link-animate"></a>[`link-animate`](#link-animate)|Animation of directed edges.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `link-animate =`.|[↗]()

## Structure

The structure of the graph is defined by the description of its vertices and edges. Use `[node]` level settings to describe each vertex, and define the hierarchy of vertices with the `parent` parameter, which sets the predecessor. Use `[link]` settings to describe the edges. Adjacent edges, with vertices, are determined by `[node]` settings.

Link series to edges or vertices by indicating the `alias` in the series parameter of `[link]` or `[node]` settings. Alternatively, list the loaded edges or vertices in the links or nodes of the `[series]` settings.

### Configuration Example 1

```ls
[widget]
height-units = 4
width-units = 4
type = graph
title = Channel_Graph
alert-expression = value > 100000
alert-style = stroke: red
bundle = false
circle = false
tension = 0

[node]
id = queue_1

[node]
id = queue_2

[node]
id = queue_3

[link]
id = channel_1
nodes = queue_1-queue_2
series = ch1

[link]
id = channel_2
nodes = queue_2->queue_3

[link]
id = channel_3
nodes = queue_1<-queue_3

[series]
entity = gr01
metric = message_count
links = channel_2

[tag]
name = channel_name
value = channel2

[series]
alias = ch1
entity = gr01
metric = message_count

[tag]
name = channel_name
value = channel1
```

![](./images/configuration-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/3c8cfe36)

## Hierarchial Mode

Activate hierarchial mode using the `mode` setting:

```ls
mode = hierarchial
```

## Alert Expression

In the event of an [`alert-expression`](../../syntax/alert-expression.md) response on the time series of the vertex or edge to which the time series is tied. Value of alert-style can be either string or script. If alert-style is script, the variable alert is available, and it is equal to the value that the alert returns. The following styles are applied (in a specified order) in the parameters below:

```ls
/* widget level settings */
[widget]
alert-style = color: red
link-alert-style = color: red
node-alert-style = color: red

/* link level settings */
[link]
alert-style = color: red

/* node level settings */
[node]
alert-style = color: red

/* series level settings */
[series]
alert-style = color: red
link-alert-style = color: red
node-alert-style = color: red
```

### Example Syntax

```ls
/* Modify stroke width of series line on alert */
link-alert-style = if (alert > 99) return 'stroke-width:3px';

/* modify color of node on alert */
node-alert-style = if (alert > 99) return 'fill:red';
```

### Configuration Example 2

```ls
[widget]
type = graph
title = Channel_Graph
alert-expression = value > 100000
node-alert-style = fill: red
link-alert-style = stroke: red
bundle = false
mode = hierarchy

[node]
id = manager_1

[node]
id = manager_2
alert-style = fill: yellow

[node]
id = manager_3

[node]
id = alpha.queue
parent = manager_1

[node]
id = beta.queue
parent = manager_1

[node]
id = lambda.queue
parent = manager_2

[node]
id = foo.queue
parent = manager_3

[link]
nodes = alpha.queue - foo.queue

[link]
nodes = lambda.queue -> foo.queue

[link]
nodes = beta.queue <- alpha.queue

[series]
entity = gr02
metric = message_count
links = lambda.queue - foo.queue
nodes = lambda.queue, manager_2

[tag]
name = channel_name
value = THE.BEST.CH

[series]
entity = gr02
metric = message_count
links = alpha.queue - foo.queue

[tag]
name = channel_name
value = ALPHA.FOO.CH

[series]
entity = gr02
metric = message_count
links = alpha.queue - beta.queue
nodes = beta.queue

[tag]
name = channel_name
value = ALPHA.BETA.CH
```

![](./images/configuration-example-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/0d5d6c04)

## Thresholds

Set thresholds for time series which are tied to vertices or edges using the `link-threshold` or `node-threshold` parameters under `[widget]` level settings.

Color and width parameters are applied to the edge and vertices based on `link-widths` and `link-colors`, additionally `node-radiuses` and `node-colors` under the `[widget]` tag.

`alert-expression` styles are superimposed over the threshold styles.

```ls
[widget]
mode = hierarchy
type = graph
title = Channel_Graph
bundle = false
data = true
depth = 3
max-ring-width = .3
link-thresholds = 1000
link-thresholds = Math.max(percentile(25), 50000)
link-thresholds = percentile(90)
link-widths = 1, 1, 2, 3
link-colors = blue, green, orange, red

[node]
id = manager_1

[node]
id = manager_2
alert-style = fill: yellow

[node]
id = manager_3

[node]
id = alpha.queue
parent = manager_1

[node]
id = beta.queue
parent = manager_1

[node]
id = lambda.queue
parent = manager_2

[node]
id = foo.queue
parent = manager_3

[link]
nodes = alpha.queue - foo.queue

[link]
nodes = lambda.queue -> foo.queue

[link]
nodes = beta.queue <- alpha.queue

[series]
entity = gr02
metric = message_count
links = lambda.queue - foo.queue

[tag]
name = channel_name
value = THE.BEST.CH

[series]
entity = gr02
metric = message_count
links = alpha.queue - foo.queue

[tag]
name = channel_name
value = ALPHA.FOO.CH

[series]
entity = gr02
metric = message_count
links = alpha.queue - beta.queue

nodes = beta.queue

[tag]
name = channel_name
value = ALPHA.BETA.CH
```

![](./images/thresholds.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/ba729a82)
