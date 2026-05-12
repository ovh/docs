---
title: "Resolver los errores más frecuentes asociados a las bases de datos"
excerpt: "Diagnóstico de los errores más comunes relacionados con las bases de datos"
updated: 2026-03-31
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

El uso de sus bases de datos puede dar lugar a una serie de anomalías en su sitio web o su [área de cliente OVHcloud](/links/manager), así como en la interfaz [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database).

**Descubra cómo solucionar los errores relacionados con las bases de datos de los alojamientos compartidos de OVHcloud.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Le ofrecemos esta guía para ayudarle a completar mejor las tareas más comunes. Sin embargo, le recomendamos que, si necesita ayuda, contacte con un [proveedor de servicios especializado](/links/partner) o con el editor del programa o la interfaz. Nosotros no podremos asistirle. Más información en la sección [Más información](#go-further) de esta guía.
>

## Requisitos

- Disponer de un [plan de hosting OVHcloud](/links/web/hosting).
- Utilizar uno de nuestros productos de bases de datos [Web Cloud](/links/web/hosting-options-startsql) o [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### "Error al conectar a la base de datos"

![error_establishing_a_DB_connection](/pages/assets/screens/other/browsers/errors/error-establishing-a-db-connection.png){.thumbnail}

#### Comprobar los incidentes en curso

Compruebe en primer lugar en la página [Web Cloud Status](https://web-cloud.status-ovhcloud.com/) que su centro de datos, su clúster de alojamiento web, su servidor Web Cloud Databases o su base de datos no estén afectados por un incidente en la infraestructura de OVHcloud.

**Haga clic en la información que busca para ver el contenido.**

/// details | Encontrar el datacenter de su alojamiento web

Haga clic en las pestañas para ver sucesivamente cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Información general`{.action}, localice el `Datacenter`.

///

/// details | Encontrar el clúster y el filer de su alojamiento web

Consulte nuestra guía "[Conocer el clúster y el filer de su alojamiento web](/pages/web_cloud/web_hosting/how_to_know_cluster_and_filer)".

///

/// details | Encontrar el nombre del servidor Web Cloud Databases

Haga clic en las pestañas para ver sucesivamente cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione el servicio correspondiente.
>>
>> ![Selección de un servidor Web Cloud Databases en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Localice `Nombre del host` en el apartado `SQL` de la sección `Datos de conexión`.

///

/// details | Encontrar el servidor de su base de datos de alojamiento web

Consulte nuestra guía "[Encontrar el servidor de su base de datos](/pages/web_cloud/web_hosting/sql_find_server)".

///

#### Comprobar las claves de conexión a su base de datos <a name="config_file"></a>

Conéctese al espacio de almacenamiento de archivos de su alojamiento mediante [FTP](/pages/web_cloud/web_hosting/ftp_connection) y consulte el archivo de configuración de su sitio web (por ejemplo, para un sitio web WordPress, se trata del archivo **wp-config.php** situado en el directorio que contiene su sitio web).

> [!warning]
>
> La elección y configuración del archivo que contiene la información de conexión a la base de datos es inherente al editor de contenidos (CMS) correspondiente y no a OVHcloud.
>
> Si necesita ayuda, le recomendamos que se ponga en contacto con el editor del [CMS](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizado para crear su sitio web o con un [proveedor especializado](/links/partner). No podremos asistirle en este asunto.
>

Compruebe la coincidencia **exacta** entre los identificadores de conexión a [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceso-a-la-interfaz-phpmyadmin) y los del fichero de configuración de su sitio web.

Cambie, si es necesario, la [contraseña de su base de datos](/pages/web_cloud/web_hosting/sql_change_password).

#### Ejemplo para WordPress

Si su sitio web muestra un mensaje **"Error al conectarse a la base de datos"** y no se ve afectado por un [incidente](https://web-cloud.status-ovhcloud.com/), conéctese a [FTP](/pages/web_cloud/web_hosting/ftp_connection) a su alojamiento y abra el directorio que contiene su sitio web (por defecto es el directorio `www`).

Si se trata de un sitio web WordPress, abra el archivo `wp-config.php`.

```php
define('DB_NAME', 'my_database');

/** MySQL database username */
define('DB_USER', 'my_user');

/** MySQL database password */
define('DB_PASSWORD', 'my_password');

/** MySQL hostname */
define('DB_HOST', 'my_server.mysql.db:port');
```

Haga clic en las pestañas para ver sucesivamente cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action} y compruebe la correspondencia entre los elementos mostrados y los presentes en el archivo `wp-config.php`:
>>
>> - **my_database** debe coincidir con lo que se indica en `Nombre de la base de datos`;
>> - **my_user** debe coincidir con lo que se indica en `Nombre de usuario`;
>> - **my_password** corresponde a la [contraseña de la base de datos](/pages/web_cloud/web_hosting/sql_change_password);
>> - **my_server.mysql.db** debe coincidir con lo que se indica en `Dirección del servidor`.

> [!primary]
>
> Si esta operación no le permite restablecer el acceso a su sitio web, [guarde su base de datos](/pages/web_cloud/web_hosting/sql_database_export) y después [restablézcala a una fecha anterior](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#1-restaurar-una-copia-de-seguridad-existente) desde su [área de cliente OVHcloud](/links/manager).
>
> Contacte a continuación con un [proveedor especializado](/links/partner) si es necesario. No podremos asistirle en este asunto.
>

### Superación del límite autorizado de la base de datos

Nuestros servicios le han enviado por correo electrónico un mensaje indicándole que la cantidad de datos en la base de datos supera el límite autorizado. La base de datos ha pasado a ser de solo lectura. Esto impide realizar cambios en el sitio web.

![database-overquota-notification-email](/pages/assets/screens/email-sending-to-customer/databases/overquota-db.png){.thumbnail}

Desbloquee la base de datos de tres formas distintas:

#### Método 1: cambiar la suscripción a un plan superior

Si dispone de una fórmula **Starter** o **Personal**, le recomendamos que cambie a un [plan de hosting superior](/links/web/hosting). Este cambio de suscripción aumentará el tamaño de la base de datos, lo que la reabrirá automáticamente. Este método es el más sencillo y no necesita conocimientos técnicos específicos.

> [!warning]
>
> El aumento del tamaño de la base de datos puede deberse a un fallo de funcionamiento en el código interno del sitio web.
>
> Una anomalía puede conllevar un aumento permanente del tamaño de la base de datos, en cuyo caso el cambio de plan de hosting sería ineficaz.
>
> Si detecta un aumento repentino en el tamaño de su base de datos o si tiene un sitio web de tipo "blog" que normalmente no consume datos, le recomendamos que contacte inmediatamente con un [proveedor especializado](/links/partner). No podremos ofrecerle soporte sobre este tema.
>

Para realizar este cambio, haga clic en las pestañas para ver sucesivamente cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el botón `...`{.action} en el apartado `Solución` situado a la derecha de su pantalla.
>>
> **Etapa 3**
>>
>> Haga clic en `Cambiar de plan`{.action}.

Si utiliza un plan **Performance**, consulte el [método 2](#methode2).

#### Método 2: migrar sus datos a una base de datos de tamaño superior <a name="methode2"></a>

También puede migrar sus datos a una nueva base de datos:

- Contrate, si es necesario, una [base de datos](/links/web/hosting-options-startsql) de mayor tamaño y lance su [creación](/pages/web_cloud/web_hosting/sql_create_database).
- [Duplique el contenido de la antigua base de datos](/pages/web_cloud/web_hosting/copy_database) en la nueva **o** realice una [exportación de sus datos](/pages/web_cloud/web_hosting/sql_database_export) y a continuación [impórtelos](/pages/web_cloud/web_hosting/sql_importing_mysql_database) en la nueva base de datos.
- Integre las claves de la nueva base de datos en el [archivo de configuración](#config_file) de su sitio web.

> [!primary]
>
> Si dispone de un alojamiento **Performance**, también puede [activar gratis un servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

#### Método 3: eliminar datos innecesarios

Una vez realizada la [copia de seguridad de su base de datos](/pages/web_cloud/web_hosting/sql_database_export), conéctese a su interfaz [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin) para eliminar los datos innecesarios con los comandos Drop, Delete y Truncate.

Para recalcular el espacio utilizado, haga clic en las pestañas para ver sucesivamente cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action} y, a continuación, en el botón `...`{.action} a la derecha de la base de datos en cuestión.
>>
> **Etapa 3**
>>
>> Haga clic en `Recalcular el espacio utilizado`{.action}.

> [!warning]
>
> Esta operación requiere fuertes conocimientos técnicos. Le recomendamos que, si lo necesita, contacte con un [proveedor especializado](/links/partner). No podremos asistirle en este asunto.
>

#### Método 4: optimizar la base de datos

Para optimizar su base de datos, siga las instrucciones de nuestra guía "[Configurar su servidor de bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos)".

Para recalcular el espacio utilizado, haga clic en las pestañas para ver sucesivamente cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action} y, a continuación, en el botón `...`{.action} a la derecha de la base de datos en cuestión.
>>
> **Etapa 3**
>>
>> Haga clic en `Recalcular el espacio utilizado`{.action}.

> [!warning]
>
> Si el asesoramiento ofrecido sobre la optimización de su base de datos no basta para desbloquear el acceso a su sitio web, le recomendamos que se ponga en contacto con nuestra [comunidad de usuarios](/links/community) o con los [partners de OVHcloud](/links/partner). Nosotros no podremos asistirle en este asunto.
>

### Memoria RAM rebasada (solo Web Cloud Databases)

El siguiente mensaje indica que su servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) ha consumido una cantidad de recursos demasiado grande en la infraestructura de OVHcloud:

![ram-exceeded](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/ram-exceeded.png){.thumbnail}

Para aumentar la [cantidad de memoria RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#cambiar-la-oferta-del-servidor-de-bases-de-datos), haga clic en las pestañas para ver sucesivamente cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione el servicio correspondiente.
>>
>> ![Selección de un servidor Web Cloud Databases en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Información general`{.action}, localice el apartado `RAM`.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} en el apartado `RAM` y, a continuación, en `Cambiar la cantidad de RAM`{.action}.

> [!warning]
>
> Para aumentar la RAM, el Web Cloud Databases no debe activarse a través de un hosting Performance. Si quiere aumentar la cantidad de memoria RAM de una base de datos incluida en los [planes Performance](/links/web/hosting-performance-offer), deberá desvincularla primero.
>
> Para desvincular la base de datos, consulte nuestra guía "[Desvincular un Web Cloud Databases de su alojamiento web](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
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

En primer lugar, asegúrese de que la base de datos esté vacía. Para ello, haga clic en las pestañas para ver sucesivamente cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action} y, a continuación, en el botón `...`{.action} a la derecha de la base de datos en cuestión y en `Recalcular el espacio utilizado`{.action}.
>>
> **Etapa 3**
>>
>> Si la base de datos no está vacía, [guarde los datos presentes](/pages/web_cloud/web_hosting/sql_database_export) y después elimínelos antes de reanudar la operación de importación.
>>
>> También puede marcar la casilla `Vaciar la base de datos actual`{.action} justo antes de [iniciar la importación](/pages/web_cloud/web_hosting/sql_importing_mysql_database#importar-una-copia-de-seguridad-desde-el-area-de-cliente):
>>
>> ![import-empty-current-db](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/import-empty-current-db.png){.thumbnail}

Si lo necesita, puede ponerse en contacto con nuestra [comunidad de usuarios](/links/community) o con un [proveedor especializado](/links/partner). No podremos asistirle en la corrección de esta anomalía.

> [!primary]
>
> **¿Qué elementos del script de importación de mi base de datos pueden causar un error "#1044 - Access denied for user to database"?**

Tener un **"trigger"** en el script de importación de su base de datos no está autorizado en los servidores de alojamiento compartido de OVHcloud. En ese caso, importe la base de datos en un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

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
> **"ERROR 2006 : MySQL server has gone away"**
>

Este mensaje de error aparece durante [la importación de una base de datos](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server#2-importar-una-copia-de-seguridad-local) en un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). La mayor parte del tiempo se debe a la cantidad excesiva de datos que se van a importar o a la falta de optimización de las peticiones SQL en el script de importación.

Para resolver esta anomalía, puede:

- Aumentar la [cantidad de memoria RAM](/pages/web_cloud/web_cloud_databases/configure-database-server#seguimiento-de-la-ram-consumida). Para ello, haga clic en las pestañas para ver sucesivamente cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione el servicio correspondiente.
>>
>> ![Selección de un servidor Web Cloud Databases en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Información general`{.action}, localice el apartado `RAM`.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} en el apartado `RAM` y, a continuación, en `Cambiar la cantidad de RAM`{.action}.

- Fraccione su base de datos para importarla en varias operaciones en lugar de una (para cualquier duda sobre las operaciones a realizar, contacte con nuestra [comunidad](/links/community) o con los [partners de OVHcloud](/links/partner). Nosotros no podremos asistirle en este asunto.

- [Optimice su base de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos) y luego repita las operaciones de exportación/importación.

### No se ha podido acceder a phpMyAdmin

#### "Access denied for user"

>
> **"mysqli::real_connect(): (HY000/1045): Access denied for user"**
>

Este mensaje de error puede aparecer al conectarse a la base de datos por [phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin). Indica que los identificadores introducidos son incorrectos.

![access_denied_for_user](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-1045.png){.thumbnail}

En ese caso, [compruebe los identificadores indicados](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#procedimiento) y cambie si es necesario la [contraseña de su base de datos](/pages/web_cloud/web_hosting/sql_change_password).

#### "Too many connections"

>
> **"mysqli_real_connect(): (HY000/1040): Too many connections"**
>

El número máximo de conexiones activas para las bases de datos entregadas con los alojamientos compartidos [StartSQL](/links/web/hosting-options-startsql) es de **30**.

Este número es de **200** para las bases de servidores [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). (Puede cambiar este parámetro en la sección `Configuración`{.action} del servidor de la base de datos).

Este mensaje aparece durante la [conexión a phpMyAdmin](/pages/web_cloud/web_hosting/sql_create_database#acceder-a-la-interfaz-phpmyadmin) cuando se supera el número máximo de conexiones.

En ese caso, deberá [optimizar las bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gestionar-las-bases-de-datos) para reducir el número de conexiones activas.

> [!warning]
>
> Para más información sobre las operaciones que debe realizar para reducir el número de conexiones activas a la base de datos, contacte con nuestra [comunidad](/links/community) o con los [partners de OVHcloud](/links/partner). Nosotros no podremos asistirle en este asunto.
>

#### "Name or service not known"

>
> **"mysqli::real_connect(): (HY000/2002): php_network_getaddresses: getaddrinfo failed: Name or service not known"**
>

Este mensaje de error aparece durante la [conexión a phpMyAdmin](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#procedimiento) cuando el nombre del servidor introducido es incorrecto.

![name_or_service_not_known](/pages/assets/screens/other/web-tools/phpmyadmin/pma-error-hy000-2002.png){.thumbnail}

Compruebe el nombre del servidor correspondiente.

**Haga clic en la situación correspondiente para ver el contenido.**

/// details | Base de datos en un alojamiento web

Haga clic en las pestañas para ver sucesivamente cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action}. El nombre del servidor a introducir aparece en la columna `Dirección del servidor`.

///

/// details | Base de datos en un servidor Web Cloud Databases

Haga clic en las pestañas para ver sucesivamente cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione el servicio correspondiente.
>>
>> ![Selección de un servidor Web Cloud Databases en el área de cliente de OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Información general`{.action}, el nombre del servidor a introducir se encuentra en la sección `Datos de conexión`, apartado `SQL`, mención `Nombre del host`.

///

### No es posible conectarse a una base de datos Cloud Databases

Tener un servidor [Web Cloud Databases](/products/web-cloud-clouddb) le permite [conectarse a sus bases de datos](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) desde su ordenador o un servidor externo a la infraestructura de OVHcloud.

Si esta conexión no es posible, compruebe primero que ha [autorizado su dirección IP pública](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) a conectarse al servidor de bases de datos.

Si esta operación se ha realizado correctamente, póngase en contacto con su proveedor de acceso a Internet o con los [partners de OVHcloud](/links/partner). No podremos asistirle en esta situación.

## Más información <a name="go-further"></a>

[Primeros pasos con el servicio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Interactúe con nuestra [comunidad de usuarios](/links/community).