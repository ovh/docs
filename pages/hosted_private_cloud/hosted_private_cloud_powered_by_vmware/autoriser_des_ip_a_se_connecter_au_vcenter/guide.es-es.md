---
title: Autorizar direcciones IP a conectarse al vCenter
updated: 2023-01-25
---

## Objetivo

El acceso al vCenter solo está restringido a las direcciones IP autorizadas.

**Esta guía explica cómo autorizar direcciones IP a conectarse al vCenter.**

## Requisitos

* Disponer de una [infraestructura Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/) en su cuenta de OVHcloud.

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Ruta de navegación:** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Seleccione su servicio vSphere

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## Procedimiento

Acceda a la pestaña `Seguridad`{.action} y haga clic en `Añadir un nuevo rango de direcciones IP`{.action}.

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
