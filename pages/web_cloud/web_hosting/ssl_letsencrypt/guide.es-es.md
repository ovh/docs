---
title: "Web hosting - Activar un certificado SSL gratuito Let's Encrypt"
excerpt: "Descubra cómo activar un certificado SSL gratuito Let's Encrypt en un alojamiento web"
updated: 2025-12-16
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

**Descubra cómo activar un certificado SSL gratuito Let's Encrypt en su alojamiento web de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [alojamiento compartido OVHcloud](/links/web/hosting).
- Contratar o disponer de un [dominio](/links/web/domains) y disponer de derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.

> [!primary]
>
> A partir del **06/08/2025**, el certificado SSL Let's Encrypt se activa automáticamente por defecto para:
>
> - todos los nuevos dominios o subdominios asociados a un alojamiento web.
> - todas las nuevas contrataciones de un dominio con un nuevo alojamiento web.
>
> El objetivo es ahorrarle tiempo durante la configuración de sus servicios. Puede desactivar el certificado SSL Let's Encrypt desde el [área de cliente de OVHcloud](/links/manager) si desea instalar otro certificado SSL (Sectigo DV, Sectigo EV o un certificado SSL personalizado).
> Para más información, consulte nuestra guía "[Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)", sección **Desactivar un certificado SSL en un alojamiento web**.

## Procedimiento

> [!warning]
>
> **Antes de continuar**, compruebe que **cada dominio y/o subdominio** correspondiente a un futuro certificado SSL Let's Encrypt:
>
> - apunta a la dirección IP de su alojamiento web.
> - esté declarado en uno de los sitios web de su alojamiento web.
> - no dispone ya de un certificado SSL activo.
>
> Para más información, consulte nuestras guías:
>
> - [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
> - [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
> - [Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desactivar un certificado SSL en un alojamiento web**.

### Activar el certificado SSL Let's Encrypt

Haga clic en las fichas siguientes para ver cada una de las **4** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca el contenido de la pestaña, seleccione el nombre de dominio o subdominio para el que quiera activar el certificado SSL gratuito Let's Encrypt (DV), bajo la indicación `Activar el certificado SSL`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Haga clic en el botón `Activar SSL Let's Encrypt`{.action}.

La instalación del certificado SSL Let's Encrypt puede tardar varias horas.

### Comprobar la activación del certificado SSL gratuito Let's Encrypt (DV)

Para comprobar que la instalación se ha completado, haga clic en las fichas siguientes para ver cada una de las **4** etapas:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Certificados SSL`{.action}.
>>
>> ![Certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Cuando aparezca el contenido de la pestaña, compruebe que cada dominio y/o subdominio correspondiente figura en la tabla con el tipo de certificado SSL Let's Encrypt.
>>
>> ![Tabla de gestión de certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Su certificado SSL Let's Encrypt ya está instalado y activo. Ya puede utilizarlo con su (los) nuevo(s) sitio(s) web pasando, por ejemplo, su (los) nuevo(s) [sitio(s) web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Más información

[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web hosting - Cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).