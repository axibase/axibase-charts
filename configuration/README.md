# Configuration

## Overview

Configuration settings specify the overall layout of a widget or group of widgets.

## Configuration Settings

* The settings apply to the `[configuration]` section of all widgets.

### General Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="dialog-maximize"></a>[`dialog-maximize`](#dialog-maximize)  |  `dialog-maximize = true`  |  Expand dialog window to the entire page.<br>Open dialog window by clicking the widget header.<br>Possible values: `true`, `false`.<br>Default: `true`.  |  [↗](https://apps.axibase.com/chartlab/8bc68a84)
<a name="scale"></a>[`scale`](#scale) | `scale = 0.8` | Chart scale.<br>Value must exceed `0.0`.<br>Default value: `1.0`.| [↗](https://apps.axibase.com/chartlab/1679114f)

### Interval Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="timespan"></a>[`timespan`](#timespan) | `timespan = 6 hour` | Date selection interval specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>When specified without `start-time` or `endtime` setting, `endtime` is `now`.<br>Format: `count time_unit`.<br>Default value: `1 hour`.| [↗](https://apps.axibase.com/chartlab/750ca5ce)
<a name="timezone"></a>[`timezone`](#timezone) | `timezone = UTC` | Set the time zone for loaded data.<br>Possible values: `UTC`.<br>If `UTC` is set, `start-time` and `end-time` settings are evaluated based on UTC time zone.<br>If `UTC` is not set, samples are displayed in the local time zone. | [↗](https://apps.axibase.com/chartlab/6db040aa)
<a name="start-time"></a>[`start-time`](#start-time)| `start-time = 2018-07-05 12:00:00` | Start time of selection interval.<br>When `start-time` is specified, either `end-time` **or** `timespan` is also required. | [↗](https://apps.axibase.com/chartlab/1745924e)
<a name="end-time"></a>[`end-time`](#end-time) | `endtime = 2018-07-05 13:00:00` | End time of selection interval.<br>When `end-time` is specified, either `start-time` **or** `timespan` is also required.| [↗](https://apps.axibase.com/chartlab/3757d094)

* Supported formats for `start-time` and `end-time` settings:
  * [Calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), for example: `previous_week`.
  * [ISO format](https://axibase.com/docs/atsd/shared/date-format.html) in UTC time zone: `yyyy-MM-ddTHH:mm:ss[.S]Z`, for example: `2017-07-01T00:00:00Z`
  * Local format: `yyyy-MM-dd[ HH:mm:ss[.S]]`, for example: `2017-07-01 00:00:00.015`, `2017-07-01 00:00:00`, and `2017-07-01`

### Layout Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="height-units"></a>[`height-units`](#height-units) |`height-units = 2`| Number of widgets shown in the configuration vertical grid.<br>When specified in the `[configuration]` section, `height-units` determines the number of total widgets.<br>When specified in the `[widget]` or `[group]` section `height-units` determines the absolute widget height.<br>Default value: `4`.|[↗](https://apps.axibase.com/chartlab/645ea8fb)
<a name="width-units"></a>[`width-units`](#width-units)|`width-units = 2`| Number of widgets shown in the configuration horizontal grid.<br>When specified in the `[configuration]` section, `width-units` determines the number of total widgets.<br>When specified in the `[widget]` or `[group]` section `width-units` determines the absolute widget width.<br>Default value: `6`|[↗](https://apps.axibase.com/chartlab/d74e423d)
<a name="offset-left"></a>[`offset-left`](#offset-left) | `offset-left = 50` | Offset from the left page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/8e901887)
<a name="offset-right"></a>[`offset-right`](#offset-right) | `offset-right = 50` | Offset from the right page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/59feef54)
<a name="offset-top"></a>[`offset-top`](#offset-top) | `offset-top = 50` | Offset from the top page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/706f24e5)
<a name="offset-bottom"></a>[`offset-bottom`](#offset-bottom) | `offset-bottom = 50` | Offset from the bottom page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/5e7b62aa)
<a name="widgets-per-row"></a>[`widgets-per-row`](#widgets-per-row)  |  `widgets-per-row = 2`  | Maximum number of widgets per `[group]`.<br> Additional widgets are placed in a new row.  |  [↗](https://apps.axibase.com/chartlab/90047c70) |