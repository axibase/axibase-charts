# Pie Chart

![](./images/pie-chart.png)

## Overview

Pie Chart illustrates numerical proportions between series values and their total value.

## Syntax

Pie Charts support [Shared Widget](../shared/README.md) syntax.

Pie Charts include unique behavior upon clicking a segment of the visualization:

* Single-Click: Opens a dialog window with a [time chart](../time-chart/README.md) for the series.
* Double-Click: Expand or collapse the selected pie segment.

> Control initial segment position with the `expand` setting.

### `[widget]` Settings

Setting|Syntax|Description|Example
--|--|--|--
|Mode|`mode = ring`|Display a ring instead of circle.<br>Possible values: `pie`, `ring`.<br>Default value: `pie`|[![](./images/button.png)](https://apps.axibase.com/chartlab/7111ece6/9/)|
|Total Value|`total-value = 1024` `total-value = value('007-root') + value('006-root')`|Define the total value explicitly, otherwise it is computed as the sum of all series values.<br>`total-value` can be calculated by referencing other series similar to computed series.|[![](./images/button.png)](https://apps.axibase.com/chartlab/7111ece6/3/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/61665be7)|
|Expand|`expand = true`|Set under either `[widget]` or `[series]` settings.<br>Expand all segments or an individual segment.<br> Possible values: `true`, `false`.<br>Double-click modifies `expand` setting interactively.|[![](./images/button.png)](https://apps.axibase.com/chartlab/e670a008/2/)|
|Selector Mode|`selector-mode = highlight`|Controls how pie segmets react to click interaction. Possible Settings: highlight, expand. Highlight – double click highlights the selected pie segment, other segments are greyed out. Expand – double click expands the selected pie segment.|[![](./images/button.png)](https://apps.axibase.com/chartlab/535a6aec)|
|Series Double Click|`on-series-double-click = ''`|Disable [double click functionality](#syntax) in the widget.|[![](./images/button.png)](https://apps.axibase.com/chartlab/89dce57d)|

### `[series]` Settings

Inherited settings from [Shared Widget Syntax](../shared/README.md): `entity`, `metric`, `style`, `color`, `label`, `tooltip`, `format`, `display`, `hidden`, `refresh-interval`, `retry-refresh-interval`, `error-refresh-interval`.

Setting|Syntax|Description|Example
--|--|--|--
|Series Labels|`series-labels = inside`<br>`series-labels = outside`<br>`series-labels = connected`<br>`series-labels = value >= 2000000 ? 'connected' : 'auto'`|Display values for each pie slice (series) as a tick.<br>Possible settings: `inside`, `outside`, `connected`, `auto`, `none`<br>Default value: `none`<br>Set to an expression that changes the label type depending on series value.|[![](./images/button.png)](https://apps.axibase.com/chartlab/9e04b681)[![](./images/button.png)](https://apps.axibase.com/chartlab/7111ece6/13/)|

### Icon and Caption Settings

Apply icons and captions to series when Pie Chart mode is set to [`ring`](#widget-settings).

Setting|Syntax|Description|Example
--|--|--|--
|Icon|`icon = public/img/svg/linear/users.svg`<br>`icon = alerts_color_07`<br>`icon = alerts-color-07`|Displays an `.svg` icon in the ring.<br>Path to your custom icons must be defined.<br>The suggested directory is  `/opt/atsd/atsd/conf/portal/img/` in your ATSD installation to hold your icons.<br>ATSD includes a built-in collection of icons.<br>Built in icons are referenced by name, without the full path. See the [Icon Reference Sheet.](resources/atsd-embedded-icons.pdf) for available icons.<br>Underscores in built-in icon names can substituted with dashes:`icon = alerts_color_07``icon = alerts-color-07`|[![](./images/button.png)](https://apps.axibase.com/chartlab/91065173/4/)[![](./images/button.png)](https://apps.axibase.com/chartlab/91065173/6/)|
|icon-alert-expression|`icon-alert-expression = value('s1') > 10`|Alert rules that are applied to the icon.|[![](./images/button.png)](https://apps.axibase.com/chartlab/41a759f9)|
|icon-alert-style|`icon-alert-style = return alert > 12000 ? 'fill: red' : 'fill:green';`|Styles that are applied to the icon when the alert expression is satisfied.|[![](./images/button.png)](https://apps.axibase.com/chartlab/41a759f9)|
|caption|`caption = Administrative Users`|Сaption displayed below the icon.|[![](./images/button.png)](https://apps.axibase.com/chartlab/56400dee)|
|caption-style|`caption-style = font-size: 64px; font-weight: bold; fill: silver;`|Style applied to the caption.|[![](./images/button.png)](https://apps.axibase.com/chartlab/56400dee/2/)|
|min-font-size|`min-font-size`|Minimum caption font size.Font size will not scale below set size.|[![](./images/button.png)](https://apps.axibase.com/chartlab/91065173/3/)|
|max-font-size|`max-font-size`|Maximum caption font size.Font size will not scale above set size.|[![](./images/button.png)](https://apps.axibase.com/chartlab/91065173/3/)|