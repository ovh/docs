---
title: "Backup Agent - Connect to VSPC"
excerpt: "Learn how to connect to the Veeam Service Provider Console to view your backups and agents"
updated: 2026-01-28
---

## Objective

This guide explains how to connect to the Veeam Service Provider Console (VSPC) to view your backups, agents, and check your backup job reports.

## Requirements

- You must have received VSPC connection credentials by email after ordering your Backup Agent service.
- A compatible web browser.

## Instructions

### Access VSPC

Go to the VSPC URL: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Log in

Log in using the credentials that were provided to you by email. The login format is usually `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> If you no longer have your credentials, you can regenerate them by [contacting support](/links/support-contact).

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> This account is read-only and allows you to access visualizations of your backups and agents.

### View Backup Jobs

Once logged in, click on `Backup Jobs`{.action} in the left menu.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### View successful jobs

Click on `Successful Jobs`{.action} for your tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### View restore points

You can view the available restore points for your backups.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Access managed agents

To see the list of your installed agents, go to `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### View reports

Go to the `Reports`{.action} section to view your backup reports.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Open the last report

Open the last available report to view the details of your latest backups.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### View latest alarms

You can view the latest alarms on your agents and backups in the `Alarm Management`{.action} section.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Go further

Join our [community of users](/links/community).

