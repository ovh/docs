---
title: Example- Slack
slug: slack
section: Activity
---

**Last updated 31st August 2023**



## Objective  

The following example activity script posts a message to a Slack channel every time it's triggered.

To use it, follow these steps:

1\. In your Slack administrative interface, [create a new Slack webhook](https://api.slack.com/messaging/webhooks).

   You get a URL starting with `https://hooks.slack.com/`.
2\. Replace `SLACK_URL` in the following script with your webhook URL.

3\. Paste the code into a `.js` file.

4\. Add it as a new [script integration](./_index.md#installing).


   Specify which events should trigger it using the `--events` flag.
   Optionally specify environments with the `--environments` flag.

Now, any activities that meet the events/environment criteria you specified are reported to Slack.

Once you have it working, you're free to modify the code below as desired.
For formatting more complex messages, see the [Slack messaging documentation](https://api.slack.com/messaging/composing/layouts).

```javascript
/**
 * Sends a color-coded formatted message to Slack.
 *
 * To control what events trigger it, use the --events switch in
 * the {{< vendor/name >}} CLI.
 *
 * @param {string} title
 *   The title of the message block to send.
 * @param {string} message
 *   The message body to send.
 */
function sendSlackMessage(title, message) {
  const url = SLACK_URL;

  const messageTitle =
    title + (new Date().getDay() === 5) ? " (On a Friday! :calendar:)" : "";

  const color = activity.result === "success" ? "#66c000" : "#ff0000";

  const body = {
    attachments: [
      {
        title: messageTitle,
        text: message,
        color: color,
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
    console.log("Sending slack message failed: " + resp.body.text());
  }
}

sendSlackMessage(activity.text, activity.log);
```

Common properties you may want to send to Slack (in the last line of the script) include:

- `activity.text`: A brief, one-line statement of what happened.

- `activity.log`: The complete build and deploy log output, as it would be seen in the Console log screen.


For more properties, see the [activity reference](./reference.md).
