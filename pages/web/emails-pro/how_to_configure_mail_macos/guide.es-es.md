---
title: 'Configurar una cuenta Email Pro en Mail de macOS'
slug: configurar-email-pro-mail-macos
section: 'Configuración del cliente de correo'
order: 4
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 13/06/2022**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos. La aplicación Mail en macOS está disponible gratuitamente en todos los Mac.

**Esta guía explica cómo configurar una cuenta Email Pro en Mail de macOS.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado "Más información" de esta guía.
> 

## Requisitos

- Disponer de una dirección [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/).
- Tener el programa Mail instalado en su Mac.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.
 
## Procedimiento

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro<b>?</b>.mail.ovh.net. Sustituya la «?» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action} y `Email Pro`{.action}. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

### Añadir la cuenta

- **En la primera ejecución de la aplicación**: se le mostrará directamente un asistente de configuración, que le pedirá que elija el tipo de cuenta.

- **Si ya ha configurado una cuenta**: haga clic en `Mail`{.action} en el menú superior y seleccione `Cuentas`{.action}.

| | |
|---|---|
|![mailmac](images/mail-mac-emailpro01.png){.thumbnail}|Seleccione `Otra cuenta de correo`{.action} y haga clic en `Cuentas de correo`{.action}.|
|Introduzca en la ventana "**Añadir cuenta de correo**" la siguiente información: <br>- el **nombre** de su cuenta de correo <br>- Su **dirección de correo electrónico** <br>- La **contraseña** de su dirección de correo electrónico |![mailmac](images/mail-mac-emailpro02.png){.thumbnail}|
|![mailmac](images/mail-mac-emailpro03.png){.thumbnail}|Introduzca la información en la siguiente ventana: <br>- Deje su **dirección de correo electrónico** ya introducida <br>- Introduzca su dirección de correo electrónico completa en el **Nombre** de usuario <br>- Deje su **contraseña** ya introducida <br>- Seleccione `POP` o `IMAP`(recomendado) en **Tipo de cuenta**<br>- Introduzca `pro?.mail.ovh.net` en el **Servidor de recepción** (sustituya "**?**" por el número de su servidor)<br>-Introduzca también `pro?.mail.ovh.net` en el **servidor de envío** (sustituya "**?**" por el número de su servidor)<br><br>Para finalizar la configuración, haga clic en `Conectar`{.action}|

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. y está disponible en la dirección <https://www.ovh.es/mail/>. Puede conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, consulte nuestra guía [Usar Outlook Web App con una cuenta ](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_2016_guia_de_uso_de_outlook_web_app/).

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar**" de la sección "**Correo electrónico en Mac OS**" de nuestra guía [Migrar manualmente una dirección de correo electrónico](https://docs.ovh.com/es/emails/migrar-sus-direcciones-de-correo-manualmente/#exportar).


### Modificar los parámetros existentes

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- En la parte superior de la pantalla, haga clic en `Correo electrónico`{.action} y seleccione `Preferencias`{.action}.
- Seleccione la cuenta correspondiente en la columna de la izquierda y haga clic en `Ajustes del servidor`{.action}.

![mailmac](images/mail-mac-emailpro04.png){.thumbnail}

### Información adicional

En una configuración de **IMAP**, los valores son los siguientes:

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrada (IMAP)|pro<b>?</b>.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor)|SSL/TLS|993|
|Saliente(SMTP)|pro<b>?</b>.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor)|STARTTLS|587|

En una configuración en **POP**, los valores son los siguientes:

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrant(POP)|pro<b>?</b>.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor)|SSL/TLS|995|
|Saliente(SMTP)|pro<b>?</b>.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor)|STARTTLS|587|

> [!primary]
>
> **Cambiar la configuración**
>
> Cuando configure su dirección de correo electrónico en **IMAP** y quiera cambiar la configuración a **POP**, deberá eliminar la cuenta de Mail de Mac y crearla en **POP** para cambiar la configuración.

## Más información

[Configurar una dirección de correo electrónico incluida con un plan de hosting o un MX Plan en Mail de macOS](https://docs.ovh.com/es/emails/correo_guia_de_configuracion_en_mail_de_mac_-_el_capitan/){.external}

[Configurar una cuenta Exchange en Mail de macOS](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-mail-macos/){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
