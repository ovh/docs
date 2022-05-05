---
title: 'Proteger un VPS'
slug: consejos-proteccion-vps
section: 'Primeros pasos'
excerpt: 'Descubra los elementos básicos que le permiten proteger su VPS'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 15/1/2021**

## Objetivo

Al contratar su VPS, puede elegir una distribución o sistema operativo que quiera preinstalar. El servidor está listo para usar después de la entrega.  Sin embargo, usted, como administrador, debe adoptar medidas que garanticen la seguridad y la estabilidad de su sistema.

**Esta guía ofrece algunos consejos generales para proteger su servidor dedicado.**
 
> [!warning]
>
> OVHcloud ofrece máquinas cuya responsabilidad recae en usted. Nosotros no tenemos acceso a los datos alojados en estas máquinas y no somos los administradores. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las tareas más habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la seguridad del servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- una solución [VPS](https://www.ovhcloud.com/es-es/vps/) en su cuenta de OVHcloud
- acceso administrativo (root) por SSH a su servidor

## Procedimiento

> [!primary]
>
> Ten en cuenta que se trata de una guía general. Algunos comandos deben adaptarse a la distribución o el sistema operativo que utilice. A veces le recomendamos que utilice herramientas externas. Si necesita ayuda, consulte la documentación oficial de estas aplicaciones.
>
> Si configura su primer VPS de OVHcloud, le recomendamos que consulte en primer lugar nuestra guía sobre [la puesta en marcha de un VPS](../primeros-pasos-con-vps/).
>

### Actualizar el sistema

Los desarrolladores de distribuciones realizan numerosas actualizaciones de los paquetes, muchas veces por motivos de seguridad. El mantenimiento de la distribución de su VPS es, por lo tanto, un aspecto fundamental a la hora de proteger su servidor.

Esta actualización consta de dos etapas.

- Actualización de la lista de paquetes:

```sh
apt-get update
```

- Actualización de los propios paquetes:

```sh
apt-get upgrade
```

Esta operación se debe realizar periódicamente para conservar un sistema actualizado.


### Cambiar el puerto de escucha por defecto del servicio SSH

Una de las primeras acciones que deberá realizar en su servidor es configurar el servicio SSH cambiando el puerto de escucha. Está definido en el **puerto 22** por defecto. Por lo tanto, los intentos de pirateo de servidores por parte de robots se dirigirán a este puerto. La modificación de este parámetro con ayuda de otro puerto es una medida sencilla para reforzar la protección del servidor contra los ataques automatizados.

Ejecute este comando para editar el archivo de configuración del servicio:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Por ejemplo, puede utilizar el comando `nano` o cualquier otro comando que permita modificar archivos de configuración. Puede utilizar el comando `vim`.
>

A continuación, encontrará las siguientes líneas:

```sh
# What ports, IP and protocols we listen for
Port 22
```

Sustituya el número **22** por el número de puerto que desee. **No introduzca ningún número de puerto que ya esté en uso en su sistema**. Por motivos de seguridad, utilice un número comprendido entre 49152 y 65535. <br>Guarde y cierre el archivo de configuración.

Reinicie el servicio:

```sh
systemctl restart sshd
```

Esto debería ser suficiente para aplicar los cambios. También puede reiniciar el VPS (`~$ reboot`).

Recuerde que deberá indicar el nuevo puerto cada vez que solicite una conexión SSH a su servidor, por ejemplo:

```sh
username@IPv4_of_your_VPS -p NewPortNumber
```

### Modificación de la contraseña asociada al usuario root

Le recomendamos encarecidamente que cambie la contraseña del usuario root para que no se quede con el valor predeterminado en un nuevo sistema. Para más información, consulte [esta guía](../root-password/).

### Creación de un usuario con permisos restringidos

Por lo general, las tareas que no necesitan privilegios root deben realizarse a través de un usuario estándar. Puede crear un usuario con el siguiente comando:

```sh
adduser CustomUserName
```

Introduzca la información solicitada por el sistema (contraseña, nombre completo, etc.).

El nuevo usuario podrá conectarse por SSH. Al conectarse, utilice los datos de identificación especificados.

Una vez que se haya conectado al sistema con la siguiente información de acceso, si necesita realizar operaciones que requieran permisos de administrador, introduzca el siguiente comando:

```sh
su root
```

Introduzca la contraseña cuando se le pida, y la conexión actual se cambiará al usuario root.

### Desactivación del acceso al servidor a través del usuario root

El usuario root se crea por defecto en los sistemas GNU/Linux. El acceso root significa tener más permisos en un sistema operativo. No es recomendable (ni seguro) que solo se pueda acceder al VPS mediante el acceso root, ya que esta cuenta puede realizar operaciones irreversiblemente dañinas.

Le recomendamos que desactive el acceso directo al usuario root mediante el protocolo SSH. No olvide crear otro usuario antes de seguir los pasos que se indican a continuación.

Es necesario modificar el archivo de configuración SSH tal y como se explica a continuación:

```sh
nano /etc/ssh/sshd_config
```

Localice la siguiente sección:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes     
StrictModes yes
```

Sustituya **yes** por **no** en la línea `PermitRootLogin`.

Reinicie el servicio SSH para que se apliquen los cambios:

```sh
systemctl restart sshd
```

A continuación, las conexiones al servidor a través del usuario root (`ssh root@IPv4_of_your_VPS`) serán rechazadas.

### Instalación de Fail2ban

Fail2ban es una aplicación de prevención contra intrusiones, que actúa bloqueando las direcciones IP desconocidas que intentan penetrar en el sistema. Es recomendable utilizar este programa, aunque sea esencial, para protegerse contra ataques violentos contra sus servicios.

Para instalar el paquete de software, utilice el siguiente comando:

```sh
apt-get install fail2ban
```

Una vez instalado el paquete, deberá editar el archivo de configuración para adaptarlo a su uso. Antes de realizar cualquier modificación, le recomendamos que realice una copia de seguridad del archivo de configuración introduciendo el siguiente comando:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Realice los cambios pertinentes en el archivo:

```sh
nano /etc/fail2ban/jail.conf
```

Una vez hechos los cambios, reinicie el servicio utilizando el siguiente comando:

```sh
/etc/init.d/fail2ban restart
```

Para más información sobre Fail2ban, consulte la documentación oficial de esta herramienta en [este enlace](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Configuración del firewall interno (iptables)

Las distribuciones Linux y UNIX se entregan con un servicio de firewall llamado iptables. Por defecto, este servicio no tiene ninguna regla activa. Puede comprobarlo introduciendo el siguiente comando:

```sh
iptables -L
```

Le recomendamos que cree reglas sobre el firewall y que las adapte a su uso. Para más información sobre las diversas operaciones posibles, consulte la documentación oficial de la distribución utilizada.

### Configuración del firewall de red de OVHcloud 

Las soluciones de OVHcloud incluyen la posibilidad de activar un firewall de red en el punto de entrada de la infraestructura. Una configuración correcta de este cortafuegos permite bloquear las conexiones incluso antes de que lleguen al servidor.

Para activarlo, consulte la guía [Configurar el firewall de red](../../dedicated/firewall-de-red/).

### Guardar copia de seguridad del sistema y los datos

El concepto de seguridad no se limita a la protección de un sistema contra los ataques.

La protección de sus datos es un elemento clave. Por ese motivo, OVHcloud le ofrece varias opciones de backup como servicios:

- La opción `Snapshot` que permite crear una instantánea manual.
- La opción de `backup automático` permite conservar copias de seguridad regulares de su VPS (a excepción de los discos adicionales).

En la [página de producto](https://www.ovhcloud.com/es-es/vps/options/) y en las respectivas[ ](../)guías encontrará toda la información sobre las soluciones de backup disponibles para su servicio.

## Más información

[Primeros pasos con un VPS](../primeros-pasos-con-vps/) 

[Configurar el firewall de red](../../dedicated/firewall-de-red/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
