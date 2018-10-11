# Property Table

## Overview

The **Property Table** displays properties collected by an entity in tabular format.

```ls
[widget]
type = property

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

[![](../../images/button.png)](https://apps.axibase.com/chartlab/a0e3a687)

## Widget Settings

* The settings apply to the `[widget]` section.
* [Shared](../shared/README.md#widget-settings) `[widget]` settings are inherited.
* [Shared Table](../shared-table/README.md#widget-settings) `[widget]` settings are inherited.
* By default, the **Property Table** contains `entity` and `time` columns.

Name | Description | &nbsp;
:--|:--|:--
<a name="join"></a>[`join`](#join)|Join by `entity` and `type`.<br>`join = entity` joins by `entity` only.<br>Possible values: `false`, `true`, `entity`.<br>Default value: `false`.<br>**Example**: `join = true`.|[↗](https://apps.axibase.com/chartlab/74da0392)
<a name="expand-tags"></a>[`expand-tags`](#expand-tags)|Show response tags as columns.<br>Useful when exact tags are unknown.<br>**Example**: `expand-tags = true`.|[↗](https://apps.axibase.com/chartlab/1ef51a50)
<a name="hide-column"></a>[`hide-column`](#hide-column)|Hide columns based on [expression](https://axibase.com/docs/atsd/api/meta/expression.html).<br>Column is hidden when the expression is `true`.<br>**Example**: `hide-column = value <= 0`. |[↗](https://apps.axibase.com/chartlab/0e32ca71)
<a name="class"></a>[`class`](#class)| Unix-style console with black background.<br>Possible values: `terminal`.<br>**Example**: `class = terminal`.| [↗](https://apps.axibase.com/chartlab/bb9fb175)

## Column Settings

* The settings apply to the `[column]` section.
* [Shared Table](../shared-table/README.md#column-settings) `[column]` settings are inherited.

Name | Description | &nbsp;
:--|:--|:--
<a name="key"></a>[`key`](#key)|Property name in server JSON response.<br>**Example**: `key = iface`.|[↗](https://apps.axibase.com/chartlab/a37ebd8e)
<a name="tag"></a>[`tag`](#tag)|Tag name in server JSON response.<br>**Example**: `tag = addr`.|[↗](https://apps.axibase.com/chartlab/6ee401c6)
<a name="value"></a>[`value`](#value)|Value which is writable to the JSON response property table.<br>Supported arguments: `this`, `value`, `alert`, `row`, `column`, `widget`, `el`, `rowEl`, `td`, `filter`, `dialog`, `series`.<br>**Example**: `value = value > 1.0`.|[↗](https://apps.axibase.com/chartlab/5a79a608)
<a name="format"></a>[`format`](#format)|Formats cell using the specified [formatting functions](../../syntax/format-settings.md).<br>**Example**: `format = percent`.|[↗](https://apps.axibase.com/chartlab/60f38f69)
<a name="format-numbers"></a>[`format-numbers`](#format-numbers)|Value number formatting.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `format-numbers = true`.|[↗](https://apps.axibase.com/chartlab/f32ee922)
<a name="format-headers"></a>[`format-headers`](#format-headers)|Column header formatting.<br>Possible values: `false`, `true`.<br>Default value: `true`.<br>**Example**: `format-headers = true`.|[↗](https://apps.axibase.com/chartlab/9b9f9f90)

### Property Settings

* The settings apply to the `[property]` section.

Name | Description | &nbsp;
:--|:--|:--
<a name="type"></a>[`type`](#type)|Property type.<br>`$entity_tags` retrieves entity tags.<br>**Example**: `type = nmon.command`.| [↗](https://apps.axibase.com/chartlab/f5686991)
<a name="exact-match"></a>[`exact-match`](#exact-match)|Select only records with exactly the same key as requested in [`[keys]`](#keys-settings) section.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>Partial match selects records with key that contains requested fields but can also include other fields.<br>**Example**: `exact-match = true`.|[↗](https://apps.axibase.com/chartlab/da5f2066)
<a name="keys-tag-expression"></a>[`key-tag-expression`](#keys-tag-expression)|Expression for matching properties with specified keys and tags.<br>Keys are accessed with `keys.{key-name}` and tags with `tags.{tag-name}`.<br>**Example**: `keys.manager = 'MGR01' AND tags.queue LIKE 'qm1.*'`.| [↗](https://apps.axibase.com/chartlab/266e32eb)
<a name="limit"></a>[`limit`](#limit)|Maximum number of returned records.<br>**Example**: `limit = 10`.|[↗](https://apps.axibase.com/chartlab/7cc3c6cc)
<a name="last"></a>[`last`](#last)|Return only records with the update time equal to the maximum update time of matched records.<br>Possible values: `false`, `true`.<br>Default value: `false`.<br>**Example**: `last = true`.|[↗](https://apps.axibase.com/chartlab/11f2baf7)
<a name="offset"></a>[`offset`](#offset)|Difference, in milliseconds, between maximum update time of matched records and update time of the current record.<br>If the difference exceeds `offset`, the record is excluded from results.<br>**Example**: `offset = 6000`.|[↗](https://apps.axibase.com/chartlab/7c7de881)

### Keys Settings

* The settings apply to the `[keys]` section.

Name | Description | &nbsp;
:--|:--|:--
<a name="key"></a>[`key`](#key)|One or multiple keys specified as `key = value` pairs.<br>**Example**: `queue = qm1.to.qm3`.| [↗](https://apps.axibase.com/chartlab/266e32eb)

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
