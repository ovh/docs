---
deprecated: true
title: Configuratie van uw e-mailadres in de Courrier-app voor Windows 10
slug: configuratie-courrier-windows-10
excerpt: Ontdek hoe u uw MX Plan-e-mailadres kunt instellen in Courrier voor Windows
section: Windows
updated: 2018-04-04
---

**Laatste update 26-03-2018**

## Introductie

De e-mailadressen kunnen worden geconfigureerd met compatibele e-mailsoftware. Daardoor kunt u uw e-mailadres gebruiken via de e-mail-app van uw voorkeur.

Deze handleiding legt uit hoe u uw MX Plan-e-mailadres kunt instellen in de Courrier-app voor Windows.

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVHcloud-webhosting](https://www.ovh.com/nl/shared-hosting/){.external}).
- Er moet een Courrier-applicatie op uw apparaat zijn geïnstalleerd.
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Gebruikt u een vorige versie van Windows? Raadpleeg onze handleidingen: [Configuratie van uw e-mailadres in de Courrier-app voor Windows 8](https://docs.ovh.com/nl/emails/ovh_e-mail_handleiding_configuratie_op_windows_8/){.external}.
>

## Instructies

### Stap 1: Voeg het account toe

Nadat u de Courrier-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de app voor de eerste keer opent**: er verschijnt een venster met `Account toevoegen`{.action}. 

- **Als er al een account is ingesteld**: klik op `Accounts`{.action} in het linkermenu, en vervolgens op `Account toevoegen`{.action} in het menu dat rechts verschijnt. 

![mxplan](images/configuration-mail-windows-step1.png){.thumbnail}

In het venster dat verschijnt klikt u op `Advanced Setup`{.action}, kies dan `Courrier Internet`{.action} als accounttype. 

Voer uw accountgegevens in:

|Informatie|Omschrijving|
|---|---|
|Postadres|Voer het volledige e-mailadres in.|
|Gebruikersnaam|Voer het volledige e-mailadres in.|
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|
|Accountnaam|Voer de naam in waarmee u dit account kunt herkennen tussen andere die worden weergegeven in uw Courrier-app.|
|Verzendt uw berichten met deze naam|Voer de afzendernaam in die u wilt laten weergeven wanneer u e-mails vanaf dit adres verzendt.|
|Inkomende e-mailserver |Voer de ‘ssl0.ovh.net:993’ server in.|
|Soort account|We raden aan **IMAP4** te gebruiken. U kunt ook **POP** (e-mails die lokaal zijn opgeslagen in uw Mail-app) selecteren in het vervolgkeuzemenu.|
|Uitgaande e-mailserver|Voer de ‘ssl0.ovh.net:465’ server in.|

Zorg ervoor dat de vakjes zijn aangevinkt bij: 

- "De uitgaande server vereist authenticatie"
- "Gebruik dezelfde gebruikersnaam en wachtwoord voor het verzenden van e-mail"
- "SSL vereisen voor inkomende e-mail"
- "SSL vereisen voor uitgaande e-mail"

Nadat u deze informatie hebt ingevoerd, klikt u op `Inloggen`{.action}. Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

![mxplan](images/configuration-mail-windows-step2.png){.thumbnail}

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze MX Plan-oplossing moet gebruiken:

- **voor IMAP4-configuratie**

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

OVH heeft ook een web-app die u kunt gebruiken om vanuit uw browser toegang te krijgen tot uw e-mailaccount. U heeft toegang tot deze applicatie via het volgende adres: <https://www.ovh.nl/mail/>. U kunt het openen met behulp van uw e-mailinloggegevens.
 
## Verder

[Configuratie van uw E-mail Pro-account in de Courrier-app voor Windows](https://docs.ovh.com/nl/emails-pro/configuratie-courrier-windows-10/){.external}

[Configuratie van uw Exchange-account in de Courrier-app voor Windows](https://docs.ovh.com/nl/microsoft-collaborative-solutions/configuratie-courrier-windows-10/){.external}

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.