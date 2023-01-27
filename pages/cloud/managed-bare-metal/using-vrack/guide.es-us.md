---
title: Utilizar el Managed Bare Metal en un vRack
routes:
    canonical: 'https://docs.ovh.com/us/es/private-cloud/hosted-private-cloud-vrack/'
excerpt: Cómo utilizar el vRack con la solución Managed Bare Metal
slug: vrack-essentials
section: Servicios y opciones de OVHcloud
updated: 2020-11-23
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 05/11/2020**

## Objetivo

El vRack permite conectar distintos servicios cloud de OVHcloud entre sí, dentro de una o más redes privadas seguras (VLAN).

**Esta guía explica cómo aplicarla**

## Procedimiento

### Área de cliente

Al entregar el servicio [Managed Bare Metal](https://www.ovhcloud.com/es/managed-bare-metal/), la parte *datacenter* ya está dentro de un vRack.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Para mover el *datacenter* de su Managed Bare Metal a otro vRack, haga clic en el botón `Mover`{.action}

### Cliente vSphere

En el cliente vSphere, puede consultar las *VLAN* compatibles con el vRack en el switch virtual distribuido (vds), que a su vez se encuentra en la carpeta **vrack**.

> [!success]
>
> Por defecto, OVHcloud le entrega una infraestructura con 11 VLAN (VLAN10 a VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Es posible modificar sus parámetros o volver a crearlos siguiendo la guía de [creación de VLAN](../crear-vlan/).

A continuación, podrá asignar estos *portgroup* a las interfaces de red de sus máquinas virtuales.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
