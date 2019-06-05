---
title: Elasticsearch 6 upgrade  
slug: upgrade_to_es_6
order: 3
excerpt: Elasticsearch 6 is coming
section: Get Started
---

**Last updated 7th May 2019**

## Objective

This document summarize the benefits and the breaking changes that you will need to pay attention to before we upgrade our clusters to Elasticsearch 6. 


## Benefits 

- Thanks to a better file system utilization and a major Lucene version upgrade, Elastisearch 6 is faster for your queries. 
- We will use some new features (like sorting) for your logs to further improve performance.
- Better queries: Composites aggregations, ip_range fields types, and more queries improvements are now available. 

## Breaking Changes 

### Kibana

Kibana now needs an alias in order to be able to upgrade its index by reindexing without changing the index endpoint. This means Kibana needs to create and reindex indices on the platform through Elasticsearch API, this is not supported yet. Therefore, self-hosted kibana that you had setup will stop working after Elasticsearch 6. 

We provide instead a hosted Kibana service through the **Kibana on-demand Option**. The [Kibana Guide](../using_kibana_with_logs/guide.fr-fr.md){.ref} will help you to setup the service. Our team ensures the availability, the security, and the upgrade of the software. If you need any additional plugin or any assistance in the Kibana configuration, please contact us on the Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}.

### Grafana 

Grafana is fully compatible with Elasticsearch 6 starting version [5.4](https://grafana.com/docs/v5.4/features/datasources/elasticsearch/){.external}. Version 5.3 has some compatibility issues but should work in most cases. Refer to the [Grafana guide](../using_grafana_with_logs/guide.fr-fr.md){.ref} 

### Elasticsearch API 

Elasticsearch API is known to be stable even across major versions. However, new functionalities and deprecation of others can lead to API changes. The most important breaking changes you have to pay attention to are described on this page: [Elasticsearch breaking changes](https://www.elastic.co/guide/en/elasticsearch/reference/6.7/breaking-changes-6.0.html){.external}

For your convenience, some important breaking changes are described below

- Indices now have only one type: Indices before could have multiples types but now [they must have only one type](https://www.elastic.co/guide/en/elasticsearch/reference/6.7/removal-of-types.html){.external}. This can have some consequences when using some tools like ElastAlert. Be sure that your applications are configured to use only one type.
- Content-Type header is mandatory: Elasticsearch assumed before version 6, that all bodies pushed with a http request were JSON content. This is no longer the case, If you use curl to test your request to Elasticsearch you must provide a **Content-Type: application/json** header when using JSON. 
- Boolean fields can only have **true** or **false** as a value: booleans fields before could be true, false, on, off, yes, no, 0, 1. This is no longer the case. If you use booleans, you must ensure that the value is now **true** of **false**.

## Go further

- Getting Started: [Quick Start](../quick_start/guide.fr-fr.md){.ref}
- Documentation: [Guides](../product.fr-fr.md){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform){.external}
- Create an account: [Try it free!](https://www.ovh.com/fr/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-basic~productId~%27logs%29){.external}
