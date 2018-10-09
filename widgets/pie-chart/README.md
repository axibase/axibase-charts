# Pie Chart

## Overview

The **Pie Chart** illustrates numerical proportions between series and total values.

```ls
[widget]
  type = pie

  [series]
    entity = nurswgvml0*
    metric = cpu_busy
```

![](./images/pie-title-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/beb22419)

## Widget Settings

<!-- markdownlint-disable MD102 -->

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.
* The **Pie Chart** includes unique behavior upon clicking a segment of the visualization:
  * Single Click: Opens a dialog window with a [**Time Chart**](../time-chart/README.md) for the series.
  * Double Click: Controlled by `selector-mode`, `on-series-double-click`, and `expand` setting. Default behavior is `expand` upon double click.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="mode"></a>[`mode`](#mode)|`mode = ring`|Chart mode.<br>Possible values: `pie`, `ring`.<br>Default value: `pie`.|[↗](https://apps.axibase.com/chartlab/7217e679)
<a name="on-series-double-click"></a>[`on-series-double-click`](#on-series-double-click)|`on-series-double-click = ''`|Disable [double click functionality](#widget-settings) in the widget.|[↗](https://apps.axibase.com/chartlab/b18445b6)
<a name="selector-mode"></a>[`selector-mode`](#selector-mode)|`selector-mode = highlight`|Control how series segments react to click interaction.<br>Possible values: `highlight` - Highlights the selected series segment. `expand` - Expands the selected series segment.|[↗](https://apps.axibase.com/chartlab/2cfa5cbe)
<a name="total-value"></a>[`total-value`](#total-value)|`total-value = 1024`|Specify total value.<br> If no `total-value` setting is specified, total widget value is the sum of all series values.<br>Possible values: Number, `series('alias')`.|[↗](https://apps.axibase.com/chartlab/94599517)

<!-- markdownlint-enable MD102 -->

### Icon and Caption Settings

* Apply icons and captions to the **Pie Chart** when `mode = ring`.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="icon"></a>[`icon`](#icon)|`icon = public/img/svg/linear/user.svg`|Display `.svg` icon in **Pie Chart** ring.<br>Path to custom icons must be defined.<br>Default ATSD icon directory is `/opt/atsd/atsd/conf/portal/img/`.<br>Reference built-in icons by name, without directory path.<br>See the [Icon Reference Sheet](resources/atsd-embedded-icons.pdf) for built-in icons.|[↗](https://apps.axibase.com/chartlab/e4f2226b)
<a name="icon-alert-expression"></a>[`icon-alert-expression`](#icon-alert-expression)|`icon-alert-expression = value('s1') > value('s2')`|Boolean expression to apply conditional CSS style to series icons.<br>CSS style must be specified in the `icon-alert-style` setting.<br>The `value` field refers to the series value.|[↗](https://apps.axibase.com/chartlab/1d0b1053)
<a name="icon-alert-style"></a>[`icon-alert-style`](#icon-alert-style)|`icon-alert-style = return alert > 12000 ? 'fill: red' : 'fill:green';`|CSS style applied to the series shape if `icon-alert-expression` returns `true`.|[↗](https://apps.axibase.com/chartlab/4a07864a)
<a name="caption"></a>[`caption`](#caption)|`caption = Administrative Users`|Icon caption.<br>Caption is updated upon series double click.|[↗](https://apps.axibase.com/chartlab/a31585b7)
<a name="caption-style"></a>[`caption-style`](#caption-style)|`caption-style = font-size: 64px; font-weight: bold; fill: steelblue;`|Caption CSS style.<br>Caption style is updated upon series double click.|[↗](https://apps.axibase.com/chartlab/ecbac33b)
<a name="min-font-size"></a>[`min-font-size`](#min-font-size)|`min-font-size = 24`|Minimum caption font size.<br>Font size does not scale below specified size.|[↗](https://apps.axibase.com/chartlab/7704bb89)
<a name="max-font-size"></a>[`max-font-size`](#max-font-size)|`max-font-size = 8`|Maximum caption font size.<br>Font size does not scale above specified size.|[↗](https://apps.axibase.com/chartlab/7704bb89)

## Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="expand"></a>[`expand`](#expand)|`expand = true`|Expand series segment.<br>Expand all series segments when setting specified in the `[series]` section.<br>Possible value: `false`, `true`.<br>Default value: `false`.|[↗](https://apps.axibase.com/chartlab/f5684bc4)|
<a name="series-labels"></a>[`series-labels`](#series-labels)|`series-labels = inside`|Value label location.<br>Set as an [expression](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax) which changes the label type based on series value.<br>Possible settings: `inside`, `outside`, `connected`, `auto`, `none`.<br>Default value: `none`.|[↗](https://apps.axibase.com/chartlab/75107b6b)|

### Other Settings

* The settings apply to the `[other]` section.
* Specifying the `[other]` section creates an addition segment not associated with any series which displays a value or spare capacity.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
|<a name="display"></a>[`display`](#display)|`display = false`|Display the difference between `total-value` and sum of visible series values.<br>Possible values: `false`, `true`.<br>Default: `true`.|[↗](https://apps.axibase.com/chartlab/03201f9e)|
<a name="label"></a>[`label`](#label)|`label = Unmonitored Memory`|`[other]` section label.<br>Default: `Other`.|[↗](https://apps.axibase.com/chartlab/064091fa)|
<a name="tooltip"></a>[`tooltip`](#tooltip)|`tooltip = Unmonitored memory (HMC disabled)`|`[other]` section tooltip displayed upon mouseover.<br>Default: `Other`.|[↗](https://apps.axibase.com/chartlab/03be3f7d)|
<a name="color"></a>[`color`](#color)|`color = black`|`[other]` section color.<br>Default: `lightgray`.|[↗](https://apps.axibase.com/chartlab/db9f4d31)|

## Examples

### Ring Icons and Captions

![](./images/ring-icons-and-captions.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/e31d60be)

### Series Labels Expression

![](./images/series-labels-expression.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/7f7a1bc3)

### Alert

![](./images/alert-expression-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/f1cd6467)

### `total-value` Setting and `[other]` Section

![](./images/total-and-other-example.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/db7dd568)

### Hidden `[other]` Section

![](./images/hidden-other-section.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/f0e7d218)