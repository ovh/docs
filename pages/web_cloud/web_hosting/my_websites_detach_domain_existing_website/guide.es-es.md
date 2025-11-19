---
title: "Cómo desasociar un dominio de un sitio web existente"
excerpt: "Descubra cómo desasociar un nombre de dominio o un subdominio de un sitio web ya existente en su alojamiento web"
updated: 2025-11-27
---

## Objetivo

Puede alojar varios sitios web en la misma oferta de alojamiento web, incluso si los nombres de dominio no están registrados en OVHcloud. Además, puede asociar uno o varios nombres de dominio o subdominios al mismo sitio web.

¿Ya no quiere utilizar un nombre de dominio o subdominio para su sitio web?
¿Quiere asociar su nombre de dominio o subdominio a otro sitio web en uno de sus alojamientos web?
¿Tiene que cambiar la carpeta raíz asociada a su sitio web y crear un nuevo sitio web en su alojamiento web para ello?

**Descubra cómo desasociar un nombre de dominio o subdominio de un sitio web ya existente en su alojamiento web.**

## Requisitos

- Disponer de una oferta de [alojamiento web OVHcloud](/links/web/hosting-multisite) compatible.
- Disponer de uno o varios [nombres de dominio](/links/web/domains).
- Poder modificar la configuración de sus nombres de dominio desde sus [zonas DNS](/pages/web_cloud/domains/dns_zone_edit).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), parte `Web Cloud`{.action}.

## Procedimiento

> [!warning]
>
> Desasociar un nombre de dominio o subdominio de un sitio web presente en su alojamiento web es una operación sensible. De hecho, después de esta operación, su sitio web ya no será accesible en Internet con su nombre de dominio y/o subdominio.

Haga clic en las pestañas de abajo para mostrar sucesivamente cada una de las **5** etapas.

> [!tabs]
> **Paso 1**
>>
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), y vaya a la parte `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en el menú `Hébergements`{.action}, y elija el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Paso 3**
>>
>> En la página que se muestra, haga clic en la pestaña `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Paso 4**
>>
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los nombres de dominio y subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del nombre de dominio o subdominio correspondiente, y luego en `Détacher le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Paso 5**
>>
>> La nueva ventana que se abre le pide confirmar el desasociamiento del nombre de dominio o subdominio.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Según su elección, marque o no la casilla `Configuration automatique (recommandée)`{.action}, y haga clic en `Valider`{.action} para confirmar su elección.
>>
>> > ![!warning]
>> >
>> > **Caso particular: Ha asociado Git en su sitio web y solo un nombre de dominio está asociado al sitio web**
>> >
>> > Si es así, encontrará la siguiente ventana:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Como indica el mensaje, deberá [eliminar su asociación Git](/pages/web_cloud/web_hosting/git_integration_webhosting) en primer lugar, **antes** de desasociar su nombre de dominio.

### Caso particular: Desasociar un nombre de dominio o subdominio para utilizarlo con otro sitio web

- Si desea añadir su nombre de dominio o subdominio a otro sitio web existente en un alojamiento web, consulte [este guía](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Si desea crear un nuevo sitio web en un alojamiento web con su nombre de dominio o subdominio recientemente desasociado, consulte [este guía](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), póngase en contacto con los [socios de OVHcloud](/links/partner).

Si desea beneficiarse de una asistencia en el uso y la configuración de sus soluciones OVHcloud, le proponemos consultar nuestras diferentes [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).