---
title: 'Crea e configura un disco aggiuntivo sulla tua istanza'
excerpt: 'Come creare un disco aggiuntivo e configurarlo su una delle tue istanze.'
slug: crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza
legacy_guide_number: g1863
---

**Ultimo aggiornamento: 14/11/2019**

## Obiettivo

Creare dischi aggiuntivi per le tue istanze Public Cloud
può essere utile, ad esempio, per:

* aumentare la capacità di storage senza necessariamente modificare il modello della tua istanza
* disporre di uno spazio di storage high availability e dalle performance migliorate
* spostare su un’altra istanza il tuo spazio di storage e i dati in esso contenuti 

**Come creare un disco aggiuntivo e configurarlo su una delle tue istanze.**

## Prerequisiti

* Avere accesso allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}
* Aver creato un’istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external}nel tuo account OVHcloud
* Avere accesso all’istanza via SSH con l’utente root

## Procedura

Per prima cosa, accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e clicca sul menu`Public Cloud`{.action}. Poi clicca sul`Progetto`{.action} su cui vuoi creare un’istanza.

A questo punto, clicca sul pulsante`Azioni`{.action}e seleziona `Crea un volume`{.action}.

![select project](images/attach-disk-01.png){.thumbnail}

Scegli il tipo, la dimensione e la localizzazione del disco. Infine, clicca sul pulsante `Aggiungi`{.action}.

![create disk](images/attach-disk-02.png){.thumbnail}

Visualizzi il nuovo disco nel tuo Spazio Cliente OVH.

![configure SGX](images/attach-disk-03.png){.thumbnail}

Per associare il disco a un’istanza, clicca sui tre puntini a destra e seleziona`Associa a un’istanza`{.action}

![attach disk 01](images/attach-disk-04.png){.thumbnail}

Per associare il disco, scegli l’istanza e clicca su `Conferma`{.action}.

![attach disk 02](images/attach-disk-05.png){.thumbnail}

A questo punto, l’operazione avrà inizio e potrebbe richiedere alcuni minuti.

![attach disk 03](images/attach-disk-06.png){.thumbnail}

> [!warning]
Ricordati di non uscire dalla schermata Infrastructure durante l’associazione del disco per evitare di interrompere il processo.
>

### Da Linux

Accedi alla tua istanza via SSH ed esegui il seguente comando per visualizzare la lista dei dischi:

```
# admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
“VDA” corrisponde in genere al disco della tua istanza, quindi il tuo disco aggiuntivo sarà “VDB”.
>

A questo punto, crea una partizione: 

```
admin@server-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc
```



```
Command (m for help): n

Partition type
p primary (0 primary, 0 extended, 4 free)
e extended (container for logical partitions)
Select (default p):
Using default response p.
Partition number (1-4, default 1):
First sector (2048-20971519, default 2048):
Last sector, +sectors or +size{K,M,G,T,P} (2048-20971519, default 20971519):

Created a new partition 1 of type 'Linux' and of size 10 GiB.
```



```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Poi, formatta la partizione: 

```
# admin@serveur-1:~$ sudo mkfs.ext4 /dev/vdb1
mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 2621184 4k blocks and 655360 inodes
Filesystem UUID: 781be788-c4be-462b-b946-88429a43c0cf
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632

Allocating group tables: done
Writing inode tables: done
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done
```

Monta la partizione:

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


Infine, verifica la configurazione:

```
admin@serveur-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

Per configurare il tuo disco in modo permanente, modifica il file /etc/fstab. Recupera l’ID del blocco:

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Ora puoi aggiungere il tuo disco nel file /etc/fstab:

```
admin@serveur-1:~$ vim /etc/fstab

/etc/fstab: static file system information.

# Use 'blkid' to print the universally unique identifier for a
# device; this may be used with UUID= as a more robust way to name devices
# that works even if disks are added and removed. See fstab(5).
#
# <file system> <mount point> <type> <options> <dump> <pass>
UUID=51ba13e7-398b-45f3-b5f3-fdfbe556f62c / ext4 defaults 0 0
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

### Da Windows

Clicca con il tasto destro sul menu `Start`{.action}e poi su`Gestione disco`{.action}.

![](images/start-menu.png){.thumbnail}

Quando il pannello di gestione dei dischi si apre, visualizzi il nuovo disco come un volume sconosciuto e con lo spazio non allocato, come mostrato qui di seguito.

![disk management](images/disk-management-01.png){.thumbnail}

#### Inizializzare un disco tramite Gestione Disco

Se il disco è offline, potrebbe dipendere da una politica applicata sull’istanza. Per modificare la politica, clicca con il tasto destro sul disco e seleziona `Online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Poi clicca di nuovo con il tasto destro e seleziona `Inizializza Disco`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

A questo punto, seleziona `MBR`{.action} e clicca su `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

#### Inizializza il disco tramite DISKPART

Clicca con il tasto destro sul menu `Start`{.action}e poi su`Gestione disco`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Digita `cmd` nella finestra Esegui e poi clicca su `OK`{.action}

![run prompt](images/run-prompt.png){.thumbnail}

Apri DISKPART eseguendo il seguente comando:

```
C:\> diskpart
```

Poi, modifica la politica:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system . [/ Code]

- Implementation of the strategy on the extra disk:
[Code] DISKPART> list disk

Disk ### Status Size Free Dyn Gpt
-------- ------------- ------- ------- --- ---
Disk 0 Online 200 GB 0 B
* Disk 1 Offline 10 GB 1024 KB
```

```
DISKPART> select disk 1

Disk 1 is now the selected disk.
```

```
DISKPART> attributes disk clear readonly

Disk attributes cleared successfully.
```

```
DISKPART> attributes disk

Current Read-only State : No
Read-only : No
Boot Disk : No
Pagefile Disk : No
Hibernation File Disk  No
Crashdump Disk : No
Clustered Disk  No
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

#### Formatta il disco:

Apri Gestione disco, clicca con il tasto destro sul volume, e poi clicca su `Nuovo Volume Semplice...`{.action}

![format disk](images/format-disk-01.png){.thumbnail}

A questo punto, clicca su `Avanti`{.action}.

![format disk](images/format-disk-02.png){.thumbnail}

Imposta la dimensione del disco In genere, si vorrebbe il 100% dello spazio Una volta completata l’operazione, clicca su`Avanti`{.action}.

![format disk](images/format-disk-03.png){.thumbnail}

Dal menu a tendina, scegli una lettera da assegnare al drive per riconoscerlo e clicca su `Avanti`{.action}.

![format disk](images/format-disk-04.png){.thumbnail}

Seleziona le opzioni da attribuire al disco e poi clicca su `Avanti`{.action}per completare la formattazione.

![format disk](images/format-disk-05.png){.thumbnail}

Infine, clicca su`Fine`{.action}per terminare l’operazione.

![format disk](images/format-disk-06.png){.thumbnail}

Una volta completata la formattazione, puoi accedere al tuo disco dal tuo File Explorer.

## Per saperne di più 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.