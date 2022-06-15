---
title: Enterprise File Storage - Primeros pasos con las API
slug: netapp-quickstart
excerpt: Primeros pasos en su solución Enterprise File Storage utilizando las API de OVHcloud
section: Enterprise File Storage
order: 2
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/10/2021**

## Objetivo

Esta guía explica cómo empezar con Enterprise File Storage.

**Esta guía explica cómo obtener la información de su servicio y crear el primer volumen utilizando la API de OVHcloud.**

## Requisitos

- Tener contratado un plan Enterprise File Storage de OVHcloud.
- Estar conectado a la página de las [API de OVHcloud](https://ca.api.ovh.com/)
- Saber [montar un NAS mediante NFS](https://docs.ovh.com/es/storage/nas-nfs/)

## Lo esencial

La solución OVHcloud Enterprise File Storage permite crear volúmenes y gestionar de este modo los compartimentos de archivos accesibles en una red.

Puede elegir el tamaño de sus volúmenes, gestionar los accesos a través de ACL o crear snapshots (copia instantánea del volumen).

## Procedimiento

Todas las API utilizadas en esta guía están disponibles en la sección */storage*: <https://ca.api.ovh.com/console/#/storage>.

> [!primary]
>
> Al utilizar las API, todos los campos marcados con asterisco (\*) son obligatorios.
>

### Obtener la información del servicio

Todos los servicios activos se pueden recuperar utilizando la siguiente ruta de la API:

> [!api]
>
> @api {GET} /storage/netapp
>

### Crear un nuevo volumen

Un volumen es una unidad de almacenamiento con un tamaño y un protocolo.

Para crear un volumen, utilice la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {POST} /storage/netapp/{serviceName}/share
>> >
>>
>
> Parámetros:
>
>> > **serviceName** *
>> >
>> >> ID del servicio
>> >
>> > **NetAppShare** *
>> >
>> >> **descripción**
>> >>
>> >> > Descripción del volumen
>> >>
>> >> **name**
>> >>
>> >> > Nombre del volumen
>> >>
>> >> **protocol** *
>> >>
>> >> > Protocolo utilizado por el volumen
>> >>
>> >> **size**
>> >>
>> >> > Tamaño del volumen en gigabytes
>

Seleccione el protocolo `NFS` y un tamaño de `10` gigabytes, por ejemplo.

### Añadir un ACL al volumen

Los ACLs permiten autorizar o denegar el acceso a un volumen.

> [!warning]
>
> El comportamiento por defecto es denegar el acceso a un nuevo volumen.
>

Una vez que haya creado un volumen, debe crear una nueva ACL para acceder a él.

Para crear una nueva ACL que le permita conectarse a su volumen, utilice la siguiente ruta de la API:

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
>> >
>> >> ID del servicio
>> >
>> > **shareId** *
>> >
>> >> ID del volumen
>> >
>> > **NetAppShareACLRule** *
>> >
>> >> **accessLevel** *
>> >>
>> >> > Nivel de acceso ACL. Puede ser **rw** (lectura y escritura) o **ro** (sólo lectura).
>> >>
>> >> **accessTo** *
>> >>
>> >> > Dirección IP o rango de direcciones IP en notación CIDR.
>

> [!primary]
>
> Utilizando la notación CIDR, puede autorizar el acceso al volumen desde el rango de direcciones IP X.X.X.X/X.
> Por ejemplo: 192.0.2.0/24
>

### Subir el volumen

Compruebe el estado de creación del ACL mediante la siguiente ruta de la API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/acl/{aclRuleId}
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
>> > **aclRuleId** *
>> >
>> >> ID del ACL
>

Sustituya `aclRuleId` por el ID del ACL creado para su volumen.

> [!primary]
>
> El estado ACL debe estar `active`.
>

Una vez que el ACL esté activo, recupere las rutas de acceso al volumen utilizando la siguiente API:

> [!faq]
>
> API:
>
>> > [!api]
>> >
>> > @api {GET} /storage/netapp/{serviceName}/share/{shareId}/accessPath
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

Para cada volumen, aparecerán una o más rutas de acceso.

Ahora puede montar el volumen con el siguiente comando:

```sh
mount -t nfs accessPath
```

> [!primary]
>
> Si utiliza Linux, debe instalar el paquete `nfs-utils`.
>

Una vez montado, podrá utilizar el volumen para almacenar sus archivos.

### Eliminación del volumen

Puede eliminar el volumen utilizando la siguiente ruta de la API:

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

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
