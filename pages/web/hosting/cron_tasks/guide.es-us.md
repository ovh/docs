---
title: Crear tareas automatizadas (CRON) en un alojamiento web
excerpt: Cómo crear tareas CRON para automatizar las tareas programadas en un alojamiento web
slug: web_hosting_tareas_automatizadas_cron
section: Tareas automatizadas (Cron)
order: 01
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 22/9/2020**

## Objetivo

En su alojamiento web de OVHcloud, puede utilizar scripts para automatizar determinadas operaciones. La creación de una tarea programada ("tarea CRON") es la forma más sencilla de garantizar que sus scripts se ejecutan en momentos específicos sin que usted tenga que realizar ninguna otra acción. 

**Esta guía explica cómo crear tareas CRON para automatizar las tareas programadas en un alojamiento web.**

> [!warning]
>La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
>Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía. 
>

## Requisitos

- Tener contratado un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

Acceda al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}. Haga clic en `Web Cloud`{.action} y seleccione `Alojamientos`{.action}.

Seleccione el alojamiento correspondiente, abra la pestaña `Plus+`{.action} y haga clic en `Tareas planificadas - Cron.`{.action}

En esta sección, tendrá un resumen de sus tareas planificadas y sus parámetros.

![cron control panel](images/cron-jobs-1.png){.thumbnail}

### Creación de una tarea automatizada

#### Etapa 1: Definición de la configuración general

Para crear una tarea CRON, haga clic en el botón `Añadir una planificación`{.action} a la derecha. Puede personalizar la configuración de la tarea en la nueva ventana.

![adding scheduling](images/cron-jobs-2.png){.thumbnail}

|Opción|Descripción|   
|---|---|   
|Orden a ejecutar|Establezca la ruta al archivo que contiene el script. Ejemplo: www/jobs/cron.php|   
|Idioma|Seleccione la versión PHP del script.|
|Activación|Seleccione si la tarea se activará después de crearla o se activará más adelante.| 
|Logs por e-mail|Si es necesario, seleccione un contacto (administrador o técnico) al que se enviará un informe en caso de error de ejecución. También puede proporcionar otra dirección de correo electrónico.| 
|Descripción|Introduzca una descripción para consultar el progreso en la ejecución de sus tareas.| 

Haga clic en `Siguiente`{.action} para ir al paso 2.

#### Etapa 2: Definición de frecuencia

La interfaz ofrece dos modos para configurar la frecuencia de la tarea. Utilice el **Modo simple** para seleccionar opciones de planificación sencilla para principiantes. Si prefiere introducir directamente una frecuencia similar a un formato de tabla CRON (*crontab*), seleccione el **Modo experto**.

|Modo simple|
|---|
|Utilice los menús desplegables para especificar la hora, los días de un mes, los días de la semana y los meses de la tarea.|
|![cron frequency](images/cron-jobs-3.png){.thumbnail}|

|Modo experto| 
|---|
|Introduzca valores numéricos como en una *crontab*. Los asteriscos indican cada valor del período, lo que significa que la tarea se ejecutaría continuamente **una vez por hora todos los días** en este ejemplo.|
|![cron frequency](images/cron-jobs-4.png){.thumbnail}|

Puede cambiar entre ambos modos durante la configuración para ver los cambios en consecuencia. Asimismo, tenga en cuenta las [limitaciones al planificar una tarea en un alojamiento web](./#limitaciones-de-las-tareas-planificadas-en-su-alojamiento-web_1).

![cron control panel](images/cron-jobs-5.gif){.thumbnail}

#### Etapa 3: Fin de la instalación

El resumen le recuerda los parámetros configurados, incluyendo la notación *crontab* sobre la frecuencia de ejecución. si lo son, haga clic en `Aceptar`{.action}.

![cron de confirmación](images/cron-jobs-6.png){.thumbnail}

La tarea estará lista en unos minutos. Podrá modificar todos los parámetros o eliminar la tarea haciendo clic en `...`{.action} en la tabla de presentación del panel de configuración de OVHcloud.

### Limitaciones de las tareas planificadas en su alojamiento web

|Funcionalidad|Descripción|
|---|---|
|Planificación horaria|Se dará cuenta de que el campo "Minutos" está desactivado en la interfaz (definido por "? " en la vista *crontab*). Una tarea sólo puede ejecutarse una vez por hora, es la frecuencia de repetición más baja que se puede especificar.|
|Duración|La duración de ejecución de una tarea es de 60 minutos. Si un script supera la duración de ejecución, el sistema lo detendrá automáticamente.|
|Variables|Sólo puede definir variables en un script. Añadirlos a la URL que llama al script no funcionará (Ejemplo: www/jobs/cron.php?variable=value).|
|Límite de datos|Una tarea solo puede generar 5 MB de datos (*stdin/stderr*). Por ejemplo, si un script escribe datos en un archivo .txt, la ejecución se detiene automáticamente cuando el archivo alcanza los 5 MB.|
|Guiones que producen errores|Si un script no funciona, se desactivará automáticamente después de 10 intentos fallidos de ejecución. Simplemente vuelva a activarlo en el Panel de control. (haga clic en `...`{.action} y `Editar`{.action})|
|Informes de ejecución|Los informes sólo se enviarán a la dirección de correo electrónico seleccionada una vez al día (durante las horas de la noche).|

### Reparación

#### Prueba de su script con un navegador web

Una prueba sencilla de si el script producirá un error es ejecutarlo en un navegador web. Por ejemplo, si la ruta de acceso a su script es "www/cron.php" y su dominio es "mypersonaldomain.ovh", debe utilizar la URL "http://<i></i>mypersonaldomain.ovh/cron.php". Si no aparece ningún error, pero el script no funciona como estaba previsto, siga las indicaciones de abajo.

#### Comprobación del uso de rutas absolutas

Utilice siempre rutas de acceso absolutas a los archivos de sus scripts. La constante "DIR", por ejemplo, puede ayudar a obtener la ruta actual en los scripts PHP ([documentación PHP](https://www.php.net/manual/en/language.constants.predefined.php){.external}).
 
#### Verificación de los logs de ejecución

Podrá acceder a los logs de su alojamiento web desde su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y ver la categoría de log denominada "CRON".

Para más información, consulte nuestra guía ["Consultar las estadísticas y los logs de un sitio web alojado en un plan compartido"](../web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/).

##### **Ejemplo de logs**

- Ejemplo de finalización de script correctamente ejecutado 

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2020-08-11 00:36:01] 
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-10 22:39:44.086166 exitcode: 0
```

- Ejemplo de fallo al superar el tiempo de ejecución

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2020-08-11 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2020-08-11 01:36:01] ## OVH ## END - 2020-08-11 01:36:01.086166 exitcode: 0
```

- Ejemplo de error: no se puede encontrar el archivo de guión en la ruta de acceso especificada

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2020-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-11 00:36:01.086166 exitcode: 255
```

- Ejemplo de error debido a un error de autorización (chmod) o a una configuración incorrecta del archivo .ovhconfig

```
[2020-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2020-08-11 18:07:10]
[2020-08-11 18:07:10] ## OVH ## END - 2020-08-11 18:07:10.969840 exitcode: 255
```


## Más información

[Configurar el archivo .ovhconfig de un alojamiento web](../configurar-archivo-ovhconfig/)

[Utilizar el acceso SSH de un alojamiento web](../web_hosting_ssh_en_alojamiento_compartido/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
