---
title: Health notifications
updated: 2021-05-25
---



## Objective  

Web PaaS can notify you when various events happen on your project, in any environment. At this time the only notification provided is a low disk space warning, but others may be added in the future.

> [!primary]  
> Remember that you must have `admin` access to a project in order to add or modify an integration. Be aware that sync uses the backup mechanism and will have the same caveats.
> 

## Available notifications

### Low-disk warning

Web PaaS monitors disk space usage on all applications and services in your cluster.

* If and when available disk space drops below 20%, a warning notification is generated.
* If and when available disk space drops below 10%, a critical notification is generated.
* If and when available disk space goes back above 20% after previously having been lower, an all-clear notification is generated.

Notifications are generated every 5 minutes, so there may be a brief delay between when the threshold is crossed and when the notification is triggered.

## Configuring notifications

Health notifications can be set up via the [Web PaaS CLI](/pages/web_cloud/web_paas_powered_by_platform_sh/development/development-cli), through a number of different channels.

### Slack notifications

A notification can trigger a message to be sent to a Slack bot.  First, create a new custom "[bot user](https://api.slack.com/bot-users)" for your Slack group and configure the channels you wish it to live in.  Note the API token is the "Bot User OAuth Access Token" provided by Slack.

Then register that Slack bot with Web PaaS using a `health.slack` integration:

```bash
webpaas integration:add --type health.slack --token YOUR_API_TOKEN --channel '#channelname'
```

That will trigger the corresponding bot to post a notification to the `#channelname` channel in your Slack group.

### PagerDuty notifications

A notification can trigger a message to be sent via PagerDuty, if you are using that service.  First, create a new PagerDuty "[integration](https://support.pagerduty.com/docs/services-and-integrations)" that uses the Events API v2.  Copy the "Integration Key" as known as the "routing key" for the integration.

Now register a `health.pagerduty` integration as follows:


```bash
webpaas integration:add --type health.pagerduty --routing-key YOUR_ROUTING_KEY
```

Any notification will now trigger an alert in PagerDuty.

### Webhooks notifications

A notification can trigger a message to be sent to a web endpoint.

To do so, register a `health.webhook` integration as follows:

```bash
webpaas integration:add --type health.webhook --url=A-URL-THAT-CAN-RECEIVE-THE-POSTED-JSON
```

Any notification will now be posted to the `health.webhook` URL.

In order to let you verify that requests are coming from the integration, you can use the optional `shared-key` parameter which will add a `X-JWS-Signature` request header containing the JSON Web Token Signature in JWS Compact Serialization with Unencoded Detached Payload ([RFC7797](https://tools.ietf.org/html/rfc7797)).

```bash
webpaas integration:add --type health.webhook --url=A-URL-THAT-CAN-RECEIVE-THE-POSTED-JSON --shared-key JWS-SYMMETRIC-KEY
```

The signature is calculated using the given `shared-key` and the fixed header:

```json
{"alg":"HS256","b64":false,"crit":["b64"]}
```

A simplified example payload with the corresponding signature might look like the following snippet:

```bash
POST /health/notifications HTTP/1.0
Host: www.example.com
Content-Length: 1495
Content-Type: application/json
X-JWS-Signature: eyJhbGciOiJIUzI1NiIsImI2NCI6ZmFsc2UsImNyaXQiOlsiYjY0Il19..fYW9qrjShmEArV17Z1kH6yudoXzpBE3PzJXq_OqrIfM

{...request body...}
```

Signature verification is a simple 2 step process:

```python
# 1. Compute JWS Compact Serialization with Unencoded Detached Payload

from jwcrypto import jws, jwk

rfc7797_u_header = '{"alg":"HS256","b64":false,"crit":["b64"]}'
json_web_key = jwk.JWK(kty="oct", k="JWS-SYMMETRIC-KEY")

sig = jws.JWS(request.body())
sig.add_signature(json_web_key, protected=rfc7797_u_header)
sig.detach_payload()

# 2. Verify the signature

assert sig.serialize(compact=True) == request.headers["X-JWS-Signature"]
```

Please refer to the [JOSE Cookbook](https://github.com/ietf-jose/cookbook) for examples about protecting content using JavaScript Object Signing and Encryption (JOSE).

## Validate the integration

You can then verify that your integration is functioning properly [using the CLI](/pages/web_cloud/web_paas_powered_by_platform_sh/integrations/integrations-overview#validating-integrations) command

```bash
$ webpaas integration:validate
```
