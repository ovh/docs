---
title: 'Optimising the sending of emails'
excerpt: 'Find out how to send emails and limit the risk of them being marked as spam'
updated: 2024-01-24
---

## Objective

In general, anti-spam policies are strict. To ensure that emails reach recipients without being blocked by security tools, you will need to configure your services to authenticate your messages and their content on the recipient servers that process them.

**This guide will give you a few tips on optimising how your emails are sent.**

> [!warning]
> OVHcloud provides services for which you are responsible with regard to their configuration and management. It is therefore your responsibility to ensure that they function correctly.
>
> This guide is designed to assist you in common tasks as much as possible. Nevertheless, we recommend contacting a [specialist service provider](https://partner.ovhcloud.com/asia/directory/) or reaching out to [our community](https://community.ovh.com/en/) if you experience any issues.
>

## Requirements

- You must be an administrator of a configured email server.
- You must be able to manage the DNS zone for the domain name(s) used for sending.

> [!warning]
>
> The purpose of this guide is to provide you with a number of tips on optimising how your emails are sent. Keep in mind that each email service has its own guidelines and best practices for ensuring that messages are received by recipients. We strongly recommend that you consult these guidelines.
>

## Instructions

### Configure the SPF record <a name="spfrecord"></a>

If you are using a dedicated infrastructure (e.g. a dedicated server, VPS, Public Cloud instance or Hosted Private Cloud VM), the optimal SPF (Sender Policy Framework) record is: `v=spf1 ip4:server_ipv4 ~all`. Please remember to replace 'server_ipv4' with your server's IPv4 address.

> [!primary]
>
> The symbol before **all** is very important:
>
> - `+`: accept
> - `-`: reject
> - `~`: soft fail
> - `?`: neutral
>

You can go even further, by configuring the SPF record for a specific domain name, or by using the IPv6 address. To understand SPF registration, please refer to our guide on [configuring an SPF](/pages/web_cloud/domains/dns_zone_spf) record.

### Configure the DKIM record

The DKIM (DomainKeys Identified Mail) record is used to sign emails in order to counter email spoofing. This signature works on the principle of a private key/public key pair, allowing the sender domain to be authenticated.

For more information, see our guide to [configure a DKIM record](/pages/web_cloud/domains/dns_zone_dkim).

### Configure DMARC record

DMARC (Domain-based Message Authentication, Reporting and Compliance) is a security standard that relies on the two methods of SPF and DKIM email security. The arguments in the DMARC record guide the recipient on how to handle emails, depending on the SPF and/or DKIM result. An email address can be defined in the DMARC record, which will receive a report on authentication failures.

For more information, see our guide to [configuring a DMARC](/pages/web_cloud/domains/dns_zone_dmarc) record.

### Configure the reverse IP <a name="reverseip"></a>

To further optimise email sending and lower the risk of your emails being blocked, you can also configure a reverse IP with your domain name.

To begin, you first have to create an A record in the DNS Zone of your domain with the IP address of your server as a target.

If your DNS servers are managed by OVHcloud, please refer to our guide on [editing an OVHcloud DNS zone via the OVHcloud Control Panel](/pages/web_cloud/domains/dns_zone_edit).

Once you have modified your domain name’s DNS zone, you will need to allow a maximum of 24 hours for the changes to propagate fully, and be effective.

Once done, add the PTR record (also known as the reverse):

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/asia/&ovhSubsidiary=asia){.external}, go to the `Bare Metal Cloud`{.action} section and open `Network`{.action}. Next, click on `IP`{.action}.

If you wish to configure the reverse DNS on an Additional IP, click on the `Additional IP`{.action} tab.

The drop-down menu underneath **"My public IP addresses and associated services"** allows you to filter your services according to category.

![Reverse IP](images/filteripds.png){.thumbnail}

Next, click on `...`{.action} in the relevant row and select `Modify the reverse path`{.action}:

![Reverse IP](images/addreverse2022.png){.thumbnail}

Enter your domain name on the `Reverse DNS` section and click on `Validate`{.action}.

![Reverse IP](images/enterreverse.png){.thumbnail}

> [!primary]
> When you enter your domain name in the reverse, it double checks immediately if the A Record is referring back to the same IP. This is used in anti-spam procedures, so your A Record must be valid and propagated. There are certain rules to follow while entering the reverse:
> 
>  - It cannot start with a `-`.
>  - It cannot be longer than 80 characters.
>  - It cannot contain uppercase characters.
>  - It must end with a `.`.
>
> Example: "MyDomain.ca" in the reverse record would be **"mydomain.ca."**.
>

### Specific types of email sending

#### To a Microsoft server (Outlook, etc.)
 
Microsoft uses a whitelist policy. This means that initially, everything starts off on a blacklist, and a specific procedure is required to validate your email server.

Before starting the procedure to whitelist your IP, make sure you have a [reverse IP](#reverseip) configured.<br>

Microsoft also checks the SPF record, so it is recommended that you configure it.

Next, you will need to sign the SNDS (Smart Network Data Services) and JMRP (Junk Mail Reporting Partner Program) contracts. To subscribe, create a free account at <https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>.

Once your account is created, you must fill in the following form: 

- **Company name**
- **Contact email address**: (A valid email address where Microsoft can contact you.)
- **Complaint feedback email address**: (A valid email address where you will receive spam complaints. The **best practices** want the email to be in the form: **abuse@mydomain.com**.)

Next, add your IP addresse(s) in the section `IP address or range`.

When clicking on `Add new Network`, you will be asked to choose a contact email to authorize the request. Enter the address **abuse@mydomain.com** (obviously replace it with your own address) previously defined to receive spam complaints.

Once the information is filled in, click on `Begin Setup` to transmit the request. Microsoft will then send you an `SNDS-JMRP Contract` email, and a second email to **mydomain.com**.

Once the confirmations are approved, the subscription to JMRP/SNDS will be completed.

Once this is done and if your IP appears to be blocked, you can then request to delist it via the [junkmail procedure](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062){.external} (usually within 48H).

In some cases, Microsoft may ask the date of the first billing of your IP/server. In this situation, you can send a copy of your bill and add your IP/server (ex.: host nsXXX) in your reply.

For additional information, please open a [support request](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656){.external} with Microsoft. 

> [!warning]
> 
> **Refusal by Microsoft**
>
> It may happen that Microsoft refuses to delist your IP(s), in which case OVHcloud cannot intervene. It is important to respect the best practices of Microsoft.
> 

#### To a Gmail server

Adding specific records, such as a Domain-based Message Authentication, Reporting, and Compliance (DMARC) or DomainKeys Identified Mail (DKIM) record, can make it easier to receive emails if your recipient is at Gmail. Please refer to our guides listed [at the bottom of this page](#go-further) to configure them.

### Check your information

You may want to use a website like [Mail Tester](http://www.mail-tester.com/){.external} to check that all of your settings are correct.

## Go further

[How to improve email security with a DKIM record](/pages/web_cloud/domains/dns_zone_dkim)

[How to improve email security with an SPF record](/pages/web_cloud/domains/dns_zone_spf)

[How to improve email security with a DMARC record](/pages/web_cloud/domains/dns_zone_dmarc)

To get support setting up your OVHcloud solutions, contact our [network of OVHcloud partners](https://partner.ovhcloud.com/asia/directory/).

Join our community of users on <https://community.ovh.com/en/>.
