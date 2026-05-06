---
title: "Crear varias VLAN en el vRack en un servidor dedicado"
excerpt: "Cree y gestione varias VLAN en su vRack de OVHcloud para segmentar el tráfico de red entre servidores dedicados."
updated: 2026-02-20
---

## Objetivo

La [configuración estándar del vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server) solo le permite crear una VLAN. Esto significa que solo es posible utilizar cada IP una única vez. Sin embargo, la versión 2.0 del vRack permite crear hasta 4000 redes locales virtuales en un mismo vRack, de forma que cada IP puede utilizarse hasta 4000 veces.

**Esta guía explica cómo crear varias VLAN en el vRack.**

## Requisitos

- Disponer de un servicio [vRack](/links/network/vrack) activo en su cuenta
- Disponer de dos o más [servidores dedicados](/links/bare-metal/bare-metal) compatibles con el vRack
- Tener acceso administrativo (sudo) a su servidor a través de SSH (Linux) o RDP (Windows)
- Tener acceso al [área de cliente de OVHcloud](/links/manager)
- Tener acceso al rango de direcciones IP privadas elegido
- Haber finalizado la [configuración del vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para más información, consulte nuestra [comparativa](/links/bare-metal/eco-compare).

## Procedimiento

### Linux

> [!primary]
>
> A modo de ejemplo, utilizaremos **eno2** como interfaz de red, **10** y **11** como etiquetas VLAN, y **192.168.0.0/16** y **10.0.0.0/16** como rangos de direcciones IP privadas.
>
> Todos los comandos deben adaptarse a la distribución utilizada. En caso de duda, consulte la documentación oficial de su distribución.
>

> [!tabs]
> **Debian 11**
>>
>> En primer lugar, establezca una conexión SSH con su servidor y ejecute los siguientes comandos desde la línea de comandos para instalar el paquete VLAN en su servidor:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> A continuación, cargue el módulo del núcleo 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar que el módulo está cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Ejecute el siguiente comando para asegurarse de que los módulos se cargan permanentemente en el arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> A continuación, obtenga los nombres de sus interfaces e identifique la interfaz privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> A continuación, cree una etiqueta VLAN. La etiqueta sirve como identificador, lo que le permite distinguir varias VLAN:
>>
>> ```sh
>> sudo ip link add link <parent-interface> name <vlan-identifier> type vlan id <ID>
>> ```
>>
>> **En este ejemplo:**
>>
>> ```sh
>> sudo ip link add link eno2 name eno2.10 type vlan id 10
>> ```
>>
>> Utilice el mismo comando para cada etiqueta VLAN que desee añadir.
>>
>> A continuación, declare el rango de direcciones IP privadas dentro del vRack y etiquételo con el identificador utilizando el siguiente comando:
>>
>> ```sh
>> sudo ip addr add 192.168.0.10/16 dev eno2.10
>> ```
>>
>> Modifique la configuración de su interfaz de red para incorporar la etiqueta VLAN. Abra su archivo de configuración de interfaz de red y añada las siguientes entradas:
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eno2.10
>> iface eno2.10 inet static
>> address 192.168.0.10
>> netmask 255.255.0.0
>> broadcast 192.168.255.255
>> vlan-raw-device eno2
>> ```
>>
>> Para varias VLAN configuradas, su configuración de red debería verse así:
>>
>> ![debian VLAN](images/multiple_vlan_debian.png){.thumbnail}
>>
> **Ubuntu y Debian 12+**
>>
>> Estos comandos se ejecutaron bajo Ubuntu 24.04 (Noble Numbat).
>>
>> En primer lugar, establezca una conexión SSH con su servidor y ejecute los siguientes comandos desde la línea de comandos para instalar el paquete VLAN en su servidor:
>>
>> ```sh
>> sudo apt update
>> sudo apt install vlan
>> ```
>>
>> A continuación, cargue el módulo del núcleo 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar que el módulo está cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Ejecute el siguiente comando para asegurarse de que los módulos se cargan permanentemente en el arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Cree o edite el archivo de configuración `cloud.cfg` para evitar que se realicen cambios automáticos en la configuración de red:
>>
>> ```sh
>> sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
>> ```
>>
>> Añada la siguiente línea:
>>
>> ```sh
>> network: {config: disabled}
>> ```
>>
>> Obtenga el nombre de la interfaz de red y su dirección MAC:
>>
>> ```sh
>> ip a
>> ```
>>
>> Aquí la interfaz que queremos configurar es `eno2` con dirección MAC: `d0:50:99:d6:6b:14`.
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}
>>
>> Añada la configuración de red para esta interfaz de red y la información de VLAN en el siguiente archivo, asegurándose de colocarlo directamente debajo de la línea `version: 2`. Sustituya los valores por los suyos propios:
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
>>             match:
>>                 macaddress: d0:50:99:d6:6b:14
>>     vlans:
>>         vlan10:
>>             id: 10                      # VLAN ID
>>             link: eno2                  # Interface name
>>             addresses:
>>             - 192.168.0.10/16
>>     ethernets:
>>         eno1:
>>             ...
>>             ...
>> ```
>>
>> Para varias VLAN configuradas, su configuración de red debería verse así:
>>
>> ![ubuntu VLAN](images/multiple_vlan_ubuntu.png){.thumbnail}
>>
>> Guarde y cierre el archivo, luego ejecute el siguiente comando:
>>
>> ```sh
>> sudo netplan apply
>> ```
>>
>> Utilice el siguiente comando para asegurarse de que la configuración se ha aplicado correctamente:
>>
>> ```sh
>> ip a
>> ```
>>
>> ![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}
>>
> **AlmaLinux y Rocky Linux (8/9)**
>>
>> Antes de empezar, establezca una conexión SSH con su servidor y ejecute el siguiente comando para cargar el módulo del núcleo 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar que el módulo está cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> A continuación, ejecute el siguiente comando para asegurarse de que los módulos se cargan permanentemente en el arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Obtenga los nombres de las interfaces e identifique la interfaz privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> A continuación, cree un archivo de configuración de subinterfaz para la VLAN en el archivo de configuración de red principal.
>>
>> En este ejemplo, el archivo se llama `ifcfg-eno2.10`, donde eno2 hace referencia a la interfaz de red privada y `10` al ID de VLAN.
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eno2.10
>> ```
>>
>> Añada las siguientes entradas al archivo de configuración, asegurándose de reemplazar los valores con los suyos propios:
>>
>> ```console
>> TYPE=Vlan
>> PHYSDEV=eno2
>> VLAN_ID=10
>> BOOTPROTO=none
>> IPADDR=192.168.0.10
>> PREFIX=16
>> NAME=eno2.10
>> DEVICE=eno2.10
>> ONBOOT=yes
>> VLAN=yes
>> ```
>>
>> Guarde y cierre el archivo.
>>
>> Para tener varias VLAN configuradas, debe crear un nuevo archivo para cada identificador de VLAN:
>>
>> ![alma VLAN](images/multiple_vlan_alma.png){.thumbnail}
>>
>> Reinicie la interfaz de red:
>>
>> ```sh
>> sudo systemctl restart NetworkManager
>> ```
>>
> **Fedora 42+, AlmaLinux y Rocky Linux (10)**
>>
>> La configuración a continuación se basa en Fedora 43.
>>
>> Antes de empezar, establezca una conexión SSH con su servidor y ejecute el siguiente comando para cargar el módulo del núcleo 8021q:
>>
>> ```sh
>> sudo modprobe 8021q
>> ```
>>
>> Para verificar que el módulo está cargado:
>>
>> ```sh
>> user@server:~$ lsmod | grep 8021q
>> 8021q                  40960  0
>> garp                   16384  1 8021q
>> mrp                    20480  1 8021q
>> ```
>>
>> Ejecute el siguiente comando para asegurarse de que los módulos se cargan permanentemente en el arranque:
>>
>> ```sh
>> sudo su -c 'echo "8021q" >> /etc/modules'
>> ```
>>
>> Para obtener el nombre de la interfaz de red privada:
>>
>> ```sh
>> ip a
>> ```
>>
>> En este ejemplo, la interfaz se llama `eno2`. Necesitamos crear una subinterfaz VLAN antes de asignarle una dirección IP privada.
>>
>> Utilice el siguiente comando para crear la interfaz VLAN:
>>
>> ```sh
>> sudo nmcli con add type vlan con-name <vlan-name> dev <parent-interface> id <vlan-id>.
>> ```
>>
>> Reemplace `vlan-name` con el nombre de la subinterfaz VLAN, `parent-interface` con el nombre de la interfaz privada y `vlan-id` con el ID de VLAN.
>>
>> **En este ejemplo:**
>>
>> ```sh
>> sudo nmcli con add type vlan con-name eno2.10 dev eno2 id 10
>> Connection 'eno2.10' successfully added.
>> ```
>>
>> Asigne una dirección IP privada a la subinterfaz VLAN:
>>
>> ```sh
>> sudo nmcli con mod <vlan-name> ipv4.addresses <ip/prefix> ipv4.method manual
>> ```
>>
>> **En este ejemplo:**
>>
>> ```sh
>> sudo nmcli con mod eno2.10 ipv4.addresses 192.168.0.10/16 ipv4.method manual
>> ```
>>
>> A continuación, active la subinterfaz VLAN:
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
>> Utilice los mismos comandos para cada interfaz VLAN que desee añadir.
>>
>> Una vez hecho esto, se crea un archivo de configuración para la interfaz VLAN. Este archivo se encuentra en `/etc/NetworkManager/system-connections/` y sigue el formato de nomenclatura `vlan-name.nmconnection`.
>>
>> Para varias VLAN, se crearán varios archivos de configuración:
>>
>> - Descripción general:
>>
>> ![config](images/multiple_vlan_fedora.png){.thumbnail}
>>
>> ![config](images/multiple_vlan_fedora_1.png){.thumbnail}
>>

### Windows

Conéctese al servidor mediante el escritorio remoto y abra la aplicación **Administrador del servidor**. Haga clic en `Servidor local`{.action} del menú izquierdo. En el panel **Propiedades**, haga clic en el enlace `Disabled`{.action} situado junto a **Formación de equipos de NIC**.

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

A continuación, haga clic con el botón derecho en la interfaz de red y seleccione `Agregar a nuevo equipo`{.action}.

![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}

En la ventana emergente, cree un nuevo equipo introduciendo un nombre de equipo en el campo **Nombre del equipo**. Cuando haya terminado, haga clic en `Agregar`{.action}

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

A continuación, es recomendable indicar la etiqueta de la VLAN. Para ello, en el panel **ADAPTADORES e INTERFACES** de la pantalla **Formación de equipos de NIC**, vaya a la pestaña `Interfaces de equipo`{.action} y haga clic derecho en la interfaz que acaba de añadir al nuevo equipo y seleccione `Propiedades`{.action}. Después marque la opción `VLAN específica`{.action} e introduzca la etiqueta.

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Ahora hay que configurar la dirección IP de la VLAN. Para ello, abra la pantalla de inicio y haga clic en `Panel do control`{.action}.

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Haga clic en `Redes e Internet`{.action}.

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Haga clic en `Centro de redes y recursos compartidos`{.action}.

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Haga clic en `Cambiar configuración del adaptador`{.action}.

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

A continuación, haga clic derecho en la interfaz VLAN y seleccione `Propiedades`{.action}.

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Tenga en cuenta que en nuestro ejemplo, `Ethernet 2` es la interfaz utilizada para el vRack. Sin embargo, es posible que el vRack NIC sea una interfaz diferente en su configuración. La correcta será la interfaz que no tenga la dirección IP principal del servidor o que tenga una IP autoasignada.

Haga doble clic en `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

Marque la opción `Usar la siguente dirección IP`{.action}. En **Dirección IP**, introduzca una dirección IP de su rango interno. En **Máscara de subred** introduzca **255.255.0.0**.

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Por último, haga clic en `Aceptar`{.action} para guardar los cambios y reinicie el servidor.

## Más información

[Configurar varios servidores dedicados en el vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

Interactúe con nuestra [comunidad de usuarios](/links/community).