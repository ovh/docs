---
deprecated: true
title: Configuratie van uw e-mailadres in Outlook 2016 voor Mac
slug: configuratie-outlook-2016-mac
excerpt: Ontdek hoe u uw e-mailadres kunt configureren in Outlook 2016 voor Mac
section: Outlook
updated: 2018-05-31
---

**Laatste update 22-03-2018**

## Introductie

De e-mailadressen kunnen worden geconfigureerd met compatibele e-mailsoftware.  Daardoor kunt u uw e-mailadres gebruiken via de e-mail-app van uw voorkeur.

Ontdek hoe u uw e-mailadres kunt configureren in Outlook 2016 voor Mac

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVHcloud-webhosting](https://www.ovhcloud.com/nl/web-hosting/){.external}).
- Er moet een Microsoft Outlook-applicatie op uw Mac zijn geïnstalleerd. 
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Gebruikt u Outlook 2016 voor Windows? Raadpleeg onze handleidingen: [Configuratie van uw e-mailadres in Outlook 2016 voor Windows](https://docs.ovh.com/nl/emails/configuratie-outlook-2016/){.external}.
>

## Instructies

### Stap 1: Voeg het account toe

Nadat u de Outlook-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de applicatie voor de eerste keer start**: er verschijnt een installatiewizard en zal u vragen om uw e-mailadres in te voeren.

- **Als u al een account hebt toegevoegd**: klik op `Tools`{.action} bovenaan uw scherm en vervolgens op `Accounts`{.action}. Klik in het venster dat verschijnt op `+`{.action}en vervolgens op `Nieuw account`{.action}.

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Voer uw e-mailwachtwoord in en klik op `Volgende`{.action}. Klik voor de provider op `IMAP/POP`{.action} en voer vervolgens de gevraagde informatie in.

|Informatie|Omschrijving|
|---|---|
|Soort account|We raden aan **IMAP** te gebruiken (standaard geselecteerd). U kunt ook **POP** (e-mails die lokaal zijn opgeslagen in uw Outlook-app) selecteren in het vervolgkeuzemenu.|
|Postadres|Voer de naam in waarmee u dit account kunt herkennen tussen andere die worden weergegeven in uw Outlook-app.|
|Gebruikersnaam|Voer het volledige e-mailadres in.|
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|
|Inkomende server|Voer de ssl0.ovh.net server in. Laat het vak **SSL gebruiken voor login** aangevinkt.|
|Inkomende poort|Voer poort 993 in.|
|Uitgaande server|Voer de ssl0.ovh.net server in. Laat het vak **SSL gebruiken voor login** aangevinkt.|
|Uitgaande poort|Voer poort 465 in.|

Nadat u deze informatie hebt ingevoerd, klikt u op `Volgende`{.action}. Als de informatie correct is, maakt Outlook verbinding met het account.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze MX Plan-oplossing moet gebruiken:

- **voor IMAP-configuratie**

|Soort server|Servicenaam|SSL|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|Ja|993|
|Uitgaand|ssl0.ovh.net|Ja|465|

- **Voor POP-configuratie**

|Soort server|Servicenaam|SSL|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|Ja|995|
|Uitgaand|ssl0.ovh.net|Ja|465|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH biedt ook een web-app die u kunt gebruiken om uw e-mail vanuit een webbrowser te openen. U kunt deze applicatie bereiken via <https://www.ovh.nl/mail/>. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configuratie van uw E-mail Pro-account in Outlook 2016 voor Mac](https://docs.ovh.com/nl/emails-pro/configuratie-outlook-2016-mac/){.external}.

[Configuratie van uw Exchange-account in Outlook 2016 voor Mac](https://docs.ovh.com/nl/microsoft-collaborative-solutions/configuratie-outlook-2016-mac/){.external}.

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.