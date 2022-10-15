---
title: Object Storage Swift - Sincronizar un NAS Synology con el Object Storage
slug: pcs/pcs-syno
excerpt: Cómo sincronizar un NAS Synology con un contenedor
section: OpenStack Swift Storage Class Specifics
order: 150
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/10/2021**

## Objetivo

[DiskStation Manager 6.0](https://www.synology.com/en-global/dsm/6.0beta){.external} de Synology ofrece una herramienta de sincronización con diferentes soluciones cloud.

Es compatible con el Object Storage de Public Cloud de OVHcloud y, por lo tanto, le permitirá realizar una copia de seguridad de sus datos y hacerlos accesibles desde cualquier lugar.

**Esta guía explica cómo configurar DiskStation Manager 6.0 para sincronizar los archivos de su NAS con su Object Storage.**

## Requisitos

- [Crear un contenedor Object Storage](https://docs.ovh.com/es/storage/pcs/creacion-de-contenedor/)
- [Crear un acceso a Horizon](https://docs.ovh.com/es/public-cloud/crear-y-eliminar-un-usuario-de-openstack/#requisitos)

## Procedimiento

### Configuración de DiskStation Manager 6.0

> [!warning]
>
> Las soluciones de Synology, como el DiskStation o el Hyperbackup, no son compatibles con Public Cloud Archive.
>

#### Recargar las claves OpenStack

Para configurar la sincronización de su NAS Synology, debe tener las claves de su usuario OpenStack.

Para obtenerlos, descargue el archivo OpenRC mediante la primera parte de la siguiente guía:

- [Cargar las variables de entorno OpenStack](https://docs.ovh.com/es/public-cloud/cargar-las-variables-de-entorno-openstack/#paso-1-obtener-las-variables){.ref}

#### Configuración del punto de sincronización con Cloud Sync

Una vez que disponga de las claves, puede conectarse a su NAS y realizar las siguientes acciones:

- Ejecutar la aplicación Cloud Sync:

![public-cloud](images/3791.png){.thumbnail}

- Seleccionar OpenStack Swift como proveedor cloud

![public-cloud](images/3788.png){.thumbnail}

- Introduzca la información de su usuario OpenStack:

![public-cloud](images/3792.png){.thumbnail}

Todos estos datos se pueden encontrar en el archivo OpenRC que obtuvo en el paso anterior.

- Configurar la carpeta a sincronizar

![public-cloud](images/3790.png){.thumbnail}

> [!alert]
>
> Esta guía está basada en la versión beta de DiskStation Manager 6.0. Es posible que el procedimiento de configuración cambie.
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.