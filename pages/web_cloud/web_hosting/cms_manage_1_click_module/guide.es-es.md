---
title: "¿Cómo gestionar su módulo en 1 clic?"
excerpt: "Descubra cómo gestionar su módulo en 1 clic desde el área de cliente de OVHcloud"
updated: 2026-05-04
---

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
- Haber creado un módulo en 1 clic en su alojamiento (si todavía no ha realizado la instalación, siga las indicaciones de nuestra guía "[Instalar su sitio web con un módulo en 1 clic (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)").

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### Acceder al sitio web

<!-- CP-STEPS-START:access-module -->
Haga clic en las pestañas a continuación para visualizar cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Haga clic en la pestaña `Módulos en 1 clic`{.action}.
>>
> **Etapa 2**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la línea correspondiente al módulo y seleccione `Acceder al módulo`{.action}.
>>
<!-- CP-STEPS-END:access-module -->

> [!primary]
>
> Si su sitio web no aparece correctamente debido a esta operación, consulte las guías de OVHcloud relativas a los alojamientos compartidos en la sección [Diagnóstico](/products/web-cloud-hosting).
>

### Acceder al panel de administración

<!-- CP-STEPS-START:access-admin-interface -->
Haga clic en las pestañas a continuación para visualizar cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Haga clic en la pestaña `Módulos en 1 clic`{.action}.
>>
> **Etapa 2**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la línea correspondiente al módulo y seleccione `Acceder al panel de administración del módulo`{.action}.
>>
<!-- CP-STEPS-END:access-admin-interface -->

### Encontrar el usuario de administrador

<!-- CP-STEPS-START:find-admin-login -->
Haga clic en las pestañas a continuación para visualizar cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Módulos en 1 clic`{.action}. El usuario de administrador de su módulo aparece en la columna `Login`.
>>
> **Etapa 3**
>>
>> También puede consultar el mensaje de correo electrónico recibido al crear el módulo. En su [área de cliente de OVHcloud](/links/manager), haga clic en su nombre en la esquina superior derecha de la pantalla y, en el menú que aparece, haga clic en `Emails de servicio`{.action}.
>>
<!-- CP-STEPS-END:find-admin-login -->

### Cambiar la contraseña del módulo <a name="password-change"></a>

> [!primary]
>
> Consulte la documentación oficial para los diferentes CMS que ofrece instalar en nuestros alojamientos compartidos:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : El editor de este programa no ofrece ninguna documentación en la fecha para cambiar la contraseña de acceso al panel de administración de Drupal. Por favor, contacte directamente con el editor sobre este asunto. Para más información, consulte la página oficial [drupal.org](https://www.drupal.org/).
> - PrestaShop : El editor de este programa no ofrece documentación en la fecha para cambiar la contraseña de acceso al panel de administración de PrestaShop. Por favor, contacte directamente con el editor sobre este asunto. Para más información, consulte la [página oficial de PrestaShop](https://www.prestashop.com).
>
También puede cambiar la contraseña de acceso al panel de administración del CMS directamente desde la base de datos.

No obstante, si necesita ayuda, le recomendamos encarecidamente que utilice la documentación que le ofrezca el editor del CMS o que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Más información en la sección [Más información](#go-further) de esta guía.

### Eliminar el módulo

> [!warning]
>
> La copia de seguridad de sus datos es una de las operaciones básicas para [proteger sus sitios web](/pages/web_cloud/web_hosting/secure_your_website). Le recomendamos que importe regularmente y **antes de eliminar** la copia de seguridad de sus datos en un soporte local, como un USB o un disco duro externo, siguiendo las instrucciones de nuestra guía "[Exportar un sitio web](/pages/web_cloud/web_hosting/exporter-son-site-web)".
>

#### 1 - Identificar la base de datos asociada a su módulo <a name="step1"></a>

Para eliminar el módulo en 1 clic, es necesario empezar identificando su base de datos de forma **segura**.

<!-- CP-STEPS-START:find-db-password -->
Haga clic en las pestañas a continuación para visualizar cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Haga clic en la pestaña `Bases de datos`{.action}.
>>
> **Etapa 2**
>>
>> Si dispone de una sola base de datos en esta parte del área de cliente y no dispone de soluciones [Web Cloud Databases](/links/web/databases), puede considerar que se trata de la de su sitio web.
>>
> **Etapa 3**
>>
>> En caso contrario, vaya a la pestaña `Mis sitios`{.action}. Anote el nombre de la `Carpeta raíz` que aparece en la línea del sitio web correspondiente: se trata del directorio en el que se encuentran los archivos que constituyen su módulo en 1 clic en el servidor FTP.
>>
<!-- CP-STEPS-END:find-db-password -->

Conéctese al [espacio FTP del alojamiento](/pages/web_cloud/web_hosting/ftp_connection). Abra la `Carpeta raíz` encontrada anteriormente en la pestaña `Mis sitios`{.action} y busque el archivo de configuración de su módulo:

- Para WordPress : **"wp-config.php"** (el nombre de la base de datos aparece con el texto **"DB_NAME"**).
- Para Joomla! : **"configuration.php"** (el nombre de la base de datos aparece bajo el término **"public $db"**).
- Para Drupal : **"settings.php"** (para encontrarlo, acceda a la carpeta **"sites"** y luego a **"default"**. El nombre de la base de datos aparece con el **"database"**).
- Para PrestaShop : **"parameters.php"** (para encontrarlo, acceda a la carpeta **"app"** y luego a **"config"**. El nombre de la base de su módulo aparece bajo la mención **"database_name"**).

#### 2 - Guardar el módulo

Para hacer copias de seguridad de su sitio web, siga las instrucciones de nuestra guía "[Exportar un sitio web](/pages/web_cloud/web_hosting/exporter-son-site-web)" y recupere los archivos en el espacio FTP de su alojamiento y su base de datos.

#### 3 - Eliminar el módulo

> [!alert]
>
> La eliminación de su módulo en 1 clic y de su base de datos conllevará igualmente la de **todas sus copias de seguridad**. Los datos eliminados no podrán recuperarse más adelante.
>

<!-- CP-STEPS-START:delete-module -->
Haga clic en las pestañas a continuación para visualizar cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en la pestaña `Módulos en 1 clic`{.action}.
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha de la línea que designa el módulo y, seguidamente, en el comando `Eliminar el módulo`{.action}.
>>
>> > [!success]
>> > ¿No encuentra el botón `Eliminar el módulo`{.action} ? ¿O solo quiere eliminar archivos de su módulo?
>> >
>> > Consulte nuestras guías:
>> >
>> > - [Conectarse al espacio de almacenamiento FTP de un alojamiento web](/pages/web_cloud/web_hosting/ftp_connection).
>> > - [Tutorial - Utilizar FileZilla con su alojamiento de OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
>> >
>> > <iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/8SdPLAk_qqw?si=UYxEaUNJoLYQR41O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>> >
>>
<!-- CP-STEPS-END:delete-module -->

> [!warning]
>
> Si elimina el módulo 1 clic **no se eliminará automáticamente la base de datos**. Si inicia la instalación de un nuevo CMS sin haber eliminado previamente la base de datos del anterior (y su alojamiento no permite la creación automática de una nueva base de datos), el mensaje "[Se ha producido un error al cargar la información. (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#se-ha-producido-un-error-al-cargar-la-informacion-you-need-at-least-one-free-database)" se mostrará en su área de cliente.
>
> Si tiene contratado [Hosting Personal](/links/web/hosting-personal-offer), o si ya ha creado cuatro bases de datos en su alojamiento [Hosting Pro](/links/web/hosting-professional-offer) o [Hosting Performance](/links/web/hosting-performance-offer), deberá eliminar la base de datos indicada en [el paso 1](#step1) **ANTES** de poder crear un nuevo módulo en 1 clic.
>

<!-- CP-STEPS-START:delete-database -->
Para terminar de eliminar el módulo, haga clic en las pestañas a continuación para visualizar cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Haga clic en la pestaña `Bases de datos`{.action}.
>>
> **Etapa 2**
>>
>> Haga clic en `...`{.action} a la derecha de la línea que designa la base de datos y, seguidamente, en el botón `Eliminar la base de datos`{.action}.
>>
> **Etapa 3**
>>
>> Antes de reanudar la instalación de un nuevo módulo, compruebe que las tareas de eliminación solicitadas anteriormente se hayan completado en la pestaña `Tareas en curso`{.action}.
>>
<!-- CP-STEPS-END:delete-database -->

### Buenas prácticas

Proteja su sitio web siguiendo las instrucciones de nuestra guía "[¿Cómo proteger su sitio web?](/pages/web_cloud/web_hosting/secure_your_website)".

Añada herramientas de test de tipo CAPTCHA a los formularios de su sitio web.

No instale en su sitio plugins ni plantillas que no hayan sido recomendados por las comunidades oficiales de su CMS: 

- [WordPress](https://wordpress.org/)
- [Joomla!](https://community.joomla.org/)
- [Drupal](https://www.drupal.org/community)
- [PrestaShop](https://www.prestashop.com/es)

## Más información <a name="go-further"></a>

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
