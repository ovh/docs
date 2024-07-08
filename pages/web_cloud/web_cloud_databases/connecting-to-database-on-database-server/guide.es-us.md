---
title: "Conectarse a la base de datos de su servidor de bases de datos"
excerpt: "Descubra cómo conectarse a la base de datos"
updated: 2023-10-31
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Es posible consultar el contenido de la base de datos a través de una interfaz. Para ello, existen varias formas de conectarse.

**Esta guía explica cómo conectarse a una base de datos en un servidor de bases de datos.**

## Requisitos

- Tener una [instancia Web Cloud Databases](/links/web/databases) (incluida en un plan de [hosting Performance](/links/web/hosting))
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!primary]
>
> Tenga en cuenta que las soluciones [Web Cloud Databases](/links/web/databases){.external} no permiten acceder al sistema de gestión de bases de datos, sino a las bases de datos alojadas en él.
> <br> - Tenga en cuenta que no hay acceso "root".
> <br> - Los comandos genéricos SQL funcionan con normalidad, y software como HeidiSQL, SQLuireL o Admin es totalmente compatible.

### Importar una base de datos MySQL o MariaDB 

> [!primary]
>
> Como MariaDB es un derivado de MySQL, los distintos comandos son exactamente los mismos para los dos tipos de bases de datos.
> 

####  Por phpMyAdmin OVHcloud

Conéctese a su [área de cliente de OVHcloud](/links/manager){.external}  y acceda a la sección `Web Cloud`. En la columna izquierda, haga clic en la pestaña `Web Cloud Databases`{.action} y seleccione el nombre del servidor de bases de datos.

En la pestaña `Información general`, encontrará el enlace de acceso a phpMyAdmin en el recuadro **"Administración de la base de datos"**, bajo la indicación "Interfaz de usuario".

![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}

Acceda a la página de conexión de phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}

Introduzca los siguientes datos para conectarse a la base de datos:

- **Servidor:** Introduzca el *nombre del host* de su servidor de bases de datos seguido de su *número de puerto*. El *número de puerto* debe estar separado del *nombre del host* por un "**espacio**" o por "**:**". Por ejemplo, si el *nombre de host* es **aaXXXXX-XXX.eu.clouddb.ovh.net** y el *número de puerto* es **12345**, deberá introducir **aaXXXXX-XXX.eu.clouddb.ovh.net:12345** o **aaXXXXX-XXX.eu.clouddb.ovh.net 12345**. Para consultar el *nombre del host* y el *número de puerto* de su servidor Web Cloud Databases, conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`. En la columna izquierda, haga clic en la pestaña `Web Cloud Databases`{.action} y seleccione el nombre del servidor de bases de datos. En la página `Información general`, puede consultar el *nombre del host* y el *número de puerto* en el recuadro `Datos de conexión`.

- **Usuario:** Introduzca el *nombre de usuario* de su servidor de bases de datos. Para consultar el *nombre de usuario* de la base de datos, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`. En la columna izquierda, haga clic en la pestaña `Web Cloud Databases`{.action} y seleccione el nombre del servidor de bases de datos. A continuación, abra la pestaña `Usuarios y permisos`{.action}. En ella encontrará una tabla con todos los usuarios creados en su solución Web Cloud Databases.

- **Contraseña:** Introduzca la *contraseña* asociada al *nombre de usuario* correspondiente. Si no recuerda la *contraseña* asociada a su *nombre de usuario*, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y acceda a la sección `Web Cloud`. En la columna izquierda, haga clic en la pestaña `Web Cloud Databases`{.action} y seleccione el nombre del servidor de bases de datos. A continuación, abra la pestaña `Usuarios y permisos`{.action}. Haga clic en el botón `...`{.action} situado a la derecha de *el usuario* correspondiente para `Cambiar la contraseña`{.action}.

> [!warning]
>
> Si cambia la contraseña del usuario de una base de datos, todas las aplicaciones o sitios web que acceden a la base de datos deben actualizarse en consecuencia.
>

Si la conexión se ha completado, se mostrará la siguiente página de phpMyAdmin.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **En caso de error :**
> 
> <br> - Error #1045, significa que la identificación es incorrecta. Por lo tanto, es necesario comprobar el nombre de usuario y/o la contraseña.
> <br> - Error #2005, le recomendamos que compruebe el nombre del servidor y si este está en funcionamiento.

#### Conexión a la base de datos fuera del área de cliente

> [!warning]
>
> Si utiliza una solución Web Cloud Databases/ SQL Privado, no olvide autorizar su IP utilizando la guía sobre la [configuración de su servidor de bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server).
>

Para conectarse a la base de datos, asegúrese de que dispone de la siguiente información:

- **Servidor**: el nombre del host del servidor puede verse en la pestaña `Información general` del servidor de bases de datos, en el recuadro **"Administración de la base de datos"**, bajo el epígrafe "Nombre del host" del apartado **SQL**.
- **Usuario**: El nombre de usuario creado en la pestaña `Usuarios y permisos` del servidor de bases de datos.
- Cambiar la contraseña del usuario **root**
- **Puerto**: el puerto puede verse en la pestaña `Información general` del servidor de bases de datos, en el recuadro **"Administración de la base de datos"**, bajo el epígrafe "Puerto" de la parte **SQL**.
- **Nombre de la base de datos**: las bases de datos se muestran en la pestaña `Bases de datos` del servidor de bases de datos.

##### 1. Conexión en línea de comandos

```bash
mysql --host=servidor --user=usuario --port=puerto --contraseña nombre_de_la_BD
```

##### 2. Conexión mediante script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

##### 3. Conexión a través de la aplicación SQuirreL SQL

> [!primary]
>
> En nuestro ejemplo, utilizamos el software de código abierto SQuirrel, pero otras interfaces, como HeidiSQL o Adminer, son totalmente compatibles. 

- Ejecute SQuirreL SQL, abra el menú `{.action}Aliases`{.action} y haga clic en +.

![](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail} ejecutar SQuirreL SQL

- Cumplimente los campos como se indica a continuación y acepte con el botón `{.action}OK:
    - **Name**: Indique un nombre.
    - **Driver**: Seleccione « MySQL Driver »
    - **URL**: Indique la dirección del servidor y el puerto en formato \*\*jdbc:mysql://server:port
    - **User name**: Indique el nombre de usuario.
    - **Password**: Indique la contraseña.

![](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail} conexión a la base de datos

- Confirme con el botón `{.action}Connect.

![](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail} confirmación de la conexión

Se establecerá la conexión a la base de datos:

![](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail} conexión a la base de datos

##### 3.4. Conexión mediante phpMyAdmin

Puede utilizar su propia interfaz phpMyAdmin para explorar el contenido de su base de datos. Para ello, instale phpMyAdmin en su propio servidor o alojamiento web. Durante la instalación, asegúrese de que la información de su servidor de bases de datos y de la base de datos es correcta para que phpMyAdmin pueda conectarse a ella.

### Importar una base de datos PostgreSQL 

Para conectarse a la base de datos, asegúrese de que dispone de la siguiente información:

- **Servidor**: el nombre del host del servidor puede verse en la pestaña `Información general` del servidor de bases de datos, en el recuadro **"Administración de la base de datos"**, bajo el epígrafe "Nombre del host" del apartado **SQL**
- **Usuario**: El nombre de usuario creado en la pestaña `Usuarios y permisos` del servidor de bases de datos
- **Contraseña**: la contraseña del usuario 
- **Puerto**: el puerto puede verse en la pestaña `Información general` del servidor de bases de datos, en el recuadro **"Administración de la base de datos"**, bajo el epígrafe "Puerto" de la parte **SQL**
- **Nombre de la base de datos**: las bases de datos se muestran en la pestaña `Bases de datos` del servidor de bases de datos.

#### Conexión en línea de comandos

> [!primary]
>
> Para un servidor SQL privado, esta acción solo es posible por [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting){.external} desde un alojamiento compartido de OVHcloud.

mysql --host=servidor --user=nombre_de_usuario --port=puerto --password=contraseña nombre_base_de_datos

#### Conexión mediante script PHP

> [!primary]
>
> Para un servidor SQL privado, la ejecución de este script solo puede realizarse desde un alojamiento compartido de OVHcloud.

1. <?php
2. $db = new PDO('mysql:host=host;port=puerto;dbname=nombre_base_de_datos', 'username', 'password');
3. ?>

#### Conexión a través de la aplicación SQuirreL SQL

> [!primary]
>
> En nuestro ejemplo, utilizamos el software de código abierto SQuirrel, pero otras interfaces, como HeidiSQL o Adminer, son totalmente compatibles.

- Ejecute SQuirreL SQL, abra el menú `{.action}Aliases`{.action} y haga clic en +.

![](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail} ejecutar SQuirreL SQL

- Cumplimente los campos como se indica a continuación y acepte con el botón `{.action}OK:
    - **Name**: Indique un nombre.
    - **Driver**: Seleccione « PostgreSQL »
    - **URL**: Indique la dirección del servidor y el puerto en formato \*\*jdbc:postgresql://server:port/database
    - **User name**: Indique el nombre de usuario.
    - **Password**: Indique la contraseña.

![](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail} conexión a la base de datos

- Confirme con el botón `{.action}Connect.

![](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail} confirmación de la conexión

Se establecerá la conexión a la base de datos:

![](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail} conexión a la base de datos

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).

