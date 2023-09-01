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

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external}.
- Disponer de una base de datos creada en un [alojamiento web de OVHcloud.](https://www.ovhcloud.com/es-es/web-hosting/){.external}
- Según el método de backup utilizado, tener acceso a la gestión del plan de hosting desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} o disponer de las claves necesarias para conectarse a la base de datos.

## Procedimiento

Antes de empezar, defina el método que va a seguir para recuperar la copia de seguridad de la base de datos. Puede elegir entre varias opciones:

- **Utilizar la herramienta de backup de OVHcloud** : Esta solución permite recuperar copias de seguridad de sus bases de datos desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Este método no requiere conocimientos técnicos.

- **Realizar la copia de seguridad desde la interfaz web phpMyAdmin**: Este método requiere conectarse a la interfaz *phpMyAdmin* para realizar la manipulación. Para ello, es necesario conocer la interfaz *phpMyAdmin*.

- **Utilizar un script para realizar la copia de seguridad** : Para ello, deberá crear un script y colocarlo en su alojamiento web de OVHcloud. Se requieren conocimientos específicos para esta creación.

- **Realizar la copia de seguridad mediante un comando SSH** : Para ello, deberá conectarse al espacio de almacenamiento FTP por SSH y utilizar los comandos necesarios para interactuar con él. Este tipo de acceso requiere conocimientos técnicos avanzados y un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external} específico.

> [!success]
>
> Si va a realizar una copia de seguridad de la base de datos porque está llena o llena, consulte nuestro tutorial "[Qué hacer cuando la base de datos esté llena](/pages/web_cloud/web_hosting/sql_overquota_database)".
>

Algunos de los métodos anteriores no son inherentes a una interfaz de OVHcloud. Para ello, deberá realizar la operación según sus propios conocimientos. A continuación ofrecemos algunos datos, pero no pueden sustituir a la asistencia proporcionada por un webmaster si tiene dificultades para realizarlos solo.

Continúe leyendo esta guía en el apartado correspondiente al método de backup elegido.

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). Nosotros no podremos asistirle. Para más información, consulte la sección [«Más información»](#go-further) de esta guía.
>

### Obtener una copia de seguridad a través de la herramienta de OVHcloud

Para acceder a la herramienta de backup de OVHcloud, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el alojamiento web. A continuación, podrá elegir entre realizar una nueva copia de seguridad o recuperar una ya existente, realizando dos operaciones distintas.

#### Etapa 1: realizar una nueva copia de seguridad de la base de datos

En la pestaña `Bases de datos`{.action}, haga clic en el botón `...`{.action} a la derecha de la base de datos de la que quiera realizar la copia de seguridad y seleccione `Crear una copia de seguridad`{.action}.

![databasedump](images/database-dump-step2.png){.thumbnail}

Se abrirá una ventana en la que deberá seleccionar la fecha de la copia de seguridad deseada y pulsar el botón `Siguiente`{.action}. Asegúrese de que la información introducida en el resumen es correcta y haga clic en `Validar`{.action} para iniciar la operación.

Espere a que se realice la copia de seguridad. Una vez que esté disponible, podrá recuperarla.

![databasedump](images/database-dump-step3.png){.thumbnail}

#### Etapa 2: recuperar una copia de seguridad de la base de datos

En la pestaña `Bases de datos`{.action}, haga clic en el botón `...`{.action} a la derecha de la base de datos de la que quiera realizar la copia de seguridad y seleccione `Restaurar una copia de seguridad`{.action}.

![databasedump](images/database-dump-step4.png){.thumbnail}

Se mostrará una tabla que contiene todas las copias de seguridad disponibles de la base de datos seleccionada. Aquí podrá ver la fecha exacta en la que se realizaron las copias de seguridad y la fecha en la que se eliminarán de la herramienta de backup de OVHcloud.

Para descargar una copia de seguridad, haga clic en el botón `...`{.action} a la derecha de la copia de seguridad que desea recuperar y luego en `Descargar la copia de seguridad`{.action}. Se abrirá una ventana en la que deberá guardarla en su máquina. Acepte y espere a que se descargue la copia de seguridad.

![databasedump](images/database-dump-step5.png){.thumbnail}

### Recuperar una copia de seguridad desde la interfaz web phpMyAdmin

Para realizar la operación, conéctese a *phpMyAdmin*. Para conocer el enlace de acceso a este último, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con todas las bases de datos creadas en el alojamiento web. Haga clic en el botón `...`{.action} a la derecha de la base de datos correspondiente y, seguidamente, en `Acceder a phpMyAdmin »`{.action}.

![databasedump](images/database-dump-step6.png){.thumbnail}

Una vez en la interfaz de conexión a *phpMyAdmin*, introduzca los datos de la base de datos y conéctese. Una vez que se haya conectado, abra la pestaña `Exportar`{.action}, en la que podrá elegir entre dos métodos de exportación:

- **Método rápido**: puede definir el formato de exportación de la copia de seguridad. El más común es el formato SQL, pero puede elegir uno en función de sus necesidades;

- **Personalizado**: Puede especificar los parámetros de exportación de la copia de seguridad.

> [!warning]
>
> La interfaz *phpMyAdmin* no ha sido creada por OVHcloud, por lo que deberá realizar la operación según sus propios conocimientos. Le recomendamos que, si necesita ayuda, contacte con un [proveedor de servicios especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor de la interfaz. Nosotros no podremos asistirle.
>

### Recuperar una copia de seguridad utilizando un script

Esta operación se realiza en varios pasos. Asegúrese de disponer de la información necesaria para conectarse a la base de datos de la que quiera realizar la copia de seguridad: el nombre de usuario, la contraseña, el nombre de la base de datos y la dirección del servidor.

> [!warning]
>
> Esta solución requiere conocimientos de programación. A continuación ofrecemos algunas indicaciones sobre cómo hacerlo. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). Nosotros no podremos asistirle.
>

#### Etapa 1: crear el script de backup

El primer paso consiste en crear el script que permitirá realizar la copia de seguridad de la base de datos. A continuación ofrecemos un ejemplo de script que puede ayudarle a realizar esta operación. Sin embargo, si tiene alguna dificultad, este ejemplo no puede sustituir por sí solo a la asistencia que le proporcione un webmaster.

```php
<?
system("mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql");
?>
```

No olvide sustituir la información genérica del script por la información de la base de datos correspondiente, basándose en los elementos que se indican a continuación. Una vez finalizado el script, le recomendamos que le asigne un nombre, por ejemplo, «backup.php».

|Información|Reemplazar por|
|---|---|
|server_address|La dirección del servidor de la base de datos afectada.|
|user_name|Nombre del usuario con acceso a la base de datos.|
|user_password|Contraseña del nombre de usuario indicado anteriormente.|
|name_of_database|Nombre de la base de datos.|
|backup_file_name|Nombre que tendrá el archivo de copia de seguridad cuando se ejecute.|

#### Etapa 2: descargar el script en el espacio de almacenamiento FTP

Una vez que haya creado el script de backup, deberá descargarlo en el espacio de almacenamiento FTP de su alojamiento web. Para ello, consulte el paso 2 de la documentación "[Conectarse al espacio de almacenamiento](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".

Para llevar a cabo los siguientes pasos, cargue el script en la carpeta que contiene el sitio web que utiliza la base de datos. **Preste especial atención al nombre del archivo de script de copia de seguridad.** No sobrescriba un archivo existente con el mismo nombre en el espacio de almacenamiento FTP cuando vaya a descargar el script. Si aparece un mensaje de advertencia de este tipo, cambie el nombre del script recién creado para volver a intentar cargarlo.

#### Etapa 3: llamar al script

Una vez que el script se haya cargado en el espacio de almacenamiento FTP, inicie el código del mismo llamando al script.

Para ello, acceda desde su navegador de internet a la dirección URL completa del script (por ejemplo, mypersonaldomain.ovh/backup.php si ha llamado al script "backup.php"). Si la información introducida en el script es correcta, se iniciará la copia de seguridad. Espere a que se ejecute. Si no es así, compruebe la información introducida en el script y vuelva a intentarlo.

#### Etapa 4: recuperar la copia de seguridad desde el espacio de almacenamiento FTP

Una vez realizada la copia de seguridad, deberá descargarla en la carpeta en la que se haya descargado el script de copia de seguridad. La copia de seguridad de la base de datos debe tener el nombre que se ha definido anteriormente en el script. Solo tiene que descargar la copia de seguridad en su propio dispositivo.

Antes de finalizar, le recomendamos encarecidamente que elimine tanto el archivo de copia de seguridad como el script del directorio en el que se encuentran.

> [!primary]
>
> El uso de un script de backup con nuestro sistema de tareas planificadas (tareas «CRON») le permite automatizar las copias de seguridad con la frecuencia que usted elija. Para más información sobre las tareas planificadas, consulte nuestra guía: «[Configurar una tarea planificada (CRON) en un alojamiento web](/pages/web_cloud/web_hosting/cron_tasks)».
>

### Recuperar una copia de seguridad mediante un comando SSH

Para realizar la operación, deberá utilizar comandos desde un terminal para interactuar con su espacio de almacenamiento FTP.

> [!warning]
>
> Este tipo de acceso requiere conocimientos técnicos más avanzados. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). Nosotros no podremos asistirle.
>

Una vez conectado al espacio de almacenamiento FTP por SSH, utilice un comando para realizar la copia de seguridad de la base de datos. A continuación se incluye una descripción que puede ayudarle a realizar esta operación. Tenga en cuenta que la copia de seguridad se realizará en el directorio actual en el momento en que envíe el comando en su terminal.

```sh
mysqldump --host=server_address --user=user_name --password=user_password name_of_database > backup_file_name.sql
```

Sustituya la información genérica del comando por la información de la base de datos correspondiente. Una vez realizada la copia de seguridad, solo tiene que cargarla en su propia máquina.

|Información|Reemplazar por|
|---|---|
|server_address|La dirección del servidor de la base de datos afectada.|
|user_name|Nombre del usuario con acceso a la base de datos.|
|user_password|Contraseña del nombre de usuario indicado anteriormente.|
|name_of_database|Nombre de la base de datos.|
|backup_file_name|Nombre que tendrá el archivo de copia de seguridad cuando se ejecute.|

## Más información <a name="go-further"></a>

[Tutorial: ¿Qué hacer cuando la base de datos está llena?](/pages/web_cloud/web_hosting/sql_overquota_database)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.