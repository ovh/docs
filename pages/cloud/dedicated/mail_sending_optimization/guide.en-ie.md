---
title: 'Optimising the sending of emails'
slug: optimise-email-sending
excerpt: 'Find out how to send emails and limit the risk of them being marked as spam'
section: Advanced
---


**Last updated 30th September 2021**

## Objective

Anti-spam policies are becoming increasingly strict. To ensure that your emails reach recipients without getting blocked by security tools, you will need to configure your service to authenticate your emails and validate their content.

**This guide will give you a few tips on optimising how your emails are sent.**

> [!warning]
>
> OVHcloud provides services that you are responsible for. In fact, as we do not not have administrative access to these machines, we are not administrators and we cannot provide you with support. This means that it is up to you to manage the software and security daily. 
We have provided you with this guide in order to help you with common tasks. However, we advise contacting a specialist provider if you experience any difficulties or doubts about administration, usage or server security.
>

## Requirements

- a configured email server

## Instructions

### Configure the SPF record.

If you are using a dedicated infrastructure (e.g. a dedicated server, VPS, Public or Private Cloud instance), the optimal SPF record is: v=spf1 ip4:server_ipv4 ~all. Please remember to replace 'server_ipv4' with your server's IPv4 address.

> [!primary]
>
> The symbol before the **all** is very important:
>
> - `+`: accept
> - `-`: do not accept
> - `~`: soft fail
> - `?`: neutral
>

For further information on the SPF record, refer to the following page: <http://www.open-spf.org/>.

You can go even further by configuring the SPF record of a specific domain, or by specifying an IPv6 address. You can find out how to do this in our guide to [adding an SPF record](https://docs.ovh.com/gb/en/domains/web_hosting_the_spf_record/).

### Configure the DKIM record.

By configuring the DKIM (DomainKeys Identified Mail) record, you add extra protection to stop your emails from getting marked as spam. In simple terms, the DKIM is a signature that enables the sender’s domain to be authenticated.

The authentication is carried out by a DKIM key that needs to be added in your DNS zone. There are different generators for DKIM keys, including: <http://dkimcore.org/tools/keys.html>. Please follow the instructions listed on your chosen generator website.

### Configure the reverse IP.

To further optimise email sending and lower the risk for your emails to be blocked, you can also configure a reverse IP with your domain name.

To begin, you will first have to create an A record in the DNS Zone of your Domain with the IP Adress of your server as a target.

If your DNS Servers are managed by OVHcloud, please consult this [guide](https://docs.ovh.com/ie/en/domains/web_hosting_how_to_edit_my_dns_zone/#instructions).

Once done, add the PTR record (also known as the reverse):

In the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, go to the `Bare Metal Cloud`{.action} section, then click on the `IP`{.action} section at the bottom left of the page.

![Reverse IP](images/ipsection.png)

The **“Service”** drop-down select an IPv4 address:

![Reverse IP](images/servicedropmenu.png)

click on `...`{.action} in the relevant row to open the context menu, and select `Modify the reverse path`{.action}:

![Reverse IP](images/setreversedns.png)

Enter your domain name on the Reverse DNS section and click on `Confirm`{.action}

![Reverse IP](images/enterreverse.png)

> [!primary]
> When you enter your domain name in the reverse, it double checks immediately if the A Record is referring back to the same IP. This is used in anti-spam procedures, so your A Record must be  valid and propagated. There are certain rules to follow while entering the reverse:
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

To do this, please open a support request with Microsoft here: <https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656>

#### To a Gmail server

If your recipients are with Gmail, adding specific records (e.g. a DMAC record) may ensure that emails reach them. Here is a Google article that can help you with this: [Add a DMARC record](https://support.google.com/a/answer/2466563?hl=en).

### Check your information.

You may want to use a website like [Mail Tester](http://www.mail-tester.com/) to check that all of your settings are correct.


## Go further

Join our community of users on <https://community.ovh.com/en/>.