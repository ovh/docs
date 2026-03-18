---
title: 'Web Cloud Databases - ¿Cómo gestionar los logs?'
excerpt: 'Descubra cómo gestionar los logs de las bases de datos alojadas en un servidor Web Cloud Databases'
updated: 2025-02-20
---

## Objetivo

Un log corresponde a un evento producido en un sistema informático (servidor, ordenador, aplicación, sitio web, base de datos, red informática, etc.).
Por ejemplo, un log puede registrar y contener uno o varios de los siguientes elementos:

- La marca de tiempo (fecha, hora, minuto, segundo, etc.) del evento.
- La naturaleza del evento (conexión, desconexión, error, descarga, subida, alerta, etc.).
- Información adicional sobre el evento (página o archivo consultado, aplicación iniciada, servidor remoto llamado, nombre de un archivo cargado o descargado, etc.)
- Origen del evento (identificador del usuario, dirección IP de origen, programa de origen, etc.).
- El estado del sistema en el que se produce el evento (recursos disponibles, memoria restante, uso de la CPU, etc.).

En la mayoría de los casos, los logs son generados directamente por los sistemas informáticos en los que se producen los eventos.
Estos archivos se almacenan y almacenan en archivos de texto, también denominados archivos de logs.

Por este motivo, los archivos de logs permiten realizar las siguientes acciones:

- Analizar el comportamiento del sistema informático que genera los logs.
- Identificar los errores en el sistema informático.
- Resolver errores del sistema informático.
- Optimizar y mejorar el rendimiento del sistema informático.

Su solución [Web Cloud Databases](/links/web/databases) genera sus propios logs.

En determinadas situaciones, es posible que necesite consultar o recuperar los logs:

- del servidor Web Cloud Databases;
- para una de las bases de datos alojadas en su servidor Web Cloud Databases.

**Descubra cómo visualizar y gestionar los logs de su solución Web Cloud Databases.**

## Requisitos

- Disponer de una solución [Web Cloud Databases](/links/web/databases).

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
> Este tutorial le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). OVHcloud no podrá ayudarle a interpretar los logs disponibles con su solución Web Cloud Databases. Para más información, consulte el apartado "[Más información](#go-further)" de este tutorial.
>

### Visualizar los logs en tiempo real de su Web Cloud Databases

Para verificar los logs de su solución Web Cloud Databases en tiempo real, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú `Web Cloud Databases`{.action}.
4. Seleccione la instancia Web Cloud Databases correspondiente.
5. A continuación, haga clic en la pestaña `Logs`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}

En esta consola integrada podrá encontrar en tiempo real los logs de su solución Web Cloud Databases.

> [!primary]
>
> Como ya hemos indicado, los logs solo están disponibles aquí en tiempo real. Esto significa que estos logs solo aparecerán si se generan en el momento en que usted se encuentra en la pestaña `Logs`{.action}. 
>
> Si sales de la pestaña `Logs`{.action} y vuelves a ella más tarde, el historial que se mostraba anteriormente desaparecerá.
>

### Obtener el historial de los logs de su solución Web Cloud Databases

Para consultar el historial de los logs de su solución Web Cloud Databases, deberá conectarse por SFTP.

> [!warning]
>
> Antes de conectarse, compruebe que la dirección IP pública del equipo que utiliza está autorizada en su servidor Web Cloud Databases, con la opción "`SFTP" marcada.
>
> Para comprobarlo, consulte el apartado **Autorizar una dirección IP** de [esta guía](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Para consultar la información de conexión SFTP a su solución Web Cloud Databases, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú `Web Cloud Databases`{.action}.
4. Seleccione la solución Web Cloud Databases correspondiente.
5. En la nueva página, abra la pestaña `Información general`{.action} y sitúese en el recuadro titulado `Datos de conexión`{.action}.
6. A continuación de la mención `SFTP`{.action}, encontrará toda la información necesaria para conectarse por SFTP.

> [!primary]
>
> Si no conoce la `Contraseña del servidor`{.action}, haga clic en el botón `...`{.action} a la derecha para modificarla.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Una vez que haya obtenido las claves de conexión SFTP, conéctese a través de un cliente FTP (FileZilla, Cyberduck, WinSCP, etc.).

Para FileZilla, acceda a la parte superior izquierda del menú `File`{.action} y haga clic en `Site Manager`{.action}.

Haga clic en `New site`{.action} y, a continuación, introduzca los parámetros que se han indicado anteriormente.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

El archivo de logs, denominado `stdout.log`, se encuentra en la raíz.

Puede descargarlo en su equipo para consultarlo.

> [!primary]
>
> En la raíz SFTP de su servidor Web Cloud Databases puede aparecer un archivo adicional de logs denominado `slow-query.log`.
> Este archivo contiene el historial de las consultas lentas que se han ejecutado en el servidor Web Cloud Databases. 
> 
> Por defecto, el valor se establece en 1 segundo en las soluciones Web Cloud Databases en la variable **long_query_time**.
> 
> Gracias a este archivo, podrá optimizar sus scripts y el contenido de sus bases de datos para mejorar el rendimiento de los distintos servicios asociados.
>

### Suscribir los logs de su solución Web Cloud Databases a Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) es una plataforma que permite gestionar sus logs. Puede serle útil si dispone de una infraestructura muy grande o si sus servicios generan un gran número de logs. Esta plataforma está diseñada para facilitar la agregación y la gestión de los logs.

Esta solución utiliza los logs generados por su infraestructura o sus sitios web, o sus aplicaciones, para, por ejemplo:

- almacenarlos;
- mostrarlos en paneles de control en tiempo real;
- permitir a los usuarios realizar consultas complejas;
- filtrarlos por fecha, aplicación, tipo o contenido;

Para más información sobre Logs Data Platform, consulte nuestra guía de [Introducción a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Dado que las soluciones [Web Cloud Databases](/links/web/databases) pueden utilizarse con numerosos servicios (alojamiento compartido, VPS, servidores dedicados, etc.), estos pueden, como complemento de los logs en tiempo real ya disponibles, ser abonados a Logs Data Platform mediante un flujo de datos.

Para suscribir su solución Web Cloud Databases a un flujo de datos en Logs Data Platform, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú `Web Cloud Databases`{.action}.
4. Seleccione la instancia Web Cloud Databases correspondiente.
5. A continuación, haga clic en la pestaña `Logs`{.action}.
6. A la derecha del recuadro en el que aparecen sus logs en tiempo real, haga clic en el botón `Suscribirse`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}

En la nueva página que se abre, si dispone de varias soluciones Logs Data Platform en su [área de cliente de OVHcloud](/links/manager), seleccione la referencia de la Logs Data Platform con la que desea suscribirse en la lista desplegable que aparece justo debajo del botón titulado `Añadir un flujo de datos`.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}

Existen dos situaciones para suscribirse a su solución Web Cloud Databases.

#### Caso 1 - Suscribirse a un flujo ya existente en su solución Logs Data Platform <a name="wcdb-ldp-case1"></a>

Si el flujo correspondiente ya existe, aparecerá en forma de fila en la tabla de la parte inferior de la página.
En este caso, para suscribir su solución Web Cloud Databases a este flujo existente, solo tiene que hacer clic en el botón `Suscribirse`{.action} situado a la derecha de la línea correspondiente al flujo en cuestión.

Después de unos segundos, si permanece en la misma página, aparecerá un mensaje en el área de cliente informándole de que la suscripción se ha creado correctamente.

#### Caso 2 - Suscribirse a un nuevo flujo de datos en su solución Logs Data Platform

Si el flujo en cuestión aún no existe, haga clic en el botón `Añadir un flujo de datos`{.action}.
A continuación, el sistema le redirigirá a una nueva página del área de cliente de OVHcloud, donde podrá crear y añadir un nuevo flujo de datos en su solución Logs Data Platform.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}

Si lo necesita, consulte nuestras guías "[Introducción a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) y "[Inicio rápido con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN) para realizar estas acciones.

Una vez introducidos los distintos formularios e información, haga clic en el botón `Guardar`{.action}.

A continuación, abra la pestaña `Flujos de datos`{.action} de su solución Logs Data Platform.

Por último, suscríbase a su solución Web Cloud Databases para recibir el feed de su solución Logs Data Platform.

#wcdb-ldp Para ello, vuelva a la pestaña `Logs`{.action} de su solución Web Cloud Databases y siga el [Caso nº 1](#wcdb-ldp-case1) descrito anteriormente para suscribirse a este nuevo flujo de datos.

## Más información <a name="go-further"></a>

[Primeros pasos con su Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Introducción a Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Inicio rápido con Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).