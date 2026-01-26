---
title: "Backup Agent - Conectarse a la VSPC"
excerpt: "Aprenda a conectarse a la Veeam Service Provider Console para ver sus copias de seguridad y agentes"
updated: 2026-01-23
---

## Objetivo

Este guía le explica cómo conectarse a la Veeam Service Provider Console (VSPC) para ver sus copias de seguridad, agentes y consultar los informes de sus trabajos de copia de seguridad.

## Requisitos

- Haber recibido las credenciales de conexión a la VSPC por correo electrónico después de pedir su servicio Backup Agent.
- Tener un navegador web compatible.

## Procedimiento

### Acceder a la VSPC

Acceda a la URL de la VSPC: `https://vspc.prod01.eu-west-rbx.backup.ovhcloud.com`

![Backup Agent Navigate VSPC](images/01-backup-agent-navigate-vspc.png){.thumbnail}

### Conectarse

Conéctese utilizando las credenciales que le han sido proporcionadas por correo electrónico. El formato del login suele ser `vspc-tenant-XXXXXX\user-XXXXXX`.

> [!primary]
>
> Si ya no tiene sus credenciales, puede regenerarlas contactando con el soporte.

![Backup Agent Login VSPC](images/01-backup-agent-login-vspc.png){.thumbnail}

> [!primary]
>
> Esta cuenta es de solo lectura y le permite acceder a visualizaciones para ver sus copias de seguridad y agentes.

### Consultar los Backup Jobs

Una vez conectado, haga clic en `Backup Jobs`{.action} en el menú de la izquierda.

![Backup Agent Backup Jobs](images/01-backup-agent-backup-jobs.png){.thumbnail}

### Mostrar los trabajos exitosos

Haga clic en `Successful Jobs`{.action} para su tenant.

![Backup Agent Successful Jobs](images/01-backup-agent-successful-jobs.png){.thumbnail}

### Mostrar los puntos de restauración

Puede consultar los puntos de restauración disponibles para sus copias de seguridad.

![Backup Agent Restore Points](images/01-backup-agent-restore-points.png){.thumbnail}

### Acceder a los agentes gestionados

Para ver la lista de sus agentes instalados, vaya a `Managed Computers`{.action}.

![Backup Agent Managed Computers](images/01-backup-agent-managed-computers.png){.thumbnail}

### Consultar los informes

Acceda a la sección `Reports`{.action} para visualizar los informes de sus copias de seguridad.

![Backup Agent Reports](images/01-backup-agent-reports.png){.thumbnail}

### Abrir el último informe

Abra el último informe disponible para consultar los detalles de sus últimas copias de seguridad.

![Backup Agent Last Report](images/01-backup-agent-last-report.png){.thumbnail}

### Ver las últimas alarmas

Puede ver las últimas alarmas sobre sus agentes y copias de seguridad en la sección "Alarm Management".

![Backup Agent Alarm Management](images/01-backup-agent-alarm.png){.thumbnail}

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).

