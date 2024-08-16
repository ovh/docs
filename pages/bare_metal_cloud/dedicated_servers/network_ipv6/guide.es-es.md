---
title: 'Configurar IPv6 en un servidor dedicado'
excerpt: 'Descubra cómo configurar direcciones IPv6 en nuestra infraestructura'
updated: 2024-07-15
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

El protocolo de internet versión 6 (IPv6) es la última versión del protocolo de internet (IP). Ha sido diseñado para hacer frente a la creciente escasez de direcciones de su predecesor, el IPv4, utilizando direcciones de 128 bits en vez de 32 bits. 
Los servidores de las gamas High Grade, Scale y Advance (desde julio de 2024) se entregan con un bloque /56 IPv6, mientras que los antiguos servidores se entregan con un bloque/64 IPv6. Un servidor entregado con un bloque /56 IPv6, permite disponer de hasta 18 quintillones de direcciones IP.

**Esta guía explica cómo configurar las direcciones IPv6 en su servidor siguiendo varios ejemplos.**

> [!warning]
> OVHcloud le ofrece una serie de servicios cuya configuración y gestión recaen sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
> El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) y/o el editor de <i>software</i> del servicio si tiene dificultades. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección «Más información» de esta guía.
>

## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/) en su cuenta de OVHcloud
- Tener toda la información relativa a su IPv6 (prefijo, puerta de enlace, etc.)
- Tener conocimientos básicos de redes y de [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

> [!warning]
> Tenga en cuenta que los servidores Kimsufi se entregan con un único bloque IPv6 (/128). IPv6 se configurará automáticamente al instalar el sistema operativo.
>

## Procedimiento

Las siguientes secciones contienen las configuraciones de distribuciones que ofrecemos actualmente y los sistemas operativos y distribuciones más utilizados. En primer lugar, conéctese al servidor por SSH o mediante una sesión de conexión GUI (RDP para un servidor Windows).

En los servidores dedicados, la primera IPv6 se declara como 2607:5300:xxxx:xxxx::/64. Por ejemplo, si hemos asignado a su servidor el rango IPv6: `2607:5300:abcd:efgh::/64`, la primera IPv6 de su servidor será: `2607:5300:abcd:efgh::/64`.

Por defecto, la primera IPv6 se configura en la mayoría de las distribuciones Linux recientes que ofrecemos en la instalación, por lo que la pasarela ya está incluida en el archivo de configuración. En la mayoría de los casos, no será necesario añadirla manualmente.

Antes de empezar, le recomendamos que eche un vistazo a la siguiente tabla, que recoge los valores que utilizaremos en esta guía. Se refiere a los términos que utilizaremos en esta guía:

|Término|Descripción|Ejemplo|
|---|---|---|
|YOUR_IPV6|Esta es una dirección IPv6 del bloque IPv6 asignado a su servidor|2607:5300:xxxx:xxxx::1|
|IPv6_PREFIX|Prefijo (o *netmask*) de su bloque IPv6, normalmente 64|2607:5300:xxxx:xxxx::/64|
|IPv6_GATEWAY|Es la puerta de enlace (o *gateway*) de su bloque IPv6|2607:5300:xxxx:ff:ff:ff:ff:ff:ff:ff:ff o fe80::1|

En nuestros ejemplos utilizaremos el editor de texto `nano`. Por supuesto, puede utilizar el editor de texto que desee.

### Puerta de enlace predeterminada (Gateway)

El primer paso consiste en recuperar la pasarela (Gateway) IPv6 asignada al servidor. Existen dos formas de hacerlo.

- [Obtener la información de red desde el área de cliente](#viacontrolpanel).
- [Obtener información de red a través de las API](#viaapi).

#### Desde el área de cliente <a name="viacontrolpanel"></a>

Conéctese a su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor en la sección `Servidores dedicados`{.action}.

La pasarela IPv6 asignada a su servidor se muestra en la sección `Red` de la pestaña `Información general`{.action}. Una vez copiada, vaya al paso 2 «[Aplicar la configuración IPv6](#applyipv6)».

![configureipv6](images/ipv6_information.png){.thumbnail}

#### A través de las API de OVHcloud <a name="viaapi"></a>

Otra forma de recuperar la información de red del servidor es [utilizar la API de OVHcloud](/pages/manage_and_operate/api/first-steps).

Ejecute la siguiente llamada a la API, indicando el nombre interno del servidor (por ejemplo: `ns3956771.ip-169-254-10.eu`):

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Tenga en cuenta que los « 0 » de cabeza pueden eliminarse en una pasarela IPv6.

Ejemplo:

IPv6_GATEWAY: `2607:5300:60:62FF:00FF:00FF:00FF:00FF` también se puede escribir como `2607:5300:60:62FF:FF:FF:FF:FF:FF:FF:FF`.

> [!warning]
> 
> Antes de editar un archivo de configuración, cree siempre una copia de seguridad del original para poder volver si surge algún problema. 
> 

### Sistemas operativos Debian y basados en Debian (excepto Debian 12)

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

El archivo de configuración de red del servidor se encuentra en `/etc/network/interfaces.d`. Antes de continuar, cree una copia de seguridad del archivo utilizando uno de los siguientes comandos:

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

#### 5. Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Si no consigue hacer ping a esta dirección IPv6, compruebe su configuración e inténtelo de nuevo. Asegúrese también de que la maquina que está comprobando esté conectada con IPv6. Si aun así sigue sin funcionar, compruebe su configuración en [modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

### Fedora 38 y superior

El ejemplo de configuración siguiente se basa en Fedora 39.

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
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=YOUR_IPV6/IPv6_PREFIX
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
dns=2001:41d0:3:163::1;
```

Si necesita configurar más direcciones IPv6, la configuración debería ser similar a la siguiente:

```console
[ipv6]
method=auto
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
method=auto
may-fail=true
address1=2607:5300:xxxx:xxxx::/xx
address2=2607:5300:adce:f2cd::1/64
gateway=2607:5300:xxxx:xxff:ff:ff:ff:ff
```

Adición de direcciones IPv6 adicionales:

```console
[ipv6]
method=auto
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

#### 5. Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

Si no consigue hacer ping a esta dirección IPv6, compruebe su configuración e inténtelo de nuevo. Asegúrese también de que la maquina que está comprobando esté conectada con IPv6. Si aun así sigue sin funcionar, compruebe su configuración en [modo de rescate](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).


### Debian 12, Ubuntu 20.04 y posteriores

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

A continuación, editamos el archivo de configuración:

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

#### 5. Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### CentOS 7, Alma Linux (8 y 9) y Rocky Linux (8 y 9)

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

A continuación, editamos el archivo de configuración:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:adce:f2cd::/64
IPV6_DEFAULTGW=2607:5300:adce:f2ff:ff:ff:ff:ff
```

Para Alma Linux y Rocky linux, el contenido del archivo de configuración puede diferir del mostrado arriba, en cuyo caso simplemente añada los elementos que faltan. No reemplace nada en el archivo original.

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

**Para Alma Linux y Rocky Linux**

```sh
sudo systemctl restart NetworkManager
```

También puede reiniciar el servidor para aplicar los cambios.

#### 5. Comprobar la conectividad de la IPv6

Puede comprobar la conectividad de la IPv6 ejecutando los comandos siguientes:

```sh
ping6 -c 4 2001:4860:4860::8888

PING 2001:4860:4860::8888(2001:4860:4860::8888) 56 data bytes
64 bytes from 2001:4860:4860::8888: icmp_seq=1 ttl=57 time=4.07 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=2 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=3 ttl=57 time=4.08 ms
64 bytes from 2001:4860:4860::8888: icmp_seq=4 ttl=57 time=4.07 ms

--- 2001:4860:4860::8888 ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3003ms
rtt min/avg/max/mdev = 4.075/4.079/4.083/0.045 ms
```

### Windows Server 2016 y versiones posteriores

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

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
