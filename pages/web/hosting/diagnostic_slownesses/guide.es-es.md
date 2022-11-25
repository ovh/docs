---
title: "Mi sitio es lento. ¿Qué hacer?" 
excerpt: "Identifique el origen de la lentitud de su sitio web y descubra cómo solucionar esta situación"
slug: slow-website-fix
section: Diagnóstico
order: 01
---

**Última actualización: 17/11/2022**
 
> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La ralentización del sitio web se debe a una carga excesivamente larga para mostrar el conjunto o algunas partes del sitio web. 

Si la carga es demasiado larga, la petición realizada desde su navegador puede alcanzar el tiempo máximo de ejecución permitido por el servidor en el que se encuentra su alojamiento. En ese caso, el servidor devuelve el código "**504 Gateway Timeout**" para informar al visitante de que se ha alcanzado la variable "max_execution_time", lo que también impide la ejecución de la petición solicitada.

La lentitud tiene principalmente dos orígenes:

- sobrecarga de la infraestructura compartida en la que se encuentra el sitio web.
- una petición demasiado larga o engorrosa para ejecutarse en la infraestructura compartida en la que está alojado el sitio web. 

La gran mayoría de los retrasos provienen en realidad del sitio web y no de su alojamiento compartido. Hemos creado esta guía para ayudarle en esta situación.

En algunos casos, la lentitud de la visualización también puede provenir de su proveedor de acceso a internet o de una velocidad de conexión a internet demasiado baja. Compruebe su conectividad de red **antes** de continuar con sus diagnósticos.

**Descubra cómo diagnosticar el origen de la lentitud de su sitio web y actuar en consecuencia.**

> [!primary]
>
> **Después de realizar todos los diagnósticos indicados en esta guía**, si la ralentización resulta de nuestra infraestructura de alojamiento, le recordamos que es compartida entre varios usuarios.
>
> Los usuarios comparten los recursos de la infraestructura de alojamientos compartidos para hacer funcionar sus sitios web. Si uno de ellos sobrepide la infraestructura compartida, puede tener consecuencias en los demás alojamientos presentes en la misma infraestructura.
>
> Nuestros planes de hosting no disponen de "Service Level Agreement" (SLA). 
>
> Si necesita un servicio con una tasa de disponibilidad SLA superior al 99%, le recomendamos que considere la posibilidad de utilizar un [Servidor Privado Virtual (VPS)](https://www.ovhcloud.com/es-es/vps/) o un [Servidor Dedicado](https://www.ovhcloud.com/es-es/bare-metal/).
>
> Por otro lado, el rendimiento de la infraestructura de alojamientos compartidos OVHcloud se monitoriza las 24 horas del día, los 7 días de la semana. Esto le garantiza un alto índice de disponibilidad y, en su caso, una rápida recuperación de sus servicios en caso de sobrecarga comprobada.*
>

## Requisitos

- Tener un sitio web alojado en uno de nuestros [planes de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/)
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es)

## Procedimiento

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/). Nosotros no podremos asistirle. **siempre que la infraestructura en la que está alojado su plan de hosting no sea válida**. Más información en la sección ["Más información"](#go-further) de esta guía.
>

> [!success]
>
Le recomendamos que anote sus resultados de diagnóstico a medida que avance en esta guía. En efecto, estos resultados serán muy útiles para la resolución de su situación, independientemente del origen de la lentitud.
>

### Entender el concepto de Time To First Byte (TTFB)

El *Time To First Byte* (TTFB) es el tiempo que tardará su alojamiento en enviar el primer byte de datos al navegador de internet, a raíz de una petición que este último le haga para que muestre su sitio web.

Si no hay sobrecarga en la infraestructura de alojamiento compartido y su sitio web está optimizado al máximo, el TTFB no supera los 800ms.

**Un TTFB elevado no significa automáticamente que su lentitud provenga de su alojamiento compartido.**

ya que, para los sistemas de gestión de contenidos (CMS) como WordPress, Joomla, PrestaShop o Drupal, la página que usted llama desde el navegador de internet puede generar más peticiones internas adicionales al alojamiento. El alojamiento no reenviará nada a su navegador hasta que estas peticiones internas no sean finalizadas por sí mismas.

> **Ejemplo**:
>
> Desde su navegador de Internet, deberá mostrar la página de inicio de su sitio web. La consulta llamará por defecto al archivo "**index.php**" de su sitio web.
>
> Una vez que la solicitud llega al archivo "**index.php**", este será ejecutado por el servidor web de su alojamiento compartido. 
>
>En su ejecución, el archivo "**index.php**" debe recuperar la información de los demás ficheros que componen su sitio web, o incluso de los elementos presentes en su base de datos. 
>
>Cada una de estas solicitudes de información genera una petición interna al servicio de alojamiento. 
>
>El archivo "**index.php**" esperará a tener el resultado de todas las peticiones internas que haya solicitado **antes** para devolver el primer byte de datos al navegador de internet.
>
>Si su archivo "**index.php**" genera peticiones "lentas" o pesadas para ejecutarse, el TTFB será elevado y su sitio web tardará varios segundos en mostrarse. En ese caso, el rendimiento de su plan de hosting no se verá afectado.

Las herramientas de diagnóstico en línea le permiten recuperar el TTFB de su alojamiento. Sin embargo, la mayoría de ellos funcionan como navegadores de Internet y, por lo tanto, sus resultados deben ser relativistas.<br>
ya que estas herramientas no son capaces de responder a las peticiones internas solicitadas por el archivo que ha llamado a través de su navegador, como en el ejemplo anterior con el archivo "**index.php**".

### Etapa 1 - determine si la lentitud se debe al alojamiento o a su sitio web

En este primer etapa, puede determinar si la lentitud se produce:

- su sitio web, por su funcionamiento interno;
- de la infraestructura de alojamiento compartido en la que se encuentra su sitio web.

Todos los diagnósticos del etapa 1 deben realizarse **sin excepción** para determinar si la ralentización se debe a los servicios de alojamiento web o al sitio web alojado en él.

#### 1.1 - Compruebe el estado de sus servicios OVHcloud

Para asegurarse de que sus servicios (alojamiento compartido **et** de la base de datos) no son objeto de mantenimiento o de incidente, consulte la información del cluster y el filer de su alojamiento compartido, así como la información general relativa a su base de datos. Compruebe su estado en [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/).

Para conocer el cluster y el filer en el que se encuentra su alojamiento compartido, conéctese a su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda al apartado `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. En la pestaña `Información general`{.action}, consulte el `datacenter` de su alojamiento compartido y el `filer` en el que se encuentra.

![Obtener Filer](images/DropFilerCluster1.png){.thumbnail}

A continuación, abra la pestaña `Multisitios`{.action} para obtener el número del cluster en el que se encuentra el alojamiento compartido.

![Obtener cluster](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Si un incidente o un mantenimiento están declarados en la infraestructura en la que se encuentra su alojamiento compartido, siga estos hasta su resolución por nuestros administradores. **No es necesario realizar ninguna otra acción a su nivel**.
>
> Puede suscribirse a la declaración de incidencia o mantenimiento con su dirección de correo electrónico para recibir una notificación por correo electrónico del progreso de las operaciones.
>
> Una vez que se haya marcado el estado de la incidencia o del mantenimiento como **resuelto**, la estabilización de la carga acumulada puede tardar un máximo de **3 horas** después de la notificación de resolución para resolverse por completo.
>

Si no se reportan incidentes ni mantenimiento, prosiga sus diagnósticos.

#### 1.2 - Probar el sitio en varios dispositivos

Pruebe su sitio web desde otro dispositivo/ordenador y luego desde otro punto de acceso a Internet. y vaciando la caché de su navegador en cada intento, para que su sitio web sea directamente cargado desde el alojamiento web.

#### 1.3 - Pruebe el alojamiento con un archivo independiente de su sitio web

Ponga en la raíz de su sitio web en el[espacio de almacenamiento FTP de su alojamiento compartido](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) un archivo al que denominará "phpinfo.php".

Introduzca el siguiente código en el archivo:

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> En algunos casos, los archivos "**.htaccess**" presentes en los directorios/carpetas situados antes o al mismo nivel que el lugar en el que haya colocado su fichero "**phpinfo.php**" pueden afectar a la visualización en un navegador de Internet del "**phpinfo.php**". 
>
> Las operaciones en un archivo "**.htaccess**" pueden afectar a la visualización de su sitio web. Si tiene dificultades para realizar lo siguiente, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/).
>
> Si no aparece y **solo para usuarios avanzados**, renombre los archivos "**.htaccess**" en "***.htaccess_OLD**" para que el servidor no los ejecute durante el tiempo de prueba. Una vez realizado el diagnóstico, renombre correctamente.
>

**Ejemplo**: si el dominio que permite el acceso a su sitio web es "domain.tld" y si el archivo "**phpinfo.php**" se encuentra en la raíz de su sitio web, podrá acceder a él a través de la siguiente URL: `http://domain.tld/phpinfo.php` (o `https://domain.tld/phpinfo.php`).

> [!primary]
>
> Si la llamada del archivo "**phpinfo.php**" muestra un array de configuración **instantáneamente**, significa que la ralentización no proviene del alojamiento compartido en el que se encuentra su sitio web. De lo contrario, el archivo se mostraría tan lentamente como el resto de páginas. 
>
> En otras palabras, si la lentitud está presente únicamente en una parte de las páginas o del contenido de su sitio web, significa que el alojamiento compartido **no es la causa de la lentitud** encontrada en su sitio web.
>

#### 1.4 - Pruebe la conectividad de su base de datos:

Conéctese a su base de datos siguiendo **el etapa 3** de nuestra guía sobre la [creación de una base de datos compartida](https://docs.ovh.com/es/hosting/crear-base-de-datos/).

Si utiliza una base de datos en una solución **CloudDB**, consulte nuestra guía sobre [la conexión a la base de datos de una solución Cloud DB](https://docs.ovh.com/es/clouddb/coneccion-base-de-datos-servidor-bdd/).

Si la conexión se ha realizado correctamente, acceda a la siguiente interfaz:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> Si se produce un error, consulte nuestra documentación sobre los [errores comunes encontrados con una base de datos](https://docs.ovh.com/es/hosting/error-requentes-base-de-datos/). A continuación, utilice la guía para corregir su situación e intente volver a conectarse a la base de datos.
>

#### 1.5 - Interpretación de los diagnósticos efectuados

**Caso n°1**

Se aplican las siguientes declaraciones **todas** a su situación:

- al menos una página, un script o un fichero (incluyendo el fichero "**phpinfo.php**") se ha cargado rápidamente en las pruebas del etapa 1 ;
- la conexión a la base de datos se ha realizado correctamente en el etapa 1.

> Esto significa que la lentitud con la que se encuentra proviene directamente de los scripts que componen su sitio web. Puede ir directamente a [el etapa 2](#step2) para seguir los consejos de optimización para resolver su situación.

**Caso n°2**

Se aplican las siguientes declaraciones **todas** a su situación:

- **no se registran incidentes ni mantenimiento** o se han declarado **resueltos** hace menos de tres horas, para los servicios de alojamiento web en nuestra web [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/) ;
- el **cas n°1** más arriba no se corresponde con su configuración.

> Se realizarán investigaciones en OVHcloud. Póngase en contacto con nuestros servicios de soporte en las soluciones web para que confirmen con usted el origen de las ralentizaciones que experimenta.

### Etapa 2 - identifique la(s) fuente(s) que genera(n) la lentitud a nivel de su sitio web <a name="step2"></a>

En este punto, ya sabrá que la ralentización es causada por las páginas, scripts o archivos que componen su sitio web.

> [!warning]
>
> Si tiene dificultades para realizar las siguientes acciones, puede contactar con uno de nuestros [proveedores especializados](https://partner.ovhcloud.com/es-es/). OVHcloud no ayudará en el desarrollo o la optimización del contenido de su sitio web.
>

A continuación se indican las acciones que debe realizar para identificar las fuentes de la lentitud y optimizar su sitio web.

#### 2.1 - Compruebe la configuración de su alojamiento web

Compruebe el motor PHP, la versión PHP y el entorno de ejecución utilizados en su alojamiento web, con ayuda de nuestra guía sobre la [configuración de su alojamiento web](https://docs.ovh.com/es/hosting/cambiar_el_entorno_de_ejecucion_de_un_alojamiento/).

Si utiliza en su alojamiento web una versión de PHP obsoleta, el motor "**PHP CGI**" y/o el entorno "**legacy**" y **si su sitio web es compatible**, privilegie el uso del motor "**PHP**" (PHP FPM), el entorno "**stable**" o "**stable64**". con la versión más reciente posible de PHP.

Para comparar las versiones de PHP disponibles en función del entorno de ejecución utilizado, consulte **el etapa 2** de la guía sobre la [configuración de la versión PHP en su alojamiento](https://docs.ovh.com/es/hosting/cambiar-version-php-en-alojamiento-web/).

Utilizar una versión de PHP reciente, el entorno de ejecución "**stable**" o "**stable64**" con el motor "**PHP**" (PHP FPM) hace su sitio mucho más fluido y rápido. A título informativo, el motor "**PHP**" (PHP-FPM) puede ser hasta 50 veces más potente que el motor "**PHP CGI**" para llevar a cabo sus tareas.

#### 2.2 - Analice las conexiones salientes/conexiones TCP realizadas por su alojamiento web

Las conexiones salientes son muy exigentes en términos de recursos. Cuando estas conexiones son numerosas, cuando no se ejecutan correctamente o cuando permanecen activas durante demasiado tiempo, monopolizan tantos recursos en su alojamiento web que ya no quedan suficientes para que el resto de su sitio web funcione con normalidad. 

Esto se traduce en ralentizaciones e incluso en los códigos "504 gateway timeout".

Para analizar las conexiones salientes del alojamiento, consulte los logs **OUT** del mismo. Si necesita ayuda, consulte nuestra guía sobre [la consulta de los logs de su alojamiento](https://docs.ovh.com/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/).

Si encuentra que hay muchas conexiones salientes en su alojamiento, compare sus logs **OUT** con sus logs **WEB** utilizando la marca de tiempo de los mismos. para identificar el script o scripts responsables de esta situación.

Si utiliza un Content Management System (CMS) como WordPress, Joomla, PrestaShop o Drupal, identifique los plugin(s) y/o el tema que genera el flujo de conexiones salientes.

#### 2.3 - Analice el flujo de peticiones HTTP realizadas a su alojamiento web:

Para ello, consulte los logs **WEB** de su alojamiento web con nuestra guía sobre [cómo consultar los logs de su alojamiento](https://docs.ovh.com/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/).

Las peticiones más exigentes en términos de recursos son las de tipo HTTP **POST** y, seguidamente, las de tipo **PUT**. Estas últimas realizan, respectivamente, modificaciones e inserciones.

Las peticiones HTTP de tipo **GET** solo recogen los elementos presentes en el alojamiento para mostrarlos en su navegador de internet. Generalmente son poco exigentes en términos de recursos. Sin embargo, puede generar desaceleraciones si se solicitan varios cientos de ellas cada segundo en un intervalo de varios minutos.

Si encuentra en sus logs una de las siguientes situaciones:

- las peticiones de tipo **POST** o **PUT** se efectúan varias veces por minuto y de forma permanente;
- las peticiones **POST** o **PUT** se ejecutan varias veces por minuto en un mismo fichero.

Identifique y optimice el script/archivo de que se trate para reducir el flujo de peticiones HTTP.

Cuanto menor sea el número de peticiones, menos se solicitarán los recursos destinados al alojamiento compartido.

> [!success]
>
> Para identificar los elementos largos a cargar en una de las páginas de su sitio web, puede por ejemplo efectuar un análisis de red utilizando el navegador **Firefox**. 
>
> Para ello, pulse la tecla `F12` cuando esté en su navegador Firefox y seleccione la pestaña `Red`. Recargue su página web con las teclas `Ctrl + Mayús + R` para que la herramienta muestre las peticiones que se ejecutan para cargar su página. Identifique los elementos más largos a cargar para luego optimizarlos.
>
>![Análisis de red Firefox](images/F12.png){.thumbnail}
>

Para reducir el flujo de peticiones a cada una de las cargas de sus páginas, también puede crear una Content Delivery Network (CDN). que permite almacenar en caché el contenido estático de su sitio web. Su alojamiento web tendrá menos carga y dispondrá de más recursos para tratar el resto de las peticiones que no puedan ser puestas en caché.

> [!primary]
>
> OVHcloud ofrece varios [productos CDN](https://www.ovhcloud.com/es-es/web-hosting/options/). Si desea utilizar o activar una para su alojamiento web, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y consulte nuestra guía sobre el uso de la CDN de OVHcloud](https://docs.ovh.com/es/hosting/guia_de_uso_del_acelerador_geocache_en_un_alojamiento_web/).
>

#### 2.4 - Optimice su base de datos

> [!warning]
>
> Las acciones que realice en la base de datos pueden tener consecuencias irreversibles si no se realizan de forma ordenada y correcta. Contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/) si no está seguro de las acciones a realizar. 
>

Compruebe si se realizan un número considerable de consultas a la base de datos.<br>
De hecho, esta situación puede provocar una sobrecarga y provocar ralentizaciones, incluso a los códigos "504 Gateway Timeout".

Compruebe también el tamaño de las tablas de la base de datos.<br>
Si una tabla se llama regularmente y es voluminosa, la carga de esta tabla puede hacerse más lentamente y generar peticiones lentas.<br>
La acumulación de estas peticiones lentas puede generar una ralentización del acceso al sitio, incluso un código "504 Gateway Timeout".

Si tiene grandes tablas o flujos de consultas a bases de datos, optimice sus tablas e instale soluciones que permitan reducir el flujo de consultas a la base de datos.

Si encuentra datos no utilizados o anticuados en su base de datos, deberá limpiarlos para mejorar su rendimiento diario.

#### 2.5 - Optimice sus imágenes

Si, por ejemplo, su sitio web tiene una imagen incluida en la resolución "1000x2000" y esta se muestra como máximo en 100x200 píxeles en la página de su sitio web, se reduce el consumo de recursos en el alojamiento, que puede optimizarse.

El servidor deberá realizar una operación de redimensionamiento de la imagen para después mostrarla al tamaño solicitado en el sitio web.

Si su sitio web contiene muchas imágenes, puede representar un consumo de recursos nada desdeñable en lo que respecta a los recursos asignados al alojamiento.

Redimensione todas sus imágenes para reducir al mínimo el consumo de recursos.

#### 2.6 - Optimice el resto de su sitio web

Consulte nuestra guía sobre la [optimización del rendimiento de su sitio web](https://docs.ovh.com/es/hosting/web_hosting_guia_de_optimizacion_del_rendimiento_de_un_sitio_web/).

Puede encontrar pistas de optimización para su sitio web analizándolo en [gtmetrix.com](https://gtmetrix.com){.external} (este sitio no está afiliado a OVHcloud).

> [!success]
>
> Independientemente de la lentitud, cuanto más optimizado esté su sitio web, más optimizado será su posicionamiento natural en los motores de búsqueda.

### Conclusión

Si su alojamiento web y su base de datos **no están en juego** y su sitio web sigue siendo lento, a pesar de haber realizado **todas las etapas** de esta guía, lo más probable es que el servicio que utiliza para alojar su sitio web no sea o no adecuado para sus necesidades. 

Puede considerar un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/) superior o una infraestructura dedicada como un [Servidor Privado Virtual (VPS)](https://www.ovhcloud.com/es-es/vps/) o un [Servidor Dedicado](https://www.ovhcloud.com/es-es/bare-metal/). 

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
