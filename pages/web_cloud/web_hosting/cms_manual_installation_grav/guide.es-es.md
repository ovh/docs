---
title: "Tutorial - Instalar manualmente Grav"
excerpt: "Descruba cómo instalar el CMS Grav en un alojamiento web de OVHcloud"
updated: 2024-03-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

El **CMS** (**C**ontent **M**anagement **S**ystem) Grav permite desarrollar rápidamente sitios web. Diseñado para una gestión optimizada del contenido a través de archivos Markdown, Grav se adapta perfectamente a la creación de sitios web personales o proyectos para pequeñas empresas, sin comprometer la calidad o la personalización.

**Descubra cómo instalar manualmente el CMS Grav en un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Tener un [dominio](/links/web/domains).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Preparar la instalación

Para instalar el CMS **Grav** en su [alojamiento web](/links/web/hosting), es necesario realizar algunos preparativos.

Siga el **conjunto de pasos** descritos en nuestro tutorial sobre la [instalación manual de un CMS](/pages/web_cloud/web_hosting/cms_manual_installation) antes de continuar con el siguiente paso.

### Finalizar la instalación manual

> [!primary]
>
> Antes de continuar con la instalación, vacíe la caché de su navegador para evitar posibles fallos de funcionamiento.
>

#### Visite su sitio web de Grav a través de su navegador

Introduzca su nombre de dominio en la barra de búsqueda de su navegador de Internet.

Si los archivos de origen de Grav se han colocado correctamente en la carpeta raíz, aparecerá la página `your-domain/admin`.

![Grav installation](/pages/assets/screens/other/cms/grav/first_page_config.png){.thumbnail}

Rellene el formulario para crear un usuario admin y, a continuación, haga clic en `Create User`{.action} para confirmar.

Una vez conectado al panel de administración de Grav, comience a personalizar su sitio web.

### Personalizar su sitio web de Grav

Una vez que se haya conectado como administrador al panel de control de Grav, acceda a múltiples opciones para configurar y personalizar su sitio web.

#### Configuración general del sitio web

##### Configuración del sistema

En el menú principal de Grav, haga clic en `Configuration`{.action} y, a continuación, en la pestaña `Site`{.action}, cambie el nombre de su sitio web, establezca el idioma por defecto o configure varios parámetros relacionados con su sitio web.

Para mejorar el rendimiento de su sitio web, active la caché. Haga clic en la pestaña `System`{.action} y seleccione `Caching`{.action}. Identifique la línea `Caching`{.action} y marque `Yes`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/activate_cache.png){.thumbnail}

##### Configuración de medios

En el menú principal de Grav, seleccione `Configuration`{.action} y, a continuación, en la pestaña `System`{.action}, haga clic en `Media`{.action}. En esta página, defina el comportamiento de los elementos multimedia del sitio web, como imágenes, vídeos o documentos.

#### Gestión del contenido

##### Páginas

En el menú principal de Grav, haga clic en `Pages`{.action} para ver la lista de todas las páginas de su sitio web. Cree nuevas páginas, edite las existentes y organice la estructura de su sitio web.

Para ver y editar el contenido de una página, haga clic en el nombre de la página en la lista. Por ejemplo, haga clic en `Home`{.action} para cambiar el título de la página principal de su sitio web y su contenido.

![Grav installation](/pages/assets/screens/other/cms/grav/list_pages.png){.thumbnail}

##### Temas

En el menú principal de Grav, haga clic en `Themes`{.action} para cambiar la apariencia de su sitio web. Instale nuevos temas o seleccione uno ya instalado como tema actual.

Para cambiar el tema actual, haga clic en el tema con la etiqueta `Active Theme`.

![Grav installation](/pages/assets/screens/other/cms/grav/theme_active.png){.thumbnail}

A continuación, personalice el tema actual.

#### Backup y actualización

##### Backup

Guardar una copia de seguridad de su sitio web le permite restaurarlo a un estado anterior en caso de fallo de funcionamiento.

En el menú principal de Grav, haga clic en `Tools`{.action}, seleccione `Backup Now`{.action} en la parte superior derecha de la pantalla que se muestra y luego `Download Backup`{.action} para descargar la copia de seguridad de su sitio web en su ordenador. Al actualizar la página `Backup`, su copia de seguridad aparecerá en la lista de `Backup History`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/backup_history.png){.thumbnail}

##### Actualización

Mantener su sistema actualizado es fundamental para la seguridad y el rendimiento de su sitio web. En el menú principal de Grav, haga clic en `Check for Updates`{.action} para ver las actualizaciones disponibles.

### Conclusión

Acaba de instalar manualmente el CMS Grav en su alojamiento web de OVHcloud. Una vez que haya configurado su sitio web, haya añadido contenido, haya personalizado el tema y haya instalado plugins, podrá acceder a su sitio web de Grav en línea a través de su dominio.

## Más información <a name="go-further"></a>

[Tutorial - Instalar manualmente WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Instalar manualmente Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Instalar manualmente Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Instalar manualmente PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Instalar manualmente Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Instalar manualmente Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Instalar manualmente SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Instalar manualmente un CMS en mi alojamiento](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).