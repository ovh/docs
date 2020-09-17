---
title: 'Visualización del registro de inicio en el KVM'
slug: boot-log
section: Diagnóstico y modo de rescate
---

**Última actualización: 26/01/2018**


## Resumen

Si su VPS no está respondiendo correctamente como usted espera, la manera rápida de diagnosticar el problema es revisar que ocurre en el KVM. En esta, guia le explicaremos como modificar la pantalla para que todo se muestra en la consola y en el KVM.

Tenga en cuenta que para algunos entornos, el KVM no proporciona ninguna información útil porque la secuencia de arranque se produce en la consola o GRUB está configurado en modo silencioso.

## Requisitos

- Usted debe de tener acceso a su VPS o su instancia Public Clod en [modo rescate](../rescue){.external}

## Procedimiento

Si su VPS esta funcionado con normalidad, vaya directamente al paso 4.

> [!warning]
>
> Estas modificaciones podría cambiar la configuración del GRUB. Asegúrese de realizar una copia de seguridad antes de realizar cualquier modificación. OVHclod no se responsabiliza del daño o de la perdida de datos después de estas operaciones.
>

### Paso 1: Verificación inicial

Después de conectarse,  debe de revisar el nombre del disco con el comando `lsblk`:

```sh
lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 3G 0 disk
└─sda1 8:1 0 3G 0 part /
sdb 8:16 0 10G 0 disk
└─sdb1 8:17 0 10G 0 part
```

Aquí, el disco principal es `sdb` y la partición es `sdb1` (`sda` es el disco de rescate y `sda1` es la partición de rescate montada en `/`)

Si el resultado es lo siguiente, su disco principal es `vdb` y su partición es `vdb1` (`vda` es el disco de rescate y `vda1` es la partición de rescate montada en `/`

```sh
lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 8:0 0 3G 0 disk
└─vda1 8:1 0 3G 0 part /
vdb 8:16 0 10G 0 disk
└─vdb1 8:17 0 10G 0 part
```
> [!primary]
>
> Para esta, guia, necesitará usar `sdb`. Si su disco es `vdb`, simplemente remplace sdb con vdb para cada comando.

### Paso 1b: Solo para VPS

En modo rescate de su VPS, el disco principal ya está montado. Por lo tanto, primero debe desmontarse y volver a montarlo con la configuración correcta:

```sh
umount /dev/sdb1
```

### Paso 2: Montar el disco

Ahora que el nombre del disco está bien identificado, usted puede montarlo con la configuración correcta:

```sh
mount /dev/sdb1 /mnt
mount -t proc none /mnt/proc
mount -o bind /dev /mnt/dev
mount -t sysfs none /mnt/sys/
```
Estos comandos le permitirá usar el comando `chroot` e iniciar los comando que requieren el acceso a los directorios `sys`, `dev` y `proc`.

### Paso 3: Iniciar el comando CHROOT


Para aplicarlo directamente al sistema, utilice el siguiente comando:

```sh
chroot /mnt
```

A partir de ahora, todos los comandos serán aplicados a su VPS y no a su modo rescate.

> [!primary]
>
> Cuando usted tenga el modo rescate, verá la siguiente información:
>
> ```sh
>  root@serveur-3:~#
> ```
>  Después de ejecutar `chroot`, lo verá:
> 
> ```
> [root@serveur-3 ~]#
> ```
>
> Tenga en cuanta que los corchetes [ ], confirman qu usted está en el entorno CHROOT
>

### Paso 4: Realice las modificaciones

Para acceder al log de arranque de su KVM, asegúrese que tiene los siguientes valores en el fichero /etc/default/grub:

-  Para CentOS 6 y 7

```sh
GRUB_TERMINAL_OUTPUT="console"
GRUB_CMDLINE_LINUX="crashkernel=auto rhgb"
GRUB_CMDLINE_LINUX_DEFAULT="console=tty0 console=ttyS0"
```

Si no tiene los siguientes valores, debe de modificar el fichero y guardarlo.

Con el siguiente comando puede regenerar el fichero de configuración GRUB (los valores serán guardas en el siguiente reinicio)

```sh
grub2-mkconfig -o "$(readlink /etc/grub2.cfg)"
```

- Para Debian y Ubuntu

GRUB_CMDLINE_LINUX_DEFAULT="console=ttyS0 console=tty0"

Si no tiene los siguientes valores, debe de modificar el fichero y guardarlo.
C
on el siguiente comando puede regenerar el fichero de configuración GRUB (los valores serán guardas en el siguiente reinicio)

```sh
update-grub
```

Una vez que haya realizado las modificaciones, reinicie el VPS ola instancia en modo normal y revise el KVM: debería aparecer la información del log de inicio.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
