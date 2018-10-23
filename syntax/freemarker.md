# FreeMarker Collection

The following document provides examples on how to convert FreeMarker lists and arrays to native Chart [collections](control-structures.md).

## Introduction

FreeMarker is a Java templating engine supported in Axibase Charts for the purpose of removing duplicate code in widget configurations. FreeMarker is now deprecated in Axibase Charts and is gradually replaced with native client-side collections and functions which do not require a Java server.

[FreeMarker](https://freemarker.apache.org/docs/dgui_quickstart_template.html) code snippets can be included in Chart configurations using `<#` and `>` tags and `${name}` placeholders.

When the portal is requested by the client, the server searches the document for FreeMarker code fragments, evaluates each fragment and replaces each fragment with the actual value.

Example:

```ls
<#assign server = "ABC">
[widget]
  title = ${server}
```

The above text is converted to:

```ls
[widget]
  title = ABC
```

* New variables are defined using the `assign` keyword.
* Variable can be printed out by referencing its name in curly brackets, for example `${user}`.

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

Note that placeholders are accessed in Charts using `@{name}` syntax (`@` symbol) as opposed to `${name}` in FreeMarker.

> The closing `endlist` keyword is required only if the list elements are defined on multiple lines.

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