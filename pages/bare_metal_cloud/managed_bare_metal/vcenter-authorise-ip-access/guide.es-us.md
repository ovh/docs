---
title: Autorizar direcciones IP a conectarse al vCenter
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/autoriser_des_ip_a_se_connecter_au_vcenter'
updated: 2020-11-18
---


## Objetivo

Es posible limitar el acceso al vCenter autorizando solo la conexión de determinadas direcciones IP. 

**Esta guía explica cómo autorizar direcciones IP a conectarse al vCenter.**

## Requisitos

* Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
* Disponer de una [infraestructura Managed Bare Metal](https://www.ovhcloud.com/es/managed-bare-metal/){.external} en su cuenta de OVHcloud.

## Procedimiento

Cuando [la política de acceso al vCenter está restringida](/pages/bare_metal_cloud/managed_bare_metal/vcenter-modify-access-policy), es necesario añadir las direcciones IP autorizadas a conectarse al servicio.

Esta operación se realiza desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external-link}. En el menú `Servidores`, acceda a la sección `Managed Bare Metal`. Seleccione la infraestructura y, a continuación, abra la pestaña `Seguridad`. Por último, haga clic en `Añadir un nuevo rango de direcciones IP`{.action}.

![vCenter](images/restrictIP.png){.thumbnail}

Añada la dirección IP y, si lo desea, una descripción para poder identificarla fácilmente.

Por último, haga clic en `Siguiente`{.action} y, una vez que la IP esté marcada como autorizada e instalada, podrá conectarse al vSphere desde esa dirección IP.

![vCenter](images/restrictIP2.JPG){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
