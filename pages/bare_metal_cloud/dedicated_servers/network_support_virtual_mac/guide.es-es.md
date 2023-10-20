---
title: Determinar si la funcionalidad de las MAC virtuales es compatible con un servidor dedicado
excerpt: Cómo determinar si la funcionalidad de las MAC virtuales es compatible con un servidor dedicado a través de la API de OVHcloud
updated: 2021-12-09
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Para utilizar la funcionalidad de las MAC virtuales (VMAC) en un servidor dedicado, es necesario determinar en primer lugar si este servidor de soporte cumple esta funcionalidad.

El soporte de esta funcionalidad es un requisito previo para todas las acciones relacionadas con las MAC virtuales.

**Esta guía explica cómo comprobar si un servidor dedicado soporta la funcionalidad de las MAC virtuales.**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external}.
- Estar conectado a la [API de OVHcloud](https://api.ovh.com/){.external}.

> [!primary]
> Si no está familiarizado con el uso de la API de OVHcloud, consulte nuestra guía [Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps).

## Procedimiento

Para ello, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Introduzca el nombre del servidor en el campo `serviceName` y haga clic en `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

Obtendrá una lista con una entrada "vmac / supported" que estará en "true" o "false" (valor booleano).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interpretación del resultado**
>
> - **false**: no es posible utilizar las funcionalidades asociadas a las MAC virtuales en este servidor.
>
> - **true**: puede utilizar las funcionalidades asociadas a las MAC virtuales en este servidor.
>

## Más información

[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.