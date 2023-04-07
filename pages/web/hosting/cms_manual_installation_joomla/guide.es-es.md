---
title: "Tutorial - Instalar Joomla! manualmente"
slug: instalar-manualmente-joomla
excerpt: "Descubra cómo  instalar manualmente un CMS Joomla!"
section: CMS
order: 05
updated: 2023-04-07
---

**Última actualización: 07/04/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>
  
## Objetivo

Aquí encontrará todos los elementos necesarios para instalar manualmente el CMS ( content management system) Joomla. en pocos pasos.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/) o [el editor del CMS Joomla!](https://www.joomla.org/){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
>

> [!success]
>
> Para instalar Joomla! **automáticamente** desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), consulte nuestra documentación sobre la [instalación de un módulo en un clic](https://docs.ovh.com/es/hosting/modulos-en-un-clic/).
>
> Para **instalar otro CMS** (WordPress, Drupal, PrestaShop), consulte nuestra documentación sobre la instalación manual de un CMS (https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).
>

**Descubra cómo instalar manualmente su CMS Joomla!**
  
## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/es-es/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}
  
## Procedimiento

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar el CMS **Joomla!** en su [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/), es necesario realizar algunos preparativos.

Siga el **conjunto de etapas** descritos en nuestro tutorial sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) antes de continuar en el siguiente etapa 2.

### Etapa 2 - Finalizar la instalación manual <a name="step2"></a>

> [!success]
>
> Antes de continuar la instalación, vacíe la caché de su navegador de Internet para evitar cualquier error.
>

#### 2.1 - Acceder a su sitio Joomla! a través de su navegador

Escriba su dominio en la barra de búsqueda de su navegador de Internet.

Si los archivos fuente de Joomla! se han colocado correctamente en la carpeta raíz, la página de selección del idioma para Joomla. aparece:

![Joomla instalando step 1](images/Joomla-install-select-language-1.png){.thumbnail}

Seleccione el idioma, introduzca el nombre de su sitio web y haga clic en `Setup Login Data`{.action}.

#### 2.2 - Configurar los datos de conexión a su Joomla!

Defina los accesos a su espacio de administración (*Back Office*) Joomla! :

![Joomla instalando step 2](images/Joomla-install-define-admin-2.png){.thumbnail}

> [!primary]
>
> El término "Super User" designa a la persona que administra el CMS.

-*Enter the real name of your Super User* : escriba su nombre real.
-*Set the username for your Super User account* : elija un nombre de usuario para conectarse al área de administración Joomla!.
-*Set password for your Super User account* : elija una contraseña con un mínimo de **12 caracteres**.
-*Enter the email address of the website Super User* : introduzca una dirección de correo electrónico válida. Esta será utilizada para recibir las notificaciones enviadas por Joomla.

Compruebe los datos introducidos y haga clic en `Setup Database Connection`{.action}.

#### 2.3 - Asociar su base de datos con su Joomla!

Introduzca la información solicitada para la base de datos:

![Joomla instalando step 3](images/Joomla-install-db-connect-3.png){.thumbnail}

Para completar los siguientes campos, consulte la información indicada en el **etapa 1.4** del tutorial sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/):

- *Select the database type*: seleccione el tipo de la base de datos entre los tipos disponibles para Joomla. Si utiliza una base de datos en alojamiento compartido de OVHcloud, puede dejar por defecto el valor **MySQLi**.

- *Enter the host name, usually "localhost" or a name provided by your host*: introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud.

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Web Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa0000"** corresponde a su identificador OVHcloud sin el **"-ovh"** y los **"X"** se sustituyen por el resto de la referencia de su servicio Web Cloud Databases.
>

-*Either a username you created or a username provided by your host* : es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web.
Para las bases de datos creadas en una Web Cloud Databases, consulte la información indicada en **el etapa 1.4** de la guía sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/).

-*Either a password you created or a password provided by your host* : se ha establecido usted mismo al crear la base de datos. También es posible que la haya modificado. Por favor, compruebe que la haya modificado.

-*Enter the database name*: este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es). Es idéntico al nombre de usuario de la base de datos si utiliza una base de datos incluida con su alojamiento web.

-*Enter a table prefix or use the randomly generated one*: si la instalación se realiza con una nueva base de datos, introduzca el prefijo que prefiera. Si utiliza una base de datos ya utilizada en otro sitio web, puede consultar el **etapa 1.4** de la guía sobre la [instalación manual de un CMS](https://docs.ovh.com/es/hosting/web_hosting_instalar_un_cms_manualmente/) para evitar que se introduzca un "prefijo" de tabla que ya utiliza su base de datos.

- **Connection Encryption**: deje el valor **Default**.

Haga clic en `Install Joomla`{.action}.

Aparecerá el siguiente mensaje:

![Joomla instalando step 3-1](images/Joomla-install-db-connect-3-1.png){.thumbnail}

Si utiliza una base de datos externa al alojamiento local, deberá eliminar el *token* generado aleatoriamente al instalar el Joomla.

El archivo que desea eliminar se encuentra en su [espacio de almacenamiento FTP](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/).

Una vez conectado, acceda a la carpeta **instalación** de su Joomla. y elimine únicamente el *token* indicado por el mensaje de alerta. Está presente como archivo **.txt**.

Vuelva al navegador de internet y vuelva a hacer clic en `Install Joomla`{.action}.

#### 2.4 - Terminar la instalación

Una vez finalizada la instalación, se abrirá la siguiente página:

![Joomla instalando step 4](images/Joomla-install-ending-4.png){.thumbnail}

La instalación ha finalizado, pero puede añadir más idiomas al CMS si es necesario.

>[!success]
>
> Felicidades, su Joomla! está listo para ser usado y administrado.
>
  
## Más información <a name="go-further"></a>

[Sitio Oficial Joomla!](https://joomla.org){.external}

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.