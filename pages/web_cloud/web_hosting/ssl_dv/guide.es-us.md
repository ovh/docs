---
title: "Web hosting - Activar un certificado SSL Sectigo DV"
excerpt: "Descubra cómo activar un certificado SSL Sectigo DV en un alojamiento web de OVHcloud"
updated: 2025-06-16
---

## Objetivo

Los certificados Secure Socket Layer (SSL) permiten cifrar los intercambios efectuados desde o hacia su sitio web. Esto evita que una persona o un robot malicioso venga a "escuchar" claramente las peticiones emitidas desde su sitio web.

OVHcloud ofrece varios tipos de certificados SSL en los planes de [hosting OVHcloud](/links/web/hosting). Estos se describen en la guía "[Alojamiento web - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)". Los certificados SSL son indispensables para la seguridad de su sitio web.

Existen tres tipos de certificados SSL:

- Domain Validation (DV)
- Organization validation (OV)
- Extended Validation (EV)

Los niveles de cifrado SSL son idénticos entre los tres tipos de certificado.

La principal diferencia reside en el nivel de comprobaciones que realizará la Autoridad de Certificación (CA) que emite el certificado SSL y certifica su autenticidad.

Para los alojamientos compartidos de OVHcloud, la autoridad de certificación que expide los certificados SSL DV es [Sectigo](https://sectigostore.com).

> [!warning]
>
> Una vez que el pedido del certificado se ha realizado y transmitido a nuestro proveedor de certificados/autoridad de certificación Sectigo, **no es posible ninguna devolución de pedido**.
>

**Descubra cómo activar un certificado SSL Sectigo DV en un alojamiento web de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [alojamiento compartido OVHcloud](/links/web/hosting).
- Contratar o disponer de un [dominio](/links/web/domains) y disponer de derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.

## Procedimiento

> [!warning]
>
> Los certificados SSL Sectigo DV que ofrece OVHcloud solo son válidos para uno de los siguientes casos en su alojamiento web:
>
> - Un único dominio + su subdominio en "www" (por ejemplo, `domain.tld` y `www.domain.tld`).
> - Un único subdominio (por ejemplo, `sub.domain.tld`).
>
> Si su alojamiento web incluye otros dominios o subdominios, y desea asignarles un certificado SSL, puede:
>
> - [Activar un certificado SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (si todavía no lo está).
> - Activar uno (o varios) otro(s) certificado(s) SSL de pago(s) ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) o [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Instalar su propio certificado SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Antes de contratar el certificado SSL Sectigo DV en su alojamiento web**, compruebe que **el dominio o subdominio** correspondiente al certificado SSL:

- apunta a la dirección IP de su alojamiento web.
- está declarado en multisitio en su alojamiento web.
- no dispone ya de un certificado SSL activo.

> [!primary]
>
> Si desea contratar un certificado SSL Sectigo DV para un dominio (por ejemplo, `domain.tld`), compruebe que su subdominio en «www» (por ejemplo, `www.domain.tld`) apunte también a la dirección IP de su alojamiento web y esté correctamente declarado en multisitio.
>
> En su caso, si contrata el certificado SSL Sectigo DV sin estar seguro de ello, deberá realizar una corrección más adelante. A continuación, deberá eliminar el certificado SSL Sectigo DV anteriormente suscrito **sin reembolso** y contratar uno nuevo. El objetivo es que el nuevo certificado SSL Sectigo DV incluya al mismo tiempo su dominio `domain.tld` y su subdominio en "www" `www.domain.tld`.
>
> Le recordamos que, si contrata un certificado SSL Sectigo DV directamente para un subdominio (por ejemplo, `sub.domain.tld`), no se verá afectado.

Para más información, consulte nuestras guías:

- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Desactivar un certificado SSL en un alojamiento web**.

### Contratar el certificado SSL Sectigo DV

Haga clic en las fichas siguientes para ver cada uno de los **5** etapas:

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
>> Cuando aparezca la pestaña, haga clic en el botón `Contratar un certificado SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En la nueva ventana, seleccione el dominio o subdominio correspondiente en el menú desplegable y haga clic en `Confirmar`{.action} para redirigirlo a la orden de pedido de su certificado SSL Sectigo DV.
>>
>> ![SSL Sectigo domain selection](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Continúe con el pedido hasta el pago para validar la solicitud de creación del certificado SSL Sectigo DV para su dominio y/o subdominio en su alojamiento web.

> [!alert]
>
> Una vez validado el pedido, la solicitud de certificado SSL Sectigo DV se envía a la entidad de certificación Sectigo.
>
> A partir de ese momento, no es posible reembolsar el SSL Sectigo DV.

La instalación del certificado SSL Sectigo DV puede tardar hasta **24** horas.

### Comprobar la activación del certificado SSL Sectigo DV

Para comprobar que la instalación se ha completado, haga clic en las fichas siguientes para ver cada uno de los **4** pasos:

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
>> Cuando aparezca el contenido de la pestaña, compruebe que cada dominio y/o subdominio correspondiente figura en la tabla con el tipo de certificado SSL `Sectigo`.
>>
>> ![Tabla de gestión de certificados SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/tab.png){.thumbnail}

Su certificado SSL Sectigo DV ya está instalado y activo. Ya puede utilizarlo con su sitio web pasando, por ejemplo, su [sitio web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Más información <a name="go-further"></a>

[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web hosting - Cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).