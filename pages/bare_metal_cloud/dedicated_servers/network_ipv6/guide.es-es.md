---
title: 'Configurar IPv6 en un servidor dedicado'
excerpt: 'Descubra cómo configurar direcciones IPv6 en nuestra infraestructura'
updated: 2025-12-09
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

El protocolo de internet versión 6 (IPv6) es la última versión del protocolo de internet (IP). Ha sido diseñado para hacer frente a la creciente escasez de direcciones de su predecesor, el IPv4, utilizando direcciones de 128 bits en vez de 32 bits. 
Los servidores de las gamas High Grade, Scale y Advance (desde julio de 2024) se entregan con un bloque /56 IPv6, mientras que los antiguos servidores se entregan con un bloque/64 IPv6. Un servidor entregado con un bloque /56 IPv6, permite disponer de hasta 18 quintillones de direcciones IP.

**Esta guía explica cómo configurar las direcciones IPv6 en su servidor siguiendo varios ejemplos.**

> [!primary]
>
> Este artículo explica cómo configurar una dirección IP principal. En los servidores compatibles con el vRack, también puede configurar direcciones Additional IP en un vRack en lugar de en la interfaz pública del servidor. Consulte las instrucciones correspondientes en los siguientes artículos:
>
> - IPv4: [Configurar un bloque de IP en el vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack).
> - IPv6: [Configuring an IPv6 block in a vRack](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

> [!warning]
> OVHcloud le ofrece una serie de servicios cuya configuración y gestión recaen sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
> El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un [proveedor especializado](/links/partner) y/o el editor de <i>software</i> del servicio si tiene dificultades. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección [«Más información»](#go-further) de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](/links/bare-metal/bare-metal) en su cuenta de OVHcloud
- Tener toda la información relativa a su IPv6 (prefijo, puerta de enlace, etc.)
- Tener conocimientos básicos de redes y de [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

> [!warning]
> Tenga en cuenta que los servidores Kimsufi se entregan con un único bloque IPv6 (/128). IPv6 se configurará automáticamente al instalar el sistema operativo.
>

## Procedimiento

Las siguientes secciones contienen las configuraciones de distribuciones que ofrecemos actualmente y los sistemas operativos y distribuciones más utilizados. En primer lugar, conéctese al servidor por SSH o mediante una sesión de conexión GUI (RDP para un servidor Windows).

En los servidores dedicados, la primera IPv6 se declara como 2607:5300:xxxx:xxxx::/64. Por ejemplo, si hemos asignado a su servidor el rango IPv6: `2607:5300:abcd:efgh::/64`, la primera IPv6 de su servidor será: `2607:5300:abcd:efgh::`.

Por defecto, la primera IPv6 se configura en la mayoría de las distribuciones Linux recientes que ofrecemos en la instalación, por lo que la pasarela ya está incluida en el archivo de configuración. En la mayoría de los casos, no será necesario añadirla manualmente.

Antes de empezar, le recomendamos que eche un vistazo a la siguiente tabla, que recoge los valores que utilizaremos en esta guía. Se refiere a los términos que utilizaremos en esta guía:

|Término|Descripción|Ejemplo|
|---|---|---|
|YOUR_IPV6|Esta es una dirección IPv6 del bloque IPv6 asignado a su servidor|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Prefijo (o *netmask*) de su bloque IPv6, normalmente 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Es la puerta de enlace (o *gateway*) de su bloque IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff:ff:ff:ff o fe80::1|

En nuestros ejemplos utilizaremos el editor de texto `nano`. Por supuesto, puede utilizar el editor de texto que desee.

### Puerta de enlace predeterminada (Gateway)

El primer paso consiste en recuperar la pasarela (Gateway) IPv6 asignada al servidor.

> [!tabs]
> **Desde el área de cliente**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en la sección `Servidores dedicados`{.action}.
>>
>> La pasarela IPv6 asignada a su servidor se muestra en la sección `Red` de la pestaña `Información general`{.action}. Una vez copiado, continúe con la aplicación de configuración IPv6.
>>
>> ![configureipv6](images/ipv6_information.png){.thumbnail}
>>
> **A través de las API de OVHcloud**
>>
>> Otra forma de recuperar la información de red del servidor es [utilizar la API de OVHcloud](/pages/manage_and_operate/api/first-steps).
>>
>> Ejecute la siguiente llamada a la API, indicando el nombre interno del servidor (por ejemplo: `ns3956771.ip-169-254-10.eu`):
>>
>> > [!api]
>> >
>> > @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>> >

Tenga en cuenta que los « 0 » de cabeza pueden eliminarse en una pasarela IPv6.

Ejemplo:

IPv6_GATEWAY: `2607:5300:60:62FF:00FF:00FF:00FF:00FF` también se puede escribir como `2607:5300:60:62FF:FF:FF:FF:FF:FF:FF:FF`.

> [!warning]
> 
> Antes de editar un archivo de configuración, cree siempre una copia de seguridad del original para poder volver si surge algún problema. 
> 

> [!primary]
> Algunos sistemas operativos requieren que se añadan por defecto rutas IPv6 estáticas al fichero de configuración original. Si este es el caso, simplemente añada su configuración para IPv6 como se indica en la guía, no modifique ninguna línea del fichero original.
>

/// details | **Sistemas operativos Debian y basados en Debian (excepto Debian 12)**

> [!warning]
>
> Antes de seguir los pasos que se indican a continuación, es muy recomendable que deshabilite la autoconfiguración IPv6 y el «router advertising» para prevenir problemas conocidos. Para ello, debe añadir las siguientes líneas a su archivo `sysctl.conf` que se encuentra en /etc/sysctl.conf:
> 
> `net.ipv6.conf.all.autoconf=0`
> 
> `net.ipv6.conf.all.accept_ra=0`
> 
> Una vez realizado esto, puede aplicar estas reglas ejecutando el siguiente comando: `sudo sysctl -p`.
> 

#### 1. Utilizar SSH para conectarse al servidor

```sh
ssh user@serverIP
```

#### 2. Crear una copia de seguridad

El archivo de configuración de red del servidor se encuentra en `/etc/network/interfaces.d`. En nuestro ejemplo, se llama `50-cloud-init`. Antes de continuar, cree una copia de seguridad de su archivo utilizando el siguiente comando:

```sh
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

#### 3. Modificar el archivo de configuración de red

No modifique las líneas existentes en el archivo de configuración. Añada las líneas para su configuración IPv6, sustituyendo `YOUR_IPv6` y `IPv6_PREFIX` por sus propios valores. En este ejemplo, la interfaz de red se llama `eth0`. La interfaz del servidor puede ser diferente.

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address YOUR_IPv6
    netmask IPv6_PREFIX

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

**Debian 10**

```console
iface eth0 inet6 static 
    address YOUR_IPv6 
    netmask 64

post-up /sbin/ip -f inet6 route add IPv6_GATEWAY dev eth0 
post-up /sbin/ip -f inet6 route add default via IPv6_GATEWAY 
pre-down /sbin/ip -f inet6 route del IPv6_GATEWAY dev eth0
pre-down /sbin/ip -f inet6 route del default via IPv6_GATEWAY
```

Se pueden añadir direcciones IPv6 adicionales con las siguientes líneas en el fichero de configuración: `up ip -6 addr add ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`, `up ip -6 addr add ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`, etc.

Para asegurarse de que la IPv6 está activada o desactivada cuando la interfaz eth0 está activada o desactivada, debe añadir la siguiente línea a la configuración:

`down ip -6 addr del ADDITIONAL_IPV6_1/IPv6_PREFIX dev eth0`<br>
`down ip -6 addr del ADDITIONAL_IPV6_2/IPv6_PREFIX dev eth0`

**Ejemplo de configuración:**

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Adición de direcciones IPv6 adicionales:

```console
auto eth0
iface eth0 inet dhcp
    accept_ra 0

iface eth0 inet6 static
    address 2607:5300:adce:f2cd::1
    netmask 64
    up ip -6 addr add 2607:5300:adce:f2cd::2/64 dev eth0
    up ip -6 addr add 2607:5300:adce:f2cd::3/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::2/64 dev eth0
    down ip -6 addr del 2607:5300:adce:f2cd::3/64 dev eth0

# control-alias eth0
iface eth0 inet6 static
    address 2607:5300:xxxx:xxxx::/xx
    dns-nameservers 2001:41d0:3:163::1
    gateway 2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### 4. Guardar el archivo y aplicar los cambios

Guarde los cambios realizados en el archivo y reinicie la red o reinicie el servidor para que los cambios surtan efecto.

```sh
sudo /etc/init.d/networking restart
```
///

/// details | **Fedora 42 y superior**

El ejemplo de configuración siguiente se basa en Fedora 42.

Fedora ahora utiliza archivos clave (*keyfiles*).
Fedora solía utilizar perfiles de red almacenados por NetworkManager en formato ifcfg en el directorio `/etc/sysconfig/network-scripts/`.<br>
Como el ifcfg ya no está actualizado, NetworkManager ya no crea nuevos perfiles en este formato de forma predeterminada. El archivo de configuración se encuentra ahora en `/etc/NetworkManager/system-connections/`.

En este ejemplo, nuestro archivo se llama `cloud-init-eno1.nmconnection`.

#### 1. Utilizar SSH para conectarse al servidor

```sh
ssh user@serverIP
```

#### 2. Crear una copia de seguridad

> [!primary]
>
> Tenga en cuenta que el nombre del archivo de red en nuestro ejemplo puede ser diferente del suyo. Reemplácelo por el nombre del archivo.
>

En primer lugar, debe realizar una copia del archivo de origen para poder volver atrás en cualquier momento:

```sh
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

#### 3. Modificar el archivo de configuración de red

Edite el archivo agregando las siguientes líneas, sin realizar ningún cambio en el archivo original. Sustituya los elementos genéricos (es decir, `YOUR_IPV6` e `IPv6_PREFIX`) por sus valores específicos. También omitimos la configuración IPv4 para evitar confusiones, pero la configuración IPv6 se realiza en el mismo archivo de configuración.

```console
[ipv6]
method=manual
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
dns=2001:41d0:3:163::1;
```

Si necesita configurar más direcciones IPv6, la configuración debería ser similar a la siguiente:

```console
[ipv6]
method=manual
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=ADDITIONAL_IPV6_1/IPv6_PREFIX
address3=ADDITIONAL_IPV6_2/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
dns=2001:41d0:3:163::1;
```

**Ejemplo de configuración:**

```sh
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

A continuación, editamos el archivo de configuración:

```console
[ipv6]
method=manual
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

```console
[ipv6]
method=manual
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
address3=2607:5300:adce:f2cd::2/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

#### 4. Guardar el archivo y aplicar los cambios

Guarde los cambios realizados en el archivo y reinicie la red o el servidor para aplicar los cambios.

```sh
sudo systemctl restart NetworkManager
```
///

/// details | **Debian 12, Ubuntu 22.04 y posteriores**

El ejemplo de configuración siguiente está basado en Ubuntu 22.04 (Jammy Jellyfish).

Los archivos de configuración de red se encuentran en el directorio `/etc/netplan/`. Por defecto, el fichero de configuración principal se llama `50-cloud-init.yaml`.

#### 1. Utilizar SSH para conectarse al servidor

```sh
ssh user@serverIP
```

#### 2. Crear el archivo de configuración de red

El mejor enfoque es crear un archivo de configuración independiente con una extensión .yaml para configurar las direcciones IPv6 en el directorio `/etc/netplan/`. De esta forma, puede revertir fácilmente los cambios en caso de error.

En nuestro ejemplo, nuestro archivo se llama `51-cloud-init-ipv6.yaml`:

```sh
sudo touch /etc/netplan/51-cloud-init-ipv6.yaml
```

#### 3. Modificar el archivo de configuración de red

Mediante un editor de texto, modifique el archivo `51-cloud-init-ipv6.yaml` añadiendo las siguientes líneas a las secciones correspondientes, como se muestra en el ejemplo a continuación.

Sustituya los valores genéricos (`YOUR_IPV6` e `IPV6_PREFIX`) y la interfaz de red (si el servidor no utiliza **eno3**) por sus valores específicos.

```yaml
network:
    version: 2
    ethernets:
         eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPV6_PREFIX
```

Si necesita configurar más de una dirección IPv6, la configuración debería ser similar a la siguiente:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
              - ADDITIONAL_IPV6_1/IPv6_PREFIX
              - ADDITIONAL_IPV6_2/IPv6_PREFIX
```

> [!warning]
>
> Es importante respetar la alineación de cada elemento del archivo, tal y como se muestra en el ejemplo anterior. No utilice la tecla de tabulación para crear el espacio. Sólo es necesaria la tecla espacio. 
>

**Ejemplo de configuración:**

```sh
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

```yaml
network:
    version: 2
    ethernets:
          eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
```

Adición de direcciones IPv6 adicionales:

```yaml
network:
    version: 2
    ethernets:
        eno3:
            dhcp6: no
            match:
              name: eno3
            addresses:
              - 2607:5300:adce:f2cd::1/64
              - 2607:5300:adce:f2cd::2/64
              - 2607:5300:adce:f2cd::3/64
```

#### 4. Probar y aplicar la configuración

Para probar su configuración, utilice el siguiente comando:

```sh
sudo netplan try
```

Si es correcta, puede aplicarla con el siguiente comando:

```sh
sudo netplan apply
```
///

/// details | **CentOS 7, AlmaLinux (8/9/10) y Rocky Linux (8/9/10)**

El ejemplo de configuración siguiente está basado en CentOS 7.

El archivo de configuración de red se encuentra en el directorio `/etc/sysconfig/network-scripts`. En nuestro ejemplo, se llama `ifcfg-eth0`.

#### 1. Utilizar SSH para conectarse al servidor

```sh
ssh user@serverIP
```

#### 2. Crear una copia de seguridad

> [!primary]
>
> Tenga en cuenta que el nombre del archivo de red en nuestro ejemplo puede ser diferente del suyo. Por favor, conéctelo a su nombre de archivo.
>

En primer lugar, realice una copia del archivo de configuración para poder volver atrás en cualquier momento:

```sh
sudo cp -r /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0.bak
```

#### 3. Modificar el archivo de configuración de red

En el archivo de configuración abierto, agregue las siguientes líneas si faltan. Sustituya los elementos genéricos (es decir, `YOUR_IPv6`, `IPV6_GATEWAY` e `IPV6_PREFIX`) por sus valores específicos. Además, hemos omitido la configuración IPv4 para evitar confusiones, pero la configuración IPv6 se realiza en el mismo archivo de configuración.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Si necesita configurar más direcciones IPv6, añádalas en la línea `IPV6ADDR_SECONDARIES`, separadas por espacios en blanco. la configuración debería ser similar a la siguiente:

```console
IPV6ADDR_SECONDARIES="ADDITIONAL_IPV6_1/IPV6_PREFIX ADDITIONAL_IPV6_2/IPV6_PREFIX etc..."
```

**Ejemplo de configuración:**

```sh
sudo nano /etc/sysconfig/network-scripts/ifcfg-eth0
```

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::/64
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
```

Para AlmaLinux y Rocky linux, el contenido del archivo de configuración puede diferir del mostrado arriba, en cuyo caso simplemente añada los elementos que faltan. No reemplace nada en el archivo original.

Adición de direcciones IPv6 adicionales:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
IPV6ADDR_SECONDARIES="2607:5300:adce:f2cd::1/64 2607:5300:adce:f2cd::2/64"
```

#### 4. Guardar archivo y aplicar cambios

Guarde los cambios en el archivo y reinicie la red mediante uno de los siguientes comandos:

```sh
sudo systemctl restart network
```

**Para AlmaLinux y Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

También puede reiniciar el servidor para aplicar los cambios.

///

/// details | **Windows Server 2016 y versiones posteriores**

#### 1. Conéctese a su servidor por RDP

Más información en [esta guía](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server).

#### 2. Abrir la configuración de red de su servidor
Primero, haga clic derecho en el icono de red en el área de notificaciones para ir a la sección `Red y recursos compartidos`{.action}.

![Red y recursos compartidos](images/ipv6_network_sharing_center.png){.thumbnail}

Haga clic en `Cambiar configuración del adaptador`{.action}.

![Cambiar configuración del adaptador](images/ipv6_change_adapter_settings.png){.thumbnail}

Haga clic derecho en su adaptador de red, y seleccione `Propiedades`{.action}.

![Propiedades del adaptador de red](images/ipv6_network_adapter_properties.png){.thumbnail}

Seleccione `Protocolo de internet versión 6`{.action}, y haga clic en `Propiedades`{.action}.

![Propiedades](images/ipv6_properties.png){.thumbnail}

#### 3. Modificar la configuración de red 

Introduzca su configuración IPv6 (`IPv6 address` y `Default gateway`), marque la casilla `Validar los parámetros al salir` y haga clic en el botón `OK`{.action} para aceptar los cambios.

![Propiedades](images/ipv6_configuration.png){.thumbnail}

///

### Comprobar la configuración y probar la conexión.

Existen varios comandos para comprobar que la configuración funcione, según el sistema operativo.

- **Para un sistema GNU/Linux**, puede utilizar la interfaz **eth0** (deberá adaptarla si fuera necesario):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    altname enxa8a1598c6836
    inet6 2607:5300:201:abcd::/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 2607:5300:201:abcd::1/64 scope global noprefixroute
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2607:5300:201:abcd::/64
          Scope:Global
          inet6 addr: 2607:5300:201:abcd::1/64
          Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Para probar la conexión, utilice el siguiente comando:

```bash
ping6 -c 4 proof.ovh.net
```

- **Para un sistema Windows**, utilice el siguiente comando:

```powershell
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::/64
   IPv6 Address. . . . . . . . . . . : 2607:5300:201:abcd::1/64
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2607:5300:201:abcd:ff:ff:ff:ff:ff
                                       51.xxx.xxx.y
```

Para probar la conexión, utilice el siguiente comando:

```powershell
ping -6 proof.ovh.net
```

También puede probar la conexión a otro servidor remoto. No obstante, es necesario que IPv6 esté activo en el servidor remoto para que esta operación funcione.

### Diagnóstico

¿Ha configurado su IPv6 pero no funciona?

Existe una operación sencilla para determinar si el defecto se encuentra en la configuración realizada o en la red de OVHcloud.

En primer lugar, [ponga su servidor en modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

A continuación, utilice los siguientes comandos para configurar su IPv6 de forma no persistente, sustituyendo «YOUR_IPV6», «IPV6_PREFIX» e «IPV6_GATEWAY» por sus propios datos:

```sh
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Pruebe de nuevo su red a través de un ping6 por ejemplo:

```sh
ping6 ipv6.google.com
```

En cualquier caso, no dude en ponerse en contacto con [nuestro equipo de soporte](https://help.ovhcloud.com/csm?id=csm_get_help) para solicitar una revisión de su configuración. Será necesario proporcionar:

- El nombre y la versión del sistema operativo que utilice en el servidor;
- El nombre y el directorio del archivo de configuración de red;
- El contenido de ese archivo. 

## Más información <a name="go-further"></a>

Interactúe con nuestra [comunidad de usuarios](/links/community).