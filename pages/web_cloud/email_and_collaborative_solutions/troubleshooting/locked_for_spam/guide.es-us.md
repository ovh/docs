---
title: '¿Qué hacer en caso de cuenta bloqueada por spam?'
excerpt: 'Cómo actuar cuando su dirección ha sido bloqueada por spam'
updated: 2026-03-05
---

## Objetivo

Cuando su dirección de correo electrónico está bloqueada por spam, significa que se ha detectado una actividad sospechosa en el envío de mensajes de correo electrónico desde esta dirección. En este caso, ya no podrá enviar mensajes de correo electrónico desde esta dirección. A continuación, debe comprender por qué se ha detectado una actividad sospechosa y tomar medidas para evitar que esta situación vuelva a producirse.

**Cómo actuar cuando su dirección está bloqueada por spam.**

## Requisitos

- Disponer de un [plan de correo en OVHcloud](/links/web/emails).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-exchange -->
---

### Acceso al área de cliente de OVHcloud

**MX Plan:**

- **Enlace directo:** [MX Plan](/links/control-panel/web-mx-plan)
- **Ruta de navegación:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleccione su servicio MX Plan

**Exchange:**

- **Enlace directo:** [Exchange](/links/control-panel/web-exchange)
- **Ruta de navegación:** `Web Cloud`{.action} > `Exchange`{.action} > Seleccione su plataforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-mx-plan -->

## Procedimiento <a name="instructions"></a>

### Etapa 1: ¿por qué su dirección de correo electrónico está bloqueada por spam? <a name="step1"></a>

Cuando se detecta una actividad sospechosa en el envío de mensajes de correo electrónico, la dirección en cuestión se bloquea automáticamente. En ese caso, no podrá enviar mensajes de correo electrónico desde esta dirección.

> [!warning]
>
> Una "actividad sospechosa" significa que:
>
> - El servidor antispam, que analiza los mensajes de correo electrónico durante el envío, ha detectado que uno o varios elementos del mensaje se consideran sospechosos y pueden constituir un correo spam.
> - La frecuencia de envío y el número de destinatarios son demasiado elevados y contribuyen a que el envío se considere spam. Para realizar envíos masivos, es necesario utilizar un servicio de listas de correo y no una dirección de correo electrónico estándar.
>
> Las razones concretas de un bloqueo no pueden ser divulgadas para evitar cualquier intento de eludir el sistema de detección de spam. Para probar el contenido de un mensaje de correo electrónico, puede utilizar una herramienta externa a OVHcloud como [Mailtester](https://www.mail-tester.com/).
>

En primer lugar, asegúrese, con los usuarios de la dirección de correo electrónico bloqueada, de que no son los causantes directos del bloqueo, debido a un uso inusual de la dirección de correo electrónico (por ejemplo, tras el envío masivo de mensajes de correo electrónico). Si es así, debe corregir la situación antes de desbloquear la dirección.

Si la actividad sospechosa detectada por el antispam no ha sido iniciada por los usuarios legítimos de la dirección de correo electrónico, tome las siguientes medidas:

- Realice un análisis antivirus de cada uno de los equipos que utilicen la dirección de correo electrónico bloqueada por spam y aplique un correctivo si estos están infectados.

- Compruebe todos los programas que utilicen las credenciales de la dirección de correo electrónico bloqueada por spam (por ejemplo: fax, software de gestión empresarial, software de mensajería).

- Compruebe las redirecciones aplicadas a la dirección de correo electrónico bloqueada por spam.

- Compruebe los filtros aplicados a la dirección de correo electrónico bloqueada por spam, mediante un software de mensajería o el webmail.

- Compruebe las respuestas automáticas configuradas en la dirección de correo electrónico bloqueada por spam, mediante un software de mensajería o el webmail.

### Etapa 2: comprobar el estado de la dirección de correo electrónico y acceder al tíquet de asistencia asociado

Seleccione el plan de correo electrónico en las siguientes pestañas:

> [!tabs]
> **Exchange**
>>
>> Acceda a la pestaña `Cuentas de correo`{.action} de su plataforma. Si la columna "estado" de la dirección de correo electrónico correspondiente indica "bloqueado", haga clic en `...`{.action} a la derecha de la cuenta y, seguidamente, en `Desbloquear`{.action}. El desbloqueo de la dirección de correo electrónico no se realiza automáticamente. Contacte con el soporte a través del tíquet de asistencia respondiendo a las 3 preguntas formuladas.<br>
>> Continúe con la [etapa 3](#step3) de la guía.
>>
>> ![Columna estado bloqueado en la pestaña Cuentas de correo Exchange](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **MX Plan**
>>
>> Acceda a la pestaña `Cuentas de correo`{.action} de su plataforma. Si la columna "estado" a la derecha de la dirección de correo electrónico correspondiente indica "Spam", haga clic en esta mención y, seguidamente, en `Responder al tíquet`{.action}. El desbloqueo de la dirección de correo electrónico no se realiza automáticamente. Contacte con el soporte a través del tíquet de asistencia respondiendo a las 3 preguntas formuladas.<br>
>> Continúe con la [etapa 3](#step3) de la guía.
>>
>> ![Columna estado Spam en la pestaña Cuentas de correo MX Plan](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>

### Etapa 3: acceder al tíquet de asistencia <a name="step3"></a>

Tras la etapa 2, será redirigido a la ventana "Mis solicitudes de asistencia". Haga clic en el botón `...`{.action} a la derecha del tíquet con el asunto "Account locked for spam." y, seguidamente, en `Ver toda la información`{.action}.

![Ventana Mis solicitudes de asistencia con el tíquet de bloqueo por spam](images/blocked-for-SPAM-02.png){.thumbnail}

Encontrará el mensaje de correo electrónico que se le ha enviado, el cual genera un tíquet de asistencia ante el soporte.

El tíquet de asistencia se presenta de la siguiente manera:

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

Estos encabezados permiten determinar el recorrido y el origen de los mensajes de correo electrónico enviados.

> [!primary]
>
> Una vez que el soporte haya tratado su tíquet y se haya desbloqueado su dirección de correo electrónico, cambie la contraseña de la dirección de correo electrónico, asegurándose de que sea lo suficientemente segura. Puede utilizar la [herramienta de generación de contraseñas seguras](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) de la CNIL. También puede consultar los [consejos de la CNIL para una buena contraseña](https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe).

## Más información

Para servicios especializados (posicionamiento web, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si desea disfrutar de ayuda para el uso y la configuración de sus soluciones de OVHcloud, consulte nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
