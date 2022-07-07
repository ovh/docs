---
title: Dedicated Server auf einem OVHcloud Kernel starten
slug: kernel-netboot
excerpt: Erfahren Sie hier, wie Sie Ihren Server über das Netzwerk auf einem OVHcloud Kernel starten
section: Fortgeschrittene Nutzung
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 25.02.2022**

## Ziel

Netboot ist ein von OVHcloud kostenlos angebotener Dienst, mit dem dedizierte Server von OVHcloud auf einem bereits kompilierten Kernel gestartet werden kann. Sobald Ihr Server derart konfiguriert ist, lädt er den Kernel automatisch über das Netzwerk. Sie müssen nichts weiter konfigurieren.

Diese Methode erlaubt es auch, Ihren Kernel ganz einfach zu aktualisieren, da OVHcloud die neueste Kernelversion bei Verfügbarkeit kompiliert und auf dem Netboot zur Verfügung stellt.

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Einen Server im Network Modus starten

> [!primary]
>
> Dieses Feature ist für Linux-Server bestimmt. Für Windows, FreeBSD und Virtualisierungsdistributionen sind nur Disk-Boot oder Rescue-Modus möglich.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server unter `Dedicated Server`{.action} aus.

Suchen Sie "Boot" im Bereich **Allgemeine Informationen**, klicken Sie auf `...`{.action} und dann auf `Bearbeiten`{.action}. 

![Netboot](images/netboot_2022.png){.thumbnail}

Wählen Sie `Im Netzwerk-Modus booten`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Wählen Sie einen der verfügbaren Kernel und geben Sie dann Ihre "Root Device" (Partition, in der sich die Root-Partition Ihres Servers befindet) ein.

Um die "Root Device" Ihres Servers zu bestimmen, lesen Sie die Datei /etc/fstab aus.

Verbinden Sie sich über SSH und geben Sie den folgenden Befehl ein:

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

In diesem Beispiel ist /dev/sda1 "Root Device".

Klicken Sie auf `Weiter`{.action} und `Bestätigen`{.action}.

Wenn die Änderung abgeschlossen ist, klicken Sie auf `...`{.action} rechts neben "Status" im Bereich **Dienststatus**. Klicken Sie auf `Neu starten`{.action}, damit der Netboot-Modus aktiviert wird.

![Netboot](images/netboot_004.png){.thumbnail}

## Fortgeschrittene Optionen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
