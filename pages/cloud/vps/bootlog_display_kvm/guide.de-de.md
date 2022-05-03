---
title: Boot-Logs mit KVM anzeigen
slug: bootlog-in-kvm
excerpt: 'Erfahren Sie hier, wie Sie die Boot-Logs eines VPS zum Troubleshooting aktivieren'
section: Diagnose & Rescue Modus
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 05.07.2021**

## Ziel

Wenn Ihr VPS nicht mehr antwortet, können Sie diesen in der Regel immer noch über die [KVM-Konsole](../verwendung_von_kvm_fur_vps/) über Ihr Kundencenter erreichen. Die schnellste Methode zur Diagnose des Problems ist die Überprüfung der Boot-Logs des Servers. Die GRUB-Konfiguration muss jedoch geändert werden, damit diese Logs angezeigt werden. 

> [!primary]
>
> Bitte beachten Sie, dass KVM Ihnen in bestimmten Umgebungen keine relevanten Informationen liefert, da die Startsequenz in der seriellen Konsole angezeigt wird oder GRUB im *silent mode* konfiguriert ist.
>

**Diese Anleitung erklärt, wie Sie Boot-Logs aktivieren, die bei der Diagnose eines VPS hilfreich sein können.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen spezialisierten Dienstleister zu kontaktieren oder Ihre Fragen an die OVHcloud Community unter <https://community.ovh.com/en/> zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
> 

## Voraussetzungen

- Sie haben einen OVHcloud [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!warning]
>
> Diese Änderungen werden die Konfiguration von GRUB ändern. Achten Sie darauf, vor jeder Änderung Backups aller wichtigen Daten durchzuführen; OVHcloud kann nicht für Datenschäden oder -verlust verantwortlich gemacht werden.
>

Wenn Sie noch regulär Zugriff auf Ihren VPS über SSH haben, können Sie zu [Schritt 6 übergehen](#step6).

### Schritt 1: VPS im Rescue-Modus neu starten

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den Server im Rescue-Modus neu. Wenn nötig lesen Sie [unsere Anleitung zum Rescue-Modus](../rescue/).

### Schritt 2: Durchführung der ersten Überprüfung

Bei den älteren VPS Reihen werden Ihre Partitionen im Rescue-Modus automatisch erstellt. Sie können folgende Befehle verwenden, um dies zu überprüfen und den Mountpoint zu identifizieren:

#### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

#### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

Das vorstehende Beispielergebnis zeigt, dass die Systempartition auf **/mnt/sdb1** eingehängt ist. (Die primäre Disk ist **sdb**, während **sda** die Rescue-Platte ist und **sda1** die primäre Rettungspartition, die auf **/** eingehängt ist).

Wenn Ihr VPS zu den [**aktuellen VPS-Reihen**](https://www.ovhcloud.com/de/vps/) gehört, wird kein automatischer Mount durchgeführt und die Spalte "MOUNTPOINT" sollte leer sein. In diesem Fall gehen Sie direkt [zu Schritt 4](#step4).

### Schritt 3: Partition aushängen (nur für ältere VPS Reihen)

Auf einem VPS der älteren Reihen ist im Rescue-Modus die primäre Disk bereits gemountet. Sie muss daher zuerst 'unmountet' werden, bevor Schritt 4 durchgeführt wird:

```sh
~$ umount /dev/sdb1
```

### Schritt 4: Partition mit den geeigneten Einstellungen mounten <a name="step4"></a>

Wenn Ihr VPS zu den [**aktuellen VPS-Reihen**](https://www.ovhcloud.com/de/vps/) gehört, überprüfen Sie zunächst, dass der Mount-Ordner erstellt wurde:

```sh
~$ mkdir -p /mnt/sdb1
```

Geben Sie folgende Befehle ein, um die Partition mit den entsprechenden Einstellungen zu mounten:

```sh
~$ mount /dev/sdb1 /mnt/sdb1
~$ mount -t proc none /mnt/sdb1/proc
~$ mount -o bind /dev /mnt/sdb1/dev
~$ mount -t sysfs none /mnt/sdb1/sys/
```

Die Systempartition ist nun für die Verwendung mit dem Befehl `chroot` eingehängt, um Aktionen auszuführen, die Zugriff auf die Verzeichnisse `sys`, `dev` und `proc` erfordern.

### Schritt 5: CHROOT-Befehl verwenden, um Ihre Systemdateien zu konfigurieren

Sie müssen nun auf die GRUB-Dateien Ihres Systems zugreifen und diese bearbeiten. Verwenden Sie hierzu den Befehl `chroot`:

```sh
~$ chroot /mnt/sdb1
```

Von hier an werden alle Befehle, die Sie eingeben, auf Ihren VPS statt auf die temporäre Rescue-Umgebung angewendet.

### Schritt 6: Die GRUB-Konfiguration ändern <a name="step6"></a>

#### **Debian 8 oder höher und Ubuntu 18 oder höher**

Erstellen Sie eine Sicherungskopie der Konfigurationsdatei:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Um mit der KVM-Konsole auf die Boot-Logs zuzugreifen, stellen Sie sicher, dass Sie in der Datei `/etc/default/grub` folgenden Wert haben:

```sh
GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"
```

Fehlt diese Zeile oder weicht sie ab, ändern Sie die Datei mit einem Editor und speichern Sie diese.

Verwenden Sie anschließend folgenden Befehl, um die GRUB-Konfigurationsdatei zu regenerieren (die Änderungen werden für den nächsten Neustart gespeichert):

```sh
~$ update-grub
```

#### **CentOS 7 oder höher (grub2)**

Erstellen Sie eine Sicherungskopie der Konfigurationsdatei:

```sh
~$ cp /etc/default/grub /root/grub.backup
```

Um mit der KVM-Konsole auf die Boot-Logs zuzugreifen, stellen Sie sicher, dass Sie in der Datei `/etc/default/grub` folgende Werte haben:

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="console=ttyS0,115200n8 no_timer_check net.ifnames=0 crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Fehlen oder unterscheiden sich diese Zeilen, bearbeiten Sie die Datei mit einem Editor und speichern Sie die Änderungen.

Verwenden Sie anschließend folgenden Befehl, um die GRUB-Konfigurationsdatei zu regenerieren (die Änderungen werden für den nächsten Neustart gespeichert):

```sh
~$ grub2-mkconfig -o "$(readlink /etc/grub.cfg)"
```

Wenn Sie die Änderungen vorgenommen haben, starten Sie Ihren VPS in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) im 'normalen' Modus neu. Die Boot-Logs sollten nun bei Verwendung der [KVM-Konsole](../verwendung_von_kvm_fur_vps/) angezeigt werden.

## Weiterführende Informationen

[Verwendung der KVM-Konsole für VPS](../verwendung_von_kvm_fur_vps/)

[Rescue-Modus für einen VPS aktivieren](../rescue/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
