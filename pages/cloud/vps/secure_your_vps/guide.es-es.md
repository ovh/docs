---
title: 'Proteger un VPS'
slug: consejos-proteccion-vps
excerpt: 'Medidas de seguridad para proteger un servidor privado virtual'
section: 'Primeros pasos'
---

**Última actualización: 05/02/2018**

## Objetivo

Los VPS de OVHcloud se entregan con una distribución preinstalada, pero no incluyen de forma nativa ningún protocolo de seguridad. Por lo tanto, usted deberá proteger su VPS, ya que este es un aspecto sobre el que OVHcloud no puede intervenir.

**En esta guía le ofrecemos algunos consejos para proteger un VPS de OVHcloud.**

 
> [!warning]
>
> La responsabilidad sobre las máquinas que OVHcloud pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted. Esta guía le ayudará a realizar las operaciones más habituales en su VPS.
>
> No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
> 



## Requisitos

- Estar conectado al VPS por SSH (acceso *root*).


## Procedimiento

Esta guía ofrece consejos generales sobre cómo proteger su VPS. Tenga en cuenta que algunos comandos deben adaptarse a la distribución que utilice. En otros casos, será necesario utilizar herramientas externas. Si necesita ayuda, puede consultar la documentación oficial de dichas herramientas.

### Actualizar el sistema

Los desarrolladores de distribuciones actualizan los paquetes con relativa frecuencia, en muchas ocasiones por motivos de seguridad. El mantenimiento de la distribución de su VPS es, por lo tanto, un aspecto fundamental a la hora de proteger su servidor.

La actualización consta de dos pasos:

- Actualización de la lista de paquetes

```sh
apt-get update
```

- Actualización de los propios paquetes

```sh
apt-get upgrade
```

Una vez haya realizado estas dos acciones, el sistema estará actualizado. Para proteger su sistema, debe realizar esta operación de forma regular.


### Cambiar el puerto de escucha por defecto del servicio SSH


Esta es una de las primeras operaciones que debe realizar en su servidor. El puerto de escucha establecido por defecto es el **puerto 22**. Es aconsejable cambiarlo, ya que la mayoría de las acciones de pirateo informático de servidores son realizadas por robots que se dirigen por defecto al puerto 22. Al modificar la configuración por defecto, será más difícil atacar el servidor.

Este es el comando que deberá ejecutar para editar el archivo de configuración del servicio:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> El comando `nano` se utiliza a modo de ejemplo; puede utilizar el comando `vim` o cualquier otro que permita editar el archivo sshd_config.
>

Al principio del archivo encontrará las siguientes líneas:

```
# What ports, IPs and protocols we listen for
Port 22
```

Sustituya el número 22 por el puerto que desee establecer. **Recuerde no introducir un número de puerto que ya esté siendo utilizado por su sistema**. Guarde y cierre el archivo de configuración.

A continuación, reinicie el servicio:

```sh
/etc/init.d/ssh restart
```

A partir de este momento, cuando quiera conectarse a su máquina por SSH, deberá introducir el nuevo puerto.

```sh
ssh root@suvps.ovh.net -p NuevoPuerto
```

### Cambiar la contraseña del usuario *root*

Al instalar una distribución, se genera automáticamente una contraseña para el acceso principal (*root*). Es muy recomendable que personalice esta contraseña. Para ello, una vez se haya conectado, introduzca el siguiente comando:

```sh
passwd root
```

El sistema le pedirá que introduzca la nueva contraseña dos veces para confirmarla. **Atención: Por motivos de seguridad, la contraseña no se mostrará mientras la escribe, por lo que no podrá ver los caracteres introducidos.**

La próxima vez que se conecte al sistema, deberá introducir la nueva contraseña.

### Crear un usuario con permisos restringidos y acceder al sistema con permisos *root*

Para crear un nuevo usuario introduzca el siguiente comando:

```sh
adduser NombreUsuarioPersonalizado
```

Introduzca la información solicitada por el sistema (contraseña, nombre completo...).

El nuevo usuario podrá conectarse al sistema por SSH con la contraseña que haya indicado al crearlo.

Si, estando conectado al sistema con el nuevo usuario, necesita realizar operaciones que requieran permisos *root*, solo tendrá que introducir el siguiente comando:

```sh
su root
```

A continuación, deberá introducir la contraseña del usuario *root* para validar la operación.

### Desactivar el acceso al servidor a través del usuario *root*

En los sistemas UNIX, el usuario *root* está creado por defecto, y es el que más permisos tiene sobre el sistema. No es recomendable (ni seguro) que solo se pueda acceder al VPS a través de este usuario, ya que podría realizar operaciones irreversibles en el servidor.

Por lo tanto, le recomendamos que desactive su acceso directo mediante el protocolo SSH.

Para ello, edite el archivo de configuración SSH tal y como se explica más arriba en el apartado [Cambiar el puerto de escucha por defecto del servicio SSH](#cambiar-el-puerto-de-escucha-por-defecto-del-servicio-ssh).

```sh
nano /etc/ssh/sshd_config
```

Identifique la siguiente sección:

```
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Sustituya **yes** por **no** en la línea **PermitRootLogin**.

Reinicie el servicio SSH para que se apliquen los cambios.

```sh
/etc/init.d/ssh restart
```

A partir de este momento, para conectarse al sistema deberá utilizar el usuario que acaba de crear.


### Instalar y configurar el paquete Fail2ban

Fail2ban es una aplicación de prevención contra intrusiones, que actúa bloqueando las direcciones IP desconocidas que intentan penetrar en el sistema. Es recomendable, y casi indispensable, utilizar este paquete para protegerse contra ataques de fuerza bruta en sus servicios.

Para instalar el paquete introduzca el siguiente comando:

```sh
apt-get install fail2ban
```

Una vez instalado el paquete, deberá editar el archivo de configuración para configurar la aplicación. Antes de hacer cualquier modificación, es recomendable realizar una copia de seguridad del archivo introduciendo el siguiente comando:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Realice los cambios en el archivo:

```sh
nano /etc/fail2ban/jail.conf
```

Una vez haya realizado la operación anterior, reinicie el servicio utilizando el siguiente comando:

```sh
/etc/init.d/fail2ban restart
```

Para más información sobre Fail2Ban, consulte la [documentación oficial](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Configurar el firewall interno: iptables

La distribución de base dispone de un servicio de firewall llamado Iptables. Por defecto, este servicio no tiene ninguna regla activa. Puede comprobarlo introduciendo el siguiente comando:

```sh
iptables -L
```

Le recomendamos que cree y adapte las reglas del firewall en función de su uso. Para más información sobre las distintas acciones que puede realizar, consulte la documentación oficial de su distribución.

### Configurar el firewall de red de OVHcloud

OVHcloud pone a disposición de sus clientes un firewall de red en la entrada de la infraestructura. Activándolo y configurándolo correctamente es posible bloquear determinados protocolos antes incluso de que lleguen al servidor.

Para más información sobre el firewall de red, consulte esta [guía](https://docs.ovh.com/es/dedicated/firewall-de-red/){.external}.

### Guardar copia de seguridad del sistema y los datos

La noción de seguridad va más allá de proteger un sistema frente a posibles ataques.

La protección de los datos es un aspecto fundamental. Por eso, OVHcloud ofrece tres opciones de backup:

- La opción **Snapshot** permite crear manualmente una «instantánea» (llamada snapshot) de la máquina virtual. Está disponible en los VPS SSD, VPS Cloud y VPS Cloud RAM.
- La opción **Backup automatizado** permite planificar una copia de seguridad diaria del VPS (exceptuando los discos adicionales), que es exportada y replicada tres veces antes de estar disponible en el área de cliente. Está disponible en los VPS Cloud y VPS Cloud RAM.
- La opción **Backup Storage** permite transferir y recuperar archivos manualmente en un espacio en disco dedicado. Para adaptarse a los métodos de acceso de los usuarios de los distintos sistemas operativos, OVHcloud pone a su disposición los siguientes protocolos de transferencia: FTP, NFS y CIFS. De este modo, podrá proteger sus datos en caso de interrupción del servicio. Esta opción está disponible en los VPS Cloud y VPS Cloud RAM.

Para más información sobre nuestras soluciones de backup para VPS, visite la página <https://www.ovhcloud.com/es/vps/>.

## Más información

[El firewall de red](https://docs.ovh.com/es/dedicated/firewall-de-red/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://ovh.es/community/){.external}.