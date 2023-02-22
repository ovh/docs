---
deprecated: true
title: 'Configuratie van uw Email Pro-account in de Courrier-app voor Windows 10'
slug: configuratie-courrier-windows-10
excerpt: 'Leer hoe u een E-mail Pro-account kunt instellen in de Courrier-app voor Windows 10'
section: 'Configuratie van een e-mailclient'
order: 7
updated: 2020-03-18
---

**Laatste update 23-03-2018**

## Introductie

De E-mail Pro-accounts kunnen worden geconfigureerd met compatibele e-mailsoftware. Hiermee kunt u uw e-mail gebruiken met een applicatie van uw keuze.

Met deze handleiding kunt u ontdekken hoe u een E-mail Pro-account kunt configureren in de Courrier-app voor Windows 10.

## Vereisten

- U moet beschikken over [E-mail Pro](https://www.ovh.com/nl/emails/email-pro/){.external}.
- Er moet een Courrier-applicatie op uw apparaat zijn geïnstalleerd.
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

## Instructies

### Stap 1: Voeg het account toe

Nadat u de Courrier-app op uw apparaat hebt gestart, kunt u een account op twee verschillende manieren toevoegen.

- **Wanneer u de app voor de eerste keer opent**: er verschijnt een venster met `Account toevoegen`{.action}.

- **Als er al een account is ingesteld**: klik op `Accounts`{.action} in de menubalk aan de linkerkant van de app en vervolgens op `Account toevoegen`{.action} in het menu dat aan de rechterkant verschijnt.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

Klik in het venster dat verschijnt op `Advanced Setup`{.action} en kies `Courrier Internet`{.action} als accounttype.

Voer uw accountgegevens in:

|Informatie|Omschrijving|
|---|---|
|Postadres|Voer het volledige e-mailadres in.|
|Gebruikersnaam|Voer het volledige e-mailadres in.|
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|
|Accountnaam|Voer de naam in waarmee u dit account kunt herkennen tussen andere die worden weergegeven in uw Courrier-app.|
|Stuur uw berichten met deze naam|Voer de afzendernaam in die u wilt laten weergeven wanneer u e-mails vanaf dit adres verzendt.|
|Inkomende e-mailserver|Voer de ‘pro1.mail.ovh.net:993’ server in.|
|Soort account|We raden aan **IMAP4** te gebruiken. U kunt ook **POP** (e-mails die lokaal zijn opgeslagen in uw Courrier-app) selecteren in het vervolgkeuzemenu.|
|Uitgaande e-mailserver|Voer de ‘pro1.mail.ovh.net:587’ server in.|

Zorg ervoor dat de vakjes zijn aangevinkt bij:

- "De uitgaande server vereist authenticatie"
- "Gebruik dezelfde gebruikersnaam en wachtwoord voor het verzenden van e-mail"
- "SSL vereisen voor inkomende e-mail"
- "SSL vereisen voor uitgaande e-mail"

Nadat u deze informatie hebt ingevoerd, klikt u op `Inloggen`{.action}. Als de informatie correct is, maakt Outlook verbinding met het account.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze E-mail Pro-oplossing moet gebruiken:

|Soort server|Servicenaam|SSL|Poort|
|---|---|---|---|
|Inkomend|pro1.mail.ovh.net|Ja|993|
|Uitgaand|pro1.mail.ovh.net|Ja|587|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH biedt ook een web-app met [teamwerk-functies](https://www.ovh.com/nl/emails/){.external}. U kunt deze applicatie bereiken via <https://www.ovh.nl/mail/>. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configureer het e-mailadres dat is opgenomen in MX Plan of in een webhostingsplan op de Courrier-app voor Windows 10](https://docs.ovh.com/nl/emails/configuratie-courrier-windows-10/){.external}.

[Configuratie van uw Exchange-account in de Courrier-app voor Windows 10](https://docs.ovh.com/nl/microsoft-collaborative-solutions/configuratie-courrier-windows-10/){.external}

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.