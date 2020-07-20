---
title: Configurar HTTP/2 en un Load Balancer de OVHcloud
slug: load-balancer-http2
excerpt: Cómo configurar el protocolo HTTP/2 en un Load Balancer de OVHcloud
section: Casos particulares
---

**Última actualización: 23/02/2018**

## Objetivo

Actualmente el Load Balancer de OVHcloud no soporta el protocolo HTTP/2, pero hay una forma de saltarse esta restricción: utilizar conjuntamente el modo TCP y la extensión ALPN del protocolo TLS.

ALPN (Application-Layer Protocol Negotiation) es una extensión de TLS que permite a la capa de aplicación negociar cuál será el protocolo utilizado (en este caso, h2).

**Esta guía explica cómo crear un servicio HTTP/2 con el Load Balancer de OVHcloud. En este caso, vamos a configurar el servicio para balancear la carga en varios servidores que respondan en HTTP/2.**


## Requisitos

- Haber creado un frontend TCP.
- Haber creado una granja TCP y haberle añadido servidores.


## Procedimiento

> [!warning]
>
> El orden de creación de los elementos es importante: las rutas deben estar configuradas antes de poder asociarles reglas.
> 


### 1. Añadir una ruta

Vamos a añadir una ruta al servicio.


#### A través de la API

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/route
>

|Parámetros|Significado o valor|
|---|---|
|serviceName*|Identificador del Load Balancer|
|action*|type: "farm"<br>target: Identificador de la granja TCP, que debe poder gestionar el HTTP/2|
|frontendId|Identificador del frontend TCP 443|

### 2. Añadir una regla

A continuación, vamos a añadir una regla a la ruta.


#### A través de la API

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
>

|Parámetros|Significado o valor|
|---|---|
|serviceName*|Identificador del Load Balancer|
|routeId*|Identificador de la ruta anteriormente creada|
|field*|"protocol"|
|match*|"is"|
|pattern|"http/2.0"|


### 3. Aplicar los cambios

Los cambios realizados **deben aplicarse expresamente** a cada una de las zonas configuradas en el Load Balancer de OVHcloud. Hasta entonces no serán visibles por los visitantes. Esto permite realizar cambios de configuración complejos de una vez.

Si tiene varias zonas, deberá aplicar la misma configuración a todas ellas.

A continuación vamos a actualizar una zona.

#### A través de la API

> [!api]
>
> @api {POST} /ipLoadbalancing/{serviceName}/refresh
>


|Parámetros|Significado o valor|
|---|---|
|serviceName*|Identificador del Load Balancer|
|zone|Zona en la que desea desplegar la configuración|


### 4. Aceptar

Una vez hecho lo anterior, el servicio de balanceo de carga debería estar operativo para los servidores HTTP/2. Compruebe el estado del servicio enviando una petición al Load Balancer de OVHcloud y verificando la versión de la respuesta:

```
curl -I --http2 https://www.ovh.com/world/es
HTTP/2 200
```

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com){.external}.
