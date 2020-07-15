---
title: Modo Bridge IP
slug: network-bridging
excerpt: El modo bridge IP se utiliza para configurar las maquinas virtuales. Es necesario realizar diversas modificaciones en las MV para que la configuracion de red este operativa.
section: Red e IP
---


## Requisitos
Para seguir todos los pasos de esta guía es necesario:

- tener un servidor dedicado con un hipervisor instalado (p.ej.: [VMware ESXi](http://www.vmware.com/products/esxi-and-esx/overview.html){.external}, Citrix Xen Server, Proxmox, etc.);
- haber asignado una MAC virtual a su IP Failover desde el área de cliente;
- tener conocimientos de [SSH](https://es.wikipedia.org/wiki/Secure_Shell){.external}.

Los ejemplos de configuración contienen palabras clave en mayúsculas, que deberá sustituir por el valor correspondiente. Por ejemplo, es necesario sustituir IP_FAIL_OVER por su propia IP Failover.

La IP principal de su servidor

La IP Failover que quiera configurar

La IP de su servidor, sustituyendo el último octeto por 254.


## Procedimiento

### 1. Determinar la pasarela
Para configurar una máquina virtual, debe conocer la pasarela de su servidor (*nsxxx.ovh.net*; *ksxxx.ovh.net*; *nsxxxxxxx.ip-xxxxxx.eu*...). Para ello, sustituya el último grupo de cifras de su IP principal por .254.

Para saber cuál es esa IP, puede consultar el emial de instalación del servidor o la sección IP del [área de cliente](https://ca.ovh.com/manager/){.external} de OVHcloud.


### 2. Configuracion


> [!warning]
>
> La pasarela que debe añadir a la máquina virtual no debe ser la IP del servidor ni la IP Failover, sino únicamente la IP proporcionada para el servidor dedicado. Nunca utilice este comando:
> ```sh
> route add default gw dev eth0
> ```
> El comando anterior provocaría el corte de la IP para la máquina virtual. Para determinar la pasarela que hay que utilizar:
> - la IP Failover es: YYY.YYY.YYY.YYY
> - la IP principal del servidor es: XXX.XXX.XXX.XXX
> - la IP de la pasarela es la IP principal del servidor, pero terminada en .254
> - así que la IP de la pasarela para la máquina virtual sería: XXX.XXX.XXX.254
> 
> En adelante, vamos a llamar a esta pasarela GATEWAY_VM.
> 


#### Debian y derivados (Ubuntu, CrunchBang, SteamOS...)
**Archivo: /etc/network/interfaces**


```bash
auto lo eth0
iface lo inet loopback
iface eth0 inet static
    address IP.FAIL.OVER
    netmask 255.255.255.255
    broadcast IP.FAIL.OVER
    post-up route add GATEWAY_VM dev eth0
    post-up route add default gw GATEWAY_VM
    pre-down route del GATEWAY_VM dev eth0
    pre-down route del default gw GATEWAY_VM
```

**Archivo: /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVHcloud DNS Server
```



> [!primary]
>
> En Debian 6, la configuración del servidor DNS se realiza directamente en el archivo /etc/network/interfaces, donde debe aparecer esta sección:
> 
> ```bash
> # dns-* options are implemented by the resolvconf package, if installed (default)
> dns-nameservers 213.186.33.99 # OVHcloud DNS Server
> dns-search ovh.net # For faster hosts resolution on the OVHcloud network
> ```
>
No dude en consultar esta [guía de Debian](https://wiki.debian.org/fr/Bind9){.external} para una configuración más avanzada.


#### Redhat y derivados (CentOS 6, Scientific Linux, ClearOS...)
**Archivo: /etc/sysconfig/network-scripts/ifcfg-eth0**


```bash
DEVICE=eth0
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=IP.FAIL.OVER
GATEWAY=GATEWAY_VM
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```

**Archivo: /etc/sysconfig/network-scripts/route-eth0**


```bash
GATEWAY_VM dev eth0
default via GATEWAY_VM dev eth0
```

**Archivo: /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVHcloud DNS Server
```


#### CentOS 7


> [!warning]
>
> En CentOS 7, el nombre de la interfaz de red se elige automáticamente durante la instalación; es necesario comprobar previamente el nombre de la interfaz para utilizarlo en la configuración de la máquina virtual. Para consultar el nombre de la interfaz de red, utilice el comando ipaddr.
> 

**Archivo: /etc/sysconfig/network-scripts/ifcfg-(inserte aquí el nombre de la interfaz)**


```bash
DEVICE=(insert interface Name)
BOOTPROTO=none
ONBOOT=yes
USERCTL=no
IPV6INIT=no
PEERDNS=yes
TYPE=Ethernet
NETMASK=255.255.255.255
IPADDR=IP.FAIL.OVER
GATEWAY=GATEWAY_VM
ARP=yes
HWADDR=MY:VI:RT:UA:LM:AC
```



> [!primary]
>
> Si el archivo route-(inserte aquí el nombre de la interfaz) no existe, deberá crearlo. En CentOS 7, NETWORK_GW_VM es la IP principal de su servidor, sustituyendo el último octeto por 0.
> 

**Archivo: /etc/sysconfig/network-scripts/route-(inserte aquí el nombre de la interfaz)**


```bash
GATEWAY_VM - 255.255.255.255 (inserte aquí el nombre de la interfaz)
NETWORK_GW_VM - 255.255.255.0 (inserte aquí el nombre de la interfaz)
default GATEWAY_VM
```

**Archivo: /etc/resolv.conf**


```bash
nameserver 213.186.33.99
```


#### OpenSUSE


> [!primary]
>
> En OpenSUSE, NETWORK_GW_VM es la IP principal de su servidor, sustituyendo el último octeto por 0.
> 

Si el archivo ifcfg-ens32 no existe, será necesario crearlo.

**Archivo: /etc/sysconfig/network/ifcfg-ens32**


```bash
DEVICE=ens32
BOOTPROTO=static
ONBOOT=yes
ARP=yes
USERCTL=no
IPV6INIT=no
TYPE=Ethernet
STARTMODE=auto
IPADDR=IP.FAIL.OVER
NETMASK=255.255.255.255
GATEWAY=GATEWAY_VM
HWADDR=MY:VI:RT:UA:LM:AC
```

Si el archivo ifroute-ens32 no existe, será necesario crearlo.

**Archivo: /etc/sysconfig/network/ifroute-ens32**


```bash
GATEWAY_VM - 255.255.255.255 ens32
NETWORK_GW_VM - 255.255.255.0 ens32
default GATEWAY_VM
```

En /etc/sysconfig/network/config, debería tener:


```bash
NETCONFIG_DNS_STATIC_SERVERS=”213.186.33.99”
```


#### FreeBSD 8.0
**Archivo: /etc/rc.conf**


```bash
ifconfig_em0="inet IP.FAIL.OVER netmask 255.255.255.255 broadcast IP.FAIL.OVER"
static_routes="net1 net2"
route_net1="-net GATEWAY_VM/32 IP.FAIL.OVER"
route_net2="default GATEWAY_VM"
```

**Archivo: /etc/resolv.conf**


```bash
nameserver 213.186.33.99 # OVHcloud DNS Server
```


#### Windows Server 2012 / Hyper-V
En primer lugar, debe crear un switch virtual.

1. En línea de comandos, en el servidor host **IPconfig /ALL**.
1. Anote el nombre del adaptador de red en el que esté configurada la dirección IP principal del servidor.
1. En Hyper-V, cree un nuevo switch virtual.
- Tipo de conexión: External.
- Seleccione el adaptador que tenga la IP del servidor.
- Marque `Permitir que el SO de gestión comparta este adaptador de red`{.action}.


![Virtual Switch Manager](images/network-bridging-windows-2012-1.jpg){.thumbnail}



> [!primary]
>
> Solo es necesario realizar esta acción una vez para un servidor Hyper-V. Para todas las MV, es necesario un switch virtual para conectar los adaptadores de red virtuales al adaptador físico del servidor.
> 

A continuación, seleccione la MV en la que quiera configurar la IP Failover. Utilice Hyper-V para cambiar la configuración de la VM (es necesario apagarla primero).

1. Abra el adaptador de red y haga clic en `Funcionalidades avanzadas`{.action}.
1. Cambie la dirección a Static, e introduzca la MAC virtual de la dirección IP Failover.
1. Haga clic en `OK`{.action} para aplicar los cambios.

![Hyper-V Manager](images/network-bridging-windows-2012-2.jpg){.thumbnail}

Inicie la máquina virtual y autentíquese como administrador.

1. `Panel de control`{.action} > `Red y recursos compartidos`{.action}.
1. Haga clic en `Conexiones: Ethernet Link`{.action}.
1. Haga clci en el botón `Properties`{.action} para ver las propiedades de Ethernet.
1. Seleccione `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
1. Haga clic en el botón `Propiedades`{.action} para ver las propiedades IPv4.

![Ethernet Properties](images/network-bridging-windows-2012-3.jpg){.thumbnail}

En la ventana de propiedades IPv4:

1. Seleccione `Utilice la siguiente dirección`{.action}.
1. Introduzca la dirección IP Failover en **Dirección IP**.
1. En **SubnetMask**, introduzca 255.255.255.255.
1. Introduzca la dirección IP de la pasarela de su servidor en **Puerta de enlace predeterminada** (la dirección IP de su servidor terminando en **.254**; la GATEWAY_VM).
1. Introduzca 213.186.33.99 en **Preferred DNS Server**.
1. Haga clic en `OK`{.action} e ignore la advertencia sobre la IP de la pasarela y la IP principal que indica que no están en la misma subred.

![Ethernet Properties](images/network-bridging-windows-2012-4.jpg){.thumbnail}

Por último, reinicie el servidor. Las máquinas virtuales deberían conectarse a internet a través de la IP Failover.


#### Otras distribuciones
Esta es la configuración de red que deberá introducir en la máquina virtual:

- **ip**: IP_FAIL_OVER
- **netmask**: 255.255.255.255

A continuación, deberá añadir la pasarela a la máquina virtual:

```sh
route add GATEWAY_VM dev eth0
route add default gw GATEWAY_VM
```
Después será necesario configurar el DNS del servidor para que pueda hacer la resolución del dominio. La IP del servidor DNS de OVHcloud es 213.186.33.99.
