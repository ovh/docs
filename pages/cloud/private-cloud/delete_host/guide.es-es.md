---
title: 'Eliminar un servidor host'
slug: eliminar-servidor-host
excerpt: 'Cómo eliminar un servidor host de una infraestructura Private Cloud'
section: 'Funcionalidades de OVH'
---

**Última actualización: 24/07/2020**

## Objetivo

Hay situaciones en las que puede ser necesario eliminar un servidor host del cluster, por ejemplo, para devolver un host de *spare* que ya no utilice o para migrar a una gama superior.

**Esta guía explica cómo eliminar de forma segura un servidor host de una infraestructura Private Cloud.**

## Requisitos

* Tener contratado un servicio [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/){.external}.
* Estar conectado al panel de administración vSphere.


## Procedimiento

La eliminación de un servidor host se realiza en dos etapas: en primer lugar se debe poner el recurso en modo de mantenimiento para, posteriormente, proceder a eliminarlo.

### 1. Activar el modo de mantenimiento

Una vez que se haya conectado al cliente vSphere, acceda al inventario de su plataforma en la pestaña `Hosts and Clusters`{.action} de la columna izquierda. Haga clic derecho sobre el servidor host correspondiente y seleccione `Maintenance Mode`{.action} y luego `Enter Maintenance Mode`{.action}. Si hay máquinas virtuales funcionando en ese servidor host, se moverán automáticamente a otro servidor host del mismo cluster (los modos HA y DRS deben estar activados).

![Activación del modo de mantenimiento](images/removehost01.png){.thumbnail}

En el cuadro de diálogo, confirme la activación del modo de mantenimiento haciendo clic en `OK`{.action}.

![Confirmación del modo de mantenimiento](images/removehost02.png){.thumbnail}


Puede seguir el progreso de la operación en la zona **Recent Tasks**.

![Progreso de la activación del modo de mantenimiento](images/removehost03.png){.thumbnail}


### 2. Eliminar el servidor host

Una vez que el servidor esté en modo de mantenimiento, haga clic derecho sobre él y seleccione `OVHcloud`{.action} y luego `Remove OVH Host`{.action}.

![Eliminar el host](images/removehost04.png){.thumbnail}

En la nueva pantalla, confirme que desea eliminar el servidor host haciendo clic en el botón `Next`{.action}.

![Confirmación de la eliminación](images/removehost05.png){.thumbnail}

La solicitud de eliminación se enviará.

![Confirmación de la eliminación](images/removehost06.png){.thumbnail}

Puede seguir el progreso de la operación en la zona **Recent Tasks**.

![Progreso de la eliminación del host](images/removehost07.png){.thumbnail}

El servidor host se eliminará en unos minutos y dejará de aparecer en el inventario. 

> [!primary]
>
> Si se añade algún archivo o directorio que no estuviera inicialmente presente en el almacenamiento local del servidor host, generará un error que impedirá eliminar el servidor. Los directorios de base y los archivos de vSwap son los únicos que no bloquean la operación de eliminación.
> 


## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
