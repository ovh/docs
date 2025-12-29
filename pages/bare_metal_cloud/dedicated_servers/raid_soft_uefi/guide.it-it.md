---
title: "Gestione e ricostruzione di un RAID software sui server in modalità di avvio UEFI"
excerpt: Scopri come gestire e ricostruire un RAID software dopo il ripristino di un disco su un server in modalità di avvio UEFI
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

Un Redundant Array of Independent Disks (RAID) è una tecnologia che riduce la perdita di dati su un server replicando i dati su due dischi o più.

Il livello RAID predefinito per le installazioni dei server OVHcloud è il RAID 1, che raddoppia lo spazio occupato dai vostri dati, riducendo quindi la capacità di archiviazione utilizzabile a metà.

**Questa guida spiega come gestire e ricostruire un RAID software dopo il ripristino di un disco sul vostro server in modalità UEFI.**

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

Durante questa guida utilizzeremo i termini **disco principale** e **disco secondario**. In questo contesto:

- Il disco principale è il disco il cui ESP (EFI System Partition) è montato da Linux
- I dischi secondari sono tutti gli altri dischi del RAID

## Procedura

Quando acquisti un nuovo server, potresti sentire il bisogno di effettuare una serie di test e azioni. Un tale test potrebbe consistere nel simulare un guasto del disco per comprendere il processo di ricostruzione del RAID e prepararti in caso di problemi.

### Panoramica del contenuto

- [Informazioni di base](#basicinformation)
- [Comprendere la partizione del sistema EFI (ESP)](#efisystemparition)
- [Simulazione di un guasto del disco](#diskfailure)
    - [Rimozione del disco guasto](#diskremove)
- [Ricostruzione del RAID](#raidrebuild)
    - [Ricostruzione del RAID dopo la sostituzione del disco principale (modalità Rescue)](#rescuemode)
    - [Ricreazione della partizione del sistema EFI](#recreateesp)
    - [Ricostruzione del RAID quando le partizioni EFI non sono sincronizzate dopo aggiornamenti importanti del sistema (es. GRUB)](#efiraidgrub)
    - [Aggiunta dell'etichetta alla partizione SWAP (se applicabile)](#swap-partition)
    - [Ricostruzione del RAID in modalità normale](#normalmode)

<a name="basicinformation"></a>

### Informazioni di base

In una sessione della riga di comando, digita il comando seguente per determinare lo stato corrente del RAID :

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

Questo comando ci mostra che attualmente abbiamo due volumi RAID software configurati, **md2** e **md3**, con **md3** che è il più grande dei due. **md3** è composto da due partizioni, chiamate **nvme1n1p3** e **nvme0n1p3**.

Il [UU] significa che tutti i dischi funzionano normalmente. Un `_` indicherebbe un disco guasto.

Se hai un server con dischi SATA, otterrai i seguenti risultati :

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

Sebbene questo comando restituisca i nostri volumi RAID, non ci indica la dimensione delle partizioni stesse. Possiamo trovare queste informazioni con il comando seguente :

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

Il comando `fdisk -l` consente anche di identificare il tipo delle tue partizioni. Questa informazione è importante durante la ricostruzione del tuo RAID in caso di guasto del disco.

Per le partizioni **GPT**, la riga 6 mostrerà: `Disklabel type: gpt`.
Queste informazioni sono visibili solo quando il server è in modalità normale.

Ancora basandosi sui risultati di `fdisk -l`, possiamo vedere che `/dev/md2` è composto da 1022 MiB e `/dev/md3` contiene 474,81 GiB. Se eseguiamo il comando `mount`, possiamo anche trovare la disposizione dei dischi.

In alternativa, il comando `lsblk` offre una visione diversa delle partizioni :

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

Inoltre, se eseguiamo `lsblk -f`, otteniamo ulteriori informazioni su queste partizioni, come l'etichetta (LABEL) e l'UUID :

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

Prendi nota dei dispositivi, delle partizioni e dei loro punti di montaggio; è importante, soprattutto dopo la sostituzione di un disco.

Dalle comandi e risultati sopra, abbiamo :

- Due matrici RAID : `/dev/md2` e `/dev/md3`.
- Quattro partizioni che fanno parte del RAID : **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2**, **nvme0n1p3** con i punti di montaggio `/boot` e `/`.
- Due partizioni non incluse nel RAID, con i punti di montaggio : `/boot/efi` e [SWAP].
- Una partizione che non possiede un punto di montaggio : **nvme1n1p1**

La partizione `nvme0n1p5` è una partizione di configurazione, cioè un volume in sola lettura connesso al server che gli fornisce i dati di configurazione iniziale.

<a name="efisystempartition"></a>

### Comprendere la partizione del sistema EFI (ESP)

***Cos'è una partizione del sistema EFI ?***

Una partizione del sistema EFI è una partizione su cui il server si avvia. Contiene i file di avvio, ma anche i gestori di avvio o le immagini del kernel di un sistema operativo installato. Può anche contenere programmi utili progettati per essere eseguiti prima che il sistema operativo si avvii, così come file di dati come registri degli errori.

***La partizione del sistema EFI è inclusa nel RAID ?***

No, a partire da agosto 2025, quando un'installazione del sistema operativo viene effettuata da OVHcloud, la partizione ESP non è inclusa nel RAID. Quando si utilizzano i nostri modelli OS per installare il server con un RAID software, vengono create più partizioni del sistema EFI: una per disco. Tuttavia, solo una partizione EFI è montata alla volta. Tutte le ESP create contengono gli stessi file. Tutte le ESP create al momento dell'installazione contengono gli stessi file.

La partizione del sistema EFI è montata a `/boot/efi` e il disco su cui è montata viene selezionato da Linux all'avvio.

Esempio :

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

In base ai risultati sopra riportati, vediamo che abbiamo due partizioni di sistema EFI identiche (nvme0n1p1 e nvme1n1p1), ma solo **nvme0n1p1** è montata su `/boot/efi`. Entrambe le partizioni hanno il LABEL: `EFI_SYSPART` (questa denominazione è specifica di OVHcloud).

***Il contenuto della partizione di sistema EFI cambia regolarmente?***

In generale, il contenuto di questa partizione non cambia molto, dovrebbe cambiare solo durante gli aggiornamenti del bootloader (*bootloader*).

Tuttavia, si consiglia di eseguire uno script automatico o manuale per sincronizzare tutte le ESP, in modo che contengano tutte gli stessi file aggiornati. In questo modo, se il disco su cui è montata questa partizione si guasta, il server potrà riavviarsi sull'ESP di uno degli altri dischi.

***Cosa succede se il disco principale montato su `boot/efi` si guasta?***

> [!primary]
> Si prega di notare che di seguito vengono esaminati i casi più comuni, ma esistono molti altri motivi per cui un server potrebbe non avviarsi in modalità normale dopo la sostituzione di un disco.
>

**Caso di studio 1** - Non sono state apportate modifiche o aggiornamenti significativi al sistema (ad esempio GRUB)

- Il server è in grado di avviarsi in modalità normale ed è possibile procedere alla ricostruzione del RAID.
- Il server non è in grado di avviarsi in modalità normale, il server viene riavviato in modalità di ripristino, dove è possibile ricostruire il RAID e ricreare la partizione EFI sul nuovo disco.

**Caso di studio 2** - Sono stati effettuati aggiornamenti importanti al sistema (ad esempio GRUB) e gli ESP sono stati sincronizzati

- Il server è in grado di avviarsi in modalità normale poiché tutti gli ESP contengono informazioni aggiornate e la ricostruzione del RAID può essere eseguita in modalità normale.
- Il server non è in grado di avviarsi in modalità normale, il server viene riavviato in modalità di ripristino, dove è possibile ricostruire il RAID e ricreare la partizione di sistema EFI sul nuovo disco.

**Caso di studio 3** - Sono stati effettuati aggiornamenti importanti al sistema (ad esempio GRUB) e le partizioni ESP non sono state sincronizzate.

- Il server non è in grado di avviarsi in modalità normale, quindi viene riavviato in modalità di ripristino, dove è possibile ricostruire il RAID, ricreare la partizione di sistema EFI sul nuovo disco e reinstallare il bootloader su di esso.
- Il server è in grado di avviarsi in modalità normale (ciò potrebbe verificarsi nel caso in cui un sistema operativo venga aggiornato a una versione più recente ma la versione di GRUB rimanga invariata) ed è possibile procedere alla ricostruzione del RAID.

Infatti, in alcuni casi, l'avvio da un ESP obsoleto non funziona. Ad esempio, un aggiornamento importante di GRUB potrebbe rendere la vecchia versione di GRUB presente nell'ESP incompatibile con i moduli GRUB più recenti installati nella partizione `/boot`.

***Come posso sincronizzare le mie partizioni di sistema EFI e con quale frequenza dovrei farlo?***

> [!primary]
> Si prega di notare che, a seconda del sistema operativo, il processo potrebbe essere diverso. Ad esempio, Ubuntu è in grado di mantenere sincronizzate più partizioni di sistema EFI ad ogni aggiornamento di GRUB. Tuttavia, questo è l'unico sistema operativo che lo fa. Si consiglia di consultare la documentazione ufficiale del proprio sistema operativo per capire come gestire le ESP.
>
> In questa guida, il sistema operativo utilizzato è Debian.

Si consiglia di sincronizzare le ESP regolarmente o dopo ogni aggiornamento importante del sistema. Per impostazione predefinita, tutte le partizioni di sistema EFI contengono gli stessi file dopo l'installazione. Tuttavia, se è previsto un aggiornamento importante del sistema, la sincronizzazione delle ESP è essenziale per mantenere aggiornato il contenuto.

<a name="script"></a>

#### Script

Ecco uno script che puoi utilizzare per sincronizzarli manualmente. Puoi anche eseguire uno script automatizzato per sincronizzare le partizioni quotidianamente o ogni volta che il servizio parte.

Prima di eseguire lo script, assicurati che `rsync` sia installato sul tuo sistema :

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat e Fedora**

```sh
sudo yum install rsync
```

Per eseguire uno script su Linux, hai bisogno di un file eseguibile :

- Inizia creando un file .sh nella directory di tuo interesse, sostituendo `nome-script` con il nome che preferisci.

```sh
sudo touch nome-script.sh
```

- Apri il file con un editor di testo e aggiungi le seguenti righe :

```sh
sudo nano nome-script.sh
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
sudo chmod +x nome-script.sh
```

- Esegui lo script

```sh
sudo ./nome-script.sh
```

- Se non sei nella directory

```sh
./path/to/folder/nome-script.sh
```

Quando lo script viene eseguito, il contenuto della partizione EFI montata verrà sincronizzato con le altre. Per accedere al contenuto, puoi montare una di queste partizioni EFI non montate sul punto di montaggio : `/var/lib/grub/esp`.

<a name="diskfailure"></a>

### Simulazione di un guasto del disco

Ora che abbiamo tutte le informazioni necessarie, possiamo simulare un guasto del disco e procedere ai test. In questo primo esempio, provocheremo un guasto del disco principale `nvme0n1`.

Il metodo preferito per farlo è attraverso la modalità rescue di OVHcloud.

Riavvia prima il server in modalità rescue e collegati con le credenziali fornite.

Per rimuovere un disco dal RAID, il primo passo è contrassegnarlo come **Failed** e rimuovere le partizioni dai rispettivi array RAID.

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

Dai risultati sopra, nvme0n1 contiene due partizioni in RAID che sono **nvme0n1p2** e **nvme0n1p3**.

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

Quando eseguiamo il comando `cat /proc/mdstat`, otteniamo :

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # cat /proc/mdstat
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

Lo stato del nostro RAID dovrebbe ora assomigliare a questo :

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

Dai risultati sopra, possiamo vedere che ora ci sono solo due partizioni negli array RAID. Abbiamo riuscito a degradare il disco **nvme0n1**.

Per assicurarci di ottenere un disco simile a un disco vuoto, utilizziamo il comando seguente su ogni partizione, quindi sul disco stesso :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1p5
shred -s10M -n1 /dev/nvme0n1
```

Il disco appare ora come un disco nuovo e vuoto :

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

Se eseguiamo il comando seguente, constatiamo che il nostro disco è stato correttamente "cancellato" :

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

Per ulteriori informazioni sulla preparazione e la richiesta di sostituzione di un disco, consulta questo [guida](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Se esegui il comando seguente, puoi ottenere ulteriori dettagli sugli array RAID :

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

Possiamo ora procedere alla sostituzione del disco.

<a name="raidrebuild"></a>

### Ricostruzione del RAID

> [!primary]
> Questo processo può variare a seconda del sistema operativo installato sul tuo server. Ti consigliamo di consultare la documentazione ufficiale del tuo sistema operativo per ottenere i comandi appropriati.
>

> [!warning]
>
> Su la maggior parte dei server in RAID software, dopo la sostituzione di un disco, il server è in grado di avviarsi in modalità normale (sul disco sano) e la ricostruzione può essere effettuata in modalità normale. Tuttavia, se il server non riesce ad avviarsi in modalità normale dopo la sostituzione del disco, si riavvierà in modalità rescue per procedere alla ricostruzione del RAID.
>
> Se il tuo server è in grado di avviarsi in modalità normale dopo la sostituzione del disco, segui semplicemente le fasi di [questa sezione](#rebuilding-the-raid-in-normal-mode).

<a name="rescuemode"></a>

#### Ricostruzione del RAID in modalità rescue

Una volta sostituito il disco, il passo successivo consiste nel copiare la tabella delle partizioni del disco sano (in questo esempio, nvme1n1) sul nuovo (nvme0n1).

**Per le partizioni GPT**

Il comando deve essere in questo formato : `sgdisk -R /dev/nuovo disco /dev/disco sano`

Nel nostro esempio :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Esegui `lsblk` per assicurarti che le tabelle delle partizioni siano state correttamente copiate :

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

Una volta fatto questo, il passo successivo consiste nell'assegnare un GUID casuale al nuovo disco per evitare conflitti di GUID con altri dischi :

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Se ricevi il seguente messaggio :

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Esegui semplicemente il comando `partprobe`.

Possiamo ora ricostruire l'array RAID. L'estratto di codice seguente mostra come aggiungere nuovamente le nuove partizioni (nvme0n1p2 e nvme0n1p3) all'array RAID.

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
> Gli esempi sopra illustrano semplicemente le fasi necessarie in base a una configurazione di server predefinita. I risultati di ogni comando dipendono dal tipo di hardware installato sul tuo server e dalla struttura delle sue partizioni. In caso di dubbi, consulta la documentazione del tuo sistema operativo.
> 
> Se hai bisogno di un supporto professionale per l'amministrazione del tuo server, consulta i dettagli della sezione [Per saperne di più](#go-further) di questa guida.
>

<a name="recreateesp"></a>

#### Ricostruzione della partizione EFI System

Per ricostruire la partizione EFI System, dobbiamo formattare **nvme0n1p1** e replicare il contenuto della partizione EFI System sana (nel nostro esempio: nvme1n1p1) su questa.

In questo caso, assumiamo che le due partizioni siano state sincronizzate e contengano file aggiornati.

> [!warning]
> Se è avvenuto un aggiornamento importante del sistema, ad esempio un aggiornamento del kernel o di GRUB, e le due partizioni non sono state sincronizzate, consulta questa [sezione](#rebuilding-raid-when-efi-partitions-are-not-synchronized-after-major-system-updates-eg-grub) una volta completata la creazione della nuova partizione EFI System.
>

In primo luogo, formattiamo la partizione:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Successivamente, assegniamo l'etichetta `EFI_SYSPART` alla partizione. (questo nome è specifico di OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Successivamente, duplichiamo il contenuto di nvme1n1p1 in nvme0n1p1. Creiamo prima due cartelle, che chiamiamo « old » e « new » nel nostro esempio:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Successivamente, montiamo **nvme1n1p1** nella cartella « old » e **nvme0n1p1** nella cartella « new » per distinguerle:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Successivamente, copiamo i file della cartella 'old' in 'new':

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

Una volta completato, smontiamo le due partizioni:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Successivamente, montiamo la partizione che contiene la radice del nostro sistema operativo su `/mnt`. Nell'esempio, questa partizione è **md3**:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Montiamo i seguenti directory per assicurarci che qualsiasi operazione che eseguiamo nell'ambiente `chroot` funzioni correttamente:

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

Successivamente, utilizziamo il comando `chroot` per accedere al punto di montaggio e verificare che la nuova partizione EFI System sia stata correttamente creata e che il sistema riconosca entrambe le ESP:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Per visualizzare le partizioni ESP, eseguiamo il comando `blkid -t LABEL=EFI_SYSPART`:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

I risultati sopra mostrano che la nuova partizione EFI è stata creata correttamente e che l'etichetta è stata applicata correttamente.

<a name="efiraidgrub"></a>

#### Ricostruzione del RAID quando le partizioni EFI non sono sincronizzate dopo aggiornamenti importanti del sistema (GRUB)

/// details | **Espandi questa sezione**

> [!warning]
> Segui le fasi di questa sezione solo se si applica al tuo caso.
> 

Quando le partizioni del sistema EFI non sono sincronizzate dopo aggiornamenti importanti del sistema che modificano/colpiscono il GRUB, e il disco principale su cui è montata la partizione viene sostituito, l'avvio da un disco secondario che contiene un'ESP obsoleta potrebbe non funzionare.

In questo caso, oltre a ricostruire il RAID e a ricreare la partizione del sistema EFI in modalità rescue, devi anche reinstallare il GRUB su quest'ultima.

Una volta che abbiamo ricreato la partizione EFI e ci siamo assicurati che il sistema riconosca entrambe le partizioni (fasi precedenti in `chroot`), creiamo la directory `/boot/efi` per montare la nuova partizione del sistema EFI **nvme0n1p1**:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Successivamente, reinstalliamo il caricatore di avvio GRUB (*bootloader*):

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Una volta fatto, esegui il comando seguente:

```sh
root@rescue12-customer-eu:/# update-grub
```
///

<a name="swap-partition"></a>

#### Aggiunta dell'etichetta alla partizione SWAP (se applicabile)

Una volta completata la partizione EFI, passiamo alla partizione SWAP.

Usciamo dall'ambiente `chroot` con `exit` per ricreare la nostra partizione [SWAP] **nvme0n1p4** e aggiungere l'etichetta `swap-nvme0n1p4`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Verifichiamo che l'etichetta sia stata correttamente applicata:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # lsblk -f
NAME FSTYPE FSVER LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
nvme1n1

├─nvme1n1p1
│    vfat   FAT16 EFI_SYSPART
│                       BA77-E844                             504.9M     1% /root/old
├─nvme1n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme1n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme1n1p4
     swap   1     swap-nvme1n1p4
                        d6af33cf-fc15-4060-a43c-cb3b5537f58a
nvme0n1

├─nvme0n1p1
│    vfat   FAT16 EFI_SYSPART
│                       477D-6658
├─nvme0n1p2
│    linux_ 1.2   md2   53409058-480a-bc65-4e1d-6acc848fe233
│ └─md2
│    ext4   1.0   boot  f925a033-0087-40ec-817e-44efab0351ac
├─nvme0n1p3
│    linux_ 1.2   md3   a3b8816c-a5c3-7f01-ee17-e1aa9685c35c
│ └─md3
│    ext4   1.0   root  6abfaa3b-e630-457a-bbe0-e00e5b4b59e5  441.2G     0% /mnt
└─nvme0n1p4
     swap   1     swap-nvme0n1p4
                        b3c9e03a-52f5-4683-81b6-cc10091fcd15
```

Accediamo nuovamente all'ambiente `chroot`

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Recuperiamo l'UUID delle due partizioni SWAP:

```sh
root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"

root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Quindi, sostituiamo il vecchio UUID della partizione SWAP (**nvme0n1p4**) con quello nuovo nel file `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano /etc/fstab
```

Esempio:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Sulla base dei risultati sopra riportati, il vecchio UUID è `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve essere sostituito con il nuovo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Assicurati di sostituire l'UUID corretto.

Quindi, verifichiamo che tutto sia montato correttamente con il seguente comando:

```sh
root@rescue12-customer-eu:/# mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Attiviamo la partizione SWAP:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Usciamo dall'ambiente chroot con `exit` e ricarichiamo il sistema:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Smontiamo tutti i dischi:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
```

Abbiamo ora completato con successo la ricostruzione RAID sul server e possiamo riavviarlo in modalità normale.

<a name="normalmode"></a>

#### Ricostruzione del RAID in modalità normale

/// details | **Espandi questa sezione**

Se il tuo server è in grado di avviarsi in modalità normale dopo la sostituzione di un disco, puoi seguire i passaggi riportati di seguito per ricostruire il RAID.

Una volta sostituito il disco, copiamo la tabella di partizione dal disco integro (in questo esempio, nvme1n1) a quello nuovo (nvme0n1).

**Per le partizioni GPT**

```sh
sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Il comando deve essere nel seguente formato: `sgdisk -R /dev/nuovo disco /dev/disco integro`.

Una volta fatto ciò, il passo successivo consiste nell'assegnare un GUID casuale al nuovo disco per evitare conflitti di GUID con altri dischi:

```sh
sgdisk -G /dev/nvme0n1
```

Se viene visualizzato il seguente messaggio:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Eseguire semplicemente il comando `partprobe`. Se le nuove partizioni create non sono ancora visibili (ad es. con `lsblk`), è necessario riavviare il server prima di continuare.

Successivamente, aggiungiamo le partizioni al RAID:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Utilizza il comando seguente per monitorare la ricostruzione del RAID: `cat /proc/mdstat`.

**Ricreazione della partizione EFI System sul disco**

Per prima cosa installiamo gli strumenti necessari:

**Debian e Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

Successivamente formattiamo la partizione. Nel nostro esempio `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

Successivamente assegniamo l'etichetta `EFI_SYSPART` alla partizione. (questo nome è specifico per OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Una volta completato, puoi sincronizzare le due partizioni utilizzando lo script che abbiamo fornito [qui](#script).

Verifichiamo che la nuova partizione EFI System sia stata creata correttamente e che il sistema la riconosca:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Infine, attiviamo la partizione [SWAP] (se applicabile):

- Creiamo e aggiungiamo l'etichetta:

```sh
[user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
```

- Recuperiamo gli UUID delle due partizioni di SWAP:

```sh
[user@server_ip ~]# sudo blkid -s /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -s /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

- Sostituiamo l'UUID vecchio della partizione SWAP (**nvme0n1p4)** con il nuovo in `/etc/fstab`:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
```

Esempio:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Secondo i risultati sopra, l'UUID vecchio è `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` e deve essere sostituito con il nuovo `b3c9e03a-52f5-4683-81b6-cc10091fcd15`.

Assicurati di sostituire l'UUID corretto.

Successivamente, eseguiamo il comando seguente per attivare la partizione di SWAP:

```sh
[user@server_ip ~]# sudo swapon -av
swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Successivamente, ricarichiamo il sistema:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```
///

Abbiamo completato con successo la ricostruzione del RAID.

## Per saperne di più

[Hot Swap - Software RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API and Storage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Managing hardware RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Per servizi specializzati (SEO, sviluppo, ecc.), contatta [i partner OVHcloud](/links/partner).

Se hai bisogno di un supporto per utilizzare e configurare le tue soluzioni OVHcloud, consulta le [nostre offerte di supporto](/links/support).

Se hai bisogno di formazione o di un supporto tecnico per implementare le nostre soluzioni, contatta il tuo rappresentante commerciale o clicca su [questo link](/links/professional-services) per richiedere un preventivo e chiedere ai nostri esperti del team Professional Services di intervenire sul tuo caso d'uso specifico.

Contatta la nostra [Community di utenti](/links/community).