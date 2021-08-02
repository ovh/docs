---
title: 'Instalar WordPress en una instancia'
excerpt: Cómo utilizar una instancia de Public Cloud para WordPress
slug: instalar_wordpress_en_una_instancia
section: Tutoriales
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 26/07/2021**

## Objetivo

WordPress es un sistema de gestión de contenidos (CMS) que permite crear su sitio web de forma rápida y sencilla. No es necesario tener conocimientos de programación específicos para administrarlo.

Este tutorial explica cómo realizar una instalación totalmente manual, lo que implica la configuración de un servidor web. También puede configurar su instancia para utilizar WordPress seleccionando nuestra plantilla WordPress (en CentOS) al crear la instancia.

**Esta guía explica cómo instalar WordPress en una instancia de Public Cloud.**

## Requisitos

- Un [proyecto de Public Cloud](https://www.ovhcloud.com/es/public-cloud/) en su cuenta de OVHcloud.
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Acceso de administrador (root) a su instancia a través de SSH.

## Procedimiento

- Para una instalación totalmente manual, siga las indicaciones que se ofrecen a continuación. En primer lugar, cree una instancia si fuera necesario. Le recomendamos que consulte la [guía para crear una primera instancia de Public Cloud y conectarse](../public-cloud-primeros-pasos/) a ella.
- Para una instalación con la plantilla de OVHcloud en WordPress, siga la [guía de creación de instancias](../public-cloud-primeros-pasos/) y elija `WordPress`{.action} en el paso 3 del proceso, "Seleccionar una imagen". <br><br> ![wordpress](images/wp_instance.png){.thumbnail} <br> Con una instancia de WordPress creada con éxito, el software ya está instalado, pero todavía hay que configurar la base de datos. Proceda con las instrucciones para la [configuración de MariaDB a continuación](#sqlconf).

### Instalar el servidor web

En primer lugar, deberá instalar el servidor web en su instancia de Public Cloud.

Para ello, asegúrese de que su instancia esté actualizada:

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```

- **Para Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```

A continuación, puede instalar el servidor web que desee. Este ejemplo utiliza el servidor web Apache con los siguientes elementos:

- PHP
- PHP-MySQL
- Servidor MySQL o MariaDB

> [!primary]
>
> Como los paquetes de software se actualizan con regularidad, puede que necesite ajustar las siguientes instrucciones en función de las últimas versiones.
>

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get install apache2 php-mysql-server -y
```

- **Para Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum install httpd php-mysqlnd mariadb-server -y
```

Se le pedirá una contraseña para configurar la cuenta "root" de la base de datos MySQL. Reinicie el servidor web para asegurarse de que se ha guardado correctamente.

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo systemctl restart apache2
```

- **Para Fedora/CentOS**

```bash
[admin@instance ~]$ sudo systemctl restart httpd.service
```

### Telecharger WordPress

Para descargar la última versión, acceda a la página web de [WordPress](https://wordpress.org/download/){.external}. Descargue el archivo:

```bash
admin@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Descomprima el archivo comprimido descargado:

```bash
admin@instance:~$ tar zxvf latest.tar.gz
```

Elimine la carpeta predeterminada del servidor web:

```bash
admin@instance:~$ sudo rm -R /var/www/html/
```

Sustituya la carpeta del servidor web por defecto por la carpeta WordPress:

```bash
admin@instance:~$ sudo mv wordpress /var/www/html
```

En ese caso, puede conceder permisos de escritura a la carpeta del servidor web.

- **Para Debian/Ubuntu**

```bash
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

- **Para Fedora/CentOS**

```bash
[admin@instance ~]$ sudo chown -R apache:apache /var/www/html/
```

### Configuración de MySQL <a name="sqlconf"></a>

A diferencia de MySQL-Server, que puede instalar en Debian/Ubuntu, MariaDB no configura la contraseña root durante la instalación. Ejecute el servidor MariaDB y configure su contraseña con los siguientes comandos.

Iniciar el servidor de bases de datos:

```bash
[admin@instance ~]$ sudo systemctl start mariadb.service
```

Reconfigurar la contraseña "root":

```bash
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```

```bash
Set root password ? [Y/n] Y
New password:
```

También deberá confirmar algunas acciones relacionadas con la seguridad, como la eliminación del usuario anónimo por defecto y la desactivación de las conexiones root.

Las instrucciones siguientes son válidas para MySQL y MariaDB.

Una vez que disponga de su contraseña "root", puede conectarse a su servidor de bases de datos:

```bash
admin@instance:~$ sudo mysql -u root -p
```

Desde ahí podrá crear un nuevo usuario, establecer una contraseña y crear una base de datos dedicada a WordPress.

Crear un usuario:

```sql
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'Contraseña de usuario';
```

Crear una base de datos:

```sql
mysql> CREATE DATABASE `wordpress`;
```

Conceder todos los derechos al usuario "wordpress" sobre la base de datos "wordpress":

```sql
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@ 'localhost';
```

Cerrar la CLI de la base de datos:

```sql
mysql> exit;
```

### Configurar WordPress

Una vez que haya configurado la base de datos, podrá iniciar un navegador y conectarse al sitio WordPress introduciendo la dirección IP de su instancia (o el nombre de dominio si [ya ha asociado uno a la instancia](../../domains/web_hosting_como_editar_mi_zona_dns/)).

El asistente de configuración de WordPress le permite configurar los accesos a la base de datos. Introduzca los detalles que haya definido en los pasos anteriores.

![wordpress](images/wp_install1.png){.thumbnail}

En segundo lugar, configure la información general del sitio web y el usuario de administrador de WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Una vez validado, podrá conectarse al panel de administración del sitio web con el usuario que acaba de crear.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.