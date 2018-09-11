---
title: 'Proteger un servidor dedicado'
slug: seguridad-de-un-servidor-dedicado
excerpt: 'Medidas de seguridad para proteger un servidor dedicado'
section: 'Primeros pasos'
order: 2
---

**Última actualización: 31/08/2018**

## Objetivo

Los servidores dedicados no incluyen de forma nativa ningún protocolo de seguridad. Por lo tanto, usted deberá implementar las medidas necesarias para proteger su servidor dedicado. OVH no podrá ser considerado responsable de los fallos de seguridad de la máquina.

**En esta guía ofrecemos algunos consejos para proteger un servidor dedicado.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVH pone a su disposición recae íntegramente en usted. Nuestros técnicos no son los administradores de las máquinas, ya que no tienen acceso a ellas. Por lo tanto, la gestión del software y la seguridad le corresponde a usted.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene problemas o dudas sobre la administración, la utilización o la seguridad de su servidor, le recomendamos que contacte con un proveedor de servicios especializado. Para más información, consulte el apartado «Más información» de esta guía.
>


## Requisitos

- Tener un [servidor dedicado de OVH](https://www.ovh.es/servidores_dedicados/){.external}.
- Estar conectado por SSH (acceso *root*) en Linux o como administrador en Windows.


## Procedimiento

> [!primary]
>
> Esta guía es genérica. Tenga en cuenta que deberá adaptar los comandos en función de la distribución o el sistema operativo que utilice. En algunos casos le aconsejamos que utilice herramientas externas. Si necesita ayuda sobre el uso de dichas herramientas, puede consultar su documentación oficial.  
>

### Actualizar el sistema

Los desarrolladores de distribuciones y sistemas operativos ofrecen actualizaciones frecuentes de los paquetes, en muchas ocasiones por motivos de seguridad. **La actualización de la distribución o sistema operativo es, por lo tanto, un aspecto fundamental a la hora de proteger su servidor dedicado.**

Este proceso consta de dos pasos: la actualización de la lista de paquetes (la lista de aplicaciones de software instaladas) y la actualización de los propios paquetes.

#### Actualización de la lista de paquetes

Ejecute el siguiente comando para actualizar la lista de paquetes del servidor:

```sh
apt-get update
```

#### Actualización de los propios paquetes

Ejecute el siguiente comando para actualizar los paquetes del servidor:

```sh
apt-get upgrade
```

Una vez que haya realizado estas dos acciones, el sistema estará actualizado. Para proteger su sistema, debe realizar esta operación de forma regular.


### Cambiar el puerto de escucha por defecto del servicio SSH

Una de las primeras operaciones que debe realizar en su servidor es configurar el servicio SSH modificando el puerto de escucha. El puerto de escucha por defecto es el **puerto 22**. Es aconsejable cambiarlo, ya que la mayor parte de los intentos de pirateo de servidores son realizados por robots que se dirigen habitualmente al puerto 22. Al modificar la configuración por defecto, les resultará más difícil llegar al servidor.

> [!primary]
>
> En los siguientes ejemplos utilizaremos el editor de texto Linux **Nano**, pero puede utilizar cualquier otro que le permita editar el archivo de configuración.
>

Ejecute este comando para editar el archivo de configuración del servicio:

```sh
nano /etc/ssh/sshd_config
```

Al principio del archivo encontrará las siguientes líneas:

```sh
# What ports, IPs and protocols we listen for 
Port 22
```

Sustituya el número **22** por el puerto que desee establecer y, a continuación, guarde y cierre el archivo de configuración. **Asegúrese de no introducir un número de puerto que ya esté en uso**. A continuación, reinicie el servidor:

A partir de este momento, cuando quiera conectarse a la máquina por SSH, deberá introducir el nuevo puerto:

```sh
ssh root@SuServidor.ovh.net -p NuevoPuerto
```

> [!warning]
>
> Tenga en cuenta que la modificación del puerto por defecto de SSH o de cualquier otro protocolo conlleva un riesgo. Algunos servicios no pueden configurarse para ser utilizados con puertos no estándar y, por lo tanto, no funcionarán si modifica el puerto por defecto.
>


### Cambiar la contraseña del usuario *root*

Al instalar una distribución o un sistema operativo, se genera automáticamente una contraseña para el acceso *root*. Le recomendamos encarecidamente que personalice esta contraseña. Para ello, conéctese por SSH a su servidor e introduzca el siguiente comando:

```sh
passwd root
```

El sistema le pedirá que introduzca la nueva contraseña dos veces para confirmarla. Tenga en cuenta que, por motivos de seguridad, **la contraseña no se mostrará mientras escribe**, por lo que no podrá ver los caracteres introducidos.

La próxima vez que se conecte al sistema, deberá introducir la nueva contraseña.


### Crear un usuario con permisos restringidos

Le recomendamos que cree una cuenta de usuario con acceso restringido al servidor para su uso cotidiano. Para crear un nuevo usuario introduzca el siguiente comando:

```sh
adduser Nombre_Usuario_Personalizado
```

Introduzca la información solicitada por el sistema (contraseña, nombre completo, etc.).

El nuevo usuario podrá conectarse al sistema por SSH con la contraseña que haya indicado al crear la cuenta. Si, estando conectado al sistema con el nuevo usuario, necesita realizar operaciones que requieran permisos de administrador, solo tendrá que introducir el siguiente comando:

```sh
su root
```

A continuación deberá introducir la contraseña del usuario *root* para validar la operación.


### Desactivar el acceso al servidor a través del usuario *root*

En los sistemas UNIX, como Linux o macOS, el usuario *root* está creado por defecto y dispone de todos los permisos de administración sobre el sistema. No es recomendable (ni seguro) que solo se pueda acceder al servidor dedicado a través de este usuario, ya que podría realizar operaciones irreversibles en el servidor.

Por lo tanto, le recomendamos encarecidamente que desactive el acceso directo de los usuarios *root* por SSH. Para ello, edite el archivo de configuración SSH tal y como se explica más arriba en el apartado [Cambiar el puerto de escucha por defecto del servicio SSH](https://docs.ovh.com/es/dedicated/proteger-un-servidor-dedicado#cambiar-el-puerto-de-escucha-por-defecto-del-servicio-ssh){.external}.

Conéctese por SSH al servidor e introduzca el siguiente comando:

```sh
nano /etc/ssh/sshd_config
```

Localice la siguiente sección y sustituya `yes` por `no` en la línea **PermitRootLogin**.

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Una vez que haya guardado y cerrado el archivo de configuración, reinicie el servicio SSH para que se apliquen los cambios con el siguiente comando:

```sh
/etc/init.d/ssh restart
```

### Instalar y configurar el paquete Fail2ban

Fail2ban es una aplicación de prevención contra intrusiones que actúa bloqueando las direcciones IP desconocidas que intentan penetrar en el sistema. Es aconsejable utilizar este paquete para protegerse contra ataques de fuerza bruta en su servidor.

Para instalar Fail2ban introduzca el siguiente comando:

```sh
apt-get install fail2ban
```

Una vez instalado el paquete, deberá editar el archivo de configuración para adaptarlo a su sistema. Antes de hacer cualquier modificación, le recomendamos que haga una copia de seguridad del archivo introduciendo el siguiente comando:

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

Para más información sobre Fail2Ban, consulte la [documentación oficial](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.


### Configurar el firewall interno: iptables

La distribución de base dispone de un servicio de firewall llamado iptables. Por defecto, este servicio no tiene ninguna regla activa. Puede comprobarlo introduciendo el siguiente comando:

```sh
iptables -L
```

Le recomendamos que cree y adapte las reglas del firewall en función de su uso. Para más información sobre la configuración de iptables, consulte la documentación oficial de su distribución Linux.


### Configurar el firewall de red de OVH

Los servidores dedicados de OVH incluyen un firewall de red en la entrada de la infraestructura. Activándolo y configurándolo correctamente es posible bloquear determinados protocolos antes incluso de que lleguen al servidor.

Para más información, consulte la guía [Configurar el firewall de red](https://docs.ovh.com/es/dedicated/firewall-de-red/){.external}.


### Guardar copia de seguridad del sistema y los datos

La noción de seguridad va más allá de proteger un sistema frente a posibles ataques. La protección de los datos es un aspecto fundamental. Por eso, OVH ofrece un espacio de backup de 500 GB gratis con su servidor dedicado. Puede activar este espacio de backup en su área de cliente y acceder a él a través de los siguientes protocolos:

* FTP
* FTPS
* NFS
* CIFS

Para replicar sus datos y transferirlos a su espacio de backup, necesitará una solución de backup externa.

Para más información sobre este espacio de backup, consulte nuestra guía [Backup Storage](https://docs.ovh.com/es/dedicated/servicio-backup-storage/){.external}.


## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.