---
title: "How to use Zimbra webmail"
excerpt: "Discover the Zimbra webmail interface for your OVHcloud MX Plan email accounts"
updated: 2024-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
>
> **Important**
>
> Zimbra webmail for MX Plan is a service still in development.
>
> Currently, it is only available for migrated services linked to the development of our MX Plan solution. This migration is automatic, and you will be sent an email by our teams when you are affected by the migration.
>
> For more information, see our [OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra).

## Objective

With the OVHcloud MX Plan, you can send and receive emails from an email client (Thunderbird, Outlook, Mac Mail) or via webmail in your device's web browser.<br>
OVHcloud provides a webmail service called Zimbra to access MX Plan email accounts. On this page, we will cover the essential features for using this webmail.

**Find out how to use Zimbra webmail for your OVHcloud MX Plan email accounts.**

## Requirements

- You have an OVHcloud **MX Plan** email solution, included in our [web hosting plans](https://www.ovhcloud.com/en-gb/web-hosting/), included in a [100M free hosting](https://www.ovhcloud.com/en-gb/domains/free-web-hosting/) hosting plan, or ordered separately as a standalone solution.
- You have the login details for the MX Plan email account you would like to use. For more information, please read our guide on [Getting started with the MX Plan solution](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

## Instructions

**Content overview**

- [Log in to Zimbra webmail](#login)
- [General interface of Zimbra webmail](#general-interface)
- [Manage your email account folders](#folders-management)
    - [Special folders](#folders-specials)
    - [Create folders](#folders-creation)
 - [Email processing](#email-management)
    - [Action on a selected email](#email-action)
    - [Searching emails](#email-search)
- [Write an email](#email-writing)
- [Configure Zimbra interface preferences](#settings)
- [Contacts](#contacts)
    - [Folder management](#contacts-folders)
    - [Managing lists](#contacts-lists)
    - [Import/Export contacts](#import-export)
- [Calendar](#calendar)
    - [Calendar management](#calendar-management)
    - [Tasks](#tasks)
- [Filters](#filters)
    - [How to set filters](#filters-howto)
    - [Create a filter](#filters-creation)
- [Delegations](#delegations)
- [Signature](#signatures)
- [Automatic Replies](#auto-reply)

### Log in to Zimbra webmail <a name="login"></a>

Go to the page <https://www.ovh.com/fr/mail/>. Enter your email address and password, then click `Login`{.action}.

![Zimbra - login](images/ovhcloud-login-webmail.png){.thumbnail}

You will then be redirected to the Zimbra interface.

![Zimbra - interface](images/zimbra-01.png){.thumbnail}

### General interface of Zimbra webmail <a name="general-interface"></a>

Once you have logged in to your email account, you will have access to the main Zimbra window, which consists of 3 areas:

> [!tabs]
> **Top menu**
>>
>> - **(1)** This area allows you to switch between the interfaces for `mail` and `contacts`. By default, you are on the `mail` tab.
>> - **(2)** A search bar allows you to find messages or contacts.
>> - **(3)** The menu for managing your email account profile and the button to access the settings **(4)**.
>>
>> ![Zimbra - top menu](images/zimbra-02.png){.thumbnail}
>>
> **Left Column**
>>
>> By default, this is the tree-view of your email account, made up of folders and subfolders. The main folder is `Inbox`.
>>
>> ![Zimbra - tree view](images/zimbra-03.png){.thumbnail}
>>
> **Center Window**
>>
>> By default, your emails are displayed in this zone, which contains two parts:
>>
>> - **(1)** The list of elements
>> - **(2)** The contents of the selected item
>>
>> ![Zimbra - Emails](images/zimbra-04.png){.thumbnail}
>>

### Manage your email account folders (left-hand column) <a name="folders-management"></a>

In this area, you will see the folders stored on your email account. You will find the **special** folders already there (in orange) and the folders you have **created** (in green).

![Zimbra - folders](images/zimbra-05.png){.thumbnail}

#### Special folders <a name="folders-specials"></a>

Special folders are created automatically by the email server, and they make up the main part of an email account.

- **Inbox**: Emails are delivered to this folder by default (excluding filters applied).
- **Drafts**: Emails that are written but not sent are saved in this folder.
- **Sent**: Sent emails are automatically stored in this folder.
- **Archive**: The default folder for classifying processed emails.
- **SPAM**: A folder where emails considered unwanted are stored.
- **Trash**: Deleted emails are stored in this folder before they are permanently deleted.

> [!primary]
>
> Special folders cannot be deleted.

#### Create folders <a name="folders-creation"></a>

To organize your emails according to your needs, you can create your own folders.

To create a folder, click the `+ Add a folder`{.action} button at the bottom of the column.

You can also create a subfolder by right-clicking the folder you want, and then clicking `Create subfolder`{.action}. 

> [!primary]
>
> The "Drafts", "SPAM" and "Trash" folders cannot contain subfolders.

### Email processing <a name="email-management"></a>

When you select a folder or subfolder in the left-hand column, the list of emails contained in it appears in the middle column. Then click on the email of your choice to display its contents in the window on the right.

> [!primary]
>
> **Display type**
>
> The display of your emails is in a form that can be modified. To do this, click the `View`{.action} button in the top right-hand corner of this window.

#### Action on a selected email <a name="email-action"></a>

When you select an email is selected, many actions are available:

- 1.**Reply**: Reply directly to the sender.
- 2.**Reply all**: Reply directly to all recipients in the “To” and “Cc” fields.
- 3.**Forward**: Forward the selected email to one or more recipients.
- 4.**Archive**: Move the email to the "Archive" folder of your email account.
- 5.**Move**: Move the email to one of the folders in the email account.
- 6.**Delete**: Place the selected email in the "Trash".
- 7.**SPAM**: Place the selected email in the spam folder.
- 8.**More**
    - **Mark as Read**
    - **Mark as Unread**
    - **Star**: Assign a "star" to your email to highlight and identify it more easily.
    - **Clear Star**: Remove the "star" assigned to this email.
    - **Show Original**: Display the raw email with the header.
    - **New Filter**: Create a filter based on the sender and subject of the selected message.
    - **Print**: Print the selected conversation or email.
- 9.**View**: Select one of the 3 layouts to view your folders and emails.

![Zimbra - actions](images/zimbra-07.png){.thumbnail}

You can access these options by right-clicking on each email in the middle column.

> [!primary]
>
> If one of your contacts asks for a read receipt of an email, you will get the following standard message: `John has requested a read receipt for this email. Send a read receipt`.
>

#### Searching emails <a name="email-search"></a>

If you would like to find an email, use the search bar at the top of your interface. You can then do a **simple search** or an **advanced search**, as described in the tabs below:

> [!tabs]
> **Simple search**
>>
>> Enter the keyword(s) you would like to find in the search bar, and press `Enter` to confirm your search. The word or words will be highlighted in your results.
>>
>> > If you know where to search for your item, you can enter keywords ( **from**, **to**, **cc**, **subject**, etc.) followed by a colon (`:`) and search for the item in the search text box. For example, if you want to quickly find a sender, you can type "from:" and the email address you are looking for. Example: "from: address@example.com".
>>
>> ![Zimbra - simple search](images/zimbra-08.png){.thumbnail}
>>
> **Advanced search**
>>
>> For a more precise search, click the arrow symbol on the right-hand side of your search bar. You can then restrict your search to a folder, a time condition, the subject or body of the message, and much more.
>>
>> ![Zimbra - advanced search](images/zimbra-09.png){.thumbnail}
>>

### Write an email <a name="email-writing"></a>

To create a new email, click the `New Message`{.action} (1) button in the top left of your Zimbra window.

![Zimbra - write an email](images/zimbra-10.png){.thumbnail}

> [!tabs]
> **Header**
>>
>> The header allows you to fill in the following fields:
>>
>> - **From**: The address from which you send your email. By default, this is your account email address. You can change your sender address by clicking on the arrow to the right of your email address.
>> - **To**: The recipients of your email. Click `To`{.action} to access your contacts.
>> - **CC**: Click `CC/BCC`{.action} to the right of `To`{.action} to display this field. Carbon copy is a recipient field that allows you to send your email in copy to people you want to integrate into a loop, without them being considered as direct recipients of the email (unlike the recipients in the **To** field).<br>
>> - **BCC**: Click `CC/BCC`{.action} to the right of `To`{.action} to display this field. Blind carbon copy is a recipient field that allows an email to be sent without other recipients seeing the person or people in **BCC**.<br>
>> - **Subject**: Email title, the first item visible on reception before opening the email.<br>
>> - `...`{.action}: Located to the right of the `From`{.action} field, it gives you access to 3 options:<br>
>>    - You can make your email a priority by ticking `High priority`.<br>
>>    - Click `Request Read Receipt` to request a read receipt from the recipient.<br>
>>    - The `Plain Text` feature will disable the HTML layout features of your email.<br>
>>
>> ![Zimbra - header](images/zimbra-11.png){.thumbnail}
>>
> **Email body**
>>
>> To compose the body of your email, there is an HTML toolbar at the bottom of your window. This will allow you to edit your emails with layout, directly via your browser. In addition, the `< >`{.action} button (on the far right of your toolbar) opens a window where you can paste an email that has been prewritten using an external tool.
>>
>> ![Zimbra - body](images/zimbra-12.png){.thumbnail}
>>

After you have written your email, before you click `Send`{.action}, you can attach an attachment to it by clicking the paperclip icon next to the `Send`{.action} button.

![Zimbra - attachment](images/zimbra-13.png){.thumbnail}

> [!success]
> **Cancel a sending**
> 
> If you have enabled the `Undo send` option in the "**Write an email**" section of Zimbra preferences, you can click `UNDO`{.action} to cancel sending.
> This button will remain available for approximately 5 seconds.
>
> ![Zimbra - cancel a sending](images/zimbra-cancel-email.png){.thumbnail .w-400}

### Configure Zimbra interface preferences <a name="settings"></a>

Your Zimbra interface has 2 configuration menus:

![Zimbra - preferences](images/zimbra-14.png){.thumbnail}

- **(1) Profile**: Click on the name of your email account in the top right-hand corner of your interface. From this menu, you have the options "**Change password**", **Change Profile Image** and you can log out of the account by clicking on **Logout**.
- **(2) Settings**: Click on the cogwheel icon in the top right-hand corner of your interface to change the **Language** of your interface. In the **Help** section, you can read the official Zimbra documentation. In **Settings**, you will find all of the configuration elements described in the following tabs:

> [!tabs]
> **General**
>>
>> In this tab, you will find the space taken up by your email account, and the ability to set the format for displaying the date and time of your emails.
>>
> **Viewing Email**
>>
>> Here you can find information on how to display the items of your email account.
>>
>> - **When viewing message lists**: These options allow you to organize the list of your emails by conversation groups and display more details in preview.
>> - **Preview Pane**: Select one of the 3 layouts to view your folders and emails. This option includes the choices found on the `View`{.action} button when you view your emails.
>> - **Message list density**
>> - **Mark as read**: You can delay the status change of your email to "read" when you click on it, or leave it "unread" without any action on your part.
>> - **Check for new mail**: Define how often emails received from your Zimbra interface are synchronized.
>> - **Read receipts**: Set Zimbra's behavior when you open a delivery receipt email.
>> - **New mail notifications**: Enable notifications when a message is received.
>> - **Show images in emails**: Whether to automatically show images when you open an email or not.
>> - **View emails as plain text**: This option displays the email in a plain format, with no layout.
>> - **Show images by default in mail from these trusted addresses or domains**: Set the trusted email addresses for which the images can be automatically displayed.
>>
> **Writing Email**
>>
>> - **Undo send**: This option allows you to display a banner, for 5 seconds, allowing you to cancel sending an email.
>> - **Request read receipts**: This option sends a request for a read receipt to your recipients when you send them an email.
>> - **Save a copy to Sent folder**: By default, this option saves sent emails in the "Sent" folder of your email account.
>> - **Delegates**: Refer to the [Delegations](#delegations) section of this guide to learn how to use it.
>> - **Delegate send settings**: See the [Delegations](#delegations) section of this guide to learn how to use it.
>> - **Composer**: You can set your default format when you start writing an email.
>>
> **Signatures**
>>
>> This space allows you to create your signatures.<br>
>>
>> - **Standard signature**: Enter the signature that will appear when you write a new email.
>> - **Reply or forward signature**: Allows you to add a different signature when you reply to or relay an email.
>>
> **Out of Office**
>>
>> This tab refers to the “auto-reply” feature. To configure your automatic replies, please refer to the section "[Automatic Replies](#auto-reply)" of this documentation.
>>
> **Filters**
>>
>> To configure your filters, see the "[Filters](#filters)" section of this documentation.
>>
> **Calendar and reminders**
>>
>> Here, you can find the settings linked to your [calendars](#calendar).
>>
>> **General Calendar Settings**
>>
>> - **Default schedule**: Set the default calendar used when you create an event in your calendars.
>> - **Start of week**: The day that appears first in your calendar grid.
>> - **Start of day**: The time that appears at the top of the displayed time range.
>> - **End of day**: The time that appears at the bottom of the displayed time range.
>> - **Workday Time Zone** used for your calendars.
>> - **When creating or editing events**: Display time zones for start and end times.
>> - **Sharing**: `Enable delegation for CALDav clients`. This option allows you to manage your calendars through software that supports the CALdav protocol.
>> - **Declined Events**: Display an event in the calendar, even if it has been denied.
>>
>> **Event reminders**
>>
>> - **Send reminders via email to**: Send reminders of events to an email address.
>> - **Show browser notifications**: Receive notifications from your web browser regarding your events.
>> - **Default callback time**: Default callback time applied when you enable it on an event.
>> - **Show reminders for overdue events**: Continue sending reminders after an event.
>>
>> **Free Busy Permission**
>>
>> - **Permission for**: This setting only applies to the availability status linked to your email address calendars. This means that you can share your "Busy" or "Available" status with other email addresses.

### Contacts <a name="contacts"></a>

Click `Contacts` in the top bar to access the address book. It is divided into **3 parts**:

- **(1) Folders** (left): In the address book, you can create folders to organize and group contacts.
- **(2) Contact list** (center): View the contacts in the selected address book or folder.
- **(3) Contact Properties** or **New Contact** (right): This window appears when a contact is selected or is being created. You can read or modify a contact's information there.

![Zimbra - contacts](images/zimbra-15.png){.thumbnail}

To create a new contact, click the `New Contact`{.action} button at the top of the left-hand column.

Fill the fields with the information of your contact. You can add an image to it by clicking the profile icon in the upper right of the form.

Then click `Save`{.action}.

![Zimbra - new contact](images/zimbra-16.png){.thumbnail}

#### Manage contact folders <a name="contacts-folders"></a>

As with emails, special contact folders are automatically created by the email server.

- **Contacts**: Contacts are stored in this folder by default.
- **Trash**: Deleted contacts are stored in this folder before they are permanently deleted.
- **Emailed Contacts**: The contacts you have exchanged with are saved in this folder.

You can create folders and subfolders. They can be used to organize contacts into subsets. This makes it easier to find a contact in a folder you have created, rather than in your entire address book.

To create a folder, click the `+ Add a folder`{.action} button at the bottom of the left-hand column.

You can also create a subfolder by right-clicking the folder you want, and then clicking `Create Subfolder`{.action}. The "Emailed Contacts" and "Trash" folders cannot contain subfolders.

To move a contact to one of the folders, select the contact in the middle column and then, in the contact window that appears on the right, click the `Move`{.action} button. Then select the folder you want to assign to the contact.

![Zimbra - contact folders](images/zimbra-17.png){.thumbnail}

> [!primary]
>
> When you create a contact from a selected folder, the contact will be automatically added to that folder.

#### List management <a name="contacts-lists"></a>

You can associate a contact with one or more lists. Lists are used to group contacts, so emails can be sent to all of the list members. For example, to send an email to a large number of regular recipients, simply add the name of your list as a recipient, instead of adding the contacts in a list one by one.

To create a list, click in the box labeled `New List` at the bottom of the left-hand column and type a name for your list.

To assign a contact to one of your lists, select the contact in the middle column, and then in the window that appears on the right, click `Assign to Lists`{.action}. Select the list(s) you want to assign to the contact. Alternatively, enter a new list name and click `Add`{.action}.

![Zimbra - lists](images/zimbra-list.png){.thumbnail}

#### Import Contacts / Export Contacts <a name="import-export"></a>

Select one of the following two tabs:

> [!tabs]
> **Import Contacts**
>>
>> In the `Contacts` window, right-click on the contacts folder of your choice, with the exception of the "Email contacts" and "Trash" folders, which do not allow contacts to be imported and exported.<br>
>>
>> Then click `Import`{.action} to open the import window. With the `Browse...` button, you can retrieve the file containing your contacts in the formats .csv or .vcf. <br><br>
>> ![Zimbra - Import](images/zimbra-19.png){.thumbnail}
>>
> **Export Contacts**
>>
>> In the `Contacts` window, right-click on the contacts folder of your choice, with the exception of the "Email contacts" and "Trash" folders, which do not allow contacts to be imported and exported.
>>
>> Then click `Export`{.action} to open the export window. Select the file type you want to export, and then click `Export`{.action}.<br><br>
>> ![Zimbra - Export](images/zimbra-20.png){.thumbnail}
>>

### Calendar <a name="calendar"></a>

Click on the `Calendar` icon in the top bar to access the address book. It is divided into **3 parts**:

- **(1) List of calendars** (left): Manage your different calendars and sub-calendars.
- **(2) Calendar Content** (center): View the content of selected calendars and sub-calendars.
- **(3) Task List** (right): Manage your tasks and task lists.

![Zimbra - calendar](images/zimbra-calendar-view.png){.thumbnail}

#### Calendar management <a name="calendar-management"></a>

By default, in the `My Calendars` list, you have a `Calendar` created by default. This default calendar cannot be deleted, but you will see that you can create your own calendars in the next paragraph.

##### 1 - Create a calendar <a name="calendar-add-calendar"></a>

- **(1)**: To create a calendar, move your cursor over `My Calendars` in the left-hand column and click the `+` button. Enter a name and colour, then click `Save`{.action}.

You can also create sub-calendars.

- **(2)**: To create a sub-calendar, move your cursor over the calendar for which you want to create one, then right-click to display the drop-down menu. Click `Add sub-calendar`. Enter a name and colour, then click `Save`{.action}.

![Zimbra - calendar](images/zimbra-calendar-add.png){.thumbnail .w-400}

##### 2 - Add an event <a name="calendar-add-event"></a>

- **(1)**: Click on `New event`{.action} in the top left-hand corner.
- **(2)**: Click on the time condition of your calendar in which you want to add an event. For a simple addition, simply define a title for the event and a location then click `Save`{.action}. To add more details about your event, click `Add more details`{.action}.

![Zimbra - calendar](images/zimbra-calendar-event-add-01.png){.thumbnail .w-400}

- **Start**: The date and time your event starts. If you tick `All day`, you will not have to enter a start and end time because the whole day will be taken into account.
- **End**: The end date and time of your event.
- **Repeat**: If this is a recurring event, define the frequency.
- **Location**: The location where the event will take place, such as the name of a meeting room.
- **Equipment**: By clicking `Show equipment`{.action}, you can display this line to define a shared equipment that you will use for your event.
- **Guests**: The email addresses of the event participants.
- **Notes**: Message that will be sent to the event guests.
- **Remind**: Be notified before the event begins.
- **Show as**: Define if the event makes its guests available or unavailable during its progress.
- **Calendar**: Define the calendar associated with the event.

Once you have defined your event, click `Save`{.action}.

![Zimbra - calendar](images/zimbra-calendar-event-add-02.png){.thumbnail .w-400}

##### 3 - Edit an event <a name="calendar-modify-event"></a>

#### Tasks <a name="tasks"></a>

Tasks are items that are detached from your calendars. Their purpose is to list the tasks to be performed without attaching an execution date or a temporality to them. These tasks are complementary to calendars.

The "Tasks" list exists by default, it cannot be deleted, but you can create your own task lists.

- **(1)**: To create a task, click the `...`{.action} button, then `New task`{.action} or simply click the `+`{.action} button next to your task list.

- **(2)**: To create a new task list, click the `...`{.action} button, then click `Create List...`{.action}.

![Zimbra - calendar](images/zimbra-calendar-task-01.png){.thumbnail .w-400}

When you create a task, you can set a due date and priority so that you can rank them according to their importance, as well as a drop-down menu to select the corresponding task list.

Then click `Save`{.action} to finish creating your task.

![Zimbra - calendar](images/zimbra-calendar-task-02.png){.thumbnail .w-400}

### Filters <a name="filters"></a>

#### How to set filters <a name="filters-howto"></a>

Setting up filters on your email account is an important parameter that allows you to set up an automatic sorting system when your emails are received.

A filtering rule in Zimbra is made up of 4 elements:

1 - [Comparison field](#filters-comp-field): On which part of the email the filter will apply.<br>
2 - [Comparison operator](#filters-comp-operator): How precisely should the filter be applied.<br>
3 - [Value](#filters-value): Which words/elements of the email will be targeted by the filter.<br>
4 - [Filter Actions](#filters-action): What will the filter do on the email.<br>

![Zimbra - filters](images/zimbra-filters.png){.thumbnail}

> Example : If the **Subject (1)** field of the email **contains (2)** the word `invoice` **(3)**, then **Forward to (4)** `billing@example.com`.

In the following paragraphs, you will find the details of each of the elements of a filtering rule.

##### 1 - Comparison field <a name="filters-comp-field"></a>

The comparison field is the section of the email to check for the comparison operator. Comparison fields can include the following fields:

- **From**: Specify a sender in the “From” field of the email.
- **To**: Search for recipient names in the "To" field.
- **CC**: Search for copied recipient names in the “CC” field.
- **Subject**: Specify items in the subject of the email.
- **Header named**: When selected, an additional input field appears before the comparison operator. Use this field to enter any element of an email header. You can specify the standard fields "From", "To", "Subject", or other fields that may be present in the email header. For example, some email servers might add specific fields to the header that you can include in your filter rule, using this comparison field.
- **Body**: Refers to the words contained or not in the body of the email.

##### 2 - Comparison operator <a name="filters-comp-operator"></a>

Depending on the comparison field designated above, the comparison operator will determine the level of correspondence to be applied to the value.

> [!primary]
>
> The available comparison operators vary depending on the comparison field you have selected.

- **Matches exactly / Does not match exactly**: What you enter must match exactly.<br>
    *For example*, by indicating that the subject of the email corresponds exactly to “house”, the filter will only match with “house” and not with “houses” or “a blue house”.

- **Contains / Does not contain**: What you enter must be present in the field(s).<br>
    *For example*, by specifying that the subject of the email must contain “house”, the filter will match with “house”, “houses” and also “a blue house”.

- **Matches wildcard condition / Does not match wildcard condition**: Specifies that the subject must match the specified string, which includes wildcards.

- **Exists / Does not exist**: Specifies that the specified comparison field must exist or must not exist in the message. This comparison operator is used with the comparison fields named header.

> **Using wildcards in filters**
>
> Wildcards can be used in the input field for comparison using the comparison operator “**Matches wildcard condition / Does not match wildcard condition**”. The available wildcards are `*` and `?`.
>
> - The wildcard `*` is a placeholder for any number of characters of any type, including spaces.<br><br> For example, the search string “blue\*house” would return the matches “blue house”, “houses” or “blue wooden house”. However, it would not return "lightning blue house". <br><br> Another example: The search string "w\*house" would return the matches "white house" and "watch TV in your house". However, it would not return “watch TV in your house with a friend”.
>
> - The wildcard `?` is a placeholder for exactly one character.<br><br>For example, the search string “blue?house” would return the matches “blue house”, “blue-house” and “blue_house”.
>

##### 3 - Value <a name="filters-value"></a>

Once you have selected your field and comparison operator, you will need to enter the value they should match in the corresponding box.

##### 4 - Filter Actions <a name="filters-action"></a>

The `Then` field defines the action to be taken on the email that meets the filter conditions. Filter actions can include deleting, sorting, and even marking incoming mail.

- **Keep in the Inbox**: Saves emails to your inbox. If none of the filtering rules match an email, this action takes place by default.
- **Move to folder**: Moves the email to a specified folder.
- **Permanently delete**: Deletes the email message, not storing it in any of your folders including "Trash".
- **Forward To**: Forwards the email to the address you specify.
- **Mark as read**
- **Star**: Marks your email with a star.

#### Create a filter <a name="filters-creation"></a>

To create filters, click on the cogwheel icon in the top right-hand corner of your Zimbra interface, then click on `Settings`{.action}. Next, click on `Filters`{.action} in the left-hand column.

![Zimbra - create filter](images/zimbra-21.png){.thumbnail}

If filters exist, you will see the list in the order in which they are applied:

- **(1)** You can preview each filter by clicking the `...`{.action} button to the right of the filter and then clicking `Details`{.action}. The `Run`{.action} button launches the action set for this filter.

- **(2)** This button is used as a handle, allowing you to move the filter in the list to assign an order of application. Each filter is applied in the order that is defined in the list.

Click the `+ Add a filter`{.action} button to start creating it. The basic mode window appears by default. You can switch to advanced mode by clicking `Switch to advanced`{.action} to have all comparison operators. Find the details in the section “[How to set filters](#filters-howto)”.

> [!tabs]
> **Basic mode**
>>
>> ![Zimbra - filters - single mode](images/zimbra-22.png){.thumbnail}
>>
> **Advanced mode**
>>
>> ![Zimbra - filters - advanced mode](images/zimbra-23.png){.thumbnail}
>>

### Delegations <a name="delegations"></a>

To access the delegation setting, click on the cogwheel icon in the top right-hand corner of your Zimbra interface. Next, click on `Settings`{.action} and `Writing email`{.action} in the left-hand column.

You can delegate your email account to another email account. This requires both belonging to the same email service.

> [!primary]
>
> An email account with the same domain name but on another email solution cannot be delegated.

![email](images/zimbra-delegation.png){.thumbnail}

**(1) Delegates**: To delegate your email account to another account, click `Add Delegates`{.action}.

- **Send as**: The delegate can send an email with your email address, it will apear as if you had sent it yourself. The recipient will not see the delegate's email address.
- **Send on behalf of**: The delegate can send an email from their email address with your email address included as “on behalf of”. The recipient will then have a record of the two email addresses involved in the exchange.

**(2) Delegate send settings**: You have the following options when you delegate your email address to another email address.

- **Save sent messages to my Sent folder**: If the delegated account sends an email from your email address, this email will appear in your "Sent" folder.
- **Save sent messages to delegate's Sent folder**: If the delegated account sends an email from your email address, this email will appear in the delegate's "Sent" folder.
- **Save sent messages to my Sent folder and delegate's Sent folder**: If the delegated account sends an email from your email address, this email will appear in the "Sent" folders of both accounts.
- **Do not save sent messages**: If the delegated account sends an email from your email address, no copy will be saved.

### Signature <a name="signatures"></a>

Click on the cogwheel icon in the top right-hand corner of your Zimbra interface, then click on `Settings`{.action}. Next, click on `Signatures`{.action} in the left-hand column.

You can find the configuration details in the “[Configure Zimbra interface preferences](#settings)” section of this guide (click on the tab **Signatures**).

### Automatic Replies <a name="auto-reply"></a>

When you are absent without access to your email account, you can set up a message that will be used to automatically reply to emails. In Zimbra webmail, this feature is called “Out of Office”.

To manage your responder, click on the cogwheel icon in the top right-hand corner of your interface, then click on `Settings`{.action} and then on `Out of Office`{.action}.

By default, the `Enable automatic response during these dates (inclusive)` option is disabled. Tick this box to enable automatic replies. You can now enter the content of your absence message into the field.

- If you are not sure when you want to stop the automatic reply, select the `No end date` check box.
- The `Send sample copy to me`{.action} button will send you a preview of this automatic reply in your inbox.
- `External Senders`: You can define a different message when the sender is external to your domain name and/or address book. By default, all senders receive the same message.

## Go further

[Getting started with MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Changing an MX Plan email password](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Creating filters for your email addresses](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Using email aliases and redirections](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Join our community of users on <https://community.ovh.com/en/>.
