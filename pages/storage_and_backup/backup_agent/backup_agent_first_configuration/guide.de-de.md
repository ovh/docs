---
title: "Backup Agent - So konfigurieren Sie Ihre erste Sicherung"
excerpt: "So konfigurieren Sie Ihre erste Sicherung auf Ihrem Bare Metal Server mit dem Backup Agent Produkt"
updated: 2026-01-27
---

## Ziel

Sie haben gerade Ihr Backup Agent Angebot für Ihren Bare Metal Server bestellt. Erfahren Sie, wie Sie Ihre ersten Sicherungen einrichten.

> [!primary]
> 
> Weitere Informationen zum Backup Agent Produkt finden Sie auf [dieser Seite](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Voraussetzungen

- Zugriff auf das [OVHcloud Kundencenter](/links/manager). 
- Ein Backup Agent, der gleichzeitig mit Ihrem Bare Metal Server bestellt wurde, oder danach über das Menü `Backup Agent`{.action} im OVHcloud Kundencenter.
- Sie müssen ein Betriebssystem auf Ihrem Bare Metal Server installiert und eingerichtet haben.

## In der praktischen Anwendung

Die Schritte, um eine Sicherung für Ihren Server zu erstellen, sind wie folgt:

- Hinzufügen Ihres Servers zu Ihrem Backup Agent.
- Herunterladen des Agents.
- Installation des Agents auf Ihrem Server.

Sobald der Agent installiert ist, erhält er die Sicherungspolitik und kann Sicherungen durchführen.

Sobald alle diese Schritte abgeschlossen sind, wird Ihre erste Sicherung durchgeführt.

### Fügen Sie Ihren Server Ihrem Backup Agent hinzu

Melden Sie sich im [OVHcloud Kundencenter](/links/manager) an und navigieren Sie zum Abschnitt `Backup Agent`{.action}.

![Backup Agent Menü](images/01-backup-agent-menu-en.png){.thumbnail}

Klicken Sie auf Ihren vspc-tenant im Abschnitt `Dienste`{.action}.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Gehen Sie zum Abschnitt `Agenten`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> Sie sollten den Bare Metal Server sehen, den Sie in Ihrer Bestellung ausgewählt haben, in der Tabelle mit dem Status `not_installed`. Dies ist in diesem Stadium normal; Sie müssen nun den Agent auf Ihrem Server installieren.
>

Klicken Sie auf die Schaltfläche `Herunterladen`{.action} oben in der Tabelle, in der Ihre Agents aufgelistet sind.

![Backup Agent Agents](images/01-backup-agent-agents-en.png){.thumbnail}

Wählen Sie Ihr Betriebssystem aus und entscheiden Sie, ob Sie die Installationsdatei herunterladen oder eine der bereitgestellten Befehle verwenden möchten, um sie abzurufen.

![Backup Agent Schritt 13](images/01-backup-agent-download-windows-en.png){.thumbnail}

Um Ihren Agent auf Ihrem Bare Metal Server zu installieren, klicken Sie auf den Tab, der Ihrem Betriebssystem entspricht:

> [!tabs]
> Windows
>>
>> Sobald die Installationsdatei auf Ihrem Bare Metal Server ist, können Sie sie ausführen und dem Software-Verfahren folgen:
>>
>> ![Backup Agent Schritt 01](images/01-backup-agent-step01.png){.thumbnail}
>>
>> ![Backup Agent Schritt 02](images/01-backup-agent-step02.png){.thumbnail}
>>
>> ![Backup Agent Schritt 03](images/01-backup-agent-step03.png){.thumbnail}
>>
>> ![Backup Agent Schritt 04](images/01-backup-agent-step04.png){.thumbnail}
>>
>> ![Backup Agent Schritt 05](images/01-backup-agent-step05.png){.thumbnail}
>>
>> Nach der Installation sehen Sie, dass Ihr Agent sich mit unserer Infrastruktur verbindet, um Ihre Sicherungspolitik abzurufen:
>>
>> ![Backup Agent Schritt 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Schritt 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Schließlich, nachdem die Sicherungspolitik angewendet wurde, sehen Sie, dass Ihr Backup Agent konfiguriert und auf Ihrem Bare Metal Server installiert ist:
>>
>> ![Backup Agent Schritt 08](images/01-backup-agent-step08.png){.thumbnail}
>>
>> ![Backup Agent Schritt 09](images/01-backup-agent-step09.png){.thumbnail}
>>
> Linux
>> Wählen Sie Ihr Betriebssystem aus und entscheiden Sie, ob Sie die Installationsdatei herunterladen oder einen der bereitgestellten Befehle verwenden möchten, um sie abzurufen.
>>
>> ![Backup Agent Schritt 14](images/01-backup-agent-download-linux-en.png){.thumbnail}
>>
>> Sobald die Installationsdatei auf Ihrem Server ist, navigieren Sie zum Ordner, in dem sie sich befindet, und führen Sie die Datei wie folgt aus:
>>
>> ```bash
>> sudo ./LinuxAgentPackages.<YOURCOMPANYNAME>.sh
>> ```
>>
>> Nach Abschluss der Installation können Sie sie mit diesem Befehl überprüfen:
>>
>> ```bash
>> sudo veeamconsoleconfig -s
>>
>> Management agent
>>     Connection state       : Connected
>>     Cloud gateway          : <OVHDOMAIN>:6180
>>     Connection account     : <USER>
>> ```
>> 
>> Sie können dann sehen, dass ein Element noch nicht installiert ist:
>>
>> ```bash
>> Backup agent
>>    Status                 : Not installed
>> ```
>>
>> Dies ist in diesem Stadium normal, wir werden eine Konfiguration anwenden, die es dem Backup Agent ermöglicht, mit einer Sicherungspolitik bereitgestellt zu werden.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.