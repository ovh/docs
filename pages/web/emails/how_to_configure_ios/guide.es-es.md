---
title: 'Configurar una cuenta de correo electrónico en iPhone o iPad'
excerpt: 'Cómo configurar una cuenta MX Plan en un iPhone o iPad'
slug: correo_guia_de_configuracion_en_iphone_ios_91
section: Apple
---

**Última actualización: 31/05/2018**

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo sin necesidad de una nueva aplicación.

**Esta guía explica cómo configurar una cuenta MX Plan en un iPhone o iPad.**

## Requisitos

- Disponer de una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}).
- Tener la aplicación Mail instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía es aplicable a las siguientes versiones: iOS 7 y versiones posteriores.
>

## Procedimiento

Existen dos maneras diferentes de añadir la cuenta de correo a su dispositivo:

- **Utilizando nuestra herramienta Apple Devices**: Pulse el siguiente enlace y siga los pasos de configuración: <https://autodiscover.mail.ovh.net/AppleDevices/>

- **Utilizando el asistente de configuración de su dispositivo**.

Esta guía solo hace referencia a la configuración del correo desde su dispositivo.

### 1. Añadir la cuenta

Acceda a `Ajustes`{.action} en la pantalla de inicio de su dispositivo. Según la versión de iOS, podrá añadir su cuenta de correo de dos formas distintas:

- **En iOS 7, 8, 9 y 10**: Pulse `Correo, contactos, calend.`{.action} y luego `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} y pulse `Añadir cuenta de correo`{.action}.

- **En iOS 11**: Pulse `Cuentas y contraseñas`{.action} y luego `Añadir cuenta`{.action}. A continuación, seleccione `Otra`{.action} y pulse `Añadir cuenta de correo`{.action}.

![Exchange](images/configuration-mail-ios-step1.png){.thumbnail}

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Nombre|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Correo|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Descripción|Introduzca una descripción que le permita diferenciar su cuenta MX Plan de las otras cuentas que tenga en su aplicación Mail.|

A continuación, pulse `Siguiente`{.action} e introduzca la información de su cuenta:

|Campo|Descripción| 
|---|---| 
|IMAP o POP|Le recomendamos que utilice **IMAP** (opción por defecto), aunque también puede elegir **POP** (almacenamiento de mensajes de correo en local en su aplicación Mail).|
|Nombre de host (entrante)|Introduzca el servidor **ssl0.ovh.net**.|
|Nombre de usuario (entrante)|Introduzca la dirección de correo electrónico completa.|
|Contraseña (entrante)|Introduzca la contraseña de la dirección de correo electrónico.|  
|Nombre de host (saliente)|Introduzca el servidor **ssl0.ovh.net**.|
|Nombre de usuario (saliente)|Introduzca la dirección de correo electrónico completa.|
|Contraseña (saliente)|Introduzca la contraseña de la dirección de correo electrónico.| 

A continuación, pulse `Siguiente`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Al elegir las aplicaciones, asegúrese de dejar `Mail`{.action} marcado para que la aplicación pueda utilizar la cuenta, y pulse `Guardar`{.action}.

Si lo desea, puede realizar una prueba de envío desde la aplicación Mail de su dispositivo para comprobar que la cuenta esté correctamente configurada.

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

OVH ofrece una aplicación web con la que podrá acceder a su cuenta de correo electrónico desde el navegador, disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/){.external}. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.