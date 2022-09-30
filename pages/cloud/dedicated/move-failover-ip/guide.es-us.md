---
title:  Mover una Additional IP
excerpt: Cómo mover una Additional IP desde el área de cliente o a través de la API de OVHcloud
slug: ip-fo-move
section: Red e IP
order: 7
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 26/07/2022**

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](https://www.ovhcloud.com/es/network/additional-ip/). Esto no afectará a sus funcionalidades ni al funcionamiento de sus servicios.
>

## Objetivo

Las Additional IP pueden moverse entre los servicios que utilice. El objetivo es no perder su reputación, su posicionamiento y mejorar la continuidad del servicio de sus aplicaciones y sistemas.

Esta tecnología le permite mover las direcciones IP de un servidor a otro en menos de un minuto, prácticamente sin interrupciones para sus usuarios. Asimismo, este mecanismo también puede utilizarse durante la migración de servicios, transfiriendo los proyectos del entorno de desarrollo al de producción, o durante la migración hacia un servidor de respaldo en caso de fallo.

> [!primary]
> Una Additional IP no puede moverse de un país a otro distinto. Por ejemplo, una IP situada en el datacenter SBG (Francia) podrá migrarse a GRA (Francia) o RBX (Francia), pero no podrá migrarse a un servidor localizado en BHS (Canadá).
>
> Los bloques de IPs se tienen que mover en bloque. No es posible dividir un bloque o mover las IPs de un bloque a distintos servidores.

**Cómo mover una Additional IP desde el área de cliente de OVHcloud o a través de la API de OVHcloud**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es/bare-metal/){.external} en el área de cliente de OVHcloud.
- Tener una [dirección Additional IP](https://www.ovhcloud.com/es/bare-metal/ip/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es/compare/).

> [!warning]
> Si la dirección Additional IP, o una de las direcciones IP del bloque, tiene una MAC virtual asociada, el servidor de destino debe soportar la funcionalidad de las MAC virtuales.
> Para ello, consulte [esta guía](https://docs.ovh.com/us/es/dedicated/network-support-virtual-mac/).
>
> En caso contrario, las MAC virtuales deben eliminarse de las Additional IP antes de transferirlas.

## Procedimiento

> [!primary]
> Cuando un bloque IP, que contiene MAC virtuales únicas, se mueve entre dos servidores, esas direcciones se suspenden temporalmente. Aparecerá en el nuevo servidor una vez que se haya completado el movimiento.
>
> Por otra parte, no se pueden mover los bloques que contienen direcciones MAC virtuales duplicadas. Primero debe eliminar la dirección MAC virtual duplicada en el bloque a mover.
>
> Si un bloque IP se mueve/añade al vRack, ya no está vinculado a un servidor físico. En este caso, cualquier dirección MAC virtual se perderá durante la transferencia.
>

### Migrar una IP desde el área de cliente de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda al menú `Bare Metal Cloud`{.action} y abbra `IP`{.action}.

En el menú desplegable "Servicio" puede seleccionar el tipo de servicio a visualizar. Puede elegir "Additional IP" para solamente visualizar las IPs de este tipo.

Haga clic en el botón `...`{.action} que está a la derecha de la dirección IP que quiera mover y, seguidamente, en `Mover la Additional IP`{.action}.

![área de cliente](images/manager02.png){.thumbnail}

En el menú contextual, seleccione el servicio al que quiere mover la dirección IP.

Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action}.

![área de cliente](images/manager03.png){.thumbnail}

### Mover una IP a través de las API

Conéctese a la página web de las [API de OVHcloud](https://ca.api.ovh.com/).

En primer lugar, es mejor comprobar si la dirección IP se puede mover correctamente al servidor deseado.
<br>Para comprobar si la IP puede moverse a uno de sus servidores dedicados, utilice la siguiente llamada:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: la referencia del servidor dedicado de destino
- `ip`: la dirección Additional IP a mover

Para mover la dirección IP, utilice la siguiente llamada:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: la referencia del servidor dedicado de destino
- `ip`: la dirección Additional IP a mover

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.