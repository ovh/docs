---
title: 'Configuratie van uw e-mailadres op Mail van macOS'
slug: configuratie-mail-macos
excerpt: 'Leer hoe u een MX Plan-adres kunt configureren in Mail van macOS El Capitan, Sierra, en High Sierra'
section: Apple
---

**Laatste update 21-02-2018**

## Introductie

De MX Plan e-mailadressen kunnen worden geconfigureerd met compatibele e-mailsoftware.  Daardoor kunt u uw e-mailadres gebruiken via de e-mail-app van uw voorkeur.

**Leer hoe u een MX Plan e-mailadres kunt configureren in Mail van macOS El Capitan, Sierra, en High Sierra.**

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVH-webhosting](https://www.ovh.com/nl/shared-hosting){.external}).
- Er moet een Mail-applicatie op uw apparaat zijn geïnstalleerd. 
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Deze handleiding kan worden gebruikt voor de volgende macOS-versies: El Capitan, Sierra, High Sierra.
>

## Instructies

De toevoeging kan op twee verschillende manieren worden gedaan:

- **Met een paar klikken op de Apple Devices-tool**: ga naar [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external}, en volg de verschillende configuratiestappen.

- **Gebruik de Mail Configuration Assistant**: Start Mail op uw apparaat.

Vanaf dit punt behandelt deze handleiding alleen de configuratie met de Mail-app.

### Stap 1: Voeg het account toe

Nadat u de Mail-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de app voor de eerste keer opent**: er verschijnt een venster waarin van u wordt gevraagd een serviceprovider voor uw e-mailaccount te selecteren. Selecteer `Ander e-mailaccount`{.action}en ga verder.

- **Als u al een account hebt toegevoegd**: klik op `Mail`{.action} bovenaan uw scherm en vervolgens op `Account toevoegen`{.action}. Selecteer 'Ander e-mailaccount' en ga verder.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Voer uw accountgegevens in:

|Informatie|Omschrijving|
|---|---|
|Naam|Voer het volledige e-mailadres in.|
|E-mailadres|Voer het volledige e-mailadres in.|
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|

Klik dan op de knop `Inloggen`{.action}.  Er zal een bericht verschijnen om verder te gaan en meer gegevens in te voeren: 

|Informatie|Omschrijving|
|---|---|
|Soort account|We raden aan **IMAP** te gebruiken (standaard geselecteerd). U kunt ook **POP** (e-mails die lokaal zijn opgeslagen in uw Mail-app) selecteren in het vervolgkeuzemenu.|
|Inkomende server|Voer de ssl0.ovh.net server in.|
|Uitgaande server|Voer de ssl0.ovh.net server in.|

Klik dan op de knop `Inloggen`{.action}.  Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

![mxplan](images/configuration-mail-macos-step2.png){.thumbnail}

Wanneer u apps kiest, moet u ervoor zorgen dat u `Mail`{.action} aangevinkt laat, zodat de applicatie dit account kan gebruiken, en klik vervolgens op `Gereed`{.action}.

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

[Configuratie van E-mail Pro in macOS Mail](https://docs.ovh.com/nl/emails-pro/configureer-email-pro-macos-mail/){.external}.

[Configuratie van Exchange in macOS Mail](https://docs.ovh.com/nl/microsoft-collaborative-solutions/exchange-configuratie-mail-mac/){.external}.


Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.