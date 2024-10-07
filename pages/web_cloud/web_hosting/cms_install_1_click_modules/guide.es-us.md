---
title: "Instalar su sitio web con un 'módulo en 1 clic' (CMS)"
excerpt: Descubra cómo instalar su sitio web a través de nuestros "módulos en 1 clic"
updated: 2024-10-07
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los módulos en 1 clic permiten instalar un sitio web fácil y rápidamente (sin necesidad de conocimientos técnicos). Los "módulos en 1 clic" son en realidad **C**ontent **M**anagement **S**ystem **(CMS)**. OVHcloud ofrece la instalación de los CMS más conocidos: *WordPress*, *Joomla!*, *Drupal* y *PrestaShop*.

**Descubra cómo instalar su sitio web a través de nuestros "módulos en 1 clic".**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Tener contratado un [plan de hosting](/links/web/hosting) que incluya al menos una base de datos. 
- Estar conectado al [área de cliente de OVHcloud](/links/manager).
- Utilizar una versión reciente de PHP y un entorno de ejecución compatible en su alojamiento web de OVHcloud. Descubra el estado de las distintas versiones disponibles en esta [página](https://webhosting-infos.hosting.ovh.net/). Si lo necesita, consulte nuestra [documentación](/pages/web_cloud/web_hosting/configure_your_web_hosting) para cambiar rápidamente esta configuración.
- Debe haber un archivo configurado "[.ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)" en la raíz FTP de su alojamiento web.
- El directorio (directorio raíz) en el que se instalará el módulo en 1 clic debe estar vacío o no existe actualmente.
- El dominio (y el subdominio si así lo desea) que vaya a utilizar para su sitio web debe estar declarado como [Multisitio](/pages/web_cloud/web_hosting/multisites_configure_multisite) en su alojamiento web de OVHcloud.

## Procedimiento

> [!primary]
>
> Si experimenta alguna dificultad al seguir uno de los pasos que se describen a continuación, consulte nuestra documentación específica sobre los [errores más frecuentes relacionados con los módulos en un clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic). 
>

### Etapa 1 - elegir correctamente su CMS

Un CMS permite diseñar un sitio web a través de una interfaz fácil de usar. Existen varios CMS, algunos prediseñados, por ejemplo, para crear un sitio de e-commerce, otros para crear un sitio web corporativo, un blog, etc. Así podrá disfrutar de una estructura de sitio web lista para usar y personalizable (temas, extensiones, textos, etc.) a su gusto.

De todos los CMS, OVHcloud ofrece 4 CMS de instalación automática con sus "módulos en 1 clic". 

Si utiliza esta solución, deberá elegir entre los 4 CMS anteriores. Si ya ha elegido la opción, siga leyendo esta guía. En caso contrario, consulte nuestra [comparativa de los CMS](/links/web/hosting-cms-comparison) para elegir.

Si quiere instalar un CMS no disponible a través de nuestros "módulos en 1 clic", puede instalarlo manualmente en su alojamiento. Dicho CMS es compatible con nuestros planes de hosting de OVHcloud (/links/web/hosting).

![Logotipos de los CMS](/pages/assets/screens/other/cms/cms-logos.png){.thumbnail}

### Etapa 2 - acceder a la gestión de "módulos en 1 clic"

Conéctese al [área de cliente de OVHcloud](/links/manager) y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action}, seleccione el alojamiento en el que desea instalar un "módulo en 1 clic" y, seguidamente, haga clic en la pestaña `Módulos en 1 clic`{.action}.

Aquí encontrará los módulos en 1 clic que haya instalado. Desde ahí podrá gestionar sus módulos en 1 clic e instalar nuevos módulos.

![Acceso a la sección Módulos en un clic](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}

### Etapa 3 - añadir un "módulo en 1 clic"

En la pestaña `Módulos en 1 clic`{.action}, del alojamiento, haga clic en el botón `Añadir un módulo`{.action} para añadir un nuevo "módulo en 1 clic".

Se abrirá una ventana en la que deberá seleccionar el CMS correspondiente y el dominio con el que quiere instalar el sitio web:

![Elección del módulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}

Si su dominio no está en la lista, acceda a la pestaña `Multisitio`{.action} para añadirlo. Consulte nuestra guía [Cómo compartir un alojamiento web con varios sitios web](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external} si es necesario.

> [!primary]
>
> Compruebe, justo debajo del formulario que permite seleccionar un nombre de dominio (o un subdominio), que `El directorio de instalación por defecto` es el en el que desea instalar su "módulo en un clic".
>
> Le recordamos que este directorio debe estar completamente vacío.
>
> Si lo necesita, consulte nuestra guía "[Cómo compartir un alojamiento web con varios sitios web](/pages/web_cloud/web_hosting/multisites_configure_multisite)" para modificar el directorio de destino de su dominio.
>

Una vez que haya añadido correctamente el dominio, vuelva a intentar añadir un módulo en 1 clic.

Una vez seleccionado el CMS, elija entre una instalación **rápida** o **avanzada**:

- Instalación **rápida** (seleccionada por defecto): OVHcloud se encarga de la instalación del CMS y le envía las claves para administrarlo por correo electrónico en su dirección de correo electrónico de contacto de OVHcloud. Es la forma más fácil y rápida de instalar un "módulo en 1 clic".
- Instalación **avanzada**: le permite personalizar la configuración de la instalación del CMS. Introduzca toda la información necesaria para el buen funcionamiento del CMS: 
    - información de conexión a la base de datos (servidor, nombre de usuario, puerto, contraseña, etc.)
    - ruta de instalación en el espacio de almacenamiento FTP del alojamiento
    - idioma del CMS
    - identificadores de administrador (nombre de administrador, contraseña, dirección de correo electrónico, etc.)

#### Instalación rápida de un "módulo en 1 clic"

Elija el dominio de su CMS, controle el directorio de destino que aparece automáticamente después de elegir el dominio y compruebe que la casilla `Instalación en modo avanzado`{.action} no está marcada. Por último, haga clic directamente en el botón `Instalar`{.action}.

> [!warning]
>
> El directorio de instalación de su "módulo en 1 clic" debe estar vacío y debe disponer de al menos una base de datos disponible en su alojamiento web de OVHcloud para que se realice la instalación.
>
> Para una instalación rápida, no cree previamente la base de datos, el robot de instalación lo hará.
> 

![Instalación rápida de un módulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-quick-mod-step-1-b.png){.thumbnail}

Una vez finalizada la instalación, recibirá por correo electrónico los datos de conexión a la interfaz de administrador (*back office*) de su CMS. Conéctese a ella para personalizar su sitio web.

> [!primary]
>
> La instalación y recepción del mensaje de correo electrónico puede tardar hasta 15 minutos a partir del momento en que haga clic en el botón `Instalar`{.action} en su [área de cliente de OVHcloud](/links/manager).
>

#### Instalación avanzada de un "módulo en 1 clic"

Para realizar este método de instalación, asegúrese de que la casilla `Instalación en modo avanzado`{.action} esté marcada y haga clic en el botón `Siguiente`{.action} :

![Instalación avanzada de un módulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-1.png){.thumbnail}

##### Seleccione la base de datos

Introduzca los datos de conexión a la base de datos. 

> [!warning]
>
> Si los datos introducidos son incorrectos, la instalación no llegará a su fin. Para evitar que esto suceda, le recomendamos que pruebe primero la conexión a su base de datos.
> 
> Para obtener las claves de conexión a su base de datos incluida con su alojamiento web, consulte [esta guía](/pages/web_cloud/web_hosting/sql_create_database).
>
> Para obtener las claves de conexión a la base de datos creada en una instancia de Web Cloud Databases, consulte [esta guía](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

![Base de datos para instalación avanzada](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-3.png){.thumbnail}

Existen diversas posibilidades:

- La base de datos ya está creada en su alojamiento web: seleccione la opción del menú desplegable. `Seleccione la base de datos`{.action} y complete la información solicitada.
- La base de datos todavía no está creada en su alojamiento web: [cree su base de datos incluida con su alojamiento](/pages/web_cloud/web_hosting/sql_create_database), vuelva al menú desplegable : `Seleccione la base de datos`{.action} y complete la información solicitada.
- La base de datos está [creada en su instancia Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): en el menú desplegable. `Seleccione la base de datos`{.action} y elija la opción `Base de datos externa al alojamiento web`{.action} e introduzca la información solicitada. El datacenter en el que se alojan el servicio y el alojamiento web es el mismo.
- La base de datos está creada en otro plan de hosting de OVHcloud: en el menú desplegable. `Seleccione la base de datos`{.action} y elija la opción `Base de datos externa al alojamiento web`{.action} e introduzca la información solicitada. La base de datos y el alojamiento web deben estar alojados en el mismo datacenter.

El resto de los datos solicitados para la base de datos son los siguientes:

- *Dirección del servidor* : introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud. 

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Web Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` donde los **"X"** deben sustituirse por la referencia de su servicio Web Cloud Databases.
>

- *Nombre de la BD* : este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](/links/manager).

- *Puerto* : sitúe sistemáticamente el número **3306** (puerto por defecto) para una base de datos incluida con su alojamiento web. Para una base de datos de una instancia de Web Cloud Databases, consulte [esta guía](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Nombre de usuario* : es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web.
Para las bases de datos creadas en un plan de hosting Cloud Databases, consulte la información que se indica en [esta guía](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

- *Contraseña* : le hemos enviado un mensaje de correo electrónico al crear la base de datos. Es posible que lo haya cambiado.

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}.

##### Configurar el módulo

Introduzca la siguiente información para la configuración del módulo:

- *nombre o correo electrónico del administrador :* Identificador que utilizará para conectarse al panel de administración de su CMS (Back Office).
- *contraseña :* contraseña que utilizará para conectarse al panel de administración de su CMS.
- *dominio :* nombre de dominio con el que quiere instalar su CMS. Si lo necesita, consulte nuestra guía [Cómo alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- *idioma :* Idioma en el que se instalará el CMS.
- *Ruta de instalación :* Este se indica automáticamente al seleccionar el dominio. Puede completarlo introduciendo subdirectorios (para usuarios expertos).

> [!primary]
>
> Compruebe, para el formulario `Ruta de instalación`, que el directorio pre-completado es el que desea instalar el módulo en un clic con su nombre de dominio.
>
> Le recordamos que este directorio debe estar completamente vacío.
>
> Además, si introduce un subdirectorio en la `Ruta de instalación`, aparecerá en la URL de acceso a su módulo en un clic.
> Por ejemplo, si introduzco un subdirectorio *test* en el formulario, la URL de acceso a mi "módulo en un clic" tendrá el siguiente formato: **http://domain.tld/test/**.
>
> Si lo necesita, consulte nuestra guía "[Cómo compartir un alojamiento web con varios sitios web](/pages/web_cloud/web_hosting/multisites_configure_multisite)" para modificar el directorio de destino de su dominio.
>

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action} :

> [!warning]
>
> La carpeta final indicada en la ruta de instalación debe estar obligatoriamente vacía y totalmente vacía para que la instalación tenga éxito.
> 

![Configuración del módulo para instalación avanzada](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-2.png){.thumbnail}

##### Confirmar la instalación

Compruebe que la información mostrada es correcta y haga clic en `Aceptar`{.action} si todo está en orden:

![Validación de la instalación en modo avanzado](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-4.png){.thumbnail}

### Etapa 4: personalizar mi sitio web

La instalación puede tardar unos diez minutos.

Una vez finalizado, recibirá un mensaje de correo electrónico confirmando la instalación del CMS. Este mensaje le invitará a conectarse al panel de administración de su CMS. Así podrá cambiar el tema de su sitio web y publicar en él sus primeros contenidos.

> [!warning]
>
> El soporte de OVHcloud no ayuda a los CMS. Los ofrecemos únicamente en instalación **en 1 clic**.
>

Si desea obtener ayuda sobre las funcionalidades de su CMS, consulte con el editor del CMS que haya instalado. En el área de cliente encontrará la guía correspondiente para ayudarle en su proyecto.

|CMS|Sitio web oficial|
|---|---|
|WordPress|[https://es.wordpress.com/](https://es.wordpress.com/){.external}|
|PrestaShop|[https://www.prestashop.com/es/](https://www.prestashop.com/es/){.external}|
|Joomla|[https://www.joomla.com/](https://www.joomla.com/){.external}|
|Drupal|[https://www.drupal.org/](https://www.drupal.org/){.external}|

## Más información

[Seleccione un CMS para crear un sitio web](/links/web/hosting-cms-comparison){.external}.

[Cómo compartir un alojamiento web entre varios sitios web](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gestión de una base de datos desde un alojamiento compartido](/pages/web_cloud/web_hosting/sql_create_database).

Descubra nuestras [ofertas Web Cloud Databases](/links/web/databases){.external}.

[Gestionar su CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

[Desinstalar su CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module#etapa-3-eliminar-el-modulo).

Si quiere conservar un control total sobre la instalación de su CMS, puede [instalar manualmente un CMS en su alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).