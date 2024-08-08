---
title: 'Optimizar el rendimiento de su sitio web'
excerpt: 'Descubra cómo analizar la latencia de su sitio web y cómo mejorarla'
updated: 2024-01-08
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Esta guía ha sido creada para aquellos clientes que deseen mejorar el rendimiento de su sitio web.
Esta guía le ayudará a obtener un entendimiento básico de los puntos que pueden afectar al rendimiento de los sitios web.

**Descubra cómo mejorar el rendimiento de su sitio web.**

## Requisitos

- Un [plan de hospedaje web de OVHcloud](/links/web/hosting){.external}
- Un mensaje de correo electrónico que confirme que su plan de hospedaje web ha sido contratado
- Un [nombre de dominio](/links/web/domains){.external} que pueda utilizarse para acceder a su sitio web
- Haber iniciado sesión en el [área de cliente de OVHcloud para tener acceso al panel de control](/links/manager){.external}

## Procedimiento

### Paso 1: definir el alcance

#### Preguntas que debe hacerse a sí mismo:

Si el sitio web se carga lentamente, sería de utilidad que se hiciera las siguientes preguntas para ayudar a reducir el ámbito de la investigación.

1. **¿Cuándo empezó a cargarse lentamente el sitio web?**

De esta forma, puede identificar si la latencia es debida a una modificación reciente del sitio web, como un nuevo complemento mal optimizado o un nuevo tema que envía un gran número de consultas salientes y lentifica su sitio web.

2. **¿Es un hecho aislado o la baja velocidad de carga es permanente?**

Podría ser útil comprobar a qué horas del día el sitio web va lento y, a continuación, identificar si la causa se debe a un pico en el tráfico o a si han empezado a ejecutarse otras tareas en el paquete de hospedaje al mismo tiempo.

3. **¿Afecta a todo el sitio web o solo a una parte?**

Si solo está afectada una página y no todo el sitio web, sería conveniente analizar dicha página en particular y comprobar que consulta o secuencia de comandos podría estar causando la latencia.

4. **¿La página genera algún error? Si es así, ¿de qué tipo?**

Compruebe si se generan errores para identificar la causa de la latencia. Para obtener una visión más completa de los errores que se producen en su hospedaje, consulte los registros.

Responder a estas preguntas puede ayudarle a centrarse en puntos concretos y áreas de diagnóstico susceptibles de mejoras.

El uso de un sistema de gestión de contenidos (CMS) como WordPress, PrestaShop, Drupal o Joomla! necesita muchas librerías, por lo que una única página web puede involucrar una gran cantidad de elementos.
Los navegadores de internet deben cargar y leer todos esos elementos.
Proporcionamos recomendaciones sobre qué oferta de hospedaje web utilizar para los sistemas de gestión de contenidos antes mencionados en [la página del producto](/links/web/hosting){.external}.

Puede encontrar más información sobre qué plan elegir en [esta página](/links/web/hosting-best-web){.external}.

### Paso 2: comprobar la versión del lenguaje PHP

Utilizar la última versión compatible del lenguaje PHP en su sitio puede tener un efecto significativo en el rendimiento.
Para comprobar si su sitio web es compatible con la última versión del lenguaje PHP, puede consultar [la documentación oficial del PHP](https://php.net/eol.php){.external}.

**PHP-FPM**

Hemos adaptado PHP-FPM a nuestra infraestructura web para acelerar las respuestas del lenguaje PHP y reducir drásticamente la carga de la CPU.
Las pruebas han demostrado un funcionamiento hasta **7 veces más rápido** en comparación con el mecanismo anterior.

Algunas variables del servidor se modifican con la utilización de PHP-FPM:

|Variable|Sin PHP-FPM|Con PHP-FPM|
| ------------- |:-------------:| -----:|
|max_execution_time|120 s|165 s|
|max_input_vars|2000|16 000|
|memory_limit|128 M|512 M|

Averigüe cómo actualizar el lenguaje PHP en [esta guía](/pages/web_cloud/web_hosting/configure_your_web_hosting).

Para cambiar al uso de PHP-FPM en la versión _estable_ o para obtener información sobre opciones más avanzadas de su hospedaje web, consulte [esta guía](/pages/web_cloud/web_hosting/configure_your_web_hosting).

El archivo _.ovhconfig_ opera en la raíz del paquete de hospedaje o en un subdirectorio de nivel 1 (p. ej.: _/www/_), pero no en directorios de nivel 2 o superior (p. ej.: _/www/test/_ y _/www/test/test2/_)

### Paso 3: comprobar el contenido multimedia (imágenes, vídeos, etc.)

A la hora de acceder a un sitio web, el navegador debe descargar todo el contenido.

Esto puede resultar especialmente problemático cuando se accede a un sitio web no optimizado desde un dispositivo móvil.

La utilización de imágenes y vídeos comprimidos es una buena forma de reducir el tiempo de carga.
Se pueden utilizar algunos algoritmos y herramientas para optimizar el contenido. También existen complementos para los sistemas de gestión de contenidos más habituales.
Usted elige los que mejor se adapten a sus necesidades específicas.

Puede encontrar más información sobre este tema más adelante, en el paso 5.

### Paso 4: optimizar las secuencias de comandos

Correlacione los gráficos de recursos utilizados de su hospedaje (más información a continuación) para descubrir el origen de los retrasos y consulte los registros de las fechas de dichos picos.

Puede acceder a sus registros, estadísticas y gráficos directamente desde el panel de control, iniciando sesión en el [área de cliente de OVHcloud](/links/manager){.external}.

Cómo acceder a las estadísticas y los logs:

1. Haga clic en `Alojamiento`{.action} en la columna de la izquierda y seleccione el alojamiento web correspondiente.
2. En la página que se abre, haga clic en la pestaña `Estadísticas y logs`{.action}.
3. Haga clic en el botón `Ver las estadísticas`{.action} mostradas para acceder a las estadísticas de visita del sitio web o en `Ver los logs`{.action} para consultar los logs disponibles para su alojamiento web.

![logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

Cómo acceder a los gráficos:

1. Haga clic en `Alojamiento`{.action} en la columna de la izquierda y seleccione el alojamiento web correspondiente.
2. En la nueva página, haga clic en la pestaña `Estadísticas y logs`{.action} y desplácese hasta la parte inferior de la página en la que se encuentra el gráfico relativo al uso del alojamiento.
3. Seleccione el **tipo** de información y el **período** de los datos mostrados.

![graphs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

¿Qué tipo de información puede mostrarse?

- **Peticiones HTTP**: indica el número promedio de visitas del sitio web. Las visitas se clasifican según los códigos de estado HTTP 2xx/3xx/4xx/5xx.

- **Tiempo medio de respuesta**: Hace referencia al tiempo medio de respuesta de la página. Se hace la distinción entre páginas dinámicas y estáticas.

- **Superación del umbral de recursos**: Este gráfico muestra la utilización de los «PHP workers» para poder dirigirle a un paquete de hospedaje web diferente en caso necesario. Utilizar PHP-FPM podría ayudarle a reducir el uso de los PHP workers.

- **Uso de la CPU**: Muestra el uso de la CPU de su sitio web. Esto puede ayudarle a localizar una posible sobrecarga de la CPU.

- **Conexiones salientes**: Esto le permite ver las peticiones TCP salientes realizadas por el servidor, por ejemplo, si su sitio web es hackeado, se podría usar el servidor para atacar a otros sitios web externos. También puede comprobar llamadas externas realizadas por módulos como Facebook, Twitter, etc. Disminuir el número de peticiones TCP salientes es una buena manera de reducir el tiempo de carga, ya que tomará más tiempo la carga del sitio web si el servidor al que se le está solicitando contenido tarda en responder.

- **Comandos FTP**: Muestra los diferentes comandos FTP que se han utilizado en el hospedaje. Por ejemplo, intentos de conexión satisfactorios y no satisfactorios; descargas; cargas y eliminación de archivos.

Las siguientes dos categorías solo se muestran si está utilizando actualmente una base de datos en su oferta de hospedaje.
No se olvide de seleccionar el nombre de su base de datos y el periodo deseado.

- **Tiempo de respuesta del SQL**: Muestra el tiempo de respuesta de las consultas.

- **Peticiones SQL**: Muestra el número de peticiones.

### Paso 5: comprobar las peticiones de la red

Una herramienta de análisis muy útil es el [monitor de red](https://developer.mozilla.org/es/docs/Tools/Monitor_de_Red){.external}, el cual está directamente integrado en el navegador Mozilla Firefox y permite analizar con detalle el tiempo de carga de una página web.

Con dicha herramienta puede comprobar qué elementos de su sitio entrañan una carga más lenta o pesada.
Puede ayudarle a delimitar qué imágenes y qué contenido están aumentando el tiempo de carga del sitio web y a priorizar dónde deben realizarse las optimizaciones.

Puede acceder a esta herramienta pulsando la tecla F12 de su teclado (al usar Firefox o Chrome).

Disminuir el número de peticiones TCP salientes también es una buena manera de reducir el tiempo de carga, ya que tomará más tiempo la carga del sitio web si el servidor al que se le está solicitando contenido tarda en responder.

**CDN**

Para mejorar el acceso al sitio web y su descarga, y lograr un posicionamiento natural optimizado, puede usar la red de distribución de contenidos (o CDN, por sus siglas en inglés) de OVHcloud para almacenar sus archivos, aplicaciones y sitios web más cerca de sus usuarios finales.

Como resultado, mejorará los tiempos de respuesta para los visitantes de todo el mundo, ya que estos podrán descargar las partes estáticas de su sitio web en el punto de presencia más cercano.

Descubra nuestra [solución de red de distribución de contenidos (CDN) aquí](https://www.ovh.es/cdn/){.external}.

### Paso 6: comprobar el sistema de gestión de contenidos (CMS) y los complementos utilizados

_Este paso es opcional si no está utilizando un sistema de gestión de contenidos._

Para garantizar que nuestra oferta de hospedaje se adapte a las necesidades de su sistema de gestión de contenidos, puede encontrar una comparativa de nuestros servicios en [la página del producto](/links/web/hosting){.external}.

- **Usar un complemento de caché:** Un sistema de gestión de contenidos recurre a varias librerías, por lo que una única página web puede procesar una enorme cantidad de elementos. Con el fin de optimizar su sistema de gestión de contenidos, debe usar varios complementos de caché para evitar que se regenere todo el contenido de su sitio web cada vez que se cargue una página. Recomendamos que busque complementos de caché en los sitios web de la comunidad del sistema de gestión de contenidos que utiliza (Joomla!, PrestaShop, WordPress) para evitar que se regenere todo el contenido de su sitio web cada vez que carga una página.

- **Desactivación de los complementos no usados:** Podría ser una buena idea desactivar o, incluso, eliminar los complementos no utilizados para mejorar el rendimiento de su sitio web. Esto evitará la descarga de elementos innecesarios.

### Paso 7: optimizar su base de datos

_Este paso es opcional si no está usando una base de datos._
Puede acceder a su base de datos usando PHPMyAdmin. Las instrucciones sobre cómo usar PHPMyAdmin escapan del ámbito de esta guía, por lo que no se proporcionan más detalles.
Sin embargo, existe una gran cantidad de guías externas sobre este tema.

**Cómo acceder a la base de datos mediante phpMyAdmin:** A continuación, se detalla el procedimiento para acceder a su base de datos mediante phpMyAdmin, disponible en el panel de control una vez iniciada sesión en el [área de cliente de OVHcloud](/links/manager){.external}:

- En la sección `Hospedaje`{.action}, haga clic en su dominio.
- Acceda a la pestaña `Base de datos`{.action}.
- Haga clic en los 3 puntos, `...`{.action}, en el lado derecho de su base de datos para acceder a phpMyAdmin.

**¿Qué objetivo tiene la optimización de una base de datos?** Es necesario realizar el mantenimiento de una base de datos para que esta funcione bien. Dicho de otro modo, la información contenida en la base de datos debe devolverse a la secuencia de comandos que la ha solicitado lo antes posible. Para lograrlo, una base de datos debe estar bien estructurada y optimizada. Abordaremos cuál es la mejor manera optimizar su base de datos.

#### En la base de datos

- **Indexar la base de datos:** Para aumentar la velocidad de las búsquedas durante una consulta, debe indexar los campos utilizados en las cláusulas WHERE. Ejemplo: A menudo, busca a una persona en función de la población. Entonces debe indexar el campo «población» con la siguiente petición:

```
ALTER TABLE `test` ADD INDEX (`town`);
```

- **Purgar la base de datos:** Si existen datos que ya no necesita, ¿por qué no los archiva? De este modo, sus tablas no estarán tan llenas y el tiempo necesario para consultar la base de datos será menor.

#### En sus secuencias de comandos

- **Límite de visualización:** Limite el número de registros mostrados (p. ej., 10 por página) incluyendo la cláusula LIMIT en su consulta SQL.

- **Ordene sus peticiones:** Agrupe sus peticiones al comienzo de la secuencia de comandos de esta manera:

```
open_connection
request1
request2
...
close_connection

Display...
Treat data
Loop through data...
Display...
...
```

Cerrar la conexión después de la petición permite que el servidor de la base de datos esté disponible inmediatamente para otras peticiones (y evita el error «User already has more than “max_user_connections” active connections»).

#### Optimizar su base de datos usando la memoria caché

- Si hay elementos en su base de datos que no cambian, debería guardarlos en la memoria. Seguir este consejo reducirá drásticamente la necesidad de acceder a su base de datos y acelerará la carga de su sitio web.

- También puede realizar una caché de la sesión, lo que significa colocar los resultados de las consultas en una variable de sesión. De esta forma, no tendrá que ejecutar una consulta idéntica la próxima vez, sino que podrá recuperar las variables de sesión en su lugar.

- Recupere solo los datos que se utilizan: en sus peticiones SQL, asegúrese de seleccionar solo lo que necesita y de no olvidar los enlaces entre las tablas.

Ejemplo:

```
(where table1.champs = table2.champs2)
```

#### Evite opciones intensivas de recursos:

Evite usar la cláusula «HAVING», ya que puede lentificar las consultas. También debería evitar el uso de «GROUP BY», a menos que sea estrictamente necesario.

#### Web Cloud Databases
Si a pesar de todos los cambios y optimizaciones realizados la base de datos va lenta, o en el caso de que se realicen un gran número de consultas en dicha base de datos, podría querer cambiar a nuestra oferta de Web Cloud Databases para disponer de más recursos.

[Consultar la solución Web Cloud Databases en nuestro sitio web](https://www.ovh.es/cloud/cloud-databases/){.external}.

## Más información

[Modificar la configuración de un plan de hospedaje web](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Gestionar una base de datos en un paquete de hospedaje web](/pages/web_cloud/web_hosting/sql_create_database){.external}

[Primeros pasos con el servicio Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb){.external}

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).