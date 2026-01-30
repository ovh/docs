---
title: "Backup Agent - Verwalten Ihrer Backups und Wiederherstellungen"
excerpt: "Erfahren Sie, wie Sie Ihre Daten auf Bare Metal Servern mit Backup Agent sichern und wiederherstellen können"
updated: 2026-01-30
---

## Ziel

Erfahren Sie, wie Sie Ihre Daten auf Bare Metal Servern mit Backup Agent sichern und wiederherstellen können.

> [!primary]
> 
> Weitere Informationen zum Produkt Backup Agent finden Sie auf [dieser Seite](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben einen Bare Metal Server mit installiertem Backup Agent. Lesen Sie unsere Anleitung "[So konfigurieren Sie Ihr erstes Backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)", um weitere Informationen zu erhalten.

## In der praktischen Anwendung

### Backup

Sie haben zwei Optionen, um Backups zu erstellen: Automatisches Backup und Manuelles Backup.

#### Automatisches Backup

Das automatische Backup ist in die Backup-Richtlinie integriert, die wir für Ihren Backup Agent anwenden.

Dieses Backup erstellt ein vollständiges Backup Ihres Servers, das an Ihren Remote-Storage gesendet wird.

> [!warning]
>
> Dieser Vorgang erfolgt zwischen 22:00 Uhr und 6:00 Uhr (MEZ für Europa – EST für Kanada und Asien).

> [!primary]
>
> Sie können dieses automatische Backup weder ändern noch deaktivieren.  
> Derzeit können Sie die Richtlinie, die Ihren gesamten Server sichert, nicht ändern. Wir arbeiten daran, diese Konfiguration in Zukunft zu verbessern.

Sie können den Erfolg dieses Backups überprüfen anhand:

- Des täglichen Backup-Berichts.
- Des Dashboards "Backup Jobs" der Veeam Service Provider Console.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Manuelles Backup

Falls erforderlich, können Sie ein manuelles Backup auslösen.

Dies erstellt ebenfalls ein vollständiges Backup Ihres Servers und sendet es immer an Ihren Remote-Storage.

Um ein manuelles Backup zu erstellen, klicken Sie auf den Tab, der Ihrem Betriebssystem entspricht:

> [!tabs]
> Windows
>>
>> Öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal Server:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Klicken Sie auf die Schaltfläche `Backup Now`{.action}, um ein Backup zu starten:
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> Um ein manuelles Backup unter Linux zu starten, können Sie die Befehlszeile verwenden.
>>
>> Verbinden Sie sich per SSH mit Ihrem Bare Metal Server und führen Sie den folgenden Befehl aus, um Ihre Backup-Jobs aufzulisten:
>>
>> ```bash
>> sudo veeamconfig job list
>> ```
>>
>> Um ein manuelles Backup zu starten, verwenden Sie den folgenden Befehl und ersetzen Sie `<job_name>` durch den Namen Ihres Backup-Jobs:
>>
>> ```bash
>> sudo veeamconfig job start <job_name>
>> ```
>>
>> Wenn Sie alle Backup-Jobs starten möchten, verwenden Sie:
>>
>> ```bash
>> sudo veeamconfig job start --all
>> ```
>>
>> Sie können den Fortschritt des Backups verfolgen, indem Sie die aktiven Sitzungen anzeigen:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Sie können auch über eine Schnittstelle mit dem Produkt interagieren, indem Sie diesen Befehl eingeben:
>>
>> ```bash
>> sudo veeam
>> ```

### Wiederherstellung

Wenn Sie Daten wiederherstellen müssen, stehen Ihnen zwei Optionen zur Verfügung:

- Über den Dateiwiederherstellung-Assistenten.
- Über das Veeam Bare Metal Recovery ISO.

#### Dateiwiederherstellung-Assistent

Um Dateien und Ordner wiederherzustellen, klicken Sie auf den Tab, der Ihrem Betriebssystem entspricht:

> [!tabs]
> Windows
>>
>> Öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal Server:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Gehen Sie zum Menü und wählen Sie `Restore File`{.action}:
>>
>> ![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}
>>
>> Wählen Sie im Assistenten den gewünschten Wiederherstellungspunkt aus:
>>
>> ![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}
>>
>> Bestätigen Sie anschließend:
>>
>> ![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}
>>
>> Suchen Sie abschließend nach der gewünschten Datei und wählen Sie eine Option:
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Restore - Overwrite: Ermöglicht es Ihnen, die Datei zu restaurieren und die aktuelle Datei auf dem Server zu überschreiben.
>> - Restore - Keep: Ermöglicht es Ihnen, die Datei zu restaurieren, ohne die aktuelle Datei auf dem Server zu überschreiben.
>> - Copy To: Ermöglicht es Ihnen, die Datei an einen Speicherort auf Ihrem Server zu kopieren.
>> - Explore: Ermöglicht es Ihnen, das Backup zu durchsuchen.
>> - Properties: Ermöglicht es Ihnen, die Dateieigenschaften anzuzeigen.
>>
>> Das Starten einer Wiederherstellung zeigt Ihnen ein letztes Fenster, das den Transfer anzeigt:
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> Um Dateien und Ordner unter Linux wiederherzustellen, haben Sie zwei Optionen: über die grafische Benutzeroberfläche oder über die Befehlszeile.
>>
>> #### Über die grafische Benutzeroberfläche
>>
>> 1. Verbinden Sie sich per SSH mit Ihrem Bare Metal Server.
>> 2. Starten Sie die Veeam-Oberfläche, indem Sie den folgenden Befehl eingeben:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3. Wählen Sie in der Oberfläche die Option zur Dateiwiederherstellung aus.
>> 4. Wählen Sie das Backup und den gewünschten Wiederherstellungspunkt aus.
>> 5. Navigieren Sie durch das Backup, um die wiederherzustellenden Dateien oder Ordner zu finden.
>> 6. Wählen Sie die Dateien aus und wählen Sie die Wiederherstellungsaktion:
>>    - Wiederherstellen am ursprünglichen Speicherort
>>    - Kopieren an einen neuen Speicherort
>>    - Backup durchsuchen
>>
>> #### Über die Befehlszeile
>>
>> Um Dateien über die Befehlszeile wiederherzustellen, müssen Sie zuerst das Backup einbinden:
>>
>> 1. Listen Sie Ihre verfügbaren Backups auf:
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2. Listen Sie die Wiederherstellungspunkte eines Backups auf:
>>
>> ```bash
>> sudo veeamconfig restore list --backup <backup_name>
>> ```
>>
>> 3. Binden Sie einen Wiederherstellungspunkt ein:
>>
>> ```bash
>> sudo veeamconfig mount --backup <backup_name> --restorepoint <point_name>
>> ```
>>
>> 4. Nach dem Einbinden können Sie über den Mount-Punkt (normalerweise in `/mnt/veeam/`) auf die Dateien zugreifen.
>>
>> 5. Kopieren Sie die gewünschten Dateien vom Mount-Punkt an ihr Ziel.
>>
>> 6. Nach Abschluss der Wiederherstellung binden Sie das Backup aus:
>>
>> ```bash
>> sudo veeamconfig unmount --backup <backup_name>
>> ```
>>
>> Weitere Informationen finden Sie in der [Veeam-Dokumentation](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) und der [Dokumentation zur Befehlszeilen-Wiederherstellung](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

#### Veeam Baremetal Recovery ISO

Baremetal Recovery ist eine Funktion von Veeam, bei der ein benutzerdefiniertes ISO im Voraus erstellt wird, das anschließend verwendet werden kann, um ein System zu starten und es von einem Backup wiederherzustellen, das auf einem anderen Server gespeichert ist.

Lesen Sie diese Anleitung für weitere Informationen: [Backup Agent - Bare Metal Recovery mit Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Sie müssen den Server und die Anmeldeinformationen an die von uns bereitgestellten anpassen.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.