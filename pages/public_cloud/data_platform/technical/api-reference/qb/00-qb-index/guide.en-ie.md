---
title: "API Reference: Query Builder / Analytics Manager"
updated: 2025-02-15
---

## Objective

This page contains the API reference for the Query Builder, now replaced by the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index).

* [Query endpoint](#query-endpoint)
* [Dataset endpoint](#dataset-endpoint)

> [!primary]
> Like all other ForePaaS endpoints, these endpoints requires you to have an authentication token from the IAM of the Project you are trying to access.   
> Make sure you also have corresponding permissions in service *Query Builder Legacy* (in IAM).

## Query endpoint

**Description**

- Executes the given query, using the [ForePaaS JSON query format](/pages/public_cloud/data_platform/technical/api-reference/qb/json-format/00-json-format-index)

**Endpoint**

- POST /qb/query

**Query Parameters**

| Parameter name | required | example | description |
| --- | --- | --- | --- |
| data.fields | yes | { &quot;income&quot;:[&quot;sum&quot;],&quot;expense&quot;:[&quot;sum&quot;]} | Fields to return and their compute mode(s) (can be: select, select\_distinct, sum, min, max, avg, count, count\_distinct)          |
| data.skip | no | 10 | Number of rows to skip |
| data.limit | no | 100 | Number of rows returned |
| data.hints | no | true/false | Total number of lines corresponding to the query (omitting data.limit) |
| filter | no | {  &quot;date&quot;: {          &quot;between&quot;: [&quot;1420066800", "1428962399&quot;]  },  &quot;client\_code&quot;: {          &quot;in&quot;: [&quot;08KD&quot;, &quot;09CC&quot;]  },  &quot;creation\_date&quot;: {          &quot;eq&quot;: [&quot;2018-01-01&quot;]  }}  | Apply filter(s) on the data to query. Filters can be: in, not\_in, between, not\_between, eq, not\_equal, like, not\_like, is\_null, is\_not\_null, gt (\&gt;), gte (\&gt;=), lt (\&lt;), lte (\&lt;=) |
| scale.fields | no | [&quot;date&quot;,[&quot;client\_code&quot;, &quot;employee\_id&quot;]] | Apply scale (group by) to the query. It can be a computed scale, or more than 1 scale. |
| evol.scale | no | &quot;year&quot; | scale to apply for evolution (weekday;week; month; quarter; semester; year) |
| evol.mode | no | &quot;date&quot;&quot;weekday&quot; | date : comparison with same dateweekday : comparison with respecting the same weekday. |
| evol.depth | no | 5 | How much evolutions you want to get back |
| total.all | no | [][&quot;client\_code&quot;] | total queries per distinct scales (optional) |
| total.x | no | [&quot;client\_code&quot;] | Total queries for a specific attribute |
| order | no | {   &quot;date&quot;:&quot;asc&quot;} | order query output (asc or desc, asc by default) |
| table\_name | no | &quot;prim\_vehicles&quot; | Force to query in a specific table |
| database\_name | no | &quot;data\_prim&quot;&quot;data\_mart&quot; | Force to query in a specific layer |

**Sample query, request body**

```json
{
  "data": {
    "fields": {
      "a": ["sum"],
      "b": ["sum", "avg"]
    },
    "skip": 10,
    "limit": 10
  },
  "filter": {
    "h": {
      "between": ["1420066800,1428962399"]
    },
    "c": {
      "in": [1, 2, 3]
    },
    "g": {
      "eq": [1]
    },
    "x": {
      "is_null": []
    }
  },
  "scale": {
    "fields": ["d", ["e", "f"]]
  },
  "evol": {
    "scale": "year",
    "mode": "date",
    "depth": 5
  },
  "total": {
    "all": [],
    "x": ["d"]
  },
  "order": { //order module to order query output (asc or desc, asc by default)
    "c": "asc"
  },
  "table_name": "TABLE_NAME" //force table_name for the query
}
```

**Sample query, response**

| Code | Description |
| ---- |:----------- |
| 200 | JSON object |

```json
{
    "success": true,
    "timestamp": 1435936140,
    "duration": 0.09,
    "error": null,
    "warning": null,
    "query_params": {…}, //recap of the executed query
    "results": [  //results of the query      
        {
            "data": {
                "a": {
                    "sum": [
                        {
                            "month": 1,
                            "team": "Team Rocket",
                            "value": 10300
                        },
                        {
                            "month ": null,
                            "team": null,
                            "value": null
                        }
                    ]
                }1
            },
            "scales": {
                "month_date_fact": 1,
                "team": "Team Rocket"
            }
        }
    ],
    "total": { //results for each total provided by the query
        "all": [{…}]        
    }
}
```

## Dataset endpoint

> [!warning]
> This feature is from the legacy Query Builder and will soon be deprecated. Please check out the [Analytics Manager](/pages/public_cloud/data_platform/product/am/00-analytics-manager-index) and Data Manager instead.

**Description** 

- Returns the dataset from the Query Builder.

**Endpoint**

- GET /qb/dataset

**Responses**

| Code | Description |
| ---- |:----------- |
| 200 | JSON object |

```json

{
    "success": true,
    "timestamp": 1435934914,
    "duration": 0.002,
    "data": { //list of available data and the compute mode
        "a": {
            "computes": ["sum"],
            "default": "sum"        
        }
    },
    "compute_mods": [ //list of available compute mode
        …
    ],
    "orders": [ //list of available fields for sorting queries
        …
    ],
    "filters": [ //list of available fields for filtering queries
        …
    ],
    "scales": [ //list of available fields for grouping queries
        …
    ],
    "evol": [ //list of available evolution mode
        …
    ],
    "dictionnary": { //The data dictionary for reporting
        …
    }
}
```

## Go further

Join our [community of users](/links/community).