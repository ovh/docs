---
title: "Gestire il RAID software (modalità di avvio UEFI) su un server dedicato"
excerpt: "Gestisci e ricostruisci il RAID software dopo la sostituzione di un disco su un server dedicato in modalità di avvio UEFI."
updated: 2026-01-26
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

Un Redundant Array of Independent Disks (RAID) è una tecnologia che riduce la perdita di dati su un server replicando i dati su due dischi o più.

Il livello RAID predefinito per le installazioni dei server OVHcloud è il RAID 1, che raddoppia lo spazio occupato dai vostri dati, riducendo quindi la capacità di archiviazione utilizzabile a metà.

**Questa guida spiega come gestire e ricostruire un RAID software dopo la sostituzione di un disco sul server in modalità UEFI.**

Prima di iniziare, notate che questa guida si concentra sui Server dedicati che utilizzano la modalità UEFI come modalità di avvio. Questo è il caso delle schede madri moderne. Se il vostro server utilizza la modalità di avvio legacy (BIOS), consultate questa guida: [Gestione e ricostruzione di un RAID software su server in modalità di avvio legacy (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

Per verificare se un server funziona in modalità BIOS legacy o in modalità UEFI, eseguite il comando seguente:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

Per ulteriori informazioni sull'UEFI, consultate l'articolo seguente: [https://uefi.org/about](https://uefi.org/about).

## Prerequisiti

- Un [server dedicato](/links/bare-metal/bare-metal) con una configurazione RAID software
- Un accesso amministrativo (sudo) al server tramite SSH
- Una comprensione del RAID, delle partizioni e di GRUB

In questa guida utilizziamo i termini **disco principale** e **disco secondario**. In questo contesto:

- Il disco principale è il disco il cui ESP (EFI System Partition) è montato da Linux.
- Il disco o i dischi secondari sono tutti gli altri dischi del RAID.

## Procedura

Quando acquisti un nuovo server, potresti sentire il bisogno di effettuare una serie di test e azioni. Un tale test potrebbe consistere nel simulare un guasto del disco per comprendere il processo di ricostruzione del RAID.

### Panoramica del contenuto

- [Informazioni di base](#basicinformation)
- [Comprendere la partizione di sistema EFI (ESP)](#efisystempartition)
- [Simulazione di un guasto del disco](#diskfailure)
    - [Rimozione del disco guasto](#removedisk)
- [Ricostruzione del RAID (con ESP non mirror)](#raidrebuildnonmirrored)
    - [Ricostruzione del RAID dopo il ripristino del disco principale (modalità rescue)](#nonmirroredrescuemode)
    - [Ricreazione della partizione di sistema EFI](#recreateesp)
    - [Ricostruzione del RAID con ESP non sincronizzati dopo aggiornamenti importanti del sistema (GRUB)](#efiraidgrub)
    - [Ricostruzione del RAID dopo la sostituzione del disco principale (modalità normale)](#nonmirrorednormalmode)
- [Ricostruzione del RAID (con ESP in mirror)](#raidrebuildmirrored)
- [Aggiunta dell'etichetta alla partizione SWAP (se applicabile)](#swap-partition)

<a name="basicinformation"></a>

### Informazioni di base

In una sessione della riga di comando, digita il comando seguente per determinare lo stato corrente del RAID:

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 nvme1n1p3[1] nvme0n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1] nvme0n1p2[0]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Dai risultati, possiamo notare che attualmente sono configurati due dispositivi RAID software, **md2** e **md3**, con **md3** che è il più grande dei due. **md3** è composto da due partizioni, denominate **nvme0n1p3** e **nvme1n1p3**.

Il [UU] significa che tutti i dischi funzionano normalmente. Un `_` indicherebbe un disco guasto.

In altri casi, otterresti i seguenti risultati:

```sh
Personalities : [raid1]
md3 : active raid1 nvme0n1p3[1] nvme1n1p3[0]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 2/4 pages [8KB], 65536KB chunk

md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
      523200 blocks [2/2] [UU]

md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Dai risultati, possiamo notare che attualmente sono configurati tre dispositivi RAID software, **md1**, **md2** e **md3**, con **md3** che è il più grande dei due. **md3** è composto da due partizioni, denominate **nvme0n1p3** e **nvme1n1p3**.

Se hai un server con dischi SATA, otterrai i seguenti risultati:

```sh
[user@server_ip ~]# cat /proc/mdstat
Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10]
md3 : active raid1 sda3[0] sdb3[1]
      3904786432 blocks super 1.2 [2/2] [UU]
      bitmap: 2/30 pages [8KB], 65536KB chunk

md2 : active raid1 sda2[0] sdb2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Questo comando mostra i nostri volumi RAID, ma non le dimensioni delle partizioni. Possiamo trovare queste informazioni utilizzando `fdisk -l`:

/// details | **fdisk -l**

```sh
[user@server_ip ~]# sudo fdisk -l

Disk /dev/nvme1n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: A11EDAA3-A984-424B-A6FE-386550A92435

Device             Start        End   Sectors   Size Type
/dev/nvme1n1p1      2048    1048575   1046528   511M EFI System
/dev/nvme1n1p2   1048576    3145727   2097152     1G Linux RAID
/dev/nvme1n1p3   3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme1n1p4 999161856 1000210431   1048576   512M Linux files


Disk /dev/nvme0n1: 476.94 GiB, 512110190592 bytes, 1000215216 sectors
Disk model: WDC CL SN720 SDAQNTW-512G-2000
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: F03AC3C3-D7B7-43F9-88DB-9F12D7281D94

Device              Start        End   Sectors   Size Type
/dev/nvme0n1p1       2048    1048575   1046528   511M EFI System
/dev/nvme0n1p2    1048576    3145727   2097152     1G Linux RAID
/dev/nvme0n1p3    3145728  999161855 996016128 474.9G Linux RAID
/dev/nvme0n1p4  999161856 1000210431   1048576   512M Linux file
/dev/nvme0n1p5 1000211120 1000215182      4063     2M Linux file


Disk /dev/md2: 1022 MiB, 1071644672 bytes, 2093056 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes


Disk /dev/md3: 474.81 GiB, 509824991232 bytes, 995751936 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

Questo comando consente anche di identificare il tipo di partizione.

Per le partizioni **GPT**, la riga 6 mostrerà: `Disklabel type: gpt`.
Queste informazioni sono visibili solo quando il server è in modalità normale.

Ancora basandosi sui risultati di `fdisk -l`, possiamo vedere che `/dev/md2` è composto da 1022 MiB e `/dev/md3` contiene 474,81 GiB. Se eseguiamo il comando `mount`, possiamo anche trovare la disposizione dei dischi.

///

In alternativa, il comando `lsblk` offre una visione diversa delle partizioni:

```sh
[user@server_ip ~]# lsblk
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:7    0   511M  0 part
├─nvme1n1p2 259:8    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme1n1p3 259:9    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
└─nvme1n1p4 259:10   0   512M  0 part  [SWAP]
nvme0n1     259:1    0 476.9G  0 disk
├─nvme0n1p1 259:2    0   511M  0 part  /boot/efi
├─nvme0n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1 /boot
├─nvme0n1p3 259:4    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1 /
├─nvme0n1p4 259:5    0   512M  0 part  [SWAP]
└─nvme0n1p5 259:6    0     2M  0 part
```

Inoltre, se eseguiamo `lsblk -f`, otteniamo ulteriori informazioni su queste partizioni, come il LABEL e l'UUID:

```sh
[user@server_ip ~]# sudo lsblk -f
NAME        FSTYPE            FSVER            LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINT
nvme1n1
├─nvme1n1p1 vfat              FAT16            EFI_SYSPART    B493-9DFA
├─nvme1n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme1n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
└─nvme1n1p4 swap              1                swap-nvme1n1p4 483b9b41-ada3-4143-8cac-5bff7afb73c7                [SWAP]
nvme0n1
├─nvme0n1p1 vfat              FAT16            EFI_SYSPART    B486-9781                             504.9M     1% /boot/efi
├─nvme0n1p2 linux_raid_member 1.2              md2            baae988b-bef3-fc07-615f-6f9043cfd5ea
│ └─md2     ext4              1.0              boot           96850c4e-e2b5-4048-8c39-525194e441aa  851.8M     7% /boot
├─nvme0n1p3 linux_raid_member 1.2              md3            ce0c7fac-0032-054c-eef7-7463b2245519
│ └─md3     ext4              1.0              root           6fea39e9-6297-4ea3-82f1-bf1a3e88106a  441.3G     0% /
├─nvme0n1p4 swap              1                swap-nvme0n1p4 51e7172b-adb0-4729-b0f8-613e5dede38b                [SWAP]
└─nvme0n1p5 iso9660           Joliet Extension config-2       2025-08-05-14-55-41-00
```

Prendi i dispositivi, le partizioni e i punti di montaggio, poiché è importante, soprattutto dopo il ripristino di un disco. Ci permetterà di verificare che le partizioni siano correttamente montate sui rispettivi punti di montaggio sul nuovo disco.

Nel nostro esempio, abbiamo:

- Due matrici RAID: `/dev/md2` e `/dev/md3`.
- Partizioni che fanno parte del RAID: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2** e **nvme0n1p3** con i punti di montaggio `/boot` e `/`.
- Partizioni che non fanno parte del RAID: **nvme0n1p1**, **nvme0n1p4** e **nvme1n1p4** con i punti di montaggio `/boot/efi` e [SWAP].
- Una partizione non ha un punto di montaggio: **nvme1n1p1**.

La partizione `nvme0n1p5` è una partizione di configurazione, ovvero un volume in sola lettura collegato al server che gli fornisce i dati di configurazione iniziale.

<a name="efisystempartition"></a>

### Comprendere la partizione di sistema EFI (ESP)

/// details | **Espandi questa sezione**

***Cos'è una partizione del sistema EFI?***

Una partizione di sistema EFI è una partizione che può contenere i caricatori di avvio, i gestori di avvio o le immagini del kernel di un sistema operativo installato. Può anche contenere programmi utilità del sistema destinati ad essere eseguiti prima dell'avvio del sistema operativo, nonché file di dati come i log degli errori.

***La partizione di sistema EFI è in mirror nel RAID?***

A partire da dicembre 2025, solo le seguenti versioni del sistema operativo metteranno in mirror la partizione di sistema EFI nel RAID per nuove installazioni o reinstallazioni:

* Debian 13
* Proxmox 9
* Ubuntu 25.10
* AlmaLinux e Rocky Linux 10
* Fedora 43

Per le versioni precedenti di questi sistemi operativi, la partizione EFI non è in mirror nel RAID; vengono creati diversi ESP, uno per disco. Tuttavia, solo un ESP è montato alla volta, e tutti gli ESP contengono gli stessi file. La partizione di sistema EFI è montata in `/boot/efi`, e il disco su cui è montata viene selezionato da Linux all'avvio.

Puoi utilizzare il comando `lsblk` per verificare se la tua partizione fa parte di una configurazione RAID.

> [!tabs]
> **ESP non in mirror**
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:6    0   511M  0 part
>> ├─nvme0n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme0n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme0n1p5 259:10   0     2M  0 part
>> nvme1n1     259:1    0 476.9G  0 disk
>> ├─nvme1n1p1 259:2    0   511M  0 part  /boot/efi
>> ├─nvme1n1p2 259:3    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:4    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme1n1p4 259:5    0   512M  0 part  [SWAP]
>> ```
>>
>> Dai risultati sopra, possiamo vedere che una sola partizione di sistema EFI è montata in `/boot/efi`. Gli ESP quindi non sono in mirror (replicati).
>>
> **ESP in mirror** (replicati)
>>
>> ```sh
>> lsblk
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme0n1     259:0    0 476.9G  0 disk
>> ├─nvme0n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme0n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme0n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> └─nvme0n1p4 259:4    0   512M  0 part  [SWAP]
>> nvme1n1     259:5    0 476.9G  0 disk
>> ├─nvme1n1p1 259:6    0   511M  0 part
>> │ └─md1       9:1    0 510.9M  0 raid1 /boot/efi
>> ├─nvme1n1p2 259:7    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1 /boot
>> ├─nvme1n1p3 259:8    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1 /
>> ├─nvme1n1p4 259:9    0   512M  0 part  [SWAP]
>> └─nvme1n1p5 259:10   0     2M  0 part
>> ```
>>
>> Dai risultati sopra, possiamo vedere che entrambe le partizioni di sistema EFI sono montate su `/boot/efi`. Sono quindi in mirror nel RAID.

***Il contenuto della partizione di sistema EFI cambia regolarmente?***

In generale, il contenuto di questa partizione non cambia molto, dovrebbe cambiare solo durante gli aggiornamenti del bootloader (GRUB).

Tuttavia, se la tua partizione EFI non è in mirror, ti consigliamo di eseguire uno script automatico o manuale per sincronizzare tutti gli ESP, in modo che contengano tutti i file aggiornati. In questo modo, se il disco su cui questa partizione è montata va in panne, il server potrà riavviarsi sull'ESP di uno degli altri dischi.

***Cosa succede se il disco principale (con la partizione di sistema EFI montata) va in panne?***

Se il tuo ESP non è in mirror, potresti incontrare i seguenti problemi:

> [!primary]
> Ti preghiamo di notare che, anche se esaminiamo qui i casi più comuni, esistono diversi altri motivi per cui un server potrebbe non avviarsi in modalità normale dopo il ripristino di un disco.
> 

**Caso studio 1** - Nessuna modifica o aggiornamento principale (ad esempio, GRUB) è stato apportato al sistema operativo.

- Il server è in grado di avviarsi in modalità normale e puoi procedere alla ricostruzione del RAID.
- Il server non riesce ad avviarsi in modalità normale. Utilizza l'ambiente della modalità rescue per ricostruire il RAID e ricreare la partizione EFI sul nuovo disco.

**Caso studio 2** - Sono stati effettuati aggiornamenti principali del sistema (ad esempio, GRUB) e gli ESP sono sincronizzati.

- Il server è in grado di avviarsi in modalità normale poiché tutti gli ESP contengono informazioni aggiornate e la ricostruzione del RAID può essere effettuata in modalità normale.
- Il server non riesce ad avviarsi in modalità normale. Utilizza l'ambiente della modalità rescue per ricostruire il RAID e ricreare la partizione EFI sul nuovo disco.

**Caso studio 3** - Sono stati effettuati aggiornamenti principali del sistema (ad esempio, GRUB) sul sistema operativo e le partizioni ESP non sono state sincronizzate.

- Il server non riesce ad avviarsi in modalità normale. Utilizza l'ambiente della modalità rescue per ricostruire il RAID, ricreare la partizione di sistema EFI sul nuovo disco e reinstallare il bootloader (ad esempio, GRUB).
- Il server è in grado di avviarsi in modalità normale (questo potrebbe accadere nel caso in cui un sistema operativo venga aggiornato ma la versione di GRUB rimanga invariata), il che permette di procedere alla ricostruzione del RAID.

In alcuni casi, l'avvio da un ESP obsoleto potrebbe fallire; ad esempio, un aggiornamento principale di GRUB potrebbe rendere il binario GRUB nell'ESP incompatibile con i nuovi moduli GRUB nella partizione `/boot`.

***Come posso sincronizzare le mie partizioni di sistema EFI, e con quale frequenza dovrei sincronizzarle?***

> [!primary]
> Ti preghiamo di notare che il processo può variare in base al tuo sistema operativo. Ad esempio, Ubuntu può sincronizzare diverse partizioni di sistema EFI ad ogni aggiornamento di GRUB, ma è l'unico sistema operativo che lo fa. Ti consigliamo di consultare la documentazione ufficiale del tuo sistema operativo per comprendere come gestire gli ESP.
>
> In questa guida, il sistema operativo utilizzato è Debian.

Ti consigliamo di sincronizzare i tuoi ESP regolarmente o dopo ogni aggiornamento principale del sistema. Per default, tutte le partizioni di sistema EFI contengono gli stessi file dopo l'installazione. Tuttavia, se è coinvolto un aggiornamento principale del sistema, la sincronizzazione degli ESP è essenziale per mantenere il contenuto aggiornato.

L'esecuzione di uno script è un modo efficace per sincronizzare regolarmente le tue partizioni. Di seguito troverai uno script che puoi utilizzare per sincronizzare manualmente i tuoi ESP. Puoi anche configurare uno script automatizzato per sincronizzarli quotidianamente o ad ogni avvio del sistema.

Prima di eseguire lo script, assicurati che `rsync` sia installato sul tuo sistema:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat e Fedora**

```sh
sudo yum install rsync
```

Per eseguire uno script su Linux, hai bisogno di un file eseguibile:

- Inizia creando un file .sh nella directory di tua scelta, sostituendo `script-name` con il nome che preferisci.

```sh
sudo touch script-name.sh
```

- Apri il file con un editor di testo e aggiungi le seguenti righe:

```sh
sudo nano script-name.sh
```

```sh
#!/bin/bash

set -euo pipefail

MOUNTPOINT="/var/lib/grub/esp"
MAIN_PARTITION=$(findmnt -n -o SOURCE /boot/efi)

echo "${MAIN_PARTITION} is the main partition"

mkdir -p "${MOUNTPOINT}"

while read -r partition; do
    if [[ "${partition}" == "${MAIN_PARTITION}" ]]; then
        continue
    fi
    echo "Working on ${partition}"
    mount "${partition}" "${MOUNTPOINT}"
    rsync -ax "/boot/efi/" "${MOUNTPOINT}/"
    umount "${MOUNTPOINT}"
done < <(blkid -o device -t LABEL=EFI_SYSPART)
```

Salva e chiudi il file.

- Rendi lo script eseguibile

```sh
sudo chmod +x script-name.sh
```

- Esegui lo script

```sh
sudo ./script-name.sh
```

- Se non sei nella directory

```sh
./percorso/verso/la/directory/script-name.sh
```

Quando lo script viene eseguito, il contenuto della partizione EFI montata verrà sincronizzato con le altre. Per accedere al contenuto, puoi montare una di queste partizioni EFI non montate sul punto di montaggio: `/var/lib/grub/esp`.

///

<a name="diskfailure"></a>

### Simulazione di un guasto del disco

Ora che abbiamo le informazioni necessarie, possiamo simulare un guasto del disco. In questo esempio, provocheremo il guasto del disco principale `nvme0n1` (notiamo che si tratta del disco su cui è montato l'ESP).

Il metodo preferito per farlo è attraverso la modalità rescue di OVHcloud.

Riavvia il server in modalità rescue e collegati con le credenziali fornite.

Per rimuovere un disco dal RAID, il primo passo è contrassegnarlo come **Failed**  (guasto) e rimuovere le partizioni dalle rispettive tabelle RAID.

**Nota**: si tratta solo di un esempio; adatta i comandi alla tua configurazione.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/2] [UU]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]

unused devices: <none>
```

Dai risultati sopra, nvme0n1 ha due partizioni in RAID che sono **nvme0n1p2** e **nvme0n1p3**.

<a name="removedisk"></a>

#### Rimozione del disco guasto

In primo luogo, contrassegniamo le partizioni **nvme0n1p2** e **nvme0n1p3** come guaste (*Failed*).

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Quando eseguiamo il comando `cat /proc/mdstat`, otteniamo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[0](F) nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2](F) nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Come possiamo vedere sopra, il [F] accanto alle partizioni indica che il disco è guasto o in panne.

Successivamente, rimuoviamo queste partizioni dagli array RAID per eliminarle completamente dal RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Lo stato del RAID dovrebbe ora assomigliare a questo:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme1n1p2[1]
      1046528 blocks super 1.2 [2/1] [_U]

unused devices: <none>
```

Ora, appaiono solo due partizioni negli array RAID. Siamo riusciti a provocare il guasto del disco **nvme0n1**.

Per ottenere un disco simile a un disco vuoto, esegui il comando seguente su ogni partizione, quindi sul disco:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1
```

Il disco appare ora come un disco nuovo e vuoto:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
```

Esegui il comando seguente per verificare che il disco sia stato effettivamente "cancellato":

```sh
parted /dev/nvme0n1
GNU Parted 3.5
Using /dev/nvme0n1
Welcome to GNU Parted! Type 'help' to view a list of commands.
(parted) p
Error: /dev/nvme0n1: unrecognised disk label
Model: WDC CL SN720 SDAQNTW-512G-2000 (nvme)
Disk /dev/nvme0n1: 512GB
Sector size (logical/physical): 512B/512B
Partition Table: unknown
Disk Flags:
```

Per ulteriori informazioni sulla preparazione e la richiesta di sostituzione di un disco, consulta questa [guida](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Inoltre, se esegui il comando seguente, otterrai ulteriori dettagli sugli array RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --detail /dev/md3

/dev/md3:
           Version : 1.2
     Creation Time : Fri Aug  1 14:51:13 2025
        Raid Level : raid1
        Array Size : 497875968 (474.81 GiB 509.82 GB)
     Used Dev Size : 497875968 (474.81 GiB 509.82 GB)
      Raid Devices : 2
     Total Devices : 1
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Fri Aug  1 15:56:17 2025
             State : clean, degraded
    Active Devices : 1
   Working Devices : 1
    Failed Devices : 0
     Spare Devices : 0

Consistency Policy : bitmap

              Name : md3
              UUID : b383c3d5:7fb1bb5e:6b7c4d96:6ea817ff
            Events : 215

    Number   Major   Minor   RaidDevice State
       -       0        0        0      removed
       1     259        4        1      active sync   /dev/nvme1n1p3
```

Possiamo ora procedere alla sostituzione del disco e alla ricostruzione del RAID.

<a name="raidrebuildnonmirrored"></a>

### Ricostruzione del RAID (con ESP non mirror)

> [!primary]
> Questo processo può variare in base al sistema operativo installato sul tuo server. Ti consigliamo di consultare la documentazione ufficiale del tuo sistema operativo per ottenere i comandi appropriati.
>
> Se il tuo server può avviarsi in modalità normale dopo la sostituzione del disco, procedi semplicemente seguendo le istruzioni descritte in [questa sezione](#nonmirrorednormalmode) se la tua partizione EFI non è in mirror o [questa sezione](#raidrebuildmirrored) se la tua partizione EFI è in mirror.
>

#### Ricostruzione del RAID dopo il ripristino del disco principale (modalità rescue) <a name="nonmirroredrescuemode"></a>

Una volta sostituito il disco, copia la tabella delle partizioni del disco sano (in questo esempio, nvme1n1) verso il nuovo disco (nvme0n1).

**Per le partizioni GPT**

Il comando deve essere in questo formato: `sgdisk -R /dev/nuovo disco /dev/disco sano`

Esempio:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Esegui `lsblk` per verificare che le tabelle delle partizioni siano state correttamente copiate:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk

NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
nvme1n1     259:0    0 476.9G  0 disk
├─nvme1n1p1 259:1    0   511M  0 part
├─nvme1n1p2 259:2    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:3    0 474.9G  0 part
│ └─md3       9:3    0 474.8G  0 raid1
└─nvme1n1p4 259:4    0   512M  0 part
nvme0n1     259:5    0 476.9G  0 disk
├─nvme0n1p1 259:10   0   511M  0 part
├─nvme0n1p2 259:11   0     1G  0 part
├─nvme0n1p3 259:12   0 474.9G  0 part
└─nvme0n1p4 259:13   0   512M  0 part
```

Successivamente, randomizza il GUID del nuovo disco per evitare eventuali conflitti con i GUID di altri dischi:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Se ricevi il seguente messaggio:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Esegui semplicemente il comando `partprobe`.

Possiamo ora ricostruire l'array RAID. L'estratto di codice seguente mostra come aggiungere nuovamente le nuove partizioni (`nvme0n1p2` e `nvme0n1p3`) all'array RAID.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Per verificare il processo di ricostruzione:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
md3 : active raid1 nvme0n1p3[2] nvme1n1p3[1]
      497875968 blocks super 1.2 [2/1] [_U]
      [>....................]  recovery =  0.1% (801920/497875968) finish=41.3min speed=200480K/sec
      bitmap: 0/4 pages [0KB], 65536KB chunk

md2 : active raid1 nvme0n1p2[2] nvme1n1p2[1]
      1046528 blocks super 1.2 [2/2] [UU]
```

Una volta completata la ricostruzione del RAID, esegui il comando seguente per verificare che le partizioni siano state correttamente aggiunte al RAID:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1
├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    4629-D183
├─nvme1n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme1n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme1n1p4 swap              1     swap-nvme1n1p4 9bf292e8-0145-4d2f-b891-4cef93c0d209
nvme0n1
├─nvme0n1p1
├─nvme0n1p2 linux_raid_member 1.2   md2            83719c5c-2a27-2a56-5268-7d49d8a1d84f
│ └─md2     ext4              1.0   boot           4de80ae0-dd90-4256-9135-1735e7be4b4d
├─nvme0n1p3 linux_raid_member 1.2   md3            b383c3d5-7fb1-bb5e-6b7c-4d966ea817ff
│ └─md3     ext4              1.0   root           9bf386b6-9523-46bf-b8e5-4b8cc7c5786f
└─nvme0n1p4
```

In base ai risultati sopra riportati, le partizioni del nuovo disco sono state correttamente aggiunte al RAID. Tuttavia, la partizione EFI System e la partizione SWAP (in alcuni casi) non sono state duplicate, il che è normale poiché non fanno parte del RAID.

> [!warning]
> Gli esempi sopra illustrano semplicemente le fasi necessarie in base a una configurazione del server predefinita. I risultati di ogni comando dipendono dal tipo di hardware installato sul tuo server e dalla struttura delle sue partizioni. In caso di dubbi, consulta la documentazione del tuo sistema operativo.
> 
> Se hai bisogno di un supporto professionale per l'amministrazione del tuo server, consulta i dettagli della sezione [Per saperne di più](#go-further) di questa guida.
>

<a name="recreateesp"></a>

#### Ricreazione della partizione del sistema EFI

Per ricostruire la partizione EFI System sul nuovo disco, dobbiamo formattare **nvme0n1p1** e replicare il contenuto della partizione EFI System sana (nel nostro esempio: nvme1n1p1) su questa.

In questo caso, assumiamo che le due partizioni siano state sincronizzate e contengano file aggiornati.

> [!warning]
> Se è avvenuto un aggiornamento importante del sistema, come un aggiornamento del kernel o di GRUB, e le due partizioni non sono state sincronizzate, consulta questa [sezione](#efiraidgrub) una volta che hai completato la creazione della nuova partizione EFI System.
>

Per prima cosa, formatta la partizione:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Successivamente, assegna alla partizione il nome `EFI_SYSPART` (questo nome è specifico di OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Duplica quindi il contenuto di nvme1n1p1 su nvme0n1p1. 

Inizia creando due cartelle, denominate « old » e « new » in questo esempio:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Successivamente, monta **nvme1n1p1** nella cartella « old » e **nvme0n1p1** nella cartella « new » per distinguerle:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Copia i file della cartella « old » nella cartella « new »:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # rsync -axv old/ new/
sending incremental file list
EFI/
EFI/debian/
EFI/debian/BOOTX64.CSV
EFI/debian/fbx64.efi
EFI/debian/grub.cfg
EFI/debian/grubx64.efi
EFI/debian/mmx64.efi
EFI/debian/shimx64.efi

sent 6,099,848 bytes  received 165 bytes  12,200,026.00 bytes/sec
total size is 6,097,843  speedup is 1.00
```

Una volta completato, smonta le due partizioni:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Successivamente, monta la partizione che contiene la radice del sistema operativo su `/mnt`. In questo esempio, questa partizione è **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Monta le directory seguenti per assicurarti che tutte le modifiche apportate nell'ambiente `chroot` funzionino correttamente:

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

Successivamente, utilizza il comando `chroot` per accedere al punto di montaggio e verifica che la nuova partizione sistema EFI sia stata correttamente creata e che il sistema riconosca i due ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Per visualizzare le partizioni ESP, esegui il comando `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

I risultati sopra riportati mostrano che la nuova partizione EFI è stata creata correttamente e che l'etichetta è stata applicata correttamente.

Una volta completato, esci dall'ambiente `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

Successivamente, consulta [questa sezione](#swap-partition) per ricostruire la partizione SWAP (se necessario).

#### Ricostruzione del RAID con ESP non sincronizzati dopo aggiornamenti importanti del sistema (GRUB) <a name="efiraidgrub"></a>

/// details | **Espandi questa sezione**

> [!warning]
> Segui le fasi di questa sezione solo se si applicano al tuo caso.
>

Se il disco principale viene sostituito quando contiene partizioni sistema EFI non sincronizzate dopo aggiornamenti importanti del sistema che hanno modificato il GRUB, l'avvio da uno dei dischi secondari con un ESP obsoleto potrebbe fallire.

In questo caso, oltre a ricostruire il RAID e a ricreare la partizione sistema EFI in modalità rescue, devi anche reinstallare il GRUB su questa.

Una volta creato l'ESP (come spiegato sopra) e riconosciuto dal sistema, sempre nell'ambiente `chroot`, crea la directory /boot/efi per montare la nuova partizione sistema EFI **nvme0n1p1**.

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Successivamente, reinstalla il caricatore di avvio GRUB (*bootloader*):

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Poi, esegui il comando seguente:

```sh
root@rescue12-customer-eu:/# update-grub
```

Una volta completato, esci dall'ambiente `chroot`:

```sh
root@rescue12-customer-eu:/# exit
```

Successivamente, consulta [questa sezione](#swap-partition) per ricostruire la partizione SWAP (se necessario).

///

<a name="nonmirrorednormalmode"></a>

#### Ricostruzione del RAID dopo la sostituzione del disco principale (modalità normale)

/// details | **Espandi questa sezione**

Se il tuo server è in grado di avviarsi in modalità normale dopo la sostituzione del disco, puoi seguire le fasi seguenti per ricostruire il RAID.

Una volta sostituito il disco, copiamo la tabella delle partizioni del disco sano (in questo esempio, nvme1n1) verso il nuovo (nvme0n1).

**Per le partizioni GPT**

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Il comando deve essere in questo formato: `sgdisk -R /dev/nuovo disco /dev/disco sano`.

Una volta completato, il passo successivo consiste nell'attribuire un GUID casuale al nuovo disco per evitare conflitti di GUID con altri dischi:

```sh
sudo sgdisk -G /dev/nvme0n1
```

Se ricevi il seguente messaggio:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Esegui semplicemente il comando `partprobe`. Se non vedi comunque le nuove partizioni create (con il comando `lsblk`), devi riavviare il server prima di procedere.

Successivamente, aggiungi le partizioni al RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilizza questo comando per seguire la ricostruzione del RAID: `cat /proc/mdstat`.

Una volta completata la ricostruzione, ricrea la partizione sistema EFI sul nuovo disco.

- Per prima cosa, assicurati che gli strumenti necessari siano installati:

**Debian e Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

- Formatta la partizione. Nel nostro esempio `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

- Assegna l'etichetta `EFI_SYSPART` alla partizione (questo nome è specifico di OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Una volta completato, puoi sincronizzare le due partizioni utilizzando lo script fornito in questa guida.

- Verifica che la nuova partizione EFI System sia stata correttamente creata e che il sistema la riconosca:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Successivamente, consulta [questa sezione](#swap-partition) per ricostruire la partizione SWAP (se necessario).

///

<a name="raidrebuildmirrored"></a>

### Ricostruzione del RAID (con ESP in mirror)

/// details | **Espandi questa sezione**

> [!tabs] 
> **In modalità Rescue**
>>
>> La ricostruzione del RAID con tutte le partizioni in specchio è più semplice; basta copiare i dati del disco sano sul nuovo disco e ricreare la partizione [SWAP] (se necessario).
>>
>> In base alle illustrazioni sopra, lo stato del RAID dovrebbe apparire così dopo un guasto del disco:
>>
>> ```sh
>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>> md3 : active raid1 nvme1n1p3[2] nvme0n1p3[0](F)
>>       497875968 blocks super 1.2 [2/1] [_U]
>>       bitmap: 0/4 pages [0KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[1]
>>       523200 blocks [2/1] [_U]
>>
>> md2 : active raid1 nvme1n1p2[2] nvme0n1p2[0](F)
>>       1046528 blocks super 1.2 [2/1] [_U]
>>
>> unused devices: <none>
>> ```
>>
>> Una volta sostituito il disco, il primo passo consiste nel copiare la tabella delle partizioni del disco sano (in questo esempio, nvme1n1) sul nuovo disco (nvme0n1).
>>
>> **Per le partizioni GPT**
>>
>> Il comando deve essere nel formato seguente: `sgdisk -R /dev/nuovo disco /dev/disco sano`.
>>
>> Nel nostro esempio:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Esegui `lsblk` per verificare che le tabelle delle partizioni siano state correttamente copiate:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk
>>
>> NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINTS
>> nvme1n1     259:0    0 476.9G  0 disk
>> ├─nvme1n1p1 259:1    0   511M  0 part
>> │ └─md1       9:1    0  510.9M 0 raid1
>> ├─nvme1n1p2 259:2    0     1G  0 part
>> │ └─md2       9:2    0  1022M  0 raid1
>> ├─nvme1n1p3 259:3    0 474.9G  0 part
>> │ └─md3       9:3    0 474.8G  0 raid1
>> └─nvme1n1p4 259:4    0   512M  0 part
>> nvme0n1     259:5    0 476.9G  0 disk
>> ├─nvme0n1p1 259:10   0   511M  0 part
>> ├─nvme0n1p2 259:11   0     1G  0 part
>> ├─nvme0n1p3 259:12   0 474.9G  0 part
>> └─nvme0n1p4 259:13   0   512M  0 part
>> ```
>>
>> Il passo successivo consiste nell'attribuire un GUID casuale al nuovo disco per evitare conflitti di GUID con altri dischi:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
>> ```
>>
>> Se ricevi il seguente messaggio:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Esegui il comando `partprobe`.
>>
>> Ora possiamo ricostruire la matrice RAID. L'estratto di codice seguente mostra come aggiungere nuovamente le nuove partizioni (nvme0n1p2 e nvme0n1p3) alla matrice RAID.
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Per verificare il processo di ricostruzione:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[2] nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       [=========>...........]  recovery = 47.0% (234461184/497875968) finish=21.
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[1] nvme1n1p1[0]
>>       523200 blocks [2/2] [UU]
>>
>> md2 : active raid1 nvme0n1p2[2] nvme1n1p2[0]
>>       1046528 blocks super 1.2 [2/2] [UU]
>> ```
>>
>> Una volta completata la ricostruzione, esegui il comando seguente per verificare che le partizioni siano state correttamente aggiunte al RAID:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme1n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme1n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme1n1p4 swap              1                swap-nvme1n1p4 0d502997-853d-4986-b40a-407d5f187e82
>> └─nvme1n1p5
>> nvme0n1
>> ├─nvme0n1p1 linux_raid_member 0.90.0                          2043a004-0743-7bc6-37f2-12c43604630c
>> │ └─md1     vfat              FAT16            EFI_SYSPART    D28D-6A4F
>> ├─nvme0n1p2 linux_raid_member 1.2              md2            0772556e-3f45-a551-ab32-c96e502dab22
>> │ └─md2     xfs                                boot           0b22431a-7020-427c-aa31-324feec6ea84
>> ├─nvme0n1p3 linux_raid_member 1.2              md3            071571aa-1b36-9ef7-15b3-190ffdcf3a8b
>> │ └─md3     xfs                                root           3a2cb95b-c142-4d72-835b-52fcce99a0c5
>> ├─nvme0n1p4
>> └─nvme0n1p5 iso9660           Joliet Extension config-2       2025-12-16-15-40-00-00
>> ```
>>
>> Successivamente, consulta [questa sezione](#swap-partition) per ricreare la partizione SWAP (se necessario).
>>
> **In modalità Normale**
>>
>> In base alle illustrazioni sopra, lo stato del RAID dovrebbe apparire così dopo un guasto del disco:
>>
>> ```sh
>> Personalities : [raid1]
>> md3 : active raid1 nvme0n1p3[1](F) nvme1n1p3[0]
>>       497875968 blocks super 1.2 [2/1] [U_]
>>       bitmap: 4/4 pages [16KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[0]
>>       523200 blocks [2/1] [U_]
>>
>> md2 : active raid1 nvme1n1p2[0] nvme0n1p2[1](F)
>>       1046528 blocks super 1.2 [2/1] [U_]
>> ```
>>
>> Una volta sostituito il disco, il primo passo consiste nel copiare la tabella delle partizioni del disco sano (in questo esempio, nvme1n1) sul nuovo disco (nvme0n1).
>>
>> **Per le partizioni GPT**
>>
>> ```sh
>> sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Il comando deve essere nel seguente formato: `sgdisk -R /dev/nuovo disco /dev/disco sano`.
>>
>> Successivamente, randomizza il GUID del nuovo disco per evitare conflitti con i GUID di altri dischi:
>>
>> ```sh
>> sudo sgdisk -G /dev/nvme0n1
>> ```
>>
>> Se ricevi il seguente messaggio:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Esegui semplicemente il comando `partprobe`. Se non vedi comunque le nuove partizioni create (es. con `lsblk`), devi riavviare il server prima di procedere.
>>
>> Successivamente, aggiungi le partizioni al RAID:
>>
>> ```sh
>> [user@server_ip ~]# sudo mdadm --add /dev/md1 /dev/nvme0n1p1
>> # mdadm: added /dev/nvme0n1p1
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2
>> # mdadm: added /dev/nvme0n1p2
>>
>> [user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3
>> # mdadm: added /dev/nvme0n1p3
>> ```
>>
>> Utilizza il comando seguente per monitorare la ricostruzione del RAID:
>>
>> ```sh
>> [user@server_ip ~]# cat /proc/mdstat
>> ```
>>
>> Una volta completata la ricostruzione del RAID, consulta [questa sezione](#swap-partition) per ricreare la partizione SWAP (se necessario).
>>

///


#### Aggiunta dell'etichetta alla partizione SWAP (se applicabile) <a name="swap-partition"></a>

/// details | **Espandi questa sezione**

> [!tabs]
> **Via modalità Rescue**
>>
>> Fuori dall'ambiente `chroot`, ricrea la partizione [SWAP] **nvme0n1p4** e aggiungi l'etichetta `swap-nvmenxxx`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
>> LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
>> ```
>>
>> Verifica che l'etichetta sia stata correttamente applicata:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
>> NAME        FSTYPE            FSVER LABEL          UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
>> nvme1n1
>> ├─nvme1n1p1 vfat              FAT16 EFI_SYSPART    B27E-16D2
>> ├─nvme1n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme1n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme1n1p4 swap              1     swap-nvme1n1p4 133ca9a3-1bd6-4519-9b5a-01b8ffa55ca4
>> nvme0n1
>> ├─nvme0n1p1 vfat              FAT16 EFI_SYSPART    3557-B372
>> ├─nvme0n1p2 linux_raid_member 1.2   md2            fb3c5180-526f-56ad-3a0a-3f7961f57684
>> │ └─md2     xfs                     boot           ed3a4730-b3eb-4aa5-a550-dd6cd188c3a4
>> ├─nvme0n1p3 linux_raid_member 1.2   md3            a14af9ed-f791-46e5-4381-224e6d79088c
>> │ └─md3     xfs                     root           5041d916-abb3-4dc8-acdc-baeb3977ce6d  469.6G     1% /mnt
>> └─nvme0n1p4 swap              1     swap-nvme0n1p4 dedd4d49-7d40-40c8-b529-41f251a7ff81
>> ```
>>
>> Accedi nuovamente all'ambiente `chroot`:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
>> ```
>>
>> Recupera l'UUID delle due partizioni SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>>
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> Quindi, sostituisci l'UUID vecchio della partizione SWAP (**nvme0n1p4**) con il nuovo nel file `/etc/fstab`:
>>
>> ```sh
>> root@rescue12-customer-eu:/# nano /etc/fstab
>> ```
>>
>> Esempio:
>>
>> ```sh
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Sulla base dei risultati sopra riportati, il vecchio UUID è `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve essere sostituito con il nuovo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Assicurati di sostituire l'UUID corretto.
>>
>> Quindi, verifica che tutto sia correttamente montato con il comando seguente:
>>
>> ```sh
>> root@rescue12-customer-eu:/# mount -av
>> /                        : ignored
>> /boot                    : successfully mounted
>> /boot/efi                : successfully mounted
>> swap                     : ignored
>> swap                     : ignored
>> ```
>>
>> Attiva la partizione SWAP:
>>
>> ```sh
>> root@rescue12-customer-eu:/# swapon -av
>>
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme1n1p4
>> ```
>>
>> Esci dall'ambiente chroot con `exit` e ricarica il sistema:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
>> ```
>>
>> Smonta tutti i dischi:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
>> ```
>>
>> Abbiamo ora completato con successo la ricostruzione RAID sul server e possiamo ora riavviarlo in modalità normale.
>>
> **Via modalità Normale**
>>
>> Per ricreare la partizione SWAP, procedere come segue:
>>
>> - Innanzitutto, ricreare la partizione su **nvme0n1p4** e aggiungere l'etichetta **swap-nvme0n1p4**:
>>
>> ```sh
>> [user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> ```
>>
>> - Recuperare gli UUID delle due partizioni SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> - Sostituisci il vecchio UUID della partizione SWAP (**nvme0n1p4**) con quello nuovo in `/etc/fstab`:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> ```
>>
>> Esempio:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> In base ai risultati sopra riportati, il vecchio UUID è `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve essere sostituito con il nuovo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. 
>>
>>
>> Assicurati di sostituire l'UUID corretto.
>>
>> Quindi, esegui il seguente comando per attivare la partizione SWAP:
>>
>> ```sh
>> [user@server_ip ~]# sudo swapon -av
>> swapon: /dev/nvme1n1p4: already active -- ignored
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> ```
>>
>> Quindi, riavvia il sistema:
>>
>> ```sh
>> [user@server_ip ~]# sudo systemctl daemon-reload
>> ```
>>
>> Abbiamo ora completato con successo la ricostruzione del RAID.
>>

///

<a name="go-further"></a>

## Per saperne di più

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Per servizi specializzati (SEO, sviluppo, ecc.), contatta [i partner OVHcloud](/links/partner).

Se hai bisogno di un supporto per utilizzare e configurare le tue soluzioni OVHcloud, consulta le [nostre offerte di supporto](/links/support).

Se hai bisogno di formazione o di un supporto tecnico per implementare le nostre soluzioni, contatta il tuo rappresentante commerciale o clicca su [questo link](/links/professional-services) per richiedere un preventivo e chiedere ai nostri esperti del team Professional Services di intervenire sul tuo caso d'uso specifico.

Contatta la nostra [Community di utenti](/links/community).