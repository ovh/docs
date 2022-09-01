---
title: NAS-HA - Gestión de particiones a través de la API
slug: nas/nas-partitions-api
excerpt: Cómo gestionar las particiones NAS-HA a través de la API de OVHcloud
section: NAS
order: 08
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 20/07/2022**

## Objetivo

El servicio NAS-HA de OVHcloud le permite gestionar un almacenamiento de archivos al que podrá acceder desde una red.

**Esta guía explica cómo gestionar las particiones del servicio NAS-HA a través de la API de OVHcloud.**

## Requisitos

- Un servicio [NAS-HA de OVHcloud](https://www.ovh.com/world/es/nas/)
- Consulte nuestra guía de [primeros pasos con la API de OVHcloud](https://docs.ovh.com/us/es/api/first-steps-with-ovh-api/) para familiarizarse con la APIv6 de OVHcloud.

## Procedimiento

Todas las rutas API de esta guía están disponibles en la sección */dedicated/nasha*: <https://ca.api.ovh.com/console/#/dedicated/nasha>.

> [!primary]
>
> Al utilizar la API, todos los campos marcados con asterisco (\*) son obligatorios.
>

### Obtener información sobre el servicio

Todos los servicios activos se pueden recuperar utilizando la siguiente ruta:

> [!api]
>
> @api {GET} /dedicated/nasha
>

### Lista de todas las particiones

Utilice la siguiente ruta para recuperar las particiones de un servicio:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS
>

### Obtener las propiedades de una partición

Para ver los detalles de una partición, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nombre de la partición
>

### Obteniendo las estadísticas de una partición

Utilice la siguiente ruta para obtener la información de uso de una partición:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/use
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nombre de la partición
>> >
>> > **type** *
>> >
>> >> Tipo de estadística: *size*, *used* or *usedbysnapshots*
>

### Creación de una partición

Utilice la siguiente ruta para crear una nueva partición:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS
>> >
>> > **partitionDescription** 
>> >
>> >> Descripción opcional
>> >
>> > **partitionName** *
>> >
>> >> Un nombre para la partición
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* o *NFS_CIFS* para ambos 
>> >
>> > **size** *
>> >
>> >> El tamaño de la partición
>

Elija `NFS` como protocolo y un tamaño de `10` Gigabytes, por ejemplo.

### Modificar las propiedades de una partición

Utilice la siguiente ruta para modificar una partición:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {PUT} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS
>> >
>> > **partitionName** *
>> >
>> >> Nombre de la partición
>> >
>> > **partitionDescription**
>> >
>> >> La nueva descripción
>> >
>> > **size**
>> >
>> >> El nuevo tamaño de la partición
>

### Obtener los parámetros ZFS de una partición

Utilice la siguiente ruta para obtener los parámetros ZFS:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS
>> >
>> > **partitionName** *
>> >
>> >> Nombre de la partición
>

### Modificación de los parámetros ZFS de una partición

> [!warning]
>
> Se optimizan todos los parámetros ZFS por defecto. No es recomendable modificar estos parámetros.
>

Utilice la siguiente ruta para modificar los parámetros ZFS:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/options
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS
>> >
>> > **partitionName** *
>> >
>> >> Nombre de la partición
>> >
>> > **atime**
>> >
>> >> Parámetro de actualización del tiempo de acceso: *on* (default) o *off*
>> >
>> > **recordsize**
>> >
>> >> Tamaño máximo de bloque: *131072* (por defecto), *16384*, *32768*, *4096*, *65536* o *8129*
>> >
>> > **sync**
>> >
>> >> Parámetro de sincronización de archivos: *always*, *disabled* o *standard* (valor por defecto)
>

### Eliminación de una partición

Utilice la siguiente ruta para eliminar una partición:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> Nombre interno del servicio NAS-HA
>> >
>> > **partitionName** *
>> >
>> >> Nombre de la partición
>

## Más información

[Montar un NAS mediante NFS](https://docs.ovh.com/us/es/storage/nas-nfs/)

[Montar un NAS en Windows Server a través de CIFS](https://docs.ovh.com/us/es/storage/nas/nas-cifs/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.