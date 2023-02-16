---
deprecated: true
title: Configuratie van uw Email Pro-account in Outlook 2016 voor Windows
slug: configuratie-outlook-2016
excerpt: Leer hoe u uw Email Pro-account in Outlook 2016 voor Windows kunt configureren
section: Configuratie van een e-mailclient
order: 1
updated: 2021-07-05
---

**Laatste update 22-03-2018**

## Introductie

De E-mail Pro-accounts kunnen worden geconfigureerd met compatibele e-mailsoftware. Hiermee kunt u uw e-mail gebruiken met een applicatie van uw keuze.

**Leer hoe u uw Email Pro-account in Outlook 2016 voor Windows kunt configureren.**

## Vereisten

- U moet beschikken over [E-mail Pro](https://www.ovhcloud.com/nl/emails/email-pro/){.external}.
- U moet Microsoft Outlook 2016 op uw apparaat hebben geïnstalleerd.
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Gebruikt u Outlook 2016 voor Mac? Raadpleeg onze handleidingen: [Configuratie van uw Email Pro-account in Outlook 2016 voor Mac](https://docs.ovh.com/nl/emails-pro/configuratie-outlook-2016-mac/){.external}.
>

## Instructies

### Stap 1: Voeg het account toe

Nadat u de Outlook-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de applicatie voor de eerste keer start**: er verschijnt een installatiewizard en zal u vragen om uw e-mailadres in te voeren.

- **Als u al een account hebt toegevoegd**: klik op `Bestand`{.action} bovenaan uw scherm en vervolgens op `Account toevoegen`{.action}.

![emailpro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Voer uw e-mailadres in en klik op `Geavanceerde opties`{.action}. Vink het vakje aan dat verschijnt naast `Mijn account handmatig configureren`{.action} en klik vervolgens op `Inloggen`{.action}. Kies **IMAP** uit de verschillende soorten accounts.

![emailpro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Vul vervolgens de gevraagde informatie in.

- **Voor inkomende mail:**

|Informatie|Omschrijving|
|---|---|
|Server|Voer de ‘pro1.mail.ovh.net’ server in.|
|Poort|Voer poort 993 in.|
|Encryptiemethode|Selecteer 'SSL/TLS'.|
|Vereis verificatie |Vink het selectievakje ‘Verifieer beveiligde wachtwoordverificatie (SPA) bij login’ niet aan.|

- **Voor inkomende mail:**

|Informatie|Omschrijving|
|---|---|
|Server|Voer de ‘pro1.mail.ovh.net’ server in.|
|Poort|Voer poort 587 in.|
|Encryptiemethode|Selecteer 'SSL/TLS'.|
|Vereis verificatie |Vink het selectievakje ‘Verifieer beveiligde wachtwoordverificatie (SPA) bij login’ niet aan.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action} en voert u uw **e-mailwachtwoord** in. Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

![emailpro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze E-mail Pro-oplossing moet gebruiken:

|Soort server|Servicenaam|Encryptiemethode|Poort|
|---|---|---|---|
|Inkomend|pro1.mail.ovh.net|SSL/TLS|993|
|Uitgaand|pro1.mail.ovh.net|STARTTLS|587|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH biedt ook een web-app met [teamwerk-functies](https://www.ovhcloud.com/nl/emails/){.external}. U kunt deze applicatie bereiken via <https://pro1.mail.ovh.net>. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Uw e-mailadres configureren dat is opgenomen in het MX Plan-pakket of in een webhostingoplossing in Outlook 2016 voor Windows](https://docs.ovh.com/nl/emails/configuratie-outlook-2016/){.external}

[Configuratie van uw Exchange-account in Outlook 2016 voor Windows](https://docs.ovh.com/nl/microsoft-collaborative-solutions/configuratie-outlook-2016/){.external}

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.