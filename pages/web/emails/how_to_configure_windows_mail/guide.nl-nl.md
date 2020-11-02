---
deprecated: true
title: 'OVH E-mail Handleiding: Configuratie van Windows Mail'
excerpt: ''
slug: ovh_e-mail_handleiding_configuratie_van_windows_mail
legacy_guide_number: g1300
---


## Deel 1: Het toevoegen van de e-mail account
Open Windows Mail en maak een nieuwe account aan. 

Vul de gevraagde informatie in en klik dan op "Volgende".

![](images/img_1268.jpg){.thumbnail}


## Deel 2: De e-mail account instellingen
In het scherm dat verschijnt, moet u de volgende gegevens invoeren: 

Mijn mail server voor inkomende e-mail is de server: POP3

Inkomende server: ns0.ovh.net
Port: 110

Login: uw volledige e-mailadres. 

Gegevens over de uitgaande server: ns0.ovh.net
Port : 587

Vink het volgende vakje aan: "Mijn uitgaande server vereist authenticatie"

U moet port 587 in SMTP gebruiken en dit vakje aanvinken voor verbinding met de uitgaande server.
Dit is de uitgaande port, geauthenticeerd voor alle ISP's. 

Klik op "Volgende" om te voltooien.

Uw e-mailaccount is nu correct ingesteld.

![](images/img_1269.jpg){.thumbnail}

- De Authenticatie voor de uitgaande server is een onontbeerlijke parameter, zodat het verzenden van e-mail kan functioneren op onze SMTP-servers.

- Indien authenticatie is geactiveerd, kan een Open SMTP incident ticket opengaan om u te informeren dat de "POP voor SMTP"-authenticatie niet wordt ondersteund. U moet de uitgaande server authenticatie activeren om e-mails te kunnen verzenden.




## POP-configuratie
Hier is de informatie die moet worden gebruikt voor het instellen van een POP e-mail account.

POP configuratie met de SSL beveiliginggeactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres
Wachtwoord: het wachtwoord dat u heeft bepaald in [het control panel](https://www.ovh.com/managerv3/).
Gebruikersnaam: uw volledige e-mailadres
Inkomende server: de server voor het ontvangen van de e-mails: SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 995 of 110
Uitgaande server: de server voor het verzenden van de e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 110 en 587 corresponderend met de SSL-beveiliging gedeactiveerd.
De ports 995 en 465 corresponderend met de SSL-beveiliging geactiveerd.


- U moet [de authenticatie](#configuration_de_windows_mail_partie_2_parametre_du_compte_e-mail) van de uitgaande SMTP-server activeren.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|995|110|
|Uitgaand|465|587|




## IMAP-configuratie
Hier is de informatie die moet worden gebruikt voor het instellen van een IMAP e-mailaccount.

IMAP configuratie met SSL-beveiliginggeactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres
Wachtwoord: het wachtwoord dat u heeft bepaald in [het control panel](https://www.ovh.com/managerv3/).
Gebruikersnaam: uw volledige e-mailadres
Inkomende server: de server voor het ontvangen van de e-mails: SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 993 of 143
Uitgaande server: de server voor het verzenden van de e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 143 en 587 corresponderend met de SSL beveiliging gedeactiveerd.
De ports 993 en 465 corresponderend met de SSL-beveiliging geactiveerd.


- U moet [de authenticatie](#configuration_de_windows_mail_partie_2_parametre_du_compte_e-mail) van de uitgaande SMTP-server activeren.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|993|143|
|Uitgaand|465|587|




## In het algemeen
Als u wilt, kunnen wij uw e-mailaccount op uw messaging software instellen via een betaalde interventie. OVH kan ook andere interventies uitvoeren op uw e-mailadres.

U kunt de volgende handleiding inzake de verschillende outsourcing interventies die OVH kan uitvoeren, raadplegen:


- []({legacy}1683)


Indien u een interventie wilt aanvragen, raadpleeg dan de bovenstaande handleiding voor de te volgen procedure.

![](images/img_2508.jpg){.thumbnail}

