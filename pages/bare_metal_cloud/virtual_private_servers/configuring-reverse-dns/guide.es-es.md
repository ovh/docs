---
title: "Cómo configurar el registro DNS inverso de su servidor (registro PTR)"
excerpt: Cómo implementar la resolución inversa DNS de su dirección IP desde el área de cliente de OVHcloud
updated: 2026-01-06
---

## Objetivo

El registro inverso (*rDNS*) es el complemento de la resolución DNS "*forward*" que permite resolver los nombres de dominio en direcciones IP. Con el registro DNS inverso, una dirección IP puede resolverse en el nombre de dominio (o nombre de host) al que está conectada. Esto significa que las consultas DNS de la dirección IP asociada devolverán este nombre de dominio.

La configuración del registro DNS inverso de un servidor es especialmente útil cuando se envían mensajes de correo. La validación de un servidor de correo por los sistemas de protección antispam mejora si una petición DNS de la dirección IP se resuelve correctamente.

Esta guía explica cómo configurar el registro DNS inverso de su dirección IP desde el área de cliente.**

## Requisitos

- Una dirección IP asociada a un servicio de su cuenta de OVHcloud
- Un nombre de dominio con su registro `A` u `ÀAAA` ligado a su servicio
- Estar conectado a su [área de cliente de OVHcloud](/links/manager)

## Procedimiento

Conéctese a su [área de cliente de OVHcloud](/links/manager), haga clic en `Network`{.action} en el menú situado a la izquierda de la pantalla y seleccione `Direcciones IP públicas`{.action}.

El menú desplegable bajo "**Mis direcciones IP públicas y servicios asociados**" le permite filtrar sus servicios por categoría. También puede buscar una dirección IP específica mediante la barra de búsqueda situada a la izquierda del menú desplegable.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Haga clic en el botón `⁝`{.action} en la fila de la dirección IP correspondiente y seleccione `Configurar el registro DNS inverso`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

En la nueva ventana, introduzca el registro inverso y haga clic en `Confirmar`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

También puede editar el reverse directamente mediante el icono `lápiz`{.action} en la columna **Registro DNS inverso** de la tabla.

> [!warning]
> Cuando introduzca su nombre de dominio en el *reverse*, se verificará inmediatamente si el registro A apunta a la misma IP. Esto se utiliza en las procedimientos antispam, por lo tanto, su registro A debe ser válido y propagado. Hay ciertas reglas a seguir al introducir el *reverse* :
>
>  - el *reverse* no puede comenzar con un `-`
>  - el *reverse* no puede contener más de 63 caracteres
>  - el *reverse* no puede contener caracteres mayúsculos
>  - el *reverse* debe terminar con un `.`
>
> Ejemplo: "domain.tld" en el registro *reverse* sería `domain.tld.`.
>

> [!primary]
>
> Si el cambio no funciona como se espera, compruebe que el registro `A` esté correctamente configurado en la zona DNS de su nombre de dominio. La aplicación de los cambios en la zona DNS puede tardar hasta 24 horas, en caso de que acaba de modificar el registro `A`.
>
> Si el nombre de dominio está gestionado por OVHcloud como registrador **y utiliza los servidores DNS de OVHcloud**, puede consultar [este tutorial](/pages/web_cloud/domains/dns_zone_edit).
>

## Más información

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificar los servidores DNS de un dominio de OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Interactúe con nuestra [comunidad de usuarios](/links/community).