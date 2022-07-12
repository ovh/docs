---
title: 'Configuración de un servidor LAMP en Debian 9 y Ubuntu 18'
excerpt: 'Averigüe cómo configurar un servidor LAMP'
slug: configuracion-lamp-debian-ubuntu
section: Tutoriales
---

# Introducción

El acrónimo LAMP se refiere a un grupo de 4 tecnologías: Sistema operativo Linux, un servidor web Apache, una base de datos MySQL y lenguaje de programación PHP.

Estas tecnologías forman una pila, que usted puede utilizar para alojar sitio web dinámicos como WordPress y Drupal. Las pilas LAMP son ahora las utilizadas para alojar aplicaciones web.

**En esta guía se mostrará como configurar un servidor LAMP en Debian 9 y Ubuntu 18.**

## Requisitos

- Conocimiento de administración en Linux.
- Acceso SSH
- Acceso para editar texto mediante comando (ejem. Vim, nano, Emacs)
- Capacidad para instalar una destrucción Linux (aquí estamos usando Debian 9.4, pero los pasos para Ubuntu 18.4 son identificás)
- Un servidor o una máquina virtual con una distribución Linux [un VPS](https://www.ovhcloud.com/es/vps/){.external}, [un servidor dedicado](https://www.ovhcloud.com/es/bare-metal/){.external} o [una instancia Public Cloud](https://www.ovhcloud.com/es/public-cloud/){.external})
- Acceso administrador al servidor (root)

> [!warning]
>
>OVHcloud ofrece servicios de los cuales usted es responsable. De hecho, como no tenemos acceso administrativo a estas máquinas, no somos administradores y no podemos ofrecerle soporte. Esto significa que depende de usted administrar el software y la seguridad diariamente.
>Le proporcionamos esta guía para ayudarlo con tareas comunes. Sin embargo, le recomendamos ponerse en contacto con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) si tiene dificultades o dudas sobre la administración, el uso o la seguridad del servidor.
## Procedimiento
>

## Instrucciones

### Paso 1: Actualiza su sistema

Si usted esta usando una distribucion Debian o Ubuntu, le recomendamos que reinstale su servidor desde cero (si es posible). Tenga en cuenta que esta accion podra **eliminar todo la informacion.**

Conecte via SSH como usuario root. Si usted no esta seguro de como hacer, puede encontar la informacion en esta guia [Introducción al SSH](../introduccion-ssh).

Una vez que haya instalado el sistema operativo, le recomendamos que lo actulice:

```sh
apt-get update && apt-get upgrade -y
```

Con este paso, nos aseguramos que tendra la ultima actulizacion.

### Paso 2: Crear un nuevo usuario con privilegios sudo.

Por razones de seguridad y buenas practicas, es mejor configurar y administrar un servidor LAMP con usuario separado, el cual no tenga privilegios root .Si usted ya tiene un usuario con Privilegios sudo pero no tiene acceso root, puede saltarse el paso 2. Este tipo de características ya está disponible en las últimas versión de Ubuntu.

Si sólo tiene un usuario raíz, puede crear un nuevo usuario:

```sh
adduser mynewuser
```
La misma información es obligatoria como contraseña. Otra información puede ser opcional, ejem. Nombre o teléfono.

Después, usted necesitará añadir el usuario al grupo 'sudo'

```sh
usermod -aG sudo mynewuser 
```
Siguiente, iniciar sesión con el nuevo usuario:

```sh
su - mynewuser
```

### Paso 3: instalación de un servidor Apache 2

En los primeros pasos, usted ha configurado el primer bloque para el LAMP: Distribución Linux.

Ahora instalaremos el segundo bloque – Servidor web Apache 2 – junto con su documentación:

```sh
sudo apt-get install apache2 apache2-doc
```

Si usted ha instalado el servidor correctamente, usted podrá tener acceso a la página por defecto de Apache, introduciendo su dirección IP ( o el nombre del servido) en su navegador como a continuación: `http://server_IP`. No se preocupe sino se conecta por HTTPS, ya que no hay certificado añadido en esta etapa.

![Apache installation](images/tuto_apache.png){.thumbnail}

Esta página es informativa y proporcionar una visión general del archivo de configuración de Apache 2, así como sus características especificas. Aconsejamos leer esta información.

Puede comprobar si el servidor de Apache está funcionando correctamente con el siguiente comando:

```sh
sudo service apache2 status 
```

Debe de aparecer, estado `active (running)`

El servidor de apache se puede administrar de la siguiente manera:

```sh
service apache2 start => starts the service apache2 service stop => stops the service apache2 service restart => relaunches or reloads the service
```

### Paso 4: Instalación PHP

A continuación, instalaremos el tercer bloque: Lenguaje de programación PHP

Para instalar el paquete PHP, utilice el siguiente comando:

```sh
sudo apt-get install php
```

Para probar la instalación, en el directorio /var/www/html, cre un fichero info.php con el siguiente contenido:

```sh
cd /var/www/html sudo nano index.php
``

Añada las siguientes lineas al fichero:

```php
<?php
phpinfo();
?>
```
Luego, acceda al archivo directamente desde el navegador: `http://server_IP/info.php`.

Usted podrá ver la página que detalla todas las especificaciones de su entorno PHP (versión 7.0.30 en su caso):

![PHP installation](images/tuto_php.png){.thumbnail}

Una vez que haya revisado esta página, le recomendamos encarecidamente que elimine el fichero index.php. Esto es debido, a que siempre recomendamos que los detalles de su configuración no estén públicos.

> [!primary]
>
>    Por defecto, el servidor web Apache no prioriza los ficheros PHP sobre HTML. Aquí, en la dirección raíz, tenemos el fichero index.html y el fichero index.php. Si volvemos al navegador, en `http://server_IP`, Apache nos redireccionará hacia la página index.html en lugar de index.php. Esta priorización no afectará a la mayoría de los sistemas de gestión de contenido, como WordPress o Drupal. Sin embargo esta regla puede ser modificada si fuese necesario.
>

### Paso 5:  Instale la base de datros  MySQL/MariaDB

Este es el cuarto y el último paso para nuestro LAMP-- sistema de base de datos.

> [!primary]
>
> En 2009, después que Oracle adquiriera MySQL, el fundador de MySQL creo una comunidad más abierta. Su nombre es MariaDB, en honor a su hija. Todos los comandos MySQL son totalmente compatibles con MariaDB, como una de las aplicaciones web más populares. La distribución Linux Debian ofrece MariaDB por defecto. Si usted utiliza Debian, verá "MariaDB" en su terminal para este paso.
>

Este es el comando que necesita utilizar (se le solicitara la contraseña):

```sh
sudo apt-get install mysql-server 
```
Por defecto, la contraseña del administrador de MySQL/MariaDB será la misma que su usuario. Para personalizar la seguridad de su base de datos, utilice el siguiente comando:

```sh
mysql_secure_installation 
```

Introduzca la contraseña root y cambie la contraseña

```sh
Change the root password? [Y/n] => y New password: 
```

Elimine los usuarios anónimos

```sh
Remove anonymous users? [Y/n] => y 
```

Deshabilite el inicio de sesión root remoto:

```sh
Disallow root login remotely? [Y/n] => y 
```

Ahora debe de eliminar la base de datos "test"  que se crea por defecto

```sh
Remove test database and access to it? [Y/n] => y 
```

Ahora puede cargar las nuevas configuraciones:

```sh
Reload privilege tables now? [Y/n] => y 
```

Para probar el acceso a su base de datos, utilice el siguiente comando:

```sh
mysql -u root -p

MariaDB \[(none)]> show databases; MariaDB \[(none)]> exit 
```

Le recomendamos que cree una cuenta de usuario específico y dedicarla a la aplicación web. Si es necesario, puede consultar la siguiente guía [MySQL](https://dev.mysql.com/){.external} y [MariaDB](https://mariadb.com/kb/en/library/user-account-management/{.external}.

### Paso 6: Instalar phpMyAdmin(opcional)

Su servidor LAMP ya está configurado. Este paso es opcional. Con la interfaz de código abierto phpMyAdmin, usted podrá administrar sus bases de datos más fácilmente a través una interfaz web.

Puede instalarlo, con el siguiente comando:

```sh
sudo apt-get install phpmyadmin 
```

Desde las opciones que ofrece, seleccione un servidor web para configurar automáticamente la ejecución de phpMyadmin:

- Marque `()apache2`{.action},luego `Entry`{.action}
- Acepete ayuda de configuracion, despues introduzca la contraseña del administrador de MySQL.

Para acceder a la interfaz de administración de `phpMyAdmin`, necesita finalizar la configuración en su servidor Apache. Para hacer esto, edite el fichero de configuración de Apache:

```sh
sudo nano /etc/apache2/apache2.conf 
```

Añada al final del fichero:

```sh
# Include phpMyAdmin 

Include /etc/phpmyadmin/apache.conf 
```

Reinicie el servidor Apache, utilizando el siguiente comando:

```sh
sudo service apache2 restart 
```

Incide sesión, necesita crear un usuario administrador con los permisos para phpMyAdmin:

```sh
mysql -u root -p [password] MariaDB [(none)]> CREATE USER 'my_user'@'localhost' IDENTIFIED BY 'my_password'; MariaDB [(none)]> GRANT ALL PRIVILEGES ON * . * TO 'my_user'@'localhost'; MariaDB [(none)]> FLUSH PRIVILEGES; 
```

Después acceda la interfaz a través de: `http://server_IP/phpmyadmin/`:

![PHP installation](images/tuto_pma.png){.thumbnail}

### Paso 7: Instala WordPress (opcional)

Este paso también es opcional. Aquí encontrará los pasos que necesita para instalar un CMS:

Descargue, descomprime y copie el contenido en un nuevo fichero llamado `mywebsite`:

```sh
wget https://wordpress.org/latest.tar.gz tar xpf latest.tar.gz sudo cp -r wordpress /var/www/html/mywebsite 
```

Es archivo que contiene WordPress ahora es accesible en `http://server_IP/mywebsite/`.

Crea una base de datos llamada wordpress a través de comando o a través de `phpMyAdmin`.

Su pantalla de configuración debería verse así:

![WordPress installation](images/tuto_wp.png){.thumbnail}

Si recibe un aviso cuando esta creación el fichero wp-config.php , edite los permisos de lectura, escritura y ejecución, dependiendo de lo que necesite (comúnmente llamado chmod).

## Conclusión

Su CMS WordPress ya ha sido instalado, y funciona con LAMP que configuro siguiendo esta guía.

Acaba de configurar un servidor LAMP desde cero, con el cual usted ahora puede utilizarlo como host para sus propios sitios webs. Al configurar el servidor por usted mismo, tiene el control completo de la configuración. Lea la documentación oficial publica por Apache para obtener más información sobre lo que puede hacer con esta tecnología.

Si usted tiene curiosidad o le gustaría ir un paso más allá, existen otras alternativas a Apache. La alternativa más conocida, con un crecimiento rápido, es NGNIX. Una pila que incluye NGINX es llamada LEMP, y es conocida por ser más ligera que LAMP. Finalmente, le recomendamos proteger su sitio web con un certificado SSL.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>
