---
title: "Backup Agent - Administre tus copias de seguridad y restauraciones"
excerpt: "Descubre cómo hacer copias de seguridad y restaurar tus datos en tus servidores Bare Metal con Backup Agent"
updated: 2026-01-27
---

## Objetivo

Descubre cómo hacer copias de seguridad y restaurar tus datos en tus servidores Bare Metal con Backup Agent.

> [!primary]
> 
> Para obtener más información sobre el producto Backup Agent, consulte [esta página](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).
>

## Requisitos

- Estar conectado al [área de cliente de OVHcloud](/links/manager).
- Un servidor Bare Metal en el que Backup Agent esté instalado. Consulta nuestro guía "[Cómo configurar tu primera copia de seguridad](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" para más información.

## Procedimiento

### Copia de seguridad

Tienes dos opciones para hacer copias de seguridad: automática y manual.

#### Copia de seguridad automática

La copia de seguridad automática está integrada en la política de copias de seguridad que aplicamos en tu Backup Agent.

Se trata de una copia de seguridad completa de tu servidor, que se enviará a tu punto de almacenamiento remoto.

> [!warning]
> 
> Se activará entre las 22:00 y las 6:00 (en la zona horaria CET para Europa y en la zona horaria EST para Canadá y Asia).

> [!primary]
> 
> No tienes la posibilidad de modificar o desactivar esta copia de seguridad automática.
> En este momento no puede modificar la política que realiza la copia de seguridad de todo su servidor. Estamos trabajando para mejorar esta configuración en el futuro.

Podrás ver el éxito de esta copia de seguridad a través de:

- El informe diario de copias de seguridad.
- El panel de control "Backup Jobs" de la consola Veeam Service Provider.

![Backup Agent VSPC Backup Jobs](images/01-backup-agent-vspc-backup-jobs.png){.thumbnail}

![Backup Agent VSPC Job](images/01-backup-agent-vspc-job.png){.thumbnail}

#### Copia de seguridad manual

En caso necesario, puedes activar una copia de seguridad manual.

Esta también realizará una copia de seguridad completa de tu servidor, siempre enviada a tu punto de almacenamiento remoto.

Para crear una copia de seguridad manual, abre la aplicación "Veeam Agent" en el servidor Bare Metal:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Haz clic en el botón `Backup Now`{.action} para iniciar una copia de seguridad:

![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}

### Restauración

En caso de necesidad de restaurar datos, tienes dos opciones:

- a través del asistente de restauración de archivos;
- a través de la ISO Veeam Baremetal Recovery.

#### Asistente de restauración de archivos

Abre la aplicación "Veeam Agent" en tu servidor Baremetal:

![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}

Ve al menú y selecciona `Restore File`{.action}:

![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}

Selecciona el punto de restauración deseado en el asistente:

![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}

Luego confirma:

![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}

Finalmente, busca tu archivo y selecciona una opción:

![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}

- Restore - Overwrite: te permite restaurar el archivo mientras sobrescribes el que actualmente está en el servidor.
- Restore - Keep: te permite restaurar el archivo mientras mantienes el que actualmente está en el servidor.
- Copy To: te permite copiar el archivo en un lugar de tu servidor.
- Explore: te permite explorar la copia de seguridad.
- Properties: te permite ver las propiedades del archivo.

Iniciar una restauración te permitirá tener una última ventana que mostrará la transferencia:

![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}

### ISO Veeam Baremetal Recovery

Bare Metal Recovery es una función de Veeam que consiste en crear previamente un ISO personalizado, que puede utilizarse posteriormente para arrancar un sistema y restaurarlo a partir de una copia de seguridad almacenada en otro servidor.

Consulta este guía para más información: [Restaurar un servidor Bare Metal con Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Tendrás que adaptar el servidor y las credenciales con las que te hayamos proporcionado.

## Más información

Interactúa con nuestra [comunidad de usuarios](/links/community).