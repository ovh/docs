---
title: Securing Logs Data Platform's APIs with tokens
excerpt: If you want to give access to your logs to a software application or automate tasks that depend on your logs, you may need to access them through the API.
updated: 2025-12-17
---

## Objective

With Logs Data Platform, there are 3 ways to query your logs:

- The [Graylog Web Interface](https://gra1.logs.ovh.com)
- The [Graylog API](https://gra1.logs.ovh.com/api/api-browser/global/index.html#!/search47universal47relative/searchRelative)
- The [OpenSearch API](https://opensearch.org/docs/latest/opensearch/query-dsl/index/) located on port 9200 of your cluster (find its address in the **Home** Page) against your [alias](/pages/manage_and_operate/observability/logs_data_platform/visualization_opensearch_dashboards).

So you open a [Grafana](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana) or even [a terminal Dashboard for Graylog](https://github.com/Graylog2/cli-dashboard).

All these accesses are secured by your username and password. But what if you don't want to put your Logs Data Platform credentials everywhere? You can just use tokens to access all these endpoints and revoke them anytime you want. This tutorial is here to tell you how.

## Requirements

- A service with IAM enabled to use IAM tokens or without IAM to use legacy tokens

## Instructions

### Generating tokens with IAM

Before generating tokens with IAM you will need to create [a local user or a service account](/pages/manage_and_operate/iam/identities-management). Both have specificities detailed in the IAM documentation. Don't forget to attach these new identities to your [IAM Policies](/pages/manage_and_operate/observability/logs_data_platform/iam_access_management).

#### Local Users

Create a local user by following the [dedicated documentation](/pages/account_and_service_management/account_information/ovhcloud-users-management) and create the right [IAM policies](/pages/manage_and_operate/observability/logs_data_platform/iam_access_management). Once created, you can use the OVHcloud API to create a token for this user:

> [!api]
>
> @api {v1} /me POST /me/identity/user/{user}/token
>

This call will return a bearer access token for your local user.

You can then use this token on Logs Data Platform backend APIs:

```bash
ldp@laptop curl -H 'content-type: application/json' --oauth2-bearer <access_token> -XPUT 'https://<your_cluster>.logs.ovh.com/api/search/universal/relative?query=*&range=300&filter=streams:a123aebc12345623aafd'
```

Or with the Bearer header:

```bash
ldp@laptop curl -H 'content-type: application/json' -H "Authorization: Bearer <access_token>" -XPUT 'https://<your_cluster>.logs.ovh.com/api/search/universal/relative?query=*&range=300&filter=streams:a123aebc12345623aafd'
```

These tokens do not expire but can be deleted whenever needed with this call:

> [!api]
>
> @api {v1} /me DELETE /me/identity/user/{user}/token/{name}
>


#### Service accounts

Create a service account and tokens by following the [documentation](/pages/manage_and_operate/api/manage-service-account). Service accounts are an identifier/token pair following the OAuth2 **client- credentials** authentication mechanism. If you are familiar with OAuth2 clients, here are the API calls to create them. We still recommend you to read the dedicated guide to understand its specificities. We encourage you to use local users if you can since they are easier to set up.

To create a service account, use the following API call:

> [!api]
>
> @api {v1} /me POST /me/api/oauth2/client
>

With this API call, you can create OAuth2 credentials for several authentication mechanisms. The one we are interested in here is **CLIENT_CREDENTIALS**. This mechanism does not require a callback URL.

You must supply the following values:

- **callbackUrls**: An empty array of callback URLs `[]`.
- **flow**: `CLIENT_CREDENTIALS`.
- **name**: The name you would like to provide to your identifier.
- **description**: A description of your identifier. We recommend describing how you will use this identifier. If you audit your access in the future, it is easier to link it to your application name, so that you can easily find out where the identifier is deployed (and what the impact will be if you change your access).

In response, the API will provide you with two pieces of information:

- **clientId**: Your service account ID.
- **clientSecret**: A token allowing you to authenticate yourself on our APIs. This information must be stored securely. With these two credentials, you can log in to this service account and get the rights associated with it. Save this value. It will not be possible to retrieve it at a later stage.

In order to retrieve an API token, you can use the following HTTP call with these two pieces of information:

```bash
curl --request POST \
  --url 'https://www.ovh.com/auth/oauth2/token' \
  --header 'content-type: application/x-www-form-urlencoded' \
  --data grant_type=client_credentials \
  --data client_id=0f0f0f0f0f0f0f0f \
  --data client_secret=xxxxx \
  --data scope=all
```

Depending on the location of your API, you will need to use the following URL:

- **EU API**: `https://www.ovh.com/auth/oauth2/token`.
- **CA API**: `https://ca.ovh.com/auth/oauth2/token`.

Following this API call, you will receive a response in the following format:

```json
{
  "access_token":"your-api-token",
  "token_type":"Bearer",
  "expires_in":3599,
  "scope":"all"
}
```

Save the token in the **access_token** field. You will need it to authenticate your API calls. 

This access token can then be used to interact with Logs Data Platform backend APIs. Don't forget to manage access rights of your service account with the [IAM policies](/pages/manage_and_operate/observability/logs_data_platform/iam_access_management).

```bash
ldp@laptop curl -H 'content-type: application/json' --oauth2-bearer <access_token> -XPUT 'https://<your_cluster>.logs.ovh.com:9200/_cat/indices/ldp-*'
```

Or with the Bearer header:

```bash
ldp@laptop curl -H 'content-type: application/json' -H "Authorization: Bearer <access_token>" -XPUT 'https://<your_cluster>.logs.ovh.com:9200/_cat/indices/ldp-*'
```

Note that access tokens created through a service account expire after some time. You must regenerate a new one after it has expired.


#### Hybrid authentication

For software that does not support the Bearer authentication scheme, we provide a hybrid authentication mode based on the Basic authentication scheme. Use a username that starts with **pat_jwt_** and supply the token value as the password.

```bash
ldp@laptop curl -H 'content-type: application/json' \\
  -u pat_jwt_<your_username>:<access_token> \\
  -XPUT 'https://<your_cluster>.logs.ovh.com:9200/_cat/indices/ldp-*'
```

### Legacy tokens

Legacy tokens are still working and maintained for users without IAM. They are not available to IAM-enabled users. We strongly encourage you to migrate to IAM now and use the more flexible tokens described above.

Once you have logged into Logs Data Platform you will have access to the token generation function from the Configuration panel.

![Token Menu](images/token_menu.png){.thumbnail}

On this page you will have the possibility to create a token and to remove them. Note that you cannot modify a token.

![token generation](images/token_generation.png){.thumbnail}

Once the token is created, you can use its value or remove it:

![token generated](images/token_generated.png){.thumbnail}

#### Using your legacy tokens

Using your legacy token is not different than using your credentials. You just have to replace your username with the word **token** and your password with the legacy token (the opposite works too).
For example, to issue a search against the Graylog API with the legacy token obtained above, you can do the following:

```shell-session
$ curl -u token:kujg9g227qv0123mav3s0q4pra4psqsi5leka6j7lc62qdef58q -XGET "https://<your_cluster>.logs.ovh.com/api/search/universal/relative?query=*&range=300&filter=streams:a123aebc12345623aafd"
```

Note that you have to replace the stream value in the filter parameter by the Graylog Id of your stream. The Graylog id can be found in the URL of your stream search page in Graylog.
This URL has this form:

```
https://gra2.logs.ovh.com/streams/5ab52dc43ce3010451deacd1/search
```

The value **5ab52dc43ce3010451deacd1** is the Graylog Id of your stream.

To issue a search against the OpenSearch API, you also use the same credentials.

```shell-session
$ curl -u token:kujg9g227qv0123mav3s0q4pra4psqsi5leka6j7lc62qdef58q "https://<your_cluster>.logs.ovh.com:9200/your_alias/_search?pretty"
```

This call will launch a quick search (to retrieve the count and a sample of your documents) against the alias **your_alias**. Replace the alias by the one you have set up in your Logs Data Platform console. Note that these credentials are usable in place of your account credentials in Grafana (or any tool that supports Basic Authentication with OpenSearch).

The Graylog Web Interface does not support legacy token authentication.

## Go further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms)
- Create an account: [Try it!](/links/manage-operate/ldp)