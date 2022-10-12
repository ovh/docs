---
deprecated: true
title: 'Creatie van een database in uw webhostingplan'
slug: database-creatie
excerpt: 'Leer hoe u een database in uw webhostingplan kunt maken'
section: Databases
order: 01
---

**Laatste update 15-06-2018**

## Introductie

Een database ("DB") wordt gebruikt voor het opslaan van zogenaamde dynamische elementen, zoals opmerkingen of artikelen. Deze databases worden gebruikt in vrijwel alle moderne Content Management Systemen (CMS), zoals WordPress of Joomla!.

Deze handleiding legt uit hoe u een database in uw webhostingplan kunt creëren.

## Vereisten

- U moet beschikken over een [OVH-webhosting plan](https://www.ovhcloud.com/nl/web-hosting/){.external}.
- U moet over de mogelijkheid om databases te maken als onderdeel van uw aanbod.
- U moet toegang hebben om het betreffende webhostingplan vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} te beheren.

## Instructies

### Stap 1: Toegang krijgen tot het beheer van de webhosting-databases

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Databases`{.action}-tabblad.

De getoonde tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Stap 2: Creëer de database

Er zijn twee manieren om een nieuwe database te maken:

- **als u nog geen database hebt gemaakt**: klik op de knop `Een database maken`{.action};

- **als u al een database hebt gemaakt**: klik op de knop `Acties`{.action} en vervolgens op `Een database maken.`{.action}

Selecteer de gewenste informatie in het venster dat verschijnt en klik vervolgens op `Volgende`{.action}.

|Informatie|Omschrijving|  
|---|---|  
|Database engine|Selecteer de database-engine die door de database wordt gebruikt. Databases die deel uitmaken van een [OVH-webhostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external} zijn alleen beschikbaar met de MySQL-engine.|  
|Database versie|Selecteer de versie die wordt gebruikt door de database-engine. Controleer of uw website compatibel is met de door u gekozen versie. |  
|Soorten databases|Selecteer de grootte van de database. Deze grootte verwijst naar de beschikbare ruimte voor uw database voor het opslaan van gegevens.|   

Vul vervolgens de gevraagde informatie in en klik op `Volgende`{.action}.

|Informatie|Omschrijving|   
|---|---|   
|Gebruiker|Voer een gepersonaliseerde gebruikersnaam in die aan uw database wordt gekoppeld.|   
|Het wachtwoord|Voer een wachtwoord in voor deze gebruiker en bevestig het.|   

Controleer of alle informatie in de samenvatting correct is; Als dit het geval is, klikt u op `Bevestigen`{.action} om het maken van de database te starten. U kunt dit proces zo vaak herhalen als nodig is om meerdere databases te maken.

> [!primary]
>
> Om veiligheidsredenen verzoeken wij u de voorwaarden te respecteren die tijdens de registratie van een wachtwoord worden aangegeven. Ook raden we u aan: 
>
> - niet hetzelfde wachtwoord twee keer gebruiken;
>
> - een wachtwoord te kiezen dat niets te maken heeft met uw persoonlijke informatie (vermijd bijvoorbeeld gebruik van uw naam, voornaam, of geboortedatum);
>
> - uw wachtwoorden regelmatig te vernieuwen;
>
> - uw wachtwoorden niet op papier te schrijven of naar uw e-mailadres sturen;
>
> - uw wachtwoorden niet automatisch op te slaan in uw internetbrowser, zelfs als deze het aan u voorstelt.
>

![databasecreation](images/database-creation-step2.png){.thumbnail}

### Stap 3: Gebruik van uw database

Nu kunt u uw database gebruiken. Hiervoor hebt u uw inloggegevens nodig: de gebruikersnaam en het wachtwoord dat u zojuist hebt gedefinieerd, de naam van de database die u zojuist hebt aangepast en het serveradres.

Deze informatie is essentieel om uw website verbinding te laten maken met de database. Afhankelijk van de gebruikte website, moet deze verbinding mogelijk handmatig worden geconfigureerd of via een interface die door de site zelf wordt gegenereerd. Aangezien deze procedure deel uitmaakt van de configuratie van uw website in plaats van de diensten die door OVH worden geleverd, raden we u aan contact op te nemen met de editor van de website of contact op te nemen met een professional zoals een gespecialiseerde serviceaanbieder om hier hulp bij te krijgen. 

OVH biedt hiervoor een online tool aan: phpMyAdmin. Om de toegangsverbinding voor deze toepassing te vinden, klikt u op het tabblad `Databases`{.action} op de drie stippen rechts van de betreffende database in de tabel en vervolgens op `Ga naar phpMyAdmin`{.action}. U moet de inloggegevens invoeren voor de database die is aangemaakt bij OVH.

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.