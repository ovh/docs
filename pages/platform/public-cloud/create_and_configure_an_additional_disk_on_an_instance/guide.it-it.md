---
title: 'Crea e configura un disco aggiuntivo sulla tua istanza'
excerpt: 'Come associare un nuovo volume alla tua istanza Public Cloud'
slug: crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza
legacy_guide_number: g1863
section: Storage
order: 1
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 17/11/2022**

## Obiettivo

Crea dischi supplementari per le tue istanze Public Cloud.
Ciò può essere utile nei seguenti casi:

- Per aumentare la capacità di storage senza modificare il modello di istanza
- Per avere uno spazio di storage high availability e performante
- Spostare lo storage e i dati verso un'altra istanza

**Questa guida ti mostra come creare un disco aggiuntivo e configurarlo sulla tua istanza.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre di un'istanza [Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external} nel proprio account OVHcloud
- Avere un accesso amministratore (root) alla tua istanza via SSH

> [!warning]
> Questa funzionalità al momento non è disponibile per le istanze Metal.
>

## Procedura

### Associa un nuovo volume

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto. Poi apri `Block Storage`{.action} nel menu a sinistra.

In questa sezione clicca sul pulsante `Crea un volume`{.action}.

![seleziona il progetto](images/avolume01.png){.thumbnail}

Segui gli step di configurazione per selezionare le opzioni di posizione, tipo di disco e capacità di disco. Inserisci un nome per il volume e conferma cliccando su `Crea il volume`{.action}.

![create disk](images/avolume02.png){.thumbnail}

Il nuovo disco verrà visualizzato nello Spazio Cliente OVH.

![configura disk](images/avolume03.png){.thumbnail}

A destra del volume, clicca sul pulsante `...`{.action} poi seleziona `Associa all'istanza`{.action}.

![attach disk 01](images/avolume04.png){.thumbnail}

Nella nuova finestra, seleziona un'istanza dalla lista e clicca su `Conferma`{.action} per associare il disco.

![attach disk 02](images/avolume05.png){.thumbnail}

Il processo di associazione del disco all'istanza sta per iniziare. L'operazione potrebbe richiedere alcuni minuti.

> [!warning]
> Quando il disco è in corso di connessione, assicurati di non lasciare la pagina attuale del tuo Spazio Cliente OVHcloud. Ciò potrebbe interrompere il processo.
>

### Configurazione del nuovo disco

Gli esempi che seguono presuppongono che tu sia connesso come utente con autorizzazioni sufficienti.

#### Con Linux

Apri una [connessione SSH alla tua istanza](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/#connect-to-instance) e utilizza il comando qui sotto per visualizzare i dischi associati.

```bash
~$ admin@server-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```

> [!primary]
>
> In questo esempio, `vda` si riferisce al disco predefinito dell'istanza. Il disco aggiuntivo verrà chiamato `vdb`.
>

Crea una partizione sul disco aggiuntivo tramite questi comandi.

```bash
~$ admin@server-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
```

```bash
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

```bash
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Successivamente, esegui la nuova partizione `vdb1` utilizzando questo comando:

```bash
~$ admin@server-1:~$ sudo mkfs.ext4 /dev/vdb1
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

Monta la partizione con questi comandi:

```bash
admin@server-1:~$ sudo mkdir /mnt/disk
admin@server-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```

Infine, verifica il punto di mount utilizzando questo comando:

```bash
~$ admin@server-1:~$ df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 840M 8.6G 9% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
/dev/vdb1 9.8G 23M 9.2G 1% /mnt/disk
```

> [!primary]
>
> Il mount non è persistente perché il disco verrà scollegato al riavvio dell'istanza. Per automatizzare il mount è necessario modificare il file `fstab`.
>

Per prima cosa recupera l'UUID (blocco ID) del nuovo volume:

```bash
~$ admin@server-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```

Apri `etc/fstab` con un editor di testo:

```
~$ sudo nano /etc/fstab
```

Aggiungi la riga qui sotto al file e sostituisci l'UUID con la tua:

```console
UUID=2e4a9012-bf0e-41ef-bf9a-fbf350803ac5 /mnt/disk ext4 nofail 0 0
```

Salva e lascia l'editor. Il disco deve essere montato automaticamente ogni volta che viene riavviato.

#### Con Windows

Installa una connessione RDP (Remote Desktop) con la tua istanza Windows.

Una volta connesso, clicca con il tasto destro sul pulsante `Inizia`{.action} e apri la `Gestisci i dischi`{.action}.

![disk management](images/start-menu.png){.thumbnail}

Il nuovo disco verrà visualizzato come volume sconosciuto con spazio non allocato.

![volume sconosciuto](images/disk-management-01.png){.thumbnail}

Se il disco è indicato come offline, deve prima essere avviato. Per farlo, puoi utilizzare l'[interfaccia utente Windows](#initDiskManagement) o l'[utility DISKPART](#initDiskpart). Altrimenti, esegui la [formattazione del disco nella gestione dei dischi](#formatDiskManagement).

##### **Iniziare il disco nella gestione dei dischi** <a name="initDiskManagement"></a>

Clicca con il tasto destro sul disco e seleziona `online`{.action}. 

Se il disco è indicato come offline, è probabile che sia dovuto alla politica applicata all'istanza. Per risolvere il problema clicca con il tasto destro sul disco e seleziona `online`{.action}.

![offline disk](images/disk-management-02.png){.thumbnail}

Clicca di nuovo sul tasto destro e seleziona questa volta `Inizia il disco`{.action}.

![offline disk](images/disk-management-03.png){.thumbnail}

Poi seleziona `MBR`{.action} e clicca su `OK`{.action}.

![initialise disk](images/initialise-disk.png){.thumbnail}

##### **Iniziare il disco con DISKpart** <a name="initDiskpart"></a>

Fai un click con il tasto destro sul pulsante `Inizia`{.action} e apri `Esegui`{.action}.

![initialise disk](images/diskpart.png){.thumbnail}

Clicca su `cmd` e clicca su `OK`{.action} per aprire l'applicazione della riga di comando.

![run promo](images/run-prompt.png){.thumbnail}

Dal prompt dei comandi, apri DISKpart:

```
C:\> diskpart
```

Per mettere il disco `online`, utilizza il seguente set di comandi DISKPART:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system .

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
Hibernation File Disk : No
Crashdump Disk : No
Clustered Disk : No
```

```
DISKPART> online disk

DiskPart successfully onlined the selected disk.
```

##### **Formatura del disco** <a name="formatDiskManagement"></a>

Nello strumento `Gestione dischi`{.action}, clicca con il tasto destro sul nuovo disco e seleziona `Nuovo volume semplice...`{.action}.

![formato disk](images/format-disk-01.png){.thumbnail}

Clicca su `Avanti`{.action} per specificare la dimensione del volume. Di default deve essere il massimo. Clicca su `Avanti`{.action} per continuare

![formato disk](images/format-disk-03.png){.thumbnail}

Lascia la nuova lettera del lettore di default o scegline un'altra, poi clicca su `Seguente`{.action}.

![formato disk](images/format-disk-04.png){.thumbnail}

Assegna un nome al volume (facoltativo) e conferma le opzioni di formattazione cliccando su `Avanti`{.action}.

![formato disk](images/format-disk-05.png){.thumbnail}

Nell'ultima finestra, clicca su `Terminer`{.action} per formattare il disco.

![formato disk](images/format-disk-06.png){.thumbnail}

Il disco sarà successivamente disponibile come lettore nell'esploratore di file.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.