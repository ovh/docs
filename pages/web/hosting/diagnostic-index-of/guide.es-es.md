---
title: ¿Qué hacer en caso de página del « Index of » ?
excerpt: Descubra cómo poner su sitio web de nuevo en línea cuando muestre una página « Index of »
updated: 2022-05-10
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 10/05/2022**

## Objetivo

Si una configuración `Multisitio` no está bien configurada, es posible que el sitio web muestre una página **"Index of"**.

![index_of](images/index_of.png){.thumbnail}

**Esta guía explica cómo corregir la visualización de una página "Index of".**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es-es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

### Entender el origen de la página "Index of"

El dominio está conectado a través de la sección `Multisitio`{.action} del alojamiento a un directorio (una `Carpeta raíz`) del servidor [FTP](/pages/web/hosting/ftp_connection).

La página **Index of** indica que el directorio en cuestión no contiene ningún archivo **index.php** o **index.html**. Un archivo de este tipo constituye el "*punto de entrada*" del sitio web.

Para mostrar su sitio web, deberá asociar su dominio a la `Carpeta raíz`{.action} que contiene el archivo **index.php** o **index.html** desde la sección `Multisitio`{.action} del alojamiento.

> [!primary]
>
> Si desea asociar temporalmente su dominio a una `Carpeta raíz` que no contenga un archivo **index.php** o **index.html**, puede prohibir la visualización de la lista de carpetas de su sitio web siguiendo esta [guía](/pages/web/hosting/htaccess_what_else_can_you_do#prevent-the-content-of-a-directory-from-being-listed). También puede proteger el acceso a sus carpetas con una [contraseña](/pages/web/hosting/htaccess_protect_directory_by_password).
>
> Si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/). Nuestro equipo de soporte no podrá ofrecerle soporte para modificar la programación interna de su sitio web.

### Solucionar el caso más común de una página "Index of"

Ha importado los archivos de su sitio **mydomain.ovh** a la carpeta `www` de su alojamiento por [FTP](/pages/web/hosting/ftp_connection). Su dominio no está asociado a esta carpeta en la columna `Carpeta raíz` de su `Multisitio`{.action}.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modifique la `Carpeta raíz` haciendo clic en el botón `...`{.action} a la derecha de la tabla y luego en `Modificar el dominio`{.action} :

![modify_domain](images/modify_domain.png){.thumbnail}

En la nueva ventana:

* Marque la casilla `Editar también el subdominio www.mydomain.ovh`{.action} (1);
* Indique el directorio que contiene el archivo **index.php** o **index.html** del sitio web como `Carpeta raíz` (2);
* Haga clic en `Siguiente` (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> Usar el directorio `www` como `Carpeta raíz` no es obligatorio. Puede instalar su sitio web en otra carpeta de su [servidor FTP](/pages/web/hosting/ftp_connection).
>

En la siguiente ventana, haga clic en `Aceptar`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

En unos minutos (no olvide refrescar su navegador), obtendrá el siguiente resultado:

![multisite_modified](images/multisite_modified.png){.thumbnail}

Compruebe que el sitio web se muestre correctamente. En caso contrario, reinicie el dispositivo y vacie la caché del navegador si fuera necesario.

## Más información <a name="gofurther"></a>

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web/hosting/diagnostic_errors_module1clic)

[Resolver el error "Sitio no instalado"](/pages/web/hosting/multisites_website_not_installed)

[Alojar varios sitios web en un mismo hosting](/pages/web/hosting/multisites_configure_multisite)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, consulte nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.