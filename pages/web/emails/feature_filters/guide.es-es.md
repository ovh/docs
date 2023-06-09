---
title: 'Crear filtros para sus direcciones de correo'
excerpt: 'Cómo crear y configurar un filtro en una dirección de correo electrónico'
legacy_guide_number: g1973
updated: 2021-09-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 27/09/2021**

## Objetivo

Un filtro de correo permite aplicar diferentes tratamientos a los mensajes que reciba, según los criterios que usted decida.

Por ejemplo: desea que se elimine todo email que contenga "[SPAM]" en el asunto.

- Criterio = asunto del email contiene *SPAM*
- Tratamiento = eliminar el mensaje de correo

**Esta guía explica cómo crear y configurar un filtro en una dirección de correo electrónico.**

## Requisitos

- Disponer de una solución de correo MX Plan (disponible a través de: un [plan de hosting](https://www.ovhcloud.com/es/web-hosting/){.external}, el [alojamiento gratuito Start 10M](https://www.ovhcloud.com/es-es/domains/free-web-hosting/){.external} incluido con un dominio o la solución MX Plan contratada por separado.
- Tener acceso al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

> [!warning]
>
> La siguiente guía se dirige a los titulares de la solución MX Plan "histórico". Para el nuevo plan, la gestión de los filtros se realiza directamente a través del webmail OWA (**O**utlook **W**eb **A**pplication). Identifique su producto utilizando la siguiente tabla.
>

Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![Correo electrónico](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> El nombre del producto aparece en el recuadro Suscripción, en el epígrafe Producto.|![Correo electrónico](images/mxplan-starter-new-step1.png){.thumbnail}<br>El nombre del producto aparece en el recuadro Resumen, en el epígrafe Referencia del servidor.|
|Continúe leyendo esta guía en el apartado "[En la práctica](#oldmxplan)".|Para más información, consulte nuestra guía Reglas de la bandeja de entrada desde la [interfaz OWA](/pages/web/emails/creating-inbox-rules-in-owa-mx-plan).|

## En la práctica <a name="oldmxplan"></a>

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} en la sección `Web Cloud`.

Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente.

En la pestaña `Correo electrónico`{.action} de su servicio MXplan, encontrará la lista de sus direcciones de correo. En el cuadro de cuentas de correo puede verse una columna `Filtros`. Haga clic en el icono de embudo.

![correo electrónico](images/img_3239.png){.thumbnail}

A continuación, acceda a la lista de filtros actualmente configurados para esta dirección de correo.

![correo electrónico](images/img_3240.jpg){.thumbnail}

Para añadir una regla a su dirección de correo electrónico, haga clic en el botón `Añadir un filtro`{.action}.

- **Nombre del filtro:** elija un nombre para el filtro.

- **Prioridad:** define el orden de ejecución de sus filtros en un mensaje de entrada. Un filtro de prioridad 1 se ejecutará antes de un filtro de prioridad 2.

- **Activar el filtro:** desactive esta opción si desea aplicar este filtro más adelante.

### Configurar los filtros de correo

Al añadir un filtro, se mostrará la siguiente ventana:

![correo electrónico](images/img_3241.jpg){.thumbnail}

#### Reglas

Esta sección le permite definir los mensajes en los que se aplicará el filtro.

Primera elección (cabecera):

- **De:** designa la dirección de correo electrónico del remitente, por ejemplo: "Si el remitente..."
- **A:** designa la dirección de correo electrónico del destinatario, por ejemplo: "Si el destinatario..."
- **Asunto:** hace referencia al contenido del asunto del mensaje, por ejemplo: "Si el asunto del mensaje... ".
- **Otro:** indique otro elemento en la cabecera del mensaje de correo electrónico.

Segunda opción (regla):

- **spf:** Indique el valor del [registro SPF](/pages/web/domains/dns_zone_spf) que quiera tener en cuenta, por ejemplo: "... no tiene registro SPF ... ".
- **contiene:** ejemplo: "... contiene ... ".
- **no contiene:** ejemplo: "... no contiene ... ".

Tercera opción (valor):

- Ejemplo: [SPAM]

Cuarta opción (+):

- Esto permite añadir una o más condiciones para la misma acción.

#### Acciones

En esta sección se definen las acciones que debe realizar.

Puede elegir entre:

- **Aceptar:** los emails que cumplan las condiciones se recibirán normalmente.
- **Redirigir a una dirección local:** redirige los mensajes que cumplen las condiciones a una de las direcciones de correo del dominio.
- **Eliminación:** se eliminarán los mensajes de correo que cumplan las condiciones.
- **Redirigir a una dirección remota:** redirige los mensajes que cumplen las condiciones a la dirección de correo electrónico que elija.

### Ejemplos de filtros

#### Eliminar el spam

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Configuración del filtro|Asunto del mensaje|contiene|[SPAM]|eliminación|
|Lo que el filtro hará|Si el asunto del mensaje|contiene|[SPAM]|elimine el mensaje.|

#### Redirigir los emails de un destinatario

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Configuración del filtro|De|contiene|contact@domaintest.ovh|redirigir a una dirección remota: jean@otherdomain.ovh|
|Lo que el filtro hará|Si el remitente|es|contact@domaintest.ovh|reenvíe el mensaje a jean@otherdomain.ovh.|

#### Redirigir los mensajes dirigidos a una lista de correo

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Configuración del filtro|A|contiene|ml@mailing.com|Redirigir a una dirección local: recipient@mypersonaldomain.ovh|
|Lo que el filtro hará|Si el mensaje ha sido enviado a la lista de correo|denominada|ml@mailing.com|reenvíe el mensaje a mi otra dirección: recipient@mypersonaldomain.ovh|

#### Eliminar los mensajes de correo que contengan una mención no deseada, a excepción de un remitente

Se añaden dos filtros:

||Cabecera|Regla|Valor|Escenarios posibles|
|---|---|---|---|---|
|Parámetros del filtro 1|Asunto del mensaje|contiene|"money"|eliminación|
|Parámetros del filtro 2|De|no contiene|john@mybank.ovh|eliminación|

Si el asunto del mensaje contiene la palabra "money" **y el** remitente del mensaje no es "john@mybank.ovh", entonces el mensaje se eliminará:

![correo electrónico](images/img_3242.jpg){.thumbnail}

## Más información

[Primeros pasos con la solución MX Plan](/pages/web/emails/email_generalities)

[Reglas de la bandeja de entrada desde la interfaz OWA](/pages/web/emails/creating-inbox-rules-in-owa-mx-plan)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
