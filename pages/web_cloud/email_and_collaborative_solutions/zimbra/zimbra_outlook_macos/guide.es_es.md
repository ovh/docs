---
title: "Zimbra Pro - Configurar una cuenta de correo electrónico a través de EWS en Outlook para Mac"
excerpt: "Cómo configurar una dirección de correo electrónico Zimbra Pro en Outlook para macOS mediante el protocolo EWS"
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

Las cuentas Zimbra Pro pueden configurarse en un Mac utilizando el protocolo EWS (**E**xchange **W**eb **S**ervices). Esto le permite configurar todas las funcionalidades colaborativas de su dirección de correo en una sola vez. La aplicación [Outlook en macOS](https://apps.apple.com/es/app/microsoft-outlook/id985367838?mt=12) está disponible en el App Store de Apple.

**Cómo configurar una cuenta Zimbra Pro en Outlook para macOS mediante el protocolo EWS.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Es su responsabilidad garantizar que estos servicios funcionen correctamente.
>
> Esta guía está diseñada para ayudarle a realizar tareas comunes. No obstante, si necesita ayuda, le recomendamos que contacte con un [partner especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico [Zimbra Pro](/links/web/emails-zimbra).
- Tener la aplicación [Outlook en macOS](https://apps.apple.com/es/app/microsoft-outlook/id985367838?mt=12).
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta <a name="add-account"></a>

- **La primera vez que inicie la aplicación Outlook**, aparecerá un asistente de configuración que le pedirá que introduzca la primera dirección de correo electrónico que desee añadir.

- **Si ya tiene una cuenta configurada en la aplicación Outlook**:

  1. Haga clic en `Herramientas`{.action} en la barra de menús de la parte superior de la pantalla.
  2. Haga clic en `Cuentas`{.action}.
  3. En la ventana "Cuentas", haga clic en "`+`{.action} en la parte inferior izquierda y seleccione `Nueva cuenta`{.action}.

  ![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Siga los pasos de instalación haciendo clic en las siguientes **3** pestañas:

> [!tabs]
> **Paso 1**
>>
>> Introduzca su dirección de correo electrónico bajo el epígrafe "Dirección de correo electrónico" y haga clic en `Continuar`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> Existen dos escenarios posibles:
>>
>> - **Si aparece la ventana "IMAP/POP"**: haga clic en `No es una cuenta POP/IMAP`{.action} y seleccione `Exchange`{.action} desde la ventana "Elegir el proveedor".
>> - **Si se encuentra directamente con "Elegir el proveedor"**, elija `Exchange`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Paso 3**
>>
>> Compruebe y complete la siguiente información:
>>
>> - **Método**: Elija `Nombre de usuario y contraseña`.
>> - **Correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **DOMINIO\Nombre de usuario o dirección de correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **Contraseña**: Introduzca la contraseña asociada a su dirección de correo electrónico.
>> - **Servidor**: Introduzca "zimbra1.mail.ovh.net".
>>
>> Para finalizar la configuración, pulsa `Añadir una cuenta`{.action} y selecciona las funciones que deseas explorar en su Mac.
>>
>> ![mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Si experimenta un fallo de envío o recepción después de haber seguido los pasos de configuración anteriores, consulte el apartado "[Modificar los parámetros existentes](#modify-settings)" de esta guía.

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes, así como gestionar sus calendarios y tareas.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede conectarse al [webmail OVHcloud](/links/web/email) con las claves de su dirección de correo electrónico. Para cualquier pregunta relativa al uso de este servicio, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### ¿Cómo modificar los parámetros existentes? <a name="modify-settings"></a>

Para modificar la configuración de una cuenta de correo ya configurada, siga estas instrucciones:

1. Haga clic en `Herramientas`{.action} en la barra de menús de la parte superior de la pantalla.
1. Haga clic en `Cuentas`{.action}.
1. Seleccione su cuenta en la columna izquierda.
1. Haga clic en `Avanzado...`{.action} en la parte inferior derecha.

![outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

Consulte los parámetros en el **paso 3** del capítulo "[Añadir la cuenta](#add-account)".

### ¿Cómo eliminar una cuenta de correo? <a name="delete-account"></a>

1. Haga clic en `Herramientas`{.action} en la barra de menús de la parte superior de la pantalla.
1. Haga clic en `Cuentas`{.action}.
1. Seleccione su cuenta en la columna izquierda.
1. Haga clic en `-`{.action} en la parte inferior izquierda.

![outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Más información <a name="go-further"></a>

> [!primary]
>
> Para más información sobre la configuración de una dirección de correo electrónico desde la aplicación Mail en macOS, consulte el [centro de ayuda de Apple](https://support.apple.com/es-es/102619).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).