---
title: FAQ Web Hosting
excerpt: Encuentre las respuestas a las preguntas más frecuentes sobre alojamiento web
slug: faq-web-hosting
section: Primeros pasos
order: 05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 07/04/2022**

## Gestión de su producto

### ¿Cómo configurar mi alojamiento?

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) para configurar el alojamiento. Desde la sección `Alojamientos` podrá gestionar sus certificados SSL, la versión PHP, la opción CDN, el multisitio, las bases de datos, etc.

**Trucos y Trucos**: Para ayudarle a configurar su alojamiento, consulte la sección *Primeros pasos* que encontrará [aquí](https://docs.ovh.com/us/es/hosting/).

### ¿Cómo administrar mis contraseñas?

Para gestionar sus contraseñas, debe conectarse en primer lugar al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). En caso de olvidar su identificador o su contraseña, haga clic en el `¿No recuerda su ID de cliente o contraseña?`{.action} en la ventana de conexión. Recibirá la información necesaria por correo electrónico.

También puede consultar la guía [Establecer y gestionar la contraseña de su cuenta](https://docs.ovh.com/us/es/customer/gestionar-su-contrase%c3%b1a/).

Una vez que se haya conectado al área de cliente,

- Para cambiar la contraseña de su espacio FTP, siga las indicaciones de [esta guía](https://docs.ovh.com/us/es/hosting/cambiar-contrasena-usuario-ftp/).
- Para cambiar la contraseña de la base de datos, siga las instrucciones de [esta guía](https://docs.ovh.com/us/es/hosting/cambiar-contrasena-base-de-datos/).
- Para cambiar la contraseña de una cuenta MX Plan, siga las indicaciones de [esta guía](https://docs.ovh.com/us/es/emails/cambiar-contrasena-direccion-correo/).

### ¿Cómo publicar mi sitio web? 

Para publicar su sitio web, debe disponer de un [nombre de dominio](https://www.ovhcloud.com/es/domains/) que corresponda a la dirección web desde la que estará accesible su sitio web (por ejemplo: *mi dominio.com*). También necesitará un [alojamiento](https://www.ovhcloud.com/es/web-hosting/) en el que instalar su sitio web.

Para más información, consulte esta [página](https://www.ovhcloud.com/es/web-hosting/uc-website/) y siga las indicaciones de la guía [Publicar un sitio web en internet](https://docs.ovh.com/us/es/hosting/web_hosting_publicar_un_sitio_web_en_internet/).

**Trucos y Trucos**: Para ayudarle a crear su sitio web, OVHcloud le permite instalar en su alojamiento un programa de soporte para la creación de sitios web (WordPress, PrestaShop, Joomla! y Drupal), gracias a la funcionalidad [Módulos en 1 clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/).

### ¿Cómo transferir un sitio web y el correo a los servidores de OVHcloud? 

Consulte la guía [Migrar un sitio web y el correo a OVHcloud](https://docs.ovh.com/us/es/hosting/web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio/).

### ¿Cómo alojar varios sitios web en un mismo plan de hosting?

Consulte la guía "[Alojar varios sitios web en un mismo hosting](https://docs.ovh.com/us/es/hosting/configurar-un-multisitio-en-un-alojamiento-web/)".

### ¿Cómo conservar la solución de correo asociada a mi alojamiento compartido cuando se da de baja el servicio?

Al dar de baja o eliminar el alojamiento compartido, el servicio de correo asociado también se dará de baja. Para conservar sus direcciones de correo, deberá desvincular el servicio de correo antes de dar de baja el alojamiento.<br>

Para ello, acceda a la pestaña `Información general`{.action} del alojamiento. En la sección **Configuración**, haga clic en el botón `...`{.action} situado a la derecha de "**Direcciones de correo**". Haga clic en `Desvincular mi opción de correo`{.action} y siga las instrucciones para contratar una solución de correo independiente que le permitirá conservar sus direcciones de correo ya creadas.

## Diagnóstico

> [!warning]
>
> Si encuentra una anomalía no indicada en esta FAQ, consulte la página "*Diagnóstico*" de [nuestra documentación](https://docs.ovh.com/us/es/hosting/).
>

### ¿Qué hacer si mi sitio web no funciona bien? 

Existen diversos motivos por los que podría haber fallado el funcionamiento del sitio web. Para identificar la causa, compruebe que ninguna de sus suscripciones necesita ser **renovada** conectándose al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws).

Consulte a continuación los [eventos en curso en nuestra infraestructura](https://www.status-ovhcloud.com/). Si todos sus servicios están activos y no se ven afectados por ninguna incidencia o mantenimiento, le invitamos a realizar un diagnóstico más detallado.

### ¿Qué hacer si, después de publicar mi sitio web, la página "Sitio en construcción" de OVHcloud sigue apareciendo?

![site_en_construction](images/site_en_construction.png){.thumbnail}

Al instalar el alojamiento, OVHcloud coloca esta página de espera como un archivo **index.html** contenido en la carpeta `www` de su servidor FTP.

Este archivo se desactiva automáticamente al crear su [módulo en 1 clic](https://docs.ovh.com/us/es/hosting/modulos-en-un-clic/).

Si ha elegido [Web hosting: Instalar un CMS manualmente](https://docs.ovh.com/us/es/hosting/web_hosting_instalar_un_cms_manualmente/), [conéctese al espacio FTP](https://docs.ovh.com/us/es/hosting/conexion-espacio-almacenamiento-ftp-alojamiento-web/) para renombrarlo como **index.html.old**.

### ¿Qué hacer si mi sitio web aparece en una dirección web de tipo "xxxx.cluster0xx.hosting.ovh.net"?

![url-cluster](images/url-cluster.png){.thumbnail}

Dos escenarios son posibles. O bien el sitio web se ha creado con esta dirección, o bien esta ha aparecido como consecuencia de un cambio.

#### Situación 1: su sitio web ha sido creado con una dirección web de tipo "xxxxx.cluster0xx.hosting.ovh.net".

> [!warning]
>
> La eliminación de una base de datos, como la de un módulo en 1 clic, es definitiva. También implica la **supresión de las copias de seguridad** de los datos correspondientes. Antes de eliminar el sitio web del alojamiento de OVHcloud, **asegúrese de poder crearlo de la misma** forma. Si no está seguro de las operaciones a realizar, contacte con su Webmaster o con uno de [nuestros partners](https://partner.ovhcloud.com/es/directory/).
>

En primer lugar, después de realizar todas las copias de seguridad necesarias, elimine el módulo desde el área de `Alojamientos` de OVHcloud.

![delete_a_module](images/delete_a_module.png){.thumbnail}

A continuación, elimine la base de datos desde la pestaña con el mismo nombre situada a la derecha de su pantalla, en la sección `Alojamientos`:

![delete_a_database](images/delete_a_database.png){.thumbnail}
 
Por último, reinicie la instalación en el dominio deseado, utilizando la funcionalidad [Módulo en 1 clic](https://docs.ovh.com/us/es/hosting/1-click-module-management/).

#### Situación 2: su sitio web aparece con una dirección web de tipo "xxxxx.cluster0xx.hosting.ovh.net" después de una modificación

Si el sitio web aparece con esta URL debido a una manipulación, vuelva a su estado anterior.

> [!alert]
>
> La restauración del alojamiento de OVHcloud conlleva la restauración **del conjunto de sitios** que contiene.

> Al restaurar un sitio web, el contenido del espacio FTP o el de la base de datos se sustituyen por una copia de seguridad. No podrá recuperar los datos del servidor FTP ni los de la base de datos antes de restaurarlos.
>

Para restaurar el código fuente del sitio web, consulte nuestra guía [Restaurar el espacio de almacenamiento de un alojamiento web](https://docs.ovh.com/us/es/hosting/restaurar-espacio-almacenamiento-alojamiento-web/).

Si su sitio web incluye una base de datos, consulte nuestra guía [Restaurar una copia de seguridad de la base de datos](https://docs.ovh.com/us/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/#restaurar-una-copia-de-seguridad-desde-el-area-de-cliente).

### ¿Qué hacer si mi sitio web redirige al webmail de OVHcloud?

![webmail](images/webmail.png){.thumbnail}

Esta anomalía indica una configuración errónea a nivel de los [servidores DNS](https://docs.ovh.com/us/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/) o de la [zona DNS](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/) asociada a su dominio.

El caso más común es el siguiente: usted ha contratado por separado su dominio y su alojamiento, por lo que no están conectados entre sí a través de su zona DNS.

Acceda a la sección `Dominios`{.action} del [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws). Haga clic en el dominio correspondiente y, seguidamente, en la pestaña `Servidores DNS`{.action}.

Anote los servidores DNS indicados y acceda a la pestaña `Zona DNS`{.action}.

Compare los `Objetivos` de las entradas de tipo `NS` indicadas en la pestaña `Zona DNS`{.action} con los `servidores DNS` indicados en la pestaña del mismo nombre:

- Si los elementos son idénticos, sustituya el objetivo `213.186.33.5` por el código de cuatro cifras indicado en la pestaña `Información general` con la mención `IPv4` (para más información sobre las operaciones a realizar, consulte las instrucciones de [esta guía](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/)).

- Si los elementos no son idénticos, pero los `servidores DNS` indicados en la pestaña del mismo nombre aparecen en [esta lista](https://docs.ovh.com/us/es/hosting/lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/), siga las instrucciones de [esta guía](https://docs.ovh.com/us/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/#restaurar-los-servidores-dns) para restaurarlos.

- Si los elementos no son idénticos y los `servidores DNS` indicados en la pestaña del mismo nombre no aparecen en [esta lista](https://docs.ovh.com/us/es/hosting/lista-de-direcciones-ip-de-los-clusters-y-alojamientos-web/), contacte con su Webmaster o busque un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) a través de la página de [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

### ¿Qué hacer si mi sitio web muestra un error "La página no se redirige correctamente"?

![too_many_redirect](images/too_many_redirect.png){.thumbnail}

> [!alert]
>
> La restauración del alojamiento de OVHcloud conlleva la restauración del conjunto de sitios que contiene.
>
> Al restaurar un sitio web, el contenido del espacio FTP o el de la base de datos se sustituyen por una copia de seguridad. No podrá recuperar los datos del servidor FTP ni los de la base de datos justo antes de restaurarlos.
>

Restaure su sitio web a su estado anterior:

- Para restaurar el código fuente del sitio web, consulte nuestra guía [Restaurar el espacio de almacenamiento de un alojamiento web](https://docs.ovh.com/us/es/hosting/restaurar-espacio-almacenamiento-alojamiento-web/).

- Si su sitio web incluye una base de datos, consulte nuestra guía [Importar una copia de seguridad en la base de datos de un alojamiento web](https://docs.ovh.com/us/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/#restaurar-una-copia-de-seguridad-desde-el-area-de-cliente).

Si las restauraciones no le permiten restablecer el acceso a su sitio web, contacte con su Webmaster o busque un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) en la web de los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

### ¿Qué hacer si mi sitio web muestra un error "503 error Backend fetch failed"?

![503_varnish](images/503_varnish.png){.thumbnail}

Si ha activado la [opción CDN](https://docs.ovh.com/us/es/hosting/guia_de_uso_del_acelerador_geocache_en_un_alojamiento_web/) del alojamiento, desactive el modo de *mantenimiento* en su sitio web WordPress o PrestaShop.

Si no ha activado esta opción ni ha utilizado el modo de *mantenimiento*, póngase en contacto con su Webmaster o busque un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) en el sitio web de los [partners de OVHcloud](https://partner.ovhcloud.com/es/directory/).

### ¿Qué hacer si mi sitio web muestra un error "Your request has been blocked"?

![your_request_has_been_blocked](images/your_request_has_been_blocked.png){.thumbnail}

Este mensaje indica que el tipo de petición HTTP que intenta realizar en su sitio web está prohibido durante un tiempo limitado. En ese caso, [consulte los logs](https://docs.ovh.com/us/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/) de su sitio web para ver qué peticiones han provocado el bloqueo.

Para ayudarle a corregir estas anomalías, contacte con su Webmaster o con uno de nuestros [partners](https://partner.ovhcloud.com/es/directory/).

### ¿Qué hacer si mi sitio web muestra un error "Your IP has been banned"?

![your_ip_has_been_blocked](images/your_ip_has_been_blocked.png){.thumbnail}

Este mensaje indica que la dirección IP que utiliza para conectarse a su sitio web está bloqueada durante un tiempo limitado. 

En ese caso, [compruebe los logs](https://docs.ovh.com/us/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/) de su sitio web para determinar qué peticiones han provocado el bloqueo.<br>
Compruebe también que su equipo informático no esté infectado por un virus.<br>
Por último, puede contactar con uno de nuestros partners (https://partner.ovhcloud.com/es/directory/) para que verifique el código informático de su sitio web.

### He contratado un dominio con acentos que aparece escrito de forma extraña en mi área de cliente. ¿Qué debo hacer?

![notation_idn](images/notation_idn.png){.thumbnail}

No tiene que hacer nada al respecto. Aunque su dominio se muestre en [notación internacionalizada (IDN)](https://es.wikipedia.org/wiki/Nombre_de_dominio_internacionalizado){.external} en su área de cliente, funcionará y se mostrará de forma totalmente normal en otro lugar. La dirección web del sitio web se mostrará tal y como usted lo haya solicitado. Sus direcciones de correo también se mostrarán como desee con sus interlocutores.

> [!warning]
>
> No es recomendable utilizar una dirección de correo electrónico con un dominio IDN en un cliente de correo (Outlook, Mail de macOS, etc.), ya que puede causar incompatibilidad.
>

## Más información <a name="gofurther"></a>

[FAQ - Correo en alojamiento compartido MX Plan](https://docs.ovh.com/us/es/emails/correo-electronico-faq/)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
