---
title: 'Configurar varios servidores dedicados en el vRack'
excerpt: 'Cómo configurar varios servidores dedicados en el vRack'
updated: 2025-04-28
---

## Objetivo

El vRack (rack virtual) de OVHcloud permite agrupar virtualmente varios servidores (independientemente de su número y su ubicación física en nuestros datacenters) y conectarlos a un switch virtual dentro de una misma red privada. De este modo, sus servidores pueden comunicarse entre sí de forma privada y segura, dentro de una VLAN dedicada.

**Esta guía explica cómo configurar el vRack en varios servidores dedicados.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Un servicio [vRack](https://www.ovh.es/soluciones/vrack/) activado en su cuenta.
- Varios [servidores dedicados](/links/bare-metal/bare-metal) (compatibles con el vRack).
- Tener acceso de administrador (sudo) al servidor por SSH o RDP.
- Tienes acceso a tu [área de cliente de OVHcloud](/links/manager).
- Tener un rango de direcciones IP privadas.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](/links/bare-metal/eco-about).
>
> Para más información, consulte nuestra [comparativa](/links/bare-metal/eco-compare).

## Procedimiento

### Paso 1: contratar el vRack

Conéctese a su área de cliente de OVHcloud y haga clic en el botón `Añadir un servicio`{.action} (icono del carrito de la compra) en el menú de la izquierda. Utilice el filtro de la parte superior de la página o desplácese hacia abajo para buscar el servicio `vRack`{.action}.

![Contratar vrack](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/orderingvrack25.png){.thumbnail}

Haga clic en el cuadro `vRack`{.action} para que le redirijan a la página en la que puede validar el pedido. El vRack tardará unos minutos en configurarse en su cuenta.

### Paso 2: añadir sus servidores al vRack

Una vez que haya activado el vRack en su cuenta, abra el menú `Network`{.action} en la columna izquierda y haga clic en `Red privada vRack`{.action}.

Seleccione el vRack en la lista para ver la lista de servicios compatibles. Haga clic en cada uno de los servidores que quiera añadir al vRack y, seguidamente, en el botón `Añadir`{.action}.

![Selección del vRack](images/vrack_selection.png){.thumbnail}

### Paso 3: configuración de las interfaces de red

Las siguientes etapas contienen las configuraciones de las distribuciones/sistemas operativos recientes más comúnmente utilizadas. En primer lugar, debe [conectarse al servidor](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server) por SSH o en sesión RDP (para Windows). Los siguientes ejemplos suponen que está conectado como usuario con permisos muy exigentes (administrador/sudo).

> [!primary]
>
En cuanto a las diferentes distribuciones, es posible que haya cambiado el procedimiento para configurar la interfaz de red y los nombres de archivos. Si necesita ayuda, le recomendamos consultar los manuales y las bases de conocimiento de las respectivas versiones del sistema operativo.
>
Por ejemplo, los siguientes detalles de configuración tendrán la dirección IP `192.168.0.0/16` (**Máscara de subred**: `255.255.0.0`).
>
Puede utilizar cualquier rango de IP privadas de su elección y cualquier dirección dentro de este rango.
>

#### Identificación de la interfaz vRack <a name="vrack-interface"></a>

Los nombres de las interfaces de red de los servidores no son siempre los mismos.

La mejor forma de comprobar la interfaz del vRack es comprobar la pestaña `Interfaces de red`{.action} del servidor en el [Panel de configuración de OVHcloud](/links/manager). En la tabla inferior, tenga en cuenta la dirección MAC, que es también el **Nombre** de la interfaz **privada**.

![Interfaz vRack](images/private_interface.png){.thumbnail}

Una vez que se haya conectado al servidor por SSH, podrá ver las interfaces de red con el siguiente comando:

```bash
ip a
```

En la línea que empieza por ```link ether```, puede comprobar que esta interfaz se corresponde con la interfaz **privada** que haya introducido en el [Panel de configuración de OVHcloud](/links/manager). Utilice este nombre de interfaz para reemplazar `NETWORK_INTERFACE` en las configuraciones siguientes (por ejemplo: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

#### Configuraciones GNU/Linux

> [!tabs]
> **Debian (excluyendo Debian 12)**
>> 
>> En un editor de texto, abra el archivo de configuración de red en `/etc/network/interfaces.d` para cambiarlo. El archivo se llama `50-cloud-init`.
>>
>> ```bash
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>> ```
>>
>> Añada las siguientes líneas a la configuración existente, sustituya `NETWORK_INTERFACE`, `IP_ADDRESS` y `NETMASK` por sus propios valores:
>>
>> ```console
>> auto NETWORK_INTERFACE
>> iface NETWORK_INTERFACE inet static
>>    address IP_ADDRESS
>>    netmask NETMASK
>> ```
>>
>> **Ejemplo:**
>>
>> ![debian config](images/debian_configuration.png){.thumbnail}
>>
>> Guarde los cambios en el archivo de configuración y salga del editor.
>>
>> Reinicie el servicio de red para aplicar la configuración:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.
>>
> **Ubuntu & Debian 12**
>> Utilice el editor de texto que desee para editar el archivo de configuración de red situado en `/etc/netplan/`. El archivo se llama `50-cloud-init.yaml`.
>>
>> ```bash
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> Añada las siguientes líneas a la configuración existente después de la línea `version: 2`. Sustituya `NETWORK_INTERFACE` y `IP_ADDRESS/PREFIX` por sus propios valores.
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
>> > Es importante respetar la alineación de cada elemento en los archivos `yaml` como se muestra en el ejemplo anterior. No use la tecla de tabulación para crear el espacio. Sólo se debe utilizar la tecla espacio.
>> >
>>
>> Guarde los cambios en el archivo de configuración y salga del editor.
>>
>> Aplique la configuración:
>>
>> ```bash
>> sudo netplan apply
>> ```
>>
>> Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.
>>
> **CentOS, AlmaLinux y RockyLinux**
>>
>> Una vez que haya identificado la interfaz de red privada, utilice el editor de texto que desee para crear el siguiente archivo de configuración de red. Sustituya `NETWORK_INTERFACE` por su propio valor.
>>
>> ```bash
>> sudo touch /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
>> ```
>>
>> Añada estas líneas, sustituyendo `NETWORK_INTERFACE`, `IP_ADDRESS` y `NETMASK` por sus propios valores:
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
>> Guarde los cambios en el archivo de configuración y salga del editor.
>>
>> Reinicie el servicio de red para aplicar los cambios:
>>
>> ```bash
>> sudo systemctl restart networking
>> ```
>>
>> En **CentOS 8, AlmaLinux y RockyLinux** utilice el siguiente comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager.service
>> ```
>>
>> Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.
>>
> **Fedora**
>>
>> Una vez que haya identificado el nombre de su interfaz privada (como se explica [aquí](#vrack-interface)), ejecute el siguiente comando para comprobar que esté conectada. En nuestro ejemplo, nuestra interfaz se denomina `eno2`:
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
>> Si el `STATE` del `DEVICE` aparece como `disconnected`, es necesario conectarlo antes de configurar la IP.
>>
>> Al añadir una conexión **ethernet**, es necesario crear un perfil de configuración y asignarlo a un dispositivo.
>>
>> Ejecute el siguiente comando, sustituyendo `INTERFACE_NAME` y `CONNECTION_NAME` por sus propios valores.
>>
>> En nuestro ejemplo, hemos denominado nuestro perfil de configuración «private-interface».
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
>> - Compruebe que la interfaz se ha conectado correctamente:
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
>> Una vez hecho esto, se creará un nuevo archivo de configuración denominado *xxxxxxxxx.nmconnection* en la carpeta `/etc/NetworkManager/system-connections`.
>>
>> ```bash
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> [user@server system-connections]$ ls
>> cloud-init-eno1.nmconnection  private-interface.nmconnection
>> ```
>>
>> Puede editar este fichero utilizando el gestor `nmcli`, sustituyendo `IP_ADDRESS`, `PREFIX` y `CONNECTION_NAME` por sus propios valores.
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
>> - Hacer persistente la configuración:
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
>> - Reinicie su red con el siguiente comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```

#### Configuración Windows

A modo de ejemplo, las siguientes configuraciones utilizarán el rango de direcciones IP de `192.168.0.0/16` (**Máscara de subred**: `255.255.0.0`).

Conéctese a su servidor Windows a través del escritorio remoto y acceda al **Panel de configuración**.

![Panel de control de Windows](images/windows_control_panel.png){.thumbnail}

Haga clic en `Network and Internet`{.action}.

![Red e Internet](images/windows_network_and_internet.png){.thumbnail}

Abra `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Haga clic en `Change Adapter Settings`{.action}.

![Cambiar configuración del adaptador](images/windows_change_adapter_settings.png){.thumbnail}

Haga clic derecho en la interfaz de red secundaria y seleccione `Properties`{.action}.

En nuestro ejemplo, `Ethernet 2` es la interfaz utilizada para el vRack. Sin embargo, es posible que la tarjeta de red vRack utilice una interfaz diferente. Utilice una interfaz que no posea la dirección IP principal del servidor o que utilice una dirección IP autoasignada.

![Propiedades de Windows](images/windows_properties_button.png){.thumbnail}

Haga doble clic en Protocolo de `Internet versión 4 (TCP/IPv4)`{.action}.

![Protocolo de Internet versión 4 (TCP/IPv4)](images/windows_ipv4.png){.thumbnail}

Haga clic en **Usar la siguiente** dirección IP. Introduzca en el campo correspondiente cualquier dirección **IP** de su rango privado y la **máscara** de subred adecuada (`255.255.0.0` en este ejemplo).

![Usar la siguiente dirección IP](images/windows_use_following_ip_address.png){.thumbnail}

Haga clic en `Aceptar`{.action} para guardar los cambios y reinicie el servidor para aplicarlos.

Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.

## Más información

[Crear varias VLAN en el vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.