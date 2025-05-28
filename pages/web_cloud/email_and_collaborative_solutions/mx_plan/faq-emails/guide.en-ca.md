---
title: FAQ OVHcloud emails
excerpt: "Find the most frequently asked questions about emails"
updated: 2025-04-07
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## Email FAQ

On this page, you will find the most frequently asked questions regarding the use of your emails, depending on the OVHcloud email offers.

### Email offers with OVHcloud

OVHcloud currently offers 4 email solutions. To understand their specifics, navigate through the tabs below:

> [!tabs]
> **Emails/MX Plan**
>>
>> ![MX Plan](images/mxplan01.png){.thumbnail .w-500}
>>
>> 1. OVHcloud's oldest email solution, which includes the essential features of an email service with 5GB of storage space per email account.
>> 2. Included with web hosting plans and can be ordered via the [OVHcloud Control Panel](/links/manager).
>> 3. This solution uses the **OWA** (Outlook Web Access) webmail interface.
>>
> **Exchange**
>>
>> ![Exchange](images/exchange01.png){.thumbnail .w-500}
>>
>> 1. A comprehensive email solution with collaborative features, with 50GB or 300GB of storage space.
>> 2. Included with web hosting plans and can be ordered via the [OVHcloud Control Panel](/links/manager).
>> 3. This solution uses the **OWA** (Outlook Web Access) webmail interface.
>>

> [!success]
> Unless specified, the questions listed below concern all OVHcloud email solutions.

/// details | What should I know before I create an email address?

Creating an email address isn't complicated, but there are rules that must be followed to set the **name of your email address** and its **password**.

The **name of your email address** must respect the following rules:

- Minimum 2 characters.
- Maximum 32 characters.
- No accented characters.
- No special characters except the following characters: `.`, `,`, `-` and `_`.

The **password** must respect the following rules:

- Minimum 9 characters.
- Maximum 30 characters.
- No accented characters.

> [!warning]
> For security reasons, do not use the same password twice. Choose one that has no relation to your personal information (for example, avoid mentioning your surname, first name and date of birth). Change it regularly.

///

/// details | What do I do if I no longer receive my emails?

Below, you will find the main reasons for not receiving your emails.

1. **Email software**: A failure to receive emails is often linked to the configuration of your email address on your email software (Outlook, macOS Mail, Thunderbird, etc.). To check this, log in to the [webmail](/links/web/email). If you notice emails in your inbox on webmail that are not present on your email client, the phenomenon is due to your software configuration. For more information about this, please visit our [Unable to send or receive emails page](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **DNS configuration**: Your email solution is attached to a domain name. In its DNS zone, MX records designate the servers that receive emails. If you have recently modified your DNS servers or DNS zone, these MX records may have been "cut". This could explain why emails are not being received properly. For more information on this, please refer to our [Unable to send or receive emails page](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **Email quota exceeded**: If your email account storage quota is reached, it will no longer be possible to receive emails, and your sender will receive an error message stating that your email account is full. Manage email account storage space For more information, please refer to our page [Manage email account storage space ](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota).
1. **Inbox rules**: It is possible that an inbox rule could prevent an email from being delivered to your inbox or redirect it to the SPAM folder. View your rules from your email software (Outlook, MacOS Mail, Thunderbird, etc.) or from [webmail](/links/web/email).
1. **Incident or maintenance**: Visit our [Web Cloud status page](https://web-cloud.status-ovhcloud.com/) to check if an operation is not in progress on your email service.

> [!primary]
> **Tips and Tricks**: If you cannot log in to your webmail, your password may be incorrect. Please check it and, if necessary, modify it via the [OVHcloud Control Panel](/links/manager) , and renew your connection.

///

/// details | What do I do if I can't send my emails?

1. **Email software**: A sending error may be related to the configuration of your email address on your email software (Outlook, MacOS Mail, Thunderbird, etc.). To check this, log in to the [webmail](/links/web/email). If you notice that you are able to send emails via webmail, the problem arises from your software configuration. For more information about this, please visit our [Unable to send or receive emails](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced) page.
1. **Error code**: When you send a message and the receiving server rejects it, the receiving server usually sends you an error message with an error code. Analyze the error message, it can tell you the reason (maximum quota of the email account reached, email address of the recipient does not exist, etc.). For more information about this, please visit our [Unable to send or receive emails page](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **Email size**: Whether it is your email provider or the recipient server, there is a size limit for an email. We recommend mainly sending images or pdf files with a small size. For large files, it is best to use file transfer tools such as [plik.ovh](https://plik.ovh/).

///


/// details | Why set up SPF and DKIM records?

**SPF (Sender Policy Framework)**

It allows servers that receive emails to ensure that they have been sent from a trusted server. This protocol has become essential to legitimize email exchanges. Without an SPF record on the domain name of your email service, your emails may be considered unwanted by your recipients.

To find out how to configure an SPF record on your email service, please read our guide on [Enhancing email security via an SPF record](/pages/web_cloud/domains/dns_zone_spf).

**DKIM (DomainKeys Identified Mail)**

It allows you to sign emails to prevent identity theft. This signature operates on the principle of hashing combined with asymmetric cryptography. This protocol is complementary to the SPF. The SPF intervenes on the legitimacy of the domain name while the DKIM ensures that each email is signed by the right email service when it is sent. It also becomes a benchmark in terms of email security. Some email services may also consider an email to be spam if it is not protected by a DKIM signature.

To find out how to configure a DKIM record on your email service, please read our guide on [Enhancing email security via a DKIM record](/pages/web_cloud/domains/dns_zone_dkim).

///


/// details | How do I configure my email address and use it with webmail?

You can configure your email account on an email client such as Outlook, Thunderbird, Mac Mail, etc.
To do this, we provide guides to set up your email address. You can find them on [this page](/products/web-cloud-email-collaborative-solutions-mx-plan).

> [!tabs]
> **Emails**
>>
>> **Windows PC**
>> - [Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).
>> - [Thunderbird for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).
>> - [Mail for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
>> **Apple Mac**
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).
>> - [Thunderbird for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
>> **iPhone or iPad**
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
>> **Android Smartphone or tablet**
>> - [Gmail for Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>
> **Microsoft Exchange**
>>
>> **Windows PC**
>> - [Outlook for Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)
>> - [Thunderbird for Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird).
>> - [Mail for Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10).
>>
>> **Apple Mac**
>> - [Outlook for macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac)
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos).
>> - [Thunderbird for macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird_mac).
>>
>> **iPhone or iPad**
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios).
>>
>> **Android Smartphone or tablet**
>> - [Gmail for Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).
>>

With [webmail](/links/web/email), you can access your email at any time, from any connected device. Once you have created your email account, log in here to access it.

**Tips and Tricks**: If you configure your email account on an email client, we recommend that you configure it with IMAP protocol. This way, the emails will remain stored on the server, and you can view them from anywhere in the [webmail](/links/web/email). To do this, you can refer to [our documentation](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

///

/// details | How do I manage my email services?

All of your email addresses are managed via the [OVHcloud Control Panel](/links/manager). To do this, log in and access the product concerned. You can change the passwords for your email addresses, check how much space they have left, create new email addresses, or delete existing ones.

**Tips and Tricks**: With MX Plan email solutions, you can delegate management of an email account to another OVHcloud account, while keeping control of it yourself. Simply configure a delegation in your [OVHcloud Control Panel](/links/manager). You can use [our documentation](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation).

///

/// details | What should I know before I create an email address?

Creating an email address isn't complicated, but there are rules that must be followed to set the **name of your email address** and **passwords**.

The **name of your email address** must respect the following rules:

- Minimum 2 characters
- Maximum 32 characters
- No accented characters
- No special characters except the following characters: `.`, `,`, `-` and `_`

The **password** must respect the following rules:

- Minimum 9 characters
- Maximum 30 characters
- No accented characters

> [!warning]
>
> For security reasons, we recommend not using the same password twice, choosing one that does not contain any personal information (e.g. your surname, first name and date of birth), and renewing it regularly.

///

/// details | How do I recover my forgotten password?

For security and confidentiality reasons, it is not possible to **retrieve** a password. As described in our guide “[Changing an email password](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)”, you will need to reset your password if you have forgotten it.

> [!primary]
>
> If you want to store a password, we recommend using a password manager, such as **Keepass**.

///

/// details | How do I limit the amount of spam I receive?

To limit the receipt of SPAM, you can set up filters on your emails (called "Filters" on the MX Plan solution). The purpose of these emails is to delete or move them into the “spam” folder as soon as they are received.
To do this, log in to your [OVHcloud Control Panel](/links/manager), then in the `MX Plan` section, select the domain concerned , in the `Email`{.action} tab, then in the `Filter` column, click on the action button.

If the `Filter` column is not present in your Control Panel, you will need to create filters via mailbox rules in the [webmail](/links/web/email). You can refer to the following guide for more details: “[Inbox rules from the OWA interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)”.

**Tips and Tricks**: If you set a filter on receiving SPAM, legitimate emails may be considered SPAM. If this happens to you, please open a support request in your [OVHcloud Control Panel](/links/manager) and let us know. This way, we can ensure that your emails are not marked as SPAM in the future.

///


/// details | My email account is full, I don't have any more space. What can I do?

If you have signed up to [one of our OVHcloud email solutions](/links/web/emails) and one of your email accounts is full, please read our guide on [Managing email account storage space](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota). This guide will help you decide whether you can optimize your existing storage space, or whether you need to change email solutions to increase storage capacity.

///

/// details | I want to change my email solution for my address, how can I do this while keeping its content?

Want to change your [email solution](/links/web/emails) to get more space and features, but want to keep the content of your existing email address? To do this, please follow the migration guide that corresponds to your needs:

- [Migrate an MX Plan email address to an Exchange account](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrate your email addresses from one OVHcloud email platform to another](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrate your email address manually](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration).
- [Migrate email accounts via the OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).
- [Migrate a Gmail account to an OVHcloud email account via the OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail).

///

/// details | Does the Office 365 Pro Plus offer include a Skype license?

Office 365 Pro Plus does not contain a Skype license. Only Skype for Business software is included.

///

/// details | How do I transfer my emails, website, database and domain name to OVHcloud servers without any service interruptions?

Refer to our guide on [Migrating your website and associated services to OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh), for the full set of steps to follow.

///

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).