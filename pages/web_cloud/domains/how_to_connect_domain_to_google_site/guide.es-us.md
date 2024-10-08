---
title: "Cómo conectar un dominio de OVHcloud a un Google Site"
excerpt: "Prepare y configure la zona DNS de su dominio OVHcloud para conectarla a un Google Site"
updated: 2024-10-03
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Si tiene un dominio con OVHcloud y quiere conectarlo a un Google Site, Esta guía explica los pasos necesarios para preparar y configurar la zona DNS de OVHcloud con el fin de permitir la configuración de un Google Site.

**Cómo conectar un dominio de OVHcloud a un Google Site**

> [!warning]
>
> - El servicio de asistencia Google Site no tiene acceso a los parámetros de su dominio de OVHcloud y, por lo tanto, no puede aconsejarle sobre la información que deba proporcionarle.
>
> - La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.<br><br> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [Más información](#gofurther) de esta guía.
>

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.
- Tener un [dominio](/links/web/domains){.external} registrado con OVHcloud.
- Disponer de los [permisos necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el dominio desde el [área de cliente de OVHcloud](/links/manager){.external}.
- Disponer de un Google Site y ser su propietario.

## Procedimiento

Antes de seguir los dos pasos de esta guía, le recomendamos que se familiarice con la configuración de una zona DNS mediante la guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Su zona DNS podría estar ya preconfigurada o asociada a un alojamiento. Esta guía explica cómo identificar cada registro DNS necesario para conectarse al Google Site. Es necesario eliminar algunos registros para evitar conflictos con los registros DNS necesarios en esta configuración. Otros se pueden editar o crear fácilmente. Para una mejor comprensión, utilizaremos el nombre de dominio "**mydomain.ovh**" como ejemplo. Sustituya el dominio por su nombre de dominio durante la configuración.

### Etapa 1 - Configurar su Google Site

> [!warning]
>
> Solo el propietario de un Google Site puede conectarlo a un nombre de dominio. Si lo necesita, consulte cómo [cambiar el propietario del sitio web de Google](https://support.google.com/sites/answer/97934).

Si utiliza un sitio web de Google con un dominio de OVHcloud, deberá configurar su alojamiento siguiendo las instrucciones de la sección **Configurar un dominio personalizado** desde [**esta página de soporte de Google**](https://support.google.com/sites/answer/9068867?hl=es#zippy=).

### Etapa 2 - Configurar los registros DNS en su cuenta de OVHcloud

Conéctese al [área de cliente de OVHcloud](/links/manager){.external} en la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con todos los registros DNS del dominio seleccionado.

![Zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Cada registro DNS puede modificarse haciendo clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente y haciendo clic en `Modificar el registro`{.action}.

Siga los pasos en el orden indicado en las fichas siguientes:

> [!tabs]
> **Etapa 1**
>> **Registro A**<br><br>
>> Para identificar los registros "A" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione "A".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla que corresponde únicamente a su nombre de dominio, sin subdominio (por ejemplo, `mydomain.ovh.`) y seleccione `Modificar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www" (por ejemplo, `www.mydomain.ovh.`), elimínelo para que no entre en conflicto con el registro CNAME que vaya a introducir en el etapa 4. Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente a su subdominio en "www" y, seguidamente, en `Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "A" existente, haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de su pantalla y seleccione el "Campo de punteo" `A`{.action}<br><br>
>> Cree 4 registros de tipo "A" sucesivamente para indicar las 4 direcciones IPv4 relativas a Google Site.
>> Deje el campo **Subdominio** vacío e introduzca la primera dirección IPv4 de Google Site `216.239.32.21` en el campo **Destino**.
>> Haga clic en `Siguiente`{.action} y acepte el registro "A". Repita la operación para las otras tres direcciones IPv4 `216.239.34.21`, `216.239.36.21` y `216.239.38.21` y continúe con el etapa 2. Debido a que los valores de estas direcciones IP pueden cambiar, compruebe en la documentación oficial [el valor de los registros A](https://support.google.com/a/answer/2579934?hl=es&ref_topic=2721296&sjid=1037374977980680534-EU).
>>
> **Etapa 2**
>> **Registro AAAA**<br><br>
>> Para identificar los registros "AAAA" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione "AAAA".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente a su dominio solo, sin subdominio (por ejemplo, `mydomain.ovh.`) y seleccione `Eliminar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www" (por ejemplo, "www.mydomain.ovh."), elimínelo también para que no entre en conflicto con el registro CNAME que vaya a introducir en el etapa 4. Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente a su subdominio en "www" y seleccione "`Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "AAAA" existente, vaya al etapa 3.
>>
> **Etapa 3**
>> **Registro TXT**<br><br>
>> Para identificar los registros "TXT" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione " TXT ".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Si existen registros "TXT" para el dominio solo (por ejemplo, `mydomain.ovh.`) y para su subdominio "www" (por ejemplo, `www.mydomain.ovh.`), elimínelos para que no entren en conflicto con el registro CNAME que vaya a introducir en el etapa 4. Haga clic en el botón `...`{.action}" a la derecha de la fila de la tabla correspondiente a su subdominio en "www" y seleccione `Eliminar el registro`{.action}.<br>
>> - Debe crear un registro de tipo TXT. Haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de la pantalla y seleccione el "Campo de punteo" `TXT`{.action}.
>> Rellene los campos **Subdominio** y **Destino** con la información de la página "[Valores de registro TXT](https://support.google.com/a/answer/2716802?hl=es&ref_topic=2716886&sjid=3052810298579211755-EU)" de la documentación oficial. Por lo general, el valor del campo **Subdominio** está vacío y el del campo **Destino** es de tipo `google-site-verification=XXXXXXXXXXXX`.<br>
>> Haga clic en `Siguiente`{.action} para validar su registro TXT y continúe en el etapa 4.
>>
> **Etapa 4**
>> **Registro CNAME**<br><br>
>> Para identificar los registros CNAME existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione " CNAME ".
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente a su subdominio en "www" (por ejemplo: `www.mydomain.ovh.`) y seleccione `Modificar el registro`{.action}.<br>
>> - Si no tiene un registro "CNAME" existente, haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de su pantalla y seleccione el "Campo de punteo" `CNAME`{.action}.
>>
>> Complete el campo **Subdominio** con el valor `www` e introduzca `ghs.googlehosted.com.` en el campo **Destino**. Estos valores pueden cambiar, por lo que deberá revisarlos en la página "[Valores de los registros CNAME](https://support.google.com/a/answer/112038?sjid=305281029857921755-EU)" de la documentación oficial<br>
>> Haga clic en `Siguiente`{.action} para validar su registro CNAME.

La zona DNS ya está configurada para asociarse a un Google Site.

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