---
title: Redimensionar el sistema de archivos en FreeBSD 12
slug: redimensionar-sistema-de-archivos-freebsd-12
excerpt: Cómo redimensionar el sistema de archivos de una instancia de Public Cloud o de un VPS con FreeBSD 12
section: Tutoriales
updated: 2020-10-27
---

**Última actualización: 27/10/2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Esta guía explica cómo redimensionar el sistema de archivos después de la instalación o redimensionarlo en FreeBSD 12. para que su sistema pueda disfrutar de todo el espacio en disco.

## Requisitos

 * Tener una instancia con FreeBSD 12 en su proyecto de [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) o un [VPS](https://www.ovhcloud.com/es-es/vps/) con FreeBSD 12.
 * Haber instalado recientemente la instancia/VPS o [haberla redimensionado.](../redimensionar_una_instancia/)

> [!primary]
>
> En este tutorial se utiliza una instancia r2-15. Las instrucciones son válidas para un VPS o una instancia de Public Cloud. Inicialmente el sistema de archivos tiene `5 GB`. Al final del proceso, será de `50 GB`.
>

## Procedimiento

Para dimensionar su sistema de archivos, primero debe reparar las particiones.

Conéctese a su instancia y consulte el estado de sus particiones:

```
freebsd@freebsd:~ % sudo gpart show
=>      40  10239920  vtbd0  GPT  (50G) [CORRUPT]
        40      1024      1  freebsd-boot  (512K)
      1064 984 - free - (492K)
      2048  10235904      2  freebsd-zfs  (4.9G)
  10237952 2008 - free - (1.0M)
```

Aquí puede ver que el sistema de archivos está dañado. Este estado es normal, ya que se debe a la instalación de la imagen en la instancia o a su redimensionamiento. Por lo que hay que repararlo:

```
freebsd@freebsd:~ % sudo gpart recover vtbd0
vtbd0 recovered
```

Repitiendo el primer comando, podrá comprobar que el sistema de archivos está reparado:

```
freebsd@freebsd:~ % sudo gpart show
=>       40  104857520  vtbd0  GPT  (50G)
         40       1024      1  freebsd-boot  (512K)
       1064 984 - free - (492K)
       2048   10235904      2  freebsd-zfs  (4.9G)
   10237952 94619608 - free - (45G)
```

Ya puede cambiar el tamaño de la partición `freebsd-zfs`. Para ello, utilice el siguiente comando:

```
freebsd@freebsd:~ % sudo gpart resize -i 2 vtbd0
vtbd0p2 resized
```

> [!primary]
>
> Es posible que el número de partición sea diferente. Para encontrar el número correcto, compruebe la columna `vtbd0` y el número delante de la línea `freebsd-zfs`.
>

Ahora ha cambiado el tamaño de su sistema de archivos. ZFS está configurado para extenderse automáticamente. Para comprobarlo, ejecute el siguiente comando:

```
freebsd@freebsd:~ % zpool list
NAME SIZE ALLOC FREE CKPOINT EXPANDSZ FRAG CAP DEDUP HEALTH ALTROOT
zroot 49.5G 854M 48.7G - - 0% 1% 1.00x ONLINE -
```

Notarán que en este ejemplo, `zroot` ahora tiene `50 GB`. ZFS es, por lo tanto, bastante extenso.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
