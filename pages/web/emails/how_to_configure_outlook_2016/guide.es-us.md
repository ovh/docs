---
title: 'Configurar una cuenta de correo electrónico en Outlook 2016 para Windows'
slug: configuracion-outlook-2016
excerpt: 'Cómo configurar una cuenta MX Plan en Outlook 2016 para Windows'
section: Outlook
---

**Última actualización: 05/05/2020**

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo sin necesidad de una nueva aplicación.

**Esta guía explica cómo configurar una cuenta MX Plan en Outlook 2016 para Windows.**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}).
- Tener Microsoft Outlook 2016 instalado en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Si utiliza Outlook 2016 para Mac, consulte nuestra guía [Configurar una cuenta de correo en Outlook 2016 para Mac](../configuracion-outlook-2016-mac/){.external}.
>

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación Outlook en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

![Añadir cuenta a Outlook](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y haga clic en `Opciones avanzadas`{.action}. Marque la casilla `Permitirme configurar manualmente mi cuenta`{.action} y haga clic en `Conectar`{.action}.

Entre los distintos tipos de cuenta, elija **IMAP** o **POP**. Le recomendamos que utilice **IMAP**. También puede utilizar **POP** para almacenar los mensajes de correo en local en su aplicación Outlook.

![Añadir cuenta a Outlook](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

A continuación, introduzca la información solicitada.

**Correo entrante**

|Campo|Descripción|
|---|---|
|Servidor|Introduzca el servidor **ssl0.ovh.net**.|
|Puerto|Introduzca el puerto **993**.|
|Método de cifrado|Seleccione **SSL/TLS**.|
|Autenticación|Deje sin marcar la casilla «Requerir inicio de sesión utilizando Autenticación de contraseña segura (SPA)».|

**Correo saliente**

|Campo|Descripción|
|---|---|
|Servidor|Introduzca el servidor **ssl0.ovh.net**.|
|Puerto|Introduzca el puerto **465**.|
|Método de cifrado|Seleccione **SSL/TLS**.|
|Autenticación|Deje sin marcar la casilla «Requerir inicio de sesión utilizando Autenticación de contraseña segura (SPA)».|

Una vez introducidos los datos, haga clic en `Conectar`{.action}. Introduzca la **contraseña** de la cuenta de correo y haga clic en `Aceptar`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Añadir cuenta a Outlook](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

En caso de que la aplicación le pida que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución MX Plan:

**Configuración en IMAP**

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrante|ssl0.ovh.net|SSL/TLS|993|
|Saliente|ssl0.ovh.net|SSL/TLS|465|

**Configuración en POP**

|Tipo de servidor|Nombre del servidor|Método de cifrado|Puerto|
|---|---|---|---|
|Entrante|ssl0.ovh.net|SSL/TLS|995|
|Saliente|ssl0.ovh.net|SSL/TLS|465|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web con la que podrá acceder a su cuenta de correo electrónico desde el navegador, disponible en la dirección <https://www.ovh.com/world/es/mail/>. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
