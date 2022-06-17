---
title: 'Configure IPv6 para su sitio web'
slug: configurar-ipv6-para-su-sitio
excerpt: Cómo hacer compatible su sitio web con IPv6
section: 'Configuración del alojamiento'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 27/11/2020**

## Introducción

La red de internet funciona desde principios de los años 90 siguiendo la norma IPv4. Esta norma permite proporcionar una dirección IP a cada máquina conectada a la red de Internet: servidores pero también ordenadores, smartphones, tablets y cualquier otro dispositivo conectado a Internet. Esta norma tiene un límite importante: permite identificar algo más de 4.000 millones de dispositivos diferentes. O un dispositivo para dos personas en la Tierra.

Pronto se propuso un nuevo protocolo: **IPv6**. Permite identificar más de 340 sextillones de direcciones diferentes. Su despliegue lleva tiempo debido a cambios importantes en toda la red de Internet. 

Debido a la escasez de IPv4, cada vez resulta más difícil añadir nuevos recursos a la red de internet. Las conexiones IPv6 solo son útiles si el contenido está también disponible en este protocolo. Así, entre más sitios web tengan IPv6 y más importante será para cada actor de la red migrar a este protocolo.

Para más información, consulte el artículo de [Wikipedia](https://es.wikipedia.org/wiki/IPv6){.external} sobre el protocolo IPv6.

## Objetivo

Desde 2011, nuestros alojamientos web son compatibles con IPv6. Sin embargo, la activación de este protocolo se ha mantenido hasta hace poco como una opción opcional de configuración. 

**Esta guía explica cómo comprobar si el sitio web es compatible con IPv6 y cómo configurarlo para que sea compatible.**

## Requisitos

- Disponer de un [dominio](https://www.ovhcloud.com/es/domains/){.external} en su área de cliente de OVHcloud.
- Tener contratado un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

> [!warning]
>OVHcloud le ofrece una serie de servicios cuya configuración y gestión recae sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
>El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un [proveedor especializado](https://partner.ovhcloud.com/es/directory/) y/o el editor de <i>software</i> del servicio si tiene dificultades. Nosotros no podremos ayudarle al respecto. Puede encontrar información adicional en la sección «Más información» de esta guía.
>

Si su sitio no está configurado para IPv6, puede hacerlo añadiendo la información en la zona DNS de su dominio. Permite que los navegadores web encuentren una dirección IPv6 cuando soliciten la ubicación de su sitio web a través del nombre de dominio.

### Comprobar la compatibilidad IPv6 de su sitio web

Para probar si su sitio web es compatible con IPv6, puede utilizar el sitio [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Indica si el sitio web responde al nuevo protocolo IP. Si no es el caso, siga esta guía para hacerla compatible.

### Etapa 1: Obtener la dirección IPv6 de un alojamiento web

Conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento.

En la sección `Información general`, en el recuadro **IPv6**, copie el registro y vaya al siguiente paso.

![IPv6](images/ipv6_01.png){.thumbnail}

### Etapa 2: Configurar la zona DNS

> [!warning]
> Actualmente nuestra opción CDN no es compatible con IPv6. Si configura una dirección IPv6 en su sitio web, sus visitas no se beneficiarán de la CDN.

Para que su navegador encuentre la dirección IPv6 con su nombre de dominio, debe modificar la zona DNS asociada. Para crear un registro de tipo **AAAA**, consulte nuestra guía [Editar una zona DNS de OVHcloud](../../domains/web_hosting_como_editar_mi_zona_dns/).

Haga clic en `Dominios`{.action} y seleccione la `zona DNS`{.action} de su dominio. Haga clic en el botón `Añadir entrada`{.action} a la derecha de la tabla. Debe insertar la dirección IPv6 utilizando el tipo de registro **AAAA** y la IPv6 que se han obtenido anteriormente en el área de cliente.

![IPv6](images/ipv6_02.png){.thumbnail}

## Más información

[Editar una zona DNS de OVHcloud](../../domains/web_hosting_como_editar_mi_zona_dns/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
