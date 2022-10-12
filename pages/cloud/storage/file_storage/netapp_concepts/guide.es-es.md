---
title: Enterprise File Storage - Conceptos
slug: netapp/concepts
excerpt: 'Descubra los principios de funcionamiento de la solución Enterprise File Storage'
section: Enterprise File Storage
order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/10/2021**

## Objetivo

La solución OVHcloud Enterprise File Storage permite contratar pools de capacidad y gestionar así los volúmenes de archivos accesibles en una red.
Esta guía explica los conceptos y limitaciones de la solución Enterprise File Storage.

**Esta guía explica cómo funcionan las soluciones Enterprise File Storage.**

## Procedimiento

### Enterprise File Storage, ¿qué es?

Enterprise File Storage es una solución de sistema de archivos gestionada por OVHcloud y basada en la solución NetApp&#174; ONTAP Software-Defined Storage.

Puede contratar uno o varios espacios de almacenamiento entre 1 TiB y 29TiB en su cuenta.

> [!primary]
>
> ¿Cuál es la diferencia entre Terabyte (TB) y Tebibyte (TiB)?
>
> - T, el prefijo "tera-" es una métrica y un estándar IT que utiliza la base-10. Entonces 1 TB = 10^12 bytes = 10000000000 bytes = 1000 GB.
>
> - Ti, el prefijo "Tebi-", se creó más tarde como uno de los prefijos binarios que ahora son estándares IEC/ISO y que utiliza la base-2. Significa 1024^4=2^4. Entonces 1 TiB = 1099511627776 bytes = 1024 GiB.
>
> - Los ordenadores utilizan la base 2, de modo que la cantidad de almacenamiento que puede ver en su sistema operativo se expresa en TiB. Los proveedores de almacenamiento suelen utilizar el TB, ya que es un número mayor que el TiB.
>
> - El problema es que son similares (2.4%) en el KB, pero en el nivel del TB, hay una diferencia del 10% y el aumento es exponencial.
>
> - Para Enterprise File Storage, porque queremos ser transparentes con usted, entregaremos el volumen en TiB aunque vean el TB como unidad, porque el público en general usa TB.
>
> - De esta forma, si contrata un servicio Enterprise File Storage de 1 TB, dispondrá en realidad de 1 TiB = 1,09951 TB.
>

### Principio de funcionamiento de las capacity pools

Cuando contrata un servicio Enterprise File Storage, a través de su cuenta de OVHcloud, entre 1 y 29 TB, recibirá un capacity pool NetApp&#174;.

La cuenta de OVHcloud es por defecto el contacto administrador, técnico y de facturación del servicio. Para más información, consulte nuestra guía ["Gestionar los contactos de los servicios"](https://docs.ovh.com/es/customer/gestion-de-los-contactos/).

![Enterprise File Storage 1](images/Netapp_Concept_1.PNG)

> [!primary]
>
> Cada pool de capacidad solo puede pertenecer a una única cuenta de OVHcloud (NIC-handle). No obstante, los contactos técnicos y de facturación pueden modificarse en beneficio de otras cuentas.
>

### Principio de funcionamiento de sus volúmenes

Una vez que haya contratado Enterprise File Storage, podrá crear uno o más volúmenes en su pool de capacidad.
<br>Estos volúmenes permiten almacenar archivos y son accesibles en red a través de una dirección IP proporcionada por OVHcloud.
<br>La creación de un volumen desencadena automáticamente la creación de una ruta de acceso principal, así como tres caminos de acceso secundarios.

![Enterprise File Storage 2](images/Netapp_Concept_2.PNG)

> [!primary]
>
> - Cada volumen pertenece a un único capacity pool, pero un capacity pool puede contener varios volúmenes.
>
> - El tamaño de un volumen no puede ser superior al tamaño total del capacity pool, menos el espacio destinado a los snapshots que contiene.
>
> - El tamaño de un volumen es escalable, tanto al alza como a la baja.
>

Para más información, consulte la guía ["Gestionar los volúmenes"](https://docs.ovh.com/es/storage/netapp-volumes/).

### Principio de funcionamiento de los ACL

Por seguridad, no es posible acceder inmediatamente a un volumen a través de su ruta de acceso. Es necesario crear reglas en la lista de control de acceso (ACL) del volumen para autorizar a los usuarios a acceder a él.

Estas reglas están formadas por una dirección IP de origen de la red en formato x.x.x/x y por un tipo de permisos, ya sea de solo lectura (RO) o de lectura-escritura (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.PNG)

> [!primary]
>
> Puede crear una o más reglas por volumen.
>

Para más información, consulte la guía ["Gestionar las ACL de un volumen"](https://docs.ovh.com/es/storage/netapp-volume-acl/).

### Principio de funcionamiento de los snapshots

La tecnología de snapshots de Enterprise File Storage proporciona una solución de protección local de los datos en el mismo dispositivo para restaurar archivos únicos.

Un snapshot Enterprise File Storage es una imagen de un volumen en una fecha y hora determinadas.

La creación tarda unos segundos, independientemente del volumen, la capacidad utilizada o el nivel de actividad del volumen.

El snapshot es una copia de los metadatos del volumen en un momento dado (instantánea de la tabla de los inodos).

El consumo diario constatado de los snapshots oscila entre el 1 y el 5% de la capacidad del volumen para numerosas aplicaciones. Por lo tanto, cada vez que se crean volúmenes, OVHcloud reserva el 5% de su capacidad para realizar snapshots de los volúmenes.

![Enterprise File Storage 4](images/Netapp_Concept_4.PNG)

Para más información, consulte la guía ["Gestionar los snapshots de un volumen"](https://docs.ovh.com/es/storage/netapp-volume-snapshots/).

### Límites de la solución Enterprise File Storage para la fase de pruebas externas (Beta)

Los límites de las capacidades pools de Enterprise File Storage son los siguientes:

- Un pool de capacidad tiene un tamaño reservado y dedicado comprendido entre 1 TiB y 29 TiB.
- Un pool de capacidad está limitado a 20 volúmenes por TiB.

A continuación se indican los límites de los volúmenes:

- Un volumen no puede superar el tamaño de 29TiB menos el 5% reservado para los snapshots (1.45TiB), es decir, 27,55 TiB.
- El tamaño mínimo de un volumen es de 1 GiB.
- Un volumen no puede tener más de 255 snapshots.
- Un volumen tiene una dirección IP en la red interna de OVHcloud de 10.x.x.x.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
