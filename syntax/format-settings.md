# Format Settings

## Supported Format Settings

```ls
format = bytes
format = kilobytes
format = megawatt
format = kilowatthour
format = hertz
format = kilojoule
format = million watt
format = thousands
```

Value | Syntax | Description
--|--|--
`binary` | `format = binary('kilo', 3) + 'B'` | Formatting values with size units. Used for bytes.<br>For example, `1024`.
`decimal`| `format = numeric(1)`<br>`format = numeric`| Number formatting<br>`numeric` is an `alias` for `decimal`.<br>Specify the optional round value parameter in brackets to define how many spaces the decimal is rounded.<br>Example: `format = numeric(1)` rounds to the first decimal. Thus, `4.29` becomes `4.3`.
`fixed`| `format = fixed(3)` | Format numbers with the specified number of digits.<br>Example: `format = fixed(1)` rounds `1225` to `1000`.
`currency` | `format = '$' + currency('million')`| Currency formatting. Any symbol is supported.

### Optional Parameters

All functions have two optional arguments:

* **Dimension**: Set to `kilo|thousand`, `mega|million`, `giga|billion`, etc.
* **Digits**: Maximum number of digits after decimal point.

## Rounding

Perform rounding on displayed values:

`round(value, number_of_digits)`

```ls
format = round(0)
format = round(value/512, 1)
format = round(-3)
```

* If `number_of_digits > 0`, the value is rounded to the specified number of decimal places.
* If `number_of_digits = 0`, the value is rounded to the nearest integer.
* If `number_of_digits < 0`, the value is rounded to the left of the decimal point.

Operation | Syntax
--|--
`12.34` rounded to `12.3` | `format = round(1)`
`12.34` rounded to `12` | `format = round(0)`
`12.34` rounded to `10` | `format = round(-1)`

![](./images/format-settings.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/aebb480d)

## Percent Formatting

Format values as a percentage of `100`.

```ls
format = percent
```

![](./images/percent-formatting.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/9225124b/2/#fullscreen)

Decimal Values | Fractional Values
--|--
Formatted as a percentage of `100` | Multiplied by `100` and converted into percentage |
`format = percent(1)` formats `10.23243232` as `10.2%`. | `format = fraction(2)` formats `0.23243232` as `23.24%`
![](./images/format-decimal.png) | ![](./images/format-fraction.png)
[![](./images/button.png)](https://apps.axibase.com/chartlab/64a714fa) | [![](./images/button.png)](https://apps.axibase.com/chartlab/7a677440)

## `fixed`

Control the number of displayed digits. Specify the exact number of digits in the fraction portion of a number.

`fixed(value, number_of_digits)`

### Syntax

```ls
fixed(0, 3); // 0.000
fixed(0); // 0
fixed(1.2); // 1
fixed(1.2, 3); // 1.200
fixed(1.23, 3); // 1.230
fixed(1.234, 3); // 1.234
fixed(1.2345, 3); // 1.234
fixed(1.23456, 4); // 1.2345
fixed(0.2, 3); // 0.200
fixed(1, 3); // 1.000
fixed(1512376152, 3); // 1512376152.000
fixed(NaN, 3); // NaN
fixed(null, 3); // null
```

## Time Format

Control how time is displayed.

Syntax | Description
---|---
`format = iso` | ISO format.
`format = new Date(value)` | Print time in current locale.
`format = (new Date(value)).toISOString` | Print current locale time in ISO format.

[![](./images/button.png)](https://apps.axibase.com/chartlab/f96bf0ae)

## Interval Format

Format series values which represent millisecond duration using `intervalFormat` function or `interval-format` setting.

```ls
/* invoke intervalFormat function */
format = intervalFormat('%dd %H:%M:%S')(value*1000)

/* apply the default format */
interval-format = true

/* apply custom format */
interval-format = %H:%M
```

### Supported Placeholders

* `%d`: Day
* `%H` and `%h`: Hour
* `%M` and `%m`: Minute
* `%S` and `%s`: Second
* `%L` and `%l`: Millisecond

### Examples

#### Table

![](./images/interval-format-1.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/0ff7e136)

#### Bar Chart

![](./images/interval-format-2.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/293c46cf/2/)

#### Time Chart

![](./images/interval-format-3.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/293c46cf/)

## Day Format

Control the date format of the `x` axis for year, month, week, and day.

### Syntax

* `%a`: Three-letter abbreviated day name, for example: Sun, Mon, Tue, Wed, Thu, Fri, Sat.
* `%aa`: Two-letter abbreviated day name, for example: Su, Mo, Tu, We, Th, Fr, Sa.
* `%A`: Full day name.
* `%b`: Abbreviated month name.
* `%B`: Full month name.
* `%d`: Zero-padded day of the month as a decimal number `[01,31]`.
* `%e`: Space-padded day of the month as a decimal number `[ 1,31]`. Equivalent to `%_d`.
* `%j`: Day of the year as a decimal number `[001,366]`.
* `%m`: Month as a decimal number `[01,12]`.
* `%U`: Week number of the year as a decimal number `[00,53]`. Sunday is the first day of the week.
* `%w`: Weekday as a decimal number `[0(Sunday),6]`.
* `%W`: Week number of the year as a decimal number `[00,53]`. Monday is the first day of the week.
* `%x`: Date, as `%m/%d/%Y`.
* `%y`: Year without century as a decimal number `[00,99]`.
* `%Y`: Year with century as a decimal number.

> Line break syntax `/n` is supported.

#### Examples

```ls
day-format = %m/%d
day-format = %y/%m/%d
day-format = %Y/%m/%d
day-format = %Y %m/%d
```

![](./images/day-format-1.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/d0bfcdf8)

```ls
day-format = %m %a
day-format = %m/%aa
day-format = %x
day-format = %W\n%a
```

![](./images/day-format-2.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/607961b1)

## Hour Format

Control the time format for the `x` axis for hour and minute.

### Syntax

Use any combination of the following:

* `%H`: 24-hour time hour as a decimal number `[00,23]`.
* `%I`: 12-hour time hour as a decimal number `[01,12]`.
* `%M`: Minute as a decimal number `[00,59]`.
* `%p`: AM or PM.
* `%X`: time, as `%H:%M:%S`.

> Line break syntax `/n` is supported.

#### Example

```ls
hour-format = %I %p
hour-format = %H:%M
```

![](./images/hour-format.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/34b0c0b2)