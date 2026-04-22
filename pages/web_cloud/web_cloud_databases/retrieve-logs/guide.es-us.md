---
title: 'Web Cloud Databases - ¿Cómo gestionar los logs?'
excerpt: 'Descubra cómo gestionar los logs de las bases de datos alojadas en un servidor Web Cloud Databases'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Un log corresponde a un evento ocurrido en un sistema informático (servidor, ordenador, aplicación, sitio web, base de datos, red informática, etc.).
Por ejemplo, un log puede registrar y contener uno o varios de los siguientes elementos:

- La marca de tiempo (fecha, hora, minuto, segundo, etc.) del evento.
- La naturaleza del evento (conexión, desconexión, error, descarga, carga, alerta, etc.).
- Información adicional sobre el evento (página o archivo consultado, aplicación iniciada, servidor remoto contactado, nombre del archivo cargado o descargado, etc.)
- El origen del evento (identificador de usuario, dirección IP de origen, programa de origen, etc.).
- El estado del sistema donde se produce el evento (recursos disponibles, memoria restante, uso de la CPU, etc.).

La mayoría de las veces, los logs se generan directamente en los sistemas informáticos donde se producen los eventos.
Se almacenan en archivos de texto, también denominados archivos de logs.

Los archivos de logs permiten realizar las siguientes acciones:

- Analizar el comportamiento del sistema informático que genera los logs.
- Identificar los errores ocurridos en el sistema informático.
- Resolver los errores encontrados en el sistema informático.
- Optimizar y mejorar el rendimiento del sistema informático.

Su solución [Web Cloud Databases](/links/web/databases) genera sus propios logs.

En determinadas situaciones, puede necesitar consultar o recuperar los logs:

- De su servidor Web Cloud Databases.
- De una de las bases de datos alojadas en su servidor Web Cloud Databases.

**Descubra cómo visualizar y gestionar los logs de su solución Web Cloud Databases.**

## Requisitos

- Disponer de una [instancia Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ruta de navegación:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleccione su servicio de base de datos

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedimiento

> [!warning]
>
> Le ofrecemos este tutorial para ayudarle en las tareas más habituales. No obstante, le recomendamos que contacte con un [proveedor especializado](/links/partner) si tiene dificultades. No podremos asistirle en la interpretación de los logs disponibles con su solución Web Cloud Databases. Más información en la sección [Más información](#go-further) de esta guía.
>

### Visualizar los logs en tiempo real de su Web Cloud Databases

<!-- CP-STEPS-START:view-realtime-logs -->
Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Logs`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}
>>
>> En esta consola integrada encontrará, en tiempo real, los logs de su solución Web Cloud Databases.
>>
>> > [!primary]
>> >
>> > Los logs solo están disponibles aquí en tiempo real. Solo aparecerán si se generan mientras se encuentra en la pestaña `Logs`{.action}.
>> >
>> > Si abandona la pestaña `Logs`{.action} y vuelve a ella más tarde, el historial que se mostraba anteriormente habrá desaparecido.
<!-- CP-STEPS-END:view-realtime-logs -->

### Recuperar el historial de logs de su solución Web Cloud Databases

Para recuperar el historial de logs de su solución Web Cloud Databases, debe conectarse por SFTP.

> [!warning]
>
> Antes de conectarse, compruebe que la dirección IP pública del equipo que utiliza está autorizada en su servidor Web Cloud Databases con la opción `SFTP` activada.
>
> Para comprobarlo, obtenga la dirección IP pública de su punto de acceso a internet y consulte el apartado **Autorizar una dirección IP** de [esta guía](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

<!-- CP-STEPS-START:retrieve-sftp-connection-details -->
Para obtener la información de conexión SFTP de su solución Web Cloud Databases, haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Información general`{.action}, localice el recuadro **Información de conexión**. Debajo de la mención `SFTP`{.action}, encontrará los datos necesarios para conectarse por SFTP.
>>
>> > [!primary]
>> >
>> > Si no conoce la `Contraseña del servidor`, haga clic en el botón `...`{.action} situado a la derecha para modificarla.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}
<!-- CP-STEPS-END:retrieve-sftp-connection-details -->

Una vez obtenidas las credenciales de conexión SFTP, conéctese a través de un cliente FTP (FileZilla, Cyberduck, WinSCP, etc.).

En FileZilla, acceda al menú `Archivo`{.action} en la parte superior izquierda y haga clic en `Gestor de sitios`{.action}.

Haga clic en `Nuevo sitio`{.action} e introduzca los parámetros obtenidos anteriormente.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

El archivo de logs, denominado `stdout.log`, se encuentra en la raíz.

Descárguelo en su equipo para consultarlo.

> [!primary]
>
> Un archivo de logs adicional denominado `slow-query.log` puede aparecer en la raíz SFTP de su servidor Web Cloud Databases.
> Este archivo contiene el historial de las consultas lentas ejecutadas en su servidor Web Cloud Databases.
>
> Por defecto, el valor se establece en 1 segundo en las soluciones Web Cloud Databases en la variable **long_query_time**.
>
> Gracias a este archivo, podrá optimizar sus scripts y el contenido de su(s) base(s) de datos para mejorar el rendimiento de sus diferentes servicios asociados.
>

### Suscribir los logs de su solución Web Cloud Databases a Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) es una plataforma de gestión de logs. Facilita la agregación y gestión de logs, especialmente para infraestructuras que generan un gran volumen de logs.

Funciona recuperando los logs generados por su infraestructura, sitios web o aplicaciones, por ejemplo:

- para almacenarlos;
- para mostrarlos en paneles de control en tiempo real;
- para permitir a los usuarios realizar consultas complejas;
- para filtrarlos por fecha, aplicación, tipo o contenido.

Para más información sobre Logs Data Platform, consulte nuestra guía de [Introducción a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Dado que las soluciones [Web Cloud Databases](/links/web/databases) pueden utilizarse con numerosos servicios (alojamientos compartidos, VPS, servidores dedicados, etc.), estas pueden, además de los logs en tiempo real ya disponibles, suscribirse por flujo de datos a Logs Data Platform.

Para suscribir su solución Web Cloud Databases a un flujo de datos en Logs Data Platform, pueden darse dos situaciones.

**Haga clic en cada caso para ver el contenido.**

<a name="wcdb-ldp-case1"></a>

<!-- CP-STEPS-START:ldp-subscribe-existing-stream -->
/// details | Caso 1 - Suscribirse a un flujo de datos existente en su solución Logs Data Platform

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Logs`{.action} y, a continuación, en el botón `Suscribirse`{.action} situado a la derecha del recuadro de logs en tiempo real.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Si dispone de varias soluciones Logs Data Platform, seleccione la referencia deseada en la lista desplegable situada debajo del botón `Añadir un flujo de datos`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Etapa 4**
>>
>> El flujo existente aparece en la tabla de la parte inferior de la página. Haga clic en el botón `Suscribirse`{.action} situado a la derecha de la fila correspondiente.
>>
>> Al cabo de unos segundos, un mensaje confirma que la suscripción se ha creado correctamente.

///
<!-- CP-STEPS-END:ldp-subscribe-existing-stream -->

<!-- CP-STEPS-START:ldp-subscribe-new-stream -->
/// details | Caso 2 - Suscribirse a un nuevo flujo de datos en su solución Logs Data Platform

Haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Logs`{.action} y, a continuación, en el botón `Suscribirse`{.action} situado a la derecha del recuadro de logs en tiempo real.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Si dispone de varias soluciones Logs Data Platform, seleccione la referencia deseada en la lista desplegable situada debajo del botón `Añadir un flujo de datos`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Dado que el flujo de datos aún no existe, haga clic en el botón `Añadir un flujo de datos`{.action}. Será redirigido a una página que le permitirá crear un nuevo flujo de datos en su solución Logs Data Platform.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}
>>
>> Si lo necesita, consulte nuestras guías "[Introducción a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) e "[Inicio rápido con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN).
>>
> **Etapa 5**
>>
>> Una vez completados los formularios, haga clic en `Guardar`{.action}. Será redirigido a la pestaña `Flujo de datos` de su solución Logs Data Platform.
>>
>> Para suscribir su solución Web Cloud Databases a este nuevo flujo, vuelva a la pestaña `Logs`{.action} de su solución Web Cloud Databases y siga el [Caso 1](#wcdb-ldp-case1) descrito anteriormente.

///
<!-- CP-STEPS-END:ldp-subscribe-new-stream -->

## Más información <a name="go-further"></a>

[Primeros pasos con su Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introducción a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Inicio rápido con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

Para servicios especializados (posicionamiento en buscadores, desarrollo web, etc.), contacte con los [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).
