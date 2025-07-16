---
title:  Mover una Additional IP
excerpt: Cómo mover una Additional IP desde el área de cliente o a través de la API de OVHcloud
updated: 2025-04-28
---

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](/links/network/additional-ip). Esto no afectará a sus funcionalidades.
>

## Objetivo

Las Additional IP pueden moverse entre los servicios que utilice. El objetivo es no perder su reputación, su posicionamiento y mejorar la continuidad del servicio de sus aplicaciones y sistemas.

Esta tecnología le permite mover las direcciones IP de un servidor a otro en menos de un minuto, prácticamente sin interrupciones para sus usuarios. Asimismo, este mecanismo también puede utilizarse durante la migración de servicios, transfiriendo los proyectos del entorno de desarrollo al de producción, o durante la migración hacia un servidor de respaldo en caso de fallo.

> [!primary]
> Es posible asignar los bloques de direcciones IP a cualquier servicio compatible dentro de una región.
Los bloques de direcciones IP de una región pueden moverse de un datacenter a otro dentro de una misma región, pero no fuera de esa región.
>
> Las regiones «eu-west-gra», «eu-west-rbx» y «eu-west-sbg» son una excepción, ya que sí es posible mover los bloques de direcciones IP entre estas tres regiones.
>
> Los bloques de IPs se tienen que mover en bloque. No es posible dividir un bloque o mover las IPs de un bloque a distintos servidores.

**Cómo mover una Additional IP desde el área de cliente de OVHcloud o a través de la API de OVHcloud**

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) en el área de cliente de OVHcloud.
- Tener una [dirección Additional IP](/links/network/additional-ip).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para más información, consulte nuestra [comparativa](/links/bare-metal/eco-compare).

> [!warning]
> Si la dirección Additional IP, o una de las direcciones IP del bloque, tiene una MAC virtual asociada, el servidor de destino debe soportar la funcionalidad de las MAC virtuales.
> Para ello, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac).
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

### Bloques IP geolocalizados

La geolocalización de una dirección IP es independiente de su región de conexión.

Si contrata un bloque de IP adicional en un servidor, pero elige una localización diferente (geolocalización) para el bloque de IP, dicho bloque no podrá trasladarse a otro servidor situado en el mismo país que dicho bloque. Por ejemplo, un bloque adicional de IP geolocalizado en Polonia (eu-central-war) y contratado en un servidor situado en un datacenter de Francia (eu-west-gra) no puede transferirse a un servidor situado en un datacenter de Polonia (eu-central-war). El bloque de IP solo puede moverse hacia un servidor elegible situado en un datacenter de Francia.

### Migrar una IP desde el área de cliente de OVHcloud

> [!warning]
> Sólo se podrá trasladar un bloque de tamaño único (/32) de un servidor dedicado a un VPS.
>

Conéctese a su [área de cliente de OVHcloud](/links/manager), haga clic en `Network`{.action} en el menú situado a la izquierda de la pantalla y seleccione `Direcciones IP públicas`{.action}.

Haga clic en la pestaña `Additional IP`{.action}.

![manage IPs](images/manageIPs2024.png){.thumbnail}

Haga clic en el botón `...`{.action} que está a la derecha de la dirección IP que quiera mover y, seguidamente, en `Trasladar Additional IP`{.action} o `Asociar este bloque de IP a otro servicio`{.action}.

![área de cliente](images/move_ip.png){.thumbnail}

En el menú contextual, seleccione el servicio al que quiere mover la dirección IP.

Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action}.

![área de cliente](images/moveadditionalIP2.png){.thumbnail}

### Mover una IP a través de las API

Conéctese a la página web de las [API de OVHcloud](https://api.ovh.com/).

En primer lugar, es mejor comprobar si la dirección IP se puede mover correctamente al servidor deseado.
<br>Para comprobar si la IP puede moverse a uno de sus servidores dedicados, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: la referencia del servidor dedicado de destino
- `ip`: la dirección Additional IP a mover

Para mover la dirección IP, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: la referencia del servidor dedicado de destino
- `ip`: la dirección Additional IP a mover

### Restricciones <a name="limitations"></a>

Tenga en cuenta que existen algunas limitaciones al mover un bloque de direcciones IP. La siguiente tabla muestra la compatibilidad entre las regiones.

Para más información, consulte nuestra lista de [regiones disponibles](/links/network/additional-ip).

| Nombre de la región  | eu-west-par | eu-west-gra | eu-west-rbx | eu-west-sbg | eu-west-lim | eu-central-war | eu-west-eri | ca-east-bhs | ca-east-tor | ap-southeast-sgp | ap-southeast-syd |
|----------------|-------------|-------------|-------------|-------------|-------------|----------------|-------------|-------------|-------------|-------------|-------------|
| eu-west-par    |      ✅        |      ❌       |     ❌        |     ❌        |      ❌       |      ❌          |       ❌       |       ❌      |     ❌      | ❌      |     ❌      |
| eu-west-gra    |       ❌      |       ✅       |      ✅       |      ✅      |       ❌       |       ❌         |       ❌        |     ❌        |    ❌        | ❌      |     ❌      |
| eu-west-sbg    |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-rbx |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-lim    |        ❌       |      ❌       |      ❌       |     ❌        |     ✅       |      ❌         |      ❌        |     ❌        |     ❌       | ❌      |     ❌      |
| eu-central-war |      ❌       |      ❌       |     ❌       |      ❌       |      ❌        |       ✅         |       ❌       |       ❌       |       ❌        | ❌      |     ❌      |
| eu-west-eri    |         ❌      |       ❌      |        ❌     |       ❌     |      ❌       |       ❌         |     ✅        |      ❌         |      ❌       | ❌      |     ❌      |
| ca-east-bhs    |     ❌        |      ❌       |    ❌         |        ❌    |        ❌       |      ❌          |       ❌      |     ✅        |      ❌       | ❌      |     ❌      |
| ca-east-tor    |    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ✅     | ❌      |     ❌      |
| ap-southeast-sgp|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ✅       |     ❌      |
| ap-southeast-syd|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ❌      |     ✅       |

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
