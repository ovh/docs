---
title: '¿Qué hacer con una cuenta bloqueada debido a correo no deseado?'
excerpt: 'Cómo proceder cuando su dirección ha sido bloqueada debido a correo no deseado'
updated: 2023-06-07
---

## Objetivo

Cuando su dirección de correo electrónico está bloqueada por SPAM, significa que se ha detectado actividad sospechosa en el envío de mensajes de correo electrónico desde esta dirección. En este caso, ya no podrá enviar mensajes desde esta dirección de correo electrónico. A continuación, debe comprender por qué se ha detectado una actividad sospechosa y tomar medidas para evitar que vuelva a ocurrir.

**Cómo proceder cuando su dirección ha sido bloqueada debido a correo no deseado**

## Requisitos

- Tener un [plan de correo en OVHcloud](https://www.ovhcloud.com/es-es/emails/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y accedido a la sección `Web Cloud`{.action}.

## Procedimiento <a name="instructions"></a>

Antes de continuar, y si el bloqueo afecta a una dirección de correo electrónico de tipo MXplan, identifique la versión que tiene para consultar el progreso del proceso de desbloqueo. Compruebe cómo distinguir las dos versiones utilizando la siguiente tabla.

|Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}< br> Consulte la oferta en el cuadro "Suscripción"|![email](images/mxplan-starter-new-step1.png){.thumbnail}< br>Consulte la referencia del servidor en el recuadro "Resumen"|

### Etapa 1: ¿por qué su dirección de correo electrónico está bloqueada por spam? <a name="step1"></a>

Cuando se detecta una actividad sospechosa en el envío de los mensajes de correo, la dirección en cuestión se bloquea automáticamente. En ese caso, no podrá enviar mensajes de correo desde esta dirección de correo.

En primer lugar, asegúrese de que los usuarios de la dirección de correo electrónico bloqueada no son los causantes directamente del bloqueo, debido a un uso inusual de la dirección de correo electrónico (por ejemplo, tras el envío masivo de mensajes de correo). En ese caso, debe corregir la situación antes de desbloquear la dirección.

Si la actividad sospechosa detectada por el antispam no ha sido iniciada por el usuario legítimo o los usuarios de la dirección de correo electrónico, tome las siguientes medidas necesarias y detalladas:

- Realice un análisis antivirus de cada uno de los equipos que utilicen la dirección de correo electrónico bloqueada para spam y aplique un parche si estos están infectados.

- Compruebe todos los programas que utilicen las claves de la dirección de correo electrónico bloqueada para spam (p. ej.: copiadora, software de gestión empresarial y de mensajería).

### Etapa 2: comprobar el estado de la dirección de correo electrónico y acceder al tique de asistencia asociado <a name="step2"></a>

Seleccione el servicio de correo en las siguientes pestañas:

> [!tabs]
> **Exchange**
>>
>> Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda a la sección `Web Cloud`{.action}. Haga clic en `Microsoft`{.action}, luego en `Exchange`{.action} y, por último, seleccione la plataforma Exchange correspondiente.
>>
>> Acceda a la pestaña `Cuentas de correo electrónico`{.action} de su plataforma. Si la columna «Estado» de la dirección de correo electrónico correspondiente indica «bloqueado», haga clic en `...`{.action} a la derecha de la cuenta y, seguidamente, en `Desbloquear`{.action}. El desbloqueo de la dirección de correo electrónico no se realiza automáticamente. Es necesario contactar con el soporte en el tíquet de asistencia respondiendo a las 3 preguntas formuladas.
>> Continúe con el [paso 3](#step3) de la guía.
>>
>> ![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}
>> 
> **Email Pro**
>>
>> Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda a la sección `Webcloud`{.action}. Haga clic en `Email Pro`{.action} y, seguidamente, seleccione la plataforma Email Pro correspondiente.
>>
>> Acceda a la pestaña `Cuentas de correo electrónico`{.action} de su plataforma. Si la columna «Estado» a la derecha de la dirección de correo electrónico correspondiente indica «Correo no deseado», haga clic en esa opción y, seguidamente, en `Responder al tique`{.action}. El desbloqueo de la dirección de correo electrónico no se realiza automáticamente. Es necesario contactar con el soporte en el tíquet de asistencia respondiendo a las 3 preguntas formuladas.
>> Pasar al [paso 3](#step3) de la guía.
>>
>> ![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
>  **MX plan - nueva versión**
>>
>> Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda a la sección `Webcloud`{.action}. Haga clic en `Correos electrónicos`{.action} y seleccione el nombre de dominio correspondiente.
>>
>> Acceda a la pestaña `Cuentas de correo electrónico`{.action} de su plataforma. Si la columna «Estado» —a la derecha de la dirección de correo electrónico correspondiente— indica «Correo no deseado», haga clic en esa opción y, seguidamente, en `Responder al tique`{.action}. El desbloqueo de la dirección de correo electrónico no se realiza automáticamente. Es necesario contactar con el soporte en el tíquet de asistencia respondiendo a las 3 preguntas formuladas.
>> Continúe con el [paso 3](#step3) de la guía.
>>
>> ![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
>  **MX plan - histórico**
>>
>> Si el bloqueo afecta a una dirección de correo electrónico [MXplan versión histórica](#instructions), no hay tíquet de soporte. Por favor, consulte el [paso 1](#step1) de esta guía antes de seguir las instrucciones siguientes.
>>
>> Conéctese a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y acceda al apartado `Web Cloud`{.action}. Haga clic en `Correo electrónico`{.action} y seleccione el dominio correspondiente.
>>
>> Acceda a la pestaña `Emails`{.action} de su plataforma. Si la columna "Bloqueado por spam" indica "Sí", haga clic en esta opción y, seguidamente, en `Cambiar la contraseña`{.action}. Su dirección de correo electrónico se ha desbloqueado. No necesita seguir el [paso 3](#step3).
>>
>>![spam](images/blocked-for-SPAM-01-04.pn){.thumbnail}
>>
>> > [!warning]
>> >
>> > En algunos casos, la columna "Bloqueado por spam" puede indicar "No", a pesar de que la dirección de correo electrónico esté bloqueada. Si ha tomado las medidas necesarias para proteger la dirección de correo, la solución es la misma que la anterior.


### Paso 3: acceder al tique de asistencia <a name="step3"></a>

Una vez completado el paso 1, se le redirigirá a la ventana «Mis solicitudes de asistencia». Haga clic en `...`{.action} —a la derecha del tique con el asunto «Cuenta bloqueada debido a correo no deseado»— y, seguidamente, en `Ver toda la información`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

De ese modo, hallará el mensaje de correo electrónico que se le ha enviado y que genera un tique de solicitud de asistencia.

El tique de asistencia es como sigue:

> 
> Estimado/a cliente:
>
> Nuestro sistema ha hallado que la dirección **sudirección@dominio.com** alojada en nuestros sistemas en el servicio **servicename** origina el envío de correos no deseados (spam).
> Por consiguiente, se ha desactivado el envío de mensajes de correo electrónico temporalmente.
>
> Actualmente, hemos encontrado **X** mensaje/s sospecho/s.
>
> Con el fin de ayudarnos a reactivar el envío de mensajes de correo electrónico de la dirección: **dirección@dominio.com**,
> responda este mensaje de correo electrónico contestando las siguientes preguntas:
>
> - ¿Es usted el remitente del mensaje de correo electrónico en cuestión (véase el encabezado a continuación)?
>
> - ¿Dispone de una regla de redirección a otra dirección de correo electrónico?
>
> - ¿Ha respondido a algún correo no deseado?
> 
> Estas respuestas nos ayudarán a reactivar su cuenta rápidamente.
> <br>
> <br>
> 

A continuación de este mensaje, se le ha enviado una muestra de los encabezados de los mensajes de correo electrónico transmitidos.

Estos encabezados permiten determinar el rastro de la ruta y el origen de los mensajes de correo electrónico enviados.

## Más información <a name="go-further"></a>
  
Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](https://partner.ovhcloud.com/es-es/directory/).

Si desea ayuda para el uso y la configuración de sus soluciones de OVHcloud, consulte nuestras distintas [ofertas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.