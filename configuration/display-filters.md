# Display Filters

Both the [`display`](../widgets/shared/README.md#display) and [`enabled`](../widgets/shared/README.md#enabled) settings support expressions in addition to boolean values, and are used to show or hide series based on conditions. `display` hides series from view **and** from the legend, and `enabled` hides series from view **but** shows them in the legend in disabled state.

These expressions can compare the series last value or statistics with a threshold or multi-series percentile [rank](../syntax/ranking-functions.md).

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