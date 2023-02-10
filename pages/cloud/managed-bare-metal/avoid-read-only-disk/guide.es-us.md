---
title: Evitar el modo de solo lectura del disco de las MV en Linux
slug: como-evitar-disco-en-solo-lectura-en-linux
routes:
    canonical: 'https://docs.ovh.com/us/es/private-cloud/como-evitar-disco-en-solo-lectura-en-linux/'
excerpt: Cómo evitar el modo de solo lectura del disco de las MV en Linux
section: Gestión de las máquinas virtuales
order: 10
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

En ocasiones, las acciones relacionadas con el almacenamiento pueden hacer que algunas particiones de las máquinas Linux estén en modo de solo lectura.

**Esta guía explica cómo corregir este estado y reducir los riesgos asociados.**


## Procedimiento

Cuando las particiones están en modo de solo lectura, no es posible realizar ninguna operación de escritura en el sistema de archivos.

```sh
>     $ touch test
>
>     touch: cannot touch 'test': Read-only file system
```

El comando `mount` permite confirmar el estado del sistema de archivos:

```sh
> $ mount
>
> **/dev/sda1 on / type ext3 (ro,errors=remount-ro)**
> tmpfs on /lib/init/rw type tmpfs (rw,nosuid,mode=0755)
> proc on /proc type proc (rw,noexec,nosuid,nodev)
> sysfs on /sys type sysfs (rw,noexec,nosuid,nodev)
> procbususb on /proc/bus/usb type usbfs (rw)
> udev on /dev type tmpfs (rw,mode=0755)
> tmpfs on /dev/shm type tmpfs  (rw,nosuid,nodev)
> devpts on /dev/pts type devpts (rw,noexec,nosuid,gid=5,mode=620)
```

Para restaurar `/` en modo de *lectura-escritura*, deberá reiniciar la máquina virtual.

### Solución alternativa

En Linux, el *timeout* de los periféricos SCSI es por defecto de 30 segundos.

Las MVware Tools permiten aumentar este tiempo hasta los 180 segundos.

Sin embargo, es recomendable aumentar esta duración hasta los 3600 segundos. El siguiente comando permite ampliar hasta los 3600 segundos la sesión actual:

```sh
>     $ echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
```

Utilice el siguiente comando para que este valor se registre al iniciar la máquina:

```sh
>   $ nano /etc/rc.local 
	
	#!/bin/sh -e
	#
	# rc.local
	#
	# This script is executed at the end of each multiuser runlevel.
	#
	# Make sure that the script will "exit 0" on success or any other value on error.
	#
	# In order to enable or disable this script just change the execution
	# bits.
	#
	# By default this script does nothing.

	echo 3600 > /sys/block/`basename /dev/sda`/device/timeout
	exit 0
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
