---
title: 'Shared Mail: Guide to view email headers'
slug: shared_mail_guide_to_view_email_headers
section: 'Troubleshooting'
order: 03
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>


**Last updated 19/11/2021**

## Objective

The role of an email header is to trace the path taken by this email on the network, from the sender to the recipient.<br>
You can use it to identify malicious emails or detect slow reception.

Each email you receive has a *header*, which does not appear by default when you view your email. However, you can retrieve it from your email client or webmail.

You can also extract the entire email as a `.eml` file. This file may be requested to scan a malicious email you received.<br>
To retrieve a `.eml` file, go to our [Webmail](#webmail) section.

**Find out how to retrieve an email header from your email client.**

## Requirements

- an email address for one of our [OVHcloud email solutions](https://www.ovhcloud.com/en-gb/emails/), or an external solution
- You must have access to your email address via webmail or an email client.

## Instructions

### Understand the content of a header

The header consists of several elements indicating the path of the email. It consists of anecrronologically prioritised elements, from the latest to the oldest, and additional information.<br>
Below is a non-exhaustive list of the elements that can make up a header, along with their meaning. 

- The `Received` field is present in the header each time the email is sent to an outgoing server (SMTP). The host name of the server is usually found with its IP address and date. The `Received` fields are sorted from the most recent pass to the oldest pass on a server:

<pre class="console"><code>
Received: from mxplan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh>; Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>

  *Here the email was sent from server mxplan7.mail.ovh.net to server mo3005.mail-out.ovh.net on 30 June 2021 at 13:12:40 (Time zone UTC)*

- The `Return-Path` field corresponds to the return address when the message failed to be sent. the return address is usually the one that sent the shipment. 

<pre class="console"><code>
Return-Path: &amp;ltjohn@mydomain.ovh>
</code></pre>

- The `From` field indicates the email sender address and display name.

<pre class="console"><code>
From: John &amp;ltjohn@mydomain.ovh>
</code></pre>

- The `To` field indicates the email recipient's address and display name.

<pre class="console"><code>
To: Robert &amp;ltrobert@hisdomain.ovh> 
</code></pre>

- The `Subject` field is the subject of the email.

<pre class="console"><code>
Subject: Hello my friend
</code></pre>

- The `Message-ID` field designates the unique identifier of the email and ends with the name of the outgoing server (after the \"@\"). 

<pre class="console"><code>
Message-ID: &amp;ltDc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh>
</code></pre>

- The `Received-SPF` field displays the result of the [SPF](https://docs.ovh.com/gb/en/domains/web_hosting_the_spf_record/) check performed on the sender's domain name. You can use the `client-ip` argument to find the IP address of the server that sent the email. 

<pre class="console"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh receiver=robert@hisdomain.ovh 
</code></pre>

- The `X-` fields are custom fields, they serve as complements to the standard fields. They are implemented by the servers that the emails pass through.

<pre class="console"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE: 
</code></pre>

### Recover a header from an email client

#### Microsoft Outlook 

To read the header, open the email of your choice in a separate window by double-clicking it in the list.

In the new window, click `File`{.action} in the top right-hand corner.

![emails](images/outlook01.png){.thumbnail}

Then select `Information`{.action} on the left, and click `Properties`{.action}.

![emails](images/outlook02.png){.thumbnail}

The full email header appears in the lower box. You can select all text and copy it to a file.

![emails](images/outlook03.png){.thumbnail}

#### Mozilla Thunderbird

To display the header, select the email you want, then press `Ctrl` \+ `U` at the same time.

![emails](images/thunderbird01.png){.thumbnail}

The full email header appears in a separate window, you can select all the text and copy it to a file.

#### macOS email

To display the header, select the email you want, then go to `Presentation`{.action} in the top menu bar, then go to `Message`{.action} and click `All Headers`{.action}.

![emails](images/mailmac01.png){.thumbnail}

The full email header appears in a separate window. You can select all text and copy it to a file.

### Retrieve a header on webmail <a name="webmail"></a>

#### Roundcube

##### **Retrieve header**

To display the header, select the email you want. Click the button `... More`{.action} then `< > View source`{.action}.

![emails](images/roundcube01.png){.thumbnail}

A new window will open with the full email header. You can select all text and copy it to a file.

##### **Retrieve the .eml file**

To download the `.eml` file, select the email you want. Click the button `... More`{.action} then `Download (.eml)`{.action}.

![emails](images/roundcube02.png){.thumbnail}

#### Outlook Web Application (OWA) <a name="owa"></a>

##### **Retrieve header**

Select the email whose header you want to display. Click **the arrow** to the right of `Reply All`{.action}, and then click `View Message Details`{.action} . A new window will open with the full email header, allowing you to download it.

![emails](images/owa01.png){.thumbnail}

##### **Retrieve the .eml file**

To download the `.eml` file, click `(+) New`{.action} to create a new email. 

Select the email you want to extract, then drag and drop it into the content of the new email. 

Click the down arrow next to the attachment you just generated, and then click `Download`{.action} to save the file to your machine.

![emails](images/owa02.gif){.thumbnail}

### Retrieve a header on another email client

#### Gmail

To retrieve the header, select the email concerned, then click the 3 vertical dots on the right, then `Show message source`{.action}. A new window will open with the full email header, which also allows you to download it in `.eml` format.

![emails](images/gmail01.png){.thumbnail}

#### -

To view the header in the <Outlook.com> webmail interface, see the [Outlook Web Application](#owa) topic in this guide.

## Go further

[Email FAQ](https://docs.ovh.com/gb/en/emails/emails-faq/)

Join our community of users on <https://community.ovh.com/en/>.
