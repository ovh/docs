---
deprecated: true
title: Webhosting e-mail handleiding BlackBerry configuratie
excerpt: In deze handleiding wordt uitgelegd hoe u een e-mailaccount installeert op de BlackBerry
slug: webhosting_e-mail_handleiding_blackberry_configuratie
legacy_guide_number: g1381
---


## Deel 1: Instellingen
Klik eerst op het icon "Instellingen".

In ons voorbeeld is een OVH e-mailaccount geconfigureerd in IMAP[/ b] op een BlackBerry Z10 met OS in versie 10.20.429.

Zorg ervoor dat uw 3G of Wi-Fi actief is, wanneer u de account toevoegt.

![](images/img_1747.jpg){.thumbnail}


## Deel 2: Systeeminstellingen
Om door te gaan met het toevoegen van de webhosting e-mailaccount, selecteert u "Accounts".

![](images/img_1748.jpg){.thumbnail}


## Deel 3: Een account toevoegen
Selecteer nu "Account toevoegen" om een OVH e-mailaccount toe te voegen.

Hou er rekening mee dat men op dit niveau andere soorten vooraf geconfigureerde accounts vindt.

![](images/img_1749.jpg){.thumbnail}


## Deel 4: Voer het e-mail account en wachtwoord in
Voer uw volledige e-mailadres foutloos in.

Om verder te gaan met het instellen, klik op "Next".

![](images/img_1750.jpg){.thumbnail}
Voer het wachtwoord in, dat u heeft vastgesteld in uw [Manager](https://www.ovh.com/auth/?action=gotomanager) voor de OVH account.

Klik op "Volgende" om het wachtwoord te valideren.

![](images/img_1751.jpg){.thumbnail}
De applicatie zoekt naar inloggegevens. Een ogenblik geduld aub om met de volgende stap verder te gaan.

![](images/img_1752.jpg){.thumbnail}


## Deel 5: Instellingen van de e-mailaccount
Vul de gevraagde gegevens in:

Beschrijving: komt overeen met de naam van de account die wordt weergegeven in de telefoon.

Weergavenaam: De weergavenaam wordt gebruikt om berichten te verzenden.

Gebruikersnaam: uw gehele e-mail adres.

E-mail adres: uw gehele e-mail adres.

Wachtwoord: het wachtwoord zoals in uw [Manager](https://www.ovh.com/auth/?action=gotomanager)voor de OVH webhosting account.

Server adres: SSL0.OVH.NET

Port: 993

Encryptie: SSL

Prefix van het IMAP path: laat het veld leeg

SMTP Gebruikersnaam: uw gehele e-mail adres.

SMTP Wachtwoord: het wachtwoord zoals in uw[Manager](https://www.ovh.com/auth/?action=gotomanager)voor de OVH webhosting account.

SMTP Serveradres: SSL0.OVH.NET

SMTP Port: 465

SMTP Encryptie: SSL

Gebruik de Push functie indien ondersteund: te deactiveren, de push was niet beschikbaar op de webhosting e-mail.

Synchronisatie interval: u kunt de tijd vaststellen tussen 2 e-mail synchronisaties via de telefoon.

Bedrag van het eerste herstel: Dit is het aantal berichten dat aanvankelijk werd gesynchroniseerd met uw telefoon.

Om de gegevens te valideren, klik op "Voltooien".

![](images/img_1753.jpg){.thumbnail}
De applicatie zal uw instellingen registreren en controleren. Een ogenblik geduld svp, daarna kunt u naar de volgende stap gaan.

![](images/img_1754.jpg){.thumbnail}

- De Authenticatie met uw gebruikersnaam en wachtwoord voor de  SMTP-server [/ blue] is een onontbeerlijke parameter, zodat de verzending van e-mail kan werken op onze SMTP-servers.

- Als de authenticatie niet is geactiveerd, kan een Open SMTP incident ticket worden geopend om u te informeren dat de "POP voor SMTP" authenticatie niet wordt ondersteund. U moet de SMTP-server[/ blue] authenticatie activeren om e-mails te kunnen verzenden.




## Voltooiing
Uw account is nu correct ingesteld in uw telefoon!

U kunt het bewerken door het te selecteren in het menu (zie screenshot hieronder).

![](images/img_1755.jpg){.thumbnail}

## Weergave van e-mails
U moet "Hub" toevoegen om uw e-mails te bekijken.

![](images/img_1756.jpg){.thumbnail}


## POP-configuratie
Hier zijn de gegevens om te bewaren voor de configuratie van een POP e-mailaccount op BlackBerry.

POP configuratie met SSL beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw gehele OVH e-mailadres
Wachtwoord: het wachtwoord die u heeft vaastgesteld in [het control panel](https://www.ovh.com/auth/?action=gotomanager).
Gebruikersnaam: uw gehele OVH e-mailadres
Inkomende server:SSL0.OVH.NET
Inkomende server Port:995 of 110
Uitgaande server: de verzendende server voor e-mails: SSL0.OVH.NET
Uitgaande server Port:465 of 587

De ports 110 en 587 in het geval van gedeactiveerde SSL beveiliging.
De ports 995 en 465 in het geval van geactiveerde SSL beveiliging.


- U moet [de authentificatie](#configuration_du_compte_e-mail_mutualise_sous_blackberry_partie_5_parametres_du_compte_e-mail) activeren van de uitgaande SMTP-server.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|995|110|
|Uitgaand|465|587|




## IMAP-configuratie
Hier zijn de gegevens voor de configuratie van een IMAP e-mailaccount op BlackBerry.

IMAP configuratie met SSL beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw gehele OVH e-mailadres
Wachtwoord: het wachtwoord dat u heeft vastgesteld in [het control panel](https://www.ovh.com/auth/?action=gotomanager).
Gebruikersnaam: uw volledige e-mailadres 
Inkomende server:SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 993 of 143
Uitgaande server: de verzendende server voor e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 143 en 587 in het geval van gedeactiveerde SSL beveiliging.
De ports 993 en 465 komen overeen met de geactiveerde SSL beveiliging.


- U moet [de authentificatie](#configuration_du_compte_e-mail_mutualise_sous_blackberry_partie_5_parametres_du_compte_e-mail) van de uitgaande SMTP-server activeren.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|993|143|
|Uitgaand|465|587|



