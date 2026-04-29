---
title: "Ver y gestionar todos sus sitios web desde el área de cliente de OVHcloud"
excerpt: "Cómo consultar y gestionar todos sus sitios web desde el área de cliente de OVHcloud"
updated: 2026-05-04
---

## Objetivo

La interfaz presentada en esta guía permite centralizar la visualización de todos sus sitios web, independientemente de su alojamiento. Facilita el seguimiento de las funcionalidades activadas para cada sitio web y proporciona un acceso rápido a las acciones esenciales. Esta interfaz es especialmente útil para las agencias o los profesionales de la web que gestionan un gran número de dominios repartidos en varios alojamientos.

**Descubra cómo visualizar y gestionar todos sus sitios web desde su área de cliente.**

## Requisitos

- Tener un [plan de hosting](/links/web/hosting).

<!-- CP-NAV-START:web-website-view -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Sitios web](/links/control-panel/web-website-view)
- **Ruta de navegación:** `Web Cloud`{.action} > `Sitios web`{.action} > Seleccione su sitio web

---
<!-- CP-NAV-END:web-website-view -->

## Procedimiento

<!-- CP-STEPS-START:view-websites -->
Haga clic en las pestañas de abajo para ver cada uno de los **2** pasos.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Sitios web](/links/control-panel/web-website-view). Aparecerá una tabla con todos sus sitios web y su información principal.
>>
>> ![Vista_de_sitios_web](images/website_view_tab.png){.thumbnail}
>>
> **Etapa 2**
>>
>> La tabla presenta las siguientes columnas:
>>
>> - **Dominio**: muestra el nombre de dominio principal del sitio web, tal como está configurado en la pestaña "Mis sitios" de su alojamiento.
>> - **Diagnóstico**: le informa si su dominio apunta correctamente al alojamiento web asociado. Para más detalles, consulte nuestra guía "[¿Cómo verificar la asociación "nombre de dominio / sitio web"?](/pages/web_cloud/web_hosting/my_websites_diagnosis)".
>> - **Carpeta raíz**: indica el directorio del alojamiento (www, app, public_html, etc.) al que apunta el dominio.
>> - **Nombre del servicio**: nombre técnico del servicio, con el formato `FTPlogin.clusterXXX.hosting.ovh.net`.
>> - **Nombre mostrado**: alias personalizado para identificar su servicio en el área de cliente.
>> - **Plan**: tipo de producto asociado al alojamiento: Starter, Personal, Profesional o Performance.
>> - **Git**: muestra el estado de la integración de Git en el sitio web. Para más detalles, consulte nuestra guía "[Configurar y utilizar Git con su alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>> - **Logs separados**: indica si un espacio de logs está activado en el dominio (solo dominios OVHcloud). Para más información, consulte nuestra página "[Monitorice y analice el tráfico en sus sitios web](/links/web/hosting-traffic-analysis)".
>> - **CDN**: muestra el estado de la CDN: Activo / Inactivo / N/A (oferta no compatible). Para más información, consulte nuestra página "[Shared CDN](/links/web/hosting-options-cdn)".
>> - **SSL**: indica si el SSL está activado, permitiendo una conexión segura (**https://**). Para más información, consulte nuestra página "[Protege eficazmente tu sitio web de OVHcloud con un certificado SSL premium](/links/web/hosting-options-ssl)".
>> - **Firewall**: indica si el firewall de aplicación está habilitado en el dominio. Para más información, consulte nuestra página "[Opciones imprescindibles para tu alojamiento web](/links/web/hosting-options)".
>> - **Boost**: indica si la opción Boost está activada, permitiendo aumentar temporalmente los recursos de CPU y RAM. Para más detalles, consulte nuestra guía "[Web hosting - Cómo mejorar su solución](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".
>>
>> Al hacer clic en un elemento de la tabla, se le redirige al [alojamiento web](/links/control-panel/web-hosting) correspondiente. Más concretamente:
>>
>> - Las columnas **Dominio**, **Diagnóstico**, **Carpeta raíz**, **Git**, **Logs separados**, **CDN**, **SSL** y **Firewall** redirigen a la pestaña `Mis sitios`{.action}.
>> - Las columnas **Nombre del servicio**, **Nombre mostrado** y **Plan** redirigen a la pestaña `Información general`{.action}.
>> - La columna **Boost** redirige a la pestaña `Mejorar mi plan`{.action}.
>>
>> > [!warning]
>> > Los logs separados no pueden activarse para un nombre de dominio externo. Esta opción solo está disponible para los dominios registrados en OVHcloud.
>>
<!-- CP-STEPS-END:view-websites -->

## Más información <a name="go-further"></a>
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
