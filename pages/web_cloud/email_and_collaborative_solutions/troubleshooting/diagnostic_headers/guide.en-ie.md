---
title: "Retrieve an email header and .eml file"
excerpt: "Find out how to retrieve an email header or extract a .eml file from your email client, webmail or external application"
updated: 2026-03-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objective

An email header traces the path taken by an email across the network, from the sender to the recipient.<br>
It can be used to identify a malicious email or detect slow reception.

Every email you receive has a header (*header*) that is not displayed by default when you view your email. You can however retrieve it from your email client or webmail.

You can also extract the entire email as a `.eml` file. This file may be requested to analyse a malicious email you received.<br>
To retrieve a `.eml` file, go to the [Webmail](#webmail) section.

**Find out how to retrieve an email header and extract a .eml file from your email client.**

## Requirements

- An email address using one of our [OVHcloud email solutions](/links/web/emails), or an external solution.
- Access to your email address via webmail or an email client.

## Instructions

### Understanding the content of a header

The header is composed of several elements indicating the path of the email, arranged in reverse chronological order, along with additional information.<br>
Below is a non-exhaustive list of the elements that can make up a header and their meaning.

- The `Received` field is present in the header each time the email passes through a sending server (SMTP). It usually contains the hostname of the server with its IP address and the date. The `Received` fields are sorted from the most recent pass to the oldest pass on a server:
<pre class="bgwhite"><code>
Received: from MX Plan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Here the email was transmitted from server MX Plan7.mail.ovh.net to server mo3005.mail-out.ovh.net on 30 June 2021 at 13:12:40 (UTC time zone)*

- The `Return-Path` field corresponds to the return address when the message failed to be sent. The return address is usually the sender's address.
<pre class="bgwhite"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- The `From` field indicates the sender's email address and display name.
<pre class="bgwhite"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- The `To` field indicates the recipient's email address and display name.
<pre class="bgwhite"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- The `Subject` field indicates the subject of the email.
<pre class="bgwhite"><code>
Subject: Hello my friend
</code></pre>

- The `Message-ID` field indicates the unique identifier of the email and ends with the name of the sending server (after the "@").
<pre class="bgwhite"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- The `Received-SPF` field displays the result of the [SPF](/pages/web_cloud/domains/dns_zone_spf) check performed on the sender's domain name. The `client-ip` argument can be used to find the IP address of the server that sent the email.
<pre class="bgwhite"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh
</code></pre>

- The `X-` fields are custom fields that complement the standard fields. They are implemented by the servers through which the emails pass.
<pre class="bgwhite"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE:
</code></pre>

### Retrieving a header from an email client

#### Microsoft Outlook

##### **Retrieving the header**

There are two versions of Outlook for Windows: **Classic Outlook** and the **New Outlook**. To identify your version, type "Outlook" in the Windows search bar. If the label "(classic)" appears, you are using Classic Outlook. Otherwise, it is the New Outlook.

![Outlook Windows - identify version](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Classic Outlook:**

1. Double-click the email to open it in a separate window.
2. In the new window, click `File`{.action} in the top left-hand corner.
3. Select `Info`{.action} on the left, then click `Properties`{.action}.
4. The full email header appears in the lower box. Select the entire text and copy it to a file.

![Full header displayed in Outlook](images/classic-outlook-01.png){.thumbnail}

**New Outlook:**

1. Open the email of your choice.
2. **Right-click** on the email.
3. Select `View`{.action} then `View Message Details`{.action}.
4. The full email header appears in the message details pane. Select the entire text and copy it to a file.

![Full header displayed in Outlook](images/new-outlook-01.png){.thumbnail}

##### **Retrieving the .eml file**

**Classic Outlook:**

1. Select the email in your inbox (do not open it).
2. Click `File`{.action} in the menu bar.
3. Click `Save As`{.action}.
4. In the "Save as type" dropdown, select **Outlook Message Format - Unicode (.msg)**. Choose a location on your computer (e.g. the Desktop) and click `Save`{.action}.

You can also **drag and drop** the email from your inbox directly onto your Desktop. This creates a `.msg` file that you can attach to your report.

![Save msg in Outlook](images/classic-outlook-02.png){.thumbnail}

**New Outlook:**

1. In the message list, **right-click** the email.
2. Select `Save As`{.action}, then choose `Save as EML file`{.action}.
3. Choose a location on your computer and click `Save`{.action}.

![Save an EML file in New Outlook](images/new-outlook-02.png){.thumbnail}

#### Mozilla Thunderbird

##### **Retrieving the header**

1. Select the email of your choice.
2. Press `Ctrl` \+ `U` (`Cmd` \+ `U` on macOS) simultaneously.
3. The full email header appears in a separate window. Select the entire text and copy it to a file.

![Full header displayed in Thunderbird](images/thunderbird-01.png){.thumbnail}

##### **Retrieving the .eml file**

1. Select the email of your choice.
2. Press `Ctrl` \+ `S` (`Cmd` \+ `S` on macOS) simultaneously.
3. The file is saved in `.eml` format by default.

#### macOS Mail

##### **Retrieving the header**

1. Select the email of your choice.
2. Press `Cmd` \+ `Shift` \+ `H` simultaneously.
3. The full email header appears. Select the grey text and copy it to a file.

![Full header displayed in macOS Mail](images/mailmacos-01.png){.thumbnail}

##### **Retrieving the .eml file**

1. Select the email of your choice.
2. Press `Cmd` \+ `S` simultaneously. The `.eml` file is created automatically. Select the `Raw Message Source` format.
3. Choose a location on your computer and click `Save`{.action}.

![Save an eml from macOS Mail](images/mailmacos-02.png){.thumbnail}

### Retrieving a header on webmail <a name="webmail"></a>

#### Roundcube

##### **Retrieving the header**

1. Select the email of your choice.
2. Click the button `... More`{.action} then `< > Show source`{.action}.
3. A new window opens with the full email header. Select the entire text and copy it to a file.

![Show source in Roundcube](images/roundcube01.png){.thumbnail}

##### **Retrieving the .eml file**

1. Select the email of your choice.
2. Click the button `... More`{.action} then `Download (.eml)`{.action}.

![Download eml file in Roundcube](images/roundcube02.png){.thumbnail}

#### Outlook Web App (OWA) <a name="owa"></a>

##### **Retrieving the header**

1. Select the email whose header you want to view.
2. Click the **arrow** to the right of `Reply All`{.action} then `View Message Details`{.action}.
3. A new window opens with the full email header, allowing you to download it.

![Message details in OWA](images/owa01.png){.thumbnail}

Also see our video tutorial:

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Retrieving the .eml file**

1. Click `(+) New`{.action} to create a new email.
2. Select the email you want to extract and drag it into the content of the new message.
3. Click the down arrow next to the generated attachment, then click `Download`{.action} to save the file to your computer.

![Extract an eml file from OWA](images/owa02.gif){.thumbnail}

#### Zimbra

##### **Retrieving the header**

1. Select the email of your choice.
2. Click `More`{.action} in the action bar and select `Show original`{.action}.
3. A new window opens with the full header and raw content of the email.

![Message details in Zimbra](images/zimbra-01.png){.thumbnail}

##### **Retrieving the .eml file**

1. Select the email of your choice.
2. Click `More`{.action} in the action bar and select `Show original`{.action}.
3. In the window that opens, use the shortcut `Ctrl` \+ `S` (or `Cmd` \+ `S` on macOS) to save the page as a `.eml` file.

### Retrieving a header from another email client

#### Gmail

##### **Retrieving the header**

1. Select the email concerned.
2. Click the 3 vertical dots on the right and click `Show original`{.action}.
3. A new window opens with the full email header.

![Show message source in Gmail](images/gmail01.png){.thumbnail}

##### **Retrieving the .eml file**

1. Select the email concerned.
2. Click the 3 vertical dots on the right and select `Download message`{.action}.

#### Outlook.com

To retrieve the header or extract the `.eml` file from the &#60;Outlook.com&#62; webmail interface, see the [Outlook Web App](#owa) section of this guide.

## Go further

[Email FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Join our [community of users](/links/community).
