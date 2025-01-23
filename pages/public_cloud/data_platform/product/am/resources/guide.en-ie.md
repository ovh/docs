---
title: "Resources"
updated: 2025-02-15
---

## Objective

The resources tab allows you to manage the **query engine** of your Project, i.e. the technology powering SQL analytics in the Project. 

It executes queries on one or several [storage engines](/pages/public_cloud/data_platform/product/storage-engine), and is able to distribute the query processing on multiple worker instances. 

![resources1](images/resources-deactivated.png){.thumbnail}

You can activate one query engine per Project, in order to use the advanced features of the Analytics Manager.

- [Manage the query engine](#manage-the-query-engine)
 - [No query engine](#no-query-engine)
 - [Activate a query engine](#activate-a-query-engine)
 - [Deactivate a query engine](#deactivate-a-query-engine)
- [Manage instances](#manage-instances)

## Manage the query engine

### No query engine

By default, newly created Projects have **no query engine activated**. You can activate it manually on the resources page.

Without a query engine activated, you can still do the following:

- Create and run queries using the [visual mode](/pages/public_cloud/data_platform/product/am/queries/visual), on a single [storage engine](/pages/public_cloud/data_platform/product/storage-engine)
- Deploy and use [applications in the App Manager](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index)
- [Connect](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index#the-connect-module) to your data from a [Data Processing Engine](/pages/public_cloud/data_platform/product/dpe/00-dpe-index) action.
- Connect to the [storage engine](/pages/public_cloud/data_platform/product/storage-engine) directly from outside the Project  - *coming soon!* 

However, it is impossible to do the following without a query engine:

- Create and run queries using the [SQL mode](/pages/public_cloud/data_platform/product/am/queries/sql) 
- Query (and join) data spread on multiple [storage engines](/pages/public_cloud/data_platform/product/storage-engine), or even on [directly queryable sources](/pages/public_cloud/data_platform/product/data-catalog/sources/00-sources-index#make-your-data-source-directly-queryable)
- Create [dashboards](/pages/public_cloud/data_platform/product/am/dashboards/00-dashboards-index)
- View the query [history](/pages/public_cloud/data_platform/product/am/history) and detailed query execution metrics
- Implement fine-grained [permissions](/pages/public_cloud/data_platform/product/iam/users/roles) on the tables and access to the data they contain - *coming soon!*

### Activate a query engine

You can manually activate a query engine in your Project by selecting *Activate a query engine*. The activation generally takes a few seconds.

![resources1](images/resources-activate.png){.thumbnail}

A query engine on the Platform is a [Trino](https://trino.io/) cluster that provides the flexibility of working with multiple storage engines, and further gives you much-improved efficiency while working with large datasets thanks to query parallelization. 

### Deactivate a query engine

> [!warning]
> It is strongly advised **not** to deactivate the query engine if you have deployed applications or if you have any queries running in production. 

You can manually deactivate a query engine in your Project by selecting *Don't activate a query engine*.

![resources1](images/resources-deactivate.png){.thumbnail}

Your query engine will be shutdown gracefully within a few minutes and you will no longer be able to use the [features](/pages/public_cloud/data_platform/product/am/resources#no-query-engine) that come with it. 

## Manage instances

You can manage the number of parallel worker instances within a Trino cluster. There will also always be a coordinator, which distributes queries in the cluster.

![resources1](images/resources-horizontal1.png){.thumbnail}

If you only have one instance in your cluster, the coordinator will also be a worker.

![resources1](images/resources-horizontal2.png){.thumbnail}

You can also scale your query engine vertically and allocate **more computing power** to it by increasing the number of the platform Units (DPU) of each instance. The DPU is a unit of general processing capability, representing access to approximately *1 CPU* and *2 GB of RAM*, based on hardware availability. 

> [!primary]
> A Trino query engine cannot be smaller than 4 DPU.

Use the slider to set the desired DPU size of each parallel worker instance. 

![dpe-fpu](images/resources-vertical.png){.thumbnail}

> [!primary]
> If your queries use a lot of joins, it is recommended to distribute them on multiple parallel instances - and if your datasets are really big, it is recommended to scale up the number of DPU vertically.

The final total amount of DPU allocated to a Trino cluster is the number of parallel worker instances times the DPU size of each.

![dpe-fpu](images/resources-total.png){.thumbnail}

> [!primary]
> You do not need to manage the size of the coordinator as it is done automatically by the Platform based on the number of instances. You are not invoiced for the computing power usage of the coordinator, only the usage of workers is invoiced.

## Go further

Join our [community of users](/links/community).