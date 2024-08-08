---
title: "Duplicar el contenido de una base de datos en otra"
excerpt: "Descubra cómo copiar el contenido de una base de datos de OVHcloud en otra base de datos de OVHcloud"
updated: 2023-11-22
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Su base de datos es un elemento central en la construcción de su sitio web dinámico. Durante el ciclo de vida de su sitio web, puede que necesite copiar el contenido de su base de datos en otra de sus bases de datos [start SQL](/links/web/hosting-options-startsql) o [Web Cloud Databases](/links/web/databases).

**Descubra cómo copiar el contenido de una base de datos de OVHcloud en otra base de datos de OVHcloud.**

> [!primary]
>
> Gracias a esta funcionalidad, las bases de datos no se mueven, sino que se copian. Esto se debe a que la base de datos original no se elimina automáticamente, a diferencia de un proceso de migración. Sólo se duplica el contenido de la base de datos de origen para copiarlo en la base de datos de destino.
>

## Requisitos

- Tener contratadas bases de datos [start SQL](/links/web/hosting-options-startsql) y/o [Web Cloud Databases](/links/web/databases). Es necesario crear previamente las dos bases de datos para poder utilizar la herramienta de duplicación.
- Estar conectado al [área de cliente de OVHcloud](/links/manager)
- Disponer de los permisos necesarios para todos los servicios de bases de datos afectados. Para más información, consulte nuestra guía [Gestionar los contactos de sus servicios](/pages/account_and_service_management/account_information/managing_contacts).

## Procedimiento

Antes de empezar, asegúrese de que:

- Su **S**istema de **G**estión de **B**ases de **D**atos (MySQL, PostgreSQL, etc.) es el mismo para sus dos bases de datos (origen y destino).
- La versión de su SGBD es la misma para sus dos bases de datos (origen y destino). Aunque la copia puede funcionar con versiones diferentes, se recomienda utilizar las mismas versiones.
- El contenido de la base de datos de origen no debe superar el tamaño de la base de datos de destino.

### Identificar mi base de datos de origen

Esta funcionalidad está disponible para la copia: 

- una base de datos [Start SQL](/links/web/hosting-options-startsql) (incluida en algunos de nuestros [alojamientos web](/links/web/hosting) o [contratada por separado](/links/web/hosting-options-startsql);
- de una base de datos alojada en un servidor [Web Cloud Databases](/links/web/databases) (incluida con nuestros [planes de hosting Performance](/links/web/hosting-performance-offer) o [contratada por separado](/links/web/databases). 

En función de su situación, la ruta de acceso a la base de datos de origen es diferente.

#### Base de datos Start SQL

En su [área de cliente de OVHcloud](/links/manager), seleccione `Web Cloud`{.action} en el menú superior. En la columna izquierda, abra la pestaña `Alojamientos`{.action} y haga clic en el alojamiento web en el que se encuentra la base de datos de origen cuyo contenido desea copiar.

![Lista de alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/web-hosting-selection.png){.thumbnail}

Al hacer clic en la pestaña de `Bases de datos`{.action}, aparecerá la lista de sus bases de datos Start SQL.

![Lista de BDD Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}

#### Web Cloud Databases

En su [área de cliente de OVHcloud](/links/manager), seleccione `Web Cloud`{.action} en el menú superior. En la columna izquierda, abra la pestaña `Web Cloud Databases`{.action} y seleccione el servidor Web Cloud Databases en el que se encuentra la base de datos de origen cuyo contenido desea copiar.

![Lista de servidores WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/wcdb-server-selection.png){.thumbnail}

Al hacer clic en la pestaña de `Bases de datos`{.action}, aparecerá la lista de bases de datos presentes en su servidor Web Cloud Databases.

![Lista de bases de datos WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}

### Copiar el contenido de una base de datos

En la pestaña `Bases de datos`{.action}, haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la base de datos cuyo contenido desee copiar y seleccione `Copiar base de datos`{.action}.

![CTA_copie_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}

Se abrirá una ventana en la que podrá identificar la base de datos de destino.

![Interfaz de copia BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}

Si no tiene una base de datos destino y como se muestra en la siguiente captura de pantalla, haga clic en el vínculo para adquirir una nueva base de datos:

![Lista de bases de datos WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-link-to-buy-db.png){.thumbnail}

Puede elegir entre contratar un servicio "[start SQL](/links/web/hosting-options-startsql)" o un servidor de bases de datos "[Web Cloud Databases](/links/web/databases)".

> [!primary]
>
> La nueva base de datos no está activada de forma predeterminada cuando la adquiere. No olvide activarlo. Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
> 
> - Para una base de datos Shared SQL, siga nuestra guía "[Crear una base de datos en un alojamiento web](/pages/web_cloud/web_hosting/sql_create_database)";
> - Para una base de datos que estará presente en un servidor Web Cloud Databases, siga nuestra guía "[Crear una base de datos en un servidor Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>

Si ya tiene una base de datos destino, seleccione primero el tipo de base de datos:

- `Copiar en una base de datos`{.action}: si desea copiar el contenido de la base de datos de origen en una base de datos **Start SQL** (destino).
- `Copiar en un servicio Web Cloud Databases`{.action}: si desea copiar el contenido de la base de datos de origen en una base de datos **Web Cloud Databases** (destino).

#### Opción 1 - Copiar en una base de datos Start SQL

Acaba de seleccionar `Copiar en una base de datos`{.action}. Aparecen dos listas desplegables. Haga clic en la primera y seleccione el alojamiento web en el que se encuentra la base de datos Start SQL de destino. Una vez seleccionado el alojamiento web, haga clic en la segunda lista desplegable para elegir la base de datos Start SQL de destino.

Haga clic en `Siguiente`{.action}. Aparecerá el siguiente mensaje de confirmación:

![Mensaje de confirmación copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Si no desea sobrescribir la base de datos de destino elegida, haga clic en `Anterior`{.action} para cambiar su elección o en `Cancelar`{.action} para cancelar todo. De lo contrario, haga clic en `Aceptar`{.action} para confirmar la duplicación del contenido de la base de datos de origen en la de destino.

Aparecerá el siguiente mensaje de confirmación:

![Mensaje de éxito de BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-copied-successfull.png){.thumbnail}

La copia de la base de datos puede tardar varios minutos. Para verificar que la copia se ha registrado correctamente, acceda a la pestaña `Tareas en curso`{.action}. En la tabla, aparecerá una nueva línea correspondiente a su copia con el estado "Planificado". Una vez finalizada la operación, la línea desaparece.

![Tareas en curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

#### Opción 2 - Copiar en una base de datos presente en un servidor Web Cloud Databases

Acaba de seleccionar `Copiar en un servicio Web Cloud Databases`{.action}. Aparecen dos listas desplegables. Haga clic en la primera y seleccione la solución Web Cloud Databases en la que se encuentra la base de datos de destino. Una vez seleccionada la solución Web Cloud Databases, haga clic en el segundo menú desplegable para elegir la base de datos de destino de su servidor Web Cloud Databases.

Haga clic en `Siguiente`{.action}. Aparecerá el siguiente mensaje de confirmación:

![Mensaje de confirmación copiar BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Si no desea sobrescribir la base de datos de destino elegida, haga clic en `Anterior`{.action} para cambiar su elección o en `Cancelar`{.action} para cancelar todo. De lo contrario, haga clic en `Aceptar`{.action} para confirmar la duplicación del contenido de la base de datos de origen en la de destino.

La copia de la base de datos puede tardar varios minutos. Para verificar que la copia se ha registrado correctamente, acceda a la pestaña `Tareas en curso`{.action}. En la tabla, aparecerá una nueva línea correspondiente a su copia con el estado "Planificado". Una vez finalizada la operación, la línea desaparece.

![Tareas en curso](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

### Configurar un sitio web con una nueva base de datos

Una vez realizada la copia de la base de datos de origen, deberá realizar una última acción si desea utilizar la nueva base de datos.

En la pestaña `Tareas en curso`{.action}, asegúrese de que la copia ha finalizado (la línea correspondiente a su copia ha desaparecido).

Para conectar la nueva base de datos a su sitio web, edite el fichero de configuración de **C**ontent **M**anagement **S**ystem (**CMS**) e introduzca la información de conexión de la nueva base de datos.

> [!warning]
>
> Le recomendamos que realice una copia del archivo de configuración de su sitio web antes de modificarlo. Se trata de la garantía de poder sustituir la nueva versión del archivo con la antigua en caso de fallo de configuración.

Por ejemplo, si utiliza WordPress, deberá editar el archivo de configuración *wp-config.php* que se encuentra en la raíz de la carpeta de su WordPress, en el espacio de almacenamiento (FTP) de su alojamiento, y actualizar los siguientes campos:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Para más información, o si utiliza otro CMS, consulte nuestra guía [Cambiar la contraseña de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> La copia de la base de datos no es una migración. La base de datos de origen seguirá existiendo hasta que la elimine. De este modo, siempre podrá reconfigurar su sitio web con su antigua base de datos, si es necesario.
>

### Casos prácticos

Puede haber problemas durante el proceso de copia del contenido de la base de datos.

#### No aparece ninguna base de datos en la lista

Esta notificación significa que sólo tiene una base de datos activa. Para copiar la base de datos de origen, también necesita una base de datos de destino activa. Para ello, puede:

- Configurar una nueva base de datos disponible en su alojamiento web;
- Configurar una nueva base de datos en su servidor [Web Cloud Databases](/links/web/databases);
- Contratar un servicio "[start SQL](/links/web/hosting-options-startsql)" o un servidor de bases de datos "[Web Cloud Databases](/links/web/databases)"

#### Ya tiene una acción en curso

Este mensaje indica que ya hay una tarea en curso en la base de datos. Acceda a la pestaña `Tareas en curso`{.action} y compruebe que tiene una operación en curso. En ese caso, espere a que termine para volver a copiar la base de datos, si es necesario.

#### La base de datos de destino no tiene espacio suficiente

No hay suficiente espacio en la base de datos de destino. Puede elegir entre dos soluciones:

- Contratar una nueva base de datos [start SQL](/links/web/hosting-options-startsql) con más espacio.
- Si tiene un servidor [Web Cloud Databases](/links/web/databases), cambie a una solución Web Cloud Databases con más espacio de almacenamiento.

#### Las bases de datos de origen y de destino no son compatibles

Esta notificación significa que el **S**istema de **G**estión de **B**ases de **D**atos (**SGBD**) de la base de datos de origen no es el mismo que el SGBD de la base de datos de destino.

Por ejemplo, este error puede producirse al utilizar MySQL para la base de datos de origen y PostgreSQL para la base de datos de destino.

## Más información

[Conectarse al área de cliente de OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Realizar una copia de seguridad de una base de datos y exportarla a un servidor de bases de datos](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Restaurar e importar una base de datos en el servidor de bases de datos](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Obtener la copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export)

[Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).