---
title: "Añadir un registro DNS de tipo AAAA a un dominio"
excerpt: "Descubra cómo añadir un registro DNS de tipo AAAA a una zona DNS gestionada en OVHcloud para un dominio"
updated: 2025-05-15
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

¿Desea que su sitio web sea accesible a través de su nombre de dominio? Para ello, el dominio debe apuntar a la dirección IP del servicio en el que esté alojado el sitio web (alojamiento web, servidor dedicado, VPS, etc.). A continuación, deberá configurar la zona DNS activa del dominio con un registro DNS de tipo AAAA.

**Descubra cómo añadir un registro DNS de tipo AAAA a una zona DNS gestionada en OVHcloud para un dominio.**

> [!primary]
>
> Para modificar o eliminar un registro DNS de tipo AAAA de una zona DNS de OVHcloud, siga [esta guía](/pages/web_cloud/domains/dns_zone_edit).

## Requisitos

- Tener un [dominio](/links/web/domains).
- Tener una zona DNS asociada al dominio en OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

## Procedimiento

> [!warning]
>
> Añadir, modificar o eliminar registros DNS en una zona DNS activa es una operación delicada. En caso de duda, contacte con un [proveedor especializado](/links/partner).

### Añadir un registro DNS de tipo AAAA a un dominio

1. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
2. En la nueva página, haga clic en el botón `Añadir un registro`{.action}.
3. En la ventana que se abre, seleccione el tipo de registro `AAAA`{.action}.
4. Introduzca a continuación la dirección IP (por ejemplo, `2001:db8:1:1b00:203:0:113:0`) del servicio en el que esté situado su sitio web (alojamiento web, servidor dedicado, VPS, etc.) y haga clic en `Siguiente`{.action}.
5. Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records).
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Web hosting - Modificar un dominio ya asociado a un alojamiento](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

### Añadir un registro DNS de tipo AAAA para el subdominio de un dominio

1. Haga clic en el menú `Zonas DNS`{.action} y seleccione el dominio correspondiente.
2. En la nueva página, haga clic en el botón `Añadir un registro`{.action}.
3. En la ventana que se abre, seleccione el tipo de registro `AAAA`{.action}.
4. Introduzca a continuación el subdominio correspondiente (por ejemplo, `www` para el subdominio `www.domain.tld`) en el campo `Subdominio` y la dirección IP (por ejemplo, `2001:db8:1:1b00:203:0:113:0`) del servicio en el que esté situado el sitio web (alojamiento web, servidor dedicado, VPS, etc.) en el campo `Destino *`. Haga clic en `Siguiente`{.action}.
5. Revise el resumen y haga clic en `Aceptar`{.action}. Espere hasta **24** horas para que la propagación de la adición en la red DNS sea plenamente efectiva.

/// details | Haga clic aquí para obtener más información.

Consulte nuestras guías detalladas:

- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information).
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records).
- [¿Cómo crear un subdominio?](/pages/web_cloud/domains/domain_create_subdomains).
- [Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Alojar varios sitios web en un mismo hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Web hosting - Modificar un dominio ya asociado a un alojamiento](/pages/web_cloud/web_hosting/multisites_modify_domain).

///

## Más información

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information).

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).