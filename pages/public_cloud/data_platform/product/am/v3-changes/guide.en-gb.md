---
title: "Version 3.0 Changes (2022-01-11)"
updated: 2025-02-15
---

## Objective

The [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index) is the name of version 3 of the Query Builder on the Platform. This page lists all significant changes.

- [1. Dataset tab](/pages/public_cloud/data_platform/product/am/v3-changes#_1-dataset-tab) 
- [2. New queries](/pages/public_cloud/data_platform/product/am/v3-changes#_2-new-queries)
- [3. What happens to my existing queries?](/pages/public_cloud/data_platform/product/am/v3-changes#_3-what-happens-to-my-existing-queries)
- [4. Versioning of queries](/pages/public_cloud/data_platform/product/am/v3-changes#_4-versioning-of-queries)
- [5. Query engines](/pages/public_cloud/data_platform/product/am/v3-changes#_5-query-engines)

## 1. Dataset tab

The dataset tab from the classic Query Builder no longer exists in the Analytics Manager. All the information about tables names and number of rows are now found in the **tables page of the Data Manager**. 

## 2. New queries

In the Analytics Manager, it is possible to create and run queries in any of two ways:

- Using a [visual point-and-click builder](/pages/public_cloud/data_platform/product/am/queries/visual): the interface has been revamped for a much more comfortable use, namely the addition of an Order section to sort your results!
- Using [SQL](/pages/public_cloud/data_platform/product/am/queries/sql): new, directly query your tables in SQL!

## 3. What happens to my existing queries?

Queries that were created in the classic Query Builder will be migrated to the new Analytics Manager, into the [queries](/pages/public_cloud/data_platform/product/am/queries/00-queries-index) tab. 

If applicable, they will still be linked to your [apps](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index) through the same *request_id*, without needing to change anything. 

Please note that the new Analytics Manager interface **doesn’t allow** for editing advanced JSON parameters anymore. As such, such advanced options that were added in your queries in the classic Query Builder will not be editable in the new Analytics Manager. However, the migrated queries will still be saved with them and as such will **return the same result** as in the classic Query Builder upon execution. 

## 4. Versioning of queries

Queries are now versioned at the [repository](/pages/public_cloud/data_platform/product/am/queries/00-queries-index#versioning-queries) level, instead of at the query level like in the classic Query Builder. 

Use the **the platform versioning system** to manage production and development frameworks, and work on your analytics without breaking your deployed applications.

## 5. Query engines

It is now possible to activate a [query engine](/pages/public_cloud/data_platform/product/am/resources) in the Analytics Manager. 

Query engines allow you to **scale your queries both vertically and horizontally**, especially for Big Data analytics, and give you access to unique new features: SQL querying, query history, query execution metrics, fine-grained data access control (*coming soon!*), and more.

## Go further

> [!primary]
> Have a question about the migration or the new version? Feel free to reach out to us by sending us a request via *Support* on the Platform and we'll make sure to help you out with the best solution   

Join our [community of users](/links/community).