# Shared Table Syntax

![](./images/property-widget-2.png)

## Overview

The generic table setting are inherited by Table, Property, and Console widgets.

## Syntax

### `[widget]` Settings

|Setting |Syntax |Description |Example |
|--- |--- |--- |--- |
| Responsive| `responsive = true`| Adjust font size based on widget dimensions.<br>Font size is reduced proportionally to widget size.<br>Default: `false`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/92c61fad/2/)|
| Replace Underscore| `replace-underscore = true`| Replace underscores with whitespace in column names.<br>Default: `false`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/f9ddebdb)|
| Capitalize| `capitalize = false`| Capitalize column names. Default: `true`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be)|
| Display Tags| `display-tags = mount_point`<br>`display-tags = file_system`<br>`display-tags = app`<br>`display-tags = alias`| Display a separate column for each tag in the underlying series. Default: `false`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/2738a3eb/2/)<br>[![](./images/button.png)](https://apps.axibase.com/chartlab/013e6026/4/)|
| Show Tag Names| `show-tag-names = true`| Display all entity tags.<br>Only valid for tables with `tag` column.<br>Default: `false`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/013e6026/5/)|
| Sort| `sort = cpu_busy desc`<br>`sort = memfree asc`| Sort the table by column or property.<br>**Required**: Set sequence keys of the columns or names of the properties.<br>Specify `DESC` after key or property name to sort in reverse order.<br>`ASC` is used by default.<br>For example: `sort = metric, value desc`.<br>First column is sorted in alphabetical order, then a string with the same name of the metric is sorted according to value in descending order.| [![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/2/)|
| Column Key| `column-entity = Entity`<br>`column-time = Timestamp`<br>`column-entity = null`<br>`column-time = null`<br>`column-metric = null`<br>`column-value = null`| Shortcut to change column name `column-{key}=new-name` or hide it `column-{key}=null`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/3/)|
| Columns| `columns = command`| Column keys to add new or rename existing columns.| [![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/22/)|
| Class| `class = terminal`| Apply Unix style with black background.<br>Possible settings: `terminal`. | [![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/4/)|
| Transpose| `transpose = true`| Transpose rows and columns for a layout optimized for columnar presentation.<br>Possible values: `true`, `false`.<br>Default: `false`.| [![](./images/button.png)](https://apps.axibase.com/chartlab/17c9becf)|
| Format| `format = %H:%M:%S`<br>`format = %d/%m %H:%M:%S`| Format time values.<br>For example when using the `min_time_value` or `max_time_value` aggregators.<br> See [Format Settings](../../syntax/format-settings.md) for more information.| [![](./images/button.png)](https://apps.axibase.com/chartlab/b0a45b83)|
| Merge Columns| `merge-columns = entity`<br>`merge-columns = entity, tags`| Key by which columns are grouped into rows.| [![](./images/button.png)](https://apps.axibase.com/chartlab/6489829c/2/)|
| Auto Height| `auto-height = true`| Calculate row height automatically based on vertical space allocated to the widget and the number of rows.<br>Default: `false`| [![](./images/button.png)](https://apps.axibase.com/chartlab/e02b8303/4/)|
| font-scale| `font-scale = 0.7`| Ratio of font height to row height when `auto-height = true`.<br>Minimum row height is `10px`, maximum row height is `64px`.<br>Default: `0.5`| [![](./images/button.png)](https://apps.axibase.com/chartlab/e02b8303/5/)|
| Table Header Style| `table-header-style = display: none`| Custom CSS style applied to table header, including a style to hide the header.| [![](./images/button.png)](https://apps.axibase.com/chartlab/e02b8303/3/)|
| Widget Header Style| `header-style = display: none`| Custom CSS style applied to widget header, including a style to hide the widget header.| [![](./images/button.png)](https://apps.axibase.com/chartlab/e02b8303/6/)|

### `[column]` Settings

|Setting |Syntax |Description |Example |
|--- |--- |--- |--- |
|Key|`key = pid`<br>`key = %cpu`<br>`key = size`|**Optional** Key name.<br>If set configuration of column can be sorted by name.<br>If the name of the key is the property received from the server object, the value of the cell by default is the value of the property. | [![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/5/)|
|Tag|`tag = file_system`<br>`tag = mount_point`|**Optional** Name of tag to be displayed in its own column.<br>Needed when an object received from the server contains property tags.<br>Value of the cell by default is equal to the value of the tag.|[![](./images/button.png)](https://apps.axibase.com/chartlab/f9ddebdb/2/)|
|Value|`value = row.openTime`|JavaScript code to determine the value of the cell.<br>By default the value of the key or tag.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/7/)|
|Format|`format = kilobytes`<br>`format = ####`|Cell value [format](../../syntax/format-settings.md).|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/8/)|
|Label|`label = Virtual`<br>`label = Resident`<br>`label = PID`|Name of column displayed in the column titles.<br>Specify as JavaScript code.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/8/)|
|Tooltip|`tooltip = Process CPU Usage`<br>`tooltip = Process ID`|Column description, displayed upon title mouseover.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/9/)|
|Style|`style = text-align: left`<br>`style = text-align: center`<br>`style = background: orange`|Style assigned to the column.<br>Can be specified as JavaScript code.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/23/)|
|Row Style|`row-style = value > 1 ? 'background: orange' : null`|Style assigned to the entire row.<br>Can be specified as JavaScript code.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/24/)|
|Max Width Style|`style = max-width: 50%`<br>`style = max-width: 400px`|Prevent scrolling in columns containing long text strings.<br>Scroll bar appear when the column shrinks below the specified width.<br>Can be set in percent or pixels.<br>If `transpose = true`, then set `style = max-width:` in pixels.|[![](./images/button.png)](https://apps.axibase.com/chartlab/681f535a/11/)|
|[Alert Expression](../../syntax/alert-expression.md)|`alert-expression = value > 5`<br>`alert-expression = value < 200000`|JavaScript code.<br> Use the returned value of the evaluation for sorting, if the column key is specified.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/11/)|
|Alert Style|`alert-style = background-color: yellow`<br>`alert-style = background-color: orange`|Styles assigned to the cell.<br>Can be specified as JavaScript code.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/11/)|
|Row Alert Style|`row-alert-style = background-color: orange`|Styles assigned to the whole row.<br>Can be specified as JavaScript code.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/12/)|
|Display|`display = false`|Hide a column.<br>Default value is `true`.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/13/)|
|Click Behavior|`onclick = var s = series({ metric: 'nmon.process.%cpu', disconnectInterval: '90 second' })`<br>`onclick = dialog({ series: [s], disconnectValue: 0 })`<br>`onclick = filter()`|JavaScript code click event handler for each cell.<br>Supports `method` filter, which allows you to filter the rows in the table to the value of this cell.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/15/)|
|Icon|`icon = value > 1 ? 'exclamation-sign' : 'ok'`|Name of the icon displayed in the cell.<br>Can be specified as JavaScript code.|[![](./images/button.png)](https://apps.axibase.com/chartlab/95bd95be/25)|
|Position|`position = first`|Position of the column relative to other columns in the table.|[![](./images/button.png)](https://apps.axibase.com/chartlab/d77c0677/6/)|

### Column Order

Column order is determined by the order of `[column]` sections in the widget configuration.

Default widget columns have a pre-defined position, for example the `Severity` column in `Console` widget is positioned first by default.

To change the position of the default column, specify the column name explicitly in the widget configuration.

![](./images/column-order.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/d77c0677/5/)

`[column]` settings include the `position` setting to control the placement of the column regardless of the order in which `[column]` settings are defined in the widget. Possible values are `first`, `middle` and `last`.

![](./images/column-order-2.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/d77c0677/6/)