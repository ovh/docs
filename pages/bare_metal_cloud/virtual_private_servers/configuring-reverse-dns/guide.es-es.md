---
title: "Cómo configurar el registro DNS inverso de su servidor (registro PTR)"
excerpt: Cómo implementar la resolución inversa DNS de su dirección IP desde el área de cliente de OVHcloud
updated: 2025-09-18
---

## Objetivo

El registro inverso (*rDNS*) es el complemento de la resolución DNS "*forward*" que permite resolver los nombres de dominio en direcciones IP. Con el registro DNS inverso, una dirección IP puede resolverse en el nombre de dominio (o nombre de host) al que está conectada. Esto significa que las consultas DNS de la dirección IP asociada devolverán este nombre de dominio.

La configuración del registro DNS inverso de un servidor es especialmente útil cuando se envían mensajes de correo. La validación de un servidor de correo por los sistemas de protección antispam mejora si una petición DNS de la dirección IP se resuelve correctamente.

Esta guía explica cómo configurar el registro DNS inverso de su dirección IP desde el área de cliente.**

## Requisitos

- Una dirección IP asociada a un servicio de su cuenta de OVHcloud
- Un dominio con su registro `A` asociado a su servicio
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)

## Procedimiento

Conéctese a su [área de cliente de OVHcloud](/links/manager), haga clic en `Network`{.action} en el menú situado a la izquierda de la pantalla y seleccione `Direcciones IP públicas`{.action}.

Los menús desplegables de la sección **Mis direcciones IP públicas y servicios asociados** le permiten filtrar los elementos de la tabla para los servicios y encontrar rápidamente la dirección IP deseada.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Haga clic en `...`{.action} en la línea de la dirección IP correspondiente y seleccione `Modificar el registro inverso`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse.png){.thumbnail}

En la nueva ventana, introduzca el registro inverso y haga clic en `Aceptar`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse.png){.thumbnail}

También puede editar el registro inverso directamente a través del icono con forma de pluma de la columna **registro inverso** de la tabla.

> [!warning]
> Al introducir su dominio en el registro inverso, comprueba de inmediato si el registro A devuelve la misma IP. Se utiliza en los procedimientos antispam, por lo que el registro A debe ser válido y propagado. Existen algunas reglas a seguir al introducir el registro inverso:
>
>  - el registro inverso no puede empezar por un `-`
>  - el registro inverso no puede tener más de 63 caracteres.
>  - el registro inverso no puede contener caracteres en mayúscula.
>  - el registro inverso debe terminar en un `.`
>
> Por ejemplo: "domain.tld" en el registro inverso sería `domain.tld.`.
>

> [!primary]
>
> Si el cambio no funciona según lo previsto, compruebe que el registro `A` esté correctamente configurado en la zona DNS del dominio. La aplicación de los cambios en la zona DNS puede tardar hasta 24 horas en caso de que acabe de modificar el registro `A`.
>
> Si el dominio está gestionado por OVHcloud como agente registrador **y utiliza los servidores DNS de OVHcloud**, consulte la guía [esta guía](/pages/web_cloud/domains/dns_zone_edit).
>

## Más información

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Interactúe con nuestra [comunidad de usuarios](/links/community).