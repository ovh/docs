---
title: "Añadir un registro DNS de tipo TXT a un dominio"
excerpt: "Descubra cómo añadir un registro DNS de tipo TXT a una zona DNS gestionada en OVHcloud para un dominio"
updated: 2025-06-23
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

¿Necesita validar un proceso de verificación o seguridad para su dominio (asociación de servicios mediante un token de validación, clave de verificación, etc.) utilizando su zona DNS? ¿Quiere añadir un valor personalizado en formato de texto a la zona DNS de su dominio?
Para ello, deberá crear un registro DNS de tipo TXT en la zona DNS activa del dominio.

**Descubra cómo añadir un registro DNS de tipo TXT a una zona DNS gestionada en OVHcloud para un dominio.**

> [!primary]
>
> Para modificar o eliminar un registro DNS de tipo TXT de una zona DNS de OVHcloud, siga nuestra guía "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Requisitos

- Tener un [dominio](/links/web/domains).
- Tener una zona DNS asociada al dominio en OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

## Procedimiento

> [!warning]
>
> Añadir, modificar o eliminar registros DNS en una zona DNS activa es una operación delicada. En caso de duda, contacte con un [proveedor especializado](/links/partner).

### Añadir un registro DNS de tipo TXT a un dominio

1. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
2. En la nueva página, haga clic en el botón `Añadir un registro`{.action}.
3. En la ventana que se abre, seleccione el registro extendido de tipo `TXT`{.action}.
4. Introduzca la cadena TXT que quiera añadir en el campo `Valor *` (por ejemplo: `AbCdE-Value-of-TXT-fGhIjK`) y haga clic en `Siguiente`{.action}.
5. Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

### Añadir un registro DNS de tipo TXT para el subdominio de un dominio

1. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
2. En la nueva página, haga clic en el botón `Añadir un registro`{.action}.
3. En la ventana que se abre, seleccione el registro extendido de tipo `TXT`{.action}.
4. Introduzca a continuación en el campo `Subdominio` el subdominio correspondiente (por ejemplo: `www` para el subdominio `www.domain.tld`), y en el campo `Valor *`, la cadena TXT que quiera añadir (por ejemplo: `AbCdE-Value-of-TXT-fGhIjK`). Haga clic en `Siguiente`{.action}.
5. Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
- [¿Cómo crear un subdominio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///

## Más información

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).