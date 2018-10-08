# Treemap Widget

## Overview

The **Treemap Widget** displays each series as a colored rectangle according to the magnitude of series value deviation from the threshold.

```ls
[widget]
  type = treemap
  entity = nurswgvml007

  [series]
    metric = cpu_busy
  [series]
    metric = memfree
```

![](./images/treemap-widget-title.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/a48c397d)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="mode"></a>[`mode`](#mode) |`mode = row` |Widget layout.<br>Possible values: `row` - Align rectangles as rows. `column` - Align rectangles as columns. `auto` - Switch between row and column modes depending on widget size. |[↗](https://apps.axibase.com/chartlab/e90ff080)
<a name="display-total"></a>[`display-total`](#display-total) |`display-total = false` |Display the sum of rectangle sizes in widget header.<br>Possible values: `false`, `true`.<br>Default value: `true`. |[↗](https://apps.axibase.com/chartlab/833f4bfc)
<a name="size-name"></a>[`size-name`](#size-name) |`size-name = Value` |Secondary title when `display-total = true`.<br>`size-name` value appended to default title `Total`. |[↗](https://apps.axibase.com/chartlab/bbe3b8bf)
<a name="format-size"></a>[`format-size`](#format-size) |`format-size = kilobytes` |`Total` value format.<br>Refer to [Format Settings](../../syntax/format-settings.md) for possible values. |[↗](https://apps.axibase.com/chartlab/e0b5c414) |
<a name="font-size"></a>[`font-size`](#font-size) |`font-size = 15` |Widget font size.<br>All text, except widget header is affected.<br>Default value: `10`. |[↗](https://apps.axibase.com/chartlab/268cbe21)
<a name="colors"></a>[`colors`](#colors) | `colors = green, yellow, red` | Threshold range colors.<br>The number of [`thresholds`](#thresholds) must be `1` greater than the number of colors.<br>If there are more colors than threshold ranges, additional colors are assigned to the lowest threshold range first.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors).| [↗](https://apps.axibase.com/chartlab/c6effa9d)
<a name="color-range"></a>[`color-range`](#color-range) |`color-range = blue` |Widget color range.<br>Possible values: [color names](https://en.wikipedia.org/wiki/Web_colors).<br>Built-in ranges: `red`, `blue`, `black`. <br>Default value: `red`. |[↗](https://apps.axibase.com/chartlab/c121b493)
<a name="gradient-count"></a>[`gradient-count`](#gradient-count) |`gradient-count = 2` |Gradients in each color range. |[↗](https://apps.axibase.com/chartlab/66489085)
<a name="total-size"></a>[`total-size`](#total-size) |`total-size = 70` |Maximum size of all rectangles combined.<br>If `total-size` is greater than combined size of all rectangles, additional space is filled `white`.|[↗](https://apps.axibase.com/chartlab/14253ec2)
<a name="palette-ticks"></a>[`palette-ticks`](#palette-ticks) | `palette-ticks = true` | Show legend palette ticks.<br>[`thresholds`](#thresholds) setting must be specified.<br>Possible values: `false`, `true`.<br>Default Value: `false`. | [↗](https://apps.axibase.com/chartlab/8d8fc6c8)
<a name="rotate-palette-ticks"></a>[`rotate-palette-ticks`](#rotate-palette-ticks) | `rotate-palette-ticks = true` | Rotate legend palette ticks.<br>Possible values: `false` (horizontal), `true` (vertical).<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/268583f1)
<a name="range-merge"></a>[`range-merge`](#range-merge) | `range-merge = true` | Compute a single range for all series with minimum and maximum from all loaded series.<br>Possible values: `false`, `true`.<br>Default value: `false`. | [↗](https://apps.axibase.com/chartlab/ed732cda)

## Series Settings

* The settings apply to the `[series]` section.
* [Shared](../shared/README.md#series-settings) `[series]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="size"></a>[`size`](#size)|`size = 3`<br>`size = value`|Relative rectangle size.<br>Possible values: Number, `value`, `value('alias')`.<br>Default value: `1`.|[↗](https://apps.axibase.com/chartlab/76515697)
<a name="thresholds"></a>[`thresholds`](#thresholds) | `thresholds = 0, 25, 50, 75, 100` | Threshold values.<br>The number of specified [`colors`](#colors) must be `1` fewer than the number of thresholds.| [↗](https://apps.axibase.com/chartlab/c6effa9d)
<a name="label"></a>[`label`](#label) | `label = Total Capacity`| Rectangle label.<br>Set empty `label =` setting to hide label.<br>Default value: `entity-metric`. |[↗](https://apps.axibase.com/chartlab/1d1ec7aa)

### Other Settings

* The settings apply to the `[other]` section.
* Specifying the `[other]` section creates an additional rectangle not associated with any series which displays a value or spare capacity.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="size"></a>[`size`](#size)|`size = 3`<br>`size = value`|Relative rectangle size.<br>Possible values: Number, `value`, `value('alias')`.<br>Default value: `1`.|[↗](https://apps.axibase.com/chartlab/8704fff2)
<a name="label"></a>[`label`](#label) | `label = Total Capacity`| Rectangle label.|[↗](https://apps.axibase.com/chartlab/97baa0e8)
<a name="color"></a>[`color`](#color) | `color = black`| `[other]` section color.<br>Default value: `grey`.|[↗](https://apps.axibase.com/chartlab/976b6fc3)

### Properties Settings

* The settings apply to the `[properties]` section.
* In `[series]` or `[other]` section, define properties displayed on mouseover.
* If a value contains `=` or `\`, escape the characters, for example `\=` or `\\`, respectively.

```ls
[properties]
  Data Center = Cuperito
  Site = California
  Function = SAP DB
```

![](./images/series-tooltip.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/b686fb79)

## Examples

### Manual Thresholds

![](./images/manual-thresholds.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/9adaf9a0)

### Advanced Configuration Example

![](./images/thresholds-sizes.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/3bedad3f)