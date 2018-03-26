---
title: Een VPS opnieuw verdelen na een upgrade
slug: verdeling-vps-suite-upgrade
section: Aan de slag
---

**Laatste update 14/11/2017**

## Hoe werkt het

Wanneer u een upgrade van uw VPS uitvoert, moet u mogelijk uw opslagruimte opnieuw verdelen. Hieronder staan de te volgen stappen beschreven. 

> [!warning]
>
> Herpartitionering kan uw gegevens permanent beschadigen. OVH kan niet aansprakelijk worden gesteld voor verlies of beschadiging van uw data. Voordat u iets doet, moet u een backup van uw data maken.
>

## Vereisten

- U moet SSH-toegang tot de VPS hebben (root-toegang).
- U moet de server opnieuw opstarten in de [Rescue modus](https://docs.ovh.com/fr/vps/mode-rescue-vps/).

## Instructies

Na een upgrade worden het RAM en de processor (CPU) automatisch aangepast. Dit zal niet systematisch het geval zijn voor de opslagruimte.

**In deze handleiding worden de stappen uitgelegd die u moet volgen om uw opslagruimte te vergroten.**.

### Maak een backup van uw data

Pogingen om een partitie uit te breiden kunnen leiden tot dataverlies. Het wordt daarom **sterk aanbevolen** om een backup te maken van de data op uw VPS.  

### Ontkoppel de partitie

Na het inloggen op uw VPS in [Rescue modus](https://docs.ovh.com/fr/vps/mode-rescue-vps/), zal uw partitie automatisch worden gemonteerd. Om het formaat te wijzigen, moet u deze ontkoppelen. Als u de naam van uw partitie kent, kunt u de volgende stap overslaan. Als u het niet weet, gebruikt u de volgende opdracht:

```sh
lsblk
```

De partitie die overeenkomt met de Rescue modus zal degene zijn die is gemount in de / map, wat eigenlijk de systeem root is. Daarentegen zal de partitie van uw VPS waarschijnlijk in de directory worden geplaatst die is gekoppeld aan / mnt, of helemaal niet is gekoppeld.

```sh
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 254:0 0 10G 0 disk
└─sda1 254:1 0 10G 0 part /
sdb 254:16 0 25G 0 disk
└─sdb1 254:17 0 25G 0 part /mnt/sdb1
```

Gebruik het volgende commando om uw partitie te ontkoppelen:

```sh
umount /dev/sdb1
```

### Controleer het bestandssysteem

Na het ontkoppelen van de partitie, moet u  het bestandssysteem controleren (`filesystem check`) om te zien of er fouten in de partitie zijn. Het commando is als volgt:

```sh
e2fsck -yf /dev/sdb1
 
e2fsck 1.42.9 (4-Feb-2014)
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdb1: 37870/1310720 files (0.2% non-contiguous), 313949/5242462 blocks
```
> [!warning]
>
> Als u een foutmelding krijgt van het type  `bad magic number in superblock`, ga dan niet verder.  Aan het einde van deze handleiding vindt u een procedure om dit probleem op te lossen.

### Start de fdisk-applicatie

Als de bestandssysteemcontrole met succes is voltooid, start u `fdisk`. In de instellingen moet u de naam van de disk invoeren en niet de naam van de partitie. Als uw partitie bijvoorbeeld `sdb1` is in plaats van `vdb1` dan zal de naam van de disk /dev/sdb zijn. 

```sh
fdisk -u /dev/sdb
```

> [!primary]
>
> Deze applicatie heeft verschillende subcommando's, die u kunt bekijken met het commando`m`.
>

### Verwijder de oude partitie

Voordat u de oude partitie verwijdert, verdient het aanbeveling om het nummer op te schrijven dat overeenkomt met de eerste sector van de partitie. U kunt deze informatie vinden via het commando `p`{.action}. Deze staat aangegeven in het `Start` veld. Bewaar deze gegevens voor later.

```sh
Command (m for help): p
 
Disk /dev/sdb: 21.5 GB, 21474836480 bytes
54 heads, 49 sectors/track, 15851 cylinders, total 41943040 sectors
Units = sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk identifier: 0x000132ff
 
Device Boot Start End Blocks Id System
/dev/sdb1 * *2048* 41941745 20969849 83 Linux
```

> [!warning]
>
> Als u geen backup van uw data hebt gemaakt, kunt u hierna niet meer terug.
>

Verwijder vervolgens de partitie met het commando `d`{.action}.

```sh
Command (m for help): d
Selected partition 1
```

De unieke partitie zal automatisch worden verwijderd. 

### Creëer een nieuwe partitie

Nu moet nieuwe partitie gemaakt worden met het commando  `n`{.action}. Het wordt aanbevolen dat u de standaardwaarden gebruikt.

```sh
Command (m for help): n
Partition type:
p primary (0 primary, 0 extended, 4 free)
e extended
Select (default p): p
Partition number (1-4, default 1): 1
First sector (2048-41943039, default 2048): 2048
Last sector, +sectors or +size{K,M,G} (2048-41943039, default 41943039): 41943039
```

Controleer op de `First sector` regel of de standaardwaarde gelijk is aan de standaardwaarde die u eerder hebt genoteerd. Als het anders is, gebruikt u de waarde die u hebt genoteerd.

### Maak de partitie bootable

Nu moet u ervoor zorgen dat de partitie opstartbaar is.  U kunt dit doen met het commando  `a`{.action}.

```sh
Command (m for help): a
 
Partition number (1-4): 1
```

Sla uw wijzigingen op en sluit de toepassing af met de opdracht `w`{.action} :

```sh
Command (m for help): a
 
The partition table has been altered!
 
Calling ioctl() to re-read partition table.
Syncing disks.
```

### Uitbreiding van het bestandssysteem op de partitie

De partitie is uitgebreid, maar het bestandssysteem neemt nog steeds dezelfde ruimte in als hiervoor. Om het uit te breiden, voert u simpelweg de volgende opdracht in:

```sh
resize2fs /dev/sdb1
 
resize2fs 1.42.9 (4-Feb-2014)
Resizing the filesystem on /dev/sdb1 to 5242624 (4k) blocks.
The filesystem on /dev/sdb1 is now 5242624 blocks long.
```

### Controleer de resultaten

Om te controleren of de extensie succesvol is geweest, kunt u de nieuw gemaakte partitie koppelen en de grootte ervan controleren.

```sh
umount /dev/sdb1
```
```sh
df -h
 
Filesystem Size Used Avail Use% Mounted on
/dev/sda1 991M 793M 132M 86% /
none 4.0K 0 4.0K 0% /sys/fs/cgroup
udev 1.9G 12K 1.9G 1% /dev
tmpfs 386M 360K 386M 1% /run
none 5.0M 0 5.0M 0% /run/lock
none 1.9G 0 1.9G 0% /run/shm
none 100M 0 100M 0% /run/user
/dev/sdb1 50G 842M 48G 2% /mnt
```

U vindt de nieuwe partitiegrootte vermeld onder de labelgrootte `size`.

### Hoe worden *bad magic number in superblock* fouten gerepareerd?

Als het commando `e2fsck`{.action} u de foutmelding `bad magic number in superblock` oplevert, dan moet u het filesystem controleren en repareren middels het gebruik van een superblok-backup.  Om te zien welke backups van het superblok beschikbaar zijn, voert u het volgend commando in:

```sh
dumpe2fs /dev/sdb1 | grep superblock
 
Primary superblock at 0, Group descriptors at 1-6
Backup superblock at 32768, Group descriptors at 32769-32774
Backup superblock at 98304, Group descriptors at 98305-98310
Backup superblock at 163840, Group descriptors at 163841-163846
Backup superblock at 229376, Group descriptors at 229377-229382
Backup superblock at 294912, Group descriptors at 294913-294918
Backup superblock at 819200, Group descriptors at 819201-819206
Backup superblock at 884736, Group descriptors at 884737-884742
Backup superblock at 1605632, Group descriptors at 1605633-1605638
Backup superblock at 2654208, Group descriptors at 2654209-2654214
Backup superblock at 4096000, Group descriptors at 4096001-4096006
Backup superblock at 7962624, Group descriptors at 7962625-7962630
Backup superblock at 11239424, Group descriptors at 11239425-11239430
Backup superblock at 20480000, Group descriptors at 20480001-20480006
Backup superblock at 23887872, Group descriptors at 23887873-23887878
```

Gebruik vervolgens de eerste superblock-backup om het filesystem te controleren en te repareren:

```sh
fsck -b 32768 /dev/sdb1
```

## Ga verder 

Ga in gesprek met andere gebruikers op <https://community.ovh.com>.