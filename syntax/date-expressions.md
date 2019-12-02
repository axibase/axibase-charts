# Date Expressions

There are several ways to specify value of date setting:

* [date template](./date-format.md)

    ```ls
    start-time = 2016-06-09 00:00:00
    ```

* [calendar keyword](./calendar.md#keywords)

    ```ls
    start-time = next_hour
    ```

* date arithmetic

    ```html
    <base_date> +|- <interval-count> * <interval-unit>
    ```
 
    where `base_date` is specified as [date template](./date-format.md) or [calendar keyword](./calendar.md#keywords)
  
    ```ls
    start-time = 2019-12-02 + 18 hour + 1*minute
    start-time = current_working_day + 18 hour + 1*minute
    ```

Date arithmetic expression is evaluated in timezone of `base_date`, refer to [calendar time zone](./calendar.md#time-zone) and [date template time zone](./date-format.md#time-zone).
