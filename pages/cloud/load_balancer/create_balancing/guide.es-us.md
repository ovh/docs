---
title: 'Modos de balanceo'
slug: modos-de-balanceo
excerpt: 'Modos de balanceo de la carga del Load Balancer de OVH'
section: Configuración
---

**Última actualización: 21/02/2018**

## Objetivo

El nuevo Load Balancer de OVH ofrece distintos tipos de balanceo de la carga de los servicios, que determinan la forma en la que las peticiones recibidas se distribuyen entre los servidores.

**Esta guía explica los distintos tipos de balanceo de carga y cómo cambiar entre ellos.**

## Requisitos

- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager&){.external}.
- Haber creado una granja de servidores.


## Procedimiento

### Tipos de balanceo de la carga

En las granjas de servidores, el balanceo de carga determina la forma en la que las peticiones se distribuirán entre los distintos servidores de la granja.

Para conocer las principales características del Load Balancer de OVH, consulte la [guía de presentación del servicio](https://docs.ovh.com/es/load-balancer/presentacion-load-balancer/){.external}.

|Algoritmo|Funcionalidades|
|---|---|
|Round-robin|Elige un servidor tras otro en cada conexión. Es el algoritmo utilizado por defecto.|
|First|El primer servidor disponible recibe la conexión. El orden de los servidores se elige en función de su ID, de menor a mayor.|
|Least|Elige el servidor con menos conexiones activas. Se recomienda elegir este algoritmo para sesiones prolongadas con poco tráfico. En los grupos de servidores que tienen el mismo número de conexiones activas, se aplica el algoritmo round-robin.|
|Source|Este algoritmo realiza una función de *hash* en la dirección IP de origen y divide el resultado entre el número de servidores activos en ese momento. Cada dirección IP de origen siempre será dirigida al mismo servidor, mientras este permanezca activo.|
|URI|Este algoritmo realiza una función de *hash* en una parte de la URI (o en la URI entera) y divide el resultado entre el número de servidores activos en ese momento. Cada URI siempre será dirigida al mismo servidor, mientras este permanezca activo.|


### Cambiar el modo de balanceo de la carga de una granja desde el área de cliente 

Una vez en la sección Cloud del área de cliente, haga clic en `Load Balancer`{.action} en la columna izquierda y seleccione el Load Balancer.

Abra la pestaña `Granjas de servidores`{.action}. Se mostrarán las granjas de servidores existentes en ese momento. Para editar una, haga clic en los tres puntos situados a la derecha de la línea correspondiente y seleccione `Editar`{.action}.

![Editar una granja](images/server_cluster_change.png){.thumbnail}

En **Parámetros avanzados** podrá cambiar el modo de balanceo.

![Editar una granja](images/distrib_mode_edit.png){.thumbnail}

Una vez seleccionado el modo de balanceo, haga clic en `Actualizar`{.action} y, en la banda amarilla que aparecerá en la parte superior, haga clic en `Aplicar la configuración`{.action}.

![Aplicar la configuración](images/apply_config.png){.thumbnail}


### Cambiar el modo de balanceo de la carga de una granja a través de la API

Para cambiar el modo de balanceo, es necesario editar los parámetros de la granja de servidores. 

#### Ver el detalle de una granja

Esta llamada a la API permite consultar el detalle de una granja a partir de su identificador. En este ejemplo utilizamos una granja HTTP.

> [!api]
>
> @api {GET} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Parámetro|Significado|
|---|---|
|ServiceName*|Identificador del servicio Load Balancer|
|farmId*|Identificador numérico de la granja|

|Respuesta (BackendHttp)|Significado|
|---|---|
|zone|Nombre de la zona en la que está configurada la granja|
|port|Puerto utilizado para conectar con los servidores configurados en la granja|
|farmId|Identificador numérico de la granja|
|balance|Tipo de balanceo actualmente configurado en la granja|
|probe|Tipo de sonda actualmente configurada en la granja|
|stickiness|Modo de seguimiento de conexión actualmente configurado en la granja|
|displayName|Nombre asignado a la granja|

#### Cambiar el modo de balanceo de una granja

Esta llamada a la API permite modificar la configuración de una granja a partir de su identificador. En este ejemplo utilizamos una granja HTTP. Para cambiar el modo de balanceo, es necesario actualizar el campo **BackendHttp.balance** con un modo de balanceo disponible.

> [!api]
>
> @api {PUT} /ipLoadbalancing/{serviceName}/http/farm/{farmId}
> 

|Parámetro|Significado|
|---|---|
|serviceName*|Identificador del servicio Load Balancer|
|farmId*|Identificador numérico de la granja|
|BackendHttp.balance|Tipo de balanceo deseado para la granja|

#### Aplicar los cambios

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
> 

|Parámetro|Significado|
|---|---|
|serviceName*|Identificador del servicio Load Balancer|
|zone|Nombre de la zona en la que desea desplegar la configuración|


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.