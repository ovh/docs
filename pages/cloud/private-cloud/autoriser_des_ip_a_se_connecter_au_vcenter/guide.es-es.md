---
title: Autorizar direcciones IP a conectarse al vCenter
slug: autorizar-direcciones-ip-a-conectarse-al-vcenter
section: Funcionalidades de OVHcloud
---

**Última actualización: 25/01/2023**

## Objetivo

El acceso al vCenter solo está restringido a las direcciones IP autorizadas.

**Esta guía explica cómo autorizar direcciones IP a conectarse al vCenter.**

## Requisitos

* Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
* Disponer de una [infraestructura Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/) en su cuenta de OVHcloud.

## Procedimiento

Por defecto, el acceso al vCenter está restringido. Es necesario añadir las IP que estén autorizadas a conectarse al servicio.

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y haga clic en la pestaña `Hosted Private Cloud`{.action}.

Haga clic en el menú `VMware`{.action}, seleccione su infraestructura y acceda a la pestaña `Seguridad`{.action}. Haga clic en `Añadir un nuevo rango de direcciones IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Añada la dirección IP y, si lo desea, una descripción para poder identificarla fácilmente.

Por último, haga clic en `Siguiente`{.action} y, una vez que la IP esté marcada como autorizada e instalada, podrá conectarse al vSphere desde esa dirección IP.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Tenga en cuenta que, por motivos de seguridad, solo podrá autorizar a un máximo de 2048 direcciones IP para conectarse a su vCenter.
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
