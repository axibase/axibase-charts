# Page Widget

![](../images/page-widget.png)

## Syntax

### `[widget]` Settings

Setting | Syntax | Description
--|--|--
Alert Disable | `disable-alert = true` | Cancel alerts raised by the loaded page.<br>Default value: `false`.
Fit `svg` | `fig-svg = true` | Zooms and positions a user-loaded `svg` file in the center of the widget.<br>Default value: `false`.
Zoom `svg` | `zoom-svg = 1.2` | Zoom the user-loaded `svg` file.<br>Possible values: `0` to any positive integer.
Unscale | `unscale = .event, .location` | `CSS Selector` to determine unscaled elements in a user-loaded `svg` file.<br>Default value: `.event`
Scale | `scale = 0.8` | Scales the width and height of the target page.<br>Value is the factor by which the page scales.

## Examples

### Chart and Page Widgets

![](./images/page-widget.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/265f06eb)