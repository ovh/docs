---
title: 'Actualizar el kernel en un servidor dedicado'
excerpt: 'Cómo actualizar el kernel con una distribución que utilice un núcleo de OVHcloud'
slug: actualizar-kernel-servidor-dedicado
section: 'Uso avanzado'
---

**Última actualización: 26/10/2018**

## Objetivo

OVHcloud ofrece la posibilidad de mantener actualizado el kernel de un sistema Linux gracias al sistema de arranque en red (*netboot*).

No obstante, es altamente recomendable actualizar el sistema operativo (SO) en el disco al que esté vinculado el kernel.

**Esta guía explica cómo actualizar el kernel con una distribución que utilice un núcleo de OVHcloud.**

Por defecto, las imágenes de sistema que ofrece OVHcloud en sus servidores dedicados utilizan un núcleo optimizado por OVHcloud. Los usuarios que hayan sustituido estas imágenes por su propia distribución pueden consultar la documentación oficial de esta última.


> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. 
> 
> Esta guía le ayudará a realizar la actualización del kernel. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado.
>

## Requisitos

- Tener acceso root al servidor (por SSH).
- Haber realizado previamente una copia de seguridad de los datos (consulte la documentación oficial de su distribución).

## Procedimiento

### Identificar el kernel

Para identificar la versión actual del kernel, introduzca el siguiente comando:

```
uname -r
```

Por ejemplo:

```
uname -r

4.09.76-xxxx-std-ipv6-64
```

En este caso, la versión del kernel es **4.09.76-xxxx-std-ipv6-64**.

### Actualizar el kernel 

#### 1. Situarse en el directorio

La imagen del kernel debe guardarse en el directorio **/boot**:

```
cd /boot
```

#### 2. Descargar la imagen

Si no vamos a recompilar el kernel, solo hay que descargar la versión de **bzImage** deseada, preferentemente la última versión. Las imágenes se encuentran en la siguiente dirección: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Los kernels son monolíticos, es decir, que no tienen en cuenta los módulos de kernel Ceph, NBD, ZFS, etc.

Volviendo al ejemplo, teníamos la siguiente versión de kernel: **4.09.76-xxxx-std-ipv6-64**.

Por lo tanto, deberemos descargar una imagen superior con el siguiente comando:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### 3. Actualizar el programa de arranque (GRUB)

Por último, actualice el programa de arranque (GRUB) con el siguiente comando:

```sh
update-grub
```

Le devolverá la siguiente respuesta:

```
Generating grub configuration file...
done
```

> [!primary]
>
> Compruebe que el archivo **06_OVHkernel** esté presente (es necesario para la actualización). Para ello, ejecute el siguiente comando:
>
> `ls /etc/grub.d/`
>

#### 4. Reiniciar el servidor

Reinicie el servidor para que se apliquen los cambios:

```sh
reboot
```

### Deshacer la actualización

En caso de que haya realizado alguna manipulación incorrecta o de aparezca algún error, puede volver atrás. Para ello, ponga el servidor en [modo de rescate](../modo_de_rescate/){.external}. A continuación, monte el sistema con los siguientes comandos:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> En este ejemplo, el directorio raíz (o barra «**/**») se llama **md1**, aunque no tiene por qué tener el mismo nombre. Para comprobar el nombre de la raíz, introduzca uno de los siguientes comandos:
>
> `fdisk` o `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Sitúese en el directorio **/boot** y, con el comando `rm`, elimine los últimos archivos instalados. En nuestro ejemplo, habría que ejecutar el siguiente comando:

```sh
rm bzImage-4.9.118-xxxx-std-ipv6-64
```

Actualice de nuevo el sistema de arranque:

```sh
update-grub
```

Por último, salga del modo de rescate (reinicie el servidor sobre el disco) y realice un reinicio de software con el siguiente comando:

```sh
reboot
```

### Comprobar la actualización

Una vez realizada la actualización, puede comprobar la versión del kernel instalada con el siguiente comando:

```sh
uname –r
```

> [!primary]
>
> Debido al reciente descubrimiento de las vulnerabilidades Meltdown y Spectre, le recomendamos que consulte la web del editor de su distribución para comprobar que la versión del kernel que vaya a instalar esté parcheada.
>
> Si lo necesita, existen herramientas (por ejemplo, <https://github.com/speed47/spectre-meltdown-checker>) que permiten saber si el kernel utilizado es vulnerable o no.
>
> **OVHcloud no puede garantizar que estas herramientas externas sean fiables; su uso corre por cuenta y riesgo del usuario.**
>

## Más información

[Modo de rescate](../modo_de_rescate/){.external}

[Información sobre las vulnerabilidades Meltdown y Spectre (EN)](../information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Actualización tras las vulnerabilidades Meltdown y Spectre por sistema operativo (EN)](../meltdown-spectre-kernel-update-per-operating-system/){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com){.external}.
