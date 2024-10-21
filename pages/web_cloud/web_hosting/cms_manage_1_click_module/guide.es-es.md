---
title: "¿Cómo gestionar su módulo en 1 clic?"
excerpt: "Descubra cómo gestionar su módulo en 1 clic desde el área de cliente de OVHcloud"
updated: 2024-10-11
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los módulos en 1 clic permiten la instalación fácil y rápida de un programa en línea de ayuda a la creación de sitios web (comúnmente llamado "CMS"). OVHcloud le ofrece los más conocidos: WordPress, PrestaShop, Drupal y Joomla!.

**Descubra cómo gestionar el módulo en 1 clic desde el área de cliente de OVHcloud.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#go-further) de esta guía.
>

## Requisitos

- Tener contratado un plan de [hosting Cloud](/links/web/hosting) que permita instalar un módulo en 1 clic.
- Haber creado un módulo en 1 clic en su alojamiento (si todavía no ha realizado la instalación, siga las indicaciones de esta [guía](/pages/web_cloud/web_hosting/cms_install_1_click_modules)).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Acceder al sitio web

Para acceder a la parte pública de su sitio web tras la instalación de un módulo en 1 clic, acceda al [área de cliente de OVHcloud](/links/manager), haga clic en `Web Cloud`{.action}, `Alojamientos`{.action}, el alojamiento correspondiente y, seguidamente, en la pestaña `Módulos en 1 clic`{.action}.

A continuación, haga clic en el botón `..`{.action} a la derecha de la línea correspondiente al módulo y seleccione `Acceder al módulo`{.action}.

> [!primary]
>
> Si su sitio web no aparece correctamente debido a esta operación, consulte las guías de OVHcloud relativas a los alojamientos compartidos en la sección [Diagnóstico](/products/web-cloud-hosting).
>

### Acceder al panel de administración

Para acceder a la parte del sitio web reservada a los administradores, acceda al [área de cliente de OVHcloud](/links/manager), haga clic en `Web Cloud`{.action}, `Alojamientos`{.action}, el alojamiento correspondiente y, seguidamente, en la pestaña `Módulos en 1 clic`{.action}.

A continuación, haga clic en el botón `..`{.action} a la derecha de la línea correspondiente al módulo y seleccione `Acceder al panel de administración del módulo`{.action}.

### Encontrar el usuario de administrador

Haga clic en la pestaña `Módulos en 1 clic`{.action} desde el menú `Alojamientos`{.action} del área de cliente. El usuario de administrador de su módulo aparece en la columna `Login`.

También puede consultar el mensaje de correo electrónico recibido al crear el módulo desde su [área de cliente de OVHcloud](/links/manager): haga clic en su nombre en la esquina superior derecha de la pantalla y, en el menú que aparece, haga clic en `Emails de servicio`{.action}.

### Cambiar la contraseña del módulo <a name="password-change"></a>

> [!primary]
>
> Encontrará a continuación la documentación oficial para los diferentes CMS que ofrece instalar en nuestros alojamientos compartidos:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : El editor de este programa no ofrece ninguna documentación en la fecha para cambiar la contraseña de acceso al panel de administración de Drupal. Por favor, contacte directamente con el editor sobre este asunto. Para más información, consulte la página oficial [drupal.org](https://www.drupal.org/){.external}.
> - PrestaShop : El editor de este programa no ofrece documentación en la fecha para cambiar la contraseña de acceso al panel de administración de PrestaShop. Por favor, contacte directamente con el editor sobre este asunto. Para más información, haga clic [aquí](https://www.prestashop.com){.external} para acceder a su página oficial.
>
También es posible cambiar la contraseña de acceso al panel de administración del CMS directamente desde la base de datos.<br>
No obstante, si necesita ayuda, le recomendamos encarecidamente que utilice la documentación que le ofrezca el editor del CMS o que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Más información en la sección (#go-further) de esta guía.

### Eliminar el módulo

> [!warning]
>
> La copia de seguridad de sus datos es una de las operaciones básicas para [proteger sus sitios web](/pages/web_cloud/web_hosting/secure_your_website). Le recomendamos que, siguiendo las instrucciones de esta **guía**, importe regularmente y [antes de eliminar](/pages/web_cloud/web_hosting/exporter-son-site-web) la copia de seguridad de sus datos en un soporte local, como un USB o un disco duro externo.
>

#### Etapa 1: identificar la base de datos asociada a su módulo <a name="step1"></a>

Para eliminar el módulo en 1 clic, es necesario empezar identificando su base de datos de forma **segura**. Para ello, acceda al [área de cliente de OVHcloud](/links/manager). Haga clic en `Web Cloud`{.action}, `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Bases de datos`{.action}.

Si dispone de una sola base de datos en esta parte del área de cliente y no dispone de soluciones [Web Cloud Databases](https://www.ovh.es/cloud/cloud-databases/), puede considerar que se trata de la de su sitio web.

En caso contrario, abra la pestaña `Multisitio`{.action}. Anote el nombre de la `Carpeta raíz`: es el directorio en el que se encuentran los archivos que constituyen su módulo en 1 clic en el servidor FTP.

Conéctese al [espacio FTP del alojamiento](/pages/web_cloud/web_hosting/ftp_connection). Abra la `Carpeta raíz` encontrada anteriormente en la pestaña `Multisitio`{.action} y busque el archivo de configuración de su módulo:

- Para WordPress : **"wp-config.php"** (el nombre de la base de datos aparece con el texto **"DB_NAME"**).
- Para Joomla! : **"configuration.php"** (el nombre de la base de datos aparece bajo el término **"public $db"**).
- Para Drupal : **"settings.php"** (para encontrarlo, acceda a la carpeta **"sites"** y luego a **"default"**. El nombre de la base de datos aparece con el **"database"**).
- Para PrestaShop : **"parameters.php"** (para encontrarlo, acceda a la carpeta **"app"** y luego a **"config"**. El nombre de la base de su módulo aparece bajo la mención **"database_name'"**).

#### Etapa 2: guardar el módulo

Para hacer copias de seguridad de su sitio web, siga las instrucciones de esta [guía](/pages/web_cloud/web_hosting/exporter-son-site-web) y recupere los archivos en el espacio FTP de su alojamiento y su base de datos.

#### Etapa 3: eliminar el módulo

> [!alert]
>
> La eliminación de su módulo en 1 clic y de su base de datos conllevará igualmente la de **todas sus copias de seguridad**. Los datos eliminados no podrán recuperarse más adelante.
>

Para eliminar el módulo en 1 clic, acceda al [área de cliente de OVHcloud](/links/manager), haga clic en `Web Cloud`{.action}, `Alojamientos`{.action}, el alojamiento correspondiente y seleccione `Módulos en 1 clic`{.action}.

Haga clic en el botón `..`{.action} a la derecha de la línea que designa el módulo y, seguidamente, en el comando `Eliminar el módulo`{.action}.

> [!warning]
>
> Si elimina el módulo 1 clic **no se eliminará automáticamente la base de datos**. Si inicia la instalación de un nuevo CMS sin haber eliminado previamente la base de datos del anterior (y su alojamiento no permite la creación automática de una nueva base de datos), el mensaje "[Se ha producido un error al cargar la información. (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#se-ha-producido-un-error-al-cargar-la-informacion-you-need-at-least-one-free-database)" se mostrará en su área de cliente.
>
> Si tiene contratado [Hosting Personal](/links/web/hosting-personal-offer), o si ya ha creado cuatro bases de datos en su alojamiento [Hosting Pro](/links/web/hosting-professional-offer) o [Hosting Performance](/links/web/hosting-performance-offer), deberá eliminar la base de datos indicada en [el paso 1](#step1) **ANTES** de poder crear un nuevo módulo en 1 clic.
>

Para terminar de eliminar el módulo, acceda a la pestaña `Bases de datos`{.action}, en la sección `Web cloud`{.action}, `Alojamientos`{.action}" y en el alojamiento correspondiente de su [área de cliente de OVHcloud](/links/manager) y haga clic en `...`{.action} a la derecha de la línea que designa la base de datos y haga clic en el botón `Eliminar la base de datos`{.action}.

Antes de reanudar la instalación de un nuevo módulo, compruebe que las tareas de eliminación solicitadas anteriormente se hayan completado en la pestaña `Tareas en curso`{.action}.

### Buenas prácticas

Proteja su sitio web siguiendo las instrucciones de esta [guía](/pages/web_cloud/web_hosting/secure_your_website).

Añada herramientas de test de tipo CAPTCHA a los formularios de su sitio web.

No instale en su sitio plugins ni plantillas que no hayan sido recomendados por las comunidades oficiales de su CMS: 

- [WordPress](https://wordpress.org/){.external}
- [Joomla!](https://community.joomla.org/){.external}
- [Drupal](https://www.drupal.org/community){.external}
- [PrestaShop](https://www.prestashop.com/es){.external}

## Más información <a name="go-further"></a>

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).