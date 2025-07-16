---
title: 'Primeros pasos con la solución MX Plan'
excerpt: 'Cómo empezar a utilizar la solución de correo electrónico MX Plan'
updated: 2025-06-26
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Usted acaba de adquirir una solución MX Plan que permite disfrutar de direcciones de correo electrónico para enviar y recibir mensajes desde cualquier dispositivo.

**Esta guía explica cómo empezar a utilizar la solución MX Plan.**

## Requisitos

- Tener una solución MX Plan, que está disponible disponible en un [plan de hosting](/links/web/hosting).
- Estar conectado al [área de cliente de OVHcloud](/links/manager).

## Procedimiento <a name="instructions"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action}.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio.
1. **Prosiga con la tecnología de correo electrónico que utiliza su servicio MX Plan**.

> [!primary]
>
> **Identificar la tecnología de correo electrónico de su solución MX Plan.**
>
> En función de la fecha de activación de su MX Plan o de una migración reciente, la tecnología de correo asociada puede diferir. Esta versión se caracteriza por la interfaz de su webmail. Para identificarlo:
>
> - En la pestaña `Información general`{.action}, consulte la tecnología utilizada bajo la mención **Webmail** que aparece en el recuadro `Suscripción`{.action} o `Webmail`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

**Contenido**

- [Crear una dirección de correo electrónico](#create-email)
- [Utilizar sus direcciones de correo electrónico](#consult-emails)
    - [Utilizar el webmail](#consult-emails-webmail)
    - [Utilizar un cliente de correo](#consult-emails-client)
        - [Configuración de recepción IMAP y POP](#imap-pop)
        - [Configuración de envío SMTP](#smtp)
- [Redirecciones y alias](#redirection-alias)
- [Respuesta automática](#autoreply)

### Crear una dirección de correo electrónico <a name="create-email"></a>

Para más información sobre cómo crear una dirección de correo electrónico, haga clic en la pestaña correspondiente a la tecnología de correo electrónico utilizada por su servicio MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Para crear una dirección de correo electrónico, abra la pestaña `Emails`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas creadas. Para añadir una nueva cuenta de correo, haga clic en el botón `Añadir una cuenta`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Introduzca la información solicitada:
>>
>> - **Nombre de cuenta**: Introduzca su nueva dirección de correo electrónico (por ejemplo, su nombre.apellido). El dominio que compone la dirección de correo ya está preseleccionado en la lista.
>> - **Descripción de la cuenta**: Información sobre la dirección de correo electrónico, visible únicamente en la tabla de la pestaña «`Correo`{.action} del servicio de correo.
>> - **Tamaño de la cuenta**: Indique el tamaño que quiere asignar a la cuenta de correo.
>> - **Contraseña**: [Establezca una contraseña](/pages/account_and_service_management/account_information/manage-ovh-password) y confírmela. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite, por ejemplo, mencionar su nombre, apellidos y fecha de nacimiento) y que la cambie periódicamente.
>>
>> Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action} y compruebe que la información mostrada en el resumen es correcta. Si son correctos, haga clic en `Aceptar`{.action}. Realice esta acción tantas veces como sea necesario, en función del número de cuentas de que disponga.
>>
>> ![email](images/mxplan-creation-new-step3-roundcube.png){.thumbnail .w-500}
>>
> **Zimbra y OWA**
>>
>> Para crear una dirección de correo, abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas que ya están disponibles y las que puede crear. Para añadir una nueva cuenta de correo, haga clic en el botón `Añadir una cuenta`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Introduzca la información solicitada:
>>
>> - **Cuenta de correo**: El cuadro de texto ya incluye un nombre temporal que deberá eliminar e introducir su nueva dirección de correo electrónico (por ejemplo, su nombre.apellido). El dominio que compone la dirección de correo ya está preseleccionado en la lista.
>> - **Nombre**: Introduzca un nombre.
>> - **Apellido**: Introduzca un apellido.
>> - **Nombre mostrado**: Especifique el nombre que se mostrará como remitente cuando se envíen mensajes de correo electrónico con esta dirección.
>> - **Contraseña**: [Establezca una contraseña](/pages/account_and_service_management/account_information/manage-ovh-password) y confírmela. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite, por ejemplo, mencionar su nombre, apellidos y fecha de nacimiento) y que la cambie periódicamente.
>> - **Capacidad**: Determine el tamaño que desea asignar a la cuenta de correo.
>>
>> Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action} y compruebe que la información mostrada en el resumen es correcta. Si son correctos, haga clic en `Aceptar`{.action}. Realice esta acción tantas veces como sea necesario, en función del número de cuentas de que disponga.
>>
>> ![email](images/mxplan-starter-new-step3.png){.thumbnail .w-500}
>>

### Utilizar sus direcciones de correo <a name="consult-emails"></a>

Una vez creadas las direcciones de correo, ya puede empezar a utilizarlas. Para ello, puede utilizar el webmail desde un navegador de internet o utilizar un cliente de correo.

#### Utilizar el webmail <a name="consult-emails-webmail"></a>

Vaya a la página de «[Conexión al webmail](/links/web/email)» e introduzca su dirección de correo y contraseña. A continuación, haga clic en el botón `Conectar`{.action}.

Seleccione la pestaña correspondiente a la tecnología de correo de su solución MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Debería obtener una interfaz similar a la imagen de abajo con la indicación «Rouncube» en la parte superior izquierda.
>> Para descubrir la interfaz Roundcube y su uso, consulte nuestra guía «[Utilizar su dirección de correo electrónico desde el webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)».
>>
>> ![email](images/mxplan-webmail-roundcube01.png){.thumbnail .w-500}
>>
> **Zimbra**
>>
>> Como en la imagen de abajo, aparece una ventana con la indicación «Zimbra» en la parte superior izquierda.
>> Para más información sobre cómo utilizar una dirección de correo electrónico desde el webmail Zimbra, consulte nuestra guía «[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».
>>
>> ![email](images/mxplan-webmail-zimbra01.png){.thumbnail .w-500}
>>
> **OWA**
>>
>> La primera vez que se conecte al webmail, deberá indicar el idioma de la interfaz y la zona horaria en la que se encuentra. Se abrirá la bandeja de entrada.
>>
>> Para más información sobre cómo utilizar una dirección de correo electrónico desde el webmail Outlook en la Web, consulte nuestra guía «[Utilizar una dirección de correo electrónico desde el webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)».
>>
>> ![email](images/mxplan-webmail-owa01.png){.thumbnail .w-500}
>>

#### Utilizar un cliente de correo <a name="consult-emails-client"></a>

Es posible configurar su cuenta de correo en un cliente de correo como Outlook, Thunderbird, Mail de Mac, etc.

Consulte a continuación los enlaces de las guías de configuración según su tipo de dispositivo:

> [!tabs]
> **Ordenador Windows**
>>
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).<br>
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).<br>
>> - [Correo de Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
> **Ordenador Apple Mac**
>>
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).<br>
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).<br>
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
> **iPhone o iPad**
>>
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
> **Smartphone o tablet Android**
>>
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>

A continuación se indican los parámetros necesarios para configurar una dirección de correo electrónico.

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

### Redirecciones y Alias <a name="rediredirection-alias"></a>

¿Quiere redirigir su correo a otro destinatario, crear un alias o copiar sistemáticamente otra dirección de correo?

Para ello, abra la pestaña correspondiente a su tecnología de correo:

> [!tabs]
> **Roundcube**
>>
>> Para añadir una redirección o un alias, haga clic en la pestaña `Emails`{.action} de su servicio MX Plan y seleccione el botón `Gestión de las redirecciones`{.action} a la derecha.
>> Se mostrará una tabla con las redirecciones activas. A la derecha, haga clic en el botón `Añadir una redirección`{.action} para crear su redirección o alias.
>>
>> - `De la dirección`: Introduzca aquí la dirección de correo electrónico que quiera redirigir.<br>
>> - `Hacia la dirección`: Introduzca aquí la dirección de destino de su redirección. Puede ser una de sus direcciones de correo electrónico de OVHcloud o una dirección de correo electrónico externa.<br>
>> - `Elija un modo de copia`: Indique si desea conservar una copia del correo electrónico recibido en la dirección de correo electrónico de destino (`De la dirección`) o reenviar directamente a la dirección de redirección (`A la dirección`) sin conservar una copia.
>>
>> Para entender el uso de las redirecciones y alias en su servicio MX Plan, consulte nuestra guía completa: «[Utilizar las redirecciones de correo](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)».
>>
> **OWA y Zimbra**
>>
>> Si utiliza la tecnología **OWA** o **Zimbra**, puede realizar las siguientes acciones:
>>
>> 1. **Crear una redirección desde el webmail**: Mediante las reglas de la bandeja de entrada o filtros. Estas reglas, que se aplican al recibir un email, permiten transferir o redirigir un email. Para ello, puede consultar nuestra guía «[Reglas de la Bandeja de entrada desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)» o consultar el capítulo «Filtros» de nuestra guía «[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)».
>>
>> 2. **Crear una redirección y un alias desde el área de cliente de OVHcloud**: Para añadir una redirección o un alias, haga clic en la pestaña `Redirecciones`{.action}. Se mostrará una tabla con las redirecciones activas. A la derecha, haga clic en el botón `Añadir una redirección`{.action}.
>>
>> - `De la dirección`: Introduzca aquí la dirección de correo electrónico que quiera redirigir.<br>
>> - `Hacia la dirección`: Introduzca aquí la dirección de destino de su redirección. Puede ser una de sus direcciones de correo electrónico de OVHcloud o una dirección de correo electrónico externa.<br>
>> - `Elija un modo de copia`: Indique si desea conservar una copia del correo electrónico recibido en la dirección de correo electrónico de destino (`De la dirección`) o reenviar directamente a la dirección de redirección (`A la dirección`) sin conservar una copia.
>>
>> Para entender el uso de las redirecciones y alias en su servicio MX Plan, consulte nuestra guía completa: «[Utilizar las redirecciones de correo](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)».

### Respuesta automática <a name="autoreply"></a>

Cuando se ausente, es importante que pueda configurar una respuesta automática para indicar que no puede consultar o procesar su correo.

Seleccione la pestaña correspondiente a la tecnología de correo de su solución MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Para añadir una respuesta automática a una de sus direcciones de correo, haga clic en la pestaña `Emails`{.action} de su servicio MX Plan y seleccione el botón `Gestión de los contestadores`{.action} a la derecha.
>> Se muestra la tabla de contestadores activos. A la derecha, haga clic en el botón `Añadir un contestador`{.action} para crear su redirección o alias.
>>
>> Para más información sobre la puesta en marcha de una respuesta automática desde el servicio MX Plan en el área de cliente de OVHcloud, consulte nuestra guía «[MX Plan - Crear una respuesta automática en una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)».
>>
> **Zimbra**
>>
>> La puesta en marcha de una respuesta automática se realiza directamente conectándose a la dirección de correo desde el webmail. Para más información, consulte nuestra guía «[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)». Seleccione «Respuestas automáticas / Contestador» en la página de resumen.
>>
> **OWA**
>>
>> La puesta en marcha de una respuesta automática se realiza directamente conectándose a la dirección de correo desde el webmail. Para más información, consulte nuestra guía «[Utilizar su dirección de correo electrónico desde el webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)».
>>

## Más información <a name="go-further"></a>

[Utilizar el webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utilizar el webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Utilizar las redirecciones de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[MX Plan - Crear una respuesta automática en una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)

[Utilizar las redirecciones de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
