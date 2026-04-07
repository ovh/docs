---
title: "¿Qué hacer si mi sitio web no está accesible?"
excerpt: "Diagnóstico de las causas de la inaccesibilidad de su sitio web"
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

## Objetivo

En caso de que su sitio web no sea accesible, pueden aparecer varios errores en su navegador. Los siguientes ejemplos indican una configuración incorrecta de sus [servidores DNS](/pages/web_cloud/domains/dns_server_edit), su [zona DNS](/pages/web_cloud/domains/dns_zone_edit) o un dominio suspendido (si su sitio web no muestra ninguno de los mensajes de error descritos aquí, consulte [Más información](#go-further)):

|Navegador|Mensaje de error|
|-|---|
|Chrome:<br>"No se puede acceder a este sitio web"|![cantbereached_crome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox :<br>"Uf. Tenemos problemas para encontrar ese sitio."|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge :<br>"Vaya… no se puede obtener acceso a esta página"|![cantbereached_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari :<br>"Safari no puede conectarse al servidor"|![cantbereached_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**Cómo solucionar los errores del tipo "No se puede acceder a este sitio web"**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#go-further) de esta guía.
>

## Requisitos

- Tener la gestión de los servidores y de la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) del dominio.
- Estar actualizado en los [pagos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) y [renovaciones](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de los servicios asociados (dominio y alojamiento web).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### 1 - Comprobar la validez de su dominio

> [!warning]
>
> La renovación de sus productos es responsabilidad suya.<br>
> OVHcloud, como proveedor de hosting, tiene la obligación de eliminar definitivamente los servicios (dominios, alojamientos, correo, etc.) que no se hayan renovado a tiempo, así como todos los datos que contienen.
>
> Por lo tanto, le recomendamos que active la [renovación automática](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#procedimiento) en todas sus suscripciones de OVHcloud.
>

Para comprobar la validez de la suscripción relativa a su nombre de dominio, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Mis soluciones y servicios](/links/control-panel/billing-services).
>>
> **Etapa 2**
>>
>> Renueve su dominio si es necesario a través del botón `...`{.action} y luego `Renovar el servicio`{.action}.
>>
>> ![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Una vez completada la renovación, su sitio web estará disponible en un plazo máximo de 48 horas.

### 2 - Comprobar los servidores DNS

Para comprobar la validez de sus [servidores DNS](/pages/web_cloud/domains/dns_server_edit), acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.

**Haga clic en la situación correspondiente a su caso para ver el contenido.**

/// details | Situación 1 - No hay anomalías en los servidores DNS

Para comprobar los servidores DNS declarados, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Dominios](/links/control-panel/web-domains) y seleccione el dominio correspondiente.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Compruebe los servidores indicados en la pestaña `Servidores DNS`{.action}:
>>
>> ![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}
>>
> **Etapa 3**
>>
>> Si son idénticos a los objetivos de las entradas de tipo `NS` en la **Zona DNS**, vaya a la [parte 3](#step3):
>>
>> ![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

///

/// details | Situación 2 - Aparecerá un aviso por encima de la zona DNS

Una advertencia en la pestaña **Zona DNS** indica que los servidores DNS utilizados por su dominio no son los indicados en su zona. Existen dos posibles situaciones:

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS:", los servidores indicados son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net" (sustituya "**?**" por cualquier número):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifique los servidores DNS siguiendo las instrucciones de [esta guía](/pages/web_cloud/domains/dns_server_edit) para que sean idénticos a los objetivos de los registros de tipo `NS` en la **Zona DNS**.

Su sitio web estará disponible en un plazo máximo de 48 horas.

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS:", los servidores indicados no son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> En ese caso, contacte con el proveedor de hosting de su zona DNS, su webmaster o los [partners de OVHcloud](/links/partner) antes de realizar cualquier operación.
>
> Es posible que los servidores DNS utilizados por el dominio sean funcionales y que el problema de acceso al sitio web esté relacionado con un registro que no se encuentra o que no está en la [zona DNS](/pages/web_cloud/domains/dns_zone_general_information). Cualquier modificación de los servidores DNS en esta situación puede hacer que sus direcciones de correo u otras aplicaciones en línea no estén disponibles.

///

/// details | Situación 3 - No aparece ningún registro de tipo NS en la zona DNS

La **Zona DNS** de su dominio no contiene ningún registro de tipo `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga una copia de seguridad de la zona actual haciendo clic en el botón `Editar en modo de texto`{.action}:
>>
>> ![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}
>>
>> Copie y pegue el contenido de su **Zona DNS** en un documento de texto. Guarde el documento de forma local.
>>
> **Etapa 3**
>>
>> Haga clic en `Restaurar mi zona DNS`{.action} y seleccione `No, pero quiero restaurar la zona DNS.`{.action}.
>>
>> Indique los servidores de correo y de alojamiento y haga clic en `Aceptar`{.action}.
>>
>> ![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Su sitio web estará disponible en un plazo máximo de 24 horas.

///

### 3 - Comprobar la zona DNS <a name="step3"></a>

En esta etapa, accederá a la dirección IP de su alojamiento y la añadirá a su **Zona DNS**.

Si su sitio web no está alojado en la infraestructura de OVHcloud o si está gestionado por otro proveedor, contacte con el servicio de soporte correspondiente.

Si su sitio web está alojado en uno de nuestros [planes de hosting](/links/web/hosting), haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En el cuadro **Información general**, encontrará las menciones **IPv4** y **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copie la dirección IPv4 y/o IPv6 de su dominio.

A continuación, cópiela en la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) de su dominio modificando o creando uno o más registros de tipo `A`.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Su sitio web estará disponible en un plazo máximo de 24 horas.

## Más información <a name="go-further"></a>

[Solucionar el error «Sitio no instalado»](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[¿Qué hacer en caso de error 500 Internal Server Error?](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
