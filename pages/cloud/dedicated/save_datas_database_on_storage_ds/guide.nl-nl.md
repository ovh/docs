---
deprecated: true
title: 'Backup van data en databases op een storage server'
slug: backup-data-database-opslagserver
excerpt: 'Beveilig uw data in 5 stappen'
section: Handleiding
updated: 2022-02-09
---

## Introductie 

Uw elektronische informatie is gevoelig en als u deze verliest of verandert, kan dit snel tot problematische bedrijfssituaties leiden. Omdat er altijd een risico bestaat op gegevensverlies, raden we u aan ten minste één keer per dag een backup te maken, bij voorkeur met behulp van een server of een backup-oplossing anders dan uw productie-infrastructuur.

OVH biedt een reeks [dedicated servers](https://www.ovh.nl/dedicated_servers/storage/){.external} die zijn aangepast aan uw opslagactiviteiten en die zijn uitgerust met ten minste vier harde schijven. U kunt deze resources gebruiken om een backup te maken van een infrastructuur die wordt gehost bij OVH of bij een andere serviceprovider, via het openbare netwerk.

In deze gids laten we u zien hoe u een OVH opslagserver naar uw behoeften configureert, een boomstructuur voor het ontvangen van backups genereert en vervolgens backups voor twee externe servers via het SCP-protocol automatiseert.


## Vereisten

### Benodigde kennis:

- Een algemeen begrip van Linux-beheer
- Hoe in te loggen via SSH 
- Hoe verbinding te maken met een database 
- Hoe een database-backup te maken
- Hoe een besturingssysteem te installeren (hier gebruiken we Debian 9.4)

### U moet beschikken over:

- Een [OVH storage server](https://www.ovh.nl/dedicated_servers/storage/){.external}.
- Een productie-infrastructuur ([VPS](https://www.ovh.nl/vps/){.external}, [Dedicated Servers](https://www.ovh.nl/dedicated_servers/){.external}, [Public Cloud](https://www.ovh.nl/public-cloud/instances/){.external}, etc.).
- SSH-verbinding tussen de backup-server en de productie-infrastructuur.
- Aanbevolen: een privénetwerk tussen uw servers (OVH vRack).



## Instructie

### Stap 1: Kies de juiste RAID-modus

OVH biedt een reeks [opslagservers](https://www.ovh.nl/dedicated_servers/storage/){.external} met hardwareconfiguraties die verschillende harde schijven bevatten. In ons voorbeeld gebruiken we een software-RAID (of _softRAID_) met vier schijven, die elk 6 TB-capaciteit hebben.

Met OVH kunt u kiezen tussen RAID 0, 1, 5, 6 en 10 als configuraties voor het opslaan van uw gegevens. Elk van deze configuraties heeft voor- en nadelen wat betreft prestaties en flexibiliteit. Met vier schijven kunt u data opslaan in een RAID 5-, 6- of 10-configuratie (RAID 0 en 1 zijn in dit geval niet geschikt).

Hieronder vindt u uitleg over deze RAID-typen.

#### RAID 5

Deze configuratie verdeelt uw gegevens over minimaal drie harde schijven. Pariteitsgegevens worden opgeslagen op de vierde schijf en deze wordt gebruikt om andere schijven opnieuw te bouwen als een van de schijven beschadigd is. Op deze manier hebt u fouttolerantie op een van de schijven. Leesprestaties zijn verbeterd, maar niet schrijfprestaties (vanwege het pariteitsbit).

In dit geval is de volumecapaciteit 18 TB.

#### RAID 6

Dit is een verbeterde versie van RAID 5 met minimaal vier harde schijven. Pariteitsgegevens worden op twee schijven opgeslagen in plaats van één, wat zorgt voor een nog hogere redundantie (fouttolerantie op twee schijven). De prestaties nemen toe in de lees- en schrijfmodus.

In dit geval is de volumecapaciteit 12 TB.

#### RAID 10

Deze modus is een combinatie van twee processen. De eerste is om gegevens te verspreiden en op twee schijven op te slaan, wat helpt om de prestaties te verbeteren, omdat u ze tegelijkertijd kunt gebruiken. Het tweede proces is duplicatie van gegevens in ‘mirror’-modus op twee schijven. U krijgt dan fouttolerantie over twee schijven op één cluster.

In dit geval is de volumecapaciteit 12 TB.

Er bestaat niet zoiets als een 'beste' RAID-configuratie, omdat ze allemaal voldoen aan verschillende vereisten. In ons voorbeeld willen we maximale fouttolerantie en hoge lees- en schrijfprestaties behouden. Om dit te bereiken, zullen we een RAID 6-opstelling gebruiken.


### Stap 2: Installeer en configureer uw server

Hiervoor gaat u naar uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.nl/&ovhSubsidiary=nl){.external} en installeert u uw server. Ter herinnering: in deze handleiding gebruiken we Debian 9.4. Raadpleeg onze handleiding [Aan de slag met een dedicated server](https://docs.ovh.com/nl/dedicated/eerste-stappen-dedicated-server/){.external} voor meer informatie.

Nadat u het systeem voor installatie hebt geselecteerd, vinkt u het vakje `Partitieconfiguratie aanpassen`{.action} aan.

![Personaliseer de partitieconfiguratie](images/partition_customization.png){.thumbnail}

In dit stadium kunt u het RAID-type wijzigen vanuit uw `/home` (1) en de partitie (2) uitbreiden als u dat wenst.

![Wijzig /home](images/partition_customization_menu.png){.thumbnail}

> [!primary]
> 
> Het RAID-niveau voor `/boot` kan niet worden gewijzigd.
> 

### Stap 3: Creëer doelmappen (target directories)

Om de volgorde bij het opslaan van backups te behouden, maken we doelmappen aan. Log u in op uw server via SSH en bekijk uw partities:

```sh
df -h

Filesystem      Size    Used Avail Use% Mounted on
udev            7,8G       0  7,8G   0% /dev
tmpfs           1,6G     51M  1,6G   4% /run
/dev/md3         20G    740M   18G   4% /
tmpfs           7,9G       0  7,9G   0% /dev/shm
tmpfs           5,0M       0  5,0M   0% /run/lock
tmpfs           7,9G       0  7,9G   0% /sys/fs/cgroup
/dev/md2        487M     32M  426M   7% /boot
/dev/sda1       510M    152K  510M   1% /boot/efi
/dev/md4         11T     31M   11T   1% /home
```

Maak een bestandsstructuur met het commando `mkdir`. In ons voorbeeld ontvangt de server backups van twee webservers die in productie zijn. We zullen dus twee mappen maken: *server1* en *server2*. Elke map bevat een *dump*-submap voor SQL-backups en een *data*-submap voor web data.

Met het commando `tree` kunt u een boomstructuur van een map krijgen. Het resultaat kan er als volgt uitzien:

```sh
tree
.
└── backups
    ├── server1
    │   ├── datas
    │   └── dump
    └── server2
        ├── datas
        └── dump

7 directories, 0 files
```

### Stap 4: Draag de data over van uw externe servers naar uw opslagserver

Uw opslagserver is nu klaar om uw backups te ontvangen.

> [!primary]
> 
> Als uw productie-infrastructuren worden gehost bij OVH en onze vRack-netwerkoplossing omvatten, raden wij u aan deze voor uw backups te gebruiken. Op deze manier zullen uw backup-gegevens niet door het openbare netwerk (internet) gaan.
>

De basis van deze stap is om via SSH in te loggen op uw productieservers en deze servers zullen via SCP-protocol verbinding maken met uw opslagservers. Om dit te laten werken, moeten alle resources via SSH met elkaar kunnen verbinden.

Om te beginnen zullen we een MySQL-databasebackup maken, gewoonlijk *dump* genoemd. Raadpleeg voor meer geavanceerd gebruik de officiële documentatie voor uw database.

```sh
mysql --host=localhost --user=myname --password=password mydb
mysqldump --all-databases > dump.sql
```

Nu u uw SSH hebt geconfigureerd, kunt u naar uw productieservers gaan en het `scp` commando gebruiken.

```sh
scp your_dump_file user@IP_Storage:/home/backups/server1/dump

The authenticity of host 'IP_Stockage (IP_Stockage)' can't be established.
ECDSA key fingerprint is SHA256:fmmeu5feHlnaUC56+2DB73sgNd4aMPVkS7oEtcyO2o8.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'IP_Stockage' (ECDSA) to the list of known hosts.

user@IP_Stockage's password: 
```

> [!primary]
> 
> Als u de SSH-poort van uw opslagserver hebt gewijzigd, moet u het argument `-P` toevoegen.
>

Doe hetzelfde voor uw bestanden. Met het commando `scp` kunt u ook een backup maken van volledige mappen.

```sh
scp -r directory_to_back_up gebruiker @ IP_Storage: / home / backups / server1 / data / 2018_01_01
```

U kunt andere, efficiëntere methoden zoals *rsync* gratis gebruiken en ze hebben geavanceerde functies, zoals automatisch opnieuw verzenden als de eerste poging mislukt.


### Stap 5: Plan dagelijkse basis-backups via cron

Het elke dag moeten aanmelden bij elk van de servers waarvan een backup moet worden gemaakt, wordt al snel een hele klus. Er zijn basismethoden om een taak te automatiseren en de meest bekende methode is via het Unix-programma *cron*. U kunt het gebruiken om commando‘s in te plannen die elk uur, dagelijks, maandelijks of jaarlijks worden uitgevoerd. ﻿Unix-gebruikers hebben hun eigen lijsten met geplande taken, genaamd *crontab*.

Voor meer veiligheid raden we aan een extra Unix-gebruikersaccount aan te maken en hieraan geplande taken toe te wijzen.

Ga als volgt te werk om deze lijst te bewerken:

```sh
crontab -e
```

Voeg de volgende regel toe om het verzenden voor uw SQL-dumpbestanden te automatiseren, elke dag van het jaar om 02:00 uur.

```sh
0 2 * * * scp votre_fichier_dump user@IP_Stockage:/home/backups/serveur1/dump >/dev/null 2>&1
```

De syntaxis voor een *crontab* is specifiek. We zullen het hier niet in detail beschrijven, maar er zijn verschillende websites die u kunt gebruiken om het gemakkelijk te genereren, zoals Crontab Generator.



## Samengevat

U hebt een OVH opslagserver geconfigureerd die aan uw behoeften voldoet en een basisschema voor het maken van backups van de bestanden die erop zijn opgeslagen, geautomatiseerd. Dit is een belangrijke stap om dataverlies te voorkomen en uw bedrijf te beveiligen.

Zoals eerder vermeld, zijn er andere gratis en betaalde methoden die u kunt gebruiken om uw backups verder te optimaliseren. Als uw gegevens gevoelig zijn, raden we u ook ten sterkste aan deze te coderen en alleen te verzenden via privénetwerken zoals de OVH vRack.