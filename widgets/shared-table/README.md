# Shared Table Settings

## Overview

The **Shared Table Settings** are inherited by [Table](../streaming-table/README.md), [Property](../property-table/README.md), and [Console](../alert-console/README.md) widgets.

## Widget Settings

* The settings apply to the `[widget]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="responsive"></a>[`responsive`](#responsive)| `responsive = true`| Adjust font size based on widget dimensions.<br>Font size is reduced proportionally to widget size.<br>Default: `false`.| [↗](https://apps.axibase.com/chartlab/92c61fad/2/)|
<a name="replace-underscore"></a>[`replace-underscore`](#replace-underscore)| `replace-underscore = true`| Replace underscores with whitespace in column names.<br>Default: `false`.| [↗](https://apps.axibase.com/chartlab/f9ddebdb)|
<a name="capitalize"></a>[`capitalize`](#capitalize)| `capitalize = false`| Capitalize column names. Default: `true`.| [↗](https://apps.axibase.com/chartlab/95bd95be)|
<a name="display-tags"></a>[`display-tags`](#display-tags)| `display-tags = mount_point`<br>`display-tags = file_system`<br>`display-tags = app`<br>`display-tags = alias`| Display a separate column for each tag in the underlying series. Default: `false`.| [↗](https://apps.axibase.com/chartlab/2738a3eb/2/)<br>[↗](https://apps.axibase.com/chartlab/013e6026/4/)|
<a name="show-tag-names"></a>[`show-tag-names`](#show-tag-names)| `show-tag-names = true`| Display all entity tags.<br>Only valid for tables with `tag` column.<br>Default: `false`.| [↗](https://apps.axibase.com/chartlab/013e6026/5/)|
<a name="sort"></a>[`sort`](#sort)| `sort = cpu_busy desc``sort = memfree asc`| Sort the table by column or property.<br>**Required**: Set sequence keys of the columns or names of the properties.<br>Specify `DESC` after key or property name to sort in reverse order.<br>`ASC` is used by default.<br>For example: `sort = metric, value desc`.<br>First column is sorted in alphabetical order, then a string with the same name of the metric is sorted according to value in descending order.| [↗](https://apps.axibase.com/chartlab/95bd95be/2/)|
<a name="column-entity"></a>[`column-entity`](#column-entity)| `column-entity = Entity`<br>`column-time = Timestamp`<br>`column-entity = null`<br>`column-time = null`<br>`column-metric = null`<br>`column-value = null`| Shortcut to change column name `column-{key}=new-name` or hide it `column-{key}=null`.| [↗](https://apps.axibase.com/chartlab/95bd95be/3/)|
<a name="column-time"></a>[`column-time`](#column-time)| `column-entity = Entity`<br>`column-time = Timestamp`<br>`column-entity = null`<br>`column-time = null`<br>`column-metric = null`<br>`column-value = null`| Shortcut to change column name `column-{key}=new-name` or hide it `column-{key}=null`.| [↗](https://apps.axibase.com/chartlab/95bd95be/3/)|
<a name="column-metric"></a>[`column-metric`](#column-metric)| `column-entity = Entity`<br>`column-time = Timestamp`<br>`column-entity = null`<br>`column-time = null`<br>`column-metric = null`<br>`column-value = null`| Shortcut to change column name `column-{key}=new-name` or hide it `column-{key}=null`.| [↗](https://apps.axibase.com/chartlab/95bd95be/3/)|
<a name="column-value"></a>[`column-value`](#column-value)| `column-entity = Entity`<br>`column-time = Timestamp`<br>`column-entity = null`<br>`column-time = null`<br>`column-metric = null`<br>`column-value = null`| Shortcut to change column name `column-{key}=new-name` or hide it `column-{key}=null`.| [↗](https://apps.axibase.com/chartlab/95bd95be/3/)|
<a name="columns"></a>[`columns`](#columns)| `columns = command`| Column keys to add new or rename existing columns.| [↗](https://apps.axibase.com/chartlab/95bd95be/22/)|
<a name="class"></a>[`class`](#class)| `class = terminal`| Apply Unix style with black background.<br>Possible settings: `terminal`. | [↗](https://apps.axibase.com/chartlab/95bd95be/4/)|
<a name="transpose"></a>[`transpose`](#transpose)| `transpose = true`| Transpose rows and columns for a layout optimized for columnar presentation.<br>Possible values: `true`, `false`.<br>Default: `false`.| [↗](https://apps.axibase.com/chartlab/17c9becf)|
<a name="format"></a>[`format`](#format)| `format = %H:%M:%S``format = %d/%m %H:%M:%S`| Format time values.<br>For example when using the `min_time_value` or `max_time_value` aggregators.<br> See [Format Settings](../../syntax/format-settings.md) for more information.| [↗](https://apps.axibase.com/chartlab/b0a45b83)|
<a name="merge-columns"></a>[`merge-columns`](#merge-columns)| `merge-columns = entity``merge-columns = entity, tags`| Key by which columns are grouped into rows.| [↗](https://apps.axibase.com/chartlab/6489829c/2/)|
<a name="auto-height"></a>[`auto-height`](#auto-height)| `auto-height = true`| Calculate row height automatically based on vertical space allocated to the widget and the number of rows.<br>Default: `false`| [↗](https://apps.axibase.com/chartlab/e02b8303/4/)|
<a name="font-scale"></a>[`font-scale`](#font-scale)| `font-scale = 0.7`| Ratio of font height to row height when `auto-height = true`.<br>Minimum row height is `10px`, maximum row height is `64px`.<br>Default: `0.5`| [↗](https://apps.axibase.com/chartlab/e02b8303/5/)|
<a name="table-header-style"></a>[`table-header-style`](#table-header-style)| `table-header-style = display: none`| Custom CSS style applied to table header, including a style to hide the header.| [↗](https://apps.axibase.com/chartlab/e02b8303/3/)|
<a name="header-style"></a>[`header-style`](#header-style)| `header-style = display: none`| Custom CSS style applied to widget header, including a style to hide the widget header.| [↗](https://apps.axibase.com/chartlab/e02b8303/6/)|

### Column Settings

* The settings apply to the `[column]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="key"></a>[`key`](#key)|`key = pid``key = %cpu``key = size`|**Optional** Key name.<br>If set configuration of column can be sorted by name.<br>If the name of the key is the property received from the server object, the value of the cell by default is the value of the property. | [↗](https://apps.axibase.com/chartlab/95bd95be/5/)|
<a name="tag"></a>[`tag`](#tag)|`tag = file_system``tag = mount_point`|**Optional** Name of tag to be displayed in its own column.<br>Needed when an object received from the server contains property tags.<br>Value of the cell by default is equal to the value of the tag.|[↗](https://apps.axibase.com/chartlab/f9ddebdb/2/)|
<a name="value"></a>[`value`](#value)|`value = row.openTime`|JavaScript code to determine the value of the cell.<br>By default the value of the key or tag.|[↗](https://apps.axibase.com/chartlab/95bd95be/7/)|
<a name="format"></a>[`format`](#format)|`format = kilobytes`<br>`format = ####`|Cell value [format](../../syntax/format-settings.md).|[↗](https://apps.axibase.com/chartlab/95bd95be/8/)|
<a name="label"></a>[`label`](#label)|`label = Virtual``label = Resident``label = PID`|Name of column displayed in the column titles.<br>Specify as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/8/)|
<a name="tooltip"></a>[`tooltip`](#tooltip)|`tooltip = Process CPU Usage``tooltip = Process ID`|Column description, displayed upon title mouseover.|[↗](https://apps.axibase.com/chartlab/95bd95be/9/)|
<a name="style"></a>[`style`](#style)|`style = text-align: left`<br>`style = text-align: center`<br>`style = background: orange`|Style assigned to the column.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/23/)|
<a name="row-style"></a>[`row-style`](#row-style)|`row-style = value > 1 ? 'background: orange' : null`|Style assigned to the entire row.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/24/)|
<a name="style"></a>[`style`](#style)|`style = max-width: 50%`<br>`style = max-width: 400px`|Prevent scrolling in columns containing long text strings.<br>Scroll bar appear when the column shrinks below the specified width.<br>Can be set in percent or pixels.<br>If `transpose = true`, then set `style = max-width:` in pixels.|[↗](https://apps.axibase.com/chartlab/681f535a/11/)|
<a name="alert-expression"></a>[`alert-expression`](#alert-expression)|`alert-expression = value > 5`<br>`alert-expression = value < 200000`|JavaScript code.<br> Use the returned value of the evaluation for sorting, if the column key is specified.|[↗](https://apps.axibase.com/chartlab/95bd95be/11/)|
<a name="alert-style"></a>[`alert-style`](#alert-style)|`alert-style = background-color: yellow`<br>`alert-style = background-color: orange`|Styles assigned to the cell.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/11/)|
<a name="row-alert-style"></a>[`row-alert-style`](#row-alert-style)|`row-alert-style = background-color: orange`|Styles assigned to the whole row.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/12/)|
<a name="display"></a>[`display`](#display)|`display = false`|Hide a column.<br>Default value is `true`.|[↗](https://apps.axibase.com/chartlab/95bd95be/13/)|
<a name="onclick"></a>[`onclick`](#onclick)|`onclick = var s = series({ metric: 'nmon.process.%cpu', disconnectInterval: '90 second' })`<br>`onclick = dialog({ series: [s], disconnectValue: 0 })`<br>`onclick = filter()`|JavaScript code click event handler for each cell.<br>Supports `method` filter, which allows you to filter the rows in the table to the value of this cell.|[↗](https://apps.axibase.com/chartlab/95bd95be/15/)|
<a name="icon"></a>[`icon`](#icon)|`icon = value > 1 ? 'exclamation-sign' : 'ok'`|Name of the icon displayed in the cell.<br>Can be specified as JavaScript code.|[↗](https://apps.axibase.com/chartlab/95bd95be/25)|
<a name="position"></a>[`position`](#position)|`position = first`|Position of the column relative to other columns in the table.|[↗](https://apps.axibase.com/chartlab/d77c0677/6/)|

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