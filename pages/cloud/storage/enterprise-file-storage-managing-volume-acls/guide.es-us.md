---
title: Enterprise File Storage - Gestionar las ACL de un volumen
slug: netapp-volume-acl
excerpt: Cómo gestionar las ACL de un volumen Enterprise File Storage utilizando las API de OVHcloud
section: Enterprise File Storage
order: 4
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/10/2021**

## Objetivo

Esta guía explica cómo gestionar las ACL de un volumen para la solución OVHcloud Enterprise File Storage.

**Esta guía explica cómo recuperar las ACL (Access Control Lists) de su volumen, crear una nueva ACL y eliminar una ACL existente desde las API de OVHcloud.**

## Requisitos

- Tener contratado un plan Enterprise File Storage de OVHcloud con un volumen.
- Estar conectado a la página de las [API de OVHcloud](https://ca.api.ovh.com/).

## Lo esencial

Los ACL permiten autorizar o restringir el acceso a un volumen.

> [!warning]
>
> Por defecto, se restringe el acceso a un volumen creado recientemente. Es necesario crear un ACL para permitir el acceso.
>

Mediante ACL, puede autorizar a una dirección IP o rango de direcciones IP (notación CIDR) a acceder al volumen.

## Procedimiento

Todas las rutas API utilizadas en esta guía están disponibles en la sección */storage* : <https://ca.api.ovh.com/console/#/storage>.

> [!primary]
>
> Al utilizar la API, todos los campos marcados con asterisco (\*) son obligatorios.
>

### Listar las ACL

Todas las ACL existentes de un volumen pueden recuperarse mediante la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>>
>> >> ID del servicio
>>
>> > **shareId** *
>>
>> >> ID del volumen
>

Sustituya el `serviceName` por el ID de su servicio y `shareId` por el ID del volumen.

Cuando utilice esta llamada a la API para un nuevo volumen, no se le devolverá ninguna ACL por defecto.

### Autorizar el acceso a un volumen mediante una ACL

Para crear una nueva ACL, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share/{shareId}/acl
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>>
>> >> ID del servicio
>>
>> > **shareId** *
>>
>> >> ID del volumen
>>
>> > **NetAppShareACLRule** *
>>
>> >> **accessLevel** *
>> >>
>> >> > Nivel de acceso ACL. Puede ser **rw** (lectura y escritura) o **ro** (sólo lectura).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Dirección IP o rango de direcciones IP en notación CIDR.
>

Sustituya el `serviceName` por el ID de su servicio y `shareId` por el ID del volumen.

Seleccione el nivel de acceso que quiere autorizar: o `ro` (sólo lectura) o `rw` (lectura y escritura).

Por último, sustituya `accessTo` por la dirección IP desde la que quiera autorizar las conexiones.

### Eliminar una ACL

La eliminación de un ACL impide cualquier acceso posterior desde las direcciones IP que en él se especifique.

Para eliminar un ACL, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {DELETE} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>>
>> >> ID del servicio
>>
>> > **shareId** *
>>
>> >> ID del volumen
>>
>> > **aclRuleId** *
>>
>> >> ID del ACL
>

Sustituya el `serviceName` por el ID de su servicio y `shareId` por el ID del volumen.

Puede obtener el `aclRuleId` a partir de la respuesta obtenida al crear el ACL o listando las ACL existentes de su volumen.

## Más información

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
