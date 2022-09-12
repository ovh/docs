---
title: Adding an SPF record to the configuration of your domain name
excerpt: Find out how to configure an SPF record for your OVHcloud domain name
slug: web_hosting_the_spf_record
section: DNS and DNS Zone
order: 5
---

**Last updated 12th September 2022**

## Objective

The SPF (Sender Policy Framework) allows the server that receives an email to check that it has been sent from a trusted server. 

- It helps prevent potential identity theft via email addresses using your domain name (spoofing). 
- You can also use it to authenticate the emails you send.
- The SPF record is added as a record in the domain name’s DNS zone.

This action is made possible by the information entered in an SPF record, which is actually a TXT record in the DNS zone. We can find:

- **Server and/or multiple IP addresses**: This will identify them as legitimate sending sources.
- **A qualifier**: It will recommend to the server receiving the emails a way to react to a message considered illegitimate, that is to say from a source that is not listed.

You should therefore ensure that you enter the sending sources you use to send emails with your domain name in the SPF record. These sources can be your own email server, that of your provider, or one of OVHcloud’s email solutions.

> **Example** <br> 
> You are sending an email from your address `contact@mydomain.ovh`.
> Only outgoing server **A** is declared in the SPF record of the domain `mydomain.ovh`.
> When the Inbound Mail Server receives the email, it will read the DNS zone of your domain name `mydomain.ovh` to inspect the SPF record.
>
> - Outgoing Mail Server **A** is listed in the SPF record, so the email will arrive normally in the recipient's inbox.
> - Outgoing Mail Server **B** is not listed in the SPF record, so the email sent from this server will be marked as suspicious in the inbox. This can result in `[SPAM]` being added in the subject of the email, being placed in a `Junk` mail folder, or being deleted directly, depending on the rules of the receiving server.
>
> ![domain](images/spf_records_diagram.png){.thumbnail}


> [!primary]
>
> The SPF record is only an indication provided to servers that receive emails, including yours. It is up to these servers to apply, or not, what is specified in the SPF record of domain names for which they receive messages.
>

**Find out how to configure an SPF record for your domain name at OVHcloud.**

## Requirements

- You have access to manage the domain name from your [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca).
- The domain name concerned must use the OVHcloud configuration (i.e. the OVHcloud DNS servers).

> [!warning]
>
> If your domain name does not use OVHcloud DNS servers, you will need to modify the SPF record using the interface of the service provider managing your domain name's DNS.
>
> If your domain name is registered with OVHcloud, you can check if it is using the OVHcloud configuration in your [Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca). Click on the `DNS servers`{.action} tab of your domain name.
>

## Instructions

### Checking your current SPF configuration

If your domain uses OVHcloud DNS servers, you can check if an SPF record is already configured for it. Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and switch to `Web Cloud`{.action} in the top navigation bar. In the `Domain names`{.action} section, select the domain name concerned. Click on the `DNS zone`{.action} tab.

The table on this page displays your domain name's DNS zone at OVHcloud. Each DNS record is represented by one line in the table.

> [!primary]
>
> In case of doubt, verify that your domain is actually using OVHcloud DNS servers from the `DNS servers`{.action} tab.
>

To find the row for the OVHcloud SPF record, a display filter can be applied to the table. Since the record can appear in two different places, select both the `TXT`{.action} and the `SPF`{.action} filter. You will receive one of the follwing results.

- **An SPF record that corresponds to OVHcloud email solutions is displayed**: Your domain currently uses the OVHcloud configuration. If you no longer wish to use it, you must modify it in the next step).

- **An SPF record that does not match the OVHcloud configuration is displayed**: Your domain already uses a custom SPF. If your configuration is incorrect, you will need to modify it. You can modify it or choose the OVHcloud configuration in the next step.

- **An SPF record does not appear in the target column**: First check that the record does not actually exist as SPF or TXT by changing the filtering. If no SPF record is displayed in the zone at all, your domain does not use one. You can add it in the next step.

> [!primary]
>
> An SPF record always follows this form: "v=spf1 `sources` `qualifier`". For example, the OVHcloud SPF is: "v=spf1 include:mx.ovh.com ~all".
>

![domain](images/spf_records_check_OVH_configuration.png){.thumbnail}

### Configuring a new SPF record 

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and switch to `Web Cloud`{.action} in the top navigation bar. In the `Domain names`{.action} section, select the domain name concerned. Click on the `DNS zone`{.action} tab.

To add an SPF record, click on `Add an entry`{.action} in the right-hand menu.

![domain](images/spf_records_add_entry_step1.png){.thumbnail}

In the window that pops up, the configuration assistant offers several different types of DNS records. There are two ways of adding an SPF record:

- [Add a TXT record](#txtrecord): For users who are experienced or already have the full record. For example, your email solution provider will send you the value.
- [Add an SPF record](#spfrecord): For users who do not have the entire record. For example, you only have an IP address or the host name of the email server.
- [Add an OVHcloud SPF record](#spfrecordovhcloud) **and use the OVHcloud configuration**: For users who only have OVHcloud email offers on their domain name (excluding [Private Exchange](https://www.ovhcloud.com/en-ca/emails/hosted-exchange/){.external}).

![domain](images/spf_records_add_entry.png){.thumbnail}

#### Adding an SPF record <a name="spfrecord"></a>

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

#### Use OVHcloud SPF record <a name="spfrecordovhcloud"></a>

You have chosen the `SPF`{.action} record and would like to apply the OVHcloud configuration. This means that all of the OVHcloud outgoing email servers are included for the following email offers:

- MX Plan standalone or included in an OVHcloud [web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/){.external}
- [Hosted Exchange](https://www.ovhcloud.com/en-ca/emails/hosted-exchange/)

Choose the `SPF`{.action} type record and then click on the button `Use the SPF for OVHcloud web hosting`{.action}. In the following step, click on `Confirm`{.action} to approve the action.

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

Log in to the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca) and switch to `Web Cloud`{.action} in the top navigation bar. In the `Domain names`{.action} section, select the domain name concerned. Click on the `DNS zone`{.action} tab.

The table on this page displays your domain name's DNS zone at OVHcloud. Each DNS record is represented by a line in the table. Locate your TXT or SPF record in this table and click on the `...`{.action} button to edit the entry.

Refer to the [guide section above](#addspfrecord) if you need more information about editing the SPF record.

### OVHcloud SPF configuration for shared email offers <a name="ovhcloudspfvalue"></a>

The general OVHcloud SPF configuration applies to the solutions below:

- MX Plan standalone or included in an OVHcloud [web hosting plan](https://www.ovhcloud.com/en-ca/web-hosting/)
- [Hosted Exchange](https://www.ovhcloud.com/en-ca/emails/hosted-exchange/)

The configuration is as follows:

```bash
mydomain.ovh IN TXT "v=spf1 include:mx.ovh.com ~all"
```

### OVHcloud SPF configuration for Private Exchange 

For the Private Exchange solution, you need to enter your email server’s IP addresses. To do this, use the `ip4` argument to enter the IP address of your Private Exchange server.

```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 ~all"
```

If you also use a [shared email service](#ovhcloudspfvalue), you can add the argument `include:mx.ovh.com` to the SPF record, with the following result:


```bash
mydomain.ovh IN TXT "v=spf1 ip4:11.22.333.444 include:mx.ovh.com ~all"
```

> [!primary]
> 
> To retrieve the IP address of the Private Exchange server, click `Microsoft`{.action}, then `Exchange`{.action}. Next, click on the name of the Private Exchange service concerned.
>
> In the `General`{.action} information tab, click the `A` in the `Server` diagnostic section. In the window that pops up, read the value.
>
> ![domain](images/spf_records_ip.png){.thumbnail}


## Go further

[Editing an OVHcloud DNS zone](../web_hosting_how_to_edit_my_dns_zone/)

[Editing the DNS servers for an OVHcloud domain name](../web_hosting_general_information_about_dns_servers/)

Join our community of users on <https://community.ovh.com/en/>.
