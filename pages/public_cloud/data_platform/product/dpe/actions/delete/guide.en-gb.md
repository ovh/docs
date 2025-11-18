---
title: "Delete Action"
updated: 2025-02-15
---

## Objective

This action is used to empty one, or multiple, tables in the database. Using the perimeter in the preferences section, you can limit the deletion to a specific subset of data. The perimeter can be preformed on:

* Based on predefined set (A table attribute) 
* Date perimeter of the workflow
* Based on attribute of the dataplant (An attribute of the dataplant)

> [!primary]
> *Pro-tip*
>
> The perimeter type *Based on predefined set*  can have multiple values, but only one attribute can be selected. Whilst unorthodox, you can use segmentation to act as an additional attribute based on a table attribute.  

## Setup example

```
{ 
	"params": {
		"tables": [
			"dwh/data_prim/table_1", 
			"dwh/data_mart/table_2"
		]
	}
}
```

## Parameters

|                Parameter               | Description              | Example              | Required              | 
| :------------------------------: | -------------------------- | -------------------------- | -------------------------- | 
|            **tables**             | Tables to delete.             |    ```["dwh/data_prim/table1", "dwh/data_mart/table2"]```   | Yes              | 

*This parameter should be used carefully, as if the action terminates early, it will result in partial deletion of data, and if multiple tables are selected, some tables may not be deleted at all.

## Go further

Join our [community of users](/links/community).