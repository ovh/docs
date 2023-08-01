---
title: 'What to do if your account is blocked for spam'
excerpt: 'Find out what to do if your email address has been blocked for spam'
updated: 2023-06-07
---

## Objective

When your email address is blocked for SPAM, it means that suspicious activity has been detected in sending emails from this address. In this situation, you can no longer send email from this email address. You should then understand why a suspicious activity was detected and take action to prevent it from happening again.

**This guide explains the procedure to follow if an email account has been blocked for spam.**

## Requirements

- an [OVHcloud email solution](https://www.ovhcloud.com/en-gb/emails/)
- access to the `Web Cloud`{.action} section of the [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB)

## Instructions <a name="instructions"></a>

Before you proceed, and if the block is for an MXplan email address, identify the version you have to follow the correct unblock process. Use the table below to check how to distinguish between the two versions.

|MX Plan legacy version|MX Plan new version|
|------|------|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Locate the solution in the `Subscription` box|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Locate the `Server model` in the `Summary` box|

### Step 1: why is your email address blocked for SPAM? <a name="step1"></a>

When suspicious activity is detected at the e-mail sending level, the address concerned is automatically blocked. In this situation, you can no longer send emails from this email address.

First of all, make sure that the user(s) of the blocked email address are not the one who blocked the email address directly, following an unusual use of the email address (for example, following mass email sending). If this is the case, you must correct the situation before unblocking the address.

If the suspicious activity detected by the anti-spam was not initiated by the legitimate user(s) of the email address, take the necessary measures and detailed below:

- Perform an anti-virus analysis on each of the emails using the email address blocked for SPAM and apply a patch if the emails are infected.

- Check all the software using the credentials of the email address blocked for SPAM (e.g.: fax, business software, messaging software).

### Step 2: Checking the status of the email address, and access the associated support ticket <a name="step2"></a>

> [!tabs]
> **Exchange**
>>
>> Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select `Web Cloud`{.action} in the top navigation bar. Click `Microsoft`{.action}, then `Exchange`{.action}. Next, select the Exchange service concerned.
>>
>> Go to the `Email accounts`{.action} section of your platform. If the "Status" column for your email address displays "Blocked", click `...`{.action} to the right of the account concerned, then `Unblock`{.action}. Email addresses are not unblocked automatically. You will need to contact the support team on the support ticket, by answering the 3 questions you have.<br>
>>
>> Go to [step 3](#step3) of the guide.
>>
>> ![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **Email Pro**
>>
>> Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select `Web Cloud`{.action} in the top navigation bar. Click `Email Pro`{.action}, then select the Email Pro platform concerned.
>> 
>> Go to the `Email accounts`{.action} section of your platform. If the "Status" column to the right of the email address concerned displays "Spam", click on it, then `Reply to the ticket`{.action}.Email addresses are not unblocked automatically. You will need to contact the support team on the support ticket, by answering the 3 questions you have.<br>
>>
>> Go to [step 3](#step3) of the guide.
>>
>> ![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX plan - New version**
>>
>>Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and select `Web Cloud`{.action} in the top navigation bar. Click `Emails`{.action}, then choose the domain name concerned.
>>
>> Go to the `Email accounts`{.action} section of your platform. If the "Status" column to the right of the email address concerned displays "Spam", click on it, then `Reply to the ticket`{.action}. Email addresses are not unblocked automatically. You will need to contact the support team on the support ticket, by answering the 3 questions you have.<br>
>>
>> Go to [step 3](#step3) of the guide.
>>
>> ![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX Plan - History**
>>
>> If the block is for an email address [MXplan historical version](#instructions), there is no support ticket. Be sure to read [step 1](#step1) of this guide before following the instructions below.
>>
>> Log in to your [OVHcloud Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.co.uk/&ovhSubsidiary=GB) and go to the `Web Cloud`{.action} section. Click `Emails`{.action} and select the domain name concerned.
>>
>> Go to the `Emails`{.action} tab on your platform. If the “Blocked for SPAM” column says “Yes”, click on it and then on `Change password`{.action}. Your email address is now unblocked, you do not need to follow [step 3](#step3).
>>
>> ![spam](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > In rare cases, the “Blocked for SPAM” column can indicate “No” despite the fact that the email address is blocked. If you have taken the necessary measures to secure your email address, the solution remains the same as above.

### Step 3: Accessing the support ticket <a name="step3"></a>

Following step 1, you will then be redirected to the Control Panel section “My support tickets”. Click `...`{.action} to the right of the ticket with the subject “Account locked for spam”, then click `See more information`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

Here you will see the email that was sent to you, which has subsequently generated the support ticket.

The support ticket will look like this:

> 
> Dear Customer,
>
> Our system has detected that the address **youraddress@domain.com** hosted on our systems under the **servicename** service is a source of spam.
> The sending of emails has been temporarily disabled.
>
> We have currently detected **X** suspicious message(s).
>
> To help us re-enable sending for the address: **address@domain.com**,
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

After this message, you will be sent a sample of email headers.

These headers will help determine the movement and origin of the emails sent.

## Go further

For specialized services (SEO, development, etc.), contact [OVHcloud partners](https://partner.ovhcloud.com/en-gb/directory/).

If you would like assistance with using and configuring your OVHcloud solutions, we recommend referring to our range of [support solutions](https://www.ovhcloud.com/en-gb/support-levels/).

Join our community of users on <https://community.ovh.com/en/>.