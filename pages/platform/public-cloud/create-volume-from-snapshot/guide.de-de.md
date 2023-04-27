---
title: Zusätzliche Festplatten aus einem Backup erstellen
slug: create-volume-from-backup
excerpt: Erfahren Sie hier, wie Sie zusätzliche Festplatten aus einem Volume Snapshot erzeugen
section: Storage
order: 4
updated: 2021-04-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 06.04.2021**

## Ziel

Sie können basierend auf dem Backup einer zusätzlichen Festplatte weitere Festplatten für Ihre Public Cloud Instanzen erstellen.

Dies kann in folgenden Fällen nützlich sein:

- Wenn Sie die zusätzlichen Festplattendaten wiederherstellen möchten.
- Wenn Sie einen hochverfügbaren und leistungsfähigen Speicherplatz für Ihre Daten benötigen.
- Wenn Sie Ihre Daten auf eine andere Instanz übertragen möchten.

**Diese Anleitung erklärt, wie Sie ein Festplatten-Backup verwenden, um einer Ihrer Instanzen eine zusätzliche Festplatte hinzuzufügen.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud).
- Sie verfügen über einen Volume Snapshot in der gleichen OpenStack-Region.
- Sie haben administrativen Zugriff (Root) über SSH oder RDP auf Ihre Instanzen.

## In der praktischen Anwendung

### Festplatte aus einem Backup erstellen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie im Bereich `Public Cloud`{.action}  das betreffende Public Cloud Projekt aus. Klicken Sie dann im linken Menü auf `Volume Snapshot`{.action} unter `Storage`.

Klicken Sie rechts neben dem Backup Ihrer Wahl auf den Button `...`{.action} und dann auf `Volume erstellen`{.action}.

![volume](images/volume01.png){.thumbnail}

Legen Sie dann den Namen und die Kapazität dieser neuen Festplatte fest und klicken Sie auf `Volume erstellen`{.action}.

![volume](images/volume02.png){.thumbnail}

Die Erstellung der Festplatte kann abhängig von deren Größe einige Minuten in Anspruch nehmen.

### Festplatte mit einer Instanz verbinden

Sobald die Festplatte erstellt ist, können Sie sie mit einer Instanz verbinden. Klicken Sie hierzu auf `Block Storage`{.action} in der linken Navigationsleiste unter `Storage`.

Klicken Sie rechts neben dem Volume Ihrer Wahl auf den Button `...`{.action} und dann auf `Mit der Instanz verbinden`{.action}.

![volume](images/volume03.png){.thumbnail}

Wählen Sie nun die Instanz aus und klicken Sie auf `Bestätigen`{.action}, um die Festplatte anzuhängen.

![volume](images/volume04.png){.thumbnail}

Der Vorgang zur Anbindung der Festplatte an Ihre Instanz beginnt und kann einige Minuten dauern.

![volume](images/volume05.png){.thumbnail}

> [!warning]
Achten Sie darauf, den aktuell angezeigten Bereich des Kundencenters während der Festplattenbindung nicht zu verlassen. Der laufende Prozess könnte unterbrochen werden.
>

Sobald der Vorgang abgeschlossen ist, können Sie für die nächsten Schritte unsere Konfigurationsanleitung verwenden, für [Linux](../erstellen_zustzliche_festplatte_public_cloud/#unter-linux)- oder [Windows](../erstellen_zustzliche_festplatte_public_cloud/#unter-windows)-Instanzen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
