---
title: "¿Cómo modificar la carpeta raíz de un sitio web existente?"
excerpt: "Descubra cómo modificar la carpeta raíz declarada para un sitio web ya existente en su alojamiento web desde su área de cliente de OVHcloud"
updated: 2026-05-04
---

## Objetivo

Puede alojar varios sitios web en un mismo plan de alojamiento web, incluso si los dominios no están registrados en OVHcloud. Además, puede asociar uno o varios dominios o subdominios a un mismo sitio web.

Al utilizar sus servicios, puede necesitar:

- Sustituir la totalidad del contenido de un sitio web existente, sin eliminarlo de su alojamiento web. Todo ello sin interrupción de acceso y con total transparencia para los visitantes de su sitio web.
- Instalar un [módulo en 1 clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules) u [otro CMS](/pages/web_cloud/web_hosting/cms_manual_installation) para reemplazar el contenido de un sitio web existente, sin eliminar el antiguo contenido de su alojamiento web. En este caso concreto, deberá construir las diferentes páginas de su nuevo sitio web a través de su navegador de Internet.
- Reorganizar los nombres de las carpetas raíz de sus sitios web en el espacio de almacenamiento de su alojamiento web sin cortar el acceso a sus diferentes sitios web.

**Descubra cómo modificar la carpeta raíz declarada para un sitio web ya existente en su alojamiento web desde su área de cliente de OVHcloud.**

> [!primary]
> Este procedimiento se aplica a la [nueva versión del área de cliente de OVHcloud](/links/control-panel-ovhcloud), actualmente disponible en beta. Para seguirlo, cambie a esta interfaz desde su área de cliente habitual.
>
> Si aún no ha creado el sitio web en su alojamiento web, consulte **directamente** [esta guía](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Si su sitio web dispone de una configuración con Git, consulte previamente nuestra guía "[Configurar y utilizar Git con un alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)" para eliminar la asociación con Git **antes** de continuar. La modificación de la carpeta raíz no está disponible si su sitio web está configurado con Git. De ser así, el cambio de carpeta raíz alteraría la asociación con Git.

## Requisitos

- Disponer de un plan de [alojamiento web de OVHcloud](/links/web/hosting-multisite) compatible.
- Disponer de uno o varios [dominios](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Alojamientos](/links/control-panel/web-hosting-sites)
- **Ruta de navegación:** `Web Cloud`{.action} > `Alojamientos`{.action} > `Sitios`{.action} > Seleccione su alojamiento web

---
<!-- CP-NAV-END:web-hosting -->

## Procedimiento

> [!warning]
> Esta guía presenta exclusivamente las acciones a realizar desde su [área de cliente de OVHcloud](/links/manager).
>
> A excepción del caso en el que desee instalar un módulo en 1 clic para construir el sitio web progresivamente, deberá previamente:
>
> - Crear la nueva carpeta raíz en el [espacio de almacenamiento](/pages/web_cloud/web_hosting/ftp_connection) de su alojamiento web.
> - Colocar la totalidad del nuevo contenido de su sitio web dentro de esta nueva carpeta.
> - Si el nuevo contenido de su sitio web funciona con una base de datos, deberá también [crear una base de datos](/pages/web_cloud/web_hosting/sql_create_database) e [importar el contenido relativo a dicha base de datos](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
> - Colocar las credenciales de acceso a la base de datos en el archivo que contiene la información de conexión a la base de datos. Este archivo debe estar ya presente en la nueva carpeta raíz.
>
> **Sin estas acciones, la visualización de su sitio web se interrumpirá**.
>
> Esta guía describe únicamente el procedimiento para modificar, desde su área de cliente de OVHcloud, la carpeta raíz definida inicialmente para su sitio web. Esta acción es necesaria para que el sitio web muestre el contenido de la nueva carpeta, en sustitución de la antigua.

<!-- CP-STEPS-START:modify-root-folder -->
Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Acceda a la página [Alojamientos](/links/control-panel/web-hosting-sites) y seleccione el alojamiento web correspondiente.
>>
>> ![Alojamientos](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la nueva página, haga clic en la pestaña `Mis sitios`{.action}.
>>
>> ![Mis sitios](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la tabla que aparece, haga clic en el botón `⁝`{.action} situado a la derecha del sitio web correspondiente y, a continuación, en `Editar sitio`{.action}.
>>
>> ![Opciones del sitio](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la ventana que se abre, en el formulario **Carpeta raíz**, sustituya la antigua carpeta raíz por la nueva.
>>
>> ![Modificar carpeta raíz](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> A continuación, haga clic en `Confirmar`{.action}.
>>
<!-- CP-STEPS-END:modify-root-folder -->

## Más información

[Publicar un sitio web en Internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [soluciones de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
