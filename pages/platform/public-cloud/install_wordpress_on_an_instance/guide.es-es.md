---
title: 'Instalar WordPress en una instancia'
excerpt: 'Instalar WordPress en una instancia'
slug: instalar_wordpress_en_una_instancia
legacy_guide_number: g2060
section: Tutoriales
---

## 
WordPress es un sistema de gestión de contenidos (CMS, por sus siglas en inglés) que permite crear un sitio web de forma rápida y sencilla. No es necesario contar con grandes conocimientos en programación para administrarlo. 

A diferencia de los VPS de OVH, no existen templates WordPress para la instalación de su instancia Public Cloud. Sin embargo, sí podrá instalar usted mismo WordPress en una instancia. 

Esta guía explica las distintas etapas que debe seguir para instalar WordPress en una instancia Public Cloud.


## Requisitos

- [Crear una instancia desde el área de cliente de OVH]({legacy}1775)




## Instalación del servidor Web
En primer momento, deberá instalar el servidor Web en su instancia Public Cloud. Para ello, asegúrese de que su instancia está actualizada: 


- Para Debian / Ubuntu


```
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```


- Para Fedora / CentOS


```
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```



A continuación, podrá instalar el servidor Web. Utilizaremos Apache con los siguientes elementos: 


- PHP5
- PHP5-MySQL
- Servidor MySQL

- Para Debian / Ubuntu


```
admin@instance:~$ sudo apt-get install apache2 php5 php5-mysql mysql-server -y
```


- Para Fedora / CentOS


```
[admin@instance ~]$ sudo yum install httpd php php-mysql mariadb-server -y
```



Se le solicitará una contraseña para configurar la cuenta «root» de la base de datos MySQL. 

A continuación, reinicie el servidor Web para registrar los cambios. 


- Para Debian / Ubuntu


```
admin@instance:~$ sudo service apache2 restart
```


- Para Fedora / CentOS


```
admin@instance:~$ sudo service httpd restart
```





## Descarga de WordPress
Acceda al sitio de [WordPress](https://es.wordpress.org/txt-download/) para descargar la última versión:


```
admin@instance:~$ wget https://fr.wordpress.org/wordpress-4.4-fr_FR.tar.gz
```


Descomprima el archivo que acaba de descargar: 


```
admin@instance:~$ tar zxvf wordpress-4.4-fr_FR.tar.gz
```



- Supresión de la carpeta por defecto del servidor Web


```
admin@instance:~$ sudo rm -R /var/www/html/
```


- Transferencia de la carpeta WordPress a la carpeta por defecto del servidor Web


```
admin@instance:~$ sudo mv wordpress /var/www/html
```



Una vez realizada la sustitución, podemos asignarle al servidor Web permiso de escritura en la carpeta. 


- Para Debian / Ubuntu


```
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```


- Para Fedora / CentOS


```
[admin@serveur-7 ~]$ sudo chown -R apache:apache /var/www/html/
```





## Configuración de MySQL
A diferencia de MySQL-Server, que se puede instalar en Debian / Ubunto, MariaDB no configura su contraseña root durante la instalación. Así pues, deberá ejecutar el servidor MariaDB y configurar su contraseña con los siguientes comandos: 


- Ejecución del servidor de base de datos:


```
[admin@instance ~]$ sudo /sbin/service mariadb start
```


- Reconfiguración de la contraseña «root»:


```
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```



Cuando tenga su contraseña «root» podrá conectarse a su servidor de base de datos:


```
admin@instance:~$ sudo mysql -u root -p
```


A continuación, podrá crear un nuevo usuario y una base de datos para WordPress:


- Creación del usuario


```
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'P@ssw0rd';
```


- Creación de la base de datos


```
mysql> CREATE DATABASE `wordpress` ;
```


- A continuación, asignaremos todos los permisos al usuario «wordpress» sobre la base de datos «wordpress». 


```
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```





## Configuración de WordPress
Una vez configurada la base de datos, podrá iniciar su navegador y conectarse a su sitio WordPress, introduciendo la dirección IP de su instancia en el navegador. 

Aparecerá una página WordPress. En primer lugar, configure los accesos a su base de datos.

![](images/img_3674.jpg){.thumbnail}
A continuación, configure la información general de su sitio, así como los accesos de su usuario administrador.

![](images/img_3675.jpg){.thumbnail}
Una vez finalizado el proceso, podrá conectarse al panel de administración de su sitio con el usuario que acaba de crear.
