---
title: "Web Cloud Databases - ¿Cómo autorizar una dirección IP?"
excerpt: "Descubra cómo autorizar a una o varias direcciones IP a acceder a su solución Web Cloud Databases"
updated: 2025-07-10
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

Las soluciones [Web Cloud Databases](/links/web/databases) pueden utilizarse con servicios de OVHcloud o externos a OVHcloud.

Por defecto y por motivos de seguridad, en estas soluciones:

- Solo las direcciones IP asociadas a nuestra infraestructura de alojamientos compartidos están autorizadas a acceder al contenido de las bases de datos.
- El acceso a los logs de la solución no está restringido en función de las direcciones IP. Esto permite acceder a ella a través de un ordenador, por ejemplo.

¿Necesita cambiar estos permisos o restricciones?

**Descubra cómo autorizar una o varias direcciones IP para acceder a su solución Web Cloud Databases.**

## Requisitos

- Disponer de una solución [Web Cloud Databases](/links/web/databases).
- Conocer la dirección IP (o el intervalo de direcciones IP) que quiere autorizar en su solución.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Autorizar una dirección IP o un intervalo de direcciones IP

> [!primary]
>
> Le recordamos que, si acaba de activar su solución [Web Cloud Databases](/links/web/databases) y desea utilizarla con un plan de [hosting de OVHcloud](/links/web/hosting), las direcciones IP de estos planes están autorizadas por defecto.

Haga clic en las fichas siguientes para ver cada una de las **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Web Cloud Databases`{.action} y seleccione la solución Web Cloud Databases correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `IP autorizadas`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página, haga clic en el botón `Añadir una dirección IP/máscara`{.action} situado sobre la tabla.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Si quiere modificar una dirección IP o un rango de direcciones IP ya autorizados, haga clic directamente en el botón `...`{.action} de la columna izquierda de la línea correspondiente a la dirección IP o al rango de direcciones IP que quiera modificar y seleccione `Editar la lista blanca`{.action}.
>>
> **Etapa 5**
>>
>> En la ventana que se abre, es necesario completar varios campos:
>>
>> ![Add an IP address or mask](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP/Máscara *`{.action}: Introduzca aquí la dirección IP (por ejemplo, `203.0.113.44`) o el rango de direcciones IP (por ejemplo, `203.0.113.0/24` que represente todas las direcciones IP de `203.0.113.0` a `203.0.113.255`) que desee autorizar en su solución Web Cloud Databases.
>> - `Descripción`{.action} (opcional): Puede, por ejemplo, añadir información sobre el rol de la dirección IP o del rango de direcciones IP en cuestión.
>> - `Bases de datos`{.action}: Marque esta casilla para que la dirección IP o el rango de direcciones IP estén autorizados a acceder a las bases de datos presentes en su solución Web Cloud Databases.
>> - `SFTP`{.action}: Marque esta casilla para que la dirección IP o el rango de direcciones IP estén autorizados a acceder a los logs de su solución Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > No es recomendable marcar la casilla `Bases de datos`{.action} para autorizar el rango de direcciones IP `0.0.0.0/0` a acceder a las bases de datos.
>> >
>> > Esto permitiría autorizar el acceso a sus bases de datos a todas las direcciones IPv4 existentes.
>>
>> Una vez introducidos los datos, haga clic en el botón `Aceptar`{.action}.

## Casos particulares

**Haga clic en los siguientes casos para ver la información correspondiente.**

/// details | Intervalo de direcciones IP 0.0.0.0/0

Al activar su solución Web Cloud Databases, ya hay una línea por defecto para autorizar el acceso en **SFTP** al intervalo de direcciones IP `0.0.0.0/0`.

Esta autorización se aplica voluntariamente para permitirle acceder a los archivos de logs de su solución Web Cloud Databases sin tener que declarar la dirección IP de su punto de acceso a Internet.

Esta dirección IP puede cambiar regularmente en función de los proveedores de acceso a Internet.

Además, le recomendamos que **no** modifique este permiso y no autorice el acceso a las bases de datos de su solución Web Cloud Databases.

De hecho, esto permitiría autorizar el acceso a sus bases de datos a todas las direcciones IPv4 existentes, lo que representa un riesgo para la seguridad de sus datos.

///


/// details | Autorización de acceso a los alojamientos web de OVHcloud

Al activar la solución Web Cloud Databases, la autorización de acceso a los alojamientos web de OVHcloud se activa por defecto.

Si quiere desactivar esta autorización porque no utiliza un alojamiento web con su solución Web Cloud Databases, siga los siguientes **4** pasos:

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Web Cloud Databases`{.action} y seleccione la solución Web Cloud Databases correspondiente.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `IP autorizadas`{.action}.
>>
>> ![Authorised IPs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Etapa 4**
>>
>> Desmarque la casilla que aparece antes de `Autorizar a los alojamientos web de OVHcloud a acceder a la base de datos`{.action}.
>>
>> ![Authorised IPs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}

///

## Más información
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).