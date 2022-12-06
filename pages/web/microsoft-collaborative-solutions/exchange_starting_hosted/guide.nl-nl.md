---
deprecated: true
title: Aan de slag met Hosted Exchange
slug: eerste-configuratie-exchange
excerpt: Hosted Exchange - de eerste stappen
section: Configuratie van Exchange
order: 01
---

**Laatste update 01-02-2018**

## Introductie

De Hosted Exchange-dienst kan bedrijfsspecifieke e-mailadressen gebruiken die het voor teamwork eenvoudiger maken om met functies zoals agenda's en synchronisatie van contacten te werken.

**Ontdek hoe u aan de slag kunt gaan met uw Hosted Exchange.**

## Vereisten

- U moet een abonnement op een [Hosted Exchange](https://www.ovhcloud.com/nl/emails/hosted-exchange/){.external}-oplossing hebben.
- U moet een e-mail hebben ontvangen met daarin de bevestiging dat uw Hosted Exchange is geïnstalleerd.
- U moet beschikken over een domeinnaam. 
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

## Instructies

### Stap 1: Ga naar het beheer van uw dienst

Nadat uw Hosted Exchange is aangemaakt en beschikbaar is, kunt u deze beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

Hiervoor logt u in, klikt u op `Microsoft`{.action}, en vervolgens op `Exchange`{.action} in de linkerbalk van de dienst. Klik dan op de naam van de betreffende Hosted Exchange-dienst.

> [!primary]
>
> De naam van een Hosted Exchange-dienst in uw OVH Control Panel begint met **hosted-**, bevat vervolgens een deel van uw van uw NIC handle, en eindigt met een cijfer (1 voor de eerste geïnstalleerde Hosted Exchange, 2 voor de tweede, etc.) .
>

### Stap 2: Configureer uw service voor de eerste keer

Aangezien u uw dienst nog niet hebt gebruikt, moet u deze voor de eerste keer configureren. Zodra u dit hebt gedaan, kunt u vervolgens uw nieuwe Exchange-e-mailadressen gebruiken.

Hiertoe wordt een configuratie-assistent geopend wanneer u voor het eerst de beheerinterface voor uw Hosted Exchange-dienst opent. Klik op de knop `Start`{.action} om aan de slag te gaan.

Met deze configuratie-assistent kunt u verschillende wijzigingen aanbrengen. Afhankelijk van wat u wilt doen, kan de volgende tabel sommige stappen van deze handleiding optioneel maken.

|Procedure|Omschrijving|
|---|---|
|Kies een domeinnaam|Bepaal de domeinnaam die u voor uw Exchange-e-mailadressen zult gebruiken. Dit is een van de elementen waaruit uw e-mailadres bestaat (zoals contact@mypersonaldomain.ovh, bijvoorbeeld).|
|Configureer de domeinnaam|De domeinnaam die u invoert, wordt automatisch geconfigureerd als deze wordt beheerd door OVH op dezelfde NIC handle als uw Exchange-dienst. Als dit niet het geval is, moet u dit handmatig configureren.|
|Configureer Exchange-accounts|Bepaal de naam van uw Exchange-e-mailadressen en voeg extra informatie toe.|
|Migreer data (indien van toepassing)|Als u uw e-mailadressen wilt migreren vanuit een andere OVH-e-mailoplossing (MX Plan of E-mail Pro), kunt u het migratieproces starten met behulp van deze assistent. Als u een e-mailclient gebruikt, moet u ook uw accounts opnieuw configureren.|

### Stap 3: voeg extra domeinen toe (optioneel)

Als u klaar bent met het configureren van uw domein, kunt u ook aanvullende domeinnamen configureren als u dat wilt, en als u dat nog niet hebt gedaan via de assistent.

> [!warning]
>
> In the directory kunnen alle adressen die op uw Exchange-dienst zijn gemaakt, alle andere bijbehorende adressen bekijken, inclusief adressen die verschillende domeinnamen hebben. Om te voorkomen dat verschillende domeinnamen op deze manier worden weergegeven, moet u een nieuwe Hosted Exchange-oplossing bestellen voor de betreffende domeinnaam/namen.
>

Om een nieuwe domeinnaam toe te voegen, selecteert u de betreffende [Hosted Exchange](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} in uw OVH Control Panel en klikt u op `Verwante domeinen`{.action}. U ziet een tabel met alle domeinnamen die momenteel zijn geconfigureerd of die binnenkort moeten worden geconfigureerd voor uw dienst. Om nieuwe toe te voegen, klikt u op de knop `Domeinnaam toevoegen`{.action} en volgt u vervolgens de verschillende stappen van het proces.

Raadpleeg deze handleiding over het [toevoegen van een domeinnaam aan een Exchange-dienst](https://docs.ovh.com/nl/microsoft-collaborative-solutions/toevoegen-domein-exchange/){.external} voor meer informatie.

> [!primary]
>
> Als voor een domeinnaam een specifieke actie vereist is voor de configuratie, verschijnt een rood vak in de kolom `Diagnostiek`{.action} van de tabel. Door erop te klikken, ziet u de wijzigingen die moeten worden aangebracht. Als deze domeinnaam de OVH-configuratie (de DNS-servers) niet gebruikt, moet u de wijzigingen uitvoeren in de interface die u gebruikt om de configuratie van uw domeinnaam te beheren. 
>

![Voeg een domein toe](images/first-steps-hosted-exchange-add-domain.png){.external}

### Stap 4: Configureer uw aanvullende Exchange-accounts (optioneel)

Als u klaar bent met het configureren van uw domein, kunt u ook aanvullende domeinnamen configureren als u dat wilt, en als u dat nog niet hebt gedaan via de assistent.

Hiervoor klikt u op de betreffende Hosted Exchange-service in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en vervolgens op `E-mailaccounts`{.action}. U ziet een tabel met alle domeinnamen die momenteel zijn geconfigureerd of die binnenkort moeten worden geconfigureerd voor uw dienst.

U ziet een tabel met alle accounts die momenteel zijn geconfigureerd of die binnenkort moeten worden geconfigureerd voor uw dienst. Om ze te configureren, klikt u op het potloodpictogram.

> [!primary]
>
> Herhaal deze stap zo vaak als nodig is, naar gelang het aantal beschikbare accounts. U kunt nieuwe bestellen met behulp van de knop `Accounts bestellen`{.action}.
>

![Voeg een account toe](images/first-steps-hosted-exchange-add-account.png){.external}

### Stap 5: Maak gebruik van uw e-mailadressen 

Nadat u uw accounts hebt geconfigureerd, hoeft u ze alleen nog maar te gebruiken! Om dit te doen, biedt OVH de **Outlook Web Application** (OWA) webmail-app. U kunt dit via het volgende adres openen: [https://www.ovh.nl/mail/](https://www.ovh.nl/mail/){.external}. Voer uw e-mailadresgegevens in om u in te loggen. Als u hulp nodig heeft bij het gebruik van OWA, raadpleeg dan onze documentatie via deze link: [https://docs.ovh.com/nl/microsoft-collaborative-solutions/](https://docs.ovh.com/nl/microsoft-collaborative-solutions/){.external}.

Als u uw e-mailadres wilt configureren in een e-mailprogramma of een apparaat (zoals een smartphone of een tablet), raadpleeg dan onze documentatie op: [https://docs.ovh.com/nl/microsoft-collaborative-solutions/](https://docs.ovh.com/nl/microsoft-collaborative-solutions/){.external}. Als u de manier wilt optimaliseren waarop u uw Exchange-e-mailadres op een e-mailclient gebruikt, moet u ervoor zorgen dat deze compatibel is met de dienst.

OVH biedt Outlook-licenties in het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en Office 365-licenties op de pagina: [https://www.ovhcloud.com/nl/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/nl/collaborative-tools/microsoft-365/){.external}. We raden u aan een van deze oplossingen te gebruiken als u de Outlook-e-mailclient of andere software van de Microsoft Office-suite wilt gebruiken.

> [!primary]
>
> Met Exchange kunt u al uw instellingen (filters, e-mailhandtekeningen, mappen, enz.) synchroniseren, ongeacht of u een webtoepassing of een compatibele e-mailclient gebruikt.
> Op deze manier zal, als u Exchange op drie apparaten gebruikt via verschillende aanmeldingsinterfaces (webmail, compatibele e-mailsoftware of client), al uw informatie tegelijkertijd beschikbaar zijn.
>

### Stap 6: Configureer teamwerkfuncties (optioneel)

Nu uw Hosted Exchange-dienst is geconfigureerd en volledig functioneel is, kunt u de samenwerkingsfuncties van de dienst instellen in uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. U kunt deze functies gebruiken om resources (vergaderruimten, apparatuur, enz.), groepen en nog veel meer te maken.

Om deze functies in te schakelen, selecteert u de verwante Hosted Exchange-dienst in uw OVH Control Panel en kiest u vervolgens uit de tabbladen die aangeven welke actie zal worden uitgevoerd.

Als u hulp nodig heeft bij het gebruik van de functies, raadpleeg dan onze documentatie via deze link: [https://docs.ovh.com/nl/microsoft-collaborative-solutions/](https://docs.ovh.com/nl/microsoft-collaborative-solutions/){.external}.

![Teamwerkfuncties](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Verder

Ga in gesprek met andere communitygebruikers op [https://community.ovh.com](https://community.ovh.com){.external}.