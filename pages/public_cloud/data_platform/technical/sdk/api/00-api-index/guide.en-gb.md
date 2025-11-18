---
title: "Front API SDK"
updated: 2025-02-15
---

## Objective

In ForePaaS, the Front API is the **Project's gateway for remote requests**. It is built and deployed using [API Manager](/pages/public_cloud/data_platform/product/api-manager/00-api-manager-index) and has two main purposes:

* Access from the [Front App](/pages/public_cloud/data_platform/technical/sdk/app/00-app-index) with all tight integration built-in
* Access from other remote systems that need to request your Project

In addition, vanilla Front APIs deployed by default have the following features:

* Enforce authentication and data ACL as declared in the [Identity Application Manager](/pages/public_cloud/data_platform/product/iam/00-iam-index)
* Pass on requests using [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index) format
* Access to a `WebStorage` to be used by Front App
* adding [available extensions](/pages/public_cloud/data_platform/product/api-manager/extensions-list), export CSV/XLSX

## Customize your Project's API using the SDK

### When is customization needed?

The aforementioned features are sufficient for most use cases, but you can extend it much further. The Front API SDK is written in NodeJS. After an [API has been deployed](/pages/public_cloud/data_platform/product/api-manager/deploy), it is easy to download it and start hacking.

Typical cases:

* needs to provide an endpoint with a specific request and response format
* needs to implement *transformers* to dynamically change QB requests (adding fields, changing filters or scales on the fly)
* implement advanced permissions restrictions on data fields
* merge several QB requests to one result
* request external API on behalf of Front App 
* ... and whatever you may do in NodeJS!

> [!warning]
> Customizing a Front API requires some knowledge of JavaScript, NodeJS and Web Service development, and should be done by advanced users.

### Requirements

* [NodeJS](https://nodejs.org/en/): Front API is implemented in NodeJS
* [Docker](https://www.docker.com/): Front API may be started with Docker
* [Git](https://git-scm.com/): we strongly advise to version your code with Git and use it to deploy on ForePaaS

### What can you customize?
Check out the following articles to discover how to customize an API using the SDK.

- [Discover the structure of an API](/pages/public_cloud/data_platform/technical/sdk/api/api-files)
- [Launch in a local environment](/pages/public_cloud/data_platform/technical/sdk/api/api-launch)
- [Manage modules](/pages/public_cloud/data_platform/technical/sdk/api/configure-module)
- [Handle queries](/pages/public_cloud/data_platform/technical/sdk/api/queries/00-queries-index/)
    - [Add query transformers](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-transformers)
    - [Add query endpoints](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-endpoint)
    - [Add query data ACL](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-acl)
- [Create custom API endpoints](/pages/public_cloud/data_platform/technical/sdk/api/custom-endpoints)
- [Expose a bucket file](/pages/public_cloud/data_platform/technical/sdk/api/download-file-datastore)

## Go further

Join our [community of users](/links/community).