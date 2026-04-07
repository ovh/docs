---
title: "Backup Agent - Administre tus copias de seguridad y restauraciones"
excerpt: "Descubre cómo hacer copias de seguridad y restaurar tus datos en tus servidores Bare Metal con Backup Agent"
updated: 2026-02-03
---

## Objetivo

Descubre cómo hacer copias de seguridad y restaurar tus datos en tus servidores Bare Metal con Backup Agent.

> [!primary]
> 
> Para obtener más información sobre el producto Backup Agent, consulte [esta página](/pages/storage_and_backup/backup_agent/backup_agent_product_presentation).
>

## Requisitos

- Un servidor Bare Metal en el que Backup Agent esté instalado. Consulta nuestro guía "[Cómo configurar tu primera copia de seguridad](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" para más información.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

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

En caso necesario, puede iniciar una copia de seguridad manual.

Esta hará también una copia de seguridad completa de su servidor, también enviada a su punto de almacenamiento remoto.

Haga clic en la pestaña correspondiente a su sistema operativo:

> [!tabs]
> Windows
>>
>> Abra la aplicación "Veeam Agent" en el servidor Bare Metal:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Haga clic en el botón `Backup Now`{.action} para iniciar una copia de seguridad:
>>
>> ![Backup Agent BKP Agent](images/01-backup-agent-bkpagent.png){.thumbnail}
>
> Linux
>>
>> Para iniciar una copia de seguridad manual en Linux, puede utilizar la línea de comandos.
>>
>> Conéctese a su servidor Bare Metal mediante SSH y ejecute el siguiente comando para listar sus trabajos de copia de seguridad:
>>
>> ```bash
>> sudo veeamconfig job list
>> ```
>>
>> Para iniciar una copia de seguridad manual, utilice el siguiente comando, reemplazando `<nombre_del_trabajo>` por el nombre de su trabajo de copia de seguridad:
>>
>> ```bash
>> sudo veeamconfig job start <nombre_del_trabajo>
>> ```
>>
>> Si desea iniciar todos los trabajos de copia de seguridad, utilice:
>>
>> ```bash
>> sudo veeamconfig job start --all
>> ```
>>
>> Puede seguir el progreso de la copia de seguridad consultando las sesiones activas:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> También puede tener una interfaz para interactuar con el producto introduciendo este comando:
>>
>> ```bash
>> sudo veeam
>> ```

### Restauración

En caso de necesidad de restaurar datos, tiene dos opciones:

- a través del asistente de restauración de archivos;
- a través de la ISO Veeam Baremetal Recovery.

#### Asistente de restauración de archivos

Para restaurar archivos y carpetas, haga clic en la pestaña correspondiente a su sistema operativo:

> [!tabs]
> Windows
>>
>> Abra la aplicación "Veeam Agent" en su servidor Baremetal:
>>
>> ![Backup Agent BKP Agent Search](images/01-backup-agent-bkpagent-search.png){.thumbnail}
>>
>> Vaya al menú y seleccione `Restore File`{.action}:
>>
>> ![Backup Agent Restore Menu](images/01-backup-agent-restore-menu.png){.thumbnail}
>>
>> Seleccione el punto de restauración deseado en el asistente:
>>
>> ![Backup Agent Restore Points](images/01-backup-agent-restore-restore-points.png){.thumbnail}
>>
>> A continuación, confirme:
>>
>> ![Backup Agent Restore Point Summary](images/01-backup-agent-restore-restore-point-summary.png){.thumbnail}
>>
>> Finalmente, busque su archivo y seleccione una opción:
>>
>> ![Backup Agent Restore Wizard](images/01-backup-agent-restore-wizard.png){.thumbnail}
>>
>> - Restore - Overwrite: le permite restaurar el archivo mientras sobrescribe el que actualmente se encuentra en el servidor.
>> - Restore - Keep: le permite restaurar el archivo mientras conserva el que actualmente se encuentra en el servidor.
>> - Copy To: le permite copiar el archivo a un lugar de su servidor.
>> - Explore: le permite explorar la copia de seguridad.
>> - Properties: le permite ver las propiedades del archivo.
>>
>> Iniciar una restauración le permitirá tener una última ventana que mostrará la transferencia:
>>
>> ![Backup Agent Restore Transfer](images/01-backup-agent-restore-transfer.png){.thumbnail}
>
> Linux
>>
>> Para restaurar archivos y carpetas en Linux, tiene dos opciones: a través de la interfaz gráfica o a través de la línea de comandos.
>>
>> #### A través de la interfaz gráfica
>>
>> 1\. Conéctese a su servidor Bare Metal mediante SSH.
>> 2\. Inicie la interfaz Veeam introduciendo el siguiente comando:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. En la interfaz, seleccione la opción de restauración de archivos.
>> 4\. Seleccione la copia de seguridad y el punto de restauración deseado.
>> 5\. Navegue por la copia de seguridad para encontrar los archivos o carpetas a restaurar.
>> 6\. Seleccione los archivos y elija la acción de restauración:
>>    - Restaurar en el lugar de origen
>>    - Copiar a un nuevo lugar
>>    - Explorar la copia de seguridad
>>
>> #### A través de la línea de comandos
>>
>> Para restaurar archivos a través de la línea de comandos, debe montar previamente la copia de seguridad:
>>
>> 1\. Liste sus copias de seguridad disponibles:
>>
>> ```bash
>> sudo veeamconfig backup list
>> ```
>>
>> 2\. Liste los puntos de restauración de una copia de seguridad:
>>
>> ```bash
>> sudo veeamconfig restore list --backup <nombre_de_la_copia>
>> ```
>>
>> 3\. Monte un punto de restauración:
>>
>> ```bash
>> sudo veeamconfig mount --backup <nombre_de_la_copia> --restorepoint <nombre_del_punto>
>> ```
>>
>> 4\. Una vez montado, puede acceder a los archivos a través del punto de montaje (normalmente en `/mnt/veeam/`).
>>
>> 5\. Copie los archivos deseados desde el punto de montaje a su destino.
>>
>> 6\. Una vez finalizada la restauración, desmonte la copia de seguridad:
>>
>> ```bash
>> sudo veeamconfig unmount --backup <nombre_de_la_copia>
>> ```
>>
>> Para más información, consulte la [documentación de Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_gui.html?ver=13) y la [documentación sobre restauración en línea de comandos](https://helpcenter.veeam.com/docs/agentforlinux/userguide/files_restore_cmd.html?ver=13).

### ISO Veeam Baremetal Recovery

Bare Metal Recovery es una función de Veeam que consiste en crear previamente un ISO personalizado, que puede utilizarse posteriormente para arrancar un sistema y restaurarlo a partir de una copia de seguridad almacenada en otro servidor.

Consulta este guía para más información: [Restaurar un servidor Bare Metal con Veeam Backup Agent](/pages/storage_and_backup/backup_and_disaster_recovery_solutions/veeam/veeam_agent_bare_metal_recovery).

Tendrás que adaptar el servidor y las credenciales con las que te hayamos proporcionado.

## Más información

Interactúa con nuestra [comunidad de usuarios](/links/community).