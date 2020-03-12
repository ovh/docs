---
title: 'Configurar una dirección IPv6 en un VPS'
slug: configurar-ipv6
excerpt: 'Cómo configurar una dirección IPv6 en un VPS de OVH'
section: 'Red e IP'
order: 1
---

**Última actualización: 12/03/2020**

## Objetivo

El protocolo de internet versión 6 (**IPv6**) es la última versión del protocolo de internet (IP). Todos los VPS de OVH se entregan con una dirección IPv4 y una dirección IPv6. Por defecto solo está configurada la IPv4, pero existen diversos motivos por los que podría ser necesario configurar la IPv6.

**Esta guía explica cómo configurar la IPv6 en un VPS de OVH.**

> [!warning]
>
> La responsabilidad sobre las máquinas que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. 
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener un [VPS de OVH](https://www.ovh.es/vps/){.external}.
- Estar conectado al VPS por SSH (acceso *root*).
- Tener conocimientos básicos de redes.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

Para configurar la IPv6 en un VPS, es necesario realizar diversas acciones, entre las que se incluyen ejecutar comandos o personalizar la configuración del VPS. 

Antes de empezar, le recomendamos que eche un vistazo a la siguiente tabla, que recoge los valores que utilizaremos en esta guía, junto con su descripción:

|Valor|Descripción|Ejemplo|
|---|---|---|
|YOUR_IPV6|Dirección IPv6 asignada al servicio.|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:yyyy|
|IPv6_PREFIX|Prefijo o máscara de red (*netmask*) del bloque IPv6. Como normal general, es el 128.|2001:xxxx:xxxx:xxxx::/128|
|IPv6_GATEWAY|Puerta de enlace (*gateway*) del bloque IPv6.|2001:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:zzzz|

### 1. Obtener la información relativa a la red

En primer lugar, es necesario conocer la dirección IPV6 y la puerta de enlace IPv6 asignadas al servidor. Existen dos formas de obtener esta información:

- [Desde el área de cliente](https://docs.ovh.com/es/vps/configurar-ipv6/#desde-el-area-de-cliente)
- [A través de la API](https://docs.ovh.com/es/vps/configurar-ipv6/#a-traves-de-la-api)

#### Desde el área de cliente

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Cloud`{.action}. En la columna izquierda, haga clic en `Servidores`{.action} y seleccione el VPS correspondiente. Por defecto, se abrirá la pestaña `Inicio`{.action}.

En el apartado **IP** podrá ver la dirección IPv6 y la puerta de enlace IPv6 asignadas al VPS. Anótelas y continúe en el apartado [2. Aplicar la configuración IPv6](https://docs.ovh.com/es/vps/configurar-ipv6/#2-aplicar-la-configuracion-ipv6_1){.external}.

![Configuración IPv6](images/configure-ipv6-step1.png){.thumbnail}

#### A través de la API

Vaya a la página <https://api.ovh.com/console/> y conéctese a la API de OVH con su ID de cliente y contraseña. Utilice las llamadas a la API que se indican a continuación.

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

Anótelas y continúe en el apartado [2. Aplicar la configuración IPv6](https://docs.ovh.com/fr/vps/configurer-ipv6/#etape-2-appliquer-la-configuration-ipv6_1){.external}.

### 2. Aplicar la configuración IPv6

Una vez que disponga de la información necesaria para configurar la IPv6, conéctese al VPS por SSH. Si lo necesita, puede consultar la guía [Introducción al SSH](https://docs.ovh.com/es/dedicated/introduccion-ssh/){.external}.

Existen varias formas de aplicar la configuración IPv6. Utilice los siguientes enlaces para ir directamente a la necesite, según su caso:

- [Aplicación no persistente](https://docs.ovh.com/es/vps/configurar-ipv6/#aplicacion-no-persistente)
- [Aplicación persistente en Debian y derivados (Ubuntu, Crunchbang, SteamOS…)](https://docs.ovh.com/es/vps/configurar-ipv6/#aplicacion-persistente-en-debian-y-derivados-ubuntu-crunchbang-steamos)
- [Aplicación persistente en Red Hat y derivados (CentOS, ClearOS…)](https://docs.ovh.com/es/vps/configurar-ipv6/#aplicacion-persistente-en-red-hat-y-derivados-centos-clearos_1)
- [Aplicación persistente en Windows Server](https://docs.ovh.com/es/vps/configurar-ipv6/#aplicacion-persistente-en-windows-server)

#### Aplicación no persistente

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

#### Aplicación persistente en Debian y derivados (Ubuntu, Crunchbang, SteamOS…)

Existen dos métodos para configurar la red según el sistema operativo instalado en el VPS:

- **para Debian 8 y Ubuntu 16.04, o versiones inferiores**, utilice el método basado en el archivo **interfaces**;
- **para Debian 9 y Ubuntu 17.04, o versiones superiores**, utilice el método basado en la utilidad **Netplan**.

En algunos casos (como Debian 9), es posible que el método arriba indicado no esté disponible. Para estar seguro, navegue por el sistema para ver cuál es la que usted puede utilizar. Si lo necesita, puede consultar la web <https://netplan.io/> para ampliar la información.

> [!warning]
>
> Antes de realizar cualquier modificación en un archivo de configuración, realice una copia de seguridad. De esa forma, si comete algún error, podrá revertirlo fácilmente.
> 

Continúe esta guía en el método correspondiente según su caso:

- [Configuración del archivo «interfaces»](https://docs.ovh.com/es/vps/configurar-ipv6/#configuracion-del-archivo-interfaces)
- [Configuración mediante la utilidad Netplan](https://docs.ovh.com/es/vps/configurar-ipv6/#configuracion-mediante-la-utilidad-netplan)

#####  Configuración del archivo «interfaces»

Según la generación del sistema operativo instalado en el VPS, deberá editar con privilegios *sudo* uno de los siguientes archivos:

- /etc/network/interfaces
- /etc/network/interfaces.d/50-cloud-init.cfg

Le recomendamos que, antes de empezar, guarde una copia de seguridad del archivo de configuración correspondiente utilizando, por ejemplo, el siguiente comando:

```bash
cp /etc/network/interfaces /etc/network/interfaces.bak
```

Así más adelante podrá restaurarlo a su estado anterior con los siguientes comandos:

```bash
rm -f /etc/network/interfaces
cp /etc/network/interfaces.bak /etc/network/interfaces
```

Una vez que haya guardado la copia de seguridad, ya puede comenzar la configuración. Para ello, añada las siguientes líneas al archivo de configuración (no olvide sustituir los valores genéricos «YOUR_IPV6», «IPV6_PREFIX» e «IPV6_GATEWAY» por la información correspondiente, así como la interfaz de red, si la que utiliza no es «eth0»):

```
iface eth0 inet static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

A continuación reinicie el servicio de red:

```bash
service networking restart
```

#####  Configuración mediante la utilidad Netplan

Los archivos de configuración de red se encuentran en el directorio **/etc/netplan/**. Le recomendamos que, antes de empezar, guarde una copia de seguridad del archivo de configuración correspondiente En este caso, deberá copiar el archivo **50-cloud-init.yaml** con los siguientes comandos:

```bash
cd /etc/netplan/
mkdir backup
cp 50-cloud-init.yaml backup/50-cloud-init.yaml
```

Así más adelante podrá restablecer la situación anterior con los siguientes comandos:

```bash
rm -f /etc/netplan/50-cloud-init.yaml
cp /etc/netplan/backup/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml
```

Una vez que haya guardado la copia de seguridad, ya puede comenzar la configuración. Para ello, cree una copia del archivo IPv4 para poder realizar los cambios oportunos: 

```bash
cd /etc/netplan
cp 50-cloud-init.yaml 51-cloud-init-ipv6.yaml
```

A continuación, edite el archivo **51-cloud-init-ipv6.yaml** para adaptarlo a la configuración IPv6 del servidor (no olvide sustituir los valores genéricos «YOUR_IPV6», «IPV6_PREFIX» e «IPV6_GATEWAY» por la información correspondiente, así como la interfaz de red, si la que utiliza no es «eth0»):

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - "YOUR_IPV6/IPv6_PREFIX"
            gateway6: "IPv6_GATEWAY"
```

> [!warning]
>
> Al escribir el archivo, es fundamental conservar el sangrado de los argumentos como en el ejemplo anterior. Utilice espacios para sangrar las líneas, no tabulaciones.
>

A continuación, pruebe la configuración con el siguiente comando:

```bash
netplan try
```

Si la configuración es correcta, aplíquela con el siguiente comando:

```bash
netplan apply
```

#### Aplicación persistente en Red Hat y derivados (CentOS, ClearOS…)

Los archivos de configuración de red se encuentran en el directorio **/etc/sysconfig/network-scripts/**. Le recomendamos que, antes de empezar, guarde una copia de seguridad del archivo de configuración correspondiente por ejemplo, del archivo **ifcfg-eth0**, con los siguientes comandos (no olvide personalizar la interfaz de red si la que utiliza no es «eth0»):

```bash
cd /etc/sysconfig/network-scripts/
mkdir backup
cp ifcfg-eth0 backup/ifcfg-eth0
```

Así más adelante podrá restablecer la situación anterior con los siguientes comandos:

```bash
rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

Una vez que haya guardado la copia de seguridad, edite el archivo de configuración actualmente utilizado para añadir las siguientes líneas (no olvide sustituir los valores genéricos «YOUR_IPV6», «IPV6_PREFIX» e «IPV6_GATEWAY» por la información correspondiente):

```
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

A continuación, cree un archivo (con privilegios *sudo*) indicando las rutas por defecto.

```bash
# touch /etc/sysconfig/network-scripts/route6-eth0
```

Edítelo (personalizando el valor «IPV6_GATEWAY» y la interfaz «eth0» si es necesario). 

```
IPV6_GATEWAY dev eth0
default via IPV6_GATEWAY
```

Una vez hecho esto, reinicie el servicio de red para aplicar la nueva configuración:

```bash
service network restart
```

#### Aplicación persistente en Windows Server

Por defecto, la IPv6 no está configurada en Windows Server. Para activarla abra el **Panel de control**, haga clic en `Ver el estado y las tareas de red`{.action} y luego en `Cambiar configuración del adaptador`{.action}.

![Configuración IPv6](images/configure-ipv6-step2.png){.thumbnail}

Abra el estado de la conexión **Ethernet** y haga clic en `Propiedades`{.action}. En la nueva ventana, haga clic sobre `Protocolo de internet versión 6 (TCP/IPv6)`{.action} y, cuando esté seleccionado, haga clic en el botón `Propiedades`{.action}.

![Configuración IPv6](images/configure-ipv6-step3.png){.thumbnail}

En la nueva ventana marque la casilla `Usar la siguiente dirección IPv6`{.action}. Cumplimente los campos con la información obtenida en el apartado 1 de esta guía. 

En los campos del apartado **Usar la siguiente dirección IPv6** puede introducir los *resolvers* DNS IPv6 que desee. Esto no es necesario si los *resolvers* indicados en la configuración IPv4 ya realizan esta tarea.

Una vez que haya completado estos elementos, marque la casilla `Validar configuración al salir`{.action} y haga clic en los botones `Aceptar`{.action} para aceptar los cambios. En caso de que la puerta de enlace introducida no esté en la misma subred IPv6 (/128 y /64, por ejemplo), es posible que aparezca un mensaje de error. Si eso ocurre, debería poder continuar ignorando el mensaje.

![Configuración IPv6](images/configure-ipv6-step4.png){.thumbnail}

### 3. Aceptar la configuración y probar la conexión

Existen varios comandos que permiten comprobar que la configuración funcione, según el sistema operativo. 

- **En sistemas basados en Linux**, puede utilizar uno de los siguientes ejemplos (no olvide adaptar la interfaz si la que utiliza no es «eth0»):

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

- **En sistemas basados en Windows**, utilice los siguientes comandos:

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

También puede probar la conexión hacia otro servidor remoto. No obstante, es necesario que este último tenga activa la IPv6. 

> [!primary]
>
> Si, a pesar de haber realizado las operaciones anteriores, la IPv6 no funciona en su servidor, existe la posibilidad de que deba realizar algunas acciones adicionales. Si ese es su caso, puede hacer lo siguiente:
>
> - Según el sistema operativo, intente cambiar el prefijo (o máscara de subred) de su IP de **/128** a **/64** para así incluir la puerta de enlace IPv6 en su subred.
>
> - Además de reiniciar el servicio de red, es posible que deba reiniciar el servidor para que se aplique la configuración IPv6.
>

### 4. Desactivar la gestión de la red por cloud-init

> [!primary]
>
> En los sistemas Windows, omita este paso.
>

**cloud-init** es un paquete que viene instalado por defecto en los VPS. Se trata de un framework que permite ejecutar los scripts que usted indique al crear el VPS o al reiniciarlo. Su mecánica es sencilla: la infraestructura OpenStack inyecta scripts en el entorno cloud-init y, por tanto, en la configuración del VPS.

Según el sistema operativo, cloud-init puede gestionar la red, el hostname, el archivo **resolv.conf** y el particionamiento automático del disco duro en caso de upgrade.

Por defecto, en las distribuciones más recientes (como CentOS, Debian 9, Ubuntu 16.x y versiones posteriores), cloud-init reinicia automáticamente la configuración de red al reiniciar el servidor.

Para conservar el control sobre dicha configuración, es necesario desactivar la gestión automática de la red por **cloud-init**. Para ello, utilice el siguiente comando para crear un archivo **/etc/cloud/cloud.cfg.d/98-disable-network-config.cf** que incluya el valor `network: {config: disabled}`:

```bash
echo "network: {config: disabled}" > /etc/cloud/cloud.cfg.d/98-disable-network-config.cfg
```

Una vez hecho esto, reinicie el servidor para que se apliquen los cambios. 

Para que cloud-init vuelva a gestionar la red automáticamente, elimine dicho archivo o muévalo a otro directorio.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.