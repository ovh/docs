---
title: "Configure an MX record for email management"
excerpt: Find out how to configure an MX record on your domain name at OVHcloud
updated: 2026-03-27
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objective

With an MX record, you can link a domain name to the server on your email platform. It is essential for the sender’s email service to reach the recipient’s email service.

**Find out how to configure an MX record for your domain name at OVHcloud.**

## Requirements

- The domain name concerned uses the OVHcloud configuration (i.e. OVHcloud DNS servers).
- You have an MX Plan solution (included in the [web hosting plan](/links/web/hosting), a [free 100M hosting](/links/web/domains-free-hosting), or the MX Plan solution ordered separately), one of our [OVHcloud email offers](/links/web/emails), or an external email service.

<!-- CP-NAV-START:web-dns-zone -->
---

### OVHcloud Control Panel Access

- **Direct link:** [DNS zones](/links/control-panel/web-dns-zone)
- **Navigation path:** `Web Cloud`{.action} > `DNS zones`{.action} > Select your domain name

---
<!-- CP-NAV-END:web-dns-zone -->

> [!primary]
>
> - If your domain name does not use OVHcloud DNS servers, you will need to modify the MX records using the interface of the service provider that manages your domain name configuration.
>
> - If your domain name is registered with OVHcloud, you can check if it uses our configuration. If needed, refer to our guide "[Modifying an OVHcloud domain name's DNS servers](/pages/web_cloud/domains/dns_server_edit)".

## Instructions

### Understanding the role of MX records

The MX (**M**ail e**X**change) record is a type of DNS record that determines which receiving email servers are attached to your domain name.

To understand how it works, we will use an example:

- The address **sender@otherdomain.ovh** sends an email to **contact@mydomain.ovh**.
- The sending email server (**Outgoing mail server**) queries the DNS zone for the domain name **mydomain.ovh** and reads the **MX** records.
- The email is forwarded to the URL of the **MX** record that was read.
- The email is sent to the target **mx0.mail.ovh.net**, which is preceded by the value **0**. This value corresponds to the priority: the lowest value is queried first and the highest last. This means that having multiple MX records helps compensate for a lack of response from the server designated by the record with the lowest priority, by moving on to subsequent servers in order of priority.

![email](/pages/assets/schemas/emails/mx-dns-resolution.png){.thumbnail .w-600}

You can set up multiple MX records for the same domain name. It is then necessary to define a *priority* number for each of them. MX records are queried in ascending order from lowest number to highest number until a response is received from the receiving server.

> [!warning]
>
> Generally speaking, **modifying MX records in a domain name’s DNS zone warrants caution**. If you make any mistakes configuring the records, it may make it impossible for emails to reach your email address. Please take care when you carry out this procedure.
> If you have any doubts, we advise contacting a [specialist provider](/links/partner).

### OVHcloud MX configuration values <a name="mxovhcloud"></a>

Below, you will find the OVHcloud MX configuration to use for our MX Plan solutions (MX Plan standalone or included in an [OVHcloud web hosting](/links/web/hosting) plan), [Email Pro](/links/web/email-pro), [Exchange](/links/web/emails-exchange) and [Zimbra](/links/web/zimbra). Our email servers have antispam and antivirus integrated.

These values are common to all of these solutions, with the exception of [Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private) and Dedicated Exchange.

|Domain|TTL|Record type|Priority|Target|
|---|---|---|---|---|
|*leave blank*|3600|MX|1|mx0.mail.ovh.net.|
|*leave blank*|3600|MX|5|mx1.mail.ovh.net.|
|*leave blank*|3600|MX|50|mx2.mail.ovh.net.|
|*leave blank*|3600|MX|100|mx3.mail.ovh.net.|
|*leave blank*|3600|MX|200|mx4.mail.ovh.net.|

These MX records must be configured in your domain name’s DNS zone.

<!-- CP-STEPS-START:configure-mx-record -->
### Configuring an MX record in an OVHcloud DNS zone

Click on the tabs below to view each of the **5** steps.

> [!tabs]
> **Step 1**
>>
>> Go to the [DNS zones](/links/control-panel/web-dns-zone) page, then choose the domain name concerned.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 2**
>>
>> The table shows your domain name’s OVHcloud configuration. Each row corresponds to a DNS record.
>>
>> Check if MX records already exist by selecting the **MX** type in the filter list above the table, then confirm.
>>
>> ![DNS MX record](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/mx-entries-research.png){.thumbnail .w-600}
>>
> **Step 3**
>>
>> - If MX records already exist and you want to edit them, click the `...`{.action} button to the right of each table row, then click `Modify record`{.action}.
>> - If no MX record is present, click the `Add an entry`{.action} button to the right of the table, then choose `MX`{.action}.
>>
> **Step 4**
>>
>> Fill in the information requested depending on the email solution you have chosen.
>>
>> **If you have an OVHcloud email solution**, refer to the information provided in the "[OVHcloud MX configuration](#mxovhcloud)" step.
>>
>> ![DNS MX record](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-a-dns-zone-record-mx-step-1.png){.thumbnail .w-600}
>>
> **Step 5**
>>
>> Once the information has been filled in, complete the steps and click `Confirm`{.action}.

**If you have another email solution**, refer to the information provided by your email service provider.

> [!primary]
>
> The change can take between 4 and 24 hours to propagate fully.
>
<!-- CP-STEPS-END:configure-mx-record -->

## Go further

[General information about DNS servers](/pages/web_cloud/domains/dns_server_general_information)

[Editing an OVHcloud DNS zone](/pages/web_cloud/domains/dns_zone_edit)

[How to improve email security with an SPF record](/pages/web_cloud/domains/dns_zone_spf)

[How to improve email security with a DKIM record](/pages/web_cloud/domains/dns_zone_dkim)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).