---
title: "Web hosting - Habilitar HTTPS en un sitio web"
excerpt: "Decubra cómo activar un certificado SSL en un sitio web HTTPS"
updated: 2024-02-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Los planes de hosting de OVHcloud le permiten disfrutar de un [certificado SSL](/links/web/hosting-options-ssl). Este último permite que uno o varios de sus sitios web dispongan de una conexión segura, por lo que es posible acceder a ellos mediante el protocolo *HTTPS*. Para ello, es necesario realizar diversas acciones antes de que los sitios web puedan utilizar esta conexión segura.

**Decubra cómo activar un certificado SSL en un sitio web HTTPS.**

## Requisitos

- Tener un [certificado SSL](/links/web/hosting-options-ssl){.external} instalado en su [alojamiento web de OVHcloud](/links/web/hosting){.external}.
- Tener al menos un sitio web instalado y accesible en su alojamiento web de OVHcloud.
- Estar conectado al [área de cliente de OVHcloud](/links/manager){.external}, parte `Web Cloud`{.action}.

## Procedimiento

La seguridad desempeña un papel cada vez más importante en internet. Usted presta una atención especial a la confidencialidad de sus datos y a la forma en que estos se transmiten por la web. En general, los internautas confían más en los sitios web que permiten un intercambio seguro de los datos, sobre todo cuando los datos intercambiados son sensibles. 

Cuando visita un sitio web que dispone de una conexión segura, su navegador le indica en su barra de direcciones (URL) gracias a varios medios como: 

- un logotipo (normalmente un candado);
- un mensaje;
- un código de color; 
- el protocolo utilizado, *HTTPS* en lugar de *HTTP*.

Cada vez es más fácil ver si un sitio web dispone o no de una conexión segura.

![httpswebsite](/pages/assets/screens/other/browsers/urls/url-not-secure.png){.thumbnail}

**Habilitar HTTPS en un sitio web puede ser una operación delicada**. En efecto, la mayoría de las acciones a realizar se realizarán en el código fuente de su sitio web. Si no se efectúan correctamente, existe el riesgo de que los resultados de los motores de búsqueda (Google, Yahoo!, bing...) muestren un nivel de SEO inferior o, incluso, de que el sitio web deje de estar disponible.

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.
>

A continuación le ofrecemos los Etapas principales para activar el protocolo HTTPS en su sitio web:

- [Etapa 1 - Activar el certificado SSL en el alojamiento web](#enable-ssl): Permite activar o verificar que un certificado SSL está correctamente instalado en el alojamiento web o sitio web correspondiente.
- [Etapa 2 - Comprobar el entorno técnico de su sitio web](#check-environment): permite comprobar que el cambio de su sitio web a *HTTPS* no provocará fallos de funcionamiento antes de iniciar cualquier cambio.
- [Etapa 3 - Activar el protocolo *HTTPS* en su sitio web](#https-enable) : Permite que su sitio web utilice el protocolo *HTTPS*. El método descrito en esta guía no es universal y dependerá del sitio web utilizado.
- [Etapa 4 - Comprobar el buen funcionamiento de su sitio web](#check-your-website): Asegúrese de que su sitio web se muestra correctamente después de la activación del *HTTPS*.

### Etapa 1 - Activar el certificado SSL en el alojamiento web <a name="enable-ssl"></a>

Para activar un certificado SSL en un alojamiento web o comprobar que ya hay un certificado SSL instalado en un sitio web, consulte nuestra guía: "[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

### Etapa 2 - Comprobar el entorno técnico de su sitio web <a name="check-environment"></a>

Antes de realizar cualquier cambio en la configuración de su sitio web, asegúrese previamente de que este está listo para utilizar el protocolo *HTTPS* correctamente. No existe un procedimiento universal, ya que depende del sitio web que utilice.

Por lo tanto, la siguiente información es genérica. Si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner).

#### 2.1 - Evite mezclar contenido HTTP y HTTPS

Si su sitio web aparece en formato *HTTPS*, debe evitar mezclar contenido *HTTP* y *HTTPS* en una misma página y en todo su sitio web. Así pues, si su sitio web quiere que aparezca en formato *HTTPS*, asegúrese de que todo su contenido se carga en *HTTPS*.

En caso contrario, podrá ofrecer en su sitio web contenidos considerados como mixtos (*Mixed Content*) por los navegadores de internet, es decir, contenidos considerados como potencialmente no seguros en una página declarada segura.

Es posible que se den dos casos de *Mixed Content*:

- **El sitio web se muestra correctamente, pero se muestra una advertencia en la barra de direcciones**. El contenido considerado pasivo (imágenes, vídeos, etc.) por su navegador de internet se carga en su página desde una fuente no segura.

- **Algunas partes del sitio web no se muestran y aparece un aviso en la barra de direcciones**. Se ha bloqueado el contenido que el navegador web considera activo (scripts, iframe, archivos CSS, etc.), procedente de una fuente no segura.

Asegúrese de que todo el contenido cargado desde el sitio web proviene de una fuente segura.

![httpswebsite](/pages/assets/screens/other/browsers/urls/connection-isnt-secure.png){.thumbnail}

Tenga en cuenta que, aunque su alojamiento disponga de un certificado SSL, el contenido alojado en él puede cargarse en *HTTP* o en *HTTPS*. Depende de cómo haya identificado dicho contenido en el código de su sitio web. Por lo tanto, asegúrese de que todo el contenido cargado desde su sitio web utiliza el protocolo *HTTPS*.

Por ejemplo, preste especial atención a las direcciones que utiliza en el código de su sitio web. Si es posible:

- Prefiera utilizar direcciones relativas como: `../img/header.png`;
- evite las direcciones absolutas que incluyan el protocolo *HTTP*, como : `http://domain.tld/img/header.png`.

Si es necesario, adapte el código de su sitio web en consecuencia. 

Si utiliza un "sitio web llave en mano" (WordPress, PrestaShop, Drupal o Joomla!), la estructura de estos sitios web suele estar diseñada para convertirse en un *HTTPS*. No debería tener que hacer cambios en el código de su sitio web.

#### 2.2 - Evite generar contenido duplicado

En función de cómo esté escrito el código de su sitio web, asegúrese de que no es posible acceder a él desde distintas direcciones, por ejemplo, utilizando el *HTTP* o el *HTTPS*. En ese caso, se podrá acceder al mismo contenido desde varias direcciones diferentes, lo que los motores de búsqueda consideran contenido duplicado (*duplicate content*).

Esto puede reducir el nivel de SEO (posicionamiento orgánico) de su sitio web. Por lo tanto, asegúrese de que su código "fuerza" el uso del *HTTPS*, mediante una regla de reescritura que deberá colocar en el código de su sitio web cuando quiera activar el *HTTPS*.

Tenga en cuenta que si utiliza un "sitio llave en mano", su estructura gestiona automáticamente las reglas de reescritura. Por lo tanto, no es necesario realizar ningún cambio en el código del sitio web.

### Etapa 3 - Activar el protocolo HTTPS en su sitio web <a name="https-enable"></a>

Una vez que el alojamiento web disponga de un certificado SSL activo, que el [multisitio](/pages/web_cloud/web_hosting/multisites_configure_multisite) correspondiente disponga de una conexión SSL activa y que el sitio web esté listo para pasar a *HTTPS*, podrá activarlo.

> [!warning]
>
> Antes de realizar cualquier operación, le recomendamos que guarde una copia de seguridad completa del sitio web. Esta copia de seguridad debe contener no solo los archivos presentes en el [espacio de almacenamiento FTP](/pages/web_cloud/web_hosting/ftp_save_and_backup), sino también los de [la base de datos](/pages/web_cloud/web_hosting/sql_database_export) si el sitio web utiliza una.
>
> En efecto, a partir de este paso, deberá realizar las acciones directamente desde los archivos que componen su sitio web. No dude en contactar con un [proveedor especializado](/links/partner) si tiene alguna dificultad.
>

Existen múltiples formas de activar el protocolo *HTTPS* en su sitio web. Para ello, deberá realizar determinadas acciones en la configuración del sitio web que utilice. La información que se indica a continuación puede servir de ayuda, pero puede que no sea completa o no se aplique a su caso particular.

- **Si utiliza un "sitio web llave en mano" (WordPress, PrestaShop, Drupal, Joomla!...)**:

Normalmente, la activación del protocolo *HTTPS* se realiza desde el panel de administración de su sitio web. La denominación y el procedimiento para activar el *HTTPS* varían en función del "sitio llave en mano" que utilice. 

Por ejemplo, podría tener que activar un parámetro denominado "*HTTPS*" o modificar el enlace completo de su sitio web para añadir un `s`: "**http**://domain.tld" pasaría a ser "**https**://domain.tld".

Si no sabe cómo realizar esta operación desde el panel de administración de su sitio web, o si tiene alguna duda, consulte la documentación oficial del editor de su sitio web. 

- **Si utiliza un sitio web codificado por usted mismo (o por un proveedor)**: 

Es necesario activar el protocolo *HTTPS* directamente en el código del sitio web. Si tiene los conocimientos necesarios, modifique el código de su sitio web para adaptarlo al uso del protocolo *HTTPS*. En caso de duda sobre las operaciones que debe realizar, póngase en contacto con el desarrollador de su sitio web. 

A continuación ofrecemos algunos ejemplos de scripts que puede insertar en un archivo **.htaccess**. Sin embargo, estos no sustituyen a la ayuda de un webmaster. Sustituya el nombre de dominio `domain.tld` que aparece en el primer script por su propio nombre de dominio y modifíquelo si es necesario.

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://domain.tld/$1 [R,L]
```

Este primer script de ejemplo redirige todas las URL llegadas a través del puerto 80 en *HTTP* hacia la URL segura en *HTTPS* `https://domain.tld/`.

```bash
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

Este segundo script de ejemplo transforma todas las URL recibidas a través del protocolo *HTTP* en *HTTPS*, conservando intacto el resto de la URL situado después de los `://`.

En este segundo ejemplo, compruebe que todos los dominios o subdominios de destino tienen un certificado SSL activo.

### Etapa 4 - Comprobar que el sitio web <a name="check-your-website"></a> funcione correctamente

Una vez que haya activado el protocolo *HTTPS* en su sitio web, asegúrese de que este funciona correctamente y de que todo su contenido se muestra como antes de la operación. Para ello, acceda al sitio web, compruebe si aparece algún mensaje o advertencia y examine las distintas secciones del sitio web. 

Si encuentra algún fallo, intente solucionarlo lo antes posible o dé marcha atrás desactivando el *HTTPS*. Si lo necesita, puede utilizar la copia de seguridad completa del sitio web realizada en el [etapa 3](#https-enable).

Si su sitio web se muestra correctamente y no aparece ninguna advertencia después de cambiar a *HTTPS*, ha realizado la operación correctamente. Si quiere activar el protocolo *HTTPS* en otro sitio web, repita todas las operaciones descritas en esta guía.

## Más información <a name="go-further"></a>

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).