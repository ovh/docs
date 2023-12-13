---
title: 'Utilizar Backup Storage en un servidor dedicado'
excerpt: 'Cómo activar y acceder al espacio de almacenamiento adicional'
updated: 2023-07-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Los servidores dedicados de OVHcloud incluyen un espacio de backup adicional para almacenar los datos y los archivos de configuración importantes. Este espacio es escalable, seguro e independiente del servidor principal.

**Esta guía explica cómo activar y utilizar el espacio de backup**.

> [!primary]
> Para más información, le recomendamos consultar la [página comercial](https://www.ovhcloud.com/es-es/bare-metal/backup-storage/) de la opción Backup Storage.
>
> Esta guía no es aplicable a los servicios de OVHcloud en Estados Unidos.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external} en su cuenta de OVHcloud.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

## Procedimiento

### Activar el Backup Storage

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Acceda a la sección  `Bare Metal Cloud`{.action} y seleccione su servidor de `Servidores dedicados`{.action}. En la pestaña `Backup Storage`{.action}, haga clic en el botón `Activar el Backup Storage`{.action}.

![Activar el Backup Storage](images/backup-storage01.png){.thumbnail}

Haga clic en `Confirmar`{.action} en el menú contextual que aparece.

![Activar el Backup Storage](images/backup-storage02.png){.thumbnail}

El Backup Storage se configurará en unos minutos. Recibirá un mensaje de correo electrónico confirmando la configuración.

### Configurar el control de accesos

El acceso a su espacio de almacenamiento está restringido por direcciones IP mediante una lista de control de acceso (<i>Access Control List</i> o ACL). Solo las direcciones IP de su cuenta de OVHcloud registradas en el ACL podrán acceder al almacenamiento. Los protocolos de acceso (FTP, NFS y CIFS) no están autorizados por defecto, pero pueden seleccionarse al añadir direcciones IP.

#### Añadir la regla de acceso

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Acceda a la sección  `Bare Metal Cloud`{.action} y seleccione su servidor de `Servidores dedicados`{.action}. A continuación, abra la pestaña `Backup Storage`{.action} y haga clic en el botón `Añadir acceso`{.action}.

![Añadir la regla de acceso](images/backup-storage03.png){.thumbnail}

Seleccione el bloque IP que quiera autorizar. Seleccione el protocolo o protocolos que quiera autorizar y haga clic en `Siguiente`{.action}.

> [!primary]
>
> Solo es posible añadir a la ACL bloques de direcciones IP de su cuenta de OVHcloud desde el área de cliente.
>

![Añadir la regla de acceso](images/backup-storage04.png){.thumbnail}

Confirme haciendo clic en `Finalizar`{.action}.

A continuación, podrá acceder al Backup Storage de su servidor desde el bloque de IP seleccionado.

#### Editar o eliminar un acceso al backup

Una vez activado el servicio, podrá ver su tabla ACL en la pestaña `Backup Storage`{.action}. Haga clic en `...`{.action} a la derecha de un bloque IP para abrir el menú de acceso.

![Añadir la regla de acceso](images/backup-storage05.png){.thumbnail}

Para modificar los protocolos de un bloque IP autorizado, haga clic en `Editar acceso`{.action} y seleccione o deseleccione los protocolos en el menú que aparece. Guarde los cambios haciendo clic en `Confirmar`{.action}.

Para eliminar la autorización de un bloque de IP, haga clic en `Eliminar el acceso`{.action} y, seguidamente, en `Confirmar`{.action} en el menú que aparece.

#### Acceder al Backup Storage desde una IP externa al servicio <a name="accessbackup"></a>

El acceso al Backup Storage puede estar restringido al servicio al que esté asociado desde el área de cliente de OVHcloud.

Para poder añadir más direcciones IP de distintos servicios, puede utilizar la [API de OVHcloud](/pages/manage_and_operate/api/first-steps).
para así poder recuperar los backups desde un servicio de otra localización.

> [!warning]
> Solo es posible autorizar las direcciones IP de OVHcloud.
>

Conéctese a [api.ovh.com](https://api.ovh.com/) y utilice la siguiente llamada:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/features/backupFTP/access
>

Introduzca los campos de la siguiente forma:

- `serviceName` \: el nombre de su servidor dedicado
- `cifs`\: marque si es necesario
- `ftp`\: marque si es necesario
- `ipBlock`\: introduzca la IP con el formato `1.2.3.4/32`
- `nfs`\: marque si es necesario

![apiacladdress](images/aclapi01.png){.thumbnail}

Para comprobar que su dirección IP está autorizada, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/featuras/backupFTP/access
>

![apiacladdress](images/aclapi02.png){.thumbnail}

### Restaurar la contraseña

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Acceda a la sección  `Bare Metal Cloud`{.action} y seleccione su servidor de `Servidores dedicados`{.action}. A continuación, abra la pestaña `Backup Storage`{.action} y haga clic en el botón `¿Ha olvidado la contraseña?`{.action}.

Al hacer clic en `Confirmar`{.action} en la ventana que aparece, se enviará un mensaje de correo electrónico con la contraseña a la dirección de correo electrónico que haya guardado en su cuenta de administrador. Siga las instrucciones que contiene para restaurar la contraseña.

### Eliminar el Backup Storage

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Acceda a la sección  `Bare Metal Cloud`{.action} y seleccione su servidor de `Servidores dedicados`{.action}. A continuación, abra la pestaña `Backup Storage`{.action} y haga clic en el botón `Eliminar el Backup Storage`{.action}.

Haga clic en `Confirmar`{.action} el mensaje de aviso para proceder a la eliminación. El Backup Storage se eliminará en unos minutos. Todos los datos del espacio de almacenamiento se eliminarán.

### Contratar espacio en disco adicional

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Acceda a la sección  `Bare Metal Cloud`{.action} y seleccione su servidor de `Servidores dedicados`{.action}. A continuación, abra la pestaña `Backup Storage`{.action} y haga clic en el botón `Contratar espacio en disco`{.action}.

![Contratar espacio en disco adicional](images/backup-storage06.png){.thumbnail}

Seleccione la capacidad de almacenamiento que desea contratar y haga clic en `Siguiente`{.action}.

Lea atentamente los precios y las condiciones generales y acepte el pedido haciendo clic en `Confirmar`{.action}.
Se generará una orden de pedido. Una vez registrado el pago, recibirá una notificación de la ampliación del espacio de almacenamiento.

### Utilizar el Backup Storage

> [!primary]
>
> El servicio de Backup Storage no realiza copias de seguridad automáticas de sus datos. Se trata únicamente de un espacio de almacenamiento al que se puede acceder mediante distintos protocolos. Es su responsabilidad implementar una estrategia de backup adecuada utilizando las herramientas que desee. OVHcloud no podrá ser considerado responsable de los datos que contiene dichos espacios.
>

> [!warning]
>
> El servicio de Backup Storage tiene un límite de tres conexiones simultáneas en una IP.
>

#### FTP/FTPS

##### NcFTP (para Linux)

Para realizar el backup de un solo archivo, utilice el siguiente comando:

```sh
ncftpput -u FtpUsername -p FtpPassword HostName /FolderLocation /File
```

**Este comando no soporta el protocolo FTPS. Si necesita realizar una transferencia segura, utilice LFTP o la interfaz cURL.**

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **FolderLocation**: Ruta de acceso al directorio de destino en el que quiere copiar el archivo
* **File**: Nombre del archivo del que quiere guardar la copia de seguridad

Para realizar el backup de un directorio completo, solo tiene que empaquetarlo antes de transferirlo al espacio de backup con el siguiente comando:

```sh
tar czf - /FolderName | ncftpput -u FtpUsername -p FtpPassword -c HostName ArchiveName.tar.gz
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FolderName**: Ruta de acceso al directorio del que quiere guardar la copia de seguridad
* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **ArchiveName**: Nombre del directorio del que quiere guardar la copia de seguridad

Para descargar un archivo desde el espacio de backup, utilice el siguiente comando:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **LocalFolder**: Ruta de acceso al directorio local en el que quiere guardar el archivo
* **File**: Ruta de acceso del archivo que quiere descargar

##### cURL (para Linux)

> [!primary]
>
> Para utilizar el protocolo FTPS, es necesario cambiar el nombre del Backup Storage. Por ejemplo, si el nombre actual es «ftpback-rbxX-YYY.ovh.net», deberá cambiarlo por «ftpback-rbxX-YYY.**mybackup**.ovh.net». También debe añadir el argumento `-ssl` al comando que se indica a continuación.
>

Para realizar el backup de un solo archivo, utilice el siguiente comando:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **File**: Nombre del archivo del que quiere guardar la copia de seguridad
* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **FolderLocation**: Ruta de acceso al directorio de destino en el que quiere copiar el archivo

Para realizar el backup de un directorio completo, solo tiene que empaquetarlo antes de transferirlo al espacio de backup con el siguiente comando:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FolderName**: Ruta de acceso al directorio del que quiere guardar la copia de seguridad
* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **FolderLocation**: Ruta de acceso al directorio de destino en el que quiere copiar el archivo
* **ArchiveName**: Nombre del directorio del que quiere guardar la copia de seguridad

Para descargar un archivo desde el espacio de backup, utilice el siguiente comando:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **LocalFolder**: Nombre del directorio local en el que quiere guardar el archivo
* **File**: Ruta de acceso del archivo que quiere descargar

##### LFTP (para Linux)

> [!primary]
>
> LFTP utiliza FTP+SSL/TLS por defecto, por lo que deberá cambiar el nombre del Backup Storage. Por ejemplo, si el nombre es «ftpback-rbxX-YYY.ovh.net», deberá cambiarlo por «ftpback-rbxX-YYY.**mybackup**.ovh.net».
>

Para realizar el backup de un solo archivo, utilice el siguiente comando:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **File**: Nombre del archivo del que quiere guardar la copia de seguridad
* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **FolderLocation**: Ruta de acceso al directorio de destino en el que quiere copiar el archivo

Para realizar el backup de un directorio completo, solo tiene que empaquetarlo antes de transferirlo al espacio de backup con el siguiente comando:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FolderName**: Ruta de acceso al directorio del que quiere guardar la copia de seguridad
* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **FolderLocation**: Ruta de acceso al directorio de destino en el que quiere copiar el archivo
* **ArchiveName**: Nombre del directorio del que quiere guardar la copia de seguridad

Para descargar un archivo empaquetado desde el espacio de backup, utilice el siguiente comando:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **FtpUsername**: Nombre de usuario FTP
* **FtpPassword**: Contraseña FTP
* **HostName**: Nombre del Backup Storage
* **LocalFolder**: Nombre del directorio local en el que quiere guardar el archivo
* **File**: Ruta de acceso del archivo que quiere descargar

##### FileZilla

Una vez que haya instalado FileZilla en el servidor, podrá configurarlo para conectarse a su Backup Storage utilizando las claves FTP que habrá recibido por correo electrónico al activar el servicio. Utilice el nombre de usuario y la contraseña para conectarse.

#### NFS

En primer lugar, asegúrese de haber autorizado a sus bloques de IP a acceder al espacio de backup y a utilizar el protocolo NFS. Según el sistema operativo Linux, es posible que necesite instalar el cliente NFS e iniciar el servicio NFS/portmap.

Una vez que haya instalado el cliente NFS y que haya iniciado el servicio portmap, puede montar NFS como una partición normal con el siguiente comando:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **HostName**: Nombre del Backup Storage
* **ServiceName**: Nombre del servidor (p. ej., ns0000000.ip-123-123-123.net)
* **FolderMount**: Directorio en el que quiere montar la partición NFS

Una vez montada la partición, puede utilizar comandos como `cp` y `rsync` como lo haría con un directorio normal.

#### CIFS

##### Windows

Conéctese al servidor, abra la consola de comandos e introduzca el siguiente comando:

```sh
net use z: \\HostName\ServiceName
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **HostName**: Nombre del Backup Storage
* **ServiceName**: Nombre del servidor (p. ej., ns0000000.ip-123-123-123.net)

##### Linux

Conéctese al servidor por SSH e introduzca el siguiente comando:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password=RootPassword //HostName/ServiceName /mnt/FolderMount
```

En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

* **RootPassword**: Contraseña SSH del usuario root del servidor (no se mostrará al escribirla)
* **HostName**: Nombre del Backup Storage
* **ServiceName**: Nombre del servidor (p. ej., ns0000000.ip-123-123-123.net)
* **FolderMount**: Directorio en el que quiere montar la partición (es necesario que ya exista)

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
