---
title: 'Configurar una cuenta Email Pro en iPhone o iPad'
slug: configuracion-ios-iphone-ipad
excerpt: 'Cómo configurar una cuenta Email Pro en iPhone o iPad utilizando la aplicación Mail'
section: 'Configuración del cliente de correo'
order: 3
---

**Última actualización: 19/03/2020**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en iPhone o iPad utilizando la aplicación Mail.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVH pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovh.es/emails/email-pro/){.external}.
- Tener la aplicación Mail instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía es aplicable a las siguientes versiones: iOS 7 y versiones posteriores.
>

## Procedimiento

Existen dos maneras diferentes de añadir la cuenta Exchange a su dispositivo:

- **Utilizando nuestra herramienta Apple Devices**: Pulse el siguiente enlace y siga los pasos de configuración: <https://autodiscover.mail.ovh.net/AppleDevices/>

- **Utilizando el asistente de configuración de su dispositivo**.

Esta guía solo hace referencia a la configuración del correo desde su dispositivo.


### 1. Añadir la cuenta

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**X**.mail.ovh.net. Sustituya la «X» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action} y `Email Pro`{.action} en la columna de la izquierda. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

Acceda a `Ajustes`{.action} en la pantalla de inicio de su dispositivo. Según la versión de iOS, podrá añadir su cuenta de correo de dos formas distintas:

- **En iOS 7, 8, 9 y 10**: Pulse `Correo, contactos, calend.`{.action} y luego `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} y `Añadir cuenta de correo`{.action}.

- **En iOS 11**: Pulse `Cuentas y contraseñas`{.action} y luego `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} y `Añadir cuenta de correo`{.action}.

![Email Pro](images/configuration-mail-ios-step1.png){.thumbnail}

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Nombre|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Correo electrónico|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Descripción|Introduzca una descripción que le permita diferenciar su cuenta Exchange de las otras cuentas de su aplicación Mail.|

A continuación, pulse `Siguiente`{.action} e introduzca la información de su cuenta:

|Campo|Descripción|
|---|---|
|IMAP o POP|Deje la opción **IMAP** seleccionada por defecto.|
|Nombre de host (entrante)|Introduzca el servidor pro**X**.mail.ovh.net.|
|Nombre de usuario (entrante)|Introduzca la dirección de correo electrónico completa.|
|Contraseña (entrante)|Introduzca la contraseña de la dirección de correo electrónico.|  
|Nombre de host (saliente)|Introduzca el servidor pro**X**.mail.ovh.net.|
|Nombre de usuario (saliente)|Introduzca la dirección de correo electrónico completa.|
|Contraseña (saliente)|Introduzca la contraseña de la dirección de correo electrónico.|

A continuación, pulse `Siguiente`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Email Pro](images/configuration-mail-ios-step2.png){.thumbnail}

Al elegir las aplicaciones, asegúrese de dejar `Mail`{.action} marcado para que la aplicación pueda utilizar la cuenta, y pulse `Guardar`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución Email Pro:

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|pro**X**.mail.ovh.net|Sí|993|
|Saliente|pro**X**.mail.ovh.net|Sí|587|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external} y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/){.external}. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en iPhone o iPad](https://docs.ovh.com/es/emails/correo_guia_de_configuracion_en_iphone_ios_91/){.external}

[Configurar una cuenta Exchange en iPhone o iPad](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-ios-iphone-ipad/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.