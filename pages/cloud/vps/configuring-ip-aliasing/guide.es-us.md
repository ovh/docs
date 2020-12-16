---
title: 'Configurar una dirección IP como alias'
slug: ip-aliasing-vps
excerpt: 'Cómo añadir direcciones IP failover a su configuración VPS'
section: 'Red e IP'
---

**Última actualización: 8 de abril de 2020**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

El alias de IP (*IP aliasing* en inglés) es una configuración especial de red para los servidores de OVHcloud, que permite asociar varias direcciones IP a una única interfaz de red.

**Esta guía explica cómo añadir direcciones IP failover a su configuración de red.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- un [VPS](https://www.ovhcloud.com/es/vps/) en su cuenta OVHcloud
- una dirección IP failover o un bloque IP failover (RIPE)
- acceso de administrador (root) por SSH o un remote desktop (Windows) en su servidor


## Procedimiento

> [!primary]
>
Si quiere utilizar una distribución reciente, puede ser necesario realizar adaptaciones en el procedimiento adecuado para configurar la interfaz de red. Si necesita ayuda, le recomendamos que consulte la documentación relativa a su sistema operativo. 
> 

Estas son las configuraciones para las principales distribuciones y sistemas operativos.

### Debian 9

#### 1\.desactivar la configuración automática de red

Abra el siguiente archivo, tal y como se muestra a continuación:

```sh
# nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

A continuación, edite el archivo con la configuración que se muestra a continuación. Esto evitará que se produzcan cambios automáticos en la configuración de la red.

```sh
network: [config: disabled}
```

### 2\. editar el archivo de configuración de red

Abra el archivo de configuración de red para modificarlo con el siguiente comando:

```sh
# nano /etc/network/interfaces.d/50-cloud-init.cfg
```

Cambie el archivo con la siguiente configuración:

> [!primary]
>
Tenga en cuenta que los nombres de las interfaces de red en nuestros ejemplos pueden ser diferentes a los de sus propios nombres. Por favor, adapte los nombres de interfaz apropiados.
>

```sh
auto ens3
iface ens3 inet dhcp

auto ens3:0
iface ens3:0 inet static
address FailoverIP 0
netmask 255.255.255.255

auto ens3:1
iface ens3:1 inet static
address FailoverIP 1
netmask 255.255.255.255
```

### Ubuntu 18.04

Cada dirección IP failover necesita su propia línea en este archivo. El archivo de configuración de las direcciones IP failover debe llamarse "50-cloud-init.yaml".

#### 1\. crear el archivo de configuración

Conéctese al servidor por SSH y ejecute el siguiente comando:

```sh
# nano /etc/netplan/50-cloud-init.yaml
```

A continuación, modifique el archivo con el siguiente contenido:

```sh
network:
    version: 2
    ethernets:
        votre_interface_réseau:
            dhcp4: true
            match:
                macaddress: fa:xx:xx:xx:xx:63
            set-name: votre_interface_réseau
            addresses:
            - votre_ip_failover/32
```

Por último, guarde y cierre el archivo.

Aplique la configuración:

```sh
# netplan apply
# netplan try
```

Repita este procedimiento para cada dirección IP failover.

### CentOS y Fedora (25 y versiones anteriores)

#### 1\. Crear una copia de seguridad del archivo de configuración

En primer lugar, haga una copia del archivo de origen para poder utilizarlo como plantilla:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### 2\. Editar el archivo de configuración

Ahora puede modificar el archivo eth0:0 para sustituir la dirección IP:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

En primer lugar, sustituya el nombre del "device" por la dirección IP existente que haya recibido:

```bash
DEVICE="eth0:0"
ONBOOT="yes"
BOOTPROTO="none" # Para CentOS, utilice "static"
IPADDR="IP_FAILOVER"
NETMASK="255.255.255.255"
BROADCAST="IP_FAILOVER"
```

#### 3\. Reiniciar la interfaz

A continuación, reinicie la interfaz:

```sh
ifup eth0:0
```

### Windows Server 2012/2016

#### 1\. comprobar la configuración IP principal

En primer lugar, es necesario recuperar la información de la dirección IP principal:

![comprobar la configuración IP principal](images/image1-1.png){.thumbnail}

#### 2\. modificar las propiedades IPv4

Es necesario modificar manualmente las propiedades IP de configuración "automática" en configuración "estática":

![modificar la configuración IP](images/image2.png){.thumbnail}

A continuación, podemos definir la información IP obtenida anteriormente:

![modificar la configuración IP](images/image3-3.png){.thumbnail}

#### 3\. añadir la dirección IP failover en la sección "Configuración avanzada"

![sección de configuración avanzada](images/image4-4.png){.thumbnail}

Aquí debemos definir la información IP failover y la máscara de subred correspondiente (normalmente la máscara de subred es 255.255.255.255.255).

![Configuración de la IP Failover](images/image5-5.png){.thumbnail}

#### 4\. reinicio de la interfaz de red

En primer lugar, realizamos el proceso de desactivación.

![desactivación de la red](images/image6.png){.thumbnail}

A continuación, el proceso de activación.

![activación de la red](images/image7.png){.thumbnail}

#### 5\. verificación de la nueva configuración de red

Con la consola y el comando ___ipconfig___, podemos comprobar la nueva configuración de red.

![comprobar la configuración de red actual](images/image8-8.png){.thumbnail}


### cPanel (en CentOS 6)

#### 1\. Crear una copia de seguridad del archivo de configuración

En primer lugar, haga una copia del archivo de configuración de la fuente para poder volver atrás en cualquier momento.

```sh
cp /etc/ips /etc/ips.bak
```

#### 2\. Editar el archivo de configuración

Debe modificar el archivo /etc/ips :

```sh
editor /etc/ips
```

Añada la dirección IP failover al archivo:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

A continuación, añada la dirección IP a /etc/ipaddrpool.

```bash
IP_FAILOVER
```

#### 3\. Reiniciar la interfaz

A continuación, reinicie la interfaz:

```sh
/etc/init.d/ipaliases restart
```

### Plesk Onyx 17.x

#### 1\. acceder a la gestión de las direcciones IP en el panel de configuración

Acceda a la sección ```Tools & Settings``` > ```IP Dirección```:

![acceso a la gestión de las direcciones IP](images/pleskip1.png){.thumbnail}

#### 2\. añadir la información IP adicional

Haga clic en el botón `Add IP Address`{.action} :

![añadir información IP](images/pleskip2-2.png){.thumbnail}

A continuación, introduzca la información IP adicional en el formulario y haga clic en `Aceptar`{.action}.

![añadir información IP](images/pleskip3-3.png){.thumbnail}

#### 3\. Comprobar la configuración IP actual en el panel de configuración Plesk

![configuración IP actual](images/pleskip4-4.png){.thumbnail}

### Reparación

Si no consigue establecer una conexión entre la red pública y su dirección IP de alias y si sospecha que existe un problema de red, reinicie el servidor en modo de rescate y configure el alias directamente en el servidor.

Para ello, una vez que haya reiniciado el servidor en modo de rescate, introduzca el siguiente comando:

```sh
ifconfig ens3:0 FAILOVER_IP netmask 255.255.255.255 broadcast FAILOVER_IP up
```

Sustituya FAILOVER_IP por la dirección IP Failover real.

A continuación, solo tiene que enviar un ping a su IPFO desde el exterior. Si funciona, es probable que se deba corregir un error de configuración. Si, por el contrario, la IP todavía no funciona, deberá informar a nuestro equipo creando una solicitud de soporte desde el [área de cliente de OVHcloud](https://www.ovh.com/manager/dedicated/#/support/tickets/new) para más información.
 
## Vaya más lejos

[Activar el modo de rescate en un VPS](../rescue/)

Únase a nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
