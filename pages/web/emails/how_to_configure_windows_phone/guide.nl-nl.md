---
deprecated: true
title: Webhosting e-mail handleiding configuratie voor Windows Phone
excerpt: In deze handleiding wordt de configuratie van de webhosting e-mail account van uw Windows Phone beschreven
slug: webhosting_e-mail_handleiding_configuratie_voor_windows_phone
legacy_guide_number: g1346
---


## Deel 1: Instellingen
Klik op "Instellingen".

In ons voorbeeld, wordt een webhosting e-mailaccount geconfigureerd in POP[/ b] op een Nokia Lumia 625 met Windows Phone 8.0.

Zorg ervoor dat uw 3G of Wi-Fi actief is, wanneer u de account toevoegt.

![](images/img_1501.jpg){.thumbnail}


## Deel 2: Systeem
Selecteer "e-mail + accounts" om door te gaan met de webhosting e-mailaccount.

![](images/img_1502.jpg){.thumbnail}


## Deel 3: Een account toevoegen
Selecteer nu "account toevoegen" om een OVH webhosting e-mailaccount toe te voegen.

![](images/img_1503.jpg){.thumbnail}


## Deel 4: Account type
Selecteer "andere account" om een POP of IMAP account type toe te voegen.

![](images/img_1504.jpg){.thumbnail}


## Deel 5: Configuratie van een account
Voer uw volledige e-mailadres in het eerste veld in.

Vul vervolgens het wachtwoord in, vastgesteld via uw  [Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl) voor de OVH account.

Nadat u "verbinding" heeft geselecteerd zal er een waarschuwing verschijnen.

Selecteer, om door te gaan met de configuratie van de account, "geavanceerd".

![](images/img_1505.jpg){.thumbnail}


## Deel 6: Geavanceerde configuratie
Om toegang te krijgen tot de geavanceerde instellingen van de e-mailaccount en door te gaan met de configuratie van de account in POP of IMAP, selecteer "E-mail op het internet".

![](images/img_1506.jpg){.thumbnail}


## Deel 7: Instellingen van het e-mailaccount
Voer de gevraagde gegevens in:

Naam van de account: komt overeen met de weergavenaam van de account in de telefoon.

Uw naam: de weergavenaam gebruikt om de berichten te verzenden.

Ingaande mailserver: SSL0.OVH.NET

Account type: POP3 (u kunt ook IMAP configureren, gebruik in dat geval de informatie aan het einde van deze handleiding).

Gebruikersnaam: uw volledige e-mailadres./i]

Wachtwoord: het wachtwoord zoals vastgesteld via uw[Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl)voor de OVH webhosting account.

Uitgaande mailserver(SMTP): SSL0.OVH.NET

U moet aanvinken: "De uitgaande mailserver vereist verificatie" en "Gebruik dezelfde gebruikersnaam en wachtwoord voor het verzenden van e-mails"

Klik op "Inloggen" om verder te gaan.

![](images/img_2401.jpg){.thumbnail}

- De Authenticatie voor de uitgaande server is onontbeerlijk, zodat de verzending van e-mail kan functioneren op onze SMTP-servers.

- Indien de authentificatie niet is geactiveerd, kan een Open SMTP incident ticket worden geopend met de melding dat de "POP voor SMTP"-authenticatie niet wordt ondersteund. U moet de Uitgaande server authenticatie activeren om e-mails te verzenden.




## Deel 8: Afronding
Uw e-mailaccount is nu correct geconfigureerd en wordt weergegeven in het schermpje van uw telefoon.

![](images/img_1508.jpg){.thumbnail}


## Toegang tot de e-mails
Uw e-mails zijn nu toegankelijk vanaf de homepage van uw mobiele telefoon.

![](images/img_1509.jpg){.thumbnail}


## POP-configuratie
Hier zijn de gegevens die moeten worden gebruikt voor de configuratie van een POP e-mailaccount.

POP-configuratie met geactiveerde of gedeactiveerde SSL-beveiliging:

E-mailadres: uw volledige e-mailadres
Wachtwoord: het wachtwoord dat u heeft ingesteld in [de Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).
Gebruikersnaam: uw volledige e-mailadres
Inkomende server:SSL0.OVH.NET
Inkomende server port:995 of 110
Uitgaande server: de server om e-mails te verzenden: SSL0.OVH.NET
Uitgaande server port:465 of 587

De ports 110 en 587 zijn voor het inloggen zonder SSL-beveiliging.
De ports 995 en 465 zijn voor het inloggen met de SSL-beveiliging geactiveerd.


- U moet [de authentificatie](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) van de uitgaande SMTP-server activeren.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|995|110|
|Uitgaand|465|587|




## IMAP-configuratie
Hier zijn de gegevens die moeten worden gebruikt voor de configuratie van een IMAP e-mailaccount.

IMAP-configuratie met de SSL-beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres
Wachtwoord: het wachtwoord dat u heeft ingesteld in [url="https://www.ovh.com/auth/?action=gotomanager"][blue]uw Manager[/blue][/url].
Gebruikersnaam: uw volledige e-mailadres
Inkomende server:SSL0.OVH.NET
Inkomende server port:993 of 143
Uitgaande server: de server om e-mails te verzenden: SSL0.OVH.NET
Uitgaande server port:465 of 587

De ports 143 en 587 zijn voor het inloggen zonder SSL-beveiliging.
De ports 993 en 465 zijn voor het inloggen met SSL-beveiliging.


- U moet [de authentificatie](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) van de uitgaande SMTP-server activeren.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|993|143|
|Uitgaand|465|587|



