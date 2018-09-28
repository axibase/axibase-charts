# Configuration

## Overview

Configuration settings specify the overall layout of a widget or group of widgets.

## Configuration Settings

* The settings apply to the `[configuration]` section of all widgets.

### General Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="dialog-maximize"></a>[`dialog-maximize`](#dialog-maximize)  |  `dialog-maximize = true`  |  Expand dialog window to the entire page.<br>Open dialog window by clicking the widget header.<br>Possible values: `true`, `false`.<br>Default: `true`.  |  [↗](https://apps.axibase.com/chartlab/8bc68a84)
<a name="display-panels"></a>[`display-panels`](#display-panels)  |  `display-panels = true`  |  Display widget controls.<br>Possible values: `true`, `false`, `hover`.<br>Default value: `hover`. |  [↗](https://apps.axibase.com/chartlab/1a1bfdd3)
<a name="expand-panels"></a>[`expand-panels`](#expand-panels)  |  `expand-panels = compact`  |  Expand widget controls.<br>Allowed values: `all`, `compact`, `none`.  |  [↗](https://apps.axibase.com/chartlab/e9e8cd37)
<a name="periods"></a>[`periods`](#periods)  |  `periods = 20 minute, 4 hour`  |  Specify custom aggregation periods in widget controls.  |  [↗](https://apps.axibase.com/chartlab/eaf88286)

### Interval Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="timespan"></a>[`timespan`](#timespan) | `timespan = 6 hour` | Date selection interval specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>When specified without `start-time` or `endtime` setting, `endtime` is `now`.<br>Format: `count time_unit`.<br>Default value: `1 hour`.| [↗](https://apps.axibase.com/chartlab/f08405c6)
<a name="timezone"></a>[`timezone`](#timezone) | `timezone = UTC` | Set the time zone for loaded data.<br>Possible values: `UTC`.<br>If `UTC` is set, `start-time` and `end-time` settings specified in local format are evaluated based on UTC time zone.<br>If `UTC` is not set, samples are displayed in the local time zone. | [↗](https://apps.axibase.com/chartlab/8633fcee)
<a name="start-time"></a>[`start-time`](#start-time)| `start-time = 2018-07-05 12:00:00` | Start time of selection interval.<br>When `start-time` is specified, either `end-time` **or** `timespan` is also required. | [↗](https://apps.axibase.com/chartlab/451287d3)
<a name="end-time"></a>[`end-time`](#end-time) | `endtime = 2018-07-05 13:00:00` | End time of selection interval.<br>When `end-time` is specified, either `start-time` **or** `timespan` is also required.| [↗](https://apps.axibase.com/chartlab/1565799f)

* Supported formats for `start-time` and `end-time` settings:
  * [Calendar syntax](https://axibase.com/docs/atsd/shared/calendar.html), for example: `previous_week`.
  * [ISO format](https://axibase.com/docs/atsd/shared/date-format.html) in UTC time zone: `yyyy-MM-ddTHH:mm:ss[.S]Z`, for example: `2017-07-01T00:00:00Z`
  * Local format: `yyyy-MM-dd[ HH:mm:ss[.S]]`, for example: `2017-07-01 00:00:00.015`, `2017-07-01 00:00:00`, and `2017-07-01`

### Layout Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="height-units"></a>[`height-units`](#height-units) |`height-units = 2`| Number of widgets shown in configuration vertical grid.<br>Default value: `4`.|[↗](https://apps.axibase.com/chartlab/eb14dcd0)
<a name="width-units"></a>[`width-units`](#width-units)|`width-units = 3`| Number of widgets shown in configuration horizontal grid.<br>Default value: `6`|[↗](https://apps.axibase.com/chartlab/b0290f20)
<a name="offset-left"></a>[`offset-left`](#offset-left) | `offset-left = 50` | Offset from the left page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/720677c3)
<a name="offset-right"></a>[`offset-right`](#offset-right) | `offset-right = 50` | Offset from the right page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/7c30a34b)
<a name="offset-top"></a>[`offset-top`](#offset-top) | `offset-top = 50` | Offset from the top page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/fcbb484b)
<a name="offset-bottom"></a>[`offset-bottom`](#offset-bottom) | `offset-bottom = 50` | Offset from the bottom page border, in pixels.<br>Default value: `0`. | [↗](https://apps.axibase.com/chartlab/1baa3e3a)
| `widgets-per-row`  |  `widgets-per-row = 2`  | Maximum number of widgets per `[group]`.<br> Additional widgets are placed in a new row.  |  [↗](https://apps.axibase.com/chartlab/90047c70) |

### Connection Settings

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="url"></a>[`url`](#url) | `url = https://atsd.example.org:8443` | URL of the ATSD server.<br>The setting is necessary if the data is loaded from an ATSD server running on a different host. | [↗](https://apps.axibase.com/chartlab/88885921)
<a name="context-path"></a>[`context-path`](#context-path) | `context-path = /api/v2/`| Context path is the prefix of the URL path that is used to select the context to which an incoming request is passed.<br>Default value: `/api/v1/`.|[↗](https://apps.axibase.com/chartlab/ed175a7b)
<a name="method-path"></a>[`method-path`](#method-path) | `method-path = /series/query` | Data API method path.<br>Default value is specific for each data type: `/series/query`, `/properties/query`, `/messages/query`, `/alerts/query`.<br>URL for data requests is assembled from `{url}{context-path}{method-path}{url-parameters}`. | [↗](https://apps.axibase.com/chartlab/ba823304)
<a name="url-parameters"></a>[`url-parameters`](#url-parameters) | `url-parameters = db=1` | Optional request parameters included in Data API requests.<br>Parameter names and values must be URL-encoded and separated by `&`.<br>`?` at the beginning of the query is optional.<br>URL for data requests is assembled from `{url}{context-path}{method-path}{url-parameters}`. | [↗](https://apps.axibase.com/chartlab/ba823304)|
<a name="batch-update"></a>[`batch-update`](#batch-update) | `batch-update = true`| Send data queries to the server in batches with size specified in `batch-size` setting.<br>If `true`, series for which the request has failed are requested separately from successfully updated series.<br>Default value: `false`.| [↗](https://apps.axibase.com/chartlab/e20f7427)
<a name="batch-size"></a>[`batch-size`](#batch-size) | `batch-size = 5` | Maximum number of series in one batch request to the server.<br>If `0` is specified, the limit is not set.<br>Applies when `batch-update = true`.<br>Default value: `8`.| [↗](https://apps.axibase.com/chartlab/70fa3b97)
<a name="update-interval"></a>[`update-interval`](#update-interval) | `update-interval = 5 min` | Interval to update widget specified as the number of [time units](https://axibase.com/docs/atsd/api/data/series/time-unit.html).<br>`update-interval` can contain several `refresh-interval` periods, whereby data is updated in memory several times but only added to the widget each specified interval.<br>Format: `count time_unit`.<br>Default value: `5 seconds`. | [↗](https://apps.axibase.com/chartlab/ebcc72fa)