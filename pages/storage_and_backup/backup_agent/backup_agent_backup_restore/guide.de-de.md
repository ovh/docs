---
title: "Backup Agent - Verwalten Sie Ihre Backups und Wiederherstellungen"
excerpt: "Erfahren Sie, wie Sie Ihre Daten auf Bare Metal-Servern mit Backup Agent sichern und wiederherstellen können"
updated: 2026-01-09
---

## Ziel

Erfahren Sie, wie Sie Ihre Daten auf Bare Metal-Servern mit Backup Agent sichern und wiederherstellen können.

## Voraussetzungen

- Zugriff auf das [OVHcloud Kundencenter](/links/manager).
- Ein Bare Metal-Server mit installiertem Backup Agent. Lesen Sie unsere Anleitung "[So konfigurieren Sie Ihr erstes Backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)", um weitere Informationen zu erhalten.

## In der praktischen Anwendung

### Erstellen Sie ein Backup für Ihren Server

Dies beinhaltet das Hinzufügen Ihres Servers zu Ihrem Backup Agent, das Herunterladen des Agents und die Installation auf Ihrem Server.

Melden Sie sich an bei dem [OVHcloud Kundencenter](/links/manager), gehen Sie zur `Bare Metal Cloud`{.action} Bereich und wählen Sie `Backup-Agent`{.action}.  

![Backup Agent Menü](images/01-backup-agent-menu.png){.thumbnail}

Klicken Sie auf Ihren vspc-tenant im Bereich `Dienste`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Gehen Sie zum Bereich `Agenten`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Einen Server hinzufügen`{.action}.

![Backup Agent](images/01-backup-agent-agent.png){.thumbnail}

Wählen Sie Ihren Server und Ihr Betriebssystem aus.

![Backup Agent Add Server 01](images/01-backup-agent-add-server-01.png){.thumbnail}

![Backup Agent Add Server 02](images/01-backup-agent-add-server-02.png){.thumbnail}

### Backup

Sie haben zwei Optionen, um Backups zu erstellen: Automatisches Backup und Manuelles Backup.

#### Automatisches Backup

Das automatische Backup ist in die Backup-Richtlinie integriert, die wir für Ihren Backup Agent anwenden.

Dieses Backup erstellt ein vollständiges Backup Ihres Servers, das an Ihren Remote-Storage-Punkt gesendet wird.

> [!warning]
>
> Dieser Vorgang erfolgt zwischen 22:00 Uhr und 6:00 Uhr (MEZ für Europa – EST für Kanada und Asien).

> [!primary]
>
> Sie können dieses automatische Backup weder ändern noch deaktivieren.

Sie können den Erfolg dieses Backups überprüfen anhand:

- Des täglichen Backup-Berichts.
- Des Dashboards "Backup Jobs" der Veeam Service Provider Console.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Manuelles Backup

Falls erforderlich, können Sie ein manuelles Backup auslösen.

Dies erstellt ebenfalls ein vollständiges Backup Ihres Servers und sendet es immer an Ihren Remote-Storage-Punkt.

Um ein manuelles Backup zu erstellen, öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal-Server:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Klicken Sie auf die Schaltfläche `Backup Now`{.action}, um ein Backup zu starten:

![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}

### Wiederherstellung

Wenn Sie Daten wiederherstellen müssen, stehen Ihnen zwei Optionen zur Verfügung:

- Über den Dateiwiederherstellung-Assistenten.
- Über das Veeam Bare Metal Recovery ISO.

#### Dateiwiederherstellung-Assistent

Um den Dateiwiederherstellung-Assistenten zu verwenden, öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal-Server:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Gehen Sie zum Menü und wählen Sie `Restore File`{.action}:

![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}

Wählen Sie im Assistenten den gewünschten Wiederherstellungspunkt aus:

![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}

Bestätigen Sie anschließend:

![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}

Suchen Sie abschließend nach der gewünschten Datei und wählen Sie eine Option:

![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}

- Restore - Overwrite: Ermöglicht es Ihnen, die Datei zu restaurieren und die aktuelle Datei auf dem Server zu überschreiben.
- Restore - Keep: Ermöglicht es Ihnen, die Datei zu restaurieren, ohne die aktuelle Datei auf dem Server zu überschreiben.
- Copy To: Ermöglicht es Ihnen, die Datei an einen Speicherort auf Ihrem Server zu kopieren.
- Explore: Ermöglicht es Ihnen, das Backup zu durchsuchen.
- Properties: Ermöglicht es Ihnen, die Dateieigenschaften anzuzeigen.

Das Starten einer Wiederherstellung zeigt Ihnen ein letztes Fenster, das den Transfer anzeigt:

![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}

#### Veeam Baremetal Recovery ISO

Baremetal Recovery ist eine Funktion von Veeam, bei der ein benutzerdefiniertes ISO im Voraus erstellt wird, das anschließend verwendet werden kann, um ein System zu starten und es von einem Backup wiederherzustellen, das auf einem anderen Server gespeichert ist.

Lesen Sie diese Anleitung für weitere Informationen: [Backup Agent - Bare Metal Recovery mit Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Sie müssen den Server und die Anmeldeinformationen an die von uns bereitgestellten anpassen.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.