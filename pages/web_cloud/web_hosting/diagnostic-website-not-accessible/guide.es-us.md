---
title: "¿Qué hacer si mi sitio web no está accesible?"
excerpt: "Diagnóstico de las causas de la inaccesibilidad de su sitio web"
updated: 2022-08-02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

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
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Estar actualizado en los [pagos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) y [renovaciones](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de los servicios asociados (dominio y alojamiento web).

## Procedimiento

### Etapa 1: comprobar la validez de su dominio

> [!warning]
>
> La renovación de sus productos es responsabilidad suya.<br>
> OVHcloud, como proveedor de hosting, tiene la obligación de eliminar definitivamente los servicios (dominios, alojamientos, correo, etc.) que no se hayan renovado a tiempo, así como todos los datos que contienen.
>
> Por lo tanto, le recomendamos que active la [renovación automática](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#procedimiento) en todas sus suscripciones de OVHcloud.
>

Para comprobar la validez de la suscripción relativa a su nombre de dominio, haga clic en su nombre en la esquina superior derecha del [área de cliente de OVHcloud](/links/manager) y seleccione `Productos y servicios`{.action}.

![control-panel](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-product-and-services.png){.thumbnail}|

Renueve su dominio si es necesario a través del botón `...`{.action} a la derecha de la pantalla y luego `Renovar el servicio`{.action}.

![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}

Una vez completada la renovación del plan, su sitio web estará disponible en un plazo máximo de 48 horas.

### Etapa 2: comprobar los servidores DNS

Para comprobar la validez de sus [servidores DNS](/pages/web_cloud/domains/dns_server_edit), haga clic en [área de cliente de OVHcloud](/links/manager) y seleccione el dominio en la parte del `Dominios`{.action}.

#### Situación 1: no hay anomalías en los servidores DNS

Compruebe los servidores indicados en la pestaña `Servidores DNS`{.action}:

![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}

Si son idénticos a los objetivos de las entradas de tipo `NS` en la `Zona DNS`{.action}, vaya al [Etapa 3](#step3):

![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

#### Situación 2: aparecerá un aviso por encima de la zona DNS

Una advertencia en la pestaña `Zona DNS`{.action} indica que los servidores DNS utilizados por su dominio no son los indicados en su zona. Existen dos posibles situaciones:

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS:", los servidores indicados son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net" (sustituya "**?**" por cualquier número):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Modifique los servidores DNS siguiendo las instrucciones de [esta guía](/pages/web_cloud/domains/dns_server_edit) para que sean idénticos a los objetivos de los registros de tipo `NS` en la `Zona DNS`{.action}.

Su sitio web estará disponible en un plazo máximo de 48 horas.

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS:", los servidores indicados no son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net".

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> En ese caso, contacte con el proveedor de hosting de su zona DNS, su webmaster o los [partners de OVHcloud](/links/partner) antes de realizar cualquier operación.
>
> Es posible que los servidores DNS utilizados por el dominio sean funcionales y que el problema de acceso al sitio web esté relacionado con un registro que no se encuentra o que no está en la [zona DNS](/pages/web_cloud/domains/dns_zone_general_information). Cualquier modificación de los servidores DNS en esta situación puede hacer que sus direcciones de correo u otras aplicaciones en línea no estén disponibles.
>

#### Situación 3: no aparece ningún registro de tipo NS en la zona DNS

La `Zona DNS`{.action} de su dominio no contiene ningún registro de tipo `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Haga una copia de seguridad del área actual haciendo clic en el botón `Editar en modo de texto`{.action} situado a la derecha de su pantalla:

![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}

Copie y pegue el contenido de su `Zona DNS`{.action} en un documento de texto. Guarde el documento de forma local.

A continuación, haga clic en `Restaurar mi zona DNS`{.action} y seleccione `No, pero quiero restaurar la zona DNS.`{.action}. Indique los servidores de correo y de alojamiento y haga clic en `Aceptar`{.action}.

![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}

Su sitio web estará disponible en un plazo máximo de 24 horas.

### Etapa 3: comprobar la zona DNS <a name="step3"></a>

En esta etapa, accederá a la dirección IP de su alojamiento y la añadirá a su `Zona DNS`{.action}.

Si su sitio web no está alojado en la infraestructura de OVHcloud o si está gestionado por otro proveedor, contacte con el servicio de soporte correspondiente.

Si su sitio web está alojado en uno de nuestros [planes de hosting Cloud](/links/web/hosting), abra la pestaña `Alojamientos`{.action} y seleccione el alojamiento correspondiente.

En la pestaña `Información general`{.action}, copie la dirección IPV4 y/o IPV6 de su dominio.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

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