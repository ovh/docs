---
title: "Configurar OVHcloud Link Aggregation en un servidor dedicado (Debian)"
excerpt: "Active OVHcloud Link Aggregation en su servidor Debian (de Debian 9 a Debian 11)."
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

La tecnología OVHcloud Link Aggregation (OLA) está diseñada para aumentar la disponibilidad de su servidor y mejorar la eficiencia de sus conexiones de red. En solo unos clics, es posible añadir sus tarjetas de red y hacer que sus enlaces de red sean redundantes. De este modo, si un enlace se cae, el tráfico se redirige automáticamente hacia otro enlace disponible. El ancho de banda disponible también se duplica gracias a la agregación.
La agregación se basa en la tecnología IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Esta guía explica cómo configurar sus interfaces en agregación para utilizarlas con OLA en Debian 9 a 11 (configuración ifupdown).**

> [!warning]
> Esta guía proporciona instrucciones para configurar la agregación de interfaces de red específicamente con `ifupdown`, cuyo archivo de configuración es `/etc/network/interfaces`. También es aplicable al modo de rescate.
>
> Si la configuración de red de su sistema utiliza `Netplan` (Debian 12 o superior, Ubuntu 24.04), consulte [esta guía](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan).
>

## Requisitos

- [Configurar el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

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

> [!warning]
>
> Es necesario instalar el paquete ifenslave en el servidor antes de activar el servicio OLA en el área de cliente de OVHcloud o en la API. Para ello, utilice el siguiente comando:
>
> ```bash
> apt install ifenslave
> ```
>

### Obtención de las direcciones MAC

Vaya a la pestaña `Interfaces de red`{.action} y tome nota de las direcciones MAC de cada interfaz (pública/privada) que se muestran en la parte inferior del menú.

![Área de cliente de OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Tenga en cuenta que la dirección MAC de la interfaz **pública principal** es la que recibe las ofertas DHCP, tanto en el sistema operativo del servidor como en el modo de rescate. Esta interfaz gestiona la conectividad pública en la configuración predeterminada.
>
> Además, la dirección MAC de la interfaz **privada principal** es la de menor valor. En la imagen de ejemplo anterior, esta es la dirección `a1:b2:c3:d4:e5:d6`.
>

Dado que nuestros NIC en OLA tienen una configuración privada-privada, no es posible acceder al servidor por SSH. Por lo tanto, es necesario utilizar la herramienta IPMI para acceder al servidor.
<br>Haga clic en la pestaña `IPMI`{.action} (1).

A continuación, haga clic en el botón `Desde un applet Java (KVM)`{.action} (2).

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
>> Sustituya el contenido de `/etc/network/interfaces` por lo siguiente:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # Dirección MAC de la interfaz pública principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # Dirección MAC de la interfaz pública principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>> ```
>>
>> ///
>>
> Cuatro interfaces - Double LAG
>> Esta configuración agrupa las interfaces públicas en `bond0` (con IP pública) y las interfaces privadas en `bond1` (para vRack).
>>
>> Sustituya el contenido de `/etc/network/interfaces` por lo siguiente:
>>
>> **IP estática**
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 203.0.113.1/32
>>   gateway 100.64.0.1
>>   # Dirección MAC de la interfaz pública principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>   dns-nameservers 213.186.33.99
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Opcional: configuración del agregado privado
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # Dirección MAC de la interfaz privada principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> auto bond0
>> iface bond0 inet dhcp
>>   # Dirección MAC de la interfaz pública principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:c6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>>
>>   up ip -6 addr add 2001:db8:1:1b00:203:0:112:0/56 dev bond0
>>   up ip -6 route add default via fe80::1 dev bond0
>>
>> # Opcional: configuración del agregado privado
>> auto bond1
>> iface bond1 inet static
>>   address 10.0.0.1/24
>>   # Dirección MAC de la interfaz privada principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
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
>> Sustituya el contenido de `/etc/network/interfaces` por lo siguiente:
>>
>> ```bash
>> auto bond0
>> iface bond0 inet static
>>   address 10.0.0.1/24
>>   # Dirección MAC de la interfaz privada principal del servidor
>>   hwaddress ether a1:b2:c3:d4:e5:d6
>>   bond-mode 802.3ad
>>   bond-slaves ens22f0np0 ens22f1np1 ens33f0np0 ens33f1np1
>>   bond-lacp-rate fast
>>   bond-xmit_hash_policy layer3+4
>> ```
>>
>> > [!primary]
>> >
>> > En modo Fully Private, el agregado utiliza la dirección MAC de la interfaz **privada principal**. El campo `address` debe configurarse con su IP privada de vRack.
>> >

### Aplicación de la configuración

Aplique la configuración reiniciando el servicio de red:

```bash
systemctl restart networking
```

Este reinicio puede tardar unos segundos ya que se está creando la interfaz de agregado. Para comprobar que el agregado funciona correctamente, haga ping a otro servidor en el mismo vRack. Si funciona, está todo listo. En caso contrario, compruebe sus configuraciones o intente reiniciar el servidor.

## Más información

[Configurar el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Cómo configurar la NIC para OVHcloud Link Aggregation en Debian 12 o Ubuntu 24.04 con Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Interactúe con nuestra [comunidad de usuarios](/links/community).
