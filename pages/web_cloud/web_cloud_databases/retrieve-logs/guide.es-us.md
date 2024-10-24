---
title: 'Web Cloud Databases - ¿Cómo recuperar los logs?'
excerpt: 'Descubra cómo recuperar los logs de las bases de datos alojadas en un servidor Web Cloud Databases'
updated: 2024-10-24
---

> [!primary]
>
> **Esta guía se está actualizando. Algunos datos podrían estar incompletos o desactualizados. Gracias por su comprensión.**

## Objetivo

La solución [Web Cloud Databases](/links/web/databases) permite alojar varias bases de datos. En determinadas situaciones, es posible que necesite consultar o recuperar los logs:

- del servidor Web Cloud Databases;
- para una de las bases de datos alojadas en su servidor Web Cloud Databases.

**Descubra cómo recuperar los logs de las bases de datos alojadas en un servidor Web Cloud Databases**

## Requisitos

- Disponer de una solución [Web Cloud Databases](/links/web/databases) (incluida o no en un [plan de hosting Performance](/links/web/hosting)).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager){.external}.

## Procedimiento

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Este tutorial le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). OVHcloud no podrá ayudarle a interpretar los logs disponibles con su solución Web Cloud Databases. Para más información, consulte el apartado "[Más información](#go-further)" de este tutorial.
>

### Consultar los logs de su solución Web Cloud Databases en tiempo real

Para verificar los logs de su solución Web Cloud Databases en tiempo real, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Web Cloud Databases`{.action}.
4. Seleccione la solución Web Cloud Databases correspondiente.
5. A continuación, haga clic en la pestaña `Logs`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-with-logs.png){.thumbnail}

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
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Web Cloud Databases`{.action}.
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

## Más información <a name="go-further"></a>

[Primeros pasos con su Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).