---
title: "Mover una Additional IP en un servidor dedicado"
excerpt: "Mueva una dirección Additional IP entre servidores dedicados a través del área de cliente de OVHcloud o la API"
updated: 2026-01-21
---

> [!primary]
> Este artículo se refiere al traslado de direcciones Additional IPv4, que está limitado según [restricciones regionales](#limitations).
>
> La configuración de Additional IP en un vRack (red privada) sortea estas restricciones regionales al perder la dependencia de una sola región, facilitando al mismo tiempo la interconexión en una amplia gama de servicios de OVHcloud.
>
> Descubra cómo configurar direcciones Additional IP en un vRack con nuestras guías para [IPv4](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) y [IPv6](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Objetivo

Las Additional IP pueden moverse entre los servicios que utilice. El objetivo es no perder su reputación, su posicionamiento y mejorar la continuidad del servicio de sus aplicaciones y sistemas.

Esta tecnología le permite mover las direcciones IP de un servidor a otro en menos de un minuto, prácticamente sin interrupciones para sus usuarios. Asimismo, este mecanismo también puede utilizarse durante la migración de servicios, transfiriendo los proyectos del entorno de desarrollo al de producción, o durante la migración hacia un servidor de respaldo en caso de fallo.

> [!primary]
> Es posible asignar los bloques de direcciones IP a cualquier servicio compatible dentro de una región. Los bloques de direcciones IP de una región pueden moverse de un datacenter a otro dentro de una misma región, pero no fuera de esa región.
>
> Las regiones «eu-west-gra», «eu-west-rbx» y «eu-west-sbg» son una excepción, ya que sí es posible mover los bloques de direcciones IP entre estas tres regiones.
>
> Una región es una zona geográfica compuesta por uno o varios centros de datos.
>
> Los bloques de IPs se tienen que mover en bloque. No es posible dividir un bloque o mover las IPs de un bloque a distintos servidores.
>

**Descubra cómo trasladar una Additional IP desde su espacio de cliente OVHcloud o a través de las API de OVHcloud. Descubra también cómo trasladar una Additional IP de una cuenta So you Start a una cuenta OVHcloud.**

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) en el área de cliente de OVHcloud.
- Tener una [dirección Additional IP](/links/network/additional-ip).

<!-- CP-NAV-START:network-public-ip -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public IP](/links/control-panel/network-public-ip)
- **Ruta de navegación:** `Network`{.action} > `IP pública`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para más información, consulte nuestra [comparativa](/links/bare-metal/eco-compare).
>

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

### Migrar una Additional IP desde el área de cliente de OVHcloud

> [!warning]
> Sólo se podrá trasladar un bloque de tamaño único (/32) de un servidor dedicado a un VPS.
>

Puede utilizar el menú desplegable en **Mis direcciones IP públicas y servicios asociados** y seleccionar `Todas las Additional IP`{.action} para filtrar sus servicios, o escribir directamente la dirección IP deseada en la barra de búsqueda.

![área de cliente](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/manage_additional_ips_new.png){.thumbnail}

Haga clic en el botón `⁝`{.action} situado a la derecha de la dirección IP que desea mover y, a continuación, en `Trasladar Additional IP`{.action}.

![Menú contextual para mover una Additional IP](images/move_ip_1_new.png){.thumbnail}

En el menú contextual que aparece, seleccione el servicio al que desea mover la dirección IP.

Haga clic en `Siguiente`{.action} y, seguidamente, en `Confirmar`{.action}.

![Seleccionar el servicio de destino para la Additional IP](images/move_ip_2_new.png){.thumbnail}

> [!warning]
> Tenga en cuenta que, para algunos productos, las direcciones IP (o bloques) deben trasladarse primero a un **aparcamiento de IP** (una ubicación de almacenamiento temporal) antes de poder trasladarse al producto deseado.
>
> Para mover bloques IP a una red vRack específica, utilice **la interfaz de gestión vRack**, a la que puede acceder haciendo clic en `Network`{.action} en el menú situado a la izquierda de la pantalla y, a continuación, en `Red privada vRack`{.action}.
>

### Mover una Additional IP a través de las API

Conéctese a la página web de las [API de OVHcloud](/links/api).

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

### Mover una Additional IP de una cuenta So you Start a una cuenta OVHcloud

Para mover una Additional IP de una cuenta SYS a una cuenta OVHcloud, debe tener en cuenta varios aspectos:

- El movimiento de una Additional IP conlleva gastos de instalación. La dirección IP no se moverá si la factura sigue pendiente de pago.
- No es posible mover una Additional IP de una cuenta OVHcloud a una cuenta So you Start.
- Asegúrese de que el servidor al que transfiere la dirección Additional IP se encuentra en la misma región compatible que esta. Consulte la sección «Restricciones» más abajo.

Para empezar, inicie sesión en su cuenta So you Start y haga clic en `IP`{.action} en el panel de control principal.

![Sección IP So you Start en el panel de control](images/sys-ip-section.png){.thumbnail}

Haga clic en el botón de configuración (con forma de engranaje `⚙`{.action}) junto a la dirección IP correspondiente y seleccione `Mover la IP Failover`{.action}.

![Opción Mover la IP failover en el menú So you Start](images/move-ip-sys.png){.thumbnail}

Seleccione `Mover a un servicio OVH`{.action}, introduzca su identificador de cliente OVHcloud y haga clic en `Siguiente`{.action}.

![Seleccionar Mover hacia un servicio OVH e introducir el NIC handle](images/move-to-ovh.png){.thumbnail}

Esto generará un código (token). Guárdelo.

![Código token generado para la transferencia de IP](images/token-id.png){.thumbnail}

A continuación, [inicie sesión en su cuenta OVHcloud](/links/manager), haga clic en `Network`{.action} en el menú situado a la izquierda de la pantalla y seleccione `Direcciones IP públicas`{.action}.

Haga clic en el botón de configuración (con forma de engranaje `⚙`{.action}) a la derecha y seleccione `Importar mis direcciones IP de SyS a OVHcloud`{.action}.

![Opción Importar direcciones IP de SyS a OVHcloud](images/import-ip-to-ovh.png){.thumbnail}

Aparecerá una ventana emergente, introduzca la dirección Additional IP (o el bloque) y el código recuperado en la cuenta So you Start en el campo `Token`. A continuación, haga clic en `Siguiente`{.action}.

![Introducir la Additional IP y el token para la importación](images/Step-1.png){.thumbnail}

Seleccione el servidor de destino y haga clic en `Siguiente`{.action}. Si el servidor dedicado es compatible con la dirección IP, aparecerá un mensaje verde. De lo contrario, recibirá un mensaje de error.

![Seleccionar el servidor de destino con verificación de compatibilidad](images/Step-2.png){.thumbnail}<br>
![Mensaje de confirmación de compatibilidad del servidor](images/Step-2.1.png){.thumbnail}

En la siguiente ventana, la duración se selecciona automáticamente y se muestran los gastos. Haga clic en `Siguiente`{.action} para continuar.

![Resumen de la duración y los gastos para la transferencia de IP](images/Step-3.png){.thumbnail}

Marque la casilla `Aceptar los contratos`{.action} para aceptar las condiciones de uso después de haberlas leído. A continuación, haga clic en `Siguiente`{.action}.

![Casilla de aceptación de los contratos para la transferencia de IP](images/Step-4.png){.thumbnail}

Tome nota del resumen del pedido y haga clic en `Confirmar`{.action} para validarlo.

![Resumen y confirmación del pedido para la transferencia de IP](images/Step-5.png){.thumbnail}

Se le redirigirá a una nueva página para realizar el pago.

Una vez realizado el pago, su Additional IP se transferirá a su cuenta OVHcloud y se asociará al servidor seleccionado. Este proceso puede tardar algún tiempo.

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
