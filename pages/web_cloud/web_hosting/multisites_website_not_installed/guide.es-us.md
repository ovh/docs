---
title: 'Solucionar el error "Sitio no instalado"'
excerpt: 'Descubra cómo solucionar el error "Sitio no instalado"'
updated: 2025-08-25
---

> [!success]
> ¡Participe en nuestra encuesta y ayúdenos a mejorar esta guía!<br>
> No dude en compartir su opinión y sus ideas con nosotros.<br>
> [Ir a la encuesta.](https://s.elq.fr/ovhext/B4nKjrd)

## Objetivo

Es posible que aparezca en su navegador de internet la página de error "**Sitio no instalado**", especialmente durante la primera instalación de su sitio web.

![website not installed](/pages/assets/screens/other/browsers/errors/site-not-installed.png){.thumbnail}

**Descubra cómo identificar y resolver la página de error "Sitio no instalado"**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Tener un [plan de hosting](/links/web/hosting)
- Disponer también de la gestión de la [zona DNS](/pages/web_cloud/domains/dns_zone_edit) a la que esté asociado el dominio.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)

## Procedimiento

La página "**Sitio no instalado**" aparece por dos motivos:

- 1: [Su dominio o subdominio no está correctamente declarado en su alojamiento web](#check-multisites).
- 2: [Su dominio no apunta a la dirección IP de su plan de hosting.](#check-dns-domain)

A continuación se explica cómo corregir el error `Sitio no instalado` en ambos casos.

### 1 - Compruebe la declaración de su dominio o subdominio en su alojamiento web <a name="check-multisites"></a>

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Multisitio`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecerá una tabla en la nueva página.
>>
>> ![Multisite interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}
>>
>> |Escenarios|Acciones a emprender|
>> |---|---|
>> El nombre de dominio o subdominio asociado a su sitio web **aparece** en la tabla «multisitio».|Si acaba de añadir su nombre de dominio o subdominio a la sección `Multisitio`{.action} de su alojamiento web, espere unos **veinte minutos** y actualice la caché de su navegador de internet. Si sigue apareciendo el mensaje «Sitio no instalado», vaya a la [parte 2](#check-dns-domain).|
>> |El nombre de dominio o subdominio asociado a su sitio web **no aparece** en la tabla «multisitio».|Añada su nombre de dominio o subdominio a la sección `Multisitio`{.action} siguiendo la sección dedicada de la guía «[Alojar varios sitios web en un mismo hosting - añadir un dominio o subdominio](/pages/web_cloud/web_hosting/multisites_configure_multisite)».|
>> |El nombre de dominio o subdominio **se ha eliminado** de la tabla «multisitio» sin que usted realice ninguna acción.|Es posible que su dominio o su zona DNS estén administrados desde otra cuenta. Añada su nombre de dominio o subdominio a la sección `Multisitio`{.action} siguiendo la sección dedicada de la guía «[Alojar varios sitios web en un mismo hosting - añadir un dominio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite)».|

### 2 - Comprobar el direccionamiento IP en la zona DNS activa de su dominio <a name="check-dns-domain"></a>

Este paso consiste en comprobar que el dominio o subdominio apuntan hacia la dirección IP del alojamiento web desde la zona DNS activa.

> [!primary]
>
> Para más información sobre la noción de DNS, consulte las siguientes páginas:
>
> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit);
> - [Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create);
> - [Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit).

#### 2\.1 Identificar la dirección IP de su alojamiento web de OVHcloud

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En el cuadro **Información general**, encontrará la mención **IPv4**.
>>
>>![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copie la dirección IPv4 y siga leyendo esta guía.

Para más información, consulte la dirección IP asociada a su alojamiento web en nuestra guía «[Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)».

#### 2\.2 Comprobar la dirección IP registrada en la zona DNS activa del dominio

A continuación, compruebe que la dirección IP del alojamiento web aparece en la zona DNS activa del dominio.

> [!primary]
>
> Antes de continuar, si se produce un cambio en la **zona DNS** activa de un dominio, puede ser necesario un plazo de propagación de **4 a 24 horas** para actualizar la información de la red DNS.
>
> Si modifica directamente los **servidores DNS** asociados a su dominio, este plazo puede llegar hasta **48 horas** como máximo.

Para ello, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Si el dominio no aparece en la lista, la zona DNS no está gestionada desde el área de cliente de OVHcloud.<br>
>> > Determine su «agente registrador» y los servidores DNS a los que está asociado a través de nuestra herramienta [WHOIS](/links/web/domains-whois).<br>
>> > Descubra y modifique la zona DNS correspondiente en la sección dedicada de la guía «[Alojar varios sitios web en un mismo hosting - añadir un dominio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite)».
>>
> **Etapa 3**
>>
>> Se mostrará una tabla con un registro DNS asociado a su dominio en OVHcloud para cada línea. Puede filtrar el contenido de la tabla por tipo de registro o por dominio.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>>
>> > Si la pestaña `Zona DNS`{.action} del dominio aparece como sigue:<br><br> ![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>>
>> > Esto significa que su dominio no está gestionado desde el área de cliente de OVHcloud.<br> Determine su «agente registrador» y los servidores DNS a los que está asociado a través de nuestra herramienta [WHOIS](/links/web/domains-whois).<br> Encuentre y modifique la zona DNS en consecuencia siguiendo la sección dedicada de la guía «[Alojar varios sitios web en un mismo hosting - añadir un dominio externo](/pages/web_cloud/web_hosting/multisites_configure_multisite) ».
>>
>> Vaya al etapa 4 para ver los posibles escenarios y las acciones que se deben realizar.
>>
> **Etapa 4**
>>
>> |Escenarios posibles|Acción a realizar|
>> |---|---|
>> |En la zona DNS activa, su dominio o subdominio apuntan a la dirección IP de su alojamiento web con un registro de tipo A (para una dirección IPv4) o AAAA (para una dirección IPv6).<br><br>![zoneDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Esto indica que la configuración de su dominio es correcta.<br>Espere a la propagación DNS si el cambio es reciente.<br><br> r>Reinicia tus dispositivos (PC, smartphone, box, etc.) y vacía la caché de tu navegador de Internet. Es posible que la antigua configuración del dominio se conserve en caché, lo que podría retrasar la aparición de la actualización.|
>> |La zona DNS activa no tiene registros de tipo A o AAAA que vinculen el dominio o subdominio a la dirección IP de su alojamiento web.|Agregue el nuevo registro de tipo A o AAAA o corrija el registro existente siguiendo [esta guía](/pages/web_cloud/domains/dns_zone_edit).|
>> |El registro DNS de tipo A o AAAA existente en la zona DNS para su dominio o subdominio apunta a una dirección IP diferente de la de su alojamiento web.|Agregue el nuevo registro DNS de tipo A o AAAA o corrija el registro existente siguiendo [esta guía](/pages/web_cloud/domains/dns_zone_edit).|
>> |Esta advertencia aparece en la pestaña `Zona DNS`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail|Modifique los servidores DNS de su dominio en consecuencia siguiendo nuestra guía «[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)».|

## Más información <a name="go-further"></a>

[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).