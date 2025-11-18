---
title: "Manage modules"
updated: 2025-02-15
---

## Objective

APIs work primarily with **modules** that can be interconnected. Those modules are configured in the `forepaas.json` file at the root of your [Front API](/pages/public_cloud/data_platform/technical/sdk/api/api-files), along with the rest of the API configuration:

```json
//forepaas.json
{
  "id": "frontapi", // unique ID: used if you choose to publish  as a "template" in the store
  "type": "api", // forepaas.json is used for 'app' and 'api', here it is 'api'
  "language": "node", // Language used for the API
  "name": "FrontAPI",
  "version": "0.0.1",
  "modules": {...}, // Detailed below in the "Configure modules" section
  "dependencies": {...} // 
```

> [!primary]
> This file is fully configurable via the ForePaaS platform, on the [Extension configuration of your API](/pages/public_cloud/data_platform/product/api-manager/extensions-list).
The file `forepaas.json` is automatically modified each time you install or uninstall a module from the platform.

The modules' configuration is done via two separate fields:

* the `modules` key: it contains the list of modules to be installed
* the `dependencies` key

## Configure modules

Here is an example of a configuration :
```json
  "modules": {
    "sdk": {
      "version": "1.2.1"
    },
    "cam": {
      "version": "1.1.0"
    },
    "cache-redis": {
      "version": "2.0.0"
    },
    "qb": {
      "version": "2.4.0",
      "dependencies": {
        "authentication": {
          "module": "cam"
        },
        "cache": {
          "module": "cache-redis"
        }
      }
    }
  }
```

For a better understanding, here is a short description of each module:

* `sdk`: the heart of the Front API. It is essential, but replaceable if you want to modify the standard behavior of ForePaaS APIs
* `cam`: a connector to the Project's [Identity Access Manager](/pages/public_cloud/data_platform/technical/api-reference/iam). It allows you to manage access to your API.
* `cache-redis`: a cache connector to a *Redis* database
* `qb`: a connector to the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index) (new version of the [Query Builder](/pages/public_cloud/data_platform/technical/api-reference/qb/00-qb-index)), to query and use your data in your applications

All modules act independently. However, `qb` module relies upon *cache* and *authentication*. In this sample, it is configured to use `cam` module to manage *authentication* and `cache-redis` for *cache*.

> [!warning]
> Without the `cam` module, your API does not have any access control!

## Go further

Join our [community of users](/links/community).