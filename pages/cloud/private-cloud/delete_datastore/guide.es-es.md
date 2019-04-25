---
title: 'Eliminar un datastore'
slug: eliminar-un-datastore
excerpt: 'Cómo eliminar un datastore de un Private Cloud'
section: 'Funcionalidades de OVH'
---

**Última actualización: 22/11/2018**

## Objetivo

Existen situaciones en las que puede ser útil eliminar un datastore del cluster, por ejemplo, para sustituirlo por otro o para migrar a un modelo con mayor capacidad de almacenamiento.

**Esta guía explica cómo eliminar de forma segura un datastore de una infraestructura Private Cloud.**

## Requisitos

* Tener contratado un servicio [Private Cloud](https://www.ovh.es/private-cloud/){.external}.
* Estar conectado al cliente vSphere.

## Procedimiento

> [!warning]
>
> Por motivos de seguridad, no es posible eliminar los **dos datastores de 300 GB o 1,2 TB** incluidos en un pack ni eliminar un datastore si este contiene máquinas virtuales (en la pantalla de confirmación puede ver la lista de máquinas virtuales alojadas en el datastore).
>

Para eliminar un datastore, acceda al almacenamiento de su plataforma en la pestaña `Storage`{.action} de la columna izquierda. Haga clic derecho sobre el datastore correspondiente y seleccione `OVH Private Cloud`{.action} y luego `Remove Storage`{.action}.

![Selección del datastore](images/removestorage_01.png){.thumbnail}

En la nueva pantalla,  confirme que desea eliminar el datastore haciendo clic en `Next`{.action}.

![Confirmación de la eliminación](images/removestorage_02.png){.thumbnail}

La solicitud de eliminación se enviará.

![Eliminación confirmada](images/removestorage_03.png){.thumbnail}

Puede consultar el progreso de la operación en la zona **Recent Tasks**.

![Progreso de la operación de eliminación](images/removedatastore.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.