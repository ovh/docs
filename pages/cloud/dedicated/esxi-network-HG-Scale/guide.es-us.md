---
title: 'Configurar la red en ESXi en las gamas High Grade & SCALE'
slug: esxi-network-hg-scale
excerpt: 'Cómo configurar la red en ESXi en las gamas High Grade & SCALE'
section: 'Uso avanzado'
order: 6
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 09/05/2022**

## Objetivo

En las gamas High Grade & SCALE, no es posible el funcionamiento de las IP failover en modo *bridged* (a través de MAC virtuales). Por lo tanto, es necesario configurar las IP failover en modo enrutado o a través del vRack.

> [!primary]
>
> La documentación solo cubre la solución a través del vRack.
>

**Esta guía explica cómo configurar la red en ESXi.**

## Requisitos

* Tener un bloque público de direcciones IP reservado en su cuenta, con un mínimo de cuatro direcciones. El bloque debe apuntarse al vRack.
* Haber elegido un rango de direcciones IP privadas.
* Tener un [servidor dedicado compatible con el vRack](https://www.ovhcloud.com/es/bare-metal/){.external}.
* Haber activado un servicio [vRack](https://www.ovh.com/world/es/soluciones/vrack/){.external}.
* Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

> [!warning]
>
> En estas gamas de servidores, hay 4 tarjetas de red. Para disfrutar del ancho de banda completo, es necesario crear agregados. Nuestra documentación se basa en estos agregados de trajetas de red.
>
> **En cambio, ESXi no soporta nativamente el LACP.**
> No habrá ninguna redundancia disponible. Tampoco podrá explotar todo el ancho de banda de las tarjetas de red de su servidor.
>

> [!warning]
>
> Actualmente hay un fallo conocido en la interfaz gráfica ESXi de usuario. Por lo tanto, la ejecución de estos pasos en esta interfaz conllevaría una configuración no funcional. Es absolutamente necesario aplicar esta configuración utilizando la interfaz de la línea de comandos por SSH.
>

### IP Failover a través del vRack

En primer lugar, añada su bloque público de direcciones IP al vRack. Para ello, acceda a la sección `Bare Metal Cloud`{.action} de su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} y abra el menú `vRack`{.action}.

Seleccione el vRack en la lista para ver la lista de servicios compatibles. Haga clic en el bloque público de direcciones IP que quiera añadir al vRack y, seguidamente, en el botón `Añadir`{.action}.

#### Configuración original

![schema esxi](images/schema_esxi_A01_2022.png){.thumbnail}

En este ejemplo:

* las interfaces públicas son `vmnic2` y `vmnic3`;
* las interfaces privadas están en `vmnic0` y `vmnic1`.

Un primer vSwitch existe, pero solo tiene una interfaz `vmnic2`.

> [!primary]
>
> Compruebe que la configuración es similar. Si dispone de información relativa a las MAC e interfaces públicas o privadas, puede hacerlo desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) o a través de la API de OVHcloud.
>

#### Explicaciones

Ahora debe:

* crear el agregado en el vSwitch público;
* crear el vSwitch para el vRack;
* crear un grupo de puertos;
* crear las MV utilizando el nuevo grupo de puertos como interfaz de red.

#### Configurar ESXi

> [!primary]
>
> Las operaciones deben realizarse en modo de órdenes (shell) y no desde la interfaz gráfica (GUI) de ESXi.
>

##### **Creación del agregado en modo LACP en el vSwitch que utiliza las interfaces públicas**

```bash
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic3 --vswitch-name=vSwitch0
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vSwitch0
```

Resultado:

![schema esxi](images/schema_esxi_A02_2022.png){.thumbnail}

##### **Creación del vSwitch y el agregado para el vRack en las interfaces privadas**

```bash
[root@localhost:~] esxcli network vswitch standard add --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic0 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard uplink add --uplink-name=vmnic1 --vswitch-name=vRackvSwitch
[root@localhost:~] esxcli network vswitch standard policy failover set -l iphash -v vRackvSwitch
[root@localhost:~] 
```

Resultado:

![schema esxi](images/schema_esxi_A03_2022.png){.thumbnail}

##### **Configuración de la MV**

Las MV deben tener en la interfaz de red el nuevo grupo de puertos `portgroupvRackvSwitch`.

![schema esxi](images/schema_esxi_A04_2022.png){.thumbnail}

##### **Creación de un grupo de puertos para el nuevo vSwitch "vRackvSwitch"**

```bash
[root@localhost:~] esxcli network vswitch standard portgroup add --portgroup-name=portgroupvRackvSwitch --vswitch-name=vRackvSwitch
```

#### Configurar una dirección IP útil

En el caso del vRack, la primera y las dos últimas direcciones de un bloque de IP siempre están reservadas, respectivamente, a la dirección de la red, su pasarela y su dirección de *broadcast*. Eso significa que la primera dirección útil es la segunda dirección del bloque, tal y como se muestra a continuación:

```sh
46.105.135.96 # Reservada: dirección de la red
46.105.135.97 # Primera dirección utilizable
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109 # Última dirección utilizable
46.105.135.110 # Reservada: pasarela de red
46.105.135.111 # Reservada: dirección de broadcast de red
```

Para configurar la primera dirección IP útil, edite el archivo de configuración de red como se indica a continuación. En este ejemplo, se utiliza la máscara de subred **255.255.255.240**.

> [!primary]
>
> La mascara de subred utilizada en el ejemplo es apropiada para nuestro bloque de IP. Su máscara de subred puede ser diferente en función del tamaño del bloque. Al contratar su bloque de IP, recibirá un mensaje de correo electrónico con la máscara de subred que debe utilizar.
>

#### Ejemplo de configuración de una MV cliente en Debian

Contenido del archivo `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address 46.105.135.97
    netmask 255.255.255.240
    gateway 46.105.135.110
```

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
