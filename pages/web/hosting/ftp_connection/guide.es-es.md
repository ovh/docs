---
title: "Conectarse al espacio de almacenamiento FTP de un alojamiento web"
excerpt: "Descubra cómo conectarse al espacio de almacenamiento FTP de un alojamiento web de OVHcloud"
updated: 2023-06-01
---

**Última actualización: 01/06/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Los planes de hosting de OVHcloud proporcionan acceso a un espacio de almacenamiento FTP que permite publicar los archivos de sus sitios web o aplicaciones. El acceso a este espacio es posible a través de un usuario FTP o SSH con las contraseñas asociadas.

**Descubra cómo conectarse al espacio de almacenamiento FTP de su alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external}
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action}.

> [!primary]
> Solo los alojamientos web **Pro** o **Performance** permiten la activación de varios usuarios FTP y disponen de conexiones por SSH.
>

## Procedimiento

### Etapa 1 - obtener la información necesaria para conectarse

Para conectarse a su espacio de almacenamiento FTP, descargue los siguientes elementos:

- el usuario FTP o SSH activo;
- la contraseña del usuario FTP o SSH,
- la dirección del servidor FTP o SSH de un alojamiento web;
- el puerto de conexión al servidor FTP o SSH del alojamiento web.

> [!primary]
>
> Estos datos se le han comunicado en el email de notificación de la instalación de su alojamiento web durante la suscripción. Puede acceder a ellos desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
>
> **Si ya tiene estos elementos**, vaya directamente al paso 2. "[Acceder a su espacio de almacenamiento](#ftp_storage_access)" de esta guía.
> 

Si no dispone de estos datos, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action}. Haga clic en el apartado `Alojamientos`{.action} en la columna izquierda. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}. 

Se mostrará la información relativa a su espacio de almacenamiento y una tabla con los usuarios FTP y SSH creados en su alojamiento web.

![Conexión FTP](images/connect-ftp-step1.png){.thumbnail}

> [!primary]
>
> Si desea crear un nuevo usuario FTP/SSH desde la misma página, haga clic en el botón `Crear usuario`{.action} situado a la derecha.
> Indique la extensión del nombre de este nuevo `Usuario`{.action} y el `Carpeta raíz`{.action} en el que el usuario podrá realizar la acción correspondiente y haga clic en `Siguiente`{.action}.
> Seleccione una contraseña para la nueva cuenta de usuario, haga clic en `Siguiente`{.action} y, seguidamente, en `Confirmar`{.action}.
>

Todos los elementos necesarios para conectarse al espacio de almacenamiento FTP están presentes en esta misma página.

A continuación se muestra una descripción de la información esencial que se muestra en la página `FTP - SSH`{.action}:

- **Servidor FTP y SFTP**: dirección del servidor FTP de su alojamiento web que permite acceder al espacio de almacenamiento FTP. Para ello, utilice, por ejemplo, un programa FTP a través del protocolo FTP o SFTP.

> El puerto de conexión clásico es el puerto "21". Utilice el puerto "22" para conectarse mediante el protocolo SFTP (en caso de que esté activado).

- **Servidor SSH**: dirección del servidor SSH de su alojamiento web que permite acceder al espacio de almacenamiento FTP. Para ello, utilice un terminal mediante el protocolo SSH.

> El puerto de conexión SSH es el puerto "22".

- **Usuario principal**: Identificador (S)FTP principal creado en su alojamiento web. Puede consultar todos los usuarios (S)FTP de su alojamiento en la columna "Usuario" de la tabla.

> [!primary]
>
> En función del plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external} que tenga, es posible que no aparezca alguna de las informaciones arriba descritas (en particular, relativas al SSH).
>

Si ya no conoce la contraseña de un usuario FTP o SSH, consulte nuestra guía "[Cambiar la contraseña de un usuario FTP](/pages/web/hosting/ftp_change_password)".

![Conexión FTP](images/connect-ftp-step2.png){.thumbnail}

En este punto, dispondrá de todos los elementos necesarios para conectarse a su espacio de almacenamiento FTP.

### Etapa 2 - acceder al espacio de almacenamiento FTP <a name="ftp_storage_access"></a>

Existen diversas formas de conectarse al espacio de almacenamiento FTP. Continúe leyendo esta guía en el apartado correspondiente a la acción que quiera realizar.

- [1. Conexión mediante el "Explorador FTP"](#ftpexplorar): permite acceder al espacio de almacenamiento FTP desde el navegador de internet.

- [2. Conexión mediante un programa FTP](#ftpsoftware): permite acceder a su espacio de almacenamiento FTP a través de un programa (como [FileZilla](/pages/web/hosting/ftp_filezilla_user_guide) o [Cyberduck](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac). 
Es necesario instalar previamente el programa FTP/cliente elegido en su ordenador.

- [3. Conexión mediante acceso SSH](#ssh): permite acceder al espacio de almacenamiento FTP a través de un acceso SSH. Este tipo de acceso requiere conocimientos avanzados y una solución de [alojamiento web de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external} **Pro** o **Performance**.

#### 1. Conexión mediante un explorador FTP <a name="ftpexplorer"></a>

Para conectarse a su espacio de almacenamiento FTP a través del "Explorador FTP", conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda al apartado `Web Cloud`{.action}.

Haga clic en el apartado `Alojamientos`{.action} en la columna izquierda. Seleccione el alojamiento correspondiente, abra la pestaña `FTP - SSH`{.action} y haga clic en el botón `Explorador FTP`{.action}.

![Conexión FTP](images/connect-ftp-step3.png){.thumbnail}

Se abrirá una nueva página en la que deberá introducir su usuario FTP y su contraseña y, a continuación, conéctese. Si la información es correcta, aparecerá el espacio de almacenamiento.

![Conexión FTP](images/connect-ftp-step4.png){.thumbnail}

#### 2. Conexión mediante un cliente FTP <a name="ftpsoftware"></a>

Una vez que haya instalado en su ordenador el cliente FTP que usted elija (como [FileZilla](/pages/web/hosting/ftp_filezilla_user_guide) o [Cyberduck](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac)), reinicie el procedimiento. 

Puede encontrar campos específicos en los que rellenar los datos de conexión. 

> [!warning]
>
> Esta operación, que forma parte del software que utilice y de su versión, no permite referenciar todos los casos en esta guía.
>

A continuación le ofrecemos un resumen de la información que deberá introducir:

- **Servidor FTP y SFTP**: dirección del servidor FTP que permite acceder al espacio de almacenamiento FTP. Según el programa utilizado, la denominación puede ser como: "servidor", "dirección del servidor", "host", "nombre del host"...
- **Usuario principal**: Identificador que permite acceder al espacio de almacenamiento FTP. Según el programa utilizado, la denominación puede ser como: "Usuario", "Nombre de usuario", "Identificador", "Login", "Username"...
- **Contraseña del usuario FTP** : contraseña asociada al usuario FTP. Según el programa utilizado, la denominación puede ser "Contraseña" o "Password".
- **Puerto de conexión** : este se suele completar automáticamente con el programa. Si debe introducirlo:
    - Utilice el puerto "21" para conectarse mediante el protocolo FTP.
    - utilice el puerto "22" para conectarse mediante el protocolo SFTP (en caso de que esté activado).

Si la información es correcta, el programa que utilice mostrará el contenido del espacio de almacenamiento FTP. Es posible que aparezca un mensaje confirmando que el contenido se ha mostrado correctamente en su cliente FTP.

#### 3. Conexión por SSH <a name="ssh"></a>

Para conectarse por SSH, utilice un terminal para interactuar directamente con su espacio de almacenamiento FTP a través de líneas de comando. 

Más información sobre el SSH en nuestra guía sobre el [uso del SSH con su alojamiento compartido OVHcloud](/pages/web/hosting/ssh_on_webhosting)

Esta herramienta está instalada por defecto en *macOS*, *Linux* y *Windows 10*. Para un entorno Windows más antiguo, deberá instalar un programa como [PuTTY](/pages/web/hosting/ssh_using_putty_on_windows) o añadir la funcionalidad "*OpenSSH*". 

> [!warning]
> 
Este procedimiento depende del sistema operativo que utilice, por lo que no podemos detallarlo en esta guía.
>

Una vez establecida la conexión SSH, existen dos formas de conectarse según el método elegido: 

- **desde un programa**: los campos de texto deben completarse con la información de conexión.
- **en línea de comandos**: se debe respetar una sintaxis específica.

En línea de comandos, utilice la sintaxis siguiente:

```bash
ssh sshlogin@sshserver -p connectionport
```

Sustituya los elementos `sshlogin`, `sshserver` y `connectionport` por sus propios datos. 

Una vez enviado el comando, deberá introducir la contraseña del usuario SSH.

Si los datos son correctos, se conectará al espacio de almacenamiento FTP. 

Si necesita ayuda, consulte la guía "[Utilizar una conexión SSH en un alojamiento web](/pages/web/hosting/ssh_on_webhosting)".

![Conexión FTP](images/connect-ftp-step5.png){.thumbnail}

## Más información

[Cambiar la contraseña de un usuario FTP](/pages/web/hosting/ftp_change_password){.external}.

[Utilizar una conexión SSH en un alojamiento web](/pages/web/hosting/ssh_on_webhosting){.external}.

[Utilizar PuTTY para conectarse por SSH](/pages/web/hosting/ssh_using_putty_on_windows)

[Utilice FileZilla con su alojamiento web](/pages/web/hosting/ftp_filezilla_user_guide)

[Utilice Cyberduck con su alojamiento web](/pages/web/hosting/ftp_cyberduck_user_guide_on_mac)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.