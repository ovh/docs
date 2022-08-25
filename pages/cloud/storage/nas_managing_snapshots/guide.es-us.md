---
title: NAS-HA - Gestión de snapshots a través de la API
slug: nas/nas-snapshots-api
excerpt: Cómo gestionar los snapshots del NAS-HA a través de la API de OVHcloud
section: NAS
order: 09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 20/07/2022**

## Objetivo

Los NAS-HA de OVHcloud permiten crear y gestionar volúmenes de archivos accesibles desde una red. 

**Esta guía explica cómo gestionar los snapshots de una partición NAS-HA a través de la API de OVHcloud.**

## Requisitos

- Un servicio [NAS-HA de OVHcloud](https://www.ovh.com/world/es/nas/)
- Consulte nuestra guía de [primeros pasos con la API de OVHcloud](../../api/first-steps-with-ovh-api/) para familiarizarse con la APIv6 de OVHcloud.

## Procedimiento

> [!primary]
> Visite [la página de FAQ NAS-HA](https://docs.ovh.com/us/es/storage/faq-nas/) para más información sobre la función de snapshot.
>

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

Por defecto, cada hora se realiza un snapshot de los datos que se guarda en el NAS-HA. Si lo desea, puede activar otras estrategias de snapshot que crearán snapshots con una frecuencia predefinida.

### Obtener la planificación automática de los snapshots

Para ver la planificación del snapshot automático activa, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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

### Añadir un intervalo de snapshot automático

Para crear snapshots automáticos adicionales con una frecuencia seleccionada, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
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
>> > **snapshotType** *
>> >
>> >> Frecuencia para el snapshot: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Obtener información sobre los snapshots automáticos

Para obtener los detalles de un snapshot automático, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> Frecuencia de snapshot: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

### Eliminación de un intervalo de snapshot automático

Utilice la siguiente ruta para eliminar la frecuencia de los snapshots automáticos:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot/{snapshotType}
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
>> > **snapshotType** *
>> >
>> >> Frecuencia de snapshot: *day-1*, *day-2*, *day-3*, *day-7*, *hour-1*, *hour-6*
>

También puede utilizar snapshots instantáneos con su NAS-HA (snapshots personalizados) en los siguientes puntos.

### Lista de snapshots personalizados

Utilice la siguiente ruta para recuperar los snapshots personalizados existentes:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
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

### Creación de un snapshot personalizado

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

### Obteniendo la información de un snapshot personalizado

Para ver los detalles de un snapshot personalizado, utilice la siguiente ruta:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name}
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
>> > **name** *
>> >
>> >> Nombre del snapshot
>

### Eliminación de un snapshot personalizado

Utilice la siguiente ruta para eliminar un snapshot personalizado:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot/{name} 
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
>> > **name** *
>> >
>> >> Nombre del snapshot
>

##### **Restauración de snapshots**

La API no permite restaurar los snapshots realizados. Los snapshots se almacenan en modo de solo lectura en la partición.

Para acceder a los snapshots desde el punto de montaje, debe acceder al directorio `.zfs/snapshot` de su partición.

Por ejemplo, en un servicio cuyo ID es `zpool-123456`, que contiene una partición llamada `partition1` y en la que ha creado un snapshot llamado `snap-snapshot01`. Para consultar el snapshot, utilice el siguiente comando:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Para restaurar el snapshot, cópielo desde la ruta de acceso del archivo `.zfs` al nuevo directorio en el que quiere restaurar el snapshot. Puede utilizar una herramienta como rsync que le permite realizar restauraciones.

Para más información, consulte el apartado [Más información](#gofurther) de esta guía.

## Más información

[Montar un NAS mediante NFS](../nas-nfs/)

[Montar un NAS en Windows Server a través de CIFS](../nas-cifs/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.