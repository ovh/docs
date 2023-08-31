---
title: Health notifications
slug: integrations-notifications
section: Integrations
---

**Last updated 31st August 2023**



## Objective  

{{% description %}}

To add or modify an integration for a project, you need to be a [project admin](../administration/users.md#project-roles).

## Available notifications

### Low-disk warning

{{< vendor/name >}} monitors disk space usage on all applications and services in your cluster.

* When available disk space drops below 20% or 4&nbsp;GB, whichever is smaller, a warning notification is generated.
* When available disk space drops below 10% or 2&nbsp;GB, whichever is smaller, a critical notification is generated.
* When available disk space returns above 20% or 4&nbsp;GB, whichever is smaller, an all-clear notification is generated.

Notifications are generated every 5 minutes, so there may be a brief delay between when the threshold is crossed and when the notification is triggered.

## Configuring notifications

Health notifications can be set up via the [{{< vendor/name >}} CLI](../administration-cli), through a number of different channels.

### Slack notifications

A notification can trigger a message to be sent to a Slack bot.
First, create a new custom "[bot user](https://api.slack.com/bot-users)" for your Slack group and configure the channels you wish it to live in.
Note the API token is the "Bot User OAuth Access Token" provided by Slack.

Then register that Slack bot with {{< vendor/name >}} using a `health.slack` integration:

```bash
webpaas integration:add --type health.slack --token YOUR_API_TOKEN --channel '#channelname'
```

That will trigger the corresponding bot to post a notification to the `#channelname` channel in your Slack group.

### PagerDuty notifications

A notification can trigger a message to be sent via PagerDuty, if you are using that service.
First, create a new PagerDuty "[integration](https://support.pagerduty.com/docs/services-and-integrations)" that uses the Events API v2.
Copy the "Integration Key" as known as the "routing key" for the integration.

Now register a `health.pagerduty` integration as follows:


```bash
webpaas integration:add --type health.pagerduty --routing-key YOUR_ROUTING_KEY
```

Any notification will now trigger an alert in PagerDuty.


## Validate the integration

You can then verify that your integration is functioning properly [using the CLI](../integrations-overview#validate-integrations) command

```bash
webpaas integration:validate
```
