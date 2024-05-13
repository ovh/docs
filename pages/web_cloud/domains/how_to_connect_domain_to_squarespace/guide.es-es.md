---
title: "Cómo conectar un dominio de OVHcloud a un alojamiento web de SquareSpace"
excerpt: "Prepara y configura la zona DNS de tu dominio de OVHcloud para conectarla a un alojamiento de SquareSpace"
updated: 2024-05-13
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Si tiene un dominio con OVHcloud y quiere conectarlo a un alojamiento SquareSpace, Esta guía explica los pasos necesarios para preparar y configurar la zona DNS de OVHcloud para alojar su sitio web en SquareSpace.

**Cómo conectar un dominio de OVHcloud a un alojamiento web de SquareSpace**

> [!warning]
>
> - El servicio de soporte de SquareSpace no tiene acceso a la configuración del dominio de OVHcloud y no puede aconsejarle sobre la información que debe proporcionarle.
>
> - La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.<br><br> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte la sección [Más](#go-further) información de esta guía.
>

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.
- Tener un [dominio](/links/web/domains){.external} registrado con OVHcloud.
- Disponer de los [permisos necesarios para gestionar](/pages/account_and_service_management/account_information/managing_contacts) el dominio desde el [área de cliente de OVHcloud](/links/manager){.external}.
- Tener contratado un plan de hosting con SquareSpace.
- Tener acceso a la gestión de este alojamiento web en SquareSpace.

## Procedimiento

Antes de seguir los dos pasos de esta guía, le recomendamos que se familiarice con la configuración de una zona DNS mediante la guía [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!warning]
>
> Su zona DNS podría estar ya preconfigurada o asociada a un alojamiento. Esta guía explica cómo identificar cada registro DNS necesario para conectarse a su alojamiento web de SquareSpace. Es necesario eliminar algunos registros para evitar conflictos con los registros DNS necesarios en esta configuración. Otros se pueden editar o crear fácilmente. Para una mejor comprensión, utilizaremos el nombre de dominio "**mydomain.ovh**" como ejemplo. Sustituya el dominio por su nombre de dominio durante la configuración.

### Configurar los registros DNS en su cuenta de OVHcloud

Conéctese al [área de cliente de OVHcloud](/links/manager){.external} en la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

Se mostrará una tabla con todos los registros DNS del dominio seleccionado.

![Zona DNS](images/tab.png){.thumbnail}

Cada registro DNS puede modificarse haciendo clic en el botón `...`{.action} a la derecha de la fila de la tabla correspondiente y haciendo clic en `Modificar el registro`{.action}.

Siga los pasos en el orden indicado en las fichas siguientes:

> [!tabs]
> **Etapa 1**
>> **Registro A**<br><br>
>> Para identificar los registros "A" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione `A`.<br>
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Haga clic en el botón `...`{.action} a la derecha de la fila de la tabla que corresponde a su nombre de dominio solo, sin subdominio (por ejemplo: `mydomain.ovh.`) y haga clic en `Editar el registro`{.action}.<br>
>> - Si hay un registro para el subdominio "www." (por ejemplo: `www.mydomain.ovh.`), deberá eliminarlo para que no entre en conflicto con el registro CNAME que vaya a introducir en el etapa 4. Haga clic en el botón `...`{.action} a la derecha de la fila correspondiente a su nombre de dominio solo con el subdominio "www." y haga clic en `Eliminar el registro`{.action}.<br>
>> - Si no tiene un registro "A" existente, haga clic en el botón `Añadir una entrada`{.action} en la parte superior derecha de su pantalla y seleccione el "Campo de registro" `A`{.action}<br><br>
>> Deberá crear cuatro registros de tipo "A" sucesivamente para completar las cuatro direcciones IPv4 relativas a SquareSpace.
>> Deje el campo **Subdominio** vacío e introduzca la primera dirección IPv4 de SquareSpace `198.185.159.144` en el campo **Destino**.
>> Haga clic en `Siguiente`{.action}, acepte su registro "A", repita la operación para las otras 3 direcciones IPv4 `198.185.159.145`; `198.49.23.144`; `198.49.23.145` y continúe con el etapa 2.
> **Etapa 2**
>> **Registro AAAA**<br><br>
>>  Para identificar los registros "AAAA" existentes, haga clic en el menú de filtros situado en la parte superior de la tabla de registros DNS y seleccione `AAAA`.<br>
>> ![dnszone](images/filter-aaaa.png){.thumbnail}<br>






## Más información <a name="go-further"></a>

[Cambiar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_general_information)

[Crear una zona DNS de OVHcloud para un dominio](/pages/web_cloud/domains/dns_zone_create)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para cambiar la gestión de un dominio a otra cuenta de cliente de OVHcloud, consulte la guía [Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts) de OVHcloud.

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.