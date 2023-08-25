---
title: 'Eliminar un datastore'
routes:
    canonical: '/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/delete_datastore'
excerpt: 'Cómo eliminar un datastore de un Managed Bare Metal'
updated: 2020-11-18
---


## Objetivo

Existen situaciones en las que puede ser útil eliminar un datastore del cluster, por ejemplo, para sustituirlo por otro o para migrar a un modelo con mayor capacidad de almacenamiento.

**Esta guía explica cómo eliminar de forma segura un datastore de una infraestructura Managed Bare Metal.**

## Requisitos

* Tener contratado un servicio [Managed Bare Metal](https://www.ovhcloud.com/es/managed-bare-metal/){.external}.
* Estar conectado al cliente vSphere.

## Procedimiento

> [!warning]
>
> Por motivos de seguridad, no es posible eliminar los **dos datastores de 300 GB o 1,2 TB** incluidos en un pack ni eliminar un datastore si este contiene máquinas virtuales (en la pantalla de confirmación puede ver la lista de máquinas virtuales alojadas en el datastore).
>

Para eliminar un datastore, acceda al almacenamiento de su plataforma en la pestaña `Storage`{.action} de la columna izquierda. Haga clic derecho sobre el datastore correspondiente y seleccione `OVHcloud`{.action} y luego `Remove Storage`{.action}.

![Selección del datastore](images/removedatastore01.png){.thumbnail}

En la nueva pantalla,  confirme que desea eliminar el datastore haciendo clic en `Next`{.action}.

![Confirmación de la eliminación](images/removedatastore02.png){.thumbnail}

La solicitud de eliminación se enviará.

![Eliminación confirmada](images/removedatastore03.png){.thumbnail}

Puede consultar el progreso de la operación en la zona **Recent Tasks**.

![Progreso de la operación de eliminación](images/removedatastore04.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
