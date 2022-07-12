---
title: Zusätzliche Festplatte konfigurieren
excerpt: Erfahren Sie hier, wie Sie auf einem VPS zusätzlichen Speicherplatz hinzufügen und konfigurieren
slug: config-additional-disk-vps
section: Backup Optionen
order: 3
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 24.02.2021**

## Ziel

Bei den VPS von OVHcloud können Sie einen sicheren Speicherplatz als Dienstoption hinzufügen. Dieser Storage ist von der internen Speicherkapazität der VPS Lösung getrennt, was ihn zu einem sicheren Ort für Ihre Backups oder andere statische Daten macht. Die zusätzliche Festplatte kann nur von der IP-Adresse des Servers aus abgerufen werden, und die darauf enthaltenen Daten bleiben davon unberührt, selbst wenn der VPS neu installiert ist oder Datenverlust erleiden muss.

**Diese Anleitung erklärt, wie Sie die Option für zusätzliche Festplatten aktivieren und den Speicherplatz zur Verwendung mit dem VPS konfigurieren.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Administrativer Zugriff via SSH oder RDP auf Ihren VPS.

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server in `Virtual Private Server`{.action} aus.

### Zusätzliche Festplatte bestellen

Nachdem Sie Ihren VPS ausgewählt haben, klicken Sie im horizontalen Menü auf den Tab `Zusätzliche Festplatte`{.action}. Klicken Sie auf `Zusätzliche Festplatte bestellen`{.action} und wählen Sie in der angezeigten Auswahl eine Festplattengröße aus.

![adddiskvps](images/disk_vps01.png){.thumbnail}

Beachten Sie die Preisinformationen und klicken Sie dann auf `Bestellen`{.action}. Sie werden durch den Bestellprozess geführt und erhalten eine Bestätigungsmail, sobald die Festplatte installiert ist.

### Neuen Speicherplatz mounten

> [!warning]
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Sie sind also verantwortlich für das ordnungsgemäße Funktionieren dieser Systeme.
>
>Sollten Sie Schwierigkeiten haben, diese Aktionen durchzuführen, kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder besprechen Sie das Problem mit unserer User Community unter https://community.ovh.com/en/. OVHcloud kann Ihnen hierzu keinen technischen Support bieten.
>

#### Auf einem Linux VPS

Wenn eine GNU/Linux-Distribution auf Ihrem VPS installiert ist, stellen Sie eine SSH-Verbindung zu Ihrem Server über das Kommandozeilenterminal oder eine SSH-Client-Anwendung her.

Die folgenden Beispiele nehmen an, dass Sie als Benutzer mit erhöhten Rechten eingeloggt sind.

Sie können folgenden Befehl verwenden, um den Namen des neuen Geräts zu überprüfen:

```
$ lsblk

sda       8:0    0   80G  0 disk
├─sda1    8:1    0 79.9G  0 part /
├─sda14   8:14   0    4M  0 part
└─sda15   8:15   0  106M  0 part /boot/efi
sdb       8:16   0   50G  0 disk
```

In diesem Beispiel wird die zusätzliche Festplatte als `sdb` bezeichnet.

Führen Sie `fdisk` aus, um eine Partition auf der Festplatte zu erstellen. Wenn Sie dazu aufgefordert werden, geben Sie `n` für eine neue Partition ein und akzeptieren Sie die nachfolgenden Standardwerte, indem Sie Enter ("↩") drücken. Verwenden Sie zuletzt den Befehl `w`, um die Änderungen auf die Festplatte zu schreiben.

```
$ sudo fdisk /dev/sdb

Welcome to fdisk (util-linux 2.34).
Changes will remain in memory only, until you decide to write them.
Be careful before using the write command.
```

```
Command (m for help): n

Partition type
   p   primary (0 primary, 0 extended, 4 free)
   e   extended (container for logical partitions)

Select (default p):
```

```
Partition number (1-4, default 1): 

First sector (2048-104857599, default 2048):
Last sector, +/-sectors or +/-size{K,M,G,T,P} (2048-104857599, default 104857599):

Created a new partition 1 of type 'Linux' and of size 50 GiB.
```

```
Command (m for help): w

The partition table has been altered.
Calling ioctl() to re-read partition table.
Syncing disks.
```

Nun, da die `sdb1` Partition erstellt wurde, können Sie diese mit ext4 formatieren:

```
$ sudo mkfs.ext4 /dev/sdb1

Creating filesystem with 13106944 4k blocks and 3276800 inodes
Filesystem UUID: a667d351-cf36-49f2-94b4-daf03d7a86a6
Superblock backups stored on blocks:
32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208,
4096000, 7962624, 11239424

Allocating group tables: done                           
Writing inode tables: done                           
Creating journal (65536 blocks): done
Writing superblocks and filesystem accounting information: done  
```

Im letzten Schritt wird die Festplatte gemountet:

```
$ sudo mkdir /mnt/disk
$ sudo mount /dev/sdb1 /mnt/disk
```

Anhand der letzten Zeile sehen Sie, dass die zusätzliche Festplatte nun auf `/mnt/disk` gemountet ist:

```
$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            1.9G     0  1.9G   0% /dev
tmpfs           385M  1.1M  384M   1% /run
/dev/sda1        78G  2.4G   75G   4% /
tmpfs           1.9G     0  1.9G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           1.9G     0  1.9G   0% /sys/fs/cgroup
/dev/sda15      105M  3.9M  101M   4% /boot/efi
/dev/loop1       68M   68M     0 100% /snap/lxd/18150
/dev/loop3       32M   32M     0 100% /snap/snapd/10707
/dev/loop4       56M   56M     0 100% /snap/core18/1944
/dev/loop5       70M   70M     0 100% /snap/lxd/19188
tmpfs           385M     0  385M   0% /run/user/0
/dev/loop6       56M   56M     0 100% /snap/core18/1988
/dev/loop2       32M   32M     0 100% /snap/snapd/11036
tmpfs           385M     0  385M   0% /run/user/1000
/dev/sdb1        49G   53M   47G   1% /mnt/disk
```

> [!primary]
>
Die vorherige Anpassung ist nicht persistent, da die Festplatte wieder getrennt wird, wenn der VPS neu gestartet wird. Zur Automatisierung des Mountvorgangs muss die Datei `fstab` geändert werden.
>

Ermitteln Sie zunächst die UUID (Block-ID) des Geräts:


```
$ sudo blkid
/dev/sda1: LABEL="cloudimg-rootfs" UUID="e616a2cd-3c02-4c79-9823-9b1bb5c13b26" TYPE="ext4" PARTUUID="a44089a3-f407-41e6-b7a5-1ed7672cef20"
/dev/sda15: LABEL_FATBOOT="UEFI" LABEL="UEFI" UUID="4411-1580" TYPE="vfat" PARTUUID="e1746ac7-80c1-4859-9b4d-fa6ce11b3ae9"
/dev/loop1: TYPE="squashfs"
/dev/loop2: TYPE="squashfs"
/dev/loop3: TYPE="squashfs"
/dev/loop4: TYPE="squashfs"
/dev/loop5: TYPE="squashfs"
/dev/loop6: TYPE="squashfs"
/dev/sda14: PARTUUID="7d19a2c9-75df-443e-8301-0bb85931df7d"
/dev/sdb1: UUID="87571b68-30e1-498b-a64c-49ec5cd4f31c" TYPE="ext4" PARTUUID="c965cbdf-01"
```

Öffnen Sie `/etc/fstab` mit einem Texteditor:

```
$ sudo nano /etc/fstab
```

Fügen Sie die folgende Zeile zur Datei hinzu und ersetzen Sie die UUID mit Ihrer zuvor ausgelesenen:

```
UUID=87571b68-30e1-498b-a64c-49ec5cd4f31c /mnt/disk ext4 nofail 0 0
```

Speichern Sie und verlassen Sie den Editor. Nun sollte die Festplatte nach jedem Neustart automatisch gemountet werden.

#### Auf einem Windows VPS

Wenn ein Windows Betriebssystem auf Ihrem VPS installiert ist, stellen Sie eine Remotedesktop-Verbindung (RDP) mit Ihrem Server her.

Wenn Sie eingeloggt sind, klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie das `Festplattenverwaltungstool`{.action}.

![winmountdiskvps](images/disk_vps_win01.png){.thumbnail}

Die neue Festplatte wird als unbekanntes Volume mit nicht zugewiesenem Speicherplatz angezeigt.

![winmountdiskvps](images/disk_vps_win02.png){.thumbnail}

Wird die Festplatte als Offline angezeigt, muss sie zuerst initialisiert werden. Sie können hierzu das [Windows GUI](#initDiskManagement) oder das [DISKPART Tool](#initDiskpart) verwenden. Falls nicht, [formatieren Sie nun die Festplatte in der Datenträgerverwaltung](#formatDiskManagement).

##### **Initialisierung der Festplatte in der Datenträgerverwaltung** <a name="initDiskManagement"></a>

 Klicken Sie mit der rechten Maustaste auf die Festplatte und wählen Sie `Online`{.action}. 

![winmountdiskvps](images/disk_vps_win03.png){.thumbnail}

 Klicken Sie mit der rechten Maustaste auf die Festplatte und wählen Sie dieses Mal `Festplatte initialisieren`{.action}.

![winmountdiskvps](images/disk_vps_win04.png){.thumbnail}

Wählen Sie `MBR`{.action} im neuen Fenster aus und klicken Sie auf `OK`{.action}.

![winmountdiskvps](images/disk_vps_win05.png){.thumbnail}

##### **Initialisierung der Festplatte mit DISKPART** <a name="initDiskpart"></a>

 Klicken Sie mit der rechten Maustaste auf das `Startmenü`{.action} und öffnen Sie `Ausführen`{.action}.

![winmountdiskvps](images/disk_vps_win06.png){.thumbnail}

Geben Sie `cmd` ein und klicken Sie auf `OK`{.action}, um die Kommandozeilenanwendung zu öffnen.

![winmountdiskvps](images/disk_vps_win07.png){.thumbnail}

In der Eingabeaufforderung starten Sie DISKPART:

```
C:\> diskpart
```

Verwenden Sie folgende Befehle in DISKPART, um die Festplatte als "Online" zu konfigurieren:

```
DISKPART> san

SAN Policy : Offline Shared
```

```
DISKPART> san policy = OnlineAll

DiskPart successfully changed the SAN policy for the current operating system.

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

##### **Festplatte in der Datenträgerverwaltung formatieren** <a name="formatDiskManagement"></a>

Klicken Sie in der `Datenträgerverwaltung`{.action} mit der rechten Maustaste auf die neue Festplatte und wählen Sie `Neues einfaches Volume...`{.action}.

![winmountdiskvps](images/disk_vps_win08.png){.thumbnail}

Klicken Sie im Assistenten auf `Weiter`{.action}, um die Größe des Volumes festzulegen. Sie sollte standardmäßig auf das Maximum festgelegt sein. Klicken Sie auf `Weiter`{.action}, um fortzufahren.

![winmountdiskvps](images/disk_vps_win09.png){.thumbnail}

Akzeptieren Sie den neuen Laufwerksbuchstaben oder wählen Sie einen anderen aus und klicken Sie dann auf `Weiter`{.action}.

![winmountdiskvps](images/disk_vps_win10.png){.thumbnail}

Benennen Sie das Volume (optional) und bestätigen Sie die Formatierungsoptionen, indem Sie auf `Weiter`{.action} klicken.

![winmountdiskvps](images/disk_vps_win11.png){.thumbnail}

Klicken Sie im letzten Fenster auf `Beenden`{.action}, um die Festplatte zu formatieren. Es wird nach der Operation als Laufwerk im Dateiexplorer verfügbar sein.

### Zusätzliche Festplatte kündigen

Im Tab `Start`{.action} scrollen Sie nach unten bis zum Bereich **Zusammenfassung der Optionen**. Klicken Sie `...`{.action} neben "Zusätzliche Festplatten". Klicken Sie Kontextmenü auf `Kündigen`{.action}.

![Kündigung der zusätzlichen Festplatte](images/disk_vps02.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
