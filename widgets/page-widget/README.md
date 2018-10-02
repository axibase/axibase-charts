# Page Widget

## Overview

The **Page Widget** displays the contents of an external page in a ChartLab portal.

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
<a name="disable-alert"></a>[`disable-alert`](#disable-alert)| `disable-alert = true` | Cancel alerts raised by the loaded page.<br>Default value: `false`. | ↗
<a name="fit-svg"></a>[`fit-svg`](#fit-svg) | `fig-svg = true` | Zooms and positions a user-loaded `svg` file in the center of the widget.<br>Default value: `false`.| ↗
<a name="zoom-svg"></a>[`zoom-svg`](#zoom-svg) | `zoom-svg = 1.2` | Zoom the user-loaded `svg` file.<br>Possible values: `0` to any positive integer.| ↗
<a name="unscale"></a>[`scale`](#unscale) | `unscale = .event, .location` | `CSS Selector` to determine unscaled elements in a user-loaded `svg` file.<br>Default value: `.event`| ↗
<a name="scale"></a>[`scale`](#scale) | `scale = 0.8` | Scales the width and height of the target page.<br>Value is the factor by which the page scales.| ↗

## Examples

### Chart and Page Widgets

![](./images/chart-and-page-widget.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/50510901)