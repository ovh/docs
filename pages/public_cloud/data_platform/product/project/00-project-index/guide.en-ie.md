---
title: "Projects and services"
updated: 2025-02-15
---

## Objective

On the Platform, a **Project** is a cloud environment with dedicated resources that contains all the components required to manage your data's lifecycle, from ingestion to restitution. The physical data, in turn, is stored in a [storage engine](/pages/public_cloud/data_platform/product/storage-engine) linked to the Project.

* [What can I do in a Project?](#what-can-i-do-in-a-project)
* [What services are included in a Project?](#what-services-are-included-in-a-project)
* [How to allocate resources in a Project?](#how-to-allocate-resources-in-a-project)

## What can I do in a Project?

Projects are the the hub in which you access all the platform services as well as your data. The tasks that are necessary to build a data application or put AI models into production are all automated, such as:

* getting an entire team to work on the same environment, with different access rights to the data or the modules
* building a logical database schema, without being linked to a specific database
* automating the data collection, ETL-ing and visualization
* training artificial intelligence & machine learning models
* monitoring the cloud infrastructure and its performances

> [!primary]
> In general, one Project can answer one or a range of specific use cases. You can use several Projects in order to work on different environments (staging, production...) for the same use case.

[Learn more about how to export a Project configuration](/pages/public_cloud/data_platform/getting-further/export-import-project-config).

## What services are included in a Project?

A Project is a flexble environment composed of multiple services, meaning you can add services in your Project as you wish. These services are separated into categories and only the *Admin tools* services are mandatory for your project to run, all the others you may add according to your needs.

![Project-components](images/project_home.png){.thumbnail}

* **Data Analytics**: collection, data warehousing and processing, and querying.
    * The [Data Catalog](/pages/public_cloud/data_platform/product/data-catalog/00-data-catalog-index)
    * The [Lakehouse Manager](/pages/public_cloud/data_platform/product/lakehouse-manager/00-lakehouse-manager-index)
    * The [Data Processing Engine](/pages/public_cloud/data_platform/product/dpe/00-dpe-index)
    * The [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index)
* **Artificial Intelligence**: notebook exploration and machine learning.
    * The [Machine Learning Manager](/pages/public_cloud/data_platform/product/ml/00-ml-index)
* **Application Services** : API gateways and data visualization.
    * The [APIs](/pages/public_cloud/data_platform/product/api-manager/00-api-manager-index)
    * The [APPs](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index)
* **Admin Tools**: resources management and access control.
    * The [Control Center](/pages/public_cloud/data_platform/product/cc/00-cc-index)
    * The [Identity Access Manager](/pages/public_cloud/data_platform/product/iam/00-iam-index)

[How to create a Project?](/pages/public_cloud/data_platform/product/project/project_creation)

## How to allocate resources in a Project? 

Projects were designed from scratch to scale easily as the requirements of your data Project evolve. You can independently **scale horizontally and vertically** in any component of your choice in just a few clicks, for example in the [preferences](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/resources) of a [Data Processing Engine workflow](/pages/public_cloud/data_platform/product/dpe/workflows/00-workflows-index), or in the [preferences](/pages/public_cloud/data_platform/product/ml/pipelines/execute/preferences) of a [Machine Learning Manager pipeline](/pages/public_cloud/data_platform/product/ml/pipelines/00-pipelines-index). Deployed instances, such as [APIs](/pages/public_cloud/data_platform/product/api-manager/00-api-manager-index), [applications](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index) or [database engines](/pages/public_cloud/data_platform/product/storage-engine), can also be scaled independently.

Each component in your Project will consume resources when it is actively running (either through a job or a deployment).

> [!primary]
> Even when it is idle, your Project uses a handful of DPUs by default. You can manage this amount in [Control Center](/pages/public_cloud/data_platform/product/cc/00-cc-index).

## Go further

Join our [community of users](/links/community).