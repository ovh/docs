---
title: 'Proteger un VPS'
slug: consejos-proteccion-vps
section: 'Primeros pasos'
excerpt: 'Descubra los elementos básicos que le permiten proteger su VPS'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 05/05/2022**

## Objetivo

Al contratar su VPS, puede elegir una distribución o sistema operativo que quiera preinstalar. El servidor está listo para usar después de la entrega. Sin embargo, usted, como administrador, debe adoptar medidas que garanticen la seguridad y la estabilidad de su sistema.

**Esta guía ofrece algunos consejos para proteger un servidor basado en GNU/Linux.**

> [!warning]
>OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
>Si necesita ayuda, póngase en contacto con un proveedor de servicios especializado o debata el problema con nuestra comunidad de usuarios en https://community.ovh.com/en/. OVHcloud no puede ofrecerle soporte técnico.
>

## Requisitos

- Un [VPS](https://www.ovhcloud.com/es-es/vps/) en su cuenta de OVHcloud.
- Tener acceso de administrador (root) al servidor por SSH.

## Procedimiento

> [!primary]
>
> Tenga en cuenta que se trata de una guía general basada en un sistema operativo Ubuntu Server. Tenga en cuenta que algunos comandos deben adaptarse a la distribución que utilice y que algunos consejos le invitan a utilizar herramientas de terceros. Si necesita ayuda, consulte la documentación oficial de estas aplicaciones.
>
> Si se trata de su primera configuración de un VPS de OVHcloud, consulte nuestra guía [Primeros pasos con un VPS](../primeros-pasos-con-vps/).
>

Los siguientes ejemplos implican que está conectado como usuario con permisos muy exigentes.

### Actualizar el sistema operativo

Los desarrolladores de distribuciones y sistemas operativos ofrecen actualizaciones frecuentes de los paquetes, en muchas ocasiones por motivos de seguridad.<br>
Garantizar que su distribución o sistema operativo estén actualizados es un aspecto fundamental para proteger su VPS.

Esta actualización consta de dos etapas.

- Actualización de la lista de paquetes:

```bash
sudo apt update
```

- Actualización de los paquetes propiamente dichos :

```bash
sudo apt upgrade
```

Esta operación debe realizarse regularmente para mantener un sistema actualizado.

### Cambiar el puerto de escucha por defecto SSH

Una de las primeras acciones que deberá realizar en su servidor es configurar el puerto de escucha del servicio SSH. Por defecto, este se define en el **puerto 22**, por lo que los intentos de hackeo del servidor por parte de robots se dirigirán prioritariamente a este puerto.
La modificación de este parámetro, en beneficio de un puerto diferente, es una medida sencilla para reforzar la protección de su servidor contra los ataques automatizados.

Para ello, edite el archivo de configuración del servicio con el editor de texto que desee (`nano` se utiliza en este ejemplo):

```bash
~$ sudo nano /etc/ssh/sshd_config
```

Encontrará las siguientes líneas o equivalentes:

```console
# What ports, IPs and protocols we listen for
Port 22
```

Sustituya el número **22** por el número de puerto que desee.<br>
**Recuerde que no debe indicar un número de puerto que ya esté en uso en su sistema**.
Para mayor seguridad, utilice un número entre 49152 y 65535.<br>
Guarde y cierre el archivo de configuración.

Reinicie el servicio:

```bash
sudo systemctl restart sshd
```

Esto debería ser suficiente para aplicar los cambios. En caso contrario, reinicie el VPS (`~$ sudo reboot`).

Recuerde que deberá indicar el nuevo puerto en cada solicitud de conexión SSH al servidor, por ejemplo:

```bash
ssh username@IPv4_of_your_VPS -p NewPortNumber
```

### Cambiar la contraseña del usuario root

Le recomendamos encarecidamente que cambie la contraseña del usuario root para evitar que se quede en el valor predeterminado de un nuevo sistema. Para más información, consulte [esta guía](../root-password/).

### Crear un usuario con permisos restringidos

Por lo general, las tareas que no requieran privilegios root deben realizarse a través de un usuario estándar. Para crear un nuevo usuario introduzca el siguiente comando:

```bash
sudo adduser NombreUsuarioPersonalizado
```

Introduzca la información solicitada por el sistema: contraseña, nombre, etc.

El nuevo usuario podrá conectarse por SSH. Al establecer una conexión, utilice los datos de identificación especificados.

Una vez que se haya conectado, introduzca el siguiente comando para realizar operaciones que requieran permisos root:

```bash
su root
```

Introduzca la contraseña cuando se le pida, y la conexión actual se cambiará al usuario root.

### Desactivar el acceso al servidor a través del usuario root

El usuario root se crea por defecto en los sistemas GNU/Linux. Es el nivel de acceso más alto a un sistema operativo.<br>
No es recomendable (ni seguro) que solo se pueda acceder al VPS como root, ya que esta cuenta puede realizar operaciones irreversiblemente dañinas.

Le recomendamos que desactive el acceso directo de los usuarios root mediante el protocolo SSH. No olvide crear otro usuario antes de seguir los pasos que se indican a continuación.

Es necesario modificar el archivo de configuración SSH tal y como se explica más arriba:

```bash
sudo nano /etc/ssh/sshd_config
```

Identifique la siguiente sección:

```console
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Sustituya **yes** por **no** en la línea `PermitRootLogin`.

Reinicie el servicio SSH para que se apliquen los cambios:

```bash
sudo systemctl restart sshd
```

A continuación, las conexiones al servidor a través del usuario root (`ssh root@IPv4_of_your_VPS`) serán rechazadas.

### Configurar el firewall interno (iptables)

Las distribuciones GNU/Linux habituales se entregan con un servicio de cortafuegos llamado iptables. Por defecto, este servicio no tiene ninguna regla activa. Puede comprobarlo introduciendo el siguiente comando:

```bash
iptables -L
```

Para más información sobre iptables, consulte nuestra [guía dedicada](../../dedicated/firewall-iptables/).

Le recomendamos que cree y adapte las reglas de firewall en función de su uso. Para más información sobre las diversas operaciones posibles, consulte la documentación oficial de la distribución utilizada.

### Instalar Fail2ban

Fail2ban es una aplicación de prevención contra intrusiones que actúa bloqueando las direcciones IP desde las que robots o atacantes intentan penetrar en el sistema.<br>
Es recomendable, y en algunos casos incluso indispensable, proteger su servidor de los ataques de tipo *Brute Force* o *Denial of Service*.

Para instalar el paquete de software, utilice el siguiente comando:

```bash
sudo apt install fail2ban
```

Puede personalizar los archivos de configuración Fail2ban para proteger los servicios expuestos a la internet pública contra los intentos de conexión repetidos.

Como recomienda Fail2ban, cree un archivo de configuración local de sus servicios copiando el archivo "jail":

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Abra el archivo con un editor de texto:

```bash
sudo nano /etc/fail2ban/jail.local
```

Lea la información arriba del archivo, incluyendo los comentarios en `[DEFAULT]`.

La configuración `[DEFAULT]` es global, por lo que se aplicará a todos los servicios que se hayan definido para activarla (`enabled`) en este archivo. 

Es importante saber que los parámetros globales sólo se tendrán en cuenta si no hay valores diferentes definidos en las secciones servicios (`JAILS`) del archivo.

Consideremos estas líneas en `[DEFAULT]`:

```console
bantime = 10m
maxretry = 5
enabled = false
```

Esto significa que una dirección IP desde la que un host intenta conectarse se bloqueará durante diez minutos después del quinto intento de apertura de sesión fallido.<br>
Además, todos los parámetros especificados por `[DEFAULT]` y en las siguientes secciones permanecen desactivados a menos que se añada la línea `enabled = true` para un servicio (listado debajo `# JAILS`).

Por ejemplo de uso, el hecho de tener las siguientes líneas en la sección `[sshd]` activará restricciones únicamente para el servicio OpenSSH:

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

En este ejemplo, si un intento de conexión SSH falla tres veces en cinco minutos, el período de prohibición de las IP será de 30 minutos.

Si lo ha cambiado, puede sustituir "ssh" por el número de puerto real.

El mejor enfoque es activar Fail2ban únicamente para los servicios que realmente se ejecutan en el servidor. Cada parámetro personalizado añadido en `# JAILS` tendrá preferencia sobre los valores predeterminados.

Una vez realizados los cambios, guarde el archivo y cierre el editor.

Reinicie el servicio para asegurarse de que se ejecuta con las personalizaciones aplicadas:

```bash
sudo service fail2ban restart
```

Fail2ban dispone de múltiples parámetros y filtros de personalización, así como de opciones predefinidas, por ejemplo, cuando desea añadir una capa de protección a un servidor web Nginx.

Para más información y recomendaciones sobre Fail2ban, consulte [la documentación oficial](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} de esta herramienta.

### Configuración del firewall de red de OVHcloud 

Las soluciones de OVHcloud incluyen la posibilidad de activar un firewall de red en el punto de entrada de la infraestructura. Una configuración correcta de este cortafuegos permite bloquear las conexiones incluso antes de que lleguen al servidor.

Para activarlo, consulte la guía [Configurar el firewall de red](../../dedicated/firewall-de-red/).

### Guardar copia de seguridad del sistema y los datos

El concepto de seguridad no se limita a la protección de un sistema contra los ataques.

La protección de sus datos es un elemento clave. Por ese motivo, OVHcloud le ofrece varias opciones de backup como servicios:

- La opción `Snapshot` que permite crear una instantánea manual.
- La opción de `backup automático` permite conservar copias de seguridad regulares de su VPS (a excepción de los discos adicionales).

En la [página de producto](https://www.ovhcloud.com/es/vps/options/) y en las respectivas[ ](../)guías encontrará toda la información sobre las soluciones de backup disponibles para su servicio.

## Más información

[Primeros pasos con un VPS](../primeros-pasos-con-vps/) 

[Configurar el firewall de red](../../dedicated/firewall-de-red/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
