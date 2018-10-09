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
<a name="disable-alert"></a>[`disable-alert`](#disable-alert)| `disable-alert = true` | Cancel alerts raised by the loaded page.<br>Possible values: `false`, `true`.<br>Default value: `false`. | ↗
<a name="fit-svg"></a>[`fit-svg`](#fit-svg) | `fig-svg = true` | Zoom and positions a user-loaded `svg` file in the center of the widget.<br>Possible values: `false`, `true`.<br>Default value: `false`.| ↗
<a name="zoom-svg"></a>[`zoom-svg`](#zoom-svg) | `zoom-svg = 1.2` | Zoom a user-loaded `svg` file.<br>Possible values: Integer &ge; `0`.| ↗
<a name="unscale"></a>[`unscale`](#unscale) | `unscale = .event, .location` | `CSS Selector` to determine unscaled elements in a user-loaded `.svg` file.<br>Default value: `.event`| ↗
<a name="scale"></a>[`scale`](#scale) | `scale = 0.8` | Widget scale.<br>Possible values: Number > `0`.<br>Default value: `1.0`| [↗](https://apps.axibase.com/chartlab/ca155883)

## Examples

### Chart and Page Widgets

![](./images/chart-and-page-widget.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/50510901)