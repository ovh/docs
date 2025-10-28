---
title: "Zimbra Pro - Configurar una cuenta de correo electrónico mediante ActiveSync en Outlook para Windows"
excerpt: "Cómo configurar una cuenta de correo electrónico de Zimbra Pro en Outlook para Windows mediante el protocolo ActiveSync"
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

Las cuentas Zimbra Pro pueden configurarse en Windows utilizando el protocolo ActiveSync, esto le permite configurar el conjunto de funcionalidades colaborativas de su dirección de correo en una sola vez. La aplicación Outlook para Windows permite consultar su cuenta de correo Zimbra Pro a través del protocolo ActiveSync.

**Aprenda a configurar su cuenta Zimbra Pro en Outlook para Windows mediante el protocolo ActiveSync.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Es su responsabilidad garantizar que estos servicios funcionen correctamente.
>
> Esta guía está diseñada para ayudarle a realizar tareas comunes. No obstante, si necesita ayuda, le recomendamos que contacte con un [partner especializado](https://marketplace.ovhcloud.com/c/support-collaboration) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte la sección "[Más información](#go-further)" de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico [Zimbra Pro](/links/web/emails-zimbra).
- Tener la [versión clásica de Outlook](https://support.microsoft.com/es-es/office/instalar-o-reinstalar-la-versi%C3%B3n-cl%C3%A1sica-de-outlook-en-un-equipo-pc-con-windows-5c94902b-31a5-4274-abb0-b07f4661edf5) en Windows.
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

## Procedimiento

> [!warning]
>
> Antes de empezar a configurar, es importante tener en cuenta que la aplicación Outlook incluida gratuitamente con Windows 11 es incompatible con el protocolo ActiveSync, necesario para configurar una cuenta Zimbra Pro. Deberá utilizar la **versión clásica de Outlook** para disfrutar de la compatibilidad con el protocolo ActiveSync.
>
> Para instalar la versión clásica de Outlook en el equipo Windows, descárguela de la página de Microsoft "[Instalar o reinstalar la versión clásica de Outlook en un equipo PC con Windows](https://support.microsoft.com/es-es/office/instalar-o-reinstalar-la-versi%C3%B3n-cl%C3%A1sica-de-outlook-en-un-equipo-pc-con-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e instálela.
>
> Una vez finalizada la instalación, para distinguir entre las dos versiones una vez instaladas, escriba "Outlook" en la barra de búsqueda de Windows. Podrá ver la diferencia como se muestra a continuación.
>
>![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Añadir la cuenta <a name="add-account"></a>

Para añadir una cuenta Zimbra Pro en Outlook clásico, siga los pasos que se indican a continuación, haciendo clic en las siguientes **7** fichas:

> [!tabs]
> **Paso 1**
>>
>> 1. Acceda al **Panel de control** de Windows.
>> 2. Haga clic en `Cuentas de usuario`{.action}.
>> 3. Haga clic en `Correo`{.action}.
>> 4. Haga clic en `Cuentas de correo...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step01.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> - Desde la ventana **Configuración de la cuenta**, en la pestaña `Correo`, haga clic en `Nuevo...`{.action}.
>>
>> ![outlook Windows](images/outlook-windows-add-step02.png){.thumbnail .h-500}
>>
> **Paso 3**
>>
>> - Desde la ventana **Añadir una cuenta**, seleccione `Configuración manual o tipos de servidores adicionales`{.action}.
>> - Haga clic en `Siguiente`{.action} para continuar.
>>
>> ![outlook Windows](images/outlook-windows-add-step03.png){.thumbnail .h-500}
>>
> **Paso 4**
>>
>> - Seleccione `Exchange ActiveSync`{.action}.
>> - Haga clic en `Siguiente`{.action} para continuar.
>>
>> ![outlook Windows](images/outlook-windows-add-step04.png){.thumbnail .h-500}
>>
> **Paso 5**
>>
>> Introduzca los datos de conexión a su cuenta:
>>
>> - **Su nombre**: Defina un nombre para mostrar.
>> - **Dirección de correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **Servidor de correo**: Introduzca "zimbra1.mail.ovh.net".
>> - **Nombre de usuario**: Introduzca su dirección de correo electrónico completa.
>> - **Contraseña**: Introduzca la contraseña asociada a su dirección de correo electrónico.
>>
>> Haga clic en `Siguiente`{.action} para añadir la cuenta.
>>
>> ![outlook Windows](images/outlook-windows-add-step05.png){.thumbnail .h-500}
>>
> **Paso 6**
>>
>> Su dirección de correo electrónico ya está configurada para Outlook. Para disfrutar de una sincronización completa de las funcionalidades de su cuenta Zimbra Pro, **descargue e instale** el módulo "[Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/)".
>>
>> ![outlook Windows](images/outlook-windows-add-step06.png){.thumbnail .h-500}
>>
> **Paso 7**
>>
>> Una vez instalado el módulo "[Zimbra Connector for Outlook](https://www.zimbra.com/product/addons/zimbra-connector-for-outlook-download/)", inicie Outlook clásico.
>> La primera vez, aparecerá la ventana de configuración **Zimbra Server configuration Settings**. Complete la siguiente información:
>>
>> - **Nombre del servidor**: Introduzca "zimbra1.mail.ovh.net".
>> - **Dirección de correo electrónico**: Introduzca su dirección de correo electrónico completa.
>> - **Contraseña**: Introduzca la contraseña asociada a su dirección de correo electrónico.
>>
>> No es necesario cambiar ninguna otra configuración. Haga clic en `Aplicar`{.action} para validar la configuración y asegúrese de que la configuración es correcta. Por último, haga clic en `OK`{.action} para acceder a Outlook y empezar a utilizar su dirección de correo electrónico.
>>
>> ![outlook Windows](images/outlook-windows-add-step-07.png){.thumbnail .h-500}

> [!warning]
>
> Si experimenta un fallo de envío o recepción después de haber seguido los pasos de configuración anteriores, consulte el apartado "[Modificar los parámetros existentes](#modify-settings)" de esta guía.

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes, así como gestionar sus calendarios y tareas.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede conectarse al [webmail OVHcloud](/links/web/email) con las claves de su dirección de correo electrónico. Para cualquier pregunta relativa al uso de este servicio, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

### ¿Cómo modificar los parámetros existentes? <a name="modify-settings"></a>

Para modificar la configuración de una cuenta de correo ya configurada, siga estas instrucciones:

1. Acceda al **Panel de control** de Windows.
1. Haga clic en `Cuentas de usuario`{.action}.
1. Haga clic en `Correo`{.action}.
1. Haga clic en `Cuentas de correo...`{.action}.
1. Seleccione la cuenta de correo correspondiente en la lista y haga clic en `Editar...`{.action}.

![outlook ios](images/outlook-windows-modify-01.png){.thumbnail .h-500}

Consulte los parámetros en el **paso 7** del capítulo "[Añadir la cuenta](#add-account)".

### ¿Cómo eliminar una cuenta de correo? <a name="delete-account"></a>

Para eliminar su cuenta de correo, siga estas instrucciones:

1. Acceda al **Panel de control** de Windows.
1. Haga clic en `Cuentas de usuario`{.action}.
1. Haga clic en `Correo`{.action}.
1. Haga clic en `Cuentas de correo...`{.action}.
1. Seleccione la cuenta de correo electrónico correspondiente en la lista y haga clic en `Eliminar`{.action}.

![outlook ios](images/outlook-windows-delete-01.png){.thumbnail .h-500}

> [!warning]
>
> Para poder eliminar su cuenta de correo, es necesario que esta no sea la cuenta de correo por defecto.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en Windows, consulte el [centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/agregar-una-cuenta-de-correo-electr%C3%B3nico-a-outlook-para-windows-6e27792a-9267-4aa4-8bb6-c84ef146101b?ocmsassetID=&CorrelationId=778d1d8d-9ac2-4449b-96292924_4b).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).