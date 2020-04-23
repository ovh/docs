---
title: 'Crear una zona DNS en OVHcloud para un dominio'
slug: crear-una-zona-dns-para-un-dominio-externo
excerpt: 'Cómo crear una zona DNS en OVHcloud para un dominio desde el área de cliente'
section: 'DNS (servidor y zona)'
order: 2
---

**Última actualización: 05/05/2020**

## Objetivo

La zona DNS (Domain Name System) de un dominio es un archivo de configuración en el que se almacena su información técnica en forma de registros. Convencionalmente, estos registros sirven de enlace entre el dominio y el servidor o servidores en los que están alojados el sitio web y las cuentas de correo electrónico.

Existen diversos motivos por los que podría necesitar crear una zona DNS para un dominio en OVHcloud.

**Esta guía explica cómo crear una zona DNS en OVHcloud para un dominio desde el área de cliente.**

## Requisitos

- Tener un dominio.
- No debe existir una operación o un pedido asociados al dominio, y este no debe disponer de otra zona DNS en OVHcloud.
- La configuración técnica del dominio debe ser correcta (estado, SOA...).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

### 1. Crear la zona DNS desde el área de cliente

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Contratar`{.action} en la columna izquierda y seleccione `Zona DNS`{.action}.

En la nueva página, introduzca el dominio para el que quiera crear una zona DNS en OVHcloud. Espere unos segundos a que la herramienta realice las comprobaciones necesarias sobre el dominio.

Si aparece un mensaje indicándole que no es posible crear la zona DNS, compruebe que el dominio cumple los requisitos. Si no pudiera usted mismo, solicite a la persona que gestione el dominio que lo compruebe por usted. A continuación, vuelva a intentarlo.

![Creación de la zona DNS](images/dns-zone-create-step1.png){.thumbnail}

Una vez realizada la comprobación, debe decidir si quiere activar los registros mínimos para la zona DNS que va a crear. Esta elección no es definitiva; más adelante podrá editar los registros de la zona DNS.

|¿Activar los registros mínimos?|Detalles|
|---|---|
|Sí|Seleccione esta opción si quiere personalizar usted mismo la zona DNS.|
|No|Seleccione esta opción si tiene previsto utilizar servicios de OVHcloud como un [alojamiento web](https://www.ovh.com/world/es/hosting/){.external}, ya que la zona está preconfigurada para ello.|

![Creación de la zona DNS](images/dns-zone-create-step2.png){.thumbnail}

Continúe las distintas etapas hasta finalizar la creación de la zona DNS.

### 2. Editar la zona DNS (opcional)

Una vez que haya creado la zona DNS para el dominio, ya puede editarla. Esta manipulación es opcional, pero puede ser necesaria para garantizar la disponibilidad de los servicios asociados al dominio (como un sitio web o una cuenta de correo electrónico).

Para editar la zona DNS, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, haga clic en `Dominios`{.action} en la columna izquierda y seleccione el dominio correspondiente. A continuación, abra la pestaña `Zona DNS`{.action}.

> [!primary]
>
> Si acaba de crear la zona DNS y el dominio no aparece en la lista de dominios, espere unos instantes y vuelva a cargar la página.
>

A continuación realice las operaciones necesarias. Para más información sobre la edición de una zona DNS, consulte nuestra guía  [Editar una zona DNS de OVHcloud](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}. Una vez que haya editado la zona DNS del dominio, los cambios tardarán entre 4 y 24 horas en propagarse y ser efectivos.

### 3. Cambiar los servidores DNS de un dominio

Una vez que esté lista la zona DNS en OVH, ya puede asociarla a su dominio. Para ello, consulte en el área de cliente cuáles son los servidores DNS de OVH activos para su dominio. Puede verlos en la zona superior de la pantalla, bajo **Name Servers**.

![Creación de la zona DNS](images/dns-zone-create-step3.png){.thumbnail}

A continuación, **edite los servidores DNS de su dominio en la interfaz del proveedor encargado de su gestión**. Una vez realizadas estas operaciones, el cambio tarda un máximo de 48 horas en propagarse y ser efectivo.

## Más información

[Editar una zona DNS de OVHcloud](https://docs.ovh.com/us/es/domains/web_hosting_como_editar_mi_zona_dns/){.external}

IntInteractúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
