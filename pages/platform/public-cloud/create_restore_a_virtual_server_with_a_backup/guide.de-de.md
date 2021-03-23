---
title: 'Einen virtuellen Server aus einem Backup erstellen/wiederherstellen'
slug: einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen
excerpt: 'Erfahren Sie, wie Sie das Backup einer Instanz erstellen oder wiederherstellen'
section: 'Verwaltung im OVHcloud Kundencenter'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzter Stand 19.03.2021**

## Ziel

Das OVHcloud Kundencenter erlaubt es Ihnen, [mit wenigen Klicks Backups Ihrer](../ein_backup_einer_instanz_erstellen/) Instanzen zu erstellen und diesen Prozess zu automatisieren.
Möglicherweise müssen Sie Ihre Instanz mittels eines Backup wiederherstellen, beispielsweise im Falle eines Fehlers in der Konfiguration Ihrer Instanz. Sie können diese Instanz-Backups aus zwei Hauptgründen verwenden:

- Instanz auf der Grundlage des Backups erstellen, um die ursprüngliche Instanz zu duplizieren. Zum Beispiel, wenn Sie eine Infrastruktur zur Lastverteilung (Loadbalancing) konfigurieren.
- Instanz mithilfe eines Backups wiederherstellen. Zum Beispiel, wenn durch aktuelle Änderungen kritische Konfigurationen auf der Instanz abgebrochen wurden.

**Hier erfahren Sie, wie Sie Ihre Backups verwenden, um Ihre Instanzen zu duplizieren oder wiederherzustellen.**

## Voraussetzungen

- Verfügbares Backup einer Public Cloud-Instanz. Konsultieren Sie zu diesem Zweck [das Handbuch zum Erstellen eines Backup](../ein_backup_einer_instanz_erstellen/).
- Sie sind in Ihrem [OVHcloud Kundencenter]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### Eine Instanz aus einem Backup erstellen

Verbinden Sie sich mit dem [OVHcloud Kundencenter]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, und wählen Sie dann `Public Cloud`{.action}. Klicken Sie dann im `linken Menü auf`{.action} Instance Backup.

![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}

Klicken Sie dann auf die `...`{.action} rechts von der gewählten Instanz und anschließend auf  `Ein Backup erstellen`{.action}.

Es wird eine Kurzversion der Seite zur Erstellung der Instanz angezeigt, in der Sie bestimmte Optionen ändern können.

![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}

Einige Elemente sind vordefiniert:

- **Standort**: Ihre Instanz wird im gleichen Datacenter wie Ihr Backup erstellt.
- **Image**: es entspricht Ihrem Backup.
- **Modell**: Abhängig von Ihrem Quota sind nur diejenigen verfügbar, die Ihr Image aufnehmen können.

![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}

Legen Sie den Namen der neuen Instanz, den SSH-Schlüssel, das vRack und den Abrechnungszeitraum fest und klicken Sie auf den Button `Instanz erstellen`{.action}.

Weitere Informationen zur Erstellung einer Instanz finden Sie in [dieser Anleitung](../erstellung_einer_instanz_im_ovh_kundencenter/).

> [!primary]
>
> Um eine Instanz in einem anderen Datacenter als dem des Backups zu erstellen, muss sie in den entsprechenden Bereich übertragen werden. Lesen Sie dann die [Anleitung zum Erstellen eines Backups einer Instanz von einem Datacenter in ein anderes](../instanz-backup-in-anderes-rechenzentrum-uebertragen/).
>

### Eine Instanz mithilfe eines Backups wiederherstellen

Verbinden Sie sich mit dem [OVHcloud Kundencenter]( https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, und wählen Sie dann `Public Cloud`{.action}. Klicken Sie dann `links`{.action} im Menü auf Instanzen.

![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}

Klicken Sie auf den Button `...`{.action}. rechts neben der Instanz, die Sie wiederherstellen möchten, und klicken Sie auf `Editer`{.action}.

Die Seite zum bearbeiten der Instanz wird dann angezeigt. Sie können jetzt Folgendes ändern:

- Name der Instanz
- Abbildung der Instanz.
- Modell der Instanz
- Abrechnung der Instanz (ausschließlich vom Modell „Zeitfenster“ zum Modell „Monatlich“).

Führen Sie die notwendigen Änderungen durch und wählen Sie den Tab `Backups`{.action} im Bereich "Image"aus.

![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}

Wählen Sie ein Backup aus der Liste der verfügbaren Backups aus. Klicken Sie auf `Image ändern`{.action}, wenn Sie sicher sind, dass Sie das aktuelle Image durch das Backup ersetzen möchten.

Die Instanz hat den Status `Reinstallation`, bis der Vorgang abgeschlossen ist. Es kann notwendig sein, die Seite im Browser zu aktualisieren, um den aktuellen Zustand zu sehen.

> [!warning]
>
> Gemäß den Angaben in der gelben Box, die Ihnen nachstehend erläutert werden, können keine Daten wiederhergestellt werden, die nach der Erstellung dieses Backups hinzugefügt wurden.
>

## Weiterführende Informationen

[Erstellung und Verbindung zu einer ersten Public Cloud Instanz](../die_ersten_schritte_mit_ihrer_public_cloud_instanz/)

[Backup einer Instanz erstellen](../ein_backup_einer_instanz_erstellen/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
