---
title: 'Web hosting: An overview of OVH email'
excerpt: An overview of OVH email
slug: web_hosting_an_overview_of_ovh_email
section: Getting Started
---


## Windows

- [Windows 8](https://www.ovh.co.uk/fr/hosting/guides/g1281.mail_mutualise_guide_configuration_sous_windows_8)

- [Windows Mail](https://www.ovh.co.uk/fr/hosting/guides/g1300.mail_mutualise_guide_configuration_windows_mail)




## Apple

- [Mac email](https://www.ovh.co.uk/fr/hosting/guides/g1287.mail_mutualise_guide_configuration_mail_de_mac)

- [iPad iOS 7](https://www.ovh.co.uk/hosting/guides/g1348.mail_mutualise_guide_configuration_sous_ipad_ios_7)

- [iPhone iOS 3](https://www.ovh.co.uk/fr/hosting/guides/g1296.mail_mutualise_guide_configuration_iphone_ios_3)

- [iPhone iOS 9.1](https://www.ovh.co.uk/fr/hosting/guides/g2004.mail_mutualise_guide_configuration_iphone_ios_91)




## Outlook

- [Outlook 2007](https://www.ovh.co.uk/fr/hosting/guides/g1298.mail_mutualise_guide_configuration_outlook_2007)

- [Outlook 2010](https://www.ovh.co.uk/fr/hosting/guides/g1299.mail_mutualise_guide_configuration_outlook_2010)

- [Outlook 2013](https://www.ovh.co.uk/fr/hosting/guides/g1286.mail_mutualise_guide_configuration_outlook_2013) (Video Guide)

- [Outlook 2011 on Mac](https://www.ovh.co.uk/fr/hosting/guides/g1345.mail_mutualise_guide_configuration_outlook_2011_sur_mac)




## Other

- [Thunderbird on Windows](https://www.ovh.co.uk/fr/hosting/guides/g1297.mail_mutualise_guide_de_configuration_pour_thunderbird)

- [Tablet on Android 4.1.2](https://www.ovh.co.uk/fr/hosting/guides/g1283.mail_mutualise_guide_configuration_sous_tablette_android_412)




## Access
You can send and receive emails via our Webmail by [clicking here](https://ssl0.ovh.net/en/:).

Access a guide on how to use Webmail [here](https://www.ovh.co.uk/fr/hosting/guides/g1302.webmail_guide_utilisation_roundcube).

![](images/img_2007.jpg)




## IMAP configuration (Recommended)
Here is the information you need to enter to set up an IMAP email account.

Configure IMAP with SSL security enabled or disabled:

|Option|Value|
|---|---|
|Email address|Your full email address.|
|Password|The password you set in the [Control Panel](https://www.ovh.com/manager/web/login.html).|
|User name|Your full OVH email address.|
|Incoming server|ssl0.ovh.net|
|Incoming server port|993 or 143|
|Outgoing server|ssl0.ovh.net|
|Outgoing server port|465 or 587|
|Outgoing server requires authentication|Yes|

Ports 143 and 587 correspond to a disabled SSL Security.

Ports 993 and 465 correspond to enabled SSL security. 

|Ports|SSL enabled|SSL disabled|
|---|---|---|
|Incoming|993|143|
|Outgoing|465|587|




## POP configuration
Here is the information you need to enter to set up a POP email account.

Configure POP with SSL security enabled or disabled: 

|Option|Value|
|---|---|
|Email address|Your full email address.|
|Password|The password you set in the [Control Panel](https://www.ovh.com/manager/web/login.html).|
|User name|Your full OVH email address.|
|Incoming server|ssl0.ovh.net|
|Incoming server port|995 or 110|
|Outgoing server|ssl0.ovh.net|
|Outgoing server port|465 or 587|
|Outgoing server requires authentication|Yes|


Ports 110 and 587 correspond to a disabled SSL Security.

Ports 995 and 465 correspond to an enabled SSL Security.

|Ports|SSL enabled|SSLdisabled|
|---|---|---|
|Incoming|995|110|
|Outgoing|465|587|




## Reminder on authentication
The outgoing server must be authenticated so that you can send emails without any issues.

Otherwise, this error may occur:


```
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```



Make sure that SMTP authentication for outgoing messages is enabled in your email client.