---
title: "Backup Agent - Verwalten Ihrer Backups und Wiederherstellungen"
excerpt: "Erfahren Sie, wie Sie Ihre Daten auf Bare Metal Servern mit Backup Agent sichern und wiederherstellen können"
updated: 2026-02-03
---

## Ziel

Erfahren Sie, wie Sie Ihre Daten auf Bare Metal Servern mit Backup Agent sichern und wiederherstellen können.

> [!primary]
> 
> Weitere Informationen zum Produkt Backup Agent finden Sie auf [dieser Seite](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Voraussetzungen

- Sie haben einen Bare Metal Server mit installiertem Backup Agent. Lesen Sie unsere Anleitung "[So konfigurieren Sie Ihr erstes Backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)", um weitere Informationen zu erhalten.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

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
> Derzeit können Sie die Richtlinie, die Ihren gesamten Server sichert, nicht ändern. Wir arbeiten daran, diese Konfiguration zu verbessern.

Sie können den Erfolg dieses Backups überprüfen anhand:

- Des täglichen Backup-Berichts.
- Des Dashboards "Backup Jobs" der Veeam Service Provider Console.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Manuelles Backup

Falls erforderlich, können Sie ein manuelles Backup auslösen.

Dies erstellt ebenfalls ein vollständiges Backup Ihres Servers und sendet es immer an Ihren Remote-Storage.

Um ein manuelles Backup zu erstellen, klicken Sie auf den Tab für Ihr Betriebssystem:

> [!tabs]
> Windows
>>
>> Öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal-Server:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Klicken Sie auf die Schaltfläche `Jetzt sichern`{.action}, um ein Backup zu starten:
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> Um ein manuelles Backup unter Linux zu starten, können Sie die Befehlszeile verwenden.
>>
>> Melden Sie sich per SSH an Ihrem Bare Metal-Server an und führen Sie den folgenden Befehl aus, um Ihre Backup-Jobs anzuzeigen:
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
>> Sie können den Fortschritt des Backups überwachen, indem Sie aktive Sitzungen ansehen:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Sie können auch eine Oberfläche öffnen, um mit dem Produkt zu interagieren, indem Sie den folgenden Befehl eingeben:
>>
>> ```bash
>> sudo veeam
>> ```

### Wiederherstellung

Wenn Sie Daten wiederherstellen müssen, stehen Ihnen zwei Optionen zur Verfügung:

- Über den Datei-Wiederherstellung-Assistenten.
- Über das Veeam Bare Metal Recovery ISO.

#### Datei-Wiederherstellung-Assistent

Um Dateien und Ordner wiederherzustellen, klicken Sie auf die Registerkarte, die Ihrem Betriebssystem entspricht:

> [!tabs]
> Windows
>>
>> Öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal-Server:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Gehen Sie zum Menü und wählen Sie `Datei wiederherstellen`{.action}:
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
>> Suchen Sie schließlich nach Ihrer Datei und wählen Sie eine Option:
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Restore - Overwrite: Ermöglicht Ihnen, die Datei wiederherzustellen und die aktuelle Datei auf dem Server zu überschreiben.
>> - Restore - Keep: Ermöglicht Ihnen, die Datei wiederherzustellen, ohne die aktuelle Datei auf dem Server zu überschreiben.
>> - Copy To: Ermöglicht Ihnen, die Datei an einen Speicherort auf Ihrem Server zu kopieren.
>> - Explore: Ermöglicht Ihnen, das Backup zu durchsuchen.
>> - Properties: Ermöglicht Ihnen, die Dateieigenschaften anzuzeigen.
>>
>> Das Starten einer Wiederherstellung zeigt Ihnen abschließend ein Fenster an, das den Transfer anzeigt:
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> Um Dateien und Ordner unter Linux wiederherzustellen, stehen Ihnen zwei Optionen zur Verfügung: über die grafische Benutzeroberfläche oder über die Befehlszeile.
>>
>> #### Über die grafische Benutzeroberfläche
>>
>> 1\. Melden Sie sich per SSH an Ihrem Bare Metal-Server an.
>> 2\. Starten Sie die Veeam-Oberfläche, indem Sie den folgenden Befehl eingeben:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. Wählen Sie in der Oberfläche die Option zur Dateiwiederherstellung aus.
>> 4\. Wählen Sie das Backup und den gewünschten Wiederherstellungspunkt.
>> 5\. Navigieren Sie durch das Backup, um die zu wiederherstellenden Dateien oder Ordner zu finden.
>> 6\. Wählen Sie die Dateien aus und wählen Sie die Wiederherstellungsoption:
>>    - Zur ursprünglichen Position wiederherstellen
>>    - An einen neuen Speicherort kopieren
>>    - Backup durchsuchen
>>
>> #### Über die Befehlszeile
>>
>> Um Dateien über die Befehlszeile wiederherzustellen, müssen Sie das Backup zunächst einhängen:
>>
>> 1\. Listen Sie Ihre verfügbaren Backups auf:
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2\. Listen Sie die Wiederherstellungspunkte eines Backups auf:
>>
>> ```bash
>> sudo veeamconfig restore list --backup <backup_name>
>> ```
>>
>> 3\. Einhängen eines Wiederherstellungspunkts:
>>
>> ```bash
>> sudo veeamconfig mount --backup <backup_name> --restorepoint <point_name>
>> ```
>>
>> 4\. Sobald eingehängt, können Sie die Dateien über den Einhängepunkt zugreifen (in der Regel in `/mnt/veeam/`).
>>
>> 5\. Kopieren Sie die gewünschten Dateien vom Einhängepunkt an ihr Ziel.
>>
>> 6\. Nach Abschluss der Wiederherstellung trennen Sie das Backup:
>>
>> ```bash
>> sudo veeamconfig unmount --backup <backup_name>
>> ```
>>
>> Weitere Informationen finden Sie in der [Veeam-Dokumentation](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) und in der [Dokumentation zur Wiederherstellung über die Befehlszeile](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

#### Veeam Baremetal Recovery ISO

Baremetal Recovery ist eine Funktion von Veeam, bei der ein benutzerdefiniertes ISO im Voraus erstellt wird, das anschließend verwendet werden kann, um ein System zu starten und es von einem Backup wiederherzustellen, das auf einem anderen Server gespeichert ist.

Lesen Sie diese Anleitung für weitere Informationen: [Backup Agent - Bare Metal Recovery mit Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Sie müssen den Server und die Anmeldeinformationen an die von uns bereitgestellten anpassen.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.