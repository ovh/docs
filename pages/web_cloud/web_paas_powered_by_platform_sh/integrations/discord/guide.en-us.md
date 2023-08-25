---
title: Example- Discord
updated: 2021-05-11
---




## Objective  

The following example activity script will post a message to a Discord channel every time it is triggered.

To use it, paste it as-is into a `.js` file and then add it as a new [script integration](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations/integrations-activity#installing).  Be sure to specify which events it should trigger on using the `--events` switch, and if desired which `--environments` you want.

Second, create a new Discord webhook through your Discord administrative interface.  [Discord's documentation](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) explains how to do so.  You can name the bot however you wish, and specify the channel to which it should post messages.  Once it's created, click the "Copy Webhook URL" button to get the URL.

Third, add that URL to your project as a [variable](/pages/web_cloud/web_paas_powered_by_platform_sh/development/development-variables) named `DISCORD_URL`.

```bash
webpaas variable:create --level project --name DISCORD_URL --value <Long Discord URL here>
```

Now, any activities that meet the events/environment criteria you specified will get reported to Discord.

Once you have it working, you're free to modify the code below as desired.  See the [Discord webhook API reference](https://discord.com/developers/docs/resources/webhook#execute-webhook) for more on the message format.

```javascript
function getEnvironmentVariables() {
  return activity.payload.deployment.variables.reduce(
    (vars, { name, value }) => ({
      ...vars,
      [name]: value,
    }),
    {}
  );
}

const ENV_VARIABLES = getEnvironmentVariables();

/**
 * Sends a message to Discord.
 *
 * You must first configure a Web PaaS variable named "DISCORD_URL".
 * That is the group and channel to which the message will be sent.
 *
 * To control what events it will run on, use the --events switch in
 * the Web PaaS CLI.
 *
 * @param {string} title
 *   The title of the message block to send.
 * @param {string} message
 *   The message body to send.
 */
function sendDiscordMessage(title, message) {
  const url = ENV_VARIABLES.DISCORD_URL;

  if (!url) {
    throw new Error("You must define a DISCORD_URL project variable.");
  }

  const messageTitle =
    title + (new Date().getDay() === 5) ? " (On a Friday! :calendar:)" : "";

  const body = {
    content: messageTitle,
    embeds: [
      {
        description: message,
      },
    ],
  };

  const resp = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!resp.ok) {
    console.log("Sending Discord message failed: " + resp.body.text());
  }
}

sendDiscordMessage(activity.text, activity.log);
```

Common properties you may want to send to Discord (in the last line of the script) include:

* `activity.text`: A brief, one-line statement of what happened.
* `activity.log`: The complete build and deploy log output, as it would be seen in the Management Console log screen.
