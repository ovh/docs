---
title: 'Configurar un bloque de IP en el vRack'
slug: configurar-un-bloque-ip-en-el-vrack
excerpt: 'Cómo configurar un bloque de direcciones IP públicas en el vRack'
section: vRack
---

**Última actualización: 30/10/2018**

## Objetivo

Además del direccionamiento IP privado, el [vRack](https://www.ovh.com/world/es/soluciones/vrack/){.external} permite dirigir el tráfico IP público a través del puerto vRack del servidor mediante un bloque de direcciones IP públicas.

**Esta guía explica cómo configurar en el vRack un bloque de direcciones IP públicas.**


## Requisitos

* Tener un bloque público de direcciones IP reservado en su cuenta, con un mínimo de cuatro direcciones.
* Haber elegido un rango de direcciones IP privadas.
* Tener un [servidor compatible con el vRack](https://www.ovh.com/world/es/servidores_dedicados/){.external}.
* Haber activado un servicio [vRack](https://www.ovh.com/world/es/soluciones/vrack/){.external}.
* Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager){.external}.


## Procedimiento

> [!primary]
>
> En esta guía utilizaremos, a modo de ejemplo, el bloque de IP **46.105.135.96/28** y la interfaz de red secundaria **eth1** (dedicada al vRack).
>

### Configurar una dirección IP útil

En el caso del vRack, la primera, la penúltima y la última dirección de un bloque de IP siempre están reservadas para la dirección de red, la puerta de enlace y el *broadcast* respectivamente. Eso significa que la primera dirección útil es la segunda dirección del bloque, tal y como se muestra a continuación:

```sh
46.105.135.96   # Reservada: dirección de red 
46.105.135.97   # Primera IP útil
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
46.105.135.109   # Última IP útil
46.105.135.110   # Reservada: puerta de enlace  
46.105.135.111   # Reservada: broadcast
```

Para configurar la primera dirección IP útil, edite el archivo de configuración de red como se indica a continuación. En este ejemplo, se utiliza la máscara de subred **255.255.255.240**.

> [!primary]
>
> La mascara de subred utilizada en el ejemplo es apropiada para nuestro bloque de IP. Su máscara de subred puede ser diferente en función del tamaño del bloque. Al contratar su bloque de IP, recibirá un mensaje de correo electrónico con la máscara de subred que debe utilizar.
>


```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
```

### Crear una nueva tabla de enrutamiento IP

En primer lugar, es recomendable descargar e instalar **iproute2**, un paquete que permite configurar manualmente el enrutamiento IP en el servidor.

Abra una conexión SSH a su servidor y ejecute el siguiente comando para descargar e instalar el paquete:

```sh
apt-get install iproute2
```

A continuación, cree una nueva ruta IP para el vRack. Para ello, le recomendamos que añada una nueva regla de tráfico editando el archivo como se indica a continuación:

```sh
/etc/iproute2/rt_tables

# # #
# reserved values
# # #
255	local
254	main
253	default
0	unspec
# # #
local
# # #
#1	inr.ruhep
1 vrack
```

### Editar el archivo de configuración de red

> [!primary]
>
> En este ejemplo, el archivo de configuración de red se encuentra en **/etc/network/interfaces**. En función del sistema operativo, este archivo puede encontrarse en otra ubicación. En caso de duda, consulte la documentación oficial de su distribución.
>

Por último, edite el archivo de configuración de red para que reconozca la nueva regla de tráfico y enrute el tráfico vRack hacia la dirección de la puerta de enlace **46.105.135.110**.

```sh
/etc/network/interfaces

auto eth1
iface eth1 inet static
address 46.105.135.97
netmask 255.255.255.240
broadcast 46.105.135.111
post-up ip route add 46.105.135.96/28 dev eth1 table vrack
post-up ip route add default via 46.105.135.110 dev eth1 table vrack
post-up ip rule add from 46.105.135.96/28 table vrack
post-up ip rule add to 46.105.135.96/28 table vrack
```

Reinicie el servidor para que se apliquen los cambios realizados.


## Más información

[Configurar varios servidores dedicados en el vRack](../configurar-vrack-en-servidor-dedicado/){.external}

[Crear varias VLAN en el vRack](../crear-vlan-vrack/){.external}

[Configurar el vRack entre la solución Public Cloud y un servidor dedicado](../configurar-vrack-entre-public-cloud-servidor-dedicado/){.external}

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com](https://community.ovh.com){.external}.
