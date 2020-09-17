---
title: 'Implementación un servidor OpenVPN con un solo click'
excerpt: 'Cómo implementar un servidor OpenVPN en un solo clic'
slug: openvpn
section: 'Uso avanzado'
---

## Objectivo

OpenVPN es un software que le brinda la posibilidad de crear una Red Virtual Privada (VPN).

## Requisitos

- Acceso al [panel de control de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager)
- un [servicio OVHcloud VPS](https://www.ovh.com/world/es/vps/){.external}

## Orden

Para crear su servidor OpenVPN, deberá solicitar un VPS. (Si ya tiene un VPS, puede instalar la plantilla OpenVPN a través de su panel de control OVHcloud)

![horizon](images/OpenVPN.png){.thumbnail}

Una vez que su VPS esté instalado, recibirá un correo electrónico con sus credenciales:

![horizon](images/opencredent2.png){.thumbnail}

Su servidor VPN ya está listo.

Haga clic en el enlace dentro del correo electrónico de credenciales.

Inicie sesión con las credenciales en el correo electrónico.

![horizon](images/login_web.png){.thumbnail}

## Cliente

### Para Windows

Seleccione el `cliente OpenVPN para Windows`{.action}

![horizon](images/admin_or_client.png){.thumbnail}

Guarde el archivo y ejecútelo.

![horizon](images/connection_openvpn1.png){.thumbnail}

Conéctese a la VPN:

![horizon](images/login_screen.png){.thumbnail}

Ahora se comunicará a través de Internet con la IP de su VPN.

Puede verificar su IP con esta página web <https://ifconfig.ovh/>

###En linux

Para distribuciones como Fedora / CentOS / RedHat:

```sh
sudo yum install openvpn
```

Para distribuciones como Ubuntu / Debian:

```sh
sudo apt-get install openvpn
```

Deberá descargar el archivo de configuración client.ovpn aquí:

![horizon](images/client_ovpn.png){.thumbnail}

**Lanze el cliente OpenVPN con un archivo de configuración**

```sh
sudo openvpn --config client.ovpn
```

Se le pedirá que ingrese sus credenciales:

```sh
 Enter Auth Username: openvpn
 Enter Auth Password: ******************************************
```

Ahora se comunicará a través de Internet con la IP de su VPN.

Puede verificar su IP con esta página web <https://ifconfig.ovh/>.

### En MacOS

Seleccione el cliente OpenVPN para Mac OS X {.action}:

![horizon](images/admin_or_client.png){.thumbnail}

Guarde el archivo y ejecútelo.

![horizon](images/mac_installation.png){.thumbnail}

Una vez que se complete la instalación, conéctese a la VPN.

![horizon](images/login_screen_mac.png){.thumbnail}

![horizon](images/connection_openvpn_mac.png){.thumbnail}

Ahora se comunicará a través de Internet con la IP de su VPN.

Puede verificar su IP con esta página web <https://ifconfig.ovh/>.


## Servidor

Dirijase al URL dentro del correo electrónico y seleccione `Admin`:

![horizon](images/admin_or_client.png){.thumbnail}

Inicie sesión con las credenciales recibidas en el correo electrónico y acepte los términos y condiciones.

![horizon](images/openvpncredent.png){.thumbnail}

Ahora tiene acceso al panel de control:

![horizon](images/admin_panel.png){.thumbnail}


## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
