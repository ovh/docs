---
title: 'What to do if your account is blocked for spam'
excerpt: 'Find out what to do if your email account has been blocked for spam'
updated: 2024-05-23
---

## Objective

When your email account is blocked for SPAM, it means that suspicious sending activity has been detected on it. In this situation, you can no longer send emails from this account. It is important to understand why a suspicious activity was detected and how to take action to prevent it from happening again.

**This guide explains the procedure to follow if an email account has been blocked for spam.**

## Requirements

- An [OVHcloud email solution](/links/web/emails).
- Access to the [OVHcloud Control Panel](/links/manager).

## Instructions <a name="instructions"></a>

If the block is occuring on an MX Plan email account, identify the version you are using in order to follow the correct unblock process. Use the table below to check how to distinguish between the two versions.

|MX Plan legacy version|MX Plan new version|
|------|------|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Locate the solution in the `Subscription` box on the right.|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Locate the `Server model` in the `Summary` box on the left.|

### Step 1: Investigating why your email account is blocked for SPAM <a name="step1"></a>

When suspicious activity is detected at the email sending level, the account concerned is automatically blocked. In this situation, you can no longer send emails from this email account.

> [!warning]
>
> “Suspicious activity” can mean:
>
> - The anti-spam server, which scans emails when they are sent, has found one or more elements of the email that are suspicious and indicate SPAM.
> - The sending frequency and the number of recipients are unusually high, which can be considered SPAM mass mailing. To send bulk emails, you will need to use a mailing list instead of single email addresses.
>
> The precise reasons for a blocked account cannot be disclosed in order to prevent attempts to bypass the SPAM detection system. To test the content of an email, you can use a tool external to OVHcloud such as [Mailtester](https://www.mail-tester.com/).
>

First of all, make sure that any user of the blocked email account has caused the block directly, following an uncommon use of the email account (for example a mass email sending operation). If this is the case, you must resolve the root cause before unblocking the account.

If the suspicious activity detected by the antispam system was not initiated by a legitimate user of the email account, take the necessary measures and detailed below:

- Perform an antivirus check for each of the emails sent from the blocked account, and apply a patch if these emails contain malware.

- Check all software applications using the credentials for the blocked account (e.g. fax, business software, email software).

### Step 2: Checking the status of the email account <a name="step2"></a>

Log in to your [OVHcloud Control Panel](/links/manager) and select `Web Cloud`{.action} in the top navigation bar. Click `Emails`{.action}, then choose the domain name concerned.

Go to the `Email accounts`{.action} section of your platform. If the "Status" column to the right of the email account concerned displays "Spam", click on it, then `Reply to the ticket`{.action}. Email accounts are not unblocked automatically. You will need to contact the support team by answering the 3 questions in the support ticket.<br>

Go to [step 3](#step3) of the guide.

![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}

### Step 3: Accessing the support ticket <a name="step3"></a>

Following step 2, you will be redirected to the Control Panel section “My support tickets”. Click `...`{.action} to the right of the ticket with the subject “Account locked for spam”, then click `See more information`{.action}.

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Here you will see the email sent to you, which has subsequently generated the support ticket.

The support ticket will look like this:

>
> Dear Customer,
>
> Our system has detected that the address **address@example.com** hosted on our systems under the **service name** service is a source of spam.
> The sending of emails has been temporarily disabled.
>
> We have currently detected **X** suspicious message(s).
>
> To help us re-enable sending for the address: **address@example.com**,
> please reply to this email by answering the following questions:
>
> - Are you the sender of the email in question (see the header below)?
>
> - Do you have a redirection rule to another email address?
>
> - Have you responded to spam?
>
> These answers will help us re-enable your account quickly.
> <br>
> <br>
>

After this message, you will find a sample of email headers.

These headers will help determine the path and origin of the emails sent.

## Go further <a name="go-further"></a>

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](https://www.ovhcloud.com/en-asia/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.