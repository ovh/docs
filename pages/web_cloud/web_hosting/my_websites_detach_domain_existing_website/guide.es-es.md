---
title: "Cómo desvincular un dominio de un sitio web existente"
excerpt: "Descubra cómo desvincular un nombre de dominio o un subdominio de un sitio web ya existente en su alojamiento web"
updated: 2026-05-04
---

## Objetivo

Puede alojar varios sitios web en la misma oferta de alojamiento web, incluso si los nombres de dominio no están registrados en OVHcloud. Además, puede asociar uno o varios nombres de dominio o subdominios al mismo sitio web.

¿Ya no quiere utilizar un nombre de dominio o subdominio para su sitio web?
¿Quiere asociar su nombre de dominio o subdominio a otro sitio web en uno de sus alojamientos web?

**Descubra cómo desvincular un nombre de dominio o subdominio de un sitio web ya existente en su alojamiento web.**

## Requisitos

- Disponer de una oferta de [alojamiento web OVHcloud](/links/web/hosting-multisite) compatible.
- Disponer de uno o varios [nombres de dominio](/links/web/domains).
- Poder modificar la configuración de sus nombres de dominio desde sus [zonas DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

> [!warning]
>
> Desvincular un nombre de dominio o subdominio de un sitio web presente en su alojamiento web es una operación sensible. De hecho, después de esta operación, su sitio web ya no será accesible en Internet con su nombre de dominio y/o subdominio.

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

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
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los dominios o subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del dominio o subdominio correspondiente, y luego en `Desvincular el dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> La nueva ventana que se abre le pide que confirme el desvinculación del nombre de dominio o subdominio.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Según su elección, marque o no la casilla `Configuración automática (recomendado)`{.action}, y haga clic en `Aceptar`{.action} para confirmar su elección.
>>
>> > ![!warning]
>> >
>> > **Caso particular: Ha asociado Git en su sitio web y solo un nombre de dominio está asociado al sitio web**
>> >
>> > Si es así, encontrará la siguiente ventana:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Como indica el mensaje, deberá [eliminar su asociación Git](/pages/web_cloud/web_hosting/git_integration_webhosting) en primer lugar, **antes** de desvincular su nombre de dominio.

### Caso particular: Desvincular un nombre de dominio o subdominio para utilizarlo con otro sitio web

- Si desea añadir su nombre de dominio o subdominio a otro sitio web existente en un alojamiento web, consulte [esta guía](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Si desea crear un nuevo sitio web en un alojamiento web con su nombre de dominio o subdominio recientemente desvinculado, consulte [esta guía](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
