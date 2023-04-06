---
title: "Instalar su sitio web con un 'módulo en 1 clic' (CMS)"
slug: modulos-en-un-clic
excerpt: Descubra cómo instalar su sitio web a través de nuestros "módulos en 1 clic"
section: CMS
order: 01
updated: 2023-03-28
---

**Última actualización: 28/03/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Los módulos en 1 clic permiten instalar un sitio web fácil y rápidamente (sin necesidad de conocimientos técnicos). Los "módulos en 1 clic" son en realidad **C**ontent **M**anagement **S**ystem **(CMS)**. OVHcloud ofrece la instalación de los CMS más conocidos: *WordPress*, *Joomla!*, *Drupal* y *PrestaShop*.

**Descubra cómo instalar su sitio web a través de nuestros "módulos en 1 clic".**

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Requisitos

- Tener contratado un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/) que incluya al menos una base de datos.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Utilizar [una versión de PHP compatible](https://docs.ovh.com/es/hosting/cambiar-version-php-en-alojamiento-web/) en su alojamiento web.
- Haber [configurado correctamente su archivo .ovhconfig](https://docs.ovh.com/es/hosting/configurar-archivo-ovhconfig/).
- El directorio (directorio raíz) en el que se instalará el módulo en 1 clic debe estar vacío o no existe actualmente.
- El dominio (y el subdominio si así lo desea) que vaya a utilizar para su sitio web debe estar declarado como [Multisitio](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/) en su alojamiento web de OVHcloud.

## Procedimiento

### Etapa 1 - elegir correctamente su CMS

Un CMS permite diseñar un sitio web a través de una interfaz fácil de usar. Existen varios CMS, algunos prediseñados, por ejemplo, para crear un sitio de e-commerce, otros para crear un sitio web corporativo, un blog, etc. Así podrá disfrutar de una estructura de sitio web lista para usar y personalizable (temas, extensiones, textos, etc.) a su gusto.

De todos los CMS, OVHcloud ofrece 4 CMS de instalación automática con sus "módulos en 1 clic". 

Si utiliza esta solución, deberá elegir entre los 4 CMS anteriores. Si ya ha elegido la opción, siga leyendo esta guía. En caso contrario, consulte nuestra [comparativa de los CMS](https://www.ovhcloud.com/es-es/web-hosting/uc-cms-comparison/) para elegir.

Si quiere instalar un CMS no disponible a través de nuestros "módulos en 1 clic", puede instalarlo manualmente en su alojamiento. Dicho CMS es compatible con nuestros planes de hosting de OVHcloud (https://www.ovhcloud.com/es-es/web-hosting/).

![Logotipos de los CMS](images/CMS_logo.png){.thumbnail}


### Etapa 2 - acceder a la gestión de "módulos en 1 clic"

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y seleccione `Web Cloud`{.action}. Haga clic en `Alojamientos`{.action}, seleccione el alojamiento en el que desea instalar un "módulo en 1 clic" y, seguidamente, haga clic en la pestaña `Módulos en 1 clic`{.action}.

Aquí encontrará los módulos en 1 clic que haya instalado. Desde ahí podrá gestionar sus módulos en 1 clic e instalar nuevos módulos.

![Acceso a la sección Módulos en un clic](images/access_to_the_1_click_modules_section.png){.thumbnail}

### Etapa 3 - añadir un "módulo en 1 clic"

En la pestaña `Módulos en 1 clic`{.action}, del alojamiento, haga clic en el botón `Añadir un módulo`{.action} para añadir un nuevo "módulo en 1 clic".

Se abrirá una ventana en la que deberá seleccionar el CMS correspondiente y el dominio con el que quiere instalar el sitio web:

![Elección del módulo](images/add_a_module.png){.thumbnail}

Si su dominio no está en la lista, acceda a la pestaña `Multisitio`{.action} para añadirlo. Consulte nuestra guía [Cómo compartir un alojamiento web con varios sitios web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external} si es necesario.

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

![Instalación rápida de un módulo](images/choose_installation.png){.thumbnail}

Una vez finalizada la instalación, recibirá por correo electrónico los datos de conexión a la interfaz de administrador (*back office*) de su CMS. Conéctese a ella para personalizar su sitio web.

#### Instalación avanzada de un "módulo en 1 clic"

Para realizar este método de instalación, asegúrese de que la casilla `Instalación en modo avanzado`{.action} esté marcada y haga clic en el botón `Siguiente`{.action} :

![Instalación avanzada de un módulo](images/advanced_installation.png){.thumbnail}

##### Seleccione la base de datos

Introduzca los datos de conexión a la base de datos. 

![Base de datos para instalación avanzada](images/advanced_installation_database.png){.thumbnail}

Existen diversas posibilidades:

- La base de datos ya está creada en su alojamiento web: seleccione la opción del menú desplegable. `Seleccione la base de datos`{.action} y complete la información solicitada.
- La base de datos todavía no está creada en su alojamiento web: [cree su base de datos incluida con su alojamiento](https://docs.ovh.com/es/hosting/crear-base-de-datos/), vuelva al menú desplegable : `Seleccione la base de datos`{.action} y complete la información solicitada.
- La base de datos está [creada en su instancia Web Cloud Databases](https://docs.ovh.com/es/clouddb/crear-bases-de-datos-y-usuarios/): en el menú desplegable. `Seleccione la base de datos`{.action} y elija la opción `Base de datos externa al alojamiento web`{.action} e introduzca la información solicitada. El datacenter en el que se alojan el servicio y el alojamiento web es el mismo.
- La base de datos está creada en otro plan de hosting de OVHcloud: en el menú desplegable. `Seleccione la base de datos`{.action} y elija la opción `Base de datos externa al alojamiento web`{.action} e introduzca la información solicitada. La base de datos y el alojamiento web deben estar alojados en el mismo datacenter.

El resto de los datos solicitados para la base de datos son los siguientes:

- *Dirección del servidor* : introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud. 

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Web Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` donde los **"X"** deben sustituirse por la referencia de su servicio Web Cloud Databases.
>

- *Nombre de la BD* : este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

- *Puerto* : sitúe sistemáticamente el número **3306** (puerto por defecto) para una base de datos incluida con su alojamiento web. Para una base de datos de una instancia de Web Cloud Databases, consulte [esta guía](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/).

- *Nombre de usuario* : es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web.
Para las bases de datos creadas en un plan de hosting Cloud Databases, consulte la información que se indica en [esta guía](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/).

- *Contraseña* : le hemos enviado un mensaje de correo electrónico al crear la base de datos. Es posible que lo haya cambiado.

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action}.

> [!warning]
>
Si los datos introducidos son incorrectos, la instalación no llegará a su fin. Para evitar que esto suceda, le recomendamos que pruebe primero la conexión a su base de datos.
> 
> Para obtener las claves de conexión a su base de datos incluida con su alojamiento web, consulte [esta guía](https://docs.ovh.com/es/hosting/crear-base-de-datos/).
>
> Para obtener las claves de conexión a la base de datos creada en una instancia de Web Cloud Databases, consulte [esta guía](https://docs.ovh.com/es/clouddb/empezar-con-clouddb/).
>

##### Configurar el módulo

Introduzca la siguiente información para la configuración del módulo:

- *nombre o correo electrónico del administrador :* Identificador que utilizará para conectarse al panel de administración de su CMS (Back Office).
- *contraseña :* contraseña que utilizará para conectarse al panel de administración de su CMS.
- *dominio :* nombre de dominio con el que quiere instalar su CMS. Si lo necesita, consulte nuestra guía [Cómo alojar varios sitios web en un mismo hosting](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/).
- *idioma :* Idioma en el que se instalará el CMS.
- *Ruta de instalación :* Este se indica automáticamente al seleccionar el dominio. Puede completarlo introduciendo subdirectorios (para usuarios expertos).

Una vez introducidos los datos, haga clic en el botón `Siguiente`{.action} :

> [!warning]
>
> La carpeta final indicada en la ruta de instalación debe estar obligatoriamente vacía y totalmente vacía para que la instalación tenga éxito.
> 

![Configuración del módulo para instalación avanzada](images/advanced_installation_configuration.png){.thumbnail}

##### Confirmar la instalación

Compruebe que la información mostrada es correcta y haga clic en `Aceptar`{.action} si todo está en orden:

![Validación de la instalación en modo avanzado](images/advanced_installation_summary.png){.thumbnail}

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

[Seleccione un CMS para crear un sitio web](https://www.ovhcloud.com/es-es/web-hosting/uc-cms-comparison/){.external}

[Cómo compartir un alojamiento web entre varios sitios web](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/){.external}

[Gestión de una base de datos desde un alojamiento compartido](https://docs.ovh.com/es/hosting/crear-base-de-datos/){.external}

Descubra nuestras [ofertas Web Cloud Databases](https://www.ovhcloud.com/es-es/web-cloud/databases/){.external}

[Gestionar su CMS](https://docs.ovh.com/es/hosting/1-click-module-management/)

[Desinstalar su CMS](https://docs.ovh.com/es/hosting/1-click-module-management/#etapa-3-eliminar-el-modulo)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
