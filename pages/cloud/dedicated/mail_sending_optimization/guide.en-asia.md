---
title: 'Optimising the sending of emails'
slug: optimise-email-sending
excerpt: 'Find out how to send emails and limit the risk of them being marked as spam'
section: Advanced
---

**Last updated 20th January 2017**

## Objective

Anti-spam policies are becoming increasingly strict. To ensure that your emails reach recipients without getting blocked by security tools, you will need to configure your service to authenticate your emails and validate their content.

**This guide will give you a few tips on optimising how your emails are sent.**

> [!warning]
>
> OVH provides services that you are responsible for. In fact, as we do not not have administrative access to these machines, we are not administrators and we cannot provide you with support. This means that it is up to you to manage the software and security daily. 
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

For further information on the SPF record, refer to the following page: <http://www.openspf.org/SPF_Record_Syntax>.

You can go even further by configuring the SPF record of a specific domain, or by specifying an IPV6 address. You can find out how to do this in our guide to [adding an SPF record](https://docs.ovh.com/gb/en/domains/web_hosting_the_spf_record/).

### Configure the DKIM record.

By configuring the DKIM (DomainKeys Identified Mail) record, you add extra protection to stop your emails from getting marked as spam. In simple terms, the DKIM is a signature that enables the sender’s domain to be authenticated.

The authentication is carried out by a DKIM key that needs to be added in your DNS zone. There are different generators for DKIM keys, including: <http://dkimcore.org/tools/keys.html>. Please follow the instructions listed on your chosen generator website.

### Configure the reverse IP.

To further optimise email sending and stop your emails from being blocked, you can configure a reverse IP with your domain name.

To modify your reverse IP in the [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, go to the `Dedicated`{.action} section, then `IP`{.action}. Then select an IPv4 address, click the cogwheel on the right-hand side, then click `Modify the reverse`{.action}:

![Reverse IP](images/reverse_ip.png)

Here, you can add your domain name as a reverse IP.

### Check your information.

You may want to use a website like [Mail Tester](http://www.mail-tester.com/) to check that all of your settings are correct.

### Specific types of email sending

#### To a Microsoft server (Outlook, etc.)
 
Microsoft uses a whitelist policy. This means that initially, everything starts off on a blacklist, and a specific procedure is required to validate your email server.

To do this, please open a support request with Microsoft here: <https://support.microsoft.com/en-us/getsupport?oaspworkflow=start_1.0.0.0&wfname=capsub&productkey=edfsmsbl3&ccsid=6364926882037750656>

#### To a Gmail server

If your recipients are with Gmail, adding specific records (e.g. a DMAC record) may ensure that emails reach them. Here is a Google article that can help you with this: [Add a DMARC record](https://support.google.com/a/answer/2466563?hl=en).



## Go further

Join our community of users on <https://community.ovh.com/en/>.