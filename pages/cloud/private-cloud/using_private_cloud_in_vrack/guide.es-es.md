---
title: Utilizar el Hosted Private Cloud en un vRack
excerpt: Cómo utilizar el vRack con la solución Hosted Private Cloud
slug: anadir_un_dedicated_cloud_al_vrack_15_y_configurar_una_mv
legacy_guide_number: g1257
section: Servicios y opciones de OVHcloud
updated: 2022-03-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 28/03/2022**

## Objetivo

El vRack permite conectar distintos servicios cloud de OVHcloud entre sí, dentro de una o más redes privadas seguras (VLAN).

**Esta guía explica cómo aplicarla**

## Requisitos

- Tener un servicio [vRack](https://www.ovh.com/world/es/soluciones/vrack/) en su cuenta o contratar uno si es necesario.
- Ser contacto administrador de la infraestructura [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/), para recibir claves de conexión.
- Tener un usuario activo (creado en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### Área de cliente

Al entregar el servicio [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/), la parte *datacenter* ya está dentro de un vRack. Para acceder al vRack, acceda a la sección `Bare Metal Cloud`{.action}, haga clic en `Network`{.action}, y luego en `vRack`{.action}. Seleccione su vRack de la lista para ver el contenido.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Para mover el *datacenter* de su Hosted Private Cloud a otro vRack, haga clic en el botón `Mover`{.action}

### Cliente vSphere

En el cliente vSphere, puede consultar las *VLAN* compatibles con el vRack en el switch virtual distribuido (vds), que a su vez se encuentra en la carpeta **vrack**.

> [!success]
>
> Por defecto, OVHcloud le entrega una infraestructura con 11 VLAN (VLAN10 a VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Es posible modificar sus parámetros o volver a crearlos siguiendo la guía de [creación de VxLAN](../crear-vlan-vxlan/).

A continuación, podrá asignar estos *portgroup* a las interfaces de red de sus máquinas virtuales.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
