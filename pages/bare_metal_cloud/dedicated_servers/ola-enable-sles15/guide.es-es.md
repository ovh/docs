---
title: "Configurar OVHcloud Link Aggregation en un servidor dedicado (SLES 15)"
excerpt: "Active OVHcloud Link Aggregation en su servidor dedicado SLES 15."
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

**Esta guía explica cómo configurar sus interfaces en agregación para utilizarlas con OLA en SLES 15.**

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

Dado que nuestros NIC en OLA tienen una configuración privada-privada, no es posible acceder al servidor por SSH. Por lo tanto, es necesario utilizar la herramienta IPMI para acceder al servidor.

Haga clic en la pestaña `IPMI`{.action} (1) y, a continuación, en el botón `Desde un applet Java (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Se descargará un programa JNLP. Lánce el programa para acceder a IPMI. Conéctese utilizando las credenciales asociadas al servidor.

Por defecto, al utilizar un modelo de OVHcloud, los NIC se denominarán *eth0* y *eth1*. Si no utiliza un modelo de OVHcloud, puede encontrar los nombres de las interfaces utilizando el siguiente comando:

```bash
ip a
```

> [!primary]
> Los valores (direcciones MAC, direcciones IP, etc.) que aparecen en las configuraciones y ejemplos a continuación se proporcionan como ejemplos. Por supuesto, debe reemplazarlos por los suyos propios.
>

### Obtención de las direcciones MAC

Vaya a la pestaña `Interfaces de red`{.action} y tome nota de las direcciones MAC de cada interfaz (pública/privada) que se muestran en la parte inferior del menú.

![Área de cliente de OVHcloud](images/ControlPanel.png){.thumbnail}

> [!primary]
> Tenga en cuenta que la dirección MAC de la interfaz **pública principal** es la que recibe las ofertas DHCP, tanto en el sistema operativo del servidor como en el modo de rescate. Esta interfaz gestiona la conectividad pública en la configuración predeterminada.
>
> Además, la dirección MAC de la interfaz **privada principal** es la de menor valor. En la imagen de ejemplo anterior, esta es la dirección `a1:b2:c3:d4:e5:d6`.
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
>> Cree el archivo de configuración del agregado `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **IP estática**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configure a continuación cada interfaz física. Edite `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> /// details | DHCP
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Los archivos de configuración de las interfaces físicas permanecen igual que arriba.
>>
>> ///
>>
> Cuatro interfaces - Double LAG
>> Esta configuración agrupa las interfaces públicas en `bond0` (con IP pública) y las interfaces privadas en `bond1` (para vRack).
>>
>> Cree el archivo de configuración del agregado público `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> **IP estática**
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='203.0.113.1/32'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Cree el archivo de configuración del agregado privado `/etc/sysconfig/network/ifcfg-bond1`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens33f0np0'
>> BONDING_SLAVE_1='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configure a continuación cada interfaz física. Edite `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> /// details | DHCP (solo bond0)
>>
>> Para el agregado público, utilice DHCP:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='dhcp4'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> El agregado privado (`ifcfg-bond1`) y todos los archivos de configuración de las interfaces físicas permanecen igual que arriba.
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
>> Cree el archivo de configuración del agregado `/etc/sysconfig/network/ifcfg-bond0`:
>>
>> ```bash
>> STARTMODE='onboot'
>> BOOTPROTO='static'
>> IPADDR='10.0.0.1/24'
>> BONDING_MASTER='yes'
>> BONDING_SLAVE_0='ens22f0np0'
>> BONDING_SLAVE_1='ens22f1np1'
>> BONDING_SLAVE_2='ens33f0np0'
>> BONDING_SLAVE_3='ens33f1np1'
>> BONDING_MODULE_OPTS='mode=802.3ad xmit_hash_policy=layer3+4 lacp_rate=fast'
>> ```
>>
>> Configure a continuación cada interfaz física. Edite `/etc/sysconfig/network/ifcfg-ens22f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c6
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens22f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:c7
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens33f0np0`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d6
>> ```
>>
>> Cree `/etc/sysconfig/network/ifcfg-ens33f1np1`:
>>
>> ```bash
>> BOOTPROTO='none'
>> STARTMODE='hotplug'
>> LLADDR=a1:b2:c3:d4:e5:d7
>> ```
>>
>> > [!primary]
>> >
>> > En modo Fully Private, el agregado utiliza la dirección MAC de la interfaz **privada principal**. El campo `IPADDR` debe configurarse con su IP privada de vRack.
>> >

### Aplicación de la configuración

Aplique la configuración recargando todas las interfaces con wicked:

```bash
wicked ifreload all
```

Este reinicio puede tardar unos segundos ya que se está creando la interfaz de agregado. Para comprobar que el agregado funciona correctamente, haga ping a otro servidor en el mismo vRack. Si funciona, está todo listo. En caso contrario, compruebe sus configuraciones o intente reiniciar el servidor.

También puede comprobar la configuración del agregado con el siguiente comando:

```bash
cat /proc/net/bonding/bond0
```

## Más información

[Configurar el servicio OVHcloud Link Aggregation en el área de cliente de OVHcloud](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Cómo configurar la NIC para OVHcloud Link Aggregation en Debian 12 o Ubuntu 24.04 con Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Cómo configurar la NIC para OVHcloud Link Aggregation en Debian 9 a 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Configurar un NIC para el servicio OVHcloud Link Aggregation en Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Interactúe con nuestra [comunidad de usuarios](/links/community).
