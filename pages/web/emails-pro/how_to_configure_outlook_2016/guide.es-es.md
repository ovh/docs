---
title: 'Configurar una cuenta Email Pro en Outlook 2016 para Windows'
slug: configuracion-outlook-2016
excerpt: 'Cómo configurar una cuenta Email Pro en Outlook 2016 para Windows'
section: 'Configuración del cliente de correo'
order: 1
---

**Última actualización: 20/03/2020**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en Outlook 2016 para Windows.**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovh.es/emails/email-pro/){.external}.
- Tener Microsoft Outlook 2016 instalado en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Si utiliza Outlook 2016 para Mac, consulte nuestra guía [Configurar una cuenta Email Pro en Outlook 2016 para Mac](https://docs.ovh.com/es/emails-pro/configuracion-outlook-2016-mac/){.external}.
>

## Procedimiento

### 1. Añadir la cuenta

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**X**.mail.ovh.net. Sustituya la «X» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action} y `Email Pro`{.action} en la columna de la izquierda. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

Abra la aplicación Outlook en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

![Email Pro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y haga clic en `Opciones avanzadas`{.action}. Marque la casilla `Permitirme configurar manualmente mi cuenta`{.action} y haga clic en `Conectar`{.action}. Entre los distintos tipos de cuenta, elija **IMAP**.

![Email Pro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

A continuación, introduzca la información solicitada.

**Correo entrante**

|Campo|Descripción|
|---|---|
|Servidor|Introduzca el servidor pro**X**.mail.ovh.net.|
|Puerto|Introduzca el puerto **993**.|
|Método de cifrado|Seleccione **SSL/TLS**.|
|Autenticación|Deje sin marcar la casilla «Requerir inicio de sesión utilizando Autenticación de contraseña segura (SPA)».|

**Correo saliente**

|Campo|Descripción|
|---|---|
|Servidor|Introduzca el servidor pro**X**.mail.ovh.net.|
|Puerto|Introduzca el puerto **587**.|
|Método de cifrado|Seleccione **SSL/TLS**.|
|Autenticación|Deje sin marcar la casilla «Requerir inicio de sesión utilizando Autenticación de contraseña segura (SPA)».|

Una vez introducidos los datos, haga clic en `Conectar`{.action}. Introduzca la **contraseña** de la cuenta de correo y haga clic en `Aceptar`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Email Pro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

En caso de que la aplicación le pida que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución Email Pro:

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrante|pro**X**.mail.ovh.net|SSL/TLS|993|
|Saliente|pro**X**.mail.ovh.net|STARTTLS|587|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external}  y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/). Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en Outlook 2016 para Windows](https://docs.ovh.com/es/emails/configuracion-outlook-2016/){.external}

[Configurar una cuenta Exchange en Outlook 2016 para Windows](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-outlook-2016/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.