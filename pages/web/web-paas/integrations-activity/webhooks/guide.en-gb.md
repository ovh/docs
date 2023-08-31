---
title: Webhooks
slug: webhooks
section: Activity
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

## Setup

```bash
webpaas integration:add --type=webhook --url={{<variable "URL_TO_RECEIVE_JSON" >}}
```

The webhook URL receives a POST message for every activity that's triggered.
The message contains complete information about the entire state of the project at that time.

It's possible to set the integration to only send certain activity types, or only activities on certain branches.
The CLI prompts you to specify which to include or exclude.
Leave at the default values to get all events on all environments in a project.

For testing purposes, you can generate a URL from a service such as [webhook.site](https://webhook.site/)
and use the generated URL as `{{<variable "URL_TO_RECEIVE_JSON" >}}`.

## Webhook schema

See the [activity script](../reference) reference for a description of the webhook payload.

## Validate the integration

To verify your integration is functioning properly, run the following [CLI command](../../integrations-overview#validate-integrations):

```bash
webpaas integration:validate
```
