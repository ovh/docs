---
title: "Lakehouse Manager Dataset connector"
updated: 2025-02-15
---

## Objective

> [!primary]
> Using Dataset connector, you may query, insert, update or delete content programmatically.

* [Connect to the Lakehouse Manager](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#connect-to-the-data-manager)
* [Lakehouse Manager Connector methods](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#data-manager-connector-methods)
    * [list()](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#list)
    * [query(sql, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#querysql-limit-1-return_type39dataframe39)
    * [select(table_name, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#selecttable_name-conds-limit-1-return_type39dataframe39-)
    * [update(table_name, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#updatetable_name-set-condsnone-ignorefalse)
    * [delete(table_name, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#deletetable_name-conds)
    * [truncate(table_name)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#truncatetable_name)
    * [insert(table_name, rows, ...)](/pages/public_cloud/data_platform/technical/sdk/dpe/connectors/connect-dm#inserttable_name-rows-odku0-returnwarningsfalse)

## Connect to the Lakehouse Manager

In order to create a Connector and use it to interact with a [Lakehouse Manager table](/pages/public_cloud/data_platform/product/lakehouse-manager/00-lakehouse-manager-index), you can connect to the **Default Dataset Tables**  or to **Custom Dataset Tables**. 

Below, you will see the connection strings used for each type: 

```python
from forepaas.dwh import connect

cn_prim = connect("dwh/data_prim/")
cn_custom = connect("dwh/custom_dataset_name/")
```

After that you can use the `Connector.list()` method to see the tables available in your Lakehouse Manager and then `Connector.select(...)` or `Connector.query(...)` to get the data from the table you want.

See the next section of this article for additional details.

> [!warning]
> Note that **tables need to be loaded in the DPE** before using the `Connector.list()` method and other Connector object methods. In other words, you have to create and run a load action in the DPE in order to use a table in the SDK.

## Lakehouse Manager Connector methods

### list()
Get the list of tables in the dataset.

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| list | list of table names | ```["chicago_calendar_full", "stations_rides"]``` |

### query(sql, limit=-1, return_type='dataframe')

Execute a SQL query on a compatible `source`, returns a dataframe (default), an iterable cursor, or a list of dict.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| sql   | str| SQL query to execute | ```select * from stations_rides``` |
| limit | int | maximum number of results (-1: no limit) | -1 |
| return_type | str | type of return | 'dataframe', 'cursor' or 'dict' |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| mixed | results in the choosen type (dataframe, cursor, list[dict] |      |

### select(table_name, conds={}, limit=-1, return_type='dataframe' )

Extract data from a table with simple filters, returns a dataframe (default), an iterable cursor, or a list of dict.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| table_name | str | source table name | `stations_rides` |
| conds | dict | Dict of values to use as filters. `Keys` are attributes to filter with `values` as the filtering values. `List` produces a IN operator, otherwise produce a `=` operator | None / ```{"date":["01/11/2013", "01/12/2013"], "station_name":"Harlem-Lake"}``` |
| limit | int | maximum number of results. (-1: no limit) | -1 |
| return_type | string | type of return | 'dataframe', 'cursor' or 'dict' |

**Output**

| Type  | Description | Example |
| :---: | :---        | :---    |
| mixed | results in the choosen type (dataframe, cursor, list[dict] |      |

### update(table_name, set, conds=None, ignore=False)

Performs an `UPDATE` SQL query through simple parameters and return the number of affected rows.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| table_name | str | name of the source table | `'stations_rides'` |
| set | dict | Dict of values to update. Key as the field name to update, values as the value to update. | ```{“rides”:0}``` |
| conds | dict | Dict of values to use as filters. `Keys` are attributes to filter with `values` as the filtering values. `List` produces a IN operator, otherwise produce a `=` operator | None / ```{"date":["01/11/2013", "01/12/2013"], "station_name":"Harlem-Lake"}``` |
| ignore | boolean | If `True`, performs an `UPDATE IGNORE` query. Otherwise `UPDATE` query. | `True`, `False` |

**Outputs**

| Type  | Description | Example |
| :---: | :---        | :---    |
| int   | Number of updated rows (if DBMS compatible) | 42 |

### delete(table_name, conds)

Performs a deletion based on a specific query with filtering conditions. Returns the number of deleted rows.  
If you don’t need any filter, use the `truncate` method described below.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| table_name | str | name of the source table | `'stations_rides'` |
| conds | dict | Dict of values to use as filters. `Keys` are attributes to filter with `values` as the filtering values. `List` produces a IN operator, otherwise produce a `=` operator | ```{"station_name":"Harlem-Lake"}``` |

**Outputs**

| Type  | Description | Example |
| :---: | :---        | :---    |
| int   | Number of deleted rows (if DBMS compatible) | 42 |

### truncate(table_name)
Truncates (clears) all rows from a table.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| table_name | str | name of the source table | `'stations_rides'` |

**Outputs**

| Type  | Description | Example |
| :---: | :---        | :---    |
| boolean | True if truncate succeeded. False if table does not exist. Raise Exception if anything else occurred. | `True`, `False` |

### insert(table_name, rows, odku=0, returnWarnings=False)

Executes an insert query, adds `on duplicate key update` (ODKU) operation optionally, and returns statistics about the insertion of the batch.  
If you activate the ODKU option, the query will automatically performs updates on existing rows instead of returning errors, regarding the existing primary key values in each row that you are inserting.

> [!warning]
> Please note that you **MUST** provide, for each row that you want to insert, at least the primary key of the destination table.

> [!primary]
> We encourage you to use the module **bulk_insert** instead of this function as described [here](https://forepaas-sdk.readthedocs.io/en/latest/packages/connector.html?highlight=bulk_insert#bulk-insert) as this module has a better management of data chunk and insertion management.

**Input Parameters**

| Name  | Type  | Description | Example |
| :---  | :---: | :---        | :---    |
| table_name | str | name of the source table | `'stations_rides'` |
| rows | dataframe | Dataframe to insert or update. | ```pd.DataFrame([ {"station_id": 1, "station_name":"First Station"}, {"station_id":2, "name":"Second Station"}])``` |
| odku | boolean  | `False` = Don’t perform an ODKU; `True` = Performs an ODKU | `True`, `False` |
| returnWarnings | boolean | If True, return warnings aggregated and counted for each type of warning strings returned | True / False |

**Outputs**

| Type  | Description | Example |
| :---: | :---        | :---    |
| dict | Statistics about the inserted batch. | ```{"inserts":13, "skipped":10, "updates":3, "records": 30, "affected":4, "warnings": {"integer truncated":4}}``` |

### Complementary notes

Due to lacks of metrics collected by PostgreSQL or Snowflake libraries, the statistics returned by ForePaaS connectors are calculated based on limited factors.
- When no error happens, *inserts* and *skipped* rows are calculated based on total rows before and after inserting, as well as the *records* (length of data to insert) provided. For example, if we try to insert 3 rows into a table of 5 rows, and the result is 7 rows in total, we consider 2 rows are *inserted* and 1 row *skipped*, while *records* is 3.
- If error happens in a batch of data, the whole batch will be marked as warnings.
- Note for Snowflake: statistics returned by `insert_many()` and `insert_dataframe()` wont have *warnings* calculated, all rows fail to insert or skipped will be marked as *skipped*

## Go further

Join our [community of users](/links/community).