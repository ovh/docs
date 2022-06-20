---
title: 'Crear un DNS secundario en un servidor dedicado'
slug: crear-dns-secundario-servidor-dedicado
excerpt: 'Cómo crear un DNS secundario en un servidor dedicado de OVHcloud'
section: 'Uso avanzado'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 12/01/2021**

## Objetivo

Si configura su servidor dedicado como servidor DNS, puede utilizar el DNS de OVHcloud secundario para alojar una zona secundaria. De este modo, el DNS del dominio seguirá disponible aunque el servidor DNS principal no responda.

**Esta guía explica cómo añadir un dominio al área de cliente de OVHcloud para utilizar un servidor DNS secundario.**


## Requisitos

- Tener un [servidor dedicado](https://www.ovhcloud.com/es-es/bare-metal/){.external}.
- Tener un [dominio](https://www.ovhcloud.com/es-es/domains/){.external} gestionado administrativa o técnicamente.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene dificultades o dudas con respecto a la administración, el uso o la ejecución de los servicios en un servidor, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/directory/).
> 


## Procedimiento

### Añadir un dominio <a name="ajoutdomaine"></a>

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), acceda a la sección `Bare Metal Cloud`{.action} y seleccione su servidor bajo `Servidores dedicados`{.action}.

A continuación, abra la pestaña `DNS secundaria`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

![DNS secundario](images/cp-01.png){.thumbnail}

Introduzca la dirección IP y el dominio a añadir y haga clic en `Siguiente`{.action}.

![DNS secundario](images/cp-02.png){.thumbnail}

Una vez que haya hecho clic en `Siguiente`{.action} en esta etapa, se activará la verificación del dominio. Si todavía no ha añadido un registro TXT a su zona DNS, siga las indicaciones [que se ofrecen a continuación](#verificationdomaine). En caso contrario, haga clic en `Siguiente`{.action}.

![DNS secundario](images/cp-03.png){.thumbnail}

Después de hacer clic en `Añadir`{.action} en la última ventana, el dominio se añadirá al servidor DNS secundario de OVHcloud.

Los dominios añadidos se listarán en esta pestaña y pueden eliminarse haciendo clic en el botón `...`{.action}. El nombre del servidor DNS secundario se muestra junto al dominio.

![DNS secundario](images/cp-05.png){.thumbnail}

> [!primary]
>
> Otras acciones necesarias para configurar su propio DNS para su dominio son, por lo general, las siguientes:
>
> - configuración de un servicio DNS (como *BIND*)
> - configuración de los registros Glue
> - autorización de transferencias de zona
>
> Si necesita más información para completar estas tareas administrativas, consulte la documentación externa correspondiente.

### Verificación de la autorización para el dominio <a name="verificationdomaine"></a>

Es necesario confirmar la autorización para gestionar el dominio antes de poder añadirlo al DNS secundario de OVHcloud. Esto se realiza a través de una búsqueda DNS automatizada en el subdominio *ownercheck.sudominio*. Para ello, se genera una única cadena que se muestra en el área de cliente de OVHcloud.

- Si el dominio es gestionado por un agente registrador externo o utiliza servidores DNS externos en esta etapa, conéctese al área de cliente de su proveedor DNS y añada un registro TXT con el subdominio "ownercheck" y el valor proporcionado en el paso 2 de la [adición de dominio"](#ajoutdomaine).

- Si el dominio es gestionado por OVHcloud como servidor de registro y utiliza servidores DNS de OVHcloud, cierre la ventana haciendo clic en `Cancelar`{.action}. A continuación, siga las indicaciones de [esta guía](../../domains/web_hosting_como_editar_mi_zona_dns/) para añadir el registro TXT al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

![DNS secundario](images/cp-04.png){.thumbnail}

Una vez que haya añadido correctamente el registro TXT a la zona DNS del dominio, repita los [pasos anteriores](#ajoutdomaine) y complete el procedimiento.

## Más información

[Editar una zona DNS de OVHcloud](../../domains/web_hosting_como_editar_mi_zona_dns/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
