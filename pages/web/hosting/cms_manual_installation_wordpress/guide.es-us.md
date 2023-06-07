---
title: "Tutorial -  Instalar manualmente WordPress"
excerpt: "Descubra cómo instalar manualmente un CMS WordPress"
updated: 2023-04-06
---

**Última actualización: 06/04/2023** 

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Este tutorial le ayudará a instalar manualmente el CMS (Content Management System) WordPress en pocos etapas.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/) o [el editor del CMS WordPress](https://wordpress.com/es/support/){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

> [!success]
>
> Para instalar WordPress **automáticamente** desde su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), consulte nuestra documentación sobre la [instalación de un módulo en un clic](/pages/web/hosting/cms_install_1_click_modules).
>
> Para instalar **otro CMS** (Joomla, Drupal, PrestaShop), consulte nuestra documentación sobre la [instalación manual de un CMS](/pages/web/hosting/cms_manual_installation).
>

**Descubra cómo instalar manualmente su CMS WordPress**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/) que contenga al menos una base de datos.
- Disponer de un [dominio](https://www.ovhcloud.com/es/domains/)
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}

## Procedimiento

### Etapa 1 - preparar la instalación <a name="step1"></a>

Para instalar el CMS **WordPress** en su plan [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/), es necesario realizar algunos preparativos.

Siga el **conjunto de Etapas** descritos en nuestro tutorial sobre la [instalación manual de un CMS](/pages/web/hosting/cms_manual_installation) antes de continuar en el siguiente Etapa 2.

### Etapa 2 - Finalizar la instalación manual <a name="step2"></a>

> [!success]
>
> Antes de continuar la instalación, vacíe la caché de su navegador de Internet para evitar cualquier error.
>

#### 2.1 - Acceder a su sitio WordPress a través de su navegador

Escriba su dominio en la barra de búsqueda de su navegador de Internet.

Si los archivos fuente de WordPress se han colocado correctamente en la carpeta raíz, aparecerá la página WordPress en la que podrá seleccionar el idioma:

![hosting](images/WPselectlangue.png){.thumbnail}

Seleccione el idioma del sitio web y haga clic en `Continue`{.action}.

#### 2.2 - Asociar su WordPress y su base de datos

WordPress le pedirá que obtenga las claves de conexión a la base de datos:

![hosting](images/WPstart.png){.thumbnail}

Introduzca las claves de la base de datos (si las necesita, consulte el **etapa 1.4** del tutorial sobre la [instalación manual de un CMS](/pages/web/hosting/cms_manual_installation)) y haga clic en `Let's go !`{.action} para continuar.

Se abrirá la siguiente página:

![hosting](images/WPdb.png){.thumbnail}

Introduzca la información solicitada para la base de datos:

- *Database Name*: este nombre se ha establecido al crear la base de datos en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

- *Username*: es idéntico al nombre de la base de datos si utiliza una base de datos incluida con su alojamiento web.
Para las bases de datos creadas en una Web Cloud Databases, consulte la información indicada en **el etapa 1.4** del tutorial sobre la [instalación manual de un CMS](/pages/web/hosting/cms_manual_installation).

- *Password*: le hemos enviado un mensaje de correo electrónico al crear la base de datos. Es posible que lo hayan cambiado.

- *Database Host*: introduzca el nombre del servidor de la base de datos, en el mensaje de correo electrónico de instalación o en el área de cliente de OVHcloud. 

> [!primary]
> 
> - El nombre del servidor de una base de datos incluida con su plan de hosting suele tener la siguiente forma: `NameOfYourDatabase.mysql.db`. 
>
> El nombre del servidor de una base de datos Cloud Databases comienza por su identificador de cliente de OVHcloud y tiene el siguiente formato: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net` donde los **"X"** se sustituyen por la referencia de su servicio Cloud Databases.
>

- *Table Prefix*: si la instalación se realiza con una nueva base de datos, introduzca el prefijo que prefiera. Si utiliza una base de datos ya utilizada en otro sitio web, consulte el **etapa 1.4** del tutorial sobre la [instalación manual de un CMS](/pages/web/hosting/cms_manual_installation) para no indicar un "prefijo" de tabla que ya haya utilizado la base de datos.

Haga clic en `Submit`{.action} para validar la información de conexión a la base de datos.

Si todo ha ido bien, aparecerá la siguiente página:

![hosting](images/WPafterDB.png){.thumbnail}

Haga clic en `Run the installation`{.action}.

#### 2.3 - Establecer el acceso Administrador al "back-office" de su WordPress y su dirección de correo electrónico de contacto

Una vez realizada la instalación, WordPress le pedirá información sobre su futuro sitio web, incluyendo la creación de su usuario de administrador de WordPress.

que le permitirá acceder al panel de administración, denominado comúnmente "backup-office", de su CMS WordPress.

![hosting](images/WPafterDB2.png){.thumbnail}

Introduzca la información solicitada:

- *Site Title*: introduzca el título de su sitio web.
- *Username*: defina el identificador de administrador de su CMS.
- *Password*: establezca una contraseña para este identificador de administrador.
- *Your Email*: introduzca una dirección de correo electrónico válida.
- *Search Engine Visibility*: desmarque esta casilla para que los motores de búsqueda remitan su WordPress.

Haga clic en `Install WordPress`{.action} cuando se haya introducido correctamente.

#### 2.4 - Finalizar la instalación manual y probar el acceso "Administrador"

La instalación se cerrará si aparece la siguiente página:

![hosting](images/WPend.png){.thumbnail}

Haga clic en el botón `Log in`{.action} para probar el acceso al "Back-office" de su nuevo CMS WordPress utilizando las claves de administrador creadas anteriormente en el etapa 3.3. Justo antes.

> [!primary]
>
El equipo de OVHcloud no proporciona soporte a otras soluciones, como WordPress, por lo que no puede ayudarle a utilizar o configurar su CMS WordPress.
>
> Para este tipo de soporte, utilice los foros dedicados a la solución WordPress.
>

Una vez se haya conectado, se abrirá la siguiente página:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Ya puede empezar a crear el contenido de su sitio web WordPress.
>

## Más información <a name="go-further"></a>

[Sitio oficial de WordPress](https://wordpress.org)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.