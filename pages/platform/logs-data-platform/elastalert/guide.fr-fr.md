---
title: Powerful alerting with ElastAlert 2
slug: elastalert
order: 11
excerpt: Deploy in a few minutes one of the most complete alert system.
section: Use cases
---

**Last updated 13th June, 2022**

## Objective

[ElastAlert 2](https://github.com/jertel/elastalert){.external} is an alerting framework originally designed by Yelp. It is able to detect anomalies, spikes, or other patterns of interest. It is production-ready and is a well known standard of alerting in the Elasticsearch/OpenSearch ecosystem. Their mojo is : "If you can see it in your dashboards, ElastAlert 2 can alert on it." In this document you will learn how to deploy this component on Logs Data Platform thanks to its compability with OpenSearch through [aliases](../using-kibana-with-logs){.ref} and [indexes](../index-as-a-service){.ref}. Logs Data Platform also allows you to host ElastAlert meta-indices on Logs Data Platform..

## Requirements

Note that in order to complete this tutorial, you should have at least:

- [Activated your Logs Data Platform account.](https://www.ovh.co.uk/order/express/#/new/express/resume?products=~%28~%28planCode~%27logs-account~productId~%27logs%29){.external}
- A machine on which you will deploy ElastAlert.
- Some data on an alias or an index.

## Preparation

In order to deploy ElastAlert, it is important that you have data on which you want to alert things on. If you only have Graylog stream, you can use aliases to enable the OpenSearch API on your stream data. Here is how:


1. Go to the Logs Data Platform manager.
2. In the Alias panel, click the `Add an alias`{.action} button.
3. Choose a name and define a description for your alias.
4. Save the entry by clicking the `Save`{.action} button.
5. Once the alias has been created. Use the **...** menu on the right side and select the `Attach content to the alias`{.action} option.
6. Define there the data streams you want to associate to your alias.
7. That's it.

![Alias creation](images/alias.png){.thumbnail}

If you only have [indices](../index-as-a-service){.ref}, you can use them directly in the ElastAlert configuration.

## Instructions

ElastAlert configuration consists in three steps:

- Installing ElastAlert and its metadata indices.
- Configuring the main configuration file.
- Configuring the alert rules.


### Installation


Installing ElastAlert can be done in different ways as described in their [documentation.](https://elastalert2.readthedocs.io/en/latest/elastalert.html#running-elastalert){.external}. You can either use the docker image or install the python 3 packages.

You must clone the Jertel ElastAlert repository for the most recent changes:

```shell-session
$ git clone https://github.com/jertel/elastalert2.git
```

Install the module:

```shell-session
$ pip install "setuptools>=11.3"
$ python setup.py install
```

If there is any error about any missing packages, install them manually. For example:

```shell-session
$ pip install setuptools_rust
```

The next step is to configure ElastAlert meta-indices using the provided tool **elastalert-create-index**.
ElastAlert needs **5** indices to operate:

- The **generic** index containing all active alerts.
- The **status** index containing the queries run to trigger the alerts.
- The **error** index with all the errors encountered.
- The **silence** index indicating if a reoccuring alert should be triggered or silenced.
- The **past** index with all the alerts triggered and closed.

The following command will create the indices on Logs Data Platform directly from OpenSearch API.

```shell-session
$ elastalert-create-index --host <ldp-cluster>.logs.ovh.com --port 9200 --username <username> --password <password> --ssl --index <username>-i-<suffix>
```

Tou should pay attention to the following points:

- The `<ldp-cluster>` must be the one assigned to you (find on the **Home** page of the LDP Manager).
- `<username>` is the username used to connect to the API or to the Logs Data Platform interfaces (Graylog or Kibana).
- `<password>` is the associated password. You can use [tokens](../tokens-logs-data-platform){.ref} in place of the username/password couple for your credentials.
- The `--index` is the most important here since you **must** follow the index naming convention of Logs Data Platform. Use the presented form `<username>-i-` as a base name for your meta-indices. `<suffix>` can be personalized to any alphanumeric characters.

This command will prompt you with different questions:

```shell-session
Verify TLS certificates? t/f: t
Enter optional Elasticsearch URL prefix (prepends a string to the URL of every request):
Name of existing index to copy? (Default None)
Reading Elastic 7 index mappings:
Reading index mapping 'es_mappings/7/silence.json'
Reading index mapping 'es_mappings/7/elastalert_status.json'
Reading index mapping 'es_mappings/7/elastalert.json'
Reading index mapping 'es_mappings/7/past_elastalert.json'
Reading index mapping 'es_mappings/7/elastalert_error.json'
New index logs-**-*****-i-***** created
Done!
```


This will then create 5 indices and place the mapping on them. All you need after is to create the ElastAlert configuration file and some rules.

### ElastAlert configuration file.

Without further delay here is a sample config.yml file you can use for your configuration:

```yaml
rules_folder: /opt/elastalert/rules
run_every:
  minutes: 5
buffer_time:
  hours: 6
es_host: <ldp-cluster>.logs.ovh.com
es_port: 9200
use_ssl: True
verify_certs: True
es_username: <username>
es_password: <password>
writeback_index: <username>-i-<suffix>
alert_time_limit:
  days: 2
```

You can find all the available options [here](https://elastalert2.readthedocs.io/en/latest/running_elastalert.html#downloading-and-configuring){.external}.

- **rules_folder** is where ElastAlert will load rule configuration files from. It will attempt to load every .yaml file in the folder. Without any valid rules, ElastAlert will not start. In this folder.
- **run_every** is how often ElastAlert will query OpenSearch.
- **buffer_time** is the size of the query window, stretching backwards from the time each query is run.
- **es_host** is the address of an OpenSearch cluster where ElastAlert will store data about its state, queries run, alerts, and errors. Each rule may also use a different OpenSearch host to query against.
- **es_port** is the port corresponding to es\_host.
- **use_ssl**: whether or not to connect to es\_host using TLS. TLS is mandatory in our platform.
- **verify_certs** whether or not to verify TLS certificates. Our platform uses certificates validated by most operating systems and browsers.
- **es_username** is the username used to connect to OpenSearch APIs.
- **es_password** is the password used to connect to OpenSearch APIs. Remember that you can use tokens in place of these credentials.
- **writeback_index** is the name of the index in which ElastAlert will store data. Use the same name you used to configure indices with `elastalert-create-index`.
- **alert_time_limit** is the retry window for failed alerts.


### Rules configuration

In this example, we will create a [frequency.yml](https://elastalert2.readthedocs.io/en/latest/ruletypes.html#frequency){.external} rule which will send a email if the field **user** with the value **Oles** appears more than **3** times in less than **4 hours** and send an **email**. If your machine cannot send an email, you can still test the rule (it will just fail at the sending step).


```yaml
name: Example frequency rule

# (Required)
# Type of alert.
# the frequency rule type alerts when num_events events occur with timeframe time
type: frequency

# (Required)
# Index to search, wildcard supported
index:  <index-or-alias-to-check>

# (Required, frequency specific)
# Alert when this many documents matching the query occur within a timeframe
num_events: 3

# (Required, frequency specific)
# num_events must occur within this amount of time to trigger an alert
timeframe:
  hours: 4

timestamp_field: timestamp
timestamp_type: custom
timestamp_format: '%Y-%m-%d %H:%M:%S.%f'
timestamp_format_expr:  'ts[:23]'

# (Required)
# A list of OpenSearch filters used for find events
# These filters are joined with AND and nested in a filtered query
# For more info: https://opensearch.org/docs/latest/opensearch/query-dsl/index/
filter:
- term:
    user: "Oles"

# (Required)
# The alert is used when a match is found
alert:
- "email"

# (required, email specific)
# a list of email addresses to send alerts to
email:
- "elastalert@example.com"
```

We won't detail all the parameters since most of them are self-explanatory. However, please pay attention to the **index** parameter. This index or alias is the one containing the logs or documents you want to be alerted from.

It's also important to customize the timestamp parameters according to the timestamp of your logs or documents. Here we customize a **custom** timestamp on the **timestamp_field** `timestamp` with the format used in the logs pipeline `%Y-%m-%d %H:%M:%S.%f`. Because this format can have more than 3 extra numbers, we need to truncate them using the **timestamp_format_expr** option. Note that Elastalert does not support nanoseconds, so you will have to limit the precision of your timestamp to microseconds.

## Launch ElastAlert

To launch ElastAlert, use the following command:

```shell-session
$ elastalert --config config.yml
```

To test your alert you can use the following curl command sending logs to our [OpenSearch endpoint](../ldp-index){.ref}:

```shell-session
$ curl -H 'Content-Type: application/json' -u '<username>:<password>' -XPOST https://<ldp-cluster>.logs.ovh.com:9200/ldp-logs/message -d '{ "X-OVH-TOKEN" : "stream-token>" , "test_field" : "OVHcloud" , "user": "Oles", "short_message" : "Hello OpenSearch input", "host" : "OVHcloud_elastalert" }'
```

If you send this event more than 3 times, the elastalert process will try to send an alert to the configured email address.

ElastAlert has a lot of integrations for alerting including Email, JIRA, OpsGenie, SNS, HipChat, Slack, MS Teams, PagerDuty, Zabbix, custom commands and [many more](https://elastalert2.readthedocs.io/en/latest/ruletypes.html#alerts){.external}.


## Go further

- Getting Started: [Quick Start](../quick-start){.ref}
- Documentation: [Guides](../){.ref}
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs)){.external}
