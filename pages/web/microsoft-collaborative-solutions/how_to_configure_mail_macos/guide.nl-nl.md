---
deprecated: true
title: Configuratie van Exchange in macOS Mail
slug: exchange-configuratie-mail-mac
excerpt: Ontdek hoe u uw Exchange-account kunt configureren in Mail van macOS El Capitan, Sierra en High Sierra
section: Configuratie van een e-mailclient
updated: 2021-12-28
---

**Laatste update 21-02-2018**

## Introductie

De Exchange-accounts kunnen worden geconfigureerd met compatibele e-mailsoftware. Door dit te doen, kunt u uw e-mailadres gebruiken met uw voorkeursapplicatie en profiteren van Exchange-teamwerkfuncties.

**Ontdek hoe u uw Exchange-account kunt configureren in Mail van macOS El Capitan, Sierra en High Sierra.**

## Vereisten

- U moet beschikken over [Exchange](https://www.ovh.com/nl/emails/){.external}.
- Er moet een Mail-applicatie op uw apparaat zijn geïnstalleerd. 
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> In deze handleiding wordt beschreven hoe u Exchange-accounts kunt configureren voor de volgende versies van macOS: El Capitan, Sierra, High Sierra.
>

## Instructies

De toevoeging kan op twee verschillende manieren worden gedaan:

- **Met een paar klikken op de Apple Devices-tool**: ga naar <https://autodiscover.mail.ovh.net/AppleDevices/>, en zet de verschillende configuratiestappen.

- **Gebruik de Mail Configuration Assistant**: Start Mail op uw apparaat.

Vanaf dit punt behandelt deze handleiding alleen de configuratie met de Mail-app.

### Stap 1: Voeg het account toe

Nadat u de Mail-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de app voor de eerste keer opent**: er verschijnt een venster waarin u wordt gevraagd een serviceprovider voor uw e-mailaccount te selecteren. Selecteer `Exchange`{.action} en ga verder. 

- **Als u al een account hebt toegevoegd**: klik op `Mail`{.action} bovenaan uw scherm en vervolgens op `Account toevoegen`{.action}. Selecteer `Exchange`{.action} en ga verder. 

![Exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Voer uw accountgegevens in:

|Informatie|Omschrijving| 
|---|---| 
|Naam|Voer de afzendernaam in die u wilt laten weergeven wanneer u e-mails vanaf dit adres verzendt.|
|E-mailadres|Voer het volledige e-mailadres in.|
|Wachtwoord|Voer het wachtwoord van het e-mailadres in.|  

Klik dan op de knop `Inloggen`{.action}.  Als de informatie die u hebt ingevoerd juist is en uw domeinnaam correct is geconfigureerd op uw Exchange, dan is uw account verbonden. 

![Exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Wanneer u apps kiest, moet u ervoor zorgen dat u `Mail`{.action} aangevinkt laat, zodat de app dit account kan gebruiken, en klikt u vervolgens op Gereed. Andere apps kunnen bepaalde teamwerkfuncties van Exchange gebruiken. Nadat u alle apps die u wilt gebruiken bij uw account hebt aangevinkt, klikt u op `Gereed`{.action}.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

![Exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Als u problemen ondervindt bij het inloggen op uw account, dan raden we het volgende aan:

- Controleer de configuratie van de domeinnaam op uw Exchange in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, op het tabblad `Gekoppelde domeinen`{.action} en vervolgens in de kolom `Diagnostiek`{.action} van de tabel.

- Probeer om de verbindings-URL in te voeren voor uw Exchange. Negeer de certificaatbeveiligingswaarschuwing en voer de verbindings-URL in, vul vervolgens de `interne URL`{.action} en de `externe URL`{.action} in met de details van uw Exchange-server.

Voor het verkrijgen van de benodigde servergegevens logt u in op uw OVH Control Panel en gaat u naar de betreffende Exchange-dienst. Ga vervolgens naar het tabblad `Algemene informatie`{.action} en zoek de server in het gedeelte `Inloggen`{.action}.

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH biedt een webapplicatie met [teamwerk-functies](https://www.ovh.com/nl/emails/){.external} die toegankelijk zijn via [https://www.ovh.nl/mail/](https://www.ovh.nl/mail/){.external}. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configureer het e-mailadres dat is opgenomen in MX Plan of in een webhostingsplan in macOS Mail](https://docs.ovh.com/nl/emails/configuratie-mail-macos/){.external}.

[Configuratie van E-mail Pro in macOS Mail](https://docs.ovh.com/nl/emails-pro/configureer-email-pro-macos-mail/){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.