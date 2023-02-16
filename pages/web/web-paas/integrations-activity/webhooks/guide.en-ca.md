---
title: Webhooks
slug: webhooks
section: Activity
updated: 2021-05-11
---

**Last updated 11th May 2021**


## Objective  

Webhooks allow you to host a script yourself externally that receives the same payload as an activity script and responds to the same events, but can be hosted on your own server in your own language.


## Setup

```bash
webpaas integration:add --type=webhook --url=A-URL-THAT-CAN-RECEIVE-THE-POSTED-JSON
```

The webhook URL will receive a POST message for every "Activity" that is triggered, and the message will contain complete information about the entire state of the project at that time.  In practice most of the message can be ignored but is available if needed.  The most commonly used values are documented below.

It's also possible to set the integration to only send certain activity types, or only activities on certain branches.  The CLI will prompt you to specify which to include or exclude.  Leave at the default values to get all events on all environments in a project.

## Webhook schema

See the [activity script](../reference) reference for a description of the webhook payload.

## Validate the integration

You can then verify that your integration is functioning properly [using the CLI](../../integrations-overview#validating-integrations) command

```bash
webpaas integration:validate
```
