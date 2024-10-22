---
Título: "Web hosting - Activar un certificado SSL Sectigo DV"
excerpt: "Descubra cómo activar un certificado SSL Sectigo DV en un alojamiento web de OVHcloud"
updated: 2024-10-21
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

Para los alojamientos compartidos de OVHcloud, la autoridad de certificación que expide los certificados SSL DV es [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> Una vez que el pedido del certificado se ha realizado y transmitido a nuestro proveedor de certificados/autoridad de certificación Sectigo, **no es posible ninguna devolución de pedido**.
>

**Descubra cómo activar un certificado SSL Sectigo DV en un alojamiento web de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Contratar o disponer de un [alojamiento compartido OVHcloud](/links/web/hosting) en el que no haya ningún certificado SSL instalado.
- Contratar o disponer de un [dominio](/links/web/domains) y disponer de derechos exclusivos sobre su uso. El nombre de dominio no debe estar ya asociado a un certificado SSL.

## Procedimiento

> [!warning]
>
> Los certificados SSL Sectigo DV que ofrece OVHcloud solo son válidos para uno de los siguientes casos en su alojamiento web:
>
> - un único dominio + su subdominio en "www" (por ejemplo, `domain.tld` y `www.domain.tld`);
> - un único subdominio (por ejemplo, `sub.domain.tld`).
>
> Esto significa que si tiene otros dominios o subdominios declarados en multisitio en su alojamiento web, estos no podrán beneficiarse de un certificado SSL.
>
> Solo es posible instalar un certificado SSL por cada alojamiento web.
>
> Si necesita activar un certificado SSL para varios dominios o subdominios declarados en su alojamiento web, puede instalar un [certificado SSL gratuito Let's Encrypt](/links/web/hosting-options-ssl) o instalar su propio [certificado SSL personalizado](/pages/web_cloud/web_hosting/ssl_custom).

**Antes de contratar el certificado SSL Sectigo DV en su alojamiento web**, compruebe que **el dominio o subdominio** correspondiente al certificado SSL:

- apunta a la dirección IP de su alojamiento web;
- está declarado en multisitio en su alojamiento web.

> [!primary]
>
> En caso de que quiera contratar un certificado SSL Sectigo DV para un dominio (por ejemplo, `domain.tld`), compruebe que su subdominio en "www" (por ejemplo, `www.domain.tld`) apunte también a la dirección IP de su alojamiento web y esté correctamente declarado en multisitio.
>
> En su caso, si contrata el certificado SSL Sectigo DV sin estar seguro de ello, deberá realizar una corrección más adelante. A continuación, deberá eliminar el certificado SSL Sectigo DV anteriormente suscrito **sin reembolso** y contratar uno nuevo. El objetivo es que el nuevo certificado SSL Sectigo DV incluya al mismo tiempo su dominio `domain.tld` y su subdominio en "www" `www.domain.tld`.
>
> Le recordamos que, si contrata un certificado SSL Sectigo DV directamente para un subdominio (por ejemplo, `sub.domain.tld`), no se verá afectado.

Compruebe también lo siguiente:

- La casilla `SSL` no debe estar marcada al añadir en multisitio el dominio o subdominio correspondiente a su certificado SSL Sectigo DV.
- El estado `Por generar` o `Activado` no debe estar presente para el dominio o subdominio correspondiente a su certificado SSL Sectigo DV.

Para más información, consulte nuestras guías:

- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite);
- [Direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP);
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Contratar el certificado SSL Sectigo DV

Para contratar el certificado SSL Sectigo DV, lleve a cabo las siguientes acciones:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.
7. A la derecha de la mención `Certificado SSL`, haga clic en el botón `...`{.action} y luego en `Contratar un certificado SSL`{.action}.

![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

En la nueva ventana, seleccione `Certificado de pago`{.action} de la lista de opciones.

A continuación, seleccione el dominio o subdominio correspondiente en la lista desplegable que aparece y haga clic en `Siguiente`{.action}.

En la nueva ventana, haga clic en `Aceptar`{.action} para ser redirigido a la orden de pedido de su certificado SSL Sectigo DV.

Continúe con el pedido hasta el pago para validar la solicitud de creación del certificado SSL Sectigo DV para su dominio o subdominio en su alojamiento web.

> [!alert]
>
> Una vez validado el pedido, la solicitud de certificado SSL Sectigo DV se envía a la entidad de certificación Sectigo.
>
> A partir de ese momento, no es posible reembolsar el SSL Sectigo DV.

La instalación del certificado SSL Sectigo DV puede tardar hasta **24** horas.

### Comprobar la activación del certificado SSL Sectigo DV

Para comprobar que la instalación se ha completado, lleve a cabo los siguientes pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. A continuación, siga en la pestaña `Información general`{.action}.
6. Acceda al recuadro `Configuración`.

Si todo ha terminado, debe encontrar un valor equivalente a este que aparece debajo de la mención `Certificado SSL`: `Sí - SECTIGO - DV`.

![SSL Sectigo DV certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-certificate-dv-enable.png){.thumbnail}

Su certificado SSL Sectigo DV ya está instalado y activo. Ya puede utilizarlo con su sitio web pasando, por ejemplo, su [sitio web en HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

## Más información <a name="go-further"></a>

[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Web hosting - Cambiar su sitio web a HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Errores comunes relacionados con la seguridad de su sitio web con el SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).