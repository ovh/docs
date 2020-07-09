---
title: 'Cambiar la contraseña root en un servidor dedicado Linux'
slug: cambiar-contrasena-root-linux-en-servidor-dedicado
excerpt: 'Cómo cambiar la contraseña root en un servidor dedicado Linux'
section: 'Diagnóstico y modo de rescate'
---

**Última actualización: 26/10/2018**

## Objetivo

Al instalar o reinstalar una distribución o sistema operativo, recibirá una contraseña para acceder en modo root. Es altamente recomendable cambiar esta contraseña, tal y como se explica en la guía [Proteger un servidor dedicado](https://docs.ovh.com/es/dedicated/seguridad-de-un-servidor-dedicado/){.external}. También es posible que necesite cambiarla porque la haya perdido.

**Esta guía explica cómo cambiar la contraseña root en un servidor dedicado Linux en ambos casos.**


## Requisitos

* Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external} con una distribución Linux instalada.
* Estar conectado por SSH con el usuario root (si dispone de la contraseña actual).
* Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (si no dispone de la contraseña actual).


## Procedimiento

### Cambiar la contraseña si puede conectarse como root

Si su usuario tiene permisos de root y conoce la contraseña, conéctese al servidor como root por SSH e introduzca el siguiente comando:

```sh
passwd
```

A continuación introduzca la nueva contraseña una primera vez y después confírmela introduciéndola de nuevo. Recibirá la siguiente respuesta:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> En las distribuciones Linux, **la contraseña no se mostrará** mientras la introduzca.
>

### Cambiar la contraseña en caso de haberla perdido u olvidado

#### 1. Identificar la partición del sistema

Una vez activado el [modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external} en el servidor, debe identificar la partición del sistema. Para ello, ejecute el siguiente comando:

```sh
fdisk -l

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

En el ejemplo anterior, la partición del sistema es **/dev/hda1**. 

> [!primary]
>
> Si el servidor dispone de una configuración de RAID por software, deberá montar el volumen RAID (por lo general **/dev/mdX**). 
>

#### 2. Montar la partición del sistema

Una vez identificada la partición del sistema, móntela utilizando el siguiente comando:

```sh
mount /dev/hda1 /mnt/
```

#### 3. Cambiar la partición root

Por defecto, no es posible editar la partición del sistema. Para desbloquear la edición, deberá crear un acceso de escritura utilizando el siguiente comando:

```sh
chroot /mnt
```

#### 4. Cambiar la contraseña root

Por último, modifique la contraseña con el siguiente comando:

```sh
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Una vez modificada la contraseña, cambie el modo de arranque en el servidor seleccionando `Arrancar en el disco duro`{.action} y reinicie. La contraseña se habrá cambiado.


## Más información

[Activar y utilizar el modo de rescate](https://docs.ovh.com/es/dedicated/modo_de_rescate/){.external}

[Cambiar la contraseña de administrador en un servidor dedicado Windows](https://docs.ovh.com/es/dedicated/cambiar-contrasena-administrador-en-servidor-windows/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.