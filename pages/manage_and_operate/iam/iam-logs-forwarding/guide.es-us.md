---
title: Generating OVHcloud account logs with Logs Data Platform (EN)
excerpt: Find out how to forward OVHcloud customer account logs to Logs Data Platform
updated: 2024-02-29
---

## Objective

In this guide you will learn how to transform your OVHcloud customer account events as actionable data through Logs Data Platform, a fully managed solution that helps you store, archive, query and visualise your logs.

To discover Logs Data Platform before continuing with this guide, please refer to [this documentation](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP).

## Requirements

- You have an [OVHcloud customer account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- You have a Logs Data Platform (LDP) account within this OVHcloud account with at least one active stream configured. [This guide](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) will walk you through all the necessary steps.

## Glossary

**Logs Data Platform**: Fully managed and secured log management platform proposed by OVHcloud. Find more information on the [Logs Data Platform service page](https://www.ovhcloud.com/es/logs-data-platform/).

**Data stream**: A logical partition of logs that you create in an LDP account that you will use when ingesting, visualising or querying your logs. Multiple sources can be stored in the same data stream, and it is the unit for defining a logs pipeline (retention policy, archiving, live streaming, etc.), access rights and alert policies.

**Logs forwarding**: Feature integrated in an OVHcloud product to ingest logs from its services to a data stream of an LDP account in the same OVHcloud account. The feature has to be enabled by the customer per service.

**Logs forwarding subscription**: When enabling the logs forwarding for a given OVHcloud service to a given LDP data stream, a subscription is created and attached to the data stream for further management by the customer.

## Instructions

### OVHcloud Account logs types

OVHcloud account propose 3 levels of logs:

- **Audit Logs**: Provide a security-relevant, chronological set of records documenting the sequence of actions in your OVHcloud account (i.e. logins, password change, etc.).
- **Activity Logs**: Provide all records of actions in your OVHcloud account from API calls and actions done in the Control Panel.
- **Access policy logs**: Provide all records of access evaluation in your OVHcloud account, including actions from third-party integration (i.e. actions authorised or unauthorised through IAM policies).

### Enable logs forwarding

You can enable the forwarding of the OVHcloud account logs via API. You will have to target a stream of one of your LDP accounts. The logs will be forwarded to that stream. Enabling the forwarding will create a subscription for this stream ID.

Note that enabling the forwarding is free of charge, but you will be charged for the usage of your Logs Data Platform service as per the standard price plan. For LDP pricing refer to the [Logs Data Platform product page](https://www.ovhcloud.com/es/logs-data-platform/).

To enable forwarding, you can use the following APIs:

|**Method**|**Log type**|**Path**|**Description**|
| :-: | :-: | :-: | :-: |
POST|Audit logs|/me/logs/audit/forward|Forward account audit logs|
POST|Activity logs|/me/api/log/subscription|Forward API and Control Panel account logs|
POST|Access policy logs|/iam/logs/forward|Forward account IAM logs to a dedicated logs stream|

For instance, for audit logs:

```json
POST /me/logs/audit/forward
{
    "streamId": "ab51887e-0b98-4752-a514-f2513523a5cd"
}
```

The API requires a `streamId`, which is the target data stream of your LDP account where your OVHcloud account logs will be forwarded to. You will get in response an `operationId`, so you can use it to retrieve the `subscriptionId` for further management purposes using the [Logs Data Platform read operation endpoint](https://ca.api.ovh.com/console-preview/?section=%2Fdbaas%2Flogs&branch=v1#get-/dbaas/logs/-serviceName-/operation).

> [!primary]
> You can find your `streamId` in the `Logs Data Platform`{.action} section of the OVHcloud Control Panel:
>
> - Go to the `Data streams`{.action} page of your Logs Data Platform account. In the table, click the `...`{.action} button to the right of the target data stream, then click `Edit`{.action}.
>
> ![Find stream ID](images/retrieve_streamId_1.png){.thumbnail}
>
> - Copy the `streamId` from your Logs Data Platform account.
>
> ![Find stream ID](images/retrieve_streamId_2.png){.thumbnail}

Alternatively, you can retrieve your streams using the Logs Data Platform API:

> [!api]
>
> @api {GET} /dbaas/logs/{serviceName}/output/graylog/stream
> @api {GET} /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}
>

### Access to OVHcloud account logs

Now that your OVHcloud account logs are ingested and stored in your Logs Data Platform data stream, you can query your logs and build dashboards to have a graphical representation using the web-based UI of Graylog.

- Retrieve the admin user (the Logs Data Platform service name) and the password in your Logs Data Platform account home page.

![Access Graylog](images/access_graylog.png){.thumbnail}

- Open the Graylog `web-ui`. You can retrieve the link from your account home page, or use your access point depending on your account region (for example Gravelines regions: <https://gra1.logs.ovh.com/>).

- Log in to Graylog using your **Logs Data Platform service name** and **password**.

![Access Graylog](images/access_graylog_2.png){.thumbnail}

- Search through your logs across the data stream of your Logs Data Platform account. You can refer to the [Graylog writing search queries documentation](https://go2docs.graylog.org/4-x/making_sense_of_your_log_data/writing_search_queries.html?tocpath=Searching%20Your%20Log%20Data%7C_____1) for details on the search syntax.

![Access Graylog](images/access_graylog_3.png){.thumbnail}

For more details about how to use your logs with Logs Data Platform, refer to the documentation [Logs Data Platform - Visualising, querying and exploiting your logs](/products/observability-logs-data-platform-visualizing-querying-exploiting). This includes:

- How to set up alerts.
- How to view the logs in real time through a WebSocket.
- How to build visualisation with OpenSearch Dashboards.
- How to integrate with OpenSearch API.
- How to to connect with Grafana.

### Details of generated logs

#### Audit logs

For every action related to the security of the OVHcloud account an entry is generated.
The Logs generated are:

- **For login**

![Audit log](images/Audit_log_login.png){.thumbnail}

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|account|String|OVHcloud account concerned by the action|
|authDetails_userDetails_type|ACCOUNT, PROVIDER or USER|Indicate if the user is a root account (ACCOUNT), a local user (USER) or a user coming from an SSO (PROVIDER)|
|authDetails_userDetails_user|String|Name of the user|
|client_ip|String|IP of the user who performed the action|
|client_ip_geolocation|String|Geolocalisation of the user who performed the action|
|client_ip_city_name|String|City name of the user who performed the action (if available)|
|client_ip_country_code|String|Country code of the user who performed the action|
|loginSuccessDetails_mfaType|String|Indicate the type of MFA use: BACKUP_COD, MAIL, NONE, SMS, TOTP, U2F, UNKNOWN|
|loginSuccessDetails_userAgent|String|User agent of the user|
|source|String|iam.ovhcloud|
|type|String|LOGIN_SUCCESS|

- **For password change**

![Audit log](images/Audit_log_password_change.png){.thumbnail}

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|account|String|OVHcloud account concerned by the action|
|client_ip|String|IP of the user who performed the action|
|client_ip_geolocation|String|Geolocalisation of the user who performed the action|
|client_ip_city_name|String|City name of the user who performed the action (if available)|
|client_ip_country_code|String|Country code of the user who performed the action|
|source|String|iam.ovhcloud|
|type|String|ACCOUNT_PASSWORD_CHANGED, USER_PASSWORD_CHANGED|
|userPasswordChangedDetails|String|Login of user impacted by password change|

#### Activity logs

For every action performed by users through the API or the Control Panel, an entry is generated with the following data:

![Activity log](images/Activity_logs.png){.thumbnail}

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|account|String|OVHcloud account concerned by the action|
|client_ip|String|IP of the user who performed the action|
|client_ip_geolocation|String|Geolocalisation of the user who performed the action|
|client_ip_city_name|String|City name of the user who performed the action (if available)|
|client_ip_country_code|String|Country code of the user who performed the action|
|identities_array|Array of String|List of identities of the user who performed the action (user URN and user’s groups URN)|
|method|GET, POST, PUT or DELETE|Method of the API|
|path|String|API call concerned by the action|
|request_id|String|Unique ID of the request|
|service_name|String|OVHcloud services concerned by the action|
|source|manager or api|If the action was performed through the Control Panel (manager) or the API (api)|
|status_int|Number|HTTP code of request result|
|url|String|URL called on the action|
|user_agent|String|User agent of the user who performed the action|
|username|String|Username of the user who performed the action|

#### Access Policies logs

For every action evaluated by the OVHcloud IAM, an entry is generated with the following data:

![Activity log](images/Access_Policies_logs.png){.thumbnail}

|**Field**|**Value**|**Description**|
| :-: | :-: | :-: |
|account|String|OVHcloud account concerned by the action
|identities_array|Array of String|List of identities of the user who performed the action (user URN and user’s groups URN)|
|requested_actions_array|Array of String|List of actions requested by the user|
|resource|String|URN of the OVHcloud resource concerned by the action|
|authorized_actions_array|Array of String|List of actions authorized after policy evaluation|
|unauthorized_actions_array|Array of String|List of actions unauthorized after policy evaluation|

### Manage subscriptions

At any point, you can retrieve subscriptions attached to your Logs Data Platform data stream and choose to disable the forwarding by cancelling your subscription on your stream. So that your Logs Data Platform stream doesn't receive your audit logs anymore.

Note that this doesn't delete the logs that have been stored prior to the subscription cancellation, as data stored in a logs stream is immutable unless you delete the entire stream.

Currently, you can only manage your subscriptions via Logs Data Platform’s API.

The three following Logs Data Platform API routes respectively allow you to:

- Retrieve a list of `subscriptionId`s associated with a specific logs stream based on its `streamId`.

> [!api]
>
> @api {GET} /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/subscription
>

- Retrieve the information (such as the *resource type*, in this case **account-api**, **account-iam** and **account-audit**, and *resource name* – the name of the OVHcloud account) of the service associated with the subscription based on its `subscriptionId`.

> [!api]
>
> @api {GET} /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/subscription/{subscriptionId}
>

- Delete a subscription based on its `subscriptionId`.

> [!api]
>
> @api {DELETE} /dbaas/logs/{serviceName}/output/graylog/stream/{streamId}/subscription/{subscriptionId}
>

## Go further

Join our community of users on <https://community.ovh.com/en/>.
