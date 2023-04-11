---
title: "Tutorial - Instalar manualmente PrestaShop"
slug: cms_manually_install_prestashop
excerpt: "Descubra cómo instalar manualmente el CMS PrestaShop"
section: CMS
order: 07
updated: 2023-04-07
---

**Última actualización: 07/04/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Aquí encontrará todos los elementos necesarios para instalar manualmente el CMS (Content Management System) PrestaShop en pocos pasos.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o [el editor del CMS PrestaShop](https://www.prestashop.com/en/support){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

> [!success]
>
> Para instalar PrestaShop **automáticamente** desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), consulte nuestra documentación sobre la [instalación de un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/).
>
> Para instalar **otro CMS** (WordPress, Joomla, Drupal), consulte nuestra documentación sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).
>

**Descubra cómo instalar manualmente su CMS PrestaShop**
  
## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/es-es/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}
  
## Procedimiento

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar el CMS **PrestaShop** en su [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/), es necesario realizar algunos preparativos.

Siga el **conjunto de etapas** descritos en nuestro tutorial sobre la[instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) antes de continuar en el siguiente paso 2.

### Etapa 2 - Finalizar la instalación manual <a name="step2"></a>

> [!success]
>
> Antes de continuar la instalación, vacíe la caché de su navegador de Internet para evitar cualquier error.
>

Si no ha descargado la última versión disponible de PrestaShop, aparecerá la siguiente página:

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Haga clic en `No thanks`{.action} si desea conservar la versión de PrestaShop que acaba de descargar o en `Yes please!`{.action} si quiere utilizar la versión más reciente del CMS.

#### 2.1 - Acceder a su sitio PrestaShop a través de su navegador

Escriba su dominio en la barra de búsqueda de su navegador de Internet.

Si los archivos de origen de su PrestaShop se han colocado correctamente en la carpeta raíz, aparecerá la página de PrestaShop, en la que podrá seleccionar el idioma.

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Seleccione el idioma del sitio web y haga clic en `Next`{.action}.

#### 2.2 - Aceptar las condiciones de uso

Lea atentamente las condiciones de uso, marque la casilla `I agree to the above terms and conditions`{.action} y haga clic en `Next`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.3 - Introduzca la información de su tienda online

PrestaShop le pedirá una serie de información sobre su futura tienda online:

![PrestaShop instalation step 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Información sobre su tienda**

- *Shop name* : Introduzca el nombre de su tienda online
- *Main activity*: Seleccione un sector de actividad entre las propuestas del menú desplegable
- *Country*: Seleccione su país
- *Enable SSL*: Marque **Yes** para forzar la reescritura de su URL en "https://". Es necesario disponer previamente de un certificado SSL activo en su alojamiento o su dominio. Para más información, consulte nuestra guía sobre [la gestión de un certificado SSL en su alojamiento web de OVHcloud](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/).

**Su cuenta**

- *First name*: Introduzca su nombre
- *Last name*: Introduzca su nombre
- *Shop password*: Introduzca su dirección de correo electrónico
- *Contraseña de la tienda* : Elija una contraseña para acceder al área de administración de su tienda online (backoffice)
- *Re-type to confirm*: Vuelva a introducir la contraseña

Compruebe que la información introducida es correcta y haga clic en `Next`{.action}.

#### 2.4 - Instalar el contenido por defecto para su tienda online

PrestaShop le permite instalar contenidos y módulos en su sitio web de e-commerce:

![PrestaShop instalación step 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Elija y haga clic en `Next`{.action}.

#### 2.5 - Asociar su PrestaShop con su base de datos de OVHcloud

![PrestaShop instalación step 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Si lo necesita, consulte la guía sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

Introduzca la información solicitada para la base de datos:

- *Database server address*: introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud. 

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Web Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa0000"** corresponde a su identificador OVHcloud sin el **"-ovh"** y los **"X"** se sustituyen por el resto de la referencia de su servicio Web Cloud Databases.
>

- *Database name* : este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

- *Database login*: es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web.
Para las bases de datos creadas en un servicio Web Cloud Databases, consulte la información indicada en **el etapa 1.4** de nuestra guía sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

- *Database password* : se ha establecido usted mismo al crear la base de datos. Es posible que lo haya cambiado.

- *Tables prefix* : si la instalación se realiza con una nueva base de datos, introduzca el prefijo que prefiera. Si ya utiliza una base de datos utilizada en otro sitio web, consulte **el etapa 1.4** de nuestra guía sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) para evitar que se introduzca un "prefijo" de tabla utilizado en la base de datos.

- *Drop existing tables*: **Desmarque esta casilla si ya utiliza su base de datos con otro sitio web**.

>[!alert]
>
Si marca la casilla **Drop existing tables**, se eliminarán todas las tablas que ya haya en la base de datos.
>

Haga clic en `Test your database connection now!`{.action} para comprobar los parámetros introducidos:

![PrestaShop instalación step 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

Si aparece el mensaje "Su base de datos está conectada", haga clic en `Next`{.action}. En caso contrario, compruebe la configuración que haya introducido hasta que la conexión funcione. Si lo necesita, puede consultar el **etapa 1.4** del tutorial en el apartado ["Instalación manual de un CMS"](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

#### 2.6 - Terminar la instalación de PrestaShop

El último paso consiste en un resumen de la instalación que acaba de realizar:

![PrestaShop instalación step 7](images/Prestashop-install-resume-7.png){.thumbnail}

Consulte las claves de conexión de su PrestaShop antes de abandonar la página.

>[!warning]
>
> **Por seguridad, le recomendamos que elimine la carpeta de instalación presente en su espacio FTP.**
>
> Para ello, consulte nuestra guía ["Cómo conectarse al espacio de almacenamiento FTP de su alojamiento web de OVHcloud"](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) y pulse [forum PrestaShop](https://www.prestashop.com/forums/){.external} para asegurarse de eliminar los archivos adecuados.
>

> [!success]
>
> Ya puede crear el contenido de su sitio web PrestaShop.
>
  
## Más información <a name="go-further"></a>

[Sitio web oficial PrestaShop](https://prestashop.com)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.