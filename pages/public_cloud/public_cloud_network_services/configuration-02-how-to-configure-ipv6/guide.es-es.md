---
title: "Configurar IPv6 en una instancia de Public Cloud"
excerpt: "Cómo configurar el protocolo IPv6 en una instancia de Public Cloud"
updated: 2024-03-05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

El protocolo de internet versión 6 (IPv6), la última versión del protocolo de internet (IP), está diseñado para resolver el agotamiento de las direcciones IPv4 utilizando direcciones compuestas por 128 bits en vez de los 32 bits de las direcciones IPv4.

Todas las instancias de Public Cloud se entregan con una dirección IPv4 y una dirección IPv6.

Por defecto solo está configurada la IPv4.

**Esta guía explica cómo configurar una dirección IPv6 en una instancia de Public Cloud.**

> [!primary]
> 
> Actualmente las opciones Floating IP y Gateway no permiten la IPv6. La IPv6 solo puede utilizarse con las instancias en [modo público](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts#publicmode).
>

## Requisitos

* Tener una instancia de Public Cloud.
* Tener acceso administrativo (sudo) por SSH o escritorio remoto (Windows) al servidor.
* Tener conocimientos básicos de redes.
* Estar conectado al [área de cliente de OVHcloud](/links/manager).

## Procedimiento

Las siguientes secciones contienen las configuraciones de las distribuciones que ofrecemos actualmente, así como las distribuciones/sistemas operativos más utilizadas. En primer lugar, conéctese al servidor por SSH o mediante una sesión de conexión GUI (RDP para una instancia Windows).

> [!warning]
>
> Tenga en cuenta que, en las versiones recientes de los sistemas operativos Linux, la dirección IPv6 está configurada por defecto en las instancias Public Cloud. En este caso, no es necesario configurarla. Asegúrese de comprobar el archivo de configuración del sistema operativo antes de realizar cualquier cambio.
>

### Léxico

Antes de empezar, la recomendamos que eche un vistazo a la siguiente tabla, en la que se recogen los valores que utilizaremos en esta guía junto con su descripción:

|Valor|Descripción|
|---|---|
|YOUR_IPV6|Dirección IPv6 asignada al servicio.|
|IPV6_PREFIX|Prefijo del bloque IPv6 (p. ej.: 2607:5300:60:62ac::/128 -> netmask = 128).|
|IPV6_GATEWAY|Puerta de enlace (o *gateway*) del bloque IPv6.|

### Obtener la información relativa a la red

Conéctese al área de cliente de OVHcloud en la sección `Public Cloud`{.action} y seleccione el proyecto correspondiente. En la columna izquierda, seleccione el menú `Instances`{.action} y haga clic en el botón `...`{.action} junto a la instancia correspondiente y haga clic en `Detalles de la instancia`{.action}.

![public-cloud ipv6](images/pci2022.png){.thumbnail}

Puede consultar la información en la columna `Redes`{.action}.

![public-cloud ipv6](images/pci2022.1.png){.thumbnail}

### Ejemplos de configuraciones persistentes

> [!primary]
> **Ejemplos**
> 
> La siguiente información se incluye solo a modo de ejemplo.
>
> Como administrador del servicio, deberá adaptarlo a su distribución.
>

> [!warning]
>
> Antes de editar un archivo de configuración, cree siempre una copia de seguridad del original si surge algún problema.
>

<br>En primer lugar, conéctese a su instancia por SSH.

#### Debian (excepto Debian 12)

Por defecto, los ficheros de configuración se encuentran en el directorio `/etc/network/interfaces.d/`.

La práctica recomendada es crear un archivo de configuración independiente en el directorio `/etc/network/interfaces.d/` para configurar IPV6. En nuestro ejemplo, nuestro archivo se llama `51-cloud-init-ipv6`:

```bash
sudo nano /etc/network/interfaces.d/51-cloud-init-ipv6
```

Esto le permite separar la configuración IPv6 y revertir fácilmente los cambios en caso de error.

Agregue las siguientes líneas al archivo. Sustituya los elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* y *IPV6_GATEWAY*) y la interfaz de red (si su servidor no utiliza **eth0**) por sus valores específicos:

```console
iface eth0 inet static
address YOUR_IPV6
netmask IPV6_PREFIX
post-up /sbin/ip -6 route add IPV6_GATEWAY dev eth0
post-up /sbin/ip -6 route add default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del default via IPV6_GATEWAY dev eth0
pre-down /sbin/ip -6 route del IPV6_GATEWAY dev eth0
```

Veamos a continuación un ejemplo concreto:

```console
iface eth0 inet6 static
address 2607:5300:201:abcd::7c5
netmask 128
post-up /sbin/ip -6 route add 2607:5300:201:abcd::1 dev eth0
post-up /sbin/ip -6 route add default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del default via 2607:5300:201:abcd::1 dev eth0
pre-down /sbin/ip -6 route del 2607:5300:201:abcd::1 dev eth0
```

A continuación, reinicie el servicio de red con uno de los siguientes comandos:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Ubuntu y Debian 12

Los archivos de configuración de red se encuentran en el directorio `/etc/netplan/`.

Se recomienda crear un archivo de configuración independiente en el directorio `/etc/netplan/` para configurar IPV6. En nuestro ejemplo, nuestro archivo se llama `51-cloud-init-ipv6.yaml`:

```bash
sudo nano /etc/netplan/51-cloud-init-ipv6.yaml
```

Esto le permite separar la configuración IPv6 y revertir fácilmente los cambios en caso de error.

Agregue las siguientes líneas al archivo. Sustituya los elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* y *IPV6_GATEWAY*) y la interfaz de red (si su servidor no utiliza **eth0**) por sus valores específicos:

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
            routes:
              - to: ::/0
                via: IPv6_GATEWAY
```

A continuación ofrecemos un ejemplo concreto:

```yaml
network:
    version: 2
    ethernets:
        eth0:
            dhcp6: no
            match:
              name: eth0
            addresses:
              - 2607:5300:201:abcd::7c5/128
            routes:
              - to: ::/0
                via: 2607:5300:201:abcd::1
```

> [!warning]
>
> Es importante mantener la alineación de cada elemento del archivo, tal y como se muestra en el ejemplo anterior. No use la tecla de tabulación para crear el espacio. Sólo es necesaria la tecla espacio.
>

Para probar su configuración, utilice el siguiente comando:

```bash
sudo nano netplan try
```

Si es correcta, puede aplicarla con el siguiente comando:

```bash
sudo nano netplan apply
```

#### RedHat / CentOS / Rocky Linux / Alma Linux

Los archivos de configuración de red se encuentran en el directorio `/etc/sysconfig/network-scripts/`. Le recomendamos que realice una copia de seguridad del archivo de configuración correspondiente.

En nuestro ejemplo, nuestro archivo se llama `ifcfg-eth0`, por lo que hacemos una copia de seguridad del archivo `ifcfg-eth0` utilizando los siguientes comandos. No olvide sustituir **eth0** por su interfaz real si es necesario.

```bash
cd /etc/sysconfig/network-scripts/
sudo mkdir backup
sudo cp ifcfg-eth0 backup/ifcfg-eth0
```

A continuación, puede revertir los cambios utilizando los siguientes comandos:

```bash
sudo rm -f /etc/sysconfig/network-scripts/ifcfg-eth0
sudo cp /etc/sysconfig/network-scripts/backup/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0
```

A continuación, editamos el archivo `ifcfg-eth0`, añadiendo únicamente las líneas para la configuración IPv6 del servidor. Sustituya los elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* y *IPV6_GATEWAY*) por sus valores específicos.

```console
IPV6INIT=yes
IPV6ADDR=YOUR_IPV6/IPV6_PREFIX
IPV6_DEFAULTGW=IPV6_GATEWAY
```

Omitimos la configuración IPv4 para evitar confusiones, pero la configuración IPv6 se realiza en el mismo archivo de configuración.

Veamos a continuación un ejemplo concreto:

```console
IPV6INIT=yes
IPV6ADDR=2607:5300:201:abcd::7c5/128
IPV6_DEFAULTGW=2607:5300:201:abcd::1
```

Reinicie el servicio de red para permitir que el sistema aplique la nueva configuración mediante uno de los siguientes comandos:

```bash
sudo service networking restart
```

```bash
sudo systemctl restart networking
```

#### Fedora

El archivo de configuración de red se encuentra en el directorio `/etc/NetworkManager/system-connections/`. Le recomendamos que realice una copia de seguridad del archivo de configuración correspondiente.

En nuestro ejemplo, nuestro archivo se llama `cloud-init-eth0.nmconnection`, por lo que hacemos una copia del archivo `cloud-init-eth0.nmconnection` utilizando los siguientes comandos. No olvide sustituir **eth0** por su interfaz real si es necesario.

```bash
cd /etc/NetworkManager/system-connections/
sudo mkdir backup
sudo cp cloud-init-eth0.nmconnection backup/cloud-init-eth0.nmconnection
```

A continuación, editamos el archivo `cloud-init-eth0.nmconnection`, añadiendo únicamente las líneas para la configuración IPv6 del servidor. Sustituya los elementos genéricos (*YOUR_IPV6*, *IPV6_PREFIX* y *IPV6_GATEWAY*) por sus valores específicos.

```console
[ipv6]
method=auto
may-fail=true
address1=YOUR_IPV6/IPV6_PREFIX
route1=::/0,IPV6_GATEWAY
```

Omitimos la configuración IPv4 para evitar confusiones, pero la configuración IPv6 se realiza en el mismo archivo de configuración.

Veamos a continuación un ejemplo concreto:

```console
[ipv6]
method=auto
may-fail=true
address1=2607:5300:201:abcd::7c5/128
route1=::/0,2607:5300:201:abcd::1
```

Reinicie la interfaz de red con el siguiente comando:

```bash
sudo systemctl restart NetworkManager
```

#### Windows

Por defecto, la IPv6 no está configurada en los servidores Windows. Para activarlo, siga estos pasos:

Acceda a la sección `Conexiones de red`{.action} de su Windows.

![public-cloud ipv6](images/pcipv63.png){.thumbnail}

A continuación, haga clic derecho en su tarjeta de red para acceder a `Propiedades`{.action}.

![public-cloud ipv6](images/pcipv64.png){.thumbnail}

Haga clic en `Internet Protocol Version 6 (TCP/IPv6)`{.action} y seleccione el botón `Propiedades`{.action}.

![public-cloud ipv6](images/pcipv65.png){.thumbnail}

Introduzca la información de su IPv6.

![public-cloud ipv6](images/pcipv66.png){.thumbnail}

Una vez que haya finalizado, marque la casilla `Validar los parámetros a la salida` y haga clic en el botón `OK`{.action} para aceptar los cambios.

### Diagnóstico

¿Ha configurado su IPv6 pero no funciona? 

Existe un procedimiento muy sencillo para determinar si el problema se encuentra en la configuración realizada o en la red de OVHcloud.

En primer lugar, [ponga su instancia en modo de rescate](/pages/public_cloud/compute/put_an_instance_in_rescue_mode).

Utilice los siguientes comandos para configurar su IP de forma no persistente:

```bash
ip addr add YOUR_IPV6/IPV6_PREFIX dev eth0
ip -6 route add IPV6_GATEWAY dev eth0
ip -6 route add default via IPV6_GATEWAY dev eth0
```

Vuelva a probar su red mediante un ping6, por ejemplo:

```bash
ping6 ipv6.google.com
```
Si la instancia responde, es posible que no haya seguido correctamente alguno de los pasos de la configuración inicial.

Si el problema persiste, puede ponerse en contacto con nuestro equipo de soporte.

## Más información

Si necesita formación o asistencia técnica para implantar nuestras soluciones, póngase en contacto con su representante de ventas o haga clic en [este enlace](https://www.ovhcloud.com/es-es/professional-services/) para obtener un presupuesto y solicitar un análisis personalizado de su proyecto a nuestros expertos del equipo de Servicios Profesionales.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.