---
title: "Cómo empezar correctamente con su alojamiento web"
excerpt: 'Descubra cómo publicar un nuevo sitio web a través de nuestras opciones de "Módulos en un clic" y cómo crear una nueva dirección de correo personalizada con su nombre de dominio gracias a nuestra solución de alojamiento web'
updated: 2025-04-07
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

¿Quiere crear un sitio web para su empresa o un blog personal? ¿Necesita una tienda online para vender sus productos? Esta guía explica los primeros pasos con el alojamiento web de OVHcloud y explica cómo configurarlo. También encontrará instrucciones para crear direcciones de correo electrónico profesionales asociadas a su dominio. Le permitirá publicar su proyecto en Internet fácil y rápidamente para comunicarse con su audiencia de forma eficaz.

> [!primary]
>
> - ¿Quiere migrar un sitio web existente en otro proveedor de hosting? Consulte directamente nuestra guía dedicada: [Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Haber recibido el email de confirmación de la instalación de su alojamiento web.
- Tener un [dominio](/links/web/domains) y una zona DNS asociada en OVHcloud.
- Todos los servicios (alojamiento web, dominio, zona DNS) deben ser accesibles desde una única cuenta de OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

## Procedimiento

### 1 - Asociar su dominio a su alojamiento web <a name="part-1"></a>

> [!success]
>
> Si ha contratado su dominio y su alojamiento web en un mismo pedido, estos dos servicios ya están asociados. Acceda directamente a la [Parte 2](#part-2) de esta guía.

1. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
2. Seleccione la pestaña `Multisitio`{.action} una vez que haya seleccionado el alojamiento web correspondiente.
3. En la nueva página, haga clic en el botón `Acciones`{.action} situado sobre la tabla que muestra los dominios ya declarados en el alojamiento web. Haga clic en `Añadir un dominio o subdominio`{.action}.
4. En la ventana que se abre, marque y complete los elementos solicitados hasta su validación.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Web hosting - Modificar un dominio ya asociado a un alojamiento](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### 2 - Instalar un "módulo en un clic" para su sitio web <a name="part-2"></a>

En sus alojamientos web, OVHcloud ofrece la instalación gratuita de los CMS WordPress, Joomla, PrestaShop y Drupal gracias a la opción de módulo en un clic.

1. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
2. Seleccione la pestaña `Módulos en 1 clic`{.action} una vez que haya seleccionado el alojamiento web correspondiente.
3. En la nueva página, haga clic en el botón `Añadir un módulo`{.action}.
4. En la nueva ventana, seleccione el CMS que quiera instalar. A continuación, seleccione el dominio en el que desea instalar el módulo seleccionando el dominio deseado **sin los "www"** situados delante (por ejemplo, `domain.tld` y no `www.domain.tld`) y haga clic directamente en `Instalar`{.action}.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).
- [¿Cómo gestionar su módulo en 1 clic?](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

///

### 3 - Activar las direcciones de correo electrónico incluidas con el alojamiento web <a name="part-3"></a>

> [!success]
>
> Si ha contratado su dominio y su alojamiento web en un solo pedido, las direcciones de correo incluidas con el alojamiento web ya están asociadas a su dominio. Acceda directamente a la [Part 4](#part-4) de esta guía.

1. Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
2. En la nueva página y en el recuadro **Configuración**, haga clic en el botón `...`{.action} de la derecha de la indicación `Direcciones de correo`{.action} y seleccione `Activar mi solución de correo`{.action}. En la nueva página que aparece, seleccione el dominio correspondiente en la sección `(1)` y continúe hasta que haya activado las direcciones de correo electrónico.

/// details | Haga clic aquí para obtener más información.

Consulte nuestra guía detallada "[web hosting - Activar las direcciones de correo incluidas](/pages/web_cloud/web_hosting/activate-email-hosting)".

///

### 4 - Crear una dirección de correo electrónico personalizada con su nombre de dominio <a name="part-4"></a>

1. Haga clic en el menú `Direcciones de correo`{.action} (o en `MX Plan`{.action} si utiliza la nueva versión del área de cliente de OVHcloud) y seleccione el dominio correspondiente.
2. En la nueva página, haga clic en la pestaña `Correo electrónico`{.action}.
3. Haga clic en el botón `Crear una dirección de correo electrónico`{.action}.
4. En la nueva ventana, complete los datos solicitados hasta su validación.

Repita esta operación para cada dirección de correo electrónico que quiera crear (dentro del límite de su plan de hosting).

/// details | Haga clic aquí para obtener más información.

Consulte nuestra guía detallada "[Crear una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)".

///

### 5 - Opciones adicionales disponibles con su alojamiento web <a name="part-5"></a>

Su alojamiento web no está limitado a la instalación de un módulo en un clic. Puede alojar sitios web creados por usted o por un desarrollador web (blog, CMS, tienda online, etc.). Si desea más información sobre las posibilidades de su alojamiento web, no dude en consultar nuestra guía más detallada "[Cómo crear un sitio web - Realizar un proyecto en 5 pasos](/pages/web_cloud/web_hosting/website-project)".

## Más información

Consulte a continuación una selección de nuestras guías que detallan las principales funcionalidades ofrecidas con nuestros alojamientos web:

- [Web hosting - Gestionar un certificado SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).
- [Acelerar un sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
- [Web hosting - Entorno, versión PHP, .ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting).
- [Web hosting - Consultar las estadísticas y logs de un sitio web](/pages/web_cloud/web_hosting/logs_and_statistics).
- [Gestionar los mensajes de correo automatizados](/pages/web_cloud/web_hosting/mail_function_script_records).
- [Activación del firewall de aplicación](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
- [Configurar y utilizar Git con un alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting).
- [Configurar y utilizar Git con un alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).
- [Crear tareas automatizadas (CRON) en un alojamiento web](/pages/web_cloud/web_hosting/cron_tasks).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).