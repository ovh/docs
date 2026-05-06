---
title: "Configurar HTTP/2 en un Load Balancer de OVHcloud"
excerpt: "Descubra cómo elegir y configurar los frontends de su servicio Load Balancer OVHcloud para utilizarlos con el protocolo HTTP/2"
updated: 2026-01-15
---

> [!primary]
> **Nota sobre el soporte nativo del protocolo HTTP/2**
>
> A partir de junio de 2025, los frontends HTTP y TLS de los servicios Load Balancer de OVHcloud admiten de forma nativa el protocolo HTTP/2.
>
> Esta guía sigue siendo aplicable, sin embargo, para los frontends TCP, que pueden ser útiles para aplicaciones que requieran baja latencia y altas prestaciones.
>
> Para activar el protocolo HTTP/2 en frontends HTTP y TLS existentes, debe realizar la llamada de actualización siguiente a través de la API, donde **serviceName** es el nombre interno de su Load Balancer.
>

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
>

## Objetivo

Esta guía tiene dos objetivos principales:

- Ayudarle a comprender las diferencias entre los frontends TCP, HTTP y TLS en un Load Balancer de OVHcloud, permitiéndole así determinar si un frontend TCP es la opción más adecuada para sus necesidades aplicativas específicas, especialmente al gestionar el tráfico HTTP/2.
- Si se considera deseable un frontend TCP, proporcionar a continuación instrucciones paso a paso sobre cómo configurarlo para equilibrar eficazmente el tráfico HTTP/2 en sus servidores backend.

## Requisitos

Necesitará:

- Un servicio [Load Balancer de OVHcloud](/links/network/load-balancer);
- Un frontend TCP en su Load Balancer;
- Un clúster de servidores (familia) TCP con al menos un servidor añadido;
- Servidores backend configurados para admitir y responder con HTTP/2;
- Acceso a la [API de OVHcloud](/links/api).

## Procedimiento

### ¿Por qué utilizar HTTP/2?

HTTP/2 aporta numerosas ventajas para mejorar el rendimiento y la eficiencia de sus aplicaciones:

- *Carga más rápida* gracias al multiplexado, que permite enviar varias solicitudes en paralelo a través de la misma conexión.
- *Latencia reducida* limitando los intercambios entre el cliente y el servidor.
- *Red optimizada* gracias a la compresión de encabezados.

### Diferencias entre los frontends HTTP/2 y TCP

Un frontend TCP opera en la Capa 4 (capa de transporte) del modelo OSI. Cuando configura un frontend TCP, el Load Balancer establece una conexión TCP entre el cliente y un servidor backend. Esto significa que el Load Balancer no inspecciona ni entiende los datos HTTP/2 dentro del flujo TCP. Por lo tanto, los frontends TCP ofrecen altas prestaciones gracias al procesamiento mínimo de los datos.

Sin embargo, como no entiende el protocolo de aplicación, no puede realizar optimizaciones avanzadas específicas de HTTP, como el enrutamiento basado en el contenido o la manipulación de encabezados HTTP.

Los frontends HTTP y TLS, por su parte, operan en la Capa 7 (capa de aplicación). Cuando un cliente se conecta a un frontend compatible con HTTP/2, el Load Balancer decodifica completamente las tramas HTTP/2 antes de establecer una conexión con un servidor backend.

Al interpretar el protocolo de aplicación, un frontend compatible con HTTP/2 puede proporcionar muchas funcionalidades avanzadas. Estas incluyen la terminación SSL/TLS (descargando el cifrado/descifrado de los servidores backend), el enrutamiento basado en el contenido (por ejemplo, el enrutamiento de solicitudes a diferentes familias backend según la ruta de URL o los encabezados), la modificación de solicitudes/respuestas y el multiplexado HTTP/2.

**Debería utilizar un frontend TCP cuando:**

- Necesite equilibrar la carga de otros servicios no HTTP (por ejemplo, bases de datos, aplicaciones TCP personalizadas, SSH);
- Exija prestaciones máximas y una latencia mínima;
- Sus servidores backend ya gestionen la terminación SSL/TLS;
- No necesite funcionalidades HTTP avanzadas específicas, como el enrutamiento basado en el contenido, la manipulación de encabezados HTTP o las optimizaciones a nivel del protocolo HTTP/2.

**Debería utilizar un frontend compatible con HTTP/2 cuando:**

- Trate principalmente tráfico web (HTTP/HTTPS);
- Desee aprovechar las ventajas de rendimiento de HTTP/2 entre el cliente y el Load Balancer;
- Desee delegar la terminación SSL/TLS de sus servidores backend a su Load Balancer;
- Necesite una lógica de enrutamiento avanzada basada en encabezados HTTP, URLs u otros atributos de la capa de aplicación;
- Desee optimizar la experiencia del cliente aprovechando las funcionalidades HTTP/2.

*Si decide utilizar un frontend TCP, siga los pasos siguientes de esta guía para configurarlo para su uso con HTTP/2*.

### Configurar un frontend TCP para HTTP/2

> [!warning]
>
> El orden de creación de los elementos es importante: las rutas deben estar configuradas antes de poder asociarles reglas.
> 

#### Añadir una ruta

Vamos a añadir una ruta al servicio.

##### Desde la API de OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route
> 

> [!warning]
>
> El parámetro weight permite definir el orden de evaluación de sus rutas, la primera que se valide será la que se ejecute.
> 

Parámetros:

|Campo|Valor y descripción|
|---|---|
|serviceName|Identificador de su servicio Load Balancer de OVHcloud|
|frontendId|Identificador de su Frontend TCP puerto 443|
|displayName|"HTTP2 TCP route"|
|weight|(vacío)|
|action.type|"farm"|
|action.target|Identificador de su familia tcp que debe saber gestionar el HTTP/2|

#### Añadir una regla

A continuación, vamos a añadir una regla a la ruta.

##### A través de la API

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/tcp/route/{routeId}/rule
> 

Parámetros:

|Campo|Valor y descripción|
|---|---|
|serviceName|Identificador de su servicio Load Balancer de OVHcloud|
|routeId|Identificador de la ruta creada anteriormente|
|field|"protocol" El nombre del campo que debe verificar la regla|
|match|"is" El tipo de verificación a realizar|
|pattern|"http/2.0" El valor a verificar para el campo especificado|

#### Aplicar los cambios

Los cambios realizados **deben aplicarse expresamente** a cada una de las zonas configuradas en el Load Balancer de OVHcloud. Hasta entonces no serán visibles por los visitantes. Esto permite realizar cambios de configuración complejos de una vez.

Si tiene varias zonas, deberá aplicar la misma configuración a todas ellas.

#### Actualizar una zona

##### Desde la API de OVHcloud

> [!api]
>
> @api {v1} /ipLoadbalancing POST /ipLoadbalancing/{serviceName}/refresh
> 

Parámetros:

|Campo|Valor y descripción|
|---|---|
|serviceName|Identificador de su servicio Load Balancer de OVHcloud|
|zone|Identificador de la zona en la que desea aplicar su configuración|

#### Validar

Una vez hecho lo anterior, el servicio de balanceo de carga debería estar operativo para los servidores HTTP/2. Compruebe el estado del servicio enviando una petición al Load Balancer de OVHcloud y verificando la versión de la respuesta:

```
curl -I --http2 https://www.ovh.es/
HTTP/2 200
```

## Más información

Si desea obtener más información sobre el protocolo HTTP/2, visite <https://http2.github.io/>.

Interactúe con nuestra [comunidad de usuarios](/links/community).