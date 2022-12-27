---
title: Modo Bridge IP
slug: network-bridging
excerpt: El modo bridge IP se utiliza para configurar las maquinas virtuales. Es necesario realizar diversas modificaciones en las MV para que la configuracion de red este operativa.
section: Red e IP
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 22/12/2022**

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](https://www.ovhcloud.com/es-es/network/additional-ip/). Esto no afectará a sus funcionalidades.
>

## Objetivo

La puesta en red en modo bridge puede utilizarse para configurar sus máquinas virtuales. Para que la configuración funcione en nuestra red, es necesario realizar algunos cambios.

**Esta guía explica cómo utilizar el modo bridge para configurar el acceso a internet para sus máquinas virtuales.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/TZZbPe9hCOk?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Tener un servidor dedicado con un hipervisor instalado (por ejemplo, [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server y Proxmox).
- Tener al menos una dirección [Additional IP](https://www.ovhcloud.com/es-es/bare-metal/ip/) conectada al servidor.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

## Procedimiento

Los pasos básicos son siempre los mismos, independientemente de los sistemas utilizados:
- creación de una dirección MAC virtual para una dirección IP de migración;
- Abonar la dirección MAC de la máquina virtual (MV) a esta nueva dirección.
- configurar la dirección IP, la máscara de red, la pasarela y la ruta hacia la pasarela dentro de la máquina virtual.

Para este ejemplo, utilizaremos los siguientes valores en nuestros ejemplos de código. Estas direcciones deberán sustituirse por sus propios valores:

- "SERVER_IP": la dirección IP principal del servidor;
- "ADDITIONAL_IP": su dirección Additional IP;
- "GATEWAY_IP": la dirección de su pasarela por defecto.

### Asignar una dirección MAC virtual

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, haga clic en el menú `Bare Metal Cloud`{.action} y seleccione la sección `IP`{.action}.

Haga clic en la pestaña `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Haga clic en los `...`{.action} y, seguidamente, en `Añadir una dirección MAC virtual`{.action}.

![Añadir una MAC virtual (1)](images/addvmac.png){.thumbnail}

Seleccione "ovh" en la lista desplegable "Tipo", escriba un nombre en el campo "Nombre de la máquina virtual" y haga clic en `Aceptar`{.action}.

![Añadir una MAC virtual (2)](images/addvmac2.png){.thumbnail}

### Establecer la dirección de la puerta de enlace

Para configurar sus máquinas virtuales para el acceso a Internet, debe conocer la pasarela de su máquina host, es decir, su servidor dedicado. La dirección de la pasarela está formada por los tres primeros bytes de la dirección IP principal del servidor, el último byte es de 254. Por ejemplo, si la dirección IP principal del servidor es:

- 169.254.10.020

Su dirección de pasarela será:

- 169.254.10.254

### Preparar el host

> [!primary]
>
Para todos los sistemas operativos y distribuciones, debe configurar su máquina virtual con la dirección MAC virtual creada en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
>

#### Proxmox

Después de haber creado la máquina virtual y cuando esta esté aún apagada:

 1. Seleccione la máquina virtual.
 2. Abra la sección "Hardware".
 3. Seleccione `Dispositivo de red`{.action}.
 4. Haga clic en el botón `Editar`{.action}.

![navegar hasta el periférico de red](images/proxmox_01.png){.thumbnail}

A continuación, añada la dirección MAC que ha creado anteriormente.

![abrir un dispositivo de red](images/proxmox_02.png){.thumbnail}


Una vez iniciado el VPS, podrá pasar a las siguientes etapas, en función del sistema operativo elegido.

#### VMware ESXi

Una vez que haya creado la máquina virtual y esté libre de tensión, haga clic derecho sobre ella y seleccione `Cambiar configuración`{.action}.

![Menú contextual de MV](images/vmware_01.png){.thumbnail}

Explique `Netwok Adapter 1`{.action} y cambie el valor en el menú desplegable `Dirección MAC`{.action} en modo "Manual" e introduzca la dirección MAC VMware creada anteriormente.

![Modificar los parámetros](images/vmware_02.png){.thumbnail}

Ya puede iniciar su máquina virtual y pasar a las siguientes etapas, en función del sistema operativo.

### Configurar las máquinas virtuales

#### Debian

Conéctese al panel del sistema (o *shell*) de su máquina virtual. Una vez conectado, abra el archivo de configuración de red de la máquina virtual, situado en `/etc/network/interfaces`.
Modifique el archivo para que refleje la configuración que se muestra a continuación. No olvide sustituir las variables por sus propios valores:

- Distribuciones antiguas:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up route add GATEWAY_IP dev eth0
    post-up route add default gw GATEWAY_IP
    pre-down route del GATEWAY_IP dev eth0
    pre-down route del default gw GATEWAY_IP
```

- Distribuciones recientes:

```console
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address ADDITIONAL_IP
    netmask 255.255.255.255
    broadcast ADDITIONAL_IP
    post-up ip route add GATEWAY_IP dev eth0
    post-up ip route add default via GATEWAY_IP
    pre-down ip route del GATEWAY_IP dev eth0
    pre-down ip route del default via GATEWAY_IP
```

Si su sistema utiliza nombres de interfaz de red predecibles, también puede `reemplazar "eth0`". Para encontrar los nombres de la interfaz de red, utilice el siguiente comando:

```bash
ls /sys/class/net
```

Guarde y cierre el archivo y reinicie la máquina virtual.

#### Sistemas operativos Red Hat basados en Red Hat (CentOS 6, Scientific Linux, ClearOS...)

Abra un terminal en su máquina virtual. Una vez conectado, abra el archivo de configuración de red de la máquina virtual. que se encuentra en `/etc/network/interfaces`. Modifique el archivo para que refleje la configuración que se muestra a continuación. No olvide sustituir las variables por sus propios valores:

```console
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Ahora guarde y cierre el archivo.

A continuación, abra el archivo de enrutado de la máquina virtual. Este se encuentra en `/etc/sysconfig/network-scripts/route-eth0`. Modifique el archivo para que refleje la configuración que se muestra a continuación. No olvide sustituir las variables por sus propios valores:

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Guarde y cierre el archivo y reinicie la máquina virtual.

#### CentOS 7

> [!primary]
> 
> En CentOS 7, el nombre de la tarjeta de red varía en función de las opciones de instalación. Compruebe el nombre del adaptador y utilícelo para configurar su máquina virtual. Puede encontrar los nombres de la interfaz de red con el comando `ls /sys/class/net`.
> 

Abra un terminal en su máquina virtual. Una vez conectado, abra el archivo de configuración de red de la máquina virtual, que se encuentra en `/etc/sysconfig/network-scripts/ifcfg-(nombre de la interfaz)`. Modifique el archivo para que refleje la configuración que se muestra a continuación. No olvide sustituir las variables por sus propios valores:

```console
DEVICE=(interfaz-name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

Guarde y cierre el archivo.

Abra el archivo de enrutado de la máquina virtual, que se encuentra en `/etc/sysconfig/network-scripts/route-(nombre de la interfaz)`. Modifique el archivo para que refleje la configuración que se muestra a continuación. No olvide sustituir las variables por sus propios valores:

```console
GATEWAY_IP - 169.254.10.254 (nombre-interfaz)
NETWORK_GW_VM - 255.255.255.0 (inserte el nombre de la interfaz)
default GATEWAY_IP
```

Guarde y cierre el archivo.

A continuación, abra el archivo de enrutado de la máquina virtual. Puede consultarse en la página `/etc/sysconfig/network/resolv.conf`.

```console
nameserver 213.186.33.99
```

Una vez que haya guardado y cerrado el archivo, reinicie su red o su máquina virtual.

#### FreeBSD

Abra un terminal en su máquina virtual. Una vez conectado, abra el archivo de configuración de red de la máquina virtual situado en la carpeta `/etc/rc.conf`. Modifique el archivo para que refleje la configuración que se muestra a continuación. En este ejemplo, el nombre de la interfaz es "em0". Puede modificarlo si fuera necesario.

```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_route="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Guarde y cierre el archivo. A continuación, edite el archivo `/etc/resolv.conf`. Créelo si es necesario.

```console
nameserver 213.186.33.99
```

Guarde y cierre el archivo y reinicie la máquina virtual.

#### Ubuntu 18.04

En primer lugar, conéctese a su máquina virtual por SSH y abra el archivo de configuración de red situado en `/etc/netplan/` utilizando el siguiente comando. A efectos de demostración, nuestro archivo se denomina "50-cloud-init.yaml".

```bash
# nano /etc/netplan/50-cloud-init.yaml
```

Una vez abierto el archivo, cambie el archivo con el siguiente código:

```yaml
network:
    ethernets:
        (nombre-interfaz):
            addresses:
                - ADDITIONAL_IP/32
            nameservers:
                addresses:
                    - 213.186.33.99
                search: []
            optional: true
            carreteras:
                - to: 0.0.0.0/0
                  a través de: GATEWAY_IP
                  on-link: true
    Version : 2
```

Una vez realizados los cambios, guarde y cierre el archivo y ejecute el siguiente comando:

```bash
# netplan try
Warning: Stopping systemd-networkd.service, but it can still be activated by:
  systemd-networkd.socket
¿Do you want to keep these settings?

Press ENTER before the timeout to acept the new configuration

Changes will revert in 120 seconds
Configuración aceptada.
```

#### Windows Server 2012/Hyper-V

Antes de configurar la máquina virtual, deberá crear un conmutador virtual.

Desde la línea de comandos de su servidor dedicado, ejecute `IPconfig/ALL`{.action} y, seguidamente, anote el nombre de la tarjeta de red que contiene la dirección IP principal del servidor.

En el panel de configuración Hyper-V, cree un nuevo conmutador virtual y establezca el tipo de conexión en `External`{.action}.

Seleccione el adaptador con la dirección IP del servidor y marque `Autorizar al sistema operativo a compartir esta tarjeta de red`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
>Este paso solo es necesario una vez para un servidor Hyper-V. Para todas las máquinas virtuales, es necesario un conmutador virtual para conectar las tarjetas de red virtual de la máquina virtual a la tarjeta física del servidor.
> 

A continuación, seleccione la máquina virtual a la que quiere añadir la Additional IP. Utilice el panel de configuración Hyper-V para modificar los parámetros de la máquina virtual y cierre el panel.

Despliegue la tarjeta de red y haga clic en `Advanced Feature`{.action}, establezca la dirección MAC en `Static`{.action} e introduzca la dirección MAC virtual para la dirección Additional IP. Una vez que haya introducido estos parámetros, pulse `Aceptar`{.action} para aplicar los cambios.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

A continuación, inicie la máquina virtual y conéctese como administrador y acceda a `Panel`{.action} de control y a `Network and Sharing Center`{.action}. Haga clic en el enlace `Connections: Ethernet`{.action} y haga clic en el botón `Propiedades`{.action} para ver las propiedades Ethernet.

Seleccione el protocolo de `internet versión 4 (TCP/IPv4)`{.action} y haga clic en el botón `Propiedades`{.action} para ver las propiedades IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

En la ventana Propiedades de la IPv4, seleccione `Use the following IP address`{.action}. Introduzca la dirección Additional IP en el campo de direcciones IP e introduzca "255.255.255.255" en la máscara de subred.

A continuación, introduzca la dirección IP de la pasarela del servidor en la pasarela por defecto (por ejemplo, la IP del servidor termina en 254) e introduzca "213.186.33.99" en el campo `Preferred DNS Server`{.action}.

Haga clic en `Aceptar`{.action} e ignore el mensaje de aviso relativo a la dirección IP de la pasarela y a la dirección IP asignada que no estén en la misma subred.

Por último, reinicie el servidor. La máquina virtual debe conectarse a internet con la dirección Additional IP.

![networkbridging](images/network-bridging-windows-2012-4.jpg){.thumbnail}

#### Resolución de fallos

Si no consigue establecer una conexión entre su máquina virtual y la red pública y si tiene dudas sobre la red, reinicie el servidor en modo de rescate y configure la interfaz de red pasarela directamente en el host.

Para ello, una vez que haya reiniciado el servidor en modo de rescate, introduzca los siguientes comandos:

```bash
ip link add name test-bridge link eth0 type macvlan
ip link set dev test-bridge address MAC_ADDRESS
ip link set test-bridge up
ip addr add ADDITIONAL_IP/32 dev test-bridge
```

Sustituya "MAC_ADDRESS" por la dirección MAC virtual generada en el panel de configuración y "ADDITIONAL_IP" por la Additional IP real.

A continuación, solo tiene que hacer ping a su Additional IP desde el exterior. Si funciona, probablemente significa que hay un error de configuración en la máquina virtual o en el host que impide que la Additional IP funcione en modo normal. Si, por el contrario, la IP todavía no funciona, abra un tíquet al equipo de soporte desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} para más información.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
