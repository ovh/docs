---
deprecated: true
title: Configuratie van uw e-mailadres op Android via de Gmail-app
excerpt: Leer hoe u een MX Plan e-mailadres kunt configureren op Android, via de Gmail-app
updated: 2018-03-12
---

**Laatste update 26-02-2018**

## Introductie

De MX Plan-adressen kunnen worden geconfigureerd met compatibele e-mailsoftware. Daardoor kunt u uw e-mailadres gebruiken via de e-mail-app van uw voorkeur.

Leer hoe u een MX Plan e-mailadres kunt configureren op Android, via de Gmail-app.

## Vereisten

- U moet beschikken over een MX Plan-e-mailadres (inbegrepen bij MX Plan en in [OVHcloud-webhosting](https://www.ovh.com/nl/shared-hosting/){.external}).
- Er moet een Gmail-applicatie op uw apparaat zijn geïnstalleerd. U kunt het vanaf de Google Play Store installeren.
- U moet beschikken over de inloggegevens voor het e-mailadres waarvan u de instellingen wilt bewerken.

> [!primary]
>
> Deze documentatie is gemaakt vanaf een Nexus 6-apparaat met Android 7.1.1. We gebruiken standaard de Gmail-app die kan worden geïnstalleerd vanuit de Play Store. Als u een andere app wilt gebruiken, kan de procedure anders zijn.
>

## Instructies

### Stap 1: Voeg het account toe

Ga op het startscherm van uw apparaat naar `Gmail`{.action}. De toevoeging van een account kan op twee verschillende manieren worden gestart:

- **Als er geen account is ingesteld**: Ga door het welkom-gedeelte en tik op `E-mailadres toevoegen`{.action}. Kies `Overig`{.action} 

- **Als er al een account is ingesteld**: Druk op het pictogram met de drie stippen links bovenaan en vervolgens op het pijlpictogram rechts van de reeds ingestelde accountnaam. Tik ten slotte op `Account toevoegen`{.action} en kies `Overig`{.action}. 

![mxplan](images/configuration-gmail-application-android-step1.png){.thumbnail}

Voer uw e-mailwachtwoord in en klik op `Volgende`{.action}.

Bij het kiezen van het type account, raden we aan het in **IMAP** te gebruiken. U kunt echter **POP** selecteren: deze keuze houdt in dat u e-mails lokaal opslaat in uw Gmail-app, dus het wordt niet aanbevolen als u uw adres controleert via meerdere e-mailprogramma's.

Voer uw e-mailwachtwoord in en klik op `Volgende`{.action}.

![mxplan](images/configuration-gmail-application-android-step2.png){.thumbnail}

Vul de gegevens van de inkomende server in: 

|Informatie|Omschrijving| 
|---|---| 
|Gebruikersnaam|Voer het volledige e-mailadres in.|  
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|
|Server|Voer de ssl0.ovh.net server in.|

Druk op `Volgende`{.action} en vul de gegevens van de uitgaande server in:

|Informatie|Omschrijving| 
|---|---| 
|Vereist inloggen|Zorg ervoor dat deze knop is ingeschakeld.|
|Gebruikersnaam|Voer het volledige e-mailadres in.|  
|Het wachtwoord|Voer het wachtwoord van het e-mailadres in.|
|SMTP-server|Voer de ssl0.ovh.net server in.|

Tik nu op `Volgende`{.action}. Als de ingevoerde informatie correct is, is het aanmelden bij het account gelukt.

![mxplan](images/configuration-gmail-application-android-step3.png){.thumbnail}

Stel de accountopties in en druk op `Volgende`{.action}. Ten slotte kunt u dit account een naam geven waarmee u het onder andere in uw app kunt herkennen, evenals de naam die wordt weergegeven wanneer u e-mails verzendt. Wanneer u deze acties hebt uitgevoerd, drukt u op `Volgende`{.action}.

Als u wilt controleren of het account correct is geconfigureerd, kunt u een testmail sturen.

Als u handmatig instellingen in uw accountvoorkeuren moet invoeren, vindt u hieronder de technische instellingen die u met onze MX Plan-oplossing moet gebruiken:

- **voor IMAP-configuratie**

|Soort server|Servicenaam|Soort beveiliging|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|SSL/TLS|993|
|Uitgaand|ssl0.ovh.net|SSL/TLS|465|

- **voor POP-configuratie**

|Soort server|Servicenaam|Soort beveiliging|Poort|
|---|---|---|---|
|Inkomend|ssl0.ovh.net|SSL/TLS|995|
|Uitgaand|ssl0.ovh.net|SSL/TLS|465|

### Stap 2: Gebruik e-mail

Nadat u uw e-mailadres hebt geconfigureerd, kunt u het gaan gebruiken! U kunt nu e-mails verzenden en ontvangen.

OVH heeft ook een web-app die u kunt gebruiken om vanuit uw browser toegang te krijgen tot uw e-mailaccount. U heeft toegang tot deze applicatie via het volgende adres: <https://www.ovh.nl/mail/>. U kunt het openen met behulp van uw e-mailinloggegevens.

## Verder

[Configuratie van uw E-mail Pro-account op Android via de Gmail-app](/pages/web/emails-pro/how_to_configure_android){.external}

[Configuratie van uw Exchange-account op Android via de Gmail-app](/pages/web/microsoft-collaborative-solutions/how_to_configure_android){.external}.

Ga in gesprek met andere communityleden op [https://community.ovh.com](https://community.ovh.com){.external}.