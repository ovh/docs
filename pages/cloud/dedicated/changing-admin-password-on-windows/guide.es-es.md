---
title: 'Cambiar la contraseña de administrador en un servidor dedicado Windows'
slug: "cambiar-contrasena-administrador-en-servidor-windows"
excerpt: 'Cómo cambiar la contraseña de administrador en un servidor dedicado Windows'
section: Diagnóstico y modo de rescate
order: 2
---

**Última actualización: 16/12/2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Al instalar o reinstalar un sistema operativo Windows, recibirá una contraseña para acceder como administrador. Le recomendamos encarecidamente que cambie esta contraseña, tal y como se explica en la guía [Proteger un servidor dedicado](../seguridad-de-un-servidor-dedicado/). Si ha perdido la contraseña de administrador, deberá restaurarla en modo de rescate.

**Esta guía le ayudará a cambiar la contraseña de su servidor a través de las configuraciones de modo de rescate disponibles para el sistema operativo Windows.**

## Requisitos

* Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external} con Windows instalado.
* Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

Las siguientes etapas describen el proceso de modificación de la contraseña local a través del modo de rescate de OVHcloud (basado en Linux), que está disponible en todo momento. Si prefiere utilizar Windows PE (WinRescue), consulte el método dedicado [al final de esta guía](./#restaurar-la-contrasena-de-administrador-con-winrescue_1).

### 1. reiniciar el servidor en modo de rescate

El sistema debe arrancarse en modo de rescate antes de poder cambiar la contraseña de administrador. Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en el menú de `Servidores Dedicados`{.action}.

El netboot debe pasarse a "rescue64-pro (Customer rescue system (Linux)". Busque "Boot" en la zona **Información general** y haga clic en `...`{.action} y luego en `Editar`{.action}.
<br>En la nueva ventana, marque **Arrancar en modo rescue** y seleccione "rescue64-pro" en el menú. Indique una dirección de correo electrónico en el último campo si las claves de acceso deben enviarse a una dirección distinta de la dirección principal de su cuenta de OVHcloud. 

Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action}.

![rescuemode](images/adminpw_win_001.png){.thumbnail}

Una vez que haya realizado los cambios, haga clic en `...`{.action} a la derecha de "Estado" en la zona titulada **Estado de los servicios**.
<br>Haga clic en `Reiniciar`{.action} y el servidor se reiniciará en modo de rescate. Esta operación puede tardar unos minutos.
<br>Puede comprobar el progreso en la pestaña `Tareas`{.action}. Recibirá un mensaje de correo electrónico con los identificadores (incluida la contraseña de conexión) del usuario root del modo de rescate.

![rescuereboot](images/adminpw_win_02.png){.thumbnail}

Para más información sobre el modo de rescate, consulte [esta guía](../modo_de_rescate/).

### 2. Montar la partición del sistema

Conéctese al servidor por SSH. Si fuera necesario, consulte la guía [Introducción al SSH](../introduccion-ssh/).

Dado que se trata de un servidor Windows, las particiones se titularán "Microsoft LDM data".

```
# fdisk -l
Disk /dev/sda: 1.8 TiB, 200398934016 bytes, 3907029168 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 512 bytes
Disklabel type: gpt
Disk identifier: 54A5B25A-75B9-4355-9185-8CD958DCF32A
 
Device          Start        End    Sectors  Size Type
/dev/sda1        2048     718847     716800  350M EFI System
/dev/sda2      718848     720895       2048    1M Microsoft LDM metadata
/dev/sda3      720896     980991     260096  127M Microsoft reserved
/dev/sda4      980992 3907028991 3906048000  1.8T Microsoft LDM data
/dev/sda5  3907028992 3907029134        143 71.5K Microsoft LDM data
```

En este ejemplo, "sda4" es la partición del sistema, determinada por su tamaño. Por lo general, también existe una segunda partición espejo, que en este caso se denomina “/dev/sdb**X**”. ya que, en la mayoría de los casos, el servidor tendrá varios discos con patrones de partición idénticos. Para el proceso de restauración de la contraseña, solo es importante el primero. 

monte esta partición:

```
# mount /dev/sda4 /mnt
```

Compruebe el punto de montaje:

```
# lsblk
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sdb 8:16 0 1.8T 0 disk
├ sb4:20 0 1.8T 0 part
├─sdb2   8:18   0    1M  0 part
├ sdb5:21 0 71.5K 0 part
├db3:19 0 127M 0 part
└ sdb1:17 0 350M 0 part
sda 8:0 0 1.8T 0 disk
├ sms4:4 0 1.8T 0 part /mnt
├ 2:0 1M 0 part
part5:5 071.5K
part8:3 0 127M 0
└ Spart1:1 0 350M 0 part
```

En el ejemplo anterior, la operación se realizó con éxito. Si el montaje no ha podido realizarse, probablemente recibirá un mensaje de error similar al siguiente: 

```
The disk contains an unclean file system (0, 0).
Metadata kept in Windows cache, refused to mount.
Failed to mount '/dev/sda4': Operation not permitted
The NTFS partition is in an unsafe state. Please resume and shutdown
Windows fully (no hibernation or fast restarting), or mount the volume
read-only with the 'ro' mount option.
```

En ese caso, utilice el siguiente comando y vuelva a intentar montar la partición.

```
# ntfsfix /dev/sda4
# mount /dev/sda4 /mnt
```

### 3. eliminar la contraseña actual

En este paso, puede manipular el archivo *SAM* con una herramienta que permite borrar la contraseña del usuario admin. Acceda a la carpeta adecuada e identifique los usuarios Windows:

```
# cd /mnt/Windows/System32/config
/mnt/Windows/System32/config# chntpw -l SAM

chntpw version 1.00 140201, (c) Petter N Hagen
Hive <SAM> name (from header): <\SystemRoot\System32\Config\SAM>
ROOT KEY at offset: 0x001020 * Subkey indexing type is: 686c <lh>
File size 65536 [10000] bytes, containing 8 pages (+ 1 headerpage)
Used for data: 359/39024 blocks/bytes, unused: 33/18064 blocks/bytes.

| RID -|---------- Username ------------| Admin? |- Lock? --|
| 03e8 | admin                          | ADMIN  | dis/lock |
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

Si el comando no funciona, instale la herramienta primero: `apt get install chntpw`.

Borre la contraseña del usuario admin con el siguiente comando. (Seleccione "Administrator" si "admin" no existe.)

```
# chntpw -u admin SAM
chntpw version 1.00 140201, (c) Petter N Hagen
Hive <SAM> name (from header): <\SystemRoot\System32\Config\SAM>
ROOT KEY at offset: 0x001020 * Subkey indexing type is: 686c <lh>
File size 65536 [10000] bytes, containing 8 pages (+ 1 headerpage)
Used for data: 361/39344 blocks/bytes, unused: 35/13648 blocks/bytes.
 
================= USER EDIT ====================
 
RID     : 1000 [03e8]a
Username: admin
fullname:
comment :
homedir :
 
00000221 = Users (which has 3 members)
00000220 = Administrators (which has 2 members)
 
Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |
 
Failed login count: 0, while max tries is: 0
Total  login count: 5
 
- - - - User Edit Menu:
 1 - Clear (blank) user password
(2 - Unlock and enable user account) [seems unlocked already]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Introduzca "1" y pulse Entrar (↩). (En primer lugar, utilice la opción 2 si aparece una "X" delante de "Disabled").

```
Select: [q] > 1
Password cleared!
================= USER EDIT ====================
 
RID     : 1000 [03e8]
Username: admin
fullname:
comment :
homedir :
 
00000221 = Users (which has 3 members)
00000220 = Administrators (which has 2 members)
 
Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |
 
Failed login count: 0, while max tries is: 0
Total  login count: 5
** No NT MD4 hash found. This user probably has a BLANK password!
** No LANMAN hash found either. Try login with no password!
 
- - - - User Edit Menu:
 1 - Clear (blank) user password
(2 - Unlock and enable user account) [seems unlocked already]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Pulse "q" y pulse Entrar para salir de la herramienta. Pulse "y" cuando se le pida y pulse Entrar.

```
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  <SAM>
Write hive files? (y/n) [n] : y
 0  <SAM> - OK
```

### 4. Reiniciar el servidor 

En primer lugar, sustituya el netboot por **Arrancar en el disco duro** en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) (ver [Etapa 1](./#1-reiniciar-el-servidor-en-modo-de-rescate_1)). 

Desmonte la partición y reinicie el servidor con los siguientes comandos:

```
# cd
# umount /mnt
# reboot

Broadcast message from root@rescue.ovh.net on pts/0 (Wed 2020-05-27 11:28:53 CEST):

The system is going down for reboot NOW!
```

### 5. establecer una nueva contraseña (IPMI)

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la pestaña `IPMI`{.action} para abrir una sesión de KVM.

![IPMI](images/adminpw_win_03.png){.thumbnail}

#### 5.1. para una versión reciente de Windows

La interfaz de conexión debería mostrar un mensaje indicando la expiración de la contraseña.

![pwreset](images/adminpw_win_04.png){.thumbnail}

La nueva contraseña del usuario admin debe introducirse dos veces. Sin embargo, el campo de confirmación todavía no está visible, lo que significa que debe dejar el primer campo vacío, introducir su nueva contraseña en el segundo campo y utilizar la tecla de tabulación (“ ↹ ”) del teclado (virtual) para pasar al tercer campo (“Confirmar la contraseña”).
<br>Vuelva a introducir la contraseña y haga clic en la flecha para guardarla.

![enterpw](images/adminpw_win_05.png){.thumbnail}

Haga clic en `Aceptar`{.action} y estará conectado.

![adminlogin](images/adminpw_win_06.png){.thumbnail}

#### 5.2. para una versión anterior de Windows

Una vez establecida la sesión de KVM, se abrirá una ventana de línea de comandos (cmd).

Establezca la contraseña del usuario actual ("Administrator"):

```
net user Administrator *
```

![administratorpw](images/adminpw_win_07.png){.thumbnail}

> [!primary]
>
Se recomienda utilizar el teclado virtual al introducir las contraseñas en esta interfaz.
>


### Restaurar la contraseña de administrador con WinRescue

#### 1. reiniciar el servidor en modo de rescate

El sistema debe arrancarse en modo de rescate antes de poder cambiar la contraseña de administrador. Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en el menú de `Servidores Dedicados`{.action}.

El netboot debe migrarse a "WinRescue (Rescue System for Windows)". Busque "Boot" en la zona **Información general** y haga clic en `...`{.action} y luego en `Editar`{.action}.
<br>En la nueva ventana, marque **Arrancar en modo rescue** y seleccione "WinRescue" en el menú. Indique una dirección de correo electrónico en el último campo si las claves de acceso deben enviarse a una dirección distinta de la dirección principal de su cuenta de OVHcloud. 

Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action}.

![winrescuemode](images/adminpw_win_008.png){.thumbnail}

Una vez que haya realizado los cambios, haga clic en `...`{.action} a la derecha de "Estado" en la zona titulada **Estado de los servicios**.
<br>Haga clic en `Reiniciar`{.action} y el servidor se reiniciará en modo de rescate. Esta operación puede tardar unos minutos.
<br>Puede comprobar el progreso en la pestaña `Tareas`{.action}.
<br>Recibirá un mensaje de correo electrónico con las claves (incluida la contraseña de conexión) del usuario root del modo de rescate.

![rescuereboot](images/adminpw_win_02.png){.thumbnail}

Para más información sobre el modo de rescate, consulte [esta guía](../modo_de_rescate/).

#### 2. eliminar la contraseña actual

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la pestaña `IPMI`{.action} para abrir una sesión de KVM.

![IPMI](images/adminpw_win_03.png){.thumbnail}

Para restaurar las contraseñas, es necesaria la herramienta NTPWEdit. Una vez conectado a través del KVM, abra el navegador y descargártelo desde el [sitio web oficial](http://www.cdslow.org.ru/en/ntpwedit/). 

Navegue hasta la carpeta en la que se encuentra el archivo ZIP descargado y obtenga el contenido. Abra el ejecutable *ntpwedit64* para iniciar la aplicación.

![ntpwedit](images/adminpw_win_09.png){.thumbnail}

En esta interfaz puede manipular el archivo *SAM* para borrar la contraseña del usuario admin. La ruta de acceso predeterminada del directorio *WINDOWS* se autocompletará. Abra el archivo para ver la lista de usuarios haciendo clic en `Abrir`{.action}.

El usuario en cuestión será "admin" o "Administrator", según la versión de Windows. Si ambos están presentes, seleccione "admin". Haga clic en `Cambiar la contraseña`{.action}.

![ntpwedit](images/adminpw_win_10.png){.thumbnail}

En la nueva ventana, deje los campos vacíos y haga clic en `Aceptar`{.action}. Finalice haciendo clic en `Guardar los cambios`{.action} y luego en `Salir`{.action}.

El servidor debe reiniciarse.

#### 3. reiniciar el servidor 

En primer lugar, sustituya el netboot por **Arrancar en el disco duro** en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) (ver [Etapa 1](./#1-reiniciar-el-servidor-en-modo-de-rescate_1)). 

Al volver a la ventana de KVM, seleccione la opción de apagado `Reiniciar`{.action} con el botón Windows "Iniciar" en la parte inferior izquierda.

Continúe leyendo esta guía en el [apartado 5. establecer una nueva contraseña (IPMI)](./#5-establecer-una-nueva-contrasena-ipmi).


## Más información

[Activar y utilizar el modo de rescate](../modo_de_rescate/)

[Utilizar IPMI en un servidor dedicado](../utilizar-ipmi-servidor-dedicado/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
