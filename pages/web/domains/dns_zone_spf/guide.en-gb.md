---
title: Adding an SPF record to the configuration of your domain name
excerpt: Find out how to configure an SPF record for your OVHcloud domain name
slug: web_hosting_the_spf_record
section: DNS and DNS Zone
order: 5
---

**Last updated 7th April 2021**

## Objective

Sender Policy Framework (SPF) allows a receiving server to verify that an email was sent by an authorised sender.

- It helps to prevent potential identity theft via the email addresses using your domain name (spoofing).
- You can also use it to authenticate the emails you send.
- The SPF is added as a record to the DNS zone of the domain authorised to send emails.

The authorisation is made possible by information included in the SPF itself. It consists of

- **several servers or IP addresses**: to identify them as legitimate sending sources;
- **a qualifier**: recommending to the receiving email server a specific way to react to a message considered illegitimate, i.e. coming from a source presenting a risk.

When configuring an SPF, make sure to include all the sending sources for the emails of this domain in the SPF record. These sources might be your own servers, your provider's, or those of OVHcloud's email solutions.

> [!primary]
>
> Albeit a commonly accepted measure, an SPF record can only be a recommendation to servers that receive emails. It then lies within the server's responsibility whether to apply the policy as specified in the domain's SPF record.
>

**This guide explains how to configure an SPF record for your OVHcloud domain name.**

## Requirements

- access to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) with the necessary permissions to manage the domain's DNS
- a domain name using the OVHcloud configuration (i.e. the OVHcloud DNS servers)

> [!warning]
>
> If your domain name does not use OVHcloud DNS servers, you will need to modify the SPF record using the interface of the service provider managing your domain name's DNS.
>
> If your domain name is registered with OVHcloud, you can check if it is using the OVHcloud configuration in your [Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB). Click on the `DNS servers`{.action} tab of your domain name.
>

## Instructions

### OVHcloud SPF configuration

The OVHcloud configuration applies to these solutions:

- MX Plan standalone or included in an OVHcloud [Web Hosting plan](https://www.ovhcloud.com/en-gb/web-hosting/){.external};
- [Email Pro](https://www.ovhcloud.com/en-gb/emails/email-pro/){.external};
- [Hosted Exchange](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/){.external}.

When you order one of these solutions, we recommend using an SPF record with OVHcloud information in your domain name's DNS zone. It looks like this:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

This configuration does not apply to Provider Exchange or [Private Exchange solutions](https://www.ovhcloud.com/en-gb/emails/hosted-exchange/){.external}.

For a Provider Exchange solution, the configuration is as follows:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com a:gw1.ex-mail.biz a:gw2.ex-mail.biz ~all"
```

> [!primary]
> For the Private Exchange solution, you need to specify your email server's IP addresses. To reduce the size of the SPF record, you can create an additional SPF record on a subdomain and include all IP addresses. Then, on the actual domain name, create an SPF record which contains the subdomain by using the "include" section.

### Checking your current SPF configuration

If your domain uses OVHcloud DNS servers, you can check if an SPF record is already configured for it. Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Web Cloud`{.action} in the top navigation bar. In the `Domains`{.action} section, select the domain name concerned. Click on the `DNS zone`{.action} tab.

The table on this page displays your domain name's DNS zone at OVHcloud. Each DNS record is represented by one line in the table.

> [!primary]
>
> In case of doubt, verify that your domain is actually using OVHcloud DNS servers from the `DNS servers`{.action} tab.
>

To find the row for the OVHcloud SPF record, a display filter can be applied to the table. Since the record can appear in two different places, select both the `TXT`{.action} and the `SPF`{.action} filter. You will receive one of the follwing results.

- **An SPF record that corresponds to OVHcloud email solutions is displayed**: Your domain currently uses the OVHcloud configuration. If you no longer wish to use it, you must modify it in the [next step](#modifyspf).

- **An SPF record that does not match the OVHcloud configuration is displayed**: Your domain already uses a custom SPF. If your configuration is incorrect, you will need to modify it. You can modify it or choose the OVHcloud configuration in the [next step](#modifyspf).

- **An SPF record does not appear in the target column**: First check that the record does not actually exist as SPF or TXT by changing the filtering. If no SPF record is displayed in the zone at all, your domain does not use one. You can add it in the [next step](#spfrecord).

> [!primary]
>
> An SPF record always follows this form: "v=spf1 `sources` `qualifier`". For example, the OVHcloud SPF is: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Configuring a new SPF record <a name="spfrecord"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Web Cloud`{.action} in the top navigation bar. In the `Domains`{.action} section, select the domain name concerned. Click on the `DNS zone`{.action} tab.

To add an SPF record, click on `Add an entry`{.action} in the right-hand menu.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

In the window that pops up, the configuration assistant offers several different types of DNS records. There are two ways of adding an SPF record:

- [Adding it as a TXT record](#txtrecord), suitable for advanced users or if the full record is available to copy and paste. For example, if your email solution's provider has sent you the complete value to enter.
- [Using the wizard to create an SPF record](#addspfrecord), for users who do not have the entire record. For example, if you only have an IP address or the host name of the email server. The wizard also enables you to automatically [create an SPF record to use with OVHcloud email offers only](#spfrecordovhcloud). 

![domain](images/spf_records_add_entry.png){.thumbnail}

#### Adding an SPF record <a name="addspfrecord"></a>

The configuration wizard enables you to customise your SPF record according to your needs. In order to apply your settings, answer the questions on this page. Some information requested may be aimed at advanced users. Please refer to the tables below for details.

![domain](images/spf_records_add_entry_personnalize_step1.png){.thumbnail}

|Details|Description|
|---|---|
|Subdomain|Fill out if the SPF record must be applied to a subdomain of your domain, i.e. if you send emails from a subdomain.|
|TTL|This is the propagation time that will apply to the configuration of this DNS record.|
|Authorise an IP address to send emails|Check this box if your website and email addresses are hosted on a server using the same IP address (for example on a dedicated server).|
|Authorise the MX servers to send emails|Tick if the servers that receive your emails can also send them.|
|Authorise all servers with names ending with your domain to send emails|This option should be used with caution, as it allows a very wide legitimisation of the sending sources using your domain name.|


Regarding the question: "**Do the emails of your domain originate from other servers belonging to other domains?**", several values can be provided:

|Details|Description|
|---|---|
|a|Enter domain names here to legitimise these servers to send emails with your addresses.|
|mx|Enter the servers that receive your emails (MX servers) here if they can also send them. They will thus be identified as a legitimate sending source.|
|ptr|Enter the host names for which the *reverse* path works (using a PTR record in the DNS zone). They will thus be identified as a legitimate sending source.|
|ip4|Indicates IP addresses or RIPE blocks (IPv4) authorised to send emails with your addresses.|
|ip6|Indicates IP addresses or RIPE blocks (IPv6) authorised to send emails with your addresses.|
|include|Enter domain names here that include their own SPF rules. This will enable these for your own domain. For example, OVHcloud uses this method in its SPF configuration: "v=spf1 include:mx.ovh.com ~all". It allows OVHcloud to manage the SPF of mx.ovh.com and let customers use it for their services.|


Regarding the question: "**Does the data you have entered describe all hosts that send email from your domain?**", three choices are possible:

|Details|Description|
|---|---|
|Yes, I am sure|Specify that servers receiving emails from your domain should reject them if they come from illegitimate sources (not present in your SPF record).|
|Yes, but use safe mode|Specify that servers receiving emails from your domain should accept them if they come from illegitimate sources (not present in your SPF record), but tag them as potentially not legitimate (as spam, for example).|
|No|Specify that servers receiving emails from your domain should accept them if they come from illegitimate sources (not present in your SPF record), without any particular action. The email header will however be increased.|

Once finished, click on `Next`{.action} and verify that the values you have entered are correct by clicking `Confirm`{.action}.

> [!primary]
>
> It can take between 4 and 24 hours until the configuration is fully effectual.
>

#### Adding the OVHcloud SPF record <a name="spfrecordovhcloud"></a>

Choose the `SPF`{.action} type record and then click on the `Use the SPF for OVHcloud web hosting`{.action} button. In the following step, click on `Confirm`{.action} to approve the action.

![domain](images/spf_records_add_entry_step2.png){.thumbnail}

> [!primary]
>
> It can take between 4 and 24 hours until the configuration is fully effectual.
>

#### Adding a TXT record <a name="txtrecord"></a>

Choose the `TXT`{.action} type record and enter the requested information. In the `Value` field, enter the full SPF string for your domain.

Click on `Next`{.action} and verify that the SPF you have entered is correct by clicking `Confirm`{.action}.

> [!primary]
>
> It can take between 4 and 24 hours until the configuration is fully effectual.
>

![domain](images/spf_records_add_TXT_entry.png){.thumbnail}

### Modifying an SPF record <a name="modifyspf"></a>

Log in to the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and switch to `Web Cloud`{.action} in the top navigation bar. In the `Domains`{.action} section, select the domain name concerned. Click on the `DNS zone`{.action} tab.

The table on this page displays your domain name's DNS zone at OVHcloud. Each DNS record is represented by a line in the table. Locate your TXT or SPF record in this table and click on the `...`{.action} button to edit the entry.

Refer to the [guide section above](#addspfrecord) if you need more information about editing the SPF record.

## Go further

[Editing an OVHcloud DNS zone](../web_hosting_how_to_edit_my_dns_zone/)

[Editing the DNS servers for an OVHcloud domain name](../web_hosting_general_information_about_dns_servers/)

Join our community of users on <https://community.ovh.com/en/>.
