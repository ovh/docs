---
deprecated: true
title: 'Gebruik van Backup Storage op een dedicated server'
slug: diensten-backup-storage
excerpt: 'Ontdek hoe u uw Backup Storage kunt activeren en gebruiken'
section: Opslagruimte
---

**Laatste update 29-08-2018**

## Introductie

Als onderdeel van ons [dedicated server](https://www.ovh.nl/dedicated_servers){.external} aanbod wordt een backup-ruimte van 500 GB per server beschikbaar gesteld waarmee u uw data kunt [beveiligen](https://docs.ovh.com/nl/dedicated/beveiligen-dedicated-server/){.external}.

**Deze handleiding geeft uitleg over het inschakelen en gebruiken van deze backup-opslagruimte.**


## Vereisten

- U moet in het bezit zijn van een [dedicated server](https://www.ovh.nl/dedicated_servers/){.external}.
- U moet ingelogd zijn op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external}, in het gedeelte `Dedicated`{.action}. 


## Instructie

### Activeer uw opslagruimte

Log in op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} en ga naar uw serverpagina in het `Dedicated`{.action}-gedeelte. Selecteer vervolgens het tabblad `Backup Storage`{.action} en klik op de knop `Backup Storage inschakelen`{.action}, en bevestig dit.

![Activeer uw opslagruimte](images/backup_storage_activation.png){.thumbnail}

U ontvangt een activatie-e-mail en uw Backup Storage is binnen enkele minuten beschikbaar.


### Configureer toegangscontrole

Toegang tot uw opslag wordt beperkt door het IP-adres met behulp van een *Access Control List* (ACL). Standaard hebben alle IP-adressen in uw account FTP/FTPS-toegang tot de opslagruimte. Andere protocollen (NFS en CIFS) zijn standaard niet toegestaan. Om ze in te schakelen, moet u een ACL aanmaken.


#### Voeg toegang toe

Klik in de ruimte voor `Backup Storage`{.action} op `Toegang toevoegen.`{.action}

![Een backup-toegang toevoegen](images/add_access.png){.thumbnail}

Selecteer het IP-blok dat u wilt toestaan. Nadat u het hebt geselecteerd, kiest u het protocol dat u wilt toestaan en klikt u op `Volgende`{.action}.

> [!primary]
>
> U kunt alleen IP-blokken toestaan in uw OVH account om toegang te krijgen tot de backup-opslag.
>

![Een backup-toegang toevoegen](images/add_access_ip.png){.thumbnail}

U moet de toevoeging van toegang bevestigen door op `Voltooien`{.action} te klikken.

![Een backup-toegang toevoegen](images/add_access_confirmation.png){.thumbnail}

U hebt dan toegang tot de ﻿Backup Storage van uw server vanaf het geselecteerde IP-blok.


#### Bewerk toegang 

Als u de protocollen voor een toegestaan IP-blok wilt bewerken, klikt u op de knop`...`{.action} en vervolgens op `Toegang bewerken`{.action} op de regel die overeenkomt met het blok dat u wilt bewerken. Selecteer of deselecteer vervolgens de gewenste protocollen. Als u klaar bent, klikt u op `Bevestigen`{.action} om deze wijzigingen te bevestigen.

![Toegang bewerken](images/modify_access.png){.thumbnail}


#### Verwijder toegang 

Als u de autorisatie van een IP-blok wilt intrekken, klikt u op de knop`...`{.action} en vervolgens op `Toegang verwijderen`{.action} op de regel die overeenkomt met het blok dat u wilt verwijderen.

![Toegang bewerken](images/delete_access.png){.thumbnail}

Klik ten slotte op `Bevestigen`{.action}. Toegang tot de Backup Storage wordt nu ingetrokken voor het betreffende IP-blok.


### Bevestig wachtwoord

Klik in het gedeelte `Backup Storage`{.action} op `Wachtwoord vergeten?`{.action} en bevestig dit.

![Uw wachtwoord bevestigen](images/forgotten_password.png){.thumbnail}

Een wachtwoordherstel-e-mail wordt verzonden naar het geregistreerde e-mailadres in uw admin-account. U hoeft slechts de instructies ervan te volgen om uw wachtwoord opnieuw in te stellen.


### Verwijder Backup Storage

Klik in de ruimte voor `Backup Storage`{.action} op `Backup Storage verwijderen`{.action} en bevestig.

![Backup Storage verwijderen](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> De verwijdering is een onomkeerbare actie.
> 

Uw Backup Storage zal na enkele minuten permanent worden verwijderd.


### Bestel extra schijfruimte

Klik in de ruimte voor `Backup Storage`{.action} op de knop `Schijfruimte bestellen`{.action}. 

![Schijfruimte bestellen](images/additional_space_order.png){.thumbnail}

Selecteer de opslagcapaciteit die u wilt verkrijgen en klik op `Volgende`{.action}.

![Aanvullende ruimte](images/additional_space_order_selection.png){.thumbnail}

U moet de algemene voorwaarden en het verzoek nog lezen en valideren door op `Bevestigen`{.action} te klikken

Er wordt een bestelbon aangemaakt. Zodra uw betaling is voltooid, is er extra opslagruimte beschikbaar.


### Gebruik Backup Storage 

> [!primary]
>
> Backup Storage voert geen automatische backup van uw data uit. Het biedt alleen opslagruimte en toegangsprotocollen. Het is uw verantwoordelijkheid om een geschikte backup-strategie te implementeren met behulp van de tools van uw keuze. OVH kan niet verantwoordelijk worden gehouden voor de data in deze opslagruimte.
>


#### FTP/FTPS

##### NcFTP (voor Linux)

Om een enkel bestand op te slaan, kunt u het volgende commando gebruiken:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Dit commando ondersteunt het FTPS-protocol niet. Als u een veilige overdracht wilt maken, moet u de lftp-client of de cURL-interface gebruiken.**

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **FolderLocation**: het pad naar de doelmap waar u het bestand wilt opslaan.
* **File**: de naam van het bestand dat u wilt opslaan.

Als u een backup van een map wilt maken, archiveert u deze en draagt u deze over naar uw backup-map:

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FolderName**: het directorypad waarvan u een backup wilt maken.
* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **ArchiveName**: de naam van de map waarvan u een backup wilt maken. 

Om een archiefbestand te downloaden van uw backup-opslag, kunt u het volgende commando gebruiken:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **LocalFolder**: het pad naar de lokale map waar u het bestand wilt opslaan.
* **File**: het pad van het te downloaden bestand.

##### cURL (voor Linux)

> [!primary]
>
> Als u het FTPS-protocol wilt gebruiken, moet u de naam van uw backup-opslag wijzigen. Als de naam bijvoorbeeld "ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net" is, moet u deze veranderen naar "ftpback-rbxX-YYY.mybackup.ovh.net". U moet ook `-ssl` toevoegen aan het onderstaande commando.
>

Om een enkel bestand op te slaan, kunt u het volgende commando gebruiken:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **File**: de naam van het bestand dat u wilt opslaan.
* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **FolderLocation**: het pad naar de doelmap waar u het bestand wilt opslaan.

Als u een backup van een map wilt maken, archiveert u deze en draagt u deze over naar uw backup-map:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FolderName**: het directorypad waarvan u een backup wilt maken.
* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **FolderLocation**: het pad naar de doelmap waar u het bestand wilt opslaan.
* **ArchiveName**: de naam van de map waarvan u een backup wilt maken. 

Om een archiefbestand te downloaden van uw backup-opslag, kunt u het volgende commando gebruiken:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **LocalFolder**: het pad naar de lokale map waar u het bestand wilt opslaan.
* **File**: het pad van het te downloaden bestand.


##### lftp (voor Linux)

> [!primary]
>
> lftp gebruikt standaard FTP+SSL/TLS. U moet de naam van uw Backup Storage wijzigen. Als de naam bijvoorbeeld "ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net" is, moet u deze veranderen naar "ftpback-rbxX-YYY.mybackup.ovh.net".
>

Om een enkel bestand op te slaan, kunt u het volgende commando gebruiken:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **File**: de naam van het bestand dat u wilt opslaan.
* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **FolderLocation**: het pad naar de doelmap waar u het bestand wilt opslaan.

Als u een backup van een map wilt maken, archiveert u deze en draagt u deze over naar uw backup-map:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FolderName**: het directorypad waarvan u een backup wilt maken.
* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **FolderLocation**: het pad naar de doelmap waar u het bestand wilt opslaan.
* **ArchiveName**: de naam van de map waarvan u een backup wilt maken. 

Om een archiefbestand te downloaden van uw backup-opslag, kunt u het volgende commando gebruiken:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **FtpUsername**: uw FTP-gebruikersnaam.
* **FtpPassword**: uw FTP-wachtwoord.
* **HostName**: uw Backup Storage naam.
* **LocalFolder**: het pad naar de lokale map waar u het bestand wilt opslaan.
* **File**: het pad van het te downloaden bestand.

##### FileZilla

Nadat u FileZilla op uw server hebt geïnstalleerd, kunt u het configureren om verbinding te maken met uw Backup Storage met behulp van de FTP-inloggegevens die naar u zijn verzonden toen u uw Backup Storage activeerde. Om u in te loggen hebt u de gebruikersnaam en het wachtwoord nodig.


#### NFS

Zorg er allereerst voor dat u uw IP-blokken toegang hebt gegeven tot opslag en het gebruik van het NFS-protocol. Afhankelijk van uw Linux-besturingssysteem, moet u mogelijk de NFS-client installeren en de NFS/portmap-service starten.

Nadat de NFS-client is geïnstalleerd en de portmap-service is gestart, kunt u de NFS-share als een normale partitie koppelen, zoals hieronder wordt weergegeven:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **HostName**: uw Backup Storage naam.
* **ServiceName**: de naam van uw server (bijv. ns0000000.ip-123-123-123.net).
* **FolderMount**: de map waar u de NFS-share wilt mounten.

Nadat de share is gemount, kunt u commando's zoals **cp** en rsync gebruiken zoals u zou doen met een normale directory.


#### CIFS

##### Windows

Log in op uw server, open de opdrachtprompt en voer het volgende commando in: 

```sh
net use z: \\HostName\ServiceName
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **HostName**: uw Backup Storage naam.
* **ServiceName**: de naam van uw server (bijv. ns0000000.ip-123-123-123.net).

##### Linux

Maak een SSH-verbinding met uw server en voer u het volgende commando in:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

De voorbeeldcode hierboven bevat variabelen die u moet vervangen met uw eigen waarden.

* **HostName**: uw Backup Storage naam.
* **ServiceName**: de naam van uw server (bijv. ns0000000.ip-123-123-123.net).
* **FolderMount**: de map waar u de share wilt mounten (deze moet al bestaan).


## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.