---
title: 'Using your email address from the Roundcube webmail interface'
updated: 2026-05-04
---

## Objective

With the OVHcloud MX Plan solution, you can send and receive emails from third-party software or via webmail. OVHcloud provides an online email service called Roundcube that lets you access an email account through a web browser.

**Find out how to use the Roundcube webmail interface for your OVHcloud email addresses.**

## Requirements

- An OVHcloud **MX Plan** email solution, included in our [web hosting plans](/links/web/hosting), included with a [100M free hosting plan](/links/web/domains-free-hosting), or ordered separately as a standalone solution.
- Access to the login details for the MX Plan email address you want to consult. For more information, see our guide [Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
- Your OVHcloud **MX Plan** email solution must use the **Roundcube** webmail technology. To identify it, follow the instructions below.

> [!primary]
> 
> **How do I identify the technology used on my MX Plan solution?**
>
> The email technology used for your MX Plan solution is identified by its webmail interface. To identify it from your Control Panel, follow this path:
>
> 1. Log in to your [OVHcloud Control Panel](/links/manager).
> 1. Go to the `Web Cloud`{.action} section.
> 1. Click `MX Plan`{.action}.
> 1. Select the relevant domain.
> 1. From the `General information`{.action} tab (selected by default), check the technology used under the **Webmail** entry.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

<!-- CP-NAV-START:web-mx-plan -->
---

### OVHcloud Control Panel access

- **Direct link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigation path:** `Web Cloud`{.action} > `MX Plan`{.action} > Select your MX Plan service

---
<!-- CP-NAV-END:web-mx-plan -->

## Instructions

**Summary**

- [Logging in to the Roundcube webmail interface](#roundcube-connexion)
- [Roundcube webmail main page](#general-interface)
    - [Folder management (left column)](#leftcolumn)
    - [List of received/sent emails (top window)](#topwindow)
        - [Display type](#topwindow-display)
        - [Action on a selected email](#topwindow-action)
        - [Searching for an email](#topwindow-search)
    - [Email content (bottom window)](#lowerwindow)
- [Configuring Roundcube interface preferences](#roundcube-settings)
    - [User interface](#user-interface-settings)
    - [Mailbox view](#mail-view-settings)
    - [Displaying messages](#mail-display-settings)
    - [Composing messages](#mail-writing-settings)
    - [Contacts](#contacts-settings)
    - [Special folders](#special-folder-settings)
    - [Server settings](#server-settings)
    - [Encryption](#encryption)
- [Managing identities and their signatures](#identity-signature)
    - [Identity](#identity)
    - [Signature](#signature)
- [Contact book](#contact-book)
    - [Groups](#group)
    - [Contacts](#contacts)
    - [Importing contacts](#import-contacts)
    - [Exporting contacts](#export-contacts)
- [Responses (templates)](#responses)
- [Adding an autoresponder](#automatic-respond)
- [Changing your email password](#password)
- [Writing an email](#email-writing)
- [Use case](#usecase)

### Logging in to the Roundcube webmail interface <a name="roundcube-connexion"></a>

Go to the [Webmail](/links/web/email) page. Enter an email address and the password, then click `Login`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

You will then be redirected to the Roundcube interface.

![hosting](images/roundcube01.png){.thumbnail}

> [!primary]
> 
> When you first log in to the Roundcube interface, the appearance may be different from what you will see in this documentation. This means that the "classic" appearance has been set on your interface. To change it, follow the "[User interface](#user-interface-settings)" section and select the "Larry" view.
> The appearance of the interface will not affect the explanations that follow in this documentation.

> [!warning]
> 
> If you are redirected to an **O**utlook **W**eb **A**pp (OWA) interface, this means that you are on the latest version of the MX Plan solution. To find out more about your MX Plan solution, see our [Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities) page.
>
> To familiarise yourself with the **OWA** interface, see our guide [Using an email account from the OWA interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Roundcube webmail main page <a name="general-interface"></a>

Once logged in to your email account, you have access to the main Roundcube window, which consists of 3 zones:

- [**Left column**](#leftcolumn): the tree view of your email account, made up of folders and subfolders. The primary folder is the `Inbox`.

- [**Top window**](#topwindow): the list of emails contained in the folder selected in the left column.

- [**Bottom window**](#lowerwindow): the content of the email selected in the top window.

#### Folder management (left column) <a name="leftcolumn"></a>

In this zone, the folders of your email account are displayed.

To manage folders more precisely, click the cog icon at the bottom of the column, then click `Manage folders`{.action}.

![hosting](images/roundcube02.png){.thumbnail}

To create a folder, click the `+`{.action} button at the bottom of the `Folders` column.

To delete a folder, select the relevant folder, click the cog icon at the bottom of the `Folders` column, then click `Delete`{.action}. To clear the contents but keep the folder, click `Empty`{.action}.

The check boxes next to the folders correspond to "subscriptions". The subscription determines whether the folder is displayed, or not, in the webmail interface or the email software, while still keeping the folder content. The aim is only to hide or show a folder on the email account.

> [!primary]
>
> Folders with a grey check box are special folders. You cannot delete them or unsubscribe from them.

#### List of received/sent emails (top window) <a name="topwindow"></a>

This window displays the contents of the folder selected in the left column. 

##### Display type <a name="topwindow-display"></a>

This window is presented in a form that can be customised. To do so, click the cog icon at the top left of the window.

![hosting](images/roundcube03.png){.thumbnail}

Four parameters can be configured:

- **Layout**: defines how the email account management windows are arranged. Three options:
    - `Widescreen`{.action}: three panels side by side — folders, email list and reading pane aligned horizontally;
    - `Desktop`{.action}: email list at the top, reading pane below (classic layout);
    - `List`{.action}: no reading pane — emails open in full window when clicked.

- **List columns**: check boxes that determine the columns displayed in the email list. The **Subject** and **Threads** columns are always visible. Optional columns available: `From`{.action}, `To`{.action}, `From/To`{.action}, `Reply-To`{.action}, `Cc`{.action}, `Date`{.action}, `Size`{.action}, `Status`{.action}, `Attachment`{.action}, `Flag`{.action}, `Priority`{.action}.

- **Sort column**: lets you choose the default sorting column. Available options: `None`{.action}, `Arrival date`{.action}, `Sent date`{.action}, `Subject`{.action}, `From`{.action}, `To`{.action}, `From/To`{.action}, `Cc`{.action} or `Size`{.action}.

- **Sort order**: ascending or descending.

Click `Save`{.action} to apply your choices.

> [!primary]
>
> You can also **sort the list dynamically** by clicking directly on the header of a displayed column (for example **Date**, **Subject** or **Size**). A second click on the same column reverses the order.

##### Action on a selected email <a name="topwindow-action"></a>

When an email is selected, you can perform actions on it. The possible actions are:

- `Reply`{.action}: reply directly to the sender.
- `Reply all`{.action}: reply directly to all the recipients listed in the "To" and "Cc" fields.
- `Forward`{.action}: forward the selected email to one or more recipients.
- `Delete`{.action}: move the selected email to the "Trash".
- `Mark as junk`{.action}: place the selected email directly in the junk mail folder (Junk), labelling it as **spam**.
- `Mark`{.action}: manually set the status of an email.
- `More`{.action} 
    - `Print this message`{.action}.
    - `Download (.eml)`{.action}: retrieve the email header and its content.
    - `Edit as new`{.action}: create a new email based on the selected email.
    - `Show source`{.action}: display the email in its raw form, including the header.
    - `Move to`{.action}: move the email to a folder.
    - `Copy to`{.action}: copy the email to a folder.
    - `Open in a new window`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> If one of your contacts requests an acknowledgement of receipt when you read their email, you will get the following message: `The sender of this message has asked to be notified when you read this message. Do you want to notify the sender?`.
>

##### Searching for an email <a name="topwindow-search"></a>

A search tool is available in the upper right-hand part of the interface.

Enter a term in the search field, then confirm with the `Enter`{.action} key: by default, Roundcube searches the entire current folder.

Click the arrow to the right of the magnifying glass to display the search filters: you can restrict the search to specific fields (subject, message body, sender, recipients, etc.) or extend its scope to all folders.

#### Email content (bottom window) <a name="lowerwindow"></a>

When an email is selected in the list, it is displayed in the bottom window.

On the right-hand side, you will find shortcuts for the following functions:

- `Show in HTML format`{.action} (default)
- `Show in plain text format`{.action}
- `Reply`{.action}
- `Reply all`{.action}
- `Forward`{.action}
- `Open in a new window`{.action}

![hosting](images/roundcube05.png){.thumbnail}

### Configuring Roundcube interface preferences <a name="roundcube-settings"></a>

The following sections of this guide correspond to the tabs that make up the `Preferences`{.action} part of the Roundcube `Settings`{.action}. Their description is not exhaustive.

![hosting](images/roundcube06.png){.thumbnail}

#### User interface <a name="user-interface-settings"></a>

Here, set the `Language` of the Roundcube interface, the `Time zone`, the `Time format` and the `Date format`.

The `Pretty dates` option lets you display the date received/sent with relative terms such as "Today", "Yesterday", etc.<br>
**For example**: today's date is **19/05/2022**, an email sent/received on **17/05/2022** at **17:38** will be displayed as **Tue 17:38**, because the email corresponds to the previous Tuesday.

The `Display the next message after marking as read or moving` check box means that after a delete or move action on an email, the item in the row below will then always be selected, regardless of the sort order.

You can choose the look of your interface display. You have a choice between the **Classic** display or the **Larry** display.

#### Mailbox view <a name="mail-view-settings"></a>

Here, set the layout used to view and act on emails. The `Layout` option lets you arrange the 3 windows described in the [List of received/sent emails](#topwindow) section.

#### Displaying messages <a name="mail-display-settings"></a>

Set how emails are displayed.<br>
We recommend keeping the `Display HTML` box ticked, to ensure that emails formatted by the sender are displayed correctly.<br>
We also recommend keeping the `Allow remote resources (images, styles)` option set to `never`. This avoids loading the elements of an email that may seem malicious.

#### Composing messages <a name="mail-writing-settings"></a>

Set the default form when writing an email or a reply.<br>
We recommend setting the `Compose HTML messages` option to `always`, to benefit from HTML editing tools by default and to avoid altering an HTML signature.

#### Contacts <a name="contacts-settings"></a>

Customise the layout of the information in your address book here.

#### Special folders <a name="special-folder-settings"></a>

Roundcube has 4 special folders: `Drafts`, `Sent`, `Junk`, `Trash`.

We do not recommend modifying them, but you can assign the behaviour of a special folder to another folder created later, using the drop-down menus.<br>

**For example**, you can assign the "Drafts" behaviour to another folder you have created by clicking the drop-down list and choosing that folder. If no folder is assigned to it, it will automatically be set to the "Drafts" option. Emails saved there will then be considered drafts until they are actually sent.

> In practice, you create a subfolder called "Client email drafts". Go to `My preferences`{.action} / `Special folders`{.action} and choose the "Drafts" option. In the drop-down menu, select the "Client email drafts" folder to replace "Drafts". Emails written in this folder will be considered drafts.

#### Server settings <a name="server-settings"></a>

In this tab, you can optimise the space used by an email account. The `Clear Trash on logout` option helps prevent the build-up of items that have been deleted. The `Directly delete junk` option will automatically delete all emails considered as spam.

> [!warning]
> 
> We do not recommend enabling the `Directly delete junk` option in case a false positive (an email wrongly classified as "spam") is flagged as spam by the receiving server. When an email is placed in the "Junk" folder, you can still check whether the email is legitimate.

#### Encryption <a name="encryption"></a>

If your browser allows it, you can install and enable the "Mailvelope" extension. This is a browser extension that integrates PGP (**P**retty **G**ood **P**rivacy) into your webmail. The PGP encryption system, and consequently the "Mailvelope" extension, lets you:

- Encrypt and decrypt emails in your browser.
- Keep the content of your emails private from your email provider.

This way, only you can read your emails. This extension is a way to secure your webmail if you receive emails of a confidential nature.

For more information, see the "Mailvelope" FAQ at <https://mailvelope.com/faq>.

### Managing identities and their signatures <a name="identity-signature"></a>

In Roundcube, click `Settings`{.action} in the top bar, then `Identities`{.action} in the left column. The "Identity" lets you customise the information sent to recipients, such as the display name or the signature.

![hosting](images/roundcube07.png){.thumbnail}

#### Setting the attributes of an identity <a name="identity"></a>

- **Display Name**: this name will appear in the "sender" section for the recipient.
- **Email**: the address from which the email is sent.
- **Organization**: a field for a company name, association, or another entity.
- **Reply-To**: assign a different reply email address from the sender's.
- **Bcc**: send a blind copy to an email address when sending.
- **Set default**: when there are several identities (signatures), set this one as the default.
- **Signature**: customise the footer of an email when writing it (surname, first name, job title, sentences, images, etc.).
- **HTML signature**: enables HTML format on the signature.

> [!alert]
>
> Filling in the **Email** field with an email address different from the one you are logged in with is considered electronic identity theft (*spoofing*). The IP address used for sending may be "banned" and/or considered "spam" by your recipients.

#### Adding a signature <a name="signature"></a>

By default, the `Signature` field is in "plain text". This format does not allow advanced editing or inserting an image into your signature. To benefit from advanced editing options for a signature, we recommend enabling HTML mode by clicking **HTML signature** below the input frame.

> [!warning]
>
> As a result, if the signature is in HTML format, you will need to switch to HTML mode when writing an email. You can enable this option by default for each email you write, from the `Settings`{.action} section of the Roundcube interface.
> Click `Preferences`{.action} in the left-hand column, then `Composing messages`{.action}. For the **Compose HTML messages** entry, select `Always`.
>

To insert an image into a signature, the image must be hosted on a server (an OVHcloud hosting plan or another).<br>
**Uploading an image from a computer will not allow it to be displayed**.

Click the `< >`{.action} button in the HTML toolbar, then insert the following code, replacing `your-image-url` with the URL of the image and `text-if-image-is-not-displayed` with text that replaces the image if it cannot be displayed.

```html
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Contact book <a name="contact-book"></a>

Click `Contacts`{.action} in the top bar to access the contact book. It is divided into **3 columns**:

- **Groups**: in the address book, you can create groups to organise contacts.
- **Contacts**: view the contacts of the address book or the selected group.
- **Contact properties** or **Add contact**: this window appears when a contact is selected or being created. You can read or edit the contact information.

![hosting](images/roundcube09.png){.thumbnail}

#### Groups <a name="group"></a>

Groups are subcategories of the address book. They let you organise contacts into subsets. For example, it is easier to find a contact in a group you have created than in your entire address book. They also let you send an email by adding a group as a recipient, instead of adding the contacts of the group one by one.

To create a group, click the `+`{.action} button at the bottom of the `Groups` column. Set the name of the group, then click `Save`{.action} to confirm.

![hosting](images/roundcube10.png){.thumbnail}

To assign a contact to one of the groups, select a contact in the `Contacts` column, then in the window that appears, click the `Groups`{.action} tab. Tick the group you want to assign to the contact.

#### Contacts <a name="contacts"></a>

In the `Groups` column, select the address book or one of the groups.

> [!primary]
>
> When you create a contact from a selected group, the contact will automatically be added to the group.

Click the `+`{.action} button at the bottom of the `Contacts` column to create a contact.

![hosting](images/roundcube11.png){.thumbnail}

Then fill in the contact information.

> [!primary]
> You can add additional fields via the `Add field...`{.action} drop-down menu, located below the `First name` and `Address` fields.

#### Importing contacts <a name="import-contacts"></a>

In the `Contacts`{.action} window, in the top bar, click `Import`{.action} to open the import window.

- `Import from file`: select a CSV or vCard file from your computer. Contacts in a CSV file must be separated by commas. The file must not be larger than 20 MB.
- `Import group assignments`: if the contacts in your file are sorted by groups, you can enable this option to keep this organisation, or leave this option set to `none` so that no group is assigned to the contacts.
- `Replace the entire address book`: if a contact book is already configured, we recommend exporting it before ticking this option, or making sure you want to replace it permanently.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Exporting contacts <a name="export-contacts"></a>

In the `Contacts`{.action} window, in the top bar, click the down arrow to the right of the `Export`{.action} button.

You have the choice between:

- `Export all`{.action}: all contacts will be exported in a **.vcf** file.
- `Export selected`{.action}: export only the items you have selected in the `Contacts`{.action} column.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Responses (templates) <a name="responses"></a>

This feature lets you create response templates when writing an email.

In Roundcube, click `Settings`{.action} in the top bar, then `Responses`{.action} in the left column.

To add a response, click the `+`{.action} button at the bottom of the `Responses` column.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
>
> "Responses" are written in "plain text" format.

### Adding an autoresponder <a name="automatic-respond"></a>

You want to add an automatic reply to your email address when you are away or unavailable. This feature cannot be enabled from the webmail interface, but from your [OVHcloud Control Panel](/links/manager), in the management interface for your email addresses. See our guide "[Creating an autoresponder for your email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)".

### Changing your email password <a name="password"></a>

To change your email password, you must log in to your [OVHcloud Control Panel](/links/manager), in the management interface for your email addresses. See our guide "[Changing the password of an email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password/)".

### Writing an email <a name="email-writing"></a>

From the `Mail`{.action} tab in the top bar, click `Compose`{.action}.

In the email composition window, you will find the following fields:

- **From**: choose an [identity](#identity) to set the sender.
- **To**: add recipients and/or a [recipient group](#group). The `+`{.action} button to the right of the field lets you enter several addresses.

> [!primary]
>
> The **"To"** field must not exceed 100 recipients, this includes contacts within a [group](#group).

- **Cc**: via the `Add Cc`{.action} button, add recipients in simple copy.
- **Bcc**: via the `Add Bcc`{.action} button, add recipients in blind copy. The other recipients of the email will not see those in Bcc.
- **Followup-To**: via the `Add Followup-To`{.action} button, forward the email to recipients.
- **Editor type**:
    - `Plain text`: text only, without formatting.
    - `HTML`: text with formatting. An HTML toolbar appears above the input window.
- **Priority** of the email.
- **Return receipt**: an acknowledgement of receipt is requested from the recipient.
- **Delivery status notification** when the email has been successfully delivered to the recipient.
- **Save sent message in**: choose the folder where a copy of the email will be stored.

In the top bar, the following actions are available:

- `Cancel`{.action} writing an email, with a confirmation prompt.
- `Send`{.action} an email.
- `Save`{.action} an email in the "Drafts" special folder.
- `Spell`{.action} check the text, with a menu allowing the choice of language.
- `Attach`{.action} a file to an email.
- `Signature`{.action}: adds the signature attached to the selected [identity](#identity).
- `Responses`{.action}: adds a pre-saved template from the [Responses](#responses) section.

![hosting](images/roundcube13.png){.thumbnail}

### Use case <a name="usecase"></a>

#### Request check failed

You are getting the following message when trying to access your Roundcube webmail interface:

```console
REQUEST CHECK FAILED
For your protection, access to this resource is protected against CSRF attacks.
If you see this, you probably did not log out before leaving the web application.
Human interaction is now required to continue.
Please contact your server administrator.
```

As stated in the message, your email account is considered to be already logged in. This is referred to as a "session". It means that your email account is already in use as far as the email server is concerned, and that this previous session must be closed. Check that your email account is not already open on Roundcube. Also clear the cached data in your web browser.

## Go further

[Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Changing the password of an MX Plan email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Creating an autoresponder for your email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)

[Creating filters for your email addresses](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Using email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Join our [community of users](/links/community).
