---
title: "E-mail Pro - Configurar su cuenta de E-mail Pro en el nuevo Outlook para Windows"
excerpt: "Descubra cómo configurar su dirección de E-mail Pro en el nuevo Outlook para Windows"
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Las direcciones de correo electrónico de la oferta [E-mail Pro](/links/web/email-pro) se pueden configurar en un cliente de mensajería compatible. Esto le permite enviar y recibir mensajes desde la aplicación de su elección.

El **nuevo Outlook** reemplaza desde el 1 de enero de 2025 la aplicación **Correo** en Windows. Para obtener más información sobre este tema, consulte la página oficial de Microsoft: "[Outlook para Windows: El futuro del correo, calendario y Personas en Windows 11](https://support.microsoft.com/es-es/office/outlook-pour-windows-l-avenir-du-courrier-du-calendrier-et-des-personnes-sur-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)".

**Descubra cómo configurar su dirección de E-mail Pro en el nuevo Outlook para Windows.**

## Requisitos

- Tener una dirección [E-mail Pro](/links/web/email-pro).
- Tener el [nuevo Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) para Windows.
- Poseer las credenciales relacionadas con la dirección de correo electrónico que desea configurar.

/// details | Información relacionada con la gestión y configuración de los servicios OVHcloud

OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen en usted. Por lo tanto, es su responsabilidad asegurar su correcto funcionamiento.

Le proporcionamos esta guía para acompañarlo en las tareas más comunes. Sin embargo, le recomendamos contactar a un [socio especializado](/links/partner) y/o al proveedor del servicio si encuentra dificultades. Tenga en cuenta que no podremos proporcionar asistencia. Para obtener más información, consulte la sección "[Más información](#go-further)" de esta guía.

///

## Procedimiento

> [!warning]
>
> Esta documentación se aplica únicamente al **nuevo Outlook** y no a "[Outlook clásico](https://support.microsoft.com/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" disponible en la suite Microsoft 365 o anteriormente instalado en su ordenador.
>
> Para distinguir las dos versiones de Outlook cuando están instaladas, escriba "Outlook" en la barra de búsqueda de Windows. Podrá entonces constatar la diferencia como se muestra a continuación. El nuevo Outlook no tiene ninguna mención especial.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}
>
> Para configurar su dirección de correo electrónico Pro en Outlook clásico, consulte nuestro guía "[E-mail Pro - Configurar una cuenta de correo en Outlook clásico para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)".

### Agregar la cuenta <a name="add-account"></a>

> [!warning]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro?.mail.ovh.net. Sustituya la "?" por la cifra que designa al servidor de su servicio Email Pro.
>
> 1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
> 1. Acceda al apartado `Web Cloud`{.action}.
> 1. Haga clic en `Email Pro`{.action}.
> 1. Seleccione la plataforma correspondiente.
> 1. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

Para configurar su dirección de correo electrónico, siga los pasos pinchando en las pestañas que se muestran a continuación.

> [!tabs]
> **Etapa 1**
>> - Abra Outlook. En el panel izquierdo, haga clic en `Agregar una cuenta`{.action} para iniciar la configuración.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-400}
>>
> **Etapa 2**
>> - Introduzca su dirección de correo electrónico y haga clic en `Continuar`{.action}.
>> - Introduzca su contraseña y haga clic en el botón `Mostrar más`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-400}
>>
> **Etapa 3**
>> - Introduzca los siguientes parámetros:
>>    - **Servidor de entrada IMAP**: pro?.mail.ovh.net
>>    - **Puerto**: 993
>>    - **Tipo de conexión segura**: SSL/TLS
>>    - **Nombre de usuario SMTP**: La dirección de correo electrónico que está agregando.
>>    - **Servidor de salida SMTP**: pro?.mail.ovh.net
>>    - **Puerto**: 587
>>    - **Tipo de conexión segura**: STARTTLS
>>    - **Contraseña**: No introduzca nada; se utilizará la contraseña ingresada anteriormente.
>> - Haga clic en `Continuar`{.action} para finalizar la configuración.
>>
>> ![outlook](images/configuration-newoutlook-windows-emp-03.png){.thumbnail .w-400}

### Utilizar la dirección de correo electrónico <a name="use-account"></a>

Una vez configurada la dirección de correo electrónico, ya puede usarla. Ahora puede enviar y recibir mensajes.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Para acceder al webmail de OVHcloud, haga clic en [este enlace](/links/web/email). Puede conectarse con las claves de su dirección de correo electrónico.

### Modificar los ajustes existentes <a name="modify-settings"></a>

La aplicación Outlook no permite modificar los ajustes del servidor de su cuenta de correo electrónico.

Si su cuenta de correo ya está configurada y desea modificar sus parámetros, deberá eliminarla y volver a crearla:

- Haga clic en el icono de ajustes `⛭`{.action} en la parte inferior del panel izquierdo.
- En la sección "Tus cuentas", haga clic en `Gestionar`{.action} a la derecha de la dirección de correo electrónico correspondiente.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-400}

- Desplácese hacia abajo en la página.
- Haga clic en `Eliminar`{.action} para iniciar el proceso de eliminación.
- Determine si desea eliminar solo en este dispositivo o en todos los dispositivos que utilicen Outlook.

![outlook](images/configuration-newoutlook-windows-emp-05.png){.thumbnail .w-400}

> [!success]
>
> Una vez que haya eliminado su cuenta de correo electrónico, siga las instrucciones de la sección "[Agregar la cuenta](#add-account)" de esta documentación.

### Ajustes generales de envío y recepción <a name="settings-account"></a>

#### Ajustes de recepción IMAP y POP <a name="imap-pop"></a>

Para la recepción de correos electrónicos, al elegir el tipo de cuenta, le recomendamos usar **IMAP**. Sin embargo, también puede seleccionar **POP**.

Seleccione la pestaña correspondiente a su tipo de configuración:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor de entrada**: pro?.mail.ovh.net (reemplace bien el "?" con el número de su servidor).
>> - **Puerto**: 993.
>> - **Tipo de seguridad**: SSL/TLS.
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor de entrada**: pro?.mail.ovh.net (reemplace bien el "?" con el número de su servidor).
>> - **Puerto**: 995.
>> - **Tipo de seguridad**: SSL/TLS.

#### Ajustes de envío SMTP <a name="smtp"></a>

Para el envío de correos electrónicos, encuentre a continuación los parámetros **SMTP** que debe utilizar:

**Configuración SMTP**

- **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
- **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
- **Servidor de salida**: pro?.mail.ovh.net (reemplace bien el "?" con el número de su servidor).
- **Puerto**: 587.
- **Tipo de seguridad**: STARTTLS.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde el cliente de mensajería nuevo Outlook en Windows, consulte [el centro de ayuda de Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Primeros pasos con la solución E-mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).