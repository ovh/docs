---
title: "Tutorial - Operaciones alcanzables con un fichero ".htaccess"
slug: web-htaccess-las-otras-operaciones-realizables-con-los-archivos-htaccess
excerpt: "Descubra algunos ejemplos de operaciones realizables con un fichero ".htaccess"
section: Reescritura y autenticación
order: 04
updated: 2023-05-23
---

**Última actualización: 23/05/2023**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Este tutorial explica las principales funcionalidades del archivo ".htaccess" para su alojamiento web.

El archivo ".htaccess" es un archivo de configuración (HTTP) Apache ejecutado por el servidor web de su alojamiento web. Permite establecer reglas específicas para un directorio y todos sus subdirectorios. Es posible crear varios ficheros ".htaccess" en [el espacio FTP](/pages/web/hosting/ftp_connection/) de su alojamiento web. 

Si todavía no existe en su espacio FTP, puede añadirlo creando un archivo que usted llamará "**.htaccess**" en el directorio para el que desea aplicar una o más de las reglas descritas en este tutorial.

Para utilizar correctamente el archivo ".htaccess", debe conocer y respetar las siguientes reglas: 

- **un único** fichero ".htaccess" por directorio o subdirectorio para evitar conflictos entre diferentes ficheros ".htaccess";
- el archivo ".htaccess" es invisible para los internautas que visitan su sitio web;
- las reglas declaradas en un archivo ".htaccess" se aplican a todo el directorio en el que está instalado el archivo ".htaccess", así como a todos los subdirectorios del mismo directorio.

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/) o con el editor del servicio. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>
> Deberá configurar los siguientes ejemplos en un archivo ".htaccess". Atención: Las reglas que usted establezca en este fichero tienen consecuencias directas en su sitio web. Compruebe sistemáticamente las reglas que añade antes de aplicarlas a su sitio web. 
> 

**Descubra las principales operaciones que se pueden realizar con un archivo ".htaccess".**

## Requisitos

- Disponer de un [hosting OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/)

## Procedimiento

### Autorizar o restringir el acceso a un directorio o sitio web para una o más direcciones IP

Esta funcionalidad es muy útil y refuerza la seguridad de sus sitios web. Esto puede reducir el riesgo de pirateo de un sitio web.

Para más información, consulte nuestro tutorial: ["Cómo bloquear el acceso a mi sitio web para determinadas direcciones IP a través de un archivo .htaccess? "](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Establecer una contraseña de acceso encriptada para acceder a un directorio o sitio web

A través del archivo ".htaccess", puede establecer un acceso protegido (mediante una contraseña encriptada) a los datos presentes en su alojamiento.

Para más información, consulte nuestro tutorial ["Proteger la interfaz de administración de su sitio web mediante un archivo .htaccess"](/pages/web/hosting/htaccess_protect_directory_by_password/).

### Especificar un archivo de índice diferente

Por defecto, el archivo **index** de un directorio es *index.html*, *index.htm* o *index.php*. Si prefiere que este sea otro archivo, puede añadir una línea de este tipo en su ".htaccess":

```bash
DirectoryIndex File_Name
```

Por ejemplo, si quiere utilizar la página **Inicio.html** como página de índice, añada la siguiente línea:

```bash
DirectoryIndex Inicio.html
```

### Impedir el listado del contenido de un repertorio

Para evitar que los internautas visualicen todos los archivos contenidos en un directorio en ausencia de fichero **index** (.cgi, .html, .php, etc.), cree un fichero "**.htaccess**" que contenga la siguiente línea:

```bash
Options -Indexes
```

### Reescribir URL

Gracias al módulo **mod_rewrite** del servidor Web HTTP Apache preinstalado en su alojamiento web, esta funcionalidad permite redirigir:

- todas las peticiones HTTP a un solo archivo de su sitio web;
una parte de las peticiones HTTP a un solo archivo del sitio web.
- el dominio hacia el subdominio en "www";
- las peticiones a una carpeta en particular, sin mostrar la carpeta correspondiente;
- automáticamente un internauta hacia su sitio web en HTTPS cuando lo consulta con una URL en HTTP.

Más información en nuestro tutorial: ["Reescribir la URL de acceso a mi sitio web gracias al mod_rewrite a través del archivo .htaccess"](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Redirigir los mensajes de error

Para personalizar y/o redirigir los mensajes de error en una página web, cree un archivo "**.htaccess**" con la siguiente línea de código:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Sustituya únicamente "**Error_Code_Number**" por el número de código de error HTTP Apache correspondiente. 

Para más información sobre esta funcionalidad, consulte la [documentación oficial de Apache](https://httpd.apache.org/docs/trunk/es/custom-error.html){.external}.

Los códigos de error HTTP más habituales son:

- 401: Autorización requerida: este error se genera cuando un internauta introduce una contraseña o usuario incorrecta al acceder a un archivo o directorio protegido.
- 403: Access denied: este error aparece al acceder a un directorio en el que el archivo *index.html* (o *index.cgi*, etc.) está ausente y si la configuración del servidor impide que se muestren los archivos del directorio.
- 404: Not Found : el archivo que el visitante intenta ver no existe.
- 500 : Internal Server Error: este error aparece cuando un script no se ha ejecutado correctamente o si el script o los permisos del script son incorrectos.

Sustituya **"Message_Or_Destination"** por la acción a realizar. Para mostrar un mensaje directamente, escriba el mensaje correspondiente entre comillas. Para redirigir a una página determinada, introduzca la ruta de acceso a dicha página. 

A continuación se muestran dos ejemplos concretos:

- Desea indicar *"Disculpe, no tiene permisos para acceder a este archivo"* si el visitante encuentra un error **403**. Añada la siguiente línea al archivo ".htaccess":

```bash
ErrorDocument 403 "Disculpe, no tiene permisos para acceder a este archivo"
```

- Desea reenviar los errores **404** a su página personalizada *404.html* (para su dominio : domain.tld). Añada la siguiente línea al archivo ".htaccess":

"bash
ErrorDocument 404 http://domain.tld/404.html
"

También puede redirigir un error hacia un script **C**ommon **G**ateway **I**nterface (**CGI**). Puede codificar un script en **CGI** para, por ejemplo, realizar las siguientes acciones:
 
- mostrar un mensaje;
- redirigir al visitante hacia otro fichero según la URL solicitada inicialmente (disponible en la variable de entorno **REQUEST_URI**);
- enviar un email.

Por ejemplo, para redirigir un error a un script **CGI**, añada la siguiente línea al archivo ".htaccess":

```bash
ErrorDocument 404 /cgi-bin/error.cgi?type=404
```

La línea anterior redirigirá al internauta que experimente un error **404** hacia su script *error.cgi*. Este ejecutará las directivas que contiene, específicamente en relación con el error **404**.

## Más información <a name="go-further"></a>

[Conectarse al espacio FTP de un alojamiento web](/pages/web/hosting/ftp_connection/)

[Bloquear el acceso a mi sitio web para algunas direcciones IP a través de un archivo .htaccess ?](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Proteger la interfaz de administración de su sitio web con un fichero .htaccess](/pages/web/hosting/htaccess_protect_directory_by_password/)

[Reescribir la URL de acceso a mi sitio web gracias al mod_rewrite a través del archivo .htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.