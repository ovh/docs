---
title: Web hosting Importación de una base de datos MySQL
excerpt: Esta guía describe distintas formas de importar una base de datos en nuestros servidores
slug: web_hosting_importacion_de_una_base_de_datos_mysql
legacy_guide_number: g1393
section: Bases de datos
---


## Requisitos
Para importar una base de datos debe tener:


- El archivo del backup de la base de datos, denominado dump, que obtiene al realizar la copia de seguridad de la base de datos (para más información, consulte la guía []({legacy}1394)). Por lo general ese archivo es de tipo .sql. Si ha creado su base de datos con un proveedor distinto de OVH, contacte con él para que le informe de cómo recuperar la base de datos desde su servicio.

- Su usuario, la contraseña de la base de datos SQL y el nombre del servidor SQL. Si ha perdido alguna de las claves, consulte esta guía para recuperarlas: []({legacy}1374).



![](images/img_1802.jpg){.thumbnail}


## Desde el área de cliente de OVH
Para importar una base de datos de forma rápida y sencilla, conéctese a su [área de cliente de OVH](https://www.ovh.com/manager/).
La ventaja de este método es que no existe límite de tamaño para importar el archivo de backup (dump).  

Conéctese al [área de cliente](https://www.ovh.com/manager/web) con su ID de cliente (NIC Handle) y contraseña. Seleccione su alojamiento en la sección «Alojamientos» del menú de la izquierda y haga clic en la pestaña «Bases de datos».

![](images/img_4125.jpg){.thumbnail}
Haga clic en la rueda dentada que aparece a la derecha de la base de datos que desea importar y seleccione la opción «Importar un archivo». 

Siga los pasos que se le indican para importar su backup SQL.

![](images/img_4126.jpg){.thumbnail}


## Desde phpMyAdmin para MySQL
Conéctese a [phpMyAdmin](https://phpmyadmin.ovh.net).

Si necesita ayuda para utilizar phpMyAdmin, consulte esta guía: 

- []({legacy}1374)


En la columna izquierda, haga clic en el nombre de la base de datos.

A continuación, en la barra superior seleccione la pestaña «Importar».

Seleccione el dump haciendo clic en «Seleccionar archivo».

Para ejecutar la importación, haga clic en «Continuar».

Si desea importar un dump generado desde el área de cliente, no olvide descomprimir el archivo antes de importarlo.

![](images/img_1962.jpg){.thumbnail}

## Recuerde:
El tamaño del archivo no puede ser superior a 16 MB.


## Desde un script presente en su alojamiento
Puede crear los scripts en un archivo de texto y luego añadirle la extensión correspondiente al lenguaje utilizado.

Previamente deberá subir a su alojamiento por FTP el dump de la base de datos.

En los scripts que se indican a continuación, sustituya:


- nombre_de_la_bd.sql por el nombre del archivo;
- servidor_sql por el nombre del servidor en el que haya creado la base de datos;
- nombre_de_la_bd por el nombre de la base de datos;
- contraseña por la contraseña de la base de datos.



## En PHP (importbd.php):

```
<?php
echo "Restaurando la base de datos... 
<br>";
system("cat nombre_de_la_bd.sql | mysql --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd");
echo "Restauración finalizada. Ya tiene su base de datos en el alojamiento.";
?>
```



## En PERL (importbd.cgi):

```
#!/usr/bin/perl

print "Restaurando la base de datos...
<br>";
system("cat nombre_de_la_bd.sql | mysql --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd");
print "Restauración finalizada. Ya tiene su base de datos en el alojamiento.";
```



Suba por FTP a la carpeta www de su alojamiento el dump de la base de datos y el script que haya creado y llame a este último con su navegador desde la dirección http://sudominio.com/importbd.php, sustituyendo sudominio.com por su dominio e importbd.php por el nombre del archivo que contiene el script.

Si el dump está comprimido (en formato .sql.gz) deberá añadir el siguiente comando al principio del script:


```
system("gunzip nombre_de_la_bd.sql.gz");
```



## En PHP: restauración de la BD desde un dump comprimido
A continuación se ofrece un ejemplo de restauración de una base de datos a partir de un dump comprimido: 


```
<?php
echo "Descomprimiendo el archivo...
<br>";
system("gunzip testbackup.sql.gz");
echo "Restaurando la base de datos...
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
echo "Restauración finalizada. Ya tiene su base de datos en el alojamiento.";
?>
```



## En PERL: restauración de la BD desde un dump comprimido
A continuación se ofrece un ejemplo de restauración de una base de datos a partir de un dump comprimido:


```
#!/usr/bin/perl

print "Descomprimiendo el archivo...
<br>";
system("gunzip testbackup.sql.gz");
print "Restaurando la base de datos...
<br>";
system("cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport");
print "Restauración finalizada. Ya tiene su base de datos en el alojamiento.";
```




## Por SSH

## Requisitos:
Para conectarse al espacio de alojamiento, necesitará el usuario y la contraseña FTP, que encontrará en el email de instalación del alojamiento, y el usuario y la contraseña de la base de datos SQL, que se le enviaron en el email de instalación de la base de datos. Si ha perdido alguna de las claves, consulte esta guía para recuperarlas: 

- []({legacy}1374).


Debe tener un alojamiento que permita acceder por SSH ([ver las características de nuestros productos](https://www.ovh.es/hosting/)). Si necesita ayuda para conectarse por SSH, consulte la siguiente guía: 

- [Acceso a un alojamiento compartido a través de SSH](http://guias.ovh.es/SshSobreAlojamiento).



## Importación de la base de datos por SSH
Conéctese a su alojamiento compartido por SSH. 

Acceda a la carpeta en la que haya guardado el dump que quiera importar y ejecute el siguiente comando:


```
cat nombre_de_la_bd.sql | mysql --host=servidor_sql --user=nombre_de_la_bd --password=contraseña nombre_de_la_bd
```


Un ejemplo de código después de sustituir los datos:


```
cat testbackup.sql | mysql --host=mysql5-21.pro --user=testimport --password=RtPgDsmLE testimport
```




## Desde el servicio SQL Privado
Si desea más información sobre cómo importar una base de datos, consulte nuestra guía: 


- [Importación de base de datos SQL Privado](https://www.ovh.es/g2023.todo_sobre_el_sql_privado)




## Error debido al nombre de la base de datos
Puede ser necesario añadir esta línea al principio del archivo de backup, sustituyendo nombre_de_mi_bd por el nombre de la base de datos en la que quiera importar los datos:


```
use nombre_de_mi_bd;
```




## Terminología
dump: Archivo de backup de la base de datos de un sitio web.

