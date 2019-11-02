# Date Format

## Supported Formats

Literal date values without timezone are evaluated based on the [`timezone`](../widgets/shared/README.md#timezone) setting.

|Format|Description / Examples|
|:---|:---|
|`yyyy-MM-ddThh:mm:ss[.S]Z`|[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>`Z` denotes UTC time zone.<br><span>&#8226;</span> `2016-06-09T16:15:04.005Z`<br><span>&#8226;</span> `2016-06-24T18:00:45Z`|
|`yyyy-MM-ddThh:mm:ss[.S]±hh:mm`|[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>Time zone offset.<br><span>&#8226;</span> `2016-06-09T12:15:04.005-04:00`<br><span>&#8226;</span> `2016-06-24T20:00:45+02:00`<br><span>&#8226;</span> `2016-06-24T20:00:45.003000005+00:00`|
|`yyyy-MM-ddThh:mm:ss[.S]±hhmm`|[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>Time zone offset without `:` separator.<br><span>&#8226;</span> `2016-06-24T20:00:45+0200`|
|`yyyy-MM-ddThh:mm:ss[.S]`|[ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)<br>No time zone offset.<br><span>&#8226;</span> `2016-06-24T20:00:45.8`|
|`yyyy-MM-dd hh:mm:ss[.S]Z`|No `T` separator. `Z` denotes UTC time zone.<br><span>&#8226;</span> `2016-06-09 16:15:04.005Z`|
|`yyyy-MM-dd hh:mm:ss[.S]±hh:mm`|No `T` separator. Time zone offset.<br><span>&#8226;</span> `2016-06-09 16:15:04.005+03:00`|
|`yyyy-MM-dd hh:mm:ss[.S]±hhmm`|No `T` separator. Time zone offset without `:` separator.<br><span>&#8226;</span> `2016-06-09 16:15:04.005-0300`|
|`yyyy-MM-dd hh:mm:ss[.S]±hh`|No `T` separator. Time zone offset without minutes.<br><span>&#8226;</span> `2016-06-09 16:15:04.005-03`<br><span>&#8226;</span> `2016-06-09 16:15:04-03`|
|`yyyy-MM-dd hh:mm:ss[.S]`|No `T` separator. No time zone offset.<br>|
|`yyyy-MM-dd`|Only date part, time is evaluated as `2016-06-09 00:00:00`.<br><span>&#8226;</span> `2016-06-09`|
|`yyyy MM dd`|Only date part, time is evaluated as `2016-06-09 00:00:00`.<br><span>&#8226;</span> `2016 06 09`|
|`yyyy-M-d`|Only date part, time is evaluated as `2016-06-09 00:00:00`.<br><span>&#8226;</span> `2016 6 9`|
|`MM-dd`|`00:00:00` of month and day in current year. <br>If now is `2020-02-01 00:00:00`,<br>then `01-03` corresponds to `2020-01-03 00:00:00`.<br><span>&#8226;</span> `01-03`|
|`dd`|`00:00:00` of day in current month.<br>If now is `2020-02-01 00:00:00`,<br>then `03` corresponds to `2020-02-03 00:00:00`.<br><span>&#8226;</span> `03`|
|`yyyy`|`00:00:00` of 1st January in year.<br> `2020` corresponds to `2020-01-01 00:00:00`.<br><span>&#8226;</span> `2020`|
|`yyyy-MM`|`00:00:00` of 1st day of year and month.<br>`2020-03` corresponds to `2020-03-01 00:00:00`.<br><span>&#8226;</span> `2020-03`|
|`hh:mm`|Hours and minutes of current day.<br>If now is `2020-02-01 00:00:00`,<br>then `16:00` corresponds to `2020-02-01 16:00:00`.<br><span>&#8226;</span> `16:00`|
|`hh:mm:ss`|Hours, minutes and seconds of current day.<br>If now is `2020-02-01 00:00:00`,<br>then `16:17:18` corresponds to `2020-02-01 16:17:18`.<br><span>&#8226;</span> `16:17:18`|
|`hh:mm:ss.S`|Hours, minutes, seconds and milliseconds of current day.<br>If now is `2020-02-01 00:00:00`,<br>then `16:17:18.190` corresponds to `2020-02-01 16:17:18.190`.<br><span>&#8226;</span> `16:17:18.190`|

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

Time zone in the date literal value can be omitted or specified as `Z` for the UTC time zone or UTC offset in hours and optional minutes: `±hh:mm`, `±hhmm`, `±hh`. Dates without timezones, for example `2016-06-24 20:00:45`, are evaluated based on the [`timezone`](../widgets/shared/README.md#timezone) setting.

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
