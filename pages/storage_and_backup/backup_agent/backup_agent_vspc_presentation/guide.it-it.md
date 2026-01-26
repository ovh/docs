---
title: "Backup Agent - Connettersi alla VSPC"
excerpt: "Scopri come connettersi alla Veeam Service Provider Console per visualizzare i tuoi backup e agenti"
updated: 2026-01-23
---

## Obiettivo

Questa guida ti spiega come connettersi alla Veeam Service Provider Console (VSPC) per visualizzare i tuoi backup, agenti e consultare i rapporti dei tuoi job di backup.

## Prerequisiti

- Aver ricevuto le credenziali di connessione alla VSPC via email dopo l'acquisto del servizio Backup Agent.
- Avere un browser web compatibile.

## Procedura

### Accedere alla VSPC

Accedere all'URL della VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-navigate-vspc.png){.thumbnail}

### Connettersi

Connettersi utilizzando le credenziali che vi sono state fornite via email. Il formato del login è generalmente `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Se non avete più le vostre credenziali, potete rigenerarle contattando il supporto.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Questo account è in sola lettura e vi permette di accedere a visualizzazioni per vedere i vostri backup e agenti.

### Consultare i Backup Jobs

Una volta connessi, cliccate su `Backup Jobs`{.action} nel menu di sinistra.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Visualizzare i job riusciti

Cliccate su `Successful Jobs`{.action} per il vostro tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Visualizzare i punti di ripristino

Potete consultare i punti di ripristino disponibili per i vostri backup.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Accedere agli agenti gestiti

Per vedere l'elenco dei vostri agenti installati, andate in `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Consultare i rapporti

Accedete alla sezione `Reports`{.action} per visualizzare i rapporti dei vostri backup.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Aprire l'ultimo rapporto

Aprite l'ultimo rapporto disponibile per consultare i dettagli dei vostri ultimi backup.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Visualizzare gli ultimi allarmi

Potete vedere gli ultimi allarmi sui vostri agenti e backup nella sezione "Alarm Management".

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).

