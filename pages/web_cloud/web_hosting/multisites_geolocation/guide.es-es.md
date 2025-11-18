---
title: "¿Cómo geolocalizar un sitio web en un país específico?"
excerpt: "Esta guía explica cómo localizar un sitio web con las direcciones IP geolocalizadas disponibles en los planes de hosting de OVHcloud"
updated: 2025-08-22
---

## Objetivo

Los motores de búsqueda (Google, Bing, Yahoo...) utilizan robots de indexación y posicionamiento en todos los sitios web. Ellos priorizan los sitios geolocalizados en el país desde el que usted realiza la búsqueda.

**Ejemplo**: Si inicia una búsqueda a través de un motor de búsqueda y se encuentra en Inglaterra, los sitios web geolocalizados en Inglaterra se mostrarán más arriba en los resultados de búsqueda que los demás sitios web.

Esta geolocalización está basada en la dirección IP del alojamiento en el que se encuentra su sitio web.

La opción de geolocalización en su alojamiento puede ser útil para el posicionamiento (SEO) si su sitio web tiene como objetivo ser consultado principalmente en un país diferente al en el que se encuentra su alojamiento compartido.

**Descubra cómo geolocalizar su sitio web con nuestras direcciones IP geolocalizadas.**

## Requisitos

- Estar conectado a su [área de cliente de OVHcloud](/links/manager).
- Disponer de un [hosting OVHcloud](/links/web/hosting)
- Disponer de un [dominio](/links/web/domains)
  
## Procedimiento

Para los sitios web principalmente consultados en el extranjero y alojados en nuestra infraestructura de hosting OVHcloud, ofrecemos una opción de geolocalización por dirección IP. Permite posicionar mejor los sitios web en el país en el que está situada la dirección IP seleccionada con la opción.

Para utilizar la opción de geolocalización por IP, haga clic en las fichas siguientes para ver cada uno de los **5** etapas.

> [!tabs]
> **Etapa 1**
>>
>> Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Etapa 2**
>>
>> Haga clic en el menú `Alojamientos`{.action} y seleccione el alojamiento web correspondiente.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Etapa 3**
>>
>> En la nueva página, haga clic en la pestaña `Multisitio`{.action}.
>>
>> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/multisite.png){.thumbnail}
>>
> **Etapa 4**
>>
>> En la nueva página, aparecerá una tabla con los dominios asociados.
>>
>> ![hosting multisites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain.png){.thumbnail}
>>
>> Haga clic en el botón `...`{.action} situado a la derecha de su dominio en la tabla. Por último, haga clic en `Modificar el dominio`{.action}.
>>
> **Etapa 5**
>>
>> En la nueva ventana, marque la casilla `IP del país`{.action} para mostrar el menú desplegable.
>>
>> ![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}
>>
>> Seleccione la dirección IP del país para el que quiere geolocalizar su sitio web, de los 12 países propuestos: *República Checa, Finlandia, Francia, Alemania, Irlanda, Italia, Lituania, Países Bajos, Polonia, Portugal, España, Reino Unido*.
>>
>> Haga clic en `Siguiente`{.action} y, seguidamente, en `Aceptar`{.action} en la ventana de resumen.

> [!primary]
>
> Una vez que haya realizado los pasos anteriores y si la zona DNS activa de su dominio está íntegramente gestionada en su [área de cliente de OVHcloud](/links/manager), la entrada de tipo A en la zona DNS de su dominio se cambiará automáticamente. Puede comprobar que la dirección IP se ha actualizado correctamente con nuestra guía sobre [la edición de una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>
Si no, deberá editar el dominio manualmente al proveedor que gestione la zona DNS activa. Consulte [aquí](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) la documentación que recoge todas las direcciones IP de nuestra infraestructura de hosting de OVHcloud.
>
> En ambos casos, será necesario un plazo de propagación de **4 a 24 horas** después de la modificación para que esta sea plenamente efectiva y visible en Internet.
>

## Más información

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).