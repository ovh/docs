---
title: "Resolver los errores más frecuentes relacionados con los módulos en un clic"
excerpt: "Descubra cómo diagnosticar los errores más comunes relacionados con la creación de módulos en 1 clic"
updated: 2026-05-04
---

<style>
 pre {
   background-color: #300A24
 }
 details > summary {
   color: var(--color-brand-blue-600);
   font-weight: 700;
 }
</style>

## Objetivo

Los "[módulos en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" permiten crear su sitio web rápidamente. Esta tecnología permite crear un sitio web utilizando los **C**ontent **M**anagement **S**ystem (**CMS**) más conocidos, como *WordPress*, *Joomla!*, *Drupal* o *PrestaShop*.
No obstante, si la configuración de estos últimos no se realiza correctamente, la instalación del "módulo en un clic" puede fallar y/o provocar fallos de funcionamiento.

**Descubra cómo diagnosticar los casos más comunes de errores relacionados con la creación de "módulos en un clic"**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting) compatible.
- Haber utilizado la funcionalidad "[Módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" para crear un nuevo sitio web.

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

> [!primary]
>
> Aquí encontrará los errores más comunes. Si se encuentra en una situación diferente a la descrita, consulte nuestras [FAQ sobre los alojamientos web](/pages/web_cloud/web_hosting/faq-web_hosting).
>

**Haga clic en los 15 títulos siguientes para ver el contenido.**

/// details | Su dominio no está incluido al crear el "módulo en un clic"

<!-- CP-STEPS-START:check-module-status -->
![domainenotproposed](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/domain-unavailable.png){.thumbnail}

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los dominios y subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Realice a continuación las siguientes comprobaciones:
>>
>> |Escenario|Solución|
>> |---|---|
>> |El dominio o subdominio relacionado con el sitio web que desea crear no aparece en la tabla del apartado `Mis sitios`{.action}.|Agregue su nombre de dominio siguiendo [estas indicaciones](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).|
>> |El nombre de dominio se ha desvinculado del sitio web sin que usted haya realizado ninguna acción.|Si su nombre de dominio o su [zona DNS](/pages/web_cloud/domains/dns_zone_edit) no están gestionados desde su cuenta de OVHcloud, agregue su nombre de dominio desde el apartado `Mis sitios`{.action} siguiendo [este tutorial](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).|
<!-- CP-STEPS-END:check-module-status -->

///

/// details | "Se ha producido un error al cargar la información (You need at least one free database)"

<!-- CP-STEPS-START:change-root-folder -->
![No databases available](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-no-db-available.png){.thumbnail}

Este mensaje aparece al iniciar la instalación de su "módulo en un clic" cuando no tiene la posibilidad de crear una nueva base de datos asociada a su alojamiento web.

#### Solución n°1: contratar una nueva base de datos

Si ya no tiene bases de datos incluidas con su alojamiento web, puede contratar una nueva [base de datos Start SQL](/links/web/hosting-options-startsql) y asociarla a su alojamiento web actual. A continuación, podrá reiniciar la instalación del "módulo en un clic". Si necesita más espacio de almacenamiento (superior a 1 GB), le recomendamos que utilice nuestro servicio [Web Cloud Databases](/links/web/databases).

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action} y seleccione `Acciones`{.action} para contratar una base de datos adicional:
>>
>> ![order_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/order-a-db.png){.thumbnail}
>>
<!-- CP-STEPS-END:change-root-folder -->

Una vez finalizado, podrá instalar un nuevo "módulo en un clic".

> [!primary]
>
> Le recordamos que no dude en consultar nuestras ofertas de bases de datos unitarias [start SQL](/links/web/hosting-options-startsql), así como nuestra oferta [Web Cloud Databases](/links/web/databases).
>

#### Solución n°2: modificar su plan de hosting

> [!primary]
>
> Consultar la comparativa de nuestras distintas soluciones [alojamiento web](/links/web/hosting).
>

<!-- CP-STEPS-START:find-admin-credentials -->
Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la sección `Suscripción` - `Solución`, haga clic en el botón `...`{.action} y luego en `Cambiar de plan`{.action}:
>>
>> ![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}
>>
<!-- CP-STEPS-END:find-admin-credentials -->

Los planes [Pro](/links/web/hosting-professional-offer) y [Performance](/links/web/hosting-performance-offer) le permitirán crear hasta tres "módulos en un clic" adicionales con una base de datos independiente para cada uno de ellos. Los planes de hosting **Performance** también le permitirán activar gratuitamente un servidor [Web Cloud Databases](/links/web/databases).

Una vez finalizado, podrá instalar un nuevo "módulo en un clic".

#### Solución n°3: eliminar una base de datos no utilizada <a name="delete-the-database"></a>

> [!warning]
>
> La operación de eliminación de una base de datos es permanente. Esta operación también implica la eliminación de las copias de seguridad de la base de datos correspondiente. En caso de duda, póngase en contacto con su webmaster o con uno de nuestros [partners](/links/partner).
>

<!-- CP-STEPS-START:diag-delete-database -->
Para eliminar una base de datos, haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Bases de datos`{.action}. En la tabla que aparece, haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a la base de datos que desea suprimir y seleccione `Eliminar la base de datos`{.action}:
>>
>> ![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}
>>
<!-- CP-STEPS-END:diag-delete-database -->

Una vez finalizado, podrá instalar un nuevo "módulo en un clic".

#### Solución n° 4: instalar su "módulo en un clic" en una base de datos ya utilizada

Para instalar el "módulo en un clic" en una base de datos existente, deberá utilizar la funcionalidad de instalación en [modo avanzado](/pages/web_cloud/web_hosting/cms_install_1_click_modules) de un nuevo "módulo en un clic".

Para consultar las claves de su base de datos, consulte nuestra guía [Instalar su sitio web con un "módulo en un clic" (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Si tiene un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), puede crear una base de datos del tamaño que desee, dentro del límite del espacio en disco asignado.

Una vez finalizado, podrá instalar un nuevo "módulo en un clic".

> [!primary]
>
> En esta situación, puede realizar una copia de seguridad de los datos de un único sitio web utilizando un [script PHP o un comando SSH](/pages/web_cloud/web_hosting/sql_database_export).
>
> Si tiene cualquier duda sobre las operaciones que debe realizar, póngase en contacto con la [comunidad de OVHcloud](/links/community) o con uno de nuestros [partners](/links/partner).<br>
> No podremos asistirle.
>

///

/// details | Su "módulo en un clic" se muestra en una dirección web de tipo "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Después de realizar todas las copias de seguridad necesarias, [elimine el "módulo en un clic"](#delete-the-module) y, a continuación, su [base de datos](#delete-the-database). A continuación, vuelva a instalar el "módulo en un clic" en el dominio deseado.

///

/// details | "El directorio de instalación no está vacío"

![folder_not_empty](/pages/assets/screens/email-sending-to-customer/webhosting/folder-not-empty.png){.thumbnail}

Después de haber iniciado la creación de su "módulo en un clic", ha recibido un mensaje de correo electrónico indicándole que el directorio de instalación de su "módulo en un clic" no está vacío.

Este mensaje significa que el **Carpeta raíz** del sitio web al que está asociado su nombre de dominio ya contiene uno o varios archivos o directorios.

<!-- CP-STEPS-START:change-domain-root-folder -->
Para conectar su nombre de dominio a otro sitio web (carpeta raíz), haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los dominios y subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del dominio o subdominio correspondiente, y luego en `Desvincular el dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Una vez que el nombre de dominio esté desvinculado del sitio web, consulte nuestro tutorial "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
<!-- CP-STEPS-END:change-domain-root-folder -->

También puede conectarse a su alojamiento web a través del protocolo [FTP](/pages/web_cloud/web_hosting/ftp_connection) y eliminar el contenido de la carpeta. Después de realizar una copia de seguridad local del archivo o de vaciarlo moviendo todo su contenido a otro directorio FTP.

///

/// details | "Either no configuration (ovhConfig or runtime), or the current configuration is not valid (please, double check the module's requirement) (as a reminder, the global configuration is used for module).".

Este mensaje indica que el archivo ".ovhconfig" no existe o no es válido para poder instalar el "módulo en un clic". Este archivo contiene la versión de PHP y el entorno de ejecución aplicados al alojamiento web.

Le recomendamos que utilice la versión de PHP más reciente. **Antes** de modificar la configuración del archivo ".ovhconfig", si tiene otros sitios web en su alojamiento web, asegúrese de que estos son compatibles con la nueva versión de PHP y/o el nuevo entorno de ejecución que vaya a aplicar en su alojamiento web.

Para más información, consulte nuestra guía "[Cambiar la configuración de un alojamiento web](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

///

/// details | "Se ha producido un error al cargar la información (There is not enough space on your hosting (you need at least xxx MB)"

<!-- CP-STEPS-START:check-database-credentials -->
![not_enough_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-not-enough-ftp-space.png){.thumbnail}

Este mensaje indica que el [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_connection) de su alojamiento web tiene un volumen de datos demasiado elevado. 

#### Solución 1: eliminar datos para liberar espacio de almacenamiento FTP

En ese caso, elimine (o mueva) sus datos para instalar un nuevo "[módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

En este caso, [conéctese por FTP](/pages/web_cloud/web_hosting/ftp_connection) a su alojamiento web, [realice copias de seguridad localmente](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) de sus datos y elimine los archivos que no sean necesarios para el funcionamiento de su sitio web.

> [!primary]
>
> Si tiene preguntas sobre la eliminación de datos para reducir la cantidad de datos en su alojamiento web, póngase en contacto con nuestra [comunidad de usuarios](/links/community) o con los [partners de OVHcloud](/links/partner).<br>
> El soporte de OVHcloud no está autorizado a asistirle.
>

#### Solución n° 2: modificar su plan de hosting

> [!primary]
>
> Consultar la comparativa de nuestros diferentes [planes de hosting](/links/web/hosting).
>

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la sección `Suscripción` - `Solución`, haga clic en el botón `...`{.action} y luego en `Cambiar de plan`{.action}:
>>
>> ![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}
>>
<!-- CP-STEPS-END:check-database-credentials -->

Los planes [Pro](/links/web/hosting-professional-offer) y [Performance](/links/web/hosting-performance-offer) le permitirán crear hasta tres "módulos en un clic" adicionales con una base de datos independiente para cada uno de ellos. Los planes de hosting **Performance** también le permitirán activar gratuitamente un servidor [Web Cloud Databases](/links/web/databases).

///

/// details | "No se puede conectar a la base de datos" <a name="delete-the-module"></a>

![wrong_id_database](/pages/assets/screens/email-sending-to-customer/databases/db-connection-failed.png){.thumbnail}

Tras instalar el "módulo en un clic" en modo avanzado, recibirá un mensaje de correo electrónico indicándole que el "módulo en un clic" no se puede conectar a la base de datos indicada.

Por lo tanto, compruebe las claves de la base de datos. Para más información, consulte esta [guía](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

<!-- CP-STEPS-START:diag-delete-module -->
A continuación, elimine el "módulo en un clic". Para ello, haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Módulos en un clic`{.action}, en la tabla que aparece, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente al dominio y seleccione `Eliminar el módulo`{.action}.
>>
>> ![delete_a_module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > **Eliminar elementos de la base de datos puede provocar la interrupción del sitio web.**
>> >
>> > Asegúrese de eliminar sólo la instalación que acaba de iniciar. Para ello, compruebe que se trata del directorio correspondiente en la columna `Path` (ruta).
>> >
>>
<!-- CP-STEPS-END:diag-delete-module -->

A continuación, vuelva a instalar un nuevo "módulo en un clic".

///

/// details | "You have insufficient rights on this database."

![insufficient_rights](/pages/assets/screens/email-sending-to-customer/databases/db-insufficient-rights.png){.thumbnail}

Este mensaje aparece únicamente al instalar un "módulo en un clic" en **modo avanzado**. La base de datos no se puede modificar porque la cantidad de datos que contiene supera el límite permitido. En este caso, la base de datos está bloqueada como de sólo lectura.

En este caso, instale su "módulo en un clic" pasando por el [modo simple](/pages/web_cloud/web_hosting/cms_install_1_click_modules) o seleccione otra base de datos cuando se instale en modo avanzado. Si lo necesita, contrate una [oferta de bases de datos](/links/web/hosting-options-startsql) complementaria.

Si no dispone de otras bases de datos y no desea contratar una solución adicional, [importe localmente una copia de su base de datos](/pages/web_cloud/web_hosting/sql_database_export) y elimine los datos que no necesite.

> [!warning]
>
> **Eliminar elementos de la base de datos puede provocar la interrupción del sitio web.**
>
> Si tiene más preguntas, póngase en contacto con nuestra [comunidad de usuarios](/links/community) o con los [partners de OVHcloud](/links/partner).<br>
> No podremos asistirle.
>

///

/// details | "Can't connect to database 'xxxxxxxx' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-access-denied.png){.thumbnail}

Ha iniciado la instalación de un "módulo en un clic" en [modo avanzado](/pages/web_cloud/web_hosting/cms_install_1_click_modules) en una base de datos situada en un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Ha recibido este mensaje de error por correo electrónico. Esto significa que el usuario indicado durante la instalación no tiene suficientes derechos sobre la base de datos o que las claves indicadas son incorrectas.

En este caso, modifique en primer lugar los [permisos del usuario](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server) correspondientes para que tengan los permisos **Administrador** o **Lectura/escritura** en la base de datos.

Compruebe también sus claves [conectándose directamente](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) a su servidor de bases de datos y reinicie la instalación de su "módulo en un clic".

///

/// details | "Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'"

![cant_connect_server](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-server.png){.thumbnail}

Ha iniciado la instalación de un "módulo en un clic" en [modo avanzado](/pages/web_cloud/web_hosting/cms_install_1_click_modules) en una base de datos situada en un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Ha recibido este mensaje de error por correo electrónico. Significa que el nombre del servidor de bases de datos que ha especificado es incorrecto.

<!-- CP-STEPS-START:find-db-server-name -->
Para consultar el nombre del servidor de bases de datos, haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Web Cloud Databases](/links/control-panel/web-cloud-databases) y seleccione el servidor de bases de datos correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 2**
>>
>> El nombre del servidor que debe utilizarse aparece en el recuadro `Datos de conexión`, subparte `SQL`, con la mención `Nombre de host`.
>>
<!-- CP-STEPS-END:find-db-server-name -->

///

/// details | Su antiguo sitio web sigue apareciendo

<!-- CP-STEPS-START:verify-db-connection -->
Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Módulos en 1 clic`{.action}, haga clic en el enlace de su sitio web en la columna `Ruta`. Se abrirá una nueva pestaña con su sitio web. El nombre de dominio asociado a su instalación se muestra en la dirección de su navegador de internet. Por ejemplo, si su dominio se denomina "domain.tld", es posible que aparezca otro dominio o una página estándar de OVHcloud.
>>
<!-- CP-STEPS-END:verify-db-connection -->

Este fallo de funcionamiento puede deberse a varias causas:

- Compruebe que el nombre de dominio ("domain.tld") es el que acaba de instalar el "módulo en un clic".

- Si ha realizado recientemente un cambio en la [zona DNS activa](/pages/web_cloud/domains/dns_zone_edit)/[servidores DNS](/pages/web_cloud/domains/dns_server_edit) de su nombre de dominio o una [transferencia de nombre de dominio](/pages/web_cloud/domains/transfer_incoming_generic_domain). Espere a que se completen estas operaciones (4-24 horas para un cambio en la zona DNS y 24-48 horas para un cambio en los servidores DNS). No olvide reiniciar sus dispositivos (PC, smartphone, box, etc.) y vaciar la caché de su navegador de internet.

- Su dominio siempre está asociado a su antiguo alojamiento web. En ese caso, modifique la [zona DNS activa](/pages/web_cloud/domains/dns_zone_edit) asociada al dominio o a sus [servidores DNS](/pages/web_cloud/domains/dns_server_edit). Si la zona DNS activa de su dominio no está gestionada en OVHcloud, póngase en contacto con su proveedor DNS para que le informe.

///

/// details | La contraseña "Administrador" de acceso a la "interfaz de administración" de su "módulo en un clic" no funciona <a name="adminpassword"></a>

Si ha rechazado su contraseña actual para acceder al panel de administración de su **C**ontent **M**anagement **S**ystem (**CMS**), consulte el apartado "Cambiar la contraseña de su módulo" de nuestra documentación sobre [gestión de su "módulo en un clic"](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

///

/// details | El prefijo de las tablas de la base de datos ya está en uso en la base de datos

Este error solo afecta a las instalaciones de módulos en un clic en *modo avanzado*.

Le informa por correo electrónico de que, al intentar instalar el "módulo en un clic", ha introducido un prefijo de tabla que ya se había utilizado en la base de datos previamente seleccionada para instalar el "módulo en un clic". Se cancelará la instalación. 

Vuelva a ejecutar el programa de instalación con otro prefijo de tabla o base de datos para corregir la situación.

///

/// details | Los DNS del dominio no apuntan hacia un alojamiento web de OVHcloud

Este error le informa de que las entradas DNS del dominio utilizado para su sitio web no apuntan a un alojamiento web de OVHcloud. No es posible instalar un "módulo en un clic" en un dominio que no apunta a un alojamiento de OVHcloud.
Para resolver esta situación, debe editar su zona DNS. Para más información sobre las direcciones IP que debe introducir, consulte la guía [Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_cloud_databases/configure-database-server). A continuación, deberá [Editar su zona DNS](/pages/web_cloud/domains/dns_zone_edit).
Si su zona DNS no está alojada en OVHcloud, póngase en contacto con su proveedor de zona DNS para que realice las acciones necesarias.

Una vez finalizado, vuelva a instalar un nuevo "módulo en un clic".

///

/// details | Su base de datos necesita estar en versión "X", pero actualmente está en versión "Y"

Este mensaje de correo electrónico le informa de que la versión de su base de datos es demasiado antigua para instalar el "módulo en un clic". 

En el mismo mensaje de correo electrónico, encontrará la versión en la que debe estar su base de datos. Puede elegir entre tres opciones:

- Actualización del **S**istema de **G**estión de **B**ase de **D**atos (SGBD como MySQL, PostgreSQL, MariaDB, etc.) en una versión más reciente.
- Instalación de una nueva base de datos asociada a su alojamiento web. garantizando que el SGDB y la versión son compatibles con el "módulo en un clic".
- Si tiene un servidor [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), compruebe que su servidor utiliza el SGBD y la versión correctos y cree la base de datos que desee.

Una vez finalizado, vuelva a instalar un nuevo "módulo en un clic".

///

## Más información <a name="go-further"></a>

[Instalar su sitio web con los módulos en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Problemas recurrentes al utilizar un programa FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
