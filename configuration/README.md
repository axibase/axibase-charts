# Configuration

## Overview

Configuration settings specify the layout of widgets.

## Configuration Settings

* The settings apply to the `[configuration]` section.

### General Settings

Name | Description | &nbsp;
:--|:--|:--
<a name="dialog-maximize"></a>[`dialog-maximize`](#dialog-maximize)|  Expand dialog window to the entire page.<br>Open dialog window by clicking the widget header.<br>Possible values: `false`, `true`.<br>Default: `true`.<br>**Example**: `dialog-maximize = true`|  [↗](https://apps.axibase.com/chartlab/3b936aa0)
<a name="scale"></a>[`scale`](#scale)| Chart scale.<br>Value must exceed `0.0`.<br>Default value: `1.0`.<br>**Example**: `scale = 0.8`| [↗](https://apps.axibase.com/chartlab/2d8b7baf)
<a name="import"></a>[`import`](#import) | Import a [user-defined function](../syntax/udf.md#function-libraries) library.<br>Specify library name for use within application before the equal sign.<br>**Example**: `import fred = fred.js` | [↗](https://apps.axibase.com/chartlab/19c955c0)

### Layout Settings

Name | Description | &nbsp;
:--|:--|:--
<a name="height-units"></a>[`height-units`](#height-units) | The number of rows in the portal.<br>Default value: `4`.<br>**Example**: `height-units = 2`|[↗](https://apps.axibase.com/chartlab/1b677aa7/2/)
<a name="width-units"></a>[`width-units`](#width-units)|The number of columns in the portal.<br>Default value: `6`.<br>**Example**: `width-units = 2`|[↗](https://apps.axibase.com/chartlab/1b677aa7/2/)
<a name="offset-left"></a>[`offset-left`](#offset-left)| Offset from the left page border, in _pixels_.<br>Default value: `0`.<br>**Example**: `offset-left = 50`| [↗](https://apps.axibase.com/chartlab/66ed9482)
<a name="offset-right"></a>[`offset-right`](#offset-right) | Offset from the right page border, in _pixels_.<br>Default value: `0`.<br>**Example**: `offset-right = 50`| [↗](https://apps.axibase.com/chartlab/05ab6fe4)
<a name="offset-top"></a>[`offset-top`](#offset-top)| Offset from the top page border, in _pixels_.<br>Default value: `0`.<br>**Example**: `offset-top = 50`| [↗](https://apps.axibase.com/chartlab/0270fd12)
<a name="offset-bottom"></a>[`offset-bottom`](#offset-bottom)| Offset from the bottom page border, in _pixels_.<br>Default value: `0`.<br>**Example**:  `offset-bottom = 50`| [↗](https://apps.axibase.com/chartlab/a671b469)
<a name="widgets-per-row"></a>[`widgets-per-row`](#widgets-per-row)  | Maximum number of widgets per `[group]` row.<br> Additional widgets are placed in a new row.<br>**Example**: `widgets-per-row = 2`|  [↗](https://apps.axibase.com/chartlab/528ea252) |
