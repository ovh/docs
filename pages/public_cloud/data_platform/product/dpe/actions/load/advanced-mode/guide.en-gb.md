---
title: "Advanced mode for the Load action"
updated: 2025-02-15
---

## Objective

Note the overall schema is very close to the Aggregate action though with some limitations on certain options. Keep in mind that Load actions are designed to simply load the data from raw sources to ForePaaS while Aggregate actions are made to run operations on tables contained inside the ForePaaS data warehouse. 

In broad terms, the Load action is a simplified version of the Aggregate action, aimed at providing an easy way to load your data. For full documentation of Aggregate action, please refer to the [Aggregate action's advanced documentation](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode).

The JSON configuration file for an Load action is composed of higher level objects which are mandatory. This includes:

* [**Sources**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#sources): Defined the source tables used to load the data from.
* [**Schema**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#schema): Defines the individual mapping between the destination table and the source tables.
* [**Destination**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#destination): Defines in which table we will be loading the output data from the Aggregate action.

Other optional parameters can be added as well, we will cover that in specific section [**Other optional parameters**](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/advanced-mode#other-optional-parameters) which include for instance the segmentation, perimeter or transformation rules.

## Source

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
 
> [!success]
> **Tip**: For SQL-like sources : You can alias tables by adding a space after the table_name then the character(s) for the table alias. For instance: "source": "dwh/mysql_source/lifetime_insights fb_i". This will alias the `lifetime_insights` table by `fb_i`. So you can reuse this alias in joins and schema.

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
      "sql": "CONCAT(\"HELLO : \", prim_calendar.vegetables)"
    },
    "season": {
      "type": "replace",
      "value": "summer"
    }
}
```

* `schema.keys()` the destination attributes
* `type` the mapping mode of each attribute

There are 3 different types of mapping:

* type:`default` : to map one attribute to another without any transformation
    * `table` the original source object of the attribute
    * `attribute`  source attribute to map from
    * `operation`  represents the SQL operation types mentioned in SQL operation section. (only for sql-like sources).
* type:`replace` : will put a hard-coded value in all destination rows.
    * `value`: this attribute will be filled with the value for all destination rows about to be inserted/updated
* `type`:"sql" : the following sql formula will be applied (only for sql-like sources).
    * `sql`  the value is an SQL statement.

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

**JSON key**: `params.load_from[0].extract_chunk_size`

Example:

```{
  "params": {
    "load_from": [ { "extract_chunk_size": 10000 , ... } ]
  }
}
```

This will allow the worker to extract data with batches of 5000 lines.

### Load_batch_size

`load_batch_size` is an integer value of the maximum allowed size at once for loading data into database

**JSON key**: `params.load_batch_size`

Example:AA

```{
"load_batch_size": 5000
```

This will allow the worker to load the data with batches of 5000 lines

### Source_rules

`source_rules` represents the rule for simple data preparation. This setting will override the existing rules synchronized from DWH. They will be applied to attributes from the source. For instance let's assume we would like to apply transformation rules to the attribute `date_source`.

**Format**: A list contains JSON objects, where each represents a rule applied to an attribute.

**JSON key**: `load_from.source_rules`

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

### Rules

Rules are similar to source_rules except that they will be applied to the destination attribute instead of the extraction attribute. This allows you to map different destination attributes to the same source attribute but assign it different rules.

**Format**: A list contains JSON objects, which each represents a rule applied to an attribute.

**JSON key**: `rules`

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

### Handling JSON/XML semi structured mapping

in order to handle the mapping of semi-structured data, 
you have to indicate which is the node to loop on in order to structure the data in a normalized way. 

for instance if your source looks like this:

```
{
	"data": [
	  { "id":1,"name":"marco" },
	  { "id":2,"name":"polo" },
	]
}
```

you have to add in your load configuration in the "params" section : 

```
{
  "params":{
     "dataXPATH":"data",
     ...
  }
}
```

### More options on structured CSV/XLSX files

Sometimes excel and csv files doesn' begin at the very first row. 
there are parameters to set in order to 

#### encoding

specify the character encoding of the CSV file (default auto-detect).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "encoding":"utf-8",
      ...
    }]
  }
}
```

#### header

indicates if the file has a header as first row (default: true).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "header":true,
      ...
    }]
  }
}
```

#### header_offset

indicates how many rows in your file source the DPE needs to skip before the file starts (default 0).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "header_offset":1,
      ...
    }]
  }
}
```

#### offset

indicates how many rows are empty between your header and the data rows in your source file (default 0).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "offset":1,
      ...
    }]
  }
}
```

#### limit

define the maximum number of rows to read from the file (default None).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "limit":10,
      ...
    }]
  }
}
```

#### separator

set the character used to separate fields in the CSV file (default auto-detect).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "separator":",",
      ...
    }]
  }
}
```

#### quotechar

define the character used to quote fields containing special characters (default '"').

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "quotechar":"\"",
      ...
    }]
  }
}
```

#### escapechar

specify the character used to escape the quote character within fields (default '\').

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "escapechar":"\\",
      ...
    }]
  }
}
```

#### lineterminator

determine the character sequence that indicates the end of a line (default "\n").

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "lineterminator":"\n",
      ...
    }]
  }
}
```

#### skipinitialspace

ignore whitespace immediately following the separator (default false).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "skipinitialspace":true,
      ...
    }]
  }
}
```

#### doublequote

Controls whether two consecutive quote characters are interpreted as one (default true).

you have to add in your load configuration in the "params.load_from[0]" section :

```
{
  "params":{ 
    "load_from":[{
      "doublequote":true,
      ...
    }]
  }
}
```

#### worksheet 

> [!primary]
> only for .xls and .xlsx source files

Indicates which worksheet should be loaded.

you have to add in your load configuration in the "params.load_from[0]" section : 

```
{
  "params":{ 
    "load_from":[{
      "worksheet":"your_worksheet_name",
      ...
    }]
  }
}
```

## Go further

Join our [community of users](/links/community).