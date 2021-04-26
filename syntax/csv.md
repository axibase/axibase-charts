# CSV

`csv` block creates a list of objects with the same properties from a tabular text.

```ls
csv metrics = keyword,identifier
  Consumer Price Index,CPIAUCSL
  Real Gross National Product,A001RO1Q156NBEA
  National income,A032RC1A027NBEA
  Corporate Profits Before Tax,A464RC1A027NBEA
  GDP per Capita,A939RC0A052NBEA
  Average Sale Price of Houses,ASPUS
  Capacity Utilization,CAPUTLB50001SQ
  Cash Surplus or Deficit(% GDP),CASHBLUSA188A
endcsv
```

The list of objects can be iterated to create inline [drop-down list](../configuration/drop-down-lists.md) or [labeling pattern](./label-formatting.md) using [`for`](./control-structures.md#for) statements.

```ls
for m in metrics
  [option]
    text = @{m.keyword}
    value = @{m.identifier}
endfor
```

## Modes

### Inline Text

```ls
csv name = header1, header2 ...
cell11, cell12 ...
cell21, cell22 ...
...
endcsv
```

Parses tabular text placed between `csv name =` and `endcsv` keywords into an array of objects.

**Scope of Usage**:

Use in the `preprocessor` stage.

**Example**:

There are two columns, `name` (name of the country) and `value2006` (value in the year 2006):

```ls
csv countries =
  name, value2006
  Brazil, 13.2
  Croatia, 4.9
  "Micronesia, Federated States of", 100
  Georgia, 48.2
  Tonga, 40.8
  Honduras, 38
  Liechtenstein, 5.9
  "Congo, Dem. Rep. of the (Kinshasa)",44.2
endcsv
```

This CSV is transformed into the following array:

<details>
<summary>show array</summary>

```json
[
    {
        "name":"Brazil",
        "value2006":"13.2"
    },
    {
        "name":"Croatia",
        "value2006":"4.9"
    },
    {
        "name":"Micronesia, Federated States of",
        "value2006":"100"
    },
    {
        "name":"Georgia",
        "value2006":"48.2"
    },
    {
        "name":"Tonga",
        "value2006":"40.8"
    },
    {
        "name":"Honduras",
        "value2006":"38"
    },
    {
        "name":"Liechtenstein",
        "value2006":"5.9"
    },
    {
        "name":"Congo, Dem. Rep. of the (Kinshasa)",
        "value2006":"44.2"
    }
]
```

</details>

Iterate over the newly created array and set the value and entity based on retrieved country `name` and `value2006`:

```ls
for country in countries
    [series]
      # The return value is the difference between the current year value and the 2006 value.
      replace-value = value - @{country.value2006}
      [tags]
        country = @{country.name.replace(",", "\\,")}
endfor
```

[![](./images/csv-inline.png)](https://apps.axibase.com/chartlab/df616dfa/8/)

### Load From URL

```ls
csv csv_name from url
```

Parse a CSV file located at the defined URL into an array of objects.

**Scope of Usage**:

Use in the `preprocessor` stage.

**Example**:

The file is loaded in CSV format.

```txt
country,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016
Brazil,13.2,9.6,5.5,7,5.2,3.8,3.2,3.5,3.2,5.36,16.7
Croatia,4.9,5.1,5.1,5.3,5.3,6.3,4.4,5.9,6.1,5.29,6.78
"Micronesia, Federated States of",100,0,50,100,0,33.3,50,100,80,85.71,25
...
```

Load and parse the file:

```sh
csv rows from https://raw.githubusercontent.com/axibase/atsd-use-cases/master/USVisaRefusal/Resources/visa-refusal.csv
```

<details>
<summary>show array</summary>

```json
[
    {
        "2006":"13.2",
        "2007":"9.6",
        "2008":"5.5",
        "2009":"7",
        "2010":"5.2",
        "2011":"3.8",
        "2012":"3.2",
        "2013":"3.5",
        "2014":"3.2",
        "2015":"5.36",
        "2016":"16.7",
        "country":"Brazil"
    },
    {
        "2006":"4.9",
        "2007":"5.1",
        "2008":"5.1",
        "2009":"5.3",
        "2010":"5.3",
        "2011":"6.3",
        "2012":"4.4",
        "2013":"5.9",
        "2014":"6.1",
        "2015":"5.29",
        "2016":"6.78",
        "country":"Croatia"
        ...
    },
```

</details>

Iterate over the created array and set the value and entity based on the retrieved country `name` and value or year `2006`:

```ls
for row in rows
  [series]
    # The return value is the difference between the current year value and the 2006 value.
    replace-value = value - @{row[2006]}
    [tags]
      country = @{row.country.replace(",", "\\,")}
endfor
```

[![](./images/csv-mode.png)](https://apps.axibase.com/chartlab/b00d77c0)

## Parsing Rules

* The first line must contain the header with column names.
* Each data line is parsed into the object, where keys are column names and values are the values of corresponding cells.
* The delimiter symbol is comma `,`.
* Empty lines are ignored, cell text is trimmed to remove non-printable characters.
* To escape spaces or commas, enclose cell value in double quotes `"`.
* Cell value must not contain double quotes `"`.
* Multi-line cell values are not supported.

## Functions

The CSV list provides a convenience methods to retrieve values at the `preprocessor` stage in `var`, `if`, `if else`, `for .. in`, `@{}` expressions.

Name|Description / Example
---|---
`list_name.values(string column_name)`|Returns a sorted array of unique values in the column defined by the `column_name`.<br> The generated array contains the [`escape()`](./control-structures.md#listescape) method which [escapes](#get-escaped-values) commas in each element. [↗](https://apps.axibase.com/chartlab/e7ce2234 "View in Chart Lab")
`list_name.get(string key_column_name, string key_column_value)`|Returns row from CSV list, corresponding to `key_column_name + key_column_value`. Returns undefined, if now row matches a key.
`list_name.get(string key_column_name, string key_column_value, string column_name)`|Returns value of cell corresponding to `column_name` in row, matching to `key_column_name + key_column_value`. Returns undefined, if now row matches a key.

## Additional Examples

### Get Escaped Values

The target behavior is to retrieve a list of escaped country names.

Compose the inline CSV:

```txt
csv countries =
  name, value2006
  Brazil, 13.2
  Croatia, 4.9
  "Micronesia, Federated States of", 100
  Georgia, 48.2
  Tonga, 40.8
  Honduras, 38
  Liechtenstein, 0
  "Congo, Dem. Rep. of the (Kinshasa)",44.2
endcsv

country = @{countries.values('name').escape()}
```

The CSV is transformed into the array:

<details>
<summary>show array</summary>

```json
[
    {
        "name":"Brazil",
        "value2006":"13.2"
    },
    {
        "name":"Croatia",
        "value2006":"4.9"
    },
    {
        "name":"Micronesia, Federated States of",
        "value2006":"100"
    },
    {
        "name":"Georgia",
        "value2006":"48.2"
    },
    {
        "name":"Tonga",
        "value2006":"40.8"
    },
    {
        "name":"Honduras",
        "value2006":"38"
    },
    {
        "name":"Liechtenstein",
        "value2006":"5.9"
    },
    {
        "name":"Congo, Dem. Rep. of the (Kinshasa)",
        "value2006":"44.2"
    }
]
```

</details>

Retrieve values of the column `name`:

```ls
var names = countries.values('name')
```

Returned values are as follows:

```json
["Brazil","Congo, Dem. Rep. of the (Kinshasa)","Croatia","Georgia","Honduras","Liechtenstein","Micronesia, Federated States of","Tonga"]
```

Iterate over each value and set the country tag.

```ls
for country_name in names
  [series]
    [tags]
      country = @{country_name.replace(',', '\\,')}
endfor
```

[![](./images/escape-csv.values.png)](https://apps.axibase.com/chartlab/e7ce2234)
