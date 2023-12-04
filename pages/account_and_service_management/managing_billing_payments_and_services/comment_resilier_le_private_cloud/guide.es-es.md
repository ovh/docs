---
title: Dar de baja la solución Hosted Private Cloud
excerpt: Cómo solicitar la baja de una infraestructura Hosted Private Cloud
updated: 2020-07-08
---

## Objetivo

Es posible solicitar la baja de su infraestructura Hosted Private Cloud en cualquier momento, ya sea porque la solución ya no se adapta a sus necesidades o porque ha contratado una nueva infraestructura para sustituir a la antigua. Antes de dar de baja la solución, deberá realizar una copia de seguridad de los datos almacenados.

**Esta guía explica cómo solicitar la baja de una infraestructura Hosted Private Cloud.** 

## Requisitos

- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en el menú `Servidores`{.action} > `Private Cloud`{.action}.
- Haber contratado una solución [Hosted Private Cloud](https://www.ovhcloud.com/es-es/enterprise/products/hosted-private-cloud/){.external}.

## Procedimiento

La solución Hosted Private Cloud se contrata sin período de permanencia. Sin embargo, tal como se indica en las [Condiciones Particulares del Servicio](https://www.ovh.es/soporte/documentos_legales/Condiciones_particulares_Dedicated_Cloud_2014.pdf){.external}, «todo mes comenzado es debido y pagado por adelantado».

> [!warning]
>
> Antes de dar de baja el servicio, deberá realizar una copia de seguridad de todos los datos que desee conservar. La baja del servicio conlleva la eliminación definitiva de su Hosted Private Cloud y de todos los datos alojados esta infraestructura.
>

### 1\. Solicitar la baja del servicio desde el área de cliente de OVHcloud

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, acceda al menú `Servidores`{.action} (1), haga clic en la sección `Private Cloud`{.action} (2) y seleccione su servicio en la lista (3).

En la columna «Gestión del servicio», haga clic en el botón con forma de tres puntos `...`{.action} (4) que aparece junto a la fecha de renovación. Por último, haga clic en `Eliminar el servicio`{.action} (5).

![Baja desde el área de cliente](images/resiliation1.png){.thumbnail}

Tenga en cuenta que esta acción eliminará todos los datos alojados en la infraestructura. Aunque la baja del servicio se produzca antes de que acabe el mes, el cliente no tendrá derecho a la devolución de la parte proporcional correspondiente al período restante del mes.

Haga clic en `«Aceptar»`{.action} para solicitar la baja del servicio.

![Confirmar la baja del servicio](images/resiliation2.png){.thumbnail}

Aparecerá un mensaje confirmándole que la solicitud de baja se ha enviado correctamente. A continuación, recibirá el procedimiento de confirmación de la baja del servicio por correo electrónico, en la dirección asociada a su cuenta de OVHcloud.

![Confirmar la baja del servicio](images/resiliation3.png){.thumbnail}

### 2\. Confirmar la baja del servicio

Una vez solicitada la baja del servicio, recibirá el procedimiento de confirmación por correo electrónico en la dirección asociada a su cuenta de OVHcloud. 

También puede consultar este mensaje de correo electrónico en su área de cliente de OVHcloud. Para ello, desde la página de inicio del panel de control, haga clic en el botón `Emails de servicio`{.action} que aparece en el menú de la derecha.

![Confirmar la baja del servicio](images/resiliation4.png){.thumbnail}

El objeto del mensaje será el siguiente:

> **Eliminación del Private Cloud pcc-xxx-xxx-xxx-xxx**.

Este mensaje de correo electrónico incluye un enlace desde el que podrá confirmar la baja del servicio.

> [!primary]
>
> Atención: este enlace solo es válido durante **72 horas**. Le recomendamos que solicite la baja del servicio a partir del día 25 del mes.
>

Asimismo, también es posible confirmar la solicitud de baja a través de la siguiente API:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/confirmTermination
>

Deberá introducir el token de validación disponible en el correo electrónico de confirmación de la baja del servicio.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
