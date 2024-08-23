---
title: "Errores comunes relacionados con la seguridad de su sitio web con el SSL"
excerpt: "Descubra cómo evitar los errores comunes de seguridad de su sitio web con el SSL"
updated: 2024-01-11
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

En este tutorial encontrará algunos ejemplos de situaciones relativas a la seguridad de su sitio web con el SSL.

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner). Nosotros no podremos asistirle. Para más información, consulte la sección ["Más información"](#go-further) de esta guía.
>

**Descubra cómo evitar los errores habituales de seguridad de su sitio web con el SSL**

## Requisitos

- Tener un [alojamiento web de OVHcloud](/links/web/hosting){.external}.
- Haber registrado al menos un [dominio](/links/web/domains){.external}.
- Tener acceso al [área de cliente de OVHcloud](/links/manager){.external}, parte "Web cloud".

## Procedimiento

### Contenido mixto (mixed content)

¿Su sitio web no carga elementos externos, como los botones *Facebook* y *X/Twitter*? ¿Las interacciones en sus páginas web no funcionan como cuando accede a su sitio web en HTTP? Probablemente se deba a que el sitio web contiene contenido mixto. 

En los últimos años, los navegadores como *Google Chrome*, *Mozilla Firefox* e *Microsoft Edge/Internet Explorer* impiden que los sitios web en HTTPS carguen elementos de página si se puede acceder a ellos a través de una URL en HTTP. De este modo, la confidencialidad que proporciona el protocolo HTTPS no se ve comprometida por un elemento cargado en HTTP. 

En la mayoría de los casos, se trata de scripts externos de otros sitios web, como las redes sociales. En ese caso, solo tiene que sustituir en sus scripts las URL "HTTP" por URL "HTTPS" para poder cargar estos scripts.

> [!primary]
>
> Algunos sitios web utilizan [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) para alojar, por ejemplo, librerías *Javascript* (como *JQuery*). 
> Si las CDN entregan la librería con una URL en HTTP, su sitio web puede verse afectado por el **mixed content**. 
>

¿Cómo sé si afecta a mi sitio web?

Las herramientas de depuración proporcionadas por *Mozilla Firefox* y *Google Chrome* pueden indicarle si su sitio web contiene elementos bloqueados debido a contenido mixto. La documentación disponible en la [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} explica cómo utilizar estas herramientas para identificar el contenido mixto.

### Contenido duplicado (duplicate content)

"Duplicar contenido" significa tener el mismo contenido en varias URL diferentes. Los motores de búsqueda lo ven como un intento de mejorar el posicionamiento orgánico (SEO). Por lo tanto, penalizan a los sitios web con contenido duplicado.

Para evitar esta situación, le recomendamos que, cuando su sitio web funcione correctamente en HTTPS, redirija el contenido "HTTP" hacia "HTTPS". Esto permitirá que sus visitantes sean redirigidos automáticamente a la dirección de su contenido web en HTTPS y que solo haya una dirección disponible para ese mismo contenido. 

A continuación ofrecemos un ejemplo de redirección que puede añadir a un archivo "[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)", en la raíz de su sitio web (sustituyendo la URL *https://www.yourdomain.tld* por la suya):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Más información <a name="go-further"></a>
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).