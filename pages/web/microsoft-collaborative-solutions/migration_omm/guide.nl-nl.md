---
deprecated: true
title: Migratie van e-mailaccounts met OVH Mail Migrator
excerpt: Ontdek hoe u uw e-mailaccounts naar OVH kunt migreren met behulp van onze OVH Mail Migrator-tool
updated: 2022-02-14
---

**Laatste update 21-03-2018**

## Introductie

[OVH Mail Migrator](https://omm.ovh.net/){.external} is een tool gemaakt door OVH. U kunt het gebruiken om uw e-mailaccounts naar uw OVH-e-mailadressen te migreren. Het proces verwerkt verschillende soorten inhoud, zoals e-mails, contacten, agenda's en taken, op voorwaarde dat deze compatibel zijn met uw e-mailadressen.

Ontdek hoe u uw e-mailaccounts naar OVH kunt migreren met behulp van onze OVH Mail Migrator-tool

## Vereisten

- U moet een e-maildienst bij OVH hebben, zoals [Exchange](https://www.ovh.com/nl/emails/){.external}, [E-mail Pro](https://www.ovh.com/nl/emails/email-pro/){.external} of MX Plan (via het MX-plan of inbegrepen bij een [OVH-webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external}).
- U moet de inloggegevens hebben voor de e-mailaccounts die u wilt migreren (de bronaccounts).
- U moet over de inloggegevens beschikken voor de OVH-e-mailaccounts die de gemigreerde data (de bestemmingsaccounts) zullen ontvangen.

## Instructies

[OVH Mail Migrator](https://omm.ovh.net/){.external} kan worden geopend via <https://omm.ovh.net/>. Het biedt drie soorten migratie en stelt u in staat om hun voortgang bij te houden.

|Type migratie|Omschrijving|
|---|---|
|Enkele migratie|Migreert de inhoud van één e-mailadres naar een ander e-mailadres. Deze oplossing wordt aanbevolen voor het migreren van een of meer adressen (de stappen moeten worden herhaald voor elk te migreren adres).|
|Migratie per bestand|Migreert de inhoud van een e-mailadres dat eerder in een bestand is geëxporteerd, naar een ander e-mailadres. Dit proces is compatibel met PST-, ICS- en VCF-bestandsindelingen.|
|Meervoudige migratie (projectmodus)|Wordt gebruikt om verschillende migraties af te handelen als onderdeel van een enkel project. Deze oplossing is bedoeld voor mensen die een groot aantal adressen willen migreren.|

Lees het gedeelte van deze handleiding dat de meest geschikte migratie voor uw project behandelt.

### Een enkele migratie uitvoeren

Wanneer u bent ingelogd op de pagina <https://omm.ovh.net/>, beweegt u de muis over het tabblad `Migratie`{.action} in de menubalk bovenaan de pagina, en klikt u vervolgens op `Nieuwe migratie`{.action}

![omm](images/omm-migration-create.png){.thumbnail}

Op de weergegeven pagina kunt u nu de informatie voor elk onderdeel invullen.

- **Account**: voer de informatie in voor het **bronaccount** en het **bestemmingsaccount**. Ter herinnering: de inhoud van het **bronaccount** wordt gemigreerd naar het **bestemmingsaccount**.

|Informatie|Omschrijving|
|---|---|
|Soort server|Selecteer het servertype dat geschikt is voor uw accounts. Als een van hen een OVH-account is, kan **Hosted by OVH (Autodetect)** u deze informatie automatisch laten invullen.|
|Server URL|Voer het adres in van de server waarop uw accounts worden gehost. Dit veld kan automatisch worden ingevuld wanneer het type server is gekozen.|
|Login|Voer het volledige e-mailadres voor uw accounts in.|
|Administrator-account met delegatie|Dit veld verschijnt alleen voor bepaalde servertypen.|
|Het wachtwoord|Voer het wachtwoord van uw accounts in. |

- **Options**: selecteer de elementen die u wilt migreren. Sommige inhoud is mogelijk niet beschikbaar, afhankelijk van het type server dat eerder is gekozen.

- **Informatie**: voer een e-mailadres in voor het ontvangen van meldingen over de voortgang van de migratie.

Klik op `Start migratie`{.action} zodra u alle informatie hebt ingevoerd. Als de informatie juist is ingevoerd, zal het proces beginnen.

Op de weergegeven pagina kunt u de voortgang van de migratie volgen. Vergeet niet om het weergegeven `migratie-ID`{.action} op te slaan en te wachten tot het proces is voltooid; de tijd die dit in beslag neemt, is afhankelijk van het aantal elementen dat moet worden gemigreerd. Als u wilt terugkeren naar dit scherm, gaat u verder naar het gedeelte ‘Een enkele migratie volgen hieronder.

### Een enkele migratie uitvoeren

Er zijn twee manieren om toegang te krijgen tot een enkele migratie-tracking:

- uit de e-mail die aan u is verzonden ter bevestiging dat de migratie is begonnen; en
- vanaf de toolpagina <https://omm.ovh.net/>. Plaats de cursor op het tabblad `Migratie`{.action} in de menubalk bovenaan de pagina en klik vervolgens op `Volgen/synchroniseren`{.action}. U moet het `migratie-ID`{.action} en het betreffende `bronaccount`{.action} invoeren.

![omm](images/omm-migration-track.png){.thumbnail}

Op de weergegeven pagina kunt u de voortgang van uw migratie volgen. Een bericht geeft aan of het proces zal beginnen, aan de gang is of is voltooid. Afhankelijk van deze status kunnen verschillende acties worden ondernomen:

|Action|Omschrijving|
|---|---|
|Stop het proces|Gebruikt om de migratie te stoppen. Alle elementen die al zijn gemigreerd, blijven in het bestemmingsaccount.|
|Gemigreerde elementen verwijderen|Dit wordt gebruikt om elementen te verwijderen die al zijn gemigreerd naar het bestemmingsaccount. U kunt elementen vanaf een specifiek synchronisatiepunt verwijderen.|
|Synchroniseren|Hiermee kunnen nieuwe elementen die niet zijn gemigreerd tijdens een eerdere synchronisatie tussen het bronaccount en het bestemmingsaccount worden hersteld. We beschouwen deze actie als een migratie van de ontbrekende elementen van het bronaccount naar het bestemmingsaccount.|

### Een enkele migratie uitvoeren

Wanneer u bent ingelogd op de pagina <https://omm.ovh.net/>, beweegt u uw muis over het tabblad `PST/ICS/VCF`{.action} in de menubalk bovenaan de pagina. Klik vervolgens, afhankelijk van de migratie die u wilt uitvoeren, op `Nieuwe PST-migratie`{. action}, `Nieuwe ICS-migratie`{.action} of `Nieuwe VCF-migratie`{.action}.

Voor deze stap hebt u het bestand nodig met de inhoud die u wilt migreren.

![omm](images/omm-migration-files.png){.thumbnail}

Vul op de weergegeven pagina de informatie voor het **bestemmingsaccount** in en klik vervolgens op `Start migratie`{.action}. Ter herinnering: de inhoud van het PST-, ICS- of VCF-bestand wordt gemigreerd naar het **bestemmingsaccount**.

Als de ingevoerde informatie juist is, wordt u gevraagd om het bestand op uw computer te selecteren. Klik vervolgens op `Upload`{.action} en wacht tot het bestand is geladen; dit kan een tijdje duren, afhankelijk van de grootte van het bestand. U kunt de voortgang van uw upload op deze pagina bekijken.

Nadat de upload is voltooid, voert u nogmaals het wachtwoord voor het **bestemmingsaccount** in en klikt u vervolgens op `Start migratie`{.action}. Als de ingevoerde informatie correct is, kunt u de migratie starten door nogmaals op `Start migratie`{.action} te klikken.

Op de weergegeven pagina kunt u de voortgang van de migratie volgen. Vergeet niet om het weergegeven `migratie-ID`{.action} op te slaan en te wachten tot het proces is voltooid; de tijd die dit in beslag neemt, is afhankelijk van het aantal elementen dat moet worden gemigreerd. Als u naar dit scherm wilt terugkeren, gaat u verder naar het 'Een migratie per bestand volgen'-gedeelte hieronder.

### Een migratie per bestand uitvoeren

Er zijn twee manieren om toegang te krijgen tot het volgen van de voortgang van een migratie door PST, ICS of VCF-bestand:

- uit de e-mail die aan u is verzonden ter bevestiging dat de migratie is begonnen; en

- vanaf de toolpagina <https://omm.ovh.net/>. Plaats de cursor op het tabblad `Migratie`{.action} in de menubalk bovenaan de pagina en klik vervolgens op `Volgen/synchroniseren`{.action}. U moet het `migratie-ID`{.action} en het betreffende `bronaccount`{.action} invoeren.

![omm](images/omm-migration-track.png){.thumbnail}

Op de weergegeven pagina kunt u de voortgang van uw migratie volgen. Een bericht geeft aan of het proces zal beginnen, aan de gang is of is voltooid. Afhankelijk van deze status kunnen verschillende acties worden ondernomen:

|Action|Omschrijving|
|---|---|
|Stop het proces|Gebruikt om de migratie te stoppen. Alle elementen die al zijn gemigreerd, blijven in het bestemmingsaccount.|
|Gemigreerde elementen verwijderen|Dit wordt gebruikt om elementen te verwijderen die al zijn gemigreerd naar het bestemmingsaccount.|

### Een meervoudige migratie uitvoeren en volgen (projectmodus)

Wanneer u bent ingelogd op de pagina <https://omm.ovh.net/>, beweegt u de muis over het tabblad `Project`{.action} in de menubalk bovenaan de pagina, en klikt u vervolgens op `Nieuwe meervoudige migratie`{.action}

![omm](images/omm-migration-project.png){.thumbnail}

Vul op de weergegeven pagina de informatie voor het **nieuwe project** in:

|Informatie|Omschrijving|
|---|---|
|Naam|Stel een naam in voor uw migratieproject.|
|Het wachtwoord|Stel een wachtwoord in voor uw project, zodat u het kunt beheren met de OVH Mail Migrator-tool.|
|E-mail|Voer een e-mailadres in voor het ontvangen van meldingen over de voortgang van uw migratieproject.|

Klik vervolgens op `Project maken`{.action}. Op de weergegeven pagina kunt u uw migratieproject beheren en volgen. Vergeet niet om het weergegeven **project-ID** op te slaan.

U kunt nu beginnen met de migratie van uw accounts. Om dit te doen, heeft u verschillende tabbladen tot uw beschikking:

|Tabblad|Omschrijving|
|---|---|
|Doorgaan|Gebruikt om de voortgang van de migraties voor uw project te volgen. Er is ook een knop waarmee u uw migraties kunt pauzeren en opnieuw kunt starten.|
|Meerdere creaties|Wordt gebruikt om verschillende migraties toe te voegen aan de wachtrij door een bestand te importeren (CSV of Excel). Dit bestand moet een specifiek formaat hebben; we raden u aan de meegeleverde sjablonen te gebruiken.|
|Toevoegen|Wordt gebruikt om migraties één account tegelijk aan de wachtrij toe te voegen. U kunt de bron- en bestemmingservers echter als standaardwaarden houden.|
|Opties|Hiermee kan de OVH Mail Migrator-tool de elementen die kunnen worden verplaatst personaliseren en het aantal gelijktijdige verzoeken uitvoeren bij het migreren van de tool.|
|Uitloggen|Gebruikt om uit te loggen van de projecttrackingpagina; hierdoor kunt u inloggen en andere migratieprojecten volgen.|

Als u terug wilt naar de tracking voor uw migratieproject, meldt u zich aan bij de pagina <https://omm.ovh.net/>, beweegt u uw muis over het tabblad `Project`{.action} in de menubalk bovenaan de pagina en klikt u vervolgens op `Een project volgen`{.action}. U moet het `migratie-ID`{.action} en het betreffende `wachtwoord`{.action} invoeren.

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.