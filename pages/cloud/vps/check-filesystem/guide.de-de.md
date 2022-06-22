---
title: Dateisystem auf einem VPS überprüfen
excerpt: Erfahren Sie hier, wie Sie ein Dateisystem im Rescue-Modus auf Fehler überprüfen
slug: check-file-system-vps
section: Diagnose & Rescue Modus
order: 5
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 20.04.2021**

## Ziel

**Diese Anleitung erklärt, wie Sie das Dateisystem eines OVHcloud VPS mithilfe des Rescue-Modus diagnostizieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der OVHcloud Community unter https://community.ovh.com/en/ (Englisch). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. 
>

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

#### VPS mit GNU/Linux

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig, verwenden Sie unsere Anleitung zum [Rescue-Modus](../rescue/).

Bei älteren VPS Diensten werden die Partitionen im Rescue-Modus automatisch erstellt. Sie können dies mit folgendem Befehl überprüfen:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

Die Beispielausgabe zeigt einen vorhandenen Mountpoint. Dies bedeutet, dass die zu überprüfende Partition zuerst ausgehängt werden muss:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Wenn Ihr VPS aus der aktuellen Produktreihe stammt, sollte die Spalte `MOUNTPOINT` leer sein und Sie können den vorherigen Schritt ignorieren.

Sie können nun die Partition mit "fsck" überprüfen:

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Wenn das Ergebnis leer ist, bedeutet dies normalerweise, dass das Dateisystem fehlerfrei ist. Sie können jedoch eine Überprüfung erzwingen:

```bash
$ fsck /dev/sdb1 -f
```

### VPS mit Windows

Die obigen Anweisungen gelten in der Regel nicht für einen Windows VPS, da die Überprüfung des Dateisystems nicht für NTFS funktioniert. Sie können jedoch eine NTFS-Konsistenzüberprüfung der Partitionen durchführen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig, verwenden Sie unsere Anleitung zum [Rescue-Modus](../rescue/).

Bei älteren VPS Diensten werden die Partitionen im Rescue-Modus automatisch erstellt. Sie können dies mit folgendem Befehl überprüfen:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

Die Beispielausgabe zeigt einen vorhandenen Mountpoint. Dies bedeutet, dass die zu überprüfende Partition zuerst ausgehängt werden muss:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Wenn Ihr VPS aus der aktuellen Produktreihe stammt, sollte die Spalte `MOUNTPOINT` leer sein und Sie können den vorherigen Schritt ignorieren.

Der folgende Befehl überprüft die Kohärenz der Partition und versucht, gefundene Fehler zu beheben:

```bash
$ ntfsfix /dev/sdb1
```

## Weiterführende Informationen

[Rescue-Modus für einen VPS aktivieren](../rescue/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
