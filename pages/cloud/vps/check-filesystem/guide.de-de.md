---
title: Dateisystem auf einem VPS überprüfen
excerpt: Hier erfahren Sie, wie Sie Fehler in einem Dateisystem im Rescue-Modus suchen.
slug: check-file-system-vps
section: Diagnose und Rescue Modus
order: 5
---

**Letzte Aktualisierung am 20.04.2021**

## Ziel

**Hier erfahren Sie, wie Sie Dateisysteme auf OVHcloud VPS mit dem Rescue-Modus diagnostizieren.**

> [!warning]
>OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Sie sind also verantwortlich für das ordnungsgemäße Funktionieren dieser Systeme.
>
>Sollten Sie Schwierigkeiten haben, diese Aktionen durchzuführen, kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder tauschen Sie sich mit unserer User Community aus <https://community.ovh.com/en/>. OVHcloud kann Ihnen diesbezüglich keinen technischen Support bieten.
>

## Voraussetzungen

- einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem OVHcloud Account
- über Zugang zum [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verfügen

## In der praktischen Anwendung

#### VPS GNU/Linux

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig, lesen Sie unsere Anleitung zum [Rescue-Modus](../rescue/).

Bei den alten VPS Reihen werden Ihre Partitionen automatisch im Rescue-Modus erstellt. Sie können dies mit folgendem Befehl überprüfen:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

Das Ergebnisbeispiel zeigt einen vorhandenen Mountpunkt an. Dies bedeutet, dass die zu überprüfende Partition zuerst demontiert werden muss:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Wenn Ihr VPS neu ist, sollte die Spalte `MOUNTPOINT` leer sein und Sie können den vorherigen Schritt ignorieren.

Sie können nun die Partition mit "fsck" überprüfen:

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Wenn das Ergebnis leer ist, bedeutet dies normalerweise, dass das Dateisystem sauber ist. Sie können jedoch eine Überprüfung erzwingen:

```bash
$ fsck /dev/sdb1 -f
```

### Windows-VPS

Die obigen Anweisungen gelten in der Regel nicht für einen VPS unter Windows, da die Überprüfung des Dateisystems nicht für NTFS sorgt. Sie können jedoch eine NTFS-Konsistenzüberprüfung der Partitionen durchführen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig, lesen Sie unsere Anleitung zum [Rescue-Modus](../rescue/).

Bei den alten VPS Reihen werden Ihre Partitionen automatisch im Rescue-Modus erstellt. Überprüfen Sie dies mit folgendem Befehl:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

Das Ergebnisbeispiel zeigt die bestehenden Mountpunkte an. Dies bedeutet, dass die zu überprüfende Partition zuerst demontiert werden muss:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Wenn Ihr VPS neu ist, sollte die Spalte `MOUNTPOINT` leer sein und Sie können den vorherigen Schritt ignorieren.

Mit dem folgenden Befehl wird die Kohärenz der Partition überprüft und versucht, eventuelle Fehler zu beheben:

```bash
$ ntfsfix /dev/sdb1
```

## Weiterführende Informationen

[Rescue-Modus für einen VPS aktivieren](../rescue/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
