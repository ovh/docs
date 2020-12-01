---
title: Utilizar el Hosted Private Cloud en un vRack
excerpt: Cómo utilizar el vRack con la solución Hosted Private Cloud
slug: hosted-private-cloud-vrack
section: Servicios y opciones de OVHcloud
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 02/07/2020**

## Objetivo

El vRack permite conectar distintos servicios cloud de OVHcloud entre sí, dentro de una o más redes privadas seguras (VLAN).

**Esta guía explica cómo aplicarla**

## Procedimiento

### Área de cliente

Al entregar el servicio [Hosted Private Cloud](https://www.ovhcloud.com/es/enterprise/products/hosted-private-cloud/), la parte *datacenter* ya está dentro de un vRack.

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
