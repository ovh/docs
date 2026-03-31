---
title: "Web Cloud Databases - Conectarse a una base de datos"
excerpt: "Descubra cómo conectarse a una base de datos de su solución Web Cloud Databases"
updated: 2026-03-24
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

Es posible consultar el contenido de la base de datos a través de una interfaz. Para ello, existen varias formas de conectarse.

**Descubra cómo conectarse a una base de datos en su servidor de bases de datos.**

## Requisitos

- Una [instancia Web Cloud Databases](/links/web/databases) (incluida en un [plan de hosting Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ruta de navegación:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Seleccione su servicio de base de datos

---
<!-- CP-NAV-END:web-cloud-databases -->

## Procedimiento

> [!primary]
>
> Las soluciones [Web Cloud Databases](/links/web/databases) no permiten acceder al sistema de gestión de bases de datos, sino a las bases de datos alojadas en él.
>
> - No hay acceso de superusuario "root".
> - Los comandos genéricos SQL funcionan con normalidad, y software como HeidiSQL, SQuirreL SQL o Adminer es totalmente compatible.
>

### Conectarse a una base de datos MySQL o MariaDB

> [!primary]
>
> Como MariaDB es un derivado de MySQL, los comandos son exactamente los mismos para los dos tipos de bases de datos.
>

#### Conexión a través de phpMyAdmin de OVHcloud

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenga la siguiente información de conexión:
>>
>> - **Servidor (hostname) y puerto:** visibles en la pestaña `Información general`{.action}, sección `Datos de conexión`.
>> - **Nombre de usuario:** visible en la pestaña `Usuarios y permisos`{.action}.
>> - **Contraseña:** la contraseña asociada al usuario. Si la ha olvidado, acceda a la pestaña `Usuarios y permisos`{.action}, haga clic en `...`{.action} a la derecha del usuario correspondiente y seleccione `Cambiar la contraseña`{.action}.
>>
>> > [!warning]
>> >
>> > Si cambia la contraseña de un usuario de la base de datos, todas las aplicaciones o sitios web que acceden a esta base de datos deberán actualizarse en consecuencia.
>>
> **Etapa 3**
>>
>> En la pestaña `Información general`{.action}, localice la sección **Administración de la base de datos** y haga clic en el enlace de phpMyAdmin en **Interfaz de usuario**.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/database-administration.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la página de conexión de phpMyAdmin, introduzca la información obtenida en el paso 2:
>>
>> ![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-login-web-cloud-db.png){.thumbnail}
>>
>> - **Servidor:** introduzca el *hostname* seguido del *número de puerto*, separados por "**:**" o un "**espacio**". Por ejemplo: **aaXXXXX-XXX.eu.clouddb.ovh.net:12345**.
>> - **Usuario:** introduzca el *nombre de usuario*.
>> - **Contraseña:** introduzca la *contraseña*.

Si la conexión se ha realizado correctamente, se mostrará la siguiente página.

![web-cloud-databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-main-page-web-cloud-db.png){.thumbnail}

> [!warning]
>
> **En caso de error:**
>
> - Error #1045 significa que las credenciales son incorrectas. Compruebe el nombre de usuario y/o la contraseña.
> - Error #2005 significa que debe comprobar el nombre del servidor y si este está en funcionamiento.

#### Conexión a la base de datos fuera del área de cliente

> [!warning]
>
> Si utiliza una solución "Web Cloud Databases"/"SQL Privado", recuerde autorizar su IP utilizando la guía sobre la [configuración de su servidor de bases de datos](/pages/web_cloud/web_cloud_databases/configure-database-server#gerer-vos-acces).

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenga la siguiente información de conexión:
>>
>> - **Servidor (hostname):** visible en la pestaña `Información general`{.action}, sección **"Administración de la base de datos"**, "Hostname" en la parte **SQL**.
>> - **Puerto:** visible en la misma ubicación, "Puerto" en la parte **SQL**.
>> - **Nombre de usuario:** visible en la pestaña `Usuarios y permisos`{.action}.
>> - **Contraseña:** la contraseña asociada al usuario correspondiente.
>> - **Nombre de la base de datos:** visible en la pestaña `Bases de datos`{.action}.

**Haga clic en el método de conexión que desee para ver su contenido.**

/// details | Conexión en línea de comandos

```bash
mysql --host=server --user=user --port=port --password=password database_name
```

///

/// details | Conexión mediante script PHP

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Conexión a través de la aplicación SQuirreL SQL

> [!primary]
>
> En nuestro ejemplo, utilizamos el software de código abierto SQuirreL, pero otras interfaces como HeidiSQL o Adminer son totalmente compatibles.

- Ejecute SQuirreL SQL y haga clic en `Aliases`{.action} y, a continuación, en `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Rellene los campos que se indican a continuación y confirme con el botón `OK`{.action}:
    - **Name**: Elija un nombre
    - **Driver**: Seleccione "MySQL Driver"
    - **URL**: Introduzca la dirección del servidor y el puerto en formato jdbc:mysql://server:port
    - **User Name**: Introduzca el nombre de usuario
    - **Password**: Introduzca la contraseña

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Confirme de nuevo con el botón `Conectar`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Se habrá conectado a su base de datos:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

/// details | Conexión mediante phpMyAdmin

Puede utilizar su propia interfaz phpMyAdmin para explorar el contenido de su base de datos. Para ello, instale phpMyAdmin en su propio servidor o alojamiento web. Durante la instalación, asegúrese de configurar correctamente la información de su servidor de bases de datos y de la base de datos deseada para que phpMyAdmin pueda conectarse a ella.

///

### Conectarse a una base de datos PostgreSQL

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione la solución correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Obtenga la siguiente información de conexión:
>>
>> - **Servidor (hostname):** visible en la pestaña `Información general`{.action}, sección **"Administración de la base de datos"**, "Hostname" en la parte **SQL**.
>> - **Puerto:** visible en la misma ubicación, "Puerto" en la parte **SQL**.
>> - **Nombre de usuario:** visible en la pestaña `Usuarios y permisos`{.action}.
>> - **Contraseña:** la contraseña asociada al usuario correspondiente.
>> - **Nombre de la base de datos:** visible en la pestaña `Bases de datos`{.action}.

**Haga clic en el método de conexión que desee para ver su contenido.**

/// details | Conexión en línea de comandos

```bash
psql --host=server --port=port --user=user --password=password database_name
```

///

/// details | Conexión mediante script PHP

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```

///

/// details | Conexión a través de la aplicación SQuirreL SQL

> [!primary]
>
> En nuestro ejemplo, utilizamos el software de código abierto SQuirreL, pero otras interfaces como HeidiSQL o Adminer son totalmente compatibles.

- Ejecute SQuirreL SQL y haga clic en `Aliases`{.action} y, a continuación, en `+`{.action}.

![launch SQuirreL SQL](/pages/assets/screens/other/web-tools/squirrel/aliases.png){.thumbnail}

- Rellene los campos que se indican a continuación y confirme con el botón `OK`{.action}:
    - **Name**: Elija un nombre
    - **Driver**: Seleccione "PostgreSQL"
    - **URL**: Introduzca la dirección del servidor y el puerto en formato jdbc:postgresql://server:port/database
    - **User Name**: Introduzca el nombre de usuario
    - **Password**: Introduzca la contraseña

![config connection](/pages/assets/screens/other/web-tools/squirrel/add-alias.png){.thumbnail}

- Confirme de nuevo con el botón `Conectar`{.action}.

![valid connection](/pages/assets/screens/other/web-tools/squirrel/connect-to-mysql.png){.thumbnail}

Se habrá conectado a su base de datos:

![config connection](/pages/assets/screens/other/web-tools/squirrel/general-dashboard.png){.thumbnail}

///

## Más información

[Web Hosting - Mi base de datos está llena. ¿Qué hago?](/pages/web_cloud/web_hosting/sql_overquota_database)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
