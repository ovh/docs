---
title: "Project checklist and best practices"
updated: 2025-02-15
---

## Objective

You have decided to go along and you have just spun up your Project! Great! 

What's next? Where to start?

As the first users of our platform we, have accumulated several years of experience in carrying out data Projects. We have curated a list of best practices, learned through our services practice over the years, which we are excited to share with you. 

> [!primary]
> **It's all about being Agile**
>
> Projects on **Data Platform** allow you to gather a team and work together on the same data Project. 
> You can start with some basic file uploading and seamlessly switch to near real-time data processing, keeping your methodology and easily scaling as your Project grows.  
> So start, iterate, and grow your Project step-by-step: your Project will meet your growing needs.

A typical Project Project often goes through the following **main milestones**:

* A quick [checklist](#checklist) on the use case and Project scope
* Give your [teammates access](#user-management)
* Do iteratively, and as needed:
    * Adapt the [Project resources](#manage-resources) to your needs
    * Define [Data Sources](#collect-data)
    * Design [Tables](#organize-data)
    * Build [Actions and Workflows to process data](#process-data)
    * Build [Queries and Dashboards](#write-queries) to visualize your data
    * Build [Apps & API](#build-applications)
    * Give [access to end-users](#give-access-to-your-application)
    * [Monitor Jobs & Deployments](#monitor)
    * Get feedback

## Checklist

> [!warning]
> We recommend you go through our [Getting Started guide](/pages/public_cloud/data_platform/getting-started/00-getting-started-index) so you get a good understanding of the key Project components and Data Platform concepts.

Before take-off, here are some basic checks on your use case scope and agenda that we share with you:

* Data sources
    * Which data do you need?
    * Is data available? How? Is data history available?
    * Storage engine sizing: how big will it be? What will it be?
    * How often should it be refreshed?
* Describe your own personal data book:
    * The "data story": where does it come from? How has it been produced? Your data flow history?
    * Data fields: what does it mean? what is it for?
    * Detailed Business Rules (about data)
    * KPI: how to compute them? what do they mean?
* What is to be produced?
    * UX Storyboard
    * API for external use
    * Exporting files
* Risk detection and mitigation
    * What could go wrong? What is intricate in your Project?
    * Identify/anticipate possible bottlenecks or hurdles
* Identify & Leverage short iterations
    * View and check data as early as possible
    * Release early, release often!

## User Management

Projects make it easy to work as a team on a Project. There are two levels of team management:

- [Members](/pages/public_cloud/data_platform/product/organisations/00-organisations-index) of your Data Platform organization are your teammates. They have created a Data Platform account
- [Users](/pages/public_cloud/data_platform/product/iam/users/users) in your Project are either teammates working on this Project, or end-users of your API and apps
  - Members of an organization are automatically added as users in all Projects in this organization. Permissions must be granted manually to non-admins.

After [adding your team to your organization](/pages/public_cloud/data_platform/product/organisations/00-organisations-index), check [how to give them access rights in each Project's **Identity Access Manager**](/pages/public_cloud/data_platform/product/iam/users/users#manage-your-dataplant-users) according to their skills and permissions.

Your end-users access rights are also managed in the Identity Access Manager.

## Manage resources

Projects were designed from scratch to scale easily as the requirements of your data Project evolve. You can independently **scale horizontally and vertically** any component of your choice in just a few clicks, for example your [database engines](/pages/public_cloud/data_platform/product/storage-engine).

Each component in your Project will consume resources when it is actively running (either through a job or a deployment).

> [!primary]
> Even when it is idle, your Project uses a handful of FPUs by default. You can manage this amount in the [Control Center](/pages/public_cloud/data_platform/product/cc/monitoring#infrastructure-monitoring-panels).

## Collect data

Take a look at [available connectors](/pages/public_cloud/data_platform/product/data-catalog/sources/connectors/00-connectors-index) and remember that it is always possible to write a [custom action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index) to do whatever is not already possible through the interface.

If you need to manage files in your Project, we recommend using the [Lakehouse Manager buckets](/pages/public_cloud/data_platform/product/lakehouse-manager/buckets):

* organize buckets either **by topic** (referentials for instance), **by type of processing** or **by providers** depending on your needs
* within a bucket, you can use **folders** to better organize your files
* when defining a [source](/pages/public_cloud/data_platform/product/data-catalog/sources/00-sources-index), the *Data Platform Buckets* connector allows you to select a bucket then select files as sources
* if you have multiple files in the same bucket/folder:
    * if each file is different, you can [analyze](/pages/public_cloud/data_platform/product/data-catalog/analyzer/00-analyzer-index) them separately and use them as a source for [Data Processing Engine actions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index)
    * if all files need to be processed the same way: you just need to select one to **analyze**, you will use it as a source and [use segmentation over a set of files](/pages/public_cloud/data_platform/getting-further/segmentation/files) to process them
* check out [how to send files to the buckets through the API](/pages/public_cloud/data_platform/technical/api-reference/datastore) to integrate in your in-house process

## Analyze data and design blueprint rules

Once you have set up your sources, take the time to [analyze](/pages/public_cloud/data_platform/product/data-catalog/analyzer/00-analyzer-index) them and configure basic source cleaning rules called [blueprint rules](/pages/public_cloud/data_platform/product/data-catalog/analyzer/add-blueprint-rules). This can help fix some common issues such as:

* date formatting
* number formatting
* clean up strings
* skip incomplete lines
* ... and much more

In the long run, this step will save you a lot of time!

## Organize data

The [Tables page](/pages/public_cloud/data_platform/product/lakehouse-manager/tables/00-tables-index) is where you [prepare your database schema](/pages/public_cloud/data_platform/getting-started/app-init/lhm#organize-your-data-in-tables).

### Tables

* We recommend using a prefix depending on the type of data:
    * `ref_`: for referentials and stable data, without any temporal information
    * `raw_`: data imported *as is* with minimal changes. This can be used to trace back data issues
    * `prm_`: primary tables, i.e. improved quality data from `raw_`
    * `fct_`: consolidating `facts` from several `prim_` and `ref_` in a common `scale`
    * `agr_`: aggregation of data on a different `scale` (for instance `datetime` to `date` or `date` to `year`)
      * they are usually designed to optimize queries
      * build one `agr_` table per **scale granularity** adding all needed attributes
      * then add attributes names that indicate granularity (`agr_station_yearmonth`, `agr_movie_date`)
    * `tmp_`: temporary tables used for processing (mark them as **not queryable**)
    * `mlm_`: for tables used in a machine learning model
* Give clear names that describe what one row of data represents
* Define indexes to speed up data operations

### Attributes

Use [Attributes tab](/pages/public_cloud/data_platform/product/lakehouse-manager/attributes) to review all attributes, in which tables they are used, which DPE Actions uses it, etc.

Here are some best-practices about attributes (i.e. field names in tables):

* attribute type: choose between *dimension* or *measure*
    * *dimension*: qualitative information that can be scaled by, filtered by, etc but not summed.
    * *measure*: numerical information that can, most of the time, be summed, counted, averaged, etc.
* attribute naming:
    * use a *prefix* to distinguish them (e.g. `client_`, `fb_`, `site_`)
    * name `measure` attributes so they give a hint on a temporal window:
      * `_nb_` : number for that day
      * `_total_` : value for this day
      * `_diff_` : difference from previous day
      * ...
    * clearly indicate what it is (i.e. `_amount_`, `_ticket_`, `_fans_`)
    * give unit of measure if not obvious (i.e. `_g`, `_kg`, `_wh`, `_kwh`, `_eur`, `_usd`)

> [!warning]
> It is very important to **use the same attribute name and type** across all tables to **name the same piece of information**. Thus when playing a query in the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index), it dynamically checks the most suitable object for required fields. 

### Explorer

Use [Explorer](/pages/public_cloud/data_platform/product/lakehouse-manager/explorer) to quicly check table contents.

## Process data

The [Data Processing Engine (DPE)](/pages/public_cloud/data_platform/product/dpe/00-dpe-index) is used to build [actions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index) which are the heart of your physical data flow. They can run alone or organized into groups named [workflows](/pages/public_cloud/data_platform/product/dpe/workflows/00-workflows-index).

### Actions

Make sure you have a deep look at provided [actions types](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index#available-action-types).

If you need to go further, start writing a [Custom Action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index) using our [SDK](/pages/public_cloud/data_platform/technical/sdk/dpe/00-dpe-index) to interact with the rest of your Project leveraging **Python** or **PySpark**.

> [!primary]
> Use the [notebooks](/pages/public_cloud/data_platform/product/ml/notebooks/00-notebooks-index) to quickly prototype a Custom Action, then export it to the Data Processing Engine

* For [Aggregate Actions](/pages/public_cloud/data_platform/product/dpe/actions/aggregate/00-aggregate-index):
    * `scale`: must be the same granularity as the primary key of the destination table
    * **double check your rules for joining tables**: this is the main source of errors
* Set **log level** appropriately during lifecycle (i.e. `debug` if needed, `info` otherwise)
* Use **Auto flush all** to flush all caches and visualize the updates brought by the action on the datasets

### Use Repositories and Versions

As your Project grows, don't forget you can organize actions in [repositories using versions](/pages/public_cloud/data_platform/product/dpe/actions/00-actions-index#manage-actions) according to your needs.

> [!primary]
> Actions are listed in alphabetical order: you can add prefixes such as numbers to better organize them.

### Use segmentation

To leverage the full power of the Data Platform's DPE, use [Segmentation](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/segmentation) to parallelize computing tasks at an action's level.

### Use a perimeter

To limit an action or a workflow on a subset of your data, e.g. for last 30 days, use the [Perimeter](/pages/public_cloud/data_platform/product/dpe/jobs/execution-preferences/perimeter) option.

## Write queries

Use folders and repositories to organize saved [queries](/pages/public_cloud/data_platform/product/am/queries/00-queries-index) in the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index). 

For instance:

* *Data Quality*: queries to check Data Quality
* *Data Analysis*: queries to view basic features
* *App-xxx*: prepare queries to use inside your Application
    * This allows you to update the database schema and the queries without having to deploy a new app version 
    * Give clear, descriptive names to your queries

### Query Engine

Start [Query Engine powered by Trino](/pages/public_cloud/data_platform/product/am/resources) to unleash advanced Analytics features:

* unified SQL Engine over multiple databases
* [Explorer](/pages/public_cloud/data_platform/product/lakehouse-manager/explorer) in Lakehouse Manager
* [Build and Publish Dashboards](/pages/public_cloud/data_platform/product/am/dashboards/00-dashboards-index)
* [Access from tools like PowerBI](/pages/public_cloud/data_platform/product/am/consumers/00-consumers-index)

## Build applications

Take the time to understand the [App Manager](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index) and possible [settings](/pages/public_cloud/data_platform/product/app-manager/settings/00-settings-index).

### Helpful tips

* Design a Storyboard before starting your Project
* Make sure your `dynamic parameters` are present in all tables you need to request
* Use **object's label** in **Tables** for automatic translation
* Leverage [Formatters](/pages/public_cloud/data_platform/product/app-manager/formatter) and [Translations](/pages/public_cloud/data_platform/product/app-manager/translation)
* Leverage [Style templates](/pages/public_cloud/data_platform/technical/sdk/app/charts/template) to streamline your Apps development

A typical application development lifecycle is:

1. Design a storyboard
    * check data is available
    * identify `dynamic parameters`
    * identify needed *charts* and *custom components*
2. Analytics Manager: prepare and check needed queries
3. Implement a first version in the UI
    * set up `dynamic parameters`
    * set up `dashboards` and `menus`
    * set up available `charts` as needed
    * set up `dictionaries`, `formatters` and `translations`
4. Improve that version
    * Adapt CSS as needed
    * Leverage [Style templates](/pages/public_cloud/data_platform/technical/sdk/app/charts/template)
    * Implement your own [custom chart](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/custom-chart) or [custom component](/pages/public_cloud/data_platform/technical/sdk/app/custom-component/00-custom-component-index) as needed
    * Add Web Analytics as needed
5. Test and iterate again
6. Give access to more users

### Customize your application further

Application is based upon the ReactJS framework. We strongly recommend you go through our [guide on advanced app customization](/pages/public_cloud/data_platform/getting-further/app-dev/00-app-dev-index).

### Git repositories

It is usually recommended to [synchronize your application with a Git repository](/pages/public_cloud/data_platform/product/app-manager/settings/git-integration) and deploy two applications:

* `my-develop`: synchronized with your **develop** branch
* `my-master`: synchronized with your **master** branch

### Custom Domain Names

By default, your application is available at :

```
https://my-dataplant.forepaas.io/my-develop-app/
```

You may change it easily in the [App's settings](/pages/public_cloud/data_platform/product/app-manager/settings/00-settings-index) to be :

```
https://my-beautiful-app.forepaas.io/
```

If you need further customization, you may register [your own domain and provide your own SSL certificates](/pages/public_cloud/data_platform/product/app-manager/settings/custom-domain) :

```
https://my-beautiful-app.example.com/
```

## Give access to your application

By default, every `Application` created in **App Manager** has its counterpart in the **Identity Access Manager**. 
* [App Manager](/pages/public_cloud/data_platform/product/app-manager/overview)
    * it manages the instance that will be deployed and run
    * it is linked to an **Identity Application Manager's Application**
    * it will use that **IAM App** configuration about **Auth Providers**, **Users**, etc
* Identity Access Manager, you can define:
    * Logo
    * Application Title
    * Allowed Authentication Provider

Add all the [end-users](/pages/public_cloud/data_platform/product/iam/users/users) that will have access to your application (using [authentication providers](/pages/public_cloud/data_platform/product/iam/project-iam/auth-provider/00-auth-provider-index) if your company has a SSO provider), and use [roles](/pages/public_cloud/data_platform/product/iam/users/roles) and [groups](/pages/public_cloud/data_platform/product/iam/users/groups) to manage data access control.

## Front API

Default Front API checks authentication, process App's requests adding **dynamic parameters** and **implenting ACLs**.

Here are some scenarios where custom API is needed.
* Implement transformers
* Implement custom "evolution"
* Implement complex ACL

## Monitor

[Control Center](/pages/public_cloud/data_platform/product/cc/00-cc-index) gives access to:

* [monitoring](/pages/public_cloud/data_platform/product/cc/monitoring) resource usages and health
* [logs of all deployments and jobs](/pages/public_cloud/data_platform/product/cc/logs)
* [creating alerts on deployments and jobs](/pages/public_cloud/data_platform/product/cc/alerting/00-alerting-index)
* a complete view of all [jobs exeuctions and scheduling](/pages/public_cloud/data_platform/product/cc/job-central) at Project and Organization's level

## Project Backup

### Exporting data

Using a [Data Processing Engine custom Action](/pages/public_cloud/data_platform/product/dpe/actions/custom/00-custom-index), you can export all your data to a [bucket](/pages/public_cloud/data_platform/product/lakehouse-manager/buckets) in the Lakehouse Manager.

## Go further

Join our [community of users](/links/community).