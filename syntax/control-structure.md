# Control Structures

The following control structures are supported: `list`, `var`, `for`, `if`.

## `list` / `endlist`

Assign a list of comma-separated elements, optionally located on multiple lines, to a named array an iterate through the array with a `for` loop.

```ls
list servers = awsswgvml001, nurswgvml003,
  nurswgvml006, nurswgvml007, nurswgvml009
endlist
```

If the elements fit on one line, `endlist` is not required.

```ls
list servers = awsswgvml001, nurswgvml003
```

The `list` command is similar to `var`, without having to quote and enclose the elements in square brackets.

```ls
var servers = ['awsswgvml001', 'nurswgvml003']
list servers = awsswgvml001, nurswgvml003
```

## `var` / `endvar`

`var` assigns an array, object, or function to a variable whose value and fields can be invoked with a placeholder.

If the `var` assignment occupies one line, closing with  `endvar` is not required.

```ls
var disks = [[9,2], [9,3], [8,0], [9,0], [9,1], [8,16]]
for di in disks
    [series]
      [tags]
      major = @{di[0]}
      minor = @{di[1]}
endfor
```

The list of entities can be loaded into a `var` array from the server using the [`getEntities`](./functions.md#getEntities) function.

```ls
var hosts = getEntities('svl-hosts')
for host in hosts
    [series]
      entity = @{host}
endfor
```

## `for` / `endfor`

Iterates over a list created with the `list` command, an array declared with the `var` command or specified inline, or variable properties. To access the current element use the `@{elementname}` placeholder syntax, or in simple cases, `@elementname`.
Multiple `for` or `endfor` loops can be nested.

Create the following visualization which tracks metric `cpu_idle` for entities `nurswgvml010` and `nurswgvml007` using either method.

![](./images/for-server-in-servers.png)

### Iterating Over a List

```ls
list servers = nurswgvml010, nurswgvml007
  for server in servers
  [series]
    entity = @{server}
endfor
```

[![](./images/button.png)](https://apps.axibase.com/chartlab/554e7ab3)

### Iterating Over an Inline Array

```ls
for server in ['nurswgvml010', 'nurswgvml007']
  [series]
    entity = @{server}
endfor
```

[![](./images/button.png)](https://apps.axibase.com/chartlab/081a08ee)

### Iterating Over Object Properties

 Order is arbitrary when using the [`Object.keys()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys) function.

```ls
  var tags = {
  'level': 'ERROR',
  'command': 'com.axibase.tsd.Server',
  'logger': 'com.axibase.tsd.web.DefaultExceptionHandler'
}
  endvar

[widget]
  type = chart
  [series]
    [tags]
      for tag_name in Object.keys(tags):
        @{tag_name} = @{tags[tag_name]}
      endfor
```

### Iterating Over Objects with Named Fields

```ls
var servers = [
  {'name': 'nurswgvml001', 'networks': ['en3', 'en4']},
  {'name': 'nurswgvml002', 'networks': ['en5']}
]
endvar

for server in servers
  [widget] 
    type = box
    entity = @{server.name}
    metric = network_sent_mb  
    for net in server.networks
    [series]
      [tags]
       interface = @{net}  
    endfor
endfor
```

### Iterating Over Object Properties

```ls
var servers = {
    'nurswgvml001': ['en3', 'en4'],
    'nurswgvml002': ['en5']
}
endvar

for server in servers
[widget]
  type = box
  entity = @{server}
  for net in servers[server]
  [series]
    [tags]
      interface = @{net}  
  endfor
endfor
```

### Iterating Over a Multi-Dimensional Array

```ls
var servers = [
      ['nurswgvml001', ['en3', 'en4']],
      ['nurswgvml002', ['en5']]
  ]
endvar

for server in servers
  [widget] 
    type = box
    entity = @{server[0]}
    metric = network_sent_mb  
    for net in server[1]
    [series]
      [tags]
       interface = @{net}  
    endfor
endfor
```

Use `elementname_index` without control symbol `@` and brackets to access current iterator index starting with `0`.

**Example**: Insert `[group]` line for each 4th element in the array.

```ls
for server in servers
  /* add [group] before every 4th element to display 4 widgets per row */
  if server_index % 4 == 0
  [group]
  endif

  [widget]
    entity = @{server}
endfor
```

Similar layout with automated row breaks can be accomplished by specifying the `widgets-per-row` setting under `[group]` level.

```ls
[group]
  widgets-per-row = 4
for server in servers
  [widget]
    entity = @{server}
endfor
```

Text inside placeholder `@{elementname}` is evaluated as an expression and can be used for concatenation and formatting.

```ls
list servers = 001, 003, 006, 007, 009
for server in servers
  [series]
    entity = @{'nurswgvml' + server}
endfor
```

### `if` / `elseif` / `else` / `endif`

Evaluates an expression and prints settings if the expression is `true`. If the expression returns `false`, content located within the branch is excluded from the widget configuration.

Array elements are accessed in the `if` or `elseif` expression by name, not as a placeholder.

```ls
for server in servers
  [series]
    entity = @{server}
    if server == 'nurswgvml007'
      color = red
    elseif server == 'nurswgvml006'
      color = green
    endif
endfor
```

![](./images/if-elseif.png)

[![](./images/button.png)](https://apps.axibase.com/chartlab/2350236d)

## Troubleshooting

To review the final configuration text after pre-processing, add `script = console.log(widgetConfig)` anywhere in the widget configuration and review the text on **Developer Console > Console** page.

```ls
script = console.log(widgetConfig)
```