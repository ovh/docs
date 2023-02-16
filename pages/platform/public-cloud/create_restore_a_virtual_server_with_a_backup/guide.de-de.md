---
title: 'Verwenden von Backups zum Erzeugen oder Wiederherstellen von Instanzen'
slug: einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen
excerpt: 'Erfahren Sie hier, wie Sie Instanzen aus Backups oder wiederherstellen'
section: 'Verwaltung im OVHcloud Kundencenter'
updated: 2021-03-19
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 19.03.2021**

## Ziel

Das OVHcloud Kundencenter erlaubt es Ihnen, mit wenigen Klicks [Backups Ihrer Instanzen zu erstellen](../ein_backup_einer_instanz_erstellen/) und diesen Prozess auch zu automatisieren.
Sie können diese Instanzsicherungen für zwei grundlegende Zwecke verwenden:

- Instanz auf der Grundlage des Backups erstellen, um die originale Instanz zu duplizieren; zum Beispiel, wenn Sie eine Infrastruktur zur Lastverteilung (Loadbalancing) konfigurieren.
- Instanz mithilfe eines Backups wiederherstellen; zum Beispiel, wenn aufgrund kürzlicher Änderungen kritische Konfigurationsdaten der Instanz beschädigt wurden.

**Diese Anleitung erklärt, wie Sie Backups verwenden, um Ihre Instanzen zu duplizieren oder wiederherzustellen.**

## Voraussetzungen

- Sie verfügen über ein Backup einer [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/instance-backup/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Eine Instanz aus einem Backup erstellen

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie links im Menü auf `Instance Backup`{.action}.

![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}

Klicken Sie dann auf `...`{.action} in der Zeile der gewünschten Instanz und anschließend auf `Instanz erstellen`{.action}.

Es wird eine verkürzte Version der Seite zur Instanz-Erstellung angezeigt, auf der Sie bestimmte Optionen ändern können.

![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}

Einige Elemente sind vordefiniert:

- **Standort**: Ihre Instanz wird im gleichen Rechenzentrum wie Ihr Backup erstellt.
- **Image**: Das Image entspricht dem des Backups.
- **Modell**: Abhängig von Ihrer Quota sind nur diejenigen Modelle verfügbar, die mit dem Image kompatibel sind.

![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}

Legen Sie den Namen der neuen Instanz, den SSH-Schlüssel, das vRack und den Abrechnungszeitraum fest und klicken Sie auf den Button `Instanz erstellen`{.action}.

Weitere Informationen zur Erstellung einer Instanz finden Sie in [dieser Anleitung](../erstellung_einer_instanz_im_ovh_kundencenter/).

> [!primary]
>
> Um eine Instanz in einem anderen Rechenzentrum als dem des Backups zu erstellen, muss sie in die entsprechende Region migriert werden. Lesen Sie dazu die [Anleitung zum Transfer eines Backups](../instanz-backup-in-anderes-rechenzentrum-uebertragen/).
>

### Eine Instanz mithilfe eines Backups wiederherstellen

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie dann `Public Cloud`{.action}. Klicken Sie links im Menü auf `Instances`{.action}.

![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}

Klicken Sie dann auf `...`{.action} in der Zeile der Instanz, die Sie wiederherstellen möchten, und klicken Sie auf `Bearbeiten`{.action}.

Die Seite zum Bearbeiten der Instanz öffnet sich. Sie können darin Folgendes ändern:

- Name der Instanz
- Image der Instanz
- Modell der Instanz
- Abrechnung der Instanz (nur von `stündlich` auf `monatlich`).

Führen Sie die notwendigen Änderungen durch und wählen Sie den Tab `Backups`{.action} im Bereich **Image** aus.

![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}

Wählen Sie ein Backup aus der Liste der verfügbaren Backups aus. Klicken Sie auf `Image ändern`{.action}, wenn Sie sicher sind, dass Sie das aktuelle Image mit dem Backup ersetzen möchten.

Die Instanz hat den Status `Reinstallation`, bis der Vorgang abgeschlossen ist. Es kann notwendig sein, die Seite im Browser zu aktualisieren, um den aktuellen Zustand zu sehen.

> [!warning]
>
> Wie in der Warnmeldung angegeben, gehen alle Daten verloren, die nach der Sicherungserstellung hinzugefügt wurden.
>

## Weiterführende Informationen

[Erste Schritte](../public-cloud-erste-schritte/)

[Backup einer Instanz erstellen](../ein_backup_einer_instanz_erstellen/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
