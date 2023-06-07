---
title: Grafana - Tutorial - How to use the Grafana API
excerpt: "Learn how to use the Grafana API"
updated: 2023-04-06
---

**Last updated 6th April 2023**

## Objective

Using the Grafana API is not obvious and already clearly documented.
This tutorial explains how to configure Grafana to use the API and how make calls to the exposed API.

## Requirements

- A [Public Cloud project](https://www.ovhcloud.com/en-ca/public-cloud/) in your OVHcloud account
- Access to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca)
- A Grafana database running on your OVHcloud Public Cloud project (see [this guide](/pages/platform/databases/databases_01_order_control_panel) to create a managed Grafana)

## Instructions

### Create a Grafana service account

In the configuration menu, display the `Service accounts`{.action} tab:

![Grafana service accounts tab](images/service-account-tab.png){.thumbnail}

Create a new service account `sa-editor` with the role `Editor`:

![Grafana service accounts creation](images/service-account-creation.png){.thumbnail}

Click on `Add service account token`{.action}:

![Grafana service accounts token button](images/add-service-account-token-button.png){.thumbnail}

Enter the name of the desired token, `grafana-sa-token-editor`, and click on `Generate token`{.action}:

![Grafana service accounts token generation](images/generate-sa-token.png){.thumbnail}

Copy the generated token:

![Grafana service accounts token generated](images/sa-account-generated-token.png){.thumbnail}

> [!warning]
> 
> After closing the pop-up, you will no longer be able to display the token!

The created token appears in the tokens list:

![Grafana service accounts token list](images/sa-account-created-tokens-list.png){.thumbnail}

You are ready to use this token with the Grafana API.

### Use the Grafana API

> [!primary]
>
> Detailed instructions on how to use the API and the possible actions can be found in the official documentation: <https://grafana.com/docs/grafana/latest/developers/http_api/>

> [!warning]
> 
> Don't forget to set the `Authorised IP addresses` in the Grafana configuration. See our guide on [Configuring your Grafana instance to accept incoming connections](/pages/platform/databases/grafana_02_prepare_for_incoming_connections) for more details.

To send a request to the API you must use the previously created token and set it in the request header as a "Bearer token":

```bash
export GRAFANA_API_TOKEN=042footoken420

curl -H "Authorization: Bearer $GRAFANA_API_TOKEN" https://grafana-xxxxxxxxx-yyyyyyyyy.database.cloud.ovh.net/api/folders    
[
    {
        "id":11,
        "uid":"HnDCAp-4k",
        "title":"foo 1"
    },
    {
        "id":5,
        "uid":"cb_S6Pb4k",
        "title":"foo 2"
    },
    {
        "id":9,
        "uid":"Xav55taVk",
        "title":"foo 3"
    },
    {
        "id":10,
        "uid":"AH8sApaVz",
        "title":"foo 4"
    }
]

```

Here it is, you can now use all the power of the Grafana API.

## We want your feedback!

We would love to help answer questions and appreciate any feedback you may have.

Are you on Discord? Connect to our channel at <https://discord.gg/PwPqWUpN8G> and interact directly with the team that builds our databases service!
