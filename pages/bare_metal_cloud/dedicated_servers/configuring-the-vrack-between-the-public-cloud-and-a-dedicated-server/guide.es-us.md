---
title: "Configurar el vRack entre Public Cloud y un servidor dedicado"
excerpt: "Establezca una red privada entre una instancia de Public Cloud de OVHcloud y un servidor dedicado a través del vRack."
updated: 2026-02-20
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

El [vRack](/links/network/vrack) de OVHcloud es una red privada que permite configurar el direccionamiento entre dos o más [servidores dedicados](/links/bare-metal/bare-metal) de OVHcloud. También permite añadir [instancias de Public Cloud](/links/public-cloud/compute) para crear una infraestructura de recursos físicos y virtuales.

**Esta guía explica cómo configurar la red privada entre una [instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps) y un [servidor dedicado](/links/bare-metal/bare-metal).**

## Requisitos

* Haber creado una [instancia de Public Cloud de OVHcloud.](/pages/public_cloud/compute/public-cloud-first-steps)
* Haber activado un servicio [vRack.](/links/network/vrack)
* Tener un [servidor dedicado](/links/bare-metal/bare-metal) compatible con el vRack.
* Un rango de direcciones IP privadas que elija.
* Ambos servicios deben estar en el mismo vRack.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public Cloud Projects](/links/control-panel/publiccloud-projects)
- **Ruta de navegación:** `Public Cloud`{.action} > Seleccione su proyecto

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para más información, consulte nuestra [comparativa](/links/bare-metal/eco-compare).

## Procedimiento

### Añadir un proyecto de Public Cloud al vRack

> [!primary]
> Esto no se aplica a los proyectos recién creados, que se entregan automáticamente con un vRack. Una vez creado el proyecto, puede ver el vRack abriendo el menú `Network`{.action} en la barra lateral izquierda y seleccionando `Red privada vRack`{.action}.
>
> También puede retirar el proyecto del vRack que le haya sido atribuido y asociarlo a otro vRack si lo desea, especialmente si ya tenía un vRack existente con su servidor o servidores dedicados.

Seleccione el proyecto que quiera añadir al vRack y haga clic en el botón `Añadir`{.action}.

![Añadir un proyecto al vRack](images/addprojectvrack.png){.thumbnail}

### Integrar una instancia en el vRack

> [!primary]
> Esta guía se centra en una configuración sencilla de vRack entre una instancia de Public Cloud y un servidor dedicado.
> Si ha configurado sus instancias con un modo de implementación como zonas locales o multi AZ, tenga en cuenta que las zonas locales no admiten el vRack por ahora.
> Además, el **vRack** es una red L2 global y no admite resiliencia a nivel de "zona" o "región".
>

Pueden darse dos situaciones:

- La instancia aún no existe.
- La instancia ya existe y debe añadirla al vRack.

#### Caso de una nueva instancia

Si necesita ayuda, consulte la guía [Crear una instancia de Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps). Al crear una instancia, podrá especificar, en el paso 5, una red privada en la que integrar su instancia.

#### Caso de una instancia ya existente

Una vez que su proyecto esté vinculado a un vRack, puede crear una red privada y asociarla a instancias existentes.

Acceda a la pestaña `Public Cloud`{.action} y haga clic en `Private Network`{.action} en el menú de la izquierda, bajo **Network**.

Haga clic en el botón `Añadir una red privada`{.action}.

![create private network](images/vrack2022-03.png){.thumbnail}

En la siguiente página, puede personalizar varias opciones de configuración.

Seleccione la región en la que desea colocar la red privada. Asegúrese de que se encuentra en la misma región que la instancia existente.

![select region](images/vrack2024-01.png){.thumbnail}

Para que los dos servicios puedan comunicarse entre sí, deben estar etiquetados con el mismo **VLAN ID**.

Puede configurarlo en el paso siguiente.

![configure network](images/configure_private_network.png){.thumbnail}

Este paso ofrece varias opciones de configuración. A efectos de esta guía, nos centraremos en los elementos necesarios. Haga clic en las fichas siguientes para ver los detalles:

> [!tabs]
> **Nombre de la red privada**
>>
>> Introduzca un nombre para la red privada.<br>
>>
> **Opciones de red de la capa 2 (L2)**
>>
>> Por defecto, el VLAN ID de los servidores dedicados es **0**. Para utilizar este VLAN ID para una instancia, será necesario marcar la red privada con la VLAN **0**.
>> Marque la casilla **Set a VLAN ID** y seleccione VLAN ID **0**.
>>
>> Si no marca la casilla, el sistema asignará un número de identificador de VLAN aleatorio a su red privada.
>>
> **Uso de una VLAN ID diferente**
>>
>> Si no va a utilizar el VLAN ID **0**, puede seleccionar un ID diferente entre 1 y 4000. Se aplican las siguientes reglas:
>>
>> - Al configurar el vRack en el servidor dedicado, esta VLAN ID debe incluirse en el archivo de configuración de red.
>>
>> > [!primary]
>> > Es posible utilizar el mismo VLAN ID para varias redes privadas; sin embargo, esto requiere una gestión cuidadosa de las direcciones IP privadas. El uso de la asignación de grupos DHCP sin solapamiento puede ser una forma de solucionar este problema.
>> >
>>
>> > [!primary]
>> > A diferencia de los servidores dedicados (cuando se utiliza un VLAN ID distinto de 0), no es necesario incluir directamente el VLAN ID en el archivo de configuración de red de la instancia Public Cloud una vez configurado en el área de cliente de OVHcloud.
>> >
>>
>> Ejemplo: si su red privada de instancia está «etiquetada» con la VLAN 2, esta VLAN ID debe incluirse únicamente en la configuración de red del servidor dedicado. Para más información, consulte la siguiente guía: [Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).<br>
>>
> **Opciones de distribución de direcciones DHCP**
>>
>> Puede conservar el rango IP privado por defecto o utilizar otro diferente.
>>
>> Seleccione «Activar DHCP para esta red privada» para asignar y configurar automáticamente la dirección IP privada en la instancia. A continuación, solo tendrá que configurar las interfaces de red del servidor dedicado.
>>
>> Cuando esta opción no está seleccionada, se requiere una configuración manual tanto en la instancia de Public Cloud como en el servidor dedicado.
>>
>> **Opciones de puerta de enlace de red**
>>
>> Asegúrese de que ambas opciones estén desmarcadas.
>>

Una vez completada la configuración, haga clic en `Configure su red privada`{.action}. Esta operación puede tardar unos minutos.

En el panel de control de la instancia correspondiente, localice la sección «Redes» y haga clic en el botón `...`{.action} junto a «Redes privadas». Seleccione `Asociar una red`{.action}.

![attach network](images/vrack2021-01.png){.thumbnail}

En la nueva ventana, seleccione las redes privadas que quiera asociar a su instancia y haga clic en `Asociar`{.action}.

![attach network](images/attach_network.png){.thumbnail}

### Configurar las interfaces de red

> [!primary]
> Si ha elegido la opción de configurar la red privada en su instancia mediante DHCP, solo tiene que configurar las interfaces de red en el servidor dedicado.
>

#### Configuración al utilizar el VLAN ID 0 por defecto

Antes de comenzar, conéctese a su servidor por SSH y liste las interfaces de red con el siguiente comando:

```bash
ip a
```

Para los servidores dedicados, localice la línea que comienza con ```link ether``` y verifique que esta interfaz coincida con la interfaz **Privada** listada en la pestaña `Interfaces de red`{.action} del panel de control de su servidor.

Use este nombre de interfaz para reemplazar `NETWORK_INTERFACE` en las siguientes configuraciones (ejemplo: `eth1`).

A modo de ejemplo, utilizaremos el rango de direcciones IP `192.168.0.0/16` (**Máscara de subred**: `255.255.0.0`).

> [!tabs]
> **Debian 11**
>>
>> Con un editor de texto de su elección, abra el archivo de configuración de red ubicado en `/etc/network/interfaces.d` para editarlo. Aquí el archivo se llama `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Añada las siguientes líneas a la configuración existente, reemplazando `NETWORK_INTERFACE`, `IP_ADDRESS` y `NETMASK` con sus propios valores:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>>```
>>
>> **Ejemplo:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Guarde los cambios en el archivo de configuración y cierre el editor.
>>
>> Reinicie el servicio de red para aplicar la configuración:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu y Debian 12+**
>>
>> Con un editor de texto de su elección, abra el archivo de configuración de red ubicado en `/etc/netplan/` para editarlo. Aquí el archivo se llama `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Añada las siguientes líneas a la configuración existente después de la línea `version: 2`. Reemplace `NETWORK_INTERFACE` e `IP_ADDRESS/PREFIX` con sus propios valores.
>>
>> ```yaml
>>    ethernets:
>>        NETWORK_INTERFACE:
>>            dhcp4: false
>>            addresses:
>>              - IP_ADDRESS/PREFIX
>> ```
>>
>> **Ejemplo:**
>>
>> ![netplan config](images/netplan_configuration.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Es importante respetar la alineación de cada elemento en los archivos `yaml` como se representa en el ejemplo anterior. No utilice la tecla de tabulación para crear el espaciado. Solo se necesita la tecla de espacio.
>> >
>>
>> Guarde los cambios en el archivo de configuración y cierre el editor.
>>
>> Aplique la configuración:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
> **AlmaLinux y Rocky Linux (8/9)**
>>
>> Una vez que haya identificado su interfaz de red privada, utilice el siguiente comando para crear un archivo de configuración de red.
>>
>> Reemplace `NETWORK_INTERFACE` con el nombre de su interfaz privada.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Por ejemplo, si la interfaz privada se llama `eth1`, tenemos lo siguiente:
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> A continuación, utilice un editor de texto de su elección para editar este archivo.
>>
>> ```bash
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> Añada estas líneas, reemplazando `NETWORK_INTERFACE`, `IP_ADDRESS` y `NETMASK` con sus propios valores:
>>
>> ```console
>> DEVICE=NETWORK_INTERFACE
>> BOOTPROTO=static
>> IPADDR=IP_ADDRESS
>> NETMASK=NETMASK
>> ONBOOT=yes
>> TYPE=Ethernet
>> ```
>>
>> **Ejemplo:**
>>
>> ![centos config](images/centos_alma_configuration.png){.thumbnail}
>>
>> Guarde los cambios en el archivo de configuración y cierre el editor.
>>
>> Reinicie el servicio de red para aplicar los cambios:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux y Rocky Linux (10)**
>>
>> Una vez que haya identificado el nombre de su interfaz privada, ejecute el siguiente comando para verificar que esté conectada. En nuestro ejemplo, nuestra interfaz se llama `eno2`:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet  disconnected            --
>> ```
>>
>> Si el `STATE` del `DEVICE` aparece como `disconnected`, debe conectarse antes de configurar la IP.
>>
>> Al añadir una conexión **ethernet**, debemos crear un perfil de configuración que luego asignamos a un dispositivo.
>>
>> Ejecute el siguiente comando, reemplazando `INTERFACE_NAME` y `CONNECTION_NAME` con sus propios valores.
>>
>> En nuestro ejemplo, hemos nombrado nuestro perfil de configuración `private-interface`.
>>
>> ```bash
>> nmcli connection add type ethernet con-name CONNECTION_NAME ifname INTERFACE_NAME
>> ```
>>
>> **Ejemplo:**
>>
>> ```bash
>> nmcli connection add type ethernet con-name private-interface ifname eno2
>> ```
>>
>> Verifique que la interfaz se haya conectado correctamente:
>>
>> ```bash
>> $ nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> eno2             ethernet  connected               private-interface
>> lo               loopback  connected (externally)  lo
>> ```
>>
>> Una vez hecho esto, se creará un nuevo archivo de configuración llamado *xxxxxxxxxx.nmconnection* en la carpeta `/etc/NetworkManager/system-connections`.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> A continuación, puede editar este archivo utilizando el gestor `nmcli`, reemplazando `IP_ADDRESS`, `PREFIX` y `CONNECTION_NAME` con sus propios valores.
>>
>> - Añada su IP:
>>
>> ```bash
>> nmcli connection modify CONNECTION_NAME IPv4.address IP_ADDRESS/PREFIX
>> ```
>>
>> **Ejemplo:**
>>
>> ```bash
>> nmcli connection modify private-interface IPv4.address 192.168.0.1/16
>> ```
>>
>> - Cambie la configuración de **auto** a **manual**:
>>
>> ```bash
>> sudo nmcli connection modify CONNECTION_NAME IPv4.method manual
>> ```
>>
>> **Ejemplo:**
>>
>> ```bash
>> sudo nmcli connection modify private-interface IPv4.method manual
>> ```
>>
>> - Haga la configuración persistente:
>>
>> ```bash
>> sudo nmcli con mod CONNECTION_NAME connection.autoconnect true
>> ```
>>
>> **Ejemplo:**
>>
>> ```bash
>> sudo nmcli con mod private-interface connection.autoconnect true
>> ```
>>
>> Reinicie su red con el siguiente comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Configuración de Windows**
>>
>> Conéctese a su servidor Windows a través del escritorio remoto y acceda al **Panel de control**.
>>
>> ![Windows Control Panel](images/windows_control_panel.png){.thumbnail}
>>
>> Haga clic en `Redes e Internet`{.action}.
>>
>> ![Network and Internet](images/windows_network_and_internet.png){.thumbnail}
>>
>> Abra `Centro de redes y recursos compartidos`{.action}.
>>
>> ![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}
>>
>> Haga clic en `Cambiar configuración del adaptador`{.action}.
>>
>> ![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}
>>
>> Haga clic derecho en la interfaz de red secundaria y, a continuación, haga clic en `Propiedades`{.action}.
>>
>> Tenga en cuenta que en nuestro ejemplo `Ethernet 2` es la interfaz utilizada para el vRack. Sin embargo, es posible que la NIC del vRack sea una interfaz diferente en su configuración. La correcta para seleccionar será la interfaz que no tenga la dirección IP principal del servidor o que tenga una IP autoasignada.
>>
>> ![Windows Properties](images/windows_properties_button.png){.thumbnail}
>>
>> Haga doble clic en `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Internet Protocol Version 4](images/windows_ipv4.png){.thumbnail}
>>
>> Haga clic en `Usar la siguiente dirección IP`{.action}. Introduzca cualquier **dirección IP** de su rango privado y la **Máscara de subred** apropiada (`255.255.0.0` en este ejemplo) en los campos correspondientes.
>>
>> ![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}
>>
>> Haga clic en `Aceptar`{.action} para guardar los cambios y reinicie el servidor para aplicarlos.

/// details | **Configuración al utilizar un VLAN ID diferente**

En este ejemplo, utilizaremos **10** como VLAN ID (etiqueta) y **192.168.0.0/16** como rango de direcciones IP privadas.

> [!tabs]
> **Debian 11**
>>
>> La configuración siguiente se basa en Debian 11 (Bullseye).
>>
>> - Antes de comenzar, establezca una conexión SSH a su servidor y ejecute los siguientes comandos para instalar el paquete VLAN:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - A continuación, cargue el módulo del kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar que el módulo esté cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Ejecute el siguiente comando para asegurarse de que los módulos se carguen permanentemente al arrancar:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Obtenga los nombres de las interfaces e identifique la interfaz privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> En este ejemplo, la interfaz de red privada se identifica como `eno2`.
>>
>> - A continuación, cree una subinterfaz VLAN para la interfaz de red (configuración no persistente) y asígnele (etiquete) el VLAN ID.
>>
>> Reemplace los valores con los suyos.
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> - A continuación, asigne una dirección IP privada a la subinterfaz VLAN recién creada:
>>
>> ```sh
>> sudo ip addr add 192.168.0.14/16 dev eno2.10
>> ```
>>
>> - A continuación, active la interfaz privada y la subinterfaz VLAN:
>>
>> ```sh
>> sudo ip link set dev eno2 up
>> sudo ip link set dev eno2.10 up
>> ```
>>
>> - Para hacer la configuración persistente, añada las siguientes entradas al archivo de configuración:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> ```console
>> auto eno2.10
>> iface eno2.10 inet static
>>    address 192.168.0.14
>>    netmask 255.255.0.0
>>    broadcast 192.168.255.255
>>    vlan-raw-device eno2
>> ```
>>
>> - Resumen:
>>
>> ![config](images/config_debian.png){.thumbnail}
>>
>> - Reinicie la red para aplicar los cambios:
>>
>> ```sh
>> sudo systemctl restart networking
>> ```
>>
> **Ubuntu y Debian 12+**
>>
>> La configuración siguiente se basa en Ubuntu 24.04 (Noble Numbat).
>>
>> - Antes de comenzar, establezca una conexión SSH a su servidor y ejecute el siguiente comando para instalar el paquete VLAN:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> - A continuación, cargue el módulo del kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar que el módulo esté cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Ejecute el siguiente comando para asegurarse de que los módulos se carguen permanentemente al arrancar:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Cree o edite el archivo de configuración `cloud.cfg` para evitar cambios automáticos en la configuración de red:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> - Añada esta línea:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Guarde y cierre el archivo.
>>
>> - Para obtener el nombre de la interfaz de red y su dirección MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> - Aquí, la interfaz que queremos configurar es `eno2` con dirección MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/ubuntu_ip_a.png){.thumbnail}
>>
>> - Añada la configuración de red para esta interfaz y la declaración VLAN al archivo de configuración, asegurándose de colocarlo directamente debajo de la línea `version: 2`. Reemplace los valores con los suyos:
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> ```yaml
>> network:
>>     version: 2
>>     ethernets:
>>         eno2:
>>              match:
>>                macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                          # VLAN ID
>>             link: eno2                  # Nombre de interfaz
>>             addresses:
>>             - 192.168.0.14/16
>> ```
>>
>> - Resumen:
>>
>> ![config](images/config_ubuntu.png){.thumbnail}
>>
>> - Guarde y cierre el archivo, luego ejecute el siguiente comando:
>>
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> - Si recibe el siguiente mensaje:
>>
>> ```console
>> WARNING:root:Cannot call Open vSwitch: ovsdb-server.service is not running.
>> ```
>>
>> - Puede resolverlo instalando el siguiente paquete:
>>
>> ```sh
>> sudo apt install openvswitch-switch
>> ```
>>
>> - Verifique que la configuración se haya aplicado correctamente:
>>
>> ```sh
>> ip a
>> ```
>>
> **AlmaLinux y Rocky Linux (8/9)**
>>
>> La configuración siguiente se basa en Almalinux 9.
>>
>> - Antes de comenzar, establezca una conexión SSH a su servidor y ejecute el siguiente comando para cargar el módulo del kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar que el módulo esté cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Ejecute el siguiente comando para asegurarse de que los módulos se carguen permanentemente al arrancar:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Obtenga los nombres de las interfaces e identifique la interfaz privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> En este ejemplo, la interfaz privada es `eno2`.
>>
>> - A continuación, cree un archivo de configuración de subinterfaz para la VLAN en el archivo de configuración de red principal. En este ejemplo, el archivo se llama `ifcfg-eno2.10`, aquí eno2 se refiere a la interfaz de red privada y `10` al VLAN ID.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts-ifcfg-eno2.10
>> ```
>>
>> - Añada las siguientes entradas al archivo de configuración. Reemplace los valores con los suyos.
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.14
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> - Guarde y cierre el archivo.
>>
>> - Resumen:
>>
>> ![config](images/config_alma.png){.thumbnail}
>>
>> - Reinicie la interfaz de red:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux y Rocky Linux (10)**
>>
>> La configuración siguiente se basa en Fedora 43.
>>
>> - Antes de comenzar, establezca una conexión SSH a su servidor y ejecute el siguiente comando para cargar el módulo del kernel 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> - Para verificar que el módulo esté cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> - Ejecute el siguiente comando para asegurarse de que los módulos se carguen permanentemente al arrancar:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> - Para obtener el nombre de la interfaz de red:
>>
>> ```sh
>> ip a
>> ```
>>
>> En este ejemplo, la interfaz se llama `eno2`. Necesitaremos crear una subinterfaz VLAN antes de asignarle una dirección IP privada.
>>
>> - Utilice el siguiente comando para crear la interfaz VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Reemplace `vlan-name` con el nombre de la subinterfaz VLAN, `parent-interface` con el nombre de la interfaz privada y `vlan-id` con el VLAN ID.
>>
>> **En este ejemplo:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> - Asigne una dirección IP privada a la subinterfaz VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **En este ejemplo:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.14/16 ipv4.method manual
>> ```
>>
>> - A continuación, active la subinterfaz VLAN:
>>
>> ```sh
>> sudo nmcli con up <vlan-name>.
>> ```
>>
>> **En este ejemplo:**
>>
>> ```sh
>> sudo nmcli con up eno2.10
>> # Connection successfully activated
>> ```
>>
>> Los pasos anteriores crean un archivo de configuración para la interfaz VLAN. Este archivo se encuentra en `/etc/NetworkManager/system-connections/` y sigue el formato de nomenclatura `vlan-name.nmconnection`.
>>
>> En este ejemplo, el archivo se llama `eno2.10.nmconnection`.
>>
>> - Resumen:
>>
>> ![config](images/fedora_file_name.png){.thumbnail}
>>
>> ![config](images/config_fedora.png){.thumbnail}
>>
> **Windows**
>>
>> Conéctese al servidor mediante el escritorio remoto y abra la aplicación **Administrador del servidor**. Haga clic en `Servidor local`{.action} del menú izquierdo. En el panel **Propiedades**, haga clic en el enlace `Deshabilitado`{.action} situado junto a **Formación de equipos de NIC**.
>>
>> ![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}
>>
>> A continuación, haga clic con el botón derecho en la interfaz de red y seleccione `Agregar a nuevo equipo`{.action}.
>>
>> ![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}
>>
>> En la ventana emergente, cree un nuevo equipo introduciendo un nombre de equipo en el campo **Nombre del equipo**. Cuando haya terminado, haga clic en `Agregar`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}
>>
>> A continuación, es recomendable indicar la etiqueta de la VLAN. Para ello, en el panel **ADAPTADORES e INTERFACES** de la pantalla **Formación de equipos de NIC**, vaya a la pestaña `Interfaces de equipo`{.action} y haga clic derecho en la interfaz que acaba de añadir al nuevo equipo y seleccione `Propiedades`{.action}. Después marque la opción `VLAN específica`{.action} e introduzca la etiqueta.
>>
>> ![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}
>>
>> Ahora hay que configurar la dirección IP de la VLAN. Para ello, abra la pantalla de inicio y haga clic en `Panel do control`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}
>>
>> Haga clic en `Redes e Internet`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}
>>
>> Haga clic en `Centro de redes y recursos compartidos`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}
>>
>> Haga clic en `Cambiar configuración del adaptador`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}
>>
>> A continuación, haga clic derecho en la interfaz VLAN y seleccione `Propiedades`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}
>>
>> Tenga en cuenta que en nuestro ejemplo, `Ethernet 2` es la interfaz utilizada para el vRack. Sin embargo, es posible que el vRack NIC sea una interfaz diferente en su configuración. La correcta será la interfaz que no tenga la dirección IP principal del servidor o que tenga una IP autoasignada.
>>
>> Haga doble clic en `Internet Protocol Version 4 (TCP/IPv4)`{.action}.
>>
>> ![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}
>>
>> Marque la opción `Usar la siguente dirección IP`{.action}. En **Dirección IP**, introduzca una dirección IP de su rango interno. En **Máscara de subred** introduzca **255.255.0.0**.
>>
>> ![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}
>>
>> Por último, haga clic en `Aceptar`{.action} para guardar los cambios y reinicie el servidor.
>>

///

## Más información

[Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

Interactúe con nuestra [comunidad de usuarios](/links/community).