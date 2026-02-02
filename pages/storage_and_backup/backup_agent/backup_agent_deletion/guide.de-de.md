---
title: "Backup Agent - Löschverfahren"
excerpt: "Erfahren Sie, wie Sie einen Agenten, einen Vault oder einen Backup Agent tenant löschen"
updated: 2026-02-03
---

## Ziel

Dieses Handbuch erklärt, wie Sie verschiedene Elemente Ihres Backup Agent-Dienstes löschen können: Agenten, Vault und tenant.

## Voraussetzungen

- Zugriff auf das [OVHcloud Kundencenter](/links/manager) im Bereich `Backup Agent`{.action}.
- Ein aktiver Backup Agent-Dienst.

## In der praktischen Anwendung

### Einen Agenten löschen

> [!primary]
>
> **Verhalten je nach Nutzung des Agenten:**
>
> - **Wenn der Agent nicht zum Übertragen von Daten verwendet wurde** : Er kann sofort gelöscht werden. Zunächst wird er deaktiviert, danach gelöscht.
> - **Wenn Daten übertragen wurden** : Wir setzen den Agenten für 14 Tage in den Status "Deaktiviert", um Zeit für die Löschung von unveränderlichen Daten zu lassen.

> [!warning]
>
> Sobald Ihr Agent deaktiviert ist, können Sie keinen neuen Agenten auf demselben Server erstellen. Sie müssen warten, bis der erste Agent gelöscht ist.

Gehen Sie in den Bereich `Agenten`{.action} und klicken Sie auf die Löschschaltfläche für den entsprechenden Agenten.

Bestätigen Sie die Agentenlöschung im erscheinenden Fenster.

![Backup Agent Agent löschen](images/01-backup-agent-delete-agent.png){.thumbnail}

### Einen Vault löschen

> [!warning]
>
> Ein Vault kann nicht gelöscht werden, wenn er Daten enthält. Wenn Sie einen Vault löschen möchten, müssen Sie [Kundendienst kontaktieren](/links/support), der vor der Löschung mit Ihnen Prüfungen durchführt.

Gehen Sie in den Bereich `Vaults`{.action} und klicken Sie auf die Löschschaltfläche für den entsprechenden Vault.

Bestätigen Sie die Löschung im erscheinenden Fenster.

![Backup Agent Vault löschen](images/01-backup-agent-delete-vault.png){.thumbnail}

### Einen tenant löschen

> [!warning]
>
> Derzeit kann ein tenant nicht eigenständig gelöscht werden. Wenn Sie einen tenant löschen möchten, müssen Sie [Kundendienst kontaktieren](/links/support). Wir werden Ihre Anfrage bearbeiten.

Wählen Sie Ihren tenant aus und klicken Sie auf die Löschschaltfläche.

Bestätigen Sie die Löschung im erscheinenden Fenster.

![Backup Agent tenant löschen](images/01-backup-agent-delete-tenant.png){.thumbnail}

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.