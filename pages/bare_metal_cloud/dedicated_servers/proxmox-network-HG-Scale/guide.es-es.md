---
title: 'Configurar la red en Proxmox VE'
excerpt: 'Cómo configurar la red en Proxmox VE'
updated: 2024-07-16
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](https://www.ovhcloud.com/es-es/network/additional-ip/). Esto no afectará a sus funcionalidades.
>

## Objetivo

En las gamas High Grade & SCALE, no es posible el funcionamiento de las Additional IP en modo bridged (a través de MAC Virtuales). Lo mismo ocurre con los nuevos servidores de última generación que se entregan con las CPU AMD Epyc 4K y 8K. Por lo tanto, es necesario configurar las Additional IP en modo enrutado o a través del vRack.

> [!primary]
>
> A finales de 2024, esta funcionalidad se entregará para todas las gamas High Grade, SCALE y ADVANCE.
>

**Esta guía explica cómo configurar la red en Proxmox VE.**

## Requisitos

- Tener un [servidor dedicado de OVHcloud](https://www.ovhcloud.com/es-es/bare-metal/).
- Disponer de [Additional IP](https://www.ovhcloud.com/es-es/bare-metal/ip/).
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

> [!warning]
>
> No debe aplicarse ninguna MAC virtual a las Additional IP en el panel de configuración de OVHcloud.
>

## Procedimiento

> [!primary]
>
> En estas gamas de servidores, hay 4 tarjetas de red. Las dos primeras para el público, las dos últimas para el privado. Para disfrutar del conjunto del ancho de banda, es necesario crear agregados.
>

### Additional IP en modo enrutado en las interfaces de red públicas

Esta configuración ofrece un mejor rendimiento en términos de ancho de banda, pero es menos flexible. Con esta configuración, las direcciones Aditional IPes deben asociarse a un servidor dedicado. Si tiene varios servidores de virtualización Proxmox y quiere migrar una MV de un servidor a otro, también deberá migrar la dirección Aditional IP al servidor de destino, desde el área de cliente de OVHcloud o la API de OVHcloud. Puede automatizar este paso escribiendo un script que utilice las API de OVHcloud.  

#### Esquema de la configuración de destino

![schema route](images/schema_route2022.png){.thumbnail}

#### Explicaciones

Proxmox está basado en una distribución Debian. En esta guía, la configuración de red se modificará por SSH y no a través de la interfaz web.

Es necesario:

- Conectarse por SSH a Proxmox.
- crear un agregado (linux bond);
- crear un bridge;
- autorizar el forwarding;
- autorizar el proxy_arp;
- añadir las rutas.

#### Configurar el hipervisor

Conéctese al servidor Proxmox por SSH:

```bash
ssh root@PUB_IP_DEDICATED_SERVER
# también puede utilizar la IP privada configurada en el vRack.
```

Todo está en el archivo `/etc/network/interfaces` :

```bash
vi /etc/network/interfaces
```

```bash
auto lo
iface lo inet loopback
  # Enable IP forwarding
  up echo "1" > /proc/sys/net/ipv4/ip_forward
  # Enable proxy-arp only for public bond
  up echo "1" > /proc/sys/net/ipv4/conf/bond0/proxy_arp

# public interface 1
auto ens33f0
iface ens33f0 inet manual
	bond-master bond0

# public interface 2
auto ens33f1
iface ens33f1 inet manual
	bond-master bond0

# private interface 1
auto ens35f0
iface ens35f0 inet manual

# private interface 2
auto ens35f1
iface ens35f1 inet manual

# LACP aggregate on public interfaces
# configured in static mode on this example
# Has the server's public IP
auto bond0
iface bond0 inet static
    address PUB_IP_DEDICATED_SERVER/24
	gateway PUB_GW
	bond-slaves ens33f0 ens33f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first public interface
	hwaddress AB:CD:EF:12:34:56

#Private
auto bond1
iface bond1 inet static
	bond-slaves ens35f0 ens35f1
	bond-mode 4
	bond-miimon 100
	bond-downdelay 200
	bond-updelay 200
	bond-lacp-rate 1
	bond-xmit-hash-policy layer3+4
	# Use the mac address of the first private interface
	hwaddress GH:IJ:KL:12:34:56

# Configure the bridge with a private address and add route(s) to send the Additional IPs to it
# A.B.C.D/X => Subnet of Additional IPs assigned to the server, this can be a host with /32
# By default Proxmox creates vmbr0.
# You can use it or create another one 
auto vmbr0
iface vmbr0 inet dhcp
	# Define a private IP, it should not overlap your existing private networks on the vrack for example 
	address 192.168.0.1/24
	bridge-ports none
	bridge-stp off
	bridge-fd 0
	# Add single additional
	up ip route add A.B.C.D/32 dev vmbr0
	# Add block IP
	up ip route add A.B.C.D/28 dev vmbr0

# Bridge used for private networks on vRack
# The VLAN feature is enabled
auto vmbr1
iface vmbr1 inet manual
        bridge-ports bond1
        bridge-stp off
        bridge-fd 0
        bridge-vlan-aware yes
        bridge-vids 2-4094
```

Reinicie los servicios de red o reinicie el servidor en esta etapa:

```bash
systemctl restart networking.service
```

Al reiniciar los servicios de red, los dispositivos de red (por ejemplo, vmbr0) pueden estar desactivados. Esto se debe a que Proxmox desconecta cada MV de los bloqueos y no los reconecta. Para forzar la reconexión de las MV a los dispositivos de mitigación, puede reiniciar las MV.

#### Ejemplo de configuración VM Cliente Debian

Contenido del archivo `/etc/network/interfaces`:

```bash
auto lo ens18
iface lo inet loopback
iface ens18 inet static
    address ADDITIONAL_IP       # this should match with the IP A.B.C.D/32
    netmask 255.255.255.255
    gateway 192.168.0.1			# this sould match with the private IP set on bridge
```

#### Prueba y validación

A partir de ahora, sus máquinas virtuales deben poder conectar un servicio público a internet. Además, sus máquinas virtuales también pueden estar asociadas directamente a internet a través de la dirección Aditional IP. El ancho de banda disponible corresponde al ancho de banda disponible en las interfaces públicas del servidor y no afectará a las interfaces privadas utilizadas para el vRack. Este ancho de banda se comparte con otras máquinas virtuales del mismo host que utilizan una dirección Aditional IP y el host Proxmox para acceso público.

Para verificar su IP pública, desde la MV :

```bash
curl ifconfig.io
ADDITIONAL_IP    				# should return your additional ip
```

### Aditional IP a través del vRack

Esta configuración es más flexible. No tiene que asociar ninguna Aditional IP a un servidor, sino al vRack. Esto significa que si una máquina virtual desea utilizar una dirección Aditional IP, puede solicitarla directamente sin ninguna configuración adicional y sin importar el host en el que esté alojada.

> [!warning]
>
> Esta configuración está limitada a 600 Mbps para el tráfico saliente.
>

#### Requisitos

- Tener un bloque público de direcciones IP reservado en su cuenta, con un mínimo de cuatro direcciones. El bloque debe apuntarse al vRack.
- Haber elegido un rango de direcciones IP privadas.
- Tener un [servidor compatible con el vRack](https://www.ovhcloud.com/es-es/bare-metal/).
- Haber activado un servicio [vRack](https://www.ovh.es/soluciones/vrack/).
- Tienes acceso a tu [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

#### Esquema de la configuración de destino

![schema vrack](images/schema_vrack2022.png){.thumbnail}

#### Explicaciones

Debe:

* crear un agregado;
* crear un puente con el agregado;

En primer lugar, añada su bloque público de direcciones IP al vRack. Para ello, acceda a la sección `Bare Metal Cloud`{.action} del área de cliente de OVHcloud y abra el menú `vRack`{.action}.

Seleccione el vRack en la lista para ver la lista de servicios compatibles. Haga clic en el bloque público de direcciones IP que quiera añadir al vRack y, seguidamente, en el botón `Añadir`{.action}.

#### Configurar una dirección IP útil

En el caso del vRack, la primera, la penúltima y la última direcciones de un bloque de IP siempre están reservadas a la dirección de red, la puerta de enlace y el *broadcast* de la red, respectivamente. Eso significa que la primera dirección útil es la segunda dirección del bloque, tal y como se muestra a continuación:

```sh
46.105.135.96 # Reserved: network address
46.105.135.97 # First usable IP
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
46.105.135.109 # Last usable IP
46.105.135.110 # Reserved: network gateway
46.105.135.111 # Reserved: network broadcast
```

Para configurar la primera dirección IP útil, edite el archivo de configuración de red como se indica a continuación. En este ejemplo, se utiliza la máscara de subred **255.255.255.240**.

> [!primary]
>
> La mascara de subred utilizada en el ejemplo es apropiada para nuestro bloque de IP. Su máscara de subred puede ser diferente en función del tamaño del bloque. Al contratar su bloque de IP, recibirá un mensaje de correo electrónico con la máscara de subred que debe utilizar.
>

#### Configurar el hipervisor

Todo está en el archivo `/etc/network/interfaces`:

```bash
vi /etc/network/interfaces
```

Lo que importa aquí es la configuración `bond1` y `vmbr1`:

```bash
auto lo
iface lo inet loopback

# public interface 1
auto ens33f0
iface ens33f0 inet manual

# public interface 2
auto ens33f1
iface ens33f1 inet manual

# private interface 1
auto ens35f0
iface ens35f0 inet manual
	bond-master bond1

# private interface 2
auto ens35f1
iface ens35f1 inet manual
	bond-master bond1

auto bond0
iface bond0 inet dhcp
	bond-slaves ens33f0 ens33f1
    bond-miimon 100
	bond-mode 802.3ad

auto bond1
# LACP Aggregate on private interfaces
# No IPs on it
iface bond1 inet manual
	bond-slaves ens35f0 ens35f1
    bond-miimon 100
	bond-mode 802.3ad

#Private

auto vmbr1
# Bridge connected to bond1 aggregate
# No need for IP
iface vmbr1 inet manual
	bridge-ports bond1
	bridge-stp off
	bridge-fd 0

post-up echo 1 > /proc/sys/net/ipv4/ip_forward

```

En este punto, reinicie los servicios de red o reinicie el servidor.

#### Ejemplo de configuración VM Cliente Debian

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

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
