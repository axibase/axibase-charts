# Gauge Chart

![](./images/multiple-gauges.png)

Gauge Chart displays last series value on a gauge with colored threshold ranges. If the gauge widget contains multiple series, it displays the sum of the series values.

## Syntax

Gauge Charts support [Shared Widget](../shared/README.md) syntax.

### `[widget]` Settings

|Setting |Syntax |Description |Example |
|--- |--- |--- |--- |
|Mode|`mode = sleek`|Gauge layout mode.<br>Possible values: `sleek`, `half`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/24/)[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/25/)[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/26/)|
|Thresholds|`thresholds = 0, 50, 90, 100`|Comma-separated threshold values or expressions to split the gauge axis into multiple ranges.<br>Each range is assigned a color with the `colors` or `color-range` setting. |[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/24/)[![](./images/button.png)](https://apps.axibase.com/chartlab/a1c1aec3)|
|Colors|`colors = green, yellow, red`|Determines colors of threshold ranges.<br>The number of colors must be equal to the number of thresholds minus `1`: `50` (green), `50-90` (yellow), `90-100` (red).|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/24/)|
|Color Range|`color-range = black`|Color palette automatically assigned to threshold ranges.<br>Possible values: `blue`, `red`, `black`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/27/)|
|Gradient Intensity|`gradient-intensity = -25% / 75%`|Color intensity of the first and the last sector in each range.<br>Possible values: `-.2`/`.7` (or `-20%`/`70%`).|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/10/)|
|Gradient Count|`gradient-count = 5, 2, 1`|Number of gradients in each range. |[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/34/)|
|Caption|`caption = KPI`|Text displayed on top of the gauge.<br> Caption can be split into multiple lines.<br>HTML markup is supported.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/25/)|
|Caption Style|`caption-style = color: silver`|CSS style applied to caption.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/28/)|
|Ticks|`ticks = 4`|Number of major ticks on gauge axis.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/11/)|
|Minor Ticks|`minor-ticks = 4`|Number of minor ticks between major ticks.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/12/)|
|Display Ticks|`display-ticks = true`|Display ticks on the axis.<br>`true` by default.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/33/)|
|Counter Position|`counter-position = none`|Counter position.<br>Possible values: `top`, `bottom`, `none`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/31/)|
|Display Tip|`display-tip = true`|Display last value marker.<br>Possible values: `true`, `false`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/30/)|
|Format Tip|`format-tip = d3.format("0.1f")``format-tip = kilobytes`|Last value format.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/29/)|
|Format Axis|`format-axis = Math.round(value * 10)/10 + "%"`|Value axis format.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/29/)|
|Format Counter|`format-counter = d3.format("0.3f")`|Counter format.|[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/29/)|
|Ring Width|`ring-width = 0.2`|Width of the colored ring area, measured as `%` of radius.<br>Possible values are between `0` and `1`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/3134e9d6)|
|Border Width|`border-width = 0.3`|Offset between gauge ring and parent container,measured as `%` of radius.<br>Possible values are between `0` and `1`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/3134e9d6/2)|
|Pin Radius|`pin-radius = 0.2`|Radius of the inner circle holding the arrow, measured as `%` of radius.<br>Possible values are between `0` and `1`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/ea2d99cf)|
|Arrow Length|`arrow-length = 0.3`|Length of the gauge arrow, measured as `%` of radius.<br>Possible values are between `0` and `1`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/ea2d99cf/2/)|

## Examples

### Default Style

![](./images/default-style.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/2/)

### Range

![](./images/range.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/35/)

### Sleek

[![](./images/sleek.png)](https://apps.axibase.com/chartlab/01288425/3/)

### Half Style

![](./images/half-style.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/20/)

### Advanced Sum

![](./images/gauge-chart.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/01288425/6/)