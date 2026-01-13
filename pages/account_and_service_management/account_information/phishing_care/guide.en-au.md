---
title: 'Beware of scams – recognising fraudulent email and phishing'
excerpt: 'How to recognise a phishing email, and what should you do if you click on a fraudulent link?'
updated: 2026-01-06
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
</style>

## Objective

Phishing is a fraudulent technique designed to deceive internet users into providing personal data (access accounts, passwords, etc.) and/or banking details by pretending to be a trusted third party or site.<br>
In practice, this is often done by sending an email asking you to click on a link. This link will redirect you to a form that fraudulently uses the colors of a brand and asks you to enter your personal details.

**This guide will show you how to recognise a phishing email, and what to do if you click on a fraudulent link.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/RED6EuCLFjk?si=9ppewOVm_bXymThM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Instructions

### I have received an e-mail or SMS message in the name of OVHcloud, how do I know if it is legitimate?

#### Identifying a phishing e-mail

First, check whether the e-mail you received is also visible in your [OVHcloud Control Panel](/links/manager). Log in, click on your name in the top right corner and then on `Service emails`{.action} (or `My messages`{.action}). You will find copies of all official e-mails sent by OVHcloud there.

In addition, here are some elements to help you visually distinguish a genuine OVHcloud e-mail from a phishing attempt.

Click on the image to enlarge it. Find the details and explanations in the table below.

![Difference between an OVHcloud e-mail and a phishing e-mail](images/EN-legit-and-phishing-email.png){.thumbnail}

> [!primary]
> 
> The numbers in the table correspond to those visible in the image above.

|Number - Description|Legitimate OVHcloud e-mail|Fraudulent phishing e-mail|
|---|---|---|
|1 - Sender|Check that the e-mail is sent from an address ending with a domain name (or sub-domain, for example `events.ovhcloud.com`) belonging to OVHcloud (see the list below)|The e-mail sender is very likely to be an address that does not come from OVHcloud.|
|2 - Subject|Check that your OVHcloud account ID (NIC Handle) **(which usually starts with the initials of the person who created the OVHcloud account)** and/or your account e-mail address appear in the subject line of the message.|Very often, the e-mail will be marked as \[SPAM] and **your NIC Handle will not appear or will be incorrect**.|
|3 - Link|**Without clicking on it, hover your mouse over the link or button** and you will directly see its destination (just below or at the bottom of your browser). In our example, the link correctly points to an address at https://www.ovh.com/. When you click a link, always check the address in the browser. OVHcloud uses a set of recognisable domain names, usually ovhcloud.com or ovh.com (see list below).|In a phishing e-mail, the link will not be from an official OVHcloud page. **Do not click it.**|
|4 - E-mail header and footer|OVHcloud sends e-mails in both TXT and HTML formats. The header will contain the OVHcloud logo, and the footer will contain legal information related to OVHcloud|The header or footer may contain links that have nothing to do with OVHcloud. **Do not click on these links.**|

/// details | **List of legitimate OVHcloud domain names** (click to display)

- ovhcloud.com
- ovh.com
- ovh.fr
- services.ovhcloud.com
- news.ovhcloud.com
- clientmanager.fr
- kimsufi.com
- soyoustart.com
- ovh.ca
- ovh.com.au
- ovh.co.uk
- ovh.ie
- ovh.de
- ovh.es
- ovh.it
- ovh.lt
- ovh-hosting.fi
- ovh.net
- ovh.nl
- ovh.pl
- ovh.pt
- ovh.sn
- ovh.us
- robot.ovh.net

Emails may also be sent from genuine sub-domains such as:

- events.ovhcloud.com
- news.soyoustart.com
- services.kimsufi.com

///

#### Identifying a phishing SMS

OVHcloud will **never** send you a link via SMS. The SMS messages we send are usually related to [two-factor authentication in your OVHcloud Control Panel](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa).

You will find below 2 examples of SMS messages, the first one is legitimate and corresponds to two-factor authentication. The second SMS is fraudulent.

![Fraudulent SMS](images/sms-phishing.png){.thumbnail}

#### How to report a phishing e-mail?

After performing the checks outlined above, if you are certain that you have received a phishing e-mail impersonating OVHcloud, you can send us as much information as possible (at a minimum, the content of the e-mail) to the following e-mail address: **<fraude@ovh.com>**.

> [!primary]
> 
> Please note that the information you provide may be shared with third parties to help us combat these threats.
> 

### I have entered my personal information: what should I do?

Click on the headings below to view the instructions.

/// details | **If you have entered your credit card number on a fraudulent website**

The only thing you can do is contact your bank as soon as possible, to have your card blocked. Tell them the date and (if possible) the time at which you entered your credit card number.

**Only your bank can cancel fraudulent transactions that may have been made without your knowledge.**

///

/// details | **If you have entered your OVHcloud password on a fraudulent website**

Log in to your [OVHcloud Control Panel](/links/manager) and change your password.

In our guide [Changing your account password](/pages/account_and_service_management/account_information/manage-ovh-password), you will find instructions for changing your password via the OVHcloud Control Panel, as well as our recommendations for generating a strong password, and saving it in a password manager.

We strongly advise you to enable [two-factor authentication](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) to permanently secure your account.

> [!primary]
>
> To ensure that your data is secure, your password must meet the criteria listed below:
>
> - It must contain at least 12 characters.
> - It must contain at least 1 upper-case letter, 1 lower-case letter and 1 number.
> - It must contain special characters (e.g. `%`, `#`, `:`, `$`, `*`).
> - It must not contain a dictionary word.
> - It must not contain any personal information (e.g. your first name, surname or date of birth).
> - It must not be used as a password by any other user accounts.
> - It must be stored in a password manager.
> - It must be changed every three months.
> - It must not be identical to any previously used passwords.
>
///

## Go further

[Setting and managing an account password](/pages/account_and_service_management/account_information/manage-ovh-password)

[Secure your OVHcloud account with two-factor authentication](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Secure your OVHcloud account and manage your personal information](/pages/account_and_service_management/account_information/all_about_username)

Join our [community of users](/links/community).
