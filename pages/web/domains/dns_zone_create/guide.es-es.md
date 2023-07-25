---
title: 'Crear una zona DNS de OVHcloud para un dominio'
excerpt: 'Descubra cómo crear una zona DNS en OVHcloud para su dominio desde el área de cliente'
updated: 2023-07-21
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La zona **D**omain **N**ame **S**ystem (**DNS***) de un dominio constituye el fichero de configuración de este último. y se compone de información técnica llamada *enregistrement DNS*. La zona DNS es, en cierto modo, un centro de afilamiento.

Por ejemplo, puede especificar:

- La dirección IP (registros DNS de tipo *A* y *AAAA*) de su alojamiento web para mostrar su sitio web con su nombre de dominio.
- Servidores de correo (registros DNS de tipo *MX*) a los que el dominio debe redirigir los mensajes que reciba. para consultarlos en su dirección de correo electrónico personalizada con su dominio.
- Información relacionada con la seguridad o la autenticación de sus servicios (alojamiento web, servidor web, servidor de correo, etc.) asociados a su dominio (registros DNS de tipo *SPF*, *DKIM*, *DMARC*, etc.).

Si lo necesita, consulte nuestra documentación sobre [los registros DNS y la edición de una zona DNS](/pages/web/domains/dns_zone_edit) desde su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

Una zona DNS está alojada o registrada en **servidores DNS**. Son los **servidores DNS** los que deben estar declarados ante el nombre de dominio para utilizar la zona DNS que albergan. 

Los **servidores DNS** suelen funcionar por pares:

- Un servidor DNS *principal*: redirige los flujos de peticiones recibidas por el dominio hacia la zona DNS que aloja para este último. Esto permite realizar la *resolución DNS* para redirigir el flujo hacia los servicios correctos (servidores, sitio web, correo, etc.) asociados al dominio.
- Un servidor DNS *secundario*: este servidor de *espaldas* se utiliza si el servidor *principal* está saturado de peticiones, no está disponible o responde menos rápidamente que el servidor *secundario*.

Algunos proveedores DNS ofrecen 3 **servidores DNS** o más a declarar ante su dominio para activar la zona DNS en la que están alojados.

Para más información sobre los **servidores DNS**, consulte nuestra [guía](/pages/web/domains/dns_server_general_information) sobre el asunto.

Existen diversos motivos por los que podría necesitar crear una zona DNS para su dominio en OVHcloud.

**Descubra cómo crear una zona DNS en OVHcloud para su dominio desde el área de cliente de OVHcloud.**

## Requisitos

- Tener un dominio.
- El dominio no debe tener ya una zona DNS (activa o no) en OVHcloud ni estar sujeto a una operación o un pedido en curso en OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

> [!warning]
>
> Puede crear varias zonas DNS (en diferentes proveedores, proveedores o proveedores de alojamiento DNS) para un mismo dominio. No obstante, solo puede tener una zona DNS activa para su dominio. Esta restricción tiene por objeto evitar los *conflictos DNS*.
>
> La activación/desactivación de una zona DNS se realiza a partir de la declaración de los **servidores DNS** ante su nombre de dominio. Puede modificar esta declaración y cambiar los **servidores DNS** de un dominio a: 
>
> - del *registrar* donde ha registrado directamente su nombre de dominio ;
> - del proveedor que lo gestiona si pasa por un proveedor especializado para gestionar su dominio.
>
> Al modificar los **servidores DNS** de un dominio, desactiva la configuración de la antigua zona DNS aplicada en beneficio de la configuración de la nueva zona DNS (presente en los nuevos **servidores DNS** declarados).
>
> Por lo tanto, antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.
>

### Etapa 1: crear la zona DNS desde el área de cliente de OVHcloud

Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda al apartado `Web cloud`{.action}. En la columna izquierda, haga clic en `Contratar`{.action} y, seguidamente, en el recuadro `Zona DNS`{.action}.

Introduzca el dominio en la nueva página, por ejemplo: *domain.tld*) para el que desea crear una zona DNS de OVHcloud. Espere a que la herramienta realice las comprobaciones necesarias sobre el dominio.

Si aparece un mensaje indicándole que no es posible crear la zona DNS, compruebe que el dominio cumple los requisitos necesarios o solicite a la persona que gestione el dominio que lo realice por usted. Una vez que todo esté bien, vuelva a intentarlo.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Una vez realizada la comprobación, seleccione si quiere activar los registros mínimos para la zona DNS que va a crear. Esta elección no es definitiva, ya que siempre podrá [editar los registros de la zona DNS](/pages/web/domains/dns_zone_edit) después.

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

|Activar los registros mínimos ?|Detalles|
|---|---|
|Sí|Seleccione esta opción si desea personalizar usted mismo la zona DNS más adelante.</br>![mínimo-dns-entries](images/minimal.png){.thumbnail}|
|No|Seleccione esta opción si tiene previsto utilizar servicios de OVHcloud como un [alojamiento web](https://www.ovhcloud.com/es-es/web-hosting/){.external}, ya que la zona está preconfigurada a tal efecto.</br>![no-mínimo-dns-entries](images/no_minimal.png){.thumbnail}|

Una vez que haya elegido, continúe con los pasos que se indican hasta la creación de la zona DNS.

### Etapa 2: editar la zona DNS (opcional)

Una vez que haya creado la zona DNS para el dominio, ya puede editarla. Esta operación es opcional, pero puede ser necesaria para garantizar la disponibilidad de los servicios asociados al dominio (como un sitio web o los mensajes de correo electrónico).

Para editar esta zona DNS, consulte nuestra guía [Editar una zona DNS en OVHcloud](/pages/web/domains/dns_zone_edit).

> [!primary]
>
> Si acaba de crear la zona DNS y el dominio no aparece aún en la lista de sus servicios (en la sección `Web cloud`{.action} del área de cliente de OVHcloud y, seguidamente, en la sección `Dominios`{.action}), espere entre 15 y 20 minutos y vuelva a cargar la página.
>

### Etapa 3: cambiar los servidores DNS del dominio

Una vez que la zona DNS de OVHcloud esté lista para utilizarse, comuníquela a su dominio para aplicar la configuración que contiene a dicho dominio. 

Por lo tanto, deberá obtener los **servidores DNS** de OVHcloud en los que se ha creado la zona DNS de OVHcloud para su dominio.

Para ello, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} y acceda al apartado `Web cloud`{.action}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione la zona DNS correspondiente. 

Lleva el nombre de su dominio y un logotipo en forma de globo etiquetado con el término *DNS* está presente a su izquierda. 

> [!primary]
> En este punto, si solo tiene un logotipo en forma de globo (sin el término *DNS* escrito en el interior), el dominio ya está gestionado en el área de cliente de OVHcloud. 
>
> Si es el contacto *Administrador* de este último, podrá en este caso cambiar directamente los **servidores DNS** con ayuda de nuestra [guía](/pages/web/domains/dns_server_general_information) sobre el asunto.
>
Le recordamos que antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.
>

En la nueva página, los servidores DNS que quiera utilizar con el dominio para activar la zona DNS de OVHcloud aparecen bajo el signo `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Una vez que disponga de la información, puede **modificar los servidores DNS de su dominio desde el panel que le ofrezca el proveedor que gestione dicho dominio**. Una vez realizada la operación, el cambio tardará un máximo de **48 horas** para que sea plenamente efectivo.

> [!primary]
>
Le recordamos que antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.
>

## Más información

[Editar una zona DNS de OVHcloud](/pages/web/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.