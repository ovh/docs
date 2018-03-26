---
title: Configurar una cuenta Email Pro en iPhone o iPad
slug: configuracion-ios-iphone-ipad
excerpt: Cómo configurar una cuenta Email Pro en iPhone o iPad a través de la aplicación Mail
section: Configuración del cliente de correo
---

**Última actualización: 23/03/2018**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde el dispositivo que elija.

**Esta guía explica cómo configurar una cuenta Email Pro en iPhone o iPad a través de la aplicación Mail.**

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovh.es/emails/email-pro/){.external}.
- Tener la aplicación Mail instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía es aplicable a las siguientes versiones: iOS 7 y versiones posteriores.
>

## Procedimiento

Existen dos maneras diferentes de añadir la cuenta Email Pro a Mail:

- **Utilizando nuestra herramienta Apple Devices**: Haga clic en el siguiente enlace y siga los pasos de configuración: <https://autodiscover.mail.ovh.net/AppleDevices/>

- **Utilizando el asistente de configuración de su dispositivo**.

Esta guía solo hace referencia a la configuración del correo desde su dispositivo.


### 1. Añadir la cuenta

Acceda a `Ajustes`{.action} en la pantalla de inicio de su dispositivo. Según la versión de iOS, podrá añadir su cuenta de correo de dos formas distintas:

- **En iOS 7, 8, 9 y 10**: Acceda a `Correo, contactos, calendario`{.action} y haga clic en `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} > `Añadir cuenta`{.action}.

- **En iOS 11**: Acceda a `Cuentas y contraseñas`{.action} y haga clic en `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} > `Añadir cuenta`{.action}.

![Email Pro](images/configuration-mail-ios-step1.png){.thumbnail}

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Nombre|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Correo|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Descripción|Introduzca una descripción que le permita diferenciar su cuenta Email Pro del resto de cuentas de su aplicación Mail.|

A continuación, haga clic en `Siguiente`{.action} e introduzca la información de su cuenta:

|Campo|Descripción|
|---|---|
|IMAP o POP|Deje la opción **IMAP** seleccionada por defecto.|
|Nombre de host (entrante)|Introduzca el servidor **pro1.mail.ovh.net**.|
|Nombre de usuario (entrante)|Introduzca la dirección de correo electrónico completa.|
|Contraseña (entrante)|Introduzca la contraseña de la dirección de correo electrónico.|  
|Nombre de host (saliente)|Introduzca el servidor **pro1.mail.ovh.net**.|
|Nombre de usuario (saliente)|Introduzca la dirección de correo electrónico completa.|
|Contraseña (saliente)|Introduzca la contraseña de la dirección de correo electrónico.|

A continuación, haga clic en `Siguiente`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Email Pro](images/configuration-mail-ios-step2.png){.thumbnail}

Al elegir las aplicaciones, asegúrese de dejar `Mail`{.action} marcado para que la aplicación pueda utilizar la cuenta, y haga clic en `Guardar`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para su cuenta Email Pro:

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|pro1.mail.ovh.net|Sí|993|
|Saliente|pro1.mail.ovh.net|Sí|587|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web con [funciones colaborativas](https://www.ovh.es/emails/){.external} disponible en la dirección <https://pro1.mail.ovh.net>. Puede acceder con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar su dirección de correo electrónico incluida en el MX Plan o en un plan de alojamiento web en iPhone o iPad](https://docs.ovh.com/es/emails/correo_guia_de_configuracion_en_iphone_ios_91/){.external}.

[Configurar una cuenta Exchange en iPhone o iPad](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-ios-iphone-ipad/){.external}.

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.