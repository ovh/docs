---
title: 'Configurar la IPv6 en servidores dedicados'
slug: network-ipv6
excerpt: 'Aprenda a configurar direcciones IPv6 en nuestra infraestructura'
section: 'Red e IP'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 29/08/2022**

## Objetivo

El protocolo de internet versión 6 (IPv6) es la última versión del protocolo de internet (IP). Ha sido diseñado para hacer frente a la creciente escasez de direcciones de su predecesor, el IPv4, utilizando direcciones de 128 bits en vez de 32 bits. Todos los servidores dedicados de OVHcloud incluyen un bloque /64 de IPv6. Esto representa más de 18 trillones de direcciones IP a su disposición.

**Esta guía explica cómo configurar las direcciones IPv6 en su servidor siguiendo varios ejemplos.**

> [!warning]
>OVHcloud le ofrece una serie de servicios cuya configuración y gestión recaen sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
>El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) y/o el editor de <i>software</i> del servicio si tiene dificultades. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección «Más información» de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/) en su cuenta de OVHcloud
- Tener toda la información relativa a su IPv6 (prefijo, puerta de enlace, etc.)
- Tener conocimientos básicos de redes y de [SSH](../introduccion-ssh/)

> [!warning]
> Tenga en cuenta que los servidores Kimsufi se entregan con un único bloque IPv6 (/128). IPv6 se configurará automáticamente al instalar el sistema operativo.
>

## Procedimiento

Si está utilizando una plantilla de OVHcloud para instalar el servidor en un sistema operativo Linux, deberá configurar la primera dirección IPv6 (principal) en el servidor.

Por ejemplo, si hemos asignado al servidor el rango IPv6: `2607:5300:xxxx:xxxx:/64` puede utilizar la IPv6 principal de su servidor como IPv6: `2607:5300:xxxx:xxxx::1/64`.

Si desea configurar varias direcciones IPv6 en su servidor (o si quiere utilizarlo en una MV), debe disponer de una IP failover configurada con una vMAC. Si no, nuestros routers/switchs no podrán enrutar la IPv6.

> [!primary]
>
> La puerta de enlace por defecto de su bloque IPv6 (IPv6_GATEWAY) seguirá siempre la nomenclatura xxxx.xxxx.xxxx.xxFF:FF:FF:FF:FF. Tenga en cuenta que los "0" de cabeza pueden eliminarse en una IPv6 para evitar errores al determinar la pasarela.
>
> Por ejemplo,
> 
> - El rango IPv6 del servidor es `2607:5300:60:62ac::/64`  o `2607:5300:60:62ac:0000:0000:0000:0000/64`. Por lo tanto, la IPv6_GATEWAY será `2607:5300:60:62FF:FF:FF:FF:FF`.
> - El rango IPv6 del servidor es `2001:41D0:1:46e::/64` o `2001:41D0:0001:046e:0000:0000:0000:0000/64`. Por lo tanto, la IPv6_GATEWAY será `2001:41D0:1:4FF:FF:FF:FF:FF`.
>
> La forma más segura de obtener la información de red del servidor es [mediante la API de OVHcloud](https://docs.ovh.com/es/api/first-steps-with-ovh-api/). Ejecute la siguiente llamada a la API, indicando el nombre interno del servidor (por ejemplo: `ns3956771.ip-169-254-10.eu`):
>


> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/specifications/network
>

> [!warning]
> 
> Antes de editar un archivo de configuración, cree siempre una copia de seguridad del original para poder volver si surge algún problema. 
> 

### Sistemas operativos Debian y basados en Debian

> [!warning]
>
> Antes de seguir los pasos que se indican a continuación, es muy recomendable que deshabilite la autoconfiguración IPv6 y el «router advertising» para prevenir problemas conocidos. Para ello, debe añadir las siguientes líneas a su archivo `sysctl.conf` que se encuentra en /etc/sysctl.conf:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Una vez realizado esto, puede aplicar estas reglas ejecutando el siguiente comando: `sh sysctl -p`.
> 

#### 1: Conectarse a su servidor por SSH

[Más información en esta guía](../primeros-pasos-servidor-dedicado/).

#### 2: Abrir el archivo de configuración de red de su servidor

Su archivo de configuración de red de su servidor se encuentra en `/etc/network/interfaces` o `/etc/network/interfaces.d`. Utilice la línea de comando para localizar el archivo y ábralo para editarlo. Realice una copia de seguridad antes de modificar cualquier archivo de configuración.

#### 3: Modificar el archivo de configuración de red

Modifique el archivo para que quede como en el siguiente ejemplo. En este ejemplo, la interfaz de red se llama `eth0`. La interfaz de su servidor puede variar.

```console
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

```bash
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

Más información en [esta guía](../primeros-pasos-servidor-dedicado/).


#### 2: Abrir el archivo de configuración de red de su servidor

Su archivo de configuración de red de su servidor se encuentra en `/etc/sysconfig/network-scripts/ifcfg-eth0`. Utilice la línea de comando para localizar el archivo y ábralo para editarlo.

#### 3: Modificar el archivo de configuración de red

Modifique el archivo para que quede como en el siguiente ejemplo. En este ejemplo, la interfaz de red se llama eth0. La interfaz de su servidor puede variar. Además hemos omitido la configuración del IPv4 Failover para evitar confusiones, pero la configuración de la IPv6 se hace en el mismo archivo de configuración.

```console
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

```bash
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

Más información en [esta guía](../primeros-pasos-servidor-dedicado/).


#### 2: Abrir el archivo de configuración de red de su servidor

Su archivo de configuración de red de su servidor se encuentra en `/etc/rc.conf`. Utilice la línea de comando para localizar el archivo y ábralo para editarlo.

#### 3: Modificar el archivo de configuración de red

Modifique el archivo para que quede como en el siguiente ejemplo. En este ejemplo, la interfaz de red se llama em0. La interfaz de su servidor puede variar.

```console
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

```bash
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

### Ubuntu 18.04 y 20.04

#### 1: Conectarse a su servidor por SSH

Más información en [esta guía](../primeros-pasos-servidor-dedicado/).

#### 2: Abrir el archivo de configuración de red de su servidor

Abra el archivo de configuración de la red, situado en `/etc/netplan`. Para demostrarlo, nuestro archivo se denomina 50-cloud-init.yaml.

#### 3: Modificar el archivo de configuración de red

Mediante un editor de texto, modifique el archivo 50-cloud-init.yaml añadiendo las siguientes líneas a las secciones correspondientes, como se muestra en el ejemplo a continuación.

Sustituya los valores genéricos (YOUR_IPV6, IPV6_PREFIX e IPV6_GATEWAY) y la interfaz de red (si el servidor no utiliza enp1s0) por sus valores específicos.

```yaml
network:
    version: 2
    ethernets:
        enp1s0:
            dhcp4: true
            match:
                macaddress: 00:04:0p:8b:c6:30
            set-name: enp1s0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            gateway6: IPv6_GATEWAY
            routes:
                - to: IPv6_GATEWAY
                  scope: link
```

### Ubuntu 21.10 y 22.04

El archivo de configuración debe tener el siguiente formato:

```yaml
network:
    version: 2
    ethernets:
        enp1s0:
            dhcp4: true
            match:
                macaddress: 00:04:0p:8b:c6:30
            set-name: enp1s0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            routes:
                - to: ::/0
                  via: IPv6_GATEWAY
                - to: IPv6_GATEWAY
                  scope: link
```

> [!warning]
>
> Es importante respetar la alineación de cada elemento del archivo, tal y como se muestra en el ejemplo anterior. No utilice la tecla de tabulación para crear el espacio. Sólo es necesaria la tecla espacio. 
>

#### 4: Probar y aplicar la configuración

Para probar su configuración, utilice el siguiente comando:

```bash
netplan try
```

Si es correcta, puede aplicarla con el siguiente comando:

```bash
netplan apply
```

#### 5: Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```bash
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

Más información en [esta guía](../primeros-pasos-servidor-dedicado/).


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

- El nombre y la versión del sistema operativo que está utilizando en su servidor.
- El nombre y la carpeta del archivo de configuración de red. 
- El contenido de ese archivo. 


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
