# Property Table

## Overview

The **Property Table** displays properties collected by an entity in tabular format.

```ls
[widget]
type = property
timespan = 15 minute

[column]
  key = pid
[column]
  key = %cpu
[column]
  key = size

[property]
  type = process
  entity = nurswgvml007
```

![](./images/property-table.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/47a15ebc)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.
* [Shared Table](../shared-table/README.md#widget-settings) `[widget]` settings are inherited.
* By default, the **Property Table** contains `entity` and `time` columns.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="case"></a>[`case`](#case)|`case = upper`|Define case for column headers.<br>Possible values: `lower`, `upper`|↗
<a name="join"></a>[`join`](#join)|`join = true`|Performs join by `entity` and `type`.<br>`join = entity` performs join by `entity` only.<br>Possible values: `true`, `false`, `entity`.<br>Default value: `false`|[↗](https://apps.axibase.com/chartlab/598f44f3/6/)|
<a name="expand-tags"></a>[`expand-tags`](#expand-tags)|`expand-tags = true`|Show response tags as columns.<br>Useful when exact tags are not known in advance.|[↗](https://apps.axibase.com/chartlab/d7470e6c/2/)|
<a name="hide-column"></a>[`hide-column`](#hide-column)|`hide-column = value <= 0 \| column.key.indexOf('paging') == 0`|Expression based setting.<br>Hide particular columns if all cell values in a column satisfy the condition or if column name matches the pattern.|[↗](https://apps.axibase.com/chartlab/d7470e6c)|

## Column Settings

* The settings apply to the `[column]` section.
* [Shared Table](../shared-table/README.md#column-settings) `[column]` settings are inherited.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="key"></a>[`key`](#key)|`key = iface`|Name of property in JSON that is received from the server.|[↗](https://apps.axibase.com/chartlab/681f535a/6/)|
<a name="tag"></a>[`tag`](#tag)|`tag = addr`|Tag name.|[↗](https://apps.axibase.com/chartlab/681f535a/7/)|
<a name="value"></a>[`value`](#value)|`value = row.tags.addr`|Receive any value which can be written into the property table via JSON.<br>Supported arguments: `this`, `value`, `alert`, `row`, `column`, `widget`, `el`, `rowEl`, `td`, `filter`, `dialog`, `series`.|[↗](https://apps.axibase.com/chartlab/681f535a/8/)|
<a name="format"></a>[`format`](#format)|`format = isoformat = jsonformat = bytes`|Formats cell using the specified [formatting functions](../../syntax/format-settings.md).|[↗](https://apps.axibase.com/chartlab/511b2c80/2/)|
<a name="format-numbers"></a>[`format-numbers`](#format-numbers)|`format-numbers = false`|Disable number formatting.|[↗](https://apps.axibase.com/chartlab/1309a5ab)|
<a name="format-headers"></a>[`format-headers`](#format-headers)|`format-headers=true`|Disable column name formatting.|[↗](https://apps.axibase.com/chartlab/99717743/3/)|

### Property Settings

* The settings apply to the `[property]` section.

Name | Example | Description | &nbsp;
:--|:--|:--|:--
<a name="keys"></a>[`[keys]`](#keys)|`[keys]`<br>`queue = qm1.to.qm3`|One or multiple keys specified as `name = value` pairs under `[keys]` settings.|↗
<a name="type"></a>[`type`](#type)|`type = nmon.command`|Property type.<br>Use `$entity_tags` to retrieve entity tags.|↗
<a name="exactmatch"></a>[`exactMatch`](#exactmatch)|`exactMatch = true`|Exact match selects a record with exactly the same key as requested in `[keys]` settings.<br>Default: `false`.<br>Partial match selects records with key that contains requested fields but can also include other fields.|↗
<a name="keys.manger"></a>[`keys.manager`](#keys.manager)|`keys.manager = 'MGR01' AND tags.queue LIKE 'qm1.*'`|Expression for matching properties with specified keys and tags.<br>Keys are accessed with `keys.{key-name}` and tags with `tags.{tag-name}`.|↗
<a name="limit"></a>[`limit`](#limit)|`limit = 10`|Maximum number of returned records.|↗
<a name="last"></a>[`last`](#last)|`last = true`|Return only records with the update time equal to the maximum update time of matched records.<br>Default: `false`.|↗
<a name="offset"></a>[`offset`](#offset)|`offset = 5000`|Difference, in milliseconds, between maximum update time of matched records and update time of the current record.<br>If the difference exceeds `offset`, the record is excluded from results.|↗
<a name="tag-offset"></a>[`tag-offset`](#tag-offset)|`tag-offset = 15000`|Difference, in milliseconds, between update time of the current record and update time of the tag field.<br>If the difference exceeds `tag-offset`, the tag field is excluded from tags object.|↗

## Examples

### Entity Tags for Entity Group

![](./images/entity-tags-for-entity-groups.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/09255557)

### Default Style

![](./images/default-style.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/fc06d6f0)

### Unix Style

![](./images/class-terminal.png)

[![](../../images/button.png)](https://apps.axibase.com/chartlab/a1b538a8)
