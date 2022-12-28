---
title: Configurar la IPv6 en un VPS
slug: configurar-ipv6
excerpt: Cómo configurar la IPv6 en un VPS de OVHcloud
section: 'Red e IP'
order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 01/12/2022**

## Objetivo

El protocolo de internet versión 6 (IPv6) es la última versión del protocolo de internet (IP). Cada VPS de OVHcloud se entrega con una dirección IPv4 y una dirección IPv6. Por defecto solo está configurada la IPv4, Si debe configurar la IPv6, deberá hacerlo manualmente en su sistema.

**Esta guía explica cómo configurar la IPv6 en un VPS de OVHcloud de varias formas.**

> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener un [VPS de OVHcloud](https://www.ovhcloud.com/es/vps/){.external}.
- Estar conectado al VPS por SSH (acceso root) o a través de un escritorio remoto (Windows).
- Tener conocimientos básicos de redes.
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} o a la [API de OVHcloud](https://ca.api.ovh.com/).

## Procedimiento

> [!primary]
>
> Las configuraciones visibles en esta guía son un ejemplo, que puede variar en función del sistema operativo que utilice en su VPS.
> 

Para configurar la IPv6 en un VPS, es necesario realizar diversas acciones, Se le pedirá regularmente que utilice comandos o personalice la configuración de su servidor. 

Antes de empezar, le recomendamos que eche un vistazo a la siguiente tabla, que recoge los valores que utilizaremos en esta guía, junto con su descripción:

|Valor|Descripción|Ejemplo|
|---|---|---|
|YOUR_IPV6|Dirección IPv6 asignada al servicio.|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Es el prefijo (o *máscara* de red) del bloque IPv6, generalmente de 128.|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Puerta de enlace (gateway) del bloque IPv6.|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### 1\. Obtener la información relativa a la red

En primer lugar, es necesario conocer la dirección IPV6 y la puerta de enlace IPv6 asignadas al servidor. Existen dos formas de obtener esta información:

- [Desde el área de cliente](#viacontrolpanel)
- [A través de la API](#viaapi)

#### Desde el área de cliente <a name="viacontrolpanel"></a>

Conéctese al [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Bare Metal Cloud`{.action} y seleccione el servidor en la sección `Servidores Privados Virtuales`{.action}.

En el apartado IP podrá ver la dirección IPv6 y la puerta de enlace IPv6 asignadas al VPS. Anótelas y continúe en el apartado 2 « [Aplicar la configuración IPv6](#applyipv6). »

![Configuración IPv6](images/configure-ipv6-step1.png){.thumbnail}

#### A través de la API de OVHcloud <a name="viaapi"></a>

Vaya al sitio web <https://ca.api.ovh.com/console/> y conéctese a él con su ID de cliente de OVHcloud. Utilice las llamadas a la API que se indican a continuación.

Para obtener la dirección IPv6 asignada al VPS:

> [!api]
>
> @api {GET} /vps/{serviceName}/ips
>

Para obtener la puerta de enlace IPv6 asignada al VPS:

> [!api]
>
> @api {GET} /vps/{serviceName}/ips/{ipAddress}
>

Una vez que haya recuperado las direcciones, vaya al paso 2. [Aplicar la configuración IPv6](#applyipv6).

### 2\. aplicar la configuración IPv6 <a name="applyipv6"></a>

Una vez que disponga de la información necesaria para configurar la IPv6, conéctese al VPS por SSH. Si lo necesita, puede consultar la guía [Introducción al SSH](../../dedicated/introduccion-ssh/){.external}.

Existen varias formas de aplicar la configuración IPv6. Utilice los siguientes enlaces para ir directamente a la necesite, según su caso:

- [Aplicación no persistente](#nonpersistent)
- [Aplicación persistente en Debian y derivados (Ubuntu, Crunchbang, SteamOS…)](#persistentdebian)
- [Aplicación persistente en Red Hat y derivados (CentOS, ClearOS…)](#persistentredhat)
- [Aplicación persistente en Windows Server](#persistentwindows)

#### Aplicación no persistente <a name="nonpersistent"></a>

> [!warning]
>
> Esta configuración se perderá después de reiniciar el VPS (configuración no persistente). 
> 

Una vez que se haya conectado al VPS por SSH, utilice los comandos que se indican a continuación. No olvide:

- sustituir los valores genéricos («YOUR_IPV6», «IPV6_PREFIX» e «IPV6_GATEWAY»)  por los datos obtenidos anteriormente;
- modificar la interfaz de red, si la que utiliza no es «eth0».

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

#### Aplicación persistente en Debian y derivados (Ubuntu, Crunchbang, SteamOS...) <a name="persistentdebian"></a>

> [!warning]
>
> Antes de editar un archivo de configuración, cree siempre una copia de seguridad del original si surge algún problema.
>

Dos métodos para configurar su red:

- **para Debian 11 e inferior, Ubuntu 16.04 e inferior**: utilice el [método basado en el archivo *interfaces*](#interfaces).

- **para Ubuntu 17.04 y versiones posteriores**: utilice el [método basado en la función *Netplan*](#netplan).

En algunos casos, el método a utilizar puede no ser el indicado anteriormente. Para asegurarse, navegue por el sistema para comprobar el método actual.  Visite el sitio <https://netplan.io/> para más información, si es necesario.

> [!primary]
>
> Tenga en cuenta que los nombres exactos de los archivos pueden variar.
>

##### Configuración de archivos *interfaces* <a name="interfaces"></a>

El método más utilizado es crear un archivo de configuración en el directorio `/etc/network/interfaces.d/`:

```bash
nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

De este modo, podrá separar la configuración IPv6 y, en caso de error, restablecer fácilmente los cambios.

Añada las siguientes líneas al archivo. Sustituya los valores genéricos (es decir, *YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) y la interfaz de red (si el servidor no utiliza **eth0**) por sus valores personalizados.

```
auto eth0
iface eth0 inet static
mtu 1500
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

A continuación, reinicie el servicio de red con uno de los siguientes comandos:

```bash
service networking restart
```

```bash
systemctl restart networking
```

También puede añadir la configuración anterior a uno de los siguientes archivos (con privilegios *sudo*), según la generación del sistema operativo instalado en el servidor:

- archivo `/etc/network/interfaces`
- el archivo `/etc/network/interfaces.d/50-cloud-init.cfg`

Le recomendamos que guarde el archivo de configuración correspondiente. Por ejemplo, utilice el siguiente comando:

```bash
cp /etc/network/interfaces /etc/network/interfaces.bak
```

Podrá cancelar los cambios con los siguientes comandos:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.bak /etc/network/interfaces
```

##### Configuración con Netplan <a name="netplan"></a>

Los archivos de configuración de red se encuentran en el directorio `/etc/netplan/`. En primer lugar, le recomendamos que guarde el archivo de configuración correspondiente. En ese caso, copie el archivo `50-cloud-init.yaml` con los siguientes comandos:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Podrá cancelar los cambios con los siguientes comandos:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Antes de modificarlo, cree una copia del archivo de configuración IPv6:

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

A continuación, edite el archivo `51-cloud-init-ipv6.yaml` añadiendo la configuración IPv6 del servidor. Sustituya los valores genéricos (es decir, *YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) y la interfaz de red (si el servidor no utiliza **eth0**) por sus valores personalizados.

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - YOUR_IPV6/IPv6_PREFIX
            gateway6: IPv6_GATEWAY
            routes:
              - to: IPv6_GATEWAY
                scope: link
              - to: ::/0
                via: IPv6_GATEWAY
```

> [!warning]
>
> Es importante mantener la alineación de cada elemento del archivo, tal y como se muestra en el ejemplo anterior. No use la tecla de tabulación para crear el espacio. Sólo es necesaria la tecla espacio.
>

Para probar su configuración, utilice el siguiente comando:

```bash
netplan try
```

Si es correcta, puede aplicarla con el siguiente comando:

```bash
netplan apply
```

#### Aplicación persistente en Red Hat y sus derivados (CentOS, ClearOS, etc.) <a name="persistentredhat"></a>

Los archivos de configuración de red se encuentran en el directorio `/etc/sysconfig/network-scripts/`. En primer lugar, le recomendamos que guarde el archivo de configuración correspondiente. Por ejemplo, copie el archivo `ifcfg-eth0` con los siguientes comandos. Si lo necesita, no olvide sustituir **eth0** por la interfaz real.

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Podrá cancelar los cambios con los siguientes comandos:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

A continuación, edite el archivo `ifcfg-eth0` añadiendo la configuración IPv6 del servidor. Sustituya los elementos genéricos (es decir, *YOUR_IPV6*, *IPV6_PREFIX* e *IPV6_GATEWAY*) por sus valores personalizados.

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

**En CentOS 7, además de los pasos anteriores, debe crear un archivo de enrutado:**

- Cree un archivo (con los permisos *sudo*), indicando las rutas IPv6 por defecto:

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

- Modifique el archivo y añada las siguientes líneas. Sustituya los elementos genéricos (*IPV6_GATEWAY* y **eth0**, si fuera necesario) por sus valores personalizados.

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Por último, reinicie el servicio de red para que el sistema pueda aplicar la nueva configuración utilizando uno de los siguientes comandos:

```bash
service networking restart
```

```bash
systemctl restart networking
```


#### Aplicación persistente en Windows Server <a name="persistentwindows"></a>

Por defecto, IPv6 no está configurado en los servidores Windows. Para activarlo, abra el `Panel de control`{.action} y haga clic en `Mostrar estado y tareas de la red`{.action} y luego en `Cambiar configuración del mapa`{.action}.

![Configuración IPv6](images/configure-ipv6-step2.png){.thumbnail}

Haga clic en `Ethernet`{.action} para abrir la configuración y haga clic en el botón `Propiedades`{.action} para ver `Propiedades Ethernet`.

Seleccione `Protocolo de Internet versión 6 (TCP/IPv6)`{.action} y haga clic en el botón `Propiedades`{.action}.

![Configuración IPv6](images/configure-ipv6-step3.png){.thumbnail}

En la ventana Propiedades IPv6, seleccione `Usar la siguiente` dirección IPv6. Introduzca las direcciones IP que ha obtenido en la primera etapa.

También puede introducir las resoluciones DNS IPv6 que desee en el apartado `Usar la siguiente` dirección del servidor DNS. Esta operación no es obligatoria si los Resoltores DNS de la configuración IPv4 ya funcionan.

Por último, marque la casilla `Aceptar configuración al salir` y haga clic en el botón `Aceptar`{.action} para aceptar los cambios. Si la puerta de enlace especificada no se encuentra en la misma subred IPv6 (/128 y /64, por ejemplo), puede aparecer un mensaje de error. Puede ignorar este mensaje y pasar a la siguiente etapa.

![Configuración IPv6](images/configure-ipv6-step4.png){.thumbnail}

### 3\. Comprobar la configuración y probar la conexión.

Existen varios comandos para comprobar que la configuración funcione, según el sistema operativo.

- **Para un sistema GNU/Linux**, puede utilizar la interfaz **eth0** (deberá adaptarla si fuera necesario):

```bash
ip -6 addr show eth0
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qlen 1000
    inet6 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 scope global
       valid_lft forever preferred_lft forever
    inet6 fe80::f816:3eff:fec0:c336/64 scope link
       valid_lft forever preferred_lft forever
```

```bash
ifconfig eth0
eth0      Link encap:Ethernet  HWaddr ab:cd:ef:gf:ij:kl
          inet addr:aa.bb.cc.dd  Bcast:aa.bb.cc.ee  Mask:255.255.255.255
          inet6 addr: 2001:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz/128 Scope:Global
          inet6 addr: fe80::f816:3eff:fec0:c336/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          [...]
```

Para probar la conexión, utilice el siguiente comando:

```bash
ping6 proof.ovh.net
```

- **Para un sistema Windows**, utilice el siguiente comando:

```
ipconfig

Windows IP Configuration

Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : openstacklocal
   IPv6 Address. . . . . . . . . . . : 2001:xxxx:xxxx:xxxx::zzzz
   Link-local IPv6 Address . . . . . : fe80::d928:7a00:5ba6:951b%3
   IPv4 Address. . . . . . . . . . . : 51.xxx.xxx.xxx
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 2001:xxxx:xxxx:xxxx::y
                                       51.xxx.xxx.y
```

Para probar la conexión, utilice el siguiente comando:

```
ping -6 proof.ovh.net
```

También puede probar la conexión a otro servidor remoto. No obstante, es necesario que IPv6 esté activo en el servidor remoto para que esta operación funcione.

> [!primary]
>
> Si, a pesar de los cambios, IPv6 no parece funcionar en su servidor, es posible (en algunos casos) que deba realizar cambios adicionales. En ese caso, realice las siguientes operaciones:
>
> - En función del sistema operativo, intente sustituir el prefijo (o *netmask*) de su dirección IP por /128 y /64. Esto incluirá la pasarela IPv6 en su subred.
>
> - Además de reiniciar el servicio de red, es posible que sea necesario reiniciar el servidor para que se aplique la configuración IPv6.
> 
> - En Windows, compruebe que el cortafuegos autorice las solicitudes ICMP para IPv6.

### 4\. Desactivar la gestión de la red cloud-init (opcional)

> [!primary]
>
> En los sistemas Windows, omita este paso.
>

cloud-init es un paquete que viene instalado por defecto en los VPS. Se trata de un framework que permite ejecutar los scripts que usted indique al crear el VPS o al reiniciarlo. Su mecánica es sencilla: la infraestructura OpenStack inyecta scripts en el entorno cloud-init y, por tanto, en la configuración del VPS.

Según el sistema operativo, cloud-init puede gestionar la red, el hostname, el archivo resolv.conf y el particionamiento automático del disco duro en caso de upgrade.

En distribuciones más recientes (como CentOS, Debian 9, Ubuntu 16.x y versiones posteriores), la configuración por defecto del cloud.init puede a veces reiniciar automáticamente la configuración de red al arrancar el servidor.

En determinados casos de uso, le recomendamos que evite la restauración desactivando la gestión automática de la red en cloud-init. Para ello, utilice el siguiente comando para crear un archivo `/etc/cloud/cloud.cfg.d/98-disable-network-config.cfg` que incluya el valor `network: {config: disabled}`:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

> [!warning]
>
> Reinicie el servidor para que se apliquen los cambios. 
>

Para que cloud-init vuelva a gestionar la red automáticamente, elimine dicho archivo o muévalo a otro directorio.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.