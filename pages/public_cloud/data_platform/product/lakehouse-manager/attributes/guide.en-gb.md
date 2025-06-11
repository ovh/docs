---
title: "Attributes"
updated: 2025-02-15
---

## Objective

The Attributes page groups all the attributes in your lakehouse Manager by **unique attribute names**. Each of those attributes are part of a realm: *physical* or *virtual*.

![attr](images/attributes-1.png){.thumbnail}

- [Physical attributes](#physical-attributes)
- [Virtual attributes](#virtual-attributes)
  - [Virtual attribute formula](#virtual-attribute-formula)
  - [Virtual attribute options](#virtual-attribute-options)

## Physical attributes

Physical attributes are the attributes physically stored in [Lakehouse Manager tables](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/00-tables-index). You can edit their category, type, and other information at the level of the table.

They are grouped by name on the Attributes page, letting you watch at a glance the different categories and types each attribute takes across all of your data warehouse / data lake.

![attr](images/attributes-2.png){.thumbnail}

Each attribute can be expanded in order to get full lineage over the objects in your Project that use this attribute:

- Lakehouse Manager [tables](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/00-tables-index)
- Data Processing Engine [actions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index)
- Machine Learning Manager [pipelines](/pages/public_cloud/data_platform/product/ml/pipelines/00-pipelines-index)
- Analytics Manager [queries](/pages/public_cloud/data_platform/product/am/queries/00-queries-index)

![attr](images/attributes-3.png){.thumbnail}

Some attributes can be a key for a **dictionary**. In that case, another attribute is used as a label for this attribute, to be automatically displayed in applications instead of the key.

Labels can be set at the level of a table (containing the dictionary key as its primary key) in the [Tables](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/00-tables-index) screen.

## Virtual attributes

Virtual attributes are used to compute new formulas on your data. They are not stored in the database but are computed on the fly for a [query](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index) or a dashboard/restitution chart. 

![attr](images/attributes-4.png){.thumbnail}

### Virtual attribute formula

The most important element of a virtual attribute is its SQL definition. 

![attr](images/attributes-5.png){.thumbnail}

Write a formula which contains a combination of SQL keywords and [physical attributes](#physical-attributes).

> [!primary]
> The formula should be written using **ANSI-compliant** SQL syntax to ensure the portability of your Project. Engine-specific syntax is not supported by ForePaaS.

#### Example of virtual attribute formula

`SUM(rides)/COUNT(DISTINCT CONCAT(CAST(date AS VARCHAR), CAST(station_id AS VARCHAR)))`

Here, *rides*, *date*, and *station_id* are physical attributes coming from a Data Manager table.the Platform will automatically detect them, along with the most relevant table to query from (if it is not explicitly defined in your formula).

### Virtual attribute options

![attr](images/attributes-6.png){.thumbnail}

#### Required attributes

the platform automatically detects the [physical attributes](#physical-attributes) required to run the virtual attribute formula. 

You can edit them in the advanced options of the virtual attribute. Reasons for editing the type include (but are not limited to): a physical attribute in the formula is detected as a SQL keyword instead of a required attribute, or the vice-versa.

#### Type

The type of the virtual attribute is automatically inferred when you create it. This type allows the platform to automate the planning of [queries](/pages/public_cloud/data_platform/product/am/queries/00-queries-index) which use the virtual attribute. 

You can edit it in the advanced options of the virtual attribute. Reasons for editing the type include (but are not limited to): filter values based on a virtual attribute are automatically converted to another type resulting queries to fail in the [Analytics Manager](/pages/public_cloud/data_platform/product/am/queries/00-queries-index).

## Go further

Join our [community of users](/links/community).