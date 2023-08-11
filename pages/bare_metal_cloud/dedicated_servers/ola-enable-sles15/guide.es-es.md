---
title: Cómo configurar el ID de cliente para la agrupación de enlaces OVHcloud en SLES 15
excerpt: 'Activar OVHcloud Link Aggregation en su servidor SLES 15'
updated: 2023-03-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 07/03/2023**

## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada por nuestros equipos para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, podrá agregar sus mapas de red y hacer redundantes sus conexiones de red. Esto significa que si un enlace se rompe, el tráfico se redirige automáticamente a otro enlace disponible.

**Esta guía explica cómo agrupar sus NIC (Network Interface Controller) para utilizarlos con el servicio OLA en SLES 15.**

## Requisitos

- [Haber configurado su ID de cliente para la funcionalidad de OVHcloud Link Aggregation desde el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

Debido a que OLA ofrece una configuración privado-privada para sus ID de cliente, no es posible conectarse al servidor por SSH. Por lo tanto, deberá utilizar la herramienta IPMI para acceder al servidor.

Para ello, conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda a la pestaña `Bare Metal Cloud`{.action}. Seleccione el servidor en la lista del apartado `Servidores dedicados`{.action}.

A continuación, abra la pestaña `IPMI`{.action} (1) y haga clic en el botón `Desde un applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Se descargará un programa JNLP. Lance el programa para acceder a IPMI. Conéctese utilizando las claves de acceso asociadas al servidor.

Por defecto, utilizando el modelo de OVHcloud, los ID de cliente se denominarán *eth1* y *eth2*. Si no utiliza un modelo de OVHcloud, puede encontrar los nombres de las interfaces utilizando el siguiente comando:

```bash
ip a
```

> [!primary]
>
> Este comando devolverá varias interfaces. Si tiene dificultades para identificar sus NIC físicas, la primera interfaz siempre tendrá la dirección IP pública del servidor asignado por defecto.
>

Una vez que haya identificado los dos ID de cliente, deberá crear el NIC bonding o la agregación de los enlaces en el sistema operativo. Para ello, cree el archivo de interfaces en el editor de texto que desee utilizando el siguiente comando:

```bash
vi /etc/sysconfig/network/ifcfg-bond0
```

Esto abrirá un archivo de texto vacío. Para configurar la interfaz de agregación, inserte las siguientes líneas en el archivo de texto:

```bash
STARTMODE='onboot'
BOOTPROTO='static'
IPADDR='10.0.0.1/24'
BONDING_MASTER='yes'
BONDING_SLAVE_0='eth1'
BONDING_SLAVE_1='eth2'
BONDING_MODULE_OPTS='mode=802.3ad miimon=100 xmit_hash_policy=layer3+4'
```

> [!primary]
>
> Puede utilizar cualquier dirección IP o subred privada que desee.
> Si su servidor tiene más de 2 interfaces de red, puede añadirlos en la configuración aumentando el número del parámetro `BONDING_SLAVE_`, por ejemplo `BONDING_SLAVE_2='eth3'`.
>

Guarde y cierre el archivo una vez que haya confirmado que la información es correcta.  Ahora deberá configurar las dos interfaces físicas. Por defecto, para un servidor de OVHcloud, solo *eth1* tendrá un archivo de configuración. Abra con el siguiente comando:

```bash
vi /etc/sysconfig/network/ifcfg-eth1
```

De forma predeterminada, el archivo mostrará el siguiente texto:

```bash
# Created by cloud-init on instance boot automatically, do not edit.
#
BOOTPROTO=dhcp4
IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE=auto
```

> [!warning]
>
> Las direcciones IP serán diferentes para cada servidor.
>

Es necesario modificar el archivo para que muestre el siguiente texto:

```bash
BOOTPROTO='none'
#IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE='hotplug'
```

> [!primary]
>
> La dirección de hardware (dirección MAC) del ID de cliente se puede encontrar con el comando `ip utilizado anteriormente`. Este será el número al lado de `link/ether` del resultado mostrado.
>

El *#* delante de una línea indica que el servidor ignorará esta línea al leer el archivo. Esto significa que estas líneas no se tendrán en cuenta al crear el archivo de interfaz para *eth1*.

Para crear el archivo de configuración *eth2*, utilice el siguiente comando:

```bash
vi /etc/sysconfig/network/ifcfg-eth2
```

Esta vez, el archivo estará vacío. Añada el siguiente contenido:

```bash
BOOTPROTO='none'
STARTMODE='hotplug'
LLADDR=0c:42:a1:a7:29:c2
```

Por último, reinicie el servicio de red con el siguiente comando:

```bash
wicked ifreload all
```

Para comprobar que la agregación funciona, realice un ping a otro servidor en el mismo vRack. Si funciona, el proceso de configuración se habrá completado. En caso contrario, compruebe su configuración o intente reiniciar el servidor.

También puede comprobar los parámetros utilizados en su interfaz ifcfg-bond0 utilizando el siguiente comando:

```bash
/proc/net/bonding/bond0
```

## Más información

[Configurar la agregación de enlaces OLA en el área de cliente](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).

[Cómo configurar el ID de cliente para la agrupación de enlaces OVHcloud en Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).

[Cómo configurar el ID de cliente para la agrupación de enlaces OVHcloud en CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7).

[Cómo configurar el ID de cliente para la agrupación de enlaces OVHcloud en Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
