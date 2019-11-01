# Calendar Syntax

## Overview

Calendar syntax implements convenient [keywords](#keywords) and [date arithmetic](#expressions) in cases where the calculated date depends on the current time.

For example, if the current time is `December 15, 2017 15:28:00`, the keyword `current_day` evaluates to `December 15, 2017 00:00:00` and the expression `current_hour - 1 * day` returns `December 14, 2017 15:00:00`.

Calendar [keywords](#keywords) are evaluated based on the [`timezone`](../widgets/shared/README.md#timezone) setting.

Date arithmetic such as adding or subtracting an interval is implemented using [expressions](#expressions).

## Expressions

### Syntax

```markdown
<keyword>[ +|- <interval-count> * <interval-unit>]
```

### Examples

| **Name** | **Description** |
|:---|:---|
| `next_month` | 00:00:00 on the 1st day of the next month |
| `next_month + 3 * day` | 00:00:00 on the 3rd day of the next month |
| `today – 1 * month` | 00:00:00 on the same day of the previous month |

## Keywords

### Current Time

| **Name** | **Alias** | **Description** |
|:---|:---|:---|
| `now` | time | current time |

### Future Time

| **Name** | **Alias** | **Description** |
|:---|:---|:---|
| `next_minute` | | 0 seconds of the next minute |
| `next_hour` | | 00:00 of the next hour |
| `next_day` | tomorrow | 00:00:00 of the next day |
| `next_working_day` | | 00:00:00 of the next working day |
| `next_vacation_day` | | 00:00:00 of the next vacation day |
| `next_week` | | 00:00:00 on Monday of the next week |
| `last_working_day` | | 00:00:00 of the last working day of the current month |
| `last_vacation_day` | | 00:00:00 of the last vacation day of the current month |
| `next_month` | | 00:00:00 on the first day of the next month |
| `next_quarter` | | 00:00:00 on the first day of the next quarter |
| `next_year` | | 00:00:00 on the first day of the next year |

### Previous Time

| **Name** | **Alias** | **Description** |
|:---|:---|:---|
| `current_minute` | | current time rounded to the beginning of the current minute |
| `previous_minute` | | 00 of the previous minute |
| `current_hour` | | current time rounded to the beginning of the current hour |
| `previous_hour` | | 00:00 of the previous hour |
| `current_day` | today | 00:00:00 of the current day |
| `current_working_day` | | 00:00:00 of the last working day:<br><span>&#8226;</span> if today is friday matches friday<br><span>&#8226;</span> if today is saturday matches friday<br><span>&#8226;</span> if today is sunday matches friday<br><span>&#8226;</span> if today is monday matches monday and etc.|
| `previous_day` | yesterday | 00:00:00 of the previous day |
| `previous_working_day` | | 00:00:00 of the previous working day |
| `previous_vacation_day` | | 00:00:00 of the previous vacation day |
| `first_day` | | 00:00:00 of the first day of the current month |
| `first_working_day` | | 00:00:00 of the first working day of the current month |
| `first_vacation_day` | | 00:00:00 of the first vacation day of the current month |
| `current_week` | | 00:00:00 on Monday of the current week |
| `previous_week` | | 00:00:00 on Monday of the previous week |
| `current_month` | | 00:00:00 on the first day of the current month |
| `previous_month` | | 00:00:00 on the first day of the previous month |
| `current_quarter` | | 00:00:00 on the first day of the current quarter |
| `previous_quarter` | | 00:00:00 on the first day of the previous quarter |
| `current_year` | | 00:00:00 on the first day of the current year |
| `previous_year` | | 00:00:00 on the first day of the previous year |

### Days of Week

| **Name** | **Alias** | **Description** |
|:---|:---|:---|
| `monday` | `mon` | 00:00:00 on the most recent Monday |
| `tuesday` | `tue` | 00:00:00 on the most recent Tuesday |
| `wednesday` | `wed` | 00:00:00 on the most recent Wednesday |
| `thursday` | `thu` | 00:00:00 on the most recent Thursday |
| `friday` | `fri` | 00:00:00 on the most recent Friday |
| `saturday` | `sat` | 00:00:00 on the most recent Saturday |
| `sunday` | `sun` | 00:00:00 on the most recent Sunday |

## Interval Units

* `millisecond`
* `second` or `sec`
* `minute` or `min`
* `hour`
* `day`
* `week`
* `month`
* `quarter`
* `year`
