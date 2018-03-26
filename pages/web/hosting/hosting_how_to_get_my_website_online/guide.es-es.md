---
title: 'Web hosting: Publicar un sitio web en internet'
description: 'Web hosting: Publicar un sitio web en internet'
slug: web_hosting_publicar_un_sitio_web_en_internet
legacy_guide_number: g1374
section: Primeros pasos
---


## Introducción
Un sitio web solo funciona y se muestra correctamente si está colocado en el directorio adecuado.

Por lo general, deberá transferir los archivos de su sitio web a la carpeta www  de su alojamiento compartido con un cliente de FTP (file transfer protocol).

En esta guía utilizaremos [FileZilla](https://filezilla-project.org/), que es un programa gratuito de código abierto.


## Recuperar un backup FTP

### Email de instalación del alojamiento
Cuando contrató su plan de web hosting OVH, una vez instalados sus servicios le enviamos por correo electrónico las claves FTP necesarias.

Para conectarse, necesitará el usuario y la contraseña que se indican en dicho mensaje.

Si hubiera cambiado la contraseña FTP después de la instalación, la contraseña que se indica en el email no le servirá.

Puede consultar el email de instalación desde el área de cliente, en «Administración» > «Mis parámetros» > «Histórico de los emails».

### Área de cliente
Seleccione el dominio y haga clic en «Alojamiento» > «Contraseña FTP».

Desde ahí podrá consultar su usuario FTP y cambiar la contraseña FTP. Para esto último, simplemente introduzca la nueva contraseña, confírmela en el siguiente campo y haga clic en «Aceptar». 

La contraseña debe tener entre 8 y 12 caracteres alfanuméricos.

El cambio tarda unos minutos en aplicarse.


### Utilizar FileZilla

La siguiente guía explica en detalle cómo utilizar FileZilla:

- []({legacy}1380)


Necesitará los archivos de su sitio web, el dump (archivo de backup) de su base de datos, en su caso, y sus claves FTP:

- servidor: ftp.su-dominio.tld o ftp.cluster0XX.ovh.net o newftp.cluster0XX.ovh.net
- usuario: su usuario de FTP
- contraseña: la contraseña de FTP (ver más arriba)
- puerto: 21 (para conexión SSH a partir de plan Profesional, puerto 22)



![](images/img_1858.jpg){.thumbnail}


### Recuperar un backup FTP

#### Desde el área de cliente
Desde el área de cliente, puede restaurar automáticamente su espacio FTP a una fecha anterior.

Para ello, en el área de cliente, seleccione su dominio y haga clic en  «Alojamiento» > «Restaurar mi espacio web».

![](images/img_2310.jpg){.thumbnail}
A continuación podrá elegir la fecha de restauración deseada.

Atención: Los datos restaurados sustituirán a los actuales del alojamiento.

Haga clic en «Aceptar» para confirmar la operación. Es necesario esperar unas horas para que se restauren los archivos.

Con este sistema, se restaura la totalidad del espacio FTP, al contrario que con la recuperación de copias de seguridad mediante FileZilla.

![](images/img_2311.jpg){.thumbnail}

#### Si necesita ayuda para configurar y utilizar FileZilla, consulte la siguiente guía:

- []({legacy}1380)




## Base de datos
Una base de datos permite almacenar la información relacionada con su sitio web o sus aplicaciones. Esta información puede ser de distinto tipo: contenido de la web, direcciones de las páginas, datos de los visitantes...

Los planes de web hosting de OVH son compatibles con diferentes motores de bases de datos: MySQL o PostgreSQL).

### Email de instalación de la base de datos
Contratando un plan de web hosting OVH, puede crear una o más bases de datos (en función del producto).

Las bases de datos no se crean automáticamente al instalar el plan de alojamiento. Deberá crearlas manualmente.

Para ello, acceda a su área de cliente, seleccione el alojamiento y haga clic en «Alojamiento»> «Gestión SQL».

Seleccione «Base nueva», cumplimente en los campos la información solicitada y finalice la creación de la base de datos.

Una vez creada, le enviaremos por correo electrónico los identificadores de la base de datos.

Si no encuentra el email, puede consultarlo en su área de cliente, en «Administración» > «Mis parámetros» > «Histórico de los emails».

### Desde el área de cliente
Puede cambiar la contraseña de su base de datos directamente desde el área de cliente.

Atención: Si cambia la contraseña de la base de datos, puede provocar un corte del sitio web o de los servicios que utilizan dicha base de datos.

Si quiere cambiar la contraseña de la base de datos, acceda al área de cliente, seleccione su dominio y haga clic en «Alojamiento»> «Gestión SQL» > «Contraseña».

Desde ahí podrá actualizar la contraseña de su base de datos.

Si cuando cambie la contraseña ya tiene un sitio web, no olvide actualizar el archivo de configuración del sitio para que se conecte a la base de datos con la nueva contraseña.


### Creación
Al instalar un alojamiento, la base de datos incluida no se instala automáticamente, por lo que deberá crearla manualmente.

Para ello, acceda a su área de cliente, seleccione el alojamiento y haga clic en «Alojamiento»> «Gestión SQL» > «Base nueva».

Cumplimente en los campos la información solicitada y haga clic en «Aceptar» para finalizar la creación de la base de datos.

Unos minutos después, recibirá por correo electrónico la información relativa a la base de datos.

Si ya había creado su base de datos, puede consultar el email en su área de cliente, en «Administración» > «Mis parámetros» > «Histórico de los emails».

![](images/img_1859.jpg){.thumbnail}


### Conexión con phpMyAdmin
Conéctese a la interfaz de [phpMyAdmin](https://phpmyadmin.ovh.net/).

Introduzca la información solicitada en los campos: 


- Servidor: USUARIO.mysql.db

- Usuario: Se indica en el email de creación de la base de datos.

- Contraseña: La contraseña de la base de datos.

- Versión: Puede conectarse a la base de datos actual o al backup del día o la semana anterior.


Haga clic en «Continuar» para conectarse.

![](images/img_1960.jpg){.thumbnail}
Para las bases de datos MySQL4, utilice el enlace que aparece en la parte inferior de la pantalla de conexión.


### Exportación
Para saber cómo exportar una base de datos SQL o conocer los distintos métodos para realizar un backup de la base de datos, consulte la guía relativa a la exportación de bases de datos:

- []({legacy}1394)



![](images/img_1932.jpg){.thumbnail}


### Importación
Para saber cómo importar una base de datos MySQL o conocer los distintos métodos para hacerlo, consulte la guía relativa a la importación de bases de datos MySQL:

- []({legacy}1393)



![](images/img_1933.jpg){.thumbnail}


### Reparación, optimización, análisis
Puede reparar, optimizar o analizar las tablas de su base de datos.

Para ello, conéctese a su base de datos mediante [phpMyAdmin](https://phpmyadmin.ovh.net/).

Seleccione la tabla para la que quiera realizar una de estas operaciones y haga clic en la pestaña «Operaciones».

En el apartado de mantenimiento de la tabla podrá realizar la operación que desee.

![](images/img_1961.jpg){.thumbnail}


### Uso de SQL Privado
Para saber cómo utilizar el servidor SQL Privado o cómo exportar e importar sus datos, consulte esta guía:
[Guía de uso de SQL Privado](http://guias.ovh.es/SqlPrivado)

![](images/img_1866.jpg){.thumbnail}


## Guía de instalación
Si quiere crear su sitio web rápidamente y sin necesidad de conocimientos técnicos sobre desarrollo web, consulte la guía relativa a la instalación de módulos en un clic en OVH:

- []({legacy}1402)


![](images/img_1930.jpg){.thumbnail}


### Nueva instalación de WordPress

WordPress es un gestor de contenidos (CMS) que permite crear y gestionar fácilmente un sitio web o blog.

WordPress es gratuito y libre, y puede personalizarse con múltiples temas y plugins.

Si necesita ayuda para instalar WordPress manualmente, consulte esta guía:

- []({legacy}1375)



![](images/img_1873.jpg){.thumbnail}


### Nueva instalación de Joomla

Joomla es un gestor de contenidos (CMS) gratuito y libre, que se puede personalizar con múltiples temas y extensiones.

Este CMS permite gestionar online un sitio web o una intranet dinámicos de forma muy sencilla.

Si necesita ayuda para instalar Joomla manualmente, consulte esta guía:

- []({legacy}1375)



![](images/img_1874.jpg){.thumbnail}


### Nueva instalación de PrestaShop

PrestaShop es una aplicación web «open source» que permite crear una tienda online para comercio electrónico. 

Si necesita ayuda para instalar PrestaShop manualmente, consulte esta guía:

- []({legacy}1375)



![](images/img_1862.jpg){.thumbnail}


## Archivo .ovhconfig
Si quiere cambiar la versión de PHP de su alojamiento o activar PHP-FPM, consulte las siguientes guías:  

- []({legacy}1175)
- []({legacy}1207)



![](images/img_1867.jpg){.thumbnail}


## Librerías
Librerías disponibles en los alojamientos:

|Library|Disponibilidad| 
|---|---|
|ffmepg|no activada| 
|GD|activada| 
|imagemagik|activada| 
|zend (opcache)|activada| 
|PDO|activada| 
|Zip - Gzip|activada|



![](images/img_1867.jpg){.thumbnail}
Atención: Si utiliza PHP-FPM, las siguientes opciones se desactivan por motivos de seguridad (deprecadas por PHP):

- register_globals
- magic_quotes_gpc




## Optimización del rendimiento del sitio web
Si desea diagnosticar la ralentización de su sitio web o quiere mejorar su rendimineto, consulte esta guía:

- []({legacy}1396)



![](images/img_1865.jpg){.thumbnail}

