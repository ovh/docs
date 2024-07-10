---
title: Cómo conectar un dominio de OVHcloud a un alojamiento Webflow
excerpt: Prepare y configure la zona DNS de su dominio OVHcloud para conectarla a un alojamiento Webflow
updated: 2024-06-13
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Si tiene un dominio con OVHcloud y quiere conectarlo a un alojamiento Webflow, Esta guía explica los pasos necesarios para preparar y configurar la zona DNS de OVHcloud con el fin de permitir la configuración de un alojamiento Webflow.

**Cómo conectar un dominio de OVHcloud a un alojamiento Webflow**

> [!warning]
>
> - El servicio de asistencia Webflow no tiene acceso a los parámetros de su dominio de OVHcloud y, por lo tanto, no puede aconsejarle sobre la información que deba proporcionarle.
>
> - La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.<br><br> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [Más](#gofurther) información de esta guía.
>

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.
- Tener un [dominio](/links/web/domains){.external} registrado con OVHcloud.
- Disponer de los [permisos necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el dominio desde el [área de cliente de OVHcloud](/links/manager){.external}.
- Tener contratado un plan de hosting con Webflow.
- Tener acceso a la gestión de este alojamiento en Webflow.

## Procedimiento

Antes de seguir los dos pasos de esta guía, le recomendamos que se familiarice con la configuración de una zona DNS mediante la guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Su zona DNS podría estar ya preconfigurada o asociada a un alojamiento. Esta guía explica cómo identificar cada registro DNS necesario para conectarse al alojamiento Webflow. Es necesario eliminar algunos registros para evitar conflictos con los registros DNS necesarios en esta configuración. Otros se pueden editar o crear fácilmente. Para una mejor comprensión, utilizaremos el nombre de dominio "**mydomain.ovh**" como ejemplo. Sustituya el dominio por su nombre de dominio durante la configuración.

### 1. Configurar el alojamiento Webflow

Si utiliza un alojamiento web con un dominio de OVHcloud, deberá preparar el alojamiento siguiendo las instrucciones de la sección **How to connect your custom domain** de [**esta página de la documentación de Webflow*](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain).

### 2. Configurar los registros DNS en su cuenta de OVHcloud

> [!warning]
>
> Antes de continuar:
>
> - Abra una pestaña en paralelo en su navegador de internet.
> - Abra [**esta página de la documentación de Webflow**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export){.external}.
> - Acceda a la sección "**How to set your DNS records**" de la documentación Webflow.<br>
> Las siguientes instrucciones le ayudarán a configurar más fácilmente su zona DNS de OVHcloud.

Conéctese al [área de cliente de OVHcloud](/links/manager){.external} en la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con todos los registros DNS del dominio seleccionado.

![Zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Cada registro DNS puede modificarse haciendo clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente y haciendo clic en `Modificar el registro`{.action}.

Siga los pasos en el orden indicado en las fichas siguientes:

> [!tabs]
> **Paso 1**
>> **Registro A**<br><br>
>> Para identificar los registros "A" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione "A".<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla que corresponde únicamente a su nombre de dominio, sin subdominio (p. ej.: `mydomain.ovh.`) y, a continuación, en `Modificar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www" (por ejemplo, "www.mydomain.ovh."), deberá eliminarlo para que no entre en conflicto con el registro CNAME que vaya a introducir en el paso 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su dominio solo con el subdominio "www" y seleccione "`Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "A" existente, haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de su pantalla y seleccione el "Registro de direccionamiento" `A`{.action}<br><br>
>> Debe crear dos registros de tipo "A" sucesivamente para rellenar las dos direcciones IPv4 relativas a Webflow.
>> Deje el campo **Subdominio** vacío e introduzca la primera dirección IPv4 de Webflow `75.2.70.75` en el campo **Destino**.
>> Haga clic en `Siguiente`{.action} y acepte el registro "A". Repita la operación para la segunda dirección IPv4 `99.83.190.102` y continúe en el paso 2.
> **Paso 2**
>> **Registro AAAA**<br><br>
>> Para identificar los registros "AAAA" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione "AAAA".<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla que corresponde únicamente a su nombre de dominio, sin subdominio (por ejemplo, `mydomain.ovh.`) y seleccione `Eliminar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www" (p. ej.: `www.mydomain.ovh.`), elimínelo también para que no entre en conflicto con el registro CNAME que va a introducir en el paso 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su dominio con el subdominio "www" y seleccione "`Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "AAAA" existente, vaya al paso 3.
> **Paso 3**
>> **Registro TXT**<br><br>
>> Para identificar los registros "TXT" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione "TXT".<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Si existen registros "TXT" para el dominio solo (p. ej.: `mydomain.ovh.`) y para su subdominio en "www" (p. ej.: `www.mydomain.ovh.`), deberá eliminarlos para que no entren en conflicto con el registro CNAME que vaya a introducir en el paso 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su dominio solo con el subdominio "www" y seleccione "`Eliminar el registro`{.action}.<br>
>> - Debe crear un registro de tipo TXT. Haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de la pantalla y seleccione el "Registro de direccionamiento" `TXT`{.action}.
>> Complete el campo **Subdominio** con el valor `_webflow` e introduzca en el campo **Destino** el valor presente en la sección `Site settings > Publishing tab > Production`{.action} de su cuenta Webflow, de tipo `one-time-verification=XXXXXXXX`. Sustituya `XXXXXXXX` por el valor de su cuenta de Webflow.<br>
>>![dnszone](images/field-txt.png){.thumbnail}<br><br>
>> Haga clic en `Siguiente`{.action} para validar su registro TXT y continúe en el paso 4.
> **Paso 4**
>> **Registro CNAME**<br><br>
>> Para identificar los registros CNAME existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione `CNAME`.<br>
>>![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente a su subdominio en "www." (por ejemplo: `mydomain.ovh.`) y seleccione `Modificar el registro`{.action}.<br>
>> - Si no tiene un registro "CNAME" existente, haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de su pantalla y seleccione el "Registro de direccionamiento" `CNAME`{.action}.
>> Complete el campo **Subdominio** con el valor `www` e introduzca `proxy-ssl.webflow.com` en el campo **Destino**.<br>
>>![dnszone](images/field-cname.png){.thumbnail}<br><br>
>> Haga clic en `Siguiente`{.action} para validar su registro CNAME.

La zona DNS ya está configurada para asociarse a un alojamiento Webflow.

> [!primary]
>
> La comprobación del dominio puede tardar hasta 48 horas.

Si utiliza un servicio de correo de OVHcloud o tiene previsto contratar uno de [nuestros servicios de correo](/links/web/emails), deberá preparar su zona DNS en consecuencia. Para más información, consulte nuestra guía sobre la [configuración de un registro MX](/pages/web_cloud/domains/dns_zone_mx).

## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para cambiar la gestión de un dominio a otra cuenta de cliente de OVHcloud, consulte la guía [Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts) de OVHcloud.

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).