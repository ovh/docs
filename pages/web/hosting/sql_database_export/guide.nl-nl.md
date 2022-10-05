---
deprecated: true
title: 'Een backup van een webhosting-database ophalen'
slug: export-databases
excerpt: 'Ontdek hoe u een backup van de database van een OVH webhostingplan kunt verkrijgen'
section: Databases
order: 03
---

**Laatste update 29-06-2018**

## Introductie

Databases worden gebruikt in vrijwel alle moderne content management systemen (CMS), zoals WordPress of Joomla!, om dynamische elementen zoals opmerkingen of artikelen op te slaan. Om verschillende redenen, moet u mogelijk een backup van uw database maken om de inhoud ervan te herstellen.

**Deze handleiding legt uit hoe u een backup van de database van een OVH webhostingplan kunt verkrijgen**

## Vereisten

- U moet beschikken over een [OVH webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external}.
- U moet beschikken over een database die is gemaakt als onderdeel van een [OVH webhostingplan](https://www.ovh.com/nl/shared-hosting/){.external}.
- Afhankelijk van de door u gebruikte backup-methode, moet u het webhostingpakket via uw OVH Control Panel kunnen beheren, of over de informatie beschikken die u nodig hebt om verbinding te maken met de database.

## Instructies

Voordat u deze procedure start, moet u kiezen welke methode u gaat gebruiken om de backup van de database op te halen. Er zijn drie manieren om dit te doen, afhankelijk van uw niveau van technische kennis.

- **Gebruik de OVH backup-tool**: met deze oplossing kunt u backups van uw databases verkrijgen via het [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}. Dit is de meest toegankelijke oplossing, omdat er geen specifieke technische kennis voor nodig is.

- **Voer de backup uit vanuit de phpMyAdmin-webinterface**: deze oplossing houdt in dat u zich aanmeldt bij de phpMyAdmin-interface om de procedure uit te voeren. Daarom moet u deze tool goed beheersen als u deze methode wilt gebruiken.

- **Gebruik een script om de backup uit te voeren**: deze oplossing bestaat uit het maken van een script dat is opgeslagen op uw OVH-webhostingruimte en voert de backup uit. Het schrijven van dit script vereist een zeker niveau van technische kennis.

- **Voer de backup uit via een SSH-commandoregel**: bij deze oplossing gebruikt u het SSH-protocol om u in te loggen op uw opslagruimte en gebruikt u vervolgens commando's om met die opslagruimte te communiceren. Er is meer geavanceerde kennis en een specifiek [OVH hostingplan](https://www.ovh.com/nl/shared-hosting/){.external} vereist om dit type toegang te gebruiken.

Sommige van de bovenstaande procedures komen niet uit de gebruikersinterface van OVH. U zult daarom op uw eigen kennis moeten vertrouwen om deze procedures te volgen. We hebben hieronder enkele instructies uiteengezet, maar deze zijn geen vervanging voor de hulp van een webmaster.

Lees deze documentatie verder volgens de gewenste backup-methode.

> [!warning]
>
> OVH biedt u diensten waarvoor u verantwoordelijk bent, ook met betrekking tot hun configuratie en beheer. U bent er daarom verantwoordelijk voor dat ze correct werken.
>
> Wij stellen u deze handleiding ter beschikking om u zo goed mogelijk te begeleiden bij deze dagelijkse taken. We raden u echter aan om de diensten van een gespecialiseerde provider in te schakelen en/of contact op te nemen met de uitgever van de software voor de dienst als u problemen ondervindt. We kunnen u niet zelf helpen. Meer informatie in het gedeelte ‘Verder’ in deze handleiding.
>

### Een backup verkrijgen met behulp van de OVH tool

Om uw OVH backup-tool te openen logt u eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik dan op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, en kies het bijbehorende webhostingplan. Ga naar het `Databases`{.action}-tabblad.

De weergegeven tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan. U kunt nu kiezen om een nieuwe backup uit te voeren en een bestaande backup op te halen, in twee afzonderlijke stappen.

#### Stap 1: Voer een nieuwe backup van de database uit

Klik op het tabblad `Databases`{.action}, klik op de drie puntjes rechts van de database waarvan u een backup wilt maken en klik vervolgens op `Backup maken`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Selecteer in het popup-venster de gewenste datum voor de backup en klik vervolgens op de knop `Volgende`{.action}. Controleer of de informatie in de samenvatting correct is en klik vervolgens op `Bevestigen`{.action} om de procedure te starten.

Wacht tot de backup is voltooid. Zodra het beschikbaar is, kunt u het herstellen.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Stap 2: Verkrijg een backup van de database 

Klik op het tabblad `Databases`{.action} op de drie puntjes rechts van de database waarvan u de backup wilt herstellen en vervolgens op `Een backup terugzetten`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

De getoonde tabel bevat alle beschikbare backups voor de database die u hebt geselecteerd. U kunt de exacte datum van elke backup en de datum waarop ze worden verwijderd uit de OVH tool raadplegen.

Als u een backup wilt laden, klikt u op de drie puntjes rechts van de backup die u wilt herstellen en klikt u vervolgens op `Backup laden`{.action}. Er verschijnt een venster waarin u wordt gevraagd de backup op uw computer op te slaan. Accepteer deze en wacht vervolgens tot de backup is gedownload.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Een backup herstellen via de webinterface phpMyAdmin

Om deze procedure uit te voeren, moet u inloggen op phpMyAdmin. Om de toegangslink voor deze interface te krijgen logt u in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klikt u op `Webhosting`{.action} in de dienstenbalk aan de linkerkant en selecteert u vervolgens het betreffende plan. Ga naar het `Databases`{.action}-tabblad.

De weergegeven tabel bevat alle e-mailadressen die zijn aangemaakt als onderdeel van uw webhostingplan. Klik in deze tabel op de drie puntjes rechts van de betreffende database en vervolgens op `Ga naar phpMyAdmin`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Zodra u zich op de phpMyAdmin-pagina bevindt, voert u de informatie over de database in, gebruikt u de vervolgkeuzelijst om te selecteren of u de gegevens uit de huidige versie van de database of uit een vorige backup wilt weergeven, en logt u zich in. Zodra u bent ingelogd, gaat u naar het tabblad `Export`{.action}, waarbij u kunt kiezen tussen twee methoden voor het exporteren:

- **snelle methode**: u kunt het exportformat voor de backup definiëren. Het meest voorkomende format is SQL, maar andere indelingen zijn beschikbaar, indien nodig;

- **aangepaste methode**: u kunt de export- en backup-parameters in detail definiëren.

> [!warning]
>
> Omdat de phpMyAdmin-interface niet door OVH is ontwikkeld, moet u de procedure naar gelang uw eigen expertise uitvoeren.  We raden u echter aan om contact op te nemen met een gespecialiseerde serviceprovider en/of ontwikkelaar van de gebruikersinterface als u problemen ondervindt. We kunnen u hier niet zelf mee helpen.
>

### Herstel een backup met een script

De procedure bestaat uit verschillende stappen. Zorg ervoor dat u over de informatie beschikt waarmee u verbinding kunt maken met de database waarvan u een backup wilt maken: een gebruikersnaam, het bijbehorende wachtwoord, de naam van de database en het adres van de server.

> [!warning]
>
> Deze oplossing is technisch en vereist programmeerkennis. Hieronder vindt u enige informatie over hoe u verder moet gaan. We raden u echter aan om contact op te nemen met een gespecialiseerde provider als u problemen ondervindt. We kunnen u hier niet zelf mee helpen.
>

#### Stap 1: Creëer het backup-script

De eerste stap is het creëren van het script waarmee u een backup van uw database kunt maken. Hieronder vindt u een voorbeeld van een script dat u kan helpen bij dit proces, hoewel het geen vervanging is voor de hulp van een webmaster.

```php
system("mysqldump --host=adresse_du_serveur --user=nom_utilisateur --password=mot_de_passe_utilisateur nom_base_de_données > nom_fichier_sauvegarde.sql");
?>
```

Zorg ervoor dat u de generieke informatie in dit script vervangt door de feitelijke informatie voor de betreffende database, met behulp van de onderstaande elementen. Zodra het script is voltooid, raden we aan dat u dit 'backup.php' (of iets dergelijks) noemt.

|Informatie|Vervang met|
|---|---|
|adres-server|Het serveradres voor de betreffende database.|
|naam_gebruiker|De naam van de gebruiker met toegangsmachtigingen voor de database.|
|wachtwoord_gebruikersnaam|Het wachtwoord voor de gebruikersnaam die hierboven is ingevoerd.|
|naam_database|Naam van de database|
|backup_bestandsnaam|De naam die wordt gegeven aan het backup-bestand nadat het is gemaakt.|

> [!primary]
>
> U kunt een backup van een vorige datum maken door een poort aan uw script toe te voegen. Gebruik '3307' om een backup te maken die 1 dag teruggaat (tot gisteren). Gebruik poort '3317' voor een backup die zeven dagen teruggaat. 
> 
> Ter informatie kan het gebruik van poort '3306' worden ingezet om een backup te maken van de gegevens die momenteel in de database aanwezig zijn.
>

#### Stap 2: Upload het script naar de opslagruimte

Nadat het backup-script correct is gegenereerd, moet u het uploaden naar de opslagruimte van uw webhostingplan. Om dit te doen, moet u inloggen op uw opslagruimte. Als u niet weet hoe u dit moet doen, raadpleegt u de instructies in stap 2 van de documentatie, "[Aanmelden bij uw opslagruimte](https://docs.ovh.com/nl/hosting/mijn-website-online-zetten/){.external}".

Om de volgende stappen uit te voeren, moet u het script downloaden naar de map "www". **We raden u aan bijzonder attent te zijn op de naam van het backup-script-bestand.** Pas op dat u een bestaand bestand met dezelfde naam niet overschrijft in uw opslagruimte wanneer u het script uploadt. Als er een waarschuwingsbericht verschijnt, wijzigt u de naam van het script dat u zojuist hebt gemaakt en probeert u het opnieuw te uploaden.

#### Stap 3: Oproepen van een script 

Nu het script naar uw opslagruimte is geüpload, hoeft u alleen maar de code erin uit te voeren. Om dit te doen, moet het script worden opgeroepen.

Om deze procedure uit te voeren, moet u vanuit uw webbrowser naar de volledige URL van het script gaan (bijvoorbeeld <mypersonaldomain.ovh/backup.php>, als u uw script hebt opgeslagen als "backup.php"). Als de in het script ingevoerde informatie correct is, wordt het backup-proces gestart. Het uitvoeren van het script duurt enkele momenten. Als dit niet het geval is, controleert u de informatie die in het script is ingevoerd en probeert u het opnieuw.

#### Stap 4: Herstel de backup vanaf de opslagruimte

Zodra de backup is voltooid, kunt u deze ophalen uit de map waarnaar u het backup-script hebt geüpload. De backup van de database krijgt de naam die daarvoor in het script was gedefinieerd. Het enige dat u nu hoeft te doen, is de backup op uw eigen computer opslaan.

Als laatste stap raden we u ten zeerste aan het backup-bestand en het script uit de map "www" te verwijderen.

> [!primary]
>
> Het gebruik van een backup-script en geplande taken (ook wel 'CRON'-taken genoemd) is een manier om automatische backups te organiseren met het interval van uw keuze. U kunt meer te weten komen over geplande taken in onze handleiding: [Een geplande taak (CRON) instellen in uw webhostingruimte](https://docs.ovh.com/nl/hosting/hosting_geautomatiseerde_takencron/){.external}.
>

### Een backup herstellen via een SSH-commando

Als u deze methode wilt volgen, moet u de opdrachten van een terminal gebruiken om te communiceren met uw opslagruimte.

> [!warning]
>
> Gebruik van dit type toegang vereist geavanceerde kennis. Hieronder vindt u informatie over de procedure. We raden u echter aan om contact op te nemen met een gespecialiseerde serviceprovider als u problemen ondervindt. We kunnen u hier niet zelf mee helpen.
>

Nadat u zich via een SSH-verbinding bij uw opslagruimte hebt ingelogd, moet u een commando uitvoeren die een backup van uw uw database zal maken. Hieronder is een voorbeeld om u te helpen bij uw procedure. Houd er rekening mee dat de backup wordt uitgevoerd in de actieve map wanneer u de opdracht verzendt naar uw terminal.

```sh
mysqldump --host=adresse_du_serveur --user=nom_utilisateur --password=mot_de_passe_utilisateur nom_base_de_données > nom_fichier_sauvegarde.sql
```

Vergeet niet om de algemene informatie in de opdracht te vervangen door informatie over de juiste database. Nadat de backup is voltooid, kunt u deze opslaan op uw eigen computer.

## Verder

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.