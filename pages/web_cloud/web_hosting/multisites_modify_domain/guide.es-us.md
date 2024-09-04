---
title: "Web hosting - Modificar un dominio ya asociado a un alojamiento"
excerpt: "Descubra cómo modificar la configuración de asociación de un dominio o subdominio ya declarado en su plan de hosting"
updated: 2024-09-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Al utilizar el alojamiento web o actualizar el sitio web, es posible que deba modificar la configuración del dominio o subdominio que ya esté asociado al alojamiento web.

> [!primary]
>
> Esta guía solo explica cómo modificar un dominio o subdominio ya declarado en un alojamiento web de OVHcloud. Si quiere asociar un nuevo dominio o subdominio a su alojamiento web, consulte nuestra guía "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

**Descubra cómo modificar la configuración de asociación de un dominio o subdominio ya declarado en un plan de hosting.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Tener uno o varios [dominios](/links/web/domains).
- Disponer de los derechos necesarios sobre todos los servicios afectados. Para más información, consulte nuestra guía "[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)".

## Procedimiento

> [!warning]
>
> La modificación de la configuración de asociación de un dominio o subdominio puede, en caso de mala manipulación, provocar la interrupción del acceso a sus servicios (su sitio web). Si no está seguro de los cambios que debe realizar, puede ponerse en contacto con un proveedor especializado
>

Para cambiar la configuración de asociación de un dominio o subdominio que ya esté declarado en su plan de hosting, lleve a cabo los siguientes pasos:

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
2. En la línea situada en la parte superior del área de cliente, haga clic en la pestaña `Web Cloud`{.action}.
3. En la columna izquierda, haga clic en el menú desplegable `Alojamientos`{.action}.
4. Seleccione el alojamiento web correspondiente.
5. En la nueva página, haga clic en la pestaña `Multisitio`{.action}.
6. En la tabla que aparece debajo de la pestaña y a la derecha del dominio o subdominio correspondiente, haga clic en el botón `...`{.action} y, seguidamente, en `Modificar el dominio`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Se abrirá la siguiente ventana:

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

A continuación, encontrará una descripción de cada uno de los parámetros disponibles en la ventana de arriba. Una vez que haya leído las descripciones y haya realizado los cambios, haga clic en el botón `Siguiente`{.action} situado en la parte inferior derecha de la ventana y continúe con el [etapa 2](#step2).

### Etapa 1 - Descripción de los parámetros editables <a name="step1"></a>

> [!primary]
>
> El formulario `Dominio`{.action} no se puede modificar porque se trata de un cambio de la configuración del nombre de dominio asociado al alojamiento web. Si quiere asociar un nuevo dominio o subdominio a su alojamiento web, consulte nuestra guía "[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

#### Editar la "carpeta raíz"

> [!warning]
> **Caso especial: configuración con Git**
>
> Para modificar la `carpeta raíz`{.action} declarada para el dominio y si existe una configuración con Git para el mismo dominio, deberá eliminar primero dicha configuración.
>
> Si existe una configuración con Git, aparecerá un mensaje justo debajo del formulario:
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> Para eliminar la configuración Git de un dominio o subdominio asociado a su alojamiento, consulte nuestra guía "[Configurar y utilizar Git con un alojamiento web de OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>

El formulario `Carpeta raíz`{.action} indica el nombre de la carpeta que contiene los elementos que se muestran con el nombre de dominio. Por ejemplo, puede ser una carpeta que contenga los archivos del sitio web.

Durante el uso de sus servicios, es posible que deba cambiar el `Carpeta raíz`{.action} declarado para su dominio. Esto puede ocurrir cuando, por ejemplo:

- Ha desarrollado un nuevo sitio web en una nueva carpeta que se encuentra en el espacio de almacenamiento FTP de su alojamiento web.
- Quiere redirigir su dominio hacia una carpeta vacía para después colocar un nuevo sitio web.
- Etc.

Este formulario le pedirá que sustituya el nombre de la carpeta cumplimentada por el nombre de la nueva carpeta deseada.

> [!success]
>
> Si introduce un nombre de carpeta que no existe en el espacio de almacenamiento FTP de su alojamiento web, este será automáticamente creado por nuestros robots en su espacio de almacenamiento FTP.
>

#### Otras opciones disponibles

##### La opción "SSL"

Marque o desmarque esta casilla únicamente si quiere activar o desactivar el SSL gratuito **Let's Encrypt** para su dominio o subdominio. No es necesario marcar esta casilla para el resto de productos SSL de OVHcloud.

Para más información sobre las opciones y servicios SSL, consulte nuestra documentación específica "[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

##### La opción "Activar la CDN"

Para poder utilizar esta opción, es necesario haber contratado previamente un plan CDN de OVHcloud o disponer de un plan de hosting Performance.

Marque o desmarque esta casilla para activar o desactivar la opción CDN para su dominio o subdominio.

Para más información sobre las opciones/ofertas CDN, consulte nuestra documentación dedicada "[Acelerar un sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

##### La opción "IP del país"

Esta opción se utiliza principalmente para los sitios web cuyo público objetivo se encuentra en el extranjero. Esto permite mejorar el posicionamiento SEO del sitio web en el país elegido.

Para más información sobre esta opción, consulte nuestra documentación dedicada "[Geolocalizar su sitio web en un país específico](/pages/web_cloud/web_hosting/multisites_geolocation)".

##### La opción "Activar el firewall"

Esta opción permite filtrar las peticiones entrantes para proteger su alojamiento web de los ataques más habituales.

Para más información sobre esta opción, consulte nuestra documentación dedicada "[Activación del firewall de aplicación](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

##### La opción "Logs separados"

Marque o desmarque esta opción solo si quiere separar los logs de su dominio de los otros nombres de dominio declarados en paralelo en su alojamiento web.

Para más información sobre esta opción, consulte nuestra [página de estadísticas detalladas](/links/web/hosting-traffic-analysis).

Una vez realizados los cambios, haga clic en el botón `Siguiente`{.action} situado en la parte inferior derecha de la ventana para pasar al [etapa 2](#step2).

### Etapa 2 - Resumen de cambios <a name="step2"></a>

Una vez que haya hecho clic en el botón `Siguiente`{.action}, verá un resumen de los parámetros que va a aplicar a su dominio:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Si todos los parámetros están configurados como desee, haga clic en el botón `Aceptar`{.action}.

Según las opciones seleccionadas, los cambios pueden tardar desde unos minutos hasta unas horas en aplicarse.

Si las opciones **SSL**, **CDN**, **IP del país** y **logs separados** no se aplican después de 24 horas, consulte las guías (y páginas) correspondientes para todas las opciones descritas en el [etapa 1](#step1), con el fin de comprobar que se han cumplido, cumplido y cumplido todos los requisitos.

## Más información

[Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Acelerar un sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolocalizar su sitio web en un país específico](/pages/web_cloud/web_hosting/multisites_geolocation).

[Activación del firewall de aplicación](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).