---
title: "Sicherung Ihrer Datenbanken im Rescue-Modus"
excerpt: "Erfahren Sie hier, wie Sie im Rescue-Modus Ihre Datenbanken abrufen und sichern"
updated: 2023-04-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Der Rescue-Modus stellt einen permanenten Zugriff auf Ihre Daten bereit, auch wenn das Betriebssystem des Servers oder die darauf gehostete Software nicht mehr funktioniert.

**Dieses Tutorial erklärt, wie Sie im Rescue-Modus auf Ihr Betriebssystem zugreifen um Datenbank-Dateien zu sichern.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/), [VPS](https://www.ovhcloud.com/de/vps/) oder eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem Kunden-Account (ausgenommen Windows-Systeme).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>


## In der praktischen Anwendung

### Ihren Server im Rescue-Modus neu starten

Folgen Sie der entsprechenden Anleitung, um Ihren OVHcloud Dienst in den Rescue-Modus zu versetzen:

- [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Public Cloud Instanz](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

Folgen Sie den Anweisungen in [diesem Abschnitt](#pci) für einen **VPS** oder eine **Public Cloud Instanz**. Gehen Sie direkt zum [nachfolgenden Abschnitt](#dedicated) für einen **Dedicated Server**. 

### Zugriff auf Ihre Daten mit einem VPS oder einer Public Cloud Instanz <a name="pci"></a>

Identifizieren Sie zuerst den Mountpunkt, der das `/` des Systems enthält.

Verwenden Sie hierzu die Befehle `lsblk` und `fdisk -l`.

- Beispielausgabe für **lsblk**:

```output
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   10G  0 disk
└─sdb1   8:17   0   10G  0 part
```
 
- Beispielausgabe für **fdisk -l**:

```output
Disk /dev/sdb: 10 GiB, 10737418240 bytes, 20971520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0x961fcb1c
 
Device     Boot Start      End  Sectors Size Id Type
/dev/sdb1  *     2048 20971486 20969439  10G 83 Linux
 
 
Disk /dev/sda: 2.5 GiB, 2621440000 bytes, 5120000 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: dos
Disk identifier: 0xaf5119d2
 
Device     Boot Start     End Sectors  Size Id Type
/dev/sda1  *     2048 5117951 5115904  2.5G 83 Linux
```

> [!primary]
>
> Die folgenden Codeabschnitte dienen nur der Veranschaulichung und basieren auf der Beispielausgabe oben. Sie müssen die Anweisungen an Ihre eigene Konfiguration anpassen und die Werte mit Ihren tatsächlich vorhandenen Disk- und Volume-Bezeichnern ersetzen.
>

In diesem Beispiel ist die primäre Disk (10 GB) "sdb". Unsere Daten in `/` befinden sich also auf der Partition `/dev/sdb1`. (Wobei es sich bei "sda" um die Disk des Rescue-Modus handelt und bei "sda1" um die Rescue-Primärpartition, die auf `/` gemountet ist.)

Wir mounten die Systempartition in den Ordner `/mnt` und überprüfen dessen Inhalt:

```shell-session
root@rescue:~# mount /dev/sdb1 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Um im Rescue-Modus Dienste auf dem System zu starten müssen auch folgende Partitionen gemountet werden:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/sdb1 on /mnt type ext4 (rw,relatime,data=ordered)
udev on /mnt/dev type devtmpfs (rw,nosuid,relatime,size=990236k,nr_inodes=247559,mode=755)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

Fahren Sie fort mit der Wiederherstellung der Datenbank im [Abschnitt weiter unten](#databases).
 
### Zugriff auf Ihre Daten mit einem Dedicated Server (Software-RAID-Konfiguration) <a name="dedicated"></a>

Identifizieren Sie zuerst den Mountpunkt, der das `/` des Systems enthält.

Verwenden Sie hierzu die Befehle `lsblk` und `fdisk -l`.

Ausgabebeispiel:

```shell-session
root@rescue:~# fdisk -l
```
```output
Disk /dev/sda: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 5E158D46-2A45-42C9-8089-697BE070F669
 
Device          Start        End    Sectors    Size Type
/dev/sda1          40       2048       2009 1004.5K BIOS boot
/dev/sda2        4096    1050623    1046528    511M Linux RAID
/dev/sda3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sda4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sda5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/sdb: 1.8 TiB, 2000398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 8039EE93-AB98-4EA1-B316-74EE89EF5EB6
 
Device          Start        End    Sectors    Size Type
/dev/sdb1          40       2048       2009 1004.5K BIOS boot
/dev/sdb2        4096    1050623    1046528    511M Linux RAID
/dev/sdb3     1050624   42008575   40957952   19.5G Linux RAID
/dev/sdb4    42008576 3905972223 3863963648    1.8T Linux RAID
/dev/sdb5  3905972224 3907018751    1046528    511M Linux swap
 
Disk /dev/md4: 1.8 TiB, 1978349322240 bytes, 3863963520 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md3: 19.5 GiB, 20970405888 bytes, 40957824 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disk /dev/md2: 511 MiB, 535756800 bytes, 1046400 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
```

> [!primary]
>
> Die folgenden Codeabschnitte dienen nur der Veranschaulichung und basieren auf der Beispielausgabe oben. Sie müssen die Anweisungen an Ihre eigene Konfiguration anpassen und die Werte mit Ihren tatsächlich vorhandenen Disk- und Volume-Bezeichnern ersetzen.
>

In diesem Beispiel befinden sich unsere Daten in `/` auf dem Volume `/dev/md3`.

Wir mounten die Systempartition in den Ordner `/mnt` und überprüfen dessen Inhalt:

```shell-session
root@rescue:~# mount /dev/md3 /mnt
root@rescue:~# ls /mnt
bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@rescue:~#
```

Um im Rescue-Modus Dienste auf dem System zu starten müssen auch folgende Partitionen gemountet werden:

```shell-session
root@rescue:~# mount -o rbind /dev /mnt/dev
root@rescue:~# mount -t proc proc /mnt/proc
root@rescue:~# mount -t sysfs sys /mnt/sys
 
root@rescue:~# mount | grep /mnt
/dev/md3 on /mnt type ext4 (rw,relatime,data=ordered)
devtmpfs on /mnt/dev type devtmpfs (rw,relatime,size=16412720k,nr_inodes=4103180,mode=755)
tmpfs on /mnt/dev/shm type tmpfs (rw,nosuid,nodev)
devpts on /mnt/dev/pts type devpts (rw,nosuid,noexec,relatime,gid=5,mode=620,ptmxmode=000)
hugetlbfs on /mnt/dev/hugepages type hugetlbfs (rw,relatime)
mqueue on /mnt/dev/mqueue type mqueue (rw,relatime)
proc on /mnt/proc type proc (rw,relatime)
sys on /mnt/sys type sysfs (rw,relatime)
```

 
### Abruf der Datenbanken <a name="databases"></a>

Alle notwendigen Partitionen wurden in den vorherigen Schritten gemountet. Um fortzufahren, müssen Befehle auf dem System selbst ausgeführt werden können. Verwenden Sie hierzu den Befehl `chroot`:

```shell-session
root@rescue:~# chroot /mnt/
root@rescue:/#
```

Ab jetzt werden alle Befehle, die Sie eingeben, direkt auf Ihrem System ausgeführt statt in der temporären Umgebung des Rescue-Modus.

Wir können nun den Dienst `mysql` starten:

```shell-session
root@rescue:/# service mysql start
[ ok ] Starting MariaDB database server: mysqld ..
root@rescue:/#
```

Verwenden Sie den Befehl `mysqldump`, um die Datenbank als Datei zu speichern:

```shell-session
root@rescue:/# mysqldump -u root -p scarif > /home/dump.sql
Enter password:
root@rescue:/#
```

In diesem Fall ist `root` der `mysql` Benutzer, der sich in die Datenbank einloggt. Mit der Option `-p` können Sie das Passwort von `root` direkt eingeben und die abgerufene Datenbank hat den Namen `scarif`.

Die Datenbank-Datei wird dann im Verzeichnis `/home` unter dem Namen `dump.sql` abgelegt.

Sie haben auch die Möglichkeit, alle Datenbanken auf einmal zu sichern:

```shell-session
root@rescue:/# mysqldump -u root -p --all-databases > alldb.sql
Enter password:
root@rescue:/#
```

Die Anzeige des Inhalts von `/home` zeigt die beiden Datenbank-Dateien an, die mit den zuvor eingegebenen Befehlen erstellt wurden:

```shell-session
root@rescue:/# ls /home
alldb.sql  dump.sql
```

Bei korrupten Tabellen kann dieser Befehl zur Reparatur verwendet werden:

```shell-session
root@rescue:/# mysqlcheck -u root -p Password_Root_MySQL --auto-repair --optimize --all-databases
```

Vom Ordner `/home` aus können Sie nun Ihre Backup-Dateien an einen Remote-Server senden. In diesem Beispiel verwenden wir für den Dateitransfer das Tool `scp`: 

```shell-session
root@rescue:/# scp -P SSH_Port_Number dump.sql user@IP_address:/home/backup
```

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.