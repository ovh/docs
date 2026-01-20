---
title: "Backup Agent - Diagnóstico y resolución de problemas"
excerpt: "Descubra cómo resolver posibles problemas relacionados con Backup Agent"
updated: 2026-01-20
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

[Contacte con el soporte de OVHcloud](/links/support) que podrá investigar. Asegúrese de proporcionarnos registros y capturas de pantalla.

///

/// details | Mi uso del almacenamiento no se ha actualizado tras la eliminación de un agente.

Conservamos sus datos durante 14 días tras la eliminación de un agente, el uso del almacenamiento se actualizará tras los 14 días y la eliminación de los datos.

///

/// details | Quiero cambiar la contraseña de acceso a la Veeam Service Provider Console (VSPC).

El cambio de contraseña se realiza a través del enlace "¿Olvidó su contraseña?" disponible en la consola VSPC.

![Reset password 1](images/reset_password_1.png)

![Reset password 2](images/reset_password_2.png)

///

/// details | He desinstalado mi Veeam Agent, ¿cómo volver a instalarlo?

[Contacte con el soporte de OVHcloud](/links/support) para que nuestro equipo pueda ayudarle a reinstalar su agente.

///

/// details | He reinstalado mi servidor, ¿cómo reinstalar Backup Agent?

Debe eliminar su agente en la sección Agents de su vspc-tenant, y luego descargar e instalar el agente en su nuevo sistema operativo.

///

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).