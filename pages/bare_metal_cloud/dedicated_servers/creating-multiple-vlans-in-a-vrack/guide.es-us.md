---
title: 'Crear varias VLAN en el vRack'
excerpt: 'Cómo crear varias VLAN en el vRack'
updated: 2023-09-12
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La [configuración estándar del vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server){.external} solo le permite crear una VLAN. Esto significa que solo es posible utilizar cada IP una única vez. Sin embargo, la versión 2.0 del vRack permite crear hasta 4000 redes locales virtuales en un mismo vRack, de forma que cada IP puede utilizarse hasta 4000 veces.

**Esta guía explica cómo crear varias VLAN en el vRack.**

## Requisitos

- Tener uno o más [servidores dedicados](/links/bare-metal/bare-metal){.external} compatibles con el vRack.
- Haber activado el servicio [vRack](https://www.ovh.com/world/es/soluciones/vrack/){.external}.
- Tener acceso al rango de direcciones IP privadas elegido.
- Estar conectado por SSH con el usuario root (Linux).
- Estar conectado con la cuenta de administrador (Windows).
- Haber terminado de [configurar el vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server){.external}.

> [!warning]
> Esta funcionalidad puede no estar disponible o estar limitada en los [servidores dedicados **Eco**](https://eco.ovhcloud.com/es/about/).
>
> Para más información, consulte nuestra [comparativa](https://eco.ovhcloud.com/es/compare/).

## Procedimiento

### En Linux

> [!primary]
>
> En este ejemplo utilizaremos **eno2** para Ubuntu y **eth1** para Debian como interfaz de red, **10** como etiqueta VLAN y **192.168.0.0/16** como rango de direcciones IP. 
>
> No olvide adaptar todos los comandos en función de la distribución que utilice. En caso de duda, consulte la documentación oficial de su distribución.
>

#### Ubuntu 20 y 21

Este ejemplo está basado en Ubuntu 21.10 (Impish Indri).

En primer lugar, instale el paquete **vlan** en el servidor. Para ello, ejecute el siguiente comando:

```sh
sudo apt-get install vlan
```

Cargue el módulo del núcleo 8021q:

```sh
sudo su -c 'echo "8021q" >> /etc/modules'
```

Cree o edite este archivo de configuración para evitar que los cambios en la configuración de red se realicen automáticamente:

```sh
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Y añada esta línea:

```sh
network: {config: disabled}
```

Aquí la interfaz que queremos configurar es `eno2` con dirección MAC: `d0:50:99:d6:6b:14`.

![ubuntu VLAN](images/vrack3-ubuntu-01.png){.thumbnail}

Agregue la configuración de red para esta interfaz de red y la declaración de VLAN en el siguiente archivo:

```sh
sudo nano /etc/netplan/50-cloud-init.yaml
```

```yaml
network:
    version: 2
    ethernets:
        eno2:
            match:
                macaddress: d0:50:99:d6:6b:14
        eno1:
            ...
            ...
    vlans:
        vlan10:
            id: 10                      # VLAN ID    
            link: eno2                  # Interface name
            addresses:
            - 192.168.0.14/16
```

Guarde y cierre el archivo y ejecute los siguientes comandos:

```sh
sudo netplan try
sudo netplan apply
```

Utilice el siguiente comando para confirmar la configuración:

```sh
ip a
```

![ubuntu VLAN](images/vrack3-ubuntu-02.png){.thumbnail}

#### Debian

En primer lugar, instale el paquete **vlan** en el servidor. Para ello, ejecute el siguiente comando:

```sh
sudo apt-get install vlan
```

Le recomendamos que cree una etiqueta VLAN, que le permitirá diferenciar las distintas VLAN.

```sh
vconfig add eth1 10

Added VLAN with VID == 10 to IF -:eth1:-
```

A continuación, es necesario declarar el rango de direcciones IP en el vRack y etiquetarlo con su identificador. Para ello, ejecute el siguiente comando:

```sh
ip addr add 192.168.0.0/16 dev eth1.10
```

Por último, modifique la configuración de la interfaz de red para que reconozca la etiqueta de la VLAN. Para ello, abra el archivo de configuración de la interfaz de red y edítelo añadiendo lo que se indica a continuación:

```sh
sudo nano /etc/network/interfaces

auto eth1.10
iface eth1.10 inet static
address 192.168.0.50
netmask 255.255.0.0
broadcast 192.168.255.255
```

### En Windows

Conéctese al servidor mediante el escritorio remoto y abra la aplicación **Administrador del servidor**. Haga clic en `Local Server`{.action} del menú izquierdo. En el panel **Propiedades**, haga clic en el enlace `Disabled`{.action} situado junto a **Formación de equipos de NIC**.

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

A continuación, haga clic con el botón derecho en la interfaz de red y seleccione `Add to New Team`{.action}.

![Windows vLAN](images/vrack2-windows-02.0.png){.thumbnail}

En la ventana emergente, cree un nuevo equipo introduciendo un nombre de equipo en el campo **Team name**. Cuando haya terminado, haga clic en `OK`{.action}

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

A continuación, es recomendable indicar la etiqueta de la VLAN. Para ello, en el panel **Adaptadores e interfaces** de la pantalla **Formación de equipos de NIC**, haga clic derecho en la interfaz que acaba de añadir al nuevo equipo y seleccione `Properties`{.action}. Después marque la opción `Specific VLAN`{.action} e introduzca la etiqueta.

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Ahora hay que configurar la dirección IP de la VLAN. Para ello, abra la pantalla de inicio y haga clic en `Control Panel`{.action}.

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Haga clic en `Network and Internet`{.action}.

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Haga clic en `Network and Sharing Center`{.action}.

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Haga clic en `Change adapter settings`{.action}.

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

A continuación, haga clic derecho en la interfaz VLAN y seleccione `Properties`{.action}.

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Tenga en cuenta que en nuestro ejemplo, `Ethernet 2` es la interfaz utilizada para el vRack. Sin embargo, es posible que el vRack NIC sea una interfaz diferente en su configuración. La correcta será la interfaz que no tenga la dirección IP principal del servidor o que tenga una IP autoasignada.

Haga doble clic en `Internet Protocol Version 4 (TCP/IPv4)`{.action}.

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

Marque la opción `Use the following IP address`{.action}. En **Dirección IP**, introduzca una dirección IP de su rango interno. En **Máscara de subred** introduzca **255.255.0.0**.

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Por último, haga clic en `OK`{.action} para guardar los cambios y reinicie el servidor.

## Más información

[Configurar varios servidores dedicados en el vRack](/pages/bare_metal_cloud/dedicated_servers/vrack_configuring_on_dedicated_server){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
