---
title: "Tutorial - Instalar manualmente Drupal"
excerpt: "Descubra cómo instalar manualmente un CMS Drupal"
slug: cms_manually_install_drupal
section: CMS
order: 06
updated: 2023-04-06
---

**Última actualización: 06/04/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>
  
## Objetivo

Aquí encontrará todos los elementos necesarios para instalar manualmente el CMS (Content Management System) Drupal en pocos pasos.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o [el editor del CMS Drupal](https://www.drupal.org/support){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
>

> [!success]
>
> Para instalar Drupal **automáticamente** desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), consulte nuestra documentación sobre la [instalación de un módulo en un clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/).
>
> Para instalar **otro CMS** (WordPress, Joomla!, PrestaShop), consulte nuestra documentación sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).
>

**Descubra cómo instalar manualmente su CMS Drupal**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/es-es/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}

## Procedimiento

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar el CMS **Drupal** en su [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/), es necesario realizar algunos preparativos.

Siga el **conjunto de etapas** descritos en nuestro tutorial sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) antes de continuar en el siguiente paso 2.

### Etapa 2 - Finalizar la instalación manual <a name="step2"></a>

> [!success]
>
> Antes de continuar la instalación, vacíe la caché de su navegador de Internet para evitar cualquier error.
>

#### 2.1 - Acceder a su sitio Drupal a través de su navegador

Escriba su dominio en la barra de búsqueda de su navegador de Internet.

Si los archivos fuente de Drupal se han colocado correctamente en la carpeta raíz, aparecerá la página de selección del idioma para Drupal:

![Drupal instalation step 1](images/Drupal-install-language-1.png){.thumbnail}

Seleccione el idioma del sitio web y haga clic en `Save and Continue`{.action}.

#### 2.2 - Elija el tipo de instalación

Drupal ofrece varios niveles de instalación:

- una versión estándar (recomendada), 
- versión mínima
- una versión de presentación 

![Drupal instalation step 2](images/Drupal-install-profil-2.png){.thumbnail}

Le recomendamos que realice una instalación **Standard**. Haga clic en `Save and Continue`{.action}.

#### 2.3 - Asociar su Drupal con su base de datos

Introduzca la información solicitada para la base de datos:

![Drupal instalation step 3](images/Drupal-install-db-config-3.png){.thumbnail}

Si lo necesita, consulte la guía sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

- *Database type* : seleccione el tipo de base de datos que desee,

- *Database name* : este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

- *Database username* : es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web. Para las bases de datos creadas en un servicio Web Cloud Databases, consulte la información indicada en **el etapa 1.4** del tutorial sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

- *Database password* : se ha establecido usted mismo al crear la base de datos. Es posible que lo haya cambiado.

Haga clic en `Advanced Options`{.action} para descubrir el resto del menú.

- *Host* : introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud. 

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Web Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa0000"** corresponde a su identificador OVHcloud sin el **"-ovh"** y los **"X"** se sustituyen por el resto de la referencia de su servicio Web Cloud Databases.
>

- *Port number*: si utiliza una base de datos incluida con su alojamiento de OVHcloud, deje el predeterminado **3306**. Si utiliza un servicio Web Cloud Databases, consulte el **etapa 1.4** del tutorial sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) para obtener el número de puerto correcto.

- *Table name prefix* : si la instalación se realiza con una nueva base de datos, introduzca el prefijo que prefiera. Si utiliza una base de datos ya utilizada en otro sitio web, puede consultar el **etapa 1.4** del tutorial sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) para no indicar un "prefijo" de tabla que ya haya utilizado en su base de datos.

Haga clic en `Save and Continue`{.action}.

Si todo se ha realizado correctamente, se inicia la instalación de Drupal:

![Drupal instalation step 4](images/Drupal-install-4.png){.thumbnail}

#### 2.4 - Configurar la información del sitio y el acceso "Administrador"

Una vez finalizado el paso anterior, se mostrará la siguiente página:

![Drupal instalation step 5-1](images/Drupal-install-configure-site-5-1.png){.thumbnail}

Introduzca los datos solicitados:

- *Site name* : escriba el nombre de su sitio web Drupal.

- *Site email address*: introduzca una dirección de correo electrónico válida que utilizará su sitio web Drupal.

- *Username* : establezca un nombre de usuario para conectarse al área de administración de Drupal (Back Office).

- *Password* y *Confirm password*: establezca la contraseña que se asociará a su nombre de usuario para acceder a su *Back Office* Drupal.

Continúe en el apartado:

![Drupal instalation step 5-1](images/Drupal-install-configure-site-5-2.png){.thumbnail}

- *Email address*: introduzca su dirección de correo electrónico. Es el lugar ideal para introducir la misma dirección que la que se ha elegido en el formulario *Dirección de correo electrónico del sitio web*.

- *Default country*: elija el país en el que más se va a consultar el sitio web.

- *Default time zone*: seleccione la zona horaria predeterminada para su sitio web.

Haga clic en `Save and Continue`{.action}.

Si todo ha ido bien, aparecerá la siguiente página:

![Drupal instalation step 6](images/Drupal-install-ending-6.png){.thumbnail}

> [!success]
>
> La instalación de Drupal ha finalizado. Ya puede empezar a crear el contenido de su sitio web Drupal.
>

## Más información <a name="go-further"></a>

[Sitio Oficial Drupal](https://www.drupal.org/){.external}

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
