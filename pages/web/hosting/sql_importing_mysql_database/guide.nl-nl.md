---
deprecated: true
title: 'Een backup importeren in de database van een webhostingplan'
slug: gedeelde-handleiding-importeren-mysql-databank
excerpt: 'Ontdek hoe u een backup in de database van een webhostingplan kunt importeren'
section: Databases
order: 4
updated: 2018-09-25
---

**Laatste update 21-06-2018**

## Introductie

Databases worden gebruikt in vrijwel alle moderne content management systemen (CMS), zoals WordPress of Joomla!, om dynamische elementen zoals opmerkingen of artikelen op te slaan. Om verschillende redenen is het mogelijk dat u gegevens in een van uw databases moet importeren om de inhoud ervan te wijzigen of te vervangen.

**Ontdek hoe u een backup in een webhosting-database kunt importeren.**

## Vereisten

- U moet beschikken over een [OVH-webhosting plan](https://www.ovhcloud.com/nl/web-hosting/){.external}.
- U moet een database hebben die is gemaakt als onderdeel van een [OVH-webhostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external}.
- U moet in het bezit zijn van de backup die u in uw database wilt importeren of u moet het kunnen ophalen.
- Afhankelijk van de importmethode die u gebruikt, moet u het webhostingpakket vanuit uw OVH Control Panel kunnen beheren of over de informatie beschikken die u nodig hebt om verbinding te maken met de database.

## Instructies

Voordat u aan de slag gaat, moet u kiezen welke methode u gaat gebruiken om de backup in de betreffende database te importeren. Er zijn drie manieren om dit te doen, afhankelijk van uw niveau van technische kennis.

- **Herstel een eerdere versie van uw database** in slechts een paar klikken: deze oplossing kan worden gebruikt om de inhoud van uw databases te herstellen, dankzij de backups die aanwezig zijn in de OVH backup-tool. Deze oplossing heeft geen specifieke technische kennis en kan worden uitgevoerd vanaf uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

- **Importeer uw eigen backup-bestand** in slechts een paar klikken: met deze oplossing kunt u de gegevens uit uw eigen backup-bestand, dat al in uw bezit is, importeren in een van uw databases. Deze oplossing wordt uitgevoerd vanaf uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}.

- **Voer de import uit vanuit de phpMyAdmin webinterface**: bij deze oplossing moet u zich inloggen bij de phpMyAdmin-interface om de procedure uit te voeren. U moet daarom vertrouwd zijn met deze interface om deze methode te gebruiken, en het backup-bestand mag een bepaald formaat niet overschrijden.

- **Voer de import uit met behulp van een script**: deze oplossing vereist het schrijven van een script, gehost op uw OVH webhostingplan, dat de import zal uitvoeren. Het schrijven van dit script vereist een zeker niveau van technische kennis.

- **Voer de import uit middels een SSH-commandoregel**: bij deze oplossing gebruikt u het SSH-protocol om u in te loggen op uw opslagruimte en vervolgens commando‘s te gebruiken om met die opslagruimte te communiceren. Er is meer geavanceerde kennis en een specifiek [OVH-hostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external} vereist om dit type toegang te gebruiken.

Enkele van de procedures zijn niet opgenomen in de OVH-interface. U zult daarom op uw eigen kennis moeten vertrouwen om deze procedures te volgen. We hebben hieronder enkele instructies uiteengezet, maar deze zijn geen vervanging voor de hulp van een webmaster.

We raden u aan om deze documentatie te lezen in overeenstemming met de importmethode die u wilt gebruiken.

> [!warning]
>
> OVH biedt u diensten waarvoor u verantwoordelijk bent, ook met betrekking tot hun configuratie en beheer. U bent er daarom verantwoordelijk voor dat ze correct werken.
>
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om de diensten van een gespecialiseerde provider in te schakelen en/of contact op te nemen met de uitgever van de software voor de dienst als u problemen ondervindt. We kunnen u niet zelf helpen. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
>

### Een backup terugzetten vanaf uw Control Panel

Log hiervoor eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Databases`{.action}-tabblad.

De getoonde tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan. U kunt nu klikken op de drie stippen rechts van de database die u op een eerdere datum in zijn versie wilt herstellen en vervolgens op `Backup terugzetten`{.action}. Merk op dat dit de huidige inhoud van de database zal vervangen door de inhoud van de backup.

![databaseimport](images/database-import-step5.png){.thumbnail}

Alle beschikbare backups voor de door u geselecteerde database worden nu weergegeven. U kunt de exacte datum van de backups zien evenals de datum waarop ze uit de OVH-tool worden verwijderd.

Klik op de drie stippen rechts van de backup die u wilt herstellen en vervolgens op `Backup terugzetten (herstellen)`{.action}. Controleer in het popup-venster of de informatie juist is en klik op `Bevestigen`{.action}. Wacht nu totdat het herstelproces is voltooid.

![databaseimport](images/database-import-step6.png){.thumbnail}

### Uw backup importeren vanaf uw Control Panel

Log hiervoor eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Databases`{.action}-tabblad.

De getoonde tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan. U kunt nu klikken op de drie stippen rechts van de database waarin u data wilt importeren, en vervolgens op `Bestand importeren`{.action}.

![databaseimport](images/database-import-step1.png){.thumbnail}

Selecteer in het popup-venster het vakje Een nieuw bestand importeren en klik vervolgens op Volgende.

> [!primary]
>
> Met de knop `Een bestaand bestand gebruiken`{.action} kunt u gegevens opnieuw importeren uit een bestand dat u al naar de importtool hebt verzonden.
>

![databaseimport](images/database-import-step2.png){.thumbnail}

Vul een bestandsnaam in (zodat u dit opgeslagen bestand later kunt identificeren als u het wilt herstellen) en selecteer vervolgens, naast `Bestand`, het opgeslagen databasebestand op uw computer. Klik op `Verzenden`{.action}.

Wacht even tot de interface aangeeft dat het bestand met succes verzonden is en klik op de knop Volgende.

![databaseimport](images/database-import-step3.png){.thumbnail}

Kies of u de weergegeven extra opties wel of niet wilt toepassen:

- **De huidige database legen**: als u dit vakje selecteert, wordt de momenteel aanwezige inhoud van de database geheel verwijderd en vervangen door de inhoud van uw opgeslagen bestand. Als (en alleen als) u de huidige inhoud van de database wilt vervangen door de inhoud van het backup-bestand, raden we u aan dit selectievakje aan te vinken;

- **Een e-mail verzenden aan het einde van de import**: door dit vakje te selecteren, ontvangt u een melding per e-mail zodra de database geïmporteerd is.

Nadat u uw keuze hebt gemaakt, klikt u op de knop `Bevestigen`{.action} en wacht u totdat het importproces is voltooid.

![databaseimport](images/database-import-step4.png){.thumbnail}

### Voer de import uit vanuit de phpMyAdmin webinterface

Om deze procedure uit te voeren, moet u inloggen op phpMyAdmin. Log hiervoor eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga naar het `Databases`{.action}-tabblad.

De getoonde tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan. Klik in deze tabel op de drie stippen rechts van de betreffende database en vervolgens op `Ga naar phpMyAdmin`{.action}.

![databaseimport](images/database-import-step7.png){.thumbnail}

Als u eenmaal op de phpMyAdmin-pagina bent, voert u de informatie over de database in, gebruikt u de vervolgkeuzelijst om toegang te krijgen tot de gegevens van de huidige versie van de database en meldt u zich aan. Nadat u bent ingelogd, gaat u naar het tabblad `Importeren`{.action} en vult u de gevraagde informatie in. Let op: er is een limiet aan de grootte van het backup-bestand dat u kunt gebruiken.

> [!warning]
>
> Omdat de phpMyAdmin-interface niet door OVH is ontwikkeld, moet u de procedure naar gelang uw eigen expertise uitvoeren.  We raden u echter aan om contact op te nemen met een gespecialiseerde serviceprovider en/of ontwikkelaar van de gebruikersinterface als u problemen ondervindt. We kunnen u hier niet zelf mee helpen.
>

### Importeer een backup met een script

De procedure bestaat uit verschillende stappen. Zorg ervoor dat u in het bezit bent van het backup-bestand dat u wilt importeren en de informatie waarmee u verbinding kunt maken met de database die de import ontvangt: een gebruikersnaam, het bijbehorende wachtwoord, de naam van de database en het adres van de server.

> [!warning]
>
> Deze oplossing is technisch en vereist programmeerkennis. Hieronder vindt u enige informatie over hoe u verder moet gaan. We raden u echter aan om contact op te nemen met een gespecialiseerde provider als u problemen ondervindt. We kunnen u niet zelf helpen.
>

#### Stap 1: Creëer het importscript

De eerste stap is om het script te maken waarmee u naar uw database kunt importeren. Hieronder vindt u een voorbeeld van een script dat u kan helpen bij dit proces, hoewel het geen vervanging is voor de hulp van een webmaster.

```php
<?php
system("cat backup_bestandsnaam.sql | mysql --host=adres_server --user=naam_gebruiker --password=wachtwoord_gebruikersnaam naam_database");
?>
```

Zorg ervoor dat u de generieke informatie in dit script vervangt door de feitelijke informatie voor de betreffende database, met behulp van de onderstaande elementen. Zodra het script is voltooid, raden we aan dat u dit 'import.php' (of iets dergelijks) noemt.

|Informatie|Vervang met|
|---|---|
|backup_bestandsnaam|De naam van het back-upbestand dat u wilt importeren.|
|adres_server|Het serveradres voor de database waarnaar u de gegevens gaat importeren.|
|naam_gebruiker|De naam van de gebruiker met toegangsmachtigingen voor de betreffende database.|
|wachtwoord_gebruikersnaam|Het wachtwoord voor de gebruikersnaam die hierboven is ingevoerd.|
|naam_database|Naam van de database|

#### Stap 2: Upload het script en de backup naar de opslagruimte

Nadat het backup-script correct is gegenereerd, moet u het uploaden en het backup-bestand dat u wilt importeren naar de opslagruimte van uw webhostingplan. Om dit te doen, moet u inloggen op uw opslagruimte. Als u niet weet hoe u dit moet doen, raadpleegt u de instructies in stap 2 van de documentatie, "[Aanmelden bij uw opslagruimte](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/#2-log-in-to-your-storage-space){.external}".

Om de volgende stappen uit te voeren, moet u het script en het backup-bestand uploaden naar de map "www". **We raden u aan bijzonder attent te zijn op de naam van het importscript.** Pas op dat u een bestaand bestand met dezelfde naam niet overschrijft in uw opslagruimte wanneer u het script uploadt. Als er een waarschuwingsbericht verschijnt, wijzigt u de naam van het script dat u zojuist hebt gemaakt en probeert u het opnieuw te uploaden.

#### Stap 3: Starten van een script 

Nu het importscript en het backup-bestand naar uw opslagruimte zijn geüpload, hoeft u alleen nog maar de procedure te starten. Om dit te doen, moet het script worden opgeroepen.

Om deze procedure uit te voeren, moet u vanuit uw webbrowser naar de volledige URL van het script gaan (bijvoorbeeld mypersonaldomain.ovh/import.php, als u uw script hebt opgeslagen als "import.php"). Als de in het script ingevoerde informatie correct is, wordt het importproces gestart. Het uitvoeren van het script duurt enkele momenten. Als dit niet het geval is, controleert u de informatie die in het script is ingevoerd en probeert u het opnieuw.

Nadat u de backup hebt geïmporteerd, raden wij u ten zeerste aan het backup-bestand en het script uit de map "www" te verwijderen.

### Een backup importeren met een SSH-commando

Als u deze methode wilt volgen, moet u de opdrachten van een terminal gebruiken om te communiceren met uw opslagruimte.

> [!warning]
>
> Gebruik van dit type toegang vereist geavanceerde kennis. Hieronder vindt u informatie over de procedure. We raden u echter aan om contact op te nemen met een gespecialiseerde serviceprovider als u problemen ondervindt. We kunnen u hier niet zelf mee helpen.
>

Nadat u zich via een SSH-verbinding bij uw opslagruimte hebt ingelogd, moet u een commando uitvoeren die uw database zal importeren. Hieronder is een voorbeeld om u te helpen bij uw procedure. Houd er rekening mee dat het backup-bestand dat moet worden geïmporteerd vooraf moet worden geladen en dat het commando naar de terminal moet worden verzonden door naar de map te gaan waarin het zich bevindt.

```sh
cat backup_bestandsnaam.sql | mysql --host=adres_server --user=naam_gebruiker --password=wachtwoord_gebruikersnaam naam_database
```

Vergeet niet om de algemene informatie in de opdracht te vervangen door informatie over de juiste database. Nadat u de backup hebt geïmporteerd, raden we u aan het backup-bestand en het script te verwijderen uit de map waarnaar u ze hebt geüpload.

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.