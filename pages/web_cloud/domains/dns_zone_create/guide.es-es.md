---
title: 'Crear una zona DNS de OVHcloud para un dominio'
excerpt: 'Descubra cómo crear una zona DNS en OVHcloud para su dominio desde el área de cliente'
updated: 2024-06-26
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La zona **D**omain **N**ame **S**ystem (**DNS***) de un dominio constituye el fichero de configuración de este último. y se compone de información técnica llamada *enregistrement DNS*. La zona DNS es, en cierto modo, un centro de afilamiento.

Para más información, consulte nuestras guías:

- [Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

Existen diversos motivos por los que podría necesitar crear una zona DNS para su dominio en OVHcloud.

**Descubra cómo crear una zona DNS en OVHcloud para su dominio desde el área de cliente de OVHcloud.**

## Requisitos

- Tener un dominio.
- El dominio no debe tener ya una zona DNS (activa o no) en OVHcloud ni estar sujeto a una operación o un pedido en curso en OVHcloud.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager){.external}.

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

Conéctese a su [área de cliente de OVHcloud](/links/manager){.external} y acceda al apartado `Web cloud`{.action}. En la columna izquierda, haga clic en `Contratar`{.action} y, seguidamente, en el recuadro `Zona DNS`{.action}.

Introduzca el dominio en la nueva página, por ejemplo: *domain.tld*) para el que desea crear una zona DNS de OVHcloud. Espere a que la herramienta realice las comprobaciones necesarias sobre el dominio.

Si aparece un mensaje indicándole que no es posible crear la zona DNS, compruebe que el dominio cumple los requisitos necesarios o solicite a la persona que gestione el dominio que lo realice por usted. Una vez que todo esté bien, vuelva a intentarlo.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}

Una vez realizada la comprobación, seleccione si quiere activar los registros mínimos para la zona DNS que va a crear. Esta elección no es definitiva, ya que siempre podrá [editar los registros de la zona DNS](/pages/web_cloud/domains/dns_zone_edit) después.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}

|Activar los registros mínimos ?|Detalles|
|---|---|
|Sí|Seleccione esta opción si desea personalizar usted mismo la zona DNS más adelante.</br>![mínimo-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
|No|Seleccione esta opción si tiene previsto utilizar servicios de OVHcloud como un [alojamiento web](/links/web/hosting){.external}, ya que la zona está preconfigurada a tal efecto.</br>![no-mínimo-dns-entries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|

Una vez que haya elegido, continúe con los pasos que se indican hasta la creación de la zona DNS.

### Etapa 2: editar la zona DNS (opcional)

Una vez que haya creado la zona DNS para el dominio, ya puede editarla. Esta operación es opcional, pero puede ser necesaria para garantizar la disponibilidad de los servicios asociados al dominio (como un sitio web o los mensajes de correo electrónico).

Para editar esta zona DNS, consulte nuestra guía [Editar una zona DNS en OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

> [!primary]
>
> Si acaba de crear la zona DNS y el dominio no aparece aún en la lista de sus servicios (en la sección `Web cloud`{.action} del área de cliente de OVHcloud y, seguidamente, en la sección `Dominios`{.action}), espere entre 15 y 20 minutos y vuelva a cargar la página.
>

### Etapa 3: cambiar los servidores DNS del dominio

Una vez que la zona DNS de OVHcloud esté lista para utilizarse, comuníquela a su dominio para aplicar la configuración que contiene a dicho dominio. 

Por lo tanto, deberá obtener los **servidores DNS** de OVHcloud en los que se ha creado la zona DNS de OVHcloud para su dominio.

Para ello, conéctese al [área de cliente de OVHcloud](/links/manager){.external} y acceda al apartado `Web cloud`{.action}. En la columna izquierda, haga clic en `Dominios`{.action} y seleccione la zona DNS correspondiente. 

Lleva el nombre de su dominio y un logotipo en forma de globo etiquetado con el término *DNS* está presente a su izquierda. 

> [!primary]
> En este punto, si solo tiene un logotipo en forma de globo (sin el término *DNS* escrito en el interior), el dominio ya está gestionado en el área de cliente de OVHcloud. 
>
> Si es el contacto *Administrador* de este último, podrá en este caso cambiar directamente los **servidores DNS** con ayuda de nuestra [guía](/pages/web_cloud/domains/dns_server_edit) sobre el asunto.
>
Le recordamos que antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.
>

En la nueva página, los servidores DNS que quiera utilizar con el dominio para activar la zona DNS de OVHcloud aparecen bajo el signo `Name Servers`{.action}.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/name-servers.png){.thumbnail}

Una vez que disponga de la información, puede **modificar los servidores DNS de su dominio desde el panel que le ofrezca el proveedor que gestione dicho dominio**. Una vez realizada la operación, el cambio tardará un máximo de **48 horas** para que sea plenamente efectivo.

> [!primary]
>
Le recordamos que antes de cambiar los **servidores DNS** declarados con su dominio, compruebe que la configuración de la nueva zona DNS se ajusta a sus expectativas.
>

> [!success]
>
> Si desea personalizar los nombres de los servidores DNS asociados a la zona DNS activa de su dominio, consulte nuestra guía "[Personalizar los servidores DNS de un dominio (Glue Records)](/pages/web_cloud/domains/glue_registry)".
>

## Más información

[Todo sobre los servidores DNS](/pages/web_cloud/domains/dns_server_general_information)

[Todo sobre la zona DNS](/pages/web_cloud/domains/dns_zone_general_information)

[Todo sobre los registros DNS](/pages/web_cloud/domains/dns_zone_records)

[Editar una zona DNS de OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).