---
title: "Handle queries"
updated: 2025-02-15
---

## Objective

One of the core function of the API is to handle queries to your ForePaaS data system from the outside world, or from an [application](/pages/public_cloud/data_platform/product/app-manager/00-app-manager-index).

You can [add transformers](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-transformers) to your queries to modify them on the fly, add new [query endpoints](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-endpoint), and [manage the data ACL](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-acl) for the queries passed on to ForePaaS.

[Pass on external queries](/pages/public_cloud/data_platform/technical/sdk/api/queries/00-queries-index#pass-on-external-queries-queries)
[Add query transformers in your API](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-transformers)
[Add query endpoints in your API](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-endpoint)
[Add query data ACL in your API](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-acl)

## Pass on external queries

### Configure a web service for query execution

Queries can be executed from an external appliance / service through configuring a Web Service. The return formats may be JSON, CSV or XLSX.

#### Get credentials

By default, in production, the API is self-authenticated to the other Project components. But when you are calling it from the outside world, you need to authenticate though the [Identity Access Manager](/pages/public_cloud/data_platform/product/iam/00-iam-index). 

The best way to do it is by [getting an authentication token using API and secret key for a user (or a service account)](/pages/public_cloud/data_platform/getting-further/generate-api-key). 

#### Run queries via the web service

**JSON output**

```
curl -X POST \
  https://my-dataplant.forepaas.io/myapi-api/qb/query?app_id=your_app_id&token=your_token \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "fields": {
        "date": ["min", "max"]
      }
    }
}'
```

**CSV output**
```sh
curl -X POST \
  https://my-dataplant.forepaas.io/myapi-api/qb/query.csv?app_id=your_app_id&token=your_token \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "fields": {
        "date": ["min", "max"]
      }
    }
}'
```

> [!primary]
> Note that CSV formatting may be controlled with `options` in the query, as for instance:

```json
"options":{
  "collapse": "false", 
  "scales": {
    "x": [
     {"field": "field_name_1", "type":"scale"},
     /*...*/
     {"field": "field_name_n", "type":"scale"}
    ],
    "y": [{"type": "data"}]
  }
}
```

**XLSX output**

```sh
curl -X POST \
  https://my-dataplant.forepaas.io/myapi-api/qb/query.xlsx?app_id=your_app_id&token=your_token \
  -H 'Content-Type: application/json' \
  -d '{
    "data": {
      "fields": {
        "date": ["min", "max"]
      }
    }
}'
```

> [!primary]
> Note that using `options` it is possible to better control the output. 

### Front API basic endpoints reference

Here are the list of basic endpoints that comes with the default Front API.

## _GET_ /refresh

Flush the cache

**Responses**

| Code | Description |
| ---- |:----------- |
| 200 | A simple success `true` message |

## _GET_ /qb/dataset

Retrieves the dataset from Query Builder

**Responses**

| Code | Description |
| ---- |:----------- |
| 200  | The dataset from the query builder |

## _POST_ /qb/query

Make a query from a query builder JSON request

**Responses**

| Code | Description |
| ---- |:----------- |
| 200 | A result from the query builder |

## _GET_ /webstorage/`{key}`

Retrieves a value for a key in the webstorage

**Parameters**

| Name | Located in | Description | Required | Schema |
|:---- |:---------- |:----------- |:-------- |:---- |
| key | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The content |
| 404 | Key not found |

## _PUT_ /webstorage/`{key}`

Puts a value from the body of the request to a key in the webstorage

**Parameters**

| Name | Located in | Description | Required | Schema |
|:---- |:---------- |:----------- |:-------- |:---- |
| key | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The new content |

## _DELETE_ /webstorage/`{key}`

Removes a value for a specific key in webstorage

**Parameters**

| Name | Located in | Description | Required | Schema |
|:---- |:---------- |:----------- |:-------- |:---- |
| key | path |  | Yes | string |

**Responses**

| Code | Description |
| ---- | ----------- |
| 200 | The previous content |
| 404 | Key not found |

## Go further

Join our [community of users](/links/community).