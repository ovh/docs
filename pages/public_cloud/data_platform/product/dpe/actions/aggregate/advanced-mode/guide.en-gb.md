---
title: "Advanced mode for the Aggregate action"
updated: 2025-02-15
---

## Objective

Switching to advanced mode on the header of your action editor (DPE > Actions > New Action > Aggregate) in the DPE lets you **go further in customizing the Aggregate action**, by displaying and working directly in a JSON configuration file. The JSON files offer more flexibility and access to all options for Aggregate actions.

The JSON configuration file for an Aggregate action is composed of higher level objects which are mandatory. This includes:

* [**Sources**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#sources): Defined the source tables used to load the data from.
* [**Grouping**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#grouping): Define by which dimension the data will be grouped by based on the primary keys of the destination table.
* [**Schema**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#schema): Defines the individual mapping between the destination table and the source tables.
* [**Join**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#join): Defines the tentative joining conditions in the case where there are multiple sources.
* [**Destination**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#destination): Defines in which table we will be loading the output data from the Aggregate action.

Other optional parameters can be added as well, we will cover that in specific section [**Other optional parameters**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#other-optional-parameters) which include for instance the segmentation, perimeter or transformation rules.

## Sources

**Format**: The JSON contains a string value which points to the source and optional additional parameters. The source path looks like that: `dwh/database_name/table_name`, where `database_name` is the name of the source location (source or coming from Data Manager) and `table_name` the name of the source object or the object in the schema of Data Manager.

**JSON key**: `params.load_from[0].source` or `params.load_from.source`

Example:

```
"load_from" : [
    {
        "source" : "dwh/data_prim/prim_calendar",
        "force_utf8" : true
    }
]

load_from" : {
        "source" : "dwh/data_prim/prim_calendar",
        "force_utf8" : true
}
```
 
> [!warning]
>  **Tip**: You can alias tables by adding a space after the table_name then the character(s) for the table alias. For instance: "source": "dwh/source_facebook/lifetime_insights fb_i". This will alias the `lifetime_insights` table by `fb_i`. So you can reuse this alias in joins and schema.

## Grouping

Scaling determines how granular the data will be aggregated. This helps in particular for the constitution of data to insert into aggregation tables.

**Format**: This is a JSON list of attributes or SQL rules to determine the grouping granularity.

**JSON key**: `params.scale`

Example:

```
{
"load_from": {
  "source": "dwh/data_prim/prim_facebook"
},
"scale": ["date","page_id"],
…
```

This will aggregate the number of `fb_fans` by `date` and `page_id`

> [!primary]
> Implementing a scale will generate a GROUP BY operation in the SQL extraction query. In this example: GROUP BY `page_id`, date.

## Schema

The schema determines the renaming between the name of the fields as present in the source, to the naming that these fields must have in the destination.

**Format**: the schema object contains a series of JSON objects, in which each key is the name of an attribute of the destination, and the value contains the parameters associated with the attribute.

**JSON key**: `params.schema`

Example:

```
{
"schema": {
    "month": {
      "table": "ref_month",
      "operation": "SELECT",
      "type": "default",
      "attribute": "month"
    },
    "vegetables": {
      "type": "sql",
      "sql": "CONCAT(\"HELLO : \", prim_calendar.legumes)"
    },
    "season": {
      "type": "replace",
      "value": "hello"
    }
}
```

There are 3 different types of mapping:

* type:`default` : to map one attribute to another without any transformation
    * `table` the original source object of the attribute
    * `attribute`  source attribute to map from
    * `operation`  represents the SQL operation types mentioned in SQL operation section. (only for sql-like sources).
* type:`replace` : will put a hard-coded value in all destination rows.
    * `value`: this attribute will be filled with the value for all destination rows about to be inserted/updated
* `type`:"sql" : the following sql formula will be applied (only for sql-like sources).
    * `sql`  the value is an SQL statement.

## Join

Joins are only possible between tables present in the same database or in the same database instance (for example, only tables of `data_prim` or `data_mart`).

**Format**: A list of JSON objects, each representing a JOIN statement. The order of the objects is the order of JOIN action sequence.

**JSON key**: `params.joins`

Example:

```{
"joins": [
    {
      "table": "ref_month",
      "type": "LEFT",
      "condition": "prim_calendar.month_number = ref_month.month_number"
    },
    {
      "table": "ref_saison",
      "type": "LEFT",
      "condition": "prim_calendar.month_number = ref_season.season_number"
    }
  ]
```

* `table`: the table to join the source
* `type`: join type mentioned in join section
* `condition`: the join condition, which follows the ON keyword in SQL statement 

## Destination

Destination represents the location where action data will be injected.

**Format**: Its path looks like this: `dwh/database_name/table_name`. Where database_name is the name of the destination database (`data_prim` or `data_mart`) and `table_name` the name of the destination table in the Data Manager schema. 

**JSON key**: `params.load_to[source]`

Example:

```{
"load_to": {
    "source": "dwh/data_prim/tmp_calendar",
    "force_utf8": true
  }
```

Note that you can fill in multiple destinations at once:

```{
"load_to": [
    {"source": "dwh/data_prim/prim_facebook"},
    {"source": "dwh/data_prim/tmp_facebook"},
  ]
```

## Other optional parameters

### Extract_chunk_size

`extract_chunk_size` is an integer value which represents the maximum allowed size at once for extracting data.

Example:

```{
"extract_chunk_size": 5000
```

This will allow the worker to extract data with batches of 5000 lines.

**JSON key**: `params.load_from[0].extract_chunk_size`

#### Source_rules

`source_rules` represents the rule for simple data preparation. This setting will override the existing rules synchronized from DWH. They will be applied to attributes from the source. For instance let's assumer we would like to apply transformation rules to the attribute `date_source`.

**Format**: A list contains JSON objects, where each represents a rule applied to an attribute.

**JSON key**: `params.load_from[source_rules]`

Example:

```{
  "source_rules": [
  {
    "action": "date_replace",
    "action_values": [
    "%d/%m/%Y %H:%i:%s",
    "%Y-%m-%d %H:%M:%S"
    ],
    "attribute_name": "date_source",
    "name": "correct date format"
  }
]
```

For detailed configuration documentation, please refer to the article on blueprint rules

#### Rules

Rules are similar to source_rules except that they will be applied to the destination attribute instead of the extraction attribute. This allows you to map different destination attributes to the same source attribute but assign it different rules.

**Format**: A list contains JSON objects, which each represents a rule applied to an attribute.

**JSON key**: `params.rules`

Example:

```{
"rules": [
  {
    "action": "date_replace",
    "action_values": [
    "%d/%m/%Y %H:%i:%s",
    "%Y-%m-%d %H:%M:%S"
    ],
    "attribute_name": "date_dest",
    "name": "correct date format"
  }
]
```

#### SQL conditions

In order to filter with complexe SQL conditions, you can add them through the "condition" option.

**JSON key**: `params.load_from[0].condition`
**Format**: A string that contains the "WHERE" clause of the extraction of the SQL query that will be generated on the source. (excluding the 'WHERE').

Example:

```
{
"params": 
  {
    "load_from": [{
      "condition": " (attribute1 > 1 OR attribute2 BETWEEN 2019 and 2021) ",
      ...
    }]
  }
}
```

## Go further

Join our [community of users](/links/community).