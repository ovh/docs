---
title: "Backup Agent - Diagnóstico y resolución de problemas"
excerpt: "Descubra cómo resolver posibles problemas relacionados con Backup Agent"
updated: 2026-02-09
---

<style>
/* ---FAQ only--- */
details {
    margin: 0.1rem 1;
    border: 1px solid transparent;
    border-radius: 4px;
    background: #ffffffff;
}
details > summary {
    padding: 0.1rem 1rem;
    font-weight: 500;
    color: #268fd4ff;
    cursor: pointer;
    list-style: none;
}
details > summary::before {
    content: '\25B6';
    display: inline-block;
    margin-right: 0.5ch;
    transition: transform 0.2s;
}
details[open] > summary::before {
    content: '\25BC';
}
details:hover {
    border: 1px solid #147DE8;
    border-radius: 4px;
    transition: border-color 0.5s ease;
}
details[open] > summary {
    background: #ffffffff;
}
details > :not(summary) {
    padding: 0.25rem 0.5rem;
    box-sizing: border-box;
    list-style-position: inside;
}
.smallish-gap {
    display: block;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
}
</style>


## Objetivo

Encuentre en esta página una lista de posibles problemas que puede encontrar con el producto Backup Agent y cómo resolverlos.

## Requisitos

- Un servidor Bare Metal en el que Backup Agent esté instalado. Consulte nuestro guía "[Cómo configurar su primera copia de seguridad](/pages/storage_and_backup/backup_agent/backup_agent_first_configuration)" para más información.

<!-- CP-NAV-START:baremetal-backup-agent -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Backup Agent](/links/control-panel/baremetal-backup-agent)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Backup Agent`{.action}

---
<!-- CP-NAV-END:baremetal-backup-agent -->

## Lista de posibles problemas

/// details | Mi Backup Agent no puede conectarse a su servidor.

Compruebe que su firewall permite la comunicación con nuestro servidor `vspc-cgw1.prod01.eu-west-rbx.Backup.ovhcloud.com` (137.74.125.230) en Europa con el puerto TCP y UDP 6180.

Asegúrese de que ningún otro servicio utiliza puertos que podrían entrar en conflicto con su servidor.

Puede encontrar los registros de su Backup Agent en la carpeta: `C:\ProgramData\Veeam\` o `/var/logs`.

///

/// details | Su servidor no puede instalar el agente de copia de seguridad en mi servidor.

El Backup Agent admite las distribuciones Windows y los kernels nativos Linux. Si ha realizado modificaciones en su kernel, debe asegurarse de tener los paquetes adecuados para permitir la instalación del agente. Encontrará la lista de los parámetros necesarios aquí: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

///

/// details | Mi Backup Agent no puede hacer copias de seguridad, obtengo el error: "Failed to perform Backup. Neither blksnap nor veeamsnap module was found."

El Backup Agent admite las distribuciones Windows y los kernels nativos Linux. Si ha realizado modificaciones en su kernel, debe asegurarse de tener los paquetes adecuados para permitir la instalación del agente. Encontrará la lista de los parámetros necesarios aquí: <https://helpcenter.veeam.com/docs/agentforlinux/userguide/system_requirements.html?ver=13>.

Necesitará los headers del kernel Linux en primer lugar y luego podrá intentar instalar o reconfigurar su paquete veeamsnap o veeamblksnap o blksnap, según su sistema operativo.

///

/// details | Mi agente no puede hacer copias de seguridad, obtengo el error: `POSIX: Failed to create or open file [/.veeamsnapstorage/veeamsnapstore`

Para hacer copias de seguridad, Veeam realiza snapshots además de conservar los datos que se escribirán en la copia de seguridad, este snapshot se llama "veeamsnapstorage".

Para resolver este defecto, aumente el tamaño del snapshot a través del archivo `/etc/veeam/veeam.ini`:

```bash
[blksnap]
 
# The minimum allowable size of the difference Storage in sectors
diffStorageMinimum = 2097152
```

Reemplace el valor por el número de sectores deseado convirtiendo primero el tamaño deseado de gigabytes a bytes y luego dividiendo este número de bytes entre 512.<br>
Por ejemplo, para un tamaño de 3 GB (3.221.225.472 bytes), el valor a especificar es 6.291.456 (3.221.225.472 / 512).

Finalmente, reinicie el servicio veeamservice.

///

/// details | No puedo iniciar una copia de seguridad manual.

[Contacte con el soporte de OVHcloud](/links/support-contact) que podrá investigar. Asegúrese de proporcionarnos registros y capturas de pantalla.

///

/// details | Mi copia de seguridad está en error, ¿cómo puedo ver el problema?

Si su copia de seguridad está en error, puede diagnosticar el problema directamente desde el agente. Haga clic en la pestaña correspondiente a su sistema operativo:

> [!tabs]
> Windows
>>
>> Para ver los detalles de un error de copia de seguridad en Windows:
>>
>> 1. Abra la aplicación "Veeam Agent" en su servidor Bare Metal.
>> 2. En la interfaz principal, verá el estado de sus copias de seguridad.
>> 3. Haga clic en la copia de seguridad en error para ver los detalles del error.
>> 4. Consulte la sección **History** o **Last Session** para ver los mensajes de error detallados.
>>
>> La interfaz le mostrará información precisa sobre la causa del error, lo que le permitirá identificar rápidamente el problema.
>
> Linux
>>
>> Para ver los detalles de un error de copia de seguridad en Linux, puede usar la interfaz de usuario:
>>
>> 1\. Conéctese a su servidor Bare Metal por SSH.
>> 2\. Inicie la interfaz Veeam escribiendo el siguiente comando:
>>
>> ```bash
>> sudo veeam
>> ```
>>
>> 3\. En la interfaz, navegue a la sección de copias de seguridad para ver el estado de sus trabajos.
>> 4\. Seleccione la copia de seguridad en error para consultar los detalles del error.
>>
>> También puede consultar los registros directamente mediante la línea de comandos:
>>
>> ```bash
>> sudo veeamconfig session list
>> ```
>>
>> Este comando le mostrará la lista de sesiones de copia de seguridad con su estado y los detalles de los errores eventuales.

///

/// details | Mi uso del almacenamiento no se ha actualizado tras la eliminación de un agente.

Conservamos sus datos durante 14 días tras la eliminación de un agente, el uso del almacenamiento se actualizará tras los 14 días y la eliminación de los datos.

///

/// details | Quiero cambiar la contraseña de acceso a la Veeam Service Provider Console (VSPC).

El cambio de contraseña se realiza a través del enlace "¿Olvidó su contraseña?" disponible en la consola VSPC.

![Reset password 1](images/reset_password_1.png){.thumbnail}

![Reset password 2](images/reset_password_2.png){.thumbnail}

///

/// details | He reinstalado mi servidor, ¿cómo reinstalar Backup Agent?

Debe descargar el agente desde su [área de cliente de OVHcloud](/links/manager) e instalarlo en su nuevo sistema operativo.

///

## Encontrar y exportar los registros

Para resolver problemas con Backup Agent, a menudo es necesario consultar y exportar los registros del producto. Haga clic en la pestaña correspondiente a su sistema operativo:

> [!tabs]
> Windows
>>
>> **Localizar los registros**
>>
>> Los registros de Veeam Agent para Windows se almacenan en el siguiente directorio:
>>
>> ```
>> C:\ProgramData\Veeam\Endpoint\Logs
>> ```
>>
>> **Exportar los registros**
>>
>> Para exportar los registros en Windows, puede usar la interfaz gráfica de Veeam Agent:
>>
>> 1. Abra la aplicación "Veeam Agent" en su servidor.
>> 2. Vaya al menú `Help`{.action} > `Export Logs`{.action}.
>> 3. Seleccione el directorio de destino para el archivo de registros.
>> 4. Haga clic en `Export`{.action} para generar el archivo.
>>
>> El archivo se creará en formato `.zip` y contendrá todos los registros y archivos de configuración necesarios para el diagnóstico.
>>
>> Para más información, consulte el artículo [Veeam KB2404](https://www.veeam.com/kb2404).
>
> Linux
>>
>> **Localizar los registros**
>>
>> Los registros de Veeam Agent para Linux se almacenan en el siguiente directorio:
>>
>> ```bash
>> /var/log/veeam/
>> ```
>>
>> También puede consultar los registros del servicio Veeam:
>>
>> ```bash
>> /var/log/veeam/veeamservice.log
>> ```
>>
>> **Exportar los registros**
>>
>> Para exportar los registros en Linux, tiene dos opciones:
>>
>> 1\. Mediante la línea de comandos
>>
>> Use el siguiente comando para exportar los registros. El archivo se guardará en el directorio de trabajo actual:
>>
>> ```bash
>> sudo veeamconfig grabLogs
>> ```
>>
>> 2\. Mediante el panel de control
>>
>> Si tiene acceso a una interfaz gráfica, puede exportar los registros mediante el panel de control de Veeam Agent especificando el directorio de destino.
>>
>> El archivo se creará en formato `.tar.gz` y contendrá todos los registros y archivos de configuración necesarios para el diagnóstico.
>>
>> Para más información, consulte la [documentación de Veeam](https://helpcenter.veeam.com/docs/agentforlinux/userguide/logs_export.html?ver=13).

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).