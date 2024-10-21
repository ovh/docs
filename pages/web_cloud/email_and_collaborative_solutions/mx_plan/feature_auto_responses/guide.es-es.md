---
title: 'MX Plan - Crear una respuesta automática en una dirección de correo electrónico'
excerpt: 'Cómo configurar una respuesta automática en una dirección de correo electrónico'
updated: 2024-05-24
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Si está ausente y no puede consultar su dirección de correo, puede implementar una respuesta automática (o contestador) que transmitirá un correo electrónico a los interlocutores que le envíen un correo.

**Descubra cómo activar una respuesta automática en una dirección de correo electrónico.**

## Requisitos

- Tener una solución MX Plan. Esta está disponible a través de: un plan de hosting [web hosting](/links/web/hosting), el [alojamiento gratuito 100M](/links/web/domains-free-hosting) incluido con un dominio (activado previamente) o el MX Plan contratado por separado.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## En la práctica

> [!primary]
>
> Si su dirección de correo electrónico está en un servicio [**Exchange**](/links/web/emails-hosted-exchange), [**Email Pro**](/links/web/email-pro) o si no hay una sección `Gestión de los contestadores`{.action} en su MX Plan, deberá crear una respuesta automática desde su webmail con ayuda de la documentación ["Configurar una respuesta automática desde la interfaz OWA"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Creación de una respuesta automática

Conéctese a su [área de cliente de OVHcloud](/links/manager). Seleccione el dominio correspondiente en la sección `Correo electrónico`{.action} de la columna. Haga clic en la pestaña `Correo electrónico`{.action} en la parte superior y, seguidamente, en `Gestión de los contestadores`{.action}.

Será redirigido a la ventana `Gestión de los contestadores`, en la que podrá consultar todas las respuestas automáticas de correo que tiene instaladas en su servicio de correo.

Haga clic en `Añadir un contestador`{.action}

![hosting](images/email_responder01.png){.thumbnail}

Se abrirá la ventana de adición. Puede completar esta información de acuerdo con la siguiente información.

- `Tipo de contestador`:

**Asociado a una cuenta de correo**: utilice esta opción si su servicio de correo ya contiene una dirección de correo.
**Libre**: se utiliza en el caso de un alias. por lo que no está vinculado a ninguna dirección existente.

- `Buzón de correo` o `Nombre del contestador`: la dirección de correo o el alias afectados por la respuesta automática.
- `Duración del contestador`:
    - **Temporal**: defina una fecha de inicio y de finalización para que la respuesta automática funcione (útil, por ejemplo, si se va de vacaciones).
    - **Permanente**: la respuesta automática funcionará hasta que la desactive.
- `Enviar una copia` o `Guardar los mensajes en el servidor`: permite reenviar los mensajes recibidos durante su ausencia hacia la dirección de su elección o conservarlos en la dirección de correo electrónico.

> [!warning]
>
> Si desactiva esta casilla, los mensajes recibidos durante su ausencia se eliminarán automáticamente.

- `Dirección en copia` (solo en modo libre): en el caso de un alias, seleccione la dirección de correo electrónico que recibirá los mensajes enviados al alias.
- `Message`: este es el mensaje que sus interlocutores recibirán cuando le envíen un correo electrónico.

A continuación, haga clic en `Validar`{.action} para finalizar la configuración de su respuesta automática.

> [!success]
>
> Si desea delegar la gestión de una respuesta automática para una dirección de correo, consulte nuestra guía ["Delegar la gestión de sus cuentas de correo a otra persona"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Modificar o eliminar una respuesta automática

Una vez que haya creado su respuesta automática, aparecerá en la lista que aparece en la sección `Gestión de los contestadores`{.action} de su solución de correo. Puede eliminarla o modificarla haciendo clic en `...`{.action} a la derecha de la misma.

![hosting](images/email_responder02.png){.thumbnail}

## Más información <a name="go-further"></a>

[FAQ e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>