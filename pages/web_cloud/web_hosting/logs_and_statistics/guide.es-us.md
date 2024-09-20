---
title: "Web hosting - Consultar las estadísticas y logs de un sitio web"
excerpt: "Descubra cómo consultar las estadísticas y los logs de un sitio web en un plan de hosting"
updated: 2024-02-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
> 

## Objetivo

El acceso a los logs y a las estadísticas de su sitio web está incluido en su plan de hosting, al que podrá acceder a través de su área de cliente de OVHcloud.

**Descubra cómo consultar las estadísticas y los logs de un sitio web en un plan de hosting.**

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting){.external} compatible.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.

## Procedimiento

Para acceder a los diferentes datos estadísticos y logs de su alojamiento web, lleve a cabo las siguientes acciones: 

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action}.

Se abrirá una pantalla que consta de 4 secciones:

- [Estadísticas de visitas](#website-stats): presenta numerosas estadísticas relativas a su alojamiento web.
- [Logs del sitio web](#website-logs): muestra los logs en bruto de su alojamiento web.
- [Estadísticas de la infraestructura](#infra-stats): presenta estadísticas gráficas (peticiones HTTP y SQL, comandos FTP, uso de CPU, conexiones salientes, etc.)
- [Administración de los usuarios](#admin-user): muestra los usuarios autorizados a acceder a las estadísticas

![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

### Estadísticas de visitas <a name="website-stats"></a>

Para realizar un mejor seguimiento y controlar el tráfico de sus sitios web, puede utilizar **OVHcloud Web Statistics**, una herramienta de estadísticas de visitas y de medición de audiencia de sus sitios web alojados en su plan de hosting.

![ows dashboard](/pages/assets/screens/other/web-tools/logs/ows-presentation.gif){.thumbnail}

El panel de control de **OVHcloud Web Statistics** incluye 7 secciones:

- **Dashboard**: visualización del tráfico en los sitios web de su alojamiento web.
- **Browsers**: clasificación de los navegadores web más utilizados para consultar sus sitios web.
- **Geolocalization**: proporción de visitantes en función de su localización.
- **Requests**: clasificación de las páginas más consultadas en sus sitios web.
- **Robots**: visualización de los robots que pasan por sus sitios web.
- **Status**: estadísticas de fallos y éxitos encontrados en función de los códigos HTTP devueltos.
- **FAQ**: sección dedicada a las preguntas más frecuentes. También explica los términos técnicos que puede encontrar en la herramienta.

El campo `Period selection` situado en la parte superior derecha permite seleccionar un período de tiempo específico.

### Logs del sitio web <a name="website-logs"></a>

> [primary]
>
> No podremos asesorarle sobre la interpretación de los logs de su alojamiento web, ya que solo es cuestión de desarrollo web y no de alojamiento web.
>
> No dude en contactar con un [proveedor especializado](/links/partner) si tiene alguna duda.
>

Puede visualizar los logs en bruto de su sitio web con un retraso de aproximadamente 5 minutos.

![osl statistiques dashboard](/pages/assets/screens/other/web-tools/logs/osl-statistics-board.png){.thumbnail}

Los diferentes tipos de logs están a su disposición:

- **Logs Web**: contienen los diferentes logs de consulta de su sitio web, así como las diferentes acciones realizadas desde su sitio web. Esto le permite, por ejemplo, detectar intentos de acciones maliciosas.
- **Logs FTP**: las diferentes conexiones/comandos FTP se registrarán y conservarán en estos logs.
- **Logs error** : consulte aquí los diferentes errores generados por su sitio web.
- **Logs CGI**: las diferentes llamadas a los scripts cgi.bin que se han realizado se registran en estos logs.
- **Logs out**: contienen el historial de las diferentes peticiones externas (conexiones salientes TCP) realizadas desde su alojamiento web hacia infraestructuras remotas.
- **Logs SSH** : Estos logs indican las diferentes conexiones/comandos realizados con el protocolo SSH.
- **Logs CRON**: consulte aquí los resultados de la ejecución de sus tareas planificadas [(CRON)](/pages/web_cloud/web_hosting/cron_tasks) en su alojamiento web.

### Estadísticas de la infraestructura <a name="infra-stats"></a>

En esta sección podrá consultar la actividad de la infraestructura de su alojamiento web para visualizar el consumo de los recursos puestos a su disposición.

![infrastructure statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

Puede ver diferentes tipos de gráficos en el menú desplegable de la parte superior izquierda:

- **Comandos FTP**: indica los comandos principales (upload, download, login, delete) realizados utilizando el protocolo FTP en su alojamiento web.
- **Peticiones HTTP**: indica el número y el código de retorno de las solicitudes HTTP ejecutadas en su alojamiento web. Todo ello distinguiendo entre los distintos códigos HTTP (2xx/3xx, 4xx y 5xx). Si lo necesita, puede consultar la lista de códigos HTTP y su significado realizando directamente una búsqueda a través de un motor de búsqueda (Google, Yahoo!, bing, etc.).
- **Conexiones salientes**: peticiones enviadas desde su sitio web hacia un sitio web externo.
- **Uso de la CPU**: nivel de consumo del procesador en su instancia de alojamiento web.
- **Superación del límite de recursos**: indica los momentos en los que el alojamiento web supera el límite de recursos.
- **Consultas SQL** : cantidad de consultas a las bases de datos de su alojamiento web.
- **Tiempo de respuesta SQL** : Tiempo de respuesta de las consultas enviadas a las bases de datos de su alojamiento web.

### Administración de los usuarios <a name="admin-user"></a>

La creación de un usuario permitirá a una persona acceder a las estadísticas de su alojamiento web sin tener acceso al área de cliente de OVHcloud.

En la sección `Administración de los usuarios`{.action}, haga clic en `Crear un nuevo usuario`{.action} y siga las instrucciones para terminar de crear un nuevo usuario.

![create a new user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}

Para acceder a las estadísticas de su sitio web con un usuario que haya creado, debe introducir la siguiente dirección sustituyendo `000` por el número de cluster de su alojamiento web y `domain.tld` por el nombre de dominio de su sitio web (sin los `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

También puede consultar el enlace de acceso a las estadísticas / logs directamente desde su área de cliente:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action}.
6. Acceda a la sección `Estadísticas de visitas`{.action}.
7. Pulse el botón `Ver las estadísticas`{.action}.

![website visit statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}

En la nueva página, consulte la dirección URL de su navegador de internet.

> [!warning]
>
> Si ha activado los logs separados en una [entrada multisitio](/pages/web_cloud/web_hosting/multisites_configure_multisite), los usuarios creados aquí no podrán acceder a las estadísticas de esa entrada multisitio específica.
>

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).