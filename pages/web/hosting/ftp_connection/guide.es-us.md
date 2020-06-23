---
title: 'Conectarse al espacio de almacenamiento de un alojamiento web'
slug: conexion-espacio-almacenamiento-ftp-alojamiento-web
excerpt: 'Cómo conectarse al espacio de almacenamiento de un alojamiento web de OVHcloud'
section: 'FTP y SSH'
order: 1
---

**Última actualización: 05/05/2020**

## Objetivo

Los planes de hosting de OVHcloud permiten disponer de un espacio de almacenamiento en el que publicar los archivos de sus sitios web o aplicaciones. Para acceder a este espacio de almacenamiento, es necesario tener un usuario FTP o SSH y las contraseñas asociadas.

**Esta guía explica cómo conectarse al espacio de almacenamiento de un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action}.

## Procedimiento

### 1. Obtener los datos de conexión

Para conectarse a su espacio de almacenamiento necesitará lo siguiente:

- un usuario FTP o SSH activo;
- la contraseña de dicho usuario FTP o SSH;
- la dirección del servidor;
- el puerto de conexión al servidor.

> [!primary]
>
> Estos datos se indican en el mensaje de correo electrónico que se envía para notificar la instalación del alojamiento, y puede consultarlos desde el área de cliente de OVHcloud.
>
> Si ya dispone de ellos, vaya directamente al apartado [Acceder al espacio de almacenamiento](./#2-acceder-al-espacio-de-almacenamiento).
> 

Si no dispone de esta información, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} en la sección **Web** y, en la columna izquierda, haga clic en `Alojamientos`{.action}. Seleccione el alojamiento correspondiente y abra la pestaña `FTP - SSH`{.action}. 

Se mostrará la información relativa a su espacio de almacenamiento, así como una tabla con los usuarios FTP y SSH creados en el alojamiento.

![Conexión FTP](images/connect-ftp-step1.png){.thumbnail}

Entre esa información se encuentran los datos necesarios para conectarse a su espacio de almacenamiento. Si necesita ayuda para identificarlos, consulte la tabla de abajo. Tenga en cuenta que algunos datos podrían no aparecer en función del [alojamiento web de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} contratado.

|Elemento|Descripción|
|---|---|
|Servidor FTP|Es la dirección del servidor que permite acceder al espacio de almacenamiento. Utilícela para conectarse a través de un cliente FTP.<br>El puerto de conexión por defecto es el **21**. Utilice el puerto **22** para conectarse mediante el protocolo SFTP (en caso de que esté activado).|
|Acceso SSH al cluster|Este enlace le permitirá consultar dos datos: <br>**- la dirección del servidor**: empieza después de la doble barra (//) y termina antes de los dos puntos (:);<br> **- el puerto de conexión**: número que aparece tras los dos puntos (:). <br>Por ejemplo, en `ssh://ssh.cluster023.hosting.ovh.net:22/`, «ssh.cluster023.hosting.ovh.net» sería la dirección y «22», el puerto de conexión.|
|Usuario FTP principal|Usuario FTP principal creado en el alojamiento. Puede consultar todos los usuarios FTP del alojamiento en la columna  «Usuario FTP» de la tabla.|
|Usuario SSH principal|Usuario SSH principal creado en el alojamiento. Puede consultar todos los usuarios SSH del alojamiento en la columna  «Usuario SSH» de la tabla.|

Si ha perdido la contraseña de un usuario FTP o SSH, haga clic en el botón con forma de lápiz o el botón `···`{.action} (en función del plan de hosting) y seleccione `Cambiar la contraseña`{.action}. Si necesita ayuda, consulte nuestra guía [Cambiar la contraseña de un usuario FTP](../cambiar-contrasena-usuario-ftp/).

![Conexión FTP](images/connect-ftp-step2.png){.thumbnail}

Ahora ya debería disponer de los datos necesarios para conectarse al espacio de almacenamiento.

### 2. Acceder al espacio de almacenamiento

Existen varias formas de conectarse al espacio de almacenamiento. Continúe leyendo esta guía en el apartado correspondiente a la acción que quiera realizar.

[2.1. Conexión mediante un explorador FTP](./#21-conexion-mediante-un-explorador-ftp): Le permite acceder al espacio de almacenamiento desde cualquier navegador de internet.

[2.2. Conexión mediante un cliente FTP](./#22-conexion-mediante-un-cliente-ftp): Le permite acceder al espacio de almacenamiento mediante un programa como FileZilla o Cyberduck. Debe tener el programa previamente instalado en su ordenador.

[2.3. Conexión mediante un acceso SSH](./#23-conexion-por-ssh): Le permite acceder al espacio de almacenamiento mediante un acceso SSH. Este tipo de acceso requiere conocimientos técnicos avanzados. Por otro lado, no todos los [planes de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external} son compatibles.

#### 2.1. Conexión mediante un explorador FTP

Para acceder al espacio de almacenamiento utilizando el explorador FTP, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} en la sección **Web**, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. 

Abra la pestaña `FTP - SSH`{.action} y haga clic en el botón `Explorador FTP`{.action}. 

![Conexión FTP](images/connect-ftp-step3.png){.thumbnail}

Se abrirá una nueva página en la que deberá introducir el nombre del usuario FTP y su contraseña para conectarse. Seleccione también el idioma de la interfaz. Si los datos introducidos son correctos, podrá interactuar con su espacio de almacenamiento.

![Conexión FTP](images/connect-ftp-step4.png){.thumbnail}

#### 2.2. Conexión mediante un cliente FTP

Una vez que haya instalado en su ordenador el cliente FTP que desee (como FileZilla o Cyberduck), inícielo. 

Introduzca las claves de acceso cuando la aplicación se lo pida. El procedimiento específico depende del cliente FTP utilizado y la versión, por lo que no podemos incluir todos los casos posibles en esta guía.

A continuación le ofrecemos, a modo de recordatorio, la información que deberá introducir:

|Información solicitada|Detalles|
|---|---|
|Servidor FTP|Es la dirección del servidor que permite acceder al espacio de almacenamiento.<br>Según el cliente FTP utilizado, puede denominarse «servidor», «dirección del servidor», «host», «nombre del host»...|
|Usuario FTP|Es el usuario que permite acceder al espacio de almacenamiento.<br>Según el cliente FTP utilizado, puede denominarse «usuario», «nombre de usuario», «identificador», «login», «username»...|
|Contraseña del usuario FTP|Es la contraseña asociada al usuario FTP.<br>Según el cliente FTP utilizado, puede denominarse «contraseña» o «password».|
|Puerto de conexión|Este campo suele autocompletarse. Si tuviera que rellenarlo:<br>- utilice el puerto 21 para conectarse mediante el protocolo FTP;<br>- utilice el puerto 22 para conectarse mediante el protocolo SFTP (en caso de que esté activado).|

Si los datos introducidos son correctos, el cliente FTP debería mostrar el contenido de su espacio de almacenamiento. Es posible que aparezca un mensaje confirmando que el contenido se ha mostrado correctamente.

#### 2.3. Conexión por SSH

Para conectarse por SSH, utilice un terminal. Así podrá interactuar directamente con el espacio de almacenamiento en línea de comandos. 

En MacOS y Linux, esta herramienta está instalada por defecto. En Windows, deberá instalar un programa como PuTTY o el cliente OpenSSH. El procedimiento depende del sistema operativo que utilice, por lo que no podemos incluir todos los casos posibles en esta guía.

Una vez establecida la conexión SSH, existen dos formas de conectarse según el método elegido: 

- desde un programa: introduzca los datos de conexión en los campos de texto;
- en línea de comandos: utilice los comandos que se indican más abajo.

Si se conecta en línea de comandos, sustituya los elementos «sshlogin», «sshserver» y «connectionport» del siguiente comando por el valor correspondiente. Una vez ejecutado el comando, deberá introducir la contraseña del usuario SSH.

```ssh
ssh sshlogin@sshserver -p connectionport
```

Si los datos son correctos, podrá interactuar con su espacio de almacenamiento. Si lo necesita, consulte nuestra guía [Web hosting: SSH en alojamiento compartido](../web_hosting_ssh_en_alojamiento_compartido/).

![Conexión FTP](images/connect-ftp-step5.png){.thumbnail}

## Más información

[Cambiar la contraseña de un usuario FTP](../cambiar-contrasena-usuario-ftp/){.external}

[Web hosting: SSH en alojamiento compartido](../web_hosting_ssh_en_alojamiento_compartido/){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
