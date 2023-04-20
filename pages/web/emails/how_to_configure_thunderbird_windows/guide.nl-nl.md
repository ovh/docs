---
deprecated: true
title: 'OVH e-mail handleiding: Configuratie voor Thunderbird'
excerpt: ''
legacy_guide_number: g1297
updated: 2021-08-26
---


## Deel 1: Introductie
Ga eerst naar de "Thunderbird" applicatie, die geïnstalleerd is op uw computer.

Dit scherm zal standaard verschijnen, indien u geen e-mailadres hebt geconfigureerd. 

Om een nieuw e-mailaccount aan te maken, klik op de "E-mail" icon om verder te gaan.

![](images/img_1227.jpg){.thumbnail}


## Deel 2: Introductie (vervolg)
Om door te gaan met het installeren van de e-mailaccount, selecteert u "Deze stap overslaan en mijn bestaande e-mail gebruiken" om verder te gaan.

![](images/img_1228.jpg){.thumbnail}


## Deel 3: Het aanmaken van de account
Vul de weer te geven velden in:

"Uw voor- en achternaam": vul hier de naam in, zoals deze moet worden weergegeven.

"E-mail": uw volledige e-mailadres.

"Wachtwoord": het wachtwoord zoals geconfigureerd in uw [Manager](https://www.ovh.com/auth/?action=gotomanagerl).

"Wachtwoord onthouden": u moet deze optie kiezen.

Thunderbird haalt de e-mailadres instellingen op, en biedt twee mogelijke configuratie opties: IMAP/blue] of POP3.

In dit voorbeeld configureren we een IMAP-account. U vindt aan het eind van deze handleiding de instructies om een POP3 account te configureren.

Thunderbird kunt u ook handmatig configureren, u vindt de instructies in de paragraaf "Handmatige configuratie" van onze handleiding.

Klik op "beëindigen" om de installatie af te ronden.

![](images/img_1229.jpg){.thumbnail}


## Deel 4: Afronding
Op dit niveau wordt uw e-mailadres automatisch toegevoegd en functioneel.

Verderop in deze handleiding, zullen we de verschillende accountinstellingen zien.
Selecteer hiervoor "Instellingen voor deze account bekijken", na het klikken op het e-mailadres.

![](images/img_1230.jpg){.thumbnail}


## Accountinstellingen
Hier vindt u algemene informatie over uw e-mailaccount.

Hier kunt u een signature toevoegen aan uw e-mails, of een ander e-mailadres bepalen, waarop uw ontvangers kunnen reageren.

U kunt de SMTP-server die door de e-mailaccount wordt gebruikt, ook bekijken en bewerken.

![](images/img_1231.jpg){.thumbnail}


## Inkomende serverinstellingen
In dit scherm kunt u alle informatie over de inkomende mailserver vinden.

U kunt e-mail collectie tijden instellen, of regels voor het verwijderen van e-mails.

![](images/img_1232.jpg){.thumbnail}


## Kopieën & mappen
Op dit niveau vindt u de verschillende instellingen voor uw bestanden, archieven en het verzenden van berichten.

![](images/img_1233.jpg){.thumbnail}


## Synchronisatie en storage
Hier kunt u kiezen hoe u uw e-mail wilt synchroniseren en u kunt specificeren of uw berichten verwijderd moeten worden.

![](images/img_1234.jpg){.thumbnail}


## Uitgaande SMTP-server instellingen
Het is hier mogelijk om software toe te voegen of te wijzigen en te configureren op uw SMTP-servers.

![](images/img_1235.jpg){.thumbnail}


## Uitgaande SMTP-server instellingen: (vervolg)
U vindt hier verschillende in te stellen configuraties, die verschijnen na het selecteren van uw SMTP-server, klik op "Wijzigen".


- U moet de authenticatie van de uitgaande SMTP-server activeren.


Selecteer voor de authenticatie methode: standaard wachtwoord

![](images/img_1236.jpg){.thumbnail}

- De authentificatie door het Wachtwoord is onontbeerlijk, zodat de ontvangst van de e-mails kan functioneren op onze SMTP-servers.

- Als de authentificatie niet door het wachtwoord wordt uitgevoerd, kan een Open SMTP incident ticket worden geopend, dat u informeert dat de "POP voor SMTP"-authentificatie niet wordt ondersteund. U moet de authentificatie activeren door het Wachtwoord om de e-mails te kunnen ontvangen.




## Een account handmatig toevoegen
Hier is wat verschijnt na een klik op "Handmatige configuratie" (zie paragraaf 3).

U kunt de configuratie-instellingen van uw e-mailaccount bepalen.

![](images/img_1237.jpg){.thumbnail}


## POP-configuratie
Hier zijn de gegevens die gebruikt moeten worden om een POP e-mailaccount te configureren.

POP-configuratie met geactiveerde of gedeactiveerde SSL-beveiliging:

E-mailadres: uw volledige OVH e-mailadres.
Wachtwoord: het wachtwoord dat u moet instellen in [de Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).
Gebruikersnaam: uw volledige e-mailadres.
Inkomende server: de server voor het ontvangen van e-mails: SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 995 of 110
Uitgaande server: de server voor het verzenden van e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 110 en 587 overeenkomend met de SSL-beveiliging op gedeactiveerd.
De ports 995 en 465 overeenkomend met de SSL-beveiliging op geactiveerd.


- U moet [de authenticatie](#parametres_des_comptes_parametres_du_serveur_sortant_smtp) activeren van de uitgaande SMTP-server.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|995|110|
|Uitgaand|465|587|




## IMAP-configuratie
Hier zijn de gegevens die gebruikt moeten worden om een IMAP e-mailaccount te configureren.

IMAP-configuratie met SSL-beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres.
Wachtwoord: het wachtwoord dat u moet instellen in [de Manager](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).
Gebruikersnaam: uw volledige e-mailadres.
Inkomende server: de server voor het ontvangen van e-mails: SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 993 of 143
Uitgaande server: de server voor het verzenden van e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 143 en 587 overeenkomend met de SSL-beveiliging gedeactiveerd.
De ports 993 en 465 overeenkomend met de SSL-beveiliging geactiveerd.


- U moet [de authenticatie](#parametres_des_comptes_parametres_du_serveur_sortant_smtp) van de uitgaande SMTP-server activeren.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|993|143|
|Uitgaand|465|587|




## In het algemeen
Indien u dat wilt, kunnen wij zorgen voor het opzetten van de e-mailaccount van uw messaging-software via een betaalde interventie. OVH kan ook andere interventies uitvoeren in verband met uw e-mailadres.

U kunt deze handleiding over de verschillende interventies die OVH kan uitvoeren raadplegen via:

- []({legacy}1683)


Raadpleeg de bovenstaande handleiding om een interventie aan te vragen en voor de te volgen procedure.

![](images/img_2501.jpg){.thumbnail}

