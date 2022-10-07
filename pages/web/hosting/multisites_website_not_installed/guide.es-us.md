---
title: 'Solucionar el error «Sitio no instalado»'
slug: web_hosting_error_sitio_no_instalado
excerpt: 'Cómo solucionar el error «Sitio no instalado»'
section: Diagnóstico
order: 05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 18/05/2021**

## Objetivo

Es posible ver aparecer en su navegador Internet la página de error **Sitio no instalado**, especialmente durante la primera instalación de su sitio web.

![site-not-installed](images/site-not-installed2021.png){.thumbnail}

**Cómo identificar y resolver la página de error "Sitio no instalado"**

> [!warning]
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado [Más información](#gofurther) de esta guía.

## Requisitos

- Tener un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/).
- Estar conectado al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).
- Disponer también de la gestión de la [Zona DNS](../../domains/web_hosting_como_editar_mi_zona_dns/) a la que está asociado el dominio.

## Procedimiento

La página **Sitio no instalado** se muestra en dos situaciones:

1. Su dominio no está presente en la parte [Multisitio](../configurar-un-multisitio-en-un-alojamiento-web/#1-acceder-a-la-gestion-del-multisitio) del alojamiento.

2. Su dominio no está conectado a su alojamiento a través de su `Zona DNS`{.action}.

Los siguientes pasos le permitirán corregir el error `Sitio no instalado` en estos dos casos.

### Etapa 1 : comprobar la parte multisitio del alojamiento

En el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), haga clic en `Web Cloud`{.action} y seleccione `Alojamientos`{.action}.

Seleccione el alojamiento correspondiente en la lista y abra la pestaña `Multisitio`{.action}.

|Escenario|Medidas que deberá adoptar|
|---|---|
|El nombre del sitio web aparecerá en la tabla.|Si acaba de añadir el nombre de su sitio web a la sección multisitio del alojamiento, espere unos 20 minutos y vuelva a refrescar la caché de su navegador. Si el mensaje "Sitio no instalado" sigue apareciendo, vaya al [paso 2](#checkdomainlink).|
|El dominio o subdominio asociados a su sitio web no aparecen en la tabla.|Añada su dominio al `Multisitio`{.action} siguiendo la sección dedicada de la guía [Alojar varios sitios web en un mismo hosting - añadir un dominio o subdominio](../configurar-un-multisitio-en-un-alojamiento-web/#2-anadir-un-dominio-o-subdominio).|
|El nombre de dominio se ha eliminado del multisitio sin que usted haga nada al respecto.|Es posible que su dominio o su zona DNS estén gestionados desde otra cuenta. Añada su dominio al multisitio siguiendo la sección dedicada de la guía [Alojar varios sitios web en un mismo hosting - añadir un dominio externo](../configurar-un-multisitio-en-un-alojamiento-web/#22-anadir-un-dominio-externo).|

### Etapa 2 : comprobar la zona DNS del dominio <a name="checkdomainlink"></a>

> [!primary]
>
> Esta operación tiene como objetivo comprobar que el dominio, a través de su `Zona DNS`{.action}, esté asociado al alojamiento de su sitio web.
> Para más información sobre el concepto de DNS, consulte nuestra guía [Editar una zona DNS de OVHcloud](../../domains/web_hosting_como_editar_mi_zona_dns/#entender-el-concepto-de-dns).

#### 2\.1 Identificar la dirección IP de un alojamiento de OVHcloud

Para acceder a la dirección IP, haga clic en `Alojamientos` en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y seleccione el alojamiento correspondiente.

![hosting-general-informacion](images/hosting-general-informations.png){.thumbnail}

#### 2\.2 Comprobar la dirección IP indicada en la zona DNS del dominio

Compruebe que la dirección IP del alojamiento aparece en la zona DNS activa del dominio.

Para ello, acceda a la sección `Dominios`{.action}, seleccione su dominio y abra la pestaña `Zona DNS`{.action}.

|Casos posibles|Medidas que deberá adoptar|
|---|---|
|En la zona DNS, su dominio está asociado a la dirección IP de su alojamiento mediante un registro de tipo A (para IPv4) o AAAA (para IPv6) :<br><br>![zonaDNS_IP2](images/zonedns_ip2.png){.thumbnail}|Eso significa que la configuración del dominio es correcta.<br><br>Después de las últimas modificaciones en sus DNS, su sitio web se mostrará en un plazo máximo de 48 horas.<br><br>También puede reiniciar los dispositivos (PC, smartphone, Internet box, etc.) y vaciar la caché de su navegador.|
|Su zona DNS no tiene ningún registro de tipo A o AAAA que asocie su dominio a la dirección IP de su alojamiento. O la entrada existente apunta a otra dirección IP.|Añada un nuevo registro de tipo A o AAAA o corrija la entrada existente siguiendo [esta guía](../../domains/web_hosting_como_editar_mi_zona_dns/).|
|El dominio no aparece en el apartado `Dominios`{.action} del área de cliente.<br><br>La pestaña `Zona DNS`{.action} del dominio se muestra de la siguiente forma :<br><br>![zonedns_ndd_pas_en_lec2](images/zonedns_ndd_pas_sur_lec2.png){.thumbnail}|Esto significa que el dominio no está gestionado desde el área de cliente de OVHcloud.<br><br>Determine su agente registrador a través de nuestra herramienta [WHOIS](https://www.ovh.es/soporte/herramientas/check_whois.pl) y los servidores DNS a los que está asociado.<br><br>Encuentre y modifique la zona DNS en cuestión siguiendo [esta guía](../configurar-un-multisitio-en-un-alojamiento-web/#22-anadir-un-dominio-externo).|
|Este aviso se muestra en la pestaña `Zona DNS`{.action} :<br><br>![aviso_zonedns_pas_en_srv_dns](images/avertissement_zonedns_pas_sur_srv_dns.png){.thumbnail}|Por lo tanto, deberá modificar los servidores DNS de su dominio en consecuencia siguiendo [esta guía](../../domains/web_hosting_informacion_general_sobre_los_servidores_dns/).|

## Más información <a name="gofurther"></a>

[Lista de direcciones IP de los clusters y alojamientos web](../lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/)

Si necesita ayuda sobre el uso y la configuración de sus soluciones de OVHcloud, consulte nuestras [soluciones de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
