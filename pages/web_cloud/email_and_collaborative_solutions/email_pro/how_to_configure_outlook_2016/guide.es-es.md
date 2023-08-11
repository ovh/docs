---
title: 'Configurar una cuenta Email Pro en Outlook para Windows'
excerpt: 'Cómo configurar una cuenta Email Pro en Outlook para Windows'
updated: 2021-07-05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 05/07/2021**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en Outlook o en Windows.**
 

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Disponer de una cuenta de correo [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external}.
- Tener Microsoft Outlook o software posterior.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.
 
- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

- Introduzca su dirección de correo electrónico y haga clic en `Opciones avanzadas`{.action}. Marque la casilla `Permitirme configurar manualmente mi cuenta`{.action} y haga clic en `Conectar`{.action}. 

![Outlook](images/config-outlook-emailpro01.png){.thumbnail}

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**?**.mail.ovh.net. Sustituya la «?» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action} y `Email Pro`{.action}. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

| | |
|---|---|
|![Outlook](images/config-outlook-emailpro02.png){.thumbnail}|Entre los distintos tipos de cuenta, elija IMAP o POP. <br>Le recomendamos que utilice IMAP.|
|Introduzca la contraseña de su dirección de correo electrónico y haga clic en `Siguiente`{.action}. |![Outlook](images/config-outlook-emailpro03.png){.thumbnail}|
|![Outlook](images/config-outlook-emailpro04.png){.thumbnail}|Si Outlook no ha podido configurar su dirección de forma automática, se abrirá esta ventana. <br>Haga clic en `Modificar los parámetros de la cuenta`{.action} |
|Escriba en el **Correo entrante**: <br>- el servidor **pro**?**.mail.ovh.net** (sustituya "**?**" por el número de su servidor) <br>- Port **993**<br>- Método de cifrado **SSL/TLS**<br><br>Escriba en **Correo saliente**: <br>- el servidor **pro**?**.mail.ovh.net** (sustituya "**?**" por el número de su servidor)<br>- Port **587**<br>- Método de cifrado **STARTTLS**<br><br>Haga clic en `Siguiente`{.action} para aceptar. |![Outlook](images/config-outlook-emailpro05.png){.thumbnail}|


En una configuración en **POP**, los valores son los siguientes:

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrante|pro**?***.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor)|SSL/TLS|995|
|Saliente|pro**?***.mail.ovh.net (la mención **"?"** debe sustituirse por el número de su servidor)|STARTTLS|587|

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. y está disponible en la dirección <https://www.ovh.es/mail/>. Puede conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, no dude en consultar nuestra guía [Consultar su cuenta Exchange desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar desde Windows**" en nuestra guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-desde-windows).

### Modificar los parámetros existentes

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- Vaya a `Archivo`{.action} desde la barra de menú situada en la parte superior de su pantalla y seleccione la cuenta que quiera modificar en el menú desplegable **(1)**.
- Haga clic en `Configuración de la cuenta`{.action}**(2)**.
- Haga clic en `Configuración del servidor`{.action}**(3)** para acceder a la ventana de configuración.

![Outlook](images/config-outlook-emailpro06.png){.thumbnail}

La ventana está dividida en dos partes, **Correo entrante** y **Correo saliente**. Haga clic en uno u otro para poder modificarlo.

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**?**.mail.ovh.net. Sustituya la «?» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action} y `Email Pro`{.action}. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

![Outlook](images/config-outlook-emailpro07.png){.thumbnail}


## Más información

[Configurar una cuenta de correo electrónico en Outlook 2016 para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016){.external}

[Configurar una cuenta Exchange en Outlook 2016 para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
