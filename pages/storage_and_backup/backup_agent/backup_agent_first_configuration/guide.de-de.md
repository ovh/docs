---
title: "Backup Agent - So konfigurieren Sie Ihr erstes Backup"
excerpt: "So konfigurieren Sie Ihr erstes Backup auf Ihrem Bare Metal Server mit dem Backup Agent"
updated: 2026-01-23
---

## Ziel

Sie haben Ihre Backup Agent Lösung für Ihren Bare Metal Server bestellt. Erfahren Sie, wie Sie Ihre ersten Backups einrichten.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Ein Backup Agent, der gleichzeitig mit Ihrem Bare Metal Server bestellt wurde, oder nachträglich über das Menü `Backup-Agent`{.action} im OVHcloud Kundencenter.
- Sie haben ein Betriebssystem auf Ihrem Bare Metal Server installiert und konfiguriert.

## In der praktischen Anwendung

Wenn Sie mehr Informationen über die Funktionsweise des Backup Agent Produkts wünschen, lesen Sie unsere Anleitung "[Backup Agent - Produktpräsentation](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation)" für weitere Informationen.

Um ein Backup für Ihren Server zu erstellen, besteht dies aus:
* Hinzufügen Ihres Servers zu Ihrem Backup Agent.
* Herunterladen des Agents.
* Installieren des Agents auf Ihrem Server.

Nach der Installation des Agents erhält dieser die Backup-Richtlinie und ermöglicht die Durchführung von Backups.

Sobald alle diese Schritte abgeschlossen sind, wird Ihr erstes Backup durchgeführt.

## Fügen Sie Ihren Server zu Ihrem Backup Agent hinzu

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie zur `Bare Metal Cloud`{.action} Bereich und wählen Sie `Backup-Agent`{.action}.  

![Backup Agent Menü](images/01-backup-agent-step15.png){.thumbnail}

Klicken Sie auf Ihren vspc-tenant im Bereich `Dienste`{.action}.

![Backup Agent Services](images/01-backup-agent-services.png){.thumbnail}

Gehen Sie in den Bereich `Agenten`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos.png){.thumbnail}

> [!primary]
>
> Sie sollten den Bare Metal Server, den Sie in Ihrer Bestellung ausgewählt haben, in der Tabelle mit dem Status "not_installed" finden. Dies ist normal, Sie müssen nur den Agent auf Ihrem Server installieren.
>

Klicken Sie auf die Schaltfläche `Herunterladen`{.action} oben in der Tabelle, in der Ihre Agents gelistet sind.

![Backup Agent Agents](images/01-backup-agent-agent.png){.thumbnail}

Wählen Sie Ihr Betriebssystem aus und entscheiden Sie, ob Sie die Installationsdatei herunterladen oder eine der bereitgestellten Befehle verwenden möchten, um sie abzurufen.

![Backup Agent Download Windows](images/01-backup-agent-download-windows-en.png){.thumbnail}

Um Ihren Agent auf Ihrem Bare Metal Server zu installieren, folgen Sie den unten stehenden Schritten entsprechend Ihres Betriebssystems:

> [!tabs]
> ### Windows
>>
>> Sobald die Installationsdatei auf Ihrem Bare Metal Server ist, können Sie sie ausführen und den Vorgang des Programms befolgen:

![Backup Agent Schritt 01](images/01-backup-agent-step01.png){.thumbnail}

![Backup Agent Schritt 02](images/01-backup-agent-step02.png){.thumbnail}

![Backup Agent Schritt 03](images/01-backup-agent-step03.png){.thumbnail}

![Backup Agent Schritt 04](images/01-backup-agent-step04.png){.thumbnail}

![Backup Agent Schritt 05](images/01-backup-agent-step05.png){.thumbnail}

Nachdem Sie alles eingerichtet haben, können Sie beobachten, wie Ihr Agent sich mit unserer Infrastruktur verbindet, um Ihre Backup-Richtlinie wiederherzustellen:

![Backup Agent Schritt 06](images/01-backup-agent-step06.png){.thumbnail}

![Backup Agent Schritt 07](images/01-backup-agent-step07.png){.thumbnail}

Schließlich, nachdem Sie zurückgekehrt sind, können Sie Ihren konfigurierten Backup-Agent auf Ihrem Bare Metal Server sehen:

![Backup Agent Schritt 08](images/01-backup-agent-step08.png){.thumbnail}

>> ![Backup Agent Schritt 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> ### Linux
>> Wählen Sie Ihr Betriebssystem aus und entscheiden Sie, ob Sie die Installationsdatei herunterladen oder eine der bereitgestellten Befehle verwenden möchten, um sie abzurufen.
>>
>> ![Backup Agent Download Linux](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Sobald die Installationsdatei auf Ihrem Server ist, navigieren Sie zu ihrem Verzeichnis und führen Sie sie wie folgt aus:

```bash
sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
```

Nach Abschluss der Installation können Sie dies mit dem folgenden Befehl überprüfen:

>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <UTILISATEUR>
>> ```
>> 
>> Möglicherweise sehen Sie, dass ein Element noch nicht installiert ist:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> Dies ist völlig normal, wir werden eine Konfiguration anwenden, die es ermöglicht, den Backup Agent mit einer Backup-Richtlinie bereitzustellen.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.