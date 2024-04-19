---
title: 'Configurar una dirección IP como alias'
excerpt: 'Cómo añadir direcciones Additional IP a su configuración VPS'
updated: 2024-04-05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
> 

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](https://www.ovhcloud.com/es-es/network/additional-ip/). Esto no afectará a sus funcionalidades.
>

## Objetivo

El alias de IP (*IP aliasing* en inglés) es una configuración especial de red para los servidores de OVHcloud, que permite asociar varias direcciones IP a una única interfaz de red.

**Esta guía explica cómo añadir direcciones Additional IP a su configuración de red.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. No tenemos acceso a estas máquinas, por lo que no somos los administradores de las mismas y no podremos asistirle. Por lo tanto, usted es responsable de la gestión del software y de la seguridad diaria.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, le recomendamos que, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de un servidor, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). Para más información, consulte el apartado "Más información" de esta guía.
>

## Requisitos

- Tener un [VPS](https://www.ovhcloud.com/es-es/vps/) en su cuenta OVHcloud
- Tener una [dirección Additional IP](https://www.ovhcloud.com/es-es/bare-metal/ip/)
- Tener acceso de administrador (sudo) a través de SSH o GUI en su servidor
- Tener conocimientos básicos de redes y administración

## Procedimiento

Esta guía explica las configuraciones de las distribuciones y sistemas operativos más habituales. En primer lugar, conéctese al servidor por SSH o a través de una sesión de conexión a la interfaz gráfica de usuario (RDP para un VPS Windows). Los siguientes ejemplos suponen que está conectado como usuario con permisos muy exigentes (administrador/sudo).

> [!primary]
>
En cuanto a las distintas versiones de distribuciones, tenga en cuenta que puede haber cambiado el procedimiento adecuado para configurar la interfaz de red y los nombres de archivos. Si necesita ayuda, le recomendamos que consulte la documentación relativa a su sistema operativo.
>

**Tome nota de la siguiente terminología que se utilizará en los ejemplos de código y en las instrucciones que se explican en esta guía:**

|Valor|Descripción|Ejemplos|
|---|---|---|
|ADDITIONAL_IP|Dirección Additional IP atribuida a su servicio|203.0.113.0|
|NETWORK_INTERFACE|Nombre de la interfaz de red|*eth0*, *ens3*|
|ID|ID del alias IP, comenzando por *0* (en función del número de direcciones IP adicionales a configurar)|*0*, *1*|

### Debian 10/11

#### 1\. desactivar la configuración automática de red

Abra la ruta al siguiente archivo con un editor de texto, en nuestro ejemplo utilizamos `nano` :

```bash
sudo nano /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg
```

Introduzca la siguiente línea y, a continuación, guarde y cierre el editor.

```console
network: {config: disabled}
```

La creación de este archivo de configuración impide la ejecución automática de los cambios realizados en la configuración de su red.

#### 2\. crear una copia de seguridad

Por defecto, el fichero de configuración se encuentra en la ruta `/etc/network/interfaces.d`.

En nuestro ejemplo, nuestro archivo se llama `50-cloud-init`, por lo que hacemos una copia del archivo `50-cloud-init` utilizando el siguiente comando:

```bash
sudo cp /etc/network/interfaces.d/50-cloud-init /etc/network/interfaces.d/50-cloud-init.bak
```

Si comete algún error, puede revertir los cambios utilizando los siguientes comandos:

```bash
sudo rm -f /etc/network/interfaces.d/50-cloud-init
sudo cp /etc/network/interfaces.d/50-cloud-init.bak /etc/network/interfaces.d/50-cloud-init
```

#### 3\. editar el archivo de configuración de red

Para comprobar el nombre de la interfaz de red, utilice el siguiente comando:

```bash
ip a
```

Abra el archivo de configuración de red para modificarlo con el siguiente comando:

```bash
sudo nano /etc/network/interfaces.d/50-cloud-init
```

Para configurar su dirección Additional IP, añada una interfaz virtual o un alias Ethernet a su interfaz de red. En nuestro ejemplo, nuestra interfaz se llama `eth0`, por lo que nuestro primer alias es `eth0:0`. Haga esto para cada dirección Additional IP que quiera configurar.

No modifique las líneas existentes en el fichero de configuración, añada únicamente su dirección Additional IP al fichero, sustituyendo `NETWORK_INTERFACE`, `ID` y `ADDITIONAL_IP` por sus propios valores:


```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP
netmask 255.255.255.255
```

Si configura más de una dirección Additional IP, su archivo de configuración debería tener el siguiente aspecto:

```console
auto NETWORK_INTERFACE:ID
iface NETWORK_INTERFACE:ID inet static
address ADDITIONAL_IP1
address ADDITIONAL_IP2
netmask 255.255.255.255
```

**Ejemplo**

```console
auto eth0:0
iface eth0:0 inet static
address 203.0.113.0
netmask 255.255.255.255
```

#### 4\. reiniciar la interfaz

Aplique los cambios con el siguiente comando:

```bash
sudo systemctl restart networking
```

### Debian 12, Ubuntu 20.04 y posteriores

El archivo de configuración de las direcciones Additional IP se encuentra en `/etc/netplan/`. En este ejemplo, se llama `50-cloud-init.yaml`.

La práctica recomendada es crear un archivo de configuración independiente para definir las direcciones Additional IP. De este modo, podrá volver a revisar fácilmente los cambios en caso de que se produzca un error.


#### 1\. crear el archivo de configuración de red

En nuestro ejemplo, nuestro archivo se llama `51-cloud-init.yaml`:

```bash
sudo touch /etc/netplan/51-cloud-init.yaml
```

#### 2\. editar el archivo de configuración

Para comprobar el nombre de la interfaz de red, utilice el siguiente comando:

```bash
ip a
```

Abra el archivo de configuración de red para modificarlo con el siguiente comando:

```bash
sudo nano /etc/netplan/51-cloud-init.yaml
```

Edite el fichero con el siguiente contenido, sustituyendo `INTERFACE_NAME` y `ADDITIONAL_IP` por sus propios valores:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP/32    
```

Si tiene que configurar más de una dirección Additional IP, el archivo de configuración debería tener el siguiente aspecto:

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       INTERFACE_NAME:
           dhcp4: true
           addresses:
           - ADDITIONAL_IP1/32
           - ADDITIONAL_IP2/32
```

> [!warning]
>
> Es importante mantener la alineación de cada elemento del archivo, tal y como se muestra en el ejemplo anterior. No use la tecla de tabulación para crear el espacio.
>

**Ejemplo**

```yaml
network:
   version: 2
   renderer: networkd
   ethernets:
       eth0:
           dhcp4: true
           addresses:
           - 203.0.113.0/32
```

Guarde y cierre el archivo.

#### 3\. aplicar la nueva configuración de red

Para probar su configuración, utilice el siguiente comando:

```bash
sudo netplan try
```

Si es correcta, puede aplicarla con el siguiente comando:

```bash
sudo netplan apply
```

Repita este procedimiento para cada dirección Additional IP.

### CentOS 7, AlmaLinux (8 y 9), Rocky Linux (8 y 9)

El archivo de configuración principal se encuentra en la carpeta `/etc/sysconfig/network-scripts/`. En este ejemplo, se denomina `ifcfg-eth0`. Antes de realizar cualquier cambio, compruebe el nombre real del archivo en esta carpeta.

Para cada dirección Additional IP que desee configurar, cree un archivo de configuración independiente con los siguientes parámetros: `ifcfg-NETWORK_INTERFACE:ID`. Donde `NETWORK_INTERFACE` representa la interfaz física y `ID` representa la interfaz de red virtual o el alias ethernet que empieza por un valor de 0. Por ejemplo, para nuestra interfaz llamada `eth0` el primer alias es `eth0:0`, el segundo alias es `eth0:1`, etc.

#### 1\. determinar la interfaz

Para comprobar el nombre de la interfaz de red, utilice el siguiente comando:

```bash
ip a
```

#### 2\. crear el archivo de configuración

En primer lugar, cree el archivo de configuración. Sustituya `NETWORK_INTERFACE:ID` por sus propios valores.

```bash
sudo nano /etc/sysconfig/network-scripts/ifcfg-NETWORK_INTERFACE:ID
```

A continuación, edite el archivo con el siguiente contenido, sustituyendo `NETWORK_INTERFACE:ID` y `ADDITIONAL_IP` por sus propios valores:

```console
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=ADDITIONAL_IP
NETMASK=255.255.255.255
BROADCAST=ADDITIONAL_IP
ONBOOT=yes
```

**Ejemplo**

```console
DEVICE=NETWORK_INTERFACE:ID
BOOTPROTO=static
IPADDR=203.0.113.0
NETMASK=255.255.255.255
BROADCAST=203.0.113.0
ONBOOT=yes
```

#### 3\. reiniciar la interfaz

Aplique los cambios con el siguiente comando:

```bash
sudo systemctl restart network
```

#### Para AlmaLinux y Rocky Linux

```bash
sudo systemctl restart NetworkManager
```

### Fedora 37 y versiones posteriores

Fedora ahora utiliza archivos clave. NetworkManager almacenaba previamente los perfiles de red en formato ifcfg en este directorio: `/etc/sysconfig/network-scripts/`. Sin embargo, el formato ifcfg está obsoleto. De forma predeterminada, NetworkManager ya no crea nuevos perfiles en este formato. El archivo de configuración se encuentra ahora en `/etc/NetworkManager/system-connections/`.

#### 1\. crear una copia de seguridad

En nuestro ejemplo, nuestro archivo se llama `cloud-init-eno1.nmconnection`, por lo que hacemos una copia del archivo `cloud-init-eno1.nmconnection` utilizando el siguiente comando:

```bash
sudo cp -r /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak
```

Si comete algún error, puede revertir los cambios utilizando los siguientes comandos:

```bash
sudo rm -f /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
sudo cp /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection.bak /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

#### 2\. modificar el archivo de configuración

> [!primary]
> Tenga en cuenta que el nombre del archivo de red en nuestro ejemplo puede ser diferente del suyo. Adapte los comandos a su nombre de archivo.
>

```bash
sudo nano /etc/NetworkManager/system-connections/cloud-init-eno1.nmconnection
```

No modifique las líneas existentes en el fichero de configuración, añada su Additional IP al fichero como sigue, sustituyendo `ADDITIONAL_IP/32` por sus propios valores:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP/32
```

Si tiene dos direcciones Additional IP que configurar, la configuración debería ser similar a la siguiente:

```console
[ipv4]
method=auto
may-fail=false
address1=ADDITIONAL_IP1/32
address2=ADDITIONAL_IP2/32
```

**Ejemplo**

```console
[ipv4]
method=auto
may-fail=false
address1=203.0.113.0/32
```

#### 3\. reiniciar la interfaz

```bash
sudo systemctl restart NetworkManager
```

### cPanel

#### 1\. acceder a la sección de gestión de las IP del WHM

En el área de cliente de WHM, haga clic en `IP Functions`{.action} y seleccione `Add a New IP Address`{.action} en el menú de la izquierda.

![Add new IP](images/cpanel-alma-1.png){.thumbnail}

#### 2\. añadir la información de las direcciones Additional IP

Introduzca su dirección Additional IP con el formato `xxx.xxx.xxx.xxx` en el campo `New IP or IP range to add`.

Seleccione `255.255.255.255` como máscara de subred y haga clic en `Submit`{.action}.

![enter new IP information](images/cpanel-alma-2.png){.thumbnail}

> [!warning]
>
> Atención, si tiene varias IP que configurar en un mismo bloque y las añade todas al mismo tiempo, el sistema WHM le obligará a utilizar la máscara de subred `255.255.255.0`. No se recomienda utilizar esta configuración, es necesario añadir cada IP individualmente para poder utilizar la máscara de subred adecuada `255.255.255.255`.
>

#### 3\. comprobar la configuración IP actual

Vuelva a la sección `IP Functions`{.action} y haga clic en `Show or Delete Current IP Addresses`{.action} para comprobar que la dirección Additional IP se ha añadido correctamente.

![check configured IP](images/cpanel-alma-3.png){.thumbnail}


### Plesk

#### 1\. acceder a la gestión de IP de Plesk

En el panel de configuración de Plesk, seleccione `Tools & Settings`{.action} en la columna izquierda.

![acceso a la gestión de las direcciones IP](images/pleskip1.png){.thumbnail}

Haga clic en `IP Addresses`{.action} bajo **Tools & Settings**.

#### 2\. añadir la información IP adicional

En esta sección, haga clic en el botón `Add IP Address`{.action}.

![añadir información IP](images/Plesk-2024-vps.png){.thumbnail}

Introduzca su dirección Additional IP como `xxx.xxx.xxx.xxx/32` en el campo "IP address and subnet mask" y haga clic en `OK`{.action}.

![añadir información IP](images/Plesk-additional-ip.png){.thumbnail}

#### 3\. comprobar la configuración IP actual

En la sección "IP Addresses", compruebe que la dirección Additional IP se haya añadido correctamente.

![configuración IP actual](images/plesk-final-configuration.png){.thumbnail}


### Windows Server 

#### 1\. comprobar la configuración de red

Haga clic derecho en el botón `Start`{.action} y abra `Run`{.action}.

Pulse `cmd` y haga clic en `OK`{.action} para abrir la aplicación de línea de órdenes.

![cmdprompt](images/vps_win07.png){.thumbnail}

Para obtener la configuración de IP actual, introduzca `ipconfig` en la consola de comandos.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . : openstacklocal
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

#### 2\. modificar las propiedades IPv4

1. Vaya al menú `Start`{.action}, luego `Control Panel`{.action}, `Network and Internet`{.action}, `Network and Sharing Centre`{.action} y `Change Adapter Settings`{.action} en la barra de la izquierda.
2. Haga clic derecho en `Ethernet`{.action};
3. Haga clic en `Properties`{.action};
4. Seleccione `Internet Protocol Version 4 (TCP/IPv4)`{.action} y haga clic en `Properties`{.action};
5. Haga clic en `Use the following IP address`{.action} e introduzca la IP principal del servidor, la máscara de subred y la puerta de enlace por defecto obtenidas con el comando `ipconfig`{.action} anterior. En el cuadro "Preferred DNS Server", escriba "213.186.33.99".

![change the ip configuration](images/configure-main-ip.png){.thumbnail}

> [!warning]
>
> Atención: si introduce información incorrecta, no podrá acceder al servidor. En ese caso, deberá realizar las correcciones oportunas a través del KVM.
>

#### 3\. añadir la dirección Additional IP en los Parámetros TCP/IP avanzados

En la nueva ventana, haga clic en `Add...`{.action} en "IP addresses". Introduzca su dirección Additional IP y la máscara de subred (255.255.255.255).

![sección de configuración avanzada](images/configure-additional-ip.png){.thumbnail}

Confirme haciendo clic en `Add`{.action}.

![Additional IP configuration](images/additional-ip-config.png){.thumbnail}

A continuación, haga clic en `OK`{.action} para aplicar la configuración.

![Configuración del cambio de IP](images/final-configuration.png){.thumbnail}

Perderá la conexión con su servidor durante unos segundos.

#### 4\. comprobar la configuración IP actual

Abra el símbolo del sistema (cmd) e introduzca `ipconfig`. La configuración debe incluir ahora la nueva dirección Additional IP.

```powershell
C:\Users\Administrator>ipconfig
Windows IP Configuration
Ethernet adapter Ethernet:
   Connection-specific DNS Suffix  . :
   Link-local IPv6 Address . . . . . : fe90::30gf:258a:84d6:abcf%5
   IPv4 Address. . . . . . . . . . . : 192.0.2.29
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   IPv4 Address. . . . . . . . . . . : 203.0.113.0
   Subnet Mask . . . . . . . . . . . : 255.255.255.255
   Default Gateway . . . . . . . . . : 192.0.2.1
```

### Diagnóstico

En primer lugar, reinicie el servidor a través de la línea de comandos o la interfaz de usuario. Si todavía no consigue establecer una conexión entre la red pública y su dirección IP de alias y si sospecha que existe algún problema de red, deberá reiniciar el servidor en [modo de rescate](/pages/bare_metal_cloud/virtual_private_servers/rescue). A continuación, podrá configurar la dirección Additional IP directamente en el servidor.

Una vez que se haya conectado al servidor por SSH, introduzca el siguiente comando:

```bash
ifconfig ens3:0 ADDITIONAL_IP netmask 255.255.255.255 broadcast ADDITIONAL_IP up
```

Para probar la conexión, solo tiene que enviar un ping a su dirección Additional IP desde el exterior. Si responde en modo de rescate, probablemente significa que se ha producido un error de configuración. No obstante, si la IP todavía no funciona, informe a nuestro equipo del soporte creando un [tíquet de soporte](https://help.ovhcloud.com/csm?id=csm_get_help).

## Más información

[Activar el modo de rescate en un VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).
 
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
