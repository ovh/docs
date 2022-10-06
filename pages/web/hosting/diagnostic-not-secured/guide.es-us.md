---
title: "¿Qué hacer en caso de error « La conexión no es privada »?"
excerpt: "Responder en caso de que aparezca un mensaje de error relacionado con la seguridad de su sitio web"
slug: error-sitio-no-seguridad
section: Diagnóstico
order: 03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 08/07/2021**
 
## Objetivo <a name="objective"></a>

En caso de que su sitio web no sea accesible, puede aparecer varios mensajes de error. Los siguientes ejemplos indican que su alojamiento web no contiene [certificado SSL](../gestionar-un-certificado-ssl-en-un-alojamiento-web/) (si su sitio web no muestra una de las anomalías descritas en esta guía, consulte la sección [« Más información »](#gofurther)): 

|Navegador|Mensaje de error correspondiente|
|-|---|
|Chrome :<br>« La conexión no es privada »|![notsecured_chrome](images/notsecured_chrome.png){.thumbnail}|
|Firefox :<br>« Advertencia: riesgo potencial de seguridad a continuación »|![notsecured_firefox](images/notsecured_firefox.png){.thumbnail}|
|Edge :<br>« Su conexión no es privada »|![notsecured_edge](images/notsecured_edge.png){.thumbnail}|
|Safari :<br>« Esta conexión no es privada »|![notsecured_safari](images/notsecured_safari.png){.thumbnail}|

**Descubra cómo resolver los errores del tipo « Su conexión no es privada ».**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [« Más información »](#gofurther) de esta guía.
>

## Requisitos

- Gestionar los servidores y la [zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) de su nombre de dominio
- Estar conectado a su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we)

## Procedimiento

Para resolver esta anomalía, deberá:

1. determinar el alojamiento al que está asociado el dominio para intervenir en el servidor correcto;
2. crear, activar o renovar un [certificado SSL](../gestionar-un-certificado-ssl-en-un-alojamiento-web/) para su nombre de dominio en el alojamiento correspondiente.

### Etapa 1: comprobar el alojamiento asociado a su dominio

#### Comprobar la dirección IP del alojamiento

Los mensajes de error mencionados [anteriormente](#objective) no significan necesariamente que su sitio web esté alojado en uno de nuestros [planes Web Cloud](https://www.ovhcloud.com/es/web-hosting/). Por lo tanto, debe comprobar la dirección IP del servidor al que está asociado su [dominio](https://www.ovhcloud.com/es/domains/).

Para encontrar la dirección IP de su [hosting OVHcloud](https://www.ovhcloud.com/es/web-hosting/), haga clic en el botón `Web Cloud`{.action} situado en la esquina superior derecha de su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) y seleccione el alojamiento correspondiente.

En la pestaña `Información general`{.action}, indique la dirección IPV4 y/o IPV6 de su alojamiento.

![hosting-general-informations](images/hosting-general-informations.png){.thumbnail}

#### Verificar la dirección IP en la zona DNS

Compruebe que la dirección IP indicada en [zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) corresponde a la de su [Web Cloud hosting](https://www.ovhcloud.com/es/web-hosting/).

Haga clic en `Dominios`{.action} de su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) y seleccione el dominio de su sitio web.

Seleccione la pestaña `Zona DNS`{.action} y anote el destino del registro de tipo `A` para su dominio:

![zone-dns-ip](images/zone-dns-ip.png){.thumbnail}

#### Realizar las acciones necesarias

|Escenario|Acción a emprender|
|---|---|
|La dirección IP indicada en la [Zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/) corresponde a la de su alojamiento compartido.|pase a el [etapa 2](#step2).|
|La dirección IP indicada en la zona no concierne ningún alojamiento de su [cuenta OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), pero aparece en la [lista de servidores Web Cloud](../lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/).|Compruebe que no tiene un alojamiento con esta dirección IP en cualquiera de sus otras [cuentas OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) si ha creado más de uno. Si lo necesita, contacte con su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/es/) a este respecto.|
|La dirección IP indicada en la zona no es la de su alojamiento y tampoco aparece en la [lista de servidores Web Cloud](../lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/).|Contacte su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/es/) a este respecto.|
|En la pestaña `Zona DNS`{.action}, un mensaje indica que su dominio utiliza otros servidores [DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) y estos aparecen en forma de « ns **?** .ovh.net » o « dns **?** .ovh.net » (sustituya el « **?** » por el número de servidor DNS correspondiente):<br><br>![warning_other_ovh_dns_srv](images/warning_other_ovh_dns_srv.png){.thumbnail}|Modifique los servidores DNS de su dominio para que se ajusten a los inscritos en los registros de tipo `NS` de la zona. Para ello, siga las indicaciones de [esta guía](../../domains/web_hosting_informacion_general_sobre_los_servidores_dns/#1-acceder-a-la-zona-de-gestion-de-los-servidores-dns-del-dominio)|
|En la pestaña `Zona DNS`{.action}, un mensaje indica que su dominio utiliza otros servidores [DNS](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns) y estos no aparecen en el formato « ns **?** .ovh.net » o « dns **?** .ovh.net »:<br><br>![warning_external_dns_srv](images/warning_external_dns_srv.png){.thumbnail}|Contacte con su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/es/) al respecto.|
|Su nombre de dominio no aparece en la sección `Dominios`{.action} de su [área de cliente OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).<br><br>O la pestaña `Zona DNS`{.action} de su dominio se muestra de la siguiente manera:<br><br>![zonedns_ndd_pas_en_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Significa que su dominio no es gestionado desde su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we).<br><br>Compruebe que no esté gestionado desde cualquiera de sus [cuentas OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we), si ha creado varias.<br><br>También puede determinar su agente registrador y los servidores DNS a los que está asociado a través de nuestro herramienta [WHOIS](https://www.ovh.com/fr/support/outils/check_whois.pl).<br><br>Si es necesario, contacte con su webmaster o los [partners de OVHcloud](https://partner.ovhcloud.com/es/) al respecto.|

### Etapa 2: verificar el certificado SSL de su alojamiento <a name="step2"></a>

En la pestaña `Información general`{.action} de su alojamiento OVHcloud, consulte el apartado `Certificado SSL`.

![ssl-certificate-in-general-tab](images/ssl-certificate-in-general-tab.png){.thumbnail}

#### Escenario 1: su alojamiento no contiene certificado SSL

Active un [certificado SSL](https://www.ovhcloud.com/es/web-hosting/options/ssl/) en su alojamiento siguiendo las instrucciones de este [guía](../gestionar-un-certificado-ssl-en-un-alojamiento-web/).

#### Escenario 2: el certificado SSL de su alojamiento no funciona

Si ha generado un **certificado SSL « Let's Encrypt »**, active la opción SSL en el `Multisitio`{.action} de su alojamiento siguiendo las instrucciones de este [guía](../gestionar-un-certificado-ssl-en-un-alojamiento-web/#activar-un-certificado-ssl-en-un-multisitio).

Si tiene un **certificado SSL importado** y este no funciona, póngase en contacto con su proveedor.

Si ha contratado uno de los **certificados SSL de pago** de nuestro partner [SECTIGO](https://sectigo.com/){.external}, compruebe si ha recibido un mensaje de correo electrónico proponiéndole que lo renueve.
<br>Si es necesario, contacte con el [soporte de SECTIGO](https://sectigo.com/support){.external} al respecto.

> [!primary]
>
> Para consultar todos los mensajes enviados por nuestros servicios, haga clic en el botón superior derecha de su [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=we) y seleccione `Emails de servicio`{.action}.
>
>![right-menu-email-button](images/right-menu-email-button.png){.thumbnail}
>

## Más información <a name="gofurther"></a>

[Gestionar un certificado SSL en un alojamiento web](../gestionar-un-certificado-ssl-en-un-alojamiento-web/)

[Habilitar HTTPS en un sitio web con certificado SSL](../activar-https-en-un-sitio-web-con-ssl/)

[Solucionar el error «Sitio no instalado»](../web_hosting_error_sitio_no_instalado/)

[¿Qué hacer en caso de error 500 Internal Server Error?](../error-500-internal-server-error/)

[Resolver los errores más frecuentes asociados a los módulos en 1 clic](../errores-frecuentes-modulos-en-1-clic/)
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.