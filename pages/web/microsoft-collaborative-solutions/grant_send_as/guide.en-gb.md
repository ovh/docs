---
title: 'Exchange 2013: How to grant Send As permissions'
slug: exchange_2013_how_to_grant_send_as_permissions
section: Advanced Configuration
---


## Step 1: Set up Send As permissions
These steps must be carried out via the [Web Control Panel](https://www.ovh.com/manager/web/login.html).

Once logged in, select your Exchange service by clicking on it in the left-hand column under "Platforms".  

Click on the "Email accounts" tab, then click  "More actions" icon on the far right (three blue dots).

Then select "Manage delegations".

![](images/img_1208.jpg){.thumbnail}


## Step 2: Set up Send As permissions
The delegation configuration window will open. Here, you can select an email account and grant sending and access permissions.

Simply tick the boxes and then click "Next".

![](images/img_1209.jpg){.thumbnail}


## Step 3: Set up Send As permissions
A summary of the delegations will appear in the window. Here you need to confirm your selection.

It may take a few moments for the delegations to be applied.

Click on "Confirm".

![](images/img_1063.jpg){.thumbnail}


## Step 1: Configuration in OWA
You can check in [OWA](https://ex.mail.ovh.net/owa) that you can now send an email as another account, e.g. "test@design-tk.fr" as "config@design-tk.fr".

Click on "+ new mail" and then click the "..." icon to the right of "Insert" in order to display the "From" field. 

Click on "From" and right-click the existing address to remove it. You can then enter the second address manually.

It will now be saved automatically.

![](images/img_1325.jpg){.thumbnail}


## Step 2: Configuration in OWA
The email has successfully been received on the behalf of "config".

![](images/img_1032.jpg){.thumbnail}


## Possible error
This error message may appear if the Send As permissions have not been configured:

![](images/img_1033.jpg){.thumbnail}

