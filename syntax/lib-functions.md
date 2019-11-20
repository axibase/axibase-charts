# Lib Functions

This document enumerates utility functions that are accessible in all JavaScript settings via `lib` prefix.

## Reference

* [Date](#date)
  * [`shiftDate`](#shiftdate)
  * [`evalTime`](#evaltime)
  * [`parseInterval`](#parseinterval)
  * [`parseTimespan`](#parsetimespan)
  * [`adjustPeriod`](#adjustperiod)
  * [`getTime`](#gettime)
  * [`roundTime`](#roundtime)
  * [`getIntervalValue`](#getintervalvalue)
  * [`getIntervalValueTitle`](#getintervalvaluetitle)
  * [`getMaximumPeriod`](#getmaximumperiod)
  * [`getMiddleInterval`](#getmiddleinterval)
  * [`getAggregateInterval`](#getaggregateinterval)
  * [`TimeFormatter`](#timeformatter)
  * [`intervalFormat`](#intervalformat)
  * [`d3Format`](#d3format)
* [Series](#series)
  * [`getLastSeries`](#getlastseries)
* [Lib `module.exports`](#lib-moduleexports)

## Date

### `shiftDate`

```typescript
shiftDate(d: DateWithTZ | number, period, sign: number = 1, zone: string = "local"): DateWithTZ
```

Adds (`sign = 1`) or subtracts (`sign = -1`) value of parsed `period`.

**Example**:

```typescript
lib.shiftDate(Date.now(), lib.getIntervalValue("5 minute"))
```

### `evalTime`

```typescript
evalTime(t: DateWithTZ | number | DateParser): null | number | boolean 
```

Null-safe wrapper for evaluating time setting:

1) if `t` is `null`, returns `true`;
2) if `t` is date parsing function and it's result is finite number, returns it, i.e. returns `+t()`;
3) if `t` is number or `DateWithTZ`, returns `+t`;
4) otherwise returns `null`.

**Example**:

```typescript
lib.evalTime(lib.getTime("current_hour"))
```

### `parseInterval`

```typescript
parseInterval(v: string): number
```

Parses interval in `count unit` format to corresponding milliseconds.

**Example**:

```typescript
lib.parseInterval("5 minute")
```

### `parseTimespan`

```typescript
parseTimespan(config: object): number
```

Calculates time interval for loading historical data depending on specified settings:
 1) if "timespan=all", returns "all";
 2) if "timespan" is not a string, returns it as is;
 3) if both "start-time" and "end-time" are present, returns "end-time"-"start-time";
 4) if only "start-time" or "end-time" is present, parses "timespan" using specified setting as base;
 5) if no "start-time" and "end-time" are present, considers "start-time=now".
 
Throws `DateFilterError`: "end-time" must be greater than "start-time" (if both specified).

**Example**:

```typescript
lib.parseTimespan({starttime: "2016-04-22", timespan: "3 day", timezone: "Europe/Berlin"})
```

### `adjustPeriod`

```typescript
adjustPeriod(timespan: number): number
```

?

### `getTime`

```typescript
getTime(template, zone: string = "local", returnDate: boolean = false,
                               isValidation: boolean = false): DateParser | DateWithTZ | number | void
```

Analyzes template string and returns corresponding parser (or parsed value, see `returnDate`).
If template is not a string or array of strings, returns template as is.
Returns undefined if the template can not be parsed.

Parameters:

* `template` - Date template or calendar expression.
* `zone` - Zone ID, in which template is need to be processed. It will be ignored, if template contains offset.
* `returnDate` - If true, returns parsed date instead of function.
* `isValidation` - If true, that means that parser was called for validation of template, and error must be rethrown to be shown to user.

Throws `TimeParseError`: template must be a string, if function is used for validation, i.e. `isValidation=true`.

**Example**:

```typescript
lib.getTime("2016-04-22", "Europe/Berlin")()
```

### `roundTime`

```typescript
roundTime(t: number, period, ceil: boolean = false, zone: string = "local"): number
```

?

### `getIntervalValue`

```typescript
getIntervalValue(x, returnDefault?, getArray?, allowNotPositive?, _timeUnits?)
```

?

### `getIntervalValueTitle`

```typescript
getIntervalValueTitle(intv)
```

Returns title for parsed interval `intv`.

**Example**:

```typescript
lib.getIntervalValueTitle(lib.getIntervalValue("5 minute")) // returns "5m"
lib.getIntervalValueTitle(lib.getIntervalValue("5 millisecond")) // returns "5ms"
```

### `getMaximumPeriod`

```typescript
getMaximumPeriod(period)
```

?

### `getMiddleInterval`

```typescript
getMiddleInterval(i1, i2, minUnit)
```

?

### `getAggregateInterval`

```typescript
getAggregateInterval(intv):{ count: number, unit: string, align: string }
```

?

### `TimeFormatter`

```typescript
TimeFormatter(zone: string)
```

Util class, containing static time formatting methods:

```typescript
type DateFormatter = (value: DateWithTZ | number) => string;
```

* `getDefaultTimeFormatter(): DateFormatter` - returns default formatter (used in tooltips);
* `getTimeAxisFormatter(init): DateFormatter` - returns time axis formatter;
* `displayDatesFormat(interval: number[]): string[]` - formats Time Chart interval on time axis, if `display-date = true`.


**Example**:

```typescript
new TimeFormatter("utc").getDefaultTimeFormatter() // default DateFormatter, corresponding to "UTC"
new TimeFormatter("local").getTimeAxisFormatter({baseTime: 12345678910}) // formatter for time axis, corresponding to "local"
```

### `intervalFormat`

```typescript
intervalFormat(template): IntervalFormatter
```

?

### `d3Format`

```typescript
type DateFormatter = (value: DateWithTZ | number) => string;
d3Format(template: string, zone: string = "local", isTime?: boolean): DateFormatter
```

Returns date formatter, corresponding to d3 `template` and `zone`.

**Example**:

```typescript
const template = "%e-%b %H:%M";
const format = lib.d3Format(template, "Europe/Berlin");
const res = format(Date.now()); // "20-Sep 10:20"
```

## Series

### `getLastSeries`

```typescript
getLastSeries(series: Series[], filter?: (s: Series) => boolean, min: boolean = false): Series | null
```

Returns series with the latest timestamp, i.e. compares `s.data.last.t` values and returns series with the greatest.

Parameters:

* `series` - Array of series.
* `filter` - Function to exclude series from search: `(s: Series) => boolean`, e.g. `(s) => s.data.last.v > 10`.
* `min` - If true, returns series with the earliest timestamp.

Returns `null`, if no series mathes the `filter`.

## Lib `module.exports`

```javascript
module.exports = {
    shiftDate: time.shiftDate,
    evalTime: time.evalTime,
    parseInterval: time.intervals.parseInterval,
    parseTimespan: time.parseTimespan,
    adjustPeriod: time.adjustPeriod,
    getTime: time.timeParser.getTime,
    roundTime: time.roundTime,
    getIntervalValue: time.intervals.getIntervalValue,
    getIntervalValueTitle: time.intervals.getIntervalValueTitle,
    getMaximumPeriod: time.intervals.getMaximumPeriod,
    getMiddleInterval: time.intervals.getMiddleInterval,
    getAggregateInterval: time.intervals.getAggregateInterval,
    TimeFormatter: timeFormat.TimeFormatter,
    intervalFormat: timeFormat.intervalFormat,
    d3Format: timeFormat.d3Format,

    loader: dataLoader.loader,

    RELOAD_MODE: utils.RELOAD_MODE,
    UPDATE_MODE: utils.UPDATE_MODE,
    RESET_MODE: utils.RESET_MODE,
    composeURL: seriesUtil.composeURL,

    data: {
        calculator: calculator.Calculator,
        combine: dataSeries.combineData,
        getAggregateValue: seriesGroup.getAggregateValue,
        getCalcValue: calculator.getCalcValue,
        getInterval: dataSeries.getDataInterval,
        getDisconnectData: disconnect.getDisconnectData,
        getTransformMethod: dataSeries.getTransformMethod,
        getVisibleInterval: dataSeries.getVisibleInterval,
        process: updater.processDataSeries,
        roundInterval: dataSeries.roundInterval
    },

    defaultLoadMethod: null,
    findInSortedArray: _findInSortedArray,
    getEvalMethod: utils.getEvalMethod,
    isEvalMethod: utils.isEvalMethod,
    getLoadingSeries: updater.getLoadingSeries,
    getRangePrecision: dataSeries.getRangePrecision,
    falseFunctor: d3.functor(false),

    format: {
        ranges: format.ranges
    },

    intervals: dataSeries.Intervals,
    isFinite: _numberIsFinite,
    isFiniteNumber: _isFiniteNumber,

    number: {
        ascending: _ascending,
        descending: _descending
    },

    object: {
        copy: seriesUtil.copyObject,
        ascending: seriesUtil.objectAscending,
        descending: seriesUtil.objectDescending,
        getObjectsByKeysComparator: sort.getObjectsByKeysComparator
    },

    parseValue: seriesUtil.parseValue,
    replaceTags: utils.replaceTags,
    setPeriod: updater.setPeriod,

    series: {
        addAggregate: seriesGroup.addAggregateSeries,
        create: seriesUtil.newSeries,
        formatTags: seriesUtil.formatTags,
        getColor: seriesUtil.getSeriesColor,
        getLabel: getSeriesLabel,
        getLast: dataLoader.getLastSeries,
        getLevelValue: seriesUtil.getLevelValue,
        getKey: seriesUtil.getSeriesKey,
        getKeys: seriesUtil.getSeriesKeys,
        getRangeIndex: seriesUtil.getRangeIndex,
        getTypeValue: seriesUtil.getTypeValue,
        getTypeTitle: seriesUtil.getTypeTitle,
        getTypeWeight: seriesUtil.getTypeWeight,
        getUpdateTime: updater.getUpdateTime,
        group: seriesGroup.SeriesGroup,
        forecastSummary: seriesUtil.forecastSummaryFormat,
        typeIndices: seriesUtil.typeIndices,
        types: seriesUtil.seriesTypes
    },

    setThresholds: thresholds.setThresholds,

    stringUtil: {
        keepAfter: utils.keepAfter,
        keepAfterLast: utils.keepAfterLast,
        keepBefore: utils.keepBefore,
        keepBeforeLast: utils.keepBeforeLast,
        replace: utils.replace,
        capFirst: utils.capFirst,
        capitalize: utils.capitalize,
        coalesce: utils.coalesce,
        ifEmpty: utils.coalesce,
        lowerCase: utils.lowerCase,
        upperCase: utils.upperCase,
        removeBeginning: utils.removeBeginning,
        removeEnding: utils.removeEnding
    },

    thresholds: thresholds.Thresholds,
    trueFunctor: d3.functor(true),
    updater: updater.Updater,
    MetadataLoader: MetadataLoader,
    mdUtils: mdUtils
};
```
