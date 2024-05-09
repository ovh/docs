---
title: Exposing your logs to third-party tools via the OpenSearch API
excerpt: 'Leverage any software that can use the OpenSearch API with Logs Data Platform.'
updated: 2023-09-08
---

## Objective

As explained in our [introductory documentation](getting_started_introduction_to_LDP1.), Logs Data Platform heavily relies on [OpenSearch](https://github.com/opensearch-project/OpenSearch) to work. 

**This documentation will explain to you how you can use third-party software that integrate with OpenSearch.**

## Instructions

### What is a Log Data Platform alias

As explained in the documentation mentioned above, a Logs Data Platform *alias* is a virtual OpenSearch *index*. You can attach multiple *indices* **OR** multiple log *streams* to an *alias* (but not a mix of *indices* and *streams*). In both cases, *aliases* are read-only.

### Alias for log streams

#### Logs exposition

When attached to *streams*, an *alias* allows you to expose the content of your *streams* exactly as if they were stored in a single OpenSearch *index*. This feature can be used only for read/query purposes.

#### Logs ingestion

If you want to ingest logs to a *stream* using the OpenSearch API, we have a mutualized input that works as a special *alias* that is pre-configured for this purpose and accessible to any Logs Data Platform user. You can follow [this documentation](ingestion_opensearch_api_mutualized_input1.) to use it. This specific *alias* is write-only instead of read-only.

#### Creating an alias

To create an *alias* in the management interface, go to the *alias* category of your Logs Data Platform account as shown in this picture.

![Logs Data Platform homepage alias button location](ldp-homepage-circled.png){.thumbnail}

It should look like this:

![Logs Data Platform alias section](alias-homepage-circled.png){.thumbnail}

In this section, you can:

- Create a new alias by clicking on the `Add an alias`{.action} button.

![Logs Data Platform homepage alias creation](alias-create-blurred.png){.thumbnail}

- Attach and detach *streams* and/or *indices* to an alias by clicking on the `...`{.action} button on the appropriate line.

![Logs Data Platform alias content attachment](alias-attach-blurred.png){.thumbnail}

- You can also edit the description, access to the alias via OpenSearch's web UI or delete the alias via the same `...`{.action} button.

#### Third-party tool configuration

To connect to your alias as if it were an OpenSearch index, third-party tools usually require a few information:

- A URL/Port: this is your cluster's URL, found on your Logs Data Platform account homepage under the "Access point" name in the "Configuration" section. The port is **9200** for OpenSearch. The resulting URL should be `https://<your_cluster>.logs.ovh.com:9200`.
- An index name. This is your alias name, found on the left column of your alias homepage like in the following picture. It should look like that: `<ldp_service_name>-a-<alias_name>`.

![Logs Data Platform alias name](alias-name.png){.thumbnail}

- A user: the Logs Data Platform service name associated with the index (the same as the one you use to connect to Graylog).
- A password: same as above.

#### Usecases

We currently have specific documentation illustrating the usage of *aliases* in three cases:

- Using our managed OpenSearch Dashboards instances to visualize logs: [here](visualization_opensearch_dashboards1.).
- Using Grafana to visualize logs: [here](visualization_grafana1.).
- Using ElastAlert to set up alerting on logs: [here](alerting_elastalert1.).

### Alias for OpenSearch *indices* 

If you use a single [managed OpenSearch index as a service](opensearch_index1.), the configuration of any third-party software is straightforward. However, as mentioned above, you can also attach multiple *indices* to an *alias*. In that case, the creation of an *alias* and configuration of your third-party software follow the same steps as described above.

### Alias access management

Like most features of Logs Data Platform, aliases can be shared with other Logs Data Platform users, using [this documentation](getting_started_roles_permission1.). Due to their nature, they can only be shared in read-only mode.

## Go further

- [Introduction to Logs Data Platform](getting_started_introduction_to_LDP1.)
- [Getting Started with Logs Data Platform](getting_started_quick_start1.)
- [Our documentation](public-cloud-data-platforms-logs-data-platform.)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}
