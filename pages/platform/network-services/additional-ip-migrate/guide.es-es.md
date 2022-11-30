---
title: Migrar una Additional IP
excerpt: "Migrar una Additional IP"
slug: migrate-additional-ip
section: Additional IP
order: 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 07/11/2022**

> [!primary]
>
> Desde el 6 de octubre de 2022, nuestra solución "Failover IP" se denomina desde ahora [Additional IP](https://www.ovhcloud.com/es-es/network/additional-ip/). Esto no afectará a sus funcionalidades.
>

## Objetivo
Esta guía explica cómo migrar una Additional IP de una instancia a otra. Por lo general, esta acción limita o elimina la posibilidad de que su servidor esté inaccesible y le permite:

- Migrar un sitio web a su «nueva versión»
- Ejecutar su actividad en un servidor replicado mientras realiza un mantenimiento o ejecuta una actualización en el servidor de producción.

## Requisitos

- Tener al menos dos instancias de Public Cloud ejecutándose
- Tener una Additional IP
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

> [!warning]
>
> No es posible mover una Additional IP entre diferentes zonas. Por ejemplo, una IP localizada en el datacenter de SBG puede moverse hacia GRA o RBX, pero no hacia BHS.
>

En el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), seleccione su proyecto en la sección `Public Cloud`{.action}.

En la columna izquierda, haga clic en `Network` y abra la sección `Public IPs`{.action}. Haga clic en la pestaña `Aditional IP`{.action}.

En este ejemplo, la dirección Additional IP enrutada a "Instancia_A" será migrada a "Instancia_B".

Haga clic en `...`{.action} en la línea de la Directorial IP y seleccione `Editar la instancia asociada`{.action}.

![Migrating Additional IP](images/migrateip_01.png){.thumbnail}

Haga clic en el menú desplegable para seleccionar la instancia de destino de la lista.

![Migrating Additional IP](images/migrateip_02.png){.thumbnail}

Acepte haciendo clic en `Adjuntar`{.action}.

Al cabo de unos segundos, el área de cliente se actualizará. Si la migración se ha realizado correctamente, se mostrará un mensaje de confirmación.

![Migrating Additional IP](images/migrateip_03.png){.thumbnail}

> [!primary]
>
La Additional IP puede configurarse en el servidor de destino antes o después de la migración. Si está pre-configurado, comenzará a responder una vez finalizada la operación de enrutamiento.
>

## Más información

[Configurar una Additional IP](https://docs.ovh.com/es/publiccloud/network-services/configure-additional-ip/)

[Importar una Additional IP](https://docs.ovh.com/es/publiccloud/network-services/import-additional-ip/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.