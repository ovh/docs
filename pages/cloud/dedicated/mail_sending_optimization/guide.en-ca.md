---
title: 'Optimising the sending of emails'
slug: optimise-email-sending
excerpt: 'Find out how to send emails and limit the risk of them being marked as spam'
section: Advanced
---

**Last updated 20th December 2022**

## Objective

Anti-spam policies are becoming increasingly strict. To ensure that your emails reach recipients without getting blocked by security tools, you will need to configure your service to authenticate your emails and validate their content.

**This guide will give you a few tips on optimising how your emails are sent.**

> [!warning]
>
> OVHcloud provides services that you are responsible for. In fact, as we do not have administrative access to these machines, we are not administrators and we cannot provide you with support. This means that it is up to you to manage the software and security daily. 
We have provided you with this guide in order to help you with common tasks. However, we advise contacting a specialist provider if you experience any difficulties or doubts about administration, usage or server security.
>

## Requirements

- a configured email server

> [!warning]
>
> The purpose of this guide is to provide you with a number of tips on optimising how your emails are sent. Keep in mind that each email service has its own guidelines and best practices for ensuring that messages are received by recipients. We strongly recommend that you consult these guidelines.
>

## Instructions

### Configure the SPF record <a name="spfrecord"></a>

If you are using a dedicated infrastructure (e.g. a dedicated server, VPS, Public Cloud instance or Hosted Private Cloud VM), the optimal SPF record is: `v=spf1 ip4:server_ipv4 ~all`. Please remember to replace 'server_ipv4' with your server's IPv4 address.

> [!primary]
>
> The symbol before **all** is very important:
>
> - `+`: accept
> - `-`: do not accept
> - `~`: soft fail
> - `?`: neutral
>

For further information on the SPF record, refer to the following page: <http://www.open-spf.org/>.

You can go even further by configuring the SPF record of a specific domain, or by specifying an IPv6 address. You can find out how to do this in our guide to [adding an SPF record](../../domains/web_hosting_the_spf_record/).

### Configure the DKIM record

By configuring the DKIM (DomainKeys Identified Mail) record, you add extra protection to prevent your emails from getting marked as spam. In simple terms, the DKIM is a signature that enables the sender’s domain to be authenticated.

The authentication is carried out by a DKIM key that needs to be added in your DNS zone. There are different generators for DKIM keys, including: <http://dkimcore.org/tools/keys.html>. Please follow the instructions listed on your chosen generator website.

### Configure the reverse IP <a name="reverseip"></a>

To further optimise email sending and lower the risk of your emails being blocked, you can also configure a reverse IP with your domain name.

To begin, you first have to create an A record in the DNS Zone of your domain with the IP address of your server as a target.

If your DNS Servers are managed by OVHcloud, please consult this [guide](https://docs.ovh.com/ca/en/domains/web_hosting_how_to_edit_my_dns_zone/#instructions).

Once you have modified your domain name’s DNS zone, you will need to allow a maximum of 24 hours for the changes to propagate fully, and be effective.

Once done, add the PTR record (also known as the reverse):

In the [OVHcloud Control Panel](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/en/&ovhSubsidiary=ca){.external}, go to the `Bare Metal Cloud`{.action} section, then open `IP`{.action}.  

If you wish to configure the reverse DNS on an Additional IP, click on the `Additional IP`{.action} tab.

The drop-down menu underneath **"My public IP addresses and associated services"** allows you to filter your services according to category.

![Reverse IP](images/selectservice2022.png){.thumbnail}

Next. click on `...`{.action} in the relevant row and select `Modify the reverse path`{.action}:

![Reverse IP](images/addreverse2022.png){.thumbnail}

Enter your domain name on the `Reverse DNS` section and click on `Confirm`{.action}

![Reverse IP](images/enterreverse.png){.thumbnail}

> [!primary]
> When you enter your domain name in the reverse, it double checks immediately if the A Record is referring back to the same IP. This is used in anti-spam procedures, so your A Record must be valid and propagated. There are certain rules to follow while entering the reverse:
> 
>  - it cannot start with a `-`
>  - it cannot be longer than 80 characters
>  - It cannot contain uppercase characters
>  - it must end with a `.`
>
> Example : "MyDomain.ca" in the reverse field would be **"mydomain.ca."**
>

### Specific types of email sending

#### To a Microsoft server (Outlook, etc.)
 
Microsoft uses a whitelist policy. This means that initially, everything starts off on a blacklist, and a specific procedure is required to validate your email server.

Before starting the procedure to whitelist your IP, make sure you have a [reverse IP](#reverseip) configured.<br>

Microsoft also checks the SPF field, so we recommend having set an [SPF record](#spfrecord) as well.

Next, you will need to sign the SNDS (Smart Network Data Services) and JMRP (Junk Mail Reporting Partner Program) contracts. To subscribe, create a free account at <https://postmaster.live.com/snds/JMRP.aspx?wa=wsignin1.0>.

Once your account is created, you must fill in the following form: 

- **Company name**:
- **Contact email address**: (A valid email address where Microsoft can contact you)
- **Complaint feedback email address**: (A valid email address where you will receive spam complaints. The **best practices** want the email to be in the form: **abuse@mydomain.com**.)

Next, add your IP addresse(s) in the section `IP address or range`.

When clicking on `Add new Network`, you will be asked to choose a contact email to authorize the request. Enter the address **abuse@mydomain.com**  (obviously replace it with your own address) previously defined to receive spam complaints.

Once the information is filled in, click on `Begin Setup` to transmit the request. Microsoft will then send you an `SNDS-JMRP Contract` email, and a second email to **mydomain.com**.

Once the confirmations are approved, the subscription to JMRP/SNDS will be completed.

Once this is done and if your IP appears to be blocked, you can then request to delist it via the [junkmail procedure](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&locale=en-us&ccsid=635857671692853062){.external} (usually within 48H).

In some cases, Microsoft may ask the date of the first billing of your IP/server. In this situation, you can send a copy of your bill and add your IP/server (ex : host nsXXX) in your reply.

For additional information, please open a [support request](https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656){.external} with Microsoft. 

> [!warning]
> 
> **Refusal by Microsoft**
>
> It may happen that Microsoft refuses to delist your IP(s), in which case OVHcloud cannot intervene. It is important to respect the best practices of Microsoft.
> 

#### To a Gmail server

If your recipients are with Gmail, adding specific records (e.g. a DMARC record) may ensure that emails reach them. Here is a Google article that can help you with this: [Add a DMARC record](https://support.google.com/a/answer/2466563?hl=en){.external}.

Google also has a [dedicated article](https://support.google.com/mail/answer/81126?hl=en){.external} regarding spam prevention to Gmail users.

### Check your information

You may want to use a website like [Mail Tester](http://www.mail-tester.com/){.external} to check that all of your settings are correct.

## Go further

To get support setting up your OVHcloud solutions, contact our [network of OVHcloud partners](https://partner.ovhcloud.com/en-ca/directory/).

Join our community of users on <https://community.ovh.com/en/>.

