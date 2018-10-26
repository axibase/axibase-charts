# Wildcards

Use wildcards in tag values to retrieve multiple series from the server instead of defining separate series for each tag in the widget configuration.

Specify the `*` wildcard as either `tag` value or `entity` name.

```ls
[series]
  entity = nurswgvml007
  metric = disk_used_percent
    [tags]
      mount_point = *
```

![](./images/wildcard-1.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/b3751e61)

Reference wildcard series from derived series using an `alias`.

![](./images/wildcard-2.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/bf23243d)

Wildcard series are supported in all widgets including Bar Charts which provide a multiple-column setting to place derived series with the same entity and tags into separate columns.

![](./images/wildcard-3.png)

[![](./images/new-button.png)](https://apps.axibase.com/chartlab/a89030db)