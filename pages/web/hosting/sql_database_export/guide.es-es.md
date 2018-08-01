---
title: 'Exportar una copia de seguridad de la base de datos de un alojamiento web'
slug: web_hosting_exportacion_de_una_base_de_datos
excerpt: 'Cómo descargar un backup de la base de datos de un alojamiento web de OVH'
section: 'Bases de datos'
order: 3
---

**Última actualización: 01/08/2018**

## Objetivo

Las bases de datos, que hoy en día se utilizan en la mayoría de los sistemas de gestión de contenidos (*content management system* o CMS) como WordPress o Joomla, permiten almacenar elementos dinámicos, tales como comentarios o artículos. Existen diversos motivos por los que podría necesitar realizar una copia de seguridad de una base de datos para recuperar su contenido.

**Esta guía explica cómo exportar una copia de seguridad de la base de datos de un alojamiento web de OVH.**

## Requisitos

- Tener contratado un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}.
- Disponer de una base de datos creada en un [alojamiento web de OVH.](https://www.ovh.es/hosting/){.external}
- Según el método de backup utilizado, tener acceso a la gestión del plan de hosting desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external} o disponer de las claves necesarias para conectarse a la base de datos.

## Procedimiento

Antes de empezar, deberá elegir el método que quiera utilizar para exportar la copia de seguridad de la base de datos. Existen diversas opciones con distinto nivel de dificultad técnica:

- **Utilizar la herramienta de backup de OVH**: Esta solución permite exportar la copia de seguridad de una base de datos desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Es la solución más accesible, ya que no requiere conocimientos técnicos.

- **Realizar la copia de seguridad desde la herramienta web phpMyAdmin**: Para ello, deberá conectarse a phpMyAdmin. Esta operación requiere conocimientos de la interfaz phpMyAdmin.

- **Realizar la copia de seguridad utilizando un script**: Para ello, deberá crear un script y colocarlo en su alojamiento web de OVH. La creación de un script requiere conocimientos técnicos.

- **Realizar la copia de seguridad mediante comandos SSH**: Para ello, deberá conectarse por SSH al espacio de almacenamiento y utilizar comandos para interactuar con él. Este tipo de acceso requiere conocimientos técnicos avanzados. Por otro lado, no todos los [planes de hosting de OVH](https://www.ovh.es/hosting){.external} son compatibles.

Algunas de las operaciones anteriores se realizan en interfaces que no pertenecen a OVH, por lo que no podemos orientarle sobre cómo ejecutarlas. A continuación explicamos con más detalle los distintos métodos de importación (sin que estas explicaciones sustituyan a la ayuda de un webmaster). 

Continúe leyendo esta guía en el apartado correspondiente al método de backup elegido.

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

### Exportar una copia de seguridad desde el área de cliente

Conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting. Desde esa página podrá realizar una nueva copia de seguridad o restaurar una copia de seguridad ya realizada.

#### 1. Realizar una nueva copia de seguridad de la base de datos

En la pestaña `Bases de datos`{.action}, haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos de la que quiera realizar la copia de seguridad y seleccione `Crear una copia de seguridad`{.action}.

![Dump de la base de datos](images/database-dump-step2.png){.thumbnail}

Se abrirá una ventana en la que deberá seleccionar la fecha de la copia de seguridad deseada. Haga clic en `Siguiente`{.action}. Asegúrese de que la información es correcta y haga clic en `Aceptar`{.action}.

Espere a que se realice la copia de seguridad. Una vez que esté disponible, ya podrá exportarla.

![Dump de la base de datos](images/database-dump-step3.png){.thumbnail}

#### 2. Exportar una copia de seguridad de la base de datos

En la pestaña `Bases de datos`{.action}, haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos de la que quiera realizar la copia de seguridad y seleccione `Restaurar una copia de seguridad`{.action}.

![Dump de la base de datos](images/database-dump-step4.png){.thumbnail}

Se mostrarán todas las copias de seguridad de la base de datos seleccionada, con la fecha exacta en la que se realizaron y la fecha en la que se eliminarán de la herramienta de backup de OVH.

Para descargar una copia de seguridad, haga clic en los tres puntos situados al final de la línea correspondiente a la copia de seguridad que quiera exportar y haga clic en `Descargar la copia de seguridad`{.action}. Según la configuración de su navegador de internet, se abrirá una ventana en la que deberá confirmar que desea guardar la copia de seguridad en su equipo local. Espere a que se descargue la copia de seguridad.

![Dump de la base de datos](images/database-dump-step5.png){.thumbnail}

### Exportar una copia de seguridad desde la herramienta web phpMyAdmin

En primer lugar, deberá acceder a phpMyAdmin. Para ello, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Alojamientos`{.action} en la columna izquierda y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting. Haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos y seleccione `Acceder a phpMyAdmin`{.action}.

![Dump de la base de datos](images/database-dump-step6.png){.thumbnail}

En la página de phpMyAdmin, introduzca la información de la base de datos, seleccione en el menú desplegable si quiere mostrar los datos actuales de la base de datos o los de una fecha anterior y conéctese haciendo clic en `Continuar`{.action}. Una vez que se haya conectado, haga clic en `Exportar`{.action} en el menú superior. Elija un método de exportación:

- **Rápido**: Puede seleccionar el formato de exportación de la copia de seguridad. El más común es SQL, pero puede elegir cualquier otro de la lista, según sus necesidades.

- **Personalizado**: Puede configurar al detalle los parámetros de exportación de la copia de seguridad.

> [!warning]
>
> La interfaz phpMyAdmin no pertenece a OVH, por lo que no podemos orientarle sobre cómo utilizarla. Le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle.
>

### Exportar una copia de seguridad utilizando un script

Esta operación se realiza en varios pasos. En primer lugar, asegúrese de que tiene la información necesaria para conectarse a la base de datos de la que quiera realizar la copia de seguridad: el nombre de usuario y la contraseña, el nombre de la base de datos y la dirección del servidor.

> [!warning]
>
> Esta operación requiere conocimientos de programación. A continuación ofrecemos algunas indicaciones sobre cómo realizarla. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor especializado. Nosotros no podremos asistirle.
>

#### 1. Crear un script de backup

El primer paso consiste en crear el script que realizará la copia de seguridad de la base de datos. A continuación ofrecemos un ejemplo de script para realizar esta operación (sin que este sustituya a la ayuda de un webmaster).

```php
<?
system("mysqldump --host=dirección_servidor --user=nombre_usuario --password=contraseña_usuario nombre_base_de_datos > nombre_archivo_backup.sql");
?>
```

No olvide sustituir la información genérica del script por los datos correspondientes a la base de datos según se indica a continuación. Una vez que haya creado el script, le recomendamos que le asigne un nombre («backup.php», por ejemplo).

|Información|Sustituir por...|
|---|---|
|dirección_servidor|Dirección del servidor de la base de datos.|
|nombre_usuario|Nombre del usuario con acceso a la base de datos.|
|contraseña_usuario|Contraseña del nombre de usuario anteriormente indicado.|
|nombre_base_de_datos|Nombre de la base de datos.|
|nombre_archivo_backup|Nombre que tendrá el archivo de backup, una vez que este se haya realizado.|

> [!primary]
>
> Es posible realizar un backup de una fecha anterior añadiendo un puerto en el script. Para un backup a fecha del día anterior, utilice el puerto «3307». Para un backup a fecha de siete días antes, utilice el puerto «3317». 
> 
> El puerto «3306» le permitirá crear una copia de seguridad de los datos presentes actualmente en la base de datos.
>

#### 2. Cargar el script en el espacio de almacenamiento

Una vez que haya creado el script de backup, deberá cargarlo en el espacio de almacenamiento de su alojamiento web. Para ello, conéctese al espacio de almacenamiento. Si necesita ayuda, consulte el paso «2. Conectarse al espacio de almacenamiento» de la guía [Publicar un sitio web en internet](https://docs.ovh.com/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/#2-conectarse-al-espacio-de-almacenamiento){.external}.

Para poder realizar las siguientes acciones, cargue el script en la carpeta «www». **Preste especial atención al nombre del archivo del script de backup**: cuando cargue el script, asegúrese de no sobrescribir un archivo presente en su espacio de almacenamiento que pueda tener el mismo nombre. Si aparece un mensaje de aviso que indique lo anterior, cambie el nombre del script que acaba de crear por otro diferente y vuelva a intentar cargarlo.

#### 3. Llamar al script

Una vez que haya cargado el script en el espacio de almacenamiento, solo queda ejecutar el código. Para ello, tendrá que llamar al script.

Introduzca en el navegador la URL completa del script (por ejemplo, «example.com/backup.php» si el nombre del script es «backup.php»). Si la información introducida en el script es correcta, comenzará el backup. Espere unos segundos a que este se ejecute. En caso contrario, corrija la información del script y vuelva a intentarlo.

#### 4. Exportar el backup desde el espacio de almacenamiento

Una vez realizada la copia de seguridad, puede localizarla en la carpeta en la que haya colocado el script de backup. La copia de seguridad tendrá el nombre que usted haya indicado en el script. Solo tiene que copiar el archivo de backup en su equipo local.

Una vez que haya finalizado la operación, le recomendamos encarecidamente que elimine tanto el archivo de backup como el script del directorio «www».

> [!primary]
>
> La utilización de un script de backup y de tareas planificadas (denominadas «Cron») le permitirá automatizar las copias de seguridad con la frecuencia que desee. Para más información sobre las tareas planificadas, consulte la guía [Tareas automatizadas (cron)](https://docs.ovh.com/es/hosting/web_hosting_tareas_automatizadas_cron/){.external}.
>

### Exportar una copia de seguridad por SSH

Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal.

> [!warning]
>
> Este tipo de acceso requiere conocimientos técnicos más avanzados. A continuación ofrecemos algunas indicaciones. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor especializado. Nosotros no podremos asistirle.
>

Una vez que se haya conectado al espacio de almacenamiento por SSH, utilice un comando para realizar la copia de seguridad de la base de datos. A continuación ofrecemos un ejemplo que le ayudará a realizar esta operación. Tenga en cuenta que la copia de seguridad se creará en el directorio en el que esté situado cuando envíe el comando desde su terminal.

```sh
mysqldump --host=dirección_servidor --user=nombre_usuario --password=contraseña_usuario nombre_base_de_datos > nombre_archivo_backup.sql
```

Sustituya la información genérica incluida en el script por la información de la base de datos correspondiente. Una vez que haya finalizado la copia de seguridad, solo tiene que copiar el archivo de backup en su equipo local.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.