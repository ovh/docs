---
title: "Configurar un bloque IP en el vRack en un servidor dedicado"
excerpt: "Configure un bloque de direcciones IP públicas para la red privada vRack de OVHcloud entre sus servidores dedicados."
updated: 2026-04-03
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

Además del direccionamiento IP privado, el [vRack](/links/network/vrack) también le permite enrutar el tráfico IP público a través del puerto vRack de su servidor mediante un bloque de direcciones IP públicas.

**Esta guía le muestra cómo configurar un bloque de direcciones IP públicas para su uso con el vRack.**

> [!primary]
>
> El vRack admite tanto el enrutamiento público IPv4 como IPv6 con bloques de direcciones Additional IP. Puede encontrar las instrucciones sobre cómo configurar bloques IPv6 en esta guía: "[Configurar un bloque IPv6 en un vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack)".
>

> [!primary]
>
> Este artículo se centra en la configuración de Additional IP sobre una red vRack. Si busca orientación sobre la configuración de Additional IP junto con la IP primaria (en la interfaz de red pública), consulte los siguientes artículos:
>
> - IPv4:
>     - [Configurar el aliasing de IP en servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).
>     - [Configurar el aliasing de IP en un VPS](/pages/bare_metal_cloud/virtual_private_servers/configuring-ip-aliasing).
>
> - IPv6:
>     - [Configurar IPv6 en servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/network_ipv6).
>     - [Configurar IPv6 en un VPS](/pages/bare_metal_cloud/virtual_private_servers/configure-ipv6).
>     - [Configurar IPv6 en una instancia de Public Cloud](/pages/public_cloud/public_cloud_network_services/configuration-02-how-to-configure-ipv6).
>

## Requisitos

- Un bloque público de direcciones IP en su cuenta, con un mínimo de cuatro direcciones
- Su rango de direcciones IP privadas elegido
- Un [servidor compatible con vRack](/links/bare-metal/bare-metal)
- Un servicio [vRack](/links/network/vrack) activado en su cuenta

<!-- CP-NAV-START:network-vrack -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [vRack](/links/control-panel/network-vrack)
- **Ruta de navegación:** `Network`{.action} > `Red privada vRack`{.action}

---
<!-- CP-NAV-END:network-vrack -->

> [!warning]
> Es posible que esta funcionalidad no esté disponible o esté limitada en los [servidores dedicados de la línea de productos **Eco**](/links/bare-metal/eco-about).
>
> Para más información, visite nuestra [página de comparación](/links/bare-metal/eco-compare).

## Procedimiento

> [!primary]
>
> A modo de ejemplo, utilizaremos un bloque de IP de 46.105.135.96/28 y eth1 para la interfaz de red secundaria, que está dedicada al vRack.
>
> También a modo de ejemplo, el archivo de configuración de red al que hacemos referencia se encuentra en `/etc/network/interfaces`. El archivo equivalente en su servidor puede estar ubicado en otro lugar, dependiendo de su sistema operativo. El contenido del archivo también puede ser diferente. Si tiene alguna dificultad, consulte la documentación oficial de su distribución.

### Añadir el bloque de IP al vRack

> [!warning]
>
> Una vez que se añade un bloque de IP al vRack, ya no está asociado a un servidor físico.
>
> Esta configuración le permite configurar IPs del mismo bloque en varios servidores, siempre que todos estos servidores estén en el mismo vRack que el bloque de IP. El bloque de IP debe tener al menos 2 IPs utilizables o más para que esto sea posible.
>

Seleccione su vRack de la lista para mostrar la lista de servicios elegibles. Haga clic en el bloque de IP que desea añadir al vRack y luego haga clic en el botón `Añadir`{.action}.

![Añadir un bloque de IP al vRack](images/addIPblock.png){.thumbnail}

### Gestionar el ancho de banda de IP pública en el vRack

De forma predeterminada, los bloques de Additional IP enrutados a través de un vRack se benefician de un ancho de banda público estándar de 5 Gbps en Europa y América del Norte, o de 100 Mbps en las regiones APAC. Para más detalles sobre las opciones disponibles, consulte las opciones de enrutamiento público en nuestra [página del producto vRack](/links/network/vrack).

Para responder a las crecientes necesidades de las infraestructuras y a los requisitos de los servicios de alto tráfico, OVHcloud ofrece ahora a sus clientes opciones de ancho de banda de pago. Tenga en cuenta que estas opciones se aplican **por vRack y por región**. Dado que las direcciones Additional IP están vinculadas a una región precisa, cualquier modificación del ancho de banda afectará al conjunto de las direcciones (IPv4 e IPv6) enrutadas a ese vRack en la región correspondiente.

/// details | Durante el proceso de pedido de Additional IP

#### Elegir el ancho de banda público durante el pedido

Puede modificar el ancho de banda predeterminado al pedir un nuevo bloque de Additional IP, siempre que se seleccione una red vRack como servicio backend.

Para pedir un nuevo bloque de Additional IP:

- En la barra lateral izquierda, acceda a la sección `Network`{.action}.
- Seleccione `Direcciones IP públicas`{.action}.
- Haga clic en el botón `Pedir IPs`{.action} en la parte superior de la página.
- Elija la versión de IP y, a continuación, el vRack al que se asociará la Additional IP.
- Seleccione la región de su Additional IP.
- Elija el ancho de banda público que desea aplicar a su vRack para esa región.
- Configure las demás opciones según sus necesidades y, a continuación, finalice el pedido.

///

/// details | Desde la página de gestión del vRack

#### Modificar el ancho de banda público desde la página de gestión

Para los bloques de Additional IP ya asociados a un vRack, el ancho de banda se gestiona directamente desde la página de configuración del servicio.

Para acceder a la interfaz de gestión:

- En la columna "Dirección IP pública y ancho de banda", haga clic en el botón `Gestionar`{.action} correspondiente al vRack deseado.

La interfaz de gestión se divide en dos pestañas:

- **All attached services**: Actualmente redirige a la página de gestión clásica del vRack. Próximamente, esta pestaña listará de forma optimizada todos los productos (servidores, proyectos Cloud, etc.) vinculados al vRack.
- **Conectividad IP pública**: Permite gestionar las opciones de enrutamiento público de su vRack, incluido el ancho de banda.

Para modificar el ancho de banda:

- Vaya a la pestaña `Conectividad IP pública`{.action}.
- La interfaz muestra ventanas de gestión por región (p. ej., `eu-west-par`) asociadas al vRack, con la lista de las IPs asociadas.
- En el recuadro de la región correspondiente, haga clic en `Modificar ancho de banda`{.action}.
- Seleccione la opción deseada en el panel de la derecha y, a continuación, haga clic en `Contratar`{.action} para validar.
- Una vez realizado el pago, el nuevo ancho de banda estará activo en su vRack en la región elegida después de unos minutos.

> [!primary]
>
> El primer mes suscrito se factura de forma proporcional a los días restantes. La tarifa completa se aplicará en el siguiente ciclo de facturación.
>

El aumento de ancho de banda se aplicará a todas las direcciones IP de esa región para el vRack seleccionado.

///

### Configurar una dirección IP utilizable

Para los propósitos del vRack, la primera, penúltima y última dirección de cualquier bloque de IP dado están siempre reservadas para la dirección de red, la puerta de enlace de red y la difusión de red respectivamente. Esto significa que la primera dirección utilizable es la segunda dirección del bloque, como se muestra a continuación:

```sh
46.105.135.96   # Reservada: Dirección de red
46.105.135.97   # Primera IP utilizable
46.105.135.98
46.105.135.99
46.105.135.100
46.105.135.101
46.105.135.102
46.105.135.103
46.105.135.104
46.105.135.105
46.105.135.106
46.105.135.107
46.105.135.108
46.105.135.109  # Última IP utilizable
46.105.135.110  # Reservada: Puerta de enlace de red
46.105.135.111  # Reservada: Difusión de red
```

Para configurar la primera dirección IP utilizable, necesitamos editar el archivo de configuración de red, como se muestra a continuación. En este ejemplo, necesitamos usar una máscara de subred de *255.255.255.240*.

> [!primary]
>
> La máscara de subred que hemos utilizado en nuestro ejemplo es apropiada para nuestro bloque de IP. Su máscara de subred puede variar dependiendo del tamaño de su bloque. Cuando compre su bloque de IP, recibirá un correo electrónico que le indicará qué máscara de subred debe usar.
>

### Descargar el paquete `iproute2`

Antes de empezar, descargue e instale **iproute2**, un paquete que permite configurar manualmente el enrutamiento IP. Es posible que este paquete ya esté disponible en su servidor; en ese caso, continúe con el siguiente paso.

Establezca una conexión SSH con su servidor y ejecute el siguiente comando para descargar e instalar iproute2:

```sh
sudo apt-get install iproute2
```

**Fedora**

```sh
sudo dnf install iproute
```

#### Configuraciones GNU/Linux

> [!tabs]
> **Debian 11**
>>
>> **Configurar la Additional IP**
>>
>> Abra el archivo de configuración de red ubicado en `/etc/network/interfaces.d` con el editor de texto de su elección. Aquí el archivo se llama `50-cloud-init`.
>>
>> ```sh
>> /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> ```
>>
>> **Crear una nueva tabla de enrutamiento IP**
>>
>> A continuación, cree una nueva ruta IP para el vRack. Añada una nueva regla de tráfico modificando el archivo como se muestra a continuación:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> **Modificar el archivo de configuración de red**
>>
>> > [!primary]
>> >
>> > A modo de ejemplo, el archivo de configuración de red al que hacemos referencia se encuentra en /etc/network/interfaces. El archivo equivalente en su servidor puede estar ubicado en otro lugar, dependiendo de su sistema operativo.
>> >
>>
>> Por último, modifique el archivo de configuración de red para tener en cuenta la nueva regla de tráfico y enrutar el tráfico del vRack a través de la dirección de puerta de enlace de red **46.105.135.110**.
>>
>> ```sh
>> sudo nano /etc/network/interfaces.d/50-cloud-init
>>
>> auto eth1
>> iface eth1 inet static
>> address 46.105.135.97
>> netmask 255.255.255.240
>> broadcast 46.105.135.111
>> post-up ip route add 46.105.135.96/28 dev eth1 table vrack
>> post-up ip route add default via 46.105.135.110 dev eth1 table vrack
>> post-up ip rule add from 46.105.135.96/28 table vrack
>> post-up ip rule add to 46.105.135.96/28 table vrack
>> ```
>>
>> Reinicie el servidor para aplicar los cambios o habilite simplemente la nueva interfaz de red:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **CentOS, AlmaLinux y Rocky Linux (8/9)**
>>
>> **Crear el archivo para la interfaz de red secundaria**
>>
>> Copie la configuración de la interfaz de red primaria y ajústela según sus necesidades:
>>
>> ```sh
>> sudo cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> A continuación, abra el nuevo archivo:
>>
>> ```sh
>> sudo nano /etc/sysconfig/network-scripts/ifcfg-eth1
>> ```
>>
>> - Defina la configuración de IP:
>>
>> ```sh
>> # Created by cloud-init on instance boot automatically, do not edit.
>> #
>> DEVICE=eth1
>> BOOTPROTO=static
>> ONBOOT=yes
>> USERCTL=no
>> IPV6INIT=no
>> PEERDNS=yes
>> TYPE=Ethernet
>> NETMASK=255.255.255.240
>> IPADDR=46.105.135.97
>> ARP=yes
>> ```
>>
>> **Crear una nueva tabla de enrutamiento IP**
>>
>> A continuación, cree una nueva ruta IP para el vRack. Añada una nueva regla de tráfico modificando el archivo como se muestra a continuación:
>>
>> ```sh
>> sudo nano /etc/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> Cree a continuación el archivo necesario para aplicar las nuevas reglas:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/rule-eth1
>> ```
>>
>> Pegue el siguiente contenido (recuerde reemplazar las variables con sus propios valores):
>>
>> ```sh
>> from 46.105.135.96/28 table vrack
>> to 46.105.135.96/28 table vrack
>> ```
>>
>> **Modificar el archivo de configuración de red**
>>
>> Por último, modifique el archivo de configuración de red para tener en cuenta la nueva regla de tráfico y enrutar el tráfico del vRack a través de la dirección de puerta de enlace de red **46.105.135.110**.
>>
>> Edite el siguiente archivo para añadir rutas persistentes y estáticas:
>>
>> ```sh
>> nano /etc/sysconfig/network-scripts/route-eth1
>> ```
>>
>> Pegue el siguiente contenido (recuerde reemplazar las variables con sus propios valores):
>>
>> ```sh
>> 46.105.135.96/28 dev eth1 table vrack
>> default via 46.105.135.110 dev eth1 table vrack
>> ```
>>
>> Reinicie el servidor para aplicar los cambios o habilite simplemente la nueva interfaz de red:
>>
>> ```sh
>> ip link set eth1 up
>> ```
>>
> **Ubuntu y Debian 12+**
>>
>> - Configurar la Additional IP
>>
>> Abra el archivo de configuración de red ubicado en `/etc/netplan` con el editor de texto de su elección. Aquí el archivo se llama `50-cloud-init.yaml`.
>>
>>
>> ```sh
>> sudo nano /etc/netplan/50-cloud-init.yaml
>> ```
>>
>> - Defina la configuración de IP con las siguientes variables:
>>
>> ```sh
>> NETWORK_INTERFACE:
>> dhcp4: false
>> addresses:
>> - ADDITIONAL_IP/PREFIX
>> routes:
>> - to: NETWORK_IP/PREFIX
>>   via: GATEWAY_IP
>> ```
>>
>> **Ejemplo**
>>
>> ```sh
>> eno2:
>> dhcp4: false
>> addresses:
>> - 46.105.135.97/28
>> routes:
>> - to: 46.105.135.96/28
>>   via: 46.105.135.110
>> ```
>>
>> Aplique la configuración con el siguiente comando:
>>
>> ```bash
>> sudo netplan apply
>> ```
>> 
> **Fedora, AlmaLinux y Rocky Linux (10)**
>>
>> En primer lugar, compruebe que su interfaz vRack está en estado `connected` o `connecting`. En nuestro ejemplo, la interfaz se llama `eno2`.
>>
>> ```sh
>> nmcli device status
>>
>> DEVICE           TYPE      STATE                   CONNECTION
>> eno1             ethernet  connected               cloud-init eno1
>> lo               loopback  connected (externally)  lo
>> eno2             ethernet   connecting (getting IP configuration)               vRack
>> ```
>>
>> A continuación, obtenga el nombre del archivo de configuración ubicado en `/etc/NetworkManager/system-connections`. Aquí el archivo se llama `vRack.nmconnection`.
>>
>> ```sh
>> [user@server ~]$ cd /etc/NetworkManager/system-connections
>> cloud-init-eno1.nmconnection vRack.nmconnection
>> ```
>>
>> Configure su Additional IP mediante el gestor `nmcli`. Reemplace `vRack` y los demás parámetros con sus propios valores.
>>
>> - Añadir la IP
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.address 46.105.135.96/28
>> ```
>>
>> - Añadir la puerta de enlace
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.gateway 46.105.135.110
>> ```
>>
>> - Cambiar la configuración de **auto** a **manual**:
>>
>> ```sh
>> sudo nmcli connection modify vRack IPv4.method manual
>> ```
>>
>> - Hacer la configuración persistente
>>
>> ```sh
>> sudo nmcli con mod 'vRack' connection.autoconnect true
>> ```
>>
>> **Crear una nueva tabla de enrutamiento IP**
>>
>> A continuación, cree una nueva ruta IP para el vRack. Añada una nueva regla de tráfico (`1 vrack`) modificando el archivo como se muestra a continuación:
>>
>>
>> ```sh
>> sudo nano /usr/share/iproute2/rt_tables
>> #
>> # reserved values
>> #
>> 255	local
>> 254	main
>> 253	default
>> 0	unspec
>> #
>> # local
>> #
>> #1	inr.ruhep
>> 1 vrack
>> ```
>>
>> - Añadir la ruta
>>
>> ```sh
>> sudo ip route add <network_ip>/<prefix> via <gateway> dev <interface>
>> ```
>>
>> En nuestro ejemplo
>>
>> ```sh
>> sudo ip route add 46.105.135.96/28 via 46.105.135.110 dev eno2
>> ```
>>
>> Reinicie su red con el siguiente comando:
>>
>> ```bash
>> sudo systemctl restart NetworkManager
>> ```
>>


### Windows Server

#### Paso 1: Verificar y configurar la interfaz de red secundaria

Compruebe la información de la nueva interfaz de red:

![verificación de la interfaz de red secundaria](images/win-ip-vrack-1.png){.thumbnail}

A continuación, compruebe las propiedades:

![propiedades de la interfaz de red secundaria](images/win-ip-vrack-2.png){.thumbnail}

![propiedades de la interfaz de red secundaria](images/win-ip-vrack-3.png){.thumbnail}

#### Paso 2: Configuración de IP

Seleccione la opción `Use the following IP address`{.action}:

![configuración de IP](images/win-ip-vrack-4.png){.thumbnail}

Defina la información de IP:

![configuración de IP](images/win-ip-vrack-5b.png){.thumbnail}

#### Paso 3: Reiniciar la interfaz de red

En primer lugar, desactive la interfaz.

![desactivación de la red](images/win-ip-vrack-6.png){.thumbnail}

A continuación, actívela.

![activación de la red](images/win-ip-vrack-7.png){.thumbnail}

### Resolución de problemas

Si no puede establecer una conexión desde su VM o servidor a la red privada, abra un ticket de soporte desde su área de cliente con la siguiente información:

- IP de origen e IP de destino
- Resultado de `ifconfig -a` o `ipconfig /all` de ambos servidores o VMs (configuración de la interfaz de red)
- Ping en ambas direcciones
- Resultado de `arp -a`
- Tabla de enrutamiento

Incluya los resultados anteriores en su ticket.

## Más información

[Configurar el vRack en sus servidores dedicados](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server)

[Crear múltiples VLANs en un vRack](/pages/bare_metal_cloud/dedicated_servers/creating-multiple-vlans-in-a-vrack)

[Configurar el vRack entre la Public Cloud y un servidor dedicado](/pages/bare_metal_cloud/dedicated_servers/configuring-the-vrack-between-the-public-cloud-and-a-dedicated-server)

Interactúe con nuestra [comunidad de usuarios](/links/community).
