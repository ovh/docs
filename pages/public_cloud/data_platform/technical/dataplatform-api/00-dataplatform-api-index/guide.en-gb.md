---
title: "Data Platform APIs"
updated: 2025-02-15
---

## Objective
 
In addition to the graphical user interface (GUI), you can also interact with your [Data Platform Project](/pages/public_cloud/data_platform/product/project/00-project-index) through the **endpoints in the Data Platform APIs**. It provides a developer alternative to the GUI for building and managing Data Platform Projects.

Below are the API references for each component.

| API reference for | Main context of use |
| :---- | :------------- |
| [Buckets](/pages/public_cloud/data_platform/technical/dataplatform-api/datastore) | Interact with the [buckets of your Lakehouse Manager](/pages/public_cloud/data_platform/product/lakehouse-manager/buckets). |
| [Identity Access Manager](/pages/public_cloud/data_platform/technical/dataplatform-api/iam)  | Interact with your [Identity Access Manager (IAM)](/pages/public_cloud/data_platform/product/iam/00-iam-index), typically to manage authentication. |

## General formats

### Response format

* Data format: JSON see http://www.json.org
* Character set: UTF-8
* All non-empty responses are sent with the header: `Content-Type: application/json; charset=utf-8`

### HTTP response codes

| Code | Message         | Signification                                              |
| :--- | :-------------: | :--------------------------------------------------------- |
| 200  | OK              | Default response for successful GET or POST requests with non-empty content                                       |
| 400  | Bad Request     | Invalid value for GET or POST parameters  |                 
| 401  | Unauthorized   | Invalid Credentials or Rights   |
| 403  | Forbidden       | Authentication error  |
| 404  | Not Found       | Action or request not found                  |
| 500  | Internal Server | A server-side error occurred                |

### Error handling

In case of client-side (HTTP status code 4xx) or server-side (HTTP status code 5xx) error, the response body may contain a JSON object describing the error:

```json
{
   "error": "Invalid parameter", // code 400, 403, 500
   "warning": "Action not found" // code 404
}
```

### Timestamp

All data endpoints return the timestamp associated with the data provided.
```json
{
    "timestamp": 1435929960
}
```

### Duration
All data endpoints return the duration attribute. It represents the effective time taken by the system to execute a request in seconds.
```json
{
    "duration": 0.056
}
```

## Go further

Join our [community of users](/links/community).