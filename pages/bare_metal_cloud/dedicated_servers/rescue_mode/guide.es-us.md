---
title: "Activar y utilizar el modo de rescate"
excerpt: "Cómo utilizar el modo customer rescue de OVHcloud para solucionar los problemas de un servidor dedicado"
updated: 2026-01-09
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

El modo de rescate es una herramienta proporcionada por OVHcloud que le permite arrancar en un sistema operativo temporal con el objetivo de diagnosticar y resolver los problemas en su servidor.

El modo de rescate suele ser adecuado para las siguientes tareas:

- [Restablecimiento de contraseña de usuario](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)
- [Diagnóstico de problemas de red](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- Reparación de un sistema operativo defectuoso
- Corrección de una configuración incorrecta de un cortafuegos de software
- [Prueba del rendimiento de los discos](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)
- [Prueba del procesador y la memoria RAM](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

> [!warning]
>
> Asegúrese de realizar una copia de seguridad de sus datos si aún no dispone de copias de seguridad recientes.
>
> Si tiene servicios en producción en su servidor, el modo de rescate los interrumpirá hasta que la máquina se haya reiniciado en modo normal.
>

**Esta guía explica cómo reiniciar un servidor en modo de rescate y cómo utilizarlo.**

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal).
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager).

## Procedimiento

Para utilizar el modo de rescate, debe modificar el parámetro `Netboot` del servidor. A continuación, el servidor debe reiniciarse.

Conéctese a su [área de cliente de OVHcloud](/links/manager), abra la sección `Bare Metal Cloud`{.action} y luego `Servidores dedicados`{.action}.

Haga clic en el nombre de su servidor para abrir la pestaña `Información general`{.action}.

### Activación del modo de rescate

En el cuadro **Información general**, haga clic en el botón `...`{.action} situado junto a `Boot`. Haga clic en `Editar`{.action} en el menú contextual.

![Cambiar modo de arranque](images/rescue-mode-001.png){.thumbnail}

<a name="netboot"></a>

#### 1: Opciones del modo de rescate

En la página **Editar el netboot**, seleccione `Arrancar en modo rescue`{.action}.

![Cambiar modo de arranque](images/rescue-mode-002.png){.thumbnail}

Las opciones disponibles para el modo de rescate dependen del tipo de servidor y del **sistema operativo** instalado.

- Customer rescue system (siempre disponible)
- Windows customer rescue system (disponible para los servidores Windows)
- [iPXE](https://ipxe.org) / ipxe-shell (herramienta de código abierto externa, siempre disponible)
- [Legacy Windows rescue system](#windows_legacy) (sistema WinPE desusado, solo relevante si el servidor no cumple los requisitos del modo de rescate actual para Windows)

> [!primary]
>
> Las instrucciones siguientes sólo se aplican al **customer rescue system**, la opción más utilizada.
>
> Consulte nuestra [guía dedicada para obtener información detallada sobre el uso del **modo de rescate para Windows**](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows).

Seleccione `Customer rescue system`{.action} en el menú desplegable.

#### 2: Opciones de autenticación

La siguiente opción determina el método de autenticación para la conexión SSH al sistema en modo de rescate. Se trata principalmente de una cuestión de comodidad, ya que cada sesión en modo de rescate se supone que es transitoria y se eliminará una vez que haya reiniciado el servidor desde su disco.

- **Autenticación con contraseña**: las claves se le comunicarán por correo electrónico.
- **Autenticación mediante llave** : Puede utilizar una llave pública de autenticación de su elección (formatos compatibles: `RSA`, `ECDSA`, `ED25519`).

Haga clic en la pestaña correspondiente a su forma de conexión:

> [!tabs]
> Autenticación de contraseña
>>
>> Haga clic en `Autenticación con contraseña`{.action}.
>>
>>![Auth method](images/rescue-mode-003.png){.thumbnail width="700"}
>>
>> El email de notificación del modo de rescate, junto con sus claves de acceso, se enviará a la dirección de correo electrónico de contacto de su cuenta de OVHcloud. Para utilizar otra dirección de correo electrónico, introdúzcala en el campo `Recibir las claves del modo de la dirección de correo electrónico`.
>>
>> Pulse `Siguiente`{.action}.
>>
> Autenticación mediante llave
>>
>> Haga clic en `Autenticación por llave SSH`{.action}.
>>
>>![Auth method](images/rescue-mode-004.png){.thumbnail width="700"}
>>
>> Tiene dos posibilidades:
>>
>> - Seleccione una clave en el menú emergente. Es necesario tener al menos una [public key stored in the OVHcloud Control Panel](/pages/bare_metal_cloud/dedicated_servers/import-keys-control-panel).
>> - Copie manualmente la cadena de clave pública y péguela en el campo `Su clave SSH pública`.
>>
>> Para más información, consulte nuestras guías:
>>
>> - [How to create and use keys for SSH authentication](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [How to create and use keys for SSH authentication with PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>
>> > [!success]
>> > Puede añadir una clave pública por defecto para el modo de rescate de un servidor a través de la API de OVHcloud. Para obtener más información, consulte la [sección de guía a continuación](#rescuessh)
>>
>> Pulse `Siguiente`{.action}.
>>


#### 3: Últimos pasos para activar el modo de rescate

En el paso **Resumen**, haga clic en `Aceptar`{.action}.

![Summary](images/rescue-mode-005.png){.thumbnail}

Ahora debería recibir una notificación sobre el parámetro `Netboot` en la pestaña `Información general`{.action}.

![Netboot](images/rescue-mode-006.png){.thumbnail}

El último paso consiste en reiniciar el servidor. Haga clic en el botón `...`{.action} situado junto a "Estado" en el cuadro **Estado de los servicios** y seleccione `Reiniciar`{.action}. Haga clic en `Aceptar`{.action} en la ventana emergente.

![Reboot](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/dedicated-servers/general-information/rebooting-your-server.png){.thumbnail}

Este *hard reboot* tardará unos minutos en completarse. Puede comprobar el estado actual en la pestaña `Tareas`{.action}.

> [!primary]
>
> Una vez que haya completado las acciones en modo de rescate, no olvide cambiar el parámetro `Netboot` a `Arrancar en el disco duro`{.action} antes de reiniciar el servidor.

### Acceder al servidor en modo de rescate por SSH

Una vez recibido el email de notificación de la activación del modo de rescate, puede conectarse al sistema del modo de rescate y acceder a su servidor.  
Una vez enviado el mensaje de correo electrónico, ya puede consultarlo en el [área de cliente de OVHcloud](/links/manager). Haga clic en el nombre asociado a su ID de cliente en la esquina superior derecha y seleccione `Correo de servicio`{.action}.

> [!primary]
>
> Su cliente SSH bloqueará normalmente la conexión al principio debido a una incompatibilidad de la huella digital ECDSA. Esto es normal porque el modo de rescate utiliza su propio servidor SSH temporal. Para resolver este problema, edite el archivo `known_hosts` de su carpeta local `.ssh`.  
> Existen dos posibilidades:
>
> - **Eliminar la huella digital del archivo.** El cliente SSH añadirá una nueva huella digital al servidor cuando deje de utilizar el modo de rescate. Para más información, consulte «Login y fingerprint» en nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).
>
> - **Desactivar temporalmente la huella digital.** Abra el archivo `known_hosts` con un editor de texto e identifique la cadena de huella digital de su servidor por su dirección IP. Agregue el carácter `#` al principio de la línea. Por lo tanto, esta línea ahora es un "comentario" y será ignorada por las aplicaciones que leen el archivo. No olvide cancelar este cambio antes de volver a poner `Netboot` en modo "normal".
>

Haga clic en la ficha correspondiente al método de conexión seleccionado:

> [!tabs]
> Autenticación de contraseña
>>
>> Abra la aplicación de línea de comandos en su dispositivo local e introduzca el siguiente comando:
>>
>> ```bash
>> ssh root@SERVER_IP
>> ```
>>
>> Ejemplo:
>>
>> ```bash
>> ssh root@203.0.113.100
>> ```
>>
>> Introduzca la contraseña del modo de rescate temporal cuando se le solicite.
>>
>> ```console
>> root@ns9356771.ip-203-0-113.eu's password:
>> root@rescue-customer-eu (ns9356771.ip-203-0-113.eu) ~ #
>> ```
>>
>> Para más información sobre las conexiones SSH, consulte nuestra [guía de introducción al SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).  
>> También puede utilizar cualquier herramienta de conexión SSH, como [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).
>>
> Autenticación mediante llave
>>
>> Abra la aplicación de línea de comandos en su dispositivo local e introduzca el siguiente comando:
>>
>> ```bash
>> ssh -i USER_FOLDER/.ssh/KEY_FILE_NAME root@SERVER_IP
>> ```
>>
>> Ejemplo:
>>
>> ```bash
>> ssh -i ~/.ssh/MyAuthKey root@203.0.113.100
>> ```
>>
>> Si se le solicita, escriba su contraseña para descifrar el archivo de clave privada.
>>
>> Para más información, consulte nuestras guías:
>>
>> - [Cómo crear y utilizar claves para la autenticación SSH](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)
>> - [Cómo crear y utilizar claves para la autenticación SSH con PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows)
>>

### Montaje de las particiones para acceder a sus archivos

A menos que tenga intención de configurar los discos del servidor de una forma que requiera que se desvinculen (*unmounted*), deberá **montar la partición del sistema** para acceder a sus datos desde el modo de rescate.

En primer lugar, enumere todas las particiones para obtener el nombre de la partición que necesita montar:

```bash
lsblk
```

Ejemplos de resultados:

```console
NAME      MAJ:MIN RM  SIZE RO TYPE  MOUNTPOINT
sda         8:0    0  1.8T  0 disk
├─sda1      8:1    0  511M  0 part
├─sda2      8:2    0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
├─sda3      8:3    0  512M  0 part
└─sda4      8:4    0    2M  0 part
sdb         8:16   0  1.8T  0 disk
├─sdb1      8:17   0  511M  0 part
├─sdb2      8:18   0  1.8T  0 part
│ └─md127   9:127  0  1.8T  0 raid1
└─sdb3      8:19   0  512M  0 part
```

```console
NAME        MAJ:MIN RM   SIZE RO TYPE  MOUNTPOINT
nvme1n1     259:0    0 894.3G  0 disk
├─nvme1n1p1 259:2    0   511M  0 part
├─nvme1n1p2 259:3    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme1n1p3 259:4    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
└─nvme1n1p4 259:5    0   512M  0 part
nvme0n1     259:1    0 894.3G  0 disk
├─nvme0n1p1 259:6    0   511M  0 part
├─nvme0n1p2 259:7    0     1G  0 part
│ └─md2       9:2    0  1022M  0 raid1
├─nvme0n1p3 259:8    0 892.3G  0 part
│ └─md3       9:3    0 892.1G  0 raid1
├─nvme0n1p4 259:9    0   512M  0 part
└─nvme0n1p5 259:10   0     2M  0 part
```

A continuación, monte la partición correspondiente:

```bash
mount /dev/PARTITION_NAME /MOUNT_POINT/
```

La partición a montar debe ser fácilmente identificable por **SIZE** indicado en la tabla (`sda2` en el primer ejemplo, `nvme1n1p3` en el segundo). Sin embargo, en [configuración RAID por software](/pages/bare_metal_cloud/dedicated_servers/raid_soft) (un `raid1` por defecto en los ejemplos), deberá utilizar el identificador del volumen RAID (`mdX`).  
Utilizando el nombre de carpeta `mnt` como punto de montaje, para el primer ejemplo el comando `mount` sería por tanto el siguiente:

```bash
mount /dev/md127 /mnt/
```

Comando a introducir para el segundo ejemplo:

```bash
mount /dev/md3 /mnt/
```

> [!warning]
> En los ejemplos anteriores se muestran los pasos necesarios basados en una configuración de servidor típica. La información de la tabla de salida depende del hardware del servidor y del esquema de partición. En caso de duda, consulte la documentación del sistema operativo.
>
> Si necesita ayuda profesional para administrar su servidor, consulte la sección [Más información](#gofurther) de esta guía.

Para obtener información más técnica sobre los discos y las particiones del servidor, utilice el comando:

```bash
fdisk -l
```

Algunas tareas pueden requerir la desconexión de discos o particiones. Para ello, utilice el comando unmount:

```bash
umount /mnt
```

#### VMware - Montar un datastore

/// details | Despliegue esta sección

Puede montar un datastore VMware de la misma manera que se describe en el paso anterior.

Enumere sus particiones para obtener el nombre de la partición del datastore:

```bash
lsblk
```

```bash
fdisk -l
```

Monte la partición con el siguiente comando, sustituyendo `sdbX` por el valor identificado en el paso anterior:

```bash
vmfs-fuse /dev/sdbX /mnt
```

Si tiene datastores `VMFS 6`, vaya a la carpeta `sbin` y cree la carpeta de montaje:

```bash
cd /usr/local/sbin/
mkdir /mnt/datastore
```

Enumere sus particiones para obtener el nombre de la partición del datastore:

```bash
lsblk
```

```bash
fdisk -l
```

Monte la partición con el siguiente comando, sustituyendo `sdbX` por el valor identificado en el paso anterior:

```bash
vmfs6-fuse /dev/sdbX /mnt/datastore/
```

///

Una vez finalizada la operación de montaje, puede acceder a los archivos y realizar tareas de solución de problemas dentro de la carpeta que haya establecido como punto de montaje. Ejemplo:

```bash
cd /mnt
```

Algunas operaciones del sistema de archivos (como la configuración de las cuentas de usuario) requerirán un paso adicional. Cree un entorno temporal `chroot` en el punto de montaje con este comando:

```bash
chroot /mnt/
```

Ahora debería poder aplicar todos los cambios necesarios al sistema, por ejemplo, para [recuperar el acceso al servidor](#gofurther).

### Configuración de la agregación de enlaces en modo de rescate

La agregación de enlaces (LACP) es muy ventajosa, ya que permite aumentar el ancho de banda total de su servidor y, al mismo tiempo, ofrece redundancia de red en caso de fallo de una interfaz de red.

Aunque el modo de rescate se basa en el sistema operativo Debian 12, su configuración de red se basa en la utilidad `ifupdown`, en lugar de `Netplan`.

Si dispone de un servidor que admite la agregación de enlaces y desea configurarla en modo de rescate, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

### Salida del modo de rescate

Si es necesario, vuelva al shell de conexión del modo de rescate introduciendo:

```bash
exit
```

En su [área de cliente de OVHcloud](/links/manager), [cambie el modo de arranque](#netboot) de nuevo a `Arrancar en el disco duro`{.action} y acepte.

![Netboot Disk](images/rescue-mode-007.png){.thumbnail}

Ya puede reiniciar el servidor desde el shell del modo de rescate:

```bash
reboot
```

También puede utilizar la función `Reiniciar`{.action} en su área de cliente.

<a name="rescuessh"></a>

### Cómo añadir una clave de autenticación predeterminada para el modo de rescate

/// details | Despliegue esta sección

Para acelerar el proceso, puede añadir a su servidor una clave pública por defecto para el acceso SSH en modo de rescate. Solo es posible a través de la [API de OVHcloud](/pages/manage_and_operate/api/first-steps).

Para ello, abra el siguiente extremo de API en la consola de API web:

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Introduzca el nombre interno del servidor (`ns1111111.ip-203-0-113.eu`) en el campo correspondiente.

A continuación, edite el campo de texto siguiente de la siguiente manera:

```bash
{
  "rescueSshKey": "string"
}
```

Sustituya `string` por la cadena de clave pública completa.

El resultado debe ser similar al siguiente ejemplo:

![rescue key ejemplo](images/rescue-mode-008.png){.thumbnail}

Una vez que haya introducido los valores correctamente, haga clic en el botón `EXECUTE`{.action}.

El campo `Su llave SSH pública` se rellenará automáticamente con esta cadena de llave el [cambio del modo `Netboot`](#netboot).

///

<a name="windows_legacy"></a>

### Legacy Windows rescue system (modo de rescate WinPE)

/// details | Despliegue esta sección

Una vez recibido el email de notificación de la activación del modo de rescate, puede conectarse al sistema del modo de rescate y acceder a su servidor.  
Una vez enviado el mensaje de correo electrónico, ya puede consultarlo en el [área de cliente de OVHcloud](/links/manager). Haga clic en el nombre asociado a su ID de cliente en la esquina superior derecha y seleccione `Correo de servicio`{.action}.

Para utilizar la interfaz gráfica del modo de rescate de Windows PE, debe descargar e instalar una consola VNC o utilizar el [módulo IPMI](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers) (no disponible en todos los modelos de servidor).

![Winrescue Windows](images/rescue-mode-009.png){.thumbnail}

Las siguientes herramientas ya están instaladas en este modo:

|Herramienta|Descripción|
|---|---|
|Mozilla ULight|Un navegador web.|
|Memory Diagnostics Tool|Una herramienta Windows que permite probar la memoria RAM.|
|Explorer_Q-Dir|Un explorador de archivos.|
|GSmartControl|Una herramienta de verificación de discos duros y discos duros SSD.|
|PhotoRec|Una herramienta de recuperación de archivos potencialmente perdidos en un disco.|
|SilverSHielD|Un servidor SSH2 y SFTP.|
|System Recovery|Una herramienta Windows de restauración y reparación del sistema.|
|TestDisk|Potente aplicación para recuperar datos. Permite recuperar y modificar particiones corruptas, recuperar particiones eliminadas, reparar un sector de arranque o incluso reconstruir un MBR dañado.|
|FileZilla|Cliente FTP de código abierto. Soporta los protocolos SSH y SSL, y dispone de una interfaz clara e intuitiva que permite arrastrar los elementos. Puede utilizarse para transferir sus datos a un servidor FTP, como el espacio de backup FTP incluido con la mayoría de los servidores de OVHcloud.|
|7-Zip|Herramienta de compresión y archivado compatible con los siguientes formatos: ARJ, CAB, CHM, CPIO, CramFS, DEB, DMG, FAT, HFS, ISO, LZH, LZMA, MBR, MSI, NSIS, NTFS, RAR, RPM, SquashFS, UDF, VHD, WIM, XAR y Z. Con 7-Zip también podrá crear sus propios archivos en los siguientes formatos: BZIP2, GZIP, TAR, WIM, XZ, Z y ZIP.|

///

<a name="gofurther"></a>

## Más información

[Cómo utilizar el modo de rescate para Windows](/pages/bare_metal_cloud/dedicated_servers/rescue-customer-windows)

[Cómo recuperar el acceso al servidor si se pierde la contraseña de usuario](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

[Cómo sustituir las claves de autenticación para el acceso SSH en caso de pérdida de clave](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)

[Configuración y reconstrucción de RAID por software](/pages/bare_metal_cloud/dedicated_servers/raid_soft)

[Cómo diagnosticar los problemas de hardware de los servidores](/pages/bare_metal_cloud/dedicated_servers/hardware-diagnose)

[Cómo utilizar la consola IPMI con un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).