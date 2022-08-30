---
title: OVHclous AntiSpam - Unblocking an IP and Best Practices
slug: antispam-best-practices
excerpt: Find out how to unblock your IP when it is blocked for SPAM and other best practices. 
section: Server Management
order: xxxxx
---

**Last updated 15th October 2021**

## Objective

For every IP available with OVHcloud products and services, as an internet service provider, OVHcloud will register and reserve it with organisations such as RIPE or ARIN. This means that we appear as the IP abuse contact for litigation in the WHOIS database.

If an IP is reported to organisations such as Spamhaus and SpamCop?, which work to combat spam, malicious websites and phishing, then the reputation of the entire OVHcloud network is at stake.

It is therefore important that OVHcloud takes care of the reputation, quality and security of the network, which also forms an important part of your service.

### How does the protection system work?

Our system is based on the Vade Secure anti-spam technology.

### Blocked for SPAM

Once an IP is blocked for SPAM, an email will be sent to your account containing the following information like the example below:

> 
> Dear Customer,
>
> Our anti-spam protection layer has detected that your IP 111.111.111.111 is sending spam.
>
> In order to protect our network, we have blocked the port 25 of your server, at the
network level.
>
> To help you investigate about this problem and fix it, here are a sample
are some advanced details on your emails:
>
>Destination IP: 35.35.35.35 - Message-ID: d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300
Destination IP: 35.35.35.35 - Message-ID: fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300
Destination IP: 35.35.35.35 - Message-ID: P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300
Destination IP: 35.35.35.35 - Message-ID: 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300
Destination IP: 35.35.35.35 - Message-ID: zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300
Destination IP: 35.35.35.35 - Message-ID: zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
>
> If you identified and fixed the spam issue, you can unblock
your IP using your manager, simply by using that link :
> <https://ca.ovh.com/manager/dedicated/#/ip?serviceName=nsxxxxxx.ip-xx-xx-xx.net>
>

### What to do after receiving the email alert

### 1. Resolve the issue and unblock your IP

The first step is to identify the issue, then unblock your IP.

#### Before unblocking an IP


* Stop sending emails (e.g. stop all mail software such as qmail, Postfix, Sendmail etc.).

* Check the email queue (e.g. qmHandle for qmail, postqueue -p for Postfix).

* Analyse your logs using the Message-ID found in the block alert.

* Make sure you are not sending SPAM and the emails are legitimate. If that is not the case, we strongly recommend you to resolve the issue before unblocking the IP. Please consult the second part of this guide for best pratices. 

Once the issue has been resolved, you can unblock your IP by performing the following steps:

> [!alert]
> IMPORTANT !!
Do not unblock the IP under any circumstances without having suspended the sending of emails from your server, otherwise you will immediately get blocked for a second time (and a longer duration). 
>

#### From the OVHcloud Manager

In your [OVHcloud Control Panel](), go to the `Bare Metal Cloud`{.action} and click on `IP`{.action}.

There will be a pop-up message with the IP that has been blocked for SPAM.

image 

Next, click on the `...`{.action} and select `anti spam`{.action}

Image

In the new tab, click on `Unblock the anti-spam`{.action} and confirm.

The IP is being released, the operation may take several minutes.

Once done, your IP will be unblocked.

> [!primary]
>
> If you want the list of message-IDs detected as spam, click on `Details`{.action}. 
>

#### From the OVHcloud API

Log in to the [OVHcloud API interface](https://api.ovh.com/console/) according to the [relevant guide](../../api/first-steps-with-ovh-api/) and follow the steps below.

First, retrieve the list of IPs for each OVHcloud service (Dedicated/Private Cloud/VPS/Public Cloud):

> [!api]
>
> @api {GET} /ip
>

**type**: Indicate the type of IP (Dedicated, PCC, VPS, vRack, PCI, etc.)

Here's an example of what you should see:

>
    "2001:41d0:67:d200::/56",
    "2001:41d0:68:a00::/56",
    "2001:41d0:68:f000::/56",
    "2001:41d0:117:db00::/56",
    "178.32.171.80/28",
    "178.33.222.96/28",
    "176.31.44.80/28",
    "178.33.92.128/27",
    "46.105.137.0/27",
    "178.33.92.64/27" 
>

Next, search for IPs in a particular state with the following call. If you already know the IP blocked, you can move to the [next step](#unblock-the-ip):

> [!api]
>
> @api {GET} /ip/{ip}/spam
>

**ip**:	Specify the IP block retrieved in the previous step with the netmask. For example 176.31.44.80/28 for a single IP block.
**state**: Specify the state you are looking for.

Here's an example result (in this instance, the 176.31.44.80/28 block was selected):

>
    "176.31.44.81" 
>

If the IP is blocked, you can get information on the blocking with the following call, otherwise, move to the [next step](#unblock-the-ip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip**: Specify the IP block retrieved in the previous step with the netmask.
**ipSpamming**: Specify the previously retrieved IP in "blockedForSpam" state, for example.

Here's an example result (in this instance block 176.31.44.80/28 and IP 176.31.44.81 were selected):

>
    time: 3600,
    date: "2022-08-29T17:42:50+01:00",
    ipSpamming: "176.31.44.81",
    state: "blockedForSpam" 
>


So:

>  
    * The IP is blocked for 1 hour (or 3600 seconds).
    * It was blocked on 29/08/2022 at 5:42 p.m.
    * It's current state is blocked. 
>


If you wish to obtain the statistics on what has been detected, use the following api call, otherwise move to the [next step](#unblock-the-ip).

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip**:	Specify the IP block retrieved in the previous step with the netmask
**ipSpamming**:	Specify the previously retrieved IP in "blockedForSpam" state, for example.
**from and to**: Use the date format used in the previous function (YYYY-MM-DDTHH:MM+01:SS).


Here is an example result:

>
    {
    "messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
    "destinationIp": "82.12.242.9",
    "date": 1385640992,
    "spamscore": 410
    }
>


#### Unblock the IP

> [!alert]
> IMPORTANT !!
Do not unblock the IP under any circumstances without having suspended the sending of emails from your server, otherwise you will immediately get blocked for a second time (and a longer duration). 
>

To unblock your IP, use the following call:

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>


**ip**: Specify the IP block retrieved in the previous step with the netmask.
**ipSpamming** : Specify the previously retrieved IP in blockedForSpam state, for example.


Here is an example result:

>
    "message": "This IP address is still blocked for 129 seconds"
>


More than 129 seconds later:

>
    time: 3600,
    date: "2022-08-29T17:42:50+01:00",
    ipSpamming: "176.31.44.81",
    state: "unblocking" 
>

The IP is being released, the operation may take several minutes.

### 2. False positives

If you have checked and found that **Message-ID** are from your legitimate email, you should then ensure that your email messages comply with the [RFC](#rfc) and the [Best Practices indicated below](#best-practices).

### RFC

RFCs (Request For Comments) are documents intended to describe technical aspects of the internet. They are produced and published by the IETF (Internet Engineering Task Force), a group which basically produces and defines standards.
For more information, see: [RFC](https://en.wikipedia.org/wiki/Request_for_Comments), [IETF](https://www.ietf.org/) and [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft).

### Best Practices 

Best practices are recommended methods which are often based on these documents and are intended to advise you on the best way to proceed. In this instance, this means the basic rules to follow so that your emails are not marked as spam.

#### Sending Volume

If your outgoing email volume is very high, you are advised to:


* reserve an IP block dedicated solely to email usage.
* provide an 'abuse' address on this block in order to receive complaints.
* configure [Reverses](https://docs.ovh.com/ca/en/dedicated/optimise-email-sending/#configure-the-reverse-ip) on all IPs correctly.

This operation will enable you to simultaneously isolate the IP and domain reputation if you send emails for various domains, to receive the complaints, and thus do what is necessary to get unblocked by various organisations. It also enables you to locate a problem more quickly on a form that uses domain X or Y, as the emails are not sent out from the same IP and don't have the same reverse.

#### Email Content

### Reporting a false positive

To report a false positive, the ticket should contain the following information:

* The IP of the service blocked for SPAM
* A copie of the email flagged as SPAM (you should be able to identify it with the **message ID** sent in the ANTISPAM email). It is crucial to provide only the copy of the email flagged as SPAM.
* The .EML file of the email provided, this should include the **header** and **footer** of the email. If you are not familiar with how to extract .EML file, please consult the following guide [Retrieving email headers](https://docs.ovh.com/gb/en/emails/shared_mail_guide_to_view_email_headers/).

