---
title: "Transferir archivos por SFTP en un servidor dedicado"
excerpt: "Transfiera archivos desde y hacia su servidor dedicado utilizando SFTP con FileZilla para cargas y descargas seguras."
updated: 2025-02-21
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Existen diversas opciones para transferir archivos entre un dispositivo local y un host remoto. Para garantizar la seguridad de la transferencia, se recomienda que utilice software cliente compatible con el Protocolo seguro de transferencia de archivos (SFTP) en la mayoría de los casos de uso.

**Este tutorial explica cómo utilizar FileZilla para transferir archivos mediante SFTP.**

> [!warning]
> OVHcloud ofrece servicios cuya configuración y gestión son responsabilidad suya. Este tutorial explica cómo utilizar las soluciones de OVHcloud con herramientas externas. Es posible que tenga que adaptar algunas instrucciones específicas para el sistema operativo de su dispositivo local o servidor.
>
> Le recomendamos que, si necesita ayuda, contacte con un [proveedor de servicios especializado](/links/partner) o con [nuestra comunidad](/links/community).
>

## Requisitos

- Un [servidor dedicado](/links/bare-metal/bare-metal) o un [VPS](/links/bare-metal/vps) en su cuenta de OVHcloud, con una distribución GNU/Linux instalada
- Cliente FTP que soporta las conexiones SFTP (por ejemplo, [FileZilla](https://filezilla-project.org/)) instaladas en su estación de trabajo local
- Acceso de administrador por SSH al servidor

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Servidores Dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores Dedicados`{.action} > Seleccione su servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedimiento

Necesitará la dirección IP de su servidor que puede encontrar en su [área de cliente de OVHcloud](/links/manager), así como el nombre de la cuenta de usuario que debe utilizar para la conexión SSH. Si desea más información sobre este tema, consulte nuestras guías Primeros pasos:

- [Servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Servidor dedicado de la gama **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Los siguientes ejemplos se basan en [FileZilla](https://filezilla-project.org/). Si utiliza un cliente FTP diferente, consulte la guía de uso de su aplicación.

El proceso puede requerir pasos adicionales si el servidor se ha iniciado en **modo de rescate**. Abra la sección correspondiente a continuación en función del estado del servidor.

### Cómo conectarse a un servidor mediante un cliente SFTP

/// details | Despliegue esta sección

En la interfaz del cliente FileZilla, introduzca la dirección IP de su servidor en el campo `Host` y su nombre de usuario y contraseña en sus respectivos campos. Introduzca "22" en el campo `Port`, a menos que haya cambiado el puerto de conexión en el que el servicio SSH de su servidor escucha.

Haga clic en el botón `Quickconnect`{.action}.

> [!warning]
> Para acceder a las carpetas que pertenecen a la cuenta de usuario `root` de su SO, debe utilizar las claves de usuario `root` para establecer la conexión SFTP. Esta cuenta no tiene una contraseña predeterminada.  
> Si está seguro de tener que acceder a los archivos del usuario `root` a través de SFTP, descubra cómo activar esta conexión en nuestra [guía de la cuenta de usuario](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

///

### Cómo conectarse a un servidor en modo de rescate mediante un cliente SFTP

/// details | Despliegue esta sección

Si aún no ha realizado las acciones necesarias para acceder a sus archivos en modo de rescate, consulte la guía correspondiente para conectarse a su servidor y montar sus particiones:

- [Modo de rescate para servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Modo de rescate para VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

En la interfaz del cliente FileZilla, introduzca la dirección IP de su servidor en el campo `Host` y el campo "22" en el campo `Port`. Introduzca "root" en el campo `Username` y la contraseña que le hemos enviado por correo electrónico para acceder en modo de rescate en el campo `Password`.

Haga clic en el botón `Quickconnect`{.action}.

El sistema de archivos del servidor se ubicará en el directorio que haya establecido como punto de montaje en modo de rescate ("/mnt" en este ejemplo).

![modo de rescate sftp del sitio remoto](images/sftp_sd_03.png){.thumbnail}

///

### Uso de la interfaz FileZilla para descargar sus archivos

Una vez establecida la conexión remota, aparecerá un árbol de archivos del servidor en la sección `Remote Site`.

![Sitio remoto sftp](images/sftp_sd_01.png){.thumbnail}

La parte central de la interfaz FileZilla actúa como un explorador de archivos. Puede seleccionar varios archivos o carpetas, eliminarlos, arrastrarlos de un lado a otro, etc. Como los detalles de uso pueden variar en función de la versión del software y de su sistema operativo local, consulte la guía del usuario [FileZilla](https://filezilla-project.org/) para obtener más información.

Por ejemplo, para recuperar archivos de la carpeta "/home/data" del servidor, abra la carpeta en el panel derecho (`Remote Site`). Seleccione los archivos o carpetas que desea descargar y arrástrelos al panel izquierdo (`Local Site`) en una carpeta del dispositivo local.

El progreso de la transferencia de datos se mostrará en la cola de abajo.

![progreso de la transferencia sftp](images/sftp_sd_02.png){.thumbnail}

## Más información

[Introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Configuración de cuentas de usuario y acceso root en un servidor](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).