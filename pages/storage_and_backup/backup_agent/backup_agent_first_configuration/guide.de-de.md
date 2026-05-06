---
title: "Backup Agent - Konfigurieren einer ersten Sicherung"
excerpt: "Erfahren Sie, wie Sie Ihre erste Sicherung auf einem Bare Metal Server mit dem Backup Agent Produkt über das OVHcloud Kundencenter konfigurieren"
updated: 2026-03-05
---

## Ziel

Sie haben gerade Ihr Backup Agent Angebot für Ihren Bare Metal Server bestellt. Erfahren Sie, wie Sie Ihre ersten Sicherungen einrichten.

**Diese Anleitung erklärt, wie Sie Ihre erste Sicherung mit Backup Agent auf einem Bare Metal Server konfigurieren.**

> [!primary]
>
> Weitere Informationen zum Backup Agent Produkt finden Sie auf [dieser Seite](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).

## Voraussetzungen

- Sie haben einen Backup Agent, der gleichzeitig mit Ihrem Bare Metal Server bestellt wurde, oder danach über das Menü `Backup Agent`{.action} im OVHcloud Kundencenter.
- Sie haben ein Betriebssystem auf Ihrem Bare Metal Server installiert und konfiguriert.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

> [!warning]
>
> Sie müssen sicherstellen, dass Ihr Server von unserer Veeam-Infrastruktur erreicht werden kann.
> Die genauen Informationen erhalten Sie in Ihrer Bereitstellungs-E-Mail.
>
> Hier sind die Informationen, um den Zugriff auf Ihrem Bare Metal Server zu erlauben:
>
> - IP/DNS des Servers: `vspc-cgw1.prod01.eu-west-rbx.backup.ovh.net` oder `vspc-cgw21.prod01.eu-west-rbx.backup.ovh.net`
> - Port: 6180
>
> Wir empfehlen Ihnen dringend, dass Sie Ihrem Server auch erlauben, andere externe Adressen zu erreichen, damit er Ihre Daten an den Vault senden kann. In diesem Zusammenhang ist es nicht erforderlich, eingehenden Datenverkehr zuzulassen.

## In der praktischen Anwendung

Die Schritte, um eine Sicherung für Ihren Server zu erstellen, sind wie folgt:

- Hinzufügen Ihres Servers zu Ihrem Backup Agent.
- Herunterladen des Agents.
- Installation des Agents auf Ihrem Server.

Sobald der Agent installiert ist, erhält er die Backup-Richtlinie und kann Sicherungen durchführen.

Sobald diese Schritte abgeschlossen sind, wird Ihre erste Sicherung automatisch ausgeführt.

### Fügen Sie Ihren Server Ihrem Backup Agent hinzu

Klicken Sie auf [diesen Link](/links/control-panel/baremetal-backup-agent), um auf den Bereich `Backup Agent`{.action} zuzugreifen, und klicken Sie dann auf Ihren vspc-tenant im Abschnitt `Dienste`{.action}.

![Backup Agent Services](images/01-backup-agent-services-en.png){.thumbnail}

Gehen Sie zum Abschnitt `Agents`{.action}.

![Backup Agent Tenant Infos](images/01-backup-agent-tenant-infos-en.png){.thumbnail}

> [!primary]
>
> Sie sollten den Bare Metal Server sehen, den Sie in Ihrer Bestellung ausgewählt haben, in der Tabelle mit dem Status `not_installed`. Dies ist in diesem Stadium normal; Sie müssen nun den Agent auf Ihrem Server installieren.
>

Klicken Sie auf die Schaltfläche `Herunterladen`{.action} oben in der Tabelle, in der Ihre Agents aufgelistet sind.

![Backup Agent Agents](images/01-backup-agent-agents-en.png){.thumbnail}

Wählen Sie Ihr Betriebssystem aus und entscheiden Sie, ob Sie die Installationsdatei herunterladen oder einen der bereitgestellten Befehle verwenden möchten, um sie abzurufen.

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
>> Nach der Installation verbindet sich der Agent mit unserer Infrastruktur, um Ihre Backup-Richtlinie abzurufen:
>>
>> ![Backup Agent Schritt 06](images/01-backup-agent-step06.png){.thumbnail}
>>
>> ![Backup Agent Schritt 07](images/01-backup-agent-step07.png){.thumbnail}
>>
>> Schließlich, nachdem die Backup-Richtlinie angewendet wurde, sehen Sie, dass Ihr Backup Agent konfiguriert und auf Ihrem Bare Metal Server installiert ist:
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
>> Dies ist in diesem Stadium normal, wir werden eine Konfiguration anwenden, die es dem Backup Agent ermöglicht, mit einer Backup-Richtlinie bereitgestellt zu werden.

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.
