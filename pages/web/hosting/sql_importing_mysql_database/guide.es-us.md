---
title: 'Importar una copia de seguridad en la base de datos de un alojamiento web'
slug: web_hosting_importacion_de_una_base_de_datos_mysql
excerpt: 'Cómo importar una copia de seguridad en la base de datos de un alojamiento web de OVHcloud'
section: 'Bases de datos'
order: 4
---

**Última actualización: 05/05/2020**

## Objetivo

Las bases de datos, que hoy en día se utilizan en la mayoría de los sistemas de gestión de contenidos (*content management system* o CMS) como WordPress o Joomla, permiten almacenar elementos dinámicos, tales como comentarios o artículos. Existen diversos motivos por los que podría necesitar importar datos en una de sus bases de datos para modificar o sustituir su contenido.

**Esta guía explica cómo importar una copia de seguridad en la base de datos de un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Disponer de una base de datos creada en un [alojamiento web de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Tener la copia de seguridad que quiera importar en la base de datos.
- Según el método de importación utilizado, tener acceso a la gestión del plan de hosting desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} o disponer de las claves necesarias para conectarse a la base de datos.

## Procedimiento

Antes de empezar, deberá elegir el método que quiera utilizar para importar la copia de seguridad en la base de datos. Existen diversas opciones con distinto nivel de dificultad técnica:

- **Restaurar la base de datos a una fecha anterior en unos clics**: Esta solución permite restaurar el contenido de la base de datos utilizando las copias de seguridad efectuadas por la herramienta de backup de OVHcloud. Esta operación no requiere conocimientos técnicos y se realiza desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Importar su propio archivo de backup en unos clics**: Esta solución permite importar los datos de su propia copia de seguridad en una base de datos. Esta operación se realiza desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

- **Realizar la importación desde la herramienta web phpMyAdmin**: Para ello, deberá conectarse a phpMyAdmin. Esta operación requiere conocimientos técnicos. Asimismo, existe un límite para el tamaño del archivo de backup.

- **Realizar la importación utilizando un script**: Para ello, deberá crear un script y colocarlo en el alojamiento web de OVHcloud. La creación de un script requiere conocimientos técnicos.

- **Realizar la importación mediante comandos SSH**: Para ello, deberá conectarse por SSH al espacio de almacenamiento y utilizar comandos para interactuar con él. Este tipo de acceso requiere conocimientos técnicos avanzados. Por otro lado, no todos los [planes de hosting de OVHcloud](https://www.ovh.com/world/es/hosting){.external} son compatibles.

Algunas de las operaciones anteriores se realizan en interfaces que no pertenecen a OVHcloud, por lo que no podemos orientarle sobre cómo ejecutarlas. A continuación explicamos con más detalle los distintos métodos de importación (sin que estas explicaciones sustituyan a la ayuda de un webmaster).

Continúe leyendo esta guía en el apartado correspondiente al método de importación elegido.

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

### Restaurar una copia de seguridad desde el área de cliente

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting. Haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos que quiera restaurar a una fecha anterior y seleccione `Restaurar una copia de seguridad`{.action}. Tenga en cuenta que esta acción sustituirá el contenido actual de la base de datos por el de la copia de seguridad.

![Importación de una base de datos](images/database-import-step5.png){.thumbnail}

Se mostrarán todas las copias de seguridad de la base de datos seleccionada, con la fecha exacta en la que se realizaron y la fecha en la que se eliminarán de la herramienta de backup de OVHcloud.

Haga clic en los tres puntos situados al final de la línea correspondiente al backup que quiera restaurar y seleccione `Restaurar la copia de seguridad`{.action}. Asegúrese de que la información es correcta y haga clic en `Aceptar`{.action}. Espere a que se restaure la copia de seguridad.

![Importación de una base de datos](images/database-import-step6.png){.thumbnail}

### Importar una copia de seguridad desde el área de cliente

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting. Haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos en la que quiera importar datos y seleccione `Importar un archivo`{.action}.

![Importación de una base de datos](images/database-import-step1.png){.thumbnail}

Se abrirá una ventana en la que deberá marcar la opción `Importar un nuevo archivo`{.action}. A continuación, haga clic en `Siguiente`{.action}.

> [!primary]
>
> La opción `Utilizar un archivo existente`{.action} permite importar los datos de un archivo ya cargado en la herramienta de importación.
>

![Importación de una base de datos](images/database-import-step2.png){.thumbnail}

Seleccione el archivo de la copia de seguridad en su ordenador y asígnele un nombre que le permita identificarla más adelante si quiere volver a restaurarla. A continuación haga clic en `Enviar`{.action}.

Espere hasta que la pantalla indique que el archivo se ha enviado correctamente y haga clic en `Siguiente`{.action}.

![Importación de una base de datos](images/database-import-step3.png){.thumbnail}

Por último, seleccione las opciones adicionales que quiera aplicar:

- **Vaciar la base de datos actual**: Si marca esta casilla, todo el contenido existente en la base de datos se eliminará y será sustituido por el de la copia de seguridad. Le recomendamos que solo marque esta casilla si está seguro de que quiere sustituir todo el actual contenido de la base de datos por el del archivo de backup.

- **Enviar un email cuando termine la importación**: Si marca esta casilla, se enviará una notificación por correo electrónico cuando haya finalizado la importación de la base de datos.

A continuación haga clic en `Aceptar`{.action} y espere a que finalice la importación. 

![Importación de una base de datos](images/database-import-step4.png){.thumbnail}

### Realizar la importación desde la herramienta web phpMyAdmin

En primer lugar deberá acceder a phpMyAdmin. Para ello, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting. Haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos y seleccione `Acceder a phpMyAdmin`{.action}.

![Importación de una base de datos](images/database-import-step7.png){.thumbnail}

En la página de phpMyAdmin, introduzca la información de la base de datos, seleccione en el menú desplegable la opción de acceder a los datos actuales de la base de datos (**Current**) y conéctese haciendo clic en `Continuar`{.action}. Una vez que se haya conectado, haga clic en `Importar`{.action} en el menú superior e introduzca la información solicitada. Le recordamos que existe un límite para el tamaño del archivo de backup.

> [!warning]
>
> La interfaz phpMyAdmin no pertenece a OVHcloud, por lo que no podemos orientarle sobre cómo utilizarla. Le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle.
>

### Importar una copia de seguridad utilizando un script

Esta operación se realiza en varios pasos. En primer lugar, asegúrese de que tiene el archivo de backup que quiera importar, así como la información necesaria para conectarse a la base de datos en la que realizará la importación: el nombre de usuario y la contraseña, el nombre de la base de datos y la dirección del servidor.

> [!warning]
>
> Esta operación requiere conocimientos de programación. A continuación ofrecemos algunas indicaciones sobre cómo realizarla. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor especializado. Nosotros no podremos asistirle.
>

#### 1. Crear un script de importación

El primer paso consiste en crear el script que importará el archivo de backup en la base de datos. A continuación ofrecemos un ejemplo de script para realizar esta operación (sin que este sustituya a la ayuda de un webmaster).

```php
<?php
system("cat nombre_archivo_backup.sql | mysql --host=dirección_servidor --user=nombre_usuario --password=contraseña_usuario nombre_base_de_datos");
?>
```

No olvide sustituir la información genérica del script por los datos correspondientes a la base de datos según se indica a continuación. Una vez que haya finalizado el script, le recomendamos que le asigne un nombre («import.php», por ejemplo).

|Información|Sustituir por...|
|---|---|
|nombre_archivo_backup|Nombre del archivo que contiene la copia de seguridad que quiera importar.|
|dirección_servidor|Dirección del servidor de la base de datos en la que quiera importar los datos.|
|nombre_usuario|Nombre del usuario con acceso a la base de datos.|
|contraseña_usuario|Contraseña del nombre de usuario anteriormente indicado.|
|nombre_base_de_datos|Nombre de la base de datos.|

#### 2. Cargar el script y la copia de seguridad en el espacio de almacenamiento

Una vez que haya creado el script de importación, deberá cargarlo, junto con el archivo de backup que quiera importar, en el espacio de almacenamiento de su alojamiento web. Para ello, conéctese al espacio de almacenamiento. Si necesita ayuda, consulte el paso «2. Conectarse al espacio de almacenamiento» de la guía [Publicar un sitio web en internet](../web_hosting_publicar_un_sitio_web_en_internet/#2-conectarse-al-espacio-de-almacenamiento){.external}.

Para poder realizar las siguientes acciones, cargue el script de importación y el archivo de backup en la carpeta «www». **Preste especial atención al nombre del archivo del script de importación**: cuando cargue el script, asegúrese de no sobrescribir un archivo presente en su espacio de almacenamiento que pueda tener el mismo nombre. Si aparece un mensaje de aviso que indique lo anterior, cambie el nombre del script que acaba de crear por otro diferente y vuelva a intentar cargarlo.

#### 3. Llamar al script

Una vez que haya cargado el script y el archivo de backup en el espacio de almacenamiento, solo queda iniciar la operación. Para ello, tendrá que llamar al script.

Introduzca en el navegador la URL completa del script (por ejemplo, «example.com/import.php» si el nombre del script es «import.php»). Si la información introducida en el script es correcta, comenzará la importación. Espere unos segundos a que esta se ejecute. En caso contrario, corrija la información del script e inténtelo de nuevo.

Una vez que haya finalizado la importación, le recomendamos encarecidamente que elimine tanto el archivo de backup como el script del directorio «www».

### Importar una copia de seguridad por SSH

Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal.

> [!warning]
>
> Este tipo de acceso requiere conocimientos técnicos más avanzados. A continuación ofrecemos algunas indicaciones. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor especializado. Nosotros no podremos asistirle.
>

Una vez que se haya conectado al espacio de almacenamiento por SSH, utilice un comando para importar la base de datos. A continuación ofrecemos un ejemplo que le ayudará a realizar esta operación. Tenga en cuenta que deberá haber cargado previamente la copia de seguridad que quiera importar en el espacio de almacenamiento y que, cuando envíe el comando, deberá estar situado en el mismo directorio que la copia de seguridad.

```sh
cat nombre_archivo_backup.sql | mysql --host=dirección_servidor --user=nombre_usuario --password=contraseña_usuario nombre_base_de_datos
```

Sustituya la información genérica del comando por la información de la base de datos correspondiente. Una vez que haya finalizado la importación, le recomendamos encarecidamente que elimine el archivo de backup del directorio en el que lo haya cargado.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
