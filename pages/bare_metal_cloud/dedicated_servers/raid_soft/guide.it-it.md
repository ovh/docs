---
title: Gestione e ricostruzione del RAID software sui server in modalità legacy boot (BIOS)
excerpt: "Scopri come gestire e ricostruire il RAID software dopo il sostituzione di un disco su un server in modalità legacy boot (BIOS)"
updated: 2025-12-15
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

Il RAID (Redundant Array of Independent Disks) è un insieme di tecniche progettate per ridurre la perdita di dati su un server replicandoli su più dischi.

Il livello RAID predefinito per le installazioni dei server OVHcloud è RAID 1, che raddoppia lo spazio occupato dai vostri dati, riducendo quindi a metà lo spazio disco utilizzabile.

**Questa guida spiega come gestire e ricostruire un RAID software in caso di sostituzione di un disco su un server in modalità legacy boot (BIOS).**

Prima di iniziare, notate che questa guida si concentra sui Server dedicati che utilizzano la modalità legacy boot (BIOS). Se il vostro server utilizza la modalità UEFI (schede madri più recenti), fate riferimento a questa guida [Gestione e ricostruzione del RAID software sui server in modalità boot UEFI](/pages/bare_metal_cloud/dedicated_servers/raid_soft_uefi).

Per verificare se un server è in esecuzione in modalità BIOS o in modalità UEFI, eseguite il comando seguente :

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

## Prerequisiti

- Possedere un [server dedicato](/links/bare-metal/bare-metal) con una configurazione RAID software.
- Avere accesso al server tramite SSH come amministratore (sudo).
- Conoscenza del RAID e delle partizioni

## Procedura

### Panoramica del contenuto

- [Informazioni di base](#basicinformation)
- [Simulare un guasto del disco](#diskfailure)
    - [Rimozione del disco guasto](#diskremove)
- [Ricostruzione del RAID](#raidrebuild)
    - [Ricostruzione del RAID in modalità rescue](#rescuemode)
    - [Aggiunta dell'etichetta alla partizione SWAP (se necessario)](#swap-partition)
    - [Ricostruzione del RAID in modalità normale](#normalmode)

<a name="basicinformation"></a>

### Informazioni di base

Nella sessione della riga di comando, digitate il codice seguente per determinare lo stato attuale del RAID.

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 nvme0n1p2[1] nvme0n1p20]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 nvme0n1p4[0] nvme1n1p4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Questo comando ci indica che due dispositivi RAID software sono attualmente configurati, **md4** essendo il più grande. Il dispositivo RAID **md4** è composto da due partizioni, denominate **nvme1n1p4** e **nvme0n1p4**.

Il [UU] significa che tutti i dischi funzionano normalmente. Un `_` indica un disco guasto.

Se possedete un server con dischi SATA, otterrete i seguenti risultati :

```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Sebbene questo comando restituisca i nostri volumi RAID, non ci indica la dimensione delle partizioni stesse. Possiamo trovare questa informazione con il comando seguente :

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F92B6C5B-2518-4B2D-8FF9-A311DED5845F

Device          Start        End    Sectors   Size Type
/dev/sdb1        2048       4095       2048     1M BIOS boot
/dev/sdb2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sdb3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sdb4  1865226240 3907024895 2041798656 973.6G Linux RAID

Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Disk model: HGST HUS724020AL
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 2E1DCCBA-8808-4D2B-BA33-9FEC3B96ADA8

Device          Start        End    Sectors   Size Type
/dev/sda1        2048       4095       2048     1M BIOS boot
/dev/sda2        4096 1864177663 1864173568 888.9G Linux RAID
/dev/sda3  1864177664 1865226239    1048576   512M Linux filesystem
/dev/sda4  1865226240 3907024895 2041798656 973.6G Linux RAID
/dev/sda5  3907025072 3907029134       4063     2M Linux filesystem

Disk /dev/md4: 973.5 GiB, 1045265645568 bytes, 2041534464 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes

Disk /dev/md2: 888.8 GiB, 954321600512 bytes, 1863909376 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Il comando `fdisk -l` vi permette inoltre di identificare il tipo di partizione. Si tratta di un'informazione importante per ricostruire il vostro RAID in caso di guasto di un disco.

Per le partizioni **GPT**, la riga 6 mostrerà: `Disklabel type: gpt`. Queste informazioni sono visibili solo quando il server è in modalità normale.

Ancora in base ai risultati di `fdisk -l`, possiamo vedere che `/dev/md2` è composto da 888.8GB e `/dev/md4` contiene 973.5GB.

In alternativa, il comando `lsblk` offre una visione diversa delle partizioni :

```sh
[user@server_ip ~]# lsblk

NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
├─sda1    8:1    0     1M  0 part
├─sda2    8:2    0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sda3    8:3    0   512M  0 part  [SWAP]
├─sda4    8:4    0 973.6G  0 part
│ └─md4   9:4    0 973.5G  0 raid1 /home
└─sda5    8:5    0     2M  0 part
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Prendiamo in considerazione i dispositivi, le partizioni e i loro punti di montaggio. Dai comandi e dai risultati sopra, abbiamo :

- Due array RAID : `/dev/md2` e `/dev/md4`.
- Quattro partizioni fanno parte del RAID con i punti di montaggio : `/` e `/home`.

<a name="diskfailure"></a>

### Simulare un guasto del disco

Ora che abbiamo tutte le informazioni necessarie, possiamo simulare un guasto del disco e procedere ai test. In questo esempio, faremo fallire il disco `sda`.

Il metodo preferito per farlo è l'ambiente in modalità rescue di OVHcloud.

Riavviate prima il server in modalità rescue e connettetevi con le credenziali fornite.

Per rimuovere un disco dal RAID, il primo passo consiste nel marcarlo come **Failed** e rimuovere le partizioni dai loro array RAID rispettivi.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1] sdb2[0]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0] sdb4[1]
      1020767232 blocks super 1.2 [2/2] [UU]
      bitmap: 0/8 pages [0KB], 65536KB chunk
      
unused devices: <none>
```

Dall'output sopra, sda è composto da due partizioni in RAID che sono **sda2** e **sda4**.

<a name="diskremove"></a>

#### Rimozione del disco guasto

Iniziamo marciando le partizioni **sda2** e **sda4** come **Failed**.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/sda2
# mdadm: set /dev/sda2 faulty in /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md4 --fail /dev/sda4
# mdadm: set /dev/sda4 faulty in /dev/md4
```

Ora abbiamo simulato un guasto al RAID, quando eseguiamo il comando `cat /proc/mdstat`, otteniamo il risultato seguente :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[1](F) sdb2[0]
      931954688 blocks super 1.2 [2/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Come possiamo vedere sopra, il [F] accanto alle partizioni indica che il disco è guasto o difettoso.

Successivamente, rimuoviamo queste partizioni dagli array RAID.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md2 --remove /dev/sda2
# mdadm: hot removed /dev/sda2 from /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md4 --remove /dev/sda4
# mdadm: hot removed /dev/sda4 from /dev/md4
```

Per assicurarci di ottenere un disco simile a un disco vuoto, utilizziamo il comando seguente. Sostituite **sda** con i vostri valori :

```sh
shred -s10M -n1 /dev/sda1
shred -s10M -n1 /dev/sda2
shred -s10M -n1 /dev/sda3
shred -s10M -n1 /dev/sda4
shred -s10M -n1 /dev/sda
```

Il disco appare ora come un disco nuovo e vuoto:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk 
NAME    MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
sda       8:0    0   1.8T  0 disk
sdb       8:16   0   1.8T  0 disk
├─sdb1    8:17   0     1M  0 part
├─sdb2    8:18   0 888.9G  0 part
│ └─md2   9:2    0 888.8G  0 raid1 /
├─sdb3    8:19   0   512M  0 part  [SWAP]
└─sdb4    8:20   0 973.6G  0 part
  └─md4   9:4    0 973.5G  0 raid1 /home
```

Se eseguiamo il seguente comando, vediamo che il nostro disco è stato correttamente “cancellato”:

```sh
parted /dev/sda
GNU Parted 3.5
Using /dev/sda
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/sda: unrecognised disk label
Model: HGST HUS724020AL (SATA)
Disk /dev/sda: 1.8T
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Lo stato del nostro RAID dovrebbe ora apparire come segue:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat 

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sdb2[0]
      931954688 blocks super 1.2 [1/2] [_U]
      bitmap: 2/7 pages [8KB], 65536KB chunk

md4 : active raid1 sdb4[1]
      1020767232 blocks super 1.2 [1/2] [_U]
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

I risultati sopra riportati mostrano che nelle matrici RAID vengono visualizzate solo due partizioni. Il disco **sda** ha avuto esito negativo e ora è possibile procedere alla sostituzione del disco.

Per informazioni sulla preparazione e la richiesta di sostituzione di un disco, consultate questa [guida](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Il comando seguente fornisce maggiori dettagli sulle matrici RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
           Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 16:28:03 2023
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md4
              UUID : 7b5c1d80:0a7ab4c2:e769b5e5:9c6eaa0f
            Events : 21

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1       8       20        1      active sync   /dev/sdb4
```

<a name="raidrebuild"></a>

### Ricostruire il RAID

> [!primary]
> Questo processo può variare in base al sistema operativo installato sul server. Per i comandi appropriati, consulta la documentazione ufficiale del sistema operativo utilizzato.
>

> [!warning]
>
> Per la maggior parte dei server con RAID software, dopo la sostituzione del disco, il server è in grado di avviarsi in modalità normale (sul disco sano) per ricostruire il RAID. Tuttavia, se il server non riesce ad avviarsi in modalità normale, verrà riavviato in modalità Rescue per procedere alla ricostruzione del RAID.
>

<a name="normalmode"></a>

#### Ricostruire il RAID in modalità normale

I seguenti passaggi vengono eseguiti in modalità normale. Nel nostro esempio, abbiamo sostituito il disco **sda**.

Una volta sostituito il disco, dobbiamo copiare la tabella di partizione del disco integro (in questo esempio, sdb) su quello nuovo (sda).

> [!tabs]
> **Per le partizioni GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> Il comando deve essere nel formato seguente: `sgdisk -R /dev/nuovo disco /dev/disco sano`.
>>
>> Una volta effettuata questa operazione, il passaggio successivo consiste nell'assegnare un GUID casuale al nuovo disco per evitare qualsiasi conflitto con i GUID di altri dischi:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdX
>> ```
>>
>> Se viene visualizzato il seguente messaggio:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Potete semplicemente eseguire il comando `partprobe`.
>>
> **Per le partizioni MBR**
>>
>> ```sh
>> [user@server_ip ~]# sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX
>> ```
>>
>> Il comando deve essere nel seguente formato: `sfdisk -d /dev/disco integro | sfdisk /dev/nuovo disco`.
>>

Quindi, aggiungiamo le partizioni al RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/sda2
# mdadm: added /dev/sda2

[user@server_ip ~]# sudo mdadm --add /dev/md4 /dev/sda4
# mdadm: re-added /dev/sda4
```

Utilizza il seguente comando per monitorare la ricostruzione del RAID:


```sh
[user@server_ip ~]# cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Infine, aggiungiamo un'etichetta e montiamo la partizione [SWAP] (se necessario).

Per aggiungere un'etichetta alla partizione SWAP :

```sh
[user@server_ip ~]# sudo mkswap /dev/sda4 -L swap-sda4
```

Successivamente, recuperiamo gli UUID delle due partizioni SWAP :

```sh
[user@server_ip ~]# sudo blkid -s UUID /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -S UUID /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Sostituiamo l'UUID vecchio della partizione swap (**sda4**) con il nuovo in `/etc/fstab`.

Esempio:

```sh
[user@server_ip ~]# sudo nano etc/fstab

UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=BIOS       /boot       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

In base ai risultati sopra riportati, il vecchio UUID è `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve essere sostituito con il nuovo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 

Assicurati di sostituire l'UUID corretto.

Quindi, verifichiamo che tutto sia montato correttamente utilizzando il seguente comando:

```sh
[user@server_ip ~]# sudo mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Esegui il comando seguente per attivare la partizione swap :

```sh
[user@server_ip ~]# sudo swapon -av
```

Successivamente, ricarica il sistema con il comando seguente :

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

La ricostruzione del RAID è ora completata.

<a name="rescuemode"></a>

/// details | **Ricostruzione del RAID in modalità rescue**

Se il vostro server non riesce a riavviarsi in modalità normale dopo la sostituzione del disco, verrà riavviato in modalità di ripristino dal nostro team del data center.

In questo esempio, abbiamo sostituito il disco `sdb`.

Una volta sostituito il disco, dobbiamo copiare la tabella delle partizioni del disco sano (in questo esempio, sda) verso il nuovo (sdb).

> [!tabs]
> **Per le partizioni GPT**
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> Il comando deve essere nel formato seguente : `sgdisk -R /dev/nuovo disco /dev/disco sano`
>>
>> Esempio :
>>
>> ```sh
>> sudo sgdisk -R /dev/sdb /dev/sda
>> ```
>>
>> Una volta completata questa operazione, il passo successivo consiste nell'assegnare un GUID casuale al nuovo disco per evitare conflitti con i GUID di altri dischi :
>>
>> ```sh
>> sudo sgdisk -G /dev/sdb
>> ```
>>
>> Se appare il seguente messaggio :
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> È sufficiente eseguire il comando `partprobe`.
>>
> **Per le partizioni MBR**
>>
>> ```sh
>> sudo sfdisk -d /dev/sda | sfdisk /dev/sdb
>> ```
>>
>> Il comando deve essere nel formato seguente : `sfdisk -d /dev/disco sano | sfdisk /dev/nuovo disco`
>>

Possiamo ora ricostruire l'array RAID. L'estratto di codice seguente mostra come aggiungere le nuove partizioni (sdb2 e sdb4) nell'array RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md2 /dev/sdb2
# mdadm: added /dev/sdb2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md4 /dev/sdb4
# mdadm: re-added /dev/sdb4
```

Utilizza il comando `cat /proc/mdstat` per monitorare la ricostruzione del RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md2 : active raid1 sda2[0] sdb2[1]
      931954688 blocks super 1.2 [2/2] [UU]
      bitmap: 4/4 pages [16KB], 65536KB chunk

md4 : active raid1 sda4[0](F) sdb4[1]
      1020767232 blocks super 1.2 [2/1] [UU]
      [============>........]  recovery = 64.8% (822969856/1020767232) finish=7.2min speed=401664K/sec
      bitmap: 0/8 pages [0KB], 65536KB chunk
unused devices: <none>
```

Per ulteriori dettagli su una o più matrici RAID :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md4

/dev/md4:
        Version : 1.2
     Creation Time : Tue Jan 24 15:35:02 2023
        Raid Level : raid1
        Array Size : 1020767232 (973.48 GiB 1045.27 GB)
     Used Dev Size : 1020767232 (973.48 GiB 1045.27 GB)
      Raid Devices : 2
     Total Devices : 2
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Tue Jan 24 17:02:55 2023
             State : clean
    Active Devices : 2
   Working Devices : 2
    Failed Devices : 0
     Spare Devices : 0

 Rebuild Status : 21% complete

           UUID : 7f39d062:9f16a016:a4d2adc2:26fd5302
         Events : 0.95

    Number   Major   Minor   RaidDevice State
       0       8        2        0      spare rebuilding   /dev/sda4
       1       8       18        1      active sync   /dev/sdb4
```

<a name="swap-partition"></a>

#### Aggiunta dell'etichetta alla partizione SWAP (se necessario)

Una volta completata la ricostruzione del RAID, montiamo la partizione che contiene la radice del nostro sistema operativo su `/mnt`. Nell'esempio, questa partizione è `md4`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md4 /mnt
```

Aggiungiamo l'etichetta alla nostra partizione swap con il comando :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/sda4 -L swap-sda4
mkswap: /dev/sda4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Successivamente, montiamo le seguenti directory per assicurarci che qualsiasi modifica che effettuiamo nell'ambiente chroot funzioni correttamente :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
mount --types proc /proc /mnt/proc
mount --rbind /sys /mnt/sys
mount --make-rslave /mnt/sys
mount --rbind /dev /mnt/dev
mount --make-rslave /mnt/dev
mount --bind /run /mnt/run
mount --make-slave /mnt/run
```

Successivamente, accediamo all'ambiente `chroot` :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Recuperiamo gli UUID delle due partizioni swap :

```sh
root@rescue12-customer-eu:/# blkid -s UUID /dev/sda4
root@rescue12-customer-eu:/# blkid -s UUID /dev/sdb4
```

Esempio:

```sh
blkid /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
blkid /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Successivamente, sostituiamo l'UUID vecchio della partizione swap (**sdb4**) con il nuovo in `/etc/fstab` :

```sh
root@rescue12-customer-eu:/# nano etc/fstab
```

Esempio:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /home   ext4    defaults       0       0
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Assicurati di sostituire l'UUID corretto. Nell'esempio sopra, l'UUID da sostituire è `d6af33cf-fc15-4060-a43c-cb3b5537f58a` con il nuovo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Assicurati di sostituire l'UUID corretto.

Successivamente, verifichiamo che tutto sia correttamente montato :

```sh
root@rescue12-customer-eu:/# mount -av
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Attiva la partizione swap con il comando seguente :

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/sda4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sda4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sda4
swapon: /dev/sdb4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sdb4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sdb4
```

Usciamo dall'ambiente `chroot` con exit e ricarichiamo il sistema:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Smontiamo tutti i dischi:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -R /mnt
```

Abbiamo ora completato con successo la ricostruzione del RAID sul server e possiamo ora riavviarlo in modalità normale.

## Per saperne di più

[Hotswap - RAID software](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[API OVHcloud e Archiviazione](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Gestione del RAID hardware](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hotswap - RAID hardware](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Per servizi specializzati (posizionamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Se desideri ricevere un supporto sull'utilizzo e la configurazione delle tue soluzioni OVHcloud, consulta le nostre diverse [offerte di supporto](/links/support).

Se hai bisogno di un corso o di un supporto tecnico per l'implementazione delle nostre soluzioni, contatta il tuo commerciale o clicca su [questo link](/links/professional-services) per ottenere un preventivo e richiedere un'analisi personalizzata del tuo progetto ai nostri esperti del team Professional Services.

Contatta la nostra [Community di utenti](/links/community).