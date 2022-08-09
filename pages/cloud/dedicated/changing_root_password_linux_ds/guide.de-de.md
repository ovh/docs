---
title: 'Root-Passwort auf einem Dedicated Server ändern'
slug: root-passwort-aendern-linux-dedicated-server
excerpt: 'Erfahren Sie hier, wie Sie das administrative Passwort Ihres Dedicated Servers ändern'
section: 'Server Management'
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 16.02.2021**

## Ziel

Es kann notwendig werden, das Root-Passwort (oder das Passwort Ihres Admin/Sudo-Benutzers) in Ihrem GNU/Linux-Betriebssystem zu ändern.
<br>Es sind zwei Szenarien möglich:

- Sie können sich noch über SSH verbinden
- Sie können sich nicht mehr über SSH verbinden, da Sie Ihr Passwort verloren haben

**Diese Anleitung erklärt, wie Sie Ihr Administratorpasswort je nach Ausgangslage ändern.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) (für den Rescue-Modus).
- Sie verfügen über die nach der Installation per E-Mail erhaltenen Login-Daten (sofern diese noch gültig sind).

> [!warning]
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Sie sind also verantwortlich für das ordnungsgemäße Funktionieren dieser Systeme.
>
>Sollten Sie Schwierigkeiten haben, diese Aktionen durchzuführen, kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder besprechen Sie das Problem mit unserer User Community unter https://community.ovh.com/en/. OVHcloud kann Ihnen hierzu keinen technischen Support bieten.
>

## In der praktischen Anwendung

### Passwort ändern, wenn Sie noch Zugriff haben (Benutzer sudo oder root)

Verbinden Sie sich via SSH mit Ihrem Server. Wenn nötig, wechseln Sie zum Root-Benutzer:

```
~$ sudo su -
~#
```

Um das Passwort des aktuellen Benutzers zu ändern, geben Sie `passwd` ein. Geben Sie anschließend Ihr neues Passwort zweimal ein:

```
~# passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Bitte beachten Sie, dass bei einer GNU/Linux-Distribution die Zeichen Ihres Passworts **nicht angezeigt werden**, wenn Sie sie tippen.
>

### Passwort ändern, wenn Sie es verloren haben

#### Schritt 1: Systempartition identifizieren

Nachdem Sie Ihren Server im [Rescue-Modus](../ovh-rescue/) neu gestartet haben, müssen Sie die Systempartition identifizieren. Führen Sie hierzu folgenden Befehl aus:

```
# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders, total 41943040 sectors
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders, total 41943040 sectors
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Im obenstehenden Beispiel heißt die Systempartition /dev/hda1.

> [!primary]
>
> Wenn Ihr Server über eine RAID-Konfiguration verfügt, müssen Sie Ihr RAID-Volume mounten.
>
> - mit einem Software-RAID: `/dev/mdX`.
> - mit einem Hardware RAID: `/dev/sdX`.
>

#### Schritt 2: Systempartition mounten

Nachdem Sie die Systempartition ermittelt haben, können Sie diese mit folgendem Befehl einhängen:

```
# mount /dev/hda1 /mnt/
```

#### Schritt 3: Root-Partition bearbeiten

Standardmäßig ist die Systempartition für die Bearbeitung gesperrt. Öffnen Sie diese für Schreibzugriff über folgenden Befehl:

```
# chroot /mnt
```

#### Schritt 4: Root-Passwort ändern

Ändern Sie im letzten Schritt Ihr Passwort mit folgendem Befehl:

```
# passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Nachdem Sie diesen Schritt durchgeführt haben, ändern Sie den Netboot-Modus Ihres Servers wieder auf `Von Festplatte booten`{.action}, und starten Sie ihn neu. Ihr Root-Passwort wurde nun geändert.

## Weiterführende Informationen

[Rescue-Modus aktivieren und verwenden](../ovh-rescue/)

[Absichern eines Servers](../dedizierten-server-sichern/)

[Administrator-Passwort eines Windows Servers ändern](../windows-admin-passwort-aendern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
