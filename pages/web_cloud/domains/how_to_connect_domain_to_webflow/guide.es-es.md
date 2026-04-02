---
title: "Conectar un nombre de dominio de OVHcloud a Webflow"
excerpt: Prepare y configure la zona DNS de su nombre de dominio OVHcloud para conectarla a un alojamiento Webflow
updated: 2026-03-18
---

## Objetivo

Si es titular de un nombre de dominio en OVHcloud y quiere conectarlo a un alojamiento Webflow, esta guía explica cómo preparar y configurar su zona DNS de OVHcloud para su alojamiento Webflow.

**Cómo conectar un nombre de dominio de OVHcloud a un alojamiento Webflow**

> [!warning]
>
> - El servicio de asistencia de Webflow no tiene acceso a los parámetros de su nombre de dominio de OVHcloud y, por lo tanto, no puede aconsejarle sobre la información que deba proporcionarle.
> - La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.<br><br> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [Más información](#go-further) de esta guía.
>

## Requisitos

- Disponer de un [nombre de dominio](/links/web/domains) registrado en OVHcloud.
- Disponer de los [permisos necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el nombre de dominio.
- Disponer de un alojamiento en Webflow.
- Tener acceso a la gestión de este alojamiento en Webflow.

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedimiento

Antes de seguir los pasos de esta guía, le recomendamos que consulte nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Su zona DNS podría estar ya preconfigurada o asociada a un alojamiento. A continuación explicamos cómo identificar cada registro DNS necesario para la conexión con su alojamiento Webflow. Será necesario eliminar algunos registros para evitar conflictos con los registros DNS requeridos en esta configuración. Otros simplemente deberán modificarse o crearse. Para una mejor comprensión, utilizaremos el nombre de dominio "**mydomain.ovh**" como ejemplo. Sustitúyalo por su nombre de dominio durante la configuración.

### 1. Configurar su alojamiento Webflow

Prepare primero su alojamiento Webflow siguiendo las instrucciones de la sección **How to connect your custom domain** desde [**esta página de la documentación de Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Configurar sus registros DNS en su cuenta de OVHcloud

> [!warning]
>
> Antes de continuar:
>
> - Abra una pestaña en paralelo en su navegador de internet.
> - Abra [**esta página de la documentación de Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export).
> - Acceda a la sección "**How to set your DNS records**" de la documentación de Webflow.<br>
> Las siguientes instrucciones le ayudarán a configurar más fácilmente su zona DNS de OVHcloud.

Haga clic en las pestañas siguientes para visualizar sucesivamente cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el nombre de dominio correspondiente.
>>
>> ![Zonas DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> La tabla lista los registros DNS del nombre de dominio seleccionado.
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
>> **2 - Eliminación:** elimine todos los registros "A" existentes para el subdominio "www". Si existen más de 2 registros "A" para el nombre de dominio solo, elimine los registros excedentes para conservar solo 2. Para cada registro que deba eliminar, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> **3 - Modificación:** modifique cada registro "A" conservado para el nombre de dominio solo haciendo clic en el botón `...`{.action} y luego en `Editar el registro`{.action}. Sustituya el destino por una de las 2 direcciones IPv4 de Webflow (una dirección diferente por registro):
>>
>> - `75.2.70.75`
>> - `99.83.190.102`
>>
>> Haga clic en `Siguiente`{.action} y confirme.
>>
>> **4 - Adición:** si existían menos de 2 registros "A", cree los registros que faltan. Haga clic en `Añadir un registro`{.action} en la parte superior derecha, seleccione el campo de apuntado `A`{.action}, deje el campo **Subdominio** vacío e introduzca en el campo **Destino** cada dirección IPv4 aún no asignada. Haga clic en `Siguiente`{.action} y confirme.
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
>> **Configuración del registro TXT**
>>
>> **1 - Identificación:** filtre los registros DNS seleccionando el tipo `TXT` en el menú de filtros situado en la parte superior derecha de la tabla.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Localice los registros "TXT" existentes para su nombre de dominio solo (ejemplo: `mydomain.ovh.`) y para el subdominio "www" (ejemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminación:** elimine todos los registros "TXT" identificados (nombre de dominio solo y subdominio "www") para evitar un conflicto con los nuevos registros DNS. Para cada registro, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> **3 - Adición:** cree un registro TXT de verificación. Haga clic en `Añadir un registro`{.action} en la parte superior derecha, seleccione el campo de apuntado `TXT`{.action}, introduzca `_webflow` en el campo **Subdominio** y en el campo **Destino** el valor de tipo `one-time-verification=XXXXXXXX` presente en la sección `Site settings > Publishing tab > Production`{.action} de su cuenta Webflow. Haga clic en `Siguiente`{.action} y confirme.
>>
>> A continuación, pase al paso 5.
>>
> **Paso 5**
>>
>> **Configuración del registro CNAME**
>>
>> **1 - Identificación:** filtre los registros DNS seleccionando el tipo `CNAME` en el menú de filtros situado en la parte superior derecha de la tabla.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Localice los registros "CNAME" existentes para el subdominio "www" (ejemplo: `www.mydomain.ovh.`).
>>
>> **2 - Eliminación:** si existen varios registros "CNAME" para el subdominio "www", elimínelos todos excepto uno. Para cada registro que deba eliminar, haga clic en el botón `...`{.action} a la derecha de la línea correspondiente y luego en `Eliminar el registro`{.action}.
>>
>> **3 - Modificación:** si existe un registro "CNAME" para el subdominio "www", haga clic en el botón `...`{.action} y luego en `Editar el registro`{.action}. Sustituya únicamente el **Destino** por `proxy-ssl.webflow.com.`. Haga clic en `Siguiente`{.action} y confirme.
>>
>> Si no existe ningún registro "CNAME" para el subdominio "www", haga clic en `Añadir un registro`{.action} en la parte superior derecha, seleccione el campo de apuntado `CNAME`{.action}, introduzca `www` en el campo **Subdominio** y `proxy-ssl.webflow.com.` en el campo **Destino**. Haga clic en `Siguiente`{.action} y confirme.

La zona DNS ya está configurada para apuntar a su alojamiento Webflow.

> [!primary]
>
> La verificación de su nombre de dominio puede tardar hasta 48 horas.

Si utiliza un servicio de correo de OVHcloud o tiene previsto contratar uno de [nuestros servicios de correo](/links/web/emails), deberá preparar su zona DNS en consecuencia. Consulte nuestra guía sobre la [configuración de un registro MX](/pages/web_cloud/domains/dns_zone_mx).

## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Crear una zona DNS de OVHcloud para un nombre de dominio](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para cambiar la gestión de un nombre de dominio a otra cuenta de cliente de OVHcloud, consulte la guía "[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)".

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
