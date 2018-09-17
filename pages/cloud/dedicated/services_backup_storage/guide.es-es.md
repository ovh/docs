---
title: 'Utilizar Backup Storage en un servidor dedicado'
slug: servicio-backup-storage
excerpt: 'Cómo activar y utilizar el servicio Backup Storage'
section: Almacenamiento
---

**Última actualización: 17/09/2018**

## Objetivo

Todos los [servidores dedicados](https://www.ovh.es/servidores_dedicados/){.external} de OVH incluyen un espacio de backup de 500 GB, llamado Backup Storage, que permite [guardar una copia de seguridad](https://docs.ovh.com/es/dedicated/seguridad-de-un-servidor-dedicado/){.external} de los datos del servidor.

**Esta guía explica cómo activar y utilizar ese espacio de backup**.


## Requisitos

- Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Dedicado`{.action}.


## Procedimiento

### Activar el espacio de backup

En el área de cliente, haga clic en `Servidores dedicados`{.action} en la columna izquierda y seleccione el servidor dedicado. Abra la pestaña `Backup storage`{.action}, haga clic en el botón `Activar el Backup Storage`{.action} y acepte.

![Activar el espacio de backup](images/backup_storage_activation.png){.thumbnail}

Recibirá por correo electrónico una notificación de la activación y su Backup Storage estará disponible al cabo de unos minutos.


### Configurar el control de accesos

El acceso al espacio de backup está restringido por IP mediante una lista de control de accesos o *access control list* (ACL). Por defecto, todas las direcciones IP de su cuenta tienen acceso FTP/FTPS al espacio de backup. Los demás protocolos (NFS y CIFS) no están autorizados por defecto;
 para autorizarlos es necesario crear una ACL.


#### Añadir un acceso

En la pestaña `Backup storage`{.action}, haga clic en el botón `Añadir un acceso`{.action}.

![Añadir un acceso](images/add_access.png){.thumbnail}

Seleccione el bloque de IP que quiera autorizar. A continuación, seleccione el protocolo y haga clic en `Siguiente`{.action}.

> [!primary]
>
> Solo es posible autorizar bloques de IP presentes en su cuenta de OVH para que accedan al espacio de backup.
>

![Seleccionar el bloque de IP](images/add_access_ip.png){.thumbnail}

Compruebe que la información mostrada es correcta y haga clic en `Finalizar`{.action} para añadir la regla de acceso.

![Añadir la regla de acceso](images/add_access_confirmation.png){.thumbnail}

Ya podrá acceder al Backup Storage del servidor desde el bloque de IP seleccionado.


#### Editar un acceso

Para modificar los protocolos de un bloque de IP autorizado, haga clic en el botón `···`{.action} situado al final de la línea correspondiente al bloque de IP y seleccione `Editar el acceso`{.action}. Marque o desmarque los protocolos que quiera modificar y, a continuación, haga clic en `Aceptar`{.action} para guardar los cambios.

![Editar el acceso](images/modify_access.png){.thumbnail}


#### Eliminar un acceso

Para revocar la autorización de un bloque de IP, haga clic en el botón `···`{.action} situado al final de la línea correspondiente al bloque de IP y seleccione `Eliminar el acceso`{.action}.

![Eliminar el acceso](images/delete_access.png){.thumbnail}

Haga clic en `Aceptar`{.action} para guardar los cambios. El bloque de IP ya no tendrá acceso al Backup Storage.


### Cambiar la contraseña

En la pestaña `Backup Storage`{.action}, haga clic en el botón `¿Ha olvidado la contraseña?`{.action}. 

![Cambiar la contraseña](images/forgotten_password.png){.thumbnail}

Recibirá una nueva contraseña por correo electrónico en la dirección asociada a su cuenta de administrador.
 Siga los pasos que se indican en el email.


### Eliminar el Backup Storage

En la pestaña `Backup storage`{.action}, haga clic en `Eliminar el Backup Storage`{.action} y acepte.

![Eliminar el Backup Storage](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> Esta acción es irreversible.
> 

El Backup Storage se eliminará de forma definitiva en unos minutos.


### Contratar espacio en disco adicional

Abra la pestaña `Backup Storage`{.action} y haga clic en `Contratar espacio en disco`{.action}. 

![Contratar espacio en disco](images/additional_space_order.png){.thumbnail}

Seleccione la capacidad de almacenamiento que desea contratar y haga clic en `Siguiente`{.action}.

![Selección de la capacidad de espacio en disco](images/additional_space_order_selection.png){.thumbnail}

Lea y acepte las condiciones generales y, a continuación, haga clic en `Aceptar`{.action}.

Se generará una orden de pedido. Una vez realizado el pago, podrá disfrutar del espacio de almacenamiento adicional.


### Utilizar el Backup Storage

> [!primary]
>
> El servicio de Backup Storage no realiza copias de seguridad automáticas de sus datos. Se trata únicamente de un espacio de almacenamiento al que se puede acceder mediante distintos protocolos. Es su responsabilidad implementar una estrategia de backup adecuada utilizando las herramientas que desee. OVH no podrá ser considerado responsable de los datos almacenados en este espacio.
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

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.