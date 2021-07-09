---
title: "¿Qué hacer en caso de error "Su conexión no es privada"?"
slug: error-sitio-no-seguridad
excerpt: "Responder en caso de que aparezca un mensaje de error relacionado con la seguridad de su sitio web"
section: Diagnóstico
---

**Última actualización: 06/07/2021**
 
## Objetivo <a name="objectif"></a>

En caso de que su sitio web no sea accesible, puede aparecer varios mensajes de error. Los siguientes ejemplos indican que su alojamiento web no contiene ningún [certificado SSL](../les-certificats-ssl-sur-les-hebergements-web/) (si su sitio web no muestra una de las anomalías descritas en esta guía, consulte el apartado "[Más](#aller-plus-loin)" de esta guía): 

|Navegador|Mensaje de error correspondiente|
\|-|---|
|Sur Chrome:<br>"Su conexión no es privada"|![notsecured_crome](images/notsecured_chrome.png){.thumbnail}\|
|En Firefox :<br>"Atención: riesgo probable de seguridad"|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}\|
|Sur Edge :<br>"Su conexión no es privada"|![notsecured_edge](images/notsecured_edge.png){.thumbnail}\|
|Sur Safari :<br>"Esta conexión no es privada"|![notsecured_safari](images/notsecured_safari.png){.thumbnail}\|

**Esta guía explica cómo solucionar los errores del tipo "Su conexión no es privada".**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado "[Más información](#aller-plus-loin)" de esta guía.
>

## Requisitos

- Tener la gestión de los servidores y de la [zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) del dominio.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).

## Procedimiento

Para resolver esta anomalía, deberá:

1. determinar el alojamiento al que está asociado el dominio para intervenir en el servidor correcto;
2. crear, activar o renovar un [certificado SSL](../les-certificats-ssl-sur-les-hebergements-web/) para su dominio en el alojamiento correspondiente.

### 1\. comprobar el alojamiento asociado a su dominio

#### Comprobar la dirección IP del alojamiento

Los mensajes de error mencionados [anteriormente](#objectif) no significan necesariamente que su sitio web esté alojado en uno de nuestros [planes de hosting Cloud](https://www.ovh.com/fr/hebergement-web/). Por lo tanto, debe verificar la dirección IP del servidor al que está asociado su [dominio](https://www.ovh.com/world/domains/).

Para consultar la dirección IP de su [alojamiento OVHcloud](https://www.ovh.com/fr/hebergement-web/), haga clic en el botón... situado en la esquina superior derecha del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) en el apartado `Web Cloud`{.action} ` `{.action} y seleccione el alojamiento correspondiente en el menú de la izquierda.

En la pestaña `Información general`{.action}, consulte la dirección IPV4 y/o IPV6 de su alojamiento.

![hosting-general-informacion](images/hosting-general-informations.png){.thumbnail}

#### Comprobar la dirección IP en la zona DNS

A continuación, compruebe que la dirección IP indicada en la [zona DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) corresponde a la de su [hosting Cloud](https://www.ovh.com/fr/hebergement-web/).

Haga clic en `Dominios`{.action} en la esquina superior izquierda del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) y seleccione el dominio de su sitio web.

Seleccione la pestaña `Zona DNS`{.action} y anote el destino del registro de tipo `A` para su dominio:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Realizar las acciones necesarias

|Escenario|Medidas que deberá adoptar|
|---|---|
|La dirección IP indicada en la zona DNS corresponde a la de su alojamiento compartido.|Avancemos al [paso 2](#etape2).|
|La dirección IP indicada en la zona no es la de su alojamiento y tampoco aparece en la [lista de servidores Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Contacte con su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/fr/) al respecto.|
|La dirección IP indicada en la zona no concierne a ningún alojamiento de su [cuenta de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), pero aparece en la [lista de servidores Web Cloud](../liste-des-adresses-ip-des-clusters-et-hebergements-web/).|Compruebe que no tiene un alojamiento con esta dirección IP en ninguna de sus otras [cuentas de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) si ha creado varias. Si lo necesita, contacte con el webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/fr/) al respecto.|
|Este aviso se muestra en la pestaña `Zona DNS`{.action}:<br><br>![avertissement_zonedns_pas_sur_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Es necesario modificar los servidores DNS del dominio para que se ajusten a los de los registros de tipo `NS` de la zona. Para ello, siga las indicaciones de [esta guía](../../domains/generalites-serveurs-dns/).|
|El dominio no aparece en el apartado `Dominios`{.action} de su ><br>La pestaña `Zona DNS`{.action} del dominio se muestra de la siguiente forma:<br><br>![zonedns_ndd_pas_sur_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Esto significa que el dominio no está gestionado desde el área de cliente de OVHcloud.<br><br>Determine su registrador a través de nuestra herramienta ><br>Encuentre y modifique la zona DNS en cuestión siguiendo [esta guía](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|
|Los `servidores DNS`{.action} no aparecen en forma de "ns **?** .ovh.net" o "dns **?** .ovh.net" (sustituya "**?** por el número de servidor DNS correspondiente).<br><br>Esto significa que la `zona DNS`{.action} activa del dominio no está en su ><br>![external-dns-servers](images/external-dns-servers.png){.thumbnail}|Contacte con su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/fr/) al respecto.|

### 2\. comprobar el certificado SSL de su alojamiento <a name="etape2"></a>

En la pestaña `Información general`{.action} de su alojamiento de OVHcloud, consulte el apartado `Certificado SSL`.

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Situación 1: su alojamiento no contiene certificado SSL

Active un [certificado SSL](https://www.ovh.com/fr/ssl/) en su alojamiento siguiendo las instrucciones de esta [guía](../les-certificats-ssl-sur-les-hebergements-web/).

#### Situación 2: el certificado SSL de su alojamiento no funciona

Si ha generado un **certificado SSL Let's Encrypt,** active la opción SSL en el `multisitio`{.action} de su alojamiento siguiendo las instrucciones de esta [guía](../les-certificats-ssl-sur-les-hebergements-web/#activer-un-certificat-ssl-sur-un-multisite).

Si tiene un **certificado SSL importado** y no funciona, póngase en contacto con su proveedor.

Si ha contratado uno de los **certificados SSL de pago** de nuestro partner >Si lo necesita, contacte con el [soporte de SECTIGO](https://sectigo.com/support){.external} al respecto.

> [!primary]
>
> Para consultar todos los mensajes enviados por nuestros servicios, haga clic en el botón superior derecho del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) y seleccione `Correo electrónico de servicio`{.action}.
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Más información <a name="aller-plus-loin"></a>

[Gestionar un certificado SSL en un alojamiento web](../les-certificats-ssl-sur-les-hebergements-web/)

[Habilitar HTTPS en un sitio web con certificado SSL](../passer-site-internet-https-ssl/)

[Resolver el error "Sitio no instalado"](../erreur-site-non-installe/)

[¿Cómo diagnosticar una página en blanco?](../comment-diagnostiquer-page-blanche/)

[¿Qué hacer en caso de error 500 Internal Server Error?](../erreur-500-internal-server-error/)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](../erreurs-frequentes-modules-en-1-clic/)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](https://partner.ovhcloud.com/fr/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/fr/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.