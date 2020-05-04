---
title: 'Configurar una cuenta de correo electrónico en Android utilizando la aplicación Gmail'
slug: configuracion-android
excerpt: 'Cómo configurar una cuenta MX Plan en Android utilizando la aplicación Gmail'
section: Android
---

**Última actualización: 31/05/2018**

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo sin necesidad de una nueva aplicación.

**Esta guía explica cómo configurar una cuenta MX Plan en Android utilizando la aplicación Gmail.**

## Requisitos

- Tener una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVH](https://www.ovh.es/hosting/){.external}).
- Tener la aplicación Gmail instalada en su dispositivo. Puede instalarla desde Google Play Store.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía se ha elaborado utilizando un dispositivo Nexus 6 con la versión 7.1.1 de Android. Por ser la aplicación de uso más generalizado, hemos utilizado Gmail, que puede instalarse desde Google Play Store. Si utiliza otra aplicación, el procedimiento para configurar la cuenta podría variar.
>

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación `Gmail`{.action} desde la pantalla de inicio de su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si todavía no ha configurado ninguna cuenta**, acepte el mensaje de bienvenida y pulse `Añadir una dirección de correo electrónico`{.action}. Seleccione la opción `Otra`{.action}. 

- **Si ya tiene una cuenta configurada**, pulse el botón formado por tres líneas horizontales situado en la esquina superior izquierda y luego pulse la flecha situada a la derecha del nombre de la cuenta de correo ya configurada. A continuación, pulse `Añadir cuenta`{.action} y seleccione `Otra`{.action}. 

![Añadir cuenta MX Plan](images/configuration-gmail-application-android-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y pulse `Siguiente`{.action}.

Al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. También puede elegir **POP**. En este último caso, los mensajes de correo electrónico se almacenarán en local en su aplicación Gmail, por lo que esta opción no es recomendable si quiere consultar su cuenta desde varios clientes de correo.

Introduzca la contraseña de su cuenta de correo y pulse `Siguiente`{.action}.

![Conexión a la cuenta MX Plan](images/configuration-gmail-application-android-step2.png){.thumbnail}

Introduzca los ajustes del servidor de entrada.

|Campo|Descripción| 
|---|---| 
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor|Introduzca el servidor **ssl0.ovh.net**.|

Haga clic en `Siguiente`{.action} e introduzca los parámetros del servidor de salida:

|Campo|Descripción| 
|---|---| 
|Exigir inicio de sesión|Asegúrese de que esta opción esté activada.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor SMTP|Introduzca el servidor **ssl0.ovh.net**.|

A continuación, pulse `Siguiente`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Conexión a la cuenta](images/configuration-gmail-application-android-step3.png){.thumbnail}

Configure las opciones de la cuenta y haga clic en `Siguiente`{.action}. Por último, puede asignarle un nombre a la cuenta para diferenciarla de las otras cuentas que tenga en la aplicación y elegir el nombre que quiere que aparezca cuando envíe mensajes de correo. Una vez realizados estos ajustes, haga clic en `Siguiente`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos en las preferencias de la cuenta, estos son los valores que debe utilizar para su cuenta MX Plan:

**Configuración en IMAP**

|Tipo de servidor|Nombre del servidor|Tipo de seguridad|Puerto|
|---|---|---|---|
|Entrante|ssl0.ovh.net|SSL/TLS|993|
|Saliente|ssl0.ovh.net|SSL/TLS|465|

**Configuración en POP**

|Tipo de servidor|Nombre del servidor|Tipo de seguridad|Puerto|
|---|---|---|---|
|Entrante|ssl0.ovh.net|SSL/TLS|995|
|Saliente|ssl0.ovh.net|SSL/TLS|465|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVH ofrece una aplicación web con la que podrá acceder a su cuenta de correo electrónico desde el navegador, disponible en la dirección <https://www.ovh.es/mail/>. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta Email Pro en Android utilizando la aplicación Gmail](https://docs.ovh.com/es/emails-pro/configuracion-android/){.external}

[Configurar una cuenta Exchange en Android utilizando la aplicación Gmail](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-android/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.