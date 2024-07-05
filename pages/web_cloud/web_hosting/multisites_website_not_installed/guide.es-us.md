---
title: 'Solucionar el error "Sitio no instalado"'
excerpt: 'Descubra cómo solucionar el error "Sitio no instalado"'
updated: 2023-11-24
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Es posible que aparezca en su navegador de internet la página de error **Sitio no instalado**, especialmente durante la primera instalación de su sitio web.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Descubra cómo identificar y resolver la página de error "Sitio no instalado"**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Tener un [plan de hosting](/links/web/hosting)
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)
- Disponer también de la gestión de la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) a la que esté asociado el dominio.

## Procedimiento

La página **Sitio no instalado** aparece por dos motivos:

- 1: [Su dominio o subdominio no está correctamente declarado en su alojamiento web](#check-multisites).

- 2: [Su dominio no apunta a la dirección IP de su plan de hosting.](#check-dns-domain)

A continuación se explica cómo corregir el error `Sitio no instalado` en ambos casos.

### Etapa 1 - Compruebe la declaración de su dominio o subdominio en su alojamiento web <a name="check-multisites"></a>

En su [área de cliente de OVHcloud](/links/manager), acceda a la sección `Web Cloud`{.action} de la parte superior de la página y, en la columna izquierda, haga clic en `Alojamientos`{.action}.

Seleccione el alojamiento web correspondiente en la lista y abra la pestaña de `Multisitio`{.action}.

|Escenario|Acción a realizar|
|---|---|
|El dominio o subdominio asociado a su sitio web aparece en la tabla "multisitio".|Si acaba de añadir el dominio o subdominio a la sección `Multisitio`{.action} de su alojamiento web, espere unos **veinte minutos** y actualice la caché de su navegador web. Si sigue viendo el mensaje "Sitio no instalado", vaya al [etapa 2](#check-dns-domain).|
|El nombre de dominio o subdominio asociado a su sitio web no aparece en la tabla "multisitio".|Añada su nombre de dominio o subdominio a la sección `Multisitio`{.action} siguiendo la sección dedicada de la guía "[Alojar varios sitios web en un mismo hosting: añadir un dominio o subdominio](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
|El dominio o subdominio se ha eliminado de la tabla "multisitio" sin que usted realice ninguna acción.|Es posible que su dominio o su zona DNS estén administrados desde otra cuenta. Añada su nombre de dominio o subdominio a la sección `Multisitio`{.action} siguiendo la sección dedicada de la guía "[Alojar varios sitios web en un mismo hosting - añadir un dominio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|

### Etapa 2 - Comprobar el direccionamiento IP en la zona DNS activa de su dominio <a name="check-dns-domain"></a>

Este paso consiste en comprobar que el dominio o subdominio apuntan hacia la dirección IP del alojamiento web desde la zona DNS activa.

> [!primary]
>
> Para más información sobre la noción de DNS, consulte las siguientes páginas:
> 
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
> - [Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)
> - [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)
>

#### 2\.1 Identificar la dirección IP de su alojamiento web de OVHcloud

Para conocer la dirección IP de su alojamiento web, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action} de la parte superior de la página. En la columna izquierda, haga clic en la pestaña `Alojamientos`{.action} y seleccione el alojamiento correspondiente.

La dirección `IPv4` se encuentra en el recuadro `Información general`{.action}.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

Para más información, consulte la dirección IP asociada a su alojamiento web en nuestra guía "[Lista de direcciones IP asociadas a los alojamientos web de OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Comprobar la dirección IP registrada en la zona DNS activa del dominio

A continuación, compruebe que la dirección IP del alojamiento web aparece en la zona DNS activa del dominio.

> [!primary]
>
> Antes de continuar, si se produce un cambio en la **zona DNS** activa de un dominio, puede ser necesario un plazo de propagación de **4 a 24 horas** para actualizar la información de la red DNS.
>
> Si modifica directamente los **servidores DNS** asociados a su dominio, este plazo puede llegar hasta **48 horas** como máximo.
>

Para ello, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action} de la parte superior de la página. Acceda a la sección `Dominios`{.action} de la columna izquierda, seleccione su dominio y acceda a la pestaña `Zona DNS`{.action}.

Aparecerá una tabla con distintos registros DNS.

|Escenarios posibles|Acción a realizar|
|---|---|
|En la zona DNS activa, su dominio o subdominio apunta a la dirección IP de su alojamiento web con un registro de tipo A (para una IPv4) o AAAA (para una IPv6).<br><br>![zonaDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Esto indica que la configuración de su dominio es correcta.<br><br> Espere el tiempo de propagación DNS si el cambio es reciente.<br><br> No olvide reiniciar sus dispositivos (PC, smartphone, box, etc.) y vaciar la caché de su navegador. La razón es que la antigua configuración del dominio puede almacenarse en caché, lo que puede ralentizar la visualización de la actualización.|
|La zona DNS activa no tiene registros de tipo A o AAAA que vinculen el dominio o subdominio a la dirección IP de su alojamiento web. O bien, el registro existente apunta a otra dirección IP.|Agregue el nuevo registro de tipo A o AAAA o corrija el registro existente siguiendo [esta guía](/pages/web_cloud/domains/dns_zone_edit).|
|Su dominio no aparece en la sección `Dominios`{.action} del área de cliente de OVHcloud.<br><br>O bien, la pestaña `Zona DNS`{.action} de su nombre de dominio se muestra de la siguiente manera:<br><br>![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}|Esto significa que su nombre de dominio no se gestiona desde el área de cliente de OVHcloud.<br><br><br>Determine su "registro" a través de nuestra herramienta [WHOIS](/links/web/domains-whois) y los servidores DNS a los que está asociado. <br><br>Encuentre y modifique la zona DNS en cuestión siguiendo la sección dedicada de la guía "[Alojar varios sitios web en un mismo hosting - añadir un dominio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite)".|
|Esta advertencia aparece en la pestaña `Zona DNS`{.action}:<br><br>![advertencia_zonedns_pas_sur_srv_dns](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Por lo tanto, deberá modificar los servidores DNS de su dominio siguiendo nuestra guía "[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)."|

## Más información <a name="go-further"></a>

[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).