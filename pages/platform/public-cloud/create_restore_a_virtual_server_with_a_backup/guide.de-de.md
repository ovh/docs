---
title: 'Einen virtuellen Server aus einem Backup erstellen/wiederherstellen'
slug: einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen
excerpt: 'Erfahren Sie, wie Sie das Backup einer Instanz erstellen oder wiederherstellen'
---

**Letzter Stand 22.11.2019**

## Einleitung
Möglicherweise müssen Sie Ihre Instanz mittels eines Backup wiederherstellen, beispielsweise im Falle eines Fehlers in der Konfiguration Ihrer Instanz. 

Dasselbe Backup kann auch dazu verwendet werden, eine neue Instanz zu erstellen, die erste zu duplizieren und einen Lastverteilung durchzuführen oder sogar eine hohe Verfügbarkeit bereitzustellen.

In diesem Handbuch wird erläutert, wie Sie mithilfe Ihrer Backups Ihre Instanzen neu erstellen, duplizieren oder wiederherstellen können.

## Voraussetzungen
- Verfügbares Backup einer Public Cloud-Instanz. Konsultieren Sie zu diesem Zweck [das Handbuch zum Erstellen eines Backup](https://docs.ovh.com/de/public-cloud/ein_backup_einer_instanz_erstellen/).
- Anschluss an ein OVHcloud Kundencenter.

## Beschreibung

### Eine Instanz aus einem Backup erstellen

Verbinden Sie sich mit dem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}, und wählen Sie dann `Public Cloud`{.action}. Wählen Sie danach den Bereich `Instanz-Backup`{.action}.

Klicken Sie dann auf die`...`{.action}rechts von der gewählten Instanz und anschließend auf  `Ein Backup erstellen`{.action}.

![public-cloud-instance-backup](images/restorebackup1.png){.thumbnail}

Die Seite zum Erstellen einer Instanz wird angezeigt.

![public-cloud-instance-backup](images/restorebackup2.png){.thumbnail}

Einige Elemente sind vordefiniert:

* Lokalisierung: Ihre Instanz wird im selben Datacenter wie Ihr Backup erstellt.
* Image: es entspricht Ihrem Backup.
* Modelle: nur diejenigen, die Ihr Bild aufnehmen können, sind abhängig von Ihrem Kontingent verfügbar.

Weitere Informationen zur Erstellung einer Instanz finden Sie in [dieser Anleitung](https://docs.ovh.com/de/public-cloud/erstellung_einer_instanz_im_ovh_kundencenter/).

Um eine Instanz in einem anderen Datacenter als dem des Backups zu erstellen, muss sie in den entsprechenden Bereich übertragen werden. Lesen Sie dann die [Anleitung zum Erstellen eines Backups einer Instanz von einem Datacenter in ein anderes](https://docs.ovh.com/de/public-cloud/instanz-backup-in-anderes-rechenzentrum-uebertragen/).

### Eine Instanz mithilfe eines Backups wiederherstellen

Um eine Instanz aus einem Backup wiederherzustellen, wählen Sie dieses Mal das Menü `Instanz`{.action} und klicken Sie auf die Schaltfläche `...`{.action} rechts neben der Instanz, die Sie wiederherstellen möchten, und anschließend auf `Bearbeiten`{.action}.

![public-cloud-instance-backup](images/restorebackup3.png){.thumbnail}

Die Seite zum bearbeiten der Instanz wird dann angezeigt. Sie können jetzt Folgendes ändern:

* Name der Instanz
* Abbildung der Instanz.
* Modell der Instanz
* Abrechnung der Instanz (ausschließlich vom Modell „Zeitfenster“ zum Modell „Monatlich“).

Wählen Sie dann im Bereich `Abbildung `{.action} das Backup aus, das wiederhergestellt werden soll.

![public-cloud-instance-backup](images/restorebackup4.png){.thumbnail}


> [!alert]
>
>Gemäß den Angaben in der gelben Box, die Ihnen nachstehend erläutert werden, können keine Daten wiederhergestellt werden, die nach der Erstellung dieses Backups hinzugefügt wurden.
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.