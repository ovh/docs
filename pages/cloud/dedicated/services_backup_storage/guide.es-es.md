---
title: Backup Storage
slug: servicio-backup-storage
excerpt: Como activar y utilizar la funcionalidad Backup Storage.
section: Miscelánea
---


## Requisitos
OVH proporciona con todos los servidores dedicados un espacio de backup, llamado Backup Storage. Para poder utilizarlo es necesario:

- Tener un servidor en OVH.
- Tener acceso al área de cliente.

Es posible acceder a este espacio de backup mediante los siguientes protocolos:

- FTPS
- FTP
- NFS
- CIFS

El acceso está restringido por IP utilizando listas de control de acceso (ACL). Puede crear una regla ACL para las IP asignadas a su servidor desde el área de cliente o a través de la API.

Por defecto, todas las IP de su cuenta tienen acceso FTP/FTPS al Backup Storage. Los demás protocolos no están autorizados por defecto; para autorizarlos es necesario crear una ACL.


## Procedimiento

### 1. Activacion
Para activar su espacio de backup, conéctese al [área de cliente Dedicado](https://www.ovh.com/manager/dedicated/){.external}.

Seleccione el servidor en la columna izquierda.

Abra la pestaña `Backup Storage`{.action}.

Haga clic en `Activar el Backup Storage`{.action}.


![Activating Backup Storage](images/services-backup-storage-activate.png){.thumbnail}

Haga clic en `Confirmar`{.action}.


![Confirm Backup Storage activation](images/services-backup-storage-activate-confirm.png){.thumbnail}

Aparecerá un mensaje de confirmación en la pantalla y recibirá por correo electrónico una notificación de la activación.


![Activation completed](images/services-backup-storage-activate-done.png){.thumbnail}


### 2. Utilizacion
Conéctese al [área de cliente Dedicado](https://www.ovh.com/manager/dedicated/){.external}.

Seleccione el servidor en la columna izquierda.

Abra la pestaña `Backup Storage`{.action}.


![Backup storage usage summary](images/services-backup-storage-usage.png){.thumbnail}

Aquí podrá consultar el espacio en disco utilizado.


### 3. Restauracion de la contrasena
Las contraseñas del Backup Storage se generan automáticamente por motivos de seguridad. No es posible establecer una contraseña propia.

Si ha perdido la contraseña, puede generar una nueva siguiendo el procedimiento que se indica a continuación.

Acceda al [área de cliente Dedicado](https://www.ovh.com/manager/dedicated/){.external}.

Seleccione el servidor en la columna izquierda.

Abra la pestaña `Backup storage`{.action}.

Haga clic en el botón `¿Ha olvidado la contraseña?`{.action}.


![Reset password](images/services-backup-storage-reset-password.png){.thumbnail}

Haga clic en el botón `Aceptar`{.action}.


![Reset password confirmation](images/services-backup-storage-reset-password-confirm.png){.thumbnail}

Se mostrará un mensaje de confirmación en la pantalla y recibirá la nueva contraseña por correo electrónico.


![Reset password completed](images/services-backup-storage-reset-password-done.png){.thumbnail}


## Gestion de las reglas ACL
Para autorizar direcciones IP a acceder a su Backup Storage, es necesario crear una regla ACL y activar un protocolo de conexión para la IP correspondiente.

La gestión de las ACL puede hacerse desde el área de cliente o mediante la API.


### 1. Creacion
Para autorizar una IP a acceder al Backup Storage desde el área de cliente, conéctese al [área de cliente Dedicado](https://www.ovh.com/manager/dedicated/){.external}.

Seleccione el servidor en la columna izquierda.

Abra la pestaña `Backup storage`{.action}.

Si la IP no aparece en la lista, haga clic en el botón `Añadir un acceso`{.action}.


![Add access](images/services-backup-storage-access-add.png){.thumbnail}

Seleccione la IP o bloque de IP que quiera autorizar.


![Add access](images/services-backup-storage-access-select.png){.thumbnail}

Confirme la operación.


![Add access](images/services-backup-storage-access-confirm.png){.thumbnail}

Se mostrará en pantalla un mensaje de confirmación.


![Add access](images/services-backup-storage-access-done.png){.thumbnail}


### 2. Modificacion
Para modificar un acceso existente, haga clic en el icono con forma de lápiz `Editar el acceso`{.action} situado al final de la línea correspondiente.


![Modify access](images/services-backup-storage-access-modify.png){.thumbnail}

Seleccione el protocolo que quiera autorizar para la IP o bloque de IP.


![Select protocols to add or remove for an IP](images/services-backup-storage-access-modify-select.png){.thumbnail}

Se mostrará en pantalla un mensaje de confirmación.


![Modify access](images/services-backup-storage-access-modify-done.png){.thumbnail}


### 3. Eliminacion de un acceso
Para eliminar un acceso, haga clic en el icono con forma de papelera `Eliminar el acceso`{.action} situado al final de la línea correspondiente.


![Delete an access](images/services-backup-storage-access-modify.png){.thumbnail}

Confirme la eliminación.


![Delete confirmation](images/services-backup-storage-delete-confirm.png){.thumbnail}

Se mostrará en pantalla un mensaje de confirmación.


![Access deleted](images/services-backup-storage-delete-done.png){.thumbnail}


### 4. Eliminacion del backup
Conéctese al [área de cliente Dedicado](https://www.ovh.com/manager/dedicated/){.external} y seleccione el servidor en la columna izquierda.

Abra la pestaña `Backup storage`{.action}.

Haga clic en el botón `Eliminar el backup storage`{.action}.


![Delete backup storage](images/services-backup-storage-delete-backup.png){.thumbnail}



> [!alert]
>
> Esta operación es irreversible. Todos los datos se destruirán de forma permanente.
> 


## Uso del Backup Storage
El servicio de Backup Storage no realiza copias de seguridad automáticas de sus datos. Se trata únicamente de un espacio de almacenamiento al que se puede acceder desde diferentes IP y mediante distintos protocolos. Es su responsabilidad implementar una estrategia de backup adecuada utilizando las herramientas que desee.


### 1. FTP/FTPS

#### NcFTP (para Linux)


> [!primary]
>
> Este comando no soporta el protocolo FTPS. Si necesita realizar una transferencia segura, utilice LFTP o Curl.
> 

Para guardar copia de un solo archivo, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">ncftpput -uFTPUSER -pFTPPASS FTPBACKUPHOST /REMOTEFOLDER /FILETOSAVE</span> </pre></div>
En el comando anterior, sustituya las siguientes variables por el valor correspondiente:

Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Archivo local del que quiere guardar copia

Carpeta remota en la que quiere guardar la copia

Para guardar copia de una carpeta completa, solo tiene que archivarla antes de guardarla:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | ncftpput -uFTPUSER -pFTPPASS -c FTPBACKUPHOST DIRNAME.tar.gz</span> </pre></div>
Nombre del directorio que se va a archivar

Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Nombre que quiere asignarle al directorio remoto

Para descargar un archivo del Backup Storage, utilice el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">ncftpget -v -u FTPPASS -p FTPPASS FTPBACKUPHOST /LOCALDIR /FILEBACKUP</span> </pre></div>
Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Directorio local de destino en el que quiere guardar el archivo

Ruta de acceso al archivo que quiere descargar


#### Curl (para Linux)


> [!primary]
>
> Para utilizar FTPS, es necesario cambiar el nombre del Backup Storage. Por ejemplo, si el nombre del Backup Storage es ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net, deberá cambiarlo al formato ftpback-rbxX-YYY.mybackup.ovh.net.
> También deberá añadir el argumento -ssl al comando indicado más abajo.
> 

Para guardar copia de un solo archivo, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">curl -aT FILETOSAVE ftp://FTPUSER:FTPPASS@FTPBACKUPHOST/REMOTEDIR/</span> </pre></div>
Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Archivo local del que quiere guardar copia

Directorio remoto en el que quiere guardar la copia

Para guardar copia de una carpeta:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | curl ftp://FTPUSER:FTPPASS@FTPBACKUPHOST/REMOTEDIR/DIRNAME-$(date +%Y%m%d%H%M).tar.gz -T -</span> </pre></div>
Nombre del directorio que se va a archivar

Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Nombre que quiere asignarle al directorio remoto

Directorio remoto en el que quiere guardar el archivo

Para descargar un archivo del Backup Storage, utilice el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cd /LOCALDIR</span> <span class="prompt">curl -u FTPUSER:FTPPASS ftp://FTPBACKUPHOST/FILEBACKUP</span> </pre></div>
Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Directorio local de destino en el que quiere guardar el archivo

Ruta del acceso al archivo que quiere descargar


#### LFTP (para Linux)


> [!primary]
>
> LFTP utiliza FTP+SSL/TLS por defecto, por lo que deberá cambiar el nombre del Backup Storage. Por ejemplo, si el nombre del Backup Storage es ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net, deberá cambiarlo por ftpback-rbxX-YYY.mybackup.ovh.net.
> 

Para guardar copia de un solo archivo, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">lftp ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "cd REMOTEDIR; put FILETOSAVE; quit"</span> </pre></div>
FTP o FTPS

Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Archivo local del que quiere guardar copia

Directorio remoto en el que quiere guardar el archivo

Para guardar copia de una carpeta, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">tar czf - /DIRTOSAVE | ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "cd REMOTEDIR; put /dev/stdin -o DIRNAME-$(date +%Y%m%d%H%M).tar.gz;quit"</span> </pre></div>
FTP o FTPS

Nombre del directorio que se va a archivar

Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Nombre que quiere asignarle al directorio remoto

Directorio remoto en el que quiere guardar el archivo

Para descargar un archivo del Backup Storage, puede utilizar el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">cd /LOCALDIR</span> <span class="prompt">lftp ftp://username:password@ftpback-rbxX-YYY.mybackup.ovh.net:21 -e "get /FILEBACKUP; quit"</span> </pre></div>
FTP o FTPS

Nombre de usuario FTP

Contraseña FTP

Nombre del Backup Storage

Directorio local de destino en el que quiere guardar el archivo

Ruta de acceso al archivo que quiere descargar


#### FileZilla (para Windows)
Conéctese al servidor utilizando la herramienta **Conexión a Escritorio remoto**.

Abra un navegador de internet y descargue el programa **FileZilla** (si aún no lo tiene). No es necesario instalar los programas complementarios.

Ejecute FileZilla e introduzca los datos de conexión FTP que habrá recibido por correo electónico.

Nombre del Backup Storage

Nombre de usuario FTP

Contraseña FTP del Backup Storage

Haga clic en `Conexión rápida`{.action}.



> [!primary]
>
> El panel izquierdo muestra el contenido de su servidor, mientras que el derecho muestra el contenido del Backup Storage. Puede arrastrar archivos de un panel al otro para enviar archivos al Backup Storage o descargarlos.
> 


### 2. NFS


> [!primary]
>
> El protocolo NFS se utiliza con las distribuciones Linux. En Windows, es necesario utilizar CIFS o FTP.
> 

En primer lugar, compruebe que haya creado correctamente las reglas ACL necesarias para autorizar el protocolo **NFS** en la IP que vaya a utilizar. Para ello, consulte el apartado «Gestión de las reglas ACL».

Según su distribución, es posible que necesite instalar el cliente NFS e iniciar los servicios NFS y portmap.

Una vez haya instalado el cliente NFS y haya ejecutado el servicio portmap, puede montar NFS como una partición normal:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">mount -t nfs FTPBACKUPHOST:/export/ftpbackup/SERVICENAME /FOLDERMOUNT</span> </pre></div>
Nombre del Backup Storage

Nombre del servidor (p. ej.: ns0000000.ip-123-123-123.net)

Nombre del directorio en el que quiera montar el recurso compartido por NFS

Una vez montado el recurso compartido, puede utilizar comandos como cp o rsync, como lo haría con un directorio normal.


### 3. CIFS
En primer lugar, compruebe que haya creado correctamente las reglas ACL necesarias para autorizar el protocolo **CIFS** en la IP que vaya a utilizar. Para ello, consulte el apartado «Gestión de las reglas ACL».


#### Para Windows
Abra la consola de comandos y ejecute los siguientes comandos:

<div> <style type="text/css" scoped>span.prompt:before{content:"$ ";}</style> <pre class="highlight command-prompt"> <span class="prompt">net use z: \\FTPBACKUPHOST\SERVICENAME</span> </pre></div>
Nombre del Backup Storage

Nombre del servidor (p. ej.: ns0000000.ip-123-123-123.net)

Una vez ejecutado el comando, debería tener un nuevo disco **Z:**.


#### Para Linux
Utilice **SSH** para conectarse al servidor y ejecute el siguiente comando:

<div> <style type="text/css" scoped>span.prompt:before{content:"# ";}</style> <pre class="highlight command-prompt"> <span class="prompt">mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //FTPBACKUPHOST/SERVICENAME /mnt/DIRNAME</span> </pre></div>
Nombre del Backup Storage

Nombre del servidor (p. ej.: ns0000000.ip-123-123-123.net)

Nombre del directorio en el que vaya a montar el Backup Storage (**es necesario que ya exista**)