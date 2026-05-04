---
title: "Zimbra - Configuring your email account on an email client"
excerpt: "Choose the configuration method suited to your Zimbra Starter or Pro plan and your email client"
updated: 2026-05-04
---

## Objective

With the Zimbra solution, OVHcloud offers an open-source collaborative messaging platform with all the features you need for professional use. This guide helps you choose the configuration method suited to your Zimbra plan and your email client.

**Find out which method to choose to configure your Zimbra email account on the email client of your choice.**

## Requirements

- A subscription to an email account on one of our [Zimbra solutions](/links/web/emails-zimbra) (**Zimbra Starter** or **Zimbra Pro**).
- An email client installed on the device of your choice.
- The login credentials for the email address to configure.

<!-- CP-NAV-START:web-zimbra -->
---

### Access your OVHcloud Control Panel

- **Direct link:** [Zimbra](/links/control-panel/web-zimbra)
- **To access your services:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Instructions

### Identifying your Zimbra plan <a name="identifier-offre"></a>

The configuration method to use depends on your Zimbra plan. The two plans do not support the same protocols.

| Plan | Supported protocols | Synchronised features |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | Emails only |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | Emails, calendar, contacts, tasks |

> [!primary]
>
> To identify your plan, log in to your [OVHcloud Control Panel](/links/manager) and go to `Web Cloud`{.action} then `Zimbra Mail`{.action}. In the `Email accounts`{.action} tab, the plan is indicated in the **Service plan** column for each account.

### Configuring a Zimbra Pro account <a name="config-zimbra-pro"></a>

> [!success]
>
> To take full advantage of the collaborative features of Zimbra Pro (calendar, contact and task synchronisation), use the **ActiveSync** or **EWS** protocols via the dedicated guides below. IMAP/POP configuration is still possible, but it only synchronises emails.

Click the tab corresponding to the type of device you are using:

> [!tabs]
> **Windows PC**
>>
>> - [Classic Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Apple Mac computer**
>>
>> - [Mail via EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook via EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone or iPad**
>>
>> - [Mail via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Android smartphone or tablet**
>>
>> - [Gmail via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook via ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Configuring a Zimbra Starter account (or a Zimbra Pro account in IMAP/POP) <a name="mail-config"></a>

For the **Zimbra Starter** plan, or if you prefer an IMAP/POP configuration for your **Zimbra Pro** account, use the guides below.

> [!primary]
>
> The guides below are shared with the MX Plan offer because the IMAP/POP/SMTP settings are strictly identical for the two plans. This is why the links have an "MX Plan" mention in their title.

Click the tab corresponding to the type of device you are using:

> [!tabs]
> **Windows PC**
>>
>> - [Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Mail for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Apple Mac computer**
>>
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone or iPad**
>>
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Android smartphone or tablet**
>>
>> - [Gmail for Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Web interface**
>>
>> - [Gmail online interface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Using the Zimbra mobile app <a name="config-zimbra-app"></a>

Compatible with both the **Zimbra Starter** and **Zimbra Pro** plans, the Zimbra mobile app (Android and iOS) lets you access your account using the native Zimbra protocol.

- [Configuring the Zimbra mobile app](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Reference IMAP, POP and SMTP settings <a name="popimap-settings"></a>

If your email client requires manual configuration, use the following settings.

#### Incoming servers

To receive emails, we recommend the **IMAP** protocol. The **POP** protocol is still available. Click the tab corresponding to the protocol of your choice:

> [!tabs]
> **IMAP (recommended)**
>>
>> - **Username**: **full** email address
>> - **Password**: password for the email address
>> - **EUROPE server (incoming)**: `imap.mail.ovh.net` **or** `ssl0.ovh.net`
>> - **AMERICA/ASIA-PACIFIC server (incoming)**: `imap.mail.ovh.ca`
>> - **Port**: 993
>> - **Security type**: SSL/TLS
>>
> **POP**
>>
>> - **Username**: **full** email address
>> - **Password**: password for the email address
>> - **EUROPE server (incoming)**: `pop.mail.ovh.net` **or** `ssl0.ovh.net`
>> - **AMERICA/ASIA-PACIFIC server (incoming)**: `pop.mail.ovh.ca`
>> - **Port**: 995
>> - **Security type**: SSL/TLS
>>

#### Outgoing server

To send emails, use the following **SMTP** settings:

- **Username**: **full** email address
- **Password**: password for the email address
- **EUROPE server (outgoing)**: `smtp.mail.ovh.net` **or** `ssl0.ovh.net`
- **AMERICA/ASIA-PACIFIC server (outgoing)**: `smtp.mail.ovh.ca`
- **Port**: 465
- **Security type**: SSL/TLS

## Go further <a name="go-further"></a>

[Getting started with Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configuring the Zimbra mobile app](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Using Zimbra webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ on the OVHcloud Zimbra solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

For specialised services (SEO, development, etc.), contact the [OVHcloud partners](/links/partner).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend our range of [support solutions](/links/support).

Join our [community of users](/links/community).
