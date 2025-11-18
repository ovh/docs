---
title: "Send ForePaaS alerts to Slack"
updated: 2025-02-15
---

## Objective

Are you or your teammates already using [Slack](https://slack.com/) for internal communication? If you want to receive ForePaaS alerts directly on it, this guide is for you.

![slack](images/slack-example.png){.thumbnail}

The configuration is done in two parts. First you need to [allow the integration from your Slack environment](/pages/public_cloud/data_platform/product/cc/alerting/consumers/slack#configuration-on-slack), and then [configure the external consumer on ForePaaS](/pages/public_cloud/data_platform/product/cc/alerting/consumers/slack#configuration-on-forepaas).

## Configuration on Slack

The first step is to create an Incoming Webhook on your Slack, which you will use as the external consumer of ForePaaS alerts. To learn how to do this, please follow [this guide written by Slack](https://api.slack.com/messaging/webhooks).

> [!primary]
> Note that you will need sufficient permission to create a webhook on your Slack environment. If you struggle to create the webhook, please check with your administrator that you have sufficient access.

At the end of the process, you should have a webhook URL with the following format: *https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX* 

## Configuration on ForePaaS

If you haven't done so already, start adding a new external consumer by clicking on **Add external consumer** from an alert's preferences page or directly from the Control Center's Settings page.

![alerts](images/cc-subscribers-new-consumer.png){.thumbnail}

Select *Slack* and press **Confirm**

![slack](images/cc-slack-store.png){.thumbnail}

You will need to enter the following information:

- **Incoming Webhook URL**: enter the URL that was obtained at the end of [the first configuration step on Slack](/pages/public_cloud/data_platform/product/cc/alerting/consumers/slack#configuration-on-slack).

![slack](images/cc-slack-configuration.png){.thumbnail}

To save time, it is possible to configure this consumer to be automatically linked by default to all the alerts that will be created in the future. This will not affect alerts that were created before the consumer (you will have to manually add the new consumer to them).

![slack](images/cc-slack-config-default.png){.thumbnail}

After confirming the creation of the new consumer, you can find and manage it in the **Settings** of the Control Center.

![slack](images/settings-consumers.png){.thumbnail}

## Go further

Join our [community of users](/links/community).