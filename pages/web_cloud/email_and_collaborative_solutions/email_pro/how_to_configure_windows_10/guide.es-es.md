---
title: 'Configurar una cuenta Email Pro en la aplicación Correo de Windows 10'
excerpt: 'Cómo configurar una cuenta Email Pro en la aplicación Correo de Windows 10'
updated: 2020-03-18
---

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en la aplicación Correo de Windows 10.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external}.
- Tener la aplicación Correo instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### 1. Añadir la cuenta

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**?**.mail.ovh.net. Sustituya la «?» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action} y `Email Pro`{.action}. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

Abra la aplicación Correo en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, haga clic en el botón `Agregar cuenta`{.action}.
- **Si ya tiene una cuenta configurada**, haga clic en `Cuentas`{.action} en el menú izquierdo y, en el menú que aparecerá a la derecha, haga clic en `Agregar cuenta`{.action}.

![Email Pro](images/configuration-mail-windows-step1.png){.thumbnail}

En la nueva ventana, deslice hacia abajo los tipos de cuenta para hacer clic en `Configuración avanzada`{.action} y seleccione el tipo de cuenta `Correo electrónico de Internet`{.action}.

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Dirección de correo electrónico|Introduzca la dirección de correo electrónico completa.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Nombre de cuenta|Introduzca un nombre que le permita diferenciar su cuenta del resto de cuentas de su aplicación Correo.|
|Enviar mensajes con este nombre|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Servidor de correo entrante|Introduzca el servidor pro**?**.mail.ovh.net:993.|
|Tipo de cuenta|Le recomendamos que utilice **IMAP4**. También puede elegir **POP3** (almacenamiento de los mensajes de correo en local en su aplicación Correo) en el menú desplegable.|
|Servidor de correo saliente|Introduzca el servidor pro**?**.mail.ovh.net:587.|

Asegúrese de que las siguientes casillas estén marcadas:

- El servidor saliente requiere autenticación
- Utilice el mismo nombre de usuario y contraseña para enviar correo electrónico
- Requerir SSL para el correo electrónico entrante
- Requerir SSL para el correo electrónico saliente

Una vez introducidos los datos, haga clic en el botón `Iniciar sesión`{.action}. Si son correctos, la aplicación se conectará a la cuenta.

![Email Pro](images/configuration-mail-windows-step2.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté bien configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución Email Pro:

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|pro**?**.mail.ovh.net|Sí|993|
|Saliente|pro**?**.mail.ovh.net|Sí|587|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovhcloud.com/es-es/emails/){.external} y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/). Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en la aplicación Correo de Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10){.external}

[Configurar una cuenta Exchange en la aplicación Correo de Windows 10](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.