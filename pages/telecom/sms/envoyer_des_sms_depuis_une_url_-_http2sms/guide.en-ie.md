---
title: Sending SMS messages via a URL - http2sms
slug: send_sms_messages_via_url_-_http2sms
excerpt: Find out how to send SMS messages via a HTTP address
section: Sending SMS messages
---

**Last updated 20th May 2020** 

## Objective

There are different methods for sending SMS messages. One of them involves using the Wget tool, directly via your web browser’s URL bar.

**Find out how to send SMS messages with the Wget tool.**

## Requirements
- An SMS user created via the OVHcloud Control Panel, or directly via the APIs. To do this, please refer to the following guide: [Everything you need to know about SMS users](../everything_you_need_to_know_about_sms_users/)
- An OVHcloud SMS account with SMS credits.


## Instructions

SMS messages are sent via a HTTPS request with mandatory fields (and optional fields, if applicable) to the following address: <https://www.ovh.co.uk/cgi-bin/sms/http2sms.cgi?>.

![http2sms](images/img_4011.jpg){.thumbnail}

### Step 1: Include the mandatory fields.

Your URL must be as follows: 

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX&message=XXXXXXX
```


The following settings must be separated by ampersands (&). Replace the Xs with the information below:

|Settings|Replace with|
|---|---|
|account|SMS account to use (e.g.: sms-xx11111-1)|
|login|SMS user to use on the associated account|
|password|User password|
|from|One of the senders declared on your SMS account.|
|to|The recipient phone number must be in **international format** (+44xxxxxxxxx for a UK number). You can add multiple recipients by separating them with a comma (,).|
|message|Your message. Add %0d to add a line break in the SMS you send.|

By default, the message is sent immediately.

### Step 2: Add optional fields.


You can add extra fields in the subject, such as:

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX1,XXXXXXX2&message=XXXXXXX&deferred=XXXXXXX&class=X&SMSencoding=X&noStop=X
```

Replace the Xs with the information below:

|Settings|Replace with|
|---|---|
|deferred|To enter a deferred send date, add it in the format hhmmddMMYYYY (e.g.: 183019072020 if you want to send it on 19/07/2020, at 18:30).|
|class|The SMS class type, in the format where N = 1 number (see the first information note below).|
|noStop|To remove the "STOP on XXXXX" clause from the end of a message, for non-advertising SMS messages.|
|tag|A maximum chain of 20 characters you can use to mark sent messages.|
|contentType|You can choose the response type. It can be: text/xml, application/xml, text/json, application/json, text/plain, text/html (text/plain by default)|
|SMSencoding|The SMS encoding type, in the format where N = 1 number (see the second information note below).|

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
> *class 3:* The message is transferred on to an external device connected to the mobile (PDA, laptop, etc.).
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
>For further information on authorised characters in 7bit encoding, please refer to the [appendix](./#appendix_2) at the bottom of this guide.
>


### Step 3: Analyse sent messages.

Once you have sent an SMS message, an API return code will show you whether the message has been sent successfully, or failed.
A code higher than 100 and lower than 200 indicates that the message has been sent.

Here is a list of API return codes.

- *100 or 101:* request processed.
- *201:* a setting is missing (e.g. Missing login, Missing password).
- *202:* a setting is incorrect (e.g. Invalid tag: is too long, Invalid deferred time).
- *401:* no authorised IP. To managed authorised IPs, you can apply restrictions via the OVHcloud Control Panel.


When a failure occurs, the cause is included:

- in the message field for .json or .xml
- on the second line for .html and text/plain

#### XML

- If sent successfully:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>100</status><creditLeft>1987</creditLeft><smsIds><smsId>10867690</smsId></smsIds></response>
```

- If sending failed:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>201</status><message>Missing message. For more information: https://docs.ovh.com/gb/en/sms/send_sms_messages_via_url_-_http2sms</message></response>
```


#### json

- If sent successfully:

```json
{"status":100,"creditLeft":"1987","SmsIds":["10867690"]}
```

- If sending failed:

```json
{"status":201,"message":"Missing message. For more information: https://docs.ovh.com/gb/en/sms/send_sms_messages_via_url_-_http2sms"}
```


#### HTML

- If sent successfully:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
OK<br>
1987<br>
10867690<br>
</BODY>
</HTML>
```

- If sending failed:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
KO<br>Missing message. For more information: https://docs.ovh.com/gb/en/sms/send_sms_messages_via_url_-_http2sms<br>
</BODY>
</HTML>
```

#### Text/plain

- If sent successfully:

```
OK
1987
10867690
```

- If sending failed:

```
KB
Missing message. For more information: https://docs.ovh.com/gb/en/sms/send_sms_messages_via_url_-_http2sms
```

## Appendix

The two tables below list the authorised characters for 7bit encoding. The characters in the “Extensions” table count as double. 

The maximum size of an SMS message is 160 characters in 7bit encoding (GSM 03.38 standard).

If you use characters that do not appear in these tables, the encoding will switch to Unicode, reducing the maximum size of an SMS message to 70 characters.

![List of authorised SMS characters](images/smsauthorizedcharacters.png){.thumbnail}

## Go further

Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
