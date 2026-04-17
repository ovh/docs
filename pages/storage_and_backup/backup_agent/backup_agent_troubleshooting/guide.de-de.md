---
title: "Backup Agent - Problembehandlung"
excerpt: "Erfahren Sie, wie Sie potenzielle Probleme im Zusammenhang mit dem Backup Agent beheben können"
updated: 2026-02-09
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>


## Ziel

Hier ist eine Liste möglicher Probleme, die Sie mit dem Backup Agent haben können, und wie Sie sie beheben können.

## Voraussetzungen

- Mindestens ein Bare Metal-Server mit installiertem Backup Agent. Lesen Sie unsere Anleitung "[So konfigurieren Sie Ihr erstes Backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)", um weitere Informationen zu erhalten.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Liste möglicher Probleme

/// details | Mein Backup Agent kann sich nicht mit dem Server verbinden.

Stellen Sie sicher, dass Ihre Firewall die Kommunikation mit unserem Server `vspc-cgw1.prod01.eu-west-rbx.Backup.ovhcloud.com` (137.74.125.230) in Europa über TCP-Port und UDP 6180 erlaubt.

Stellen Sie sicher, dass keine anderen Dienste Ports verwenden, die mit Ihrem Server konflikten könnten.

Sie finden Ihre Agent-Protokolle im Ordner: `C:\ProgramData\Veeam\` oder `/var/logs`.

///

/// details | Ihr Server kann den Backup Agent auf meinem Server nicht installieren.

Der Backup Agent unterstützt Windows-Distributionen und native Linux-Kernel. Wenn Sie Änderungen an Ihrem Kernel vorgenommen haben, müssen Sie sicherstellen, dass Sie die richtigen Pakete zum Installieren des Agents haben. Sie finden die Liste der erforderlichen Parameter hier: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | Mein Agent kann nicht sichern. Ich erhalte die Fehlermeldung: "Failed to perform Backup. Neither blksnap nor veeamsnap module was found."

Der Agent unterstützt Windows und native Linux-Kernel. Wenn Sie Änderungen an Ihrem Kernel vorgenommen haben, müssen Sie sicherstellen, dass Sie die richtigen Pakete zum Installieren des Agents haben. Sie finden die Liste der erforderlichen Parameter hier: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>

Zunächst benötigen Sie die Linux-Kernel-Header, und Sie können dann versuchen, Ihr veeamsnap- oder veeamblksnap- oder blksnap-Paket zu installieren oder neu zu konfigurieren, abhängig von Ihrem Betriebssystem.

///

/// details | Mein Agent kann nicht sichern. Ich erhalte den Fehler: `POSIX: Failed to create or open file [/.veeamsnapstorage/veeamsnapstore`

Um eine Sicherung durchzuführen, erstellt Veeam Snapshots und bewahrt die Daten auf, die in die Sicherung geschrieben werden. Dieser Snapshot wird als "veeamsnapstorage" bezeichnet.

Um das Problem zu beheben, können Sie die Größe des Snapshots über die Datei `/etc/veeam/veeam.ini` erhöhen:

```bash
[blksnap]
 
# Die minimale zulässige Größe des Differenzspeichers in Sektoren
diffStorageMinimum = 2097152
```

Ersetzen Sie den Wert durch die gewünschte Anzahl von Sektoren, indem Sie zunächst die gewünschte Größe von Gigabytes in Bytes umrechnen und anschließend diese Anzahl von Bytes durch 512 teilen.  
Zum Beispiel: Bei einer Größe von 3 GB (3.221.225.472 Bytes) ist der einzugebende Wert 6.291.456 (3.221.225.472 / 512).

Starten Sie anschließend den veeamservice-Dienst neu.

///

/// details | Ich kann keine manuelle Sicherung starten.

[Setzen Sie sich mit dem OVHcloud Support in Verbindung](/links/support-contact), um dies zu untersuchen. Stellen Sie sicher, dass Sie Protokolle und Screenshots bereitstellen.

///

/// details | Mein Backup ist fehlerhaft, wie kann ich das Problem sehen?

Wenn Ihr Backup fehlerhaft ist, können Sie das Problem direkt vom Agent aus diagnostizieren. Klicken Sie auf den Tab, der Ihrem Betriebssystem entspricht:

> [!tabs]
> Windows
>>
>> Um die Details eines Backup-Fehlers unter Windows zu sehen:
>>
>> 1. Öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Bare Metal Server.
>> 2. In der Hauptoberfläche sehen Sie den Status Ihrer Backups.
>> 3. Klicken Sie auf das fehlerhafte Backup, um die Fehlerdetails zu sehen.
>> 4. Überprüfen Sie den Abschnitt **History** oder **Last Session**, um detaillierte Fehlermeldungen zu sehen.
>>
>> Die Oberfläche zeigt Ihnen präzise Informationen über die Ursache des Fehlers, sodass Sie das Problem schnell identifizieren können.
>
> Linux
>>
>> Um die Details eines Backup-Fehlers unter Linux zu sehen, können Sie die Benutzeroberfläche verwenden:
>>
>> 1\. Verbinden Sie sich per SSH mit Ihrem Bare Metal Server.
>> 2\. Starten Sie die Veeam-Oberfläche, indem Sie den folgenden Befehl eingeben:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. Navigieren Sie in der Oberfläche zum Abschnitt Backups, um den Status Ihrer Jobs zu sehen.
>> 4\. Wählen Sie das fehlerhafte Backup aus, um die Fehlerdetails anzuzeigen.
>>
>> Sie können die Protokolle auch direkt über die Befehlszeile einsehen:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Dieser Befehl zeigt die Liste der Backup-Sitzungen mit ihrem Status und Details zu eventuellen Fehlern an.

///

/// details | Die Speichernutzung wurde nach dem Entfernen eines Agents nicht aktualisiert.

Wir bewahren Ihre Daten 14 Tage nach dem Löschen eines Agents auf. Die Speichernutzung wird nach Ablauf der 14 Tage und der Datenlöschung aktualisiert.

///

/// details | Ich möchte das Passwort für den Zugriff auf die Veeam Service Provider Console (VSPC) ändern.

Passwörter können über den Link "Passwort vergessen?" geändert werden, der in der VSPC-Konsole verfügbar ist.

![Reset password 1](images/reset_password_1.png){.thumbnail}

![Reset password 2](images/reset_password_2.png){.thumbnail}

///

/// details | Ich habe meinen Server reinstalliert. Wie installiere ich den Backup Agent erneut?

Sie müssen den Agent von Ihrem [OVHcloud Kundencenter](/links/manager) herunterladen und auf Ihrem neuen Betriebssystem installieren.

///

### Protokolle finden und exportieren

Um Probleme mit dem Backup Agent zu beheben, ist es oft notwendig, die Protokolle einzusehen und zu exportieren. Klicken Sie auf den Tab, der Ihrem Betriebssystem entspricht:

> [!tabs]
> Windows
>>
>> **Protokolle lokalisieren**
>>
>> Die Protokolle von Veeam Agent für Windows werden im folgenden Verzeichnis gespeichert:
>>
>> ```
>> C:\ProgramData\Veeam\Endpoint\Logs
>> ```
>>
>> **Protokolle exportieren**
>>
>> Um Protokolle unter Windows zu exportieren, können Sie die grafische Benutzeroberfläche von Veeam Agent verwenden:
>>
>> 1. Öffnen Sie die Anwendung "Veeam Agent" auf Ihrem Server.
>> 2. Gehen Sie zum Menü `Help`{.action} > `Export Logs`{.action}.
>> 3. Wählen Sie das Zielverzeichnis für das Protokollarchiv aus.
>> 4. Klicken Sie auf `Export`{.action}, um das Archiv zu erstellen.
>>
>> Das Archiv wird im Format `.zip` erstellt und enthält alle Protokolle und Konfigurationsdateien, die für die Diagnose erforderlich sind.
>>
>> Weitere Informationen finden Sie im Artikel [Veeam KB2404](https://www.veeam.com/kb2404).
>
> Linux
>>
>> **Protokolle lokalisieren**
>>
>> Die Protokolle von Veeam Agent für Linux werden im folgenden Verzeichnis gespeichert:
>>
>> ```bash
>> /var/log/veeam/
>> ```
>>
>> Sie können auch die Protokolle des Veeam-Dienstes einsehen:
>>
>> ```bash
>> /var/log/veeam/veeamservice.log
>> ```
>>
>> **Protokolle exportieren**
>>
>> Um Protokolle unter Linux zu exportieren, haben Sie zwei Optionen:
>>
>> 1\. Über die Befehlszeile
>>
>> Verwenden Sie den folgenden Befehl, um Protokolle zu exportieren. Das Archiv wird im aktuellen Arbeitsverzeichnis gespeichert:
>>
>> ```bash
>> sudo veeamconfig grablogs
>> ```
>>
>> 2\. Über das control panel
>>
>> Wenn Sie Zugriff auf eine grafische Benutzeroberfläche haben, können Sie Protokolle über das Control Panel von Veeam Agent exportieren, indem Sie das Zielverzeichnis angeben.
>>
>> Das Archiv wird im Format `.tar.gz` erstellt und enthält alle Protokolle und Konfigurationsdateien, die für die Diagnose erforderlich sind.
>>
>> Weitere Informationen finden Sie in der [Veeam-Dokumentation](https://helpcenter.veeam.com/docs/agentforlinux/userguide/logs_export.html?ver=13).

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.