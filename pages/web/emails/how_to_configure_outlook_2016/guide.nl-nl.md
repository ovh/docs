---
deprecated: true
title: Configuratie van uw e-mailadres in Outlook 2016 voor Windows
slug: configuratie-outlook-2016
excerpt: Ontdek hoe u uw MX Plan-e-mailadres kunt configureren in Outlook 2016 voor Windows
section: Outlook
updated: 2021-06-05
---

**Laatste update 22-03-2018**

## Introductie

De MX Plan-adressen kunnen worden geconfigureerd met compatibele e-mailsoftware.  Daardoor kunt u uw e-mailadres gebruiken via de e-mail-app van uw voorkeur.

**Ontdek hoe u uw MX Plan-e-mailadres kunt configureren in Outlook 2016 voor Windows.**

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVHcloud-webhosting](https://www.ovhcloud.com/nl/web-hosting/){.external}).
- U moet Microsoft Outlook 2016 op uw apparaat hebben geïnstalleerd.
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Gebruikt u Outlook 2016 voor Mac? Raadpleeg onze handleidingen: [Configuratie van een e-mailadres in Outlook 2016 voor Mac](https://docs.ovh.com/nl/emails/configuratie-outlook-2016-mac/){.external}.
>

## Instructies

### Stap 1: Voeg het account toe

Nadat u de Mail-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de applicatie voor de eerste keer start**: er verschijnt een installatiewizard en zal u vragen om uw e-mailadres in te voeren.

- **Als u al een account hebt toegevoegd**: klik op `Bestand`{.action} bovenaan uw scherm en vervolgens op `Account toevoegen`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Voer uw e-mailadres in en klik vervolgens op `Geavanceerde opties`{.action}. Vink het vakje aan dat verschijnt naast `Mijn account handmatig configureren`{.action} en klik vervolgens op `Inloggen`{.action}.

Kies uit de verschillende soorten accounts tussen **IMAP** en **POP**. We raden aan IMAP te gebruiken. Als u uw e-mails lokaal wilt opslaan in uw Outlook-app, dan kunt u **POP** selecteren.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Vul vervolgens de gevraagde informatie in.

- **Voor inkomende mail:**

|Informatie|Omschrijving|
|---|---|
|Server|Voer de ssl0.ovh.net server in.|
|Poort|Voer poort '993' in.|
|Encryptiemethode|Selecteer 'SSL/TLS'.|
|Vereis verificatie |Vink het selectievakje ‘Verifieer beveiligde wachtwoordverificatie (SPA) bij login’ niet aan.|

- **Voor inkomende mail:**

|Informatie|Omschrijving|
|---|---|
|Server|Voer de ssl0.ovh.net server in.|
|Poort|Voer poort '465' in.|
|Encryptiemethode|Selecteer 'SSL/TLS'.|
|Vereis verificatie |Vink het selectievakje ‘Verifieer beveiligde wachtwoordverificatie (SPA) bij login’ niet aan.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action} en voert u uw **e-mailwachtwoord** in. Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze MX Plan-oplossing moet gebruiken:

- **Voor IMAP-configuratie**

|Soort server|Servicenaam|Encryptiemethode|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|SSL/TLS|993|
|Uitgaand|ssl0.ovh.net|SSL/TLS|465|

- **Voor POP-configuratie**

|Soort server|Servicenaam|Encryptiemethode|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|SSL/TLS|995|
|Uitgaand|ssl0.ovh.net|SSL/TLS|465|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH heeft ook een web-app die u kunt gebruiken om vanuit uw browser toegang te krijgen tot uw e-mailaccount. U kunt deze applicatie bereiken via <https://www.ovh.nl/mail/>. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configuratie van uw E-mail Pro-account in Outlook 2016 voor Windows](https://docs.ovh.com/nl/emails-pro/configuratie-outlook-2016/){.external}

[Configuratie van uw Exchange-account in Outlook 2016 voor Windows](https://docs.ovh.com/nl/microsoft-collaborative-solutions/configuratie-outlook-2016/){.external}

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.