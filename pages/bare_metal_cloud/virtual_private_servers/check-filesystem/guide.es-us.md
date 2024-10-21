---
title: Comprobar el sistema de archivos en un VPS
excerpt: Cómo buscar errores en un sistema de archivos en modo de rescate
updated: 2023-09-20
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

**Esta guía explica cómo diagnosticar los sistemas de archivos en los VPS de OVHcloud utilizando el modo de rescate.**

> [!warning]
>OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
>Si necesita ayuda para realizar estas acciones, póngase en contacto con un proveedor de servicios especializado o intercambie información con nuestra comunidad de usuarios en <https://community.ovh.com/en/>. OVHcloud no podrá ofrecerle soporte técnico.
>

## Requisitos

- Un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta OVHcloud
- Tener acceso al [área de cliente de OVHcloud](/links/manager)

## Procedimiento

### VPS GNU/Linux

Inicie sesión en el [área de cliente de OVHcloud](/links/manager) y reinicie el servidor en modo de rescate. Si lo necesita, consulte nuestra [guía sobre el modo de rescate](/pages/bare_metal_cloud/virtual_private_servers/rescue).

A continuación, compruebe la configuración de los discos:

```bash
lsblk
```

La partición correspondiente al modo de rescate (`sda1` en este ejemplo) está montada en el directorio `/`. A su vez, el disco del VPS se denomina `sdb` y no debe tener ningún punto de montaje.

por ejemplo,

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0   80G  0 disk
└─sdb1   8:17   0   80G  0 part  
```

Si el resultado es parecido al del ejemplo anterior y la columna `MOUNTPOINT` está vacía en la fila correspondiente (`sdb1`), puede pasar al [paso siguiente](#fscheck).

Sin embargo, si el resultado muestra que existe un punto de montaje para la partición VPS, primero deberá desmontarla.

por ejemplo,

```console
sdb      8:16   0   80G  0 disk
└─sdb1  8:17   0   80G  0 part  /mnt/sdb1
```

En el ejemplo de salida anterior, la partición `sdb1` se monta a `/mnt/`. Para comprobar la partición, no debe montarla.

Para desmontar dicha partición, utilice el siguiente comando:

```bash
umount /dev/partition_name
```

En este ejemplo de configuración, el comando sería:

```bash
umount /dev/sdb1
```

<a name="fscheck"></a>

Compruebe la partición con "fsck":

```bash
fsck /dev/sdb1

cloudimg-rootfs: clean, 134995/3225600 files, 849881/6525179 blocks
```

Si el resultado está vacío, normalmente significa que el sistema de archivos está limpio. No obstante, puede forzar una comprobación:

```bash
fsck /dev/sdb1 -f
```

### VPS Windows

Las instrucciones anteriores no suelen aplicarse a un VPS con Windows, ya que la verificación del sistema de archivos no admite NTFS. No obstante, puede comprobar la coherencia NTFS en las particiones.

Inicie sesión en el [área de cliente de OVHcloud](/links/manager) y reinicie el servidor en modo de rescate. Si lo necesita, consulte nuestra [guía sobre el modo de rescate](/pages/bare_metal_cloud/virtual_private_servers/rescue).

A continuación, compruebe la configuración de los discos:

```bash
lsblk
```

La partición correspondiente al modo de rescate (`sda1` en este ejemplo) está montada en el directorio `/` .A su vez, el disco del VPS se denomina `sdb` y no debe tener ningún punto de montaje.

por ejemplo,

```console
NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda      8:0    0  2.5G  0 disk
└─sda1   8:1    0  2.5G  0 part /
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part 
├─sdb2   8:18   0 99.7G  0 part 
```

Si el resultado es parecido al del ejemplo anterior y la columna `MOUNTPOINT` está vacía en la fila correspondiente, puede pasar al [paso siguiente](#fscheckwin).

Sin embargo, si el resultado muestra que existe un punto de montaje para la partición VPS, primero deberá desmontarla.

por ejemplo,

```console
sdb      8:16   0  100G  0 disk
├─sdb1   8:17   0  350M  0 part
├─sdb2   8:18   0 99.7G  0 part /mnt/sdb2
```

En el ejemplo de salida anterior, la partición en cuestión `sdb2` está montada en `/mnt/`. Para comprobar la partición, no debe montarla.

Para desmontar dicha partición, utilice el siguiente comando:

```bash
umount /dev/partition_name
```

En este ejemplo de configuración, el comando sería:

```bash
umount /dev/sdb2
```

<a name="fscheckwin"></a>

El siguiente comando comprueba la coherencia de la partición e intenta solucionar los posibles errores:

```bash
ntfsfix /dev/partition_name
```

En este ejemplo de configuración, el comando sería:

```bash
ntfsfix /dev/sdb2
```

## Más información

[Activar el modo de rescate en un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
