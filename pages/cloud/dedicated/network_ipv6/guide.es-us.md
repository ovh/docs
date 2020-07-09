---
title: 'Configurar la IPv6 en servidores dedicados'
slug: network-ipv6
excerpt: 'Aprenda a configurar direcciones IPv6 en nuestra infraestructura'
section: 'Gestión de redes'
---

**Última actualización: 19/05/2020**

## Objetivo

El protocolo de internet versión 6 (IPv6) es la última versión del protocolo de internet (IP). Ha sido diseñado para hacer frente a la creciente escasez de direcciones de su predecesor, el IPv4, utilizando direcciones de 128 bits en vez de 32 bits. Todos los servidores dedicados de OVHcloud incluyen un bloque /64 de IPv6. Esto representa más de 18 trillones de direcciones IP a su disposición.

**Esta guía explica cómo configurar las direcciones IPv6 en su servidor siguiendo varios ejemplos.**

> [!warning]
>OVHcloud le ofrece una serie de servicios cuya configuración y gestión recaen sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
>El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un proveedor especializado y/o el editor de <i>software</i> del servicio si tiene dificultades. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección «Más información» de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovh.es/servidores_dedicados/) en su cuenta de OVHcloud
- Tener toda la información relativa a su IPv6 (prefijo, puerta de enlace, etc.)
- Tener conocimientos básicos de redes y de [SSH](https://es.wikipedia.org/wiki/Secure_Shell)

## Procedimiento

Si está utilizando una plantilla de OVHcloud para instalar el servidor en un sistema operativo Linux, podrá comprobar que la primera IPv6 (principal) ya viene configurada de fábrica.


> [!primary]
>
> La puerta de enlace por defecto de su bloque IPv6 (IPv6_GATEWAY) seguirá siempre la nomenclatura xxxx.xxxx.xxxx.xxFF:FF:FF:FF:FF. 
>
> Por ejemplo,
> 
> - La dirección IPv6 del servidor es 2607:5300:60:62ac::/64. Por lo tanto, la IPv6_GATEWAY será 2607:5300:60:62FF:FF:FF:FF:FF.
> - La dirección IPv6 del servidor es 2001:41D0:1:46e::/64. Por lo tanto, la IPv6_GATEWAY será 2001:41D0:1:4FF:FF:FF:FF:FF.
>

### Sistemas operativos Debian y basados en Debian

> [!warning]
>
> Antes de seguir los pasos que se indican a continuación, es muy recomendable que deshabilite la autoconfiguración IPv6 y el «router advertising» para prevenir problemas conocidos. Para ello, debe añadir las siguientes líneas a su archivo `sysctl.conf` que se encuentra en /etc/sysctl.conf:
> 
> `net.IPv6.conf.all.autoconf=0`
> 
> `net.IPv6.conf.all.accept_ra=0`
> 
> Una vez realizado esto, puede aplicar estas reglas ejecutando el siguiente comando: `sh sysctl -p`.
> 

#### 1: Conectarse a su servidor por SSH

[Más información en esta guía](../primeros-pasos-servidor-dedicado/)

#### 2: Abrir el archivo de configuración de red de su servidor

Su archivo de configuración de red de su servidor se encuentra en `/etc/network/interfaces`. Utilice la línea de comando para localizar el archivo y ábralo para editarlo. Realice una copia de seguridad antes de modificar cualquier archivo de configuración.

#### 3: Modificar el archivo de configuración de red

Modifique el archivo para que quede como en el siguiente ejemplo. En este ejemplo, la interfaz de red se llama `eth0`. La interfaz de su servidor puede variar.

```sh
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 128

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```
Se pueden añadir direcciones IPv6 adicionales añadiendo la línea `up /sbin/ifconfig eth0 inet6 add YOUR_2nd_IPv6/64` al archivo.

#### 4: Guardar el archivo y aplicar los cambios

Guarde los cambios realizados en el archivo y reinicie la red o el servidor para aplicar los cambios.

#### 5: Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```


Si no consigue hacer ping a esta dirección IPv6, compruebe su configuración e inténtelo de nuevo. Asegúrese también de que la maquina que está comprobando esté conectada con IPv6. Si aun así sigue sin funcionar, compruebe su configuración en [modo de rescate](../modo_de_rescate/).

### Fedora 26 y superior

> [!warning]
>
> Este ejemplo se ha realizado con CentOS 7.0. Los resultados pueden variar al usar otros derivados de Redhat.
>

#### 1: Conectarse a su servidor por SSH

Más información en [esta guía](../primeros-pasos-servidor-dedicado/)


#### 2: Abrir el archivo de configuración de red de su servidor

Su archivo de configuración de red de su servidor se encuentra en /etc/sysconfig/network-scripts/ifcfg-eth0. Utilice la línea de comando para localizar el archivo y ábralo para editarlo.

#### 3: Modificar el archivo de configuración de red

Modifique el archivo para que quede como en el siguiente ejemplo. En este ejemplo, la interfaz de red se llama eth0. La interfaz de su servidor puede variar. Además hemos omitido la configuración del IPv4 Failover para evitar confusiones, pero la configuración de la IPv6 se hace en el mismo archivo de configuración.

```sh
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6ADDR=YOUR_IPv6/64
IPV6ADDR_SECONDARIES=YOUR_2nd_IPv6/64 YOUR_3rd_IPv6/64
IPV6_DEFAULTGW=IPv6_GATEWAY
```
Si necesita más direcciones IPv6 en la máquina, añádalas en la línea `IPV6ADDR_SECONDARIES`, separadas por espacios en blanco.

#### 4: Guardar el archivo y aplicar los cambios

Guarde los cambios realizados en el archivo y reinicie la red o el servidor para aplicar los cambios.

#### 5: Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Si no consigue hacer ping a esta dirección IPv6, compruebe su configuración e inténtelo de nuevo. Asegúrese también de que la maquina que está comprobando esté conectada con IPv6. Si aun así sigue sin funcionar, compruebe su configuración en [modo de rescate](../modo_de_rescate/).

### FreeBSD

#### 1: Conectarse a su servidor por SSH

Más información en [esta guía](../primeros-pasos-servidor-dedicado/)


#### 2: Abrir el archivo de configuración de red de su servidor

Su archivo de configuración de red de su servidor se encuentra en `/etc/rc.conf`. Utilice la línea de comando para localizar el archivo y ábralo para editarlo.

#### 3: Modificar el archivo de configuración de red

Modifique el archivo para que quede como en el siguiente ejemplo. En este ejemplo, la interfaz de red se llama em0. La interfaz de su servidor puede variar.

```sh
IPv6_activate_all_interfaces="YES" 
IPv6_defaultrouter="IPv6_GATEWAY" 
ifconfig_em0_IPv6="inet6 IPv6_Address prefixlen 64"
ifconfig_em0_alias0="inet6 IPv6_Address_2 prefixlen 64"
ifconfig_em0_alias1="inet6 IPv6_Address_3 prefixlen 64"
```

#### 4: Guardar el archivo y reiniciar el servidor

Guarde los cambios realizados en el archivo y reinicie la red o el servidor para aplicar los cambios.

#### 5: Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```
ping6 -c 4 2001:4860:4860::8888

>>> PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=55 time=23.6 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=55 time=23.8 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=55 time=23.9 ms
>>> 64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=55 time=23.8 ms

>>> --- 2001:4860:4860::8888 ping statistics ---
>>> 1 packets transmitted, 1 received, 0% packet loss, time 0ms
>>> rtt min/avg/max/mdev = 23.670/23.670/23.670/0.000 ms
```

Si no consigue hacer ping a esta dirección IPv6, compruebe su configuración e inténtelo de nuevo. Asegúrese también de que la maquina que está comprobando esté conectada con IPv6. Si aun así sigue sin funcionar, compruebe su configuración en [modo de rescate](../modo_de_rescate/).

### Ubuntu 18.04

#### 1: Conectarse a su servidor por SSH

Más información en [esta guía](../primeros-pasos-servidor-dedicado/)

#### 2: Abrir el archivo de configuración de red de su servidor

Abra el archivo de configuración de red ubicado en /etc/systemd/network. En este ejemplo, nuestro archivo se llama 50-default.network.

#### 3: Modificar el archivo de configuración de red

Para modificar el archivo, abra un editor de texto y añada las líneas siguientes a las secciones relevantes como se muestra en el siguiente ejemplo:

```sh
[Network]
Destination=Gateway_Address

[Address]
Address=IPv6_Address/64

[Route]
Destination=Gateway_Address
Scope=link
```
Para añadir varias direcciones IPv6, añada varias secciones \[Address]
```sh
[Address]
Address=IPv6_Address_2/64

[Address]
Address=IPv6_Address_3/64
```
#### 4: Guardar el archivo y reiniciar el servidor

Guarde los cambios realizados en el archivo y reinicie la red o el servidor para aplicar los cambios.

#### 5: Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2012

#### 1: Conéctese a su servidor por RDP

Más información en [esta guía](../primeros-pasos-servidor-dedicado/)


#### 2: Abrir la configuración de red de su servidor
Primero, haga clic derecho en el icono de red en el área de notificaciones para ir a la sección `Red y recursos compartidos`{.action}.

![Red y recursos compartidos](images/ipv6_network_sharing_center.png){.thumbnail}

Haga clic en `Cambiar configuración del adaptador`{.action}.

![Cambiar configuración del adaptador](images/ipv6_change_adapter_settings.png){.thumbnail}

Haga clic derecho en su adaptador de red, y seleccione `Propiedades`{.action}.

![Propiedades del adaptador de red](images/ipv6_network_adapter_properties.png){.thumbnail}

Seleccione `Protocolo de internet versión 6`{.action}, y haga clic en `Propiedades`{.action}.

![Propiedades](images/ipv6_properties.png){.thumbnail}
#### 3: Modificar la configuración de red 

Introduzca su configuración IPv6 (`Dirección IPv6`y `Puerta de enlace por defecto`) y haga clic en `OK`{.action}.

![Propiedades](images/ipv6_configuration.png){.thumbnail}

### Resolución de incidencias

Si después de comprobar su conexión las incidencias persisten, genere una solicitud de asistencia para revisar su configuración. Será necesario que indique:

- El nombre y la versión del sistema operativo que está utilizando en su servidor
- El nombre y la carpeta del archivo de configuración de red 
- El contenido de ese archivo 


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
