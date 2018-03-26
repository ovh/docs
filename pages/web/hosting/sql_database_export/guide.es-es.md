---
title: Web hosting Exportación de una base de datos
excerpt: Esta guía describe distintas formas de exportar una base de datos desde nuestros servidores
slug: web_hosting_exportacion_de_una_base_de_datos
legacy_guide_number: g1394
section: Bases de datos
---


## Requisitos
Para exportar una base de datos, debe tener:


- acceso a su área de cliente;
- su usuario, la contraseña de la base de datos SQL y el nombre del servidor SQL.


Si ha perdido alguna de las claves, consulte esta guía para recuperarlas:

- []({legacy}1374)



![](images/img_1833.jpg){.thumbnail}


## Desde el área de cliente
Puede generar una copia de su base de datos desde el área de cliente. Esta es la forma más rápida y sencilla de exportar la base de datos.

Para empezar, conéctese al [área de cliente](https://www.ovh.com/manager/web) y seleccione su dominio en la sección «Alojamientos».

## Etapa 1
En la sección «Alojamientos», seleccione su dominio y haga clic en la pestaña «Base de datos».

El tamaño de su base de datos determinará la duración del proceso de creación de la copia de seguridad de su base.

![](images/img_2698.jpg){.thumbnail}

## Etapa 2
Haga clic en el icono del engranaje situado a la derecha de la base de datos y, a continuación, seleccione «Crear un dump». 

La lista de las bases de datos se muestra en el cuadro (véase la captura de pantalla).

![](images/img_2699.jpg){.thumbnail}

## Etapa 3
A continuación, seleccione la fecha del dump. Puede elegir entre tres fechas para su copia de seguridad: 


- Ahora: Copia de la base de datos en el momento de realizarla. 

- Ayer: Copia de la base de datos en el estado en que se encontraba la noche anterior alrededor de las 3:00 de la madrugada. 

- La semana pasada: Copia de la base de datos en el estado en que se encontraba siete días antes alrededor de las 3:00 de la madrugada. 


Haga clic en «Siguiente» > «Aceptar» para ejecutar la copia de seguridad SQL. 

A continuación, deberá esperar mientras se realiza el dump. Cuando haya finalizado, recibirá por correo electrónico un enlace desde el que podrá descargar el archivo de la copia de seguridad (dump). 

Este es un ejemplo del sujeto del mensaje que recibirá: 


```
[OVH-SQL] testovh.ovh - Dump de la base de datos: testovhmod1
```


El archivo de la copia de seguridad se alojará en un servidor distante y podrá acceder a él, desde el enlace de su correo, durante 30 días. 

El archivo descargado estará comprimido. Se recomienda descomprimirlo antes de importarlo a otra base de datos.

![](images/img_2700.jpg){.thumbnail}


## Desde phpMyAdmin
Para exportar la base de datos desde phpMyAdmin, conéctese a la interfaz de [phpmyadmin.ovh.net](https://phpmyadmin.ovh.net/).

## Exportación rápida
Una vez se haya conectado, seleccione en la columna izquierda la base de datos que quiera exportar.

A continuación, en la barra superior seleccione la pestaña «Exportar».

Seleccione el método rápido. Este método solo permite elegir el formato de exportación de la base de datos.

Para una configuración más completa de la exportación, consulte el siguiente apartado «Exportación personalizada».

![](images/img_1963.jpg){.thumbnail}

## Exportación personalizada
Una vez se haya conectado, seleccione en la columna izquierda la base de datos que quiera exportar.

A continuación, en la barra superior seleccione la pestaña «Exportar».

Seleccione el método personalizado. Se mostrarán varias opciones. Aquí se detallan las más importantes:

Tabla(s): Puede seleccionar todas las tablas o solo una parte de ellas. Esta opción puede ser útil para las bases de datos muy voluminosas, ya que permite exportar y luego importar la base de datos en varias veces. 

Salida: Aquí puede indicar si quiere generar el dump en un archivo externo o mostrar directamente el resultado de la consulta para luego copiarlo.

Formato: Indique el formato de exportación de la base de datos. Se recomienda dejar «SQL».

Opciones específicas al formato: Puede seleccionar lo que quiere exportar de la tabla: solo las estructuras, solo los datos o ambas cosas. Se recomienda seleccionar «estructura y datos». En el apartado «Opciones de creación de datos» seleccione la sintaxis «ninguno de los anteriores» para evitar el error asociado al Max_Allowed_Packet. 

Para ejecutar la exportación, haga clic en «Continuar».

![](images/img_1964.jpg){.thumbnail}

## Descarga del archivo .sql
Su navegador puede darle a elegir entre abrir el archivo o guardarlo en su equipo.

![](images/img_1848.jpg){.thumbnail}

## Copia de seguridad anterior

- PhpMyAdmin le permite recuperar una copia de seguridad del día y de la semana anterior mediante un menú desplegable.




## Utilizando un script
El interés de esta solución reside en que permite exportar bases de datos de gran tamaño y que puede aplicarse a todos los alojamientos compartidos.

Puede crear los scripts en un archivo de texto y luego añadirle la extensión correspondiente al lenguaje utilizado.

En los scripts que se indican a continuación, sustituya:


- nombre_de_la_bd.sql por el nombre del archivo;

- servidor_sql por el nombre del servidor en el que haya creado la base de datos;

- nombre_de_la_bd por el nombre de la base de datos;

- contraseña por la contraseña de la base de datos.


En PHP (backupbd.php):


```
<?
echo "Realizando el backup de la base de datos... ";
system("mysqldump --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd > nombre_de_la_bd.sql");
echo "Backup finalizado. Ya puede recuperar la base de datos por FTP";
?>
```



En PERL (backupbd.cgi):


```
#!/usr/bin/perl
print "Realizando el backup de la base de datos... ";
system("mysqldump --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd > nombre_de_la_bd.sql");
print "Backup finalizado. Ya puede recuperar la base de datos por FTP";
```




Suba por FTP el script que haya creado a la carpeta www de su alojamiento y llámelo con su navegador desde la dirección http://sudominio.com/backupbd.php, sustituyendo sudominio.com por su dominio y backupbd.php por el nombre del archivo que contiene el script.

Este comando generará un archivo nombre_de_la_bd.sql en la carpeta en la que haya colocado el script.

En dicho archivo encontrará todas las instrucciones SQL para volver a crear la base de datos en el estado en el que se encontraba en el momento del backup, con todos sus datos.

- Si su base de datos es demasiado grande, puede hacer un dump tabla por tabla, añadiendo la opción "--tables nombre_de_la_tabla" al final, es decir:


```
mysqldump --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd --tables nombre_de_la_tabla > nombre_de_la_bd.sql
```


- También puede comprimir el archivo para descargarlo más rápidamente a su ordenador (por FTP o desde la web). Para comprimir el archivo, ejecute el comando gzip, que generará el archivo con la extensión .sql.gz:

```
system("gzip nombre_de_la_bd.sql");
```





## Por SSH

## Requisitos:

- Para conectarse al espacio de alojamiento, necesitará el usuario y la contraseña FTP, que encontrará en el email de instalación del alojamiento, y el usuario y la contraseña de la base de datos SQL, que se le enviaron en el email de instalación de la base de datos. Si ha perdido alguna de las claves, consulte esta guía para recuperarlas: []({legacy}1374).

- Debe tener un alojamiento que permita acceder por SSH ([ver las características de nuestros productos](https://www.ovh.es/hosting/)). Si necesita ayuda para conectarse por SSH, consulte la siguiente guía: [Acceso a un alojamiento compartido a través de SSH](http://guias.ovh.es/SshSobreAlojamiento).



## Exportación de la base de datos por SSH
Conéctese a su alojamiento compartido por SSH. 

Acceda a la carpeta en la que quiera guardar el backup y ejecute el siguiente comando:


```
mysqldump --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd > nombre_de_la_bd.sql
```



Un ejemplo de código después de sustituir los datos:


```
mysqldump --host=sql3 --user=testbackup --password=RtPgDsmL testbackup > testbackup.sql
```




## Desde el servicio SQL Privado
Si desea más información sobre cómo importar una base de datos, consulte la siguiente guía:


- []({legacy}2023)




## Copia de seguridad
Si quiere guardar una copia de una base de datos a una fecha anterior utilizando un script, deberá indicar un número de puerto específico:


- Copia actual: 3306
- Ayer: 3307
- Semana pasada: 3317


Por ejemplo, en PHP: 


```
system("mysqldump --host=servidor_sql --user=nombre_de_la_bd --password=contraseña --port=3317 nombre_de_la_bd > nombre_de_la_bd.sql ");
```


Este sistema de backup está disponible para las bases de datos con versión igual o superior a MySQL 5.


## Errores «Max_Allowed_Packet» al exportar el dump
Al realizar el dump, puede ser conveniente personalizar la exportación de la base de datos SQL con phpMyAdmin para que todo el contenido de una tabla no se añada con un único INSERT INTO y así evitar los errores relacionados con la variable de servidor Max_Allowed_Packet que se producen al importar el dump cuando el contenido de la tabla es considerable.

Por ejemplo, si la tabla A contiene 500 líneas, en lugar de hacer un solo «INSERT INTO» para las 500 líneas, hará 500 «INSERT INTO».


Desde phpMyAdmin:

Al exportar desde phpMyAdmin, marque la opción de creación de datos «ninguno de los anteriores».


Por SSH:

Utilice la opción --skip-extended-insert.

La opción --extended-insert incluida en la opción --opt (activada por defecto), genera un único «INSERT INTO» para toda una tabla. Por lo tanto, hay que desactivar esta opción:


```
--skip-extended-insert
```



![](images/img_1965.jpg){.thumbnail}


## Terminología
dump: Archivo de backup de la base de datos de un sitio web.

