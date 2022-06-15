---
title: Enterprise File Storage - Gestionar los volúmenes
slug: netapp-volumes
excerpt: Cómo crear y gestionar los volúmenes Enterprise File Storage de OVHcloud utilizando las API de OVHcloud
section: Enterprise File Storage
order: 3
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/10/2021**

## Objetivo

Esta guía explica cómo gestionar los volúmenes de la solución Enterprise File Storage de OVHcloud.

**Esta guía explica cómo obtener los volúmenes y el punto de montaje existentes, crear un nuevo volumen o eliminar un volumen existente desde la API de OVHcloud.**

## Requisitos

- Tener contratado un plan Enterprise File Storage de OVHcloud.
- Estar conectado a la página de las [API de OVHcloud](https://ca.api.ovh.com).

## Lo esencial

Un volumen es un sistema de archivos compartido persistente, accesible para lectura y/o escritura.

También puede tener un nombre y una descripción (opcional).

> [!warning]
>
> Por defecto, se restringe el acceso a un volumen creado recientemente. Es necesario crear un ACL para permitir el acceso.
>

## Procedimiento

Todas las rutas API utilizadas en esta guía están disponibles en la sección */storage* : <https://ca.api.ovh.comconsole/#/storage>.

> [!primary]
>
> Al utilizar las API, todos los campos marcados con asterisco (\*) son obligatorios.
>

### Mostrar los volúmenes

Para consultar los volúmenes de un servicio, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> ID del servicio
>> >
>

Sustituya el `serviceName` por el ID del servicio.

### Obtener la información de un volumen

Para obtener la información de un volumen, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> ID del servicio
>> >
>> > **shareId** *
>> >
>> >> ID del volumen
>

Sustituya el `serviceName` por el ID de su servicio y `shareId` por el ID del volumen.

### Crear un volumen

Para crear un nuevo volumen, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp{serviceNme}/share
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> ID del servicio
>> >
>

Sustituya el `serviceName` por el ID del servicio.

Seleccione el protocolo `NFS` para el nuevo volumen (propiedad `protocol`) y el tamaño (propiedad `size`).
También puede especificar un nombre y una descripción con las propiedades `name` y `description`.

### Mostrar puntos de montaje de un volumen

Para conocer la ruta de montaje de un volumen, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp{serviceName}/share/{shareId}/accessPath
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> ID del servicio
>> >
>> > **shareId** *
>> >
>> >> ID del volumen
>

Sustituya el `serviceName` por el ID de su servicio y `shareId` por el ID del volumen.

Las rutas de montaje devueltas se pueden utilizar para montar el volumen.

El comando de montaje será diferente, según el protocolo elegido para el volumen.  

> [!primary]
>
> Para NFS, consulte las instrucciones de montaje en la guía [Montar un NAS mediante NFS](https://docs.ovh.com/es/storage/nas-nfs/) compartido.
> Tenga en cuenta que la ruta de montaje recuperada sustituye a IP_NAS/NFS_PATH en esta guía.
>  

### Eliminar un volumen

Para eliminar un volumen, utilice la siguiente ruta de la API:  

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> ID del servicio
>> >
>> > **shareId** *
>> >
>> >> ID del volumen
>

Sustituya el `serviceName` por el ID de su servicio y `shareId` por el ID del volumen que desea eliminar.

## Más información

[Primeros pasos con las API de OVHcloud](https://docs.ovh.com/us/es/api/first-steps-with-ovh-api/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
