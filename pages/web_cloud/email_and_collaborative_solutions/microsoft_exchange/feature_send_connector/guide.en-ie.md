---
title: Configure a send connector on your Private or Trusted Exchange platform
excerpt: Find out how to add an SMTP send connector to your OVHcloud Exchange platform
updated: 2023-11-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objective

Adding an SMTP send connector to your Exchange platform allows one or more Exchange email addresses to send emails via a sending server external to your Exchange platform. It can be used, for example, as part of a mass email campaign, or even as an external anti-spam solution. Only the email addresses attached to the send connector will use the send connector.

**Find out how to configure a send connector on your Private Exchange platform.**

**Example**

The email address **newsletter@mydomain.ovh** is attached to the send connector configured on the Exchange platform. The address **contact@mydomain.ovh** is not attached to the send connector.

![send connector](images/send-connector01.png){.thumbnail}

Here is the context of the diagram above:

- **contact@mydomain.ovh** sends an email to the address **mary.johnson@guides.ovh**: This is a standard sending, as the sending connector has not been attached to the address **contact@mydomain.ovh**. **mary.johnson@guides.ovh** receives the email from the sending server of the Exchange platform (outgoing mail server).
- **newsletter@mydomain.ovh** sends an email to **john.smith@guides.ovh**: **newsletter@mydomain.ovh** has been attached to the send connector, **john.smith@guides.ovh** will receive the email from the send connector server configured on the Exchange platform.

## Requirements

- An OVHcloud [Private Exchange](/links/web/emails-private-exchange) or [OVHcloud](/links/web/emails-trusted-exchange) Trusted Exchange platform.
- Access to the [OVHcloud Control Panel](/links/manager)
- Access to the [OVHcloud API](https://api.ovh.com/)
- The configuration details needed for the send connector received from your service provider

## Instructions

Setting up a send connector is done in 3 steps.

- [1. Add the send connector to your platform](#addconnector): You enter the parameters for the send connector that your service provider sent to you.
- [2. Configure an email address on a send connector](#addaddress): You attach the send connector to one or more email addresses so that they send through this connector when sending.
- [3. Check that your email address uses the send connector](#checkheader): Send from an email address configured with a connector, and retrieve the email header from the receive email address to check that the email has been sent through the send connector.

You will also find other useful operations concerning send connectors in this guide.

- [Remove a send connector attached to an email address](#removeaddress)
- [Set a send connector as the default send server](#defaultconnector)
- [Lists of other API calls related to send connectors](#apilist)

### Add a send connector to your Exchange platform <a name="addconnector"></a>

> [!warning]
>
> The addition of a send connector is reserved and planned for the [OVHcloud Private Exchange](/links/web/emails-private-exchange) and [OVHcloud Trusted Exchange](/links/web/emails-trusted-exchange) solutions. If you enable a send connector on an OVHcloud Exchange solution other than the ones mentioned above, you risk having it disabled at any time by our administrators for security reasons.

Before you begin, make sure you have the following information, provided by the service provider delivering the send connector.

- The sending server address (SMTP)
- The port used for sending (example: 587)
- The associated username (e.g. email address) **may be optional, depending on your send connector**
- The password associated with the user name **may be optional, depending on your send connector**

Next, log in to the OVHcloud API console with your login credentials. Refer to our [Getting started guide for the OVHcloud API](pages/manage_and_operate/api/first-steps).

To add a send connector to your Exchange platform, use the following API call.

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `exchangeService`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `displayName`: The display name of your send connector.
- `maxSendSize`: Maximum size in MB of an email when sending (100MB maximum and default if left empty).
- `password`: The password attached to the send connector user.
- `port`: The port used for sending.
- `requireTLS`: Use TLS security protocol on send.
- `smartHost`: Send connector (SMTP) address.
- `smartHostAuthMechanism`: Authentication mechanism used for send connector.
- `user`: The user associated with the send connector.

You get this type of result:

``` console
{
    todoDate: "2023-09-25T14:06:02+02:00"
    id: 113924189
    finishDate: null
    function: "addSendConnector"
    status: "todo"
}
```

Once the send connector has been created, use the following API call to retrieve its ID.

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- `organizationName` : Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `ExchangeService`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".

You get this type of result:

``` console
[
    29
]
```

You can find the details of your send connector using this API call: <a name="idconnector"></a>

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- `organizationName`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `id`: Enter the ID of your send connector, obtained as a number in the previous step.
- `ExchangeService`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".

You get this type of result:

``` console
{
    smartHost: "smtp-relay.example.com"
    displayName: "testconnector"
    state: "ok"
    maxSendSize: 100
    smartHostAuthMechanism: "basicAuthRequireTLS"
    port: 587
    lastUpdateDate: null
    creationDate: "2023-09-25T14:06:02+02:00"
    taskPendingId: 0
    id: 29
    requireTLS: true
}
```

### Configure an email address to use a send connector <a name="addaddress"></a>

To send emails via a send connector, you will need to link it to one or more email addresses.

Use the Exchange account setup API call to add your send connector ID to an email address:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `primaryEmailAddress`: Enter one of the email addresses of your Exchange platform, to which you want to attach the send connector.
- `ExchangeService`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `Account`: This is where the information linked to the email address is entered. **We will only look at the line related to the send connector**.
    - `sendConnectorId`: Enter the ID of your send connector, obtained as a number in [the previous](#idconnector) step.
    - Tick the `deleteVirus` box (if it is not already ticked) to not get an error when executing the API call.

The result is as follows:

``` console
{
    null
}
```

### Test your send connector <a name="checkheader"></a>

If your configuration conforms to the information sent by the send connector provider, your email address will send its emails through this send connector. There is no particular handling to do for the sending. Simply send from the email address(es) attached to the sending connector.

To test your sending, send an email from an address that is attached to the send connector to a test address that you have chosen and that you can view. Once the test email has been sent, log in to the recipient email address and look at the email header to check that it has been sent through the send connector. If you need to do so, please refer to our guide on [Retrieving email headers](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

**Header example**

The email address **newsletter@mydomain.ovh** sends an email to **john.smith@guides.ovh**. The email address **newsletter@mydomain.ovh** has been attached to the send connector. The domain name of the send connector is **sender-id.example.com**

Here is an example of the header of an email sent from a Private Exchange that uses a send connector, in the context mentioned above:

&lt;robert@hisdomain.ovh&gt;

<pre class="bgwhite"><code>Return-Path: &lt;bounces-249164590-newsletter=mydomain.ovh@sender-id.example.com&gt;
Delivered-To: john.smith@guides.ovh
Received: from localhost (HELO queue) (127.0.0.1)
    by localhost with SMTP; 28 Feb 2023 09:51:02 +0200
Received: from unknown (HELO output28.mail.ovh.net) (192.168.11.93)
    by 192.168.1.2 with AES256-GCM-SHA384 encrypted SMTP; 28 Feb 2023 09:51:02 +0200
Received: from vr45.mail.ovh.net (unknown [10.101.8.45])
    by out28.mail.ovh.net (Postfix) with ESMTP id 4PQqLG4KHRzRxRQZj
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:02 +0000 (UTC)
Received: from in31.mail.ovh.net (unknown [10.101.4.31])
    by vr45.mail.ovh.net (Postfix) with ESMTP id 4PQqLF6ZBMz37ZHNP
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=11.22.333.44; helo=sender-id.example.com; envelope-from=bounces-249164590-newsletter=mydomain.ovh@sender-id.example.com; receiver=john.smith@guides.ovh
Authentication-Results: in31.mail.ovh.net;
    dkim=pass (1024-bit key; unprotected) header.d=smtp.example.com header.i=@smtp.example.com header.b="HDetLEPl";
    dkim-atps=neutral
Received: from sender-id.example.com (sender-id.example.com [11.22.333.44])
    by in31.mail.ovh.net (Postfix) with ESMTPS id 4PQsPF43SEm78WdxQ
    for &lt;john.smith@guides.ovh&gt;; Tue, 28 Feb 2023 07:51:01 +0000 (UTC)
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=smtp.example.com;
    q=dns/txt; s=mail; bh=gZnUUk4TldsnAE7L+M9zwjuOeOmD6FwV4Yyq99XN2a0=;
    h=from:subject:date:to:mime-version:content-type:list-unsubscribe:x-csa-complaints:list-unsubscribe-post;
    b=HDiySKAl0J78ByyGlPjCVc+zvEv/DP9NkfUdso8DkB5z1Lig4rfbqCLnD6SE6wh7sjsZMsae0gk
    Muy0Uur0tw2nWq/WI94O4grD/KAWWC+jo2w/1+0ol1VCQN2+zQEhM+HJj4pcnn+MfU/RrXLkXfDV
    BLfqJiRcWJCQ3fy3Gag=
Received: by smtp-relay.smtp.example.com with ESMTP id 12185513-794a-4762-b3ee-a4044d30975e; Tue Feb 28 2023 07:51:00 GMT+0000
X-Mailin-EID: MjAxMTY0NTkwfm5vLXJlcGx5QHRlc3QtbXV0dS5jb21%2BPDE2N2U1NdkfOTQ3MzQ1YWFiNzY3NWY3ZmJkMWUzZGJkQHRlYW1qZXJlbS5vdmg%2B25ead5LmQuc2VuZGVyLXNpYi5jb20%3D
To: &lt;john.smith@guides.ovh&gt;
Date: Tue, 28 Feb 2023 07:50:56 +0000
Subject: Test SBR 3 (SIB)
Message-Id: &lt;12185193-354a-4762-b3ee-a40484d30975e@smtp-relay.smtp.example.com&gt;
Origin-messageId: &lt;167e568a947345aab7675f7fbd1e3dbd@mydomain.ovh&gt;
Thread-Index: AQHZS0ljK1OFDltwD80S81Qo68wiBIQ==
Accept-Language: fr-FR, en-US
Content-Language: fr-FR
X-MS-Has-Attach:
X-MS-TNEF-Correlator:
x-mclm-sbr-processed: true
MIME-Version: 1.0
X-sib-id: 8dUZE2ztHUSpKwRy5O0fOawZARq-Dh8BNrytyOAwG9i3ybk5nxMfOvwZLeo778wLsYKejwcxuIEci6PKSzh3d4X7w126g-32syWTSQKRPQZTyxdXonPcl3lqm3pXkNolSaGbfG4dHY38OoEF7aXWMGvRsJtNlvsy1sEx8vGFOpxg_3cK
X-CSA-Complaints: csa-complaints@eco.de
From: &lt;newsletter@mydomain.ovh&gt;
</code></pre>

### Remove a send connector attached to an email address <a name="removeaddress"></a>

To remove a send connector attached to an account from the Exchange platform, use the setup API call for the Exchange account concerned in order to change the ID of your send connector to the ID of the send server from your Exchange platform:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/account/{primaryEmailAddress}

- `organizationName` : enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `primaryEmailAddress`: Enter one of the email addresses of your Exchange platform, to which you want to detach the send connector.
- `ExchangeService`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `Account`: Enter the information linked to the email address entered in the “primaryEmailAddress” box. We will only look at the lines related to the send connector.
    - `sendConnectorId`: Type '0' to set the Send Server ID of the Exchange platform.
    - Check the `deleteVirus` box (if it is not already ticked) to avoid getting an error.

The result is as follows:

``` console
{
    null
}
```

### Set a send connector as the default send server <a name="defaultconnector"></a>

You can automatically attach a send connector each time you add an Exchange account to your platform. This way, all of the accounts that will be added will pass through the send connector that you have defined by default.

To do this, use the following API call:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/domain/{domainName}/changeDefaultSBR

- `organizationName`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `ExchangeService`: Enter the name of your Exchange platform, which is in the form of "private-zz11111-1" or "dedicated-zz111111-1".
- `domainName`: Enter the domain name that will benefit from the send connector.
- `sbrDefault `: Leave empty.
- `sendConnectorIdDefault`: Enter the ID of your send connector, obtained as a number in [this step](#idconnector).

The result is as follows:

``` console
{
    null
}
```

> [!warning]
>
> To reset the default send server for the Exchange platform, type "0" in the `sendConnectorIdDefault` box.

### Lists of other API calls related to send connectors <a name="apilist"></a>

- Retrieve the send connectors already created on an Exchange service:

> [!api]
>
> @api {v1} /email/exchange GET email/exchange/{organizationName}/service/{exchangeService}/sendConnector

- Delete an existing send connector:

> [!api]
>
> @api {v1} /email/exchange DELETE /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Retrieve the details of an existing send connector:

> [!api]
>
> @api {v1} /email/exchange GET /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Edit an existing send connector:

> [!api]
>
> @api {v1} /email/exchange PUT /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}

- Change the authentication method of an existing send connector:

> [!api]
>
> @api {v1} /email/exchange POST /email/exchange/{organizationName}/service/{exchangeService}/sendConnector/{id}/changeAuthentication

## Go further

[Editing a DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[Adding a domain name to your Exchange service](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our community of users on <https://community.ovh.com/en/>.
