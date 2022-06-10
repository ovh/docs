---
title: 'Using your email address via the RoundCube webmail interface'
slug: roundcube-userguide
section: 'Getting started'
order: 05
---

**Last updated 31/05/2022**

## Objective

With the OVHcloud MX Plan, you can send and receive emails from third-party software or via webmail. OVHcloud provides an online email service called RoundCube that allows you to access an email account via a web browser.

**Find out how to use the RoundCube webmail interface for your OVHcloud email addresses**

## Requirements

- an OVHcloud **MX Plan** email solution, included in our [web hosting plans](https://www.ovhcloud.com/en-gb/web-hosting/)plans, included in a free [Start10M](https://www.ovhcloud.com/en-gb/domains/free-web-hosting/)hosting package, or ordered separately as a standalone solution
- access to the MX Plan email address you would like to view For more information, please refer to our [Getting started with an MX Plan](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/) guide.

## Instructions

### Se connecter au webmail RoundCube

Go to the page <https://www.ovh.co.uk/mail/>. Enter your email address and password, then click `Login` {.action}. 

![hosting](images/webmail_login.png){.thumbnail}

You will then be redirected to the RoundCube interface.

![hosting](images/roundcube01.png){.thumbnail}

> [!warning]
> 
> If you are redirected to an **O**utlook **W**eb **A**ccess (OWA) interface, this means that you are on the latest version of the MX Plan solution. To find out more about your MX Plan solution, go to our [Getting started with an MX Plan solution page](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/).
>
> To familiarise yourself with the **OWA** interface, please refer to our guide on [Using an email account in the OWA interface](https://docs.ovh.com/gb/en/microsoft-collaborative-solutions/exchange_2016_outlook_web_app_user_guide/).

### General RoundCube webmail interface <a name="general-interface"></a>

Once you have logged in to your email account, you can access the main Roundcube window, which consists of 3 zones:

- [**Left**](#leftcolumn) column: your email account tree, made up of folders and subfolders. The primary folder is the `Inbox`.

- [**Top**](#topwindow) Window: the list of emails in the folder selected in the left-hand column.

- [**Lower**](#lowerwindow) Window: the content of the email selected in the top window.

#### Folder management (left column) <a name="leftcloumn"></a>

In this zone, you will see the folders in your email account.

To manage folders more precisely, click on the cog at the bottom of the column, then `Manage folders`{.action}

![hosting](images/roundcube02.png){.thumbnail}

To create a folder, click the `+`{.action} button at the bottom of the `Folders` column.

To delete a folder, select the folder, click the cog at the bottom of the `Folders` column, and then click `Delete`{.action}. To clear the contents but keep the folder, click `Clear`{.action}.

The check boxes at the folder level correspond to "subscriptions". The subscription determines whether the folder should display at the webmail interface or the e-mail software level while retaining the folder contents. The only purpose is to hide or display a folder on the email account.

> [!primary]
>
> Folders with a grey check box are special folders. You cannot delete or unsubscribe your subscriptions.

#### List of emails received/sent (top window) <a name="topwindow"></a>

This window displays the contents of the selected folder in the left column. 

##### **Display type**

This window is presented in a form that can be customised. To do this, click on the cogwheel icon in the top left-hand corner of the window.

![hosting](images/roundcube03.png){.thumbnail}

You can set the following:

- **Layout**: allows you to determine the layout of the management windows for an email account.
- **List Columns**: allows you to add columns to display (e-mail priorities, etc.).
- **Sorting column**: allows you to choose the column on which the default sort will be performed.
- **Sorting order**: allows you to choose the ascending or descending sort order, depending on the sort column.

##### **Action on a selected email**

When an email is selected, you can change it. Here are the possible actions:

- `Reply`{.action}: reply directly to the sender.
- `Reply all`{.action}: reply directly to all recipients listed in the A and Copy fields.
- `Forward`{.action}: forward the selected email to one or more recipients.
- `Delete`{.action}: put the selected email in the “Trash”.
- `Spam`{.action}: place the selected email directly in the Junk mailbox, label it as **spam**.
- `Mark`{.action}: determine the status of an email manually.
- `More`{.action} 
    - `Print this message`{.action}.
    - `Download (.eml)`{.action}: retrieve the email header and its contents.
    - `Edit as new`{.action}: create a new email based on the selected email.
    - `Show source`{.action}: display the email in its raw form with the header.
    - `Move to`{.action} : move the email to a folder.
    - `Copy to`{.action}: copy the email to a folder.
    - `Open in a new window`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> If one of your contacts requests that an acknowledgement be sent to him when you read his email, you will get the following message: `the sender of this message has asked to be notified when you read this message. Do you want to notify the sender?`.
> 

##### **Search for an email**

A search tool is available in the upper right of the interface.

Click the arrow to the right of the magnifying glass to display the search filters.

![hosting](images/roundcube03.png){.thumbnail}

#### Email content (bottom window) <a name="lowerwindow"></a>

When an email is selected in the list, it is displayed in the lower window.

Find the shortcuts on the right of the following functions:

- Show in HTML format (default)
- Show in plain text format
- Reply
- Reply all
- Forward
- Open in new window 

![hosting](images/roundcube05.png){.thumbnail}

### Configure Roundcube interface preferences

The following chapters in this guide correspond to the tabs that make up the `Preferences`{.action} section of the Roundcube `Settings`{.action}. Their description is not exhaustive.

![hosting](images/roundcube06.png){.thumbnail}

#### User interface

Set here the `language` of use of the Roundcube interface, the `Time zone`, the `Time format` and the `Date format`.

The `Pretty Dates` option allows you to display the received/sent date with relative terms such as `Today`, `Yesterday`, etc.<br>
**For example**: it's **19/05/2022**, an email sent/received on **17/05/2022** at **17:38** will be displayed **Tue 17:38**, as the email corresponds to the previous Tuesday.

The `Show next entry in the list after deletion or move` check box means that after a delete or move action on an email, the item in the lower row will then always be selected, regardless of the sort order. 

#### Mailbox View

Set here the usability to view and act on emails. The `Layout` option allows you to arrange the 3 windows described in the General [Interface section of the RoundCube](#topwindow) webmail.

#### Displaying Messages

Define how emails are displayed.<br>
We recommend that you tick the `Display HTML` box, to ensure that emails formatted by the sender are displayed correctly.<br>
It is also advisable to keep the `Allow remote resources (images, styles)` option on `always`. This avoids loading elements of an email that seems malicious.

#### Composing Messages

Set the default shape when writing an email or reply.<br>
It is recommended to pass the `Compose HTML messages` option on `always`, to benefit by default from HTML editing tools and not to alter an HTML signature.

#### Contacts

Customise the arrangement of information in your address book here.

#### Special Folders

Roundcube has 4 special folders: `Drafts`, `Sent`, `Spam`, `Deleted Items`.

We do not recommend changing them, but you can assign the behaviour of a special folder to another folder created later, using the drop-down menus.<br>
**For example**, you can assign the `Drafts` behaviour to another folder that you created. The emails that will be saved there will be considered drafts until they are actually sent.

#### Server settings

In this tab, you can optimise the space occupied by an email account. This is because the `Clear "Deleted Items" on logout` prevents the items that have been deleted from being accumulated. The `Permanently delete messages in the spam folder` option will automatically delete all emails considered as spam.

> [!warning]
> 
> It is not recommended to enable the `Permanently delete messages in the spam folder` option, in the event that a false positive (e-mail falsely declared as "SPAM") is declared as SPAM for the incoming server. When an email is placed in the `Spam` folder, it is still possible to check if the email is legitimate.

### Manage identities and their signatures <a name="identity"></a>

In Roundcube, click `Settings`{.action} in the top bar, then `Identities`{.action} in the left column. "Identity" allows you to customise information sent to recipients such as display name or signature.

![hosting](images/roundcube07.png){.thumbnail}

#### Set attributes for an identity 

- **Display Name** : this name will appear in the “sender” section of the recipient
- **Email** : is the address from which the email is sent.
- **Company** : field for company name, association, or other entity.
- **Reply-To** : assign a different reply email address than the sender.
- **Bcc** : caching an email address when sending.
- **Set default** : when there are multiple identities (signatures), assigns this by default.
- **Signature** : customise the footer of an email when you edit it (surname, first name, job title, sentences, images...).
- **HTML signature** : activates the HTML format on the signature. 

> [!alert]
> 
> Filling in the **Email** box with an email address different from the one you are logged in to is considered to be *spoofing*. The IP address used for sending may be "banned" and/or considered "SPAM" by your recipients. 

#### Add a signature.

By default, the `signature` box is set to plain text. This format does not allow advanced editing or inserting an image into your signature. For advanced editing options for a signature, it is recommended that you enable HTML mode by clicking **HTML Signature**  under the text frame.

> [!warning]
> 
> Therefore, if the signature is in HTML format, it will be necessary to switch to HTML mode for writing an email. You can enable this option by default for each email editing session, in the `Settings`{.action} section of the Roundcube interface.
> Click `Preferences`{.action} in the left-hand column, then click `Composing Messages`{.action}. To **Compose HTML messages**, select `Always`.
>

To insert an image into a signature, the image must be hosted on a server (OVHcloud hosting or another).<br>
**Uploading an image from a computer will not display it.**

Click the `< >`{.action} button in the HTML toolbar, and then insert the following code, replacing `your-image-url` with the URL of the image, and `text-if-image-is-not-displayed` with text that replaces the image if it cannot be displayed.

```bash
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Contact book

Click `Contacts`{.action} in the top bar to access the contact book. It is divided into **3 columns**:

- **Groups**: in the address book, you can create groups to classify contacts.
- **Contacts**: view the contacts for the selected address book or group.
- **Contact Properties** or **Add Contact**: this window appears when a contact is selected or is being created. You can read or edit contact information.

![hosting](images/roundcube09.png){.thumbnail}

#### Groups <a name="group"></a>

Groups are subcategories of the address book. They can be used to classify contacts into subsets. For example, it is easier to find a contact in a group you have created than in your entire address book. This also allows you to send an email by adding a group as a recipient, instead of adding one to one the group contacts.

To create a group, click the `+`{.action} button at the bottom of the `Groups` column. Set the group name and click `Save`{.action} to validate.

![hosting](images/roundcube10.png){.thumbnail}

To assign a contact to one of the groups, select a contact in the `Contacts` column, then in the window that appears, click the `Groups`{.action} tab. Select the group you want to assign to the contact.

#### Contacts <a name="contacts"></a>

In the `Groups` column, select the address book or one of the groups.

> [!primary]
> 
> When you create a contact from a selected group, the contact will be automatically added to the group.

Click the `+`{.action} button at the bottom of the `Contacts` column to create a contact.

![hosting](images/roundcube11.png){.thumbnail}

Then fill in the contact information.

> [!primary]
> You can add additional fields via the `Add Field drop-down menu...`{.action}, located under the `First name` and `Address` fields.

### Responses (templates) <a name="responses"></a>

This feature allows you to create response templates when writing an email.

In Roundcube, click `Settings`{.action} in the top bar, then `Responses`{.action} in the left column.

To add a response, click the `+`{.action} button at the bottom of the `Replies` column.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> `Responses` are written in plain text format.

### Writing an email

From the `Email`{.action} tab in the top bar, click `Write`{.action}.

In the email editing window, you will see the following fields: 

- **From**: choose an [identity](#identity) to define the sender.
- **To+**: Add recipients and/or a recipient [group](#group).

> [!primary]
> 
> The “**To”** field must not exceed 100 recipients, this includes contacts in a [group](#group).

- **Add Cc+**: add single copy recipients.
- **Add Bcc+**: add hidden copy recipients. Other recipients of the email will not see those in BCC.
- **Add Followup-To**: forward the email to recipients.
- **Editor type**:  
    - `Plain text`: text only without formatting.
    - `HTML`: text with formatting. An HTML toolbar appears above the input window.
- Email **priority**.
- **Return receipt**: acknowledgement of receipt is requested from the recipient.
- **Delivery status notification** status notification when the email has been successfully sent to the recipient.
- **Save sent message in**: choose the folder where a copy of the email will be stored.

In the top bar, the following actions are available:

- `Cancel`{.action} writing an email with a confirmation request.
- `Send`{.action} an email.
- `Save`{.action} an email in the “draft” special folder
- `Spell`{.action}, to check the text, with a menu allowing the choice of language.
- `Attach`{.action} a file to an email.
- `Signature`{.action}: adds the signature attached to [the selected identity](#identity).
- `Responses`{.action}: adds a pre-saved template in the [Responses](#responses) section.

![hosting](images/roundcube13.png){.thumbnail}

## Go further

[Getting started with the MX Plan solution](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/)

[Change the password for an MX Plan email address](https://docs.ovh.com/gb/en/emails/changing-email-address-password/)

[Creating filters for your email addresses](https://docs.ovh.com/gb/en/emails/email-hosting-configuring-filters/)

[Use email redirections](https://docs.ovh.com/gb/en/emails/email-redirection-guide/)

Join our community of users on <https://community.ovh.com/en/>.
