---
title: "Cómo configurar el registro DNS inverso de su servidor (registro PTR)"
excerpt: Cómo implementar la resolución inversa DNS de su dirección IPv4 o IPv6 desde el área de cliente de OVHcloud
updated: 2026-02-23
---

## Objetivo

El registro inverso (*rDNS*) es el complemento de la resolución DNS "*forward*" que permite resolver los nombres de dominio en direcciones IP. Con el registro DNS inverso, una dirección IP puede resolverse en el nombre de dominio (o nombre de host) al que está conectada. Esto significa que las consultas DNS de la dirección IP asociada devolverán este nombre de dominio.

La configuración del registro DNS inverso de un servidor es especialmente útil cuando se envían mensajes de correo. La validación de un servidor de correo por los sistemas de protección antispam mejora si una petición DNS de la dirección IP se resuelve correctamente.

**Esta guía explica cómo configurar el registro DNS inverso de su dirección IP desde el área de cliente.**

## Requisitos

- Una dirección IP asociada a un servicio de su cuenta de OVHcloud
- Un dominio con su registro `A` o `AAAA` asociado a su servicio

<!-- CP-NAV-START:network-public-ip -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Public IP](/links/control-panel/network-public-ip)
- **Ruta de navegación:** `Network`{.action} > `IP pública`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

## Procedimiento

El menú desplegable bajo "**Mis direcciones IP públicas y servicios asociados**" le permite filtrar sus servicios por categoría. También puede buscar una dirección IP específica mediante la barra de búsqueda situada a la izquierda del menú desplegable.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Haga clic en el botón `⁝`{.action} en la fila de la dirección IP correspondiente y seleccione `Configurar el registro DNS inverso`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

En la nueva ventana, introduzca el registro inverso y haga clic en `Confirmar`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

También puede editar el reverse directamente mediante el icono `lápiz`{.action} en la columna **Registro DNS inverso** de la tabla.

> [!warning]
> Al introducir su dominio en el registro inverso, comprueba de inmediato si el registro `A` / `AAAA` devuelve la misma IP. Se utiliza en los procedimientos antispam, por lo que el registro DNS debe ser válido y propagado. Existen algunas reglas a seguir al introducir el registro inverso:
>
>  - El *reverse* no puede comenzar con un `-`
>  - El *reverse* no puede contener más de 63 caracteres
>  - El *reverse* no puede contener caracteres mayúsculos
>  - El *reverse* debe terminar con un `.`
>
> Ejemplo: "domain.tld" en el registro *reverse* sería `domain.tld.`.
>

> [!primary]
>
> Si el cambio no funciona según lo previsto, compruebe que el registro `A` / `AAAA` esté correctamente configurado en la zona DNS del dominio. La aplicación de los cambios en la zona DNS puede tardar hasta 24 horas en caso de que acabe de modificar el registro.
>
> Si el nombre de dominio está gestionado por OVHcloud como registrador **y utiliza los servidores DNS de OVHcloud**, puede consultar [esta guía](/pages/web_cloud/domains/dns_zone_edit).
>

## Más información

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Interactúe con nuestra [comunidad de usuarios](/links/community).