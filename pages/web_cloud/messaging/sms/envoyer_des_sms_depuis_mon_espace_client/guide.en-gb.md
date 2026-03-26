---
title: Sending SMS messages via the OVHcloud Control Panel
excerpt: Find out how to send your first SMS messages step by step, configure senders and manage recipients from the OVHcloud Control Panel
updated: 2026-01-07
---

## Objective

You can send SMS messages directly via the OVHcloud Control Panel. This guide gives step-by-step instructions on how to send your first SMS messages.

## Requirements

- an OVHcloud SMS account with SMS credits

<!-- CP-NAV-START:telecom-sms -->
---

### OVHcloud Control Panel Access

- **Direct link:** [SMS](/links/control-panel/telecom-sms)
- **Navigation path:** `Telecom`{.action} > `SMS`{.action} > Select your SMS account

---
<!-- CP-NAV-END:telecom-sms -->

![SMS Telecom Control Panel](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Instructions

<!-- CP-STEPS-START:send-sms-overview -->

Log in to the [OVHcloud Control Panel](/links/manager), then click `Telecom`{.action} in the left-hand sidebar. Click `SMS`{.action} in the navigation tabs, then select your SMS account from the list. Click the `SMS management`{.action} tab, then click the `Send an SMS`{.action} sub-tab.

The "Send an SMS" page presents a unified form grouping all sending options: sender selection, recipient input, message composition, and advanced options.

![send sms control panel](images/sms-send-control-panel01E.png){.thumbnail}

<!-- CP-STEPS-END:send-sms-overview -->

### Step 1: Configure the sender and recipient.

<!-- CP-STEPS-START:configure-sender-recipient -->

> [!primary]
> For more information on creating and using a sender, refer to our guide "[Everything you need to know about SMS senders](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

Once you have landed on the `Send an SMS`{.action} page, you will find the **Configure sender and recipient** section.

![send sms control panel](images/sms-send-control-panel02E.png){.thumbnail}

In the `Sender`{.action} dropdown, choose from three groups:

- **Senders that allow replies**: Reply-enabled number (France only)
- **Alphanumeric senders**: a custom alphanumeric sender name
- **Other senders**: numeric senders

Next, enter the recipient phone number in international format (+44xxxxxxxxxx).

You can also send SMS messages to multiple recipients. There are two methods for doing this:

- Via a list of recipients in .csv format, using the `Recipient list`{.action} button.
For further information on this, you can refer to our [guide on SMS recipient lists](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms).

- By selecting an address book using the `Address books`{.action} button. You can do this directly via the OVHcloud Control Panel, or import one as a .csv or .txt file.
Feel free to refer to our [guide on managing SMS address books](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms) for further information.

<!-- CP-STEPS-END:configure-sender-recipient -->

### Step 2: Compose your SMS message.

<!-- CP-STEPS-START:compose-sms-message -->

> [!primary]
>
> For legal reasons, commercial SMS messages will only be sent between **8 AM and 8 PM, Monday to Saturday**.

Once you have selected a sender and entered your recipients, scroll down to the **Compose a message** section.

![send sms control panel](images/sms-send-control-panel03E.png){.thumbnail}

Type your message in the `Message`{.action} field. You will see a counter showing the `Characters remaining`{.action} and the `Equivalent to`{.action} number of SMS messages.

> [!primary]
>
> We recommend not exceeding 8 SMS per message. Beyond this limit, operators can no longer guarantee message delivery.

The two tables below list the characters that are authorised in 7bit encoding. The characters in the "**Extensions**" table count as double.

The maximum size of an SMS message is 160 characters in 7bit encoding (GSM 03.38 standard).

If you use characters that do not appear in these tables, the encoding will switch to Unicode, reducing the maximum size of an SMS message to 70 characters.

![List of authorised SMS characters](images/smsauthorizedcharacters.png){.thumbnail}

<!-- CP-STEPS-END:compose-sms-message -->

#### Advanced options

<!-- CP-STEPS-START:advanced-options -->

Click the `Advanced options`{.action} toggle button to expand the section.

![send sms control panel](images/sms-send-control-panel-advanced.png){.thumbnail}

In this section, you can choose when to send your message:

- **Send immediately**: the SMS is sent as soon as you click the send button.
- **Deferred sending**: select this option to reveal a date picker and a time picker, allowing you to schedule the SMS for a specific date and time.

> [!primary]
>
> The message format (Standard/Flash/Sim) is no longer configurable. Encoding is handled automatically based on the characters used in your message.

<!-- CP-STEPS-END:advanced-options -->

## Go further

Join our [community of users](/links/community).
