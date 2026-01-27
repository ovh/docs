---
title: "Backup Agent - Verbindung mit VSPC herstellen"
excerpt: "Erfahren Sie, wie Sie sich bei der Veeam Service Provider Console anmelden, um Ihre Sicherungen und Agents anzuzeigen"
updated: 2026-01-27
---

## Ziel

Dieses Handbuch erklärt, wie Sie sich bei der Veeam Service Provider Console (VSPC) anmelden, um Ihre Sicherungen, Agents und Ihre Sicherungsauftragsberichte anzuzeigen.

## Voraussetzungen

- Sie müssen Ihre VSPC-Anmeldeinformationen per E-Mail erhalten haben, nachdem Sie Ihren Backup Agent-Service bestellt haben.
- Ein kompatibler Webbrowser.

## In der praktischen Anwendung

### Zugriff auf VSPC

Gehen Sie zur VSPC-URL: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-navigate-vspc.png){.thumbnail}

### Anmeldung

Melden Sie sich mit den Anmeldeinformationen an, die Ihnen per E-Mail übermittelt wurden. Das Anmeldeformat ist in der Regel `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Falls Sie Ihre Anmeldeinformationen nicht mehr haben, können Sie diese durch [Kontakt mit dem Support](/links/support) erneut generieren.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Dieses Konto ist schreibgeschützt und ermöglicht Ihnen den Zugriff auf Visualisierungen Ihrer Sicherungen und Agents.

### Sicherungsaufträge anzeigen

Nachdem Sie sich angemeldet haben, klicken Sie auf `Backup Jobs`{.action} im linken Menü.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Erfolgreiche Aufträge anzeigen

Klicken Sie auf `Successful Jobs`{.action} für Ihren Mandanten.

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