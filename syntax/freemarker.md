# FreeMarker Collection

The following document provides examples on how to convert FreeMarker lists and arrays to native Chart [collections](control-structures.md).

## Introduction

FreeMarker is a Java templating engine supported in Charts applications to remove duplicate code in widget configurations. **FreeMarker is now deprecated in Axibase Charts** and is gradually being replaced with native client-side collections and functions which do not require a Java server.

[FreeMarker](https://freemarker.apache.org/docs/dgui_quickstart_template.html) code snippets can be included in Chart configurations using `<#` and `>` tags and `${name}` placeholders.

When a portal is requested by the client, the server searches the document for FreeMarker code fragments, evaluates each fragment and replaces each fragment with the actual value.

**Example**:

```ls
<#assign server = "Server-198">
[widget]
  title = ${server}
```

The above text is converted to:

```ls
[widget]
  title = Server-198
```

* New variables are defined using the `assign` keyword.
* Print variables by referencing the name in curly brackets, for example `${user}`.

## List

* FreeMarker

```ls
<#assign servers = [
  ["host1"]
 ,["host2"]
 ,["host3"]
]>  

<#list servers as srv>
  [series]
    entity = ${srv}
</#list>
```

* Native [`list`](control-structures.md#list)

```ls
list servers = host1,
  host2,
  host3
endlist

for srv in servers
  [series]
    entity = @{srv}
endfor
```

> Note that placeholders are accessed in Charts using `@{name}` syntax (`@` symbol) as opposed to `${name}` in FreeMarker.

## Array

* FreeMarker

```ls
<#assign servers = [
  ["host1", "APP"]
 ,["host2", "DB"]
 ,["host3", "WEB"]
]>  

<#list servers as srv>
  [series]
    entity = ${srv[0]}
    label = ${srv[1]}
</#list>
```

* Native [`csv`](control-structures.md#csv)

```ls
csv servers = host,role
  host1,APP
 ,host2,DB
 ,host3,WEB
endcsv

for item in servers
  [series]
    entity = @{item.host}
    label = @{item.role}
endfor
```

* Native [`var`](control-structures.md#var)

```ls
var servers = [
  ["host1", "APP"]
 ,["host2", "DB"]
 ,["host3", "WEB"]
]
endvar

for item in servers
  [series]
    entity = @{item[0]}
    label = @{item[1]}
endfor
```

## [`hasMetric()`](https://github.com/axibase/atsd/blob/master/portals/freemarker.md#freemarker-expressions-summary-table)

* FreeMarker

```ls
<#assign collectdEnabled = hasMetric( "${entity}","collectd.cpu")>
```

* Native [`getMetrics()`](./functions.md#getmetrics)

```ls
var collectdEnabled = getMetrics("${entity}","name='collectd.cpu'").length > 0
```

## [`getTags()`](https://github.com/axibase/atsd/blob/master/portals/freemarker.md#freemarker-expressions-summary-table)

* FreeMarker

```ls
<#assign file_systems = getTags("volume_usage", "${entity}", "name", 4) >
```

* Native [`getTags()`](./functions.md#gettags)

```ls
var file_systems = getTags("volume_usage", "name", "${entity}", "now - 4 * hour")
```
