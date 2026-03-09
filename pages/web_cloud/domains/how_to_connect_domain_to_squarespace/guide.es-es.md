---
title: "Cómo conectar un nombre de dominio de OVHcloud a un alojamiento web de SquareSpace"
excerpt: "Prepara y configura la zona DNS de tu nombre de dominio de OVHcloud para conectarla a un alojamiento de SquareSpace"
updated: 2026-02-10
---

## Objetivo

Si es titular de un nombre de dominio con OVHcloud y quiere conectarlo a un alojamiento SquareSpace, esta guía explica los pasos necesarios para preparar y configurar la zona DNS de OVHcloud para alojar su sitio web en SquareSpace.

**Cómo conectar un nombre de dominio de OVHcloud a un alojamiento web de SquareSpace**

> [!warning]
>
> - El servicio de soporte de SquareSpace no tiene acceso a la configuración del nombre de dominio de OVHcloud y no puede aconsejarle sobre la información que debe proporcionarle.
>
> - La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.<br><br> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [Más](#go-further) información de esta guía.
>

## Requisitos

- Tener un [nombre de dominio](/links/web/domains) registrado con OVHcloud.
- Disponer de los [permisos necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el nombre de dominio desde el [área de cliente de OVHcloud](/links/manager).
- Tener contratado un plan de hosting con SquareSpace.
- Tener acceso a la gestión de este alojamiento web en SquareSpace.

<!-- CP-NAV-START:web-domains -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Dominios](/links/control-panel/web-domains)
- **Ruta de navegación:** `Web Cloud`{.action} > `Dominios`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedimiento

Antes de seguir los dos pasos de esta guía, le recomendamos que se familiarice con la configuración de una zona DNS mediante la guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Su zona DNS podría estar ya preconfigurada o asociada a un alojamiento. Esta guía explica cómo identificar cada registro DNS necesario para conectarse a su alojamiento web de SquareSpace. Es necesario eliminar algunos registros para evitar conflictos con los registros DNS necesarios en esta configuración. Otros se pueden editar o crear fácilmente. Para una mejor comprensión, utilizaremos el nombre de dominio "**mydomain.ovh**" como ejemplo. Sustituya el nombre de dominio por su nombre de dominio durante la configuración.

### Configurar los registros DNS en su cuenta de OVHcloud

Conéctese al [área de cliente de OVHcloud](/links/manager) en la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el nombre de dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con todos los registros DNS del nombre de dominio seleccionado.

![Zona DNS](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Cada registro DNS puede modificarse haciendo clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente y haciendo clic en `Modificar el registro`{.action}.

Siga los pasos en el orden indicado en las fichas siguientes:

> [!tabs]
> **Etapa 1**
>> **Registro A**<br><br>
>> Para identificar los registros "A" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione `A`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}<br>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla que corresponde a su nombre de dominio solo, sin subdominio (por ejemplo: `mydomain.ovh.`) y haga clic en `Editar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www." (por ejemplo: `www.mydomain.ovh.`), deberá eliminarlo para que no entre en conflicto con el registro CNAME que vaya a introducir en el etapa 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su nombre de dominio solo con el subdominio "www." y haga clic en `Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "A" existente, haga clic en el botón `Añadir una entrada`{.action} en la parte superior derecha de su pantalla y seleccione el "Campo de registro" `A`{.action}<br><br>
>> Deberá crear cuatro registros de tipo "A" sucesivamente para completar las cuatro direcciones IPv4 relativas a SquareSpace.
>> Deje el campo **Subdominio** vacío e introduzca la primera dirección IPv4 de SquareSpace `198.185.159.144` en el campo **Destino**.
>> Haga clic en `Siguiente`{.action}, acepte su registro "A", repita la operación para las otras 3 direcciones IPv4 `198.185.159.145`; `198.49.23.144`; `198.49.23.145` y continúe con el etapa 2.
> **Etapa 2**
>> **Registro AAAA**<br><br>
>>  Para identificar los registros "AAAA" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione `AAAA`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla que corresponde únicamente a su nombre de dominio, sin subdominio (por ejemplo, `mydomain.ovh.`) y seleccione `Eliminar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www" (p. ej.: `www.mydomain.ovh.`), elimínelo también para que no entre en conflicto con el registro CNAME que va a introducir en el etapa 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su dominio con el subdominio "www" y seleccione `Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "AAAA" existente, vaya al etapa 3.
> **Etapa 3**
>> **Registro TXT**<br><br>
>> Para identificar los registros "TXT" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione "TXT".<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}<br>
>> - Si existen registros "TXT" para el nombre de dominio solo (p. ej.: `mydomain.ovh.`) y para su subdominio en "www" (p. ej.: `www.mydomain.ovh.`), deberá eliminarlos para que no entren en conflicto con el registro CNAME que vaya a introducir en el paso 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su nombre de dominio solo con el subdominio "www" y seleccione "`Eliminar el registro`{.action}.<br>
> **Etapa 4**
>> **Registro CNAME**<br><br>
>> Para identificar los registros CNAME existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente a su subdominio en "www" (por ejemplo: `mydomain.ovh.`) y seleccione `Modificar el registro`{.action}.<br>
>> - Si no tiene un registro "CNAME" existente, haga clic en el botón `Añadir un registro`{.action} en la parte superior derecha de su pantalla y seleccione el "Campo de punteo" `CNAME`{.action}.
>> Complete el campo **Subdominio** con el valor `www` e introduzca `verify.squarespace.com.` en el campo **Destino**.<br>
>> ![cname-entry](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Haga clic en `Siguiente`{.action} y acepte el registro CNAME.
>> Agregue el segundo registro CNAME introduciendo `ext-cust.squarespace.com.` en el campo **Destino**.<br>

La zona DNS ya está configurada para asociarse a un alojamiento SquareSpace.

### Conectar un nombre de dominio a SquareSpace

Para ello, acceda al área de cliente de SquareSpace y realice las operaciones necesarias.

> [!primary]
>
> - Puede conectar su nombre de dominio a un sitio SquareSpace de prueba o de pago. No se puede conectar a un sitio caducado.
> - Si tiene una cuenta de correo asociada a su nombre de dominio, puede seguir utilizándola una vez que el nombre de dominio se haya conectado a SquareSpace. Antes de conectar el nombre de dominio, le recomendamos que lea esta [guía de SquareSpace](https://support.squarespace.com/hc/es/articles/217601877-Usar-un-correo-electr%C3%B3nico-del-dominio-personalizado-que-ya-posees-con-Squarespace).
> - Puede utilizar varios nombres de dominio personalizados para su sitio web. Puede conectar o guardar tantas como desee.
> - No es posible conectar un nombre de dominio personalizado a SquareSpace si el nombre de dominio incluye las palabras "squarespace" o "sqsp".

Para empezar, siga los pasos de conexión descritos en el paso 1 de esta [guía SquareSpace](https://support.squarespace.com/hc/es/articles/12880712406797-Conectar-un-dominio-de-OVHcloud-con-tu-sitio-de-Squarespace).

> [!warning]
>
> Si recibe el mensaje de alerta "This domain is already connected to another Squarespace site" (Este nombre de dominio ya está conectado a otro sitio Squarespace), compruebe el resto de sitios web Squarespace para determinar a qué sitio está conectado el nombre de dominio. A continuación, desconéctelo de este sitio web.

Para continuar el proceso, prosiga con el paso 2 de esta [guía SquareSpace](https://support.squarespace.com/hc/es/articles/12880712406797-Conectar-un-dominio-de-OVHcloud-con-tu-sitio-de-Squarespace).

Si utiliza un servicio de correo de OVHcloud o tiene previsto contratar uno de [nuestros servicios de correo](/links/web/emails), configure su zona DNS en consecuencia. Para más información, consulte nuestra guía "[Configuración de un registro MX](/pages/web_cloud/domains/dns_zone_mx)".

## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un nombre de dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Crear una zona DNS de OVHcloud para un nombre de dominio](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para cambiar la gestión de un nombre de dominio a otra cuenta de cliente de OVHcloud, consulte la guía [Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts) de OVHcloud.

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
