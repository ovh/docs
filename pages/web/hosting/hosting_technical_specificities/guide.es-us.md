---
title: 'Particularidades técnicas de los alojamientos compartidos'
slug: web_hosting_particularidades_tecnicas_de_los_alojamientos_compartidos
excerpt: 'Esta guía ofrece toda la información relativa a las particularidades técnicas de los alojamientos compartidos'
legacy_guide_number: g1463
section: 'Configuración del alojamiento'
---

## Cliente FTP: modo pasivo
Puede configurar su cliente de FTP como se indica a continuación:

FileZilla

En el menú «Edición», seleccione «Opciones...» y, en la página de «Conexión», haga clic en «FTP».

Marque la opción «Pasivo (recomendado)».

Cyberduck

Haga clic en «Nueva conexión».

Despliegue con la flecha «Más opciones» y, en «Modo de conectar», seleccione «Pasivo».


## Conexiones simultáneas a la base de datos
En el momento de la redacción de esta guía, las bases de datos compartidas («Personal», «Profesional» y «Módulo») están limitadas a 30 conexiones simultáneas.


## Conexiones desde un servidor externo
Por motivos de seguridad, no es posible conectarse a una base de datos compartida desde un servidor externo.

Los servidores compartidos de OVH son los únicos que pueden conectarse al servidor MySQL.

Cualquier otra conexión generará el siguiente error:


```
Warning: MySQL Connection Failed: Host "ip.votre.connexion" is not allowed to connect ...
```


Actualmente sucede lo mismo con la oferta SQL Privado.


## Variables del servidor SQL compartido
Desde phpMyAdmin, acceda a la consola de redacción de consultas SQL e introduzca:


```
show variables;
```


Se mostrará lista de variables del servidor. Puede bajar hasta que encuentre la variable deseada.


## PHP-FPM
Con el objetivo de acelerar las respuestas PHP, hemos adaptado PHP-FPM a nuestra infraestructura web.

En nuestros laboratorios de prueba obtenemos un rendimiento hasta 7 veces más rápido que el antiguo mecanismo.

Para más información sobre el funcionamiento de PHP-FPM, consulte la guía [Activar la optimización de PHP en un alojamiento compartido OVHcloud](../activar_la_optimizacion_de_php_en_un_alojamiento_compartido_ovh/){.external}.


Al utilizar PHP-FPM, se modifican algunas variables de servidor: 

|Variable|Sin PHP-FPM|Con PHP-FPM|
|----|----|----|
|max_execution_time|120s|300s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|


Para el dominio principal, el archivo .ovhconfig funciona en la raíz del alojamiento y en las subcarpetas de primer nivel (p. ej.: /www/), pero no en las subcarpetas de segundo nivel o superior (p. ej.: /www/test/, /www/test/test2/).

PHP-FPM está activo por defecto en los planes de web hosting 2014.


## Ruta absoluta del servidor
Tras una actualización de seguridad en el servidor realizada el 4 de junio de 2014, la ruta absoluta que devuelve el servidor se modifica.

Utilizando un script como el siguiente: 

```
<?php
echo $_SERVER['SCRIPT_FILENAME'];
?>
```

- La ruta que devolvía anteriormente era de tipo: /homez.XXX/usuario/nombre-de-la-carpeta/test.php

- Actualmente, la ruta será: /home/usuario/nombre-de-la-carpeta/test.php


La compatibilidad se garantiza por enlaces simbólicos (donde /homez.XXX/usuario enlaza a /home/usuario).

Los enlaces simbólicos seguirán siendo efectivos.


## Host del servidor
No es posible obtener directamente el host con la función 'REMOTE_HOST':


```
<?php
echo $_SERVER['REMOTE_HOST'] ;
?>
```


Sin embargo, sí puede utilizar la función gethostbyaddr():


```
<?php
echo gethostbyaddr($_SERVER["REMOTE_ADDR"]); 
?>
```




## FTP
Tras una actualización de seguridad realizada el 4 de junio de 2014 en los servidores compartidos, ya no es posible conectar por FTP mediante PHP en modo activo.

Es posible que aparezca el siguiente error de PHP: 

```
Warning: ftp_put() [function.ftp-put]: bind() failed: Permission denied (13)
```


La función bind() ya no es posible. 

Para evitarlo, solo hay que activar el modo pasivo con el siguiente código de PHP:

```
$conn_id = ftp_connect($ftp_server);
$login_result = ftp_login($conn_id, $ftp_user_name, $ftp_user_pass);
# switch to passive mode (mandatory on OVH shared hosting)
ftp_pasv( $conn_id, true );
```


El FTP activo ya no es posible, por lo que deberá utilizar el modo pasivo.


## Librerías compartidas
Información sobre las librerías disponibles:

|Librería|Disponibilidad|
|----|----|
|Django Python|no activado|
|FFmpeg|no activado|
|memcached|no activado|
|apc|no activado|
|imagick|no activado|
|GD|activado|
|zend (opcache)|activado|
|PDO|activado|
|Zip - Gzip|activado|


Para consultar la información relativa a su cluster, visite la página [http://cluster015.ovh.net/infos/](http://cluster015.ovh.net/infos/), sustituyendo el número de cluster indicado en la URL por el suyo.

Para conocer su número de cluster, acceda a su área de cliente y seleccione la plataforma en la columna izquierda.
Por motivos de seguridad, al utilizar PHP-FPM se desactivan las siguientes opciones (deprecadas por PHP):


- register_globals
- magic_quotes_gpc


## Ejecutar un script de PHP por SSH
Actualmente, en los alojamientos compartidos con SSH, la versión de PHP utilizada por defecto es la 4.4.9.

A continuación se ofrece un ejemplo en línea de comandos para ejecutar el archivo test.php con la versión 4.4.9 de PHP:


```
php test.php
```


Si quiere utilizar la versión 5.3 de PHP en su script test.php:


```
php.ORIG.5_3 test.php
```


Si quiere utilizar la versión 5.4 de PHP en su script test.php:


```
php.ORIG.5_4 -c /usr/local/lib/php.ini-2 test.php
```



