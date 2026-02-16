---
title: "Backup Agent - Conexión a la VSPC"
excerpt: "Descubra cómo conectarse a la Veeam Service Provider Console para visualizar sus copias de seguridad y sus agentes"
updated: 2026-01-28
---

## Objetivo

Este tutorial le explica cómo conectarse a la Veeam Service Provider Console (VSPC) para visualizar sus copias de seguridad, sus agentes y consultar los informes de sus trabajos de copia de seguridad.

## Requisitos

- Recibir los datos de conexión a la VSPC por correo electrónico tras la contratación de su servicio Backup Agent.
- Tener un navegador web compatible.

## Procedimiento

### Acceder a la VSPC

Acceda a la URL de la VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

### Conexión

Conéctese utilizando los datos de acceso facilitados por correo electrónico. El formato del login suele ser `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Si ya no dispone de sus datos de acceso, puede generarlos de nuevo [contactando con el soporte](/links/support-contact).

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Esta cuenta es de solo lectura y le permite acceder a visualizaciones de sus copias de seguridad y de sus agentes.

### Consultar los trabajos de copia de seguridad

Una vez conectado, haga clic en `Backup Jobs`{.action} en el menú de la izquierda.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Ver los trabajos exitosos

Haga clic en `Successful Jobs`{.action} para su inquilino.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Ver los puntos de restauración

Puede consultar los puntos de restauración disponibles para sus copias de seguridad.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Acceder a los agentes gestionados

Para ver la lista de sus agentes instalados, vaya a `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Consultar informes

Acceda a la sección `Reports`{.action} para visualizar los informes de sus copias de seguridad.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Abrir el último informe

Abra el último informe disponible para consultar los detalles de sus últimas copias de seguridad.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Ver las últimas alarmas

Puede ver las últimas alarmas sobre sus agentes y copias de seguridad en la sección `Alarm Management`{.action}.

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).