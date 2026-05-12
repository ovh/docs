---
title: "Web hosting - Modificar un dominio ya asociado a un alojamiento"
excerpt: "Descubra cómo modificar la configuración de asociación de un dominio o subdominio ya declarado en su plan de hosting"
updated: 2026-05-04
---

## Objetivo

Al utilizar el alojamiento web o actualizar el sitio web, es posible que deba modificar la configuración del dominio o subdominio que ya esté asociado al alojamiento web.

> [!primary]
>
> Esta guía solo explica cómo modificar un dominio o subdominio ya declarado en un alojamiento web de OVHcloud.
>
> - Para asociar un nuevo dominio o subdominio a su sitio web alojado en su alojamiento web, consulte nuestra guía "[Cómo asociar un dominio a un sitio web existente](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Para añadir un nuevo sitio web a su alojamiento web, consulte nuestra guía "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

**Descubra cómo modificar la configuración de asociación de un dominio o subdominio ya declarado en un plan de hosting.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Tener uno o varios [dominios](/links/web/domains).
- Disponer de los derechos necesarios sobre todos los servicios afectados. Para más información, consulte nuestra guía "[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)".

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
> La modificación de la configuración de asociación de un dominio o subdominio puede, en caso de mala manipulación, provocar la interrupción del acceso a sus servicios (su sitio web). Si no está seguro de los cambios que debe realizar, puede ponerse en contacto con un proveedor especializado

Para modificar los parámetros de asociación de un dominio o subdominio ya declarado en su oferta de alojamiento web, haga clic en las fichas siguientes para ver cada una de las **4** etapas.

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
>> En la tabla que aparece, haga clic en el botón `>`{.action} situado a la izquierda del nombre del sitio web correspondiente para mostrar los dominios y subdominios asociados.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> A continuación, haga clic en el botón `⁝`{.action} situado a la derecha del dominio o subdominio correspondiente, y luego en `Modificar el dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Aparecerá la siguiente ventana: 
>>
>> ![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> En la continuación de esta guía, encontrará una descripción de cada uno de los parámetros disponibles en la ventana anterior. Tras leer las diferentes descripciones presentes en la sección "[Descripción de los parámetros modificables](#step1)" y una vez realizadas sus modificaciones, haga clic en el botón `Siguiente`{.action} situado en la parte inferior derecha de la ventana, y pase a la [parte 2](#step2).

### 1 - Descripción de los parámetros editables <a name="step1"></a>

> [!primary]
>
> Los campos `Dominio`{.action} y `carpeta raíz`{.action} no son modificables, ya que se trata de parámetros relativos al sitio web presente en su alojamiento web.
>
> - Para asociar un nuevo dominio o subdominio a un sitio web presente en su alojamiento web, consulte nuestra guía "[Cómo asociar un dominio a un sitio web existente](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Para cambiar la carpeta raíz de su sitio web, consulte nuestra guía "[¿Cómo modificar la carpeta raíz de un sitio web existente?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

#### La opción "Activar la CDN"

Para poder utilizar esta opción, es necesario haber contratado previamente un plan CDN de OVHcloud o disponer de un plan de hosting Performance.

Marque o desmarque esta casilla para activar o desactivar la opción CDN para su dominio o subdominio.

Para más información sobre las opciones/ofertas CDN, consulte nuestra documentación dedicada "[Acelerar un sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

#### La opción "Activar el firewall"

Esta opción permite filtrar las peticiones entrantes para proteger su alojamiento web de los ataques más habituales.

Para más información sobre esta opción, consulte nuestra documentación dedicada "[Activación del firewall de aplicación](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

#### La opción "Logs separados"

Marque o desmarque esta opción solo si quiere separar los logs de su dominio de los otros nombres de dominio declarados en paralelo en su alojamiento web.

Para más información sobre esta opción, consulte nuestra [página de estadísticas detalladas](/links/web/hosting-traffic-analysis).

Una vez realizados los cambios, haga clic en el botón `Siguiente`{.action} situado en la parte inferior derecha de la ventana para pasar a la [parte 2](#step2).

### 2 - Resumen de cambios <a name="step2"></a>

Una vez que haya hecho clic en el botón `Siguiente`{.action}, verá un resumen de los parámetros que va a aplicar a su dominio:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Si todos los parámetros están configurados como desee, haga clic en el botón `Aceptar`{.action}.

Según las opciones seleccionadas, los cambios pueden tardar desde unos minutos hasta unas horas en aplicarse.

Si las opciones **CDN**, **IP del país** y **logs separados** no se aplican después de 24 horas, consulte las guías (y páginas) correspondientes para todas las opciones descritas en la [parte 1](#step1), con el fin de verificar que se han seguido, respetado y cumplido todas las condiciones requeridas.

## Más información

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Acelerar un sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolocalizar su sitio web en un país específico](/pages/web_cloud/web_hosting/multisites_geolocation).

[Activación del firewall de aplicación](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
