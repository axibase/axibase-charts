# Date Expressions

There are several ways to specify the start and end of the selection interval (`start-time` and `end-time` settings):

* [Literal date value](./date-format.md):

    ```ls
    start-time = 2016-06-09 00:00:00
    ```

* [Calendar keyword](./calendar.md#keywords):

    ```ls
    start-time = next_hour
    ```

* Calendar expression:

    ```html
    <base_time> +|- <interval-count> * <interval-unit> [ +|- <interval-count> * <interval-unit> ]
    ```

    where `base_time` is specified as [literal date](./date-format.md) or [calendar keyword](./calendar.md#keywords).
  
    ```ls
    start-time = 2019-12-02 + 18 * hour
    start-time = current_working_day + 18 * hour + 10 * minute
    ```

The expression is evaluated based on the [`timezone`](./date-format.md#time-zone) setting. If the time zone is not explicitly set, the browser time zone is used.
