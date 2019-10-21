---
title: 'Configurar una cuenta de correo electrónico en Mail de macOS'
excerpt: 'Cómo configurar una cuenta MX Plan en Mail de macOS El Capitan, Sierra y High Sierra'
slug: correo_guia_de_configuracion_en_mail_de_mac_-_el_capitan
section: Apple
---

**Última actualización: 29/03/2018**

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes sin necesidad de una nueva aplicación.

**Esta guía explica cómo configurar una cuenta MX Plan en Mail de macOS El Capitan, Sierra y High Sierra.**

## Requisitos

- Disponer de una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}).
- Tener la aplicación Mail instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía es aplicable a las siguientes versiones de macOS: El Capitan, Sierra y High Sierra.
>

## Procedimiento

Existen dos maneras diferentes de añadir la cuenta de correo a Mail:

- **Utilizando nuestra herramienta Apple Devices**: Haga clic en el siguiente enlace y siga los pasos de configuración: <https://autodiscover.mail.ovh.net/AppleDevices/>.

- **Utilizando el asistente de configuración de la aplicación Mail**: Ejecute la aplicación Mail en su dispositivo.

Esta guía solo hace referencia a la configuración desde la aplicación Mail.

### 1. Añadir la cuenta

Una vez que ejecute la aplicación Mail en su dispositivo, puede añadir una cuenta de dos formas diferentes:

- **La primera vez que inicie la aplicación**, se abrirá una ventana donde deberá elegir el proveedor de su cuenta de correo. Seleccione `Otra cuenta de Mail`{.action} y haga clic en `Continuar`{.action}.

- **Si ya tiene alguna cuenta configurada**, haga clic en `Mail`{.action} en el menú superior y luego en `Añadir cuenta`{.action}. Seleccione `Otra cuenta de Mail`{.action} y haga clic en `Continuar`{.action}.

![Otra cuenta de Mail](images/configuration-mail-macos-step1.png){.thumbnail}

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Nombre|Introduzca la dirección de correo electrónico completa.|
|Correo electrónico|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|

A continuación, haga clic en el botón `Iniciar sesión`{.action}. Aparecerá un mensaje que le pedirá continuar y rellenar otros campos.

|Campo|Descripción|
|---|---|
|Tipo de cuenta|Le recomendamos que utilice **IMAP** (opción por defecto). También puede elegir **POP** (almacenamiento de los mensajes de correo en local en su aplicación Mail) en el menú desplegable.|
|Servidor de correo entrante|Introduzca el servidor **ssl0.ovh.net**.|
|Servidor de correo saliente|Introduzca el servidor **ssl0.ovh.net**.|

Haga de nuevo clic en `Iniciar sesión`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Datos de la cuenta](images/configuration-mail-macos-step2.png){.thumbnail}

Al elegir las aplicaciones, asegúrese de dejar `Mail`{.action} marcado para que la aplicación pueda utilizar la cuenta, y haga clic en `Listo`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución MX Plan:

**Configuración en IMAP**

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|ssl0.ovh.net|Sí|993|
|Saliente|ssl0.ovh.net|Sí|465| 

**Configuración en POP**

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|ssl0.ovh.net|Sí|995|
|Saliente|ssl0.ovh.net|Sí|465|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web con la que podrá acceder a su cuenta de correo electrónico desde el navegador, disponible en la dirección <https://www.ovh.es/mail/>. Puede acceder con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta Email Pro en Mail de macOS](https://docs.ovh.com/es/emails-pro/configurar-email-pro-mail-macos/){.external}

[Configurar una cuenta Exchange en Mail de macOS](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-mail-macos/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.