---
title: "Cómo crear un sitio web - Realizar un proyecto en 5 pasos"
excerpt: "Esta guía explica cómo configurar un proyecto, publicar un sitio web y crear direcciones de correo electrónico con un plan de hosting"
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

OVHcloud ofrece varios [planes de hosting](/links/web/hosting). Están diseñadas para diferentes casos de uso:

- Empezar en la web.
- Crear rápidamente un sitio web (profesional o no), un blog, un **C**ontent **M**anagement **S**ystem (**CMS**) como *WordPress*, *Joomla!*, *PrestaShop* o *Drupal*, o una tienda online.
- Personalizar una o varias direcciones de correo electrónico con el nombre de dominio que quiera utilizar para su sitio web.
- Gestionar varios sitios web en un único plan de hosting.
- Disponer de una o varias bases de datos (incluidas con algunos de nuestros [planes de hosting](/links/web/hosting)).
- Etc.

Estos planes le ahorran gestionar el mantenimiento, la actualización y la seguridad de una infraestructura de alojamiento web.<br>
Le permiten ahorrar tiempo en la "administración del servidor" y concentrarse únicamente en:

- El desarrollo, la actualización y la seguridad de un sitio web, blog, CMS o tienda online;
- La seguridad y la optimización de una o varias bases de datos, si su solución dispone de ellas;
- La configuración y la gestión de sus direcciones de correo electrónico incluidas con su plan de hosting.

**Esta guía explica cómo publicar un sitio web en internet y crear direcciones de correo electrónico con una solución de alojamiento web.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](/links/web/hosting).
- Haber recibido el email de confirmación de la instalación de su alojamiento web.
- Disponer de un [dominio](/links/web/domains) con el que poder acceder a su sitio web.


## Procedimiento

El objetivo de esta guía es mostrarle las principales acciones que podemos realizar con nuestras soluciones de [web hosting](/links/web/hosting). 
Cada una de estas acciones irá acompañada de uno o varios enlaces a guías específicas (relativas a la acción en cuestión).

Puede utilizar esta guía como un "repositorio" de acciones posibles desde la contratación de su [plan de hosting](/links/web/hosting) y durante toda su utilización.

> [!primary]
> 
> Para una mejor comprensión de esta guía, el término "sitio web" se referirá a todos los tipos de sitios web (sitio web, blog, CMS, tienda online, etc.) mencionados anteriormente en esta guía.
>

**Contenido:**

- [Etapa 1 - Delimitar su proyecto](#project-delimitation)
- [Etapa 2 - Instalar su sitio web](#website-installation)
- [Etapa 3 - Crear sus direcciones de correo electrónico (opcional)](#email-creation)
- [Etapa 4 - Comprobar y/o modificar la configuración de su dominio](#domain-configuration)
- [Etapa 5 - Otras opciones disponibles con los alojamientos web](#other-options)

### Etapa 1 - Delimitar su proyecto <a name="project-delimitation"></a>

Antes de empezar, es importante identificar y delimitar claramente sus necesidades haciendo las siguientes preguntas: 

- ¿Debo **crear** o **migrar** (desde otro proveedor de hosting) mi sitio web?
- ¿Necesito una o más bases de datos para que mi sitio web funcione?
- ¿Necesito una o más direcciones de correo personalizadas con mi dominio?

En función de sus respuestas, asegúrese de que su [plan de hosting](/links/web/hosting) se ajusta a todas sus necesidades antes de continuar.

Si no es el caso, consulte nuestra guía "[Web hosting: ¿Cómo mejorar su solución?](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

### Etapa 2 - Instalar su sitio web <a name="website-installation"></a>

Una vez que haya definido el proyecto con precisión, podrá instalar su sitio web.

Existen dos posibilidades: **migrar** un sitio web existente o **crear** un nuevo sitio web.

**Haga clic en cada una de las opciones siguientes para ver las explicaciones.**

/// details | Migrar un sitio web

Si necesita migrar un sitio web desde otro proveedor de hosting, consulte nuestra guía "[Migrar un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". En ella encontrará todos los pasos clave para migrar sin interrupción todos sus servicios (nombre de dominio, sitio web, dirección(s) de correo electrónico, etc.).

///

/// details | Crear un nuevo sitio web

Puede crear usted mismo todo su sitio web o utilizar un [CMS (Content Management System)](/links/web/hosting-cms-comparison) como WordPress, PrestaShop, Joomla! o Drupal. Haga clic en las fichas siguientes según su elección:

> [!tabs]
> **Utilizar un CMS**
>>
>> OVHcloud pone a su disposición la opción Módulos en un clic.<br>
Una vez conectado a su [área de cliente de OVHcloud](/links/manager) y a través de su alojamiento web, esta opción le permite instalar rápidamente los CMS *WordPress*, *Joomla!*, *PrestaShop* y *Drupal*.
>>
>> Para utilizar esta opción, consulte nuestra guía "[Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> > [!primary]
>> >
>> > Si prefiere instalar manualmente su CMS sin pasar por la opción Módulos en un clic, consulte nuestra guía "[Instalar manualmente un CMS en mi alojamiento](/pages/web_cloud/web_hosting/cms_manual_installation)".
>>
> **Publicar un sitio web desarrollado localmente**
>>
>> Para más información, consulte nuestra guía "[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)". En esta guía encontrará todos los pasos necesarios para:
>>
>> - Situar su sitio web en el espacio de almacenamiento FTP de su alojamiento web;
>> - Crear una base de datos asociada a su alojamiento web;
>> - Colocar la base de datos local en la base de datos asociada a su alojamiento web;
>> - Vincular la base de datos al sitio web alojado en un alojamiento web.
>>

///

### Etapa 3 - Crear sus direcciones de correo electrónico (opcional) <a name="email-creation"></a>

Su plan de [web hosting](/links/web/hosting) incluye una o varias direcciones de correo electrónico, que puede elegir entre activar o desactivar.

En primer lugar, consulte nuestra guía "[Activar el servicio de correo incluido en un plan de hosting](/pages/web_cloud/web_hosting/activate-email-hosting)".

Una vez activada la opción, consulte nuestra guía "[Crear una dirección de correo electrónico en un MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)" para personalizar una o varias direcciones de correo con su nombre de dominio.

**Haga clic en el siguiente enlace para ver las explicaciones.**

/// details | Casos Particulares:

> - Si va a migrar un sitio web y/o se trata de direcciones de correo asociadas al dominio de su sitio web, consulte nuestra guía "[Migrar un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". En ella encontrará todos los pasos clave para migrar sin interrupción todos sus servicios (nombre de dominio, sitio web, dirección(s) de correo electrónico, etc.).
>
> - Si no ha asociado un dominio al contratar el alojamiento web y quiere disfrutar de la opción "dirección(s) de correo incluida(s) con el alojamiento web", deberá realizar la operación manualmente desde el [área de cliente de OVHcloud](/links/manager).

///

### Etapa 4 - Comprobar y/o modificar la configuración de su dominio <a name="domain-configuration"></a>

En este punto, deberá instalar su sitio web en su alojamiento web y crear sus direcciones de correo. Es posible que estos elementos no funcionen todavía, ya que la configuración del dominio con los nuevos servicios no está completa.

En efecto, la conexión entre su dominio y sus servicios (alojamiento web, servidor de correo, etc.) se realiza esencialmente mediante la zona DNS activa de su nombre de dominio y de los registros DNS que contiene.

> [!primary]
>
> Tenga en cuenta que un cambio en una zona DNS tarda entre 4 y 24 horas en propagarse y ser efectivo.
>

**Haga clic en el siguiente enlace para ver las explicaciones.**

/// details | Casos Particulares:

> Si va a migrar un sitio web y/o direcciones de correo asociadas al dominio de su sitio web, consulte nuestra guía "[Migrar un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". En ella encontrará todos los pasos clave para migrar sin interrupción todos sus servicios (nombre de dominio, sitio web, dirección(s) de correo electrónico, etc.).

///

Para comprobar y/o modificar la conexión entre su nombre de dominio y su sitio web presente en su alojamiento web, **consulte las siguientes guías en orden:**

- [Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP): En ella encontrará todas las direcciones IP de nuestra infraestructura de alojamientos web. Esta guía explica cómo utilizar un dominio con una zona DNS activa que no esté gestionada en OVHcloud (o que esté gestionada en una cuenta de cliente de OVHcloud distinta de la suya).
- [¿Cómo asociar un nombre de dominio a un sitio web existente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website): Esta guía explica cómo añadir un nombre de dominio a un sitio web presente en su alojamiento web. También puede ayudarle a comprobar que la declaración de su nombre de dominio en el sitio web presente en su alojamiento web es correcta. En caso necesario, podrá modificarla y realizar las acciones necesarias en la zona DNS activa de su nombre de dominio.
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit): Esta guía explica cómo editar una zona DNS que tenga presencia en OVHcloud. Este servicio le será útil en caso de que la zona DNS activa de su dominio esté presente en una cuenta de cliente de OVHcloud diferente a la suya. También puede utilizarlo para acceder a la zona DNS de OVHcloud de su dominio, con el fin de comprobar que la dirección IP (entrada(s) de tipo *A* y/o *AAAA*) declarada para su dominio en la zona DNS corresponde a la dirección IP de su alojamiento web.

Para comprobar o modificar la conexión entre su dominio y su solución de correo de OVHcloud, consulte la guía "[Configurar un registro MX para la gestión del correo](/pages/web_cloud/domains/dns_zone_mx)", en la que encontrará los nombres de los servidores de correo de OVHcloud, así como el procedimiento a seguir para que su dominio apunte hacia esos mismos servidores.

> [!primary]
>
> Si la zona DNS activa para su dominio no está gestionada en OVHcloud:
> 
> - **Para la conexión entre su nombre de dominio y su alojamiento web**: Consulte únicamente las guías "[Lista de direcciones IP de los clusters y alojamientos web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)" y "[¿Cómo asociar un nombre de dominio a un sitio web existente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)" mencionadas anteriormente para obtener la dirección IP de su alojamiento web, y declare correctamente su nombre de dominio en su sitio web alojado en su alojamiento web. A continuación, póngase en contacto con la organización que gestiona la zona DNS activa de su nombre de dominio para que apunte a su alojamiento web.
>
> - **Para la conexión entre su nombre de dominio y su solución de correo electrónico de OVHcloud**: Consulte únicamente la guía "[Configurar un registro MX para la gestión del correo](/pages/web_cloud/domains/dns_zone_mx)" para obtener los nombres de los servidores de correo de OVHcloud que deben introducirse en la zona DNS activa de su dominio. A continuación, póngase en contacto con el organismo que gestiona la zona DNS activa de su dominio para que este apunte hacia los servidores de correo de OVHcloud.
>

### Etapa 5 - Otras opciones disponibles con los alojamientos web <a name="other-options"></a>

En función de su [plan de hosting](/links/web/hosting), existen opciones / ofertas / funcionalidades adicionales gratuitas.

**Haga clic en las opciones siguientes para ver las explicaciones.**

/// details | Los certificados SSL

Los certificados SSL permiten que su sitio web esté accesible utilizando el protocolo HTTPS. Este protocolo cifra los intercambios entre su alojamiento web y las personas que consultan su sitio web.

Independientemente del [alojamiento web](/links/web/hosting), puede activar gratuitamente un certificado SSL **Let's encrypt**.

Para más información sobre los certificados SSL (gratuitos o de pago) ofrecidos en los alojamientos web, consulte nuestra guía "[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

///

/// details | Los productos CDN

Todos nuestros productos CDN permiten guardar en caché una parte de su sitio web. Así, se reduce el tiempo de carga de las páginas que componen el sitio web, especialmente para los visitantes geográficamente alejados del datacenter en el que está alojado su alojamiento web .

Con los planes de hosting, OVHcloud ofrece 3 productos CDN:

- **CDN Basic**
- **CDN Security**
- **CDN Advanced**

Para más información, consulte nuestra guía "[Acelerar un sitio web utilizando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

> [!primary]
>
> La oferta **CDN Basic** solo está incluida de forma gratuita en los alojamientos web **Performance**.
>
> No es posible combinar varios productos CDN en un mismo alojamiento web.

///

/// details | Los servidores de bases de datos Web Cloud Databases

Si tiene un alojamiento web **Performance**, puede activar gratuitamente un servidor de bases de datos [Web Cloud Databases](/links/web/databases).

Para más información, consulte nuestra guía "[Primeros pasos con el servicio Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

///

/// details | Enviar mensajes de correo desde su sitio web

Todos nuestros [alojamientos web](/links/web/hosting) permiten enviar mensajes de correo electrónico gratuitamente desde su sitio web o un script específico.

Para más información, consulte nuestra guía "[Gestionar los mensajes de correo automatizados](/pages/web_cloud/web_hosting/mail_function_script_records)".

///

/// details | Las tareas programadas "CRON"

Las tareas CRON permiten ejecutar automáticamente scripts alojados en el alojamiento web.

Si su [plan de hosting](/links/web/hosting) dispone de esta opción, consulte nuestra guía "[Crear tareas automatizadas (CRON) en un alojamiento web](/pages/web_cloud/web_hosting/cron_tasks)" para más información.

///

## Más información

[Migrar un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Publicar un sitio web en internet](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

[Instalar su sitio web con un 'módulo en 1 clic' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Crear una dirección de correo electrónico en un MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)

[Gestionar un certificado SSL en un alojamiento web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
