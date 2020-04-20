---
title: 'Configurar una cuenta Email Pro en Android utilizando la aplicación Gmail'
slug: configuracion-android
excerpt: 'Cómo configurar una cuenta Email Pro en Android utilizando la aplicación Gmail'
section: 'Configuración del cliente de correo'
order: 5
---

**Última actualización: 19/03/2020**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en Android utilizando la aplicación Gmail.**

> [!warning]
>
> La responsabilidad sobre los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovh.es/emails/email-pro/){.external}.
- Tener la aplicación Gmail instalada en su dispositivo. Puede instalarla desde Google Play Store.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta guía se ha elaborado utilizando un dispositivo Nexus 6 con la versión 7.1.1 de Android. Por ser la aplicación de uso más generalizado, hemos utilizado Gmail, que puede instalarse desde Google Play Store. Si utiliza otra aplicación, el procedimiento para configurar la cuenta podría variar.
>

## Procedimiento

### 1. Añadir la cuenta

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**X**.mail.ovh.net. Sustituya la «X» por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, en la sección `Web`{.action} y `Email Pro`{.action} en la columna de la izquierda. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

Abra la aplicación `Gmail`{.action} desde la pantalla de inicio de su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si todavía no ha configurado ninguna cuenta**, acepte el mensaje de bienvenida y pulse `Añadir una dirección de correo electrónico`{.action}. Seleccione la opción `Otra`{.action}. 

- **Si ya tiene una cuenta configurada**, pulse el botón formado por tres líneas horizontales situado en la esquina superior izquierda y luego pulse la flecha situada a la derecha del nombre de la cuenta de correo ya configurada. A continuación, pulse `Añadir cuenta`{.action} y seleccione `Otra`{.action}. 

![Email Pro](images/configuration-email-pro-gmail-application-android-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y pulse `Siguiente`{.action}.

Al elegir el tipo de cuenta, seleccione **IMAP** e introduzca la contraseña de su cuenta Email Pro. Haga clic en `Siguiente`{.action} para seguir configurando la cuenta.

![Email Pro](images/configuration-email-pro-gmail-application-android-step2.png){.thumbnail}

Introduzca los ajustes del servidor de entrada.

|Campo|Descripción| 
|---|---| 
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor|Introduzca el servidor pro**X**.mail.ovh.net.|

Haga clic en `Siguiente`{.action} e introduzca los parámetros del servidor de salida:

|Campo|Descripción| 
|---|---| 
|Exigir inicio de sesión|Asegúrese de que esta opción esté activada.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|  
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor SMTP|Introduzca el servidor pro**X**.mail.ovh.net.|

A continuación, pulse `Siguiente`{.action}. Si los datos introducidos son correctos, la aplicación se conectará a la cuenta.

![Email Pro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Configure las opciones de la cuenta y haga clic en `Siguiente`{.action}. Por último, puede asignarle un nombre a la cuenta para diferenciarla de las otras cuentas que tenga en la aplicación y elegir el nombre que quiere que aparezca cuando envíe mensajes de correo. Una vez realizados estos ajustes, haga clic en `Siguiente`{.action}.

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté correctamente configurada.

Si la aplicación le pide que introduzca de forma manual algunos datos en las preferencias de la cuenta, estos son los valores que debe utilizar para su cuenta Email Pro:

|Tipo de servidor|Nombre del servidor|Tipo de seguridad|Puerto|
|---|---|---|---|
|Entrante|pro**X**.mail.ovh.net|SSL/TLS|993|
|Saliente|pro**X**.mail.ovh.net|STARTTLS|587|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external} y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/){.external}. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en Android utilizando la aplicación Gmail](https://docs.ovh.com/es/emails/configuracion-android/){.external}

[Configurar una cuenta Exchange en Android utilizando la aplicación Gmail](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-android/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.