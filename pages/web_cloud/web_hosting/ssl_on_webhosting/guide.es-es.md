---
title: "Web hosting - Gestionar un certificado SSL"
excerpt: "Descubra cómo gestionar un certificado SSL en un alojamiento web de OVHcloud"
updated: 2025-06-16
---

## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios efectuados desde o hacia su sitio web. Esto evita que una persona o un robot malicioso venga a "escuchar" claramente las peticiones enviadas desde su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en nuestros planes de [hosting OVHcloud](/links/web/hosting). Más adelante en esta guía, explicamos cómo hacerlo. Los certificados SSL son indispensables para la seguridad de su sitio web.

Existen tres tipos de certificados SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Los niveles de cifrado SSL son idénticos entre los tres tipos de certificado.

La principal diferencia reside en el nivel de comprobaciones que realizará la Autoridad de Certificación (CA) que emite el certificado SSL y certifica su autenticidad.

Para utilizar un certificado SSL en HTTPS, es imprescindible tener un certificado SSL en el sitio web.

**Descubra cómo gestionar un certificado SSL en un alojamiento web de OVHcloud.**

## Requisitos

- Tener acceso al [área de cliente de OVHcloud](/links/manager).
- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Tener al menos un [dominio](/links/web/domains).

## Procedimiento

> [!warning]
>
> **Antes de continuar**, asegúrese de que **el/los nombre/s de dominio y/o subdominio/s** correspondiente/s a su futuro certificado SSL:
>
> - apunta(n) a la dirección IP de su alojamiento web;
> - está(s) declarado(s) en multisitio en su alojamiento web.
>
> Para más información, consulte nuestras guías:
>
> - [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Activar un certificado SSL en un alojamiento web <a name="ssl-enable"></a>

OVHcloud ofrece 4 soluciones para activar/instalar un certificado SSL en un alojamiento web. Para más información sobre cada una de estas soluciones, consulte la documentación correspondiente.

Consulte a continuación los cuatro enlaces a nuestras guías dedicadas a estas cuatro soluciones:

- [Activar el certificado SSL gratuito Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt): certificado que puede incluir hasta **99** nombres de dominio o subdominio declarados en un alojamiento web.
- [Activar el certificado SSL de pago Sectigo (DV)](/pages/web_cloud/web_hosting/ssl_dv): certificado válido para un único dominio + su subdominio en "www" (por ejemplo, `domain.tld` y `www.domain.tld`) o **únicamente** un subdominio (por ejemplo, `sub.domain.tld`).
- [Activar el certificado SSL de pago Sectigo (EV)](/pages/web_cloud/web_hosting/ssl_ev): certificado válido para un único dominio + su subdominio en "www" (por ejemplo, `domain.tld` y `www.domain.tld`) o **únicamente** un subdominio (por ejemplo, `sub.domain.tld`).
- [Instalar un certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom): si tiene su propio certificado SSL o si ninguna de las 3 soluciones anteriores se ajusta a sus necesidades.

> [!primary]
>
> Solo es posible instalar un certificado SSL por alojamiento web (entre las 4 soluciones mencionadas anteriormente).
>
> Si necesita activar un certificado SSL para varios dominios o subdominios declarados en su alojamiento web, puede instalar un [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) o instalar su propio [certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

### Eliminar un certificado SSL en un alojamiento web <a name="delete-ssl"></a>

> [!warning]
>
> Si quiere eliminar un certificado SSL de su alojamiento web y **antes de continuar**, asegúrese de que la supresión del certificado SSL no hará que sus sitios web dejen de estar accesibles. En ese caso, los usuarios encontrarán un error de seguridad al intentar acceder a su sitio web en HTTPS.

Esta comprobación es inherente a la configuración de su sitio web. Si necesita ayuda, le recomendamos que contacte con un proveedor de servicios especializado. No podremos asistirle.

> [!primary]
>
> **Información sobre la migración a la nueva interfaz de gestión de certificados SSL:**
>
> El resto de esta guía se dirige a los clientes cuyos servicios de alojamiento web aún no hayan migrado a la nueva interfaz de gestión de certificados SSL.
> Para consultar si se ha realizado la migración, conéctese al área de cliente de OVHcloud, y compruebe si la pestaña `Certificados SSL` está presente.
> Si la pestaña `Certificados SSL` está presente, su servicio ya ha migrado a la nueva interfaz de gestión. En ese caso, consulte directamente [esta guía](/pages/web_cloud/web_hosting/ssl_management) para gestionar su certificado SSL.
>
> Por razones técnicas, todos los servicios de alojamiento web de todos nuestros clientes no pueden migrarse de una sola vez. Esta migración se realiza de forma automática, a lo largo de varias semanas, sin que afecte al funcionamiento de los servicios de alojamiento web y sin que usted tenga que realizar ninguna intervención o acción.
>
> A largo plazo, todos los servicios de alojamiento web funcionarán con la nueva interfaz de gestión de certificados SSL.

Para eliminar el certificado SSL instalado en el alojamiento web, lleve a cabo los siguientes pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Acceda a la sección `Web Cloud`{.action} de la página.
3. En la columna izquierda, haga clic en el menú `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.
7. A la derecha de la mención `Certificado SSL`, haga clic en el botón `...`{.action} y luego en `Eliminar el SSL`{.action}.
8. En la nueva ventana, haga clic en `Aceptar`{.action} para confirmar la supresión del certificado SSL.

![Delete SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

Esta será efectiva en un plazo máximo de unas horas.

> [!warning]
>
> La supresión de un certificado SSL de pago **Sectigo** (DV o EV) es definitiva, incluso si el certificado no había expirado todavía. No se realizará ninguna devolución por la parte proporcional al tiempo restante. Si quiere reinstalar un certificado SSL **Sectigo** (DV o EV), deberá realizar obligatoriamente un nuevo pedido y abonar la totalidad del nuevo certificado SSL suscrito.
>

### Corregir los errores más frecuentes de los certificados SSL ofrecidos en los alojamientos web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Este mensaje indica que ya es propietario de un certificado SSL. Por lo tanto, no es necesario activar un nuevo certificado SSL en su alojamiento web.

- 1: Si el certificado SSL instalado en su alojamiento web es un certificado SSL gratuito Let's Encrypt , consulte nuestra guía sobre el certificado SSL [Let's Encrypt (DV)](/pages/web_cloud/web_hosting/ssl_letsencrypt) para continuar sus acciones.

- 2: Si el certificado SSL instalado en su alojamiento web no es el que desea utilizar, puede [suprimir su certificado SSL](#delete-ssl) actual y luego [activar un nuevo certificado SSL](#ssl-enable) en su alojamiento web.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Existen tres casos que pueden explicar esta notificación.

- 1: El nombre de dominio asociado a su sitio web apunta a la dirección IP de la CDN de su alojamiento web, sin opción CDN activa en su alojamiento web:

Para resolver esta situación, asigne a su dominio la dirección IP del alojamiento web sin CDN a través de la zona DNS activa del dominio.
Para consultar la dirección IP de un alojamiento web, consulte nuestra guía "[Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar la zona DNS activa de su dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 2: El dominio asociado a su sitio web no apunta a la dirección IP de su alojamiento web:

Para resolver esta situación, asigne la dirección IP del alojamiento web al dominio a través de la zona DNS activa del dominio.
Si ha activado una opción CDN en su alojamiento web, también puede utilizar la dirección IP del alojamiento web con CDN.
Para consultar la dirección IP de un alojamiento web, consulte nuestra guía "[Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar la zona DNS activa de su dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 3: Ninguno de los dominios presentes en la pestaña "multisitio" dispone de una opción SSL "activa":

Para solucionar este problema, active el certificado SSL para el dominio o dominios. Si lo necesita, consulte la sección "[Activar un certificado SSL](#ssl-enable)" de esta guía para continuar.

#### Ha contratado un SSL Sectigo EV al mismo tiempo que su alojamiento web, pero el certificado todavía no está activo y el alojamiento web no funciona correctamente

Esta situación está relacionada con los pasos que debe realizar para activar el SSL EV en su alojamiento web.

Si lo necesita, consulte nuestra guía "[Web hosting - Activar un certificado SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)".

> [!primary]
>
> Si el certificado SSL EV no está totalmente activo, el pedido no se cerrará nunca y no generará ninguna factura. Como resultado, el servicio de alojamiento web no funcionará correctamente.
>

#### Tras la expiración del certificado SSL Sectigo (DV o EV), se produce el error "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Este error se produce cada vez que el certificado SSL Sectigo (activado directamente desde el alojamiento web) expira y que cambia la dirección IP del alojamiento web. Por lo tanto, debe hacer que su dominio apunte a la dirección IP correcta (registro de tipo A), directamente desde la zona DNS activa de su dominio.

Para consultar la dirección IP de un alojamiento web, consulte nuestra guía "[Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Para editar la zona DNS activa de su dominio, consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

#### El certificado SSL está activo en su alojamiento web, pero aparece el mensaje "Your connection is not private" en su sitio web

Este mensaje aparece en los siguientes casos:

- 1: La regla de redirección a su URL en HTTPS está mal configurada o no existe en el archivo ".htaccess" :

Para solucionarlo, consulte nuestro tutorial "[Reescribir la URL de acceso a mi sitio web con el mod_rewrite a través del archivo .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" o contacte con un [proveedor especializado](/links/partner) si tiene alguna dificultad.

- 2: Algunos elementos de la página web no se redirigen correctamente a elementos cifrados en HTTPS:

Para corregirlo, asegúrese de que todo su sitio web esté cifrado mediante el protocolo HTTPS.
Si lo necesita, consulte nuestro tutorial "[Web hosting - Habilitar HTTPS en un sitio web](/pages/web_cloud/web_hosting/ssl-activate-https-website)" o contacte con un [proveedor especializado](/links/partner) si tiene alguna dificultad.

> [!success]
>
> Los elementos afectados en la página web pueden ser vistos directamente desde la información SSL del navegador de internet, consultando los *detalles del certificado*.
>

## Más información

[Web hosting - Habilitar HTTPS en un sitio web](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).