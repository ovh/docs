---
title: Using your email account via the Roundcube webmail interface
updated: 2024-03-26
---

## Objective

With the OVHcloud MX Plan, you can send and receive emails from third-party software or via webmail. OVHcloud provides an online email service called Roundcube that allows you to access an email account via a web browser.

**Find out how to use the Roundcube webmail interface for your OVHcloud email addresses**

## Requirements

- An OVHcloud **MX Plan** email solution, included in our [web hosting plans](/links/web/hosting), included in a [100M free hosting](/links/web/domains-free-hosting) hosting plan, or ordered separately as a standalone solution.
- Access to the MX Plan email account you would like to use; for more information, please refer to our guide [Getting started with an MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

## Instructions

**Summary**

- [Logging in to Roundcube](#roundcube-connexion)
- [Roundcube webmail main page](#general-interface)
    - [Folder management (left column)](#leftcolumn)
    - [List of emails received/sent (top window)](#topwindow)
        - [Display type](#topwindow-display)
        - [Actions on a selected email](#topwindow-action)
        - [Search for an emai](#topwindow-search)
    - [Email content (bottom window)](#lowerwindow)
- [Configuring Roundcube interface preferences](#roundcube-settings)
    - [User interface](#user-interface-settings)
    - [Mailbox view](#mail-view-settings)
    - [Displaying messagess](#mail-display-settings)
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
- [Use cases](#usecase)

### Logging in to Roundcube <a name="roundcube-connexion"></a>

Go to the page [Webmail](/links/web/email). Enter your email address and password, then click `Login`{.action}. 

![hosting](images/webmail_login.png){.thumbnail}

You will then be redirected to the Roundcube interface.

![hosting](images/roundcube01.png){.thumbnail}

> [!primary]
> 
> When you first log in to the Roundcube interface, the appearance may be different from what you will see in this documentation. This means that the "classic" appearance has been set on your interface. To change it, follow the [User Interface](#user-interface-settings) topic and select the "Larry" view.
> The appearance of the interface will not affect the explanations that follow in this documentation.

> [!warning]
> 
> If you are redirected to an **O**utlook **W**eb **A**pp (OWA) interface, this means that you are on the latest version of the MX Plan solution. To find out more about your MX Plan solution, go to our guide [Getting started with an MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> To familiarise yourself with the **OWA** interface, please refer to our guide on [Using an email account in the OWA interface](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Roundcube webmail main page <a name="general-interface"></a>

Once logged in to your email account, you have access to the main Roundcube interface, which consists of 3 zones:

- [**Left column**](#leftcolumn): Your email account tree, made up of folders and subfolders. The primary folder is the `Inbox`.

- [**Top window**](#topwindow): The list of emails in the folder selected in the left-hand column.

- [**Lower window**](#lowerwindow): The content of the email selected in the top window.

#### Folder management (left column) <a name="leftcolumn"></a>

In this zone, you will see the folders of your email account.

To manage folders more precisely, click on the cog at the bottom of the column, then `Manage folders`{.action}

![hosting](images/roundcube02.png){.thumbnail}

To create a folder, click the `+`{.action} button at the bottom of the `Folders` column.

To delete a folder, select it and click the cog at the bottom of the `Folders` column. Click on `Delete`{.action}. To clear the contents but keep the folder, click on `Clear`{.action}.

The check boxes at the folder level correspond to "subscriptions". The subscription determines whether the folder should be displayed at the webmail interface or the email software level while retaining the folder contents. The only purpose is to hide or display a folder on the email account.

> [!primary]
>
> Folders with a grey check box are special folders. You cannot delete them or remove them from subscriptions.

#### List of emails received/sent (top window) <a name="topwindow"></a>

This window displays the contents of the selected folder in the left column. 

##### Display type <a name="topwindow-display"></a>

This window can be customised by clicking on the cogwheel icon in the top left-hand corner of the window.

![hosting](images/roundcube03.png){.thumbnail}

You can set the following:

- **Layout**: Allows you to determine the layout of the management windows for an email account.
- **List columns**: Allows you to add columns to display (email priorities, etc.).
- **Sorting column**: Allows you to choose the column by which messages are sorted.
- **Sorting order**: Allows you to choose the ascending or descending sort order, depending on the sorting column.

##### Actions on a selected email <a name="topwindow-search"></a>

When an email is selected, you can choose an action it. Here are the possible actions:

- `Reply`{.action}: Reply directly to the sender.
- `Reply all`{.action}: Reply directly to all recipients listed in the To and Copy fields.
- `Forward`{.action}: Forward the selected email to one or more recipients.
- `Delete`{.action}: Move the selected email into the “Trash”.
- `Spam`{.action}: Place the selected email directly in the Junk folder, labelling it as **Spam**.
- `Mark`{.action}: Determine the status of an email manually.
- `More`{.action} 
    - `Print this message`{.action}.
    - `Download (.eml)`{.action}: Retrieve the header and the content of the email as a file.
    - `Edit as new`{.action}: Create a new email based on the selected email.
    - `Show source`{.action}: Display the email in its raw format, including the header.
    - `Move to`{.action} : Move the email to a folder.
    - `Copy to`{.action}: Copy the email to a folder.
    - `Open in a new window`{.action}.

![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> If one of your contacts requests that an acknowledgement be sent back when you read their email, you will get the following message: `The sender of this message has asked to be notified when you read this message. Do you want to notify the sender?`.
> 

##### Search for an email <a name="topwindow-action"></a>

A search tool is available in the upper right corner of the interface.

Click the arrow to the right of the magnifying glass to display the search filters.

#### Email content (bottom window) <a name="lowerwindow"></a>

When an email is selected in the list, it is displayed in the lower window.

On the right-hand side you can find shortcuts for the following functions:

- Display in HTML format (default)
- Display in plain text format
- Reply
- Reply all
- Forward
- Open in new window 

![hosting](images/roundcube05.png){.thumbnail}

### Configuring Roundcube interface preferences <a name="roundcube-settings"></a>

The following sections in this guide correspond to the tabs that make up the `Preferences`{.action} section of the Roundcube `Settings`{.action}. Their description is not exhaustive.

![hosting](images/roundcube06.png){.thumbnail}

#### User Interface <a name="user-interface-settings"></a>

Set here the `Language` of the Roundcube interface as well as the `Time zone`, the `Time format` and the `Date format`.

The `Pretty Dates` option allows you to display the received/sent date with relative terms such as `Today`, `Yesterday`, etc.<br>

The `Show next entry in the list after deletion or move` check box means that after a delete or move action on an email, the item in the lower row will then always be selected, regardless of the sort order. 

You can choose the display aesthetics of your interface. You can choose between the **Classic** display or the **Larry** display.

#### Mailbox View <a name="mail-view-settings"></a>

Set here the usability to view and act on emails. The `Layout` option allows you to arrange the 3 windows described in the [Roundcube webmail main interface section](#topwindow) .

#### Displaying Messages <a name="mail-display-settings"></a>

Define how emails are displayed.<br>
We recommend that you tick the `Display HTML` box, to ensure that emails formatted by the sender are displayed correctly.<br>
It is also advisable to keep the `Allow remote resources (images, styles)` option on `never`. This avoids loading elements of an email that seems malicious.

#### Composing Messages <a name="mail-writing-settings"></a>

Set the default shape when writing an email or reply.<br>
It is recommended to pass the `Compose HTML messages` option on `always`, to benefit by default from HTML editing tools and not to alter an HTML signature.

#### Contacts <a name="contacts-settings"></a>

Customise the arrangement of information in your address book here.

#### Special Folders <a name="special-folder-settings"></a>

Roundcube has 4 special folders: `Drafts`, `Sent`, `Spam`, `Deleted Items`.

We do not recommend changing them, but you can assign the behaviour of a special folder to another folder created later, using the drop-down menus.<br>

**For example**, you can assign the "Drafts" behavior to another folder that you created by clicking the drop-down list and choosing that folder. If no folder is assigned to it, it will be automatically set to the "Drafts" option. The emails saved there will then be treated as drafts until they are sent.

> In practice, I create a sub-folder called “Drafts emails clients”. I go to `My preferences`{.action} / `Special folders`{.action} and choose the “Drafts” option. In the dropdown menu, I select the “Drafts emails clients” folder to replace “Drafts”. Emails in this folder will be considered drafts.

#### Server Settings <a name="server-settings"></a>

In this tab, you can optimise the space occupied by an email account. The option `Clear "Deleted Items" on logout` prevents the messages that have been deleted from accumulating in this folder. The option `Permanently delete messages in the spam folder` will automatically delete all emails marked as spam.

> [!warning]
> 
> It is not recommended to enable the `Permanently delete messages in the spam folder` option, in the event that false positives (emails falsely declared as "SPAM") are marked as SPAM for the receiving server. When emails are placed in the `Spam` folder, it is still possible to check for legitimate messages.

#### Encryption <a name="encryption"></a>

If your browser allows it, you can install and activate the "Mailvelope" extension. This is a browser extension that integrates PGP (**P**retty **G**ood **P**privacy) into your web mail. The PGP encryption system and, therefore, the "Mailevelope" extension allow you to:

- Encrypt and decrypt emails in your browser.
- Keep the content of your emails private to your email provider.

This way, only you can read your emails. This extension is a way to secure your webmail if you receive confidential emails.

For more information, see the Mailvelope FAQ at <https://mailvelope.com/faq>.

### Managing identities and their signatures <a name="identity-signature"></a>

In Roundcube, click `Settings`{.action} in the top bar, then `Identities`{.action} in the left column. "Identity" allows you to customise information sent to recipients such as the display name or a signature.

![hosting](images/roundcube07.png){.thumbnail}

#### Setting attributes for an identity <a name="identity"></a>

- **Display Name**: This name will appear in the “sender” section of the recipient.
- **Email**: This will be displayed as the address from which the email is sent.
- **Company**: A field for a company name, association, or another entity.
- **Reply-To**: Assign a reply email address different from the sender.
- **Bcc**: Send a blind copy to an email address.
- **Set default**: If there are multiple identities (signatures), assign this one by default.
- **Signature**: Customise the footer of your emails (surname, first name, job title, sentences, images, etc.).
- **HTML signature**: Activates the HTML format on the signature. 

> [!alert]
> 
> Filling in the **Email** box with an email address different from the one you are logged in to is considered to be *spoofing*. The IP address used for sending may be banned and/or considered "SPAM" by your recipients. 

#### Adding a signature <a name="signature"></a>

By default, the `Signature` box is set to plain text. This format does not allow advanced editing or inserting an image into your signature. For advanced editing options for a signature, it is recommended that you enable HTML mode by clicking **HTML Signature**  under the text frame.

> [!warning]
> 
> If the signature is in HTML format, it will be necessary to switch to HTML mode for writing an email. You can enable this option by default for each email editing session, in the `Settings`{.action} section of the Roundcube interface.
> 
> Click `Preferences`{.action} in the left-hand column, then click `Composing Messages`{.action}. At **Compose HTML messages**, select `Always`.
>

To insert an image into a signature, the image must be hosted on a server (OVHcloud hosting or another).<br>
**Uploading an image from your device will not display it.**

Click the `< >`{.action} button in the HTML toolbar, then insert the following code, replacing `your-image-url` with the URL of the image, and `text-if-image-is-not-displayed` with text that replaces the image if it cannot be displayed.

```bash
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Contact book <a name="contact-book"></a>

Click `Contacts`{.action} in the top bar to access the contact book. It is divided into **3 columns**:

- **Groups**: In the address book, you can create groups to classify contacts.
- **Contacts**: View the contacts for the selected address book or group.
- **Contact Properties** or **Add Contact**: This window appears when a contact is selected or is being created. You can read or edit contact information.

![hosting](images/roundcube09.png){.thumbnail}

#### Groups <a name="group"></a>

Groups are subcategories of the address book. They can be used to classify contacts into subsets. For example, it is easier to find a contact in a group you have created than in your entire address book. This also allows you to send an email by adding a group as a recipient, instead of adding the group contacts individually.

To create a group, click the `+`{.action} button at the bottom of the `Groups` column. Set the group name and click `Save`{.action} to validate.

![hosting](images/roundcube10.png){.thumbnail}

To assign a contact to a group, select a contact in the `Contacts` column. In the window that appears, click on the `Groups`{.action} tab. Select the group you want to assign to the contact.

#### Contacts <a name="contacts"></a>

In the `Groups` column, select the address book or one of the groups.

> [!primary]
> 
> When you create a contact from a selected group, the contact will be automatically added to the group.

Click the `+`{.action} button at the bottom of the `Contacts` column to create a contact.

![hosting](images/roundcube11.png){.thumbnail}

Then fill in the contact information.

> [!primary]
> You can add additional fields via the `Add Field...`{.action} drop-down menu, located under the `First name` and `Address` sections.

#### Importing Contacts <a name="import-contacts"></a>

In the `Contacts`{.action} window in the top bar, click `Import`{.action} to open the import window.

- `Import from file`: Select a CSV or vCard file on your computer. Contacts within a CSV file must be separated by commas. The file should not be larger than 20 MB.
- `Import group assignments`: If the contacts in your file are sorted by groups, you can enable this option to import this organisation. If you leave this option on `None`, no groups are assigned to the contacts.
- `Replace the entire address book`: If you have already configured a contact book, we recommend exporting it before ticking this option, or ensuring that you want to replace it permanently.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Exporting Roundcube Contacts <a name="export-contacts"></a>

In the `Contacts`{.action} window in the top bar, click the down arrow to the right of the `Export`{.action} button.

You can choose between:

- `Export all`{.action}: All contacts will be exported to a **.vcf** file.
- `Export selected`{.action}: Export only the items you have selected in the `Contacts`{.action} column.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Responses (templates) <a name="responses"></a>

This feature allows you to create response templates for composing an email.

In Roundcube, click `Settings`{.action} in the top bar, then `Responses`{.action} in the left column.

To add a response, click the `+`{.action} button at the bottom of the `Replies` column.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> `Responses` are written in plain text format.

### Adding an autoresponder <a name="automatic-respond"></a>

You want to add an automatic reply to your email account when you are absent or unavailable. This feature cannot be enabled via webmail, but via your [OVHcloud Control Panel](/links/manager), in the management interface for your email accounts. Read our guide "[Creating an autoresponder for your email addresses](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)".

### Changing your email password <a name="password"></a>

To change your email password, you will need to log in to your [OVHcloud Control Panel](/links/manager), in the interface for managing your email addresses. Read our guide "[Changing an email password](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password/)".

### Writing an email <a name="email-writing"></a>

From the `Email`{.action} tab in the top bar, click `Write`{.action}.

In the email editing window, you will see the following fields: 

- **From**: Choose an [identity](#identity) to define the sender.
- **To+**: Add recipients and/or a recipient [group](#group).

> [!primary]
>
> The "**To**" field must not exceed 100 recipients, this includes contacts in a [group](#group).

- **Add Cc+**: Add single copy recipients.
- **Add Bcc+**: Add blind copy recipients. Other recipients of the email will not see addresses in BCC.
- **Add Followup-To**: Forward the email to recipients.
- **Editor type**:  
    - `Plain text`: Text only, without formatting.
    - `HTML`: Text with formatting. An HTML toolbar appears above the input window.
- **Priority** of the email.
- **Return receipt**: Acknowledgement of receipt is requested from the recipient.
- **Delivery status notification** Status notification when the email has been successfully sent to the recipient.
- **Save sent message in**: Choose the folder where a copy of the email will be stored.

In the top bar, the following actions are available:

- `Cancel`{.action} writing an email with a confirmation request.
- `Send`{.action} an email.
- `Save`{.action} an email in the "Draft" special folder.
- `Spell`{.action} check the text, with a menu allowing the choice of language.
- `Attach`{.action} a file to an email.
- `Signature`{.action} adds the signature attached to [the selected identity](#identity).
- `Responses`{.action} adds a pre-saved template from the [Responses](#responses) section.

![hosting](images/roundcube13.png){.thumbnail}

### Use cases <a name="usecase"></a>

#### Request verification failed

When you try to access your Roundcube webmail, you will receive the following message:

```console
REQUEST CHECK FAILED
For your protection, access to this resource is secured against CSRF.
If you see this, you probably didn't log out before leaving the web application.
Human interaction is now required to continue.
Please contact your server-administrator.
```

As you will see in the email, your account will be considered as already logged in. This is called a session. It means that your email account is already being used by the email server, and that the previous session must be closed. Check that your email account has not already been opened on Roundcube. You can also clear cached data in your web browser.

## Go further <a name="gofurther"></a>

[Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Changing your password for an MX Plan email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Creating an auto-reply for an email address](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses/)

[Creating filters for your email addresses](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Using email redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Join our community of users on <https://community.ovh.com/en/>.
