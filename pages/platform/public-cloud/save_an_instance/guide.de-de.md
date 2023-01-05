---
title: Backup einer Instanz erstellen
excerpt: Erfahren Sie hier, wie Sie eine Public Cloud Instanz in Ihrem OVHcloud Kundencenter sichern
slug: ein_backup_einer_instanz_erstellen
section: Verwaltung im OVHcloud Kundencenter
order: 1
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 04.01.2023**

## Ziel

Sie können ein einzelnes Backup einer Instanz erstellen oder einen Zeitplan konfigurieren, um Backups Ihrer Instanzen zu automatisieren. Diese Backups können verwendet werden, um Ihre Instanz auf einen früheren Zustand wiederherzustellen oder um eine neue, identische Instanz zu erstellen.

**Diese Anleitung erklärt, wie Sie manuelle und automatische Backups einer Public Cloud Instanz erstellen.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Backup einer Instanz erstellen

> [!warning]
> Diese Option ist für Metal Instanzen nur über einen **Cold Snapshot** verfügbar. Die Metal-Instanz wird in den Rescue-Modus versetzt, und sobald das Backup abgeschlossen ist, wird die Instanz im normalen Modus neu gestartet.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie im linken Menü auf `Instances`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Backup erstellen`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Geben Sie auf der folgenden Seite eine Bezeichnung für das Backup ein. Nehmen Sie die Abrechnungsinformationen zur Kenntnis und klicken Sie auf `Bestätigen`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Sobald das Backup bereit ist, wird es im Bereich `Instance Backup`{.action} angezeigt.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Automatisches Backup einer Instanz erstellen

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Automatisches Backup erstellen`{.action}.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Sie können dann folgende Backup-Einstellungen konfigurieren:

#### **Workflow** 

Derzeit existiert nur ein Workflow. Er erstellt ein Backup für die Instanz und das primäre Volume.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **Ressource** 

Sie können die zu sichernde Instanz auswählen.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Scheduling** 

Sie können eine personalisierte Backup-Planung festlegen oder eine der Standardrotationen auswählen:

- Tägliche Sicherung mit Speicherung der letzten 7 Backups
- Tägliche Sicherung mit Speicherung der letzten 14 Backups

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Name** 

Geben Sie einen Namen für die Planung des automatischen Backups ein. Nehmen Sie die Abrechnungsinformationen zur Kenntnis und erstellen Sie das Scheduling, indem Sie auf den Button `Erstellen`{.action} klicken.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Verwaltung der Backups und Zeitpläne

Zeitplanungen können im Bereich `Workflow Management`{.action} Ihres Public Cloud Kundencenters erstellt und entfernt werden.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Die Backups Ihrer Instanzen werden im Bereich `Instance Backup`{.action} in Ihrem Public Cloud Kundencenter verwaltet.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

Erfahren Sie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen/), wie Sie Sicherungen verwenden, um Instanzen zu klonen oder wiederherzustellen.

## Weiterführende Informationen

[Verwenden von Backups zum Erzeugen oder Wiederherstellen von Instanzen](https://docs.ovh.com/de/public-cloud/einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.