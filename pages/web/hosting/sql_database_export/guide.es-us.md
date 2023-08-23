---
title: "Exportar una copia de seguridad de la base de datos de un alojamiento web"
excerpt: "Descubra cómo descargar un backup de la base de datos de un alojamiento web de OVHcloud"
updated: 2023-08-22
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La mayoría de los sitios web utilizan bases de datos y **C**ontent **M**anagement **S**ystem (**CMS**) como *WordPress*, *Joomla!*, *PrestaShop* o *Drupal*. Por lo general, permiten almacenar elementos dinámicos como, por ejemplo, comentarios, usuarios y contraseñas, el estado del inventario si dispone de un sitio de e-commerce o incluso artículos. Existen diversos motivos por los que podría necesitar realizar una copia de seguridad de la base de datos para recuperar el contenido.

**Descubra cómo recuperar la copia de seguridad de una base de datos de su alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}.
- Disponer de una base de datos creada en un [alojamiento web de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}.
- Según el método de backup utilizado, tener acceso a la gestión del plan de hosting desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external} o disponer de las claves necesarias para conectarse a la base de datos.

## Procedimiento

Antes de empezar, defina el método que va a seguir para recuperar la copia de seguridad de la base de datos. Puede elegir entre varias opciones:

- **Utilizar la herramienta de backup de OVHcloud** : Esta solución permite recuperar copias de seguridad de sus bases de datos desde el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}. Este método no requiere conocimientos técnicos.

- **Realizar la copia de seguridad desde la interfaz web phpMyAdmin**: Este método requiere conectarse a la interfaz *phpMyAdmin* para realizar la manipulación. Para ello, es necesario conocer la interfaz *phpMyAdmin*.

- **Utilizar un script para realizar la copia de seguridad** : Para ello, deberá crear un script y colocarlo en su alojamiento web de OVHcloud. Se requieren conocimientos específicos para esta creación.

- **Realizar la copia de seguridad mediante un comando SSH** : Para ello, deberá conectarse al espacio de almacenamiento FTP por SSH y utilizar los comandos necesarios para interactuar con él. Este tipo de acceso requiere conocimientos técnicos avanzados y un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external} específico.

> [!success]
>
> Si va a realizar una copia de seguridad de la base de datos porque está llena o llena, consulte nuestro tutorial "[Qué hacer cuando la base de datos esté llena](/pages/web/hosting/sql_overquota_database)".
>

Algunos de los métodos anteriores no son inherentes a una interfaz de OVHcloud. Para ello, deberá realizar la operación según sus propios conocimientos. A continuación ofrecemos algunos datos, pero no pueden sustituir a la asistencia proporcionada por un webmaster si tiene dificultades para realizarlos solo.

Continúe leyendo esta guía en el apartado correspondiente al método de backup elegido.

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

### Exportar una copia de seguridad desde el área de cliente

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

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

Se mostrarán todas las copias de seguridad de la base de datos seleccionada, con la fecha exacta en la que se realizaron y la fecha en la que se eliminarán de la herramienta de backup de OVHcloud.

Para descargar una copia de seguridad, haga clic en los tres puntos situados al final de la línea correspondiente a la copia de seguridad que quiera exportar y haga clic en `Descargar la copia de seguridad`{.action}. Según la configuración de su navegador de internet, se abrirá una ventana en la que deberá confirmar que desea guardar la copia de seguridad en su equipo local. Espere a que se descargue la copia de seguridad.

![Dump de la base de datos](images/database-dump-step5.png){.thumbnail}

### Exportar una copia de seguridad desde la herramienta web phpMyAdmin

En primer lugar, deberá acceder a phpMyAdmin. Para ello, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el plan de hosting. Haga clic en los tres puntos situados al final de la línea correspondiente a la base de datos y seleccione `Acceder a phpMyAdmin`{.action}.

![Dump de la base de datos](images/database-dump-step6.png){.thumbnail}

En la página de phpMyAdmin, introduzca la información de la base de datos, seleccione en el menú desplegable si quiere mostrar los datos actuales de la base de datos o los de una fecha anterior y conéctese haciendo clic en `Continuar`{.action}. Una vez que se haya conectado, haga clic en `Exportar`{.action} en el menú superior. Elija un método de exportación:

- **Rápido**: Puede seleccionar el formato de exportación de la copia de seguridad. El más común es SQL, pero puede elegir cualquier otro de la lista, según sus necesidades.

- **Personalizado**: Puede configurar al detalle los parámetros de exportación de la copia de seguridad.

> [!warning]
>
> La interfaz phpMyAdmin no pertenece a OVHcloud, por lo que no podemos orientarle sobre cómo utilizarla. Le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle.
>

### Exportar una copia de seguridad utilizando un script

Esta operación se realiza en varios pasos. En primer lugar, asegúrese de que tiene la información necesaria para conectarse a la base de datos de la que quiera realizar la copia de seguridad: el nombre de usuario y la contraseña, el nombre de la base de datos y la dirección del servidor.

> [!warning]
>
> Esta operación requiere conocimientos de programación. A continuación ofrecemos algunas indicaciones sobre cómo realizarla. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/). Nosotros no podremos asistirle.
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

Una vez que haya creado el script de backup, deberá cargarlo en el espacio de almacenamiento de su alojamiento web. Para ello, conéctese al espacio de almacenamiento. Si necesita ayuda, consulte el paso «2. Conectarse al espacio de almacenamiento» de la guía [Publicar un sitio web en internet](/pages/web/hosting/hosting_how_to_get_my_website_online#2-conectarse-al-espacio-de-almacenamiento){.external}.

Para poder realizar las siguientes acciones, cargue el script en la carpeta «www». **Preste especial atención al nombre del archivo del script de backup**: cuando cargue el script, asegúrese de no sobrescribir un archivo presente en su espacio de almacenamiento que pueda tener el mismo nombre. Si aparece un mensaje de aviso que indique lo anterior, cambie el nombre del script que acaba de crear por otro diferente y vuelva a intentar cargarlo.

#### 3. Llamar al script

Una vez que haya cargado el script en el espacio de almacenamiento, solo queda ejecutar el código. Para ello, tendrá que llamar al script.

Introduzca en el navegador la URL completa del script (por ejemplo, «example.com/backup.php» si el nombre del script es «backup.php»). Si la información introducida en el script es correcta, comenzará el backup. Espere unos segundos a que este se ejecute. En caso contrario, corrija la información del script y vuelva a intentarlo.

#### 4. Exportar el backup desde el espacio de almacenamiento

Una vez realizada la copia de seguridad, puede localizarla en la carpeta en la que haya colocado el script de backup. La copia de seguridad tendrá el nombre que usted haya indicado en el script. Solo tiene que copiar el archivo de backup en su equipo local.

Una vez que haya finalizado la operación, le recomendamos encarecidamente que elimine tanto el archivo de backup como el script del directorio «www».

> [!primary]
>
> La utilización de un script de backup y de tareas planificadas (denominadas «Cron») le permitirá automatizar las copias de seguridad con la frecuencia que desee. Para más información sobre las tareas planificadas, consulte la guía [Tareas automatizadas (cron)](/pages/web/hosting/cron_tasks){.external}.
>

### Exportar una copia de seguridad por SSH

Para interactuar con su espacio de almacenamiento, deberá ejecutar comandos desde un terminal.

> [!warning]
>
> Este tipo de acceso requiere conocimientos técnicos más avanzados. A continuación ofrecemos algunas indicaciones. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/). Nosotros no podremos asistirle.
>

Una vez que se haya conectado al espacio de almacenamiento por SSH, utilice un comando para realizar la copia de seguridad de la base de datos. A continuación ofrecemos un ejemplo que le ayudará a realizar esta operación. Tenga en cuenta que la copia de seguridad se creará en el directorio en el que esté situado cuando envíe el comando desde su terminal.

```sh
mysqldump --host=dirección_servidor --user=nombre_usuario --password=contraseña_usuario nombre_base_de_datos > nombre_archivo_backup.sql
```

Sustituya la información genérica incluida en el script por la información de la base de datos correspondiente. Una vez que haya finalizado la copia de seguridad, solo tiene que copiar el archivo de backup en su equipo local.

## Más información <a name="go-further"></a>

[Tutorial: ¿Qué hacer cuando la base de datos está llena?](/pages/web/hosting/sql_overquota_database)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
