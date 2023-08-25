---
title: "Tutorial - Utilizar el archivo htaccess con WordPress"
excerpt: "Descubra cómo proteger su blog WordPress con uno o más archivos htaccess"
updated: 2023-06-22
---


> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Este tutorial explica cómo configurar algunas funcionalidades de su alojamiento web con uno o varios archivos **.htaccess**, especialmente para modificar los parámetros de una parte o del conjunto de su sitio web (redirecciones, prohibiciones de acceso, autorizaciones restringidas, control de caché, etc.).

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición este tutorial para ayudarle lo mejor posible en tareas habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) o [el editor del CMS WordPress](https://wordpress.com/es/support/){.external}. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
>

**Descubra cómo proteger su WordPress con uno o más archivos htaccess.**

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/) y haber instalado WordPress.
- Estar en condiciones de utilizar un cliente FTP como [FileZilla](https://filezilla-project.org/). Puede consultar nuestra guía "[Utilizar FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide)".

Los archivos **.htaccess** se pueden crear y modificar con editores de texto como:

- [Bloc de notas](https://support.microsoft.com/es-es/windows/ayuda-en-el-bloc-de-notas-4d68c388-2ff2-0e7f-b706-35fb2ab88a8c){.external} de Windows;
- [TextEdit](https://support.apple.com/es-us/guide/textedit/welcome/mac){.external} en macOS 
- [Notepad++](https://notepad-plus-plus.org/){.external}.

> [!primary]
>
> Las soluciones de seguridad propuestas a continuación no son exhaustivas.
>
> Por ejemplo, si utiliza otro **C**onent **M**anagement **S**ystem (**CMS**) que WordPress, existen otras soluciones de seguridad.
>
Si no utiliza un CMS, OVHcloud pone a su disposición un tutorial sobre la [protección de un directorio o de la interfaz de administración de su sitio web a través de ficheros .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Para cualquier duda relativa a la creación, el uso o la programación de su sitio web, contacte con nuestra [comunidad de usuarios](https://community.ovh.com/en/) o nuestros [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/). El equipo de soporte de OVHcloud no podrá ayudarle en estos asuntos.
>

## FAQ

### ¿Qué es un archivo **.htaccess**?

Un archivo **.htaccess** permite configurar un servidor web. En el caso de un alojamiento web compartido, se trata del servidor web de código abierto "**Apache**". La sintaxis de este archivo es definida por la organización que edita y mantiene **Apache**. A diferencia de la mayoría de los archivos de configuración de un servidor, los archivos **.htaccess** se encuentran en los directorios de los sitios web, concretamente en el espacio de almacenamiento FTP de su alojamiento web. Un archivo **.htaccess** tendrá efectos en el directorio en el que está presente, así como en todos los subdirectorios presentes en el interior.

Nuestros planes de hosting no permiten los archivos de configuración del servidor. Sin embargo, los archivos **.htaccess** permiten modificar determinadas características y comportamientos. Además, no es necesario reiniciar el servidor **Apache** para que se apliquen las indicaciones y modificaciones escritas en el archivo **.htaccess**. Todos nuestros [planes de hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/) permiten configurar archivos **.htaccess**.

El punto situado delante del nombre del archivo **.htaccess** (que a su vez no tiene extensión) designa un archivo oculto. Además, estos archivos no son accesibles para usuarios externos que visiten su sitio web.

### ¿Qué es un servidor web?

Un servidor web es un programa que permite el intercambio de información en una red utilizando el protocolo *HTTP*.<br>
Existen varios módulos, como *Apache*, *Nginx*, *Tomcat* o el módulo http incluido en *NodeJS*.

### ¿Qué precauciones deben tomarse?

Una mala configuración de su fichero **.htaccess** puede generar errores en su servidor (como un error 500 : *Internal Server Error*) o incluso hacer que su servicio deje de estar disponible, incluso para usted. OVH se encarga de realizar copias de seguridad sistemáticas de las versiones de sus archivos funcionales para poder volver a un estado anterior en caso de fallo tras un cambio.

De la misma manera, si no está acostumbrado a manipular este tipo de archivo, pruebe cada elemento que edite. Así evitará perder tiempo en la recuperación de la línea o líneas causantes del fallo de funcionamiento de su servidor web. Un error de configuración o un simple error de escritura pueden comprometer la configuración y el funcionamiento del servidor web.

### ¿Qué herramientas utilizar?

un cliente FTP para recuperar sus archivos (FileZilla, Cyberduck).
- un editor de texto.

### ¿Dónde están situados los archivos .htaccess en WordPress?

Como se indica en la introducción, es posible tener varios archivos **.htaccess** en un mismo alojamiento web. Cada uno de estos archivos define las reglas para el directorio en el que se encuentra, así como los subdirectorios que contiene.

La mayor parte de los cambios se harán a nivel de la **raíz del sitio web**. Instalado por defecto, el archivo **.htaccess** situado en la raíz del sitio contiene las siguientes líneas:

```bash
# BEGIN WordPress
# Se generan las directivas (líneas) entre "BEGIN WordPress" y "END WordPress".
# dinámicamente, y solo deben modificarse mediante los filtros WordPress.
# Cualquier modificación de las directivas situadas entre estos marcadores se recargará.

<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>

# END WordPress
```

**Explicaciones del código anterior**:

- **#**: carácter utilizado para hacer comentarios de una línea.
- **RewriteEngine On** : activa el módulo Apache `mod_rewrite`, que permite la reescritura de URL sobre la marcha (también permite redirigir una URL hacia otra URL).
- **RewriteRule**: esta sintaxis se escribe en el esquema de `RewriteRule Modelo Sustitution`. La escritura puede aparecer varias veces en el archivo **.htaccess** (es el caso en el archivo predeterminado que se encuentra en la raíz de la instalación de su WordPress). El orden de escritura en el archivo es primordial, tenga cuidado con el orden en que escriba sus reglas.
- **RewriteBase**: especifica que la raíz del sitio sea `/`.
- **RewriteCond** : son condiciones previas para la regla que sigue directamente. En nuestro caso, la primera condición excluye las URL que contienen una ruta a un archivo real, mientras que la segunda excluye las subcarpetas.

### ¿Qué puedo añadir a un archivo **.htaccess** con WordPress?

Existen varias formas de definir y modificar los parámetros que cambiarán el comportamiento del servidor (aunque existen limitaciones en función del alojamiento):

- modificar los archivos de configuración del servidor;
Añadir o modificar directrices en el archivo de configuración **wp-config.php** en la raíz del sitio web.
- modificar o añadir directivas en el archivo **.htaccess** situado en la raíz.

## Procedimiento

> [!warning]
>
> Antes de seguir los pasos que se indican a continuación, deberá redirigir el protocolo HTTP a HTTPS. Para ello, siga las indicaciones de nuestra guía ["Habilitar HTTPS en un sitio web con certificado SSL"](/pages/web_cloud/web_hosting/ssl-activate-https-website#1-activar-el-certificado-ssl-en-el-alojamiento-web).

### Impedir la visualización de directorios y subdirectorios

Para evitar que todos los visitantes de su sitio web puedan ver el contenido de los subdirectorios (y además, informar a los piratas sobre los temas o extensiones utilizados), bloquee la visualización del contenido añadiendo esta línea a su archivo **.htaccess**:

```bash
Options All -Indexes
```

### Proteger el archivo de configuración

El archivo **wp-config.php**, situado en la raíz del sitio web, contiene información de configuración sensible. Impida el acceso a este archivo añadiendo las siguientes líneas en su archivo **.htaccess** :

```bash
<Files wp-config.php>
    order allow,deny
    deny from all
    satisfy all
</Files>
```

### Bloquear una dirección IP

Si ha identificado una dirección IP maliciosa, introduzca la siguiente línea en su archivo **.htaccess**:

```bash
<Limit GET POST>
    order allow,deny deny from xxx.xxx.xxx.xxx
    allow from all
</Limit>
```

En este ejemplo, `xxx.xxx.xxx.xxx` designa la dirección IP que desea bloquear.

Para más información, consulte nuestra guía sobre la [restricción de acceso por IP a través del archivo .htaccess](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

#### Bloquear una dirección IP desde el directorio wp-admin (o en los demás directorios)

El directorio **wp-admin** permite conectarse a su interfaz de administración (el método también funciona con los demás directorios, pero corresponden a URLs que no llegan a una interfaz particular). Para proteger este directorio, autoriza específicamente el acceso a una o varias direcciones IP utilizando el siguiente código que debe tener en su **.htaccess** :

```bash
<Limit GET POST PUT>
    order deny,allow deny from all
    allow from xxx.xxx.xxx.xxx
    allow from xxx.xxx.xxx.xxx
</Limit>
```

### Datos importantes a tener en cuenta

- Guarde una versión funcional de su archivo **.htaccess** antes de realizar cualquier operación.
- Si los cambios realizados provocan un error, sustituya (a través de su cliente FTP) el archivo **.htaccess** en línea por la versión anterior.
- Puede administrar algunos parámetros en su archivo **wp-config.php**.
- Los archivos **.htaccess** son especialmente eficaces para la gestión de las URLs, las redirecciones y la seguridad de su sitio web.

## Más información <a name="go-further"></a>

Consulte el [tutorial disponible en el sitio web de la Fundación Apache](https://httpd.apache.org/docs/2.4/es/howto/htaccess.html).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
