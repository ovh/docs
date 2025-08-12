---
title: "Configure una dirección IPv6 para su sitio web"
excerpt: "Descubra cómo hacer compatible su sitio web con una dirección IPv6"
updated: 2025-01-28
---

## Objetivo

La red de internet funciona desde principios de los años 90 siguiendo la norma IPv4. Esta norma permite proporcionar una dirección IP X.X.X (o "X" son números entre 0 y 255) a cada una de las máquinas conectadas a la red de Internet (servidores, ordenadores, smartphones, tabletas, etc.). Sin embargo, esta norma limita el número de dispositivos conectados a Internet a unos 4.000 millones, menos de un dispositivo conectado para dos personas en la Tierra en 2022.

Como resultado, se introdujo el protocolo **IPv6** para conectar a la red Internet hasta 340 sextillones de dispositivos. Su implementación toma tiempo porque toda la red de Internet debe integrar esta nueva norma. 

Al estar menos disponibles las direcciones IPv4, es más difícil añadir nuevas máquinas a la red de Internet con la norma IPv4. No obstante, las conexiones con una dirección IPv6 solo son útiles si, por ejemplo, su sitio web también está disponible con el mismo protocolo. De este modo, cuanto más sitios web estén disponibles en IPv6, mayor será el número de actores presentes en la red de internet que transferirán sus dispositivos o máquinas a este nuevo protocolo.

Para más información, consulte el artículo de [Wikipedia](https://es.wikipedia.org/wiki/IPv6) sobre el protocolo IPv6.

Nuestros planes de hosting son compatibles con IPv6 desde 2011. Sin embargo, la activación de este protocolo ha sido hasta hace poco una opción opcional de configuración. 

**Descubra cómo comprobar si su sitio web es compatible con el protocolo IPv6 y cómo configurarlo con una dirección IPv6.**

## Requisitos

- Disponer de un [dominio](/links/web/domains) en el área de cliente de OVHcloud.
- Tener contratado un [plan de hosting](/links/web/hosting).
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición esta guía para ayudarle a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de este tutorial.
> 

Si su sitio no está configurado para funcionar con una dirección IPv6, puede añadir [la dirección IPv6 de su alojamiento compartido OVHcloud](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) a la zona DNS activa de su nombre de dominio. El objetivo es que los navegadores puedan encontrar una dirección IPv6 asociada a su sitio web a través de su nombre de dominio.

### 1 - Comprobar la compatibilidad IPv6 de su sitio web

Para comprobar si su sitio web ya utiliza una dirección IPv6, utilice el sitio web [ipv6-test.com](https://ipv6-test.com/validate.php). Indica si el sitio web responde al nuevo protocolo IP. Si no es el caso, lea más nuestra guía.

### 2 - descargar la dirección IPv6 de su alojamiento web

Haga clic en las fichas siguientes para ver cada uno de los **3** etapas.

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
>> En el cuadro **Información general**, encontrará la mención **IPv6**.
>>
>> ![IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv6.png){.thumbnail}
>>
>> Copie la dirección IP y siga leyendo esta guía.

### 3 - configurar la zona DNS activa de su dominio

> [!warning]
>
> Nuestras opciones CDN son actualmente incompatibles con las direcciones IPv6. Si configura una dirección IPv6 para su sitio web, sus visitas no se beneficiarán de la CDN.
>
> Además, la adición, modificación o eliminación de un registro DNS en la zona DNS activa de un dominio conlleva un plazo de propagación de **4 a 24 horas** para ser plenamente efectivo.
>

Para que su navegador de internet encuentre la dirección IPv6 con su nombre de dominio, deberá modificar la zona DNS activa de su dominio.

Si la zona DNS activa de su dominio está presente en OVHcloud, utilice nuestras guías "[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)" y "[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)" para crear un registro DNS de tipo **AAAA**.

De lo contrario, póngase en contacto con el proveedor DNS e indique la dirección IPv6 que se recuperó anteriormente.

## Más información <a name="go-further"></a>

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).