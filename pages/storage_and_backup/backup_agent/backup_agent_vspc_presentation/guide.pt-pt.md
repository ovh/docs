---
title: "Backup Agent - Conectar-se à VSPC"
excerpt: "Descubra como se conectar à Veeam Service Provider Console para visualizar as suas cópias de segurança e os seus agentes"
updated: 2026-01-28
---

## Objetivo

Este guia explica-lhe como se conectar à Veeam Service Provider Console (VSPC) para visualizar as suas cópias de segurança, os seus agentes e consultar os relatórios dos seus jobs de cópia de segurança.

## Requisitos

- Ter recebido as credenciais de acesso à VSPC por e-mail após a encomenda do seu serviço Backup Agent.
- Ter um navegador web compatível.

## Instruções

### Aceder à VSPC

Aceda ao URL da VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Conectar-se

Conecte-se utilizando as credenciais fornecidas por e-mail. O formato do login é geralmente `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Se já não tiver as suas credenciais, pode regenerá-las ao [contactar o suporte](/links/support-contact).

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Esta conta é apenas de leitura e permite-lhe aceder a visualizações das suas cópias de segurança e dos seus agentes.

### Consultar os Backup Jobs

Depois de se conectar, clique em `Backup Jobs`{.action} no menu à esquerda.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Visualizar jobs bem-sucedidos

Clique em `Successful Jobs`{.action} para o seu tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Visualizar pontos de restauro

Pode consultar os pontos de restauro disponíveis para as suas cópias de segurança.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Aceder aos agentes geridos

Para ver a lista dos seus agentes instalados, vá a `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Consultar relatórios

Aceda à secção `Reports`{.action} para visualizar os relatórios das suas cópias de segurança.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Abrir o último relatório

Abra o último relatório disponível para consultar os detalhes das suas últimas cópias de segurança.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Ver as últimas alarmes

Pode ver as últimas alarmes nos seus agentes e cópias de segurança na secção `Alarm Management`{.action}.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Quer saber mais?

Fale com a nossa [comunidade de utilizadores](/links/community).