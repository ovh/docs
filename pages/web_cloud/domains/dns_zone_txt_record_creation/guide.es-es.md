---
title: "Añadir un registro DNS de tipo TXT a un dominio"
excerpt: "Descubra cómo añadir un registro DNS de tipo TXT a una zona DNS gestionada en OVHcloud para un dominio"
updated: 2026-03-24
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

<!-- CP-NAV-START:web-dns-zone -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zonas DNS](/links/control-panel/web-dns-zone)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zonas DNS`{.action} > Seleccione su nombre de dominio

---
<!-- CP-NAV-END:web-dns-zone -->

## Procedimiento

> [!warning]
>
> Añadir, modificar o eliminar registros DNS en una zona DNS activa es una operación delicada. En caso de duda, contacte con un [proveedor especializado](/links/partner).

<!-- CP-STEPS-START:add-txt-record-domain -->
### Añadir un registro DNS de tipo TXT a un dominio

Haga clic en las pestañas de abajo para ver sucesivamente cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en el botón `Añadir un registro`{.action}.
>>
> **Paso 3**
>>
>> En la ventana que se abre, seleccione el registro extendido de tipo `TXT`{.action}.
>>
> **Paso 4**
>>
>> Introduzca la cadena TXT que quiera añadir en el campo `Valor *` (por ejemplo: `AbCdE-Value-of-TXT-fGhIjK`) y haga clic en `Siguiente`{.action}.
>>
> **Paso 5**
>>
>> Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-domain -->

<!-- CP-STEPS-START:add-txt-record-subdomain -->
### Añadir un registro DNS de tipo TXT para el subdominio de un dominio

Haga clic en las pestañas de abajo para ver sucesivamente cada uno de los **5** pasos.

> [!tabs]
> **Paso 1**
>>
>> Acceda a la página [Zonas DNS](/links/control-panel/web-dns-zone) y seleccione el dominio correspondiente.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Paso 2**
>>
>> Haga clic en el botón `Añadir un registro`{.action}.
>>
> **Paso 3**
>>
>> En la ventana que se abre, seleccione el registro extendido de tipo `TXT`{.action}.
>>
> **Paso 4**
>>
>> Introduzca en el campo `Subdominio` el subdominio correspondiente (por ejemplo: `www` para el subdominio `www.domain.tld`), y en el campo `Valor *`, la cadena TXT que quiera añadir (por ejemplo: `AbCdE-Value-of-TXT-fGhIjK`). Haga clic en `Siguiente`{.action}.
>>
> **Paso 5**
>>
>> Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)
- [¿Cómo crear un subdominio?](/pages/web_cloud/domains/domain_create_subdomains)
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

///
<!-- CP-STEPS-END:add-txt-record-subdomain -->

## Más información

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).
