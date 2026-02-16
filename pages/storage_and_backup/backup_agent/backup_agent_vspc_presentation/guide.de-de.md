---
title: "Backup Agent - Verbindung mit VSPC herstellen"
excerpt: "Erfahren Sie, wie Sie sich bei der Veeam Service Provider Console anmelden, um Ihre Sicherungen und Agents anzuzeigen"
updated: 2026-01-28
---

## Ziel

Diese Anleitung erklärt, wie Sie sich bei der Veeam Service Provider Console (VSPC) anmelden, um Ihre Sicherungen, Agents und Ihre Sicherungsauftragsberichte anzuzeigen.

## Voraussetzungen

- Sie haben die Anmeldedaten für die VSPC per E-Mail erhalten, nachdem Sie den Backup Agent Dienst bestellt haben.
- Sie haben einen kompatiblen Webbrowser.

## In der praktischen Anwendung

### Zugriff auf VSPC

Rufen Sie die VSPC-URL auf: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Anmeldung

Melden Sie sich mit den Anmeldeinformationen an, die Ihnen per E-Mail übermittelt wurden. Das Anmeldeformat ist in der Regel `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Falls Sie Ihre Anmeldeinformationen nicht mehr haben, können Sie diese durch [Kontakt mit dem Support](/links/support-contact) erneut generieren.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Dieser Account ist schreibgeschützt und ermöglicht Ihnen den Zugriff auf Visualisierungen Ihrer Sicherungen und Agents.

### Sicherungsaufträge anzeigen

Nachdem Sie sich angemeldet haben, klicken Sie auf `Backup Jobs`{.action} im linken Menü.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Erfolgreiche Aufträge anzeigen

Klicken Sie auf `Successful Jobs`{.action} für Ihren Tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Wiederherstellungspunkte anzeigen

Sie können die verfügbaren Wiederherstellungspunkte für Ihre Sicherungen einsehen.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Verwaltete Agents anzeigen

Um die Liste Ihrer installierten Agents anzuzeigen, gehen Sie zu `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Berichte anzeigen

Gehen Sie in den Bereich `Reports`{.action}, um Ihre Sicherungsberichte anzuzeigen.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Letzten Bericht öffnen

Öffnen Sie den letzten verfügbaren Bericht, um die Details Ihrer neuesten Sicherungen anzuzeigen.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Letzte Alarms ansehen

Sie können die neuesten Alarms zu Ihren Agents und Sicherungen im Bereich `Alarm Management`{.action} einsehen.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.