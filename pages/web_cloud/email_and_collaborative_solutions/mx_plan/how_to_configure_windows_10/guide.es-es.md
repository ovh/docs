---
title: 'MX Plan / Zimbra Starter - Agregar una cuenta de correo electrónico en el nuevo Outlook para Windows'
excerpt: "Aprenda a configurar su dirección de correo electrónico en el nuevo Outlook para Windows."
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
</style>

## Objetivo

Las direcciones de correo electrónico de la oferta **MX Plan** y [Zimbra Starter](/links/web/emails-zimbra) pueden configurarse en un software de mensajería compatible. Esto le permite enviar y recibir mensajes desde la aplicación de su elección.

El **nuevo Outlook** reemplaza desde el 1 de enero de 2025 a la aplicación **Correo** en Windows. Para más información sobre este tema, consulte la página oficial de Microsoft "[Outlook para Windows: El futuro del correo, el calendario y los Personas en Windows 11](https://support.microsoft.com/es-es/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)". 

**Aprenda a configurar su dirección de correo electrónico Plan MX en el nuevo Outlook para Windows.**

## Requisitos

- Disponer de una solución de correo electrónico OVHcloud configurada previamente, entre las siguientes:
    - **Plan MX** ofrecido con nuestras [ofertas de hosting web](/links/web/hosting) o incluido en un [hosting gratuito 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter (solo).
- Disponer de la [nueva versión de Outlook](https://support.microsoft.com/es-es/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) instalada en su Windows.
- Poseer las credenciales relacionadas con la dirección de correo electrónico que desea configurar.

/// details | Información relacionada con la gestión y configuración de los servicios OVHcloud

OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen en usted. Por lo tanto, es su responsabilidad asegurar su correcto funcionamiento.

Le proporcionamos esta guía para acompañarlo en las tareas más comunes. Sin embargo, le recomendamos contactar a un [partner especializado](/links/partner) y/o contactar al editor del servicio si encuentra dificultades. De hecho, no podremos proporcionarle asistencia. Más información en la sección "[Más información](#go-further)" de esta guía.

///

## En práctica

> [!warning]
>
> Esta documentación se aplica únicamente al **nuevo Outlook** y no a "[Outlook clásico](https://support.microsoft.com/es-es/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" disponible en la suite Microsoft 365 o anteriormente instalado en su ordenador.
>
> Para distinguir las dos versiones de Outlook cuando están instaladas, escriba "Outlook" en la barra de búsqueda de Windows. Podrá entonces constatar la diferencia como se muestra a continuación. El nuevo Outlook no tiene ninguna mención especial.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}
>
> Para configurar su dirección de correo MX plan o Zimbra Starter en Outlook clásico, consulte nuestro guía "[MX Plan / Zimbra Starter - Configurar su dirección de correo en Outlook clásico para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)".

### Agregar la cuenta <a name="add-account"></a>

> [!warning]
>
> Es necesario seleccionar la pestaña de la etapa 3 correspondiente a su ubicación (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**) para obtener los valores correctos.

Para configurar su dirección de correo, siga los pasos pinchando en las pestañas que aparecen a continuación.

> [!tabs]
> **Etapa 1**
>> - Abra Outlook. En el panel izquierdo, haga clic en `Agregar una cuenta`{.action} para comenzar la configuración.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-600}
>>
> **Etapa 2**
>> - Introduzca su dirección de correo electrónico y haga clic en `Continuar`{.action}.
>> - Introduzca su contraseña y haga clic en el botón `Mostrar más`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-600}
>>
> **Etapa 3 EUROPA**
>> - Introduzca los siguientes parámetros:
>>    - **Servidor de entrada IMAP**: imap.mail.ovh.net **o** ssl0.ovh.net.
>>    - **Puerto**: 993.
>>    - **Tipo de conexión segura**: SSL/TLS.
>>    - **Nombre de usuario SMTP**: Introduzca la dirección de correo electrónico **completa**.
>>    - **Servidor de salida SMTP**: smtp.mail.ovh.net **o** ssl0.ovh.net.
>>    - **Puerto**: 465.
>>    - **Tipo de conexión segura**: SSL/TLS.
>>    - **Contraseña**: No introduzca nada, se utilizará la contraseña ingresada anteriormente.
>> - Haga clic en `Continuar`{.action} para finalizar la configuración.
>>
>> ![outlook](images/configuration-newoutlook-windows-03.png){.thumbnail .w-600}
>>
> **Etapa 3 AMÉRICA / ASIA-PACÍFICO**
>> - Introduzca los siguientes parámetros:
>>    - **Servidor de entrada IMAP**: imap.mail.ovh.ca.
>>    - **Puerto**: 993.
>>    - **Tipo de conexión segura**: SSL/TLS.
>>    - **Nombre de usuario SMTP**: Introduzca la dirección de correo electrónico **completa**.
>>    - **Servidor de salida SMTP**: smtp.mail.ovh.ca.
>>    - **Puerto**: 465.
>>    - **Tipo de conexión segura**: SSL/TLS.
>>    - **Contraseña**: No introduzca nada, se utilizará la contraseña ingresada anteriormente.
>> - Haga clic en `Continuar`{.action} para finalizar la configuración.
>>
>> ![outlook](images/configuration-newoutlook-windows-03ca.png){.thumbnail .w-600}

### Utilizar la dirección de correo electrónico <a name="use-account"></a>

Una vez configurada la dirección de correo electrónico, ya puede usarla. Ahora puede enviar y recibir mensajes.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Para acceder al webmail de OVHcloud, haga clic en [este enlace](/links/web/email). Puede conectarse con las claves de su dirección de correo electrónico.

### Modificar los ajustes existentes <a name="modify-settings"></a>

La aplicación Outlook no permite modificar los ajustes del servidor de su cuenta de correo electrónico.

Si su cuenta de correo ya está configurada y desea modificar sus parámetros, deberá eliminarla y volver a crearla:

- Haga clic en el icono de ajustes `⛭`{.action} en la parte inferior del panel izquierdo.
- En la sección "Sus cuentas" haga clic en `Gestionar`{.action} a la derecha de la dirección de correo electrónico correspondiente.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-600}

- Desplácese hacia abajo en la página.
- Haga clic en `Eliminar`{.action} para iniciar la eliminación.
- Determine si desea eliminar solo en este dispositivo o en otros dispositivos que utilicen Outlook.

![outlook](images/configuration-newoutlook-windows-05.png){.thumbnail .w-600}

> [!success]
>
> Una vez que haya eliminado su cuenta de correo electrónico, siga las instrucciones de la sección "[Agregar la cuenta](#add-account)" de esta documentación.

### Ajustes generales de envío y recepción <a name="settings-account"></a>

#### Ajustes de recepción IMAP y POP <a name="imap-pop"></a>

Para la recepción de correos electrónicos, al elegir el tipo de cuenta, le recomendamos usar **IMAP**. Sin embargo, también puede seleccionar **POP**.

> [!warning]
>
> Es necesario tener en cuenta el valor correspondiente a su ubicación (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**).

Seleccione la pestaña correspondiente a su tipo de configuración:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor de entrada EUROPA**: imap.mail.ovh.net **o** ssl0.ovh.net.
>> - **Servidor de entrada AMÉRICA/ASIA-PACÍFICO**: imap.mail.ovh.ca.
>> - **Puerto**: 993.
>> - **Tipo de seguridad**: SSL/TLS.
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor de entrada EUROPA**: pop.mail.ovh.net **o** ssl0.ovh.net.
>> - **Servidor de entrada AMÉRICA/ASIA-PACÍFICO**: pop.mail.ovh.ca.
>> - **Puerto**: 995.
>> - **Tipo de seguridad**: SSL/TLS.

#### Ajustes de envío SMTP <a name="smtp"></a>

Para el envío de correos electrónicos, a continuación encontrará los parámetros **SMTP** que debe utilizar:

**Configuración SMTP**

- **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
- **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
- **Servidor de salida EUROPA**: smtp.mail.ovh.net **o** ssl0.ovh.net.
- **Servidor de salida AMÉRICA/ASIA-PACÍFICO**: smtp.mail.ovh.ca.
- **Puerto**: 465.
- **Tipo de seguridad**: SSL/TLS.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde el cliente de mensajería nuevo Outlook en Windows, consulte [el centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Primeros pasos con la oferta Plan MX](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeros pasos con la oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).