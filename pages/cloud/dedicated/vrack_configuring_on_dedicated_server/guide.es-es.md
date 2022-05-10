---
title: 'Configurar varios servidores dedicados en el vRack'
slug: configurar-vrack-en-servidor-dedicado
excerpt: 'Cómo configurar varios servidores dedicados en el vRack'
section: vRack
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 02/02/2022**

## Objetivo

El vRack (rack virtual) de OVHcloud permite agrupar virtualmente varios servidores (independientemente de su número y su ubicación física en nuestros datacenters) y conectarlos a un switch virtual dentro de una misma red privada. De este modo, sus servidores pueden comunicarse entre sí de forma privada y segura, dentro de una VLAN dedicada.

**Esta guía explica cómo configurar el vRack en varios servidores dedicados.**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZA7IsbDdAmc?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Un servicio [vRack](https://www.ovh.es/soluciones/vrack/) activado en su cuenta.
- Varios [servidores dedicados](https://www.ovhcloud.com/es-es/bare-metal/) (compatibles con el vRack).
- Tener acceso de administrador (root) al servidor por SSH o RDP.
- Tienes acceso a tu [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Tener un rango de direcciones IP privadas.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es-es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es-es/compare/).

## Procedimiento

### Paso 1: contratar el vRack

Una vez que se haya conectado al área de cliente de OVHcloud, acceda al menú `Bare Metal Cloud`{.action} y haga clic en el botón `Contratar`{.action}. En este menú, haga clic en el botón ` vRack`{.action}.

![Contratar el vrack](images/orderingvrack.png) {.thumbnail}

Será redirigido a otra página para validar el pedido. La operación tardará unos minutos.

### Paso 2: añadir sus servidores al vRack

Una vez que haya activado el vRack en su cuenta, acceda a la sección `Bare metal Cloud`{.action} de su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en `Network`{.action} y abra el menú `vRack`{.action}.

Seleccione el vRack en la lista para ver la lista de servicios compatibles. Haga clic en cada uno de los servidores que quiera añadir al vRack y, seguidamente, en el botón `Añadir`{.action}.

![Selección del vRack](images/vrack_selection.png){.thumbnail}

### Paso 3: configuración de las interfaces de red

Las siguientes etapas contienen las configuraciones de las distribuciones/sistemas operativos recientes más comúnmente utilizadas. En primer lugar, debe [conectarse al servidor](https://docs.ovh.com/es/dedicated/primeros-pasos-servidor-dedicado/) por SSH o en sesión RDP (para Windows). Los siguientes ejemplos suponen que está conectado como usuario con permisos muy exigentes (administrador/sudo).

> [!primary]
>
En cuanto a las diferentes distribuciones, es posible que haya cambiado el procedimiento para configurar la interfaz de red y los nombres de archivos. Si necesita ayuda, le recomendamos consultar los manuales y las bases de conocimiento de las respectivas versiones del sistema operativo.
>
Por ejemplo, los siguientes detalles de configuración tendrán la dirección IP `192.168.0.0/16` (**Máscara de subred**: `255.255.0.0`).
>
Puede utilizar cualquier rango de IP privadas de su elección y cualquier dirección dentro de este rango.
>

#### Configuraciones GNU/Linux

Los nombres de las interfaces de red de los servidores no son siempre los mismos. En los siguientes ejemplos, sustituya NETWORK_INTERFACE por el nombre de interfaz apropiado.

La mejor forma de comprobar la interfaz del vRack es comprobar la pestaña `Interfaces de red`{.action} del servidor en el [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). En la tabla inferior, tenga en cuenta la dirección MAC, que es también el **Nombre** de la interfaz **privada**.

![Interfaz vRack](images/private_interface.png){.thumbnail}

Una vez que se haya conectado al servidor por SSH, podrá ver las interfaces de red con el siguiente comando:

```bash
ip a
```

En la línea que empieza por ```link ether```, puede comprobar que esta interfaz se corresponde con la interfaz **privada** que haya introducido en el [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Utilice este nombre de interfaz para reemplazar `NETWORK_INTERFACE` en las configuraciones siguientes (por ejemplo: `eno2`).

```console
link ether f0:00:00:ef:0e:f0
```

##### **Debian**

En un editor de texto, abra el archivo de configuración de red en `/etc/network/interfaces.d` para cambiarlo. El archivo se llama `50-cloud-init`.

```bash
editor /etc/network/interfaces.d/50-cloud-init
```

Añada las siguientes líneas:

```console
auto NETWORK_INTERFACE
iface NETWORK_INTERFACE inet static
address 192.168.0.1
netmask 255.255.0.0
```

Guarde los cambios en el archivo de configuración y salga del editor.

Reinicie el servicio de red para aplicar la configuración:

```bash
systemctl restart networking
```

Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.

##### **Ubuntu**

Utilice el editor de texto que desee para editar el archivo de configuración de red situado en `/etc/netplan/`. El archivo se llama `50-cloud-init.yaml`.

```bash
editor /etc/netplan/50-cloud-init.yaml
```

Añada la configuración IP a la configuración existente después de la línea `ethernets`:

```yaml
    ethernets:
        NETWORK_INTERFACE:
            dhcp4: no
            addresses:
              - 192.168.0.1/16
```

> [!warning]
>
> Es importante respetar la alineación de cada elemento en los archivos `yaml` como se muestra en el ejemplo anterior. No use la tecla de tabulación para crear el espacio. Sólo se debe utilizar la tecla espacio.
>

Guarde los cambios en el archivo de configuración y salga del editor.

Aplique la configuración:

```bash
netplan apply
```

Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.

##### **CentOS**

Utilice el editor de texto que desee para abrir el archivo `/etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE`.

```bash
editor /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE
```

Añadir estas líneas:

```console
DEVICE=NETWORK_INTERFACE
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Guarde los cambios en el archivo de configuración y salga del editor.

Reinicie el servicio de red para aplicar los cambios:

```bash
systemctl restart networking
```

En **CentOS 8**, utilice el siguiente comando:

```bash
systemctl restart NetworkManager.service
```

Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.

#### Configuración Windows

A modo de ejemplo, las siguientes configuraciones utilizarán el rango de direcciones IP de `192.168.0.0/16` (**Máscara de subred**: `255.255.0.0`).

Conéctese a su servidor Windows a través del escritorio remoto y acceda al **Panel de configuración**.

![Panel de control de Windows](images/windows_control_panel.png){.thumbnail}

Haga clic en `Redes e Internet`{.action}.

![Red e Internet](images/windows_network_and_internet.png){.thumbnail}

Abra `Network and Sharing Center`{.action}.

![Network and Sharing Center](images/windows_network_and_sharing_centre.png){.thumbnail}

Haga clic en `Cambiar configuración del adaptador`{.action}.

![Cambiar configuración del adaptador](images/windows_change_adapter_settings.png){.thumbnail}

Haga clic derecho en la interfaz de red secundaria y seleccione `Propiedades`{.action}.

![Propiedades de Windows](images/windows_properties_button.png){.thumbnail}

Haga doble clic en Protocolo de `Internet versión 4 (TCP/IPv4)`{.action}.

![Protocolo de Internet versión 4 (TCP/IPv4)](images/windows_ipv4.png){.thumbnail}

Haga clic en **Usar la siguiente** dirección IP. Introduzca en el campo correspondiente cualquier dirección **IP** de su rango privado y la **máscara** de subred adecuada (`255.255.0.0` en este ejemplo).

![Usar la siguiente dirección IP](images/windows_use_following_ip_address.png){.thumbnail}

Haga clic en `Aceptar`{.action} para guardar los cambios y reinicie el servidor para aplicarlos.

Repita este procedimiento para los demás servidores y asígnele a cada uno de ellos una dirección IP no utilizada desde su rango privado. A continuación, los servidores podrán comunicarse entre sí en la red privada.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.