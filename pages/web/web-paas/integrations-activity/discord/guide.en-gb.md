---
title: Example- Discord
slug: discord
section: Activity
---

**Last updated 31st August 2023**



## Objective  

The following example activity script posts a message to a Discord channel every time it's triggered.

To use it, follow these steps:

1\. In your Discord administrative interface, [create a new Discord webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks).

   Give it a name and specify the channel where it should post messages.
  Copy the URL for the webhook.
2\. Replace `DISCORD_URL` in the following script with your webhook URL.

3\. Paste the code into a `.js` file.

4\. Add it as a new [script integration](./_index.md#installing).


   Specify which events should trigger it using the `--events` flag.
   Optionally specify environments with the `--environments` flag.

Now, any activities that meet the events/environment criteria you specified are reported to Discord.

Once you have it working, you're free to modify the code below as desired.
For more on the message format, see the [Discord webhook API reference](https://discord.com/developers/docs/resources/webhook#execute-webhook).

```javascript
/**
 * Sends a message to Discord.
 *
 * To control what events trigger it, use the --events switch in
 * the {{< vendor/name >}} CLI.
 *
 * @param {string} title
 *   The title of the message block to send.
 * @param {string} message
 *   The message body to send.
 */
function sendDiscordMessage(title, message) {
  const url = DISCORD_URL;

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

- `activity.text`: A brief, one-line statement of what happened.

- `activity.log`: The complete build and deploy log output, as it would be seen in the Console log screen.


For more properties, see the [activity reference](./reference.md).
