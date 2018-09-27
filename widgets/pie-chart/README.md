# Pie Chart

## Overview

The **Pie Chart** illustrates numerical proportions between series and total values.

```ls
[widget]
  title = Pie Chart
  type = pie

  [series]
    entity = nurswgvml0*
    metric = cpu_busy
```

![](./images/pie-title-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/28362f9b)

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
<a name="selector-mode"></a>[`selector-mode`](#selector-mode)|`selector-mode = highlight`|Control how series segments react to click interaction.<br>Possible values: `highlight`: Highlights the selected series segment. `expand`: Expands the selected series segment.|[↗](https://apps.axibase.com/chartlab/099862db)
<a name="total-value"></a>[`total-value`](#total-value)|`total-value = 1024`|Specify total value.<br> If no `total-value` setting is specified, total widget value is the sum of all series values.<br>Possible values: Number, `series('alias')`.|[↗](https://apps.axibase.com/chartlab/64587dc6)

<!-- markdownlint-enable MD102 -->

### Icon and Caption Settings

* Apply icons and captions to the **Pie Chart** when `mode = ring`.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="icon"></a>[`icon`](#icon)|`icon = public/img/svg/linear/user.svg`|Display `.svg` icon in **Pie Chart** ring.<br>Path to custom icons must be defined.<br>Default ATSD icon directory is `/opt/atsd/atsd/conf/portal/img/`.<br>Reference built-in icons by name, without directory path.<br>See the [Icon Reference Sheet](resources/atsd-embedded-icons.pdf) for built-in icons.|[↗](https://apps.axibase.com/chartlab/4004a14e)
<a name="icon-alert-expression"></a>[`icon-alert-expression`](#icon-alert-expression)|`icon-alert-expression = value('s1') > value('s2')`|Boolean expression to apply conditional CSS style to series icons.<br>The CSS style must be specified in the `icon-alert-style` setting.<br>The `value` field refers to the series value.|[↗](https://apps.axibase.com/chartlab/f534ac48)
<a name="icon-alert-style"></a>[`icon-alert-style`](#icon-alert-style)|`icon-alert-style = return alert > 12000 ? 'fill: red' : 'fill:green';`|CSS style applied to the series shape if `icon-alert-expression` returns `true`.|[↗](https://apps.axibase.com/chartlab/f534ac48)
<a name="caption"></a>[`caption`](#caption)|`caption = Administrative Users`|Display a caption below the icon.<br>Caption is updated upon series double click.|[↗](https://apps.axibase.com/chartlab/9261f982)
<a name="caption-style"></a>[`caption-style`](#caption-style)|`caption-style = font-size: 64px; font-weight: bold; fill: steelblue;`|Apply CSS style to the caption.<br>Caption style is updated upon series double click.|[↗](https://apps.axibase.com/chartlab/9145cc0f)
<a name="min-font-size"></a>[`min-font-size`](#min-font-size)|`min-font-size = 24`|Minimum caption font size.<br>Font size cannot scale below specified size.|[↗](https://apps.axibase.com/chartlab/30d94fc5)
<a name="max-font-size"></a>[`max-font-size`](#max-font-size)|`max-font-size = 8`|Maximum caption font size.<br>Font size cannot scale above specified size.|[↗](https://apps.axibase.com/chartlab/30d94fc5)

## Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="expand"></a>[`expand`](#expand)|`expand = true`|Expand series segment when `true`.<br>Expand all series segments when setting specified in the `[series]` section.<br>Boolean expression.<br>Default value: `false`.|[↗](https://apps.axibase.com/chartlab/f5684bc4)|
<a name="series-labels"></a>[`series-labels`](#series-labels)|`series-labels = inside`|Display value labels for each series segment.<br>Set as an [expression](https://axibase.com/docs/atsd/administration/metric-persistence-filter.html#expression-syntax) which changes the label type based on series value.<br>Possible settings: `inside`, `outside`, `connected`, `auto`, `none`.<br>Default value: `none`.|[↗](https://apps.axibase.com/chartlab/e644f68f)|

### Other Settings

* The settings apply to the `[other]` section.
* Specifying the `[other]` section creates an addition segment not associated with any series which displays a value or spare capacity.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
|<a name="display"></a>[`display`](#display)|`display = false`|Display the difference between `total-value` and `sum` of visible series values.<br>If `total-value` is defined, but `[other]` tag is not, `[other]` section is not displayed.<br>Boolean expression.<br>Default: `true`.|[↗](https://apps.axibase.com/chartlab/03201f9e)|
<a name="label"></a>[`label`](#label)|`label = Unmonitored Memory`|Label of the `[other]` section.<br>Default: `Other`.|[↗](https://apps.axibase.com/chartlab/064091fa)|
<a name="tooltip"></a>[`tooltip`](#tooltip)|`tooltip = Unmonitored memory (HMC disabled)`|Tooltip for the `[other]` section displayed upon mouseover.<br>Default: `Other`.|[↗](https://apps.axibase.com/chartlab/03be3f7d)|
<a name="color"></a>[`color`](#color)|`color = black`|Color of the `[other]` section.<br>Default: `lightgray`.|[↗](https://apps.axibase.com/chartlab/db9f4d31)|

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

[![](../../images/button.png)](https://apps.axibase.com/chartlab/051e6dcf)

### Hidden `[other]` Section

![](./images/hidden-other-section.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/fe53362c)