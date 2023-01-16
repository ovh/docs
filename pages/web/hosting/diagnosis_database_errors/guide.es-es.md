---
title: Resolver los errores más frecuentes asociados a las bases de datos 
excerpt: Diagnóstico de los errores más comunes relacionados con las bases de datos
slug: error-requentes-base-de-datos
section: Diagnóstico
Order: 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 09/12/2022**

## Objetivo

El uso de sus bases de datos puede dar lugar a una serie de anomalías en su sitio web o su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), así como en la interfaz [PhpMyAdmin](https://docs.ovh.com/es/hosting/crear-base-de-datos/#acceder-a-la-interfaz-phpmyadmin).

**Descubra cómo solucionar los errores relacionados con las bases de datos de los alojamientos compartidos de OVHcloud.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Le ofrecemos esta guía para ayudarle a completar mejor las tareas más comunes. Sin embargo, le recomendamos que, si necesita ayuda, contacte con un proveedor de servicios especializado o con el editor del programa o la interfaz. Nosotros no podremos asistirle. Más información en la sección [Más información](#gofurther) de esta guía.
>

## Requisitos

- Disponer de un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/) OVHcloud.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Utilizar uno de nuestros productos de bases de datos [Web Cloud](https://www.ovhcloud.com/es-es/web-hosting/options/start-sql/) o [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/).

## Procedimiento

### "Error al conectar a la base de datos"

#### Comprobar los incidentes en curso

En primer lugar, compruebe en [https://web-cloud.status-ovhcloud.com/](https://web-cloud.status-ovhcloud.com/) que su datacenter, su cluster de alojamiento, su servidor Web Cloud Databases no se ven afectados por ningún incidente en la infraestructura de OVHcloud.

> [!primary]
>
> Para encontrar esta información, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), en la sección `Web Cloud`{.action} :
>
> - Para encontrar el `Datacenter` de su alojamiento, así como su `Filer` (servidor de archivos), seleccione `Alojamientos`{.action} y, seguidamente, el alojamiento correspondiente. Puede consultar esta información en la pestaña `Información general`{.action}.
> - Para consultar el **cluster** de servidores en el que se encuentra el alojamiento, abra la pestaña `FTP-SSH`{.action}. Esta información aparecerá en el nombre del servidor FTP.
> - Para encontrar el nombre de su servidor **Web Cloud Databases**, haga clic en `Bases de datos`{.action} y seleccione el servicio correspondiente. Puede consultar esta información en la pestaña `Información general`{.action}.
>

#### Comprobar las claves de conexión a su base de datos <a name="config_file"></a>

Conéctese al espacio de almacenamiento de archivos de su alojamiento mediante [FTP](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) y consulte el archivo de configuración de su sitio web (por ejemplo, para un sitio web WordPress, se trata del archivo **wp-config.php** situado en el directorio que contiene su sitio web).

> [!warning]
>
> La elección y configuración del archivo que contiene la información de conexión a la base de datos es inherente al editor de contenidos (CMS) correspondiente y no a OVHcloud.
>
> Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del [CMS](https://docs.ovh.com/es/hosting/modulos-en-un-clic/) utilizado para crear su sitio web o con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). No podremos asistirle en este asunto.
>

Compruebe la coincidencia **exacta** entre los identificadores de conexión a [PhpMyAdmin](https://docs.ovh.com/es/hosting/crear-base-de-datos/#acceso-a-la-interfaz-phpmyadmin) y los del fichero de configuración de su sitio web.

Cambie, si es necesario, la [contraseña de su base de datos](https://docs.ovh.com/es/hosting/cambiar-contrasena-base-de-datos/).

#### Ejemplo para WordPress

Si su sitio web muestra un mensaje **"Error al conectarse a la base de datos"** y no se ve afectado por un [incidente](https://web-cloud.status-ovhcloud.com/), conéctese a [FTP](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) a su alojamiento y abra el directorio que contiene su sitio web (por defecto es el directorio "www").

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

En el área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en la pestaña `Bases de datos`{.action} y compruebe la correspondencia entre los elementos mostrados y los presentes en el archivo **wp-config.php**.

- **my_database** debe coincidir con lo que se indica en el símbolo "Nombre de la base de datos" ;
- **my_user** debe coincidir con lo que se indica en `Nombre de usuario`;
- **my_password** corresponde a [contraseña de la base de datos](https://docs.ovh.com/es/hosting/cambiar-contrasena-base-de-datos/);
- **my_server.mysql.db** debe coincidir con lo que se indica en `Dirección del servidor`.

> [!primary]
>
> Si esta operación no le permite restablecer el acceso a su sitio web, [guarde su base de datos](https://docs.ovh.com/es/hosting/web_hosting_exportacion_de_una_base_de_datos/) y después [restablezca-la a una fecha anterior](https://docs.ovh.com/es/hosting/restaurar-importar-base-de-datos/#1-restaurar-una-copia-de-seguridad-existente) desde su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
>
> Contacte a continuación con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) si es necesario. No podremos asistirle en este asunto.
>

### Superación del límite autorizado de la base de datos

Nuestros servicios le han enviado por correo electrónico un mensaje indicándole que la cantidad de datos en la base de datos supera el límite autorizado. La base de datos ha pasado a ser de solo lectura. Esto impide realizar cambios en el sitio web.

![mail_overquota](images/mail_overquota.png){.thumbnail}

Desbloquee la base de datos de tres formas distintas:

#### Método 1: cambiar la suscripción a un plan superior

Si dispone de una fórmula **Personal** o **Profesional**, le recomendamos que cambie a [plan de hosting superior](https://www.ovhcloud.com/es-es/web-hosting/). Este cambio de suscripción aumentará el tamaño de la base de datos, lo que la reabrirá automáticamente. Este método es el más sencillo y no necesita conocimientos técnicos específicos.

> [!warning]
>
> El aumento del tamaño de la base de datos puede deberse a un fallo de funcionamiento en el código interno del sitio web.
>
> Una anomalía puede conllevar un aumento permanente del tamaño de la base de datos, en cuyo caso el cambio de plan de hosting sería ineficaz.
>
> Si detecta un aumento repentino en el tamaño de su base de datos o si tiene un sitio web de tipo "blog" que normalmente no consume datos, le recomendamos que contacte inmediatamente con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). No podremos ofrecerle soporte sobre este tema.
>

Para ello, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. Haga clic en el botón `...`{.action} en el epígrafe `Producto` situado a la derecha de su pantalla y, seguidamente, en `Cambiar de plan`{.action}.

Si utiliza un plan **Performance**, consulte el [método 2](#methode2).

#### Método 2: migrar sus datos a una base de datos de tamaño superior <a name="methode2"></a>

También puede migrar sus datos a una nueva base de datos:

- Contrate, si es necesario, una [base de datos](https://www.ovhcloud.com/es-es/web-hosting/options/start-sql/) de mayor tamaño y lance su [creación](https://docs.ovh.com/es/hosting/crear-base-de-datos/).
- Realice un [exportar sus datos](https://docs.ovh.com/es/hosting/web_hosting_exportacion_de_una_base_de_datos/) y a continuación [importar los](https://docs.ovh.com/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/) en la nueva base de datos;
- Integre las claves de la nueva base de datos en el [archivo de configuración](#config_file) de su sitio web.

> [!primary]
>
> Si dispone de un alojamiento **Performance**, también puede [activar gratis un servidor Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/#activacion-de-su-servidor-clouddb-incluido-con-su-plan-de-hosting).
>

#### Método 3: eliminar datos innecesarios

Una vez realizada la [copia de seguridad de su base de datos](https://docs.ovh.com/es/hosting/web_hosting_exportacion_de_una_base_de_datos/), conéctese a su interfaz [PhpMyAdmin](https://docs.ovh.com/es/hosting/crear-base-de-datos/#acceder-a-la-interfaz-phpmyadmin) para eliminar los datos innecesarios con los comandos Drop, Delete y Truncate.

Abra la pestaña `Bases de datos`{.action} del alojamiento correspondiente e inicie el cálculo de la cuota utilizada. pulse el botón `...`{.action} correspondiente y luego `Recalcular el espacio utilizado`{.action}.

> [!warning]
>
> Esta operación requiere fuertes conocimientos técnicos. Le recomendamos que, si lo necesita, contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). No podremos asistirle en este asunto.
>

#### Método 4: optimizar la base de datos

Para optimizar su base de datos, siga las instrucciones de nuestra guía "[Configurar su servidor de bases de datos](https://docs.ovh.com/es/hosting/configurar-optimizar-su-servidor-de-base-de-datos/#gestionar-las-bases-de-datos_1)". Abra la pestaña `Bases de datos`{.action} de su alojamiento y haga clic en el botón `...`{.action} de la base de datos en cuestión.

> [!warning]
>
> Si el asesoramiento ofrecido sobre la optimización de su base de datos no bastaba para desbloquear el acceso a su sitio web, le recomendamos que se ponga en contacto con nuestra [comunidad de usuarios](https://community.ovh.com/en/) o con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/). Nosotros no podremos asistirle en este asunto.
>

### Memoria RAM rebasada

El siguiente mensaje, situado en la sección `Bases de datos`{.action} de su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), indica que su servidor [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/) ha consumido una cantidad de recursos demasiado grande en la infraestructura de OVHcloud:

![quota_exceeding](images/quota_exceeding.png){.thumbnail}

En ese caso, puede aumentar la [cantidad de memoria RAM](https://docs.ovh.com/es/hosting/configurar-optimizar-su-servidor-de-base-de-datos/#cambiar-la-oferta-del-servidor-de-bases-de-datos_1) disponible desde la sección `Bases de datos`{.action} de su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). En la pestaña `Información general`{.action}, haga clic en el botón `...`{.action} en la sección `RAM`.

> [!warning]
>
> Para aumentar la RAM, el Web Cloud Databases no debe activarse a través de un hosting Performance. Si quiere aumentar la cantidad de memoria RAM de una base de datos incluida en los [planes Performance](https://www.ovhcloud.com/es-es/web-hosting/performance-offer/){.external}, deberá desvincularla primero.
> 
> Para desvincular la base de datos, conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} y seleccione el alojamiento web en el que esté activado el Web Cloud Databases.
>
> En el área de `Configuración`, haga clic en los `...`{.action} a la derecha de la entrada de la `Base de datos privada` y haga clic en el botón `Desvincular`{.action}.
>

También puede optimizar su base de datos siguiendo las instrucciones de nuestra guía "[Configurar su servidor de bases de datos](https://docs.ovh.com/es/hosting/configurar-optimizar-su-servidor-de-base-de-datos/#gestionar-las-bases-de-datos_1)".

> [!primary]
>
> Si tiene dificultades para reducir el uso de los recursos en su servidor de bases de datos y no quiere aumentarlos, contacte con nuestra [comunidad](https://community.ovh.com/en/) o con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/). No podremos asistirle en este asunto.
>

### Errores de importación de bases de datos

#### "Access denied for user to database"

>
> **"#1044 - Access denied for user to database"**
>

Este mensaje de error significa que la base de datos que está intentando importar contiene elementos no autorizados en la infraestructura compartida de OVHcloud.

En primer lugar, asegúrese de que la base de datos esté vacía en la pestaña `Bases de datos`{.action} del alojamiento correspondiente (haga clic en el botón `...`{.action}) correspondiente y seleccione `Recalcular el espacio utilizado`{.action}.

En caso contrario, [guarde los datos presentes](https://docs.ovh.com/es/hosting/web_hosting_exportacion_de_una_base_de_datos/) en la base de datos y después borre la base de datos antes de reanudar la operación de importación.

También puede marcar la casilla `Vaciar la base de datos actual`{.action} justo antes de [iniciar la importación](https://docs.ovh.com/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/#importar-una-copia-de-seguridad-desde-el-area-de-cliente):

![database-import-empty](images/database-import-empty.png){.thumbnail}

Este mensaje de error significa que la base de datos que está intentando importar contiene elementos no autorizados en la infraestructura compartida de OVHcloud. Si lo necesita, puede ponerse en contacto con nuestra [comunidad de usuarios](https://community.ovh.com/en/) o con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). No podremos asistirle en la corrección de esta anomalía.

> [!faq]
>
> ¿Qué elementos del script de importación de mi base de datos pueden causar un error "#1044 - Access denied for user to database"?

Tener un **"trigger"** en el script de importación de su base de datos no está autorizado en los servidores de alojamiento compartido de OVHcloud. En ese caso, importe la base de datos en un servidor [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/).

Por otro lado, no está permitida la siguiente petición:

```mysql
CREATE DATABASE IF NOT EXISTS `Database-Name` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci; 
```

Sustituya por:

```mysql
USE `Database-Name`;
```

(`Database-Name`: indique el nombre de la base de datos indicada en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es))

#### "MySQL server has gone away"

>
> **"ERROR MySQL server has gone away"**
>

Este mensaje de error aparece durante [la importación de una base de datos](https://docs.ovh.com/es/hosting/restaurar-importar-base-de-datos/#2-importar-una-copia-de-seguridad-local) en un servidor [Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/). La mayor parte del tiempo se debe a la cantidad excesiva de datos que se van a importar o a la falta de optimización de las peticiones SQL en el script de importación.

Para resolver esta anomalía, puede:

- Aumentar la [cantidad de memoria RAM](https://docs.ovh.com/es/hosting/configurar-optimizar-su-servidor-de-base-de-datos/#seguimiento-de-la-ram-consumida). Para ello, acceda al [servidor Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/) correspondiente en la sección `Bases de datos`{.action} de su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Haga clic en el botón `...`{.action} en la sección `RAM` y, seguidamente, en `Cambiar la cantidad de RAM`{.action}.

- Fraccione su base de datos para importarla en varias operaciones en lugar de una (para cualquier duda sobre las operaciones a realizar, contacte con nuestra [comunidad](https://community.ovh.com/en/) o con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/). Nosotros no podremos asistirle en este asunto.

- [Optimice su base de datos](https://docs.ovh.com/es/hosting/configurar-optimizar-su-servidor-de-base-de-datos/#gestionar-las-bases-de-datos_1) y luego repite las operaciones de exportación/importación.

### No se ha podido acceder a PhpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Este mensaje de error puede aparecer al conectarse a la base de datos por [PhpMyAdmin](https://docs.ovh.com/es/hosting/crear-base-de-datos/#acceder-a-la-interfaz-phpmyadmin). Indica que los identificadores introducidos son incorrectos.

![access_denied_for_user](images/access_denied_for_user.png){.thumbnail}

En ese caso, [compruebe los identificadores indicados](https://docs.ovh.com/es/hosting/coneccion-base-de-datos-servidor-bdd/#procedimiento) y cambie si es necesario la [contraseña de su base de datos](https://docs.ovh.com/es/hosting/cambiar-contrasena-base-de-datos/).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

El número máximo de conexiones activas para las bases de datos entregadas con los alojamientos compartidos [StartSQL](https://www.ovhcloud.com/es-es/web-hosting/options/start-sql/) es de **30**.

Este número es de **200** para las bases de servidores [Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/). (Puede cambiar este parámetro en la sección `Configuración`{.action} del servidor de la base de datos).

Este mensaje aparece durante [conexión a PhpMyAdmin](https://docs.ovh.com/es/hosting/crear-base-de-datos/#acceder-a-la-interfaz-phpmyadmin) cuando se supera el número máximo de conexiones.

En ese caso, deberá [optimizar las bases de datos](https://docs.ovh.com/es/hosting/configurar-optimizar-su-servidor-de-base-de-datos/#gestionar-las-bases-de-datos_1) para reducir el número de conexiones activas.

> [!warning]
>
> Para más información sobre las operaciones que debe realizar para reducir el número de conexiones activas a la base de datos, contacte con nuestra [comunidad](https://community.ovh.com/en/) o con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/). Nosotros no podremos asistirle en este asunto.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Este mensaje de error aparece durante [conexión a PhpMyAdmin](https://docs.ovh.com/es/hosting/coneccion-base-de-datos-servidor-bdd/#procedimiento) cuando el nombre del servidor introducido es incorrecto.

![name_or_service_not_known](images/name_or_service_not_known.png){.thumbnail}

Compruebe el nombre del servidor que quiera registrar en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

> [!success]
>
> Si la base de datos a la que desea conectarse aparece en la pestaña `Bases de datos`{.action} de la parte `Alojamientos`{.action} de su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), el nombre que debe introducir se indica en la columna `Dirección del servidor`.
>
> Si desea conectarse a una base de datos en un servidor [Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/), el nombre del servidor a introducir se inscribe en la pestaña `Información general`{.action}, parte `Datos de conexión`{.action}, `SQL`{.action} y en el `Nombre del host`{.action}.
>

## Más información <a name="gofurther"></a>

[Primeros pasos con el servicio Web Cloud Databases](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.