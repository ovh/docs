---
title: "Zimbra Pro - Configurar una cuenta de correo electrónico a través de ActiveSync en Outlook para Android"
excerpt: "Cómo configurar una cuenta de correo electrónico de Zimbra Pro en la aplicación móvil de Outlook para Android a través del protocolo ActiveSync"
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

Las cuentas Zimbra Pro pueden configurarse en un móvil Android utilizando el protocolo ActiveSync. Esto le permite configurar todas las funcionalidades colaborativas de su dirección de correo en una sola vez. La aplicación Outlook de Microsoft en Android está disponible gratuitamente desde Google Play Store.

**Aprenda a configurar su cuenta de correo electrónico Zimbra Pro en la aplicación móvil Outlook para Android mediante el protocolo ActiveSync.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Es su responsabilidad garantizar que estos servicios funcionen correctamente.
>
> Esta guía está diseñada para ayudarle a realizar tareas comunes. No obstante, si necesita ayuda, le recomendamos que contacte con un [partner especializado](https://marketplace.ovhcloud.com/c/support-collaboration) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico [Zimbra Pro](/links/web/emails-zimbra).
- Tener la [aplicación Outlook](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=fr) en su dispositivo móvil Android.
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

> [!primary]
>
> Esta documentación se ha realizado desde un dispositivo que utiliza la versión 14 de Android.

## Procedimiento

### Añadir la cuenta <a name="add-account"></a>

- **La primera vez que inicie la aplicación Outlook**, aparecerá un asistente de configuración:
    - Pulse `Añadir cuenta`{.action}.

  ![outlook android](images/outlook-app-android-add01.png){.thumbnail .h-500}

- **Si ya tiene una cuenta configurada en la aplicación Outlook**:
    - Pulse el sobre (`✉`{.action}) en la parte superior izquierda de la pantalla.
    - A continuación, pulse el botón `+`{.action} en la barra vertical izquierda.
    - Pulse `Añadir cuenta`{.action}.

  ![outlook android](images/outlook-app-android-add02.png){.thumbnail .h-500}

Siga los pasos de instalación haciendo clic en las siguientes **3** pestañas:

> [!tabs]
> **Paso 1**
>>
>> Introduzca su dirección de correo electrónico y pulse `Continuar`{.action}.
>>
>> ![outlook android](images/outlook-app-android-add-step01.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> ![outlook android](images/zimbra-activesync-outlook-android03.png){.thumbnail .h-500}
>>
>> - Seleccione **Exchange** en la lista de tipos de cuenta.
>> - **O**, si aparece una ventana en la que se le solicita que seleccione el protocolo **IMAP** o **POP3**, pulse en uno de ellos. En la siguiente ventana, pulse el botón `?`{.action} en la esquina superior derecha de la pantalla y elige `Cambiar proveedor de cuenta`{.action}. Seleccione `Exchange`.
>>
>> ![outlook android](images/outlook-app-android-add-step021.png){.thumbnail .h-500}
>>
> **Paso 3**
>>
>> En la siguiente ventana, marque `Parámetros avanzados`{.action} e introduzca la siguiente información:
>>
>> - **Dirección de correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **Description**: Introduzca un nombre que le permita identificar esta cuenta entre sus otras cuentas de correo registradas en Outlook.
>> - **Servidor**: Introduzca "zimbra1.mail.ovh.net".
>> - **Dominio**: Deje este campo en blanco.
>> - **Nombre de usuario**: Introduzca su dirección de correo electrónico completa.
>>
>> Para finalizar la configuración, pulse el botón "&#10003;".
>>
>> ![outlook android](images/outlook-app-android-add-step03.png){.thumbnail .h-500}
>>

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes, así como gestionar sus calendarios y tareas.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede conectarse al [webmail OVHcloud](/links/web/email) con las claves de su dirección de correo electrónico. Para cualquier pregunta relativa al uso de este servicio, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### ¿Cómo modificar los parámetros existentes? <a name="modify-settings"></a>

La aplicación Outlook no permite modificar la configuración del servidor de su cuenta de correo.

Si su cuenta de correo ya está configurada y desea modificar su configuración, deberá eliminarla y volver a crearla:

1. Pulse el sobre (`✉`{.action}) en la parte superior izquierda de la pantalla.
2. Pulse el icono de sintonización (`⛭`{.action}) en la parte inferior de la columna izquierda.
3. En la sección "General", pulse `Cuentas` para ver todas las direcciones de correo configuradas en la aplicación.

  ![outlook android](images/outlook-app-android-delete-account-01.png){.thumbnail .h-500}

4. Seleccione la cuenta de correo correspondiente.
5. Pulse `Eliminar la cuenta`{.action}.
6. Pulse `Eliminar`{.action} cuando aparezca la pregunta "¿Quieres eliminar la cuenta?".

  ![outlook android](images/outlook-app-android-delete-account-02.png){.thumbnail .h-500}

> [!success]
>
> Una vez que haya eliminado su cuenta de correo, siga los pasos de instalación que se indican en la sección "[Añadir la cuenta](#add-account)" de esta guía.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en Android, consulte el [centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/configurar-el-correo-electr%C3%B3nico-en-la-aplicaci%C3%B3n-de-outlook-para-android-886db551-8dfa-4fd5-b835-f8e532091872).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).