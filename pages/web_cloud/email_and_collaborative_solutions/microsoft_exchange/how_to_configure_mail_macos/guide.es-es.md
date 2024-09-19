---
title: Exchange - Configurar una cuenta de correo en Mail de macOS
excerpt: Cómo configurar una cuenta Exchange en Mail de macOS
updated: 2024-04-16
---

<style>
.w-400 {
max-width:400px!importante;
}
.h-600 {
max-height:600px!importante;
}
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo electrónico que usted utilice, siempre que sea compatible. para poder acceder a ellas desde cualquiera de sus dispositivos. La aplicación Mail en macOS está disponible gratuitamente en todos los Mac.

**Esta guía explica cómo configurar una cuenta de correo Exchange en Mail de macOS.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Disponer de una dirección de correo [Exchange](/links/web/emails-hosted-exchange).
- Tener el programa Mail instalado en su Mac.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta <a name="addaccount"></a>

> [!primary]
>
> En nuestro ejemplo, utilizamos la mención servidor : ex**?**.mail.ovh.net. Deberá sustituir el «?» por el número que designa el servidor de su servicio Exchange.
>
> Puede consultar esta cifra en el [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action} y luego `Microsoft`{.action}.
> Haga clic en `Exchange`{.action} y seleccione la plataforma Exchange deseada. El nombre del servidor puede verse en el recuadro **Conexión** de la pestaña `Información general`{.action}.
>

- **La primera vez que inicie la aplicación**, aparecerá un asistente de configuración que le pedirá que seleccione su tipo de cuenta.

- **Si ya tiene una cuenta configurada**, haga clic en `Mail`{.action} en la barra de menús de la parte superior de la pantalla y luego en `Cuentas`{.action}.

> [!tabs]
> **Paso 1**
>> Seleccione `Exchange`{.action}<br><br>
>>![mailmac](images/mail-mac-exchange01.png){.thumbnail .w-400 .h-600}
>>>
> **Paso 2**
>> Introduzca el **Nombre** de su cuenta de correo electrónico y su **Dirección de correo electrónico** y haga clic en `Iniciar sesión`{.action} <br><br>
>>![mailmac](images/mail-mac-exchange02.png){.thumbnail .w-400 .h-600}
>>>
> **Paso 3**
>> En la siguiente ventana, haga clic en `Configuración manual`{.action}: <br><br>- Defina el **Nombre** que se mostrará en la interfaz de navegación <br>- Deje su **dirección de correo electrónico**<br>- Deje su **Contraseña** introducida <br><br>Para finalizar la configuración, haga clic en `Conectar`{.action} <br><br>
>>![mailmac](images/mail-mac-exchange03.png){.thumbnail .w-400 .h-600}
>>>
> **Paso 4**
>> Escriba: <br><br>- Dirección de correo electrónico: deje su dirección de correo electrónico completa<br>- Nombre de usuario: deje su dirección de correo electrónico completa <br>- Contraseña: deje su **contraseña**<br> - URL interna: **ex?.mail.ovh.net** (sustituya el **?** por [el número de su servidor Exchange](#addaccount))<br>- URL externa: **ex?.mail.ovh.net** (sustituya el **?*** por [el número de su servidor Exchange](#addaccount))<br><br>
>>>
>> > [!warning]
>>>
>> > Es normal que aparezca el mensaje en rojo «**No se puede comprobar el nombre o la contraseña de la cuenta**» la primera vez que aparece la ventana. Sin embargo, si este mensaje persiste después de la validación, significa que la información introducida es incorrecta.<br><br>
>>>
>>![mailmac](images/mail-mac-exchange04.png){.thumbnail .w-400 .h-600}
>>>
> **Paso 5**
>> Además de sus mensajes de correo, puede seleccionar otras funcionalidades Exchange que desea gestionar desde su Mac. <br><br>![mailmac](images/mail-mac-exchange05.png){.thumbnail .w-400 .h-600}

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. y está disponible en la dirección [Webmail](/links/web/email). Puede conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, consulte nuestra guía [Consultar su cuenta desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar**" de la sección "**Correo electrónico en Mac OS**" de nuestra guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar).

### Modificar los parámetros existentes

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- Haga clic en `Mail`{.action} en la barra de menú de la parte superior de la pantalla y luego en `Preferencias...`{.action} **o** `Ajustes...`{.action}, según su versión de macOS.
- En la pestaña `Cuentas`{.action}, seleccione la cuenta en la columna izquierda y haga clic en `Ajustes del servidor`{.action}.

![mailmac](images/mail-mac-exchange05.png){.thumbnail}

## Más información

[FAQ e-mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[Configurar una cuenta Email Pro en Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_mail_macos)

[Configurar una cuenta MX plan en Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
