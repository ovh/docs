---
title: 'Exchange - Configurar una cuenta de correo en Outlook clásico para Windows'
excerpt: 'Cómo configurar una cuenta Exchange en Outlook clásico para Windows'
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

Es posible configurar sus cuentas Exchange en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos. Microsoft Outlook es el programa recomendado para utilizar una dirección de correo Exchange con sus funciones colaborativas.

**Esta guía explica cómo configurar una cuenta Exchange en Microsoft Outlook para Windows.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/G4CVvTzFA58?si=Bd6SRW9258ptF-lt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Requisitos

- Tener un servicio [Exchange](/links/web/emails).
- Tener la [versión clásica de Outlook](https://support.microsoft.com/es-es/office/instalar-o-reinstalar-la-versi%C3%B3n-cl%C3%A1sica-de-outlook-en-un-equipo-pc-con-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) en Windows.
- Disponer del nombre de usuario y de la contraseña de la cuenta de correo electrónico que quiera configurar.
- El registro SRV de OVHcloud debe estar correctamente configurado en la zona DNS del dominio. No dude en consultar nuestra guía "[Añadir un dominio a un servicio Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain)".

/// details | Información relativa a la gestión y configuración de los servicios OVHcloud

La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.

Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un [proveedor de servicios especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado "[Más información](#go-further)" de esta guía.

///

> [!primary]
>
> Si utiliza Outlook y posterior para Mac, consulte nuestra guía "[Configurar una cuenta Exchange en Outlook para Mac](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac)".

## Procedimiento

> [!warning]
>
> Antes de empezar a configurar, es importante tener en cuenta que la aplicación Outlook incluida gratuitamente con Windows 11 es [incompatible](https://learn.microsoft.com/es-es/microsoft-365-apps/outlook/get-started/supported-account-types) con los productos Exchange OVHcloud, llamados *on-premises*. Deberá utilizar la **versión clásica de Outlook**.
>
> Para instalar la versión clásica de Outlook en el equipo Windows, descárguela de la página de Microsoft "[Instalar o reinstalar la versión clásica de Outlook en un equipo PC con Windows](https://support.microsoft.com/es-es/office/instalar-o-reinstalar-la-versi%C3%B3n-cl%C3%A1sica-de-outlook-en-un-equipo-pc-con-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e instálela.
>
> Una vez finalizada la instalación, para distinguir entre las dos versiones una vez instaladas, escriba "Outlook" en la barra de búsqueda de Windows. Podrá ver la diferencia como se muestra a continuación.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Añadir la cuenta

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

![Outlook](images/config-outlook-exchange01.png){.thumbnail .h-500}

- Deje `Cuenta de correo` seleccionada y complete la siguiente información:
    - **Nombre**: defina un nombre de visualización.
    - **Dirección de correo**: introduzca su dirección de correo electrónico completa.
    - **Contraseña**: introduzca la contraseña asociada a su dirección de correo electrónico.
    - **Confirmar la contraseña**: introduzca de nuevo la contraseña asociada a su dirección de correo electrónico.
- Haga clic en `Siguiente`{.action} para continuar.

![exchange](images/config-outlook-exchange02.png){.thumbnail .h-500}

- Si la configuración de su nombre de dominio es válida, puede aparecer un mensaje de autorización de conexión al servidor Exchange de OVHcloud. Haga clic en `Autorizar`{.action} **(1)** para permitir la configuración automática de su cuenta Exchange.
- Aparece una segunda ventana de autenticación, introduzca la contraseña de su dirección de correo electrónico **(2)**.

![exchange](images/config-outlook-exchange03.png){.thumbnail .h-500}

Después de la autorización y la autenticación en el servidor Exchange de OVHcloud, la configuración estará terminada y su cuenta operativa.

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

Su dirección de correo Exchange y todas sus funciones colaborativas también están disponibles en la interfaz [OWA](/links/web/email). Si tiene cualquier duda sobre su uso, no dude en consultar nuestra guía "[Consultar su cuenta Exchange desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Modificar los parámetros existentes

> [!warning]
>
> No es posible modificar los parámetros del servidor de una cuenta Exchange. Si experimenta un problema relacionado con la sincronización con el servidor, es necesario eliminar la cuenta de Outlook y configurarla de nuevo. Para hacer esto, siga las instrucciones que se indican a continuación.

Si su cuenta de correo electrónico ya está configurada y debe acceder a los parámetros de la cuenta para eliminarla:

- Vaya a `Archivo`{.action} desde la barra de menú superior de su pantalla.
- Seleccione la cuenta a modificar en el menú desplegable **(1)**.
- Haga clic en `Configuración de la cuenta`{.action} **(2)** debajo.
- Haga clic en `Configuración de la cuenta...`{.action} **(3)** para acceder a la ventana de configuración.

![Outlook](images/config-outlook-exchange04.png){.thumbnail .h-500}

- Se muestra la ventana de configuración de cuentas, seleccione la cuenta de correo electrónico correspondiente y haga clic en `Eliminar`{.action}.

![Outlook](images/config-outlook-exchange05.png){.thumbnail .h-500}

Una vez eliminada la cuenta Exchange, siga la sección "[Añadir la cuenta](#add-account)" de este guía para configurar de nuevo su cuenta de correo electrónico.

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar desde Windows**" en nuestra guía "[Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-desde-windows)".

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en Windows, consulte [el Centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/agregar-cuenta-de-correo-en-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurar una cuenta de correo electrónico en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)

[Configurar una cuenta Email Pro en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

Interactúe con nuestra [comunidad de usuarios](/links/community).