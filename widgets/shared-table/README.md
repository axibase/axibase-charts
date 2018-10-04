# Shared Table Settings

## Overview

The **Shared Table Settings** are inherited by [Table](../streaming-table/README.md), [Property](../property-table/README.md), and [Console](../alert-console/README.md) widgets.

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="responsive"></a>[`responsive`](#responsive)| `responsive = false`| Adjust font size based on widget dimensions.<br>Possible values: `false`, `true`.<br>Default value: `true`.| [↗](https://apps.axibase.com/chartlab/c862e097)
<a name="replace-underscore"></a>[`replace-underscore`](#replace-underscore)| `replace-underscore = true`| Replace underscores with whitespace in column names.<br>Possible values: `false`, `true`.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/47565e08)
<a name="capitalize"></a>[`capitalize`](#capitalize)| `capitalize = false`| Column name capitalization.<br>Possible values: `false`, `true`.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/b04865b4)
<a name="display-tags"></a>[`display-tags`](#display-tags)| `display-tags = mount_point`| Display a separate column for each tag in the underlying series.<br>Possible values: `tag name`| [↗](https://apps.axibase.com/chartlab/220498ff)
<a name="show-tag-names"></a>[`show-tag-names`](#show-tag-names)| `show-tag-names = true`| Display entity tag names.<br>Applies to tables with a `tag` column.<br>Possible values: `false`, `true`.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/4afb9290)
<a name="sort"></a>[`sort`](#sort)| `sort = memfree ASC`| Sort the table by column or property.<br>Specify descending (`DESC`) or ascending (`ASC`) order.| [↗](https://apps.axibase.com/chartlab/4ec19a01)
<a name="column-key"></a>[`column-{key}`](#column-key)| `column-{key} = new-name`| Change the name of column `{key}`.<br>Hide `column-{key}` with `column-{key} = null`.| [↗](https://apps.axibase.com/chartlab/77a78ad8)
<a name="columns"></a>[`columns`](#columns)| `columns = command`| Add multiple column keys by key.| [↗](https://apps.axibase.com/chartlab/d7c8ed94)
<a name="class"></a>[`class`](#class)| `class = terminal`| Table class.<br>Possible settings: `terminal`. | [↗](https://apps.axibase.com/chartlab/a535ad11)
<a name="transpose"></a>[`transpose`](#transpose)| `transpose = true`| Transpose tables rows to columns, columns to rows.<br>Possible values: `false`, `true`.<br>Default: `false`.| [↗](https://apps.axibase.com/chartlab/fe7940e7)
<a name="format"></a>[`format`](#format)| `format = %H:%M:%S`| Time value format.| [↗](https://apps.axibase.com/chartlab/d9abcd33)
<a name="merge-columns"></a>[`merge-columns`](#merge-columns)| `merge-columns = entity, tags`| Group columns by key.| [↗](https://apps.axibase.com/chartlab/cd464c8e)
<a name="auto-height"></a>[`auto-height`](#auto-height)| `auto-height = true`| Assign row height based on vertical space allocated to the widget and number of rows.<br>Possible values: `false`, `true`.<br>Default: `false`| [↗](https://apps.axibase.com/chartlab/8cef1677)|
<a name="font-scale"></a>[`font-scale`](#font-scale)| `font-scale = 0.7`| Ratio of font height to row height when `auto-height = true`.<br>Minimum row height is `10px`, maximum row height is `64px`.<br>Default: `0.5`| [↗](https://apps.axibase.com/chartlab/ed4d8748)|
<a name="table-header-style"></a>[`table-header-style`](#table-header-style)| `table-header-style = font: 24 px`| Table header CSS style.<br>Hide table header with `table-header-style = display: none`| [↗](https://apps.axibase.com/chartlab/1a277cd8)|
<a name="header-style"></a>[`header-style`](#header-style)| `header-style = display: background-color: steelblue`| Widget header CSS style.<br>Hide widget header with `header-style = display: none`| [↗](https://apps.axibase.com/chartlab/343efa22)|

### Column Settings

* The settings apply to the `[column]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="key"></a>[`key`](#key)|`key = pid`|**Optional** key name.<br>Use to sort by column name.<br>If the name of the key is a property from a server object, the value of the cell is the value of the property. | [↗](https://apps.axibase.com/chartlab/79cde58f)|
<a name="tag"></a>[`tag`](#tag)|`tag = file_system``tag = mount_point`|**Optional** tag name column.<br>Needed when an object received from the server contains property tags.<br>Value of the cell by default is equal to the value of the tag.|[↗](https://apps.axibase.com/chartlab/f9ddebdb/2/)|
<a name="format"></a>[`format`](#format)|`format = kilobytes`<br>`format = ####`|Cell value [format](../../syntax/format-settings.md).|[↗](https://apps.axibase.com/chartlab/95bd95be/8/)|
<a name="label"></a>[`label`](#label)|`label = Virtual``label = Resident``label = PID`|Name of column displayed in the column titles.<br>Specify as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/8/)|
<a name="tooltip"></a>[`tooltip`](#tooltip)|`tooltip = Process CPU Usage``tooltip = Process ID`|Column description, displayed upon title mouseover.|[↗](https://apps.axibase.com/chartlab/95bd95be/9/)|
<a name="style"></a>[`style`](#style)|`style = text-align: left`<br>`style = text-align: center`<br>`style = background: orange`|Style assigned to the column.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/23/)|
<a name="row-style"></a>[`row-style`](#row-style)|`row-style = value > 1 ? 'background: orange' : null`|Style assigned to the entire row.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/24/)|
<a name="style"></a>[`style`](#style)|`style = max-width: 50%`<br>`style = max-width: 400px`|Prevent scrolling in columns containing long text strings.<br>Scroll bar appear when the column shrinks below the specified width.<br>Can be set in percent or pixels.<br>If `transpose = true`, then set `style = max-width:` in pixels.|[↗](https://apps.axibase.com/chartlab/681f535a/11/)|
<a name="row-alert-style"></a>[`row-alert-style`](#row-alert-style)|`row-alert-style = background-color: orange`|Styles assigned to the whole row.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/12/)|
<a name="display"></a>[`display`](#display)|`display = false`|Hide a column.<br>Default value is `true`.|[↗](https://apps.axibase.com/chartlab/95bd95be/13/)|
<a name="onclick"></a>[`onclick`](#onclick)|`onclick = var s = series({ metric: 'nmon.process.%cpu', disconnectInterval: '90 second' })`<br>`onclick = dialog({ series: [s], disconnectValue: 0 })`<br>`onclick = filter()`|JavaScript code click event handler for each cell.<br>Supports `method` filter, which allows you to filter the rows in the table to the value of this cell.|[↗](https://apps.axibase.com/chartlab/95bd95be/15/)|
<a name="icon"></a>[`icon`](#icon)|`icon = value > 1 ? 'exclamation-sign' : 'ok'`|Name of the icon displayed in the cell.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/25)|
<a name="position"></a>[`position`](#position)|`position = first`|Position of the column relative to other columns in the table.|[↗](https://apps.axibase.com/chartlab/d77c0677/6/)|

### Derived Value Settings

Specify `value` setting to create calculated series derived from raw series using arithmetic expressions in JavaScript syntax. The expression must return a number `null`, series with `null` values are hidden.

Name | Example | Description | &nbsp;
:--|:--|:--|:--|
<a name="value"></a>[`value`](#value)|`value = row.openTime`|Define series value.<br>Retrieve the value of the underlying series identified by alias.<br>Supported fields: `value`, `previous`, `detail`, `forecast`, `forecast_deviation`, `lower_confidence`, `upper_confidence`, [aggregator functions](../../configuration/aggregators.md).|[↗](https://apps.axibase.com/chartlab/95bd95be/7/)|

## Examples

### Column Order

Column order is determined by the order of `[column]` sections in the widget configuration.

Default widget columns have a pre-defined position, for example the `Severity` column in `Console` widget is positioned first by default.

To change the position of the default column, specify the column name explicitly in the widget configuration.

![](./images/column-order-example-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/3c57bf69)

`[column]` settings include the `position` setting to control the placement of the column regardless of the order in which `[column]` settings are defined in the widget. Possible values are `first`, `middle` and `last`.

![](./images/column-order-example-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/163a8733)