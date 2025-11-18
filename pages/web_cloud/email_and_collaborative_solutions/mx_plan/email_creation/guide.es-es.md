---
title: 'Crear una dirección de correo electrónico en un MX Plan'
excerpt: 'Cómo crear una dirección de correo electrónico en la solución MX Plan'
updated: 2025-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objetivo

La solución MX Plan le permite disfrutar de direcciones de correo asociadas a un dominio.

**Esta guía explica cómo crear una dirección de correo electrónico en un MX Plan.**

## Requisitos

- Tener una solución MX Plan. Esta está disponible a través de:
    - Un [plan de hosting](/links/web/hosting).
    - Un [alojamiento gratuito 100M](/links/web/domains-free-hosting) incluido con un dominio (activado previamente).
    - Una solución MX Plan contratada por separado.
- Estar conectado al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

> [!primary]
>
> **Casos particulares**
>
> - En el caso del Alojamiento gratuito 100M, es necesario activar previamente el alojamiento para poder crear una dirección de correo. Puede realizar esta operación desde el [área de cliente de OVHcloud](/links/manager), accediendo al dominio correspondiente.
> - Si tiene un [alojamiento web](/links/web/hosting), deberá activar su solución MX Plan incluida antes de continuar la lectura de esta guía. Para ello, consulte nuestra guía [Activar las direcciones de correo incluidas en su alojamiento web](/pages/web_cloud/web_hosting/activate-email-hosting).

## Procedimiento <a name="instructions"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda al apartado `Web Cloud`{.action}.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio.
1. **Prosiga con la tecnología de correo electrónico que utiliza su servicio MX Plan**.

> [!primary]
>
> **Identificar la tecnología de correo electrónico de su solución MX Plan.**
>
> En función de la fecha de activación de su MX Plan o de una migración reciente, la tecnología de correo asociada puede diferir. Esta versión se caracteriza por la interfaz de su webmail. Para identificarlo:
>
> - En la pestaña `Información general`{.action}, consulte la tecnología utilizada bajo la mención **Webmail** que aparece en el recuadro `Suscripción`{.action} en `Webmail`{.action}.
>
>![MX plan](images/technology-email.png){.thumbnail .w-400}

### OWA y Zimbra

Esta sección describe los planes MX Plan que utilizan la tecnología webmail **OWA** y **Zimbra**.

#### Crear una cuenta de correo

Para crear una dirección de correo electrónico, abra la pestaña `Cuentas de correo`{.action}. Se mostrarán las cuentas de correo ya creadas y el número de cuentas que puede crear. Para crear una nueva, haga clic en el botón `Añadir una cuenta`{.action}.

![Correo electrónico](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

A continuación, introduzca la información solicitada:

- **Cuenta de correo**: Un nombre temporal se autocompletará en el cuadro de texto. Sustituya por el que quiera para su dirección de correo electrónico (por ejemplo, nombre.apellido). El dominio que formará la dirección de correo completa aparecerá preseleccionado en la lista.

> [!warning]
>
> La elección del nombre de su dirección de correo electrónico debe respetar las siguientes condiciones:
>
> - Mínimo 2 caracteres
> - Máximo 32 caracteres
> - Sin caracteres acentuados
> - Sin caracteres especiales, excepto los siguientes: `.`, `,`, `-` y `_`

- **Nombre**: Introduzca un nombre.
- **Nombre**: Introduzca los apellidos.
- **Nombre mostrado**: Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.
- **Contraseña**: Introduzca una contraseña y luego confírmela en el último campo. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.

> [!warning]
>
> La elección de la contraseña debe respetar las siguientes condiciones:
>
> - Mínimo 9 caracteres
> - Máximo 30 caracteres
> - Sin caracteres acentuados

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action}. 

![Correo electrónico](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

Compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Aceptar`{.action}. La cuenta que acaba de crear aparecerá en la tabla. Espere a que la cuenta esté disponible.

Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición.

#### Consultar los mensajes de correo

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

Seleccione la pestaña correspondiente a la tecnología de correo de su solución MX Plan:

> [!tabs]
> **Zimbra**
>>
>> Cuando esté conectado al webmail Zimbra, verá la interfaz de abajo. Para más información sobre el uso del webmail Zimbra, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> ![Zimbra - interface](images/zimbra-01.png){.thumbnail .w-400}
>>
> **OWA**
>>
>> La primera vez que se conecte al webmail, deberá seleccionar el idioma de la interfaz y la zona horaria en la que se encuentra. A continuación se abrirá la bandeja de entrada. Para más información, consulte nuestra guía "[Utilizar una dirección de correo desde Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".
>>
>> ![Correo electrónico](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Para consultar su correo desde un cliente de correo, consulte la sección "[Consultar una cuenta de correo desde un dispositivo](#configdevices)".

#### Eliminar una cuenta de correo

Desde la nueva versión MX Plan, cuando debe eliminarla, se habla de *reinicialización de la cuenta*.

> [!warning]
>
> Antes de eliminar las cuentas de correo, asegúrese de que no se utilizan. Es posible que necesite guardar estas cuentas. Si lo necesita, consulte la guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), en la que se explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} a la derecha de la cuenta que desea eliminar y luego en `Restaurar la cuenta`{.action}.

![Correo electrónico](images/mxplan-new-reset.png){.thumbnail .w-400}

### MX Plan Roundcube

Esta sección está dedicada a los planes MX Plan que utilizan la tecnología webmail **Roundcube**.

#### Crear una cuenta de correo

Para crear una dirección de correo, abra la pestaña `Correo electrónico`{.action}. Se mostrará una tabla con todas las cuentas de correo creadas en la solución MX Plan. Haga clic en el botón `Crear una dirección de correo`{.action}.

![Correo electrónico](images/mxplan-creation-legacy-step2.png){.thumbnail .w-400}

A continuación, introduzca la información solicitada:

- **Nombre de la cuenta**: Introduzca el nombre que quiera asignar a su dirección de correo electrónico (por ejemplo, nombre.apellido). El dominio en cuestión ya está completado por defecto.
- **Descripción de la cuenta**: Proporcione una breve descripción que le permita diferenciar su cuenta de las otras cuentas que tenga en su área de cliente de OVHcloud.
- **Tamaño de cuenta**: Seleccione el tamaño de cuenta deseado. Este es el espacio del que dispondrá su dirección para almacenar los mensajes.
- **Contraseña**: Establezca una contraseña y confírmela. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action}. 

![Correo electrónico](images/mxplan-creation-legacy-step3.png){.thumbnail .w-400}

Compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Siguiente`{.action}. Por último, haga clic en `Aceptar`{.action} para terminar de crear la dirección de correo y espere a que la cuenta esté disponible.

Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición.

#### Consultar los mensajes de correo 

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

A continuación, podrá consultar su bandeja de entrada. Para más información, consulte nuestra [Guía de uso de Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

![Correo electrónico](images/mxplan-creation-legacy-step4.png){.thumbnail .w-400}

Para consultar sus mensajes de correo desde un cliente de correo, consulte la sección [Consultar una cuenta de correo desde un dispositivo](#configdevices).

#### Eliminar una cuenta de correo

> [!warning]
>
> Antes de eliminar las cuentas de correo, asegúrese de que no se utilizan. Es posible que necesite guardar estas cuentas. Si lo necesita, consulte la guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), en la que se explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} a la derecha de la cuenta que desea eliminar y luego en `Eliminar la cuenta`{.action}.

![Correo electrónico](images/mxplan-legacy-reset.png){.thumbnail .w-400}

### Consultar una cuenta de correo desde un dispositivo <a name="configdevices"></a>

Puede configurar su dirección de correo en el dispositivo que desee (smartphone o tablet, por ejemplo). Si lo necesita, consulte la guía correspondiente:

> [!tabs]
> **Windows**
>>
>> - [Correo en Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Correo electrónico para iPhone o iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Otros**
>>
>> - [Interfaz Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

A continuación se indican los parámetros necesarios para configurar una cuenta MX Plan.

##### Parámetros de recepción IMAP y POP <a name="imap-pop"></a>

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. Sin embargo, puede seleccionar **POP**.

> [!warning]
>
> Es necesario indicar el valor correspondiente a su localización (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**).

Seleccione la pestaña correspondiente a su tipo de configuración:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor EUROPA (entrante)**: imap.mail.ovh.net **o** ssl0.ovh.net.
>> - **Servidor AMERICA/ASIA-PACÍFICO (entrante)**: imap.mail.ovh.ca.
>> - **Puerto**: 993.
>> - **Tipo de seguridad**: SSL/TLS.
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor EUROPA (entrante)**: pop.mail.ovh.net **o** ssl0.ovh.net.
>> - **Servidor AMERICA/ASIA-PACÍFICO (entrante)**: pop.mail.ovh.ca.
>> - **Puerto**: 995.
>> - **Tipo de seguridad**: SSL/TLS.

##### Parámetros de envío SMTP <a name="smtp"></a>

Para el envío de mensajes de correo, consulte a continuación los parámetros **SMTP** que debe utilizar:

**Configuración SMTP**

- **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**.
- **Contraseña**: Introduzca la contraseña de la dirección de correo electrónico.
- **Servidor EUROPA (saliente)**: smtp.mail.ovh.net **o** ssl0.ovh.net.
- **Servidor AMERICANO/ASIA-PACÍFICO (saliente)**: smtp.mail.ovh.ca.
- **Puerto**: 465.
- **Tipo de seguridad**: SSL/TLS.

### Casos de uso

**Ha utilizado todas las direcciones incluidas en su plan?**

- Consulte las preguntas de [nuestras FAQ de correo](pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
- Consulte todos nuestros productos de correo electrónico [Zimbra](/links/web/emails-zimbra) o [Exchange](/links/web/emails) para completar su MX Plan con el mismo dominio.

## Más información <a name="go-further"></a>

[Utilizar el webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utilizar el webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).