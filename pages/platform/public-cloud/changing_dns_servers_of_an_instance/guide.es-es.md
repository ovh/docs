---
title: Cambiar los servidores DNS de una instancia de Public Cloud
slug: cambiar-los-servidores-dns-de-una-instancia
excerpt: Cómo cambiar los servidores DNS por defecto de una instancia de Public Cloud
legacy_guide_number: 1985
section: 'Red e IP'
order: 4
updated: 2021-10-29
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 29/10/2021**

## Objetivo

Por defecto, el servidor DNS configurado en las instancias de Public Cloud será el de OVHcloud (213.186.33.99, por ejemplo).<br>
Puede añadir un servidor secundario o sustituir esta configuración por la suya. Sin embargo, los servidores DNS son configurados automáticamente por un servidor DHCP y no podrá modificar la configuración DNS editando el archivo `resolv.conf`.

**Esta guía explica cómo cambiar la configuración DHCP de una instancia para cambiar los servidores DNS.**

> [!warning]
> OVHcloud le ofrece servicios cuya configuración y gestión son responsabilidad suya. Por lo tanto, usted deberá asegurarse de que estos servicios funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la instalación de un servicio en un servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener una [instancia de Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud.
- Tener acceso de administrador (root) a la instancia a través de SSH o RDP.
- Conocimientos básicos de red y administración.

## Procedimiento

Conéctese a su instancia por SSH. Para más información, consulte la guía [Conectarse a una instancia de Public Cloud](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/#connect-to-instance).

Cambiar al usuario root. Si lo necesita, consulte nuestra guía para [cambiar a root y establecer una contraseña](https://docs.ovh.com/es/public-cloud/conectarse_como_usuario_root_y_establecer_una_contrasena/).

### Debian / Ubuntu

Con el editor de texto que desee, edite el archivo `/etc/dhcp/dhclient.conf` para configurar los servidores DNS que desee.

Aquí puede utilizar diferentes directivas para añadir los servidores DNS que desee. Utilice el comando que desee y sustituya IP1/IP2 por sus direcciones IP.

- Añada esta línea para añadir servidores DNS que sustituyan al configurado por defecto:
  
```console
supersede domain-name-servers IP1, IP2;
```

- Para añadir servidores DNS preferidos a los configurados por defecto:
    
```console
prepend domain-name-servers IP1, IP2;
```

- Para añadir servidores DNS que solo se utilizarán si el configurado por defecto no está disponible:
    
```console
append domain-name-servers IP1, IP2;
```

Guarde los cambios en el archivo de configuración y salga del editor.

Compruebe que la configuración se haya aplicado correctamente con el siguiente comando:

```bash
cat /etc/resolv.conf

domain openstacklocal
search openstacklocal
nameserver IP1
nameserver IP2
```

### CentOS/Fedora

Compruebe la configuración actual con el comando `nmcli`:

```bash
nmcli
 
eth0: connected to System eth0
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
 
lo: non-managed
        "lo"
        loopback (unknown), 00:00:00:00:00:00, sw, mtu 65536
 
DNS configuration:
        servers: 127.0.0.1 213.186.33.99
        interface: eth0
```

Obtenga el nombre de su interfaz pública:

```bash
nmcli connection show
 
NAME         UUID                                  TYPE      DEVICE
System eth0  5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03  ethernet  eth0
```

Desactive la modificación automática de los DNS y añada las direcciones IP (sustituya IP1/IP2) de los servidores DNS que quiera configurar. (Sustituya `System eth0` por el valor real obtenido anteriormente).

```bash
nmcli con mod "System eth0" ipv4.ignore-auto-dns yes
nmcli con mod "System eth0" ipv4.dns "IP1 IP2"
```

Aplicar la configuración (Sustituya `System eth0` por el valor real obtenido anteriormente).

```bash
nmcli con down "System eth0" && nmcli con up "System eth0"
```

Compruebe que la configuración se aplique correctamente:

```bash
nmcli | grep -E 'DNS|server|interface'
 
DNS configuration:
        servers: IP1 IP2
        interface: eth0
```

### Windows

Conéctese a la instancia a través de una sesión de escritorio remoto o con la consola VNC. Para más información, consulte la guía [Conectarse a una instancia de Public Cloud](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/#connect-to-instance).

Abra los `Parámetros de red`{.action}.

![modificar los servidores dns](images/changednsservers1.png){.thumbnail}

En el panel de configuración, acceda a la configuración IPv4 de su tarjeta de red pública.

![modificar los servidores dns](images/changednsservers2.png){.thumbnail}

Añada los servidores que quiera utilizar en los `parámetros avanzados`{.action}.

![modificar los servidores dns](images/changednsservers3.png){.thumbnail}

> [!primary]
>
En un PowerShell, el comando `nslookup` permite comprobar cuál es el servidor DNS utilizado por defecto.
>

## Más información <a name="gofurther"></a>

[Crear una primera instancia de Public Cloud y conectarse a ella](https://docs.ovh.com/es/public-cloud/public-cloud-primeros-pasos/)

[Ejecutar comandos como root](https://docs.ovh.com/es/public-cloud/conectarse_como_usuario_root_y_establecer_una_contrasena/)

[Cambiar el hostname de una instancia de Public Cloud](https://docs.ovh.com/es/public-cloud/cambiar-el-hostname-de-una-instancia/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.