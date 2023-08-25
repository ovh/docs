---
title: Tutorial - Instalar un servidor web (LAMP) en Debian o Ubuntu
excerpt: "Cómo configurar un servidor web LAMP"
updated: 2023-05-10
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo 

La creación de un servidor web y los programas asociados permiten que su servidor cloud aloje páginas web o aplicaciones web dinámicas. Instalar un *LAMP stack* es un método probado para conseguirlo con las aplicaciones de código abierto. LAMP significa **L**inux (OS), **A**pache (servidor web), **M**ariaDB (sistema de gestión de bases de datos) y **P**HP (lenguaje de programación). 

**Este tutorial explica cómo instalar un servidor web LAMP en su servicio de OVHcloud.**

## Requisitos

- Un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/), un [VPS](https://www.ovhcloud.com/es-es/vps/) o una instancia de [Public Cloud](https://www.ovhcloud.com/es-es/public-cloud/) en su cuenta de OVHcloud (excepto sistemas Windows)
- Tienes acceso a tu [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)
- Acceso administrativo al servicio por SSH


> [!warning]
> Este tutorial explica cómo utilizar una solución de OVHcloud con herramientas externas en un contexto concreto. Puede que necesite adaptar las indicaciones a su situación.
>
> Le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con [nuestra comunidad](https://community.ovh.com/en/) si tiene problemas o dudas relativos a la administración, el uso o la instalación de servicios en un servidor.
>

## Procedimiento

Si ya tiene instalada una distribución Debian o Ubuntu en el servidor, realice la reinstalación desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Es la mejor manera de tener un sistema propio para su servidor web y las aplicaciones que se ejecutan en él.

Consulte la guía correspondiente para instalar una distribución en su servicio OVHcloud y conecte a él por [SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction):

- [Servidor dedicado:](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)
- [Instancia Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps)


> [!primary]
>
> Debian 11 cumple las siguientes instrucciones: Ubuntu está basado en Debian, por lo que este tutorial también debería funcionar en una distribución Ubuntu actual.


### Paso 1: actualización del sistema

Una vez que se haya conectado al servidor por SSH, asegúrese de que todos los paquetes estén actualizados:

```bash
sudo apt update && sudo apt upgrade -y
```

Ahora puede instalar los paquetes LAMP actuales.

> [!primary]
>
> Como los paquetes de software se actualizan con frecuencia, es posible que necesite ajustar las instrucciones siguientes en función de las últimas versiones.

### Paso 2: instalación de Apache

Instale los paquetes Apache (incluida la documentación):

```bash
sudo apt install -y apache2 apache2-doc
```

Para comprobar la instalación, utilice el siguiente comando:

```bash
sudo systemctl status apache2
```

También puede abrir `http://server_IP` en un navegador web. Se abrirá la página Apache2 Debian Default Page.


### Paso 3: instalar el servidor de bases de datos y PHP

Instale los paquetes de MariaDB y PHP:

```bash
sudo apt install -y php php-pdo php-mysql php-zip php-gd php-mbstring php-curl php-xml php-pear php-bcmath mariadb-server
```

### Paso 4: configuración del servidor de bases de datos <a name="sqlconf"></a>

MariaDB proporciona un script para ayudarle con la configuración inicial y aplicar algunos parámetros de seguridad.

Para ejecutarlo, introduzca el siguiente comando:

```bash
sudo mysql_secure_installation
```

Confirme el primer salto pulsando `Entrar`{.action}.

A continuación, seleccione una forma de proteger los accesos al servidor de bases de datos. 

```console
Switch to unix_socket authentication [Y/n]
```

Se recomienda utilizar el método de autenticación propuesto (*unix_socket*) en lugar del acceso con contraseña root. Pulse `y`{.action} y, a continuación, `Intro`{.action}. Si decide utilizar el acceso de usuario root en su lugar, elija `n`{.action} y establezca una contraseña root en la siguiente imagen.

Introduzca `n`{.action} en el siguiente comando:

```console
Change the root password? [Y/n]
```

Las siguientes visitas relativas a las medidas de seguridad, confírmelas todas con `y`{.action} hasta el final del script.

```console
Reloading the privilege tables will ensure that all changes made so far
will take effect immediately.

Reload privilege tables now? [Y/n] y
 ... Success!

Cleaning up...

All done!  If you've completed all of the above steps, your MariaDB
installation should now be secure.

Thanks for using MariaDB!
```

Si ha configurado el acceso MariaDB como se recomienda (*unix_socket*), dispondrá de un acceso de administrador automático (*root*) cada vez que se conecte al servidor como usuario con altos permisos (*sudo*).

> [!primary]
>
> Para preparar una base de datos para su uso a través de un programa, puede seguir la sección de abajo. Al instalar una aplicación como un CMS (WordPress, Drupal, etc.), deberá introducir las claves de la base de datos (nombre de la base de datos, usuario, contraseña). En cuanto a las buenas prácticas, no utilice la misma base de datos en diferentes aplicaciones.
> 
> Para instalar WordPress en un servidor, puede seguir [este tutorial](/pages/public_cloud/compute/install_wordpress_on_an_instance).

#### Crear la primera base de datos y un usuario de la base de datos (opcional)

Abra el intérprete MariaDB:

```bash
sudo mariadb
```

```sql
MariaDB [(none)]> 
```

Cree una base de datos:

```sql
MariaDB [(none)]> CREATE DATABASE database_name;
```

Cree un usuario con el nombre que prefiera y conceda todos los permisos sobre esta base de datos. Este último puede acceder a la base de datos y realizar todas las operaciones para la aplicación que utiliza esta base de datos. Sustituya `database_name` por el nombre de su base de datos, `user_name` por el nombre que elija y `password` por una contraseña fuerte.

```sql
MariaDB [(none)]> GRANT ALL ON database_name.* TO 'user_name'@'localhost' IDENTIFIED BY 'password' WITH GRANT OPTION;
```

Asegúrese de que los cambios realizados se aplican y salga del shell MariaDB:

```sql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```sql
MariaDB [(none)]> exit;
```

### Paso 5: configuración del firewall (opcional)

[La configuración de un cortafuegos](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable) (*iptables*) mejorará la seguridad del servidor. Este proceso puede simplificarse utilizando el frontend "Uncomplicated Firewall" (UFW) y su conjunto de perfiles predefinidos. 

Instale UFW:

```bash
sudo apt install ufw
```

Los perfiles incluyen la mención "WWW" en la lista de aplicaciones:

```bash
sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Al elegir "WWW Full", autoriza tanto las conexiones seguras (puerto 443) como las peticiones *http* no seguras (puerto 80) al servidor web.

Para ver qué puertos están afectados por un perfil particular, introduzca `sudo ufw app info "profile name"`.

Introduzca el siguiente comando para abrir los puertos definidos en el perfil "WWW Full":

```bash
sudo ufw allow 'WWW Full'
```

Como todos los puertos no autorizados estarán **bloqueados** después de activar el firewall, asegúrese de autorizar también las conexiones SSH (puerto 22 con una configuración por defecto):

```bash
sudo ufw allow 'SSH'
```

Por último, active las reglas de firewall y compruebe la configuración:

```bash
sudo ufw enable
```

```bash
sudo ufw status
```

```console
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
80,443/tcp (WWW Full)      ALLOW IN    Anywhere                  
22/tcp (SSH)               ALLOW IN    Anywhere                  
80,443/tcp (WWW Full (v6)) ALLOW IN    Anywhere (v6)             
22/tcp (SSH (v6))          ALLOW IN    Anywhere (v6)             
```

Puede ir más allá con el UFW, por ejemplo si desea restringir los ataques de *denial of service* (DOS) o impedir las peticiones por algunos rangos de direcciones IP. Vea la [documentación oficial de la UFW](https://help.ubuntu.com/community/UFW).

### Paso 6: configuración DNS (opcional)

Para acceder a la instalación de su servidor web a través de un dominio, es necesario asociarlo al servicio. Para ello, edite la zona DNS accesible desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), siempre que OVHcloud sea su agente registrador **y que** el dominio utilice los servidores DNS de OVHcloud.

Para más información, consulte la guía [Editar una zona DNS](/pages/web_cloud/domains/dns_zone_edit). Si el dominio está en uso, configure los DNS únicamente después de que el sitio web o la aplicación estén listos.

### Paso 7: activar conexiones seguras con Let's Encrypt (opcional)

> [!primary]
>
> Para establecer conexiones seguras (`https`), el servidor web debe estar protegido a través de una Autoridad de Certificación oficial como "[Let's Encrypt](https://letsencrypt.org/)" que ofrece certificados gratuitos. Es necesario instalar una herramienta de cliente (como Certbot) y configurar Apache en consecuencia. Sin este paso, su sitio web o su aplicación solo pueden aceptar peticiones `http` sin cifrar.
> 
> Como alternativa, OVHcloud le ofrece la solución [SSL Gateway](https://www.ovh.es/ssl-gateway/). Para más información, consulte [nuestra guía](/pages/web_cloud/ssl_gateway/order-ssl-gateway).
> 

En primer lugar, asegúrese de que el dominio se ha introducido correctamente en la zona DNS, es decir, en la dirección IP del servidor.

> [!warning]
> El siguiente comando instala una versión de Ccierto que funciona pero que está obsoleta (*certbot 1.12.0*). Para instalar la última versión, debe utilizar el gestor de paquetes extra *snappy*. Puede consultar las instrucciones de instalación en el [sitio web de Certbot](https://certbot.eff.org/instructions?ws=apache&os=debianbuster).
>

Instale los paquetes necesarios para el cliente Cierbot:

```bash
sudo apt install -y certbot python3-certbot-apache
```

Obtenga el certificado de su nombre de dominio y del subdominio "www":

```bash
sudo certbot --apache -d domainname.ovh -d www.domainname.ovh
```

Introduzca una dirección de correo electrónico válida y acepte las condiciones de uso.

Algunos renovarán automáticamente los certificados. No es necesario realizar ninguna otra etapa. No obstante, puede consultar las opciones disponibles para saber más sobre las funcionalidades de Cierbot.

## Más información

[Documentación UFW](https://help.ubuntu.com/community/UFW)

[Documentación Apache](https://httpd.apache.org/docs/)

[Documentación MariaDB](https://mariadb.com/kb/en/documentation/)

[Documentación Let's Encrypt](https://httpd.apache.org/docs/)

[Documentación De Clavito](https://eff-certbot.readthedocs.io/en/stable/)

[Documentación NGINX](https://nginx.org/en/docs/) (alternativa Apache)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.