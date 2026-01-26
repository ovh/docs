---
title: "Backup Agent - Verbindung zur VSPC"
excerpt: "Erfahren Sie, wie Sie sich mit der Veeam Service Provider Console verbinden, um Ihre Backups und Agents anzuzeigen"
updated: 2026-01-23
---

## Ziel

Diese Anleitung erklärt, wie Sie sich mit der Veeam Service Provider Console (VSPC) verbinden, um Ihre Backups, Agents und die Berichte Ihrer Backup-Jobs einzusehen.

## Voraussetzungen

- Sie haben die Anmeldedaten für die VSPC per E-Mail erhalten, nachdem Sie den Backup Agent Dienst bestellt haben.
- Sie haben einen kompatiblen Webbrowser.

## In der praktischen Anwendung

### Zugriff auf die VSPC

Rufen Sie die VSPC-URL auf: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-navigate-vspc.png){.thumbnail}

### Anmeldung

Melden Sie sich mit den Anmeldedaten an, die Ihnen per E-Mail bereitgestellt wurden. Das Login-Format lautet normalerweise `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Wenn Sie Ihre Anmeldedaten nicht mehr haben, können Sie sie durch Kontaktaufnahme mit dem Support neu generieren.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Dieses Konto ist schreibgeschützt und ermöglicht es Ihnen, auf Visualisierungen zuzugreifen, um Ihre Backups und Agents anzuzeigen.

### Backup-Jobs anzeigen

Sobald Sie angemeldet sind, klicken Sie im linken Menü auf `Backup Jobs`{.action}.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Erfolgreiche Jobs anzeigen

Klicken Sie auf `Successful Jobs`{.action} für Ihren Tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Wiederherstellungspunkte anzeigen

Sie können die verfügbaren Wiederherstellungspunkte für Ihre Backups einsehen.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Zugriff auf verwaltete Agents

Um die Liste Ihrer installierten Agents anzuzeigen, gehen Sie zu `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Berichte anzeigen

Gehen Sie zum Bereich `Reports`{.action}, um die Berichte Ihrer Backups anzuzeigen.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Letzten Bericht öffnen

Öffnen Sie den letzten verfügbaren Bericht, um die Details Ihrer neuesten Backups einzusehen.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Neueste Alarme anzeigen

Sie können die neuesten Alarme zu Ihren Agents und Backups im Bereich "Alarm Management" anzeigen.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.

