# Show external widget in ATSD Portal

This page describes steps to add a `Page` widget in ATSD Portal.

## Step 1. Create directory for the resource files

```sh
mkdir -p /opt/atsd/atsd/conf/portal/web/JavaScript
```

## Step 2. Load and copy dependencies

Copy exteranal libraries and our [atsdClient](../resources/atsdClient.bundle.js) into the `/opt/atsd/atsd/conf/portal/web/JavaScript` directory.

```sh
curl https://code.jquery.com/jquery-1.9.1.js > /opt/atsd/atsd/conf/portal/web/JavaScript/jquery-1.9.1.js
curl https://raw.githubusercontent.com/axibase/charts/master/resources/atsdClient.bundle.js > /opt/atsd/atsd/conf/portal/web/JavaScript/atsdClient.bundle.js
curl https://code.highcharts.com/highcharts.js > /opt/atsd/atsd/conf/portal/web/JavaScript/highcharts.js
curl https://code.highcharts.com/modules/funnel.js > /opt/atsd/atsd/conf/portal/web/JavaScript/funnel.js
curl https://code.highcharts.com/modules/exporting.js > /opt/atsd/atsd/conf/portal/web/JavaScript/exporting.js
```

## Step 3. Check all dependencies are loaded

```sh
ll /opt/atsd/atsd/conf/portal/web/JavaScript
```

The output should be like in the following listing.

```sh
-rw-r--r-- 1 axibase axibase   3994 Oct 30 14:12 atsdClient.bundle.js
-rw-r--r-- 1 axibase axibase   9390 Oct 30 14:12 exporting.js
-rw-r--r-- 1 axibase axibase   2200 Oct 30 14:12 funnel.js
-rw-r--r-- 1 axibase axibase 192891 Oct 30 14:12 highcharts.js
-rw-r--r-- 1 axibase axibase 268381 Oct 30 14:12 jquery-1.9.1.js
```

## Step 4. Create HTML page, which should be displayed in ATSD Portal

```sh
curl https://raw.githubusercontent.com/axibase/charts/master/resources/funnel.html
```

Now you can access this page by URL `{https://your.atsd.host}/portal/resource/web/funnel.html`.

## Step 5. Create configuration of the Portal

```
[configuration]
  width-units = 2
  height-units = 1
  update-interval = 0

[group]
  [widget]
    type = chart
    timespan = 5 minute
    mode = column
    multiple-series = true
    format = fixed(3)
    entity = atsd
    [series]
      metric = disabled_metric_received_per_second
    [series]
      metric = filtered_metric_received_per_second
    [series]
      metric = non_persistent_metric_received_per_second

  [widget]
    type = page
    url = /portal/resource/web/funnel.html
```

The rendered Portal will be like the following.

![](images/funnelChart.png)