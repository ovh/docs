---
title: Desplazar un mantenimiento programado en su Hosted Private Cloud
excerpt: "Esta guía explica cómo descubrir un mantenimiento programado en un servicio Hosted Private Cloud powered by VMware".
slug: maintenance-rescheduling
section: Funcionalidades de OVHcloud
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

**Última actualización: 30/11/2022**

## Objetivo

Cuando se haya programado un mantenimiento en su Hosted Private Cloud, recibirá un mensaje de correo electrónico informándole de la fecha de dicho mantenimiento. Si esta fecha no es la más adecuada para usted, por ejemplo, en caso de necesidad de producción, puede aplazar el mantenimiento hasta una fecha determinada, ya sea desde el Panel de configuración de OVHcloud o a través de la API de OVHcloud.

> [!primary]
> Tratamos de adaptarnos al máximo a su uso de la infraestructura y a sus limitaciones. Sin embargo, a veces tenemos que planificar operaciones para las que no será posible modificar la fecha y/o la hora (mantenimiento de infraestructuras en las que participen varios clientes, intervenciones urgentes para evitar un incidente, etc.).
>
> A título informativo, si una fecha de mantenimiento puede ser modificada por el usuario, las nuevas fechas propuestas estarán dentro de un intervalo de tiempo reducido.

**Esta guía explica cómo transferir la fecha de un mantenimiento programado a la solución Hosted Private Cloud powered by VMware desde el Panel de configuración de OVHcloud o la API de OVHcloud.**

## Requisitos

- Haber recibido una notificación de mantenimiento por correo electrónico en la que se indique específicamente que puede "**modificar la fecha de ejecución del mantenimiento**". En caso contrario, la fecha del mantenimiento no puede modificarse.
- Ser contacto administrador o técnico de la infraestructura [Hosted Private Cloud powered by VMware](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/).
- Tienes acceso a tu [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) o al panel de [administración de sus servicios a través de la API](https://eu.api.ovh.com/).

## Procedimiento

> [!success]
> Los mensajes de correo enviados por OVHcloud también pueden accederse desde su [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).<br>
> Haga clic en su nombre en la esquina superior derecha de su pantalla y, seguidamente, en `Correo electrónico del servicio`{.action} en el menú de la derecha.

### Desde el Panel de configuración de OVHcloud

Conéctese al [Panel de configuración de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) con una cuenta de administrador.

En el menú `Hosted Private Cloud`{.action}, abra la pestaña `Operations`{.action}. Seleccione `Qué hacer`{.action} en el menú desplegable para filtrar las operaciones.

Haga clic en el botón `..`{.action} y, seguidamente, en `Modificar la fecha de tratamiento`{.action}.

![modificación de horario](images/maintenance-date-edition01.png){.thumbnail}

> [!primary]
> Si el botón `Modificar la fecha de tratamiento`{.action} está gris, significa que no se puede retrasar el mantenimiento.

Seleccione una fecha en el calendario que se le presenta. Sólo las fechas no grises son seleccionables.<br>
A continuación, introduzca manualmente una nueva hora para este mantenimiento o deje sin cambios el horario previsto inicialmente. Si supera la última hora permitida, se ofrecerá automáticamente la última hora de programación posible.<br>
**¡Atención!** Para que se tenga en cuenta, el nuevo horario ya no debe resaltarse en azul. Una vez que haya introducido el nuevo horario, haga clic junto a él en la ventana para que el horario no aparezca resaltado en azul.

Por último, haga clic en el botón `Editar`{.action} para aceptar los cambios.

![modificación de horario](images/maintenance-date-edition02.png){.thumbnail}

### Desde la API de OVHcloud

Conéctese al [panel de administración de sus servicios a través de la API](https://eu.api.ovh.com/). Para más información, consulte nuestra guía [Primeros pasos con las API de OVHcloud](https://docs.ovh.com/es/api/first-steps-with-ovh-api/).

Ejecute la siguiente llamada a la API:

> [!api]
>
> @api {POST} /dedicatedCloud/{serviceName}/task/{taskId}/changeMaintenanceExecutionDate
>

Introduzca las variables:

- serviceName: la referencia de su Hosted Private Cloud en forma `pcc-XX-XX-XX-XX`.
- taskId: referencia de la operación de mantenimiento indicada en la notificación por correo electrónico que le hemos enviado.
- executionDate: introduzca la nueva fecha de mantenimiento en formato `YYY-MM-DDTHH:MM+01:SS` (por ejemplo, 2023-01-02T08:00:00+01:00 para un mantenimiento programado el 02/01/2023 a las 08h0 0 (UTC+1).

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.