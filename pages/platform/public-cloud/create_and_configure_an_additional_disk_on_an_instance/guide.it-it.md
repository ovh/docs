---
title: Crea e configura un disco aggiuntivo sulla tua istanza
excerpt: Crea e configura un disco aggiuntivo sulla tua istanza
slug: crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza
legacy_guide_number: g1863
---


## 
Creare dischi aggiuntivi per le tue istanze Public Cloud può essere utile, ad esempio, per:

- aumentare la capacità di storage senza necessariamente modificare il modello della tua istanza
- disporre di uno spazio di storage high availability e dalle performance migliorate
- spostare su un'altra istanza il tuo spazio di storage e i dati in esso contenuti 


Questa guida ti mostra come creare un disco aggiuntivo e configurarlo su una delle tue istanze.


## Requisiti necessari

- Un'istanza




## 

- Accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/manager/cloud/)
- Clicca su "Aggiungi" e seleziona "Aggiungi un disco"



![](images/img_2731.jpg){.thumbnail}
Dal nuovo menu, è possibile:

- rinominare il tuo disco
- scegliere il tipo di disco:

|Classico|200 IOPS garantiti|
|High performance|Fino a 3000 IOPS|



- scegliere la dimensione del disco: a partire da 10 GB
- scegliere la localizzazione del tuo disco
- confermare la creazione del disco


Compare una nuova finestra con il tuo disco:

![](images/img_2732.jpg){.thumbnail}
A questo punto puoi associare il tuo disco aggiuntivo a un'istanza:

- trascinando il tuo disco sulla tua istanza
- cliccando sulla freccia sotto il tuo disco e selezionando "Associa a un server"


Una volta eseguita questa operazione, il disco appare sotto la tua istanza:

![](images/img_2733.jpg){.thumbnail}


## Da GNU/Linux

- Visualizza la lista dei dischi:

```
admin@serveur-1:~$ lsblk

NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 10G 0 disk
└─vda1 254:1 0 10G 0 part /
vdb 254:16 0 10G 0 disk
```



"vda" corrisponde in genere al disco della tua istanza, quindi il tuo disco aggiuntivo sarà "vdb"

- Crea una partizione

```
admin@serveur-1:~$ sudo fdisk /dev/vdb

Welcome to fdisk (util-linux 2.25.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Device does not contain a recognized partition table.
Created a new DOS disklabel with disk identifier 0x95c4adcc.
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


- Formatta la partizione

```
admin@serveur-1:~$ sudo mkfs.ext4 /dev/vdb1
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


- Monta la partizione

```
admin@serveur-1:~$ sudo mkdir /mnt/disk
admin@serveur-1:~$ sudo mount /dev/vdb1 /mnt/disk/
```


- Verifica la configurazione

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



Per configurare il tuo disco in modo permanente, modifica il file /etc/fstab:


- Recupera l'ID del blocco

```
admin@serveur-1:~$ sudo blkid

/dev/vda1: UUID="51ba13e7-398b-45f3-b5f3-fdfbe556f62c" TYPE="ext4" PARTUUID="000132ff-01"
/dev/vdb1: UUID="2e4a9012-bf0e-41ef-bf9a-fbf350803ac5" TYPE="ext4" PARTUUID="95c4adcc-01"
```


- Aggiungi il tuo disco nel file /etc/fstab:

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





## Da Windows

- Accedi al tool di gestione dei dischi



![](images/img_2736.jpg){.thumbnail}
Formatta il disco

![](images/img_2737.jpg){.thumbnail}
Attenzione:
Se visualizzi il messaggio "offline (the disk is offline because of policy set by an administrator)", è necessario modificare le caratteristiche dei dischi: fai click sul tuo disco con il tasto destro, seleziona "Online" e poi "Initialize", oppure utilizza Diskpart:


- Apri Powershell o la finestra del prompt dei comandi
- Verifica la tipologia di politica applicata:

```
PS C:\> diskpart
DISKPART> san

SAN Policy : Offline Shared
```


- Modifica la politica:

```
DISKPART> san policy=OnlineAll

DiskPart successfully changed the SAN policy for the current operating system.
```


- Applica la politica sul disco aggiuntivo:

```
DISKPART> list disk

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


- Avvia il disco dall'interfaccia di gestione e poi formattalo.


Una volta completata la formattazione, puoi accedere al tuo disco dal tuo file explorer.

![](images/img_2738.jpg){.thumbnail}


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

