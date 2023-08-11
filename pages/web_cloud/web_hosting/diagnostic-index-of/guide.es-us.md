---
title: ¿Qué hacer en caso de página del « Index of » ?
excerpt: Descubra cómo poner su sitio web de nuevo en línea cuando muestre una página « Index of »
updated: 2023-05-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 04/05/2023**

## Objetivo

En al menos uno de los siguientes casos aparece una página **"Index of"**:

- La configuración [Multisitio](/pages/web_cloud/web_hosting/multisites_configure_multisite) de su nombre de dominio no está correctamente configurada hacia su directorio de destino
- La carpeta de destino a la que apunta su dominio no contiene archivos **"index.html"** o **"index.php"**

![index_of](images/index_of.png){.thumbnail}

**Esta guía explica cómo corregir la visualización de una página "Index of".**

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Disponer de un [dominio](https://www.ovhcloud.com/es/domains/)
- Tener un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

## Procedimiento

### Entender el origen de la página "Index of"

O seu nome de domínio é declarado para aceder a um diretório alvo (um `Carpeta raíz`) no servidor [FTP](/pages/web_cloud/web_hosting/ftp_connection) do seu alojamento web partilhado. Isto no separador [Multisite](/pages/web_cloud/web_hosting/multisites_configure_multisite) do seu alojamento web presente no seu [Área de Cliente OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

A página **Index of** indica que o diretório-alvo em causa não contém ficheiros **index.php** ou **index.html**. Um ficheiro deste tipo constitui o "*ponto de entrada*" do seu website. O nome deste ficheiro está normalizado.

Para apresentar o seu website, deverá ligar o seu domínio ao `Carpeta raíz` que contém o ficheiro **index.php** ou **index.html**.

> [!primary]
>
> Para asociar temporalmente su dominio a un `Carpeta raíz` que no contiene un archivo **index.php** o **index.html**, puede prohibir que se muestre la lista de carpetas de su sitio web siguiendo este [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#prevent-the-content-of-a-directory-from-being-listed). También puede proteger el acceso a sus carpetas con una [contraseña](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/). Nuestro equipo de soporte no podrá ofrecerle soporte para modificar la programación interna de su sitio web.

### Solucionar el caso más común de una página "Index of"

Ha importado los archivos de su sitio **mydomain.ovh** a la carpeta `www` de su alojamiento por [FTP](/pages/web_cloud/web_hosting/ftp_connection). Su dominio no está asociado a esta carpeta en la columna `Carpeta raíz` de su `Multisitio`{.action}.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Modifique la `Carpeta raíz` haciendo clic en el botón `...`{.action} a la derecha de la tabla y luego en `Modificar el dominio`{.action} :

![modify_domain](images/modify_domain.png){.thumbnail}

En la nueva ventana:

* Marque la casilla `Editar también el subdominio www.mydomain.ovh`{.action} (1).
* Indique el directorio que contiene el archivo **index.php** o **index.html** del sitio web como `Carpeta raíz` (2).
* Haga clic en `Siguiente` (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> Usar el directorio `www` como `Carpeta raíz` no es obligatorio. Puede instalar su sitio web en otra carpeta de su [servidor FTP](/pages/web_cloud/web_hosting/ftp_connection).
>

En la siguiente ventana, haga clic en `Aceptar`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

En unos minutos (refrescando el navegador), obtendrá el siguiente resultado:

![multisite_modified](images/multisite_modified.png){.thumbnail}

Compruebe que el sitio web se muestre correctamente. En caso contrario, reinicie el dispositivo y vacie la caché del navegador si fuera necesario.

Asegúrese también de que el directorio de destino contiene un archivo **index.php** o **index.html**.

## Más información <a name="gofurther"></a>

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Resolver el error "Sitio no instalado"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.