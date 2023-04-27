---
title: "Die Größe einer zusätzlichen Disk erweitern"
excerpt: "Erfahren Sie hier, wie Sie die Kapazität eines zusätzlichen Volumes vergrößern und die Hauptpartition anpassen"
slug: vps-increase-size-additional-disk
section: "Backup Optionen"
updated: 2023-03-14
order: 4
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 14.03.2023**

## Ziel

Wenn Sie die maximale Kapazität Ihrer zusätzlichen Disk erreicht haben, können Sie Speicherplatz hinzufügen, indem Sie deren Größe erweitern. 

**Diese Anleitung erklärt, wie Sie die Größe einer zusätzlichen Disk erweitern und die Hauptpartition entsprechend erweitern.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Kunden-Account.
- Sie haben eine [zusätzliche Disk konfiguriert](https://docs.ovh.com/de/vps/config-additional-disk-vps/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben administrativen Zugriff auf Ihren VPS über SSH (Linux) oder RDP (Windows).

## In der praktischen Anwendung

In den folgenden Schritten wird vorausgesetzt, dass Sie bereits eine zusätzliche Disk erstellt haben, wie [in unserer Anleitung beschrieben](https://docs.ovh.com/de/vps/config-additional-disk-vps/).

### Größe der Disk ändern <a name="extend"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Bare Metal Cloud`{.action}. Wählen Sie Ihren Server unter `Virtual Private Server`{.action} aus.

Klicken Sie im Rahmen **Zusammenfassung der Optionen** auf den Button `...`{.action} im Bereich `Zusätzliche Festplatten`{.action}. Wählen Sie `Festplattengröße erhöhen`{.action} aus.
 
![size-disk-vps](images/increase_disk_vps01.png){.thumbnail}

Wählen Sie im neuen Fenster die gewünschte Größe aus und klicken Sie dann auf `Erweitern`{.action}.

![size-disk-vps](images/increase_disk_vps02.png){.thumbnail}

Es erscheint eine Nachricht, um Ihre Anfrage zu bestätigen. Klicken Sie auf den Link innerhalb der Nachricht und folgen Sie dem Bestellprozess. (Es ist auch möglich, dass sich automatisch ein neuer Browser-Tab für die Bestellung geöffnet hat.)

![size-disk-vps](images/increase_disk_vps03.png){.thumbnail}

Die Erhöhung der Disk-Kapazität wird nach der Bestätigung der Zahlung einige Minuten dauern. Sie können den Fortschritt im Tab `Zusätzliche Festplatte`{.action} überprüfen: Wird die ausgewählte neue Größe angezeigt, ist die Disk bereit.

![size-disk-vps](images/increase_disk_vps04.png){.thumbnail}

> [!warning]
>
> Sichern Sie Ihre Daten auf der zusätzlichen Disk, bevor Sie fortfahren.
>

### Erweiterung der Partition

> [!warning]
>Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Denken Sie daran, diese Aktionen nötigenfalls an Ihre Situation anzupassen.
>
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder stellen Sie Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. 
>


#### Auf einem Linux VPS

> [!primary]
>
> In diesem Abschnitt wird ein allgemeiner Ansatz für die notwendigen Schritte beschrieben, basierend auf einem Ubuntu Server Betriebssystem. Manche Befehle erfordern möglicherweise Anpassungen zu der von Ihnen verwendeten Distribution.
>

Wenn eine GNU/Linux-Distribution auf Ihrem VPS installiert ist, stellen Sie eine SSH-Verbindung zu Ihrem Server über die Terminal-Befehlszeile oder eine SSH-Client-Anwendung her.

Die folgenden Beispiele setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen verbunden sind.

Stellen Sie sicher, dass die Disk nicht gemountet ist:

```bash
ubuntu@server:~$ sudo umount /mnt/disk
```

Ersetzen Sie `/mnt/disk` mit Ihrem eigenen Mountpfad zur zusätzlichen Disk, falls erforderlich.

Prüfen Sie die Bezeichnungen von Disk und Partitionen:

```bash
ubuntu@server:~$ lsblk
NAME    MAJ:MIN RM   SIZE RO TYPE MOUNTPOINTS
loop0     7:0    0  63.2M  1 loop /snap/core20/1623
loop1     7:1    0  63.3M  1 loop /snap/core20/1828
loop2     7:2    0 111.9M  1 loop /snap/lxd/24322
loop3     7:3    0  49.8M  1 loop /snap/snapd/18357
loop4     7:4    0   103M  1 loop /snap/lxd/23541
sda       8:0    0   160G  0 disk
├─sda1    8:1    0 159.9G  0 part /
├─sda14   8:14   0     4M  0 part
└─sda15   8:15   0   106M  0 part /boot/efi
sdc       8:32   0   100G  0 disk
└─sdc1    8:33   0    50G  0 part 
```

In diesem Beispiel heißt die Disk `sdc` und hat nach dem im [ersten Teil dieser Anleitung beschriebenen Upgrade](#extend) die korrekte neue Festplattengröße von 100 GB. Die Partition `sdc1` existiert auf der Disk und verwendet 50 GB.

Erstellen Sie die Partition neu auf der Disk, indem Sie `fdisk` ausführen:

```bash
ubuntu@server:~$ sudo fdisk /dev/sdc
```

Geben Sie folgende Befehle in der Eingabeaufforderung von `fdisk` ein:

```console
Welcome to fdisk (util-linux 2.37.2).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.

Command (m for help): d
Selected partition 1
Partition 1 has been deleted.

Command (m for help): n
```

Bestätigen Sie alle Standardwerte mit `Enter`:

```console
Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)
Select (default p):

Using default response p.
Partition number (1-4, default 1):
First sector (2048-209715199, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-209715199, default 209715199):

Created a new partition 1 of type 'Linux' and of size 100 GiB.
```

Geben Sie `n` und zuletzt `w` ein:

```console
Partition #1 contains a ext4 signature.

Do you want to remove the signature? [Y]es/[N]o: n

Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Überprüfen Sie die Partition und erweitern Sie das Dateisystem:

```bash
ubuntu@server:~$ sudo e2fsck -f /dev/sdc1
e2fsck 1.46.5 (30-Dec-2021)
/dev/sdc1: recovering journal
Pass 1: Checking inodes, blocks, and sizes
Pass 2: Checking directory structure
Pass 3: Checking directory connectivity
Pass 4: Checking reference counts
Pass 5: Checking group summary information
/dev/sdc1: 11/3276800 files (0.0% non-contiguous), 284558/13106944 blocks
```
```bash
ubuntu@server:~$ sudo resize2fs /dev/sdc1
resize2fs 1.46.5 (30-Dec-2021)
Resizing the filesystem on /dev/sdc1 to 26214144 (4k) blocks.
The filesystem on /dev/sdc1 is now 26214144 (4k) blocks long.
```

Mounten Sie abschließend die Disk:

```bash
ubuntu@server~$ sudo mount /dev/sdc1 /mnt/disk/
```

Partition 1 verwendet nun die volle Größe der Disk.

```bash
ubuntu@server:~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
tmpfs           776M  992K  776M   1% /run
/dev/sda1       155G  2.2G  153G   2% /
tmpfs           3.8G     0  3.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
/dev/sda15      105M  5.3M  100M   5% /boot/efi
tmpfs           776M  4.0K  776M   1% /run/user/1000
/dev/sdc1        99G   24K   94G   1% /mnt/disk
```

#### Auf einem Windows VPS

Stellen Sie eine RDP-Verbindung (Remote Desktop) zu Ihrem Windows-VPS her.

Wenn Sie eingeloggt sind, klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie die `Datenträgerverwaltung`{.action}.

![winmountdiskvps](images/increase_disk_vps05.png){.thumbnail}

Auf der [erweiterten Disk](#extend) wird die zusätzliche Kapazität als nicht zugewiesener Speicherplatz angezeigt. Klicken Sie mit der rechten Maustaste auf das Volume Ihrer zusätzlichen Disk und wählen Sie `Volume erweitern`{.action} im Kontextmenü.

![winmountdiskvps](images/increase_disk_vps06.png){.thumbnail}

Klicken Sie im Assistenten auf `Weiter`{.action}, um fortzufahren.

Wenn nötig können Sie den Speicherplatz in diesem Schritt ändern. Klicken Sie auf `Weiter`{.action}.

![winmountdiskvps](images/increase_disk_vps07.png){.thumbnail}

Klicken Sie auf `Beenden`{.action}, um den Vorgang abzuschließen.

Das erweiterte Volume beinhaltet nun den zusätzlichen Speicherplatz.

![winmountdiskvps](images/increase_disk_vps08.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
