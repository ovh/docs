---
title: "Crear tareas automatizadas (CRON) en un alojamiento web"
excerpt: "Descubra cómo crear tareas CRON para automatizar las tareas programadas en un alojamiento web"
updated: 2026-03-31
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objetivo

En su alojamiento web de OVHcloud, puede utilizar scripts para automatizar determinadas operaciones. Una tarea programada ("tarea CRON") permite que sus scripts se ejecuten en momentos específicos sin que usted tenga que realizar ninguna otra acción.

**Esta guía explica cómo crear tareas CRON para automatizar las tareas programadas en un alojamiento web.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting).
<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### Creación de una tarea automatizada

<!-- CP-STEPS-START:create-cron-task -->

Haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Más`{.action} y seleccione `Cron`{.action}. Tendrá un resumen de sus tareas planificadas y sus parámetros.
>>
>> ![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}
>>
>> Para crear una tarea CRON, haga clic en el botón `Añadir una planificación`{.action} a la derecha.
>>
> **Etapa 3**
>>
>> Personalice los parámetros de la tarea en la ventana que aparece.
>>
>> ![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}
>>
>> |Opción|Descripción|
>> |---|---|
>> |Orden a ejecutar|Establezca la ruta al archivo que contiene el script. Ejemplo: www/jobs/cron.php|
>> |Idioma|Seleccione la versión PHP del script.|
>> |Activación|Seleccione si la tarea se activará después de crearla o se activará más adelante.|
>> |Logs por e-mail|Si es necesario, seleccione un contacto (administrador o técnico) al que se enviará un informe en caso de error de ejecución. También puede proporcionar otra dirección de correo electrónico.|
>> |Descripción|Introduzca una descripción para consultar el progreso en la ejecución de sus tareas.|
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Etapa 4**
>>
>> La interfaz ofrece dos modos para configurar la frecuencia de la tarea:
>>
>> - **Modo simple**: utilice los menús desplegables para especificar la hora, los días de un mes, los días de la semana y los meses de la tarea.
>> - **Modo experto**: introduzca valores numéricos como en una *crontab*.
>>
>> |Modo simple|Modo experto|
>> |---|---|
>> |Utilice los menús desplegables para especificar la hora, los días de un mes, los días de la semana y los meses de la tarea.|Introduzca valores numéricos como en una *crontab*. Los asteriscos indican cada valor del período, lo que significa que la tarea se ejecutaría continuamente **una vez por hora todos los días** en este ejemplo.|
>> |![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|
>>
>> > [!primary]
>> >
>> > El formulario `Días`{.action} permite definir frecuencias de ejecución en un ciclo mensual.
>> >
>> > El formulario `Días de la semana`{.action} permite definir frecuencias de ejecución adicionales, pero en un ciclo semanal.
>>
>> Puede cambiar entre ambos modos durante la configuración. Asimismo, tenga en cuenta las [limitaciones al planificar una tarea en un alojamiento web](./#limitaciones-de-las-tareas-planificadas-en-su-alojamiento-web).
>>
>> Haga clic en `Siguiente`{.action}.
>>
> **Etapa 5**
>>
>> El resumen le recuerda los parámetros configurados, incluyendo la notación *crontab* sobre la frecuencia de ejecución. Si todo es correcto, haga clic en `Aceptar`{.action}.
>>
>> ![cron confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}
>>
>> La tarea estará lista en unos minutos. Podrá modificar todos los parámetros o eliminar la tarea haciendo clic en `...`{.action} en la tabla de presentación del panel de configuración de OVHcloud.
<!-- CP-STEPS-END:create-cron-task -->


### Modificar o eliminar una tarea programada

<!-- CP-STEPS-START:modify-delete-cron-task -->

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Más`{.action} y seleccione `Cron`{.action}.
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `...`{.action} situado a la derecha de la tarea planificada correspondiente.
>>
>> Elija entre los botones `Editar`{.action} o `Eliminar`{.action} en función de la acción que desee realizar en la tarea programada.
<!-- CP-STEPS-END:modify-delete-cron-task -->


### Limitaciones de las tareas planificadas en su alojamiento web

|Funcionalidad|Descripción|
|---|---|
|Planificación horaria|Se dará cuenta de que el campo "Minutos" está desactivado en la interfaz (definido por "? " en la vista *crontab*). Una tarea sólo puede ejecutarse una vez por hora, es la frecuencia de repetición más baja que se puede especificar.|
|Duración|La duración de ejecución de una tarea es de 60 minutos. Si un script supera la duración de ejecución, el sistema lo detendrá automáticamente.|
|Variables|Sólo puede definir variables en un script. Añadirlos a la URL que llama al script no funcionará (Ejemplo: www/jobs/cron.php?variable=value).|
|Límite de datos|Una tarea solo puede generar 5 MB de datos (*stdin/stderr*). Por ejemplo, si un script escribe datos en un archivo .txt, la ejecución se detiene automáticamente cuando el archivo alcanza los 5 MB.|
|Guiones que producen errores|Si un script tiene errores, se desactivará automáticamente después de 10 intentos fallidos de ejecución. El informe de error no se enviará hasta que los 10 intentos hayan fallado.<br>Corrija su script en función del informe de error recibido y vuelva a activar la "tarea CRON" en el panel de control (haga clic en `...`{.action} y luego en `Editar`{.action}).|
|Informes de ejecución|Los informes sólo se enviarán a la dirección de correo electrónico seleccionada una vez al día (durante las horas de la noche).|

### Reparación

#### Prueba de su script con un navegador web

Una prueba sencilla de si el script producirá un error es ejecutarlo en un navegador web. Por ejemplo, si la ruta de acceso a su script es "www/cron.php" y su dominio es "mypersonaldomain.ovh", debe utilizar la URL "http://<i></i>mypersonaldomain.ovh/cron.php". Si no aparece ningún error, pero el script no funciona como estaba previsto, siga las indicaciones de abajo.

#### Comprobación del uso de rutas absolutas

Utilice siempre rutas de acceso absolutas a los archivos de sus scripts. La constante "DIR", por ejemplo, puede ayudar a obtener la ruta actual en los scripts PHP ([documentación PHP](https://www.php.net/manual/en/language.constants.predefined.php)).

#### Verificación de los logs de ejecución

Podrá acceder a los logs de su alojamiento web desde su [área de cliente de OVHcloud](/links/manager) y ver la categoría de log denominada "CRON".

Para más información, consulte nuestra guía ["Consultar las estadísticas y los logs de un sitio web alojado en un plan compartido"](/pages/web_cloud/web_hosting/logs_and_statistics).

##### **Ejemplo de logs**

- Ejemplo de finalización de script correctamente ejecutado

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2026-03-30 00:36:01]
[2026-03-30 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Ejemplo de fallo al superar el tiempo de ejecución

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2026-03-30 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2026-03-30 01:36:01] ## OVH ## END - 2026-03-30 01:36:01.086166 exitcode: 0
</code></pre>

- Ejemplo de error: no se puede encontrar el archivo de guión en la ruta de acceso especificada

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2026-03-30 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2026-03-30 00:36:01] ## OVH ## END - 2026-03-30 00:36:01.086166 exitcode: 255
</code></pre>

- Ejemplo de error debido a un error de autorización (chmod) o a una configuración incorrecta del archivo .ovhconfig

<pre class="bgwhite"><code>
[2026-03-30 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2026-03-30 18:07:10]
[2026-03-30 18:07:10] ## OVH ## END - 2026-03-30 18:07:10.969840 exitcode: 255
</code></pre>

## Más información <a name="go-further"></a>

[Configurar el archivo .ovhconfig de un alojamiento web](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Utilizar el acceso SSH de un alojamiento web](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).