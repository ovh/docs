---
title: Añadir un bloque de IP
excerpt: Contratar un bloque de IP en Managed Bare Metal
updated: 2020-11-18
---

## Objetivo

Los bloques de IP permiten que sus servicios estén accesibles online.

**Esta guía explica cómo contratar, añadir y migrar un bloque de IP asociado a su Managed Bare Metal.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
- Disponer de una [infraestructura Managed Bare Metal](https://www.ovhcloud.com/es/managed-bare-metal/){.external} en su cuenta de OVHcloud.

## Procedimiento

### Contratar un bloque de IP

Para contratar un bloque de IP adicional en su **Managed Bare Metal**, acceda al área de cliente de OVHcloud. En el menú `Bare Metal Cloud`, acceda a la sección `IP` en la columna izquierda y haga clic en `Contratar IP adicionales`{.action}. Seleccione su solución **Managed Bare Metal** en el menú desplegable antes de pasar a la siguiente etapa.

Deberá rellenar diferentes campos para crear su bloque de IP.

- Tamaño de bloque IP (de /28 a /24)

> [!primary]
>
> Incluimos a continuación una tabla para recordarle el número de IP presentes en un bloque, así como el número de IP utilizables.
> 

|Tamaño del bloque|IP en el bloque|IP utilizables en OVHcloud|
|:---:|:---:|:---:|
|28|16|11|
|27|32|27|
|26|64|59|
|25|128|123|
|24|256|251|

> [!primary]
>
> Para más información sobre las IP reservadas en su bloque y su utilización, consulte la siguiente guía: [Utilizar el plugin OVHcloud Network](/pages/bare_metal_cloud/managed_bare_metal/plugin_ovh_network).
>

- El país en el que el bloque de IP está alojado resulta importante en algunos casos para el posicionamiento de sus servicios (por ejemplo, un sitio web español tendrá un mejor posicionamiento en España si la IP es española).
- Nombre de la red (información visible en el Whois del bloque de IP).
- Número de clientes estimados (cuántos clientes finales se alojarán en estas IP).
- Descripción de la red (información visible en el Whois del bloque de IP).
- Uso (información sobre la utilización: web, SSL, cloud).

> [!success]
>
> El coste de activación del bloque es de 2 € por IP (IVA no incl.). Así pues, para un bloque en `/28` con 16 IP, deberá abonar una orden de pedido de 32 € (IVA incl.) a la hora de realizar su pedido. 
>  
> La renovación de las IP es gratuita.
>

Tras haber confirmado este último paso, obtendrá la orden de pedido de su bloque de IP. Si la orden de pedido es correcta, solo tendrá que realizar el pago con cualquiera de los métodos de pago disponibles en la parte inferior de la página.

### Migrar un bloque de IP entre dos Managed Bare Metal

Para migrar un bloque de IP, deberá mover manualmente los bloques a través de la APIv6 de OVHcloud.

Para ello, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/move
> 

Rellene los campos utilizando los siguientes parámetros:

- ip: bloque IP con /mask
- nexthop «newPrimaryIp» (preste atención a las mayúsculas)
- to: Managed Bare Metal de destino con forma «pcc-XXX-XXX-XXX-XXX»

![campo nexthop](images/move-api.png){.thumbnail}

Obtendrá el siguiente resultado:

![campo nexthop](images/api-result.png){.thumbnail}

A continuación utilice la siguiente llamada para mover la IP en el parking de IP:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/park
> 

> [!warning]
>
> Esta llamada interrumpe la red en las MV que utilizan las IP en cuestión.
>

Podrá seguir la migración del bloque de IP desde su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) en el menú `Bare Metal Cloud`{.action} > `Managed Bare Metal`{.action}. Haga clic en su servicio y, a continuación, en la pestaña `Operaciones`{.action}.

La referencia de la operación es «removeIpRipeBlock».

![operaciones manager](images/operations.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
