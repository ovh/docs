---
title: Modo Bridge IP
excerpt: El modo bridge IP se utiliza para configurar las maquinas virtuales. Es necesario realizar diversas modificaciones en las MV para que la configuracion de red este operativa.
updated: 2024-07-15
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

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
- Tener al menos una dirección [Additional IP](/links/bare-metal/bare-metal/ip/) conectada al servidor.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para más información, consulte nuestra [comparativa](/links/bare-metal/eco-compare).
>
> La presente guía no es aplicable a los servidores de las gamas [Scale](/links/bare-metal/bare-metal/scale/) y [High Grade](/links/bare-metal/bare-metal/high-grade/). Lo mismo ocurre con la gama de servidores Advance que disponen de las CPU AMD Epyc 4K y 8K lanzadas desde julio de 2024.
>
> En su lugar, consulte las siguientes guías: [Configurar la red en ESXi en las gamas High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/esxi-network-HG-Scale), [Configurar la red en Proxmox VE en las gamas High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/proxmox-network-HG-Scale) y [Configurar la red en Windows Server con Hyper-V en las gamas High Grade & SCALE](/pages/bare_metal_cloud/dedicated_servers/hyperv-network-HG-Scale).

## Procedimiento

Los pasos básicos son siempre los mismos, independientemente de los sistemas utilizados:

- creación de una dirección MAC virtual para una dirección IP de migración;
- Abonar la dirección MAC de la máquina virtual (VM) a esta nueva dirección.
- configurar **la dirección IP**, **la máscara de red**, **la pasarela** y **la ruta hacia la pasarela** dentro de la máquina virtual.

Para este ejemplo, utilizaremos los siguientes valores en nuestros ejemplos de código. Estas direcciones deberán sustituirse por sus propios valores:

- "SERVER_IP": la dirección IP principal del servidor;
- "ADDITIONAL_IP": su dirección Additional IP;
- "GATEWAY_IP": la dirección de su pasarela por defecto.

### Asignar una dirección MAC virtual

Conéctese al [área de cliente de OVHcloud](/links/manager), haga clic en el menú `Bare Metal Cloud`{.action} y seleccione la sección `Network`{.action}. Haga clic en `IP`{.action}.

Haga clic en la pestaña `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Haga clic en los `...`{.action} y, seguidamente, en `Añadir una dirección MAC virtual`{.action}.

![Añadir una MAC virtual (1)](images/addvmac.png){.thumbnail}

Seleccione "ovh" en la lista desplegable "Tipo", escriba un nombre en el campo "Nombre de la máquina virtual" y haga clic en `Aceptar`{.action}.

![Añadir una MAC virtual (2)](images/addvmac2.png){.thumbnail}

Tras unos segundos, aparecerá una dirección MAC virtual en la columna "MAC virtual" de la fila de dirección Additional IP. 
Esta dirección MAC virtual será necesaria cuando configure su máquina virtual en el host.

### Establecer la dirección de la puerta de enlace (gateway) <a name="determinegateway"></a>

Para configurar sus máquinas virtuales para el acceso a Internet, debe conocer la pasarela de su máquina host, es decir, su servidor dedicado. La dirección de la pasarela está formada por los tres primeros bytes de la dirección IP principal del servidor, el último byte es de 254. Por ejemplo, si la dirección IP principal del servidor es:

- 203.0.113.1

Su dirección de pasarela será:

- 203.0.113.**254**

También puede recuperar la dirección de la pasarela a través de [su área de cliente](#viacontrolpanel) o la [API de OVHcloud](#viaapi).

#### Desde el área de cliente <a name="viacontrolpanel"></a>

Conéctese al [Panel de configuración de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor en la sección `Servidores dedicados`{.action}.

La dirección de la pasarela IPv4 asignada a su servidor se muestra en la sección `Red` de la pestaña `Información general`{.action}. Una vez copiada, continúe aplicando la configuración.

![gateway](images/ipv4_information.png){.thumbnail}

#### A través de la API de OVHcloud <a name="viaapi"></a>

En la [página API de OVHcloud](https://eu.api.ovh.com/console/), haga clic en `Login`{.action}, situado en la esquina superior derecha. En la siguiente página, introduzca su ID de cliente de OVHcloud.

Ejecute la siguiente llamada a la API, indicando el nombre interno del servidor (por ejemplo: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

### Preparar el host

> [!primary]
>
Para todos los sistemas operativos y distribuciones, debe configurar su máquina virtual con la dirección MAC virtual creada en el [área de cliente de OVHcloud](/links/manager).
>

#### Proxmox

> [!warning]
>
> Las siguientes instrucciones se aplican a una máquina virtual creada anteriormente con un sistema operativo instalado. Si no ha creado ninguna MV, consulte las opciones en la página [Qemu/KVM Virtual Machine](https://pve.proxmox.com/wiki/Qemu/KVM_Virtual_Machines){.external} (EN) de Proxmox.
>

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

> [!warning]
>
> Las siguientes instrucciones se aplican a una máquina virtual creada anteriormente con un sistema operativo instalado. Si no ha creado ninguna MV, consulte la guía [Crear una máquina virtual en el cliente host de VMware](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.hostclient.doc/GUID-77AB6625-F968-4983-A230-A020C0A70326.html){.external} (EN) en la página VMware.
>

Una vez que haya creado la máquina virtual y esté libre de tensión, haga clic derecho sobre ella y seleccione `Cambiar configuración`{.action}.

![Menú contextual de MV](images/vmware_01.png){.thumbnail}

Explique `Network Adapter 1`{.action} y cambie el valor en el menú desplegable `Dirección MAC`{.action} en modo "Manual" e introduzca la dirección MAC VMware creada anteriormente.

![Modificar los parámetros](images/vmware_02.png){.thumbnail}

Ya puede iniciar su máquina virtual y pasar a las siguientes etapas, en función del sistema operativo.

### Configurar las máquinas virtuales <a name="configurationsteps"></a>

> [!warning]
>
> Tenga en cuenta que los siguientes ejemplos suponen que ha iniciado sesión como usuario con privilegios limitados, de ahí el uso de *sudo* delante de cada pedido. Si está conectado como *root*, no necesita hacerlo.
>

#### Debian

De forma predeterminada, el archivo de configuración de red de la máquina virtual se encuentra en `/etc/network/interfaces`.

Una vez conectado al shell de su máquina virtual, ejecute el siguiente comando para identificar el nombre de su interfaz:

```bash
ls /sys/class/net
```

A continuación, realice una copia del archivo de configuración para poder volver atrás en cualquier momento:

```bash
sudo cp /etc/network/interfaces /etc/network/interfaces.bak
```

Si comete algún error, puede volver atrás con los siguientes comandos:

```bash
sudo rm -f /etc/network/interfaces
sudo cp /etc/network/interfaces.bak /etc/network/interfaces
```

Modifique el fichero para que refleje la siguiente configuración, sustituyendo `INTERFACE_NAME`, `ADDITIONAL_IP` y `GATEWAY_IP` por sus propios valores.

```bash
sudo nano /etc/network/interfaces
```

```console
auto lo
iface lo inet loopback

# The primary network interface
auto INTERFACE_NAME
iface INTERFACE_NAME inet static
address ADDITIONAL_IP
netmask 255.255.255.255
gateway GATEWAY_IP
```

**Ejemplo**

```console
auto lo
iface lo inet loopback

# The primary network interface
auto ens192
iface ens192 inet static
address 192.0.2.1
netmask 255.255.255.255
gateway 203.0.113.254
```

Guarde y cierre el archivo.<br>
A continuación, edite o cree el archivo `/etc/resolv.conf`:

```bash
sudo nano /etc/resolv.conf
```

Añada la siguiente línea:

```console
nameserver 213.186.33.99
```

Guarde y cierre el archivo.<br>
A continuación, deberá conectar su interfaz de red. Para ello, introduzca el siguiente comando (sustituya `ens192` por sus propios valores):

```bash
sudo ip link set ens192 up
```

Por último, reinicie el servicio de red con el siguiente comando:

```bash
sudo systemctl restart networking
```

Para comprobar que la máquina virtual está totalmente conectada a Internet, utilice el siguiente comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Si recibe una respuesta, significa que la Additional IP se ha configurado correctamente. En caso contrario, reinicie la máquina virtual e intente ping de nuevo.


#### Sistemas operativos Red Hat basados en Red Hat (CentOS, Rocky Linux 8, Alma Linux 8, etc.)

De forma predeterminada, el archivo de configuración de red de la máquina virtual se encuentra en `/etc/sysconfig/network-scripts/`. A modo de demostración, nuestro archivo se llama `ifcfg-eth0`:

Una vez conectado al shell de su máquina virtual, ejecute el siguiente comando para identificar el nombre de su interfaz:

```bash
ls /sys/class/net
```

A continuación, realice una copia del archivo de configuración para poder volver atrás en cualquier momento:

```bash
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

Si comete algún error, puede volver atrás con los siguientes comandos:

```bash
sudo rm -f etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0.bak etc/sysconfig/network-scripts/ifcfg-eth0
```

Modifique el fichero para que refleje la siguiente configuración, sustituya `ADDITIONAL_IP`, `GATEWAY_IP` y `MY:VI:RT:UA:LM:AC` por sus propios valores. Además, los parámetros «BOOTPROTO», «ONBOOT» y «DNS» deben ajustarse (o añadirse si faltan). No es necesario editar más líneas.

```bash
sudo vi /etc/sysconfig/network-scripts/ifcfg-eth0
```

```console
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=none
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=eth0
UUID=120ae2c6-4aa6-xxxx-xxxx-xxxxxxxxxx
DEVICE=eth0
ONBOOT=yes
NETMASK=255.255.255.255
IPADDR=ADDITIONAL_IP
GATEWAY=GATEWAY_IP
HWADDR=MY:VI:RT:UA:LM:AC
DNS=213.186.33.99
```

Guarde y cierre el archivo.<br>
A continuación, cree un nuevo archivo, `route-(interface_name)`, en el directorio `/etc/sysconfig/network-scripts/` y defina las siguientes rutas predeterminadas para la interfaz mediante la puerta de enlace definida en el [paso 2](#determinegateway).

En nuestro ejemplo, nuestro archivo se llama `route-eth0` (sustituya `eth0` por sus propios valores):

```bash
sudo vi /etc/sysconfig/network-scripts/route-eth0
```

Modifique el fichero para que refleje la siguiente configuración, sustituya `GATEWAY_IP` por su propio valor.

```console
GATEWAY_IP dev eth0
default via GATEWAY_IP dev eth0
```

Guarde y cierre el archivo.

Reinicie la red con el siguiente comando:

```bash
sudo systemctl restart network
```

Para comprobar que la máquina virtual está totalmente conectada a Internet, utilice el siguiente comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Si recibe una respuesta, significa que la Additional IP se ha configurado correctamente. En caso contrario, reinicie la máquina virtual e intente ping de nuevo.


#### Rocky Linux 9 y Alma Linux 9

En las versiones anteriores de Rocky Linux y Alma Linux, los perfiles de red se almacenaban en formato ifcfg en este directorio: `/etc/sysconfig/network-scripts/`. Sin embargo, el formato ifcfg está obsoleto y se ha sustituido por keyfiles. El archivo de configuración se encuentra ahora en el directorio: `/etc/NetworkManager/system-connections/`.

Una vez conectado al shell de su máquina virtual, ejecute el siguiente comando para identificar el nombre de su interfaz:

```bash
ls /sys/class/net
```

A continuación, realice una copia del archivo de configuración para poder volver atrás en cualquier momento.

Por ejemplo, nuestro archivo se llama `ens18-nmconnection`:

```bash
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection /etc/NetworkManager/system-connections/ens18-nmconnection.bak
```

Si comete algún error, puede volver atrás con los siguientes comandos:

```bash
sudo rm -f /etc/NetworkManager/system-connections/ens18-nmconnection
sudo cp /etc/NetworkManager/system-connections/ens18-nmconnection.bak /etc/NetworkManager/system-connections/ens18-nmconnection
```

Modifique el fichero para que refleje la siguiente configuración, sustituyendo `ADDITIONAL_IP` y `GATEWAY_IP` por sus propios valores. En este ejemplo, el nombre de la interfaz es `ens18`. Reemplace este valor si no es aplicable.

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
gateway=GATEWAY_IP
```

Guarde y cierre el archivo.<br>
Reinicie la interfaz de red con el siguiente comando:

Para comprobar que la máquina virtual está totalmente conectada a Internet, utilice el siguiente comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Si recibe una respuesta, significa que la Additional IP se ha configurado correctamente. En caso contrario, reinicie la máquina virtual e intente ping de nuevo.

#### FreeBSD

Por defecto, el archivo de configuración de red de la máquina virtual se encuentra en `/etc/rc.conf`.

Una vez conectado al shell de su máquina virtual, ejecute el siguiente comando para identificar el nombre de su interfaz:

```bash
ls /sys/class/net
```

A continuación, realice una copia del archivo de configuración para poder volver atrás en cualquier momento:

```bash
sudo cp /etc/rc.conf /etc/rc.conf.bak
```

Si comete algún error, puede volver atrás con los siguientes comandos:

```bash
sudo rm -f /etc/rc.conf
sudo cp /etc/rc.conf.bak /etc/rc.conf
```

Modifique el fichero para que refleje la siguiente configuración, sustituyendo `ADDITIONAL_IP` y `GATEWAY_IP` por sus propios valores. En este ejemplo, el nombre de la interfaz es `em0`. Reemplace este valor si no es aplicable.


```console
ifconfig_em0="inet ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP"
static_routes="net1 net2"
route_net1="-net GATEWAY_IP/32 -interface em0"
route_net2="default GATEWAY_IP"
```

Guarde y cierre el archivo. A continuación, edite el archivo `/etc/resolv.conf`. Créelo si es necesario.

```console
nameserver 213.186.33.99
```

Guarde y cierre el archivo y reinicie la máquina virtual.

Para comprobar que la máquina virtual está totalmente conectada a Internet, utilice el siguiente comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Si recibe una respuesta, significa que la Additional IP se ha configurado correctamente. En caso contrario, reinicie la máquina virtual e intente ping de nuevo.

#### Ubuntu

De forma predeterminada, el archivo de configuración de red se encuentra en la carpeta `/etc/netplan/`.

En primer lugar, acceda a la consola para conectarse a su máquina virtual y ejecute el siguiente comando para identificar el nombre de su interfaz:

```bash
ip addr
```

A continuación, haga una copia del archivo de configuración para poder volver atrás en cualquier momento. A modo de demostración, nuestro archivo se llama `00-installer-config.yaml`:

```bash
sudo cp /etc/netplan/00-installer-config.yaml /etc/netplan/00-installer-config.yaml.bak
```

Si comete algún error, puede volver atrás con los siguientes comandos:

```bash
sudo rm -f /etc/netplan/00-installer-config.yaml
sudo cp /etc/netplan/00-installer-config.yaml.bak /etc/netplan/00-installer-config.yaml
```

A continuación, abra el archivo de configuración de red situado en `/etc/netplan/` con el siguiente comando:

```bash
sudo nano /etc/netplan/00-installer-config.yaml
```

Una vez abierto el fichero para su modificación, modifíquelo con el siguiente código, sustituyendo `INTERFACE-NAME`, `ADDITIONAL_IP` y `GATEWAY_IP` por sus propios valores.

```yaml
network:
  ethernets:
    INTERFACE-NAME:
      dhcp4: true
      addresses:
          - ADDITIONAL_IP/32
      nameservers:
          addresses:
              - 213.186.33.99   
      routes:
           - to: 0.0.0.0/0
             via: GATEWAY_IP
             on-link: true
  version: 2
```

**Ejemplo**

```yaml
network:
  ethernets:
    ens18:
      dhcp4: true
      addresses:
          - 192.0.2.1/32
      nameservers:
          addresses:
              - 213.186.33.99
      routes:
           - to: 0.0.0.0/0
             via: 203.0.113.254
             on-link: true
  version: 2
```

Guarde y cierre el archivo. Puede probar la configuración con el siguiente comando:

```bash
sudo netplan try
```

Si es correcta, aplíquela con el siguiente comando:

```bash
sudo netplan apply
```

Para comprobar que la máquina virtual está totalmente conectada a Internet, utilice el siguiente comando:

```bash
ping -c 4 example.com
PING example.com (93.184.215.14) 56(84) bytes of data.
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=1 ttl=55 time=29.3 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=2 ttl=55 time=24.9 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=3 ttl=55 time=30.8 ms
64 bytes from 93.184.215.14 (93.184.215.14): icmp_seq=4 ttl=55 time=27.0 ms

--- example.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3004ms
rtt min/avg/max/mdev = 24.925/28.028/30.840/2.254 ms
```

Si recibe una respuesta, significa que la Additional IP se ha configurado correctamente. En caso contrario, reinicie la máquina virtual e intente ping de nuevo.

#### Windows Server/Hyper-V

Antes de configurar la máquina virtual, deberá crear un conmutador virtual.

Desde la línea de comandos de su servidor dedicado, ejecute el siguiente comando y anote el nombre de la tarjeta de red que contiene la dirección IP principal del servidor:

```powershell
ipconfig /all
```

En el panel de configuración Hyper-V, cree un nuevo conmutador virtual y establezca el tipo de conexión en `External`{.action}.

Seleccione el adaptador con la dirección IP del servidor y marque `Autorizar al sistema operativo a compartir esta tarjeta de red`{.action}.

![networkbridging](images/network-bridging-windows-2012-1.jpg){.thumbnail}

> [!primary]
> 
> Este paso solo es necesario una vez para un servidor Hyper-V. Para todas las máquinas virtuales, es necesario un conmutador virtual para conectar las tarjetas de red virtual de la máquina virtual a la tarjeta física del servidor.
> 

A continuación, seleccione la máquina virtual a la que quiere añadir la Additional IP. Utilice el panel de configuración Hyper-V para modificar los parámetros de la máquina virtual y cierre el panel.

Despliegue la tarjeta de red y haga clic en `Advanced Feature`{.action}, establezca la dirección MAC en `Static`{.action} e introduzca la dirección MAC virtual para la dirección Additional IP. Una vez que haya introducido estos parámetros, pulse `OK`{.action} para aplicar los cambios.

![networkbridging](images/network-bridging-windows-2012-2.jpg){.thumbnail}

A continuación, inicie la máquina virtual y conéctese como administrador y acceda a `Control Panel`{.action} de control y a `Network and Sharing Center`{.action}. Haga clic en el enlace `Connections: Ethernet`{.action} y haga clic en el botón `Properties`{.action} para ver las propiedades Ethernet.

Seleccione el protocolo de `Internet Protocol Version 4 (TCP/IPv4)`{.action} y haga clic en el botón `Properties`{.action} para ver las propiedades IPv4.

![networkbridging](images/network-bridging-windows-2012-3.jpg){.thumbnail}

En la ventana Propiedades de la IPv4, seleccione `Use the following IP address`{.action}. Introduzca la dirección Additional IP en el campo de direcciones IP e introduzca "255.255.255.255" en la máscara de subred.

A continuación, introduzca la dirección IP de la pasarela del servidor en la pasarela por defecto (por ejemplo, la IP del servidor termina en 254) e introduzca "213.186.33.99" en el campo `Preferred DNS Server`{.action}.

Haga clic en `OK`{.action} e ignore el mensaje de aviso relativo a la dirección IP de la pasarela y a la dirección IP asignada que no estén en la misma subred.

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

A continuación, solo tiene que hacer ping a su Additional IP desde el exterior. Si funciona, probablemente significa que hay un error de configuración en la máquina virtual o en el host que impide que la Additional IP funcione en modo normal. Si, por el contrario, la IP sigue sin funcionar, abra un tíquet de asistencia a través del [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_cases_requests).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.