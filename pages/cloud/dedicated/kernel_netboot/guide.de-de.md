---
title: Seinen Server auf einem OVHcloud Kernel starten
slug: kernel-netboot
excerpt: Hier finden Sie die nächsten Schritte, um Ihren Server über das Netzwerk auf einem OVHcloud Kernel zu starten
section: Fortgeschrittene Nutzung
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 25.02.2022**

## Ziel

Netboot ist ein von OVHcloud kostenlos angebotener Dienst, mit dem der dedizierte Server von OVHcloud auf einem bereits kompilierten Kernel gestartet werden kann. Sobald Ihr Server so konfiguriert ist, lädt er den Kernel automatisch über das Netzwerk. Sie müssen nichts anderes konfigurieren. Diese Methode erlaubt es Ihnen auch, Ihren Kernel ganz einfach zu aktualisieren, da OVHcloud die neueste Kernversion nach dessen Verfügbarkeit kompiliert und auf dem Netboot zur Verfügung stellt.

## Voraussetzungen

- Sie verfügen über einen [dedizierten Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben [Zugriff auf das OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Ihren Server vom Network Modus aus starten

> [!primary]
>
> Dieser Teil ist für Linux-Server bestimmt. Für Windows, FreeBSD und Virtualisierungsdistributionen sind nur Boot-Modus auf der Festplatte oder im Rescue-Modus möglich.
>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). und gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie Ihren Server in `Dedicated Server`{.action}.

Suchen Sie "Boot" im Bereich **Allgemeine Informationen** und klicken Sie auf `...`{.action} und dann auf `Bearbeiten`{.action}. 

![Netboot](images/netboot_2022.png){.thumbnail}

Wählen Sie `Im Netzwerk-Modus booten`{.action}.

![Netboot](images/netboot_005.png){.thumbnail}

Wählen Sie den verfügbaren Kernel (Kernel) und geben Sie dann die Root Device (Partition, in der sich die Wurzelpartition Ihres Servers befindet) ein.

Um den Root Device Ihres Servers zu bestimmen, lesen Sie die Datei /etc/fstab Ihres Servers.

SSH:

```sh
cat /etc/fstab

/dev/sda1 / ext3 errors=remount-ro 0 1
/dev/sda2 /home ext3 defaults,grpquota,usrquota 1 2
/dev/sda3 swap swap defaults 0 0
  proc /proc proc defaults 0 0
sysfs /sys sysfs defaults 0 0
shm /dev/shm tmpfs nodev,nosuid,noexec 0 0
```

In unserem Beispiel wird Root Device /dev/sda1 sein.

Klicken Sie auf `Weiter`{.action} und `Bestätigen`{.action}.

Wenn die Änderung abgeschlossen ist, klicken Sie auf `...`{.action}. rechts neben "Status" im Bereich mit dem Namen **Dienststatus**. Klicken Sie auf `Neu starten`{.action}, damit der Netboot-Modus aktiviert wird.

![Netboot](images/netboot_004.png){.thumbnail}

## Fortgeschrittene Optionen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
