---
title: Comprobar el sistema de archivos en un VPS
excerpt: Cómo buscar errores en un sistema de archivos en modo de rescate
slug: check-file-system-vps
section: Diagnóstico y modo de rescate
order: 5
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 20/04/2021**

## Objetivo

**Esta guía explica cómo diagnosticar los sistemas de archivos en los VPS de OVHcloud utilizando el modo de rescate.**

> [!warning]
>OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
>Si necesita ayuda para realizar estas acciones, póngase en contacto con un proveedor de servicios especializado o intercambie información con nuestra comunidad de usuarios en <https://community.ovh.com/en/>. OVHcloud no podrá ofrecerle soporte técnico.
>

## Requisitos

- Un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta OVHcloud
- Tener acceso al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws)

## Procedimiento

#### VPS GNU/Linux

Inicie sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y reinicie el servidor en modo de rescate. Si lo necesita, consulte nuestra [guía sobre el modo de rescate](../rescue/).

En las antiguas gamas de VPS, las particiones se montarán automáticamente en modo de rescate. Para comprobarlo, utilice el siguiente comando:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

El ejemplo anterior muestra un punto de montaje existente. Esto significa que la partición que se va a comprobar debe desmontarse en primer lugar:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Si su VPS es reciente, la columna `MOUNTPOINT` debería estar vacía y puede ignorar el paso anterior.

Compruebe la partición con "fsck":

```bash
$ fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Si el resultado está vacío, normalmente significa que el sistema de archivos está limpio. No obstante, puede forzar una comprobación:

```bash
$ fsck /dev/sdb1 -f
```

### VPS Windows

Las instrucciones anteriores no suelen aplicarse a un VPS con Windows, ya que la verificación del sistema de archivos no admite NTFS. No obstante, puede comprobar la coherencia NTFS en las particiones.

Inicie sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y reinicie el servidor en modo de rescate. Si lo necesita, consulte nuestra [guía sobre el modo de rescate](../rescue/).

En las antiguas gamas de VPS, las particiones se montarán automáticamente en modo de rescate. Puede comprobarlo utilizando el siguiente comando:

```bash
$ lsblk

NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part /mnt/sdb1
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

El ejemplo de resultado anterior muestra los puntos de montaje existentes. Esto significa que la partición que se va a comprobar debe desmontarse en primer lugar:

```bash
$ umount /dev/sdb1
```

> [!primary]
>
> Si su VPS es reciente, la columna `MOUNTPOINT` debería estar vacía y puede ignorar el paso anterior.

El siguiente comando comprueba la coherencia de la partición e intenta solucionar los posibles errores:

```bash
$ ntfsfix /dev/sdb1
```

## Más información

[Activar el modo de rescate en un VPS](../rescue/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
