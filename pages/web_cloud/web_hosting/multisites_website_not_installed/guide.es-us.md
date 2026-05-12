---
title: 'Solucionar el error "Sitio no instalado"'
excerpt: 'Descubra cómo solucionar el error "Sitio no instalado"'
updated: 2026-05-04
---

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

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

La página "**Sitio no instalado**" aparece por dos motivos:

- 1: [Su dominio o subdominio no está declarado correctamente en uno de los sitios web presentes en su alojamiento web](#check-my-websites).
- 2: [Su dominio no apunta a la dirección IP de su plan de hosting.](#check-dns-domain)

A continuación se explica cómo corregir el error `Sitio no instalado` en ambos casos.

### 1 - Comprobar la declaración de su dominio o subdominio en su sitio web presente en su alojamiento web <a name="check-my-websites"></a>

Haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los dominios y subdominios asociados.
>>
>> ![Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> |Escenarios|Acciones a realizar|
>> |---|---|
>> |El dominio o subdominio asociado a su sitio web **aparece** en la tabla.|Si acaba de añadir su dominio o subdominio a su sitio web presente en su alojamiento web, espere aproximadamente **veinte minutos** y luego actualice la caché de su navegador. Si sigue apareciendo el mensaje "Sitio no instalado", pase a la [parte 2](#check-dns-domain).|
>> |El dominio o subdominio asociado a su sitio web **no aparece** en la tabla.|Añada su dominio o subdominio siguiendo nuestra guía "[¿Cómo asociar un dominio a un sitio web existente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".|
>> |El dominio o subdominio **ha sido eliminado** de la tabla sin que usted haya realizado ninguna acción.|Es posible que su dominio o su zona DNS se gestionen desde otra cuenta. Añada su dominio o subdominio siguiendo nuestra guía "[¿Cómo asociar un dominio a un sitio web existente? - Añadir un dominio externo](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".|

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

Haga clic en las fichas siguientes para ver cada una de las **2** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En el cuadro **Información general**, encontrará la mención **IPv4**.
>>
>>![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Copie la dirección IPv4 y siga leyendo esta guía.

Para más información, consulte la dirección IP asociada a su alojamiento web en nuestra guía "[Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".

#### 2\.2 Comprobar la dirección IP registrada en la zona DNS activa del dominio

A continuación, compruebe que la dirección IP del alojamiento web aparece en la zona DNS activa del dominio.

> [!primary]
>
> Antes de continuar, si se produce un cambio en la **zona DNS** activa de un dominio, puede ser necesario un plazo de propagación de **4 a 24 horas** para actualizar la información de la red DNS.
>
> Si modifica directamente los **servidores DNS** asociados a su dominio, este plazo puede llegar hasta **48 horas** como máximo.

Para ello, haga clic en las fichas siguientes para ver cada una de las **3** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting) y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Se mostrará una tabla con un registro DNS asociado a su dominio en OVHcloud para cada línea. Puede filtrar el contenido de la tabla por tipo de registro o por dominio.
>>
>> ![dns zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}
>>
>> > [!primary]
>>
>> > Si la pestaña `Zona DNS`{.action} del dominio aparece como sigue:<br><br> ![zone-without-domain-top-of-the-page](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/zone-without-domain-top-of-the-page.png){.thumbnail}<br>
>>
>> > Esto significa que su dominio no está gestionado desde su área de cliente de OVHcloud.<br> Determine su "registro de dominio" así como los servidores DNS a los que está asociado mediante nuestra herramienta [WHOIS](/links/web/domains-whois).<br> Encuentre y modifique la zona DNS correspondiente siguiendo las instrucciones de la sección dedicada de la guía "[¿Cómo asociar un dominio a un sitio web existente? - Añadir un dominio externo](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>>
>> Vaya al etapa 4 para ver los posibles escenarios y las acciones que se deben realizar.
>>
> **Etapa 3**
>>
>> |Escenarios posibles|Acción a realizar|
>> |---|---|
>> |En la zona DNS activa, su dominio o subdominio apuntan a la dirección IP de su alojamiento web con un registro de tipo A (para una dirección IPv4) o AAAA (para una dirección IPv6).<br><br>![zoneDNS_IP2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}|Esto indica que la configuración de su dominio es correcta.<br>Espere a la propagación DNS si el cambio es reciente.<br><br> r>Reinicia tus dispositivos (PC, smartphone, box, etc.) y vacía la caché de tu navegador de Internet. Es posible que la antigua configuración del dominio se conserve en caché, lo que podría retrasar la aparición de la actualización.|
>> |La zona DNS activa no tiene registros de tipo A o AAAA que vinculen el dominio o subdominio a la dirección IP de su alojamiento web.|Agregue el nuevo registro de tipo A o AAAA o corrija el registro existente siguiendo [esta guía](/pages/web_cloud/domains/dns_zone_edit).|
>> |El registro DNS de tipo A o AAAA existente en la zona DNS para su dominio o subdominio apunta a una dirección IP diferente de la de su alojamiento web.|Agregue el nuevo registro DNS de tipo A o AAAA o corrija el registro existente siguiendo [esta guía](/pages/web_cloud/domains/dns_zone_edit).|
>> |Esta advertencia aparece en la pestaña `Zona DNS`{.action}:<br><br>![message-other-ovh-dns-servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}|Modifique los servidores DNS de su dominio en consecuencia siguiendo nuestra guía "[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)".|

## Más información <a name="go-further"></a>

[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

[¿Cómo asociar un dominio a un sitio web existente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
