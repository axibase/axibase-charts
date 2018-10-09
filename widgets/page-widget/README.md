# Page Widget

## Overview

The **Page Widget** displays the contents of an external page in a **ChartLab** portal.

```ls
[widget]
  type = page
  url = https://apps.axibase.com/embedded/
```

![](./images/page-widget-title.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/6f15eb1a)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="disable-alert"></a>[`disable-alert`](#disable-alert)| `disable-alert = true` | Disable broweser alerts raised by the loaded page.<br>Possible values: `false`, `true`.<br>Default value: `false`. | [↗](https://apps.axibase.com/chartlab/8af88aaa)
<a name="scale"></a>[`scale`](#scale) | `scale = 0.8` | Widget scale.<br>Possible values: Number > `0`.<br>Default value: `1.0`| [↗](https://apps.axibase.com/chartlab/ca155883)

## Examples

### Chart and Page Widgets

![](./images/chart-and-page-widget.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/50510901)