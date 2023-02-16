---
title: 'Crear filtros para sus direcciones de correo'
excerpt: 'Cómo crear y configurar un filtro en una dirección de correo electrónico'
slug: correo_configuracion_de_los_filtros_de_correo_desde_el_area_de_cliente
legacy_guide_number: g1973
section: Gestión de la cuenta de correo
order: 04
updated: 2021-09-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 12/08/2020**

## Objetivo

Un filtro permite configurar las condiciones de los mensajes de correo que usted reciba y las acciones que se desprenden de ellos.

Por ejemplo: desea que se elimine todo email que contenga "[SPAM]" en el asunto.

- Condición = el asunto del mensaje de correo contiene *SPAM*
- Acción = eliminar el email

**Cómo crear y configurar un filtro en una dirección de correo electrónico**

## Requisitos

- Tener una solución de correo MX Plan o un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/){.external} .
- Tener acceso al [área de cliente](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

En primer lugar, conéctese al [área de cliente](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente.

En la tabla, que recoge las direcciones de correo, haga clic en el icono `Filtro`{.action} de la dirección en cuestión.

![correo electrónico](images/img_3239.png){.thumbnail}

Acceda a la lista de filtros actualmente configurados para esta dirección de correo. Para añadir un filtro, haga clic en el botón a la derecha `Añadir un filtro`{.action}.

![correo electrónico](images/img_3240.jpg){.thumbnail}

### Configurar los filtros de correo

![correo electrónico](images/img_3241.jpg){.thumbnail}

#### Campo

- **Nombre del filtro:** para diferenciar los filtros en el área de cliente.
- **Prioridad:** para configurar el orden de ejecución de los filtros en una misma cuenta de correo. Un filtro de prioridad 1 se ejecutará antes de un filtro de prioridad 5.
- **Activar el filtro:** Esto determina si el filtro será efectivo o no (puede crear un filtro desmarcando la opción si desea activarlo más adelante, por ejemplo).

#### Reglas

Aquí es donde va a configurar las condiciones, las reglas del filtro.

Primera elección (Cabecera):

- **De:** Coincide con el remitente, por ejemplo: "Si el remitente..."
- **A:** Coincide con el destinatario, por ejemplo: "Si el destinatario..."
- **Asunto:** Coincide con el asunto del mensaje, por ejemplo: "Si el tema del mensaje..."
- **Otro:** Otro parámetro

Segunda opción (Regla):

- **spf:** Parámetro dependiente del registro SPF, por ejemplo: "... no tiene registro SPF ..."
- **contiene:** ejemplo: "... contiene ..."
- **no contiene:** ejemplo: "... no contiene ..."

Tercera elección (valor):

- Ejemplo: [SPAM]

Cuarta opción (+):

- Esto le permite añadir una o más condiciones para la misma acción.

**Resultado de estas condiciones** - Ejemplo: "Si el asunto del mensaje contiene [SPAM]"

#### Acciones

Aquí es donde van a elegir qué hará el filtro si se cumplen las condiciones de arriba.

Puede elegir entre:

- **Aceptar:** Los mensajes que cumplan las condiciones se recibirán normalmente.
- **Redirigir a una dirección local:** Redirige los mensajes de correo que cumplen las condiciones hacia una de las direcciones de correo del dominio.
- **Eliminación:** Se eliminarán los mensajes de correo que cumplan las condiciones.
- **Redirigir a una dirección remota:** Redirige los mensajes de correo que cumplen las condiciones a la dirección de correo que usted elija.

### Ejemplos

#### Eliminar el spam

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Configuración del filtro|Asunto del mensaje|contiene|[SPAM]|eliminación|
|Lo que el filtro hará|Si el asunto del mensaje|contiene|[SPAM]|elimine el mensaje.|

#### Redirigir los emails de un destinatario

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Configuración del filtro|De|contiene|contact@domaintest.ovh|redirigir a una dirección remota: john@otherdomain.ovh|
|Lo que el filtro hará|Si el remitente|es|contact@domaintest.ovh|reenvíe el mensaje a john@otherdomain.ovh.|

#### Redirigir los mensajes dirigidos a una lista de correo

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Configuración del filtro|À|contiene|ML@mailing.com|Redirigir a una dirección local: recipient@mypersonaldomain.ovh|
|Lo que el filtro hará|Si el mensaje ha sido enviado a la lista de correo|denominada|ML@mailing.com|reenvíe el mensaje a mi otra dirección: recipient@mypersonaldomain.ovh|

#### Eliminar los mensajes de correo que contengan una mención no deseada, a excepción de un remitente 

Se añaden dos filtros:

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Parámetros del filtro 1|Asunto del mensaje|contiene|"money"|eliminación|
|Parámetros del filtro 2|De|no contiene|john@mybank.ovh|eliminación|

Si el asunto del mensaje contiene la palabra "money", **y** el remitente del mensaje no es "john@mybank.ovh", entonces el mensaje se eliminará.

En ese caso, la configuración será la siguiente:

![correo electrónico](images/img_3242.jpg){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
