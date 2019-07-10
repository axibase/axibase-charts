# Alert Table

## Overview

The **Alert Table** displays a continuously updated list of open [alerts](https://axibase.com/docs/atsd/rule-engine/#open-alerts) or [messages](https://axibase.com/docs/atsd/schema.html#messages), filtered by entity, rule/metric name, and minimum severity.

The rows in the table are color-coded based on the [severity](https://axibase.com/docs/atsd/shared/severity.html) of the underlying record.

```ls
[widget]
  type = console
  source = alert
  entity = nurswgvml007
```

![](./images/alert-console-title-2.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/19350c57)

## Data Source

* If [`source`](#source) is `alert`, retrieves open [alerts](https://axibase.com/docs/atsd/api/data/alerts/query.html).
* If [`source`](#source) is `message`, retrieves [messages](https://axibase.com/docs/atsd/api/data/messages/query.html).

## Widget Settings

* The settings apply to the `[widget]` section.
* [Common](../shared/README.md#widget-settings) `[widget]` settings are inherited.
* [Common Table](../shared-table/README.md#widget-settings) `[widget]` settings are inherited.

### Filters

Name | Description | &nbsp;
:--|:--|:--
<a name="source"></a>[`source`](#source)| Source of records.<br>Possible values: `alert`, `message`.<br>Default value: `alert`.<br>**Example**: `source = message` | [↗](https://apps.axibase.com/chartlab/1461fbb6)
<a name="entity"></a>[`entity`](#entity)| Entity name or pattern.<br>Multiple values can be specified.<br>**Example**: `entity = nurswgvml007`| [↗](https://apps.axibase.com/chartlab/d9a3d42b/4/)
<a name="rule"></a>[`rule`](#rule)| [Rule](https://axibase.com/docs/atsd/rule-engine/) name.<br>Multiple values can be specified.<br>**Example**: `rule = accepts_counter` | [↗](https://apps.axibase.com/chartlab/d9a3d42b/4/)
<a name="metric"></a>[`metric`](#metric)| Metric name.<br>Multiple values can be specified.<br>**Example**: `metric = cpu_busy`| [↗](https://apps.axibase.com/chartlab/d9a3d42b/4/)
<a name="min-severity"></a>[`min-severity`](#min-severity)| Minimum [severity](https://axibase.com/docs/atsd/shared/severity.html) level.<br>Possible values: `0-7` or `UNDEFINED` - `FATAL`.<br>**Example**: `min-severity = ERROR`| [↗](https://apps.axibase.com/chartlab/d9a3d42b/3/)
<a name="limit"></a>[`limit`](#limit)|Maximum number of returned records.<br>Default: `1000`.<br>**Example**: `limit = 100`|[↗](https://apps.axibase.com/chartlab/d9a3d42b/6/)
<a name="severity"></a>[`severity`](#severity)| [Severity](https://axibase.com/docs/atsd/shared/severity.html) codes or names to filter records.<br>Multiple values can be specified.<br>Possible values: `0-7` or `UNDEFINED` - `FATAL`.<br>**Example**: `severity = 6`| [↗](https://apps.axibase.com/chartlab/d9a3d42b/3/)
<a name="message-expression"></a>[`message-expression`](#message-expression)|Include messages that match a filter [expression](https://axibase.com/docs/atsd/api/meta/expression.html).<br>The expression can include fields: `type`, `source`, `tags`, `tags.{name}`, `message`,`severity`.<br>Supported wildcards: `*` and `?`.<br>**Example**: `message-expression = message LIKE 'Starting*'`.| [↗](https://apps.axibase.com/chartlab/00ec8818/1/)

### Date Filter

Date interval filters such as [`timespan`](../shared/README.md#timespan) are applied to the `openDate` field in alerts and to the `date` field in messages.

[![](../../images/button.png)](https://apps.axibase.com/chartlab/d9a3d42b/5/)

### Style

Name | Description | &nbsp;
:--|:--|:--
<a name="class"></a>[`class`](#class)| Display the table as console with black background.<br>Possible values: `terminal`.<br>**Example**: `class = terminal`| [↗](https://apps.axibase.com/chartlab/5d8cb5ad)
<a name="severity-style"></a>[`severity-style`](#severity-style)| Apply severity color to a single column or entire row.<br>Possible settings: `row`, `column`.<br>**Example**: `severity-style = row`| [↗](https://apps.axibase.com/chartlab/71113dee)
<a name="row-style"></a>[`row-style`](#row-style)| CSS style applied to the entire row.<br>Can be specified as text or a JavaScript expression.<br>Can be used to filter records.<br>**Example**: `row-style = if (value <= 100) return 'display: none'` | [↗](https://apps.axibase.com/chartlab/470ea887)
<a name="on-click"></a>[`on-click`](#on-click)| Built-in or custom function triggered on click.<br>**Example**: `on-click = filter()`| [↗](https://apps.axibase.com/chartlab/f7d929c9)
<a name="new-row-color"></a>[`new-row-color`](#new-row-color)|Highlight left border of rows, which have [`date`](https://axibase.com/docs/atsd/api/data/messages/query.html#fields-2) or [`lastEventDate`](https://axibase.com/docs/atsd/api/data/alerts/query.html#fields-2) greater than <code>now - [update-interval](../../widgets/shared/README.md#update-interval)</code>, with specified color.<br>Possible value: color name or hex code.<br>Recommended color picking tools: [`colorhexa`](https://www.colorhexa.com/ffffff-to-0c9150), [`material.io`](https://material.io/design/color/#tools-for-picking-colors).<br>**Example**: `new-row-color = red`|[↗](https://apps.axibase.com/chartlab/1461fbb6/7/)

## Default Columns

The list of default columns depends on the `source` setting:

* `message` columns: `Severity`, `Time`, `Entity`, `Type`, `Source`, `Tags`, `Message`
* `alert` columns: `Severity`, `Open`, `Changed`, `Count`, `Entity`, `Rule`, `Metric`, `Tags`, `Text`

To display tags as separate columns, set [`expand-tags`](../shared-table/README.md#expand-tags) setting to `true`.

## Examples

### Difference Sources

![](./images/source-configuration-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/33131632)

### Audio Alert

[![](../../images/button.png)](https://apps.axibase.com/chartlab/e69d9589)

### Row Severity

![](./images/severity-style-row-1.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/63840538)
