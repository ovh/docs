---
title: '¿Qué hacer con una cuenta bloqueada debido a correo no deseado?'
slug: bloqueo-por-correo-no-deseado
excerpt: 'Cómo proceder cuando su dirección ha sido bloqueada debido a correo no deseado'
section: 'Diagnóstico Exchange'
order: 1
---

**Última actualización: 16/3/2020**

## Objetivo

Si recibe un mensaje de correo electrónico indicándole que una de sus direcciones de correo está bloqueada debido a correo no deseado, deberá ejecutar las siguientes acciones.

**Cómo proceder cuando su dirección ha sido bloqueada debido a correo no deseado**

## Requisitos

- Tener un [plan de correo en OVHcloud](https://www.ovh.es/emails/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y accedido a la sección `«Web»`{.action}.

## Procedimiento

### Paso 1: comprobar el estado de la dirección de correo electrónico y acceder al tique de asistencia asociado

#### Para una dirección de correo electrónico de Exchange

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y acceda a la sección «Web». En la barra de servicios a la izquierda, haga clic en `«Microsoft»`{.action}, luego en `«Exchange»`{.action} y, por último, seleccione la plataforma Exchange correspondiente.

Acceda a la pestaña `«Cuentas de correo electrónico»`{.action} de su plataforma. Si la columna «Estado» de la dirección de correo electrónico correspondiente indica «bloqueado», haga clic en `«...»`{.action} a la derecha de la cuenta y, seguidamente, en `«Desbloquear»`{.action}. Seguidamente, continúe con el [paso 2](./#paso-2-acceder-al-tique-de-asistencia_1){.external} de la guía.

![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}

#### Para una dirección Email Pro

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y acceda a la sección «Web». En la barra de servicios a la izquierda, haga clic en `«Email Pro» y,`{.action} seguidamente, seleccione la plataforma Email Pro correspondiente.

Acceda a la pestaña `«Cuentas de correo electrónico»`{.action} de su plataforma. Si la columna «Estado» a la derecha de la dirección de correo electrónico correspondiente indica «Correo no deseado», haga clic en esa opción y, seguidamente, en `Responder al tique`{.action}. Seguidamente, continúe [con el paso 2](./#paso-2-acceder-al-tique-de-asistencia_1){.external} de la guía.

![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}

#### Para una dirección de correo electrónico MX plan

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager) y acceda a la sección «Web». En la barra de servicios a la izquierda, haga clic en `«Correos electrónicos»`{.action} y seleccione el nombre de dominio correspondiente.

Acceda a la pestaña `«Cuentas de correo electrónico»`{.action} de su plataforma. Si la columna «Estado» —a la derecha de la dirección de correo electrónico correspondiente— indica «Correo no deseado», haga clic en esa opción y, seguidamente, en `«Responder al tique»`{.action}. Seguidamente, continúe con el [paso 2](./#paso-2-acceder-al-tique-de-asistencia_1){.external} de la guía.

![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}


### Paso 2: acceder al tique de asistencia

Una vez completado el paso 1, se le redirigirá a la ventana «Mis solicitudes de asistencia». Haga clic en `«...»`{.action} —a la derecha del tique con el asunto «Cuenta bloqueada debido a correo no deseado»— y, seguidamente, en `«Ver toda la información»`{.action}. 

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

### Paso 3: responder las siguientes tres preguntas

> [!warning]
>
> El desbloqueo de la dirección de correo electrónico no se realiza automáticamente. Debe ponerse en contacto con el equipo de asistencia que se indica en el tique, respondiendo las tres preguntas planteadas.

- ** ¿Es usted el emisor del mensaje de correo electrónico en cuestión?** Con la ayuda de los encabezados provistos, verifique el remitente, el destinatario y el asunto del mensaje para comprobar si se trata de uno de sus mensajes.

- ** ¿Dispone de una regla de redirección a otra dirección de correo electrónico?** Verifique las reglas de la bandeja de entrada de su dirección de correo electrónico para asegurarse de que no se hayan redirigido mensajes de correo electrónico no deseados a otra dirección.

- ** ¿Ha respondido a algún correo no deseado?**El simple hecho de haber respondido a un correo no deseado no solo contribuye a dañar la reputación de los servidores de envío de mensajes de correo electrónico, sino también de su dominio.    


### Paso 4: medidas que se deben instrumentar en caso de un acceso fraudulento a su dirección de correo electrónico

Si los envíos mencionados en los encabezados no han sido iniciados por el usuario legítimo (o usuarios legítimos) de la dirección de correo electrónico, le recomendamos tomar las siguientes medidas:

- Ejecutar un análisis antivirus de cada uno de los equipos que utilizan la dirección de correo electrónico bloqueada debido a correo no deseado y realizar las correcciones necesarias si estos estuvieran infectados.

- Comprobar todos los programas que utilizan el usuario y la contraseña de la dirección de correo electrónico bloqueada debido a correo no deseado (por ejemplo, fax, programa de aplicación y programa de mensajería).

- Cambiar la contraseña de la dirección de correo electrónico después de haber ejecutado el análisis antivirus, asegurándose de que sea lo suficientemente segura.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.