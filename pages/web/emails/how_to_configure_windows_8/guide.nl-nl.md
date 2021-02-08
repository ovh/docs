---
deprecated: true
title: 'OVH e-mail handleiding: configuratie op Windows 8'
excerpt: ''
slug: ovh_e-mail_handleiding_configuratie_op_windows_8
legacy_guide_number: g1281
---


## Deel 1: Inleiding
Allereerst gaat u naar de "E-mail" applicatie op de Windows 8 homepage van uw computer. 

De eerste keer dat u inlogt, moet u een e-mailadres en het bijbehorende wachtwoord invoeren, op een andere dan de hier beschreven interface. 

Indien u al een bestaand account heeft, dan zal deze interface verschijnen.

Beweeg uw cursor naar rechts en selecteer "Instellingen".

![](images/img_1142.jpg){.thumbnail}


## Deel 2: Accounts
Klik op "Accounts" om uw nieuwe OVH e-mail account toe te voegen.

![](images/img_1143.jpg){.thumbnail}


## Deel 3: Een account toevoegen
We zien dat de e-mailadressen al beschikbaar zijn.

Zodra de e-mailaccount is toegevoegd, kunt u naar de account instellingen gaan via een klik op de e-mailaccount.

Klik op "Account toevoegen"  om verder te gaan.

![](images/img_1144.jpg){.thumbnail}


## Deel 4: Account type
U moet het e-mail account type selecteren dat u wilt toevoegen. 
Klik op "Andere account" om door te gaan.

![](images/img_1145.jpg){.thumbnail}


## Deel 5: Instellingen
In deze nieuwe interface, vult u het volgende veld in: 

"E-mailadres": het volledige OVH e-mailadres. 

"Wachtwoord": het wachtwoord vastgesteld in [de manager](https://www.ovh.com/auth/?action=gotomanagerl) voor deze e-mailaccount.

Klik op "Verbinden" om verder te gaan.

![](images/img_1146.jpg){.thumbnail}


## Deel 6: Geavanceerde instellingen
In deze interface, vult u de volgende velden in: 

"E-mailadres": het volledige OVH e-mailadres.

"Gebruikersnaam": u moet uw volledige e-mailadres invoeren.

"Wachtwoord": het wachtwoord vastgesteld in [de manager](https://www.ovh.com/managerv3) voor deze e-mailaccount.

"Inkomende mail server (IMAP)":
Het server adres is ssl0.ovh.net.
De "Port" is 993.

"De inkomende server vereist SSL": dit moet worden aangevinkt.

"Uitgaande Mail Server(SMTP)":
Het server adres is ssl0.ovh.net.
De "Port" is 465.

"De uitgaande server vereist SSL": dit moet worden aangevinkt.

"De uitgaande server vereist verificatie": dit moet worden aangevinkt.

"Gebruik dezelfde gebruikersnaam en wachtwoord om elektronische berichten te verzenden en te ontvangen": dit moet worden aangevinkt.

Klik op "Verbinden" om verder te gaan.

![](images/img_1147.jpg){.thumbnail}

- De Authenticatie voor de uitgaande server is een onontbeerlijke parameter, zodat de verzending van e-mail kan functioneren op onze SMTP-servers.

- Als de Authenticatie niet is geactiveerd, kan een incident ticket Open SMTP[/ blue] opengaan om u te informeren dat de "POP voor SMTP" authenticatie niet wordt ondersteund. U moet de authenticatie van de uitgaande server activeren om e-mails te verzenden.




## Deel 7: afronding
Uw e-mailaccount is nu correct geconfigureerd voor IMAP.

Hier is de gebruikersinterface voor e-mail.

Men ziet rechts de accountinstellingen voor de bij OVH gehoste e-mailaccounts, ([Zie deel 3 van deze handleiding](#configuration_protocole_imap_partie_3_ajouter_un_compte)).

![](images/img_1148.jpg){.thumbnail}


## POP configuratie
Hier zijn de gegevens die moeten worden gebruikt voor het configureren van een POP e-mailaccount.

POP configuratie met SSL beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres 
Wachtwoord: het wachtwoord dat u heeft bepaald in[het control panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).
Gebruikersnaam: uw volledige e-mailadres
Inkomende server: de server voor het ontvangen van e-mails: SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 995 of 110
Uitgaande server: de server voor het verzenden van e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 110 en 587 overeenkomend met de SSL beveiliging gedeactiveerd.
De ports 995 en 465 overeenkomend met de SSL beveiliging geactiveerd.


- U moet [de authenticatie](#configuration_protocole_imap_partie_6_parametres_avances) activeren van de uitgaande SMTP server.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|995|110|
|Uitgaand|465|587|




## IMAP configuratie
Hier zijn de gegevens die moeten worden gebruikt voor het configureren van een IMAP e-mailaccount.

IMAP configuratie met SSL beveiliging geactiveerd of gedeactiveerd:

E-mailadres: uw volledige e-mailadres 
Wachtwoord: het wachtwoord dat u heeft bepaald in[het control panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl).
Gebruikersnaam: uw volledige e-mailadres
Inkomende server: de server voor het ontvangen van e-mails: SSL0.OVH.NET
Inkomende server port: de port van de inkomende server: 993 of 143
Uitgaande server: de server voor het verzenden van e-mails: SSL0.OVH.NET
Uitgaande server port: de port van de uitgaande server: 465 of 587

De ports 143 en 587 overeenkomend met de SSL beveiliging gedeactiveerd.
De ports 993 en 465 overeenkomend met de SSL beveiliging geactiveerd.


- U moet [de authenticatie](#configuration_protocole_imap_partie_6_parametres_avances) activeren van de uitgaande SMTP server.


|Ports|SSLgeactiveerd|SSLgedeactiveerd|
|Inkomend|993|143|
|Uitgaand|465|587|




## In het algemeen
Als u wilt, kunnen wij de e-mailaccount instellen van uw messaging-software via een interventie die in rekening wordt gebracht. OVH kan ook andere interventies uitvoeren in verband met uw e-mailadres.

U kunt deze handleiding over de verschillende soorten outsourcing vinden via:

- []({legacy}1683)


Zie de bovenstaande handleiding voor de te volgen procedure als u een interventie aan wilt vragen.

![](images/img_2500.jpg){.thumbnail}

