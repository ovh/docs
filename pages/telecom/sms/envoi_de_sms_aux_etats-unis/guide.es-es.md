---
title: 'Envío de SMS a Estados Unidos'
slug: envio_de_sms_a_estados_unidos
excerpt: 'Cómo enviar SMS a Estados Unidos'
legacy_guide_number: g1754
section: 'Enviar SMS'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 05/08/2022**

## Objetivo

El envío de SMS a Estados Unidos está sujeto a normas específicas. Esta guía explica en qué consisten estas normas y cómo enviar SMS a este país.

## Requisitos

- Disponer de una cuenta de SMS en OVHcloud con saldo de SMS.
- Conectarse a la [API de OVHcloud](https://api.ovh.com/console/) (solo para el método de envío a través de la API).
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Telecom`{.action}{.action} > `SMS`{.action}.

![área de cliente Telecom SMS](https://raw.githubusercontent.com/ovh/docs/master/templates/control-panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedimiento

### 1. Conocer las restricciones

De acuerdo con la autoridad reguladora de SMS en Estados Unidos (Neustar), el envío de SMS a este país requiere la validación previa de una plantilla de mensaje por parte del equipo de OVHcloud.
Así pues, solo están autorizados los mensajes de alerta y de doble autenticación, y no se aceptará ninguna plantilla de SMS publicitario. Una vez validada la plantilla, los SMS se enviarán de la misma forma que para los demás países.

Es posible solicitar la validación de varias plantillas de mensajes.

> [!primary]
>
La validación de las plantillas de mensajes, realizada por el equipo de OVHcloud, es gratuita y puede durar entre uno y dos días laborables.
>

### 2. Añadir un modelo

#### 2.1. Desde el área de cliente

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external} en la sección `Telecom`{.action}. Haga clic en `SMS`{.action} y seleccione su cuenta de SMS. A continuación, haga clic en la pestaña `Mensaje y campaña`{.action} y, seguidamente, en `Gestión de SMS`{.action}.

Por último, haga clic en `Gestionar las plantillas`{.action}.

![SMS a Estados Unidos](images/smstousa1.png){.thumbnail}

Haga clic en el botón `Acción`{.action} y, a continuación, seleccione `Añadir`{.action}.

![SMS a Estados Unidos](images/smstousa2.png){.thumbnail}

Rellene los campos en la ventaja emergente que aparece.

![SMS a Estados Unidos](images/smstousa3.png){.thumbnail}


| Registro       | Descripción                                                                                                      |
|-------------|------------------------------------------------------------------------------------------------------------------|
| Nombre         | Nombre de la plantilla                                                                                                  |
| Actividad    | Seleccione el tipo de plantilla:<br>\- Alerta<br>\- Autenticación<br>\- Sistema de tratamiento transaccional |
| Descripción | Descripción de la plantilla                                                                                            |
| Plantilla      | Escribir la plantilla. Es posible incluir variables delimitadas con el carácter #.                                                                  |


#### 2.2. A través de la API

> [!success]
> Si no está familiarizado con el uso de la API de OVHcloud, consulte nuestra guía [Primeros pasos con las API de OVHcloud](https://docs.ovh.com/es/api/first-steps-with-ovh-api/).

Conéctese a [api.ovh.com](https://api.ovh.com/) y realice la siguiente llamada:

> [!api]
>
> @api {post} /sms/{serviceName}/templatesControl
>


![SMS a Estados Unidos](images/smstousa4.png){.thumbnail}

Rellene los campos obligatorios y haga clic en `Execute`{.action}.

#### Ejemplos de plantillas

Incluimos a continuación dos ejemplos de plantillas de mensajes a Estados Unidos.

- Ejemplo de plantilla de autenticación:

```bash
Your security code is #CODE#, have a good day
```

- Ejemplo de plantilla de alerta:

```bash
Our monitoring system detected your server #SERVER# doesn't respond to ping requests
```

### 3. Analizar los resultados

Una vez que haya creado y validado su plantilla, OVHcloud realiza una comprobación automática para garantizar que el contenido del SMS se corresponde con la plantilla. Si el resultado es positivo, el SMS se envía de la misma forma que para los demás países.

Si envía un SMS a Estados Unidos sin haber creado y validado previamente una plantilla, el SMS será rechazado y recibirá un Premium Tracking Transaction Code (PTT code) 1999. Este código corresponde al mensaje de error «No templates available».

Puede consultar el resto de códigos PTT en la siguiente [guía](../usuarios-de-sms/).

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
