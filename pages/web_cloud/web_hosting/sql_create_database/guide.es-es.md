---
title: "Crear una base de datos en un alojamiento web"
excerpt: "Descubra cómo crear una base de datos en un alojamiento web de OVHcloud"
updated: 2024-05-17
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Una base de datos (BD) se utiliza para almacenar elementos dinámicos (datos de conexión, datos de usuarios, datos de visualización, datos necesarios para el buen funcionamiento de su sitio web, etc.). Estas bases de datos se utilizan en la mayoría de los sistemas de gestión de contenidos (CMS) modernos, como *WordPress*, *Joomla!*, *Drupal* o *PrestaShop*.

**Descubra cómo crear una base de datos en un alojamiento web de OVHcloud**

## Requisitos

- Tener contratado un plan de [alojamiento web de OVHcloud](/links/web/hosting) que incluya al menos una base de datos.
- Disponer de una base de datos disponible en "creación" entre las que se incluyen en el plan de hosting. Si lo necesita, puede añadir bases de datos [Start SQL](/links/web/hosting-options-startsql) a su alojamiento web.
- Tener acceso al [área de cliente de OVHcloud](/links/manager) con los [permisos necesarios](/pages/account_and_service_management/account_information/managing_contacts) para gestionar el alojamiento web.

## Procedimiento

### Etapa 1 - Acceder a la pestaña de gestión de las bases de datos de un alojamiento web

Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección "Web Cloud" de la página {.action}. Haga clic en `Alojamientos`{.action} en la columna izquierda, seleccione el alojamiento en el que desea crear una base de datos y abra la pestaña `Bases de datos`{.action}.

La tabla de esta sección contiene todas las bases de datos creadas con su alojamiento web.

![databasecreation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

En la tabla, las bases de datos pueden tener varios tipos diferentes:

- **Incluida**: indica que la base de datos está incluida en el plan de hosting. No genera ningún coste adicional.</br></br>
- **Opcional**: indica que la base de datos se ha contratado como complemento de las bases de datos incluidas con el alojamiento web. Pague un complemento para disponer de esta base de datos adicional en su alojamiento web.</br></br>
- **Incluida - retirada de la venta**: indica que la base de datos incluida va a retirarse pronto de la venta y quedar obsoleta. </br>Le recomendamos que, **antes** de que la base de datos quede obsoleta, recupere el contenido y la coloque en una nueva base de datos más reciente (que aún no tenga programada su finalización).</br></br>
- **Opcional - retirada de la venta**: Indica que la base de datos contratada como complemento en su alojamiento web va a ser retirada de la venta y quedar obsoleta. </br>Le recomendamos que, **antes** de que la base de datos quede obsoleta, recupere el contenido y la coloque en una base de datos nueva y más reciente (que aún no haya finalizado).

> [!success]
>
> Para duplicar rápidamente el contenido de una base de datos "**Incluida - retirada de la venta**" o "**Opcional - retirada de la venta**" en una nueva base de datos cuya obsolescencia aún no está programada, consulte nuestra guía "[Duplicar el contenido de una base de datos de OVHcloud en otra](/pages/web_cloud/web_hosting/copy_database)".
>

### Etapa 2 - Crear la base de datos

Existen dos formas de crear una nueva base de datos:

- **Si aún no ha creado ninguna base de datos**, haga clic en el botón `Crear una base de datos`{.action}.

- **Si ya ha creado una base de datos**, haga clic en el botón `Acciones`{.action} y luego en `Crear una base de datos`{.action}.

En la nueva ventana, seleccione la siguiente información:

![database-creation-step1](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-1.png){.thumbnail}

|Información|Descripción|  
|---|---|
|**Seleccione el tipo de base de datos**|Elija el tamaño de la base de datos. Este tamaño se refiere al espacio de almacenamiento de datos de la base de datos.|
|**Seleccione el motor de la base de datos que quiere añadir**|Elija el motor que desea que utilice la base de datos. Las bases de datos incluidas en su [plan de hosting de OVHcloud](/links/web/hosting) solo están disponibles con el motor MySQL.|
|**Seleccione la versión de la base de datos que quiere añadir**|Elija la versión que utiliza el motor de la base de datos. Asegúrese de que su sitio web es compatible con la versión que ha elegido.|

A continuación, haga clic en `Siguiente`{.action}.

Se abrirá una nueva ventana:

![database-creation-step2](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-2.png){.thumbnail}

|Información|Descripción|
|---|---|
|**Usuario**|Introduzca un nombre de usuario que se asociará a la base de datos (máximo 6 caracteres además del prefijo de usuario introducido).|
|**Contraseña**|Escriba una contraseña para este usuario según los *criterios* que se indican a continuación.|
|**Repetir contraseña**|Vuelva a escribir la contraseña de este usuario.|

> [!primary]
>
> Por motivos de seguridad, siga los requisitos del sistema para crear la contraseña.
>
> También se recomienda:
>
> - establecer una contraseña diferente para cada uno de sus servicios;
crear una contraseña que no contenga datos personales (nombre, apellidos, fecha de nacimiento, etc.);
> - renovar su contraseña regularmente;
> - no conservar ningún registro escrito de su contraseña y no enviarla a otras personas (incluso a través de su dirección de correo electrónico);
> - No guardar su contraseña en su navegador de internet, incluso si su navegador lo permite.
>

> [!warning]
>
> Recuerde que si cambia la contraseña de una base de datos, todas las aplicaciones que accedan a ella deben actualizarse en consecuencia.
>

Complete la información solicitada y haga clic en `Siguiente`{.action}.

![database-creation-step3](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/create-a-database-step-3.png){.thumbnail}

Asegúrese de que toda la información mostrada en el resumen es correcta. En ese caso, haga clic en `Aceptar`{.action} para iniciar la creación de la base de datos.

> [!primary]
>
> Al hacer clic en `Aceptar`{.action}, la creación de la base de datos puede tardar hasta **15 minutos**. Recargue la página web de su [área de cliente de OVHcloud](/links/manager) si la base de datos no aparece automáticamente en la tabla que enumera sus bases de datos.
>

Repita este proceso tantas veces como desee para crear varias bases de datos (con el límite de las bases de datos disponibles en su plan).

> [!warning]
>
> Una vez validada la creación de la base de datos, el nombre de usuario y el nombre de la base de datos no se podrán editar.
>

### Etapa 3 - Gestionar la base de datos <a name="step3"></a>

> [!warning]
>
> Esta guía no sustituye a la asistencia de un profesional en desarrollo. Le recomendamos que, si necesita ayuda, contacte con un [proveedor especializado](/links/partner) o con el editor del software de su solución. OVHcloud no podrá asistirle. Para más información, consulte la sección ["Más información"](#go-further) de esta guía.
>

Ya puede utilizar su base de datos. Para ello, necesitará su información de conexión:

- el *nombre de usuario* y la *contraseña* que haya establecido,
- el *nombre de la base de datos* que ha indicado,
- la*dirección del servidor*.

> [!primary]
>
> Si se le solicita, independientemente de cuál sea la base de datos [Start SQL](/links/web/hosting-options-startsql) añadida o incluida con su alojamiento web OVHcloud, el número de **port** que deberá utilizar será el **3306**.
>

Esta información es esencial para que el sitio web pueda conectarse a la base de datos.

Si necesita más información sobre la conexión, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} en la columna izquierda, seleccione el alojamiento en el que desea recuperar la información de conexión a la base de datos y abra la pestaña `Bases de datos`{.action}.

Se mostrará una tabla con toda la información relativa a la conexión a la base de datos. Esto excepto *password* por motivos de seguridad.

> [!warning]
>
> Si no recuerda su contraseña de conexión a la base de datos, consulte nuestra guía "[Cambiar la contraseña de la base de datos](/pages/web_cloud/web_hosting/sql_change_password)".
>

Según el programa utilizado, es posible que esta conexión necesite ser configurada manualmente o a través de una interfaz generada por la interfaz de configuración (backend) del sitio web. Este procedimiento afecta a la configuración del sitio web y no al alojamiento de OVHcloud, por lo que le recomendamos que consulte los recursos disponibles en internet o que contacte con un [proveedor especializado](/links/partner).

> [!primary]
>
> Solo es posible acceder a las bases de datos asociadas a un alojamiento web a través de una aplicación o un script directamente instalado en el alojamiento web o a través de la interfaz phpMyAdmin.
>

#### Acceder a la interfaz phpMyAdmin

OVHcloud ofrece una herramienta en línea para la gestión de bases de datos llamada phpMyAdmin. Para acceder a la aplicación, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action} en la columna izquierda, seleccione el alojamiento en el que desea recuperar la información de conexión a la base de datos y abra la pestaña `Bases de datos`{.action}. En la tabla que se abre, haga clic en el botón `...`{.action} a la derecha de la base de datos correspondiente y, a continuación, haga clic en `Acceder a phpMyAdmin`{.action} en el menú desplegable.

![phpMyAdmin Go Login](/pages/assets/screens/other/web-tools/phpmyadmin/pma-interface-login.png){.thumbnail}

Introduzca los datos de acceso a la base de datos y haga clic en `Initiar sesión`{.action}.

Si lo necesita, consulte el [Etapa 3](#step3) de esta guía para obtener la información de conexión a la base de datos.

#### Utilizar las copias de seguridad de las bases de datos

Para cada base de datos de alojamiento web, se crean snapshots automáticamente cada día (hasta un máximo de 32). Puede restaurar rápidamente una versión anterior de una base de datos desde el área de cliente de OVHcloud.

Para comprobar los snapshots disponibles, así como la fecha y hora de su creación, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección "Web Cloud" de la página {.action}. En la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento en el que quiera consultar los snapshots disponibles para su base de datos. A continuación, abra la pestaña `Bases de datos`{.action}. En la tabla que aparece, haga clic en el símbolo situado junto al círculo verde. También puede descargar cada copia de seguridad de una base de datos desde ese mismo lugar. Para más información, consulte nuestra guía "[Recuperar la copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export)".

#### Entender los problemas comunes

**Demasiadas conexiones**

Las bases de datos de alojamiento web están limitadas a 30 conexiones simultáneas (variable del sistema *max_connections*). Por lo tanto, las solicitudes SQL deben optimizarse para evitar este tipo de errores. Si los problemas persisten a pesar de todo, se deben considerar medidas alternativas. Por ejemplo, puede migrar su base de datos a una base de datos [Web Cloud Databases](/links/web/databases) o realizar una [actualización de su plan de hosting](/links/web/hosting-best-web).

**Errores de conexión / "no encontrado"**

Aparece normalmente cuando no se utiliza el nombre real de la base de datos en el archivo de conexión a base de datos que se encuentra en su sitio web.

La práctica recomendada es utilizar siempre el nombre real de la base de datos para scripts y archivos de configuración en lugar de direcciones IP o _localhost_.

**Se ha superado la cuota de las bases de datos**

Si una base de datos de alojamiento web supera el espacio de almacenamiento recomendado, cambiará automáticamente a "Solo lectura" o "Solo selección". El administrador recibirá una notificación por correo electrónico.

Una vez que la base de datos haya sido optimizada (depurada), vuelva a calcular su cuota en el área de cliente de OVHcloud para desbloquearla de nuevo. Para más información, consulte nuestra guía "[¿Qué hacer cuando se excede el límite de almacenamiento de mi base de datos?](/pages/web_cloud/web_hosting/sql_overquota_database)".

## Más información <a name="go-further"></a>

[Cambiar la contraseña de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_change_password)

[Obtener la copia de seguridad de la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_database_export)

[Importar una copia de seguridad en la base de datos de un alojamiento web](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Optimizar el rendimiento de su sitio web](/pages/web_cloud/web_hosting/optimise_your_website_performance)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).