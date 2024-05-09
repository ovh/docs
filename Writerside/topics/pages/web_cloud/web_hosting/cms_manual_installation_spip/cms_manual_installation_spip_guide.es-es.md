---
title: "Tutorial - Instalar SPIP manualmente"
excerpt: "Descubra cómo instalar manualmente el CMS SPIP"
updated: 2024-03-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El **CMS** (**C**ontent **M**anagement **S**ystem) SPIP es una solución adecuada para sitios editoriales como revistas online, periódicos o sitios web institucionales. Gracias a su arquitectura modular y a su sistema de esqueletos personalizables, SPIP permite diseñar sitios web llenos de funcionalidades, ofreciendo al mismo tiempo una gran libertad de personalización.

**Descubra cómo instalar manualmente el CMS Spip en un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [alojamiento web de OVHcloud](hosting.) que incluya al menos una base de datos.
- Tener un [dominio](domains.).
- Estar conectado a su [área de cliente de OVHcloud](manager.).

## Procedimiento

### Preparar la instalación

Para instalar el CMS **Spip** en su [alojamiento web](hosting.), es necesario realizar algunos preparativos.

Siga el **conjunto de pasos** descritos en nuestro tutorial sobre la [instalación manual de un CMS](cms_manual_installation1.) antes de continuar con el siguiente paso.

### Finalizar la instalación manual

> [!primary]
>
> Antes de continuar con la instalación, vacíe la caché de su navegador para evitar posibles fallos de funcionamiento.
>

#### Ir a su sitio web Spip a través de su navegador

Introduzca `your_domain/ecrire` en la barra de búsqueda de su navegador de Internet para iniciar la instalación de su sitio web Spip. Se abrirá la siguiente página:

![Spip installation](installation_first_step.png){.thumbnail}

Seleccione el idioma de su sitio web Spip y haga clic en `Next`{.action} para confirmar. Aparecerá la siguiente pantalla:

![Spip installation](installation_second_step.png){.thumbnail}

Introduzca los datos para conectarse a su SGBD (por ejemplo, MySQL). Una vez que se haya conectado correctamente a la base de datos, aparecerá la siguiente pantalla:

![Spip installation](installation_third_step.png){.thumbnail}

Seleccione la base de datos que desea utilizar para su sitio web o [cree una nueva](sql_create_database1.). Elija un prefijo para las tablas de la base de datos. Por defecto, se utiliza el prefijo `spip`. Haga clic en `Next`{.action} para validar la información. Aparecerá la siguiente pantalla:

![Spip installation](installation_fourth_step.png){.thumbnail}

Introduzca la información solicitada y haga clic en `Next`{.action} para confirmar. Aparecerá la siguiente pantalla:

![Spip installation](installation_fifth_step.png){.thumbnail}

La pantalla muestra la lista de plugins disponibles para su sitio web y le informa de que la instalación de Spip se ha realizado correctamente.

### Conclusión

Acaba de instalar manualmente el CMS Spip en su alojamiento web de OVHcloud. Su sitio web Spip está accesible en línea a través de su nombre de dominio. Para conectarse al espacio de administrador de su sitio web Spip, introduzca `your_domain/ecrire` en la barra de búsqueda de su navegador de Internet.

## Más información <a name="go-further"></a>

[Tutorial - Instalar WordPress manualmente](cms_manual_installation_wordpress1.)

[Tutorial - Instalar Joomla! manualmente](cms_manual_installation_joomla1.)

[Tutorial - Instalar Drupal manualmente](cms_manual_installation_drupal1.)

[Tutorial - Instalar PrestaShop manualmente](cms_manual_installation_prestashop1.)

[Tutorial - Instalar Pico manualmente](cms_manual_installation_pico1.)

[Tutorial - Instalar Typo3 manualmente](cms_manual_installation_typo31.)

[Tutorial - Instalar Grav manualmente](cms_manual_installation_grav1.)

[Tutorial - Instalar manualmente un CMS en mi alojamiento](cms_manual_installation1.)

[Crear una base de datos en un alojamiento web](sql_create_database1.)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](partner.).
 
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.