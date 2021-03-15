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

**Última actualización: 12/03/2021**

## Objetivo

Las IP failover pueden moverse entre los servicios que utilice. El objetivo es no perder su reputación, su posicionamiento y mejorar la continuidad del servicio de sus aplicaciones y sistemas.
Esta tecnología le permite intercambiar las direcciones IP de una solución a otra en menos de un minuto, prácticamente sin interrupciones para sus usuarios. Asimismo, este mecanismo también puede utilizarse durante la migración de servicios, transfiriendo los proyectos del entorno de desarrollo al de producción, o durante la migración hacia un servidor de backup en caso de fallo.

**Cómo mover una IP failover desde el área de cliente de OVHcloud o a través de las API de OVHcloud**

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external} en el área de cliente de OVHcloud.
- Tener una [dirección IP failover](https://www.ovhcloud.com/es-es/bare-metal/ip/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

> [!primary]
> Una IP failover no puede moverse de una zona a otra. Por ejemplo, una IP situada en el datacenter SBG podrá migrarse a GRA o RBX, pero no podrá migrarse a BHS

### Migrar una IP desde el área de cliente de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en el menú `Cloud`{.action} de la barra de herramientas y seleccione la sección `IP`{.action} situada en la esquina inferior izquierda de la página.

![área de cliente](images/manager01.png){.thumbnail}

El menú desplegable "Servicio" le permite seleccionar únicamente las IP Failover.

Haga clic en el botón `...`{.action} a la derecha de la dirección IP que quiera mover y, seguidamente, en `Mover la IP failover`{.action}.

![área de cliente](images/manager02.png){.thumbnail}

En el menú contextual, seleccione el servicio al que quiere mover la dirección IP.

Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action}.

![área de cliente](images/manager03.png){.thumbnail}

### Mover una IP a través de las API

Conéctese a la página web de las [API de OVHcloud](https://api.ovh.com/).

En primer lugar, es mejor comprobar si la dirección IP se puede mover correctamente.
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
