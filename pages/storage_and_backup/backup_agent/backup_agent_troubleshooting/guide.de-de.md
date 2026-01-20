---
title: "Backup Agent - Problembehandlung"
excerpt: "Erfahren Sie, wie Sie potenzielle Probleme im Zusammenhang mit dem Backup Agent beheben können"
updated: 2026-01-20
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

Hier ist eine Liste möglicher Probleme, die Sie mit dem Backup Agent-Produkt haben können, und wie Sie sie beheben können.

## Voraussetzungen

- Mindestens ein Bare Metal-Server mit installiertem Backup Agent. Lesen Sie unsere Anleitung "[So konfigurieren Sie Ihr erstes Backup](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)", um weitere Informationen zu erhalten.

## Liste möglicher Probleme

/// details | Mein Backup Agent kann nicht auf Ihren Server verbinden.

Stellen Sie sicher, dass Ihre Firewall die Kommunikation mit unserem Server `vspc-cgw1.prod01.eu-west-rbx.Backup.ovhcloud.com` (137.74.125.230) in Europa über TCP-Port und UDP 6180 erlaubt.

Stellen Sie sicher, dass keine anderen Dienste Ports verwenden, die mit Ihrem Server konflikten könnten.

Sie finden Ihre Agent-Protokolle im Ordner: `C:\ProgramData\Veeam\` oder `/var/logs`.

///

/// details | Ihr Server kann den Backup Agent auf meinem Server nicht installieren.

Der Backup Agent unterstützt Windows-Distributionen und native Linux-Kerne. Wenn Sie Änderungen an Ihrem Kernel vorgenommen haben, müssen Sie sicherstellen, dass Sie die richtigen Pakete zum Installieren des Agents haben. Sie finden die Liste der erforderlichen Parameter hier: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | Mein Agent kann nicht sichern. Ich erhalte die Fehlermeldung: "Failed to perform Backup. Neither blksnap nor veeamsnap module was found."

Der Agent unterstützt Windows-Distributionen und native Linux-Kerne. Wenn Sie Änderungen an Ihrem Kernel vorgenommen haben, müssen Sie sicherstellen, dass Sie die richtigen Pakete zum Installieren des Agents haben. Sie finden die Liste der erforderlichen Parameter hier: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>

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

Ersetzen Sie den Wert durch die gewünschte Anzahl von Sektoren, indem Sie zunächst die gewünschte Größe von Gigabytes in Bytes umrechnen und anschließend diese Anzahl von Bytes durch 512 teilen.<br>
Zum Beispiel: Bei einer Größe von 3 GB (3.221.225.472 Bytes) ist der einzugebende Wert 6.291.456 (3.221.225.472 / 512).

Starten Sie anschließend den veeamservice-Dienst neu.

///

/// details | Ich kann keine manuelle Sicherung starten.

[Setzen Sie sich mit dem OVHcloud Support in Verbindung](/links/support), um dies zu untersuchen. Stellen Sie sicher, dass Sie Protokolle und Screenshots bereitstellen.

///

/// details | Die Speichernutzung wurde nach dem Entfernen eines Agents nicht aktualisiert.

Wir bewahren Ihre Daten 14 Tage nach dem Löschen eines Agents auf. Die Speichernutzung wird nach Ablauf der 14 Tage und der Datenlöschung aktualisiert.

///

/// details | Ich möchte das Passwort für den Zugriff auf die Veeam Service Provider Console (VSPC) ändern.

Passwörter können über den Link "Passwort vergessen?" geändert werden, der in der VSPC-Konsole verfügbar ist.

![Reset password 1](images/reset_password_1.png)

![Reset password 2](images/reset_password_2.png)

///

/// details | Ich habe meinen Veeam Agent deinstalliert. Wie kann ich ihn erneut installieren?

[Setzen Sie sich mit dem OVHcloud Support in Verbindung](/links/support), um Ihnen bei der erneuten Installation Ihres Agents zu helfen.

///

/// details | Ich habe meinen Server erneut installiert. Wie installiere ich den Backup Agent erneut?

Sie müssen Ihren Agent im Agents-Bereich Ihres vspc-tenants löschen und anschließend den Agent auf Ihrem neuen Betriebssystem herunterladen und installieren.

///

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.