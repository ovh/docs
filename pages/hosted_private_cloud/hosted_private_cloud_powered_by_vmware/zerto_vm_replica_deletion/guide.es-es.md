---
title: "Eliminar la copia de una MV del sitio de recuperación Zerto"
excerpt: Cómo eliminar una MV del sitio de recuperación cuando se elimina del sitio de origen
updated: 2021-12-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 09/12/2021**

## Objetivo

Cuando una MV se elimina voluntariamente del sitio de origen, la VPG Zerto hace una pausa en la sincronización y se pone en error.<br>
Los archivos de la copia de la MV siguen estando en el sitio de destino.<br>
Este documento muestra cómo borrar estos archivos y restaurar la VPG.

**Utilice la interfaz Zerto para eliminar una copia de MV del sitio de destino.**

## Requisitos

- Ser contacto administrador de la [infraestructura Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/) para recibir las claves de conexión.
- Tener un usuario activo con permisos específicos para Zerto (creado en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)).
- Haber desplegado [Zerto Virtual Replication.](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/zerto_virtual_replication_as_a_service)

## Procedimiento

En la interfaz Zerto del sitio de destino, compruebe los paneles de control `VPGs`{.action} y `VMs`{.action}.<br>
En nuestro ejemplo, VPG1 contiene dos MV, vm1-zerto y vm2-zerto. El estado de la sincronización del sitio es funcional.

![Dash](images/en01sync.png){.thumbnail}

En la interfaz vSphere del sitio de origen, se elimina de forma voluntaria vm2-zerto.<br>
La MV y sus discos se eliminan.

![VM](images/en02vmdelete.png){.thumbnail}

Volviendo a la interfaz Zerto del sitio de destino, la VPG hace una pausa en la sincronización y se muestra en error. La MV vm2-zerto está gris.

![VM](images/en03vpgerror.png){.thumbnail}

En la pestaña `VPGs`{.action}, marque VPG1 y en el menú `Actions`{.action}, haga clic en `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}

En `MVs`{.action}, elija vm2-zerto de la sección `selected VMS` (marque la MV y haga clic en la flecha que apunta a la izquierda).<br>
Haga clic en `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}

Haga clic en `No`{.action} en la ventana de advertencia. Por lo general, no es necesario guardar el disco de recuperación.

![VPG](images/en06warning.png){.thumbnail}

La VPG se sincronizará de nuevo y volverá a funcionar con una sola MV en el interior.

![DONE](images/en07green.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
