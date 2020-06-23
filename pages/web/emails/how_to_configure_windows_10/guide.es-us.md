---
title: 'Configurar una cuenta de correo electrónico en la aplicación Correo de Windows 10'
slug: configuracion-correo-windows-10
excerpt: 'Cómo configurar una cuenta de correo electrónico en la aplicación Correo de Windows'
section: Windows
---

**Última actualización: 05/05/2020**

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo sin necesidad de una nueva aplicación.

**Esta guía explica cómo configurar una cuenta MX Plan en la aplicación Correo de Windows.**

## Requisitos

- Tener una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}).
- Tener la aplicación Correo instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Si utiliza una versión anterior de Windows, consulte nuestra guía [Correo: Guía de configuración en Windows 8](../correo_guia_de_configuracion_en_windows_8/){.external}.
>

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación Correo en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, haga clic en el botón `Agregar cuenta`{.action}.
- **Si ya tiene una cuenta configurada**, haga clic en `Cuentas`{.action} en el menú izquierdo y, en el menú que aparecerá a la derecha, haga clic en `Agregar cuenta`{.action}.

![MX Plan](images/configuration-mail-windows-step1.png){.thumbnail}

En la nueva ventana, deslice hacia abajo los tipos de cuenta para hacer clic en `Configuración avanzada`{.action} y seleccione el tipo de cuenta `Correo electrónico de Internet`{.action}.

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Dirección de correo electrónico|Introduzca la dirección de correo electrónico completa.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Nombre de cuenta|Introduzca un nombre que le permita diferenciar su cuenta del resto de cuentas de su aplicación Correo.|
|Enviar mensajes con este nombre|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Servidor de correo entrante|Introduzca el servidor **ssl0.ovh.net:993**.|
|Tipo de cuenta|Le recomendamos que utilice **IMAP4**. También puede elegir **POP3** (almacenamiento de mensajes de correo en local en su aplicación Correo) en el menú desplegable.|
|Servidor de correo saliente (SMTP)|Introduzca el servidor **ssl0.ovh.net:465**.|

Asegúrese de que las siguientes casillas estén marcadas:

- El servidor saliente requiere autenticación
- Utilice el mismo nombre de usuario y contraseña para enviar correo electrónico
- Requerir SSL para el correo electrónico entrante
- Requerir SSL para el correo electrónico saliente

Una vez introducidos los datos, haga clic en el botón `Iniciar sesión`{.action}. Si son correctos, la aplicación se conectará a la cuenta.

![MX Plan](images/configuration-mail-windows-step2.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté bien configurada.

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

OVHcloud ofrece una aplicación web con la que podrá acceder a su cuenta de correo electrónico desde el navegador, disponible en la dirección [https://www.ovh.com/world/es/mail/](https://www.ovh.com/world/es/mail/){.external}). Puede acceder con el nombre de usuario y la contraseña de su dirección de correo electrónico.
 
## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
