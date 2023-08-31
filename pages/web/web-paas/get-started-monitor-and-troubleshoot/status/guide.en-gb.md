---
title: Git status
slug: status
section: Monitor-And-Troubleshoot
---

**Last updated 31st August 2023**



## Objective  

In addition to being able to react to issues by actively monitoring,
sometimes you want to get notifications when your project status has changed.
You can get notifications on your project health
and also activity notifications whenever an event happens in your project.

## Get health notifications

Health notifications tell you when something in your project needs attention.
At present, the only notification is a low-disk warning when your project is running out of disk space.

This notification is automatically sent to all project admins.
See this notification by running this command:

```bash
webpaas integration:list
```

You see a table similar to the following example:

```bash
+---------------+--------------+-------------+
| ID            | Type         | Summary     |
+---------------+--------------+-------------+
| abcdefg123456 | health.email | To: #admins |
+---------------+--------------+-------------+
```

Assuming you want to keep admins notified, you can add another recipient with a command like the following:

```bash
webpaas integration:update <INTEGRATION_ID> --recipients '#admins' --recipients <ADDITIONAL_EMAIL_ADDRESS>
```

So to add `jane@example.com` to the above integration, you'd run the following:

```bash
webpaas integration:update abcdefg123456 --recipients '#admins' --recipients jane@example.com
```

And get the following in response:

```bash
Integration abcdefg123456 (health.email) updated

+--------------+--------------------+
| Property     | Value              |
+--------------+--------------------+
| id           | abcdefg123456      |
| type         | health.email       |
| role         |                    |
| from_address |                    |
| recipients   | - '#admins'        |
|              | - jane@example.com |
+--------------+--------------------+
```

Now you can be sure you and Jane are notified whenever your app is running low on disk space.
You can also set this up to be notified in Slack, PagerDuty, or anywhere that accepts a webhook.

For now, focus on getting notified about activities.

## Get activity notifications

Webhooks enable you to monitor events as they happen.
{{< vendor/name >}} sends information about activities in your project to the URL you specify.

Say you want to get a notification any time your `main` environment gets new code or is redeployed.
To see such a notification in action, follow these steps:

1\. Open [https://webhook.site/](https://webhook.site/) in a browser.

2\. Copy the URL from the body of the page.

   Note this is not the one from the address bar with `#` in it.
3\. In a terminal, run the following command:


```bash
platform integration:add --type=webhook --url <WEBHOOK_URL> --events 'environment.push,environment.redeploy' --environments 'main' --excluded-environments '' --states complete --shared-key=null
```

   The last three flags are all the default options.
   You could also leave them out and just accept the defaults when the CLI prompts you.
4\. Redeploy your main environment by running this command:


```bash
platform environment:redeploy --environment main
```

5\. After the activity has finished, see the JSON payload at the `webhook.site` page.

   You can use its values to trigger anything you wish, including human-readable notifications elsewhere.

You can also run the redeploy command for the `dev` environment and verify that it doesn't send anything.

## What's next

Your {{< vendor/name >}} project is now up and running and you can keep track of it!
That's a great start to working with {{< vendor/name >}}.

Now that you've mastered the basics, you can choose more advanced tasks to complete:

- Manage [multiple apps in a single project](../../create-apps/multi-app/_index.md).

- See how to set up for [local development](../../development/local/_index.md).

- Go live at a [custom domain](../../domains/steps/_index.md).

- Increase observability by [integrating Blackfire](../../increase-observability/integrate-observability/blackfire.md)

- To maintain code in a third-party repository, integrate with [Bitbucket, GitHub, or GitLab](../../integrations/source/_index.md).

- Read more on [health notifications](../../integrations/notifications.md).

- See a reference on [all options available for activity notifications](../../integrations/activity/reference.md) or

  use an [activity script](../../integrations/activity/_index.md) to manage activity responses in {{< vendor/name >}}.
