---
title: "OVHcloud SMS FAQ"
excerpt: "Find the answers to the most frequently asked questions about the OVHcloud SMS service"
updated: 2026-03-27
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

Find here the most frequently asked questions about the OVHcloud SMS service.

## FAQ

### Account and credits

/// details | How do I create an OVHcloud SMS account?

To create an OVHcloud SMS account, go to the [dedicated OVHcloud SMS offers page](/links/telecom/sms) and choose the credit pack that suits your needs. The order will automatically create an SMS account accessible from your [OVHcloud Control Panel](/links/manager), in the [SMS section](/links/control-panel/telecom-sms). Each SMS account is identified by a unique name (e.g. `sms-xx12345-1`). You can have multiple SMS accounts on the same OVHcloud customer ID, allowing you to separate uses (transactional, marketing, internal notifications) and budgets.

///

/// details | How does the SMS credit system work?

The OVHcloud SMS service works on a prepaid credit system. One credit corresponds to a standard 160-character SMS (GSM 7-bit encoding) to a French number. The credit cost varies depending on:

- **Destination:** an SMS to metropolitan France uses 1 credit. International destinations use more credits (see the [OVHcloud pricing grid](/links/telecom/sms-prices)).
- **Message length:** an SMS exceeding 160 characters is automatically split into several concatenated SMS messages. A 300-character message uses 2 credits.
- **Encoding:** if your message contains special characters or accents not supported by GSM 7-bit, Unicode encoding (UCS-2) is used, limiting each SMS to 70 characters.

The credit balance can be checked in real time from the OVHcloud Control Panel or via the API.

For more details, see the guide "[Managing SMS credits and enabling automatic top-up](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | How do I enable automatic SMS credit top-up?

Automatic top-up allows your SMS account to be topped up automatically when the balance falls below a defined threshold. [Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then go to `Options`{.action} > `Automatic top-up`{.action}. Set the trigger threshold and the top-up amount. A valid payment method must be registered on your account. This option is essential for transactional SMS sending, where a credit shortage would block your critical notifications.

For more details, see the guide "[Managing SMS credits and enabling automatic top-up](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | How do I view the history of my sent and received SMS?

[Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then the `Message and campaign`{.action} > `SMS management`{.action} > `Sending log`{.action} or `SMS received`{.action} tab. You can filter the history by date, sender, recipient or message. The history is kept for 6 months. It can also be exported in CSV format for analysis.

For more details, see the guide "[Managing SMS history](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms)".

///

/// details | How do I set up credit threshold alerts?

For **API users**, [go to the SMS section](/links/control-panel/telecom-sms), select your account, then `API users`{.action}. Click `...`{.action} > `Limit`{.action} for the relevant user and configure:

- **Alert threshold:** the remaining number of credits below which the notification is sent.
- **Notification type:** email, SMS, or both.

For the **global account**, automatic top-up offers an alternative: it automatically tops up the account when the balance falls below a threshold. Both mechanisms are complementary.

For more details, see the guide "[Everything you need to know about SMS users](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

### Sending SMS

/// details | How do I send an SMS from the OVHcloud Control Panel?

[Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then click `Send an SMS`{.action}. Fill in:

- **Sender:** short number (allowing replies, France only), custom alphanumeric sender, or virtual mobile number.
- **Recipient(s):** enter one or more numbers in international format (e.g. `+33612345678`), or select an address book/recipient list.
- **Message:** write your text (a counter shows the number of characters and SMS messages consumed).

You can schedule the sending for a later date/time. A preview of the credit cost is displayed before sending.

For more details, see the guide "[Sending SMS from the OVHcloud Control Panel](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client)".

///

/// details | How do I send SMS via a URL (http2sms)?

The http2sms function allows you to send an SMS via a simple HTTP GET or POST call, without an SDK or OAuth authentication. It is ideal for simple integrations from a script, automation tool or business application. The call URL is in the form:

`https://www.ovh.com/cgi-bin/sms/http2sms.cgi?account=sms-xx12345-1&login=user&password=password&from=sender&to=+33612345678&message=Your+message`

The required parameters are: `account` (SMS account name), `login` and `password` (API user credentials), `from` (sender), `to` (recipient in international format), `message` (SMS content). To secure access, configure IP restrictions on the API user used. The POST method with HTTPS is recommended.

For more details, see the guide "[Sending SMS from a URL - http2sms](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_url_-_http2sms)".

///

/// details | How do I send SMS from an email address?

OVHcloud allows you to send SMS from your email address, regardless of the sender. Send an email to the address `recipient_number@email2sms.ovh.net` (e.g. `0033612345678@email2sms.ovh.net`). The body of the email becomes the SMS content. The email subject must contain your credentials in the format: `account:login:password`. This method is particularly useful for automated alerts from systems that only support sending emails (monitoring servers, business applications).

For more details, see the guide "[Sending SMS from an email address](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_adresse_email)".

///

/// details | How do I send bulk SMS efficiently via the API?

To send bulk SMS via the OVHcloud API optimally:

- **Use batch sending:** the `POST /sms/{serviceName}/jobs` endpoint accepts an array of recipients. Send your SMS in batches (e.g. 500 recipients per API call) rather than one API call per SMS.
- **Handle errors and retries:** implement retry logic with exponential backoff for temporary errors (HTTP 429 Too Many Requests, HTTP 500).
- **Use DLR callbacks:** configure a callback URL on your API user rather than querying the API for each status.
- **Schedule your sends:** the API supports deferred sending (`differedPeriod`).
- **For very large volumes:** use the SMPP protocol.

Monitor your credit consumption during bulk sends and ensure that automatic top-up is enabled.

///

/// details | How do I create my first SMS campaign?

[Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then click `Send an SMS`{.action}. The steps are:

1. **Choose the sender:** select a short number, an alphanumeric sender, or a VLN.
2. **Define the recipients:** add them manually, import a CSV list, or select an existing address book.
3. **Write the message:** compose your text. You can use personalisation variables if you imported a list with additional columns (first name, surname, etc.).
4. **Schedule the send:** choose an immediate or scheduled send for a specific date/time.
5. **Confirm and send:** check the summary (number of recipients, credit cost) and confirm.

Campaign tracking is available in `Message and campaign`{.action} > `Campaign management`{.action} > `Statistics and history`{.action}.

For more details, see the guide "[My first SMS campaign](/pages/web_cloud/messaging/sms/ma_premiere_campagne_sms)".

///

/// details | How do I manage my SMS recipient lists?

[Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then go to `Contacts`{.action} > `Create a contact list`{.action}. You can:

- **Create a list** by importing a CSV file containing a `number` column with numbers in international format.
- **Clean a list** with deduplication and syntax verification.
- **Delete** an obsolete list.

For more details, see the guide "[SMS recipient lists](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms)".

///

/// details | How do I manage my SMS address books?

SMS address books offer richer contact management (first name, surname, number). [Go to the SMS section](/links/control-panel/telecom-sms), select your SMS account, then go to `Contacts`{.action} > `Address book`{.action}. You can:

- Create a new address book and add contacts manually.
- Import a CSV file with the columns: surname, first name, number (international format).
- Edit or delete contacts individually.
- Use an address book as a recipient list when sending SMS.

The address book is ideal for recurring sends to a stable group of contacts. For one-off sends to variable lists, recipient lists are more suitable.

For more details, see the guide "[Managing my SMS address books](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms)".

///

/// details | What is the difference between a standard SMS (160 characters) and a long SMS?

A standard SMS using GSM 7-bit encoding can contain up to **160 characters**. If your message exceeds this limit, it is split into several concatenated SMS messages (long SMS) that are reassembled on the recipient's phone. The limits are:

- **1 SMS:** up to 160 characters.
- **2 SMS:** from 161 to 306 characters (153 usable characters per segment, with the remaining 7 bytes used for the concatenation header).
- **3 SMS:** from 307 to 459 characters.
- And so on, up to a maximum of 6 concatenated SMS messages (918 characters).

If your message uses **Unicode (UCS-2)** encoding (required for emojis, non-Latin alphabets), each SMS is limited to **70 characters** (67 per segment in concatenated mode). Each segment uses 1 SMS credit.

///

/// details | Which special characters cause an SMS to switch to Unicode encoding?

GSM 7-bit (standard) encoding supports a limited character set. The following characters trigger a switch to Unicode (UCS-2) encoding, reducing the SMS capacity from 160 to 70 characters:

- All **emojis** (without exception).
- **Non-GSM accented characters:** some accents are supported (é, è, ê, ù, à, etc.) but others are not (ő, ű, ā, etc.).
- **Non-Latin alphabet** characters: Cyrillic, Arabic, Chinese, Japanese, Korean, etc.
- Certain **typographic symbols:** typographic quotation marks « », em dash —, etc.

The OVHcloud Control Panel interface automatically displays the remaining character count and the number of SMS messages that will be used.

///

/// details | What is the delivery time for an SMS sent via OVHcloud?

Under normal conditions, an SMS is delivered within a few seconds (generally **less than 10 seconds** to French operators). This time may vary depending on:

- **Destination:** international SMS may have a longer delay (up to 30-60 seconds).
- **Network load:** during peak times (New Year, national events), mobile operators may introduce additional delays.
- **Recipient's phone status:** if the phone is switched off or out of coverage, the SMS is stored by the operator and delivered as soon as the phone is reachable again (storage period: 48 to 72 hours depending on the operator).
- **Bulk sends:** campaigns of several thousand SMS messages are sent progressively to comply with operator throughput limits.

Delivery reports (DLR) allow you to confirm the actual delivery to the recipient.

///

/// details | My SMS messages are not being delivered, how do I diagnose the issue?

Check the following:

1. **Check your credit balance:** a zero balance immediately blocks all sends.
2. **Check the sending history:** in `Message and campaign`{.action} > `SMS management`{.action} > `Sending log`{.action}, check the status of each SMS. A PTT code indicates the reason for the failure.
3. **Check the number format:** all numbers must be in international format (`+33...`). A local format (`06...`) will cause a failure.
4. **Check the sender:** an alphanumeric sender pending validation will not allow sending.
5. **Check the blacklist:** if the recipient replied STOP, their number is blacklisted.
6. **Check the API user quota:** if you are sending via the API, check that the quota is not exhausted.
7. **Check the content:** SMS messages containing URLs sent via a short number are blocked.

///

### Senders and replies

/// details | What types of SMS senders can I use?

OVHcloud offers three types of senders:

- **Short number allowing replies:** the default sender, a randomly assigned 5-digit short number. The recipient can reply to the SMS. Note: it is not possible to send an SMS containing a URL via a short number.

> [!primary]
>
> The short number allowing replies is only available for OVHcloud accounts in France, excluding French overseas departments and territories.

- **Alphanumeric sender:** a custom name displayed as the sender (e.g. "MyCompany"). Maximum 11 characters. The recipient cannot reply. Creation requires supporting documentation and is validated within an average of 72 hours.
- **Virtual mobile number (VLN):** a French mobile number in 06/07 format assigned to your SMS account. Allows replies and gives the appearance of a standard mobile number.

For more details, see the guide "[Everything you need to know about SMS senders](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | How do I add a custom alphanumeric sender?

[Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then click on the `Senders`{.action} tab. Click `Actions`{.action} > `Add`{.action} and choose "Add senders manually". Fill in:

- **Desired sender:** maximum 11 alphanumeric characters (letters and digits, no special characters).
- **A description** for your internal use.
- **A justification:** explain the link between your identity and the requested sender.
- **Supporting documentation:** company letterhead, business registration extract, or any document proving your right to use this name.

Validation is carried out by the OVHcloud teams, generally within 72 hours. You can also create a sender from your OVHcloud personal data or your OVHcloud domain names, without additional documentation.

For more details, see the guide "[Everything you need to know about SMS senders](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | Why can I not send an SMS containing a URL with a short number?

To combat spam and phishing, OVHcloud blocks SMS messages containing URLs (http/https links) when the sender is a short number allowing replies. If you need to include a URL in your SMS, use a validated **alphanumeric sender**. As your custom sender has been subject to identity verification, sending SMS messages containing URLs is authorised with this type of sender.

For more details, see the guide "[Everything you need to know about SMS senders](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | What is a virtual mobile number (VLN) and how do I obtain one?

A virtual mobile number (VLN — Virtual Long Number) is a French mobile number in 06 or 07 format, assigned to your OVHcloud SMS account. It offers several advantages:

- The recipient sees a standard mobile number as the sender, inspiring greater confidence.
- The recipient can **reply** to the SMS, and replies can be viewed in the OVHcloud Control Panel or retrieved via the API.
- It can be used for sends containing URLs.

The VLN requires a specific SMS plan that includes a virtual mobile number. It cannot be added to an existing SMS account: a new SMS account must be ordered via the [dedicated virtual mobile number page](/links/telecom/sms-vln). The VLN is assigned for a duration linked to the subscription and is not portable to another operator.

///

/// details | How does the SMS reply service work?

The SMS reply service allows you to send an SMS to which the recipient can reply. It works as follows:

1. You send an SMS using the "Short number allowing replies" as the sender.
2. The recipient receives the SMS with a 5-digit short number as the sender.
3. The recipient can reply to this short number within **48 hours**.
4. The reply can be viewed in your OVHcloud Control Panel (`Message and campaign`{.action} > `SMS management`{.action} > `SMS received`{.action}).
5. Optionally, you can configure an **automatic reply** (predefined text) or a **CGI script** called for each reply received.

This service is only available for OVHcloud accounts in France (excluding overseas departments and territories) and replies are only possible from French mobile operators. Each reply received and each automatic reply sent uses SMS credits.

///

/// details | How do I configure an automatic reply to received SMS?

[Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then go to `Options`{.action} > `Reply options`{.action}. In the "Action on receipt" section, choose "Reply with a predefined text" or "Call a CGI" (URL of a web script that will be called for each reply received, enabling dynamic processing). You can also configure receipt notifications (by email or SMS).

///

/// details | How do I manage unsubscription requests (STOP)?

When a recipient replies "STOP" to one of your SMS messages, their number is automatically added to a blacklist by OVHcloud. Future SMS messages sent to this number from your account will be blocked. You can view and manage this blacklist from your [OVHcloud Control Panel](/links/manager), `Options`{.action} > `Manage blacklisted recipients`{.action} tab. You can:

- View the numbers that have sent a STOP.
- Check whether a specific number is blacklisted before sending.

> [!warning]
>
> Removing a number from the blacklist without the recipient's re-consent is contrary to GDPR and anti-spam rules.

STOP management is mandatory for marketing SMS. For transactional SMS, the STOP mechanism does not apply.

///

### Technical integration

/// details | How do I create and manage API users for SMS?

SMS API users allow you to delegate SMS sending via the API or the http2sms function without exposing your OVHcloud customer credentials. [Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your SMS account, then click `API users`{.action}. Add a new user by defining a username and password. Each user can be assigned:

- A **credit quota** deducted from the account's global balance.
- A **threshold alert** that sends a notification when the user's balance falls below a defined threshold.
- **IP restrictions** (up to 5 IPs) to secure access to the http2sms function.
- A **callback URL** to receive delivery reports (DLR) on a custom endpoint.

For more details, see the guide "[Everything you need to know about SMS users](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | How do I send an SMS via the OVHcloud API in PHP?

The OVHcloud API allows you to send SMS programmatically. In PHP, use the official OVHcloud SDK:

1. **Create API keys** from the [OVHcloud API token creation page](https://auth.eu.ovhcloud.com/api/createToken) by authorising the `/sms/*` endpoints.
2. **Install the SDK** via Composer: `composer require ovh/ovh`.
3. **Send an SMS** with the `POST /sms/{serviceName}/jobs` endpoint, specifying: the message, the recipients (array of numbers in international format), the sender, and the options.

The API returns a job identifier to track the sending status. Libraries are also available in Python, Node.js, Java and C#. The full SMS API documentation is available on the [OVHcloud API console](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms).

For more details, see the guide "[Sending SMS with the OVHcloud API in PHP](/pages/web_cloud/messaging/sms/envoyer_des_sms_avec_lapi_ovh_en_php)".

///

/// details | What API endpoints are available for the OVHcloud SMS service?

The OVHcloud API exposes numerous endpoints to manage your SMS service programmatically. The main ones are:

- `GET /sms`: list your SMS accounts.
- `GET /sms/{serviceName}`: details of an SMS account (remaining credits, options).
- `POST /sms/{serviceName}/jobs`: send an SMS.
- `GET /sms/{serviceName}/jobs`: list sends.
- `GET /sms/{serviceName}/outgoing`: outgoing SMS history.
- `GET /sms/{serviceName}/incoming`: incoming SMS history.
- `GET /sms/{serviceName}/users`: list API users.
- `GET /sms/{serviceName}/senders`: list senders.
- `GET /sms/{serviceName}/phonebooks`: list address books.
- `GET /sms/ptts`: get the description of a PTT code (delivery status).

The full interactive documentation is available on the [OVHcloud API console](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms). Authentication is done via API keys (Application Key, Application Secret, Consumer Key).

///

/// details | How do I receive delivery reports (DLR) for my SMS via a callback?

Delivery reports (DLR) confirm the successful delivery of an SMS. To receive them automatically, configure a callback URL on your API user. [Go to the SMS section](/links/control-panel/telecom-sms), then `API users`{.action}, click `...`{.action} > `Callback`{.action} for the relevant user. Enter the URL of your web endpoint. With each status update, OVHcloud will call this URL with the following parameters:

- `id`: SMS identifier.
- `ptt`: delivery status code (e.g. 1 = in progress, 4 = delivered, 5 = failed).
- `date`: DLR date.
- `description`: DLR descriptive identifier.

Your endpoint must respond with HTTP 200 to confirm successful receipt of the callback.

For more details, see the guide "[Everything you need to know about SMS users](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | How do I use the SMPP protocol with OVHcloud?

SMPP (Short Message Peer-to-Peer) is an industry protocol for sending and receiving SMS in volume. [Go to the SMS section](/links/control-panel/telecom-sms) of your OVHcloud Control Panel, select your account, then go to `Options`{.action} > `SMPP Settings`{.action}. You will obtain the connection parameters: SMPP server address, port, system_id and password. The SMPP protocol offers a persistent connection, higher sending throughput, and native support for DLR in push mode.

For more details, see the guide "[Managing an SMPP SMS account](/pages/web_cloud/messaging/sms/smpp-control-panel)".

///

/// details | What are the technical specifications of the OVHcloud SMPP service?

The OVHcloud SMPP service complies with the SMPP v3.4 specification. The main technical characteristics are:

- **Connection mode:** Transceiver (sending and receiving on the same session) or separate Transmitter/Receiver.
- **Connection port:** communicated upon activation of the SMPP service.
- **Encryption:** TLS supported and recommended.
- **Enquire Link:** recommended interval of 30 seconds to keep the session active.
- **Sending window (window size):** configurable, generally between 1 and 10 depending on the desired throughput.
- **Supported encoding:** GSM 7-bit (data_coding=0) and UCS-2 (data_coding=8).
- **Maximum length:** 160 characters in GSM 7-bit, 70 in UCS-2, with concatenation support via UDH.
- **DLR:** delivery reports transmitted in push mode on the same SMPP session.

The SMPP connection is limited to a defined number of simultaneous sessions as specified in your contract.

For more details, see the guide "[SMPP technical specifications](/pages/web_cloud/messaging/sms/smpp-specification)".

///

/// details | How do I integrate OVHcloud SMS sending into my business application or CRM?

You can integrate OVHcloud SMS in several ways:

- **http2sms (the simplest):** a simple HTTP GET/POST call triggers the sending of an SMS. Ideal for basic scripts, industrial automation tools, or business applications that only support HTTP calls.
- **OVHcloud REST API:** complete integration with secure authentication (OAuth), contact management, history, statistics. SDKs are available in PHP, Python, Node.js, Java, and C#.
- **SMPP:** high-throughput persistent connection for messaging platforms.
- **Email2SMS:** sending by email, useful for systems that only support sending emails (monitoring alerts, ERP).

For common CRMs (Salesforce, HubSpot, etc.), third-party connectors using the OVHcloud API are available on the respective marketplaces.

///

/// details | What are the SMS sending rate limits?

OVHcloud applies sending rate limits to guarantee quality of service:

- **Via the OVHcloud Control Panel:** no explicit limit, but large campaigns are staggered over time by the platform.
- **Via the REST API:** the throughput depends on the volume of your account and your usage history.
- **Via http2sms:** limited to the number of HTTP requests per second accepted by the infrastructure (typically a few dozen per second).
- **Via SMPP:** the throughput is contractually defined and can reach several hundred SMS per second.

If you are planning very large campaigns (more than 100,000 SMS), contact OVHcloud support to plan the send.

///

/// details | Can I send SMS messages containing custom variables?

Yes, OVHcloud supports SMS personalisation with dynamic variables. From the Control Panel, when you import a recipient list in CSV format, you can include additional columns (e.g. `first_name`, `surname`, `appointment_date`). In the body of your SMS, use variables in the form `{first_name}`, `{surname}`, `{appointment_date}`, etc. Each SMS will be automatically personalised with the data from the corresponding contact. Via the API, you can use the `message` parameter with placeholders and provide the personalisation data in the sending payload.

///

### Compliance and deliverability

/// details | What are the legal obligations for sending marketing SMS in France?

Sending marketing SMS in France is governed by the GDPR and the French Postal and Electronic Communications Code. The main obligations are:

- **Prior consent (opt-in):** the recipient must have explicitly consented to receiving commercial SMS.
- **Right to unsubscribe (opt-out):** each marketing SMS must contain a mention allowing the recipient to unsubscribe (e.g. "STOP to 36xxx" or "Reply STOP").
- **Sending hours:** commercial SMS must not be sent between **8pm and 8am** on weekdays, or on **Sundays and public holidays**.
- **Sender identification:** the identity of the advertiser must be recognisable.
- **Consent register:** you must be able to prove the consent of each recipient in the event of a CNIL audit.

Non-compliance with these obligations exposes you to CNIL sanctions and fines of up to 4% of turnover.

///

/// details | What is the difference between a transactional SMS and a marketing SMS?

- **Transactional SMS:** sent in response to a specific action by the recipient (order confirmation, verification code, delivery notification, appointment reminder). Does not require prior marketing consent, is not subject to time restrictions, and does not require a STOP mention.
- **Marketing SMS:** sent for commercial prospecting purposes (promotional offers, sales, newsletters). Requires prior opt-in consent, must include an unsubscription mention (STOP), and is subject to time restrictions.

Do not mix both types of sending on the same SMS account to facilitate compliance management.

///

/// details | How do I optimise the deliverability rate of my SMS?

The deliverability rate is the percentage of SMS messages actually delivered to recipients. To optimise it:

- **Clean your contact databases:** remove invalid, inactive, or landline numbers.
- **Use international formats:** all numbers must be in full international format (e.g. `+33612345678`).
- **Control message length:** short SMS (1 segment of 160 characters max) have a better delivery rate than long concatenated SMS.
- **Avoid spam-like content:** words in capital letters, excessive punctuation, suspicious shortened URLs.
- **Use a validated sender:** verified alphanumeric senders inspire confidence.
- **Respect sending hours:** SMS messages sent during business hours have a better open rate.
- **Monitor your DLR:** analyse the PTT codes of failed SMS to identify recurring causes.

///

/// details | How do I send SMS to the United States?

Sending SMS to the United States (country code +1) is subject to specific rules due to American anti-spam regulations (TCPA / 10DLC). With OVHcloud, sending to the United States requires:

- A validated **alphanumeric sender** or the OVHcloud short number (using a French virtual mobile number is not possible for the US).
- Compliance with content rules: the SMS must not contain unsolicited advertising content.
- A credit cost higher than a national SMS (see the [pricing grid](/links/telecom/sms-prices) for the exact rate).

The deliverability rate may vary depending on American operators and their anti-spam filters.

For more details, see the guide "[Sending SMS to the United States](/pages/web_cloud/messaging/sms/envoi_de_sms_aux_etats-unis)".

///

/// details | What are the geographical restrictions for sending OVHcloud SMS?

The OVHcloud SMS service allows sending to the vast majority of international destinations. However:

- **Blocked destinations:** certain high-fraud-risk destinations may be blocked by default.
- **Variable pricing:** the credit cost varies depending on the destination. Rates can be viewed in your OVHcloud Control Panel or on the [OVHcloud pricing page](/links/telecom/sms-prices).
- **United States:** sending to the US is subject to specific rules (see the dedicated FAQ above).
- **SMS with reply:** the SMS reply feature (short number) is available only to metropolitan France.
- **Virtual mobile number:** the French VLN can only be used as a sender for French destinations.

Before launching an international campaign, check the pricing and availability of the destination in your OVHcloud Control Panel.

///

## Go further

Join our [community of users](/links/community).
