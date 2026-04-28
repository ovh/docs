---
title: "Web hosting - Consultar las estadísticas y logs de un sitio web"
excerpt: "Descubra cómo consultar las estadísticas y los logs de un sitio web en un plan de hosting"
updated: 2026-04-01
---

## Objetivo

El acceso a los logs y a las estadísticas de su sitio web está incluido en su plan de hosting, al que podrá acceder a través de su área de cliente de OVHcloud.

**Descubra cómo consultar las estadísticas y los logs de un sitio web en un plan de hosting.**

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting) compatible.
<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

<!-- CP-STEPS-START:access-stats-and-logs -->
Para acceder a los diferentes datos estadísticos y logs de su alojamiento web, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y elija el alojamiento web correspondiente.
>>
>> ![Selección de un alojamiento web en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action}.
>>
>> ![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Se abrirá una pantalla que consta de 4 secciones:
>>
>> - [Estadísticas de visitas](#website-stats): Presenta numerosas estadísticas relativas a su alojamiento web.
>> - [Logs del sitio web](#website-logs): Muestra los logs en bruto de su alojamiento web.
>> - [Estadísticas de la infraestructura](#infra-stats): Presenta estadísticas gráficas (peticiones HTTP y SQL, comandos FTP, uso de CPU, conexiones salientes, etc.).
>> - [Administración de los usuarios](#admin-user): Muestra los usuarios autorizados a acceder a las estadísticas.
>>
>> ![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}
<!-- CP-STEPS-END:access-stats-and-logs -->

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

> [!primary]
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

> [!success]
>
> Para consultar las estadísticas y/o los logs de la CDN, consulte nuestra guía dedicada: "[Web hosting - Consultar estadísticas y logs CDN](/pages/web_cloud/web_hosting/cdn_statistics_and_logs)".

### Estadísticas de la infraestructura <a name="infra-stats"></a>

En esta sección podrá consultar la actividad de la infraestructura de su alojamiento web para visualizar el consumo de los recursos puestos a su disposición.
<!-- CP-STEPS-START:view-infra-stats -->
Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y elija el alojamiento web correspondiente.
>>
>> ![Selección de un alojamiento web en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action} y acceda a la sección **Estadísticas de la infraestructura**.
>>
> **Etapa 3**
>>
>> Puede ver diferentes tipos de gráficos en el menú desplegable de la parte superior izquierda:
>>
>> ![Estadísticas de la infraestructura del alojamiento web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}
>>
>> - **Comandos FTP**: indica los comandos principales (upload, download, login, delete) realizados utilizando el protocolo FTP en su alojamiento web.
>> - **Peticiones HTTP**: indica el número y el código de retorno de las solicitudes HTTP ejecutadas en su alojamiento web, distinguiendo entre los distintos códigos HTTP (2xx/3xx, 4xx y 5xx).
>> - **Conexiones salientes**: peticiones enviadas desde su sitio web hacia un sitio web externo.
>> - **Uso de la CPU**: nivel de consumo del procesador en su instancia de alojamiento web.
>> - **Superación del límite de recursos**: indica los momentos en los que el alojamiento web supera el límite de recursos.
>> - **Consultas SQL**: cantidad de consultas a las bases de datos de su alojamiento web.
>> - **Tiempo de respuesta SQL**: tiempo de respuesta de las consultas enviadas a las bases de datos de su alojamiento web.
<!-- CP-STEPS-END:view-infra-stats -->

### Administración de los usuarios <a name="admin-user"></a>

La creación de un usuario permitirá a una persona acceder a las estadísticas de su alojamiento web sin tener acceso al área de cliente de OVHcloud.

<!-- CP-STEPS-START:create-stats-user -->
Para crear un nuevo usuario, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y elija el alojamiento web correspondiente.
>>
>> ![Selección de un alojamiento web en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action} y acceda a la sección **Administración de los usuarios**.
>>
> **Etapa 3**
>>
>> Haga clic en `Crear un nuevo usuario`{.action} y siga las instrucciones para finalizar la creación.
>>
>> ![Creación de un nuevo usuario para las estadísticas](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}
<!-- CP-STEPS-END:create-stats-user -->

Para acceder a las estadísticas de su sitio web con un usuario que haya creado, debe introducir la siguiente dirección sustituyendo `000` por el número de cluster de su alojamiento web y `domain.tld` por el nombre de dominio de su sitio web (sin los `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

También puede consultar el enlace de acceso a las estadísticas / logs directamente desde su área de cliente.
<!-- CP-STEPS-START:retrieve-stats-link -->
Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y elija el alojamiento web correspondiente.
>>
>> ![Selección de un alojamiento web en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action} y acceda a la sección **Estadísticas de visitas**.
>>
> **Etapa 3**
>>
>> Pulse el botón `Ver las estadísticas`{.action}.
>>
>> ![Estadísticas de visitas del sitio web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}
>>
>> En la nueva página, consulte la dirección URL de su navegador de internet.
<!-- CP-STEPS-END:retrieve-stats-link -->

> [!warning]
>
> Si ha activado los logs separados en uno de sus [sitios web](/pages/web_cloud/web_hosting/multisites_configure_multisite), los usuarios creados aquí no podrán acceder a las estadísticas de ese sitio web específico.

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
