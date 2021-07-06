---
title: 'Desplegar un servidor OpenVPN'
slug: openvpn
excerpt: 'Cómo instalar un servidor OpenVPN en un VPS'
section: 'Uso avanzado'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 24/6/2021**

## Objetivo

OpenVPN es un programa que le permite crear una red privada virtual (VPN). Utilizando la plantilla VPS de OVHcloud para un servidor OpenVPN, podrá instalar y utilizar su servicio VPN personal en pocos pasos.

**Esta guía explica cómo crear su propio servicio VPN con un VPS y OpenVPN.**

## Requisitos

- Tener un [VPS](https://www.ovhcloud.com/es/vps/) en el área de cliente de OVHcloud.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Instalar el servidor OpenVPN

> [!primary]
>
Si quiere utilizar un servicio VPS existente, puede hacerlo desde el [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), [reinstalando este servicio con la plantilla OpenVPN](../primeros-pasos-con-vps/#reinstallvps).
>

Contrate su VPS en la [página de producto](https://www.ovhcloud.com/es/vps/). Al seleccionar la imagen, seleccione `Distribución con aplicación`{.action} y `OpenVPN`{.action} como sistema operativo.

![Pedido VPS](images/order_vps.png){.thumbnail}

Una vez instalado el VPS, recibirá por correo electrónico las claves de acceso.

![E-mail de instalación](images/opencredent2.png){.thumbnail}

El servidor VPN estará listo. Para conectarse, haga clic en el enlace del e-mail de instalación que abrirá la interfaz web OpenVPN Client. Introduzca las claves de acceso OpenVPN que haya introducido en el mismo mensaje de correo electrónico.

![Página de conexión](images/login_user.png){.thumbnail}

### Instalación y uso del cliente OpenVPN

#### En Windows

En la interfaz web del cliente, seleccione el `símbolo Windows`{.action}.

![Interfaz de usuario](images/windows_client.png){.thumbnail}

Guarde el archivo `.msi` y sustitúyalo.

Una vez instalada la aplicación cliente, puede ejecutarla desde el menú Windows o desde la barra de tareas.

![Win app](images/win_launch.png){.thumbnail}

Conéctese con las claves OpenVPN que le indicaremos en el mensaje de instalación.

![Conexión Windows](images/win_login.png){.thumbnail}

Ya podrá navegar por internet con la dirección IP de su VPN.

Puede comprobar su dirección IP en la página [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### En Linux

##### **Instalar el cliente OpenVPN**

Para instalar al cliente para distribuciones del tipo Fedora/CentOS/RedHat:

```sh
sudo yum install openvpn
```

Para instalar al cliente en las distribuciones del tipo Ubuntu/Debian:

```sh
sudo apt-get install openvpn
```

También es necesario descargar el archivo de configuración `client.ovpn` desde la interfaz web del cliente OpenVPN.

![Interfaz de usuario](images/ovpn.png){.thumbnail}

##### **Lancer le client OpenVPN con su fichero de configuración**

```sh
sudo openvpn --config client.ovpn
```

Introduzca sus claves de acceso:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: ******************************************
```

Ya podrá navegar por internet con la dirección IP de su VPN.

Puede comprobar su dirección IP en la página [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

#### En MacOS

Después de conectarse, seleccione el `símbolo Apple`{.action}.

![Interfaz de usuario](images/mac_client.png){.thumbnail}

Guarde el archivo y hazlo.

![Login Mac](images/login_screen_mac.png){.thumbnail}

Conéctese con las claves OpenVPN que le indicaremos en el mensaje de instalación.

![Login Mac](images/connection_openvpn_mac.png){.thumbnail}

Ya podrá navegar por internet con la dirección IP de su VPN.

Puede comprobar su dirección IP en la página [https://ifconfig.ovh/](https://ifconfig.ovh/){.external}.

### Acceso al servidor OpenVPN

En la interfaz web OpenVPN Client (accesible a través de la URL indicada en el email de instalación), haga clic en el botón `Admin`{.action}.

![Interfaz de usuario](images/admin_button.png){.thumbnail}

También puede añadir `admin` a la URL OpenVPN para acceder directamente a la página de conexión:

```sh
https://IP_of_your_VPS:943/admin
```

Conéctese con las mismas claves OpenVPN que se indican en el mensaje de correo electrónico y acepte los términos y condiciones.

Ya puede acceder al panel de configuración del servidor OpenVPN.

![Servidor de acceso OpenVPN](images/admin_access.png){.thumbnail}

## Más información

[Primeros pasos con un VPS](../primeros-pasos-con-vps/)

[OpenVPN](https://openvpn.net/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.