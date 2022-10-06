---
deprecated: true
title: 'De opslagruimte van uw webhosting herstellen'
slug: herstel-ftp-filezilla-control-panel
excerpt: 'Leer hoe u een bestand of de volledige inhoud van uw opslagruimte van uw webhosting kunt herstellen.'
section: 'FTP en SSH'
order: 06
---

**Laatste update 25-09-2018**

## Introductie

Uw OVH webhosting geeft u toegang tot opslagruimte waarop u uw websites kunt hosten. Om verschillende redenen, zoals het verwijderen of wijzigen van een bestand dat een site ontoegankelijk maakt, moet u mogelijk alle gegevens in uw opslag, of alleen een bestand dat erin is opgeslagen, herstellen.

**Deze handleiding beschrijft hoe u een bestand of de volledige inhoud van uw opslagruimte van uw webhosting kunt herstellen.**

## Vereisten

- U moet beschikken over een [webhostingplan](https://www.ovhcloud.com/nl/web-hosting/){.external} (behalve Cloud Web).
- Afhankelijk van de gebruikte methode, moet u toegang hebben tot een webhostingplan vanaf uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, of een FTP-gebruikerswachtwoord waarmee u zich kunt inloggen op uw opslagruimte. 

## Instructies

Voordat u begint, moet u ervoor zorgen dat u de herstelde datums kunt gebruiken om de opslagruimte van uw webhostingplan terug te zetten naar de door u gekozen datum:

- dezelfde dag, om 00:01 uur;
- de dag ervoor, om 00:01 uur;
- twee dagen ervoor, om 00:01 uur;
- de voorgaande zondag om 01:00 uur 's ochtends;
- zondag, twee weken ervoor, om 01:00 uur 's ochtends.

Als u een backup uit een eerdere periode wilt ophalen, kan OVH deze niet aan u verstrekken. We raden u aan vooraf persoonlijke backups van uw website te maken en deze te gebruiken als u een eerdere backup wilt. 

U moet ook beslissen welke herstelmethode u zult gebruiken:

|Herstelmethode|Omschrijving|
|---|---|
|Herstel vanaf het OVH Control Panel|Herstelt de volledige inhoud van de opslagruimte. De huidige inhoud wordt volledig vervangen door die van de geselecteerde backup.|
|Herstel van software of interface|Geeft u alleen-lezen toegang tot een backup van de opslagruimte. Hoewel deze methode technischer is, kunt u deze gebruiken om een of meer bestanden van een eerdere datum te herstellen, zonder dat u de volledige inhoud van de opslagruimte hoeft te overschrijven.|

Als u klaar bent om dit te doen, lees dan het gedeelte van deze handleiding dat relevant is voor de door u gekozen herstelmethode.

- [Herstel opslagruimte vanuit het Control Panel.](https://docs.ovh.com/nl/hosting/herstel-ftp-filezilla-control-panel/#uw-opslagruimte-herstellen-vanaf-het-control-panel){.external}

- [Herstel een bestand via een software of interface.](https://docs.ovh.com/nl/hosting/herstel-ftp-filezilla-control-panel/#herstel-een-bestand-via-een-software-of-een-interface){.external}

### Uw opslagruimte herstellen vanaf het Control Panel

Log hiervoor eerst in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external}, klik op `Webhosting`{.action} in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga ten slotte naar het tabblad `FTP-SSH`{.action} en klik op de knop `Backup herstellen`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

Selecteer in het popup-venster de gewenste hersteldatum in het vervolgkeuzemenu met behulp van de onderstaande informatie:

|Datum weergegeven|Technische datum van de backup|
|---|---|
|J-1|dezelfde dag, om 00:01 uur;|
|J-2|de dag ervoor, om 00:01 uur;|
|J-3|twee dagen ervoor, om 00:01 uur;|
|1 week|de voorgaande zondag om 01:00 uur 's ochtends;|
|2 weken|zondag, twee weken ervoor, om 01:00 uur 's ochtends.|

Nadat u een datum hebt geselecteerd, klikt u op `Volgende`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Neem een paar minuten de tijd om te controleren of geen van uw bestanden verloren gaat na het herstel, bijvoorbeeld alle bestanden die zijn opgeslagen op uw opslagruimte na de hersteldatum die u hebt geselecteerd. Zoals vermeld, zal het herstel alle huidige gegevens overschrijven om ze te vervangen door die van de backup.

Zodra u klaar bent om de backup te starten, klikt u op de knop `Bevestigen`{.action}.

### Herstel een bestand via een software of een interface

De procedure bestaat uit verschillende stappen. Zorg ervoor dat u het wachtwoord van de FTP-gebruiker hebt om toegang te krijgen tot uw opslag. 

> [!warning]
>
> Deze oplossing vereist kennis van de software of interface die u gaat gebruiken. Hieronder vindt u enige informatie over hoe u verder moet gaan. We raden u echter aan om contact op te nemen met een gespecialiseerde serviceprovider en/of ontwikkelaar van de gebruikersinterface als u problemen ondervindt. We kunnen u hier niet zelf bij helpen.
>

#### Stap 1: Definieer de te gebruiken software of interface

Stel vast welke software of interface u gaat gebruiken om verbinding te maken met de backup van uw opslag. Als u het al weet, gaat u meteen naar stap 2. Anders raden we aan een van de volgende drie apps te gebruiken:

- **FileZilla**: u moet deze software eerst van de website van de uitgever downloaden. U kunt leren hoe u het kunt gebruiken door onze handleiding over het [Gebruik van FileZilla](https://docs.ovh.com/nl/hosting/webhosting_filezilla_gebruikershandleiding/){.external} te lezen. Let op: het vervangt echter niet de officiële documentatie van de uitgever.

- **Cyberduck**: u moet deze software eerst downloaden van de website van de uitgever. U kunt leren hoe u het kunt gebruiken door onze handleiding over het [Gebruik van Cyberduck](https://docs.ovh.com/nl/hosting/webhosting_handleiding_voor_het_gebruik_van_cyberduck_mac/){.external} te lezen. Let op: het vervangt echter niet de officiële documentatie van de uitgever.

- **FTP Explorer**: u moet deze vooraf openen via uw OVH Control Panel. Zodra u ingelogd bent klikt u op Webhosting in de dienstenbalk aan de linkerkant, kies dan het bijbehorende webhostingplan. Ga ten slotte naar het tabblad `FTP-SSH`{.action} en klik op de knop `FTP Explorer`{.action}.

Als u klaar bent om te beginnen met het aanbrengen van wijzigingen, gaat u verder met de volgende stap.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### Stap 2: Maak verbinding met uw backup.

Voor toegang tot de te herstellen backup-gegevens moet u zich inloggen op uw opslagruimte via de interface of software die u hebt geselecteerd. Om dit te doen, moet u de FTP-gebruikersnaam, het wachtwoord en de hostnaam van uw FTP-server hebben.

U kunt deze informatie vinden op het tabblad `FTP - SSH`{.action} van uw webhostingplan. Als u niet langer in het bezit bent van het wachtwoord, raadpleegt u de instructies in onze handleiding Wijziging van het wachtwoord voor een FTP-gebruiker.

![backupftp](images/backupftp-step4.png){.thumbnail}

U moet uw primaire gebruikersnaam (of FTP-aanmelding) invoeren met een achtervoegsel dat de backup bepaalt waarmee u verbinding wilt maken. Gebruik de onderstaande richtlijnen om te weten hoe u toegang krijgt tot de gewenste backup:

|Backup datum|Toe te voegen suffix|Voorbeeld van een ingevulde gebruikersnaam|
|---|---|---|
|dezelfde dag, om 00:01 uur;|-snap0|ftpgebruiker**-snap0**|
|de dag ervoor, om 00:01 uur;|-snap1|ftpgebruiker**-snap1**|
|twee dagen ervoor, om 00:01 uur;|-snap2|ftpgebruiker**-snap2**|
|de voorgaande zondag om 01:00 uur 's ochtends;|-snap3|ftpgebruiker**-snap3**|
|zondag, twee weken ervoor, om 01:00 uur 's ochtends.|-snap4|ftpgebruiker**-snap4**|

Zorg ervoor dat u 'ftpgebruiker' in de bovenstaande voorbeelden vervangt door uw eigen primaire FTP-gebruikersnaam. Bewaar het achtervoegsel (suffix) dat de te gebruiken backup-datum definieert.

De methode om verbinding te maken met uw opslagruimte is afhankelijk van de door u gebruikte software of interface. Hieronder hebben we een afbeelding toegevoegd die laat zien hoe u verbinding kunt maken via de FTP Explorer-interface.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### Stap 3: Verzamel de bestanden die u wilt herstellen.

Nadat u verbinding hebt gemaakt, verzamelt u de bestanden die u wilt terugzetten. Bekijk hiervoor de inhoud totdat u de bestanden vindt, en haal ze vervolgens op. De methode die u moet gebruiken, is afhankelijk van de door u gebruikte de software of interface.

Voordat u doorgaat naar de volgende stap, moet u ervoor zorgen dat u alle bestanden hebt verzameld die u wilt terugzetten en logt u zich vervolgens uit uw opslagruimte.

#### Stap 4: Herstel de bestanden.

Zodra u de bestanden hebt die u moet terugzetten, maakt u opnieuw verbinding met uw opslagruimte. Voeg deze keer echter geen FTP-gebruikersnaam toe om in te loggen. Door dit achtervoegsel niet in te voeren, maakt u verbinding met de huidige inhoud op uw opslagruimte en niet met een backup van een eerdere datum.

Wanneer u eenmaal bent ingelogd, kunt u de gewenste bestanden herstellen. Om dit te doen, onderzoekt u de inhoud van uw opslagruimte totdat u ze vindt, downloadt u ze en overschrijft u de oude bestanden.

## Verder

[Gebruik van FileZilla bij uw webhosting](https://docs.ovh.com/nl/hosting/webhosting_filezilla_gebruikershandleiding/){.external}

[Gebruik van Cyberduck bij uw webhosting](https://docs.ovh.com/nl/hosting/webhosting_handleiding_voor_het_gebruik_van_cyberduck_mac/){.external}

Ga in gesprek met andere communityleden op <https://community.ovh.com/en/>.