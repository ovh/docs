---
title: 'Email Pro - Configurar una cuenta de correo en Outlook clásico para Windows'
excerpt: 'Cómo configurar una cuenta Email Pro en Outlook clásico para Windows'
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

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en Outlook o en Windows.**

## Requisitos

- Disponer de una cuenta de correo [Email Pro](/links/web/email-pro).
- Tener la aplicación [Outlook clásico](https://support.microsoft.com/es-es/office/instalar-o-reinstalar-la-versi%C3%B3n-cl%C3%A1sica-de-outlook-en-un-equipo-pc-con-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) en Windows.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

/// details | Información relativa a la gestión y configuración de los servicios de OVHcloud

La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.

Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado "[Más información](#go-further)" de esta guía.

///

## Procedimiento

> [!warning]
>
> Esta documentación se aplica únicamente a **Outlook clásico** disponible en la suite Microsoft 365. Si utiliza el nuevo Outlook, consulte nuestro guía "[E-mail Pro - Configurar su cuenta de E-mail Pro en el nuevo Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_windows_10)".
>
> Para instalar Outlook clásico en su ordenador Windows, descárguelo desde la página de Microsoft "[Instalar o reinstalar la versión clásica de Outlook en un equipo PC con Windows](https://support.microsoft.com/es-es/office/instalar-o-reinstalar-la-versi%C3%B3n-cl%C3%A1sica-de-outlook-en-un-equipo-pc-con-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e instálelo.
>
> Una vez finalizada la instalación, para distinguir las dos versiones cuando estén instaladas, escriba "Outlook" en la barra de búsqueda de Windows. Entonces podrá ver la diferencia como se muestra a continuación.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Añadir la cuenta <a name="add-account"></a>

> [!primary]
>
> En nuestro ejemplo, utilizamos la mención del servidor: pro?.mail.ovh.net. Deberá sustituir el "?" por el número que designa el servidor de su servicio E-mail Pro.
>
> 1. Inicie sesión en su [área de cliente de OVHcloud](/links/manager).
> 1. Vaya a la sección `Web Cloud`{.action}.
> 1. Haga clic en `Email Pro`{.action}.
> 1. Seleccione la plataforma correspondiente.
> 1. El nombre del servidor se muestra en el marco **Conexión** de la pestaña `Información general`{.action}.

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

![Outlook](images/config-outlook-emailpro01.png){.thumbnail}

Para configurar su dirección de correo electrónico, siga los pasos haciendo clic en las pestañas que se muestran a continuación.

> **Paso 1**
>>
>> - Desde la ventana **Añadir una cuenta**, seleccione `Configuración manual o tipos de servidores adicionales`{.action}.
>> - Haga clic en `Siguiente`{.action} para continuar.
>> - Seleccione `POP o IMAP`{.action}.
>> - Haga clic en `Siguiente`{.action} para continuar.
>>
>> ![Outlook](images/config-outlook-emailpro02.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> Introduzca las informaciones de conexión a su cuenta **(1)**:
>>
>> Información del usuario <br>
>> **Su nombre**: defina un nombre de visualización.<br>
>> **Dirección de correo**: introduzca su dirección de correo electrónico completa.<br>
>>
>> Información del servidor <br>
>> **Tipo de cuenta**: seleccione IMAP.<br>
>> **Servidor de correo entrante**: pro?.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor).<br>
>> **Servidor de correo saliente (SMTP)**: pro?.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor).<br>
>>
>> Información de conexión <br>
>> **Nombre de usuario**: Introduzca su dirección de correo electrónico completa.<br>
>> **Contraseña**: Introduzca la contraseña asociada a su dirección de correo electrónico.<br>
>>
>> Haga clic en `Configuración adicional...`{.action} **(2)** y pase al paso siguiente.
>>
>> ![Outlook](images/config-outlook-emailpro03.png){.thumbnail .h-500}
>>
> **Paso 3**
>>
>> Desde la pestaña `Servidor saliente`, marque `Mi servidor saliente (SMTP) requiere autenticación`{.action} y deje seleccionado `Utilizar los mismos parámetros que mi servidor de correo entrante`{.action}.
>>
>> Desde la pestaña `Opciones avanzadas`:
>>
>> - **Servidor entrante (IMAP)**: 993
>> - **Utilizar el tipo de conexión cifrada siguiente**: SSL/TLS
>> - **Servidor de correo saliente (SMTP)**: 587
>> - **Utilizar el tipo de conexión cifrada siguiente**: STARTTLS
>>
>> Haga clic en `Aceptar`{.action} para validar las informaciones. Haga clic en `Siguiente`{.action} para iniciar la configuración de la cuenta.
>>
>> ![Outlook](images/config-outlook-emailpro04.png){.thumbnail .h-500}
>>
> **Paso 4**
>>
>> Haga clic en `Siguiente`{.action} para iniciar la configuración de la cuenta. Si los parámetros son validados, obtendrá la ventana que se muestra a continuación.
>>
>> ![Outlook](images/config-outlook-emailpro05.png){.thumbnail .h-500}
>>

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de Internet. Puede acceder al webmail de OVHcloud [aquí](/links/web/email) y conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, no dude en consultar nuestra guía "[Utilizar una dirección de correo desde Outlook en la Web](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar desde Windows**" en nuestra guía "[Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-desde-windows)".

### Modificar los parámetros existentes

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- Vaya a `Archivo`{.action} desde la barra de menú superior de su pantalla.
- Seleccione la cuenta a modificar en el menú desplegable **(1)**.
- Haga clic en `Configuración de la cuenta`{.action} **(2)** debajo.
- Haga clic en `Configuración de la cuenta...`{.action} **(3)** para acceder a la ventana de configuración.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail .h-500}

- Se mostrará la ventana de configuración de cuentas, seleccione la cuenta de correo electrónico correspondiente y haga clic en `Modificar...`{.action}.

![Outlook](images/config-outlook-emailpro07.png){.thumbnail .h-500}

Para configurar su cuenta, siga las instrucciones a partir de **la etapa 2** en la sección [Añadir la cuenta](#add-account) de este guía.

### Parámetros generales de envío y recepción <a name="settings-account"></a>

#### Parámetros de recepción IMAP y POP <a name="imap-pop"></a>

Para la recepción de los correos electrónicos, al elegir el tipo de cuenta, le recomendamos utilizar **IMAP**. Sin embargo, puede seleccionar **POP**.

Seleccione la pestaña correspondiente a su tipo de configuración:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor entrante**: pro?.mail.ovh.net (sustituya bien el "?" por el número de su servidor).
>> - **Puerto**: 993.
>> - **Tipo de seguridad**: SSL/TLS.
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor entrante**: pro?.mail.ovh.net (sustituya bien el "?" por el número de su servidor).
>> - **Puerto**: 995.
>> - **Tipo de seguridad**: SSL/TLS.

#### Parámetros de envío SMTP <a name="smtp"></a>

Para el envío de los correos electrónicos, a continuación encontrará los parámetros **SMTP** a utilizar:

**Configuración SMTP**

- **Nombre de usuario**: introduzca la dirección de correo electrónico **completa**.
- **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
- **Servidor saliente**: pro?.mail.ovh.net (sustituya bien el "?" por el número de su servidor).
- **Puerto**: 587.
- **Tipo de seguridad**: STARTTLS.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en macOS, consulte [el Centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/agregar-cuenta-de-correo-en-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurar una cuenta de correo electrónico en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configurar una cuenta Exchange en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Interactúe con nuestra [comunidad de usuarios](/links/community).