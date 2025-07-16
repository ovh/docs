---
title: "Zimbra Pro - Configurar una cuenta de correo electrónico mediante EWS en Mail en Mac"
excerpt: "Cómo configurar una dirección de correo electrónico Zimbra Pro en la aplicación Mail en Mac mediante el protocolo EWS"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Objetivo

> [!primary]
> Esta guía se dirige a los clientes que dispongan de una solución de correo [Zimbra Pro](/links/web/emails-zimbra). Este servicio estará disponible en beta desde julio de 2025.

Las cuentas Zimbra Pro pueden configurarse en un macOS utilizando el protocolo EWS (**E**xchange **W**eb **S**ervices). Esto le permite configurar todas las funcionalidades colaborativas de su dirección de correo en una sola vez. La aplicación Mail está disponible nativamente en macOS.

**Descubra cómo configurar su cuenta Zimbra Pro en la aplicación Mail en Mac a través del protocolo EWS.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Es su responsabilidad garantizar que estos servicios funcionen correctamente.
>
> Esta guía está diseñada para ayudarle a realizar tareas comunes. No obstante, si necesita ayuda, le recomendamos que contacte con un [partner especializado](https://marketplace.ovhcloud.com/c/support-collaboration) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico [Zimbra Pro](/links/web/emails-zimbra).
- Tener la aplicación Mail en su Mac.
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta <a name="add-account"></a>

- **La primera vez que inicie la aplicación Mail**, aparecerá un asistente de configuración que le pedirá que seleccione su tipo de cuenta.

- **Si ya tiene una cuenta configurada en la aplicación Mail**:
- Haga clic en `Mail`{.action} en la barra de menús de la parte superior de la pantalla.
- Haga clic en `Cuentas`{.action}.
- En la ventana "Cuentas de Internet", haga clic en `Añadir una cuenta`{.action}.

![mail macOS](images/mail-macos-add-step00.png){.thumbnail .h-500}

Siga los pasos de instalación haciendo clic en las siguientes **3** pestañas:

> [!tabs]
> **Paso 1**
>>
>> - Seleccione `Microsoft Exchange`{.action}.
>> - Indique un **nombre** e introduzca su **dirección de correo electrónico**.
>> - Haga clic en `Conectar`{.action}.
>>
>> ![mail macos](images/mail-macos-add-step01.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> - Seleccione `Configurar manualmente`{.action} desde la ventana que aparece.
>> - Introduzca a continuación la **contraseña** de su dirección de correo electrónico, además de los datos introducidos.
>>
>> ![mail macos](images/mail-macos-add-step02.png){.thumbnail .h-500}
>>
> **Paso 3**
>>
>> Compruebe y complete la siguiente información:
>>
>> - **Dirección de correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **Nombre de usuario**: Introduzca su dirección de correo electrónico completa.
>> - **Contraseña**: Introduzca la contraseña asociada a su dirección de correo electrónico.
>> - **URL interna**: Introduzca "zimbra1.mail.ovh.net".
>> - **URL externa**: Introduzca "zimbra1.mail.ovh.net".
>>
>> Para finalizar la configuración, pulse `Conectar`{.action} y selecciona las funciones que deseas explorar en su Mac.
>>
>> ![mail macos](images/mail-macos-add-step04.png){.thumbnail .h-500}
>>
>> > [!warning]
>> >
>> > Es normal que aparezca el mensaje en rojo "**No es posible verificar el nombre o la contraseña de la cuenta**" cuando aparece la primera vez. Sin embargo, si este mensaje persiste después de la validación, significa que la información introducida es incorrecta.

> [!warning]
>
> Si experimenta un fallo de envío o recepción después de haber seguido los pasos de configuración anteriores, consulte el apartado "[Modificar los parámetros existentes](#modify-settings)" de esta guía.

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes, así como gestionar sus calendarios y tareas.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede conectarse al [webmail OVHcloud](/links/web/email) con las claves de su dirección de correo electrónico. Para cualquier pregunta relativa al uso de este servicio, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### ¿Cómo modificar los parámetros existentes? <a name="modify-settings"></a>

La aplicación Mail en Mac no permite modificar los parámetros del servidor de una cuenta de correo Exchange.

Si su cuenta de correo ya está configurada y desea cambiar su configuración, deberá eliminarla y volver a crearla.

Para eliminar una cuenta de correo Exchange, siga estas instrucciones:

1. Haga clic en `Mail`{.action} en la barra de menús de la parte superior de la pantalla.
1. Haga clic en `Cuentas`{.action} y seleccione la cuenta de correo correspondiente.
1. Pulse `Eliminar la cuenta`{.action}.

![mail macos](images/mail-macos-modify-delete-01.png){.thumbnail .h-500}

> [!success]
>
> Una vez que haya eliminado su cuenta de correo, siga los pasos de instalación que se indican en la sección "[Añadir la cuenta](#add-account)" de esta guía.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para más información sobre la configuración de una dirección de correo electrónico desde la aplicación Mail en macOS, consulte el [centro de ayuda de Apple](https://support.apple.com/es-es/102619).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).