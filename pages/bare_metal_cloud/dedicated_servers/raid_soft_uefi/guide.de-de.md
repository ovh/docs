---
title: "Software-RAID (UEFI-Boot-Modus) auf Dedicated Servern verwalten"
excerpt: "Verwalten und Wiederaufbau von Software-RAID nach einem Festplattenwechsel auf einem Dedicated Server im UEFI-Boot-Modus."
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

Wenn Sie einen neuen Server bestellt und installiert haben, können Sie vorab eine Reihe von Tests durchzuführen. Ein solcher Test könnte darin bestehen, einen Diskausfall zu simulieren, um den RAID-Wiederherstellungsprozess zu verstehen.

### Inhaltsübersicht

- [Grundlegende Informationen](#basicinformation)
- [Verständnis der EFI-Systempartition (ESP)](#efisystempartition)
- [Simulieren eines Diskausfalls](#diskfailure)
    - [Entfernen der defekten Disk](#removedisk)
- [Wiederherstellung des RAID (mit nicht gespiegeltem ESP)](#raidrebuildnonmirrored)
    - [Wiederherstellung des RAIDs nach Austausch der primären Disk (Rescue-Modus)](#nonmirroredrescuemode)
    - [Wiederherstellen der EFI-Systempartition](#recreateesp)
    - [RAID mit nicht synchronisierten ESPs nach größeren Systemaktualisierungen neu erstellen (GRUB)](#efiraidgrub)
    - [Wiederherstellung des RAID nach Austausch der primären Disk (normalen Modus)](#nonmirrorednormalmode)
- [Wiederherstellung des RAID (mit gespiegeltem ESP)](#raidrebuildmirrored)
- [Label zur SWAP-Partition hinzufügen (falls zutreffend)](#swap-partition)

<a name="basicinformation"></a>

### Grundlegende Informationen

In einer Befehlszeilensitzung geben Sie den folgenden Code ein, um den RAID-Status zu ermitteln:

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

Den Ergebnissen zufolge sind derzeit zwei Software-RAID-Geräte konfiguriert, **md2** und **md3**, wobei **md3** das größere der beiden ist. **md3** besteht aus zwei Partitionen namens **nvme0n1p3** und **nvme1n1p3**.

[UU] bedeutet, dass alle Disks normal funktionieren. Ein `_` würde stattdessen eine defekte Disk anzeigen.

In anderen Fällen erhielten Sie die folgenden Ergebnisse:

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

Die Ergebnisse zeigen drei konfigurierte Software-RAID-Geräte, **md1**, **md2** und **md3**, wobei **md3** das größte der drei ist. **md3** besteht aus zwei Partitionen namens **nvme0n1p3** und **nvme1n1p3**.

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

Dieser Befehl zeigt unsere RAID-Volumes an, jedoch nicht die Partitionsgrößen. Diese Informationen können wir mit `fdisk -l` abrufen:

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

Dieser Befehl kann auch verwendet werden, um den Partitionstyp zu identifizieren.

Für **GPT**-Partitionen wird in Zeile 6 Folgendes angezeigt: `Disklabel type: gpt`.  
Diese Informationen sind nur sichtbar, wenn sich der Server im normalen Modus befindet.

Den Ergebnissen zufolge sehen wir, dass `/dev/md2` aus 1022 MiB besteht und `/dev/md3` 474,81 GiB enthält. Wenn wir den Befehl `mount` ausführen, können wir auch das Layout der Disk herausfinden.

///

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

Notieren Sie sich die Geräte, Partitionen und Einhängepunkte, da dies besonders nach dem Austausch einer Disk wichtig ist. So können Sie überprüfen, ob die Partitionen korrekt an ihren jeweiligen Einhängepunkten auf der neuen Disk eingehängt sind.

In unserem Beispiel haben wir:

- Zwei RAID-Arrays: `/dev/md2` und `/dev/md3`.
- Partitionen, die Teil des RAID sind: **nvme0n1p2**, **nvme0n1p3**, **nvme1n1p2** und **nvme0n1p3** mit den Einhängepunkten `/boot` und `/`.
- Partitionen, die nicht Teil des RAID sind: **nvme0n1p1**, **nvme0n1p4** und **nvme1n1p4** mit den Einhängepunkten `/boot/efi` und [SWAP].
- Eine Partition hat keinen Einhängepunkt: **nvme1n1p1**.

<a name="efisystempartition"></a>

### Verständnis der EFI-Systempartition (ESP)

/// details | **Diesen Abschnitt aufklappen**

***Was ist eine EFI-Systempartition?***

Eine EFI-Systempartition ist eine Partition, die die Bootloader, Bootmanager oder Kernels eines installierten Betriebssystems enthalten kann. Sie kann auch Systemhilfsprogramme enthalten, die vor dem Start des Betriebssystems ausgeführt werden sollen, sowie Datendateien wie Fehlerprotokolle.

***Wird die EFI-Systempartition in einem RAID gespiegelt?***

Seit Dezember 2025 spiegeln nur die folgenden Betriebssystemversionen die EFI-Systempartition in RAID für Neuinstallationen oder Neuinstallationen:

- Debian 13
- Proxmox 9
- Ubuntu 25.10
- AlmaLinux und Rocky Linux 10
- Fedora 43

Bei früheren Versionen wird die EFI-Partition nicht in RAID gespiegelt; es werden mehrere ESPs erstellt, eines pro Disk. Es wird jedoch jeweils nur ein ESP gemountet. Das ESP wird unter `/boot/efi` gemountet, und die Disk, auf der es gemountet ist, wird beim Booten von Linux ausgewählt.

Mit dem Befehl `lsblk` können Sie überprüfen, ob Ihre Partition Teil einer RAID-Konfiguration ist.

> [!tabs]
> **ESP nicht gespiegelt**
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
>> Aus den obigen Ergebnissen geht hervor, dass nur eine EFI-Systempartition unter `/boot/efi` gemountet ist. Die ESPs sind daher nicht gespiegelt.
>>
> **ESP gespiegelt**
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
>> Aus den obigen Ergebnissen geht hervor, dass beide EFI-Systempartitionen unter `/boot/efi` gemountet sind. Sie sind daher in RAID gespiegelt.
>>

***Ändert sich der Inhalt der EFI-Systempartition regelmäßig?***

Im Allgemeinen ändert sich der Inhalt dieser Partition nicht wesentlich, er sollte sich nur bei Updates des Bootloaders ändern.

Wenn Ihre EFI-Partition jedoch nicht gespiegelt ist, empfehlen wir Ihnen, ein automatisches oder manuelles Skript auszuführen, um alle ESPs zu synchronisieren, sodass sie alle die gleichen aktuellen Dateien enthalten. Auf diese Weise kann der Server bei einem Ausfall des Laufwerks, auf dem diese Partition gemountet ist, auf dem ESP eines der anderen Laufwerke neu gestartet werden.

***Was passiert, wenn die primäre Disk (mit der gemounteten EFI-Systempartition) ausfällt?***

Wenn Ihre ESP nicht gespiegelt ist, kann Folgendes passieren:

> [!primary]
> Beachten Sie, dass wir im Folgenden die häufigsten Fälle beispielhaft erläutern, es jedoch mehrere andere Gründe gibt, warum ein Server nach einem Diskaustausch nicht im normalen Modus startet.
>

**Fall 1** - Es gab keine Änderungen oder größeren Updates (z. B. GRUB) am Betriebssystem.

- Der Server kann im normalen Modus starten, und Sie können mit der RAID-Wiederherstellung fortfahren.
- Der Server kann nicht im normalen Modus starten. Verwenden Sie den Rescue-Modus, um das RAID wiederherzustellen und die EFI-Partition auf der neuen Disk neu zu erstellen.

**Fall 2** - Es gab umfangreiche Systemaktualisierungen (z. B. GRUB) und die ESPs wurden synchronisiert.

- Der Server kann im normalen Modus starten, da alle ESPs auf dem neuesten Stand sind und die RAID-Wiederherstellung im normalen Modus durchgeführt werden kann.
- Der Server kann nicht im normalen Modus starten. Verwenden Sie den Rescue-Modus, um das RAID wiederherzustellen und die EFI-Partition auf der neuen Disk neu zu erstellen.

**Fall 3** - Es gab größere Systemaktualisierungen (z. B. GRUB) und die ESP-Partitionen wurden nicht synchronisiert.

- Der Server kann nicht im normalen Modus gestartet werden. Verwenden Sie den Rescue-Modus, um das RAID neu aufzubauen, die EFI-Systempartition auf der neuen Disk neu zu erstellen und den Bootloader (z. B. GRUB) neu zu installieren.
- Der Server kann im normalen Modus gestartet werden (z. B. wenn das Betriebssystem aktualisiert wurde, die GRUB-Version jedoch unverändert geblieben ist), sodass Sie mit dem Neuaufbau des RAID fortfahren können.

In einigen Fällen kann das Booten von einem veralteten ESP fehlschlagen. Beispielsweise kann ein umfangreiches GRUB-Update dazu führen, dass die GRUB-Binärdatei im ESP mit neueren GRUB-Modulen in der Partition `/boot` nicht mehr kompatibel ist.

***Wie kann ich meine EFI-Systempartitionen synchronisieren und wie oft sollte ich sie synchronisieren?***

Wenn Ihr ESP nicht gespiegelt ist, beachten Sie Folgendes:

> [!primary]
> Der Vorgang kann je nach Betriebssystem unterschiedlich sein. Ubuntu kann beispielsweise mehrere EFI-Systempartitionen bei jedem GRUB-Update synchronisieren, ist jedoch das einzige Betriebssystem, das dies tut. Wir empfehlen Ihnen, die offizielle Dokumentation Ihres Betriebssystems zu konsultieren, um zu erfahren, wie Sie ESPs verwalten können.
>
> In dieser Anleitung wird das Betriebssystem Debian verwendet.

Wir empfehlen, Ihre ESPs regelmäßig oder nach jedem größeren System-Update zu synchronisieren. Standardmäßig enthalten alle EFI-Systempartitionen nach der Installation dieselben Dateien. Nach einem größeren System-Update ist jedoch eine Synchronisierung der ESPs erforderlich, um sicherzustellen, dass der Inhalt auf dem neuesten Stand bleibt.

Das Ausführen eines Skripts ist eine effektive Methode, um Ihre Partitionen regelmäßig zu synchronisieren. Nachstehend finden Sie ein Skript, mit dem Sie Ihre ESPs manuell synchronisieren können. Alternativ können Sie ein automatisiertes Skript einrichten, um sie täglich oder bei jedem Systemstart zu synchronisieren.

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

- Beginnen Sie damit, eine .sh-Datei in einem Verzeichnis Ihrer Wahl zu erstellen, wobei Sie `script-name` durch einen Namen Ihrer Wahl ersetzen:

```sh
sudo touch script-name.sh
```

- Öffnen Sie die Datei mit einem Texteditor und fügen Sie die folgenden Zeilen hinzu:

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

Speichern Sie die Datei und beenden Sie den Editor.

- Machen Sie das Skript ausführbar:

```sh
sudo chmod +x script-name.sh
```

- Führen Sie das Skript aus:

```sh
sudo ./script-name.sh
```

- Wenn Sie sich nicht im richtigen Verzeichnis befinden:

```sh
./path/to/folder/script-name.sh
```

Wenn das Skript ausgeführt wird, wird der Inhalt des gemounteten ESP mit den anderen synchronisiert. Anschließend können Sie jede nicht gemountete EFI-Partition am Mountpunkt `/var/lib/grub/esp` mounten, um auf deren Inhalt zuzugreifen.

///

<a name="diskfailure"></a>

### Simulieren eines Diskausfalls

Nachdem wir nun über die erforderlichen Informationen verfügen, können wir einen Diskausfalls simulieren. In diesem Beispiel lassen wir die primäre Disk `nvme0n1` ausfallen (beachten Sie, dass dies die Disk mit dem gemounteten ESP ist).

Die bevorzugte Methode hierzu ist die Nutzung des OVHcloud Rescue-Modus.

Starten Sie den Server im Rescue-Modus neu und melden Sie sich mit den bereitgestellten Anmeldedaten an.

Um eine Disk aus dem RAID zu entfernen, markieren Sie sie zunächst als **Failed** (Ausgefallen) und entfernen Sie dann ihre Partitionen aus den RAID-Arrays.

**Hinweis**: Dies ist nur ein Beispiel; passen Sie die Befehle an Ihre eigene Konfiguration an.

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

#### Entfernen der defekten Disk

Zunächst markieren wir die Partitionen **nvme0n1p2** und **nvme0n1p3** als ausgefallen:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/nvme0n1p2
# mdadm: set /dev/nvme0n1p2 faulty in /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --fail /dev/nvme0n1p3
# mdadm: set /dev/nvme0n1p3 faulty in /dev/md3
```

Als Nächstes führen wir den Befehl `cat /proc/mdstat` aus:

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

Wie oben gezeigt, weist das [F] neben den Partitionen darauf hin, dass die Disk ausgefallen oder defekt ist.

Als Nächstes entfernen wir diese Partitionen aus den RAID-Arrays, um die Disk vollständig aus dem RAID zu entfernen.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --remove /dev/nvme0n1p2
# mdadm: hot removed /dev/nvme0n1p2 from /dev/md2
```

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md3 --remove /dev/nvme0n1p3
# mdadm: hot removed /dev/nvme0n1p3 from /dev/md3
```

Der RAID-Status sollte nun wie folgt aussehen:

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

Jetzt werden nur noch zwei Partitionen in den RAID-Arrays angezeigt. Wir haben die Disk **nvme0n1** erfolgreich ausgefallen lassen.

Um eine Disk zu erhalten, die einer leeren Disk ähnelt, führen wir den folgenden Befehl auf jeder Partition und anschließend auf der Disk aus:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ #
shred -s10M -n1 /dev/nvme0n1p1
shred -s10M -n1 /dev/nvme0n1p2
shred -s10M -n1 /dev/nvme0n1p3
shred -s10M -n1 /dev/nvme0n1p4
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

Um sicherzustellen, dass die Disk erfolgreich "gelöscht" wurde:

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

Wenn Sie zusätzlich den folgenden Befehl ausführen, erhalten Sie weitere Details zu den RAID-Arrays:

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

Wir können nun mit dem Austausch der Disk und der Wiederherstellung des RAID-Verbunds fortfahren.

<a name="raidrebuildnonmirrored"></a>

### Wiederherstellung des RAID (mit nicht gespiegeltem ESP)

> [!primary]
> Dieser Prozess kann je nach installiertem Betriebssystem auf Ihrem Server variieren. Wir empfehlen Ihnen, die offizielle Dokumentation Ihres Betriebssystems zu konsultieren, um auf die richtigen Befehle zugreifen zu können.
>
> Wenn Ihr Server nach dem Austausch der Disk im normalen Modus starten kann, fahren Sie einfach mit den Schritten aus [diesem Abschnitt](#nonmirrorednormalmode) fort, wenn Ihre EFI-Systempartition nicht gespiegelt ist, oder mit den Schritten aus [diesem Abschnitt](#raidrebuildmirrored), wenn Ihre EFI-Systempartition gespiegelt ist.
>

#### Wiederherstellung des RAIDs nach Austausch der primären Disk (Rescue-Modus) <a name="nonmirroredrescuemode"></a>

Nachdem die Disk ersetzt wurde, ist der nächste Schritt, die Partitionstabelle von der intakten Disk (in diesem Beispiel `nvme1n1`) auf die neue (`nvme0n1`) zu kopieren.

**Für GPT-Partitionen**

Der Befehl sollte in diesem Format lauten: `sgdisk -R /dev/neue Disk /dev/intakte Disk`.

Beispiel:

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

Als Nächstes randomisieren Sie die GUID der neuen Disk, um GUID-Konflikte mit anderen Disks zu vermeiden:

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

Als Nächstes bauen wir das RAID-Array neu auf. Der folgende Codeausschnitt zeigt, wie die neuen Partitionen (`nvme0n1p2` und `nvme0n1p3`) wieder zum RAID-Array hinzugefügt werden.

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

Sobald die RAID-Wiederherstellung abgeschlossen ist, führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Partitionen ordnungsgemäß zum RAID hinzugefügt wurden:

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

Basierend auf den oben genannten Ergebnissen wurden die Partitionen auf der neuen Disk korrekt zum RAID hinzugefügt. Die EFI-Systempartition und die SWAP-Partition (in einigen Fällen) wurden jedoch nicht dupliziert, was normal ist, da sie nicht im RAID enthalten sind.

> [!warning]
> Die oben genannten Beispiele illustrieren lediglich die notwendigen Schritte anhand einer Standard-Serverkonfiguration. Die Informationen in der Ausgabetabelle hängen von der Hardware Ihres Servers und seinem Partitionsschema ab. Bei Unsicherheiten konsultieren Sie die Dokumentation Ihres Betriebssystems.
> 
> Wenn Sie professionelle Unterstützung bei der Server-Administration benötigen, beachten Sie die Details im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

<a name="recreateesp"></a>

#### Wiederherstellen der EFI-Systempartition

Um die EFI-Systempartition auf der neuen Disk wiederherzustellen, müssen wir **nvme0n1p1** formatieren und anschließend den Inhalt der fehlerfreien Partition (in unserem Beispiel: nvme1n1p1) darauf replizieren.

Wir gehen davon aus, dass beide Partitionen synchronisiert wurden und aktuelle Dateien enthalten.

> [!warning]
> Wenn ein größeres System-Update wie Kernel oder GRUB durchgeführt wurde und beide Partitionen nicht synchronisiert wurden, lesen Sie [diesen Abschnitt](#efiraidgrub), sobald Sie die neue EFI-Systempartition erstellt haben.
>

Formatieren Sie zuerst die Partition:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkfs.vfat /dev/nvme0n1p1
```

Als Nächstes benennen Sie die Partition als `EFI_SYSPART` (diese Benennung ist spezifisch für OVHcloud):

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Als Nächstes duplizieren Sie den Inhalt von nvme1n1p1 nach nvme0n1p1.

Beginnen Sie damit, zwei Ordner zu erstellen, in diesem Beispiel mit den Namen `old` und `new`:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkdir old new
```

Mounten Sie **nvme1n1p1** im Ordner `old` und **nvme0n1p1** im Ordner `new`, um die Unterscheidung zu treffen:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme1n1p1 old
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/nvme0n1p1 new
```

Kopieren Sie die Dateien aus dem Ordner `old` in den Ordner `new`:

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

Sobald dies erledigt ist, hängen Sie beide Partitionen aus:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme0n1p1
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount /dev/nvme1n1p1
```

Als Nächstes hängen Sie die Partition, die das Stammverzeichnis des Betriebssystems enthält, unter `/mnt` ein. In diesem Beispiel ist diese Partition **md3**.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md3 /mnt
```

Hängen Sie die folgenden Verzeichnisse ein, um sicherzustellen, dass alle in der `chroot`-Umgebung vorgenommenen Änderungen korrekt funktionieren:

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

Verwenden Sie anschließend den Befehl `chroot`, um auf den Einhängepunkt zuzugreifen und zu überprüfen, ob das neue ESP ordnungsgemäß erstellt wurde und das System beide ESPs erkennt:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Um die ESP-Partitionen anzuzeigen, führen Sie den Befehl `blkid -t LABEL=EFI_SYSPART` aus:

```sh
root@rescue12-customer-eu:/# blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Die Ergebnisse zeigen, dass das neue ESP korrekt erstellt und das LABEL ordnungsgemäß angewendet wurde.

Beenden Sie anschließend die `chroot`-Umgebung:

```sh
root@rescue12-customer-eu:/# exit
```

Als Nächstes lesen Sie [diesen Abschnitt](#swap-partition), um die SWAP-Partition neu zu erstellen (falls zutreffend).

#### RAID mit nicht synchronisierten ESPs nach größeren Systemaktualisierungen neu erstellen (GRUB) <a name="efiraidgrub"></a>

/// details | **Diesen Abschnitt aufklappen**

> [!warning]
> Befolgen Sie die Schritte in diesem Abschnitt nur, wenn sie auf Ihren Fall zutreffen.
> 

Wenn die primäre Disk ausgetauscht wird, während sie EFI-Systempartitionen enthält, die nach größeren Systemaktualisierungen, die GRUB verändert haben, nicht synchronisiert wurden, kann das Booten von einer der sekundären Disks mit einer veralteten ESP fehlschlagen. 

In diesem Fall müssen Sie neben dem Wiederherstellen des RAID und dem Neuerstellen der EFI-Systempartition im Rescue-Modus auch GRUB darauf neu installieren.

Sobald die ESP erstellt wurde (wie oben beschrieben) und das System beide Partitionen erkennt, erstellen Sie noch in der `chroot`-Umgebung den Ordner `/boot/efi`, um die neue EFI-Systempartition **nvme0n1p1** zu mounten:

```sh
root@rescue12-customer-eu:/# mount /boot
root@rescue12-customer-eu:/# mount /dev/nvme0n1p1 /boot/efi
```

Als nächstes installieren Sie den GRUB-Bootloader neu:

```sh
root@rescue12-customer-eu:/# grub-install --efi-directory=/boot/efi /dev/nvme0n1p1
```

Führen Sie anschließend den folgenden Befehl aus:

```sh
root@rescue12-customer-eu:/# update-grub
```

Beenden Sie anschließend die `chroot`-Umgebung:

```sh
root@rescue12-customer-eu:/# exit
```

Lesen Sie anschließend [diesen Abschnitt](#swap-partition), um die SWAP-Partition neu zu erstellen (falls zutreffend).

///

<a name="nonmirrorednormalmode"></a>

#### Wiederherstellung des RAID nach Austausch der primären Disk (normaler Modus)

/// details | **Diesen Abschnitt aufklappen**

Wenn Ihr Server nach dem Austausch der primären Disk im normalen Modus starten kann, führen Sie die folgenden Schritte aus, um das RAID neu aufzubauen.

Kopieren Sie nach dem Austausch der Disk die Partitionstabelle von der fehlerfreien Disk (in diesem Beispiel "nvme1n1") auf die neue Disk ("nvme0n1").

**Für GPT-Partitionen**

```sh
sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
```

Der Befehl muss folgendes Format haben: `sgdisk -R /dev/neue Disk /dev/intakte Disk`.

Als Nächstes randomisieren Sie die GUID der neuen Disk, um GUID-Konflikte mit anderen Disks zu vermeiden:

```sh
sudo sgdisk -G /dev/nvme0n1
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

Verwenden Sie den folgenden Befehl, um den RAID-Wiederaufbau zu überwachen:

```sh
[user@server_ip ~]# cat /proc/mdstat
```

Sobald der Wiederaufbau abgeschlossen ist, erstellen Sie die EFI-Systempartition auf der neuen Disk neu.

- Stellen Sie zunächst sicher, dass die erforderlichen Tools installiert sind:

**Debian und Ubuntu**

```sh
[user@server_ip ~]# sudo apt install dosfstools
```

**CentOS**

```sh
[user@server_ip ~]# sudo yum install dosfstools
```

- Formatieren Sie die Partition. In unserem Beispiel `nvme0n1p1`:

```sh
[user@server_ip ~]# sudo mkfs.vfat /dev/nvme0n1p1
```

- Benennen Sie die Partition als `EFI_SYSPART` (diese Benennung ist spezifisch für OVHcloud):

```sh
[user@server_ip ~]# sudo fatlabel /dev/nvme0n1p1 EFI_SYSPART
```

Anschließend synchronisieren Sie beide Partitionen mithilfe des in dieser Anleitung bereitgestellten Skripts.

- Überprüfen Sie, ob die neue EFI-Systempartition ordnungsgemäß erstellt wurde und vom System erkannt wird:

```sh
[user@server_ip ~]# sudo blkid -t LABEL=EFI_SYSPART
/dev/nvme1n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="4629-D183" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="889f241b-49c3-4031-b5c9-60df0746f98f"
/dev/nvme0n1p1: SEC_TYPE="msdos" LABEL_FATBOOT="EFI_SYSPART" LABEL="EFI_SYSPART" UUID="521F-300B" BLOCK_SIZE="512" TYPE="vfat" PARTLABEL="primary" PARTUUID="02bf2b2d-7ada-4461-ba50-07683519f65d"
```

Als Nächstes lesen Sie [diesen Abschnitt](#swap-partition), um die SWAP-Partition neu zu erstellen (falls zutreffend).

///

<a name="raidrebuildmirrored"></a>

### Wiederherstellung des RAID (mit gespiegeltem ESP)

/// details | **Diesen Abschnitt aufklappen**

> [!tabs]
> **Im Rescue-Modus**
>>
>> Der Wiederaufbau des RAID mit gespiegelten Partitionen ist einfacher: Kopieren Sie einfach die Daten von der fehlerfreien Disk auf die neue Disk und erstellen Sie die [SWAP]-Partition neu (falls zutreffend).
>>
>> Aus den obigen Abbildungen geht hervor, dass der RAID-Status nach einem Diskausfall wie folgt aussehen sollte:
>>
>> ```sh
>> Personalities : [linear] [raid0] [raid1] [raid10] [raid6] [raid5] [raid4] [multipath] [faulty]
>> md3 : active raid1 nvme1n1p3[2] nvme0n1p3[0](F)
>>      497875968 blocks super 1.2 [2/1] [_U]
>>      bitmap: 0/4 pages [0KB], 65536KB chunk
>>
>> md1 : active raid1 nvme0n1p1[2](F) nvme1n1p1[1]
>>      523200 blocks [2/1] [_U]
>>
>> md2 : active raid1 nvme1n1p2[2] nvme0n1p2[0](F)
>>      1046528 blocks super 1.2 [2/1] [_U]
>>
>> unused devices: <none>
>> ```
>>
>> Nach dem Austausch der Disk besteht der erste Schritt darin, die Partitionstabelle von der intakten Disk (in diesem Beispiel nvme1n1) auf die neue Disk (nvme0n1) zu kopieren.
>>
>> **Für GPT-Partitionen**
>>
>> Der Befehl muss folgendes Format haben: `sgdisk -R /dev/neue Disk /dev/intakte Disk`.
>>
>> In unserem Beispiel:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Führen Sie `lsblk` aus, um sicherzustellen, dass die Partitionstabellen ordnungsgemäß kopiert wurden:
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
>> Als Nächstes randomisieren Sie die GUID der neuen Disk, um GUID-Konflikte mit anderen Disks zu vermeiden:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -G /dev/nvme0n1
>> ```
>>
>> Wenn Sie die folgende Meldung erhalten:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Führen Sie einfach den Befehl `partprobe` aus.
>>
>> Jetzt können wir das RAID-Array neu erstellen. Der folgende Codeausschnitt zeigt, wie Sie die neuen Partitionen (nvme0n1p1, nvme0n1p2 und nvme0n1p3) wieder zum RAID-Array hinzufügen.
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
>> So überprüfen Sie den Wiederaufbauprozess:
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
>>      523200 blocks [2/2] [UU]
>>
>> md2 : active raid1 nvme0n1p2[2] nvme1n1p2[0]
>>      1046528 blocks super 1.2 [2/2] [UU]
>> ```
>>
>> Sobald der Neuaufbau abgeschlossen ist, führen Sie den folgenden Befehl aus, um sicherzustellen, dass die Partitionen ordnungsgemäß zum RAID hinzugefügt wurden:
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
>> Anschließend lesen Sie [diesen Abschnitt](#swap-partition), um die SWAP-Partition neu zu erstellen (falls zutreffend).
>>
>
> **Im normalen Modus**
>>
>> Aus den obigen Abbildungen geht hervor, dass der RAID-Status nach einem Diskausfall wie folgt aussehen sollte:
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
>> Sobald die Disk ausgetauscht wurde, kopieren Sie die Partitionstabelle von der intakten Disk (in diesem Beispiel `nvme1n1`) auf die neue Disk (`nvme0n1`).
>>
>> **Für GPT-Partitionen**
>>
>> ```sh
>> sudo sgdisk -R /dev/nvme0n1 /dev/nvme1n1
>> ```
>>
>> Der Befehl muss folgendes Format haben: `sgdisk -R /dev/neue Disk /dev/intakte Disk`.
>>
>> Als nächstes sollten Sie die GUID der neuen Disk randomisieren, um GUID-Konflikte mit anderen Disks zu vermeiden:
>>
>> ```sh
>> sudo sgdisk -G /dev/nvme0n1
>> ```
>>
>> Wenn Sie die folgende Meldung erhalten:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Führen Sie einfach den Befehl `partprobe` aus. Wenn Sie die neu erstellten Partitionen immer noch nicht sehen können (z. B. mit `lsblk`), müssen Sie den Server neu starten, bevor Sie fortfahren.
>>
>> Fügen Sie als Nächstes die Partitionen zum RAID hinzu:
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
>> Verwenden Sie den folgenden Befehl, um den RAID-Wiederaufbau zu überwachen:
>>
>> ```sh
>> [user@server_ip ~]# cat /proc/mdstat
>> ```
>>
>> Sobald der RAID-Wiederaufbau abgeschlossen ist, lesen Sie [diesen Abschnitt](#swap-partition), um die SWAP-Partition neu zu erstellen (falls zutreffend).
>>

///

#### Label zur SWAP-Partition hinzufügen (falls zutreffend) <a name="swap-partition"></a>

/// details | **Diesen Abschnitt aufklappen**

> [!tabs]
> **Im Rescue-Modus**
>>
>> Erstellen Sie außerhalb der `chroot`-Umgebung die [SWAP]-Partition **nvme0n1p4** neu und fügen Sie die Bezeichnung `swap-nvmenxxx` hinzu:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
>> LABEL=swap-nvme0n1p4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
>> ```
>>
>> Überprüfen Sie, ob die Bezeichnung korrekt angewendet wurde:
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
>> Anschließend greifen wir erneut auf die Umgebung `chroot` zu:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
>> ```
>>
>> Wir rufen die UUID der beiden SWAP-Partitionen ab:
>>
>> ```sh
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>>
>> root@rescue12-customer-eu:/# blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> Anschließend ersetzen wir die alte UUID der SWAP-Partition (**nvme0n1p4**) durch die neue in der Datei `/etc/fstab`:
>>
>> ```sh
>> root@rescue12-customer-eu:/# nano /etc/fstab
>> ```
>>
>> Beispiel:
>>
>> ```sh
>> UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
>> UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
>> LABEL=EFI_SYSPART       /boot/efi       vfat    defaults        0     1
>> UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
>> UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
>> ```
>>
>> Basierend auf den obigen Ergebnissen lautet die alte UUID `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` und muss durch die neue UUID `b3c9e03a-52f5-4683-81b6-cc10091fcd15` ersetzt werden. Stellen Sie sicher, dass Sie die richtige UUID ersetzen.
>>
>> Anschließend überprüfen wir mit dem folgenden Befehl, ob alles korrekt eingebunden ist:
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
>> Wir aktivieren die SWAP-Partition:
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
>> Wir verlassen die Umgebung chroot mit `exit` und laden das System neu:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
>> ```
>>
>> Wir unmounten alle Disks:
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -Rl /mnt
>> ```
>>
> **Im normalen Modus**
>>
>> Um die SWAP-Partition neu zu erstellen, führen Sie die folgenden Schritte aus:
>>
>> - Erstellen Sie zunächst die Partition auf **nvme0n1p4** neu und fügen Sie die Bezeichnung **swap-nvme0n1p4** hinzu:
>>
>> ```sh
>> [user@server_ip ~]# sudo mkswap /dev/nvme0n1p4 -L swap-nvme0n1p4
>> ```
>>
>> - Wir rufen die UUIDs beider SWAP-Partitionen ab:
>>
>> ```sh
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme0n1p4
>> /dev/nvme0n1p4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
>> [user@server_ip ~]# sudo blkid -s UUID blkid /dev/nvme1n1p4
>> /dev/nvme1n1p4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
>> ```
>>
>> - Wir ersetzen die alte UUID der SWAP-Partition (**nvme0n1p4**) durch die neue in `/etc/fstab`:
>>
>> ```sh
>> [user@server_ip ~]# sudo nano /etc/fstab
>> ```
>>
>> Beispiel:
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
>> Basierend auf den obigen Ergebnissen ist die alte UUID `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` und sollte durch die neue `b3c9e03a-52f5-4683-81b6-cc10091fcd15` ersetzt werden. 
>>
>> Stellen Sie sicher, dass Sie die richtige UUID ersetzen.
>>
>> Als nächstes führen wir den folgenden Befehl aus, um die SWAP-Partition zu aktivieren:
>>
>> ```sh
>> [user@server_ip ~]# sudo swapon -av
>> swapon: /dev/nvme1n1p4: already active -- ignored
>> swapon: /dev/nvme0n1p4: found signature [pagesize=4096, signature=swap]
>> swapon: /dev/nvme0n1p4: pagesize=4096, swapsize=536870912, devsize=536870912
>> swapon /dev/nvme0n1p4
>> ```
>>
>> Als nächstes laden wir das System neu:
>>
>> ```sh
>> [user@server_ip ~]# sudo systemctl daemon-reload
>> ```
>>
>> Damit ist die RAID-Wiederherstellung abgeschlossen.
>>

///

<a name="go-further"></a>

## Weiterführende Informationen

[Hot Swap - Software-RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API und Speicher](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Verwalten von Hardware-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware-RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.