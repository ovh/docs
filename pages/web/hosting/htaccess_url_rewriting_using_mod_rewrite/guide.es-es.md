---
title: "Tutorial: Reescribir la URL de acceso a mi sitio web con el mod_rewrite a través del archivo .htaccess"
excerpt: "Descubra cómo reescribir la URL de acceso a su sitio web utilizando el mod_rewrite a través del archivo .htaccess"
slug: web_hosting_htaccess_reescritura_de_url_con_mod_rewrite
section: Reescritura y autenticación
order: 03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/12/2022**
  
## Objetivo

El "**mod_rewrite**" es uno de los módulos disponibles en el servidor Web HTTP **Apache**. **Apache** se instala en el conjunto de nuestra infraestructura de alojamientos compartidos. Este servidor web permite gestionar todas las peticiones HTTP enviadas a su alojamiento web.

Por ejemplo, es Apache quien recupera las peticiones HTTP generadas por los navegadores de internet de las visitas de su sitio web y les devuelve el contenido solicitado por dichas peticiones. Los navegadores web mostrarán a continuación el contenido de su sitio web a su visitante.

El "**mod_rewrite**" permite, por ejemplo, reescribir y redirigir:

- un internauta que introduzca su URL en "HTTP" directamente hacia la URL de su sitio web en "HTTPS";
- todas las URL utilizadas para el sitio web en una carpeta o un archivo específico;
- un visitante que introduzca su URL sin "www" directamente hacia la URL de su sitio web con los "www".

El "**mod_rewrite**" ofrece un número infinito de posibilidades. A continuación ofrecemos algunos de los ejemplos de uso más comunes.

> [!success]
>
> Si desea más información sobre el uso de la "**mod_rewrite**" de Apache o el ejemplo que busca no está presente en el tutorial que viene a continuación, consulte la [documentación oficial de Apache](https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html).
>

**Descubra cómo reescribir la URL de acceso a su sitio gracias al mod_rewrite a través del fichero .htaccess**
  
## Requisitos

- Disponer de un [hosting OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/)
  
## Procedimiento

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/). Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>
> Deberá configurar los siguientes ejemplos en un archivo ".htaccess". Atención: Las reglas que usted establezca en este fichero tienen consecuencias directas en su sitio web. Compruebe sistemáticamente las reglas que añade antes de aplicarlas a su sitio web.
>

El archivo ".htaccess" en el que va a configurar el "**mod_rewrite**" de Apache puede ser colocado en varias carpetas diferentes. Solo debe respetar la regla de un **solo** fichero ".htaccess" por carpeta o subcarpeta.

La configuración de un archivo ".htaccess" se aplica al directorio en el que está y a todos sus subdirectorios.

Para editar o crear directorios, conéctese al espacio FTP de su alojamiento. Si lo necesita, consulte la guía "[Acceder a mi espacio de almacenamiento](https://docs.ovh.com/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/)".

A continuación se muestran algunos de los ejemplos más comunes de uso del "**mod_rewrite**" de Apache. Algunos de ellos también pueden favorecer el posicionamiento SEO de su sitio web.

### Redirigir todas las peticiones HTTP a un único archivo de su sitio web

Edite el archivo ".htaccess" situado en la raíz del directorio que contiene su sitio web. Introduzca el siguiente código (sustituyendo en el ejemplo **test.php** por el nombre de su propio archivo):

```bash
RewriteEngine On
RewriteRule .* test.php
```

En nuestro ejemplo, todas las peticiones realizadas a su sitio web se redirigen al archivo **test.php** .

### Redirigir una parte de las peticiones HTTP a un solo archivo de su sitio web

Edite el archivo ".htaccess" situado en la raíz del directorio que contiene su sitio web. Introduzca el siguiente código (sustituyendo en nuestro ejemplo los valores **thetest** y **/test_wslash/test.php** por los nombres de sus propios archivos):

```bash
RewriteEngine On
RewriteRule thetest /test_wslash/test.php
```

En nuestro ejemplo, todas las peticiones HTTP que contengan **/thetest** se redirigen al archivo **/test_wslash/test.php**.

### Redirigir el dominio hacia el subdominio en "www"

Esta regla de reescritura obliga a la dirección/URL del sitio web a ser reescrita con el subdominio en "www".

Edite el archivo ".htaccess" situado en la raíz del directorio que contiene su sitio web. Introduzca el siguiente código (sustituyendo en nuestro ejemplo **domain.tld** por su propio dominio):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$
RewriteRule ^(.*) http://www.domain.tld/$1 [QSA,L,R=301]
```

Esta reescritura de URL puede favorecer el posicionamiento SEO de su sitio web.

### Redirigir las peticiones a una carpeta en particular sin mostrar la carpeta correspondiente

Cuando se utiliza un alojamiento compartido de OVHcloud, el dominio (por ejemplo **domain.tld**) se declara en `Multisitios` para mostrar el contenido de una carpeta de destino llamada también `carpeta raíz`. Puede personalizar el nombre de la `carpeta raíz`.

Si desea más información sobre el asunto, consulte nuestra guía sobre la [configuración de un multisitio en un alojamiento compartido](https://docs.ovh.com/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/).

Algunos usuarios no ubican su sitio web directamente en la base de la `carpeta raíz`. Crean una subcarpeta (por ejemplo: **MyWebsite**) en su `carpeta raíz` para poner su sitio web en ella.

En ese caso, la URL para acceder al sitio tendrá la forma siguiente: **http://domain.tld/MyWebsite**.

Si su sitio web no está directamente en el `carpeta raíz` declarado en multisitios para su nombre de dominio y no desea mostrar el nombre de la carpeta en la URL de su sitio, edite el archivo ".htaccess" situado en la raíz del repertorio que contiene su sitio web. 

Introduzca el siguiente código (sustituyendo en nuestro ejemplo los valores **domain.tld** por su nombre de dominio y **MyWebsite** por el nombre de su propia carpeta):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld
RewriteCond %{REQUEST_URI} !^/MyWebsite
RewriteRule ^(.*)$ /MyWebsite/
```

En nuestro ejemplo, fuerza la dirección del sitio web a ser de tipo **http://domain.tld**, mientras que en realidad la página es **http://domain.tld/MyWebsite**.

### Redirigir automáticamente a un visitante hacia su sitio web en HTTPS cuando lo consulta con una URL en HTTP

Los certificados SSL permiten cifrar los intercambios efectuados en HTTP con su sitio web. Esto impide que personas o robots maliciosos recojan los datos intercambiados entre el sitio y el visitante, como por ejemplo coordenadas bancarias.

Si no tiene certificado SSL, consulte nuestra guía sobre la [gestión de un certificado SSL en un alojamiento compartido de OVHcloud](https://docs.ovh.com/es/hosting/gestionar-un-certificado-ssl-en-un-alojamiento-web/).

Algunos de sus visitantes pueden olvidar introducir la URL de acceso a su sitio en **https://** : esto representa un riesgo nada desdeñable para los datos intercambiados entre su sitio web y sus navegadores de internet.

Para ello, edite el archivo ".htaccess" situado en la raíz del directorio que contiene el sitio web. Introduzca el siguiente código (sustituyendo en nuestro ejemplo **domain.tld** por su propio dominio):

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.domain.tld/$1 [R,L]
```

En nuestro ejemplo, todas las consultas realizadas con una URL en "**http://**" se reescribirán automáticamente en "**https://**". Los visitantes serán redirigidos a su sitio web en "**https://**".
  
## Más información <a name="go-further"></a>

[Bloquear el acceso a mi sitio web para algunas direcciones IP a través de un archivo .htaccess](https://docs.ovh.com/es/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Proteger la interfaz de administración de su sitio web mediante un archivo .htaccess](https://docs.ovh.com/es/hosting/compartido-htaccess-como-proteger-el-acceso-a-un-directorio-por-autenticacion/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.