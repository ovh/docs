---
title: 'Sending SMS messages via an email address'
slug: send-sms-message-via-email-address
excerpt: 'Find out how to send SMS messages via an email address'
section: 'Sending SMS messages'
---

**Last updated 04th June 2020**

## Objective

With an OVHcloud SMS account, you can send SMS messages from any sender via your email address.

## Requirements

- an OVHcloud SMS account with SMS credits
- an email address from any provider


## Instructions

Any webmail or email client can be used for this method.

The recipient email address will be: email2sms@ovh.net

The subject will contain the ID for your SMS account, as well as the SMS settings, like the sender and the recipients’ mobile numbers.

The body of text will contain the message you want to send via SMS. There is no limit to the number of characters you can use. However, 1 SMS is limited to 160 characters in 7bit encoding.

If your text message exceeds this limit, the text will be split into several SMS messages:

- 1 SMS -> 160 characters in total (160 per SMS)
- 2 SMS -> 306 characters in total (153 per SMS)
- 3 SMS -> 459 characters in total (153 per SMS)

Please ensure that you have a sufficient number of SMS credits before you send.

> [!primary]
>
> If your text contains 2 line breaks (double /n), or if you write the "--end" parameter, these elements will not be taken into account when the message is sent.
> To send an SMS message with these elements, you will need to do so via the OVHcloud Control Panel or via the APIs.
>

For further information on authorised characters in 7bit encoding, please refer to the [appendix](./#appendix_1) at the bottom of this guide.

> [!warning]
>
> To optimise the inclusion of certain special characters, enable “plain text mode” in your email client, as per the screenshot below in Microsoft Outlook:
> 
>  ![email2sms](images/plaintext01.png){.thumbnail}
>


### Step 1: Fill out the mandatory fields in your email.

Open your webmail or email client, and create a new email. 

Enter the following email address as a recipient: email2sms@ovh.net

The email subject should be written in the following format: 


```
SMSaccount:SMSuser:Password:Sender:Recipient
```



- SMSaccount = the SMS account you want to use (e.g.: sms-xx11111-1).

- SMSuser = the SMS user to use on the associated account.

- Password = the user password.

- Sender = one of the senders declared on your SMS account.

- Recipient = mobile number of the message recipient.

You should see a result similar to the image below. By default, once you send your email, the SMS message is sent immediately.


![email2sms](images/send-sms-through-email1.png){.thumbnail}

> [!primary]
>**For OVHcloud accounts in France only:**
>
> If you would like to use a short number that enables replies, enter senderForResponse=1 as a sender.
>

You can refer to the following guide for any specifics about SMS users: [Everything you need to know about SMS users](../everything_you_need_to_know_about_sms_users/)


### Step 2: Fill out the optional fields.

You can add extra fields in the subject, such as:


```
SMSaccount:SMSuser:Password:Sender:Recipient1,Recipient2:SendDate:SMSclass:SMSencoding:NoStop
```



- Recipient1 = phone number of the message recipient - you can add more recipients, and separate them via a comma (,).

- SendDate = to enter a delayed send date, add it in the format hhmmddMMYYYY (e.g.: 183019072020 if you want to send it on 19/07/2020, at 18:30). 

- SMSclass = the SMS class type, in the format where N = 1 number (see the first information note below).

- SMSencoding = the SMS encoding type, in the format where N = 1 number (see the second information note below).

- NoStop = to remove the "STOP on XXXXX" clause from the end of a message, for non-advertising SMS messages, in the format where N = 1 number (e.g.: NoStop=1 to remove it).

Here is an example of an email with optional fields:

![email2sms](images/send-sms-through-email3.png){.thumbnail}

You can declare different elements that make up the subject in two different ways:

- In the order established above, with the settings separated by ‘:’ or ‘;’ between each element.
- In any order, but by declaring each element, separated by ‘:’ or ‘;’: Account=; Login=; Password=; From=; To=; Deferred=; Class=.

> [!primary]
>
> **Detail of options for classes**
> 
> *class 0:* The message is directly displayed for the user on their mobile phone screen, when they receive it. The message is not saved in the phone’s memory, or on their SIM card. It is erased as soon as the user has confirmed that they have read it.
> 
> *class 1:* The message is saved in the phone’s memory, and if the memory is full, it is saved in the SIM card by default.
> 
> *class 2:* The message is saved on the SIM card.
> 
> *class 3:* The message is transferred onto an external device connected to the mobile (PDA, laptop, etc.).
>

> [!primary]
>
> **Detail of options for SMSencoding**
> 
> *1* for 7bit encoding
> 
> *2* for Unicode encoding
> 
>If you select Unicode encoding, your SMS will have a 70-character limit, rather than the 160-character limit of 7bit encoding.
>

### Step 3: Manage recipients of your SMS message.

There are several ways of managing message recipients.


- You can use the method listed above, entering the senders’ phone numbers in international format in the subject of the email you send.

- Otherwise, you can attach a text file (.txt format) named “contact” to the email, which contains the recipients’ phone numbers in international format (e.g. +44xxxxxxxxxx) — with one phone number per line in the file.


### Step 4: Analyse the send report.

Once you have sent your email, you will receive a send report. The report below will show that the SMS messages have been sent successfully:

![email2sms](images/send-sms-through-email4.png){.thumbnail}

If any sending errors occur, they will be listed in the report, as per the example below:

![email2sms](images/send-sms-through-email5.png){.thumbnail}

## Appendix

The two tables below list the authorised characters for 7bit encoding. The characters in the “Extensions” table count as double. 

The maximum size of an SMS message is 160 characters in 7bit encoding (GSM 03.38 standard).

If you use characters that do not appear in these tables, the encoding will switch to Unicode, reducing the maximum size of an SMS message to 70 characters.

![List of authorised SMS characters](images/smsauthorizedcharacters.png){.thumbnail}

## Go further

Join our community of users on <https://community.ovh.com/en/>.
