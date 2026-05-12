---
title: "Cómo asociar un nombre de dominio a un sitio web existente"
excerpt: "Descubra cómo asociar un nombre de dominio o un subdominio a un sitio web ya existente en su alojamiento web"
updated: 2026-05-04
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

Puede alojar varios sitios web en la misma oferta de alojamiento web, incluso si los dominios no están registrados en OVHcloud. Además, puede asociar uno o varios dominios o subdominios al mismo sitio web.

> [!primary]
> Si aún no ha creado el sitio web correspondiente en su alojamiento web, consulte **directamente** [esta guía](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Descubra cómo asociar un nombre de dominio o un subdominio a un sitio web ya existente en su alojamiento web.**

## Requisitos

- Disponer de una oferta de [alojamiento web OVHcloud](/links/web/hosting-multisite) compatible.
- Disponer de uno o varios [dominios](/links/web/domains).
- Poder modificar la configuración de sus dominios desde sus [zonas DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### Añadir un nombre de dominio o un subdominio a un sitio web existente

**Haga clic en uno de los títulos siguientes para mostrar las explicaciones.**

<a name="add-domain-ovhcloud"></a>

/// details | Añadir un nombre de dominio gestionado desde su área de cliente de OVHcloud

Esta parte se aplica únicamente si su nombre de dominio y/o su zona DNS activa se encuentran **en su área de cliente de OVHcloud**.

Haga clic en las fichas siguientes para ver cada una de las **6** etapas.

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
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Agregar un dominio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque la opción `Asociar un dominio existente de OVHcloud`{.action} y haga clic en `Continuar`{.action}.
>>
>> Seleccione a continuación el nombre de dominio a asociar en el menú desplegable **Nombre de dominio - obligatorio** que aparece debajo.
>>
>> > [!primary]
>> > Para añadir un subdominio, seleccione primero el nombre de dominio en la lista (por ejemplo: domain.tld). Marque después la casilla titulada `Crear un subdominio`{.action}. Aparecerá un campo de entrada para que pueda introducir el subdominio (por ejemplo: **sub**.domain.tld).
>> >
>> > **Caso particular**: Los subdominios en `www` (por ejemplo: **www**.domain.tld) se añaden automáticamente como complemento del nombre de dominio. Por lo tanto, no es necesario especificar este subdominio concreto en el campo de entrada.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Si desea utilizar una de las **opciones avanzadas** disponibles, active el botón `Configuración avanzada`{.action} y pase directamente a la **etapa 7**. En caso contrario, continúe con la **etapa 6**.
>>
> **Etapa 5**
>>
>> Verifique que todas las informaciones introducidas anteriormente sean correctas, y haga clic en `Continuar`{.action} para finalizar la adición de su nombre de dominio o de su subdominio a su sitio web.
>>
>> Esta adición puede tardar hasta una hora.
>>
>> La configuración DNS se realizará automáticamente si la zona DNS activa de su nombre de dominio está gestionada en su área de cliente de OVHcloud.
>>
>> En caso contrario, consulte las siguientes guías para configurar manualmente su zona DNS:
>>
>> - [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > La modificación de la configuración DNS de su nombre de dominio requiere un tiempo de propagación que puede alcanzar las 24 horas antes de que sea plenamente efectiva.
>>
> **Etapa 6**
>>
>> > [!primary]
>> >
>> > Este paso es **opcional**. Se dirige únicamente a los clientes que desean activar ciertas funcionalidades disponibles mediante el botón `Configuración avanzada`{.action}.
>> >
>> > **Todas estas funcionalidades pueden activarse posteriormente, una vez que el nombre de dominio se haya añadido a su sitio web.** En este caso concreto, consulte directamente [esta guía](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> > A continuación, encontrará una descripción de estas opciones.
>> >
>> > Según su oferta de [alojamiento web](/links/web/hosting), algunos elementos entre las opciones propuestas no podrán ser seleccionados.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opción|Descripción|
>> |---|---|
>> |IP del país|Permite beneficiarse de una dirección IP geolocalizada (entre una lista de países) para el nombre de dominio seleccionado.<br> Aprenda más gracias a [esta página](/links/web/hosting-options).|
>> |Firewall|Permite activar un firewall (filtrado y análisis de las solicitudes) en el nombre de dominio seleccionado.<br> Aprenda más gracias a [esta página](/links/web/hosting-options).|
>> |CDN|Permite activar el CDN (caché de elementos estáticos de su sitio web, como las imágenes) en el nombre de dominio seleccionado.<br> Aprenda más gracias a [nuestra página CDN](/links/web/hosting-options-cdn).<br> Al activar el SSL y el CDN, también podrá beneficiarse del protocolo **HTTP/2** (este protocolo está activado por defecto en nuestro datacenter de Gravelines).|
>>
>> Una vez activado el botón `Configuración avanzada`{.action}, también puede elegir el modo de configuración DNS de su nombre de dominio:
>>
>> - **Para una configuración DNS automática**, deje la casilla `Configuración automática (recomendado)`{.action} marcada.
>> - **Para una configuración DNS manual**, marque la casilla `Configuración manual`{.action}. Para realizar posteriormente la configuración, consulte las siguientes guías:
>>     - [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> Una vez realizadas sus opciones, haga clic en el botón `Continuar`{.action} para finalizar la adición de su nombre de dominio o de su subdominio a su sitio web. Esta adición puede tardar hasta una hora.
>>
>> Sin embargo, la modificación de la configuración DNS de su nombre de dominio requiere un tiempo de propagación que puede alcanzar las 24 horas antes de que sea plenamente efectiva.

///

/// details | Añadir un nombre de dominio externo

Esta parte se aplica únicamente si su nombre de dominio no está presente en su cuenta OVHcloud.

Haga clic en las fichas siguientes para ver cada una de las **6** etapas.

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
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Agregar un dominio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque la opción `Asociar un dominio externo`{.action} y haga clic en `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Introduzca el nombre de dominio (por ejemplo: domain.tld) o el subdominio (por ejemplo: **sub**.domain.tld) a asociar en el campo **Nombre de dominio - obligatorio** que aparece debajo.
>>
>> > [!success]
>> >
>> > **Caso particular**: Los subdominios en `www` (por ejemplo: **www**.domain.tld) se añaden automáticamente como complemento del nombre de dominio. Por lo tanto, no es necesario especificar este subdominio concreto en el campo de entrada.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> Una vez completadas las informaciones, haga clic en el botón `Continuar`{.action}.
>>
>> > [!primary]
>> >
>> > A diferencia de los dominios gestionados directamente desde su área de cliente de OVHcloud, las **opciones avanzadas** no están disponibles directamente durante la adición de un nombre de dominio o de un subdominio externo a su sitio web.
>> >
>> > Sin embargo, **todas estas funcionalidades pueden activarse posteriormente una vez que el nombre de dominio o el subdominio externo se haya añadido a su sitio web.** Para ello, consulte directamente [esta guía](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
> **Etapa 6**
>>
>> Todo añadido de un nombre de dominio externo a OVHcloud requiere una validación adicional obligatoria. Esto nos permite asegurarnos de que el añadido del nombre de dominio externo es legítimo. Se le mostrará un mensaje que le invitará a modificar la configuración DNS del nombre de dominio.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Tenga en cuenta los elementos que aparecen, y haga clic en el botón `Continuar`{.action}. A partir de ahora, el nombre de dominio se añadirá de manera temporal, el tiempo suficiente para que pueda modificar su configuración DNS.
>>
>> > [!warning]
>> >
>> > Debe realizar estas modificaciones **rápidamente** para que su nombre de dominio se añada correctamente. Sin esta acción, el añadido de su nombre de dominio será cancelado.
>> >
>> > Las entradas DNS de tipo **A** y **TXT** deben colocarse obligatoriamente en la zona DNS activa de su nombre de dominio para que se añada a su sitio web. Solo las entradas DNS de tipo **AAAA** son opcionales.
>> >
>> > Tenga en cuenta que si desea añadir `sub.domain.tld`, deberá crear la entrada TXT `ovhcontrol.domain.tld` y no la entrada `ovhcontrol.sub.domain.tld`.
>> >
>> > Para encontrar la zona DNS activa de su nombre de dominio, consulte los [servidores DNS](/pages/web_cloud/domains/dns_server_edit) a los que está vinculado. Solo deberá validar el nombre de dominio mediante el campo **TXT**, no todos sus subdominios.|

///

/// details | Añadir un nuevo nombre de dominio que aún no ha sido registrado

Esta parte se aplica únicamente si su nombre de dominio aún no ha sido registrado, ya sea en OVHcloud o en otro registrador. En otras palabras, concierne a los dominios que aún no han sido adquiridos.

Haga clic en las fichas siguientes para ver cada una de las **5** etapas.

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
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente, y luego en `Agregar un dominio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque la opción `Contratar un nuevo dominio`{.action} y haga clic en `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se le redirigirá a nuestra página comercial de suscripción de un nombre de dominio. Elija su nuevo nombre de dominio según las disponibilidades del mercado. A continuación, siga las instrucciones del túnel de compra hasta la validación del bono de compra.
>>
>> Una vez que su pedido se haya pagado y validado, espere unos minutos, el tiempo suficiente para que se procese.
>>
>> > [!primary]
>> >
>> > Si, tras unas horas, observa que su nuevo nombre de dominio no se ha asociado correctamente a su sitio web, siga la parte "[Añadir un nombre de dominio gestionado desde su área de cliente de OVHcloud](#add-domain-ovhcloud)" de esta guía.

///

### Oferta de correo incluida con su alojamiento web

La mayoría de las ofertas de [alojamiento web OVHcloud](/links/web/hosting) disponen de una opción incluida de creación de direcciones de correo electrónico personalizadas con su nombre de dominio.

Esta opción de correo puede activarse para **un solo** nombre de dominio. Esto significa que si aloja varios sitios web con varios dominios diferentes en su alojamiento web, solo podrá activar esta opción para uno de sus dominios.

No dude en consultar [nuestra guía dedicada](/pages/web_cloud/web_hosting/activate-email-hosting) para más detalles sobre la activación de esta opción.

## Más información

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
