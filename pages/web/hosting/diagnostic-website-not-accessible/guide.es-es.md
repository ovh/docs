---
title: "¿Qué hacer si mi sitio web no está accesible?"
slug: error-servidor-inaccesible
excerpt: "Diagnóstico de las causas de la inaccesibilidad de su sitio web"
section: "Diagnóstico"
Order: 1
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 02/08/2022**

## Objetivo

En caso de que su sitio web no sea accesible, puede haber varios errores en su navegador. Los siguientes ejemplos indican una configuración errónea de sus [DNS](../../domains/web_hosting_informacion_general_sobre_los_servidores_dns/#entender-el-concepto-de-dns) o un dominio suspendido (si su sitio no muestra uno de los mensajes de error descritos aquí, consulte la sección [Más información](#gofurther)):

|Navegador|Mensaje de error|
|-|---|
|Chrome:<br>"No se puede acceder a este sitio web"|![cantbereached_crome](images/cantbereached_chrome.png){.thumbnail}|
|Firefox :<br>"Uf. Tenemos problemas para encontrar ese sitio."|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}|
|Edge :<br>"Vaya… no se puede obtener acceso a esta página"|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}|
|Safari :<br>"Safari no puede conectarse al servidor"|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}|

**Cómo solucionar los errores del tipo "No se puede acceder a este sitio web"**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.
>

## Requisitos

- Tener la gestión de los servidores y de la [zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) del dominio.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Estar actualizado en los [pagos](https://docs.ovh.com/es/billing/gestionar-facturas-ovh/#pay-bills) y [renovaciones](https://docs.ovh.com/es/billing/renovacion-automatica-ovh/#renewal-management) de los servicios asociados (dominio y alojamiento web).

## Procedimiento

### Etapa 1: comprobar la validez de su dominio

> [!warning]
>
> La renovación de sus productos es responsabilidad suya.<br>
> OVHcloud, como proveedor de hosting, tiene la obligación de eliminar definitivamente los servicios (dominios, alojamientos, correo, etc.) que no se hayan renovado a tiempo, así como todos los datos que contienen.
>
> Por lo tanto, le recomendamos que active la [renovación automática](../../billing/renovacion-automatica-ovh/#procedimiento) en todas sus suscripciones de OVHcloud.
>

Para comprobar la validez de la suscripción relativa a su nombre de dominio, haga clic en su nombre en la esquina superior derecha del área de cliente y seleccione `Productos y servicios`{.action}.

![control-panel](images/control-panel.png){.thumbnail}|

Renueve su dominio si es necesario a través del botón `...`{.action} a la derecha de la pantalla y luego `Renovar el servicio`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Una vez completada la renovación del plan, su sitio web estará disponible en un plazo máximo de 48 horas.

### Etapa 2: comprobar los servidores DNS

Para comprobar la validez de sus [servidores DNS](../../domains/web_hosting_informacion_general_sobre_los_servidores_dns/), haga clic en [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y seleccione el dominio del `Dominios`{.action}.

#### Situación 1: no hay anomalías en los servidores DNS

Compruebe los servidores indicados en la pestaña `Servidores DNS`{.action}:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

Si son idénticos a los objetivos de las entradas de tipo `NS` en la `Zona DNS`{.action}, vaya al [Etapa 3](#step3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Situación 2: aparecerá un aviso por encima de la zona DNS

Una advertencia en la pestaña `Zona DNS`{.action} indica que los servidores DNS utilizados por su dominio no son los indicados en su zona. Existen dos posibles situaciones:

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS:", los servidores indicados son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net" (sustituya "**?**" por cualquier número):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Modifique los servidores DNS siguiendo las instrucciones de [esta guía](../../domains/web_hosting_informacion_general_sobre_los_servidores_dns/#cambiar-los-servidores-dns) para que sean idénticos a los objetivos de los registros de tipo `NS` en la `Zona DNS`{.action}.

Su sitio web estará disponible en un plazo máximo de 48 horas.

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS:", los servidores indicados no son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net".

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> En ese caso, contacte con el proveedor de hosting de su zona DNS, su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/) antes de realizar cualquier operación.
>
> Es posible que los servidores DNS utilizados por el dominio sean funcionales y que el problema de acceso al sitio web esté relacionado con un registro que no se encuentra o que no está en la [zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns). Cualquier modificación de los servidores DNS en esta situación puede hacer que sus direcciones de correo u otras aplicaciones en línea no estén disponibles.
>

#### Situación 3: no aparece ningún registro de tipo NS en la zona DNS

La `Zona DNS`{.action} de su dominio no contiene ningún registro de tipo `NS`:

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Haga una copia de seguridad del área actual haciendo clic en el botón `Editar en modo de texto`{.action} situado a la derecha de su pantalla:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Copie y pegue el contenido de su `Zona DNS`{.action} en un documento de texto. Guarde el documento de forma local.

A continuación, haga clic en `Restaurar mi zona DNS`{.action} y seleccione `No, pero quiero restaurar la zona DNS.`{.action}. Indique los servidores de correo y de alojamiento y haga clic en `Aceptar`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Su sitio web estará disponible en un plazo máximo de 24 horas.

### Etapa 3: comprobar la zona DNS <a name="step3"></a>

En esta etapa, accederá a la dirección IP de su alojamiento y la añadirá a su `Zona DNS`{.action}.

Si su sitio web no está alojado en la infraestructura de OVHcloud o si está gestionado por otro proveedor, contacte con el servicio de soporte correspondiente.

Si su sitio web está alojado en uno de nuestros [planes de hosting Cloud](https://www.ovhcloud.com/es-es/web-hosting/), abra la pestaña `Alojamientos`{.action} y seleccione el alojamiento correspondiente.

En la pestaña `Información general`{.action}, copie la dirección IPV4 y/o IPV6 de su dominio.

![ipv4-6](images/ipv4-6.png){.thumbnail}

A continuación, cópiela en la [zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#editar-la-zona-dns-de-ovhcloud-de-su-dominio_1) de su dominio modificando o creando uno o más registros de tipo `A`.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Su sitio web estará disponible en un plazo máximo de 24 horas.

## Más información <a name="gofurther"></a>

[Solucionar el error «Sitio no instalado»](../web_hosting_error_sitio_no_instalado/)

[¿Qué hacer en caso de error 500 Internal Server Error?](../error-500-internal-server-error/)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](../errores-frecuentes-modulos-en-1-clic/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
