---
title: 'Instalar WordPress en una instancia'
excerpt: Cómo utilizar una instancia de Public Cloud para alojar sitios web WordPress
slug: instalar_wordpress_en_una_instancia
section: Tutoriales
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 15/10/2021**

## Objetivo

WordPress es un sistema de gestión de contenidos (CMS) que permite crear y administrar sitios web con múltiples fines, sin necesidad de tener conocimientos de programación específicos.

Este tutorial explica cómo instalar WordPress manualmente en una instancia de Public Cloud: Instalar un servidor web, configurar la base de datos, descargar y ejecutar WordPress.

**Esta guía explica cómo instalar WordPress en una instancia de Public Cloud.**

> [!warning]
>
> OVHcloud le ofrece los servicios que usted es responsable de configurar y gestionar. Usted es responsable de su buen funcionamiento.
>
> Esta guía le ayudará en la mayor medida posible a realizar las tareas habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la ejecución de los servicios en un servidor, le recomendamos que contacte con un proveedor de servicios especializado.
>

## Requisitos

- Un [proyecto de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud.
- Tener una [instancia de Public Cloud](../public-cloud-primeros-pasos/) con Debian o Ubuntu instalado.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Acceso de administrador (root) a su instancia a través de SSH.

## Procedimiento

> [!primary]
>
> Debian 11 cumple las siguientes instrucciones: Ubuntu está basado en Debian, por lo que el tutorial también debería funcionar para una distribución Ubuntu actual.
>

Para acceder a la instalación a través de un dominio, deberá asociarlo a su instancia. Para ello, edite la zona DNS accesible desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), siempre que OVHcloud sea su agente registrador **y** que el dominio utilice los servidores DNS de OVHcloud.

Para más información, consulte la guía [Editar una zona DNS](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/). Si el dominio está en uso, solo podrá configurar los DNS después de instalar el nuevo WordPress y de iniciar el sitio web.

### Paso 1: instalación del servidor web (LAMP)

Para poder servir páginas web dinámicas con WordPress, se instalará en la instancia un *stack* denominado *LAMP*. LAMP designa **Linux**, **Apache**, **MariaDB** y **PHP**.

Una vez que se haya conectado a su instancia por SSH, asegúrese de que todos los paquetes estén actualizados:

```bash
debian@instance:~$ sudo apt update && sudo apt upgrade -y
```

> [!primary]
>
> Puesto que los paquetes de software se actualizan con regularidad, es posible que necesite ajustar las instrucciones siguientes en función de las últimas versiones.
>

Instale los paquetes LAMP:

```bash
debian@instance:~$ sudo apt install apache2 mariadb-server php libapache2-mod-php php-mysql
```

### Paso 2: configuración del servidor de bases de datos <a name="sqlconf"></a>

MariaDB proporciona un script para ayudarle con la configuración inicial y aplicar algunos parámetros de seguridad.

Para ejecutarlo, introduzca el siguiente comando:

```bash
debian@instance:~$ sudo mysql_secure_installation
```

Confirme el primer salto pulsando `Entrar`{.action}.

A continuación, seleccione una forma de proteger los accesos al servidor de bases de datos.

```console
Switch to unix_socket authentication [Y/n]
```

Le recomendamos que utilice el método de autenticación propuesto en lugar del acceso mediante contraseña root. Pulse `y`{.action} y, a continuación, `Entrar`{.action}. (Si decide utilizar el acceso de usuario root, escriba `n`{.action} y establezca una contraseña root).

Introduzca `n`{.action} en el siguiente comando:

```console
Change the root password? [Y/n]
```

Las siguientes visitas relativas a las medidas de seguridad, confírmelas todas con `y`{.action} hasta el final del script.

Si ha configurado el acceso MariaDB como se recomienda (*unix_socket*), dispondrá de un acceso root automático cada vez que se conecte a la instancia como usuario con altos permisos.

Abra el intérprete MariaDB:

```bash
debian@instance:~$ sudo mariadb
```

```mysql
MariaDB [(none)]> 
```

Cree la base de datos para WordPress:

```mysql
MariaDB [(none)]> CREATE DATABASE wordpress;
```

A continuación, conceda al nuevo usuario "wordpress" todos los permisos sobre esta base de datos. Este usuario accederá a la base de datos y realizará todas las operaciones para el CMS WordPress. Reemplace `your_password` por una contraseña segura para este usuario.

```mysql
MariaDB [(none)]> GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'your_password' WITH GRANT OPTION;
```

> [!primary]
>
> Más adelante, cuando instale WordPress, necesitará estas claves.
>

La base de datos ya está lista para utilizarse con WordPress. Asegúrese de que los cambios se apliquen en los siguientes pasos y salga del shell MariaDB:

```mysql
MariaDB [(none)]> FLUSH PRIVILEGES;
```

```mysql
MariaDB [(none)]> exit;
```

### Paso 3: configurar el firewall

La configuración de un firewall (*iptables*) permite mejorar la seguridad de su instancia WordPress. Este proceso puede simplificarse utilizando el frontend "Uncomplicated Firewall" (UFW) y su conjunto de perfiles predefinidos. Instale UFW:

```bash
debian@instance:~$ sudo apt install ufw
```

Los perfiles incluyen la mención "WWW" en la lista de aplicaciones:

```bash
debian@instance:~$ sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Eligiendo "WWW Full", se permitirán las conexiones seguras (puerto 443) y las peticiones http no seguras (puerto 80) al servidor web.

Para ver qué puertos están afectados por un perfil particular, introduzca ```sudo ufw app info "perfil"```.

Al introducir el siguiente comando, se abrirán los puertos definidos por el perfil "WWW Full":

```bash
debian@instance:~$ sudo ufw allow 'WWW Full'
```

Como todos los puertos no autorizados se bloquearán después de activar el firewall, asegúrese de autorizar también las conexiones SSH (puerto 22):

```bash
debian@instance:~$ sudo ufw allow 'SSH'
```

Por último, compruebe la configuración y active las reglas de firewall:

```bash
debian@instance:~$ sudo ufw status
```

```bash
debian@instance:~$ sudo ufw enable
```

Puede ir más allá con el UFW, por ejemplo si desea restringir los ataques de *denial of service* (DOS) o impedir las peticiones por algunos rangos de direcciones IP. Vea la documentación oficial de la UFW.

### Paso 4: instalación de WordPress

Visite la [web oficial de WordPress](https://wordpress.org/download/) para consultar **la URL de descarga** de la última versión (en formato "tar.gz"). Descargue el archivo:

```bash
debian@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Descomprima el archivo comprimido descargado:

```bash
debian@instance:~$ tar zxvf latest.tar.gz
```

El servidor Apache debe estar listo para funcionar en esta fase. Para comprobarlo, utilice el siguiente comando:

```bash
debian@instance:~$ sudo systemctl status apache2
```

También puede abrir `http://IP_de_su_instancia` en un navegador web. Se abrirá la página Apache2 Debian Default Page.

Los siguientes pasos instalarán WordPress sustituyendo la carpeta Apache predeterminada para las páginas web.

En lugar de utilizar la carpeta predeterminada, también puede crear un nuevo *Virtual Host* para instalar WordPress. Este tutorial es útil para alojar varios sitios web, lo que no es relevante para este tutorial.

Elimine la carpeta existente:

```bash
debian@instance:~$ sudo rm -R /var/www/html/
```

Sustituya la carpeta del servidor web por defecto por la carpeta WordPress:

```bash
debian@instance:~$ sudo mv wordpress /var/www/html
```

Dé al servidor web permiso de escritura (`write`) en la carpeta:

```bash
debian@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

El servidor web ya está listo para la configuración inicial de WordPress.

### Paso 5: configurar WordPress

Abra un navegador web y conéctese al sitio WordPress introduciendo la dirección IP de su instancia (o el nombre de dominio si ya ha [asociado uno a la instancia](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/)). Seleccione un idioma en la primera página.

Utilice el asistente de configuración de WordPress para acceder a la base de datos. Introduzca la información que haya [configurado anteriormente](#sqlconf).

![wordpress](images/wp_install1.png){.thumbnail}

En primer lugar, debe configurar la información general del sitio web y, a continuación, el usuario administrador de WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Una vez validado, podrá conectarse al panel de administración del sitio web con las claves que se indican en el paso anterior.

> [!primary]
>
> Para establecer conexiones seguras (`https`), el servidor web debe estar protegido a través de una Autoridad de Certificación como [Let's Encrypt](https://letsencrypt.org/){.external} que ofrece certificados gratuitos. Deberá instalar una herramienta de cliente (como "Certbot") y configurar Apache. Sin este paso, el sitio web solo podrá aceptar peticiones `http`.
>

### Paso 6: (opcional): activar conexiones seguras con Let's Encrypt

En primer lugar, compruebe que el dominio dispone de los registros adecuados en la zona DNS, es decir, que apunta a la dirección IP de la instancia.

Instale los paquetes necesarios para el cliente Certbot:

```bash
debian@instance:~$ sudo apt install certbot python3-certbot-apache
```

Obtenga el certificado de su nombre de dominio. (Puede incluir el subdominio "www" añadiendo `-d www.yourdomainname.ovh`.)

```bash
debian@instance:~$ sudo certbot --apache -d yourdomainname.ovh
```

Introduzca una dirección de correo electrónico válida y acepte las condiciones de uso.

Algunos renovarán automáticamente los certificados. No es necesario realizar ninguna otra etapa. No obstante, puede consultar las opciones disponibles para saber más sobre las funcionalidades de Certbot.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
