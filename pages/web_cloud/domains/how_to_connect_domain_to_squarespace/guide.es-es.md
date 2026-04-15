---
title: "Conectar un nombre de dominio de OVHcloud a SquareSpace"
excerpt: "Prepare y configure la zona DNS de su nombre de dominio OVHcloud para conectarla a un alojamiento SquareSpace"
updated: 2026-03-18
---

## Objetivo

Si es titular de un nombre de dominio en OVHcloud y quiere conectarlo a un alojamiento SquareSpace, esta guía explica cómo preparar y configurar su zona DNS de OVHcloud para su alojamiento SquareSpace.

**Cómo conectar un nombre de dominio de OVHcloud a un alojamiento SquareSpace**

> [!warning]
>
> - El servicio de asistencia de SquareSpace no tiene acceso a los parámetros de su nombre de dominio de OVHcloud y, por lo tanto, no puede aconsejarle sobre la información que deba proporcionarle.
>
> - La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.<br><br> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [Más información](#go-further) de esta guía.
>

## Requisitos

- Disponer de un [nombre de dominio](/links/web/domains) registrado en OVHcloud.
- Disponer de los [permisos necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el nombre de dominio.
- Disponer de un alojamiento en SquareSpace.
- Tener acceso a la gestión de este alojamiento en SquareSpace.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedimiento

Antes de seguir los pasos de esta guía, le recomendamos que se familiarice con la configuración de una zona DNS consultando nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Su zona DNS podría estar ya preconfigurada o asociada a un alojamiento. A continuación explicamos cómo identificar cada registro DNS necesario para la conexión con su alojamiento SquareSpace. Será necesario eliminar algunos registros para evitar conflictos con los registros DNS requeridos en esta configuración. Otros simplemente deberán modificarse o crearse. Para una mejor comprensión, utilizaremos el nombre de dominio "**mydomain.ovh**" como ejemplo. Sustitúyalo por su nombre de dominio durante la configuración.

### Configurar sus registros DNS en su cuenta de OVHcloud

<!-- CP-STEPS-START:configure-dns-records -->
Haga clic en las pestañas siguientes para visualizar sucesivamente cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el nombre de dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> La tabla que se muestra lista todos los registros DNS del nombre de dominio seleccionado.
>>
> **Paso 2**
>>
>> **Configuración de los registros A**
>>
>> **1 - Identificación:** filtre los registros DNS seleccionando el tipo `A` en el menú de filtros situado en la parte superior derecha de la tabla.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Localice los registros "A" existentes para su nombre de dominio solo (ejemplo: `mydomain.ovh.`) y para el subdominio "www" (ejemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminación:** elimine todos los registros "A" existentes para el subdominio "www". Si existen más de 4 registros "A" para el nombre de dominio solo, elimine los registros excedentes para conservar solo 4. Para cada registro que deba eliminar, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> **3 - Modificación:** modifique cada registro "A" conservado para el nombre de dominio solo haciendo clic en el botón `...`{.action} y luego en `Editar el registro`{.action}. Sustituya el destino por una de las 4 direcciones IPv4 de SquareSpace (una dirección diferente por registro):
>>
>> - `198.185.159.144`
>> - `198.185.159.145`
>> - `198.49.23.144`
>> - `198.49.23.145`
>>
>> Haga clic en `Siguiente`{.action} y confirme.
>>
>> **4 - Adición:** si existían menos de 4 registros "A", cree los registros que faltan. Haga clic en `Añadir un registro`{.action} en la parte superior derecha, seleccione el campo de apuntado `A`{.action}, deje el campo **Subdominio** vacío e introduzca en el campo **Destino** cada dirección IPv4 aún no asignada. Haga clic en `Siguiente`{.action} y confirme.
>>
>> A continuación, pase al paso 3.
>>
> **Paso 3**
>>
>> **Eliminación de los registros AAAA**
>>
>> **1 - Identificación:** filtre los registros DNS seleccionando el tipo `AAAA` en el menú de filtros situado en la parte superior derecha de la tabla.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Localice los registros "AAAA" existentes para su nombre de dominio solo (ejemplo: `mydomain.ovh.`) y para el subdominio "www" (ejemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminación:** elimine todos los registros "AAAA" identificados (nombre de dominio solo y subdominio "www") para evitar un conflicto con los nuevos registros DNS. Para cada registro, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> Si no existe ningún registro "AAAA", pase al paso 4.
>>
> **Paso 4**
>>
>> **Eliminación de los registros TXT**
>>
>> **1 - Identificación:** filtre los registros DNS seleccionando el tipo `TXT` en el menú de filtros situado en la parte superior derecha de la tabla.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Localice los registros "TXT" existentes para su nombre de dominio solo (ejemplo: `mydomain.ovh.`) y para el subdominio "www" (ejemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminación:** elimine todos los registros "TXT" identificados (nombre de dominio solo y subdominio "www") para evitar un conflicto con los nuevos registros DNS. Para cada registro, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> Si no existe ningún registro "TXT", pase al paso 5.
>>
> **Paso 5**
>>
>> **Configuración de los registros CNAME**
>>
>> **1 - Identificación:** filtre los registros DNS seleccionando el tipo `CNAME` en el menú de filtros situado en la parte superior derecha de la tabla.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Localice los registros "CNAME" existentes para el subdominio "www" (ejemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminación:** si existen varios registros "CNAME" para el subdominio "www", elimínelos todos excepto uno. Para cada registro que deba eliminar, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> **3 - Modificación:** si existe un registro "CNAME" para el subdominio "www", haga clic en el botón `...`{.action} y luego en `Editar el registro`{.action}. Sustituya únicamente el **Destino** por `ext-cust.squarespace.com.`. Haga clic en `Siguiente`{.action} y confirme.
>>
>> Si no existe ningún registro "CNAME" para el subdominio "www", haga clic en `Añadir un registro`{.action} en la parte superior derecha, seleccione el campo de apuntado `CNAME`{.action}, introduzca `www` en el campo **Subdominio** y `ext-cust.squarespace.com.` en el campo **Destino**. Haga clic en `Siguiente`{.action} y confirme.
>>
>> **4 - Adición:** cree un registro CNAME de verificación introduciendo su `código único obtenido en SquareSpace` en el campo **Subdominio** y luego `verify.squarespace.com.` en el campo **Destino**. Haga clic en `Siguiente`{.action} y confirme.
<!-- CP-STEPS-END:configure-dns-records -->

La zona DNS ya está configurada para apuntar a su alojamiento SquareSpace.

### Conectar su nombre de dominio a SquareSpace

Las operaciones siguientes deben realizarse desde el panel de gestión de SquareSpace.

> [!primary]
>
> - Puede conectar su nombre de dominio a un sitio SquareSpace de prueba o de pago. No es posible conectarlo a un sitio caducado.
> - Si tiene una cuenta de correo asociada a su nombre de dominio, puede seguir utilizándola una vez que el nombre de dominio esté conectado a SquareSpace. Antes de conectar su nombre de dominio, le recomendamos que consulte esta [guía de SquareSpace](https://support.squarespace.com/hc/es/articles/217601877-Usar-un-correo-electr%C3%B3nico-del-dominio-personalizado-que-ya-posees-con-Squarespace).
> - Puede utilizar varios nombres de dominio personalizados para su sitio web. Puede conectar o registrar tantos como desee.
> - No es posible conectar un nombre de dominio personalizado a SquareSpace si el nombre de dominio incluye la palabra "squarespace" o "sqsp".

Para empezar, siga los pasos de conexión descritos en el paso 1 de esta [guía de SquareSpace](https://support.squarespace.com/hc/es/articles/12880712406797-Conectar-un-dominio-de-OVHcloud-con-tu-sitio-de-Squarespace).

> [!warning]
>
> Si recibe el mensaje de alerta "This domain is already connected to another Squarespace site" (Este nombre de dominio ya está conectado a otro sitio Squarespace), compruebe el resto de sitios web Squarespace para determinar a qué sitio está conectado el nombre de dominio. A continuación, desconéctelo de ese sitio web.

Continúe con el paso 2 de esta [guía de SquareSpace](https://support.squarespace.com/hc/es/articles/12880712406797-Conectar-un-dominio-de-OVHcloud-con-tu-sitio-de-Squarespace).

Si utiliza un servicio de correo de OVHcloud o tiene previsto contratar uno de [nuestros servicios de correo](/links/web/emails), prepare su zona DNS en consecuencia. Consulte nuestra guía sobre la "[Configuración de un registro MX](/pages/web_cloud/domains/dns_zone_mx)".

## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Crear una zona DNS de OVHcloud para un nombre de dominio](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para cambiar la gestión de un nombre de dominio a otra cuenta de cliente de OVHcloud, consulte la guía "[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)".

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
