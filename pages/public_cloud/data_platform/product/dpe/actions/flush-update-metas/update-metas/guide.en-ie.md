---
title: "Update Metadata Action"
updated: 2025-02-15
---

## Objective

The Update Metadata action is used to **update the metadata of the data model** stored either in the data warehouse or the datastore. It is strongly advised to run it at the end of the execution of a workflow which usually affects the data model. The metadata of the data model is used by other components to navigate the data model such as the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index), the [APIs](/pages/public_cloud/data_platform/product/api-manager/00-api-manager-index) or the [Machine Learning Manager](/pages/public_cloud/data_platform/product/ml/00-ml-index).

When creating a new Update Metadata action, no configuration is required.

> [!primary]
> Note that **the action can be quite intensive and run for a long time** if the size of your data warehouse is large. We therefore recommend running them once per workflow not systematically after each action, to optimize your execution runtime. 

## Go further

Join our [community of users](/links/community).