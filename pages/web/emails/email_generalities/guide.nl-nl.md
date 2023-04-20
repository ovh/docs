---
deprecated: true
title: 'Webhosting: algemene informatie over OVH’s gedeelde e-mail'
excerpt: Algemene informatie over OVH's e-mail
legacy_guide_number: g1474
updated: 2021-07-19
---


## Windows

- [Windows 8](https://www.ovh.nl/hosting/guides/g1281.mail_mutualise_guide_configuration_sous_windows_8)

- [Windows Mail](https://www.ovh.nl/hosting/guides/g1300.mail_mutualise_guide_configuration_windows_mail)




## Apple

- [Mac e-mail](https://www.ovh.nl/hosting/guides/g1287.mail_mutualise_guide_configuration_mail_de_mac)

- [iPad iOS 7](https://www.ovh.nl/hosting/guides/g1348.mail_mutualise_guide_configuration_sous_ipad_ios_7)

[iPhone iOS 3](https://www.ovh.nl/hosting/guides/g1296.mail_mutualise_guide_configuration_iphone_ios_3)

- [iPhone iOS 9.1](https://www.ovh.nl/hosting/guides/g2004.mail_mutualise_guide_configuration_iphone_ios_91)




## Outlook
[Outlook 2007](https://www.ovh.nl/hosting/guides/g1298.mail_mutualise_guide_configuration_outlook_2007)


- [Outlook 2010](https://www.ovh.nl/hosting/guides/g1299.mail_mutualise_guide_configuration_outlook_2010)

- [Outlook 2013](https://www.ovh.nl/hosting/guides/g1286.mail_mutualise_guide_configuration_outlook_2013) (Video Guide)

- [Outlook 2011 op Mac](https://www.ovh.nl/hosting/guides/g1345.mail_mutualise_guide_configuration_outlook_2011_sur_mac)




## Overige
[Thunderbird op Windows](https://www.ovh.nl/hosting/guides/g1297.mail_mutualise_guide_de_configuration_pour_thunderbird)


- [Tablet op Android 4.1.2](https://www.ovh.nl/hosting/guides/g1283.mail_mutualise_guide_configuration_sous_tablette_android_412)




## Toegang
U kunt uw e-mails verzenden en ontvangen via onze webmail-interface:
[clicking here](https://ssl0.ovh.net/en/:).

Een webmail gebruikershandleiding is beschikbaar via:
[url=https://www.ovh.nl/hosting/guides/g1302.webmail_guide_utilisation_roundcube"]
deze link[/url]

![](images/img_2007.jpg){.thumbnail}


## IMAP-configuratie (aanbevolen)
Hier zijn de gegevens die moeten worden gebruikt voor het instellen van een IMAP e-mailaccount.

IMAP configuratie met de SSL-beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres.
Wachtwoord: het wachtwoord dat u heeft bepaald in [het control panel](https://www.ovh.com/manager/web/login.html).
Gebruikersnaam: uw volledige e-mailadres.
Inkomende server: de server voor het ontvangen van e-mails: SSL0.OVH.NET
Inkomende server port: de port van de ontvangende server: 993 of 143
Uitgaande server: de server voor het verzenden van de e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 143 en 587 komen overeen met de SSL-beveiliging gedeactiveerd.
De ports 993 en 465 komen overeen met de SSL-beveiliging geactiveerd.


- U moet de authentificatie activeren van de uitgaande SMTP-server.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|993|143|
|Uitgaand|465|587|




## POP-configuratie
Hier zijn de gegevens die moeten worden gebruikt voor het instellen van een POP e-mailaccount.

POP configuratie met SSL-beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres
Wachtwoord: het wachtwoord dat u heeft bepaald in [het control panel](https://www.ovh.com/manager/web/login.html/)
Gebruikersnaam: uw volledige e-mailadres
Inkomende server:  de server om e-mails te ontvangen: SSL0.OVH.NET
Inkomende server port:  de inkomende server port: 995 of 110
Uitgaande server: de server voor het verzenden van e-mail:  SSL0.OVH.NET [/ b]
 Uitgaande server port:  de uitgaande server port: 465 of 587

De ports 110 en 587 komen overeen met de SSL-beveiliging gedeactiveerd.
De ports 995 en 465 komen overeen met de SSL-beveiliging geactiveerd.


- U moet de authenticatie activeren van de uitgaande SMTP-server..


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|995|110|
|Uitgaand|465|587|




## Authenticatie herinnering
Het is noodzakelijk dat de uitgaande server wordt geauthenticeerd om zonder problemen e-mails te kunnen verzenden.

Zoniet, zou dit probleem kunnen optreden:


```
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```



- Zorg ervoor dat in uw e-mail client de SMTP-verificatie voor uitgaande berichten is geactiveerd.



