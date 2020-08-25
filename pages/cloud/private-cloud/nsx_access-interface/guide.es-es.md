---
title: Acceder a la interfaz de gestión NSX
slug: acceder-a-la-interfaz-de-gestion-nsx
excerpt: Cómo utilizar la interfaz de gestión NSX
section: NSX
order: 01
---

**Última actualización: 29/06/2020**

## Objetivo

NSX es una solución de Software Defined Network (SDN) desarrollada por VMware que se activa a nivel del vCenter y se controla directamente desde la interfaz vSphere. Con NSX podrá configurar las reglas de acceso a sus redes, crear su política de seguridad y desplegar en cuestión de minutos los diferentes servicios de redes necesarios para construir su infraestructura.

**Esta guía explica cómo utilizar esta interfaz.**

## Requisitos

- Disponer de un identificador de usuario activo con permisos específicos para NSX.
- Estar conectado a la [interfaz vSphere](../instalar_el_vsphere_client/).

## Procedimiento

VMware NSX solo está disponible desde la interfaz vSphere.

En la página de inicio del cliente vSphere, haga clic en la categoría `Networking and Security`{.action} del menú de la izquierda:

![Networking and Security](images/nsx01.png){.thumbnail}

Desde ahí podrá acceder a la página de inicio de NSX y a todos los menús asociados.


> [!primary]
>
> Para acceder a la API NSX, deberá utilizar «https://nsx.pcc-x-x-x-x.ovh.com/api».
>
> Ejemplo para recuperar su configuración de firewall: 
>
> ```
> curl -u "admin:xxxx" -XGET "https://nsx.pcc-x-x-x-x.ovh.com/api/4.0/firewall/globalroot-0/defaultconfig"
> ```
>
> Por motivos de seguridad, las /api/1.0/ no son compatibles.
> 


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
