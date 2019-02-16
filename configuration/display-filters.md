# Display Filters

Both the [`display`](../widgets/shared/README.md#display) and [`enabled`](../widgets/shared/README.md#enabled) settings support boolean expressions to show or hide series based on conditions.

* The `display` setting hides the series from the chart area **and** from the legend.
* The `enabled` setting hides series only from the chart area while retaining it in the legend.

![](./images/display-enabled-1.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/573b3103/3/)

The boolean expressions can compare last values or statistics with a threshold or [rank](../syntax/ranking-functions.md).

## Examples

### Display Top Three Results

```ls
[series]
/* show top-3 series by last value */
display = value >= top(3)
```

![](./images/display-filters-1.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/377091ff)

### Single Day Maximum Exceeds Five

```ls
[widget]
enabled = max('1 day') > 5
```

![](./images/display-filters-2.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/628bc794/1)

### Negation Syntax

Exclude series with `!=` negation syntax.

```ls
[series]
display = tags.mount_point != '/'

[series]
enabled = tags.mount_point == '/'

[series]
tags.mount_point.indexOf('/m') < 0
```

![](./images/display-filters3.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/7518a91f/6/)

### Display by Tag

Calendar display filter.

```ls
[widget]
display = tags.level == 'DEBUG'
```

![](./images/display-filters4.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/04f1ed7c/2/#)

### Series Table

The `display` filter in the series table applies to each cell **separately** and not to the entire row.

The row becomes hidden when all value cells are hidden as well.

```ls
display = value > 200000
```

> The `enabled` setting is ignored by the series table.

![](./images/display-filters-table.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/ca71ab6d/2/)

### Derived Series from Hidden Series

The `display` and `enabled` settings have no impact on the calculated series.

```ls
[series]  
    entity = nurswgvml006
    alias = a

[series]  
    entity = nurswgvml007
    alias = b
    display = false

[series]
    # The result is not affected by hiding the 'b' series
    value = value('a') + value('b')
```

![](./images/display-calculated.png)

[![](../images/button.png)](https://apps.axibase.com/chartlab/9b97ac5e/2/)