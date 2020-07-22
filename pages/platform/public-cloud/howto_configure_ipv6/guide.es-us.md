---
title: 'Configurar IPv6 en una instancia de Public Cloud'
slug: configurar-ipv6
excerpt: 'Cómo configurar el protocolo IPv6 en una instancia de Public Cloud'
section: 'Red e IP'
---

**Última actualización: 25/11/2019**

## Objetivo
El protocolo de internet versión 6 (IPv6), la última versión del protocolo de internet (IP), está diseñado para resolver el agotamiento de las direcciones IPv4 utilizando direcciones compuestas por 128 bits en vez de los 32 bits de las direcciones IPv4.

Todas las instancias de Public Cloud se entregan con una dirección IPv4 y una dirección IPv6.

Por defecto solo está configurada la IPv4.

Esta guía explica cómo configurar una dirección IPv6 en una instancia de Public Cloud.

## Requisitos

* Tener una instancia de Public Cloud.
* Tener conocimientos de SSH.
* Tener conocimientos básicos de redes.

## Procedimiento

### Léxico

Antes de empezar, la recomendamos que eche un vistazo a la siguiente tabla, en la que se recogen los valores que utilizaremos en esta guía junto con su descripción:

|Valor|Descripción|
|---|---|
|IPV6_BLOCK|Bloque IPv6 asignado al servicio.|
|YOUR_IPV6|Dirección IPv6 asignada al servicio.|
|IPv6_PREFIX|Prefijo del bloque IPv6 (p. ej.: 2607:5300:60:62ac::/128 -> netmask = 128).|
|IPv6_GATEWAY|Puerta de enlace del bloque IPv6.|


### Obtener la la información relativa a la red

Conéctese al área de cliente de OVHcloud en la sección `Public Cloud`{.action}. En la columna izquierda, seleccione el menú `Instances`{.action} y haga clic en `Detalles de la instancia`{.action}.

![public-cloud ipv6](images/pcipv61.png){.thumbnail}

Puede consultar la información en la columna `Redes`{.action}.

![public-cloud ipv6](images/pcipv62.png){.thumbnail}

### Ejemplos de configuraciones persistentes

> [!primary] **Ejemplos**
> 
>La siguiente información se incluye solo a modo de ejemplo.
>
>Como administrador del servicio, deberá adaptarlo a su distribución.
>

En primer lugar, conéctese a su instancia por SSH.

#### **En Debian - Ubuntu**

Si su interfaz es «eth0» y tiene un SO Debian, la configuración tendrá que ser parecida a la siguiente:

Archivo a modificar (con privilegios root): /etc/network/interfaces

```
iface eth0 inet static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Veamos a continuación un ejemplo concreto:

```
iface eth0 inet static
address 2001:41d0:xxx:xxxx::999
netmask 128
post-up /sbin/ip -6 route add 2001:41d0:xxx:xxxx::111 dev eth0
post-up /sbin/ip -6 route add default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del default via 2001:41d0:xxx:xxxx::111 dev eth0
pre-down /sbin/ip -6 route del 2001:41d0:xxx:xxxx::111 dev eth0
```
#### **En RedHat/CentOS**

Si su interfaz es «eth0», la configuración tendrá que ser parecida a la siguiente:

Archivo a modificar (con privilegios root): /etc/sysconfig/network-scripts/ifcfg-eth0

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Veamos a continuación un ejemplo concreto:

```
IPV6INIT=yes
IPV6ADDR=2001:41d0:xxx:xxxx::999
IPV6_DEFAULTGW=2001:41d0:xxx:xxxx::111
```

#### **En Windows**

Acceda a la sección `Conexiones de red`{.action} de su Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

A continuación, acceda a las `Propiedades`{.action} de su tarjeta de red haciendo clic derecho.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Haga clic en `IPv6`{.action} y seleccione `Propiedades`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Introduzca la información de su IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

## Diagnóstico

¿Ha configurado su IPv6 pero no funciona? 

Existe un procedimiento muy sencillo para determinar si el problema se encuentra en la configuración realizada o en la red de OVHcloud.

En primer lugar, [ponga su instancia en modo de rescate](../poner_una_instancia_en_modo_de_rescate/).

Utilice los siguientes comandos para configurar su IP de forma no persistente:

```
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Vuelva a probar su red mediante un ping6, por ejemplo:

```
ping6 ipv6.google.com
```
Si la instancia responde, es posible que no haya seguido correctamente alguno de los pasos de la configuración inicial.

Si el problema persiste, puede ponerse en contacto con nuestro equipo de soporte.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
