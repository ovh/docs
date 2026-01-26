---
title: "Backup Agent - Ligar à VSPC"
excerpt: "Saiba como ligar à Veeam Service Provider Console para ver as suas cópias de segurança e agentes"
updated: 2026-01-23
---

## Objetivo

Este guia explica-lhe como ligar à Veeam Service Provider Console (VSPC) para ver as suas cópias de segurança, agentes e consultar os relatórios dos seus trabalhos de cópia de segurança.

## Requisitos

- Ter recebido as credenciais de ligação à VSPC por correio eletrónico após a encomenda do seu serviço Backup Agent.
- Ter um navegador web compatível.

## Instruções

### Aceder à VSPC

Aceda ao URL da VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-navigate-vspc.png){.thumbnail}

### Ligar-se

Ligue-se utilizando as credenciais que lhe foram fornecidas por correio eletrónico. O formato do login é geralmente `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Se já não tiver as suas credenciais, pode regenerá-las contactando o suporte.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Esta conta é só de leitura e permite-lhe aceder a visualizações para ver as suas cópias de segurança e agentes.

### Consultar os Backup Jobs

Uma vez ligado, clique em `Backup Jobs`{.action} no menu à esquerda.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Mostrar os trabalhos bem-sucedidos

Clique em `Successful Jobs`{.action} para o seu tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Mostrar os pontos de restauração

Pode consultar os pontos de restauração disponíveis para as suas cópias de segurança.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Aceder aos agentes geridos

Para ver a lista dos seus agentes instalados, vá a `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Consultar os relatórios

Aceda à secção `Reports`{.action} para visualizar os relatórios das suas cópias de segurança.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Abrir o último relatório

Abra o último relatório disponível para consultar os detalhes das suas últimas cópias de segurança.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Ver os últimos alarmes

Pode ver os últimos alarmes sobre os seus agentes e cópias de segurança na secção "Alarm Management".

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).

