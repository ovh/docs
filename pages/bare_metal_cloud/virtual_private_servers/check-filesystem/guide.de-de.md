---
title: Dateisystem auf einem VPS überprüfen
excerpt: Erfahren Sie hier, wie Sie ein Dateisystem im Rescue-Modus auf Fehler überprüfen
updated: 2023-09-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

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

### VPS mit GNU/Linux

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig, verwenden Sie unsere Anleitung zum [Rescue-Modus](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Anschließend können Sie die verfügbaren Disks mit diesem Befehl überprüfen:

```bash
lsblk
```

Die Partition für den Rescue-Modus (`sda1` in diesem Beispiel) ist im Verzeichnis `/` gemountet, und die Disk des VPS (hier: `sdb`) sollte keinen Mountpunkt haben.

Beispiel:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

Wenn Ihr Ergebnis ähnlich aussieht wie die Ausgabe oben und die Spalte `MOUNTPOINT` in der entsprechenden Zeile (`sdb1`) leer ist, können Sie mit dem [nächsten Schritt](#fscheck) fortfahren.

Wenn Ihr Ergebnis jedoch zeigt, dass es einen Mountpunkt für die VPS-Partition gibt, muss sie zuerst ausgehängt werden (*unmount*).

Beispiel:

```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

Im obigen Beispiel ist die Partition `sdb1` unter `/mnt/` gemountet. Damit die Partition überprüft werden kann, darf diese Partition nicht gemountet sein.

Um die Partition auszuhängen, verwenden Sie den folgenden Befehl:

```bash
umount /dev/partition_name
```

In dieser Beispielkonfiguration wäre der Befehl:

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Sie können nun die Partition mit "fsck" überprüfen:

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Wenn das Ergebnis leer ist, bedeutet dies normalerweise, dass das Dateisystem fehlerfrei ist. Sie können jedoch eine Überprüfung erzwingen:

```bash
fsck /dev/sdb1 -f
```

### VPS mit Windows

Die obigen Anweisungen gelten in der Regel nicht für einen Windows VPS, da die Überprüfung des Dateisystems nicht für NTFS funktioniert. Sie können jedoch eine NTFS-Konsistenzüberprüfung der Partitionen durchführen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig, verwenden Sie unsere Anleitung zum [Rescue-Modus](/pages/bare_metal_cloud/virtual_private_servers/rescue).

Anschließend können Sie die verfügbaren Disks und ihre Größe mit diesem Befehl überprüfen:

```bash
lsblk
```

Die Partition für den Rescue-Modus (`sda1` in diesem Beispiel) ist im Verzeichnis `/` gemountet, und die Disk des VPS (hier: `sdb`) sollte keinen Mountpunkt haben.

Beispiel:

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

Wenn Ihr Ergebnis ähnlich aussieht wie die Ausgabe oben und die Spalte `MOUNTPOINT` in der entsprechenden Zeile leer ist, können Sie mit dem [nächsten Schritt](#fscheckwin) fortfahren.

Wenn Ihr Ergebnis jedoch zeigt, dass es einen Mountpunkt für die VPS-Partition gibt, muss sie zuerst ausgehängt werden (*unmount*).

Beispiel:

```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

Im obigen Beispiel ist die betroffene Partition `sdb2` unter `/mnt/` gemountet. Damit die Partition überprüft werden kann, darf diese Partition nicht gemountet sein.

Um die Partition auszuhängen, verwenden Sie den folgenden Befehl:

```bash
umount /dev/partition_name
```

In dieser Beispielkonfiguration wäre der Befehl:

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

Der folgende Befehl überprüft die Kohärenz der Partition und versucht, gefundene Fehler zu beheben:


```bash
ntfsfix /dev/partition_name
```

In dieser Beispielkonfiguration wäre der Befehl:

```bash
ntfsfix /dev/sdb2
```

## Weiterführende Informationen

[Rescue-Modus für einen VPS aktivieren](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
