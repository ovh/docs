---
title: "Resolver los errores más frecuentes asociados a las bases de datos"
excerpt: "Diagnóstico de los errores más comunes relacionados con las bases de datos"
updated: 2023-10-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El uso de sus bases de datos puede dar lugar a una serie de anomalías en su sitio web o su [área de cliente OVHcloud](/links/manager), así como en la interfaz [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin).

**Descubra cómo solucionar los errores relacionados con las bases de datos de los alojamientos compartidos de OVHcloud.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Le ofrecemos esta guía para ayudarle a completar mejor las tareas más comunes. Sin embargo, le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del programa o la interfaz. Nosotros no podremos asistirle. Más información en la sección [Más información](#go-further) de esta guía.
>

## Requisitos

- Disponer de un [plan de hosting](/links/web/hosting) OVHcloud.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Utilizar uno de nuestros productos de bases de datos [Web Cloud](/links/web/hosting-options-startsql) o [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/).

## Procedimiento

### "Error al conectar a la base de datos"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Comprobar los incidentes en curso

En primer lugar, compruebe en [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/) que su datacenter, su cluster de alojamiento, su servidor Web Cloud Databases no se ven afectados por ningún incidente en la infraestructura de OVHcloud.

> [!primary]
>
> Para encontrar esta información, conéctese a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action} :
>
> - Para encontrar el `Datacenter` de su alojamiento, así como su `Filer` (servidor de archivos), seleccione `Alojamientos`{.action} y, seguidamente, el alojamiento correspondiente. Puede consultar esta información en la pestaña `Información general`{.action}.
> - Para consultar el **cluster** de servidores en el que se encuentra el alojamiento, abra la pestaña `FTP-SSH`{.action}. Esta información aparecerá en el nombre del servidor FTP.
> - Para encontrar el nombre de su servidor **Web Cloud Databases**, haga clic en `Bases de datos`{.action} y seleccione el servicio correspondiente. Puede consultar esta información en la pestaña `Información general`{.action}.
>

#### Comprobar las claves de conexión a su base de datos <a name="config_file"></a>

Conéctese al espacio de almacenamiento de archivos de su alojamiento mediante [FTP](/pages/web_cloud/web_hosting/ftp_connection) y consulte el archivo de configuración de su sitio web (por ejemplo, para un sitio web WordPress, se trata del archivo **wp-config.php** situado en el directorio que contiene su sitio web).

> [!warning]
>
> La elección y configuración del archivo que contiene la información de conexión a la base de datos es inherente al editor de contenidos (CMS) correspondiente y no a OVHcloud.
>
> Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizado para crear su sitio web o con un [proveedor especializado](/links/partner). No podremos asistirle en este asunto.
>

Compruebe la coincidencia **exacta** entre los identificadores de conexión a [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceso-a-la-interfaz-phpmyadmin) y los del fichero de configuración de su sitio web.

Cambie, si es necesario, la [contraseña de su base de datos](/pages/web_cloud/web_hosting/sql_change_password).

#### Ejemplo para WordPress

Si su sitio web muestra un mensaje **"Error al conectarse a la base de datos"** y no se ve afectado por un [incidente](https://web-cloud.status-ovhcloud.com/), conéctese a [FTP](/pages/web_cloud/web_hosting/ftp_connection) a su alojamiento y abra el directorio que contiene su sitio web (por defecto es el directorio "www").

Si se trata de un sitio web WordPress, abra el archivo **wp-config.php**.

```php
define('DB_NAME', 'my_database');
 
/** MySQL database username */
define('DB_USER', 'my_user');
 
/** MySQL database password */
define('DB_PASSWORD', 'my_password');
 
/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

En el área de cliente de OVHcloud](/links/manager), haga clic en la pestaña `Bases de datos`{.action} y compruebe la correspondencia entre los elementos mostrados y los presentes en el archivo **wp-config.php**.

- **my_database** debe coincidir con lo que se indica en el símbolo "Nombre de la base de datos" ;
- **my_user** debe coincidir con lo que se indica en `Nombre de usuario`;
- **my_password** corresponde a [contraseña de la base de datos](/pages/web_cloud/web_hosting/sql_change_password);
- **my_server.mysql.db** debe coincidir con lo que se indica en `Dirección del servidor`.

> [!primary]
>
> Si esta operación no le permite restablecer el acceso a su sitio web, [guarde su base de datos](/pages/web_cloud/web_hosting/sql_database_export) y después [restablezca-la a una fecha anterior](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#1-restaurar-una-copia-de-seguridad-existente) desde su [área de cliente OVHcloud](/links/manager).
>
> Contacte a continuación con un [proveedor especializado](/links/partner) si es necesario. No podremos asistirle en este asunto.
>

### Superación del límite autorizado de la base de datos

Nuestros servicios le han enviado por correo electrónico un mensaje indicándole que la cantidad de datos en la base de datos supera el límite autorizado. La base de datos ha pasado a ser de solo lectura. Esto impide realizar cambios en el sitio web.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Desbloquee la base de datos de tres formas distintas:

#### Método 1: cambiar la suscripción a un plan superior

Si dispone de una fórmula **Personal** o **Profesional**, le recomendamos que cambie a [plan de hosting superior](/links/web/hosting). Este cambio de suscripción aumentará el tamaño de la base de datos, lo que la reabrirá automáticamente. Este método es el más sencillo y no necesita conocimientos técnicos específicos.

> [!warning]
>
> El aumento del tamaño de la base de datos puede deberse a un fallo de funcionamiento en el código interno del sitio web.
>
> Una anomalía puede conllevar un aumento permanente del tamaño de la base de datos, en cuyo caso el cambio de plan de hosting sería ineficaz.
>
> Si detecta un aumento repentino en el tamaño de su base de datos o si tiene un sitio web de tipo "blog" que normalmente no consume datos, le recomendamos que contacte inmediatamente con un [proveedor especializado](/links/partner). No podremos ofrecerle soporte sobre este tema.
>

Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager), haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Haga clic en el botón `...`{.action} en el epígrafe `Producto` situado a la derecha de su pantalla y, seguidamente, en `Cambiar de plan`{.action}.

Si utiliza un plan **Performance**, consulte el [método 2](#methode2).

#### Método 2: migrar sus datos a una base de datos de tamaño superior <a name="methode2"></a>

También puede migrar sus datos a una nueva base de datos:

- Contrate, si es necesario, una [base de datos](/links/web/hosting-options-startsql) de mayor tamaño y lance su [creación](/pages/web_cloud/web_hosting/sql_create_database).
- Realice un [exportar sus datos](/pages/web_cloud/web_hosting/sql_database_export) y a continuación [importar los](/pages/web_cloud/web_hosting/sql_importing_mysql_database) en la nueva base de datos;
- Integre las claves de la nueva base de datos en el [archivo de configuración](#config_file) de su sitio web.

> [!primary]
>
> Si dispone de un alojamiento **Performance**, también puede [activar gratis un servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb#activacion-de-su-servidor-clouddb-incluido-con-su-plan-de-hosting).
>

#### Método 3: eliminar datos innecesarios

Una vez realizada la [copia de seguridad de su base de datos](/pages/web_cloud/web_hosting/sql_database_export), conéctese a su interfaz [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin) para eliminar los datos innecesarios con los comandos Drop, Delete y Truncate.

Abra la pestaña `Bases de datos`{.action} del alojamiento correspondiente e inicie el cálculo de la cuota utilizada. pulse el botón `...`{.action} correspondiente y luego `Recalcular el espacio utilizado`{.action}.

> [!warning]
>
> Esta operación requiere fuertes conocimientos técnicos. Le recomendamos que, si lo necesita, contacte con un [proveedor especializado](/links/partner). No podremos asistirle en este asunto.
>

#### Método 4: optimizar la base de datos

Para optimizar su base de datos, siga las instrucciones de nuestra guía "[Configurar su servidor de bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos)". Abra la pestaña `Bases de datos`{.action} de su alojamiento y haga clic en el botón `...`{.action} de la base de datos en cuestión.

> [!warning]
>
> Si el asesoramiento ofrecido sobre la optimización de su base de datos no bastaba para desbloquear el acceso a su sitio web, le recomendamos que se ponga en contacto con nuestra [comunidad de usuarios](/links/community) o con los [partners de OVHcloud](/links/partner). Nosotros no podremos asistirle en este asunto.
>

### Memoria RAM rebasada

El siguiente mensaje, situado en la sección `Bases de datos`{.action} de su [área de cliente de OVHcloud](/links/manager), indica que su servidor [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/) ha consumido una cantidad de recursos demasiado grande en la infraestructura de OVHcloud:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

En ese caso, puede aumentar la [cantidad de memoria RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#cambiar-la-oferta-del-servidor-de-bases-de-datos) disponible desde la sección `Bases de datos`{.action} de su [área de cliente OVHcloud](/links/manager). En la pestaña `Información general`{.action}, haga clic en el botón `...`{.action} en la sección `RAM`.

> [!warning]
>
> Para aumentar la RAM, el Web Cloud Databases no debe activarse a través de un hosting Performance. Si quiere aumentar la cantidad de memoria RAM de una base de datos incluida en los [planes Performance](/links/web/hosting-performance-offer){.external}, deberá desvincularla primero.
> 
> Para desvincular la base de datos, conéctese a su [área de cliente de OVHcloud](/links/manager) y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento web en el que esté activado el Web Cloud Databases.
>
> En el área de `Configuración`, haga clic en los `...`{.action} a la derecha de la entrada de la `Base de datos privada` y haga clic en el botón `Desvincular`{.action}.
>

También puede optimizar su base de datos siguiendo las instrucciones de nuestra guía "[Configurar su servidor de bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos)".

> [!primary]
>
> Si tiene dificultades para reducir el uso de los recursos en su servidor de bases de datos y no quiere aumentarlos, contacte con nuestra [comunidad](/links/community) o con los [partners de OVHcloud](/links/partner). No podremos asistirle en este asunto.
>

### Errores de importación de bases de datos

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Este mensaje de error significa que la base de datos que está intentando importar contiene elementos no autorizados en la infraestructura compartida de OVHcloud.

En primer lugar, asegúrese de que la base de datos esté vacía en la pestaña `Bases de datos`{.action} del alojamiento correspondiente (haga clic en el botón `...`{.action}) correspondiente y seleccione `Recalcular el espacio utilizado`{.action}.

En caso contrario, [guarde los datos presentes](/pages/web_cloud/web_hosting/sql_database_export) en la base de datos y después borre la base de datos antes de reanudar la operación de importación.

También puede marcar la casilla `Vaciar la base de datos actual`{.action} justo antes de [iniciar la importación](/pages/web_cloud/web_hosting/sql_importing_mysql_database#importar-una-copia-de-seguridad-desde-el-area-de-cliente):

![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}

Este mensaje de error significa que la base de datos que está intentando importar contiene elementos no autorizados en la infraestructura compartida de OVHcloud. Si lo necesita, puede ponerse en contacto con nuestra [comunidad de usuarios](/links/community) o con un [proveedor especializado](/links/partner). No podremos asistirle en la corrección de esta anomalía.

> [!faq]
>
> ¿Qué elementos del script de importación de mi base de datos pueden causar un error "#1044 - Access denied for user to database"?

Tener un **"trigger"** en el script de importación de su base de datos no está autorizado en los servidores de alojamiento compartido de OVHcloud. En ese caso, importe la base de datos en un servidor [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/).

Por otro lado, no está permitida la siguiente petición:

```sql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Sustituya por:

```sql
USE `Database-Name`;
```

(`Database-Name`: indique el nombre de la base de datos indicada en su [área de cliente de OVHcloud](/links/manager))

#### "MySQL server has gone away"

>
> **"ERROR MySQL server has gone away"**
>

Este mensaje de error aparece durante [la importación de una base de datos](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#2-importar-una-copia-de-seguridad-local) en un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). La mayor parte del tiempo se debe a la cantidad excesiva de datos que se van a importar o a la falta de optimización de las peticiones SQL en el script de importación.

Para resolver esta anomalía, puede:

- Aumentar la [cantidad de memoria RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#seguimiento-de-la-ram-consumida). Para ello, acceda al [servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) correspondiente en la sección `Bases de datos`{.action} de su [área de cliente OVHcloud](/links/manager). Haga clic en el botón `...`{.action} en la sección `RAM` y, seguidamente, en `Cambiar la cantidad de RAM`{.action}.

- Fraccione su base de datos para importarla en varias operaciones en lugar de una (para cualquier duda sobre las operaciones a realizar, contacte con nuestra [comunidad](/links/community) o con los [partners de OVHcloud](/links/partner). Nosotros no podremos asistirle en este asunto.

- [Optimice su base de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos) y luego repite las operaciones de exportación/importación.

### No se ha podido acceder a PhpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Este mensaje de error puede aparecer al conectarse a la base de datos por [PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin). Indica que los identificadores introducidos son incorrectos.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

En ese caso, [compruebe los identificadores indicados](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#procedimiento) y cambie si es necesario la [contraseña de su base de datos](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

El número máximo de conexiones activas para las bases de datos entregadas con los alojamientos compartidos [StartSQL](/links/web/hosting-options-startsql) es de **30**.

Este número es de **200** para las bases de servidores [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Puede cambiar este parámetro en la sección `Configuración`{.action} del servidor de la base de datos).

Este mensaje aparece durante [conexión a PhpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin) cuando se supera el número máximo de conexiones.

En ese caso, deberá [optimizar las bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos) para reducir el número de conexiones activas.

> [!warning]
>
> Para más información sobre las operaciones que debe realizar para reducir el número de conexiones activas a la base de datos, contacte con nuestra [comunidad](/links/community) o con los [partners de OVHcloud](/links/partner). Nosotros no podremos asistirle en este asunto.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Este mensaje de error aparece durante [conexión a PhpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#procedimiento) cuando el nombre del servidor introducido es incorrecto.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Compruebe el nombre del servidor que quiera registrar en su [área de cliente de OVHcloud](/links/manager).

> [!success]
>
> Si la base de datos a la que desea conectarse aparece en la pestaña `Bases de datos`{.action} de la parte `Alojamientos`{.action} de su [área de cliente de OVHcloud](/links/manager), el nombre que debe introducir se indica en la columna `Dirección del servidor`.
>
> Si desea conectarse a una base de datos en un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), el nombre del servidor a introducir se inscribe en la pestaña `Información general`{.action}, parte `Datos de conexión`{.action}, `SQL`{.action} y en el `Nombre del host`{.action}.
>

## Más información <a name="go-further"></a>

[Primeros pasos con el servicio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).