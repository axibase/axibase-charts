# Text Widget

![](./images/text-widget-6.png)

## Syntax

Text Widgets support [Shared Widget](../shared/README.md) syntax.

### `[widget]` Settings

Setting|Syntax|Description|Example
--|--|--|--
|Circle|`circle = true`|Displays background circle.<br>Default value: `false`|[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/9/)|
|Minimum Font Size|`min-font-size = 10`|Minimum font size for labels, in pixels.|[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/10/)|
|Maximum Font Size|`max-font-size = 14`|Maximum font size for labels, in pixels.|[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/10/)|
|Series Click|`on-series-click = callDialog({ type: 'page', url: 'https://axibase.com/' })`|Change the type of widget that opens in a dialog window when the value is clicked.<br>Default value: `time chart`|[![](./images/button.png)](https://apps.axibase.com/chartlab/5ab66ecf/13/)|
|Icon Size|`icon-size = auto`|Automatically resize icons to occupy all available space except the area used by the value and label.<br>If `icon-size` is not set, icon is scaled proportionally to the font height which can be controlled using the `min-font-size` and `max-font-size` settings.|[![](./images/button.png)](https://apps.axibase.com/chartlab/ed1f7adf/2/)|

### `[series]` Settings

Inherited settings from [Shared Widget](../shared/README.md)): `entity`, `metric`, `alert-expression`, `alert-style`, `style`, `color`, `label`, `tooltip`, `format`, `refresh-interval`, `retry-refresh-interval`, `error-refresh-interval`.

Setting|Syntax|Description|Example
--|--|--|--
|label|`label = Memory Free`<br>`label = Axibase`|Caption displayed below the number.Multiple lines and HTML markup are supported.<br>If the label is not defined, entity and metric names are displayed below the value.<br>To hide the label and display only the series value, add the `label =` setting with an empty value.<br>Labels can be set as a link to an external page using HTML.<br>Use the browser history buttons to go back to the previous page if you opened a URL on the same page.|[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/11/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/5ab66ecf/13/)|
|Icon|`icon = public/img/svg/linear/users.svg`<br>`icon = alerts_color_01``icon = alerts-color-01`|Add an `svg` icon.Built-in icons can be referenced by name.<br>View built-in [Icon Reference Sheet](../pie-chart/resources/atsd-embedded-icons.pdf).<br>Substitute underscores (`_`) in built-in icon names with dashes(`-`):<br>`icon = alerts_color_07`<br>`icon = alerts-color-07`. Place custom icons in the `/opt/atsd/atsd/conf/portal/svg` directory and refer to them with the `/portal/resource/svg/image` `.svg` path.<br>Custom icons in Axibase Server must be store in `./AxibaseServer/config/workspace/svg` and referenced with `/workspace/svg/image` `.svg` path.|[![](./images/button.png)](https://apps.axibase.com/chartlab/f95d6995)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/f95d6995/6/)|
|Icon Position|`icon-position = bottom`|Position of the icon relative to the series value.<br>Possible settings: `left`, `right`, `bottom`, `top`|[![](./images/button.png)](https://apps.axibase.com/chartlab/f95d6995/2/)|
|Icon Color|`icon-color = orange`|Color of the icon.|[![](./images/button.png)](https://apps.axibase.com/chartlab/f95d6995/3/)|
|Icon Alert Style|`icon-alert-style = fill: red;`|Alert styles applied to the icon when the `alert-expression` is satisfied.|[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/21/)|

## Examples

### Multiple Series

![](./images/text-widget-3.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/4/)

### Clock and Series

![](./images/text-clock-widget.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/14/)

### Alert

![](./images/text-widget-1.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/7e91b333/2/)

### Conditional Icons

![](./images/text-widget-5.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/958bc64b/2/)

### Icon Alert

![](./images/text-widget-6.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/56623934/3/)