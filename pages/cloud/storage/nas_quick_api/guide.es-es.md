---
title: NAS-HA - Primeros pasos con las API
slug: nas/nas-quickapi
excerpt: Cómo empezar con un servicio NAS-HA utilizando la API de OVHcloud
section: NAS
order: 06
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 20/07/2022**

## Objetivo

El servicio NAS-HA de OVHcloud le permite gestionar el almacenamiento de archivos al que se puede acceder desde una red. 

**Esta guía explica cómo utilizar un servicio NAS-HA a través de la API de OVHcloud.**

## Requisitos

- Un servicio [NAS-HA de OVHcloud](https://www.ovh.es/nas/)
- Consulte nuestra guía de [primeros pasos con la API de OVHcloud](../../api/first-steps-with-ovh-api/) para familiarizarse con la APIv6 de OVHcloud.

## Procedimiento

Todas las rutas API de esta guía están disponibles en la sección */dedicated/nasha*: <https://api.ovh.com/console/#/dedicated/nasha>.

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

### Creación de una partition

Utilice la siguiente ruta para crear una nueva partition:

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
>> >> Un nombre para la partition
>> >
>> > **protocol** *
>> >
>> >> *NFS*, *CIFS* o *NFS_CIFS* para ambos  
>> >
>> > **size** *
>> >
>> >> El tamaño de la partition
>

Elija `NFS` como protocolo y un tamaño de `10` Gigabytes, por ejemplo.

### Añadir un registro ACL para acceder a la partition

> [!warning]
>
> El acceso se denegará por defecto, salvo que se conceda a través del ACL. Solo es posible añadir las direcciones IP asociadas a los servicios de OVHcloud.
>

Puede comprobar las direcciones IP que pueden acceder a través de las siguientes llamadas a la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableIps
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/authorizableBlocks
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
>> >> Nombre de la partition
>

Para crear una nueva entrada ACL que le permita conectarse a su partition, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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
>> >> Nombre de la partition
>> >
>> > **ip** *
>> >
>> >> La dirección IP o rango al que debe concederse el acceso
>> >
>> > **type** *
>> >
>> >> Tipo de acceso ACL para este registro: *readonly* o *readwrite*
>

> [!primary]
>
> Utilice la notación CIDR para los rangos IP, por ejemplo: 192.0.2.0/24.
>

### Crear un snapshot manual

Para añadir un snapshot manual, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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
>> >> Nombre de la partition
>> >
>> > **expiration**
>> >
>> >> Fecha de expiración opcional, por ejemplo: 2022-06-24 (ISO 8601)
>> >
>> > **name** *
>> >
>> >> Nombre del snapshot
>

### Eliminación de una partition

Utilice la siguiente ruta para eliminar una partition:

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
>> >> Nombre de la partition
>

## Más información

[Montar un NAS mediante NFS](../nas-nfs/)

[Montar un NAS en Windows Server a través de CIFS](../nas-cifs/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.