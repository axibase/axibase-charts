# Date Format

## Supported Formats

|Format|Examples / Description|
|:---|:---|
|`yyyy-MM-ddThh:mm:ss[.S]Z`|<span>&#8226;</span> `2016-06-09T16:15:04.005Z`<br><span>&#8226;</span> `2016-06-24T18:00:45Z`<br>[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>`Z` denotes UTC time zone.|
|`yyyy-MM-ddThh:mm:ss[.S]±hh:mm`|<span>&#8226;</span> `2016-06-09T12:15:04.005-04:00`<br><span>&#8226;</span> `2016-06-24T20:00:45+02:00`<br><span>&#8226;</span> `2016-06-24T20:00:45.003000005+00:00`<br>[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>Time zone offset.|
|`yyyy-MM-ddThh:mm:ss[.S]±hhmm`|<span>&#8226;</span> `2016-06-24T20:00:45+0200`<br>[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>Time zone offset without `:` separator.|
|`yyyy-MM-dd hh:mm:ss[.S]Z`|<span>&#8226;</span> `2016-06-09 16:15:04.005Z`<br>No `T` separator. `Z` denotes UTC time zone.|
|`yyyy-MM-dd hh:mm:ss[.S]±hh:mm`|<span>&#8226;</span> `2016-06-09 16:15:04.005+03:00`<br>No `T` separator. Time zone offset.|
|`yyyy-MM-dd hh:mm:ss[.S]±hhmm`|<span>&#8226;</span> `2016-06-09 16:15:04.005-0300`<br>No `T` separator. Time zone offset without `:` separator.|
|`yyyy-MM-dd hh:mm:ss[.S]±hh`|<span>&#8226;</span> `2016-06-09 16:15:04.005-03`<br><span>&#8226;</span> `2016-06-09 16:15:04-03`<br>No `T` separator. Time zone offset without minutes.|
|`yyyy-MM-dd hh:mm:ss[.S]`|<span>&#8226;</span> `2016-06-09 16:15:04.005`<br>No `T` separator. No time zone offset.<br>|
|`yyyy-MM-dd`|<span>&#8226;</span> `2016-06-09`<br>Only date part, time is evaluated as `2016-06-09 00:00:00`.|
|`yyyy-M-d`|<span>&#8226;</span> `2016 6 9`<br>Only date part, time is evaluated as `2016-06-09 00:00:00`.|
|`MM-dd`|<span>&#8226;</span> `01-03`<br>`00:00:00` of month and day in current year. <br>If now is `2020-02-01 00:00:00`,<br>then `01-03` corresponds to `2020-01-03 00:00:00`.|
|`dd`|<span>&#8226;</span> `03`<br>`00:00:00` of day in current month.<br>If now is `2020-02-01 00:00:00`,<br>then `03` corresponds to `2020-02-03 00:00:00`.|
|`yyyy`|<span>&#8226;</span> `2020`<br>`00:00:00` of 1st January in year.<br> `2020` corresponds to `2020-01-01 00:00:00`.|
|`yyyy-MM`|<span>&#8226;</span> `2020-03`<br>`00:00:00` of 1st day of year and month.<br>`2020-03` corresponds to `2020-03-01 00:00:00`.|
|`hh:mm`|<span>&#8226;</span> `16:00`<br>Hours and minutes of current day.<br>If now is `2020-02-01 00:00:00`,<br>then `16:00` corresponds to `2020-02-01 16:00:00`.|
|`hh:mm:ss`|<span>&#8226;</span> `16:17:18`<br>Hours, minutes and seconds of current day.<br>If now is `2020-02-01 00:00:00`,<br>then `16:17:18` corresponds to `2020-02-01 16:17:18`.|
|`hh:mm:ss.S`|<span>&#8226;</span> `16:17:18.190`<br>Hours, minutes, seconds and milliseconds of current day.<br>If now is `2020-02-01 00:00:00`,<br>then `16:17:18.190` corresponds to `2020-02-01 16:17:18.190`.|

* `yyyy`: four digit year
* `MM`: two digit month starting with `01` for January (`01`-`12`).
* `dd`: two digit day of month starting with `01` (`01`-`31`).
* `T`: literal value separating between date and time.
* `HH`: two digit hour in day (`00`-`23`).
* `mm`: two digit minute in hour (`00`-`59`).
* `ss`: two digit second in minute (`00`-`59`).
* `S`: fractional seconds, up to nine (`9`) digits.
* `hh`: two digit UTC time zone offset in hours (`00`-`11`).

## Time Zone

Time zone in the date literal value can be omitted or specified as `Z` for the UTC time zone or UTC offset in hours and optional minutes: `±hh:mm`, `±hhmm`, `±hh`. Dates without time zones, for example `2016-06-24 20:00:45`, are evaluated based on the [`timezone`](../widgets/shared/README.md#timezone) setting.

* Positive offset `+hh:mm` applies to time zones that are **ahead** of or in line with UTC. Negative offset `-hh:mm` applies if the time zone is **behind** UTC.
* For example, Japan Standard Time (JST) has an offset of `+09:00` from UTC (ahead). The Pacific Standard Time (PST) has an offset of `-07:00` from UTC (behind).
* If the date contains UTC time zone or offset, the [`timezone`](../widgets/shared/README.md#timezone) setting is ignored.

## Time Precision

The fractional second part `[.S]` is optional and can have a resolution of nanoseconds (up to **nine** (`9`) digits of a decimal fraction)).

However only the milliseconds (three (`3`) digits) are retained in the database.

* `2016-06-24T20:00:45.003000005+00:00` is stored as `2016-06-24T20:00:45.003+00:00`.

## Examples

Invalid timestamps that cause a parsing error:

* `2016-06-09T16:15Z` - Seconds are missing.
* `2016-06-09T16:15:04PST` - Time zone names are not supported.
