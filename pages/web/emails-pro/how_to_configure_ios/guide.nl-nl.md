---
deprecated: true
title: Configuratie van uw E-mail Pro-account op een iPhone of iPad
slug: configuratie-iphone-mail-app
excerpt: Leer hoe u een E-mail Pro-account kunt configureren op een iPhone of iPad, via de Mail-app
section: Configuratie van een e-mailclient
order: 3
updated: 2021-05-21
---

**Laatste update 16-02-2018**

## Introductie

De E-mail Pro-accounts kunnen worden geconfigureerd met compatibele e-mailsoftware.  Hiermee kunt u uw e-mail gebruiken met een applicatie van uw keuze.

Leer hoe u een E-mail Pro-account kunt configureren op een iPhone of iPad, via de Mail-app.

## Vereisten

- U moet beschikken over [E-mail Pro](https://www.ovhcloud.com/nl/emails/email-pro/){.external}.
- Er moet een Mail-applicatie op uw apparaat zijn geïnstalleerd.
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Deze handleiding is van toepassing op de iOS-versies: iOS7 en hoger. 
>

## Instructies

De toevoeging kan op twee verschillende manieren worden gedaan:

- **Met een paar klikken op de Apple Devices-tool**: ga naar <https://autodiscover.mail.ovh.net/AppleDevices/>, en zet de verschillende configuratiestappen.

- **Door het volgen van de installatiewizard voor uw apparaat**.

Vanaf dit punt behandelt deze handleiding alleen de e-mailconfiguratie vanaf uw apparaat.

### Stap 1: Voeg het account toe

Ga op het startscherm van uw apparaat naar `Instellingen`{.action}. Er zijn twee manieren om een account toe te voegen, afhankelijk van uw versie van iOS:

- **Voor iOS 7, 8, 9, en 10**: tik op `Mail, Contacten, Agenda`{.action} en dan op `Account toevoegen`{.action}. Kies vervolgens `Ander`{.action}, en op `Mailaccount toevoegen`{.action};

- **Voor iOS 11**: Tik op `Accounts & wachtwoorden`{.action} en vervolgens op `Account toevoegen`{.action}. Kies vervolgens `Ander`{.action}, en op `Mailaccount toevoegen`{.action};

![emailpro](images/configuration-mail-ios-step1.png){.thumbnail}

Voer uw accountgegevens in:

|Informatie|Omschrijving|
|---|---|
|Naam|Voer de afzendernaam in die u wilt laten weergeven wanneer u e-mails vanaf dit adres verzendt.|
|E-mailadres|Voer het volledige e-mailadres in. |
|Wachtwoord|Voer het wachtwoord van het e-mailadres in. |
|Omschrijving|Voer de naam in waarmee u dit account kunt herkennen tussen andere die worden weergegeven in uw Mail-app.|

Tik nu op `Volgende`{.action} en vul vervolgens de gevraagde informatie in:

|Informatie|Omschrijving|
|---|---|
|IMAP of POP|Laat **IMAP** standaard geselecteerd staan.|
|Hostnaam (inkomend)|Voer de pro1.mail.ovh.net server in.|
|Gebruikersnaam (inkomend)|Voer het volledige e-mailadres in. |
|Wachtwoord (inkomend)|Voer het wachtwoord van het e-mailadres in.|  
|Hostnaam (uitgaand)|Voer de pro1.mail.ovh.net server in.|
|Gebruikersnaam (uitgaand)|Voer het volledige e-mailadres in. |
|Wachtwoord (uitgaand)|Voer het wachtwoord van het e-mailadres in.|

Tik nu op `Volgende`{.action}.  Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

![emailpro](images/configuration-mail-ios-step2.png){.thumbnail}

Wanneer u applicaties kiest, moet u ervoor zorgen dat u `Mail`{.action} aangevinkt laat, zodat de applicatie dit account kan gebruiken, en klik vervolgens op `Opslaan`{.action}.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze E-mail Pro-oplossing moet gebruiken:

|Soort server|Servernaam|SSL|Poort|
|---|---|---|---|
|Inkomend|pro1.mail.ovh.net|Ja|993|
|Uitgaand|pro1.mail.ovh.net|Ja|587|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH biedt een webapplicatie met [teamwerk-functies](https://www.ovh.com/nl/emails/){.external} die toegankelijk zijn via [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configuratie van het e-mailadres dat is opgenomen in MX Plan of in een webhostingsplan op een iPhone of iPad](https://docs.ovh.com/nl/emails/mail-configuratie-ios-iphone-ipad/){.external}.

[Configuratie van uw Exchange-account op een iPhone of iPad](https://docs.ovh.com/nl/microsoft-collaborative-solutions/exchange-automatische-configuratie-ios-iphone-ipad/){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.