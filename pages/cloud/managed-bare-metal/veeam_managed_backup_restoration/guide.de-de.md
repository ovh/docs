---
title: Backups über die OVHcloud API wiederherstellen
slug: veeam-backup-restoration
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/veeam-backup-restoration/'
excerpt: Erfahren Sie hier, wie Sie Veeam Managed Backups über die OVHcloud API wiederherstellen
section: OVHcloud Dienste und Optionen
order: 06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 29.03.2021**

## Ziel

**Diese Anleitung erklärt, wie Sie Sie Backups über die OVHcloud API identifizieren und wiederherstellen.**

## Voraussetzungen

- Sie können sich in der [OVHcloud API-Konsole](https://api.ovh.com/) einloggen.
- Sie haben [Veeam Managed Backup](https://docs.ovh.com/gb/en/managed-bare-metal/veeam-backup-as-a-service/) für Ihre Hosted Private Cloud aktiviert.

## In der praktischen Anwendung

Falls notwendig, lesen Sie zunächst unsere Anleitung zur [OVHcloud API](https://docs.ovh.com/de/api/first-steps-with-ovh-api/).

### Schritt 1: Einen Backup-Report erstellen

Zuerst müssen Sie die wiederherzustellenden Backups ermitteln.

Loggen Sie sich auf [https://api.ovh.com/](https://api.ovh.com/) ein und verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/generateReport

Geben Sie die Variablen an:

- serviceName: die Referenz Ihrer PCC als `pcc-XX-XX-XX-XX`
- datacenterId: die ID des Rechenzentrums, in dem Ihre Veeam Managed Backup Lösung aktiviert ist

Dieser Aufruf generiert einen Backup-Report. Er wird per E-Mail an den Administrator des Hosted Private Cloud Dienstes versandt.
<br>Die E-Mail enthält folgende Elemente:

- VM Name
- Durchgeführte Backups (BackupJobName)
- Größe jedes Backups
- **Storage-Ordner (BackupRepository)**
- Letzter Wiederherstellungspunkt

![E-Mail](images/backup-report-email2.png){.thumbnail}

Achten Sie auf den Storage-Ordner (BackupRepository), mit dem Sie die Sicherungen im nächsten Schritt wiederherstellen können.

### Schritt 2: Backups wiederherstellen

> [!warning]
>
> Bevor Sie die Wiederherstellung auf Ihrem Datastore starten, vergewissern Sie sich, dass dieser über eine ausreichende Speicherkapazität verfügt, um alle wiederzuherstellenden Daten aufzunehmen.
>
> Ist das nicht der Fall, werden Sie per E-Mail darüber informiert und die Operation wird abgebrochen.

Dieser API-Aufruf wird die letzten gültigen Wiederherstellungspunkte jedes im Storage-Ordner enthaltenen Backups wiederherstellen:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/backup/batchRestore
>

Geben Sie die Variablen an:

- serviceName: die Referenz Ihrer PCC als `pcc-XX-XX-XX-XX`
- datacenterId: die ID des Rechenzentrums, in dem Ihre Veeam Managed Backup Lösung aktiviert ist
- backupJobName (optional): den Namen eines Backups (erhalten in Schritt 1) in der Form `pcc-XXX-XXX-XXX-XXX_vm-XXX`, wenn Sie nur eine einzige VM wiederherstellen möchten.
- backupRepositoryName: Name des in Schritt 1 erhaltenen "BackupRepository"

Sobald die Wiederherstellung abgeschlossen ist, finden Sie in Ihrem vSphere Interface die VMs, die den wiederhergestellten Sicherungen entsprechen.
<br>Um sie zu identifizieren, enthalten ihre Namen einen *BatchRestore*-Suffix sowie den Zeitstempel der Wiederherstellung.
<br>Die VMs werden abgeschaltet wiederhergestellt. Sie müssen deshalb noch eingeschaltet werden.

![vSphere](images/vcenter2.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
