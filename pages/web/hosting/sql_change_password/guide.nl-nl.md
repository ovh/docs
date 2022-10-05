---
deprecated: true
title: 'Wijziging van het wachtwoord voor een webhosting-database'
slug: wijzigen-wachtwoord-database
excerpt: 'Ontdek hoe u het wachtwoord kunt wijzigen voor een database die is gecreëerd als onderdeel van een webhostingplan'
section: Databases
order: 02
---

**Laatste update 31-05-2018**

## Introductie

Een database ("DB") wordt gebruikt voor het opslaan van zogenaamde dynamische elementen, zoals opmerkingen of artikelen. Deze databases worden gebruikt in vrijwel alle moderne content management systemen (*CMS*), zoals WordPress of Joomla!, en kunnen worden geopend met behulp van het bijbehorende wachtwoord.

**Deze handleiding beschrijft hoe u het wachtwoord kunt veranderen voor een database die is gecreëerd als onderdeel van een webhostingplan**

## Vereisten

- U moet beschikken over een [OVH-webhosting plan](https://www.ovh.com/nl/shared-hosting/){.external}.
- U moet gemachtigd zijn om MX Plan te beheren vanuit uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

> [!warning]
>
> Als u het wachtwoord voor uw database wijzigt, moet u ervoor zorgen dat u ook het wachtwoord wijzigt in het configuratiebestand dat uw database verbindt met uw website.
>

## Instructies

### Stap 1: Evalueer de situatie 

**Wees extra voorzichtig bij het wijzigen van het wachtwoord in uw database**: als er wijzigingen zijn aangebracht, kunnen websites die de database gebruiken ontoegankelijk worden. Door meer te leren over de impact van het wijzigen van databasewachtwoorden, kunt u een beter inzicht krijgen in de wijzigingen die u zult aanbrengen.

Tegenwoordig gebruiken vrijwel alle CMS'en (WordPress, Joomla!, etc.) een database voor het opslaan van dynamische elementen, zoals opmerkingen of artikelen. Voor deze websites is het dus van essentieel belang om verbinding te kunnen maken met een database om correct te kunnen functioneren. Een configuratiebestand met informatie uit de database maakt deze verbinding mogelijk. Als u dus het wachtwoord wijzigt voor de database die wordt gehost bij OVHcloud, moet u ervoor zorgen dat u dezelfde wijziging aanbrengt in het bestand dat wordt gebruikt om uw website verbinding te laten maken met de database.

> [!primary]
>
> Voordat u wijzigingen aanbrengt, raden we u ten zeerste aan om te controleren of uw site is verbonden met een database. Als dit het geval is, zorg dan dat u weet hoe u de wijziging kunt overdragen om ervoor te zorgen dat uw website toegankelijk blijft.
>
> Als u niet weet hoe u dit moet doen, en aangezien deze procedure deel uitmaakt van de configuratie van uw website in plaats van de diensten die door OVH worden geleverd, raden wij u aan contact op te nemen met de editor van de website of anders met een professional zoals een gespecialiseerde serviceaanbieder om hier hulp bij te krijgen.
>

### Stap 2: Toegang krijgen tot het beheer van de webhosting-database

Log eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Databases`{.action}-tabblad.

De getoonde tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan.

![databasepassword](images/database-password-step1.png){.thumbnail}

### Stap 3: Wijziging van het wachtwoord voor de database

Om het wachtwoord te wijzigen, klikt u op de drie stippen rechts van de betreffende database en vervolgens op `Wachtwoord wijzigen`{.action}.

![databasepassword](images/database-password-step2.png){.thumbnail}

Voer in het venster dat verschijnt het nieuwe wachtwoord in, en klik op de knop `Bevestigen`{.action}.

**Het kan een paar minuten duren voordat de wijziging is doorgevoerd.**

> [!primary]
>
> Om veiligheidsredenen verzoeken wij u de voorwaarden te respecteren die tijdens de registratie van informatie worden aangegeven. Ook raden we u aan: 
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

![databasepassword](images/database-password-step3.png){.thumbnail}

### Stap 4: Herstel van de koppeling tussen de database en de website.

> [!primary]
>
> Deze stap kan optioneel zijn als uw website niet is verbonden met een database.
>

Als op uw website een bericht wordt weergegeven dat aangeeft dat er geen verbinding met de database kon worden gemaakt, betekent dit dat u het nieuwe wachtwoord niet hebt overgedragen naar het bestand dat is gebruikt om uw website verbinding te laten maken met uw database.

Om verbinding te kunnen maken met uw website, moet er een bestand zijn opgeslagen in uw opslagruimte dat de informatie bevat die nodig is om verbinding te maken met de database: een gebruikersnaam en wachtwoord, de naam van de database en het serveradres. Omdat het wachtwoord in het OVH Control Panel is gewijzigd, is de verbinding verbroken.

Om het te herstellen, moet u het nieuwe wachtwoord invoeren in het bestand met de informatie voor de database. Aangezien deze procedure deel uitmaakt van de configuratie van uw website in plaats van de diensten die door OVH worden geleverd, raden wij u aan contact op te nemen met de editor van de website of anders met een professional zoals een gespecialiseerde serviceaanbieder om hier hulp bij te krijgen.

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.