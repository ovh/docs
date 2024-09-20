---
title: ¿Qué hacer en caso de página del "Index of" ?
excerpt: Descubra cómo poner su sitio web de nuevo en línea cuando muestre una página "Index of"
updated: 2023-05-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

En al menos uno de los siguientes casos aparece una página **"Index of"**:

- La configuración [Multisitio](/pages/web_cloud/web_hosting/multisites_configure_multisite) de su nombre de dominio no está correctamente configurada hacia su directorio de destino
- La carpeta de destino a la que apunta su dominio no contiene archivos **"index.html"** o **"index.php"**

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Esta guía explica cómo corregir la visualización de una página "Index of".**

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [Más información](#go-further) de esta guía.
>

## Requisitos

- Disponer de un [dominio](/links/web/domains)
- Tener un [plan de hosting](/links/web/hosting).
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Comprender el origen de la página "Index of"

Su nombre de dominio se declara para acceder a un directorio de destino (un "`Carpeta raíz`") en el servidor [FTP](/pages/web_cloud/web_hosting/ftp_connection) de su alojamiento web compartido. Para ello, abra la pestaña [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) de su alojamiento web alojado en el [área de cliente de OVHcloud](/links/manager).

La página **Index of** indica que el directorio de destino no contiene un archivo **index.php** o **index.html**. Dicho archivo constituye el "*punto de entrada*" del sitio web. El nombre de este archivo está normalizado.

Para mostrar su sitio web, deberá asociar su dominio a la `Carpeta raíz`, que contiene el archivo **index.php** o **index.html**, desde el apartado `Multisitio`{.action} del alojamiento.

> [!primary]
>
> Para asociar temporalmente su dominio a un `Carpeta raíz` que no contiene un archivo **index.php** o **index.html**, puede prohibir que se muestre la lista de carpetas de su sitio web siguiendo este [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#prevent-the-content-of-a-directory-from-being-listed). También puede proteger el acceso a sus carpetas con una [contraseña](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nuestro equipo de soporte no podrá ofrecerle soporte para modificar la programación interna de su sitio web.

### Solucionar el caso más común de una página "Index of"

Ha importado los archivos de su sitio **mydomain.ovh** a la carpeta `www` de su alojamiento por [FTP](/pages/web_cloud/web_hosting/ftp_connection). Su dominio no está asociado a esta carpeta en la columna `Carpeta raíz` de su `Multisitio`{.action}.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

Modifique la `Carpeta raíz` haciendo clic en el botón `...`{.action} a la derecha de la tabla y luego en `Modificar el dominio`{.action} :

![modify_domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

En la nueva ventana:

* Marque la casilla `Editar también el subdominio www.mydomain.ovh`{.action} (1);
* Indique el directorio que contiene el archivo **index.php** o **index.html** del sitio web como `Carpeta raíz` (2);
* Haga clic en `Siguiente` (3).

![change_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/change-root-folder-step-1.png){.thumbnail}

> [!primary]
>
> Usar el directorio `www` como `Carpeta raíz` no es obligatorio. Puede instalar su sitio web en otra carpeta de su [servidor FTP](/pages/web_cloud/web_hosting/ftp_connection).
>

En la siguiente ventana, haga clic en `Aceptar`{.action}.

![modify_root_folder_confirm](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/change-root-folder-step-2.png){.thumbnail}

En unos minutos (refrescando el navegador), obtendrá el siguiente resultado:

![multisite_modified](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-full-www.png){.thumbnail}

Compruebe que el sitio web se muestre correctamente. En caso contrario, reinicie el dispositivo y vacie la caché del navegador si fuera necesario.

Asegúrese también de que el directorio de destino contiene un archivo **index.php** o **index.html**.

## Más información <a name="go-further"></a>

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolver el error "Sitio no instalado"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).