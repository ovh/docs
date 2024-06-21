---
title: "Particularidades técnicas de los alojamientos compartidos"
excerpt: "Descubra en esta guía diferentes informaciones y particularidades técnicas relativas a los alojamientos web"
updated: 2023-12-08
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los planes de hosting de OVHcloud son compartidos. Por lo tanto, la configuración de estos productos contiene determinadas especificaciones técnicas. Le recomendamos que lea estas especificaciones *antes* de utilizar su alojamiento web de OVHcloud.

**Descubra en esta guía diferentes informaciones y particularidades técnicas relativas a los alojamientos web.**

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting){.external} compatible.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.

## Procedimiento

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.
>

### FTP

- Utilice el **modo pasivo** para las conexiones FTP. Asegúrese de que el script o el cliente FTP estén configurados correctamente.

- Si encuentra el error de acceso "Fallo de la autenticación de conexión 530" al conectarse a su espacio de almacenamiento FTP: Asegúrese de que los datos de acceso a su espacio FTP son correctos. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento web correspondiente. A continuación, abra la pestaña `FTP - SSH`{.action}.

En él encontrará toda la información de conexión a su espacio de almacenamiento FTP, excepto la contraseña.

Esto se debe a que las contraseñas no se muestran nunca, pero se pueden cambiar.

Para más información, consulte nuestra guía "[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)".

### Emails <a name="emails"></a>

Con el fin de garantizar una buena calidad de servicio en el conjunto de la infraestructura compartida y así facilitar el envío de sus emails hacia sus destinatarios, aplicamos cuotas de envío en nuestros servicios de alojamiento web.

Durante un período de 3600 segundos (1 hora), su plan de hosting le permitirá enviar las siguientes cuotas de correo:

|Productos|Alojamiento gratuito 100M|Starter|Perso|Pro|Performance|
|---|---|---|---|---|---|
|Cantidad máxima de envío de correo por hora y por servicio|10|20|100|200|2000|

> [!primary]
>
> Estas limitaciones se aplican a **únicamente** los mensajes de correo electrónico enviados mediante la función *mail()* de PHP y no a los demás productos de correo (envío SMTP).
>

A excepción de las sospechas de spam o phishing, el envío de sus emails podrá retrasarse. Sus mensajes de correo electrónico permanecerán en la cola hasta que el número de mensajes enviados en la última hora sea inferior al límite.

En caso de abuso o pirateo, una parte o la totalidad de su servicio podrá ser suspendida (de conformidad con los Términos y Condiciones y las Condiciones Particulares de su oferta). Le informaremos por correo electrónico de la suspensión del servicio. En ese caso, siga estas guías:

- [Seguimiento y gestión de los mensajes de correo automatizados de su alojamiento web](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Casos prácticos - Consejos sobre la piratería de su sitio Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Base de datos / SQL

#### Conexiones simultáneas a la base de datos

En los planes de hosting (bases de datos compartidas), existe un límite de 30 conexiones simultáneas por base de datos (este límite aumenta a 200 si utiliza un plan [Web Cloud Databases](/links/web/databases)). Consultar el [detalle de nuestros planes de hosting](/links/web/hosting) para conocer las opciones disponibles en cada plan de hosting.

También puede contratar productos adicionales [Web Cloud Databases](/links/web/databases), que disponen de opciones de personalización:

- *max_connections*: 100 por defecto, con posibilidad de pasar a 200;
- *max_user_connections*: 50 por defecto, con posibilidad de pasar a 200.

Para más información, consulte los detalles de nuestros [planes de hosting](/links/web/hosting) y nuestra guía "[Primeros pasos con su solución Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Conexiones desde un servidor externo

Por motivos de seguridad, no es posible conectarse desde un servidor externo a una base de datos incluida en un plan de hosting de OVHcloud. Solo los servidores que contienen los alojamientos web de OVHcloud pueden conectarse a los servidores de bases de datos compartidas. Cualquier otra conexión provocará el siguiente error:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Solo los servidores de bases de datos [Web Cloud Databases](/links/web/databases) permiten a servidores externos conectarse a ellos. Para ello, debe haber autorizado previamente la dirección IP de su servidor externo en su servidor de bases de datos. Si necesita ayuda, consulte nuestra guía "[Primeros pasos con su solución Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Variables servidor SQL compartido

Para conocer las variables, conéctese a la base de datos utilizando la interfaz *phpMyAdmin*. Una vez conectado, haga clic en la pestaña `SQL` en la parte superior de la página e introduzca la siguiente consulta en el formulario central para verificar las variables del servidor MySQL:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> La versión MySQL no puede modificarse para las bases de datos integradas en el alojamiento web.
>

Para más información sobre la gestión de las bases de datos y la conexión a la interfaz *phpMyAdmin*, consulte la guía "[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database)".

### PHP

Le recomendamos que consulte nuestros [planes de hosting](/links/web/hosting-programming-language) para asegurarse de que el plan de hosting que desea contratar se ajusta a sus necesidades.

> [!warning]
>
> La modificación del archivo **php.ini** no está disponible en los planes de hosting. Esto se debe a que la configuración PHP es global en el conjunto de la infraestructura compartida.
>
> No obstante, es posible modificar determinados elementos como el *motor de ejecución PHP*, el*entorno de ejecución* o incluso la *versión de PHP* de un alojamiento web.
>
> Para más información, consulte nuestra guía "[Alojamiento web: entorno, versión PHP, ".ovhconfig"](/pages/web_cloud/web_hosting/configure_your_web_hosting)"
>

También puede consultar los detalles de configuración del alojamiento web. Para ello, consulte la sección "[Información técnica de su alojamiento web](#technical-infos-web-hosting)" al final de esta guía.

#### PHP-FPM

PHP-FPM está activado por defecto en la infraestructura de alojamiento web para acelerar las respuestas PHP. Tenga en cuenta que es posible que no esté activo si ejecuta un antiguo plan de hosting que no haya actualizado (servicios contratados antes de 2014).

*Algunas variables son diferentes sin PHP-FPM:*

|Variable|Sin PHP-FPM|Con PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### PHP scripts

Una vez conectado al alojamiento web por SSH, el tráfico saliente se bloqueará por motivos de seguridad. Por lo tanto, le recomendamos que utilice scripts PHP. Para más información, consulte nuestra [guía SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). Puede consultar el apartado "[PHP manual](https://www.php.net/manual/es/function.system.php)" relativo a la ejecución de comandos.

Por ejemplo, se puede utilizar la función *gethostbyaddr()* para recuperar el nombre de host:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud no cambia automáticamente la versión de PHP de su alojamiento cuando se implementa una nueva versión. Usted es el responsable de la seguridad del contenido de los servicios y de la actualización periódica de los mismos.
>

### Información técnica de su alojamiento web <a name="technical-infos-web-hosting"></a>

Consulte y compruebe las librerías, lenguajes y versiones disponibles para su plan de hosting desde esta página: <https://webhosting-infos.hosting.ovh.net>

### Información sobre las copias de seguridad automáticas <a name="backup"></a>

> [!warning]
>
> OVHcloud ofrece un servicio de backup automático de datos y la puesta a disposición de estas copias de seguridad. Sin embargo, este servicio es *no-contractual* y está disponible como complemento de sus servicios. De hecho, es su responsabilidad implementar su propia política de restauración, y determinar los puntos de restauración en los momentos que considere oportunos.
>

#### Espacio disco / espacio de almacenamiento FTP

Todos nuestros planes de hosting situados en:

- en Gravelines (GRA), Francia, disponen de copias de seguridad automáticas en D-1 / D-2 / D-3 / D-7 / D-14. Estas copias de seguridad también se almacenan en el datacenter de Roubaix (RBX), en Francia.

- en Beauharnois (BHS), Canadá, disponen de copias de seguridad automáticas en D-1 / D-2 / D-3 / D-7 / D-14. Estas copias de seguridad también se almacenan en el datacenter de Beauharnois (BHS), en Canadá.

Cómo [conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection) o [restaurar el espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup) en nuestra documentación.

#### Base de datos / SQL

> [!warning]
>
> OVHcloud ofrece un servicio de backup automático de datos y la puesta a disposición de estas copias de seguridad. Sin embargo, este servicio es *no-contractual* y está disponible como complemento de sus servicios. De hecho, es su responsabilidad implementar su propia política de restauración, y determinar los puntos de restauración en los momentos que considere oportunos.
>

Para las bases de datos compartidas (incluidas en su plan de hosting) o los servidores de bases de datos (Web Cloud Databases), que se ofrecen en Gravelines (GRA), Francia y Beauharnois (BHS), Canadá, la copia de seguridad de las bases de datos se realiza todos los días. Puede acceder a estas copias de seguridad (en el [área de cliente de OVHcloud](/links/manager){.external} o a través de las [API de OVHcloud](https://api.ovh.com/)). Las copias de seguridad también se almacenan en otra infraestructura. Estos datos se replican en un centro de datos situado en Estrasburgo (SBG). La política de retención de las copias de seguridad es de 30 días.

Esta guía explica cómo consultar nuestra documentación [Descargar la copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export).

#### Email

> [!warning]
>
> OVHcloud ofrece un servicio de backup automático de datos. Sin embargo, este servicio es *no-contractual* y está disponible como complemento de sus servicios. De hecho, es su responsabilidad implementar su propia política de restauración, y determinar los puntos de restauración en los momentos que considere oportunos.
>

Para las cuentas de correo compartidas (incluidas las del plan de hosting), se realiza una copia de seguridad automática diaria en otro datacenter.

### Política de cookies

**Cookies y rastreadores utilizados en el marco de la prestación del servicio de alojamiento compartido.**

Para garantizar el buen funcionamiento de los sitios web alojados en el marco del servicio de alojamiento web compartido, la cookie "SERVER ID" se almacena en los terminales de los visitantes de dichos sitios web. La cookie "SERVER ID" permite garantizar un servicio de balanceo de carga del tráfico entrante entre las distintas infraestructuras utilizadas para el alojamiento del sitio web (OVHcloud Load Balancer). Permite al usuario permanecer en el mismo servidor host durante toda la sesión. 

> [!success]
>
> En el lenguaje informático, se denomina "sesión" a un período de tiempo determinado durante el cual un dispositivo (ordenador, smartphone, etc.) interactúa con un servidor.
>

Esto permite mantener y preservar la coherencia del recorrido del usuario.

La cookie "SERVER ID" consiste en una escritura en el terminal del usuario que indica la instancia (servidor) de la infraestructura con la que el usuario interactúa. La cookie es anónima en el sentido de que no se utiliza ningún dato de carácter personal del usuario.

La cookie "SERVER ID" se almacena en el terminal del usuario durante menos de 24 horas.

En el caso de una cookie:

 - 1: necesario para el funcionamiento del servicio de alojamiento web compartido;
 - 2: anónimo.

No se ve afectado por la obtención previa del consentimiento del visitante del sitio web en el sentido del Reglamento General de Protección de Datos (RGPD).

### Información sobre las herramientas de estadística

**OVHcloud Web Statistics**

OVHcloud pone a disposición del cliente estadísticas de afluencia y de medición de audiencia del sitio o sitios web alojados como parte del servicio de alojamiento compartido. ("OVHcloud Web Statistics"). "OVHcloud Web Statistics" permite identificar la zona geográfica de los visitantes de los sitios web alojados como parte del servicio de un alojamiento web compartido, las características de sus terminales, de las páginas vistas y los códigos HTTP. "OVHcloud Web Statistics" se activa por defecto como parte del servicio de un alojamiento compartido y puede desactivarse a petición del cliente contactando con el soporte técnico. Con el fin de ofrecer "OVHcloud Web Statistics", OVHcloud realiza operaciones de tratamiento de datos.

Los informes "OVHcloud Web Statistics" se elaboran a partir de datos de tráfico anonimizados, como la dirección IP y los logs de los usuarios de los sitios web alojados como parte de un plan de hosting, la URL de la consulta, la duración de la consulta y el "useragent".

Para ser utilizados en el marco de "OVHcloud Web Statistics", los datos mencionados anteriormente se anonimizan y se agregan mediante algoritmos realizados por OVHcloud, en sus propias infraestructuras. En particular, la dirección IP del visitante presente en los datos de tráfico se extrae de forma anonimizada con el fin de procesarla y analizarla para determinar su geolocalización (limitada a un nivel regional). Así pues, en el marco de "OVHcloud Web Statistics" no se conserva ningún dato de carácter personal que permita la identificación directa o indirecta de los visitantes citados anteriormente.  

## Más información <a name="go-further"></a>

[Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection)

[Habilitar HTTPS en un sitio web con SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optimización del rendimiento de su sitio web](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Restaurar el espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Recuperar la copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).