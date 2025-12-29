---
title: Verwalten und Neuaufbauen von Software-RAID auf Servern im Legacy-Boot-Modus (BIOS)
excerpt: Erfahren Sie, wie Sie Software-RAID verwalten und nach einem Wechsel der Festplatte auf Ihrem Server im Legacy-Boot-Modus (BIOS) neu aufbauen können
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

Redundant Array of Independent Disks (RAID) ist eine Technologie, die Datenverluste auf einem Server durch die Replikation von Daten auf zwei oder mehr Festplatten minimiert.

Die Standard-RAID-Ebene für OVHcloud-Serverinstallationen ist RAID 1, wodurch der Platz, den Ihre Daten einnehmen, verdoppelt wird und der nutzbare Festplattenplatz effektiv halbiert wird.

**Dieses Handbuch erklärt, wie Sie ein Software-RAID verwalten und nach einem Festplattentausch auf Ihrem Server im Legacy-Boot-Modus (BIOS) neu aufbauen können.**

Bevor wir beginnen, beachten Sie bitte, dass dieses Handbuch sich auf Dedicated Server konzentriert, die den Legacy-Boot-Modus (BIOS) verwenden. Wenn Ihr Server den UEFI-Modus verwendet (neuere Motherboards), konsultieren Sie bitte dieses Handbuch [Verwalten und Neuaufbauen von Software-RAID auf Servern im UEFI-Boot-Modus](/pages/bare_metal_cloud/dedicated_servers/raid_soft_uefi).

Um zu prüfen, ob ein Server im Legacy-BIOS- oder UEFI-Modus läuft, führen Sie den folgenden Befehl aus:

```sh
[user@server_ip ~]# [ -d /sys/firmware/efi ] && echo UEFI || echo BIOS
```

## Voraussetzungen

- Ein [Dedicated Server](/links/bare-metal/bare-metal) mit Software-RAID-Konfiguration
- Administrative (sudo) Zugriffsrechte auf den Server über SSH
- Grundkenntnisse zu RAID und Partitionen

## In der praktischen Anwendung

Wenn Sie einen neuen Server erwerben, könnten Sie sich möglicherweise entscheiden, eine Reihe von Tests und Aktionen durchzuführen. Ein solcher Test könnte darin bestehen, einen Festplattenausfall zu simulieren, um den Rebuild-Prozess des RAIDs zu verstehen und sich darauf vorzubereiten, falls dies jemals tatsächlich passiert.

### Inhaltsübersicht

- [Grundlegende Informationen](#basicinformation)
- [Simulieren eines Festplattenausfalls](#diskfailure)
    - [Entfernen der defekten Festplatte](#diskremove)
- [Neuaufbau des RAIDs](#raidrebuild)
    - [Neuaufbau des RAIDs im Rescue-Modus](#rescuemode)
    - [Hinzufügen des Labels zur SWAP-Partition (falls zutreffend)](#swap-partition)
    - [Neuaufbau des RAIDs im Normalmodus](#normalmode)

<a name="basicinformation"></a>

### Grundlegende Informationen

Geben Sie in einer Befehlszeilen-Sitzung den folgenden Code ein, um den aktuellen RAID-Status zu ermitteln:

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

Dieser Befehl zeigt uns, dass wir zwei Software-RAID-Geräte eingerichtet haben, wobei **md4** das größte ist. Das **md4**-RAID-Gerät besteht aus zwei Partitionen, die als **nvme1n1p4** und **nvme0n1p4** bezeichnet werden.

Die [UU] bedeutet, dass alle Festplatten normal funktionieren. Ein `_` würde eine defekte Festplatte anzeigen.

Wenn Sie einen Server mit SATA-Festplatten haben, erhalten Sie die folgenden Ergebnisse:

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

Obwohl dieser Befehl unsere RAID-Volumes zurückgibt, sagt er uns nicht die Größe der Partitionen selbst. Wir können diese Informationen mit dem folgenden Befehl erhalten:

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

Der Befehl `fdisk -l` erlaubt es Ihnen auch, den Typ Ihrer Partition zu identifizieren. Dies ist eine wichtige Information, wenn es darum geht, Ihr RAID im Falle eines Festplattenausfalls neu aufzubauen.

Für **GPT**-Partitionen wird in Zeile 6 angezeigt: `Disklabel type: gpt`. Diese Information ist nur sichtbar, wenn der Server im Normalmodus läuft.

Basierend auf den Ergebnissen von `fdisk -l`, können wir erkennen, dass `/dev/md2` 888,8 GB umfasst und `/dev/md4` 973,5 GB enthält.

Alternativ bietet der Befehl `lsblk` eine andere Ansicht der Partitionen:

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

Wir notieren uns die Geräte, Partitionen und ihre Mountpoints. Aus den oben genannten Befehlen und Ergebnissen haben wir:

- Zwei RAID-Arrays: `/dev/md2` und `/dev/md4`.
- Vier Partitionen, die Teil des RAIDs sind, mit den Mountpoints: `/` und `/home`.

<a name="diskfailure"></a>

### Simulieren eines Festplattenausfalls

Jetzt, da wir alle notwendigen Informationen haben, können wir einen Festplattenausfall simulieren und die Tests durchführen. In diesem Beispiel werden wir die Festplatte `sda` als defekt markieren.

Die bevorzugte Methode, dies zu tun, ist über den Rescue-Modus-Umgebung von OVHcloud.

Starten Sie zunächst den Server im Rescue-Modus neu und melden Sie sich mit den bereitgestellten Anmeldeinformationen an.

Um eine Festplatte aus dem RAID zu entfernen, ist der erste Schritt, sie als **defekt** zu markieren und die Partitionen aus ihren jeweiligen RAID-Arrays zu entfernen.

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

Aus der obigen Ausgabe ergibt sich, dass sda aus zwei Partitionen besteht, die im RAID sind, nämlich **sda2** und **sda4**.

<a name="diskremove"></a>

#### Entfernen der defekten Festplatte

Zunächst markieren wir die Partitionen **sda2** und **sda4** als defekt.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md2 --fail /dev/sda2
# mdadm: set /dev/sda2 faulty in /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # mdadm --manage /dev/md4 --fail /dev/sda4
# mdadm: set /dev/sda4 faulty in /dev/md4
```

Wir haben nun einen RAID-Ausfall simuliert. Wenn wir den Befehl `cat /proc/mdstat` ausführen, erhalten wir die folgende Ausgabe:

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

Wie wir oben sehen können, zeigt das [F] neben den Partitionen an, dass die Festplatte fehlerhaft ist oder defekt ist.

Als nächstes entfernen wir diese Partitionen aus den RAID-Arrays.

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md2 --remove /dev/sda2
# mdadm: hot removed /dev/sda2 from /dev/md2
```

```sh
root@rescue12-customer-ca (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --manage /dev/md4 --remove /dev/sda4
# mdadm: hot removed /dev/sda4 from /dev/md4
```

Um sicherzustellen, dass wir eine Festplatte erhalten, die einem leeren Laufwerk ähnelt, verwenden wir den folgenden Befehl. Ersetzen Sie **sda** durch Ihre eigenen Werte:

```sh
shred -s10M -n1 /dev/sda1
shred -s10M -n1 /dev/sda2
shred -s10M -n1 /dev/sda3
shred -s10M -n1 /dev/sda4
shred -s10M -n1 /dev/sda
```

Die Festplatte erscheint nun als neue, leere Festplatte:

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

Wenn wir den folgenden Befehl ausführen, sehen wir, dass unsere Festplatte ordnungsgemäß "gelöscht" wurde:

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

Der Status unseres RAID sollte nun wie folgt aussehen:

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

Die obigen Ergebnisse zeigen, dass nun nur noch zwei Partitionen in den RAID-Arrays angezeigt werden. Wir haben die Festplatte **sda** erfolgreich zum Ausfall gebracht und können nun mit dem Austausch der Festplatte fortfahren.

Weitere Informationen zur Vorbereitung und Beantragung eines Festplattenaustauschs finden Sie in dieser [Anleitung](/pages/bare_metal_cloud/dedicated_servers/disk_replacement).

Mit dem folgenden Befehl erhalten Sie weitere Details zu den RAID-Arrays:

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

### RAID neu erstellen

> [!primary]
> Dieser Prozess kann je nach auf Ihrem Server installiertem Betriebssystem variieren. Wir empfehlen Ihnen, die offizielle Dokumentation Ihres Betriebssystems zu konsultieren, um die entsprechenden Befehle zu erhalten.
>

> [!warning]
>
> Bei den meisten Software-RAID-Servern kann der Server nach dem Festplattenaustausch im normalen Modus (auf der intakten Festplatte) starten, um das RAID neu zu erstellen. Wenn der Server jedoch nicht im normalen Modus starten kann, wird er im Rescue-Modus neu gestartet, um das RAID neu zu erstellen.
>

<a name="normalmode"></a>

### RAID im normalen Modus wiederherstellen

Die folgenden Schritte werden im Normalmodus ausgeführt. In unserem Beispiel haben wir die Festplatte **sda** ersetzt.

Nach dem Ersetzen des Datenträgers muss die Partitionstabelle des intakten Datenträgers (in diesem Beispiel sdb) auf den neuen Datenträger (sda) kopiert werden.

> [!tabs]
> **Für GPT-Partitionen**
>>
>> ```sh
>> sudo sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> Der Befehl muss im folgenden Format vorliegen: `sgdisk -R /dev/neue Festplatte /dev/intakte Festplatte`.
>>
>> Nachdem dieser Vorgang abgeschlossen wurde, wird dem neuen Datenträger im nächsten Schritt eine zufällige GUID zugewiesen, um Konflikte mit den GUIDs anderer Datenträger zu vermeiden:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdX
>> ```
>>
>> Wenn die folgende Meldung angezeigt wird:
>>
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Führen Sie einfach den Befehl `partprobe` aus. Wenn Sie die neu erstellten Partitionen (zum Beispiel mit `lsblk`) immer noch nicht sehen, müssen Sie den Server neu starten, bevor Sie fortfahren.
>>
> **Für MBR-Partitionen**
>>
>> ```sh
>> [user@server_ip ~]# sudo sfdisk -d /dev/sdX | sfdisk /dev/sdX
>> ```
>>
>> Der Befehl muss im folgenden Format vorliegen: `sfdisk -d /dev/intakte Festplatte | sfdisk /dev/neue Festplatte`.
>>

Dann fügen wir die Partitionen zum RAID hinzu:

```sh
[user@server_ip ~]# sudo mdadm --add /dev/md2 /dev/sda2
# mdadm: added /dev/sda2

[user@server_ip ~]# sudo mdadm --add /dev/md4 /dev/sda4
# mdadm: re-added /dev/sda4
```

Verwenden Sie den folgenden Befehl, um das RAID-Neuaufbau zu überwachen:

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

Zuletzt fügen wir eine Bezeichnung hinzu und mounten die [SWAP]-Partition (falls zutreffend).

Um eine Bezeichnung für die SWAP-Partition hinzuzufügen:

```sh
[user@server_ip ~]# sudo mkswap /dev/sda4 -L swap-sda4
```

Rufen Sie als nächstes die UUIDs beider Swap-Partitionen ab:

```sh
[user@server_ip ~]# sudo blkid -s UUID /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
[user@server_ip ~]# sudo blkid -S UUID /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Wir ersetzen die alte UUID der Swap-Partition (**sda4**) durch die neue in `/etc/fstab`.

Beispiel:

```sh
[user@server_ip ~]# sudo nano etc/fstab

UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /boot   ext4    defaults       0       0
LABEL=BIOS       /boot       vfat    defaults        0     1
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Basierend auf den oben genannten Ergebnissen ist die alte UUID `b7b5dd38-9b51-4282-8f2d-26c65e8d58ec` und sollte durch die neue `b3c9e03a-52f5-4683-81b6-cc10091fcd15` ersetzt werden. 

Stellen Sie sicher, dass Sie die richtige UUID ersetzen.

Als nächstes prüfen wir, ob alles ordnungsgemäß gemountet ist, mit dem folgenden Befehl:

```sh
[user@server_ip ~]# sudo mount -av
/                        : ignored
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Führen Sie den folgenden Befehl aus, um die Swap-Partition zu aktivieren:

```sh
[user@server_ip ~]# sudo swapon -av
```

Laden Sie anschließend das System mit dem folgenden Befehl neu:

```sh
[user@server_ip ~]# sudo systemctl daemon-reload
```

Wir haben nun erfolgreich das RAID-Neuaufbau abgeschlossen.

<a name="rescuemode"></a>

/// details | **Neuaufbau des RAIDs im Rescue-Modus**

Falls Ihr Server nach einem Wechsel der Festplatte nicht im normalen Modus neu starten kann, wird er im Rescue-Modus neu gestartet.

In diesem Beispiel ersetzen wir die Festplatte `sdb`.

Nachdem die Festplatte ausgetauscht wurde, müssen wir die Partitionstabelle von der gesunden Festplatte (in diesem Beispiel sda) auf die neue (sdb) kopieren.

> [!tabs]
> **Für GPT-Partitionen**
>>
>> ```sh
>> root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sgdisk -R /dev/sdX /dev/sdX
>> ```
>>
>> Der Befehl sollte in diesem Format lauten: `sgdisk -R /dev/neue Festplatte /dev/intakte Festplatte`.
>>
>> Beispiel:
>>
>> ```sh
>> sudo sgdisk -R /dev/sdb /dev/sda
>> ```
>>
>> Sobald dies erledigt ist, ist der nächste Schritt, die GUID der neuen Festplatte zu randomisieren, um Konflikte mit anderen Festplatten zu vermeiden:
>>
>> ```sh
>> sudo sgdisk -G /dev/sdb
>> ```
>>
>> Falls Sie die folgende Meldung erhalten:
>> 
>> ```console
>> Warning: The kernel is still using the old partition table.
>> The new table will be used at the next reboot or after you
>> run partprobe(8) or kpartx(8)
>> The operation has completed successfully.
>> ```
>>
>> Können Sie einfach den Befehl `partprobe` ausführen.
>>
> **Für MBR-Partitionen**
>>
>> ```sh
>> sudo sfdisk -d /dev/sda | sfdisk /dev/sdb
>> ```
>>
>> Der Befehl sollte in diesem Format lauten: `sfdisk -d /dev/intakte Festplatte | sfdisk /dev/neue Festplatte`
>>

Wir können nun das RAID-Array neu aufbauen. Der folgende Code zeigt, wie wir die neuen Partitionen (sdb2 und sdb4) wieder ins RAID-Array einfügen können.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md2 /dev/sdb2
# mdadm: added /dev/sdb2

root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # sudo mdadm --add /dev/md4 /dev/sdb4
# mdadm: re-added /dev/sdb4
```

Verwenden Sie den Befehl `cat /proc/mdstat`, um das RAID-Neuaufbau zu überwachen:

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

Für weitere Details zu den RAID-Array(s):

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
       0       8        2        0      active sync    /dev/sda4
       1       8       18        1      spare rebuilding  /dev/sdb4
```

<a name="swap-partition"></a>

#### Bezeichnung der SWAP-Partition hinzufügen (falls zutreffend)

Sobald das RAID-Neuaufbau abgeschlossen ist, mounten wir die Partition, die die Wurzel unseres Betriebssystems enthält, auf `/mnt`. In unserem Beispiel ist dies die Partition `md4`.

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mount /dev/md4 /mnt
```

Wir fügen die Bezeichnung unserer Swap-Partition mit dem folgenden Befehl hinzu:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # mkswap /dev/sdb4 -L swap-sdb4
mkswap: /dev/sdb4: warning: wiping old swap signature.
Setting up swapspace version 1, size = 512 MiB (536866816 bytes)
LABEL=swap-sdb4, UUID=b3c9e03a-52f5-4683-81b6-cc10091fcd
```

Als nächstes mounten wir die folgenden Verzeichnisse, um sicherzustellen, dass alle Manipulationen im chroot-Umgebung ordnungsgemäß funktionieren:

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

Als nächstes greifen wir in die `chroot`-Umgebung:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # chroot /mnt
```

Wir rufen die UUIDs beider Swap-Partitionen ab:

```sh
root@rescue12-customer-eu:/# blkid -s UUID /dev/sda4
root@rescue12-customer-eu:/# blkid -s UUID /dev/sdb4
```

Beispiel:

```sh
blkid /dev/sda4
/dev/sda4: UUID="b3c9e03a-52f5-4683-81b6-cc10091fcd15"
blkid /dev/sdb4
/dev/sdb4: UUID="d6af33cf-fc15-4060-a43c-cb3b5537f58a"
```

Als nächstes ersetzen wir die alte UUID der Swap-Partition (**sdb4**) durch die neue in `/etc/fstab`:

```sh
root@rescue12-customer-eu:/# nano etc/fstab
```

Beispiel:

```sh
UUID=6abfaa3b-e630-457a-bbe0-e00e5b4b59e5       /       ext4    defaults       0       1
UUID=f925a033-0087-40ec-817e-44efab0351ac       /home   ext4    defaults       0       0
UUID=b7b5dd38-9b51-4282-8f2d-26c65e8d58ec       swap    swap    defaults       0       0
UUID=d6af33cf-fc15-4060-a43c-cb3b5537f58a       swap    swap    defaults       0       0
```

Stellen Sie sicher, dass Sie die richtige UUID ersetzen. In unserem obigen Beispiel ist die UUID, die ersetzt werden muss, `d6af33cf-fc15-4060-a43c-cb3b5537f58a` durch die neue `b3c9e03a-52f5-4683-81b6-cc10091fcd15`. Stellen Sie sicher, dass Sie die richtige UUID ersetzen.

Als nächstes stellen wir sicher, dass alles ordnungsgemäß gemountet ist:

```sh
root@rescue12-customer-eu:/# mount -av
/boot                    : successfully mounted
/boot/efi                : successfully mounted
swap                     : ignored
swap                     : ignored
```

Aktivieren Sie die Swap-Partition mit dem folgenden Befehl:

```sh
root@rescue12-customer-eu:/# swapon -av

swapon: /dev/sda4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sda4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sda4
swapon: /dev/sdb4: found signature [pagesize=4096, signature=swap]
swapon: /dev/sdb4: pagesize=4096, swapsize=536870912, devsize=536870912
swapon /dev/sdb4
```

Wir verlassen die `chroot`-Umgebung mit exit und laden das System neu:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # systemctl daemon-reload
```

Wir entmounten alle Festplatten:

```sh
root@rescue12-customer-eu (nsxxxxx.ip-xx-xx-xx.eu) ~ # umount -R /mnt
```

Wir haben nun erfolgreich das RAID-Neuaufbau auf dem Server abgeschlossen und können ihn nun im normalen Modus neu starten.

## Weiterführende Informationen

[Hot Swap - Software-RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[OVHcloud API und Speicher](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

[Verwalten von Hardware-RAID](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

[Hot Swap - Hardware-RAID](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

Für spezialisierte Dienstleistungen (SEO, Entwicklung usw.) kontaktieren Sie [OVHcloud Partner](/links/partner).

Wenn Sie bei der Nutzung und Konfiguration Ihrer OVHcloud-Lösungen Unterstützung benötigen, wenden Sie sich an unsere [Support-Angebote](/links/support).

Wenn Sie Schulungen oder technische Unterstützung benötigen, um unsere Lösungen umzusetzen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um ein Angebot zu erhalten und unsere Expert.

Treten Sie unserer [User Community](/links/community) bei.