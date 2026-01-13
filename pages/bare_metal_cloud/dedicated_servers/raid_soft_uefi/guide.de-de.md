---
title: Verwalten und Neuaufbauen von Software-RAID auf Servern mit UEFI-Boot-Modus
excerpt: Erfahren Sie, wie Sie Software-RAID nach einem Wechsel der Disk auf einem Server mit UEFI-Boot-Modus verwalten und neu aufbauen können
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

## Ziel

Redundant Array of Independent Disks (RAID) ist eine Technologie, die den Datenverlust auf einem Server durch die Replikation von Daten auf zwei oder mehr Disks minimiert.

Der Standard-RAID-Level für OVHcloud Serverinstallationen ist RAID 1, wodurch der von Ihren Daten belegte Platz verdoppelt wird, was effektiv den nutzbaren Speicher halbiert.

**Diese Anleitung erklärt, wie Sie Software-RAID nach einem Disktausch auf einem Server mit UEFI-Boot-Modus verwalten und neu aufbauen können.**

Beachten Sie, dass diese Anleitung sich auf dedizierte Server bezieht, die den UEFI-Boot-Modus verwenden. Dies ist bei aktuellen Motherboards der Fall. Wenn Ihr Server den Legacy-Boot-Modus (BIOS) verwendet, konsultieren Sie diese Anleitung: [Verwalten und Neuaufbauen von Software-RAID auf Servern im Legacy-Boot-Modus (BIOS)](/pages/bare_metal_cloud/dedicated_servers/raid_soft).

Um zu prüfen, ob ein Server im Legacy-BIOS-Modus oder im UEFI-Boot-Modus läuft, führen Sie den folgenden Befehl aus:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

Weitere Informationen zu UEFI finden Sie in diesem [Artikel](https://uefi.org/about).

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) mit Software-RAID-Konfiguration.
- Sie haben administrativen Zugriff (sudo) auf Ihre Server.
- Sie haben Grundkenntnisse zu RAID, Partitionen und GRUB.

Im Laufe dieser Anleitung verwenden wir die Begriffe **primäre Disk** und **sekundäre Disk**:

- Die primäre Disk ist die Disk, deren ESP (EFI-Systempartition) von Linux eingehängt wird.
- Die sekundären Disks sind alle anderen Disks im RAID.

## In der praktischen Anwendung

Wenn Sie einen neuen Server bestellt und installiert haben, können Sie vorab eine Reihe von Tests durchzuführen. Ein solcher Test könnte darin bestehen, einen Diskausfall zu simulieren, um den RAID-Wiederherstellungsprozess zu verstehen und sich darauf vorzubereiten, falls dies tatsächlich eintritt.

### Inhaltsübersicht

- [Grundlegende Informationen](#basicinformation)
- [Verständnis der EFI-Systempartition (ESP)](#efisystemparition)
- [Simulieren eines Diskausfalls](#diskfailure)
    - [Entfernen der defekten Disk](#diskremove)
- [Neuaufbau des RAIDs](#raidrebuild)
    - [Neuaufbau des RAIDs nach Austausch der Disk (Rescue-Modus)](#rescuemode)
    - [Neuanlegen der EFI-Systempartition](#recreateesp)
    - [Neuaufbau des RAIDs, wenn die EFI-Partitionen nach wichtigen Systemaktualisierungen (z. B. GRUB) nicht synchronisiert sind](#efiraidgrub)
    - [Hinzufügen der Bezeichnung zur SWAP-Partition (falls zutreffend)](#swap-partition)
    - [Neuaufbau des RAIDs im normalen Modus](#normalmode)

<a name="basicinformation"></a>

### Grundlegende Informationen

In einer Befehlszeilensitzung geben Sie den folgenden Code ein, um den aktuellen RAID-Status zu ermitteln:

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

Dieser Befehl zeigt uns, dass wir derzeit zwei Disks im Software-RAID konfiguriert haben, **md2** und **md3**, wobei **md3** das größere der beiden ist. **md3** besteht aus zwei Partitionen, genannt **nvme1n1p3** und **nvme0n1p3**. 

[UU] bedeutet, dass alle Disks normal funktionieren. Ein `_` würde stattdessen eine defekte Disk anzeigen.

Wenn Sie einen Server mit SATA-Disks haben, erhalten Sie die folgenden Ergebnisse:

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

Obwohl dieser Befehl unsere RAID-Volumes zurückgibt, besagt er nichts zur Größe der Partitionen selbst. Wir können diese Informationen mit dem folgenden Befehl finden:

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

Der Befehl `fdisk -l` erlaubt es Ihnen auch, den Typ Ihrer Partition zu identifizieren. Dies ist eine wichtige Information, wenn es darum geht, Ihr RAID bei einem Diskausfall wiederherzustellen.

Für **GPT**-Partitionen wird in Zeile 6 Folgendes angezeigt: `Disklabel type: gpt`.  
Diese Informationen sind nur sichtbar, wenn sich der Server im normalen Modus befindet.

Basierend auf den Ergebnissen `fdisk -l` können wir sehen, dass `/dev/md2` aus 1022 MiB besteht und `/dev/md3` 474,81 GiB enthält. Wenn wir den Befehl `mount` ausführen, können wir auch die Struktur der Disk ermitteln.

Alternativ bietet der Befehl `lsblk` eine andere Ansicht der Partitionen:

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

Außerdem erhalten wir mit `lsblk -f` weitere Informationen zu diesen Partitionen, wie z. B. die Bezeichnung und UUID:

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

Notieren Sie sich die Geräte, Partitionen und ihre Mountpoints; dies ist besonders wichtig, nachdem Sie eine Disk ersetzt haben.

Aus den oben genannten Befehlen und Ergebnissen haben wir:

- Zwei RAID-Arrays: `/dev/md2` und `/dev/md3`.
- Vier Partitionen, die zum RAID gehören: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2**, **nvme0n1p3** mit den Mountpoints `/boot` und `/`.
- Zwei Partitionen, die nicht zum RAID gehören, mit Mountpoints: `/boot/efi` und [SWAP].
- Eine Partition, die keinen Mountpoint hat: **nvme1n1p1**

Die Partition **nvme0n1p5** ist eine Konfigurationspartition, d. h. ein schreibgeschütztes Volume, das mit dem Server verbunden ist und diesem die Konfigurationsdaten bereitstellt.

<a name="efisystempartition"></a>

### Erklärung der EFI-Systempartition (ESP)

***Was ist eine EFI-Systempartition?***

Eine EFI-Systempartition ist eine Partition, die die Bootloader, Bootmanager oder Kernels eines installierten Betriebssystems enthalten kann. Sie kann auch Systemhilfsprogramme enthalten, die vor dem Start des Betriebssystems ausgeführt werden sollen, sowie Datendateien wie Fehlerprotokolle.

***Wird die EFI-Systempartition in einem RAID gespiegelt?***

Nein, wenn die Installation des Betriebssystems von OVHcloud durchgeführt wird, ist die ESP nicht im RAID enthalten. Wenn Sie unsere Betriebssystem-Templates verwenden, um Ihren Server mit Software-RAID zu installieren, werden mehrere EFI-Systempartitionen erstellt: eine pro Disk. Allerdings wird nur eine EFI-Partition gleichzeitig eingehängt. Alle ESPs, die zum Zeitpunkt der Installation erstellt wurden, enthalten die gleichen Dateien. (Stand August 2025)

Die EFI-Systempartition wird unter `/boot/efi` eingehängt und die Disk, auf der sie eingehängt ist, wird vom Linux-System beim Start ausgewählt.

Beispiel:

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

Aus den obigen Ergebnissen geht hervor, dass wir zwei identische EFI-Systempartitionen haben (nvme0n1p1 und nvme1n1p1), aber nur **nvme0n1p1** ist unter `/boot/efi` gemountet. Beide Partitionen haben die Bezeichnung: `EFI_SYSPART` (diese Bezeichnung ist spezifisch für OVHcloud).

***Ändert sich der Inhalt der EFI-Systempartition regelmäßig?***

Im Allgemeinen ändert sich der Inhalt dieser Partition nicht wesentlich, er sollte sich nur bei Updates des Bootloaders ändern.

Wir empfehlen jedoch, ein automatisches oder manuelles Skript auszuführen, um alle ESPs zu synchronisieren, damit sie alle die gleichen aktuellen Dateien enthalten. Auf diese Weise kann der Server, wenn die Disk, auf der diese Partition gemountet ist, ausfällt, auf der ESP einer der anderen Disks neu gestartet werden.

***Was passiert, wenn die unter `boot/efi` gemountete Disk ausfällt?***

> [!primary]
> Beachten Sie, dass wir im Folgenden die häufigsten Fälle beispielhaft erläutern, es jedoch mehrere andere Gründe gibt, warum ein Server nach einem Diskaustausch nicht im normalen Modus startet.
>

**Fall 1** - Es gab keine wesentlichen Änderungen oder Aktualisierungen des Systems (z. B. GRUB).

- Der Server kann im normalen Modus gestartet werden, und Sie können mit der Wiederherstellung des RAID fortfahren.
- Der Server kann nicht im normalen Modus gestartet werden. Der Server wird im Rescue-Modus neu gestartet, wo Sie das RAID wiederherstellen und die EFI-Partition auf der neuen Disk neu erstellen können.

**Fall 2** - Es gab größere Aktualisierungen des Systems (z. B. GRUB) und die ESPs wurden synchronisiert.

- Der Server kann im normalen Modus starten, da alle ESPs aktuelle Informationen enthalten und die Wiederherstellung des RAID im normalen Modus durchgeführt werden kann.
- Der Server kann nicht im normalen Modus starten. Der Server wird im Rescue-Modus neu gestartet, wo Sie das RAID neu aufbauen und die EFI-Systempartition auf der neuen Disk neu erstellen können.

**Fall 3** - Es gab größere Systemaktualisierungen (z. B. GRUB) und die ESP-Partitionen wurden nicht synchronisiert.

- Der Server kann nicht im normalen Modus gestartet werden. Der Server wird im Rescue-Modus neu gestartet, wo Sie das RAID neu aufbauen, die EFI-Systempartition auf der neuen Disk neu erstellen und den Bootloader darauf neu installieren können.
- Der Server kann im normalen Modus starten (dies kann vorkommen, wenn ein Betriebssystem auf eine neuere Version aktualisiert wird, die GRUB-Version jedoch unverändert bleibt) und Sie können mit dem Wiederherstellen des RAID fortfahren.

In einigen Fällen funktioniert der Start von einer veralteten ESP nicht. Beispielsweise könnte ein größeres GRUB-Update dazu führen, dass die alte GRUB-Version in der ESP mit den neueren GRUB-Modulen, die in der Partition `/boot` installiert sind, nicht mehr kompatibel ist.

***Wie kann ich meine EFI-Systempartitionen synchronisieren und wie oft sollte ich sie synchronisieren?***

> [!primary]
> Beachten Sie, dass der Vorgang je nach Betriebssystem unterschiedlich sein kann. Ubuntu ist beispielsweise in der Lage, mehrere EFI-Systempartitionen bei jedem GRUB-Update synchronisiert zu halten. Es ist jedoch das einzige Betriebssystem, das dies tut. Wir empfehlen Ihnen, die offizielle Dokumentation Ihres Betriebssystems zu konsultieren, um zu verstehen, wie Sie mit ESPs umgehen müssen.
>
> In dieser Anleitung wird das Betriebssystem Debian verwendet.

Wir empfehlen Ihnen, Ihre ESPs regelmäßig oder nach jedem größeren System-Update zu synchronisieren. Standardmäßig enthalten alle EFI-Systempartitionen nach der Installation die gleichen Dateien. Bei einem größeren System-Update ist die Synchronisierung der ESPs jedoch unerlässlich, um den Inhalt auf dem neuesten Stand zu halten.

<a name="script"></a>

#### Skript

Hier ist ein Skript, mit dem Sie sie manuell synchronisieren können. Sie können auch ein automatisiertes Skript ausführen, um die Partitionen täglich oder bei jedem Start des Dienstes zu synchronisieren.

Bevor Sie das Skript ausführen, stellen Sie sicher, dass `rsync` auf Ihrem System installiert ist:

**Debian/Ubuntu**

```sh
sudo apt install rsync
```

**CentOS, Red Hat und Fedora**

```sh
sudo yum install rsync
```

Um ein Skript unter Linux auszuführen, benötigen Sie eine ausführbare Datei:

- Erstellen Sie zunächst eine .sh-Datei in einem Verzeichnis Ihrer Wahl und ersetzen Sie dabei `name-des-skripts` durch einen Namen Ihrer Wahl.

```sh
sudo touch name-des-skripts.sh
```

- Öffnen Sie die Datei mit einem Texteditor und fügen Sie die folgenden Zeilen hinzu:

```sh
sudo nano name-des-skripts.sh
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

Speichern Sie die Datei und beenden Sie den Editor.

- Machen Sie das Skript ausführbar:

```sh
sudo chmod +x name-des-skripts.sh
```

- Führen Sie das Skript aus:

```sh
sudo ./name-des-skripts.sh
```

- Wenn Sie sich nicht im richtigen Verzeichnis befinden:

```sh
./path/to/folder/name-des-skripts.sh
```

Wenn das Skript ausgeführt wird, werden die Inhalte der eingehängten EFI-Partition mit den anderen synchronisiert. Um auf den Inhalt zuzugreifen, können Sie eine dieser nicht eingehängten EFI-Partitionen am Mountpoint `/var/lib/grub/esp` einhängen.

<a name="diskfailure"></a>

### Simulieren eines Diskausfalls

Nachdem wir nun alle notwendigen Informationen haben, können wir einen Diskausfall simulieren und die Tests durchführen. In diesem ersten Beispiel simulieren wir den Ausfall der primären Disk `nvme0n1`.

Die bevorzugte Methode hierzu ist die Nutzung des OVHcloud Rescue-Modus.

Starten Sie zunächst den Server im Rescue-Modus neu und melden Sie sich mit den bereitgestellten Anmeldeinformationen an.

Um eine Disk aus dem RAID zu entfernen, markieren Sie sie zunächst als **Failed** und entfernen die Partitionen aus ihren jeweiligen RAID-Arrays.

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

Aus der obigen Ausgabe ergibt sich, dass `nvme0n1` aus zwei Partitionen besteht, die sich im RAID befinden, nämlich **nvme0n1p2** und **nvme0n1p3**.

<a name="removedisk"></a>

#### Entfernen der fehlerhaften Disk

Zunächst markieren wir die Partitionen **nvme0n1p2** und **nvme0n1p3** als **Failed**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Wenn wir den Befehl `cat /proc/mdstat` ausführen, erhalten wir die folgende Ausgabe:

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

Wie oben zu sehen ist, zeigt das [F] neben den Partitionen an, dass die Disk fehlerhaft ist oder ausfällt.

Als nächstes entfernen wir diese Partitionen aus den RAID-Arrays, um die Disk vollständig aus dem RAID zu entfernen.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Der Status unseres RAIDs sollte nun wie folgt aussehen:

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

Aus den oben genannten Ergebnissen können wir erkennen, dass nun nur noch zwei Partitionen in den RAID-Arrays erscheinen. Wir haben die Disk **nvme0n1** erfolgreich als fehlerhaft markiert.

Um sicherzustellen, dass wir eine Disk erhalten, die einem leeren Laufwerk ähnelt, verwenden wir den folgenden Befehl auf jeder Partition und anschließend auf der Disk:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
shred -s10M -n1 /dev/nvme0n1p5
shred -s10M -n1 /dev/nvme0n1
```

Die Disk erscheint nun als neues, leeres Laufwerk:

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

Wenn wir den folgenden Befehl ausführen, sehen wir, dass unsere Disk erfolgreich "gelöscht" wurde:

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

Weitere Informationen zum Vorbereiten und Anfordern eines Disktauschs finden Sie in dieser [Anleitung](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Wenn Sie den folgenden Befehl ausführen, erhalten Sie weitere Details zu den RAID-Arrays:

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

Wir können nun mit dem Disktausch fortfahren.

<a name="raidrebuild"></a>

### Wiederherstellung des RAID

> [!primary]
> Dieser Prozess kann je nach installiertem Betriebssystem auf Ihrem Server variieren. Wir empfehlen Ihnen, die offizielle Dokumentation Ihres Betriebssystems zu konsultieren, um auf die richtigen Befehle zugreifen zu können.
>

> [!warning]
>
> Bei den meisten Servern mit Software-RAID ist es nach einem Disktausch möglich, dass der Server im normalen Modus (auf der intakten Disk) startet und das Neuaufbauen des RAIDs im normalen Modus durchgeführt werden kann. Wenn der Server nach einem Disktausch nicht im normalen Modus starten kann, wird er im Rescue-Modus neu gestartet, um das RAID-Neuaufbauen fortzusetzen.
>
> Wenn Ihr Server nach dem Disktausch im normalen Modus starten kann, führen Sie einfach die Schritte aus [diesem Abschnitt](#rebuilding-the-raid-in-normal-mode) aus.

<a name="rescuemode"></a>

#### Wiederherstellung des RAID im Rescue-Modus

Nachdem die Disk ersetzt wurde, ist der nächste Schritt, die Partitionstabelle von der intakten Disk (in diesem Beispiel `nvme1n1`) auf die neue (`nvme0n1`) zu kopieren.

**Für GPT-Partitionen**

Der Befehl sollte in diesem Format lauten: `sgdisk -R /dev/neue Disk /dev/intakte Disk`.

In unserem Beispiel:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Führen Sie `lsblk` aus, um sicherzustellen, dass die Partitionstabellen ordnungsgemäß kopiert wurden:

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

Sobald dies erledigt ist, ist der nächste Schritt, die GUID der neuen Disk zu randomisieren, um Konflikte mit anderen Disks zu vermeiden:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
```

Wenn Sie die folgende Meldung erhalten:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Führen Sie einfach den Befehl `partprobe` aus.

Wir können nun das RAID-Array neu aufbauen. Der folgende Codeausschnitt zeigt, wie die neuen Partitionen (nvme0n1p2 und nvme0n1p3) in das RAID-Array zurückgefügt werden können.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md2 /dev/nvme0n1p2
# mdadm: added /dev/nvme0n1p2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --add /dev/md3 /dev/nvme0n1p3
# mdadm: re-added /dev/nvme0n1p3
```

Um den Rebuild-Prozess zu prüfen:

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

Sobald der RAID-Rebuild abgeschlossen ist, führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Partitionen ordnungsgemäß dem RAID hinzugefügt wurden:

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

Basierend auf den oben genannten Ergebnissen wurden die Partitionen auf der neuen Disk korrekt dem RAID hinzugefügt. Allerdings wurden die EFI-Systempartition und die SWAP-Partition (in einigen Fällen) nicht dupliziert, was normal ist, da sie nicht in das RAID einbezogen werden.

> [!warning]
> Die oben genannten Beispiele illustrieren lediglich die notwendigen Schritte anhand einer Standard-Serverkonfiguration. Die Informationen in der Ausgabetabelle hängen von der Hardware Ihres Servers und seinem Partitionsschema ab. Bei Unsicherheiten konsultieren Sie die Dokumentation Ihres Betriebssystems.
> 
> Wenn Sie professionelle Unterstützung bei der Server-Administration benötigen, beachten Sie die Details im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

<a name="recreateesp"></a>

#### Wiederherstellen der EFI-Systempartition

Um die EFI-Systempartition zu wiederherstellen, müssen wir **nvme0n1p1** formatieren und anschließend den Inhalt der intakten Partition (in unserem Beispiel: nvme1n1p1) darauf kopieren.

Wir gehen davon aus, dass beide Partitionen synchronisiert wurden und aktuelle Dateien enthalten.

> [!warning]
> Falls es eine große Systemaktualisierung gab, z. B. Kernel oder GRUB, und beide Partitionen nicht synchronisiert wurden, beachten Sie nach Abschluss der Erstellung der neuen EFI-Systempartition diesen [Abschnitt](#rebuilding-raid-when-efi-partitions-are-not-synchronized-after-major-system-updates-eg-grub).
>

Zunächst formatieren wir die Partition:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Anschließend versehen wir die Partition mit dem Label `EFI_SYSPART` (dieser Name ist spezifisch für OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Nun kopieren wir den Inhalt von nvme1n1p1 auf nvme0n1p1. Zunächst erstellen wir zwei Ordner, die wir im Beispiel "old" und "new" nennen:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Anschließend mounten wir **nvme1n1p1** im Ordner "old" und **nvme0n1p1** im Ordner "new", um den Unterschied zu verdeutlichen:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Nun kopieren wir die Dateien vom Ordner "old" in den Ordner "new":

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

sent 6.099.848 bytes  received 165 bytes  12.200.026,00 bytes/sec
total size is 6.097.843  speedup is 1,00
```

Sobald dies abgeschlossen ist, trennen wir beide Partitionen:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Nun mounten wir die Partition mit dem Betriebssystem-Root auf `/mnt`. In unserem Beispiel ist dies die Partition **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Wir mounten die folgenden Verzeichnisse, um sicherzustellen, dass alle Manipulationen, die wir in der Umgebung `chroot` vornehmen, korrekt funktionieren:

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

Nun verwenden wir den Befehl `chroot`, um auf den Mount-Punkt zuzugreifen und sicherzustellen, dass die neue EFI-Systempartition ordnungsgemäß erstellt wurde und das System beide ESPs erkennt:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Um die ESP-Partitionen anzuzeigen, führen wir den Befehl `blkid -t LABEL=EFI_SYSPART` aus:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Die oben genannten Ergebnisse zeigen, dass die neue EFI-Partition ordnungsgemäß erstellt wurde und das Label korrekt angewendet wurde.

<a name="efiraidgrub"></a>

#### RAID neu aufbauen, wenn EFI-Partitionen nach größeren Systemaktualisierungen (GRUB) nicht synchronisiert sind

/// details | **Diesen Abschnitt ausklappen**

> [!warning]
> Folgen Sie den Schritten in diesem Abschnitt nur, wenn sie auf Ihren Anwendungsfall zutreffen.
> 

Wenn die EFI-Systempartitionen nach größeren Systemaktualisierungen, die GRUB modifizieren oder beeinflussen, nicht synchronisiert sind und die primäre Disk, auf der die Partition montiert ist, ersetzt wurde, kann das Starten von einer sekundären Disk mit einer veralteten ESP nicht funktionieren. 

In diesem Fall müssen Sie neben dem Neuaufbauen des RAIDs und dem Wiederherstellen der EFI-Systempartition im Rescue-Modus auch GRUB darauf neu installieren.

Sobald wir die EFI-Partition wiederhergestellt und sichergestellt haben, dass das System beide Partitionen erkennt (vorige Schritte in `chroot`), erstellen wir den Ordner `/boot/efi`, um die neue EFI-Systempartition **nvme0n1p1** zu mounten:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Anschließend installieren wir den GRUB-Bootloader erneut:

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Sobald dies abgeschlossen ist, führen Sie den folgenden Befehl aus:

```sh
root@rescue12-customer-eu:/# update-grub
```
///

<a name="swap-partition"></a>

#### Label zur SWAP-Partition hinzufügen (falls zutreffend)

Nachdem wir die EFI-Partition abgeschlossen haben, wechseln wir zur SWAP-Partition.

Wir verlassen die Umgebung `chroot` mit `exit`, um unsere Partition [SWAP] **nvme0n1p4** neu zu erstellen und das Label `swap-nvme0n1p4` hinzuzufügen:

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

Anschließend greifen wir erneut auf die Umgebung `chroot` zu:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Wir rufen die UUID der beiden SWAP-Partitionen ab:

```sh
root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"

root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Anschließend ersetzen wir die alte UUID der SWAP-Partition (**nvme0n1p4**) durch die neue in der Datei `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano /etc/fstab
```

Beispiel:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Basierend auf den obigen Ergebnissen lautet die alte UUID `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` und muss durch die neue UUID `b3c9e03a-52f5-4683-81b6-cc10091fcd15` ersetzt werden. Stellen Sie sicher, dass Sie die richtige UUID ersetzen.

Anschließend überprüfen wir mit dem folgenden Befehl, ob alles korrekt eingebunden ist:

```sh
root@rescue12-customer-eu:/# mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Wir aktivieren die SWAP-Partition:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Wir verlassen die Umgebung chroot mit `exit` und laden das System neu:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Wir unmounten alle Disks:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
```

Wir haben nun die RAID-Wiederherstellung auf dem Server erfolgreich abgeschlossen und können ihn nun im normalen Modus neu starten.

<a name="normalmode"></a>

#### Wiederherstellung des RAID im normalen Modus

/// details | **Diesen Abschnitt ausklappen**

Wenn Ihr Server nach einem Diskaustausch im normalen Modus starten kann, können Sie die folgenden Schritte ausführen, um das RAID wiederherzustellen.

Nachdem die Disk ausgetauscht wurde, kopieren wir die Partitionstabelle der intakten Disk (in diesem Beispiel nvme1n1) auf die neue Disk (nvme0n1).

**Für GPT-Partitionen**

```sh
sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Der Befehl muss folgendes Format haben: `sgdisk -R /dev/neue Disk /dev/intakte Disk`.

Anschließend muss der neuen Disk eine zufällige GUID zugewiesen werden, um GUID-Konflikte mit anderen Disks zu vermeiden:

```sh
sgdisk -G /dev/nvme0n1
```

Wenn Sie die folgende Meldung erhalten:

```console
Warning: The kernel is still using the old partition table.
The new table will be used at the next reboot or after you
run partprobe(8) or kpartx(8)
The operation has completed successfully.
```

Führen Sie einfach den Befehl `partprobe` aus. Wenn Sie die neu erstellten Partitionen immer noch nicht sehen können (z. B. mit `lsblk`), müssen Sie den Server neu starten, bevor Sie fortfahren können.

Anschließend fügen wir die Partitionen zum RAID hinzu:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/nvme0n1p2

# mdadm: added /dev/nvme0n1p2

[user@server_ip ~]# sudo mdadm --add /dev/md3 /dev/nvme0n1p3

# mdadm: re-added /dev/nvme0n1p3
```

Verwenden Sie den folgenden Befehl, um den RAID-Neuaufbau zu verfolgen: `cat /proc/mdstat`.

**Erstellen der EFI-Systempartition auf der Disk**

Zunächst installieren wir die erforderlichen Tools:

**Debian und Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

Als nächstes formatieren wir die Partition. In unserem Beispiel `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

Als nächstes versehen wir die Partition mit dem Label `EFI_SYSPART` (dieser Name ist spezifisch für OVHcloud).

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Sobald dies abgeschlossen ist, können Sie beide Partitionen mithilfe des von uns bereitgestellten Skripts [hier](#script) synchronisieren.

Wir prüfen, ob die neue EFI-Systempartition ordnungsgemäß erstellt wurde und vom System erkannt wird:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Zuletzt aktivieren wir die [SWAP]-Partition (sofern zutreffend):


- Wir erstellen und fügen das Label hinzu:

```sh
[user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
```

- Wir rufen die UUIDs beider SWAP-Partitionen ab:

```sh
[user@server_ip ~]# sudo blkid -s /dev/nvme0n1p4
/dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -s /dev/nvme1n1p4
/dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

- Wir ersetzen die alte UUID der SWAP-Partition (**nvme0n1p4)** durch die neue in `/etc/fstab`:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
```

Beispiel:

```sh
[user@server_ip ~]# sudo nano /etc/fstab
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Basierend auf den obigen Ergebnissen ist die alte UUID `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` und sollte durch die neue `b3c9e03a-52f5-4683-81b6-cc10091fcd15` ersetzt werden. 

Stellen Sie sicher, dass Sie die richtige UUID ersetzen.

Als nächstes führen wir den folgenden Befehl aus, um die SWAP-Partition zu aktivieren:

```sh
[user@server_ip ~]# sudo swapon -av
swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme0n1p4
swapon: /dev/nvme1n1p4: found signature [pagesize=4096, signature=swap]
swapon: /dev/nvme1n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/nvme1n1p4
```

Als nächstes laden wir das System neu:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```
///

Wir haben nun erfolgreich den RAID-Neuaufbau abgeschlossen.

## Weiterführende Informationen

[Hot Swap - Software-RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API und Speicher](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Verwalten von Hardware-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware-RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.