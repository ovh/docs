---
title: Add an SPF record to the configuration of your domain name
excerpt: Learn how to add an SPF record to the configuration of your OVH domain name
slug: web_hosting_the_spf_record
section: DNS and DNS zone
order: 5
---

**Last updated 25/02/2021**

## Objective

The SPF (Sender Policy Framework) allows a server that receives an email to check that it was sent by an authorised server.
<br>It helps prevent potential identity theft via the email addresses using your domain name (spoofing).
<br>You can also use it to authenticate the emails you send.
<br>The SPF is added as a record in a DNS zone where the servers or IP addresses authorised to send emails to the domain in question are indicated.

This is made possible by information that is entered in the SPF itself. We can find:

- **servers or several IP** addresses: this will identify them as legitimate sending sources;
- **a qualifier**: it will recommend to the server receiving the emails a specific way to react to a message considered illegitimate, i.e. coming from a source presenting a risk.

You must therefore make sure that you enter the sending sources for the emails of this domain in the SPF record. These sources can be your own server, that of your provider, or one of OVHcloud’s email solutions.

> [!primary]
>
> The SPF record is only an indication provided to servers that receive emails, including yours. It is these servers’ responsibility to apply, or not, what is specified in the SPF record of domains whose messages they receive.
>

**Find out how to configure an SPF record for your domain name at OVHcloud.**

## Requirements

- You must have access to manage the domain name from your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}.
- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}
- The domain name concerned must use the OVHcloud configuration (i.e. the OVHcloud DNS servers).

> [!warning]
>
> If your domain name does not use OVHcloud DNS servers, you will need to modify the SPF record using the interface given by the service provider that manages your domain name configuration.
>
> If your domain name is registered with OVHcloud, you can check if it is using the OVHcloud configuration in your Control [Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}. Select the domain, and go to the DNS `Servers`{.action} tab.
>

## Instructions

### OVHcloud SPF configuration

The OVHcloud configuration applies to the solutions below:

- MX Plan alone or included in an OVHcloud web [hosting plan](https://www.ovh.co.uk/web-hosting/){.external};
- [Email Pro](https://www.ovh.co.uk/emails/email-pro/){.external};
- [Hosted Exchange](https://www.ovh.co.uk/emails/hosted-exchange/){.external}.

When you order one of these solutions, we recommend using an SPF record with OVHcloud information in your domain name’s DNS zone. It looks like this:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

This configuration does not apply to Provider Exchange or [Private Exchange solutions](https://www.ovh.co.uk/emails/hosted-exchange/){.external}.

For the Exchange Provider solution, the configuration is as follows:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex-mail.biz a:gw2.ex-mail.biz ~all"
```

> [!primary]
> For the Private Exchange solution, you need to enter your email server’s IP addresses. To limit the size of the SPF record, you can create an SPF record that contains these IP addresses on a subdomain, and an SPF record that contains the subdomain using the "include" category on the domain.

### Check your current SPF configuration

If your domain uses OVHcloud configuration, you can check if an SPF record is already configured for it. To do this, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}. In the `Domains`{.action} section on the left-hand side, select the domain name concerned. Click the `DNS`{.action} Zone tab.

A table should appear. This will display your domain name’s DNS zone at OVHcloud. It is made up of several records, all symbolised by a line in the table.

> [!primary]
>
> If your domain is registered with OVHcloud, you can check if it is using the OVHcloud DNS servers from the `DNS`{.action} servers tab.
>

In the table, to find the row for the OVHcloud SPF record, a display filter can be used. Since the latter can appear in two different places, select it in the `TXT`{.action} or `SPF`{.action} filter record by switching from one to another if necessary. From then on, the table might look different.

- **An SPF record is displayed** that corresponds to the OVHcloud information for your solution: Your domain already uses OVHcloud configuration. If you no longer wish to use it, you must modify it in the next step.

- **An SPF record that does not match OVHcloud information is displayed**: your domain already uses a custom SPF. You can modify it or choose the OVHcloud configuration in the next step. If your configuration is incorrect, you will need to modify it.

- **An SPF record does not appear in the target** column: first check if the record is not created as SPF or TXT by changing the filtering. If no SPF record is displayed, no matter how you filter it, your domain does not use it. You can add it in the next step.

> [!primary]
>
> An SPF record always consists of the following form: "v=spf1 `sources` `qualifier`". For example, the OVHcloud SPF is: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Configure SPF record

To add an SPF record in your domain name’s OVHcloud configuration, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}. In the services bar on the left-hand side, go to the `Domains`{.action} section, click on the domain concerned, then go to the `DNS`{.action} zone tab.

To add an SPF record, click `Add Entry`{.action}.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

In the window that pops up, you are offered several DNS records. There are two ways of adding an SPF record:

- [Add a TXT](#txtrecord) record: for users who are notified or already have the full record. For example, your email solution provider will send you the value.
- [Add an SPF](#spfrecord) record: for users who do not have the entire record. For example, you only have an IP address or the host name of the email server.
- [Add an SPF record ](#spfrecordovhcloud)**and use OVHcloud configuration**: for users who only have OVHcloud email offers on their domain name (excluding [Private Exchange](https://www.ovh.co.uk/emails/hosted-exchange/){.external} and Exchange Provider).

![domain](images/spf_records_add_entry.png){.thumbnail}


#### Add an SPF record <a name="spfrecord"></a>

You have chosen the `SPF`{.action} record.

The configuration wizard enables you to customise your SPF record according to your needs. To do this, you must answer some questions and give the necessary information. Some information requested may be aimed at informed users.

Let’s look at them one by one.

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Details|Description|
|---|---|
|Subdomain|Complete if the SPF record must be applied to a subdomain of your domain. This applies if you send emails from a subdomain.|
|TTL|This is the propagation time that will apply to the configuration of this DNS record.|
|Authorise an IP address to send emails| Check this box if your website and email addresses are hosted on a server using the same IP address (e.g. on your dedicated server).|
|Authorise the MX servers to send emails.|Tick if the servers that receive your emails can also send them.|
|Authorise all servers whose name ends with your domain to send emails.|This option should be used with caution, as it allows a very wide legitimisation of the sending sources using your domain name.|


Regarding the question: “**Do other servers send emails for your domain?**”, several elements can be completed:

|Details|Description|
|---|---|
|a|Enter the domain names here. That will make it legitimate for the servers hosting these sites to send emails with your addresses.|
|mx|Enter the servers that receive your emails (MX servers) here if they can also send them. They will thus be identified as a legitimate sending source.|
|ptr|Enter the host names for which the *reverse* path works (using a PTR record in the DNS zone). They will thus be identified as a legitimate sending source.|
|ip4|Indicates IP addresses or RIPE blocks (IPv4) authorised to send emails with your addresses.|
|ip6|Indicates IP addresses or RIPE blocks (IPv6) authorised to send emails with your addresses.|
|include|Enter domain names here that include their own SPF rules. This will enable these for your own domain. For example, OVHcloud uses this method in its SPF configuration:  "v=spf1 include:mx.ovh.com ~all", which allows OVHcloud to manage the SPF of mx.ovh.com and allow its customers to use it.|

Finally, regarding the question: “**Does the information that you have indicated describe all the hosts that send email with your domain?**”, three choices are possible:

|Details|Description|
|---|---|
|Yes, I am sure|Specify that servers receiving emails from your domain should reject them if they come from illegitimate sources (not present in your SPF record).|
|Yes, but use safe mode|Specify that servers receiving emails from your domain should accept them if they come from illegitimate sources (not present in your SPF record), but tag them as potentially not legitimate (as spam, for example).|
|No|Specify that servers receiving emails from your domain should accept them if they come from illegitimate sources (not present in your SPF record), without any particular action. The email header will however be increased.|

Once the information is complete, click on `Next`{.action}, ensure that the information that appears is correct, then click `Confirm`{.action}.

> [!primary]
>
> The change can take between 4 and 24 hours to propagate fully.
>

#### Use OVHcloud SPF record <a name="spfrecordovhcloud"></a>

You have chosen the `SPF`{.action} record and would like to apply the OVHcloud configuration.

Click the `Use SPF for shared OVHcloud`{.action} button at the top of the support window. Information about the OVHcloud SPF record will appear. Click on the `Validate`{.action} button to make the change.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> The change can take between 4 and 24 hours to propagate fully.
>

#### Add a TXT record <a name="txtrecord"></a>

You have chosen the `SPF`{.action} record.

Among the records offered, click on `TXT`{.action}, then enter the information requested. In the `Value`{.action} zone, enter the SPF record that you would like to use.

To complete this action, click on `Next`{.action}. Check that the information you have entered is correct, then click `Confirm`{.action}.

> [!primary]
>
> The change can take between 4 and 24 hours to propagate fully.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

### Modify an SPF record

To modify the SPF record in your domain’s OVHcloud configuration, log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB){.external}. In the services bar on the left-hand side, go to the `Domains`{.action} section, click on the domain concerned, then go to the `DNS`{.action} zone tab.

The table displays your domain’s OVHcloud configuration. Each row corresponds to a DNS record. Locate your TXT or SPF record in this table and click the `...`{.action} button to edit the entry.

## Go further

[Edit an OVHcloud](../web_hosting_how_to_edit_my_dns_zone/){.external} DNS zone.

[Editing the DNS servers for an OVHcloud](../web_hosting_general_information_about_dns_servers/){.external} domain name.

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
