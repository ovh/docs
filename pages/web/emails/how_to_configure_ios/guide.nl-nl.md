---
deprecated: true
title: Configuratie van uw e-mailadres op een iPhone of iPad
slug: mail-configuratie-ios-iphone-ipad
excerpt: Leer hoe u een MX Plan e-mailadres op een iPhone of iPad kunt configureren
section: Apple
updated: 2022-07-20
---

**Laatste update 23-02-2018**

## Introductie

De MX Plan-adressen kunnen worden geconfigureerd met compatibele e-mailsoftware.  Daardoor kunt u uw e-mailadres gebruiken via de e-mail-app van uw voorkeur.

**Leer hoe u een MX Plan e-mailadres op een iPhone of iPad kunt configureren.**

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVHcloud-webhosting](https://www.ovh.com/nl/shared-hosting/){.external}).
- Er moet een Mail-applicatie op uw apparaat zijn geïnstalleerd. 
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Deze handleiding is van toepassing op de iOS-versies: iOS7 en hoger. 
>

## Instructies

De toevoeging kan op twee verschillende manieren worden gedaan:

- **Met een paar klikken op de Apple Devices-tool**: ga naar <https://autodiscover.mail.ovh.net/AppleDevices/> en volg de verschillende configuratiestappen.

- **Door het volgen van de installatiewizard voor uw apparaat**.

Vanaf dit punt behandelt deze handleiding alleen de configuratie met de Mail-app.

### Stap 1: Voeg het account toe

Ga op het startscherm van uw apparaat naar `Instellingen`{.action}. Er zijn twee manieren om een account toe te voegen, afhankelijk van uw iOS-versie:

- **Voor iOS 7, 8, 9, en 10**: tik op `Mail, Contacten, Agenda`{.action} en dan op `Account toevoegen`{.action}. Kies vervolgens `Ander`{.action}, en op `Mail-account toevoegen`{.action};

- **Voor iOS 11**: Tik op `Accounts & wachtwoorden`{.action} en vervolgens op `Account toevoegen`{.action}. Kies vervolgens `Ander`{.action}, dan `Mail-account toevoegen`{.action}.

![Exchange](images/configuration-mail-ios-step1.png){.thumbnail}

Voer uw accountgegevens in:

|Informatie|Omschrijving|
|---|---|
|Naam|Voer de afzendernaam in die u wilt laten weergeven wanneer u e-mails vanaf dit adres verzendt.|
|E-mailadres|Voer het volledige e-mailadres in.|
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|
|Omschrijving|Voer de naam in waarmee u dit account kunt herkennen tussen andere die worden weergegeven in uw Mail-app.|

Tik nu op `Volgende`{.action} en vul vervolgens de gevraagde informatie in:

|Informatie|Omschrijving| 
|---|---| 
|IMAP of POP|We raden aan **IMAP** te gebruiken (standaard geselecteerd). U kunt ook **POP** (e-mails die lokaal zijn opgeslagen in uw Mail-app) selecteren in het vervolgkeuzemenu.|
|Hostnaam (inkomend)|Voer de ssl0.ovh.net-server in.|
|Gebruikersnaam (inkomend)|Voer het volledige e-mailadres in.|
|Wachtwoord (inkomend)|Voer het wachtwoord van het e-mailadres in.|  
|Hostnaam (uitgaand)|Voer de ssl0.ovh.net-server in.|
|Gebruikersnaam (uitgaand)|Voer het volledige e-mailadres in.|
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.| 

Tik nu op `Volgende`{.action}.  Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

![Exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Wanneer u applicaties kiest, moet u ervoor zorgen dat u `Mail`{.action} aangevinkt laat, zodat de applicatie dit account kan gebruiken, en klik vervolgens op `Opslaan`{.action}.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze MX Plan-oplossing moet gebruiken:

- **voor IMAP-configuratie**

|Soort server|Servicenaam|SSL|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|Ja|993|
|Uitgaand|ssl0.ovh.net|Ja|465|

- **voor POP-configuratie**

|Soort server|Servicenaam|SSL|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|Ja|995|
|Uitgaand|ssl0.ovh.net|Ja|465|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH heeft ook een web-app die u kunt gebruiken om vanuit uw browser toegang te krijgen tot uw e-mailaccount. U heeft toegang tot deze applicatie via het volgende adres: <https://www.ovh.nl/mail/>. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configuratie van uw E-mail Pro-account op een iPhone of iPad](https://docs.ovh.com/nl/emails-pro/configuratie-iphone-mail-app/){.external}.

[Configuratie van uw Exchange-account op een iPhone of iPad](https://docs.ovh.com/nl/microsoft-collaborative-solutions/exchange-automatische-configuratie-ios-iphone-ipad/){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.