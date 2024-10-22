---
title: "Web hosting - Activar un certificado SSL gratuito Let's Encrypt"
excerpt: "Descubra cómo activar o regenerar un certificado SSL gratuito Let's Encrypt en un alojamiento web"
updated: 2024-10-22
---

## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios realizados desde o hacia su sitio web. Esto evita que una persona o robot malintencionado venga a "escuchar" claramente las peticiones enviadas o enviadas a su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en nuestros [planes de hosting de OVHcloud](/links/web/hosting). Estos datos se presentan en la guía [Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting). Los certificados SSL son imprescindibles para la seguridad de su sitio web.

Existen tres tipos de certificados SSL:

- Dominio Validación (DV)
- Organization validation (OV)
- Extended Validation (EV)

Los niveles de cifrado SSL son idénticos entre estos tres tipos de certificado.

La principal diferencia radica en el nivel de verificaciones que realizará la Autoridad de Certificación (AC), que emite el certificado SSL y atestigua su autenticidad.

Let's Encrypt es una autoridad de certificación gratuita, automatizada, abierta y sin ánimo de lucro. Más información en <https://letsencrypt.org/es/about/>.

**Descubra cómo activar o regenerar un certificado SSL gratuito Let's Encrypt en su alojamiento web de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [alojamiento compartido OVHcloud](/links/web/hosting) en el que no haya ningún certificado SSL instalado.
- Contratar o disponer de un [dominio](/links/web/domains) y disponer de derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.

## Procedimiento

### 1. Preasignar el futuro certificado SSL Let's Encrypt a su(s) nombre(s) de dominio/subdominio(s) <a name="ssl-multisite"></a>

A diferencia de otros certificados, el [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) puede activarse para varios dominios o subdominios a la vez. Esta operación está limitada a **99** dominios o subdominios por alojamiento web.

Por lo tanto, antes de instalar el certificado SSL Let's Encrypt, deberá preparar todos los dominios y subdominios que se beneficiarán de este certificado SSL.

Para ello, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. En la nueva página, haga clic en la pestaña `Multisitio`{.action}.

Se mostrará una tabla que contiene todos los dominios y subdominios declarados en multisitio en su alojamiento web. En la columna SSL se indica el estado de activación del SSL en los dominios y subdominios declarados en multisitio.

![manage SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

En esta columna y en general, pueden aparecer tres estados:

|Estado|Descripción|
|---|---|
|Activado|Ya se ha habilitado un certificado SSL para esta entrada multisitio. En ese caso, [compruebe que el certificado SSL es un certificado SSL Let's Encrypt](#check-ssl). En caso afirmativo, consulte primero el [caso particular](#regenerate-ssl) que aparece más adelante en esta guía. De lo contrario, consulte nuestra guía "[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)" si desea eliminar su certificado SSL actual (gratuito o de pago) y sustituirlo por un certificado SSL Let's Encrypt.|
|Por generar|Se ha habilitado un certificado SSL para esta entrada multisitio, pero aún no está técnicamente activo. Para ello, deberá [regenerar el certificado SSL Let's Encrypt](#regenerate-ssl) para que incluya los nuevos dominios o subdominios declarados en multisitio y para los que el estado `Por generar` esté presente.|
|Desactivado|No hay ningún certificado SSL habilitado para esta entrada multisitio. Para activarlo, siga los pasos que se indican a continuación.|

> [!primary]
>
> Si tiene un dominio o subdominio que aún no está declarado en su alojamiento web, consulte las siguientes guías para resolver esta situación:
>
> - [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

 Para preasignar la opción SSL Let's Encrypt a un dominio o subdominio declarado en `Multisitio`{.action} en su alojamiento web, siga estos pasos:

1. En la tabla que contiene todos los dominios y subdominios declarados en multisitio en su alojamiento web, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente al dominio o subdominio.
2. A continuación, haga clic en `Modificar el dominio`{.action}.
3. En la nueva ventana, marque la casilla `SSL`{.action} y haga clic en `Siguiente`{.action}.
4. Se abrirá una nueva ventana en la que podrá consultar un resumen de la configuración del dominio o subdominio. Haga clic en `Aceptar`{.action} para aplicar el cambio solicitado para esta entrada multisitio.

Una vez validada la modificación, el estado en la columna SSL para la entrada multisitio correspondiente pasará de `Desactivado` a `Por generar` al cabo de unos segundos. Si quiere añadir otros dominios o subdominios a la lista de dominios o subdominios incluidos en las entradas multisitio de su alojamiento web, repita este proceso tantas veces como sea necesario.

### 2. Activar un certificado SSL Let's Encrypt <a name="enable-ssl"></a>

Antes de realizar esta configuración, asegúrese de haber completado correctamente el [paso anterior](#ssl-multisite). En la pestaña `Multisitio`{.action} de su alojamiento web, al menos un dominio o subdominio debe tener la opción SSL con el estado `Activado` o `Por generar` para instalar el certificado SSL Let's Encrypt.

> [!warning]
>
> **Antes de continuar**, compruebe que **todos los dominios y/o subdominios** afectados por su futuro certificado SSL Let's Encrypt :
>
> - apuntan a la dirección IP de su alojamiento web;
> - están declarados como multisitio en su alojamiento web.
>
> Para más información, consulte nuestras guías:
>
> - [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
> - [Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

Para activar su certificado SSL Let's Encrypt, realice las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.
7. A la derecha de la mención `Certificado SSL`, haga clic en el botón `...`{.action} y luego en `Contratar un certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

En la nueva ventana, seleccione `Certificado gratuito (Let's Encrypt)`{.action} de la lista de opciones disponibles y haga clic en `Siguiente`{.action} para aceptar la solicitud de activación del SSL.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

La instalación del certificado SSL Let's Encrypt puede tardar varias horas.

<a name="check-ssl"></a>

Para comprobar que la instalación se ha completado, lleve a cabo los siguientes pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.

Si todo ha terminado, debe encontrar un valor equivalente a este que aparece debajo de la mención `Certificado SSL`: `Sí - LETSENCRYPT - DV`.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

Su certificado SSL Let's Encrypt ya está instalado y activo. Ya puede utilizarlo con su (los) nuevo(s) sitio(s) web pasando, por ejemplo, su (los) nuevo(s) [sitio(s) web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

### Caso particular: Regenerar el certificado SSL Let's Encrypt en un alojamiento web <a name="regenerate-ssl"></a>

Al utilizar su alojamiento web, puede que tenga que añadir más adelante dominios o subdominios en multisitio para los que necesitará activar la opción SSL.

Incluso si ya ha activado un certificado SSL Let's Encrypt para algunos de sus dominios o subdominios, puede añadir otros nuevos (dentro del límite de los **99** dominios o subdominios que se indican más arriba en esta guía).

Para ello, lleve a cabo **en orden** las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. Preatribuya el certificado SSL Let's Encrypt a sus nuevos dominios y subdominios, tal y como se indica en la [primera parte](#ssl-multisite) de esta guía.
3. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
4. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
5. Seleccione el alojamiento web correspondiente.
6. A continuación, siga en la pestaña `Información general`{.action}.
7. Acceda al recuadro `Configuración`.
8. A la derecha de la mención `Certificado SSL`, haga clic en el botón `...`{.action} y luego en `Regenerar el certificado SSL`{.action}.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Lea atentamente la información que se muestra en la ventana y haga clic en el botón `Aceptar`{.action}. Espere a que el certificado SSL se regenere.

Este paso puede tardar varias horas.

> [!warning]
>
> Let's Encrypt, la autoridad que proporciona el certificado SSL, [limita a cinco el número de regeneraciones posibles por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Por lo tanto, tenga cuidado con los posibles refrescamientos a corto plazo para no quedar bloqueado temporalmente.

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

Su certificado SSL Let's Encrypt ya está regenerado y activo. Ya puede utilizarlo con su (los) nuevo(s) sitio(s) web pasando, por ejemplo, su (los) nuevo(s) [web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Más información

[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web hosting - Cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).