---
title: "¿Qué hacer en caso de error 'La conexión no es privada'?"
excerpt: "Responder en caso de que aparezca un mensaje de error relacionado con la seguridad de su sitio web"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo <a name="objective"></a>

En caso de que su sitio web no sea accesible, pueden aparecer varios mensajes de error. Los siguientes ejemplos indican que su alojamiento web no contiene [certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) (si su sitio web no muestra una de las anomalías descritas en esta guía, consulte la sección ["Más información"](#go-further)):

|Navegador|Mensaje de error correspondiente|
|-|---|
|Chrome:<br>"La conexión no es privada"|![notsecured_chrome](/pages/assets/screens/other/browsers/errors/notsecured-chrome.png){.thumbnail}|
|Firefox:<br>"Advertencia: riesgo potencial de seguridad a continuación"|![notsecured_firefox](/pages/assets/screens/other/browsers/errors/notsecured-firefox.png){.thumbnail}|
|Edge:<br>"Su conexión no es privada"|![notsecured_edge](/pages/assets/screens/other/browsers/errors/notsecured-edge.png){.thumbnail}|
|Safari:<br>"Esta conexión no es privada"|![notsecured_safari](/pages/assets/screens/other/browsers/errors/notsecured-safari.png){.thumbnail}|

**Descubra cómo resolver los errores del tipo "La conexión no es privada".**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado ["Más información"](#go-further) de esta guía.
>

## Requisitos

- Tener la gestión de los [servidores DNS](/pages/web_cloud/domains/dns_server_general_information) y de la [zona DNS](/pages/web_cloud/domains/dns_zone_general_information) del dominio

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

Para resolver esta anomalía, deberá:

1. determinar el alojamiento al que está asociado el dominio para intervenir en el servidor correcto;
2. crear, activar o renovar un [certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting) para su nombre de dominio en el alojamiento correspondiente.

### 1 - Comprobar el alojamiento asociado a su dominio

#### Comprobar la dirección IP del alojamiento

Los mensajes de error mencionados [anteriormente](#objective) no significan necesariamente que su sitio web esté alojado en uno de nuestros [planes Web Cloud](/links/web/hosting). Por lo tanto, debe comprobar la dirección IP del servidor al que está asociado su [dominio](/links/web/domains).

Para encontrar la dirección IP de su [alojamiento OVHcloud](/links/web/hosting), haga clic en las fichas siguientes para ver cada una de las **2** etapas.

<!-- CP-STEPS-START:check-hosting-ip -->
> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Página de alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En el cuadro **Información general**, encontrará las menciones **IPv4** y **IPv6**.
>>
>> ![Direcciones IPv4 e IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Anote la dirección IPv4 y/o IPv6, y continúe leyendo la guía.
<!-- CP-STEPS-END:check-hosting-ip -->

#### Verificar la dirección IP en la zona DNS

Compruebe que la dirección IP indicada en la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corresponde a la de su [alojamiento Web Cloud](/links/web/hosting).

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

<!-- CP-STEPS-START:check-dns-zone-ip -->
> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![Página de zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Anote el destino del registro de tipo `A` para su dominio:
>>
>> ![Destino del registro A en la zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}
<!-- CP-STEPS-END:check-dns-zone-ip -->

#### Realizar las acciones necesarias

**Haga clic en el escenario correspondiente a su situación para ver el contenido.**

/// details | La dirección IP corresponde a la de su alojamiento compartido

La dirección IP indicada en la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) corresponde a la de su alojamiento compartido. Pase a la [parte 2](#etape2).

///

/// details | La dirección IP no concierne ningún alojamiento de su cuenta, pero aparece en la lista de servidores Web Cloud

La dirección IP indicada en la zona no concierne ningún alojamiento de su [cuenta OVHcloud](/links/manager), pero aparece en la [lista de servidores Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Compruebe que no tiene un alojamiento con esta dirección IP en cualquiera de sus otras [cuentas OVHcloud](/links/manager), si ha creado más de una. Si lo necesita, contacte con su webmaster o los [partners de OVHcloud](/links/partner) a este respecto.

///

/// details | La dirección IP no es la de su alojamiento y no aparece en la lista de servidores Web Cloud

La dirección IP indicada en la zona no es la de su alojamiento y tampoco aparece en la [lista de servidores Web Cloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).

Contacte con su webmaster o los [partners de OVHcloud](/links/partner) a este respecto.

///

/// details | Su dominio utiliza otros servidores DNS de OVHcloud (ns?.ovh.net / dns?.ovh.net)

Encima de la zona DNS mostrada en su área de cliente de OVHcloud, un mensaje indica que su dominio utiliza otros servidores [DNS](/pages/web_cloud/domains/dns_zone_edit) y estos aparecen en forma de "ns **?** .ovh.net" o "dns **?** .ovh.net" (sustituya el "**?**" por el número de servidor DNS correspondiente):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifique los servidores DNS de su dominio para que se ajusten a los inscritos en los registros de tipo `NS` de la zona. Para ello, siga las indicaciones de nuestra guía "[Modificar los servidores DNS de un nombre de dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Su dominio utiliza servidores DNS externos (no OVHcloud)

Encima de la zona DNS mostrada en su área de cliente de OVHcloud, un mensaje indica que su dominio utiliza otros servidores [DNS](/pages/web_cloud/domains/dns_zone_edit) y estos no aparecen en el formato "ns **?** .ovh.net" o "dns **?** .ovh.net":

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

Contacte con su webmaster o los [partners de OVHcloud](/links/partner) al respecto.

///

/// details | Su nombre de dominio no aparece en su área de cliente de OVHcloud

Su nombre de dominio no aparece en la página [Dominios](/links/control-panel/web-domains) de su área de cliente de OVHcloud.

Significa que su dominio no es gestionado desde su [área de cliente de OVHcloud](/links/manager).

Compruebe que no esté gestionado desde cualquiera de sus [cuentas OVHcloud](/links/manager), si ha creado varias.

También puede determinar su agente registrador y los servidores DNS a los que está asociado a través de nuestra herramienta [WHOIS](/links/web/domains-whois).

Si es necesario, contacte con su webmaster o los [partners de OVHcloud](/links/partner) al respecto.

///

### 2 - Verificar el certificado SSL de su alojamiento <a name="etape2"></a>

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

<!-- CP-STEPS-START:check-ssl-certificate -->
> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Página de alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la pestaña `Información general`{.action}, consulte el apartado `Certificado SSL`:
>>
>> ![Certificado SSL en la pestaña de información general](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/no-ssl-certificate.png){.thumbnail}
<!-- CP-STEPS-END:check-ssl-certificate -->

#### Escenario 1: su alojamiento no contiene certificado SSL

Active un [certificado SSL](/links/web/hosting-options-ssl) en su alojamiento siguiendo las instrucciones de esta [guía](/pages/web_cloud/web_hosting/ssl_on_webhosting).

#### Escenario 2: el certificado SSL de su alojamiento no funciona

Si ha generado un **certificado SSL "Let's Encrypt"**, active la opción SSL de su alojamiento siguiendo las instrucciones de nuestra guía "[Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

Si tiene un **certificado SSL importado** y este no funciona, póngase en contacto con su proveedor.

Si ha contratado uno de los **certificados SSL de pago** de nuestro partner [SECTIGO](https://sectigo.com/), compruebe si ha recibido un mensaje de correo electrónico proponiéndole que lo renueve.
<br>Si es necesario, contacte con el [soporte de SECTIGO](https://sectigo.com/support) al respecto.

> [!primary]
>
> Para consultar todos los mensajes enviados por nuestros servicios, acceda a la página [Mis mensajes](/links/control-panel/account-messages).

## Más información <a name="go-further"></a>

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Habilitar HTTPS en un sitio web con certificado SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Solucionar el error «Sitio no instalado»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[¿Qué hacer en caso de error 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
