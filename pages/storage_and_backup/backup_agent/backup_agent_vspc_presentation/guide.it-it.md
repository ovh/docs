---
title: "Backup Agent - Connessione alla VSPC"
excerpt: "Scopri come connettersi alla Veeam Service Provider Console per visualizzare le tue copie di backup e i tuoi agenti"
updated: 2026-01-28
---

## Obiettivo

Questo manuale ti spiega come connettersi alla Veeam Service Provider Console (VSPC) per visualizzare le tue copie di backup, i tuoi agenti e consultare i report dei tuoi job di backup.

## Prerequisiti

- Avere ricevuto i dati di accesso alla VSPC via e-mail dopo l'acquisto del servizio Backup Agent.
- Avere un browser web compatibile.

## Procedura

### Accedere alla VSPC

Accedi all'URL della VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Connessione

Effettua l'accesso utilizzando le credenziali che ti sono state fornite via e-mail. Il formato del login è generalmente `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Se non hai più le tue credenziali, puoi generarle nuovamente [contattando l'assistenza](/links/support-contact).

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Questo account è in sola lettura e ti permette di visualizzare le tue copie di backup e i tuoi agenti.

### Visualizzare i Backup Jobs

Una volta connesso, clicca su `Backup Jobs`{.action} nel menu a sinistra.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Visualizzare i job riusciti

Clicca su `Successful Jobs`{.action} per il tuo tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Visualizzare i punti di ripristino

Puoi consultare i punti di ripristino disponibili per le tue copie di backup.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Accedere agli agenti gestiti

Per visualizzare l'elenco dei tuoi agenti installati, vai su `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Visualizzare i report

Accedi alla sezione `Reports`{.action} per visualizzare i report delle tue copie di backup.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Aprire l'ultimo report

Apri l'ultimo report disponibile per consultare i dettagli delle tue ultime copie di backup.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Visualizzare le ultime allerte

Puoi visualizzare le ultime allerte sui tuoi agenti e copie di backup nella sezione `Alarm Management`{.action}.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).