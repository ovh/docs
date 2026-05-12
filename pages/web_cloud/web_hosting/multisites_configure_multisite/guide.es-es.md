---
title: 'Compartir su alojamiento entre varios sitios web'
excerpt: 'Descubra cómo alojar diferentes sitios web en su oferta de alojamiento web'
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

Puede alojar varios sitios web en una misma oferta de alojamiento web, incluso si los nombres de dominio no están registrados en OVHcloud.

¿Desea añadir un nuevo sitio web a su alojamiento web?

**Descubra cómo alojar diferentes sitios web en su oferta de alojamiento web.**

> [!primary]
> Si ya ha creado el sitio web en cuestión en su alojamiento web y desea asociarle un nuevo nombre de dominio o subdominio, consulte **directamente** [esta guía](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Requisitos

- Disponer de una [oferta de alojamiento web OVHcloud](/links/web/hosting-multisite) compatible.
- Tener uno o más [dominios](/links/web/domains).
- Poder modificar la configuración de sus dominios (la [zona DNS](/pages/web_cloud/domains/dns_zone_edit)).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

### 1 - Añadir un sitio web a su oferta de alojamiento web

**Haga clic en uno de los títulos siguientes para ver las explicaciones.**

<a name="add-domain-ovhcloud"></a>

/// details | Añadir un sitio web con un nombre de dominio gestionado desde su área de cliente de OVHcloud

Esta sección se aplica únicamente si el nombre de dominio (y/o su zona DNS activa) con el que desea crear su sitio web se encuentra **en su área de cliente de OVHcloud**.

Haga clic en las fichas siguientes para ver cada una de las **7** etapas.

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
>> En la parte superior izquierda de la tabla que aparece, haga clic en el botón `Agregar un sitio`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque la opción `Asociar un dominio existente de OVHcloud`{.action} y haga clic en `Continuar`{.action}.
>>
>> En el campo **Nombre del sitio - obligatorio**, indique el nombre que desea utilizar para su sitio web. Este nombre será visible únicamente desde la pestaña `Mis sitios`{.action} de su alojamiento web.
>>
>> A continuación, seleccione el nombre de dominio a asociar en el menú desplegable **Nombre de dominio - obligatorio** que aparece debajo.
>>
>> > [!primary]
>> > Para añadir un subdominio, seleccione primero el nombre de dominio en la lista (por ejemplo: domain.tld). Marque después la casilla `Crear un subdominio`{.action}. Aparecerá un campo de entrada para indicar el subdominio (por ejemplo: **sub**.domain.tld).
>> >
>> > **Caso particular**: Los subdominios en `www` (por ejemplo: **www**.domain.tld) se añaden automáticamente como complemento del nombre de dominio. Por lo tanto, no es necesario especificar este subdominio concreto en el campo de entrada.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Por defecto, la **carpeta raíz** de su sitio web se crea automáticamente al añadir el sitio web a su alojamiento web. Esta misma **carpeta raíz** también se genera en el espacio de almacenamiento de su alojamiento web (accesible mediante FTP, SFTP o SSH, según su oferta).
>> >
>> > Si desea personalizar el nombre de la **carpeta raíz**, especialmente si el contenido de su sitio web ya se encuentra en una carpeta específica de su espacio de almacenamiento, puede definirlo activando el botón `Configuración avanzada`{.action}.
>>
>> Si desea personalizar el nombre de la carpeta raíz o utilizar una de las **opciones avanzadas** disponibles, active el botón `Configuración avanzada`{.action} y pase a **la etapa 6**. En caso contrario, continúe directamente a **la etapa 7**.
>>
> **Etapa 5**
>>
>> > [!primary]
>> >
>> > Esta etapa es **opcional**. Solo se dirige a los clientes que desean personalizar la carpeta raíz y/o activar ciertas funcionalidades disponibles mediante el botón `Configuración avanzada`{.action}.
>> >
>> > **Todas estas funcionalidades pueden activarse posteriormente una vez que el nombre de dominio se haya añadido a su sitio web.** Para ello, consulte directamente [esta guía](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Para personalizar el nombre de la carpeta raíz que se asociará a su sitio web y contendrá sus archivos, indique el nombre deseado en el campo **Carpeta raíz**.
>>
>> A continuación, puede encontrar una descripción de otras opciones. Según su [oferta de alojamiento web](/links/web/hosting), algunos elementos entre las opciones propuestas a continuación no podrán seleccionarse.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opción|Descripción|
>> |---|---|
>> |IP del país|Permite beneficiarse de una dirección IP geolocalizada (entre una lista de países) para el nombre de dominio seleccionado.<br> Obtenga más información gracias a [esta página](/links/web/hosting-options).|
>> |Firewall|Permite activar un firewall (filtrado y análisis de las solicitudes) sobre el nombre de dominio seleccionado.<br> Obtenga más información gracias a [esta página](/links/web/hosting-options).|
>> |CDN|Permite activar el CDN (caché de los elementos estáticos de su sitio web, como las imágenes) sobre el nombre de dominio seleccionado.<br> Obtenga más información gracias a [nuestra página CDN](/links/web/hosting-options-cdn).<br> Al activar SSL y CDN, también podrá beneficiarse del protocolo **HTTP/2** (este protocolo está activado por defecto en nuestro datacenter de Gravelines).|
>>
>> Una vez que el botón `Configuración avanzada`{.action} esté activado, también podrá elegir el modo de configuración DNS de su nombre de dominio:
>>
>> - **Para una configuración DNS automática**, deje marcada la casilla `Configuración automática (recomendado)`{.action}.
>> - **Para una configuración DNS manual**, marque la casilla `Configuración manual`{.action}. Para realizar posteriormente la configuración de su zona DNS, consulte las siguientes guías:
>>     - [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Etapa 6**
>>
>> OVHcloud pone a disposición los módulos WordPress, Joomla!, PrestaShop y Drupal. Estos le permiten disponer de una estructura de sitio web lista para usar, instalada automáticamente en la carpeta raíz configurada anteriormente. Para obtener más información, consulte nuestra documentación "[Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Si desea instalar un módulo en 1 clic, seleccione el módulo deseado en la parte inferior de la página, y pase a la etapa siguiente.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Por el contrario, si desea instalar manualmente su sitio web, recupere sus archivos y subáigalos a la carpeta raíz correspondiente en el espacio de almacenamiento de su alojamiento web. Para obtener más información, consulte nuestra documentación "[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>>
> **Etapa 7**
>>
>> Verifique que todas las informaciones introducidas anteriormente sean correctas, y haga clic en `Continuar`{.action} para finalizar la adición de su nombre de dominio o subdominio a su sitio web.
>>
>> Esta adición puede tardar hasta una hora.
>>
>> Si no ha seleccionado la opción `Configuración manual`{.action} en la sección `Configuración avanzada`{.action}, la configuración DNS se realizará automáticamente si la zona DNS activa de su nombre de dominio está gestionada en su área de cliente de OVHcloud.
>>
>> En caso contrario, consulte las siguientes guías para configurar manualmente su zona DNS:
>>
>> - [Web hosting - Lista de direcciones IP por cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > La modificación de la configuración DNS de su nombre de dominio requiere un tiempo de propagación que puede alcanzar las 24 horas antes de que sea plenamente efectiva.

///

/// details | Añadir un sitio web con nombre de dominio no gestionado desde su área de cliente de OVHcloud

Esta sección se aplica únicamente si desea añadir un sitio web con un nombre de dominio que no esté presente en su cuenta de OVHcloud. Puede tratarse de un nombre de dominio presente en otra cuenta de OVHcloud o registrado en otro proveedor.

Haga clic en las fichas siguientes para ver cada una de las **7** etapas.

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
>> En la parte superior izquierda de la tabla que aparece, haga clic en el botón `Agregar un sitio`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque la opción `Asociar un dominio externo`{.action} y haga clic en `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> En el campo **Nombre del sitio - obligatorio**, indique el nombre que desea utilizar para su sitio web. Este nombre será visible únicamente desde la pestaña `Mis sitios`{.action} de su alojamiento web.
>>
>> A continuación, introduzca el nombre de dominio (por ejemplo: domain.tld) o el subdominio (por ejemplo: **sub**.domain.tld) que desee asociar en el campo **Nombre de dominio - obligatorio** que aparece debajo.
>>
>> > [!success]
>> >
>> > **Caso particular**: Los subdominios en `www` (por ejemplo: **www**.domain.tld) se añaden automáticamente como complemento del nombre de dominio. Por lo tanto, no es necesario especificar este subdominio concreto en el campo de entrada.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Por defecto, el **carpeta raíz** de su sitio web se crea automáticamente al añadir el sitio web a su alojamiento web. El mismo **carpeta raíz** también se genera en el espacio de almacenamiento de su alojamiento web (accesible mediante FTP, SFTP o SSH, según su oferta).
>>
>> Para personalizar el nombre del carpeta raíz que se asociará a su sitio web y contendrá sus archivos, introduzca el nombre deseado en el campo **carpeta raíz**. Si no desea personalizarlo, deje el campo vacío.
>>
>> Una vez completada la información, haga clic en el botón `Continuar`{.action}.
>>
> **Etapa 6**
>>
>> > [!primary]
>> >
>> > A diferencia de los nombres de dominio gestionados directamente desde su área de cliente de OVHcloud, las **opciones avanzadas** no están disponibles directamente al añadir un sitio web con un nombre de dominio o subdominio no gestionado desde su cuenta de OVHcloud.
>> >
>> > Sin embargo, **todas estas funcionalidades pueden activarse o modificarse posteriormente una vez que el nombre de dominio o subdominio externo se haya añadido a su sitio web.** Para ello, consulte directamente [este guía](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Añadir un sitio web con un nombre de dominio externo a OVHcloud requiere una validación adicional obligatoria. Esto nos permite asegurarnos de que el nombre de dominio externo se añade de forma legítima. Se le mostrará un mensaje que le invitará a modificar la configuración DNS del nombre de dominio.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Tenga en cuenta los elementos mostrados, y haga clic en el botón `Continuar`{.action}. A partir de ese momento, el nombre de dominio se añadirá de forma temporal, hasta que pueda modificar su configuración DNS.
>>
>> > [!warning]
>> >
>> > Debe realizar estos cambios **rápidamente** para que su nombre de dominio se asocie correctamente a su sitio web. Sin esta acción, el nombre de dominio no se añadirá y su sitio web recientemente creado no será accesible.
>> >
>> > Las entradas DNS de tipo **A** y **TXT** deben colocarse obligatoriamente en la zona DNS activa de su nombre de dominio para que se asocie a su sitio web. Solo las entradas DNS de tipo **AAAA** son opcionales.
>> >
>> > Tenga en cuenta que si desea asociar `sub.domain.tld`, deberá crear la entrada TXT `ovhcontrol.domain.tld` y no la entrada `ovhcontrol.sub.domain.tld`.
>> >
>> > Para encontrar la zona DNS activa de su nombre de dominio, consulte los [servidores DNS](/pages/web_cloud/domains/dns_server_edit) a los que está vinculado. Solo deberá validar el nombre de dominio mediante el campo **TXT**, no todos sus subdominios.
>>
> **Etapa 7**
>>
>> OVHcloud pone a disposición los módulos WordPress, Joomla!, PrestaShop y Drupal. Estos le permiten disponer de una estructura de sitio web lista para usar, instalada automáticamente en la carpeta raíz configurada anteriormente. Para obtener más información, consulte nuestra documentación "[Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Si desea instalar un módulo en 1 clic, seleccione el módulo de su elección en la parte inferior de la página, y haga clic en `Continuar`{.action} para finalizar la solicitud de añadido de su sitio web en su alojamiento web.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Por el contrario, si desea instalar manualmente su sitio web, recupere sus archivos y subáigalos a la carpeta raíz correspondiente en el espacio de almacenamiento de su alojamiento web. Para obtener más información, consulte nuestra documentación "[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".

///

/// details | Añadir un sitio web con un nuevo nombre de dominio que aún no se ha registrado

Esta parte se aplica únicamente si desea añadir un sitio web con un nombre de dominio que aún no se ha registrado, ya sea en OVHcloud o en otro registrador. En otras palabras, concierne a los nombres de dominio que aún no se han suscrito.

Haga clic en las fichas siguientes para ver cada una de las **7** etapas.

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
>> En la parte superior izquierda de la tabla que aparece, haga clic en el botón `Agregar un sitio`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Marque la opción `Contratar un nuevo dominio`{.action} y haga clic en `Continuar`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Etapa 5**
>>
>> Se le redirigirá a nuestra página comercial de suscripción de un nombre de dominio. Elija su nuevo nombre de dominio según la disponibilidad del mercado. A continuación, siga las instrucciones del proceso de compra hasta la validación del bono de pedido. Esto sin suscribirse a un nuevo alojamiento web.
>>
>> Una vez que su pedido se haya pagado y validado, espere unos momentos para que se procese.
>>
>> > [!primary]
>> >
>> > Una vez que su nombre de dominio aparezca en su área de cliente de OVHcloud, siga la parte "[Añadir un nombre de dominio gestionado desde su área de cliente de OVHcloud](#add-domain-ovhcloud)" de este guía para añadir su sitio web a su alojamiento web.

///

### 2 - Publicar un sitio web en internet <a name="site-online"></a>

Una vez que el sitio web se ha declarado con su nombre de dominio en su alojamiento web, puede poner en línea el contenido de su sitio web. Para recordar, debe realizar esta operación en el **carpeta raíz** que definió al añadir el sitio web en su área de cliente de OVHcloud.

> [!primary]
>
> Si desea añadir varios sitios web, repita las acciones descritas en este guía.
>
> Le recomendamos que tenga cuidado con el número de sitios web presentes en su alojamiento web. Cuantos más sitios web tenga, más recursos se solicitarán a su alojamiento web. [La página de nuestras ofertas de alojamiento web](/links/web/hosting) indica el número recomendado de sitios web que puede alojar en su alojamiento web.

## Más información

[Instalar un sitio web con un módulo en un clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
