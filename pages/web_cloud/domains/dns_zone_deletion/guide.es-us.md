---
title: "¿Cómo eliminar una zona DNS OVHcloud?"
excerpt: "Descubra cómo eliminar una zona DNS para un dominio desde el área de cliente de OVHcloud"
updated: 2025-10-14
---

## Objetivo

La zona **D**omain **N**ame **S**ystem (**DNS**) de un dominio es su fichero de configuración. Consta de información técnica, denominada "registros DNS"*. La zona DNS es como un centro de reenvío.

Para más información sobre las zonas y los servidores DNS, consulte las siguientes guías: 

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Por ejemplo, es posible que necesite eliminar una zona DNS para su dominio en OVHcloud en los siguientes casos (no en todos los casos):

- Si utiliza una zona DNS activa para su dominio con un proveedor distinto de OVHcloud.
- Ya no utiliza el dominio asociado a la zona DNS presente en OVHcloud.
- Ha migrado sus servicios a otro proveedor y quiere dar de baja sus servicios de OVHcloud.

> [!primary]
>
> La creación, modificación o eliminación de una zona DNS en el [área de cliente de OVHcloud](/links/manager) es totalmente gratuita.

**Descubra cómo eliminar una zona DNS en OVHcloud para un dominio desde el área de cliente de OVHcloud.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Tener una zona DNS en el área de cliente de OVHcloud.
- Disponer de los permisos necesarios sobre la zona DNS que quiera eliminar. Para más información, consulte nuestra guía "[Gestionar los contactos de sus servicios](/pages/account_and_service_management/account_information/managing_contacts)".

> [!primary]
>
> Eliminar una zona DNS no elimina el registro del nombre de dominio al que está asociada. Así pues, no perderá el dominio eliminando una zona DNS asociada al mismo.

## Procedimiento

> [!warning]
>
> Antes de continuar, compruebe que el dominio no utiliza la zona DNS que desea eliminar.
>
> En efecto, si elimina la zona DNS activa para su dominio, se interrumpirán sus servicios en línea (sitio web, direcciones de correo, etc.).
>
> Efectúe un [WHOIS](/links/web/domains-whois) de su dominio para saber si la zona DNS activa de su dominio es la que tiene en OVHcloud o no.
>
> Si la zona DNS activa para su dominio es la que tiene en OVHcloud y desea sustituirla por una zona DNS alojada en otro proveedor, consulte nuestra guía "[Modificar los servidores DNS de un dominio en OVHcloud](/pages/web_cloud/domains/dns_server_edit)" antes de eliminar cualquier zona DNS.

Haga clic en las fichas siguientes para ver cada una de las **4** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Inicie sesión en su [área de cliente de OVHcloud](/links/manager), haga clic en su nombre en la esquina superior derecha y luego en `Mis soluciones y servicios`{.action}.
>>
>> ![Mis soluciones y servicios](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}
>>
> **Etapa 2**
>>
>> En la tabla de la página que se muestra, haga clic en el botón `...`{.action} a la derecha de la zona DNS que desea cancelar, y luego en `Dar de baja mi servicio`{.action}.
>>
>> ![Cancelar](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-cancel-my-subscription.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página que aparece, indique la razón de su solicitud de cancelación y su proyecto, y luego haga clic en `Aceptar`{.action}.
>>
>> ![Cancelar el servicio](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-delete-your-service.png){.thumbnail}
>>
> **Etapa 4**
>>
>> La cancelación de su servicio tendrá lugar en la **Fecha de aplicación** indicada en la tabla "Gestión de mis ofertas y servicios". Si no ve aparecer el estado "Baja programada", actualice la página.
>>
>> > [!primary]
>> >
>> > Si desea eliminar inmediatamente una zona DNS de su [área de cliente de OVHcloud](/links/manager), realice los 4 pasos para solicitar la cancelación en la fecha de aplicación, y luego contacte con el soporte de OVHcloud creando un ticket de asistencia desde el [centro de ayuda](https://help.ovhcloud.com/csm?id=csm_get_help).
>> > En el ticket, indique la zona DNS afectada y exprese claramente su deseo de eliminarla inmediatamente sin esperar a la fecha de aplicación.

## Más información

[Gestionar los contactos de sus servicios](/pages/account_and_service_management/account_information/managing_contacts)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Crear una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_create)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).