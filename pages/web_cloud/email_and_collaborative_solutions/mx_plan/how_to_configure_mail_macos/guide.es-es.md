---
title: 'MX Plan - Configure su cuenta de correo electrónico en Mail para macOS'
excerpt: Cómo configurar una cuenta MX Plan en Mail de macOS
updated: 2024-10-22
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos. La aplicación Mail en macOS está disponible gratuitamente en todos los Mac.

**Esta guía explica cómo configurar una cuenta MX Plan en Mail de macOS.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado "Más información" de esta guía.

## Requisitos

- Disponer de una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVHcloud](/links/web/hosting)).
- Tener el programa Mail instalado en su Mac.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta

- **En la primera ejecución de la aplicación**: se le mostrará directamente un asistente de configuración, que le pedirá que elija el tipo de cuenta.

- **Si ya ha configurado una cuenta**: haga clic en `Mail`{.action} en el menú superior y seleccione `Cuentas`{.action}.

Siga los pasos de instalación haciendo clic en las fichas siguientes:

> [!tabs]
> **Paso 1**
>>
>> Seleccione `Otra cuenta Mail`{.action} y haga clic en `Cuenta Mail`{.action}.<br><br>
>> ![mailmac](images/mail-mac-email01.png){.thumbnail .w-400 .h-600}
>>
> **Paso 2**
>>
>> Introduzca la siguiente información en la ventana "**Añadir una cuenta de correo**": <br><br>
>> - Un **Nombre** para su cuenta de correo
>> - Su **Dirección de correo electrónico**
>> - El **Contraseña** de su dirección de correo<br>
>> ![mailmac](images/mail-mac-email02.png){.thumbnail .w-400 .h-600}
>>
> **Paso 3**
>>
>> Introduzca la información en la siguiente ventana:
>>
>> - **Dirección de correo electrónico**
>> - **Nombre de usuario**: Introduzca su dirección de correo electrónico completa
>> - **Contraseña**
>> - **Tipo de cuenta**: Seleccione `IMAP` (recomendado) o `POP`
>> - **Servidor de recepción**:<br>- **EUROPA**: Introduzca `imap.mail.ovh.net` o `ssl0.ovh.net`<br>- **AMÉRICA/ASIA**: Introduzca `imap.mail.ovh.ca`
>> - **Servidor de envío**:<br>- **EUROPA**: Introduzca `smtp.mail.ovh.net` o `ssl0.ovh.net`<br>- **AMÉRICA/ASIA**: Introduzca `smtp.mail.ovh.ca`
>>
>> Para finalizar la configuración, haga clic en `Iniciar sesión`{.action}
>>
>> > [!warning]
>> >
>> > Es normal que aparezca el mensaje en rojo "**no se puede verificar el nombre o la contraseña de la cuenta**" cuando aparece la primera vez. Sin embargo, si este mensaje persiste después de la validación, significa que la información introducida es incorrecta.<br><br>
>>
>> ![mailmac](images/mail-mac-email03.png){.thumbnail .w-400 .h-600}

> [!warning]
>
> Si, después de haber seguido los pasos de configuración que se indican a continuación, detecta un fallo de envío o recepción, consulte [Modificar los parámetros existentes](#modify-settings)

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. y está disponible en la dirección [Webmail](/links/web/email). Puede conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, consulte nuestra guía [Usar Outlook Web App con una cuenta Exchange](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) o [Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar**" de la sección "**Correo electrónico en Mac OS**" de nuestra guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar).

### Modificar los parámetros existentes <a name="modify-settings"></a>

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- En la parte superior de la pantalla, haga clic en `Correo electrónico`{.action} y seleccione `Preferencias`{.action}.
- Seleccione la cuenta correspondiente en la columna izquierda y haga clic en `Ajustes del servidor`{.action}.
- En la sección `Servidor de recepción (POP)` o `Servidor de recepción (IMAP)`, introduzca su dirección de correo electrónico completa en el cuadro `Nombre de usuario`{.action} y la `Contraseña`{.action} asociada en el cuadro previsto a tal efecto.
- En la sección `Servidor de envío (SMTP)`, introduzca su dirección de correo electrónico completa en el cuadro `Nombre de usuario `{.action} y la `Contraseña`{.action} asociada en el cuadro previsto a tal efecto.
- Desmarque las casillas de verificación `Gestionar automáticamente los ajustes de conexión`{.action} para que aparezcan los parámetros de `Port`{.action} y `Autenticación`{.action}.
- Asegúrese de que las casillas `Usar TLS/SSL`{.action} están marcadas.
- En los menús desplegables `Autenticación`{.action}, compruebe que `Contraseña` está seleccionada.
- Para las casillas de verificación `Nombre del host`{.action} y `Puerto`{.action}, consulte los valores del tema "[Recordatorio de los parámetros POP, IMAP y SMTP](#popimap-settings)". **Compruebe que el tipo de servidor (IMAP, POP y SMTP) coincide con su región (Europa o Asia-Pacífico)**.

Para finalizar la configuración, haga clic en `Guardar`{.action}.

![mailmac](images/mail-mac-email04.png){.thumbnail .w-400 .h-600}

> [!primary]
>
> **Cambiar la configuración**
>
> Si su dirección de correo electrónico está configurada en **IMAP** y desea cambiar esta configuración a **POP**, debe eliminar la cuenta en Mail de MacOS y volver a crearla en **POP**.

### Aviso de los parámetros POP, IMAP y SMTP <a name="popimap-settings"></a>

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. Sin embargo, puede seleccionar **POP**.

> [!warning]
>
> Es necesario indicar el valor correspondiente a su localización (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**)

- **Para una configuración en POP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor **EUROPA** (entrante)|pop.mail.ovh.net **o** ssl0.ovh.net|
|Servidor **AMÉRICA / ASIA-PACÍFICO** (entrante)|pop.mail.ovh.ca|
|Puerto|995|
|Tipo de seguridad|SSL/TLS|

- **Para una configuración en IMAP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor **EUROPA** (entrante)|imap.mail.ovh.net **o** ssl0.ovh.net|
|Servidor **AMÉRICA / ASIA-PACÍFICO** (entrante)|imap.mail.ovh.ca|
|Puerto|993|
|Tipo de seguridad|SSL/TLS|

Para el envío de mensajes de correo electrónico, si debe introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, consulte a continuación los parámetros que debe utilizar:

- **Configuración SMTP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor **EUROPA** (saliente)|smtp.mail.ovh.net **o** ssl0.ovh.net|
|Servidor **AMÉRICA / ASIA-PACÍFICO** (saliente)|smtp.mail.ovh.ca|
|Puerto|465|
|Tipo de seguridad|SSL/TLS|

> [!primary]
>
> **Cambiar la configuración**
>
> Cuando configure su dirección de correo electrónico en **IMAP** y quiera cambiar la configuración a **POP**, deberá eliminar la cuenta de Mail de Mac y crearla en **POP** para cambiar la configuración.

### ¿Qué hago si no consigo recibir o enviar mensajes de correo?

- Si ve el icono visible en la captura de abajo, se trata de una desconexión de red. Compruebe que la conexión a Internet funciona correctamente.

![mailmac](images/mail-mac-disconnect.png){.thumbnail .w-400 .h-600}

- Si el icono visible aparece en la captura de abajo, se trata de un fallo de sincronización. Compruebe los parámetros de configuración de su cuenta de correo electrónico en el apartado [Modificar los parámetros existentes](#modify-settings).

![mailmac](images/mail-mac-fail.png){.thumbnail .w-400 .h-600}

## Más información <a name="go-further"></a>

> [!primary]
>
> Para más información sobre la configuración de una dirección de correo electrónico desde la aplicación Mail en macOS, consulte [el centro de ayuda de Apple](https://support.apple.com/es-es/guide/mail/mail35803/mac).

[MX Plan - Configurar una cuenta de correo electrónico en Mail para iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)

[Email Pro - Configurar una cuenta de correo electrónico en Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)<br>
[Email Pro - Configurar una cuenta de correo electrónico en Mail para iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_ios)

[Exchange - Configurar una cuenta de correo electrónico en Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios)<br>
[Exchange - Configurar una cuenta de correo electrónico en Mail para iPhone e iPad](pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos/guide.fr-fr.md)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).