---
title: "Zimbra Pro - Configurar una cuenta de correo electrónico a través de ActiveSync en Outlook para iOS"
excerpt: "Aprenda a configurar su cuenta de correo electrónico Zimbra Pro en la aplicación móvil Outlook para iOS a través del protocolo ActiveSync"
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

Las cuentas Zimbra Pro pueden configurarse en un iPhone utilizando el protocolo ActiveSync. Esto le permite configurar todas las funcionalidades colaborativas de su dirección de correo en una sola vez. La aplicación Outlook de Microsoft en iOS está disponible de forma gratuita desde la App Store de Apple.

**Aprenda a configurar su cuenta Zimbra Pro en la aplicación móvil Outlook para iOS mediante el protocolo ActiveSync.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Es su responsabilidad garantizar que estos servicios funcionen correctamente.
>
> Esta guía está diseñada para ayudarle a realizar tareas comunes. No obstante, si necesita ayuda, le recomendamos que contacte con un [partner especializado](https://marketplace.ovhcloud.com/c/support-collaboration) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico [Zimbra Pro](/links/web/emails-zimbra).
- Tener la aplicación [Outlook para iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta <a name="add-account"></a>

- **La primera vez que inicie la aplicación Outlook**, aparecerá un asistente de configuración:
  - Pulse `Añadir cuenta`{.action}.

  ![outlook ios](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **Si ya tiene una cuenta configurada en la aplicación Outlook**:

  1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa (`⌂`{.action}) en la parte superior izquierda de la pantalla.
  2. Pulse el engranaje (`⛭`{.action}) en la parte inferior izquierda de la pantalla.
  3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
  4. Pulse `Añadir cuenta`{.action}.
  5. Pulse `Cuenta de correo`{.action}.

  ![outlook ios](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Siga los pasos de instalación haciendo clic en las siguientes **3** pestañas:

> [!tabs]
> **Paso 1**
>>
>> Introduzca su dirección de correo electrónico y pulse `Añadir una cuenta`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> Existen dos escenarios posibles:
>>
>> - Si aparece "**IMAP**" en la parte superior de la página, pulse el botón "`?` en la esquina superior derecha de la pantalla **(1)** y seleccione `Cambiar proveedor de cuenta`{.action} **(2)**. Seleccione entonces `Exchange` **(3)** y vaya al paso 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - Si va directamente a elegir el tipo de cuenta, seleccione `Exchange`.
>>
> **Paso 3**
>>
>> En la siguiente ventana, marque `Parámetros avanzados`{.action} e introduzca la siguiente información:
>>
>> - **Dirección de correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **Contraseña**: Introduzca la contraseña asociada a su dirección de correo electrónico.
>> - **Description**: Introduzca un nombre que le permita identificar esta cuenta entre sus otras cuentas de correo registradas en Outlook.
>> - **Servidor**: introduzca "zimbra1.mail.ovh.net".
>> - **Dominio**: Deje este campo en blanco.
>> - **Nombre de usuario**: Introduzca su dirección de correo electrónico completa.
>>
>> Para finalizar la configuración, pulse `Conectar`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Si experimenta un fallo de envío o recepción después de haber seguido los pasos de configuración anteriores, consulte el apartado "[Modificar los parámetros existentes](#modify-settings)" de esta guía.

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes, así como gestionar sus calendarios y tareas.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede conectarse al [webmail OVHcloud](/links/web/email) con las claves de su dirección de correo electrónico. Para cualquier pregunta relativa al uso de este servicio, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### ¿Cómo cambiar la configuración existente? <a name="modify-settings"></a>

1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa (`⌂`{.action}) en la parte superior izquierda de la pantalla.
1. Pulse el engranaje (`⛭`{.action}) en la parte inferior izquierda de la pantalla.
1. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
1. Seleccione la cuenta.
1. Pulse `Editar la información de conexión`{.action}.

![outlook ios](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

Consulte los parámetros en el **paso 3** del capítulo "[Añadir la cuenta](#add-account)".

### ¿Cómo eliminar una cuenta de correo? <a name="delete-account"></a>

1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa (`⌂`{.action}) en la parte superior izquierda de la pantalla.
1. Pulse el engranaje (`⛭`{.action}) en la parte inferior izquierda de la pantalla.
1. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
1. Seleccione la cuenta.
1. Pulse `Eliminar la cuenta`{.action}.

![outlook ios](images/outlook-app-ios-delete-01.png){.thumbnail .h-500}


## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en iOS, consulte el [centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).