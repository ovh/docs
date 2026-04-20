---
title: "Cómo configurar la agregación de enlaces con LACP en Debian 12 o Ubuntu 24.04"
excerpt: "Active la agregación de enlaces en su servidor Debian 12 o Ubuntu 24.04 (Netplan) para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red"
updated: 2026-04-20
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

La tecnología LACP (Link Aggregation Control Protocol) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. Puede agregar sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible. El ancho de banda disponible también se duplica gracias a la agregación.

**Esta guía explica cómo configurar sus interfaces en agregación para utilizarlas en Debian 12 (*o posterior*) / Ubuntu 24.04 (configuración Netplan).**

> [!warning]
> Aunque las imágenes de Debian 12 (y versiones posteriores) proporcionadas por OVHcloud utilizan Netplan por defecto, existen dos excepciones clave en las que se usa `ifupdown` (/etc/network/interfaces):
>
> - **Modo de rescate**: Aunque está basado en Debian 12, el entorno de rescate utiliza la herramienta `ifupdown`.
> - **Imágenes personalizadas**: Las instalaciones de Debian realizadas con su propia imagen pueden seguir utilizando `ifupdown` para la configuración de red.
>
> Si desea configurar la agregación de enlaces en modo de rescate, o en un sistema operativo personalizado que utilice `ifupdown`, consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9).
>

## Requisitos

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Servidores dedicados](/links/control-panel/baremetal-dedicated-servers)
- **Ruta de navegación:** `Bare Metal Cloud`{.action} > `Servidores dedicados`{.action} > Seleccione su servidor

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## Procedimiento

> [!primary]
> Los valores (direcciones MAC, direcciones IP, etc.) que aparecen en las configuraciones y ejemplos a continuación se proporcionan como ejemplos. Por supuesto, debe reemplazarlos por los suyos propios.
>

### Obtención de las direcciones MAC

Vaya a la pestaña `Interfaces de red`{.action} y tome nota de las direcciones MAC de cada interfaz (pública/privada) que se muestran en la parte inferior del menú.

![Área de cliente de OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Tenga en cuenta que la dirección MAC de la interfaz **pública principal** es la que recibe las ofertas DHCP, tanto en el sistema operativo del servidor como en el modo de rescate. Esta interfaz gestiona la conectividad pública en la configuración predeterminada.
>

Una vez que sabe qué direcciones MAC están asociadas a cada tipo de interfaz (pública/privada), debe obtener los nombres de las interfaces.

### Obtención de los nombres de las interfaces

> [!primary]
>
> Si pierde la conexión de red con su servidor, siga los pasos de "**Abrir KVM**" de [esta guía](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).
>

Para obtener los nombres de las interfaces, ejecute el siguiente comando:

```bash
ip a
```

> [!primary]
>
> Este comando mostrará diversas interfaces. Si tiene dificultad para determinar cuáles son sus interfaces físicas, la primera interfaz todavía tendrá la dirección IP pública del servidor asignada por defecto.
>

Aquí tiene un ejemplo de salida:

```text
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host noprefixroute
       valid_lft forever preferred_lft forever
2: ens22f0np0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c6 brd ff:ff:ff:ff:ff:ff
    inet 203.0.113.1/32 metric 100 scope global dynamic ens22f0np0
       valid_lft 71613sec preferred_lft 71613sec
    inet6 2001:db8:1:1b00:203:0:112:0/56 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::a6b2:c3ff:fed4:e5c6/64 scope link
       valid_lft forever preferred_lft forever
3: ens22f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:c7 brd ff:ff:ff:ff:ff:ff
4: ens33f0np0: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d6 brd ff:ff:ff:ff:ff:ff
5: ens33f1np1: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN group default qlen 1000
    link/ether a1:b2:c3:d4:e5:d7 brd ff:ff:ff:ff:ff:ff
```

Una vez que haya determinado los nombres de sus interfaces, puede configurar la agregación de interfaces en el sistema operativo.

### Configuración de la agregación de interfaces

Seleccione la pestaña siguiente que corresponda a la configuración de su servidor:

- **Dos interfaces**: servidores Advance con dos NIC físicas.
- **Cuatro interfaces - Double LAG**: servidores Scale y High-Grade con OLA en modo **Active - Double LAG** (agregados público + privado). Requiere [activar OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) en el área de cliente de OVHcloud.
- **Cuatro interfaces - Fully Private**: servidores Scale y High-Grade con OLA en modo **Active - Fully Private** (único agregado privado para vRack). Requiere [activar OLA](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager) en el área de cliente de OVHcloud.

> [!tabs]
> Dos interfaces
>> Sustituya el contenido de `/etc/netplan/50-cloud-init.yaml` por lo siguiente:
>>
>> **IP estática**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # Dirección MAC de la interfaz pública principal del servidor
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>     bonds:
>>         bond0:
>>             # Dirección MAC de la interfaz pública principal del servidor
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Cuatro interfaces - Double LAG
>> Esta configuración agrupa las interfaces públicas en `bond0` (con IP pública) y las interfaces privadas en `bond1` (para vRack).
>>
>> Sustituya el contenido de `/etc/netplan/50-cloud-init.yaml` por lo siguiente:
>>
>> **IP estática**
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # Dirección MAC de la interfaz pública principal del servidor
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             addresses:
>>                 - 203.0.113.1/32
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: 100.64.0.1
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 213.186.33.99
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Opcional: configuración del agregado privado
>>         bond1:
>>             # Dirección MAC de la primera interfaz privada
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # Dirección MAC de la interfaz pública principal del servidor
>>             macaddress: a1:b2:c3:d4:e5:c6
>>             accept-ra: false
>>             dhcp4: true
>>             addresses:
>>                 - 2001:db8:1:1b00:203:0:112:0/56
>>             routes:
>>                 - on-link: true
>>                   to: default
>>                   via: fe80::1
>>             nameservers:
>>                 addresses:
>>                 - 2001:41d0:3:163::1
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>>         # Opcional: configuración del agregado privado
>>         bond1:
>>             # Dirección MAC de la primera interfaz privada
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> ///
>>
> Cuatro interfaces - Fully Private
>> Esta configuración agrega todas las interfaces físicas en un único agregado exclusivamente para uso con vRack. No hay conectividad IP pública.
>>
>> > [!warning]
>> >
>> > Tras la implementación de OLA en modo Fully Private, la IP pública deja de estar accesible. Asegúrese de tener un medio alternativo de acceso (p. ej., a través de otro servidor en el vRack o mediante KVM/IPMI) antes de aplicar esta configuración.
>> >
>>
>> Sustituya el contenido de `/etc/netplan/50-cloud-init.yaml` por lo siguiente:
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         ens22f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c6
>>         ens22f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:c7
>>         ens33f0np0:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d6
>>         ens33f1np1:
>>             match:
>>                 macaddress: a1:b2:c3:d4:e5:d7
>>     bonds:
>>         bond0:
>>             # Dirección MAC de la interfaz privada principal del servidor
>>             macaddress: a1:b2:c3:d4:e5:d6
>>             accept-ra: false
>>             interfaces:
>>                 - ens22f0np0
>>                 - ens22f1np1
>>                 - ens33f0np0
>>                 - ens33f1np1
>>             parameters:
>>                 mode: 802.3ad
>>                 lacp-rate: fast
>>                 transmit-hash-policy: layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > En modo Fully Private, el agregado utiliza la dirección MAC de la interfaz **privada principal**. Para asignar una dirección IP a este agregado para la comunicación en vRack, añada un bloque `addresses` bajo `bond0` con su IP privada de vRack.
>> >

### Aplicación de la configuración

> [!primary]
> El comando `netplan try` no puede utilizarse al configurar agregados.

Aplique la configuración con el siguiente comando:

```bash
sudo netplan apply
```

Puede tardar varios segundos hasta que las interfaces de agregado estén disponibles.

## Más información

[Configurar el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

Interactúe con nuestra [comunidad de usuarios](/links/community).
