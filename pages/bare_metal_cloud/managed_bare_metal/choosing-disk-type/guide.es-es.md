---
title: Elegir un formato de disco
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/quel_format_de_disque_choisir'
excerpt: Descubra los diferentes formatos de disco
updated: 2020-11-18
---

**Última actualización: 18/11/2020**

## Objetivo

VMware ofrece tres formatos de disco para máquinas virtuales.

**Esta guía explica las diferencias entre estos formatos.**

## Procedimiento

### Thin provisioning

El *Thin provisioning* es un tipo de formato de disco, que utiliza solo el espacio que necesita en el datastore y que aumenta en función de las necesidades.

Así pues, es posible asignar un disco de 1 TB, que será reconocido como 1 TB por el sistema operativo de la MV, pero que solo ocupará en el datastore el espacio utilizado por el *Guest OS* (por ejemplo, 20 GB). 

De este modo, en un datastore de 1,2 TB, podremos asignar una capacidad de 50 TB (50 MV de 1 TB), pero ocupar solo 1 TB (20 GB/MV en nuestro ejemplo).

> [!warning]
>
> En estos casos, es importante controlar el consumo de escritura de estas MV para no aumentar de forma considerable el espacio ocupado por los diferentes discos de las MV y evitar que el datastore esté completo.
> Un datastore completo impedirá realizar nuevas operaciones de escritura y podría provocar la interrupción de las MV.
>

No es posible liberar el espacio ocupado. 

Por ejemplo, si hemos ocupado 40 GB en un «disk thin» de 100 GB y eliminamos 20 GB de datos en la MV, el espacio ocupado en el datastore seguirá siendo de 40 GB y el espacio asignado de 100 GB.


### Thick provisioning Eager zero

El *Thick provisioning Eager zero* es un tipo de formato de disco que ocupa todo el espacio asignado en el datastore. 

Una MV de 100 GB asignados en *thick* ocupará 100 GB de espacio en el datastore.

El disco de la MV se llena desde cero al crear el disco en el volumen VMFS.

### Thick provisioning Lazy zero

El *Thick provisioning Lazy zero* es un tipo de formato de disco que ocupa todo el espacio asignado en el datastore.

Una MV de 100 GB asignados en *thick* ocupará 100 GB de espacio en el datastore.

El espacio asignado se reserva al disco de la MV, pero los ceros se escriben en el momento en el que la MV necesita espacio en disco.

### Caso práctico

Ejemplo para MV de 100 GB con un *Guest OS* de 40 GB:


|Tipo de disco|Espacio asignado|Zeroed blocks|Espacio ocupado|
|---|---|---|---|
|Eager Zero|Creación de MV|Creación de MV|100 GB|
|Lazy Zero|Creación de MV|En la primera escritura del bloque|100 GB|
|Thin|En la primera escritura del bloque|En la primera escritura del bloque|40 GB|

### Formato de disco en OVHcloud

En el almacenamiento de tipo datastore de una infraestructura Managed Bare Metal, solo está disponible el *Thin provisioning*.

En el almacenamiento vSan están disponibles los tres formatos.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
