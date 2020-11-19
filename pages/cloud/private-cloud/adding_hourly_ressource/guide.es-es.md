---
title: 'Añadir recursos por horas'
slug: anadir-recursos-por-horas
excerpt: 'Cómo añadir recursos con facturación por horas'
section: 'Funcionalidades de OVHcloud'
---

**Última actualización: 04/10/2018**

## Objetivo

La solución [Private Cloud](https://www.ovh.es/private-cloud/){.external} permite disfrutar de recursos con facturación por horas.

**Esta guía explica cómo añadir recursos por horas desde el panel de administración vSphere de Private Cloud.**

## Requisitos

* Tener contratado un servicio [Private Cloud](https://www.ovh.es/private-cloud/){.external}.
* Tener una cuenta con permisos para añadir recursos en el datacenter correspondiente. Dichos permisos se otorgan desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
* Estar conectado al cliente vSphere.


## Procedimiento

### Seleccionar el recurso

En la pestaña `Hosts and Clusters`{.action} de la columna izquierda, seleccione un datacenter de la infraestructura. A continuación, abra la pestaña `Configure`{.action}.

![Añadir un host](images/addhost_01.png){.thumbnail}

Para añadir un host con facturación por horas, haga clic en `Add OVH Host...`{.action}. Seleccione el modelo y haga clic en el botón `Next`{.action}. Si, en lugar de un host, quiere añadir un datastore, puede hacerlo desde el menú `Add OVH Storage...`{.action}.

![Añadir un host](images/addhost_03.png){.thumbnail}


### Confirmar la orden de pedido

Compruebe que la información relativa al pedido es correcta y haga clic en el botón `Next`{.action} para aceptar la orden de pedido.

![](images/addhost_04.png){.thumbnail}

### Seguir el progreso de la instalación

Una vez que haya aceptado la orden de pedido, puede consultar el progreso de la instalación del recurso.

![](images/addhost_06.png){.thumbnail}

También puede seguir el progreso de la operación desde la zona de tareas recientes de vSphere, en la parte inferior de la pantalla.


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.