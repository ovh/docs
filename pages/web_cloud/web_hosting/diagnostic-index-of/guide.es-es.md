---
title: ¿Qué hacer en caso de página del "Index of"?
excerpt: Descubra cómo poner su sitio web de nuevo en línea cuando muestre una página "Index of"
updated: 2026-05-04
---

## Objetivo

En al menos uno de los siguientes casos aparece una página **"Index of"**:

- La [configuración de su nombre de dominio con su sitio web](/pages/web_cloud/web_hosting/multisites_configure_multisite) no está correctamente configurada hacia su directorio objetivo.
- La carpeta de destino a la que apunta su dominio no contiene archivos **"index.html"** o **"index.php"**

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Esta guía explica cómo corregir la visualización de una página "Index of".**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [Más información](#go-further) de esta guía.
>

## Requisitos

- Disponer de un [dominio](/links/web/domains)
- Tener un [plan de hosting](/links/web/hosting).

## Procedimiento

### Comprender el origen de la página "Index of"

Su nombre de dominio está declarado para acceder a un directorio objetivo (un "`Carpeta raíz`") en el servidor [FTP](/pages/web_cloud/web_hosting/ftp_connection) de su alojamiento web compartido. Para más información sobre la asociación de un dominio con un alojamiento, consulte nuestra guía "[Compartir su alojamiento entre varios sitios web](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

La página **Index of** indica que el directorio de destino no contiene un archivo **index.php** o **index.html**. Dicho archivo constituye el "*punto de entrada*" del sitio web. El nombre de este archivo está normalizado.

Para mostrar su sitio web, deberá asegurarse de que la `Carpeta raíz` para la que está declarado su dominio contiene un archivo **index.php** o **index.html**.

> [!primary]
>
> Para asociar temporalmente su dominio a un `Carpeta raíz` que no contiene un archivo **index.php** o **index.html**, puede prohibir que se muestre la lista de carpetas de su sitio web siguiendo este [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#prevent-the-content-of-a-directory-from-being-listed). También puede proteger el acceso a sus carpetas con una [contraseña](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Le recomendamos que acuda a un [proveedor especializado](/links/partner) si tiene dificultades para configurar esta opción. De hecho, nuestros equipos de soporte no podrán ayudarle en cuanto a cualquier modificación del código interno de su sitio web.

### Solucionar el caso más común de una página "Index of"

Ha importado los archivos de su sitio **domain.tld** en la carpeta `www` de su alojamiento mediante [FTP](/pages/web_cloud/web_hosting/ftp_connection). Sin embargo, el sitio web al que está asociado su nombre de dominio no está conectado a este directorio en la columna `Carpeta raíz`.

Deberá modificar la `Carpeta raíz` declarada inicialmente para su sitio web desde su [área de cliente de OVHcloud](/links/control-panel/web-hosting). Para ello, consulte nuestra guía "[Cómo modificar la carpeta raíz de un sitio web existente](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

Si su sitio web dispone de una configuración con Git, consulte previamente nuestra guía "[Configurar y utilizar Git con un alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)" para eliminar la asociación con Git **antes** de continuar. De hecho, la modificación de la carpeta raíz declarada para un sitio web no está disponible si su sitio web está configurado con Git.

Compruebe que el sitio web se muestre correctamente. En caso contrario, reinicie el dispositivo y vacíe la caché del navegador si fuera necesario.

Asegúrese también de que el directorio de destino contiene un archivo **index.php** o **index.html**.

## Más información <a name="go-further"></a>

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolver el error "Sitio no instalado"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si desea ayuda para configurar sus soluciones de OVHcloud, consulte nuestras [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
