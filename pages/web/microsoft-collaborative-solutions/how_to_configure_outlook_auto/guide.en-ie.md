---
title: Manually Configuring Outlook
excerpt: If you do not have the ability to set up the SRV field necessary for the automatic configuration of Outlook, follow this guide to configure Outlook manually
slug: manually_configuring_outlook
legacy_guide_number: g1358
---


## GUID Exchange Recovery
To manually configure your Outlook, you must first retrieve the GUID available in your area by clicking on "Configuration" to the right of the address to configure.

Add the following GUID "@your-domaine.com".

In our example this would be:
45c94143-1a29-4ef8-a990-06b54f9d6ad7@support-exchange.eu

![](images/img_1568.jpg){.thumbnail}


## Control Panel
The manipulations performed are performed on a workstation with the Windows operating system.

For starters, you should go in the Control Panel from your computer.

Remember to select "show small icons" to show icons "Mail" or "Mail (32-bit)"

Click on the "Mail" or "Mail (32-bit)" which is usually found at this location or under user accounts. Note that it is also possible to access it directly from Outlook.


Then click "Mail Accounts"

![](images/img_992.jpg){.thumbnail}


## Step 2: Adding new e-mail account
Click "New" to add a  Exchange email account.

![](images/img_1551.jpg){.thumbnail}


## Step 3: Mail Account
Select "Email Account" then click "Next".

![](images/img_994.jpg){.thumbnail}


## Step 4: Manual Account Setup
Check "Manual Setup or additional server types"

Then click "Next".

![](images/img_1552.jpg){.thumbnail}


## Step 5: Choose a service
Select "Microsoft Exchange Server or a service compatible"

Then click "Next".

![](images/img_1553.jpg){.thumbnail}


## Step 6: Server Settings
Server: In this field, enter the previously retrieved Exchange GUID, followed by "@your_domain".

 Username: fill in this field with your complete Exchange e-mail address.

Then click"More Settings ..."

![](images/img_1554.jpg){.thumbnail}


## Step 7: Exchange Proxy Settings
In the "Connection" tab, check "Connect to Microsoft Exchange using HTTP".

Then click "Exchange Proxy Settings".

![](images/img_1555.jpg){.thumbnail}


## Step 8: Connection Settings
In the "Use this URL to connect to my proxy server for Exchange", please type: "ex.mail.ovh.net"

Then select "Connect using SSL only" and "Only connect to proxy servers that includes the certificate principal name" type: "msstd:ex.mail.ovh.net"[/ blue]

Also check the boxes "On fast networks, connect using HTTP first, then connect using TCP/IP" and "On slow networks, connect using HTTP first, then connect using TCP/IP."

Finally, Click OK.

![](images/img_1556.jpg){.thumbnail}
Offers for "Private", replace the ex.mail.ovh.net the name of the SSL certificate for your server.


## Step 9: Authentication
A window opens to authenticate to the Exchange server, you must fill your full email address and password.

Do not forget to check "Remember this information".

Your account is now configured correctly: you can start your Outlook messaging software.

![](images/img_1557.jpg){.thumbnail}

