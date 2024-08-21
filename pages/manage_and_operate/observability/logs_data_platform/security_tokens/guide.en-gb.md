---
title: Securing Logs Data Platform's APIs with tokens
excerpt: If you want to give access to your logs to a software or automatize some tasks depending on your logs. You will maybe need to access them through the API. The most secure way to do this is to use tokens.
updated: 2023-06-02
---

## Objective

With Logs Data Platform, there are 3 ways to query your logs.

- The [Graylog Web Interface](https://gra1.logs.ovh.com){.external}
- The [Graylog API](https://gra1.logs.ovh.com/api/api-browser/global/index.html#!/search47universal47relative/searchRelative){.external}
- The [OpenSearch API](https://opensearch.org/docs/latest/opensearch/query-dsl/index/){.external} located at the port 9200 of your cluster (find its address in the **Home** Page) against your [alias](/pages/manage_and_operate/observability/logs_data_platform/visualization_opensearch_dashboards).

So you can pop up a [Grafana](/pages/manage_and_operate/observability/logs_data_platform/visualization_grafana) or even [a terminal Dashboard for Graylog](https://github.com/Graylog2/cli-dashboard){.external}.

All these accesses are secured by your username and password. But what if you don't want to put your Logs Data Platform credentials everywhere? You can just use tokens to access all these endpoints and revoke them anytime you want. This tutorial is here to tell you how.

## Requirements

- No specific requirements

## Instructions

### Generating tokens using the manager

Once you have logged into Logs Data Platform you will have access to the token generation function from the Configuration panel.

![Token Menu](images/token_menu.png){.thumbnail}

On this page you will have the possibility to create a token and to remove them. Note that you cannot modify a token.

![token generation](images/token_generation.png){.thumbnail}

Once the token is created, you can use its value or remove it:

![token generated](images/token_generated.png){.thumbnail}

### Generating tokens with API

One goal of tokens is to automatize API calls. Sometimes you even need to automatize token creation. That's why it is possible to create tokens by using only the OVHcloud APIs. If you're familiar with the OVHcloud API, it should be fairly straightforward, if you're not, this section will help you with it. Generating tokens is two API calls away. You can use the OVHcloud API console to make theses calls.

First you will have to retrieve the serviceName you want to generate token for. The API call to get your serviceName is the following:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs
>

If you want to know what is the Logs Data Platform username associated with this serviceName, use the following call:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}
>

This call returns the service object of the connected identity.

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)

Once you have the login you want, use the following call to add a new token:

> [!api]
>
> @api {v1} /dbaas/logs POST /dbaas/logs/{serviceName}/token
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)
> - `name`: The name of your token (string)
>

Please replace **serviceName** with your serviceName, and replace **name** with the name of your choice for your token. This call will give you a taskId. After a few seconds you can retrieve your **tokenId** with this call:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/token
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)
>

This will give you back the id of your token. The actual value of the token can be retrieved with this next call:

> [!api]
>
> @api {v1} /dbaas/logs GET /dbaas/logs/{serviceName}/token/{tokenId}
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)
> - `tokenId`: UUID of your token (string)

Here is the final response you will get.

```json
{
    "updatedAt": "2016-12-01T12:30:26.566986+00:00",
    "createdAt": "2016-12-01T12:30:26.566939+00:00",
    "value": "kujg9g227qv0123mav3s0q4pra4psqsi5leka6j7lc62qdef58q",
    "name": "token_name",
    "tokenId": "XXXXXXXXXXXXXXXXXXXXXXXXXXX"
}
```

The token value is the value field. That is the field you will need to use the Logs Data Platform Search APIs.

Finally to delete your token, use the following call:

> [!api]
>
> @api {v1} /dbaas/logs DELETE /dbaas/logs/{serviceName}/token/{tokenId}
>

> Parameters:
>
> - `serviceName`: The internal ID of your Logs Data Platform service (string)
> - `tokenId`: UUID of your token (string)
>

### Using your tokens

Using your token is no different than using your credentials. You just have to replace your username with the word **token** and your password with the token (the opposite works too).
For example to issue a search against the Graylog API with the token obtained above, you can do the following:

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

The only place you cannot use your token is the Graylog Web Interface.

## Go further

- Getting Started: [Quick Start](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)
- Documentation: [Guides](/products/observability-logs-data-platform)
- Community hub: [https://community.ovh.com](https://community.ovh.com/en/c/Platform/data-platforms){.external}
- Create an account: [Try it!](https://www.ovh.com/fr/order/express/#/express/review?products=~(~(planCode~'logs-account~productId~'logs))){.external}

