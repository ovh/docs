---
title: Manage your SMS history
excerpt: Find out how to view your sent messages log from your OVHcloud account
updated: 2025-12-30
---

## Objective

You can view and download a log of your sent SMS messages from your OVHcloud Control Panel. This guide will explain how to do this.

## Requirements

- An OVHcloud SMS account with at least 1 sent SMS.

<!-- CP-NAV-START:telecom-sms -->
---

### OVHcloud Control Panel Access

- **Direct link:** [SMS](/links/control-panel/telecom-sms)
- **Navigation path:** `Telecom`{.action} > `SMS`{.action} > Select your SMS account

---
<!-- CP-NAV-END:telecom-sms -->

![SMS Control Panel](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Instructions

The log records the date, time, sender, recipient and contents of the sent SMS.

> [!primary]
>
> In the OVHcloud Control Panel, you can view SMS messages sent in the last 6 months (or the last 5,000 SMS messages if you have sent more than 5,000 SMS messages in the last 6 months).
>
> To view older SMS messages (up to the last 12 months), you will need to download your SMS history in CSV format. See [Step 2 of this guide](#csv).
>

### Step 1: Viewing the log in your Control Panel

<!-- CP-STEPS-START:view-sms-log -->

In the `SMS management`{.action} tab, click `Sending history`{.action} to access your unit SMS history. To access your SMS campaign history, click the `Campaign management`{.action} tab instead.

![sms-history](images/smshistory1.png){.thumbnail}

You can click on the `Date` column header to sort your log by send date.

Click the `Actions`{.action} button at the end of a row to view or delete that message.

![sms-history](images/smshistory3.png){.thumbnail}

To delete several SMS messages at once, tick the boxes next to each message. The `Delete the selected SMS`{.action} button will appear in the toolbar above the log.

![sms-history](images/smshistory4.png){.thumbnail}

> ⚠️ **To document**: The filter functionality (CP "Filter" button) was not found in the NM Sending history tab — no filter panel or button was observed. Verify whether filtering by sender or recipient is available in the NM interface before publishing.

<!-- CP-STEPS-END:view-sms-log -->

### Step 2: Downloading the sending log as a CSV <a name="csv"></a>

<!-- CP-STEPS-START:download-sms-csv -->

In the `Sending history`{.action} tab, click `Download history`{.action} to download your SMS log in CSV format.

<!-- CP-STEPS-END:download-sms-csv -->
 
You can then view the log using a spreadsheet program. The information will display as in the example below.

![sms-history](images/smshistory7.png){.thumbnail}

Here is a breakdown of the information included in the log:

|  Title  |  Description  |
|  :-----          |  :-----          |
|  id |  the unique id for the sent SMS used by our servers |
|  date | the date and time that the SMS was sent  |
|  sender |  the sender of the SMS message |
|  receiver |  the recipient’s phone number |
|  ptt |  the return code on the SMS status |
|  operatorCode |  the network ID of the mobile operator to which we sent the SMS |
|  descriptionDlr |  the description of the ptt code received and therefore the status of the SMS |
|  tag |  the tag attributed either manually via the APIs (to one or more SMS messages) or automatically by our servers to each sent SMS (or each SMS campaign) |
|  message |  the content of the SMS |

Further information about the ptt codes and various DLR IDs can be found in the final section of the guide [Everything you need to know about SMS users](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms#step-5-specify-a-callback-url).
 
## Go further

Join our [community of users](/links/community).
