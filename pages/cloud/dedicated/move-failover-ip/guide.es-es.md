---
title:  Mover una IP failover
excerpt: Cómo mover una IP failover desde el área de cliente o a través de la API de OVHcloud
slug: ip-fo-move
section: Red e IP
order: 7
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 26/07/2022**

## Objetivo

Las IP failover pueden moverse entre los servicios que utilice. El objetivo es no perder su reputación, su posicionamiento y mejorar la continuidad del servicio de sus aplicaciones y sistemas.

Esta tecnología le permite mover las direcciones IP de un servidor a otro en menos de un minuto, prácticamente sin interrupciones para sus usuarios. Asimismo, este mecanismo también puede utilizarse durante la migración de servicios, transfiriendo los proyectos del entorno de desarrollo al de producción, o durante la migración hacia un servidor de respaldo en caso de fallo.

> [!primary]
> Una IP failover no puede moverse de un país a otro distinto. Por ejemplo, una IP situada en el datacenter SBG (Francia) podrá migrarse a GRA (Francia) o RBX (Francia), pero no podrá migrarse a un servidor localizado en BHS (Canadá).
>
> Los bloques de IPs se tienen que mover en bloque. No es posible dividir un bloque o mover las IPs de un bloque a distintos servidores.

**Cómo mover una IP failover desde el área de cliente de OVHcloud o a través de la API de OVHcloud**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external} en el área de cliente de OVHcloud.
- Tener una [dirección IP failover](https://www.ovhcloud.com/es-es/bare-metal/ip/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

> [!warning]
> Si la dirección IP failover, o una de las direcciones IP del bloque, tiene una MAC virtual asociada, el servidor de destino debe soportar la funcionalidad de las MAC virtuales.
> Para ello, consulte [esta guía](https://docs.ovh.com/es/dedicated/network-support-virtual-mac/).
>
> En caso contrario, las MAC virtuales deben eliminarse de las IP failover antes de transferirlas.

## Procedimiento

> [!primary]
> Cuando un bloque IP, que contiene MAC virtuales únicas, se mueve entre dos servidores, esas direcciones se suspenden temporalmente. Aparecerá en el nuevo servidor una vez que se haya completado el movimiento.
>
> Por otra parte, no se pueden mover los bloques que contienen direcciones MAC virtuales duplicadas. Primero debe eliminar la dirección MAC virtual duplicada en el bloque a mover.
>
> Si un bloque IP se mueve/añade al vRack, ya no está vinculado a un servidor físico. En este caso, cualquier dirección MAC virtual se perderá durante la transferencia.
>

### Migrar una IP desde el área de cliente de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda al menú `Bare Metal Cloud`{.action} y abra `IP`{.action}.

En el menú desplegable "Servicio" puede seleccionar el tipo de servicio a visualizar. Puede elegir "IP failover" para solamente visualizar las IPs de este tipo.

Haga clic en el botón `...`{.action} que está a la derecha de la dirección IP que quiera mover y, seguidamente, en `Mover la IP failover`{.action}.

![área de cliente](images/manager02.png){.thumbnail}

En el menú contextual, seleccione el servicio al que quiere mover la dirección IP.

Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action}.

![área de cliente](images/manager03.png){.thumbnail}

### Mover una IP a través de las API

Conéctese a la página web de las [API de OVHcloud](https://api.ovh.com/).

En primer lugar, es mejor comprobar si la dirección IP se puede mover correctamente al servidor deseado.
<br>Para comprobar si la IP puede moverse a uno de sus servidores dedicados, utilice la siguiente llamada:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: la referencia del servidor dedicado de destino
- `ip`: la dirección IP failover a mover

Para mover la dirección IP, utilice la siguiente llamada:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: la referencia del servidor dedicado de destino
- `ip`: la dirección IP failover a mover

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
