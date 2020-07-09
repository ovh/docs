---
title: 'Configurar un NIC para el servicio OVHcloud Link Aggregation en CentOS 7'
slug: ola-centos7
excerpt: 'Activar el servicio OVHcloud Link Aggregation en un servidor CentOS 7'
section: 'Uso avanzado'
---

**Última actualización: 24 de octubre de 2019**

## Objetivo

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico es redirigido automáticamente hacia otro enlace disponible. Esta guía explica cómo conectar sus NIC (Network Interface Controller) para utilizarlos con el servicio OLA en CentOS 7.

## Requisitos

[Configurar un NIC para el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](https://docs.ovh.com/es/dedicated/ola-manager){.external}

## Procedimiento

Nuestros NIC en OLA tienen una configuración privada-privada, por lo que no es posible acceder al servidor por SSH. Así pues, es necesario utilizar la herramienta IPMI para acceder al servidor. Para ello, en primer lugar, acceda al [área de cliente de OVHcloud](https://www.ovh.com/manager/){.external}.  En el menú de la izquierda, seleccione el servidor que quiere configurar y, a continuación, haga clic en **IPMI**.

![remote_kvm](images/remote_kvm.png){.thumbnail}

Haga clic en el botón **Desde un applet Java (KVM)**. Se descargará un programa JNLP. Abra el programa para acceder a IPMI e introduzca las claves asociadas al servidor.

Por defecto, al utilizar una plantilla de OVHcloud, el nombre asignado de los NIC será *eth0* y *eth1*. Si no utiliza una plantilla de OVHcloud, puede consultar el nombre de las interfaces utilizando el siguiente comando:

```bash
ip a
```

> [!primary]
>
> Este comando mostrará diversas interfaces. Si tiene dificultad para determinar qué interfaces corresponden a sus NIC físicos, la primera interfaz todavía tendrá la dirección de la IP pública del servidor asignada por defecto.
>

Una vez que haya determinado el nombre de los dos NIC, ya puede asociar los NIC en el sistema operativo. En primera lugar, deberá crear una interfaz del enlace. Para ello, cree el siguiente archivo de configuración en el editor de texto que desee:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-bond0
```

Se abrirá un archivo de texto vacío. Para configurar la interfaz de enlace, introduzca el siguiente texto:

```bash
DEVICE=bond0
TYPE=Bond
NAME=bond0
BOOTPROTO=none
ONBOOT=yes
BONDING_MASTER=yes
IPADDR=10.0.0.1
NETMASK=255.255.255.0
BONDING_OPTS="mode=802.3ad miimon=100"
```

> [!primary]
>
> Puede utilizar todas las direcciones IP privadas y subredes que desee.
>

Una vez que haya confirmado que la información es correcta, guarde y cierre el archivo.  A continuación, deberá configurar ambas interfaces físicas. Por defecto, en los servidores de OVHcloud, solo *eth0* tendrá un archivo de configuración. Ábralo utilizando el siguiente comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

Por defecto, el archivo contendrá la siguiente información:

```bash
DEVICE=eth0
BOOTPROTO=static
IPADDR=203.0.113.1
NETMASK=255.255.255.0
ONBOOT=yes
GATEWAY=203.0.113.254
IPV6INIT=yes
IPV6_AUTOCONF=no
IPV6ADDR=2001:0db8:0000:0001::/64
```

> [!warning]
>
> Las direcciones IP serán diferentes para cada servidor.
>

Modificaremos el archivos para que contenga la siguiente información:

```bash
DEVICE=eth0
BOOTPROTO=static
#IPADDR=203.0.113.1
#NETMASK=255.255.255.0
ONBOOT=yes
#GATEWAY=203.0.113.254
#IPV6INIT=yes
#IPV6_AUTOCONF=no
#IPV6ADDR=2001:0db8:0000:0001::/64
TYPE=Ethernet
HWADDR=00:53:00:00:00:00
MASTER=bond0
SLAVE=yes
```

> [!primary]
>
> Puede consultar la dirección de hardware (dirección MAC) del NIC utilizando el comando *ip a*:  será el número junto a «link/ether» en el output.
>

El símbolo *#* delante de la línea indica que el servidor ignorará esta línea al leer el archivo. Así pues, no tendremos en cuenta estas líneas a la hora de crear nuestro archivo de interfaz para *eth1*. Para crear el archivo de configuración *eth1*, utilice el siguiente comando:

```bash
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

En esta ocasión, el archivo estará vacío; añada el siguiente contenido:

```bash
DEVICE=eth1
BOOTPROTO=static
ONBOOT=yes
TYPE=Ethernet
HWADDR=00:53:00:00:00:01
MASTER=bond0
SLAVE=yes
```

Por último, reinicie el servicio de red utilizando el siguiente comando:

```bash
systemctl restart network
```

Para comprobar que el enlace funciona correctamente, haga ping en otro servidor en el mismo vRack. Si funciona, ha configurado el enlace correctamente. En caso contrario, compruebe que la configuración es correcta o reinicie el servidor.

## Conclusiones

OVHcloud le ofrece a sus clientes la libertad y la flexibilidad necesarias para utilizar su hardware de la forma que mejor se adapta a sus necesidades. Si ha leído esta guía, debe ser capaz de configurar OVHcloud Link Aggregation (OLA) en CentOS 7, para utilizar sus dos NIC como interfaces privadas vinculadas.