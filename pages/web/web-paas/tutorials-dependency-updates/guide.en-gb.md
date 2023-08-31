---
title: Automatically update your application dependencies
slug: tutorials-dependency-updates
section: Tutorials
order: 9
---

**Last updated 31st August 2023**



## Objective  

{{< vendor/name >}} allows you to update your dependencies through [source operations](../create-apps/source-operations.md).

## Before you start

You need:

- The [{{< vendor/name >}} CLI](../administration/cli/_index.md)

- An [API token](../administration/cli/api-tokens.md#2-create-an-api-token)


## 1. Define a source operation to update your dependencies

To facilitate updating your dependencies in your project,
define a source operation in your `{{< vendor/configfile "app" >}}` file
depending on your dependency manager:

<!--vale off -->
> [!tabs]      
<!--vale on -->

## 2. Automate your dependency updates with a cron job

After you've defined a source operation to [update your dependencies on your project](#1-define-a-source-operation-to-update-your-dependencies),
you can automate it using a cron job.

Note that it’s best not to run source operations on your production environment,
but rather on a dedicated environment where you can test changes.

Make sure you have the [{{< vendor/name >}} CLI](../administration/cli/_index.md) installed
and [an API token](../administration/cli/api-tokens.md#2-create-an-api-token)
so you can run a cron job in your app container.

1\. Set your API token as a top-level environment variable:


> [!tabs]      

> [!primary]  
> 
> Once you add the API token as an environment variable,
> anyone with [SSH access](../development/ssh/_index.md) can read its value.
> Make sure you carefully check your [user access on this project](../administration/users.md#manage-project-users).
> 
> 

2\. Add a build hook to your app configuration to install the CLI as part of the build process:


```yaml {configFile="app"}
hooks:
    build: |
        set -e
        echo "Installing {{< vendor/name >}} CLI"
        curl -fsSL https://raw.githubusercontent.com/platformsh/cli/main/installer.sh | bash

        echo "Testing {{< vendor/name >}} CLI"
        platform
```

3\. Then, to configure a cron job to automatically update your dependencies once a day,

   use a configuration similar to the following:

```yaml {configFile="app"}
crons:
    update:
        # Run the code below every day at midnight.
        spec: '0 0 * * *'
        commands:
            start: |
                set -e
                webpaas sync -e development code data --no-wait --yes
                webpaas source-operation:run update --no-wait --yes
```

The example above synchronizes the `development` environment with its parent
and then runs the `update` source operation defined [previously](#1-define-a-source-operation-to-update-your-dependencies).

## 3. Configure notifications about dependency updates

To get notified every time a source operation is triggered and therefore every time a dependency is updated,
you can configure activity scripts or webhooks.

### Notifications through an activity script

After you've defined a source operation to [update your dependencies on your project](#1-define-a-source-operation-to-update-your-dependencies),
you can configure an activity script 
to receive notifications every time a dependency update is triggered.

> [!primary]  
> 
> You want to get notified of every dependency update
> through a message posted on a Slack channel.
> To do so, follow these steps:
> 
> 1.  In your Slack administrative interface, [create a new Slack webhook](https://api.slack.com/messaging/webhooks).
>     You get a URL starting with `https://hooks.slack.com/`.
> 
> 2.  Replace `SLACK_URL` in the following `.js` script with your webhook URL.
> 
> 3.  Add the following code to a `.js` file:
> 
>     ```javascript
>     /**
>      * Sends a color-coded formatted message to Slack.
>      *
>      * To control what events trigger it, use the --events switch in
>      * the {{< vendor/name >}} CLI.
>      *
>      * Replace SLACK_URL in the following script with your Slack webhook URL.
>      * Get one here: https://api.slack.com/messaging/webhooks 
>      * You should get something like: const url = 'https://hooks.slack.com/...';
>      *
>      * activity.text: a brief, one-line statement of what happened.
>      * activity.log: the complete build and deploy log output, as it would be seen in the Console log screen.
>      */
>     function sendSlackMessage(title, message) {
>       const url = 'SLACK_URL';
>       const messageTitle = title;
>       const color = activity.result === "success" ? "#66c000" : "#ff0000";
>       const body = {
>         attachments: [
>           {
>             title: messageTitle,
>             text: message,
>             color: color,
>           },
>         ],
>       };
>       const resp = fetch(url, {
>         method: "POST",
>         headers: {
>           "Content-Type": "application/json",
>         },
>         body: JSON.stringify(body),
>       });
>       if (!resp.ok) {
>         console.log("Sending slack message failed: " + resp.body.text());
>       }
>     }
>     sendSlackMessage(activity.text, activity.log);
>     ```
> 
> 4.  Run the following [{{< vendor/name >}} CLI](../administration/cli/_index.md) command:
> 
>     ```bash
>     webpaas integration:add --type script --file ./my_script.js --events=environment.source-operation
>     ```
>     Optional: to only get notifications about specific environments,
>     add the following flag to the command: `--environments=your_environment_name`.
> 
> Anytime a dependency is updated via a source operation,
> the activity script now reports it to Slack. 
> 
> 

### Notifications through a webhook

After you've defined a source operation to [update your dependencies on your project](#1-define-a-source-operation-to-update-your-dependencies),
you can configure a webhook to receive notifications every time a dependency update is triggered.

[Webhooks](../integrations/activity/webhooks.md) allow you to host a script yourself externally.
This script receives the same payload as an activity script and responds to the same events,
but can be hosted on your own server and in your own language.

To configure the integration between your webhook and your source operation,
run the following [{{< vendor/name >}} CLI](../administration/cli/_index.md) command:

```bash
webpaas integration:add --type=webhook --url=URL_TO_RECEIVE_JSON --events=environment.source-operation
```

Optional: to only get notifications about specific environments,
add the following flag to the command: `--environments=your_environment_name`.

To test the integration and the JSON response,
you can generate a URL from a service such as [webhook.site](https://webhook.site)
and use the generated URL as `URL_TO_RECEIVE_JSON`.
This URL then receives the JSON response when a source operation is triggered.

Anytime a dependency is updated via a source operation,
the webhook now receives a POST message.
This POST message contains complete information about the entire state of the project at that time.
