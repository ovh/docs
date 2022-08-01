---
title: NAS-HA - Gestión de ACL a través de la API
slug: nas/nas-manage-acls
excerpt: Cómo gestionar los accesos al NAS-HA a través de la API de OVHcloud
section: NAS
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 20/07/2022**

## Objetivo

El servicio NAS-HA de OVHcloud le permite gestionar un almacenamiento de archivos al que podrá acceder desde una red.

**Esta guía explica cómo gestionar el ACL de una partición NAS-HA a través de la API de OVHcloud.**

## Requisitos

- Un servicio [NAS-HA de OVHcloud](https://www.ovh.com/world/es/nas/)
- Consulte nuestra guía de [primeros pasos con la API de OVHcloud](../../api/first-steps-with-ovh-api/) para familiarizarse con la APIv6 de OVHcloud.

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

> [!warning]
>
> El acceso se denegará por defecto, salvo que se conceda a través del ACL. Solo es posible añadir las direcciones IP asociadas a los servicios de OVHcloud.
>

### Obtener el ACL de una partición

Para obtener las direcciones IP que pueden acceder a la partición, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/access
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

### Obteniendo todas las direcciones IP válidas

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
>> >> Nombre de la partición
>

### Añadir un registro ACL

Para crear una nueva entrada ACL que le permita conectarse a su partición, utilice la siguiente ruta:

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
>> >> Nombre de la partición
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

### Eliminación de un registro ACL

Para eliminar una dirección IP o un rango de direcciones de la ACL, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
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
>> > **ip** *
>> >
>> >> La dirección IP o el rango que debe denegarse de acceso
>

## Más información

[Montar un NAS mediante NFS](../nas-nfs/)

[Montar un NAS en Windows Server a través de CIFS](../nas-cifs/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.