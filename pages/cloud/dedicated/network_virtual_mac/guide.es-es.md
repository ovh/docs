---
title: 'Asignar una MAC virtual a una Additional IP'
slug: mac-virtual
excerpt: 'Cómo crear una dirección MAC virtual y asociarle una Additional IP'
section: 'Red e IP'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 22/12/2022**

## Objetivo

OVHcloud permite asociar una dirección MAC virtual a una dirección IP para poder desplegar máquinas virtuales con una configuración bridge en los servidores.

**Esta guía explica cómo crear una MAC virtual y asociarle una Additional IP.**

## Requisitos

- Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/){.external}.
- Tener una [dirección Additional IP](https://www.ovhcloud.com/es-es/bare-metal/ip/){.external} o un bloque de Additional IP (RIPE).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} o a [la API de OVHcloud](https://api.ovh.com/).
- Su servidor debe soportar las MAC virtuales. Para ello, consulte [esta guía](https://docs.ovh.com/es/dedicated/network-support-virtual-mac/).

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

> [!primary]
> Si no está familiarizado con el uso de la API de OVHcloud, consulte nuestra guía [Primeros pasos con las API de OVHcloud](https://docs.ovh.com/es/api/first-steps-with-ovh-api/).

## Procedimiento

### Asignar una dirección MAC

> [!warning]
>
> Si un bloque IP ha sido movido al vRack, ya no está asignado a un servidor físico por este motivo, ya no es posible asignar una MAC virtual a una IP.
>

#### Desde el área de cliente de OVHcloud

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, acceda al menú `Bare Metal Cloud`{.action} y abra la sección `IP`{.action}.

Haga clic en la pestaña `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Localice su dirección Additional IP (o su bloque) en la lista, haga clic en el botón `···`{.action} situado al final de la línea correspondiente para ver la lista de opciones y seleccione `Añadir una MAC virtual`{.action}.

![IP](images/addvmac.png){.thumbnail}

En el cuadro de diálogo, seleccione un tipo en la lista desplegable, introduzca el nombre de la máquina virtual y haga clic en `Aceptar`{.action}.

* **Tipo**: Elija el tipo de dirección MAC virtual («VMware» para el sistema VMware ESXi y «ovh» para todos los demás sistemas de virtualización).
* **Nombre de la máquina virtual**: Nombre que quiera asignarle a la dirección MAC virtual, para luego encontrar más fácilmente la pareja IP-MAC.

![IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> No olvide asignar la dirección MAC virtual creada en la configuración de su máquina virtual.
>

#### Vía la API OVHcloud

Utilice la siguiente llamada a la API:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Eliminar una dirección MAC

> [!warning]
>
> Si elimina una dirección MAC, no será posible recuperarla más adelante.
> 

#### Desde el área de cliente de OVHcloud

Para eliminar una dirección MAC virtual asociada a una Additional IP, en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} acceda al menú `Bare Metal Cloud`{.action} y abra la sección `IP`{.action}. Seleccione el servidor para ver las Additional IP o bloques de IP asociados.

Por último, haga clic en el botón `···`{.action} situado al final de la línea correspondiente y seleccione `Eliminar la MAC virtual`{.action}.

#### Vía la API OVHcloud

Utilice la siguiente llamada a la API:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.