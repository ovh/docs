---
title: Relationships
updated: 2021-03-26
---

**Last updated 12th February 2021**



## Objective  

The `relationships` block defines how services are mapped within your application.  By default, your application may not talk to any other container within a project.  To access another container you must define a relationship to it.

![Relationships Diagram](images/relationships.png "0.5")

Each relationship has an arbitrary name, although by convention the primary SQL database of an application (if any) is usually `database`.  That is the name by which the relationship will be known in the `PLATFORM_RELATIONSHIPS` environment variable, which will include credentials for accessing the service.

The relationship is specified in the form `service_name:endpoint_name`.  The "service name" is the name of the service given in `.platform/services.yaml`, or the name of another application in the same project (that is, the `name` property of the `.platform.app.yaml` file for that application).  

The "endpoint" is the exposed functionality of the service to use. For most services the endpoint is the same as the service type. On a few services (i.e. [MariaDB](../../configuration-services/mysql#multiple-databases) and [Solr](../../configuration-services/solr#solr-6-and-later)) you can define additional explicit endpoints for multiple databases and cores in your `services.yaml` file, and you will need to match those endpoints in your relationships. See the [Services](/pages/web/web-paas/configuration-services) documentation for a full list of currently supported service types and service endpoints.

## How do I get access to multiple services?

In the following example, there is a single MySQL service named `mysqldb` offering two databases, a Redis cache service named `rediscache`, and an Elasticsearch service named `searchserver`.

```yaml
relationships:
    database: 'mysqldb:db1'
    database2: 'mysqldb:db2'
    cache: 'rediscache:redis'
    search: 'searchserver:elasticsearch'
```
