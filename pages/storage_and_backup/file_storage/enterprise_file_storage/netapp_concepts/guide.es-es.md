---
title: Enterprise File Storage - Conceptos
excerpt: 'Descubra los principios de funcionamiento de la solución Enterprise File Storage'
updated: 2024-09-24
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón Contribuir de esta página.
>

## Objetivo

Enterprise File Storage permite disfrutar de volúmenes de almacenamiento NFS totalmente administrados por OVHcloud. Esta guía explica los conceptos y limitaciones del servicio Enterprise File Storage.

**Descubra cómo funciona Enterprise File Storage.**

## Procedimiento

### Enterprise File Storage, ¿qué es?

Enterprise File Storage es una solución de sistema de archivos gestionada por OVHcloud y basada en la solución NetApp&#174; ONTAP.

Puede contratar uno o varios espacios de almacenamiento entre 1 TB y 58 TB en su cuenta, con una granularidad de 1 TB.

### Principio de funcionamiento de los servicios

Al contratar, a través de su cuenta de OVHcloud, un servicio Enterprise File Storage de entre 1 y 58 TB, recibirá un espacio de almacenamiento NFS.

La cuenta OVHcloud es, por defecto, el contacto administrador, técnico y de facturación del servicio. Para más información, consulte nuestra guía [Gestionar los contactos de sus servicios](/pages/account_and_service_management/account_information/managing_contacts).

![Enterprise File Storage 1](images/Netapp_Concept_1.png)

> [!primary]
>
> Cada servicio solo puede pertenecer a una cuenta de OVHcloud (NIC-handle). Sin embargo, los contactos técnicos y de facturación pueden modificarse en favor de otras cuentas.
>

### Principio de funcionamiento de sus volúmenes

Una vez contratado el servicio Enterprise File Storage, tendrá a su disposición un servicio que corresponde a una capacidad de almacenamiento. En este servicio, puede crear uno o varios volúmenes, cada uno de los cuales corresponde a una partición.
<br>Estos volúmenes permiten almacenar archivos y son accesibles en red a través de una dirección IP proporcionada por OVHcloud.

![Enterprise File Storage 2](images/Netapp_Concept_2.png)

> [!primary]
>
> - Cada volumen pertenece a un servicio, pero un servicio puede contener varios volúmenes.
>
> - El tamaño de un volumen no puede superar el tamaño total del servicio menos el espacio asignado a los snapshots que contiene.
>
> - El tamaño de un volumen es escalable, tanto al alza como a la baja.
>

Para más información, consulte la guía [Gestionar los volúmenes](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes).

### Principio de funcionamiento de los ACL

Por seguridad, no es posible acceder inmediatamente a un volumen a través de su ruta de acceso. Es necesario crear reglas en la lista de control de acceso (ACL) del volumen para permitir que los usuarios accedan a ellas.

Estas reglas están formadas por una dirección IP de origen de la red en formato x.x.x.x/x y un tipo de permisos, ya sea de solo lectura (RO) o lectura-escritura (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.png)

> [!primary]
>
> Puede crear una o varias reglas por volumen.
>

Para más información, consulte la guía [Gestionar las ACL de un volumen](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl).

### Principio de funcionamiento de los snapshots

La tecnología de snapshots de Enterprise File Storage ofrece una solución de protección local de datos en el mismo dispositivo para restauraciones de archivos únicas.

Un snapshot Enterprise File Storage es una imagen de un volumen en una fecha y una hora determinadas.

La creación puede tardar unos segundos, independientemente del tamaño del volumen, la capacidad utilizada o el nivel de actividad del volumen.

El snapshot es una copia de los metadatos del volumen en un momento determinado (una instantánea de la tabla de índices).

El consumo diario observado de los snapshots está comprendido entre el 1 y el 5% de la capacidad del volumen para numerosas aplicaciones. Por lo tanto, cada vez que se crea un volumen, OVHcloud reserva el 5% de su capacidad para los snapshots de este último.

![Enterprise File Storage 4](images/Netapp_Concept_4.png)

Para más información, consulte la guía [Gestionar los snapshots de un volumen](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots).

### Límites de la oferta Enterprise File Storage

- Un servicio tiene un tamaño asignado y dedicado comprendido entre 1 TB y 58 TB
- La granularidad de un servicio es de 1 TB
- El número de volúmenes por servicio está limitado a 10 volúmenes por TB (por ejemplo, 50 volúmenes para un servicio de 5 TB)

#### Límites de volumen

- Un volumen no puede superar el tamaño de 29 TB menos el 5% reservado para los snapshots (1,45 TB), es decir, 27,55 TB
- El tamaño mínimo de un volumen es de 100 GB
    - Granularidad de tamaño para un volumen: 1 GB
    - Tamaño máximo de un archivo: 16 TB

#### Límites de los snapshots

- Un volumen no puede tener más de 200 snapshots.
- Número máximo de políticas de snapshots por volumen: 1
- Número máximo de reglas por política de snapshots: 4

#### Límites de las ACL

- Un volumen tiene una dirección IP en la red interna en 10.x.x de OVHcloud.
- Número máximo de vRack (servicio de red privada) asociados al servicio: 0 (el soporte de la tecnología vRack todavía no está disponible)
- Número máximo de access list: 1 por volumen
- Número máximo de IP por lista de acceso: 16 IP por lista de acceso

#### Límites de rendimiento

- Ancho de banda mínimo por TB: sin mínimo
- Ancho de banda máximo por TB: 64 MB/s y 4000 IOPS

### Cálculo de un volumen

> [!primary]
>
> ¿Cuál es la diferencia entre Terabyte (TB) y Tebibyte (TiB)?
>
> - T, el prefijo "tera-" es una métrica y un estándar IT que utiliza la base-10. 1 TB = 10^12 bytes = 1000000000000 bytes = 1000 GB.
>
> - Ti, el prefijo "Tebi-", se creó más tarde como uno de los prefijos binarios que ahora son estándares IEC/ISO y que utilizan la base-2. Esto significa 1024^4=2^40. 1 TiB = 1099511627776 bytes= 1024 GiB.
>
> - Los ordenadores utilizan la base 2, por lo que la cantidad de almacenamiento que puede ver en su sistema operativo se expresa en TiB. Los proveedores de almacenamiento tienden a usar TB porque es un número mayor que TiB.
>
> - El problema es que son similares (2,4%) en el KB, pero en el TB, hay una diferencia del 10% y el aumento es exponencial.
>
> - **Para Enterprise File Storage, porque queremos ser transparentes con usted, entregaremos el volumen en TiB incluso si usted ve el TB como unidad, porque el público en general utiliza el TB.**
>
> - Por ejemplo, si contrata un servicio Enterprise File Storage de 1 TB, en realidad tendrá 1 TiB = 1,09951 TB.
>

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](/links/professional-services) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra [comunidad de usuarios](/links/community).
