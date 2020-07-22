---
title: 'Cambiar los servidores DNS de una instancia'
slug: cambiar-los-servidores-dns-de-una-instancia
excerpt: 'Cambiar los servidores DNS por defecto de una instancia Public Cloud'
legacy_guide_number: 1985
section: 'Red e IP'
---

**Última actualización: 18/11/2019**

## Objetivo

El servidor DNS configurado en las instancias será, por defecto, el de OVHcloud (213.186.33.99). Es posible que desee cambiarlo o añadir otro. Sin embargo, los servidores DNS se configuran automáticamente gracias al servidor DHCP, por lo que no podrá cambiarlos con solo editar el archivo resolv.conf.

Esta guía explica los pasos que debe seguir para cambiar la configuración DHCP de su instancia. Así pues, es aconsejable que la lea antes de modificar los servidores DNS de sus instancias.


## Requisitos
- Disponer de una instancia Public Cloud

## Procedimiento

### En Debian/Ubuntu

- Conéctese a la instancia por SSH. Para ello, puede consultar la guía [«Conectarse a una instancia Public Cloud](../primera-conexion/){.external}.
- Conéctese como usuario raíz. En este caso, consulte la guía [«Conectarse como usuario raíz y establecer una contraseña»](../conectarse_como_usuario_root_y_establecer_una_contrasena/){.external}.

> [!success]
>
> Tenga en cuenta que puede leer el archivo resolv.conf para comprobar cuál es el servidor DNS configurado:
> 
> cat /etc/resolv.conf
> 
> 
> domain openstacklocal
> search openstacklocal
> nameserver 213.186.33.99
>

- Edite el archivo /etc/dhcp/dhclient.conf con los servidores DNS deseados.
Puede elegir entre dos opciones de configuración:

Adición de otro servidor DNS adicional al que le proporcionamos por defecto:
  
```
supersede domain-name-servers 127.0.0.1;
```

Adición de un servidor DNS para sustituir el que le proporcionamos por defecto:
    
```
prepend domain-name-servers 127.0.0.1;
```
 
- Compruebe que la configuración se haya aplicado correctamente (podrá tardar unos minutos):

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver 127.0.0.1
nameserver 213.186.33.99
```

### En CentOS/Fedora

- Conéctese a la instancia por SSH. Para ello, puede consultar la guía [«Conectarse a una instancia Public Cloud](../primera-conexion/){.external}.
- Conéctese como usuario raíz. En este caso, consulte la guía [«Conectarse como usuario raíz y establecer una contraseña»](../conectarse_como_usuario_root_y_establecer_una_contrasena/){.external}.
- Compruebe la configuración actual con el comando nmcli:

```
nmcli
 
eth0: conectado al System eth0
        "Red Hat Virtio"
        ethernet (virtio_net), FA:16:3E:B6:FB:89, hw, mtu 1500
        ip4 default
        inet4 51.77.205.51/32
        route4 0.0.0.0/0
        route4 51.77.205.51/32
        route4 51.77.204.1/32
        inet6 fe80::f816:3eff:feb6:fb89/64
        route6 ff00::/8
        route6 fe80::/64
 
lo: no-gestionado
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```
- Compruebe el nombre de su interfaz pública:

```
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```
- Desactive el cambio de los DNS automáticos e introduzca los DNS deseados:

```
nmcli con mod "Nombre de su interfaz" ipv4.ignore-auto-dns yes
nmcli con mod "Nombre de su interfaz" ipv4.dns "127.0.0.1 213.186.33.99"
```
- Aplique la configuración:

```
nmcli con down "Nombre de su interfaz" && nmcli con up "Nombre de su interfaz"
```
- Compruebe que la configuración se aplique correctamente:

```
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

### En Windows

- Conéctese a través del escritorio remoto o la consola VNC. Para ello, puede consultar la guía [«Conectarse a una instancia Public Cloud](../primera-conexion/){.external}.

- Acceda a la configuración de red

![change-dns-servers](images/changednsservers1.png){.thumbnail}

- Luego, vaya a la configuración IPv4 de su tarjeta de red pública

![change-dns-servers](images/changednsservers2.png){.thumbnail}

- Añada los servidores DNS que quiera utilizar:

![change-dns-servers](images/changednsservers3.png){.thumbnail}

> [!success]
>
En un Powershell, con el comando nslookup, puede comprobar cuál es el servidor DNS utilizado por defecto.
>

## Más información

[«Conectarse a una instancia Public Cloud»](../primera-conexion/){.external}.

[Conectarse como usuario raíz y establecer una contraseña](../conectarse_como_usuario_root_y_establecer_una_contrasena/){.external}.

[Cambiar el hostname de una instancia  Public Cloud](../cambiar-el-hostname-de-una-instancia/){.external}.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
