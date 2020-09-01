---
title: 'Configuración del aliasing IP'
excerpt: 'Esta guía explica cómo agregar IP de conmutación por error a su configuración'
slug: red-ipaliasing-vps
section: 'Red e IP'
---

**Última actualización: 25/09/2018**


## Objectivo

IP aliadas es una configuración de red especial para su servidor OVHcloud, el cual permite asociar múltiples direcciones IP con una única interfaz de red.

**Esta guía se le explicará los pasos para añadir Ip failover a la configuración de su VPS.**

## Requisitos

* [VPS](https://ovhcloud.com/es/vps/){.external}
* [Dirección IP failover](https://www.ovh.com/world/es/dedicated-servers/ip_failover.xml){.external}
* Acceso administrador(root) al servidor mediante SSH.

## Procedimiento

### Debian 9

#### Paso 1: Desactivar la configuración automática de red.

Primero, abra el siguiente fichero, como se le indica a continuación.

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Después, edite el fichero con la siguiente configuración. Esto evitará que se realicen cambios en la configuración de su red automáticamente.

```sh
network: {config: disabled}
```
####: Paso 2: Editar el fichero de configuracion de red.

A continuación, abre el fichero de red para editarlo con el siguiente comando:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Entonces, edite el fichero con la siguiente configuración.

> [!primary]
>
Tenga en cuenta que en nuestro ejemplo, el nombre de las interfaces de red podría ser diferentes a las suyas. Por favor sustituta con su propia interfaz.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Cada dirección de IP failover necesita su propia linea en este fichero. La configuración del fichero para su IP failover debe de llamarse: 50-cloud-init.yaml

#### Paso 1: Crea el fichero de configuración

Conéctese a su servidor mediante SSH y lance el siguiente comando:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

Después, edite el fichero con el siguiente contenido:

```sh
network:
    version: 2
    ethernets:
        your_network_interface:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: your_network_interface
            addresses:
            - your_failover_ip/32
```

Finalmente, guarde y cierre el fichero.

Repita este proceso para cada IP failover.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
