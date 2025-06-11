---
title: "Create a custom endpoint for the Query Builder"
updated: 2025-02-15
---

## Objective

It is possible to easily extend the Query Builder by adding new `endpoints`.  
Those endpoints can then be called from any `chart` in the **Front App** to be displayed.  

Here are some use examples:

* [merge 2 queries in one result](/pages/public_cloud/data_platform/technical/sdk/api/queries/qb-endpoint#merge-two-queries)
* use Machine Learning to compute and display forecast
* do some computation on results before returning them

## Create a new endpoint

> [!primary]
> Simply add a file in `./src/qb/endpoints/`.  
This folder does not exist by default, it must be created from the root of the Front API.

For instance, adding the following file provides an answer from a *GET* request on `qb/hello_world` :

**./src/qb/endpoints/hello_world.js**

```js
module.exports = {
  method: "GET",
  request: function(req, res, next) {
    res.send('hello')
  }
}
```

## Merge two queries

In this example, consider a dataset containing the **turnover** of ForePaaS and 4 other companies. The objective is to compare :

* the evolution of the ForePaaS turnover
* the evolution of the sum of all turnover (ForePaaS + 4 others).

The Query Builder format needs 2 different queries :

```json
// ForePaaS Turnover
{
  "data":{
    "fields":{
      "turnover":["sum"]
    }
  },
  "scale":{
    "fields":["date"]
  },
  "filter":{
    "company": ["ForePaaS"]
  }
}
// Global Turnover
{
  "data":{
    "fields":{
      "turnover": ["sum"]
    }
  },
  "scale":{
    "fields":["date"]
  }
}
```

In order to build a chart with 2 curves in the Front App, the custom endpoint should return the appropriate result set.

```js
const QueryBuilder = require('../../../forepaas/qb/services/QueryBuilder')
const Merge        = require('../../../forepaas/qb/services/Merge')
const Formatter    = require('../../../forepaas/qb/services/Formatter')

module.exports = {
  method: 'GET',
  request: (req, res, next) => {
    // define 2 queries
    let queries = {
      // query 1 : forepaas turnover
      forepaas: {
        data: {
          fields: {
            turnover: ["sum"]
          }
        },
        scale: {
          fields: ["date"]
        },
        filter: {
          company: ["ForePaaS"]
        }
      },
      // query 2: global turnover
      global:{
        data: {
          fields: {
            turnover: ["sum"]
          }
        },
        scale: {
          fields: ["date"]
        }
      }
    };

    // execute queries and merge results
    QueryBuilder.queries(req, queries).then(responses => {
      let response = new Merge(responses, { renameWithId:true }).request();
      return Formatter(res, 'json', response);
    }).catch(next)
  }
}
```

In this example :

1. both queries are made through the `QueryBuilder.queries()` helper function.  
2. responses consist of 2 distinct results : the Front App does not handle it as is.  
3. the module `Merge` offers basic merge functions to accumulate queries.  
The `renameWithId` option provides two *forepaas:turnover* and *global:turnover* fields in return.

> [!primary]
> **To be noticed**  
> Caching and activation of authentication is done automatically.

## Improve to be dynamic

In most cases, custom endpoints are not simple **GET** requests that always compute the same request.   Usually, the request(s) sent to the Query Builder are dynamically generated using the body of the request.  
In order to do so, the request's method needs to change to **POST** and queries passed as variable.

These changes result in the following code:

```js
const QueryBuilder = require('../../../forepaas/qb/services/QueryBuilder')
const Merge        = require('../../../forepaas/qb/services/Merge')
const Formatter    = require('../../../forepaas/qb/services/Formatter')

module.exports = {
  method: 'POST',
  request: (req, res, next) => {
    // define 2 queries from req.body
    let queries = {
      forepaas:{
        ...req.body,
        filter: {
          company: ["ForePaaS"]
        }
      },
      global: req.body
    };

    // execute queries and merge results
    QueryBuilder.queries(req,queries).then(responses=>{
      let response = new Merge(responses, { renameWithId:true }).request()
      return Formatter(res, 'json', response)
    }).catch(next)
  }
}
```

## Call it from the Front App

In the JSON of a `Chart`, instead of using the `request` parameter, all you have to do is use the `endpoint` parameter, as in this example:
```json
{
  "component": "echarts",
  "endpoint": {
    "method": "GET",
    "query": "qb/hello_world",
    "params": {
      "data":{
        "fields":{
          "turnover": ["sum"]
        }
      },
      "scale":{
        "fields":["date"]
      }
    }
  }
}
```

> [!warning]
> For an endpoint in **POST**, dynamic parameter values will be passed in `req.body`.

## Go further

Join our [community of users](/links/community).