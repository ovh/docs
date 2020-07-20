---
title: 'Activar y utilizar el modo de rescate'
slug: modo_de_rescate
excerpt: 'Cómo activar y utilizar el modo de rescate en un servidor dedicado'
section: 'Diagnóstico y modo de rescate'
---

**Última actualización: 05/09/2018**

## Objetivo

El modo *rescue* o modo de rescate permite arrancar un servidor dedicado sobre un sistema operativo temporal con el objetivo de diagnosticar y resolver problemas.

**Esta guía explica cómo activar y utilizar el modo de rescate en un servidor dedicado.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/UdMZSgXATFU?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Tener acceso por SSH (*root*) a su [servidor dedicado](https://www.ovh.com/world/es/servidores_dedicados/){.external}.


## Procedimiento

Para activar el modo de rescate, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager/){.external} y vaya a la sección `Dedicado`{.action}. En la columna izquierda, haga clic en `Servidores dedicados`{.action} y seleccione el servidor. Abra la pestaña `Estado del servidor`{.action}. En el recuadro **Información general**, haga clic en el botón `···`{.action} del apartado **Boot** y seleccione `Editar`{.action} para cambiar el modo de arranque.

![Cambiar el modo de arranque](images/rescue-mode-01.png){.thumbnail}

En la nueva pantalla, seleccione la opción `Arrancar en modo rescue`{.action}. Si el sistema operativo del servidor es Linux, seleccione `rescue64-pro`{.action} en la lista desplegable. Si el sistema operativo del servidor es Windows, seleccione `WinRescue`{.action}. Por último, introduzca su dirección de correo electrónico en el campo de texto y haga clic en `Siguiente`{.action}.

![Modo rescue-pro](images/rescue-mode-03.png){.thumbnail}

Confirme las opciones en la siguiente ventana y reinicie el servidor para guardar los cambios. 

![Reiniciar el servidor](images/rescue-mode-02.png){.thumbnail}

El servidor se reiniciará en modo de rescate y usted recibirá las claves de acceso para conectarse en la dirección de correo electrónico que haya introducido.

Para salir del modo de rescate, vuelva a cambiar el modo de arranque y seleccione `Arrancar en el disco duro`{.action}. A continuación reinicie de nuevo el servidor.

### Linux

#### Utilizar la interfaz web

Una vez reiniciado el servidor, recibirá por correo electrónico las claves de acceso en modo de rescate y un enlace a la interfaz web del modo de rescate, donde podrá realizar las siguientes pruebas:

- **Hard drives**: Comprobación de la integridad de los discos con pruebas SMART.
- **Processors**: Comprobación del funcionamiento del procesador o procesadores.
- **Partitions (State)**: Comprobación del estado de los lectores. 
- **Partitions (File System)**: Comprobación del sistema de archivos del servidor.
- **Partitions (Explore)**: Apertura de una ventana en el navegador para explorar los archivos.  No es posible editarlos con esta herramienta, pero se puede hacer una copia de seguridad, por ejemplo.
- **Memory**: Comprobación de la RAM.

![Interfaz web del modo de rescate](images/rescue-mode-04.png){.thumbnail}

#### Utilizar SSH (líneas de comando)


> [!primary]
> 
> Si utiliza una llave SSH (activa en su área de cliente de OVHcloud), no recibirá ninguna contraseña. Una vez que haya arrancado el servidor en modo de rescate, podrá conectarse directamente con su llave SSH.
>

Una vez reiniciado el servidor, recibirá por correo electrónico las claves de acceso en modo de rescate. Deberá acceder a su servidor utilizando las líneas de comando habituales, pero con la contraseña *root* del modo de rescate en lugar de la suya.

Por ejemplo:

```sh
ssh root@IP_del_servidor
root@IP_del_servidor's password:
```

Debido a que el modo de rescate posee su propio sistema de archivos temporal, para realizar la mayoría de los cambios en este modo es necesario montar previamente una partición en el servidor. De lo contrario, los cambios que realizase en el sistema de archivos en modo de rescate se perderían al reiniciar el servidor en modo normal.

Por SSH, el montaje de las particiones se realiza con el comando `mount`. Previamente deberá mostrar la lista de las particiones para conocer el nombre de la partición que quiera montar. A continuación ofrecemos algunos ejemplos de código:

```sh
rescue:~# fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Una vez que haya identificado el nombre de la partición que quiere montar, utilice el siguiente comando:

```sh
rescue:~# mount /dev/hda1 /mnt/
```

> [!primary]
>
> La partición se montará y podrá realizar operaciones en el sistema de archivos.
> 
> Si el servidor dispone de una configuración de RAID por software, deberá montar el volumen RAID (por lo general **/dev/mdX**).
>


### Windows

#### Acceder a WinRescue

Una vez reiniciado el servidor, recibirá por correo electrónico las claves de acceso en modo de rescate. Para acceder en modo WinRescue, deberá descargar e instalar una consola VNC o utilizar el módulo **IPMI** del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager/){.external}.

![WinRescue Windows](images/rescue-mode-06.png){.thumbnail}

#### Herramientas WinRescue

|Herramientas|Descripción|
|---|---|
|FreeCommander|Gestor de archivos con todas las funcionalidades estándar necesarias.|
|NTPWdi|Gestor de contraseñas fácil de utilizar. Permite reactivar o cambiar las contraseñas de las cuentas de usuario en el servidor. Esta herramienta es muy útil si pierde las claves de acceso o desea reactivar una cuenta de seguridad.|
|FileZilla|Cliente FTP de código abierto. Soporta los protocolos SSH y SSL, y dispone de una interfaz clara e intuitiva que permite arrastrar los elementos. Permite transferir los datos a un servidor FTP, como el espacio de backup FTP incluido con la mayoría de los servidores de OVHcloud.|
|7-Zip|Herramienta de compresión y archivado compatible con los siguientes formatos: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR y Z. Con 7-Zip también podrá crear sus propios archivos en los siguientes formatos: BZIP2, GZIP, TAR, WIM, XZ, Z y ZIP.|
|Avast Virus Cleaner|Aplicación antivirus con capacidad de análisis y limpieza de archivos.|
|ActivNIC|Herramienta que permite reactivar una tarjeta de red desactivada.|
|SRVFirewall|Script que activa o desactiva el firewall del servidor.|
|SysInternal|Suite de software de Microsoft compuesta por diversas herramientas para, entre otras tareas, el mantenimiento de la red o la gestión de los procesos.|
|Virtual Clone Drive|Herramienta que permite montar archivos BIN, CCD e ISO en un lector de CD virtual.|
|Firefox|Navegador web.|
|TestDisk|Potente aplicación para recuperar datos. Permite recuperar y modificar particiones corruptas, recuperar particiones eliminadas, reparar un sector de arranque o incluso reconstruir un MBR dañado.|

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com/){.external}.
