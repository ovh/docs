---
title: Enterprise File Storage - Gestionar los snapshots de un volumen
slug: netapp/volume-snapshots
excerpt: Cómo gestionar los snapshots de un volumen Enterprise File Storage utilizando las API de OVHcloud
section: Enterprise File Storage
order: 5
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/10/2021**

## Objetivo

Esta guía explica cómo gestionar los snapshots de los volúmenes de la solución OVHcloud Enterprise File Storage.

**Esta guía explica cómo recuperar los snapshots existentes, crear un nuevo snapshot, consultar la información relativa a un snapshot y eliminar un snapshot utilizando las API de OVHcloud.**

## Requisitos

- Tener contratado un plan Enterprise File Storage de OVHcloud con un volumen.
- Estar conectado a la página de las [API de OVHcloud](https://ca.api.ovh.com/)

## Lo esencial

Un snapshot de un volumen es una copia en un momento dado y en modo de solo lectura de un volumen.

Los snapshots se crean a partir de un volumen operativo.

> [!warning]
>
> Los snapshots están asociados a un volumen, por lo que no pueden existir sin él.
>

## Procedimiento

Todas las API utilizadas en esta guía están disponibles en la sección */storage*: <https://ca.api.ovh.com/console/#/storage>.

> [!primary]
>
> Al utilizar las API, todos los campos marcados con asterisco (\*) son obligatorios.
>

### Listar los snapshots

Todos los snapshots existentes de un volumen pueden recuperarse utilizando la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot
>>
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

Por defecto, no es necesario devolver ningún snapshot para un nuevo volumen.

### Crear un snapshot a partir de un volumen

Para crear un snapshot, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/snapshot
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
>> >
>> > **NetAppShareSnapshot**
>> >
>> >> **description**
>> >>
>> >> > Descripción del snapshot
>> >>
>> >> **name**
>> >>
>> >> > Nombre del snapshot
>

Sustituya el `serviceName` por el ID del servicio y `shareId` por el ID del volumen.

Los parámetros `name` y la `descripción` del snapshot son opcionales.

### Obtener la información de un snapshot

Para obtener la información de un snapshot, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
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
>> >
>> > **snapshotId** *
>> >
>> >> ID del snapshot
>

Sustituya el `serviceName` por el ID del servicio, `shareId` por el ID del volumen y `snapshotId` por el ID del snapshot.

### Eliminar un snapshot

Para eliminar un snapshot, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}
>>
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
>> >
>> > **snapshotId**
>> >
>> >> ID del snapshot
>

Sustituya el `serviceName` por el ID del servicio, `shareId` por el ID del volumen y `snapshotId` por el ID del snapshot que desea eliminar.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
