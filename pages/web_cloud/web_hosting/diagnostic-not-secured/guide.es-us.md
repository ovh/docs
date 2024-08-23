---
title: "¿Qué hacer en caso de error « La conexión no es privada »?"
excerpt: "Responder en caso de que aparezca un mensaje de error relacionado con la seguridad de su sitio web"
updated: 2021-07-08
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo <a name="objective"></a>

En caso de que su sitio web no sea accesible, puede aparecer varios mensajes de error. Los siguientes ejemplos indican que su alojamiento web no contiene [certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (si su sitio web no muestra una de las anomalías descritas en esta guía, consulte la sección [« Más información »](#go-further)): 

|Navegador|Mensaje de error correspondiente|
|-|---|
|Chrome :<br>« La conexión no es privada »|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox :<br>« Advertencia: riesgo potencial de seguridad a continuación »|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge :<br>« Su conexión no es privada »|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari :<br>« Esta conexión no es privada »|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Descubra cómo resolver los errores del tipo « Su conexión no es privada ».**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [« Más información »](#go-further) de esta guía.
>

## Requisitos

- Tener la gestión de los [servidores DNS](/pages/web_cloud/domains/dns_server_general_information) y de la [zona DNS](/pages/web_cloud/domains/dns_zone_general_information) del dominio
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)

## Procedimiento

Para resolver esta anomalía, deberá:

1. determinar el alojamiento al que está asociado el dominio para intervenir en el servidor correcto;
2. crear, activar o renovar un [certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) para su nombre de dominio en el alojamiento correspondiente.

### Etapa 1: comprobar el alojamiento asociado a su dominio

#### Comprobar la dirección IP del alojamiento

Los mensajes de error mencionados [anteriormente](#objective) no significan necesariamente que su sitio web esté alojado en uno de nuestros [planes Web Cloud](/links/web/hosting). Por lo tanto, debe comprobar la dirección IP del servidor al que está asociado su [dominio](/links/web/domains).

Para encontrar la dirección IP de su [hosting OVHcloud](/links/web/hosting), haga clic en el botón `Web Cloud`{.action} situado en la esquina superior derecha de su [área de cliente de OVHcloud](/links/manager) y seleccione el alojamiento correspondiente.

En la pestaña `Información general`{.action}, indique la dirección IPV4 y/o IPV6 de su alojamiento.

![hosting-general-informations](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

#### Verificar la dirección IP en la zona DNS

Compruebe que la dirección IP indicada en [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corresponde a la de su [Web Cloud hosting](/links/web/hosting).

Haga clic en `Dominios`{.action} de su [área de cliente de OVHcloud](/links/manager) y seleccione el dominio de su sitio web.

Seleccione la pestaña `Zona DNS`{.action} y anote el destino del registro de tipo `A` para su dominio:

![zone-dns-ip](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

#### Realizar las acciones necesarias

|Escenario|Acción a emprender|
|---|---|
|La dirección IP indicada en la [Zona DNS](/pages/web_cloud/domains/dns_zone_edit) corresponde a la de su alojamiento compartido.|pase a el [etapa 2](#step2).|
|La dirección IP indicada en la zona no concierne ningún alojamiento de su [cuenta OVHcloud](/links/manager), pero aparece en la [lista de servidores Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Compruebe que no tiene un alojamiento con esta dirección IP en cualquiera de sus otras [cuentas OVHcloud](/links/manager) si ha creado más de uno. Si lo necesita, contacte con su webmaster o los [partners de OVHcloud](/links/partner) a este respecto.|
|La dirección IP indicada en la zona no es la de su alojamiento y tampoco aparece en la [lista de servidores Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).|Contacte su webmaster o los [partners de OVHcloud](/links/partner) a este respecto.|
|En la pestaña `Zona DNS`{.action}, un mensaje indica que su dominio utiliza otros servidores [DNS](/pages/web_cloud/domains/dns_zone_edit) y estos aparecen en forma de « ns **?** .ovh.net » o « dns **?** .ovh.net » (sustituya el « **?** » por el número de servidor DNS correspondiente):<br><br>![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modifique los servidores DNS de su dominio para que se ajusten a los inscritos en los registros de tipo `NS` de la zona. Para ello, siga las indicaciones de [esta guía](/pages/web_cloud/domains/dns_server_edit)|
|En la pestaña `Zona DNS`{.action}, un mensaje indica que su dominio utiliza otros servidores [DNS](/pages/web_cloud/domains/dns_zone_edit) y estos no aparecen en el formato « ns **?** .ovh.net » o « dns **?** .ovh.net »:<br><br>![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}|Contacte con su webmaster o los [partners de OVHcloud](/links/partner) al respecto.|
|Su nombre de dominio no aparece en la sección `Dominios`{.action} de su [área de cliente OVHcloud](/links/manager).<br><br>O la pestaña `Zona DNS`{.action} de su dominio se muestra de la siguiente manera:<br><br>![zonedns_ndd_pas_en_lec2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|Significa que su dominio no es gestionado desde su [área de cliente de OVHcloud](/links/manager).<br><br>Compruebe que no esté gestionado desde cualquiera de sus [cuentas OVHcloud](/links/manager), si ha creado varias.<br><br>También puede determinar su agente registrador y los servidores DNS a los que está asociado a través de nuestro herramienta [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Si es necesario, contacte con su webmaster o los [partners de OVHcloud](/links/partner) al respecto.|

### Etapa 2: verificar el certificado SSL de su alojamiento <a name="step2"></a>

En la pestaña `Información general`{.action} de su alojamiento OVHcloud, consulte el apartado `Certificado SSL`.

![ssl-certificate-in-general-tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}

#### Escenario 1: su alojamiento no contiene certificado SSL

Active un [certificado SSL](/links/web/hosting-options-ssl) en su alojamiento siguiendo las instrucciones de este [guía](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Escenario 2: el certificado SSL de su alojamiento no funciona

Si ha generado un **certificado SSL « Let's Encrypt »**, active la opción SSL en el `Multisitio`{.action} de su alojamiento siguiendo las instrucciones de este [guía](/pages/web_cloud/web_hosting/ssl_on_webhosting#activar-un-certificado-ssl-en-un-multisitio).

Si tiene un **certificado SSL importado** y este no funciona, póngase en contacto con su proveedor.

Si ha contratado uno de los **certificados SSL de pago** de nuestro partner [SECTIGO](https://sectigo.com/){.external}, compruebe si ha recibido un mensaje de correo electrónico proponiéndole que lo renueve.
<br>Si es necesario, contacte con el [soporte de SECTIGO](https://sectigo.com/support){.external} al respecto.

> [!primary]
>
> Para consultar todos los mensajes enviados por nuestros servicios, haga clic en el botón superior derecha de su [área de cliente de OVHcloud](/links/manager) y seleccione `Emails de servicio`{.action}.
>
>![right-menu-email-button](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-email-button.png){.thumbnail}
>

## Más información <a name="go-further"></a>

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Habilitar HTTPS en un sitio web con certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Solucionar el error «Sitio no instalado»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[¿Qué hacer en caso de error 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).