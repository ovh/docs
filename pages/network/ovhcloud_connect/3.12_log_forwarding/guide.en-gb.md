---
title: 'Set up logs forwarding for OVHcloud Connect'
excerpt: 'Forward your OVHcloud Connect event logs to Logs Data Platform for storage, querying, and visualisation'
updated: 2026-04-22
---

## Objective

The purpose of this guide is to show you how to enable the forwarding of logs from your OVHcloud Connect to Logs Data Platform (LDP), a platform that helps you store, archive, query and visualise your logs.

If you would like to find out more about Logs Data Platform before reading this guide, refer to the [Logs Data Platform introduction guide](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Glossary

- **Logs Data Platform:** a fully managed and secured log management platform by OVHcloud. For more information, consult the [Logs Data Platform](/links/manage-operate/ldp) service page.
- **Data Stream:** a logical partition of logs which you create in an LDP account and which you will use when ingesting, viewing or querying your logs. Multiple sources can be stored in the same data stream, and it is the unit that can be used to define a log pipeline (retention policy, archiving, live streaming, etc.), access rights and alert policies.
- **Logs forwarding:** a feature integrated into an OVHcloud product to ingest the logs of its services into a *Data Stream* of an LDP account in the same OVHcloud account. This feature must be activated by the customer and per service.
- **Logs forwarding Subscription:** when enabling the logs forwarding for a given OVHcloud service to a given LDP *Data Stream*, a *Subscription* is created and attached to the *Data Stream* for further management by the customer.

## Requirements

- A Logs Data Platform (LDP) account with at least one active *Stream* configured. This guide will walk you through all the necessary steps: [Quick start for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
    - If you are not familiar with all the LDP *Stream* configuration possibilities, create a new one with the default options (indexing and websocket enabled, long-term storage disabled) for the purpose of this guide.
- An up-and-running [OVHcloud Connect service](../1.1_introduction_to_ovhcloud_connect/guide.en-gb.md).
- Both the LDP account and the OVHcloud Connect account must belong to the same OVHcloud account.

<!-- CP-NAV-START:network-ovhcloud-connect -->
<!-- CP-NAV-START:logs-data-platform -->
---

### OVHcloud Control Panel Access

**OVHcloud Connect:**

- **Direct link:** [OVHcloud Connect](/links/control-panel/network-ovhcloud-connect)
- **Navigation path:** `Network`{.action} > `OVHcloud Connect`{.action}

**Logs Data Platform:**

- **Direct link:** [Logs Data Platform](/links/control-panel/logs-data-platform)
- **Navigation path:** `Identity, Security & Operations`{.action} > `Logs Data Platform`{.action} > Select the platform concerned

---
<!-- CP-NAV-END:logs-data-platform -->
<!-- CP-NAV-END:network-ovhcloud-connect -->

## Concepts & limits

**What are the logs of an OVHcloud Connect?**

### Log kinds

There are four different kinds of logs which can be forwarded:

- **service**: Events related to the service's lifecycle (suspended, delivered, etc).
- **service_configuration**: Events related to the service configuration, including adding or deleting DC/POP configurations.
- **bgp**: Status of the BGP session.
- **interface**: Events related to the optic fibre interface, including incoming and outgoing light.

### Log contents

| Field name | Description | Type |
|------------|-------------|---------|
| kind | The kind of log forwarded | String |
| message | An explicit description of the logged event | String |
| neighbor | The remote address in the subnet established between the OVHcloud Connect service and the PoP | IP |
| service_uuid | The UUID of the OVHcloud Connect service concerned by the event | String |
| timestamp | The timestamp at which the event was logged | datetime (with millisecond resolution) e.g. 25/Mar/2024:14:07:19.536 |

## Enabling OVHcloud Connect log forwarding using APIs

Note that the forwarding activation is free of charge, but you will be charged for the usage of the Logs Data Platform service as per the standard price plan. For LDP pricing, refer to this [page](/links/manage-operate/ldp).

You will have to define the targeted *Stream* of one of your LDP accounts to which you want your logs forwarded. The enablement of the forwarding will create a subscription for this stream id.

You can retrieve the API specifications in the [OVHcloud API Portal](/links/api):

> [!api]
>
> @api {v1} /dbaas/logs POST /dbaas/logs/{serviceName}/output/graylog/stream
>

### Step 1 - Retrieve your target Stream (and ID)

List data streams of your Logs Data Platform account (enter your LDP ID in the form ldp-xx-xxxx into the field "serviceName"):

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream
>

Get the details of a data stream:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>

### Step 2 - Create your subscription

Use the following API call to create a subscription:

> [!api]
>
> @api {v1} /ovhCloudConnect POST /ovhCloudConnect/{serviceName}/log/subscription
>

> [!primary]
> You will need to replace:
>
> - **serviceName**: this is the internal name of your OVHcloud Connect service, you can find it in the OVHcloud Connect management page in the OVHcloud Control Panel or using the following API call:
>
> > [!api]
> >
> > @api {v1} /ovhCloudConnect GET /ovhCloudConnect
> >
>

The POST request has a payload that requires:

- `kind`: the kind of log you want to forward, among "service", "service_configuration", "bgp" and "interface".
- `streamId`: the target data stream of your LDP account where you want your OVHcloud Connect logs to be forwarded to.

> [!primary]
> You can find the available kinds using the following API call:
>
> > [!api]
> >
> > @api {v1} /ovhCloudConnect GET  /ovhCloudConnect/{serviceName}/log/kind
> >
>

```shell
POST /ovhCloudConnect/{serviceName}/log/subscription
{
  "kind": "string", // "service", "service_configuration", "bgp" or "interface"
  "streamId": "198ef9d5-c320-4000-8bee-236623da5b80" // The streamID of the targeted Stream.
}
```

You will get in response an `operationId`:

```shell
{
  "operationId": "f550aa1c-89ab-4b1a-81ae-4fba4959966f",
  "serviceName": "occ-xxxxx"
}
```

You can use the `operationId` to retrieve the `subscriptionId` for further management purposes using the following API call:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/operation/{operationId}
>

Alternatively, once the operation is finished, the subscriptions can be retrieved using the following API call:

> [!api]
>
> @api {v1} /ovhCloudConnect GET /ovhCloudConnect/{serviceName}/log/subscription
>

Once you have the `subscriptionId`, you can get the details using the following API call:

> [!api]
>
> @api {v1} /ovhCloudConnect GET /ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}
>

```shell
GET /ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}

{
"createdAt": "2025-08-28T07:42:50.645Z",
"kind": "string",
"resource": {
  "name": "string",
  "type": "string"
},
"serviceName": "string",
"streamId": "string",
"subscriptionId": "198efa11-f150-4000-8e8d-871b1e482b80",
"updatedAt": "2025-08-28T07:42:50.645Z"
}
```

## How to use OVHcloud Connect logs

Now that your logs are ingested and stored in your Logs Data Platform data stream, you can query your logs and build dashboards to have a graphical representation of your logs using the web-based UI of Graylog.

- In the OVHcloud Control Panel, retrieve the LDP username (ex: logs-xxxx) and its password in your Logs Data Platform account home page. You can refer to the [Quick start guide for Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start).
- Open the Graylog web-ui. You can retrieve the link in your account home page or using your Access point depending on your account region (for example: Gravelines region is https://gra1.logs.ovh.com/).
- Log into Graylog using your Logs Data Platform Username and Password.
- Search through your logs across the data stream of your Logs Data Platform account. You can refer to [Graylog writing search queries](https://go2docs.graylog.org/current/making_sense_of_your_log_data/writing_search_queries.html) documentation for details on search syntax.

Refer to the following documentation: [Logs Data Platform - Visualising, querying and exploiting your logs](/products/observability-logs-data-platform-visualizing-querying-exploiting) for more details about how to use your logs with Logs Data Platform, including how to:

- set up alerts
- view the logs in real time through a WebSocket
- build visualisations with OpenSearch Dashboards
- integrate with OpenSearch API
- connect with Grafana

## How to manage your subscriptions

At any time, you can retrieve the subscriptions attached to your Logs Data Platform data stream and choose to disable the forwarding by cancelling your subscription on your stream, so that your Logs Data Platform stream no longer receives your audit logs.

Note that this does not delete the logs stored before the subscription was cancelled, as the data stored in a log stream is immutable unless you delete the entire stream.

To delete your subscription you can use the following API call:

> [!api]
>
> @api {v1} /ovhCloudConnect DELETE /ovhCloudConnect/{serviceName}/log/subscription/{subscriptionId}
>

## What's next?

- [Monitor your OVHcloud Connect](../3.9_monitor/guide.en-gb.md)
- [Troubleshooting OVHcloud Connect](../1.9_troubleshooting/guide.en-gb.md)
- [Declare and follow up on an incident](../3.10_incident_followup/guide.en-gb.md)

## Go further

If you would like training or technical assistance for the implementation of our solutions, contact your sales representative or click [this link](/links/professional-services) to get a quote and request a personalized analysis of your project from our Professional Services team experts.

Join our [community of users](/links/community).
