---
title: "Enterprise File Storage - Restaurar un volumen con la API de restauración de snapshots"
excerpt: "Cómo restaurar los volúmenes de su solución Enterprise File Storage gracias a la funcionalidad de restauración de snapshots que ofrece la API de OVHcloud"
updated: 2023-09-15
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Esta guía explica cómo restaurar un volumen a su último snapshot utilizando la función de *snapshot revert*.

**Cómo restaurar los volúmenes de su solución Enterprise File Storage utilizando la función de restauración de snapshots de la API de OVHcloud.**

## Requisitos

- Disponer de una solución OVHcloud Enterprise File Storage con un volumen
- Estar conectado a la [API de OVHcloud](https://ca.api.ovh.com/)

## Principios básicos

Un snapshot (o instantánea) de un volumen es una copia puntual de sólo lectura de un volumen.
Los snapshots se crean a partir de un volumen existente y operativo. No se puede utilizar un snapshot si el volumen al que pertenece ya no existe.

> [!warning]
>
> Tenga en cuenta que, una vez restaurado un volumen mediante un snapshot, todos los archivos o snapshots creados posteriormente se perderán. Cuando se restaura un volumen, todos los datos que contiene se sustituyen por los datos del snapshot. Esta acción es irreversible.
>

En esta guía, un volumen también recibe el nombre de "*share*" en la API de OVHcloud.

## Límites

Solo es posible restaurar un volumen a su snapshot más reciente disponible. Sin embargo, si desea restaurar un volumen a partir de un snapshot anterior, deberá eliminar los snapshots hasta que el snapshot que vaya a utilizar para la restauración sea el más reciente.

## En la práctica

### Escenario 1: restaurar un volumen desde un snapshot de tipo `manual`

En este caso, desea restaurar el volumen a su último snapshot de tipo "manual", creado a través de la API de OVHcloud o del área de cliente de OVHcloud.

> [!primary]
> **Requisitos para este escenario:**
>
> - Ya ha creado un snapshot de tipo `manual`. En caso contrario, puede crear un snapshot de tipo `manual` a través de la API de OVHcloud o desde el área de cliente de OVHcloud.
> - El snapshot de tipo `manual` debe pertenecer al volumen que quiera restaurar.

1\. Identifique el último snapshot de tipo `manual` con la siguiente llamada a la API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` es el identificador único del servicio
- `{shareId}` es el volumen a restaurar 

![RevertManualSnapshot](images/use_case_1_step_1.png){.thumbnail}

2\. Restaure su volumen al último snapshot utilizando la llamada API `/revert`: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` es el identificador único del servicio
- `{shareId}` es el volumen a restaurar
- `{snapshotID}` es el último snapshot del volumen

La API de OVHcloud solo devolverá un código HTTP 202 (*Accepted*).<br>
El estado del volumen cambiará a `reverting` y volverá a `available` una vez completado el proceso de restauración del volumen. De forma simultánea, el estado del snapshot pasará a `restoring` y volverá a `available` una vez finalizado el proceso de restauración del volumen.

![RevertManualSnapshot](images/use_case_1_step_2.png){.thumbnail}

### Escenario 2: Restaurar un volumen desde un snapshot realizado mediante la política de snapshots

En este escenario, una regla de una política de snapshots (*Snapshot policy*) toma snapshots regulares (automáticos) de un volumen y quiere restaurar su volumen al último snapshot creado por la *Snapshot policy*.

Deberá "conservar" (`hold`) el último snapshot realizado por la política de snapshots asociada a un volumen para que el snapshot se convierta en un snapshot `manual`. Una vez que el snapshot es de tipo "manual", su volumen asociado puede restaurarse.

> [!primary]
> **Requisitos para este escenario:**
>
> - Ha creado una *snapshot policy* y la ha asociado al volumen que desea restaurar.
> - Esta *snapshot policy* ha creado al menos un snapshot.

> [!primary]
>
> Los snapshots tomados por la *snapshot policy* son de tipo `automatic`. Para poder usarlos para la restauración de volúmenes, deben conservarse mediante la ruta API `/hold`. Esto impedirá su rotación mediante la *Snapshot policy*.
>

1\. Identifique el último snapshot de tipo `automatic` con la siguiente llamada a la API:

> [!api]
>
> @api {v1} /storage GET /storage/netapp/{serviceName}/share/{shareId}/snapshot
>

- `{serviceName}` es el identificador único del servicio
- `{shareId}` es el volumen a restaurar

![RevertSnapshot](images/use_case_2_step_1.png){.thumbnail}

2\. Conserve el snapshot utilizando la siguiente llamada a la API: 

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/snapshot/{snapshotId}/hold

- `{serviceName}` es el identificador único del servicio
- `{shareId}` es el volumen a restaurar
- `{snapshotID}` es el último snapshot automático

> [!warning]
>
> Una vez realizada la operación de conservación (`hold`), se modificarán el identificador y el tipo del snapshot. No obstante, se conservarán sus propiedades `name`, `createdAt` y `path`. Por favor, tome nota del nuevo `id` para los siguientes pasos.
>

![RevertSnapshot](images/use_case_2_step_2.png){.thumbnail}

3\. Asegúrese de que el nuevo snapshot es el último snapshot de tipo `manual` del volumen.

Si se han realizado otros snapshots de tipo `manual` antes de realizar el snapshot, deberán eliminarse.

4\. La ruta API utilizada para obtener la lista de snapshots del volumen del paso 1 puede reutilizarse aquí.

![RevertSnapshot](images/use_case_2_step_3.png){.thumbnail}

5\. Restaure el volumen a su último snapshot llamando a la ruta API `/revert`:

> [!api]
>
> @api {v1} /storage POST /storage/netapp/{serviceName}/share/{shareId}/revert
>

- `{serviceName}` es el identificador único del servicio
- `{shareId}` es el volumen a restaurar
- `{snapshotID}` es el último snapshot del volumen

La API de OVHcloud solo devolverá un código HTTP 202 (*Accepted*).<br>
El estado del volumen cambiará a `reverting` y volverá a `available` una vez completado el proceso de restauración del volumen. De forma simultánea, el estado del snapshot pasará a `restoring` y volverá a `available` una vez finalizado el proceso de restauración del volumen.

![RevertSnapshot](images/use_case_2_step_4.png){.thumbnail}

El volumen se restaurará en el snapshot seleccionado.

## Más información <a name="go-further"></a>

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
