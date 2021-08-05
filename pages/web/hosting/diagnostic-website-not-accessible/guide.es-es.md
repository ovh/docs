---
title: "¿Qué hacer si mi sitio web no está accesible?"
slug: error-servidor-inaccesible
excerpt: "Diagnóstico de las causas de la inaccesibilidad de su sitio web"
section: "Diagnóstico"
Order: 1
---

**Última actualización: 16/07/2021**

## Objetivo

En caso de que su sitio web no sea accesible, puede haber varios errores en su navegador. Los siguientes ejemplos indican una configuración errónea de sus [DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns) o un dominio suspendido (si su sitio no muestra uno de los mensajes de error descritos aquí, consulte la sección [Más](#aller-plus-loin)):

|Navegador|Mensaje de error|
|-|---|
|Chrome:<br>"Este sitio no está accesible"|![cantbereached_crome](images/cantbereached_chrome.png){.thumbnail}\|
|Firefox :<br>"Eh, no podemos encontrar este sitio. "|![cantbereached_firefox](images/cantbereached_firefox.png){.thumbnail}\|
|Edge :<br>"Lo sentimos, no se ha podido acceder a esta página"|![cantbereached_edge](images/cantbereached_edge.png){.thumbnail}\|
|Safari :<br>"Safari no consigue encontrar el servidor"|![cantbereached_safari](images/cantbereached_safari.png){.thumbnail}\|

**Cómo solucionar los errores del tipo "Este sitio no es accesible"**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#aller-plus-loin) de esta guía.
>

## Requisitos

- Tener un [dominio.](https://www.ovh.com/fr/domaines/)
- Tener la gestión de los servidores y de la [zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) del dominio.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Procedimiento

### 1\. comprobar la validez de su dominio

> [!warning]
>
> La renovación de sus productos es responsabilidad suya.<br>
> OVHcloud, como proveedor de hosting, tiene la obligación de eliminar definitivamente los servicios (dominios, alojamientos, correo, etc.) que no se hayan renovado a tiempo, así como todos los datos que contienen.
>
> Por lo tanto, le recomendamos que active la [renovación automática](../../billing/renouvellement-automatique-ovh/#en-pratique) en todas sus suscripciones de OVHcloud.
>

Para comprobar la validez de la suscripción relativa a su nombre de dominio, haga clic en su nombre en la esquina superior derecha del área de cliente y seleccione `Productos y servicios`{.action}.

![control-panel](images/control-panel.png){.thumbnail}\|

Renueve su dominio si es necesario a través del botón `..`{.action} a la derecha de la pantalla y luego `Renovar el servicio`{.action}.

![renew-service-button](images/renew-service-button.png){.thumbnail}

Espere hasta un máximo de 48 horas (plazo de propagación tras los cambios asociados a los [servidores DNS](../../domains/generalites-serveurs-dns/#comprendre-la-notion-de-dns)).

### 2\. comprobar los servidores DNS

Para comprobar la validez de sus [servidores DNS](../../domains/generalites-serveurs-dns/), haga clic en [Dominios](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) y seleccione el dominio en la parte superior izquierda del `área de cliente de OVHcloud`{.action}.

#### Situación 1: no hay anomalías en los servidores DNS

Compruebe los servidores indicados en la pestaña `Servidores DNS`{.action}:

![srv-dns-ok2](images/srv-dns-ok2.png){.thumbnail}

Si son idénticos a los objetivos de las entradas de tipo `NS` en la `zona DNS`{.action}, vaya [al paso 3](#etape3):

![srv-dns-ok](images/srv-dns-ok.png){.thumbnail}

#### Situación 2: aparecerá un aviso por encima de la zona DNS

Una advertencia en la pestaña `Zona DNS`{.action} indica que los servidores DNS utilizados por su dominio no son los indicados en su zona. Existen dos posibles situaciones:

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS: ", los servidores indicados son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net" (sustituya "**?** " por cualquier número):

![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}

Modifique los servidores DNS siguiendo las instrucciones de [esta guía](../../domains/generalites-serveurs-dns/#modifier-les-serveurs-dns) para que sean idénticos a los objetivos de los registros de tipo `NS` en la `zona DNS`{.action}.

Espere hasta un máximo de 48 horas (plazo de propagación de los cambios de `servidores DNS`{.action}).

- Bajo la frase "Actualmente utiliza los siguientes servidores DNS: ", los servidores indicados no son del tipo "ns **?** .ovh.net" y "dns **?** .ovh.net".

![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}

> [!warning]
>
> En ese caso, contacte con el webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/fr/) antes de realizar cualquier operación.
>
> Es posible que los servidores DNS utilizados por el dominio sean funcionales y que el problema de acceso al sitio web esté relacionado con un registro que no se encuentra o que no está en la [zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns). Cualquier modificación de los servidores DNS en esta situación puede hacer que sus direcciones de correo u otras aplicaciones en línea no estén disponibles.
>

#### Situación 3: no aparece ningún registro de tipo NS en la zona DNS.

La `zona DNS`{.action} de su dominio no contiene ningún registro de tipo `NS` :

![srv_dns_missing](images/srv_dns_missing.png){.thumbnail}

Haga una copia de seguridad del área actual haciendo clic en el botón `Cambiar al modo de texto`{.action} situado a la derecha de su pantalla:

![change_DNS_zone_change_text_format](images/change_DNS_zone_change_text_format.png){.thumbnail}

Copie y pegue el contenido de su `zona DNS`{.action} en un documento de texto. Guarde el documento de forma local.

A continuación, haga clic en `Restaurar mi zona DNS`{.action} y seleccione `No. Sin embargo, quiero restaurar la zona DNS`{.action}. Indique los servidores de correo y de alojamiento y haga clic en `Aceptar`{.action}.

![change_DNS_zone_reset](images/change_DNS_zone_reset.png){.thumbnail}

Espere hasta 24 horas (plazo de propagación de los cambios en la `zona DNS`{.action}).

### 3\. comprobar la zona DNS <a name="etape3"></a>

En esta etapa, accederá a la dirección IP de su alojamiento y la añadirá a su `zona DNS`{.action}.

Si su sitio web está alojado fuera de la infraestructura de OVHcloud o por un tercero, póngase en contacto con el proveedor o proveedor de alojamiento correspondiente.

Si su sitio web está alojado en uno de nuestros [planes de hosting Cloud](https://www.ovh.com/fr/hebergement-web/), abra la pestaña `Alojamientos`{.action} a la izquierda de su pantalla y seleccione el alojamiento correspondiente.

En la pestaña `Información general`{.action}, copie la dirección IPV4 y/o IPV6 de su dominio.

![ipv4-6](images/ipv4-6.png){.thumbnail}

A continuación, cópiela en la [zona DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1) de su dominio modificando o creando uno o más registros de tipo `A`.

![ipv4-DNSzone](images/ipv4-DNSzone.png){.thumbnail}

Espere hasta un máximo de 24 horas (plazo de propagación de los cambios en la `zona DNS`{.action}).

## Más información <a name="aller-plus-loin"></a>

[Resolver el error "Sitio no instalado"](../erreur-site-non-installe/)

[¿Cómo diagnosticar una página en blanco?](../comment-diagnostiquer-page-blanche/)

[¿Qué hacer en caso de error 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](../erreurs-frequentes-modules-en-1-clic/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/fr/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/fr/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.
