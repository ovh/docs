---
title: 'Cambiar la contraseña root en un servidor dedicado'
excerpt: 'Cómo cambiar la contraseña root de un servidor dedicado'
updated: 2021-02-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 16/02/2021**

## Objetivo

Puede ser necesario cambiar la contraseña root (o la de su usuario admin/sudo) en su sistema operativo GNU/Linux.
<br>Existen dos posibles situaciones:

- Todavía puede conectarse por SSH
- No puede conectarse por SSH porque ha perdido la contraseña.

**Esta guía explica cómo cambiar la contraseña de administrador en función de la situación inicial.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/gi7JqUvcEt0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external}.
- Disponer de las claves de acceso recibidas por correo electrónico tras la instalación (si estas siguen siendo válidas).
- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} (para utilizar el modo de rescate).

> [!warning]
>OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
>Esta guía le ayudará en la mayor medida posible a realizar las tareas habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la ejecución de los servicios en un servidor, le recomendamos que contacte con un proveedor de servicios especializado.
>

## Procedimiento

### Cambiar la contraseña si siempre tiene acceso (usuario sudo o root)

Conéctese al servidor por SSH. Cambie al usuario root si fuera necesario:

```bash
sudo su -
#
```

Para cambiar la contraseña del usuario actual, escriba `passwd`. A continuación introduzca la nueva contraseña una primera vez y después confírmela introduciéndola de nuevo. Recibirá la siguiente respuesta:

```bash
passwd

New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Tenga en cuenta que en una distribución GNU/Linux, los caracteres de su contraseña **no aparecen** mientras los escribe.
>

### Cambiar la contraseña si la ha perdido

#### 1. Identificar la partición del sistema

Una vez reiniciado el servidor en [modo de rescate](/pages/cloud/dedicated/rescue_mode), deberá identificar la partición del sistema. Para ello, ejecute el siguiente comando:

```bash
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

En el ejemplo anterior, la partición del sistema es /dev/hda1.

> [!primary]
>
> Si su servidor dispone de una configuración RAID, debe montar el volumen RAID:
>
> - con un RAID por software, la partición raíz será `/dev/mdX`.
> - con un RAID por hardware, la partición raíz será `/dev/sdX`.
>

#### 2. Montar la partición del sistema

Una vez identificada la partición del sistema, móntela utilizando el siguiente comando:

```bash
mount /dev/hda1 /mnt/
```

#### 3. Cambiar la partición root

De forma predeterminada, la partición del sistema está bloqueada para editarla. Para acceder a la escritura, utilice el siguiente comando:

```bash
chroot /mnt
```

#### 4. cambiar la contraseña root

Para terminar, debe cambiar la contraseña con el siguiente comando:

```bash
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Una vez realizado este paso, cambie el modo de arranque en el servidor para `arrancar en el disco duro`{.action} y reinicie. Se ha cambiado la contraseña root.

## Más información

[Activar y utilizar el modo de rescate](/pages/cloud/dedicated/rescue_mode)

[Proteger un servidor dedicado](/pages/cloud/dedicated/securing-a-dedicated-server)

[Cambiar la contraseña de administrador en un servidor dedicado Windows](/pages/cloud/dedicated/changing-admin-password-on-windows)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.