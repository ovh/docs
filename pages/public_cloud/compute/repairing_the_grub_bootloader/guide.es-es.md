---
title: 'Reparar el bootloader Grub'
excerpt: 'Guía de reparación del bootloader GRUB en una instancia'
updated: 2020-11-23
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 22/11/2020**

## Objetivo

Es posible que tuviera que reparar el bootloader GRUB. Esta guía explica cómo reparar el bootloader y restablecer el funcionamiento de su instancia.

## Requisitos

- La instancia debe estar en modo de rescate (puede consultar la guía [Pasar una instancia en modo de rescate](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)).

## Procedimiento

Conéctese a la instancia, ya sea a través del VNC desde [el área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) o por SSH.

Introduzca los siguientes comandos para montar el sistema de archivos remoto e iniciar la reparación de GRUB:

```sh
mount /dev/sdb1 /mnt
mount -o bind /proc /mnt/proc
mount -o bind /sys /mnt/sys
mount -o bind /dev /mnt/dev
chroot /mnt /bin/bash
```

### Actualizar GRUB (o GRUB2)

Actualizar GRUB:

```sh
grub-install /dev/sdb
update-grub
```

Actualizar GRUB2:

```sh
grub2-install /dev/sdb
grub2-mkconfig -o /boot/grub2/grub.cfg
```

Ya puede sacar la instancia del modo de rescate. (Ver la guía [Convertir una instancia en modo de rescate](/pages/public_cloud/compute/put_an_instance_in_rescue_mode))

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.