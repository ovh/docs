---
title: 'Configurar una cuenta Email Pro en Outlook 2016 para Mac'
slug: configuracion-outlook-2016-mac
excerpt: 'Cómo configurar una cuenta Email Pro en Outlook 2016 para Mac'
section: 'Configuración del cliente de correo'
order: 2
---

**Última actualización: 20/03/2020**

## Objetivo

Es posible configurar sus cuentas Email Pro en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Email Pro en Outlook 2016 para Mac.**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener una cuenta [Email Pro](https://www.ovh.es/emails/email-pro/){.external}.
- Tener la aplicación Microsoft Outlook instalada en su dispositivo Mac.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Si utiliza Outlook 2016 para Windows, consulte nuestra guía [Configurar una cuenta Email Pro en Outlook 2016 para Windows](https://docs.ovh.com/es/emails-pro/configuracion-outlook-2016/){.external}.
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

- **Si ya tiene una cuenta configurada**, haga clic en `Herramientas`{.action} en el menú superior y luego en `Cuentas`{.action}. A continuación, haga clic en el botón `+`{.action} situado en la esquina inferior izquierda y seleccione `Nueva cuenta`{.action}.

![Email Pro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y haga clic en `Continuar`{.action}. Seleccione el tipo `IMAP`{.action} o `POP`{.action} e introduzca la información solicitada.

|Campo|Descripción|
|---|---|
|Tipo de cuenta|Le recomendamos que utilice **IMAP** (opción por defecto).|
|Dirección de correo electrónico|Introduzca un nombre que le permita diferenciar su cuenta del resto de cuentas de su aplicación Outlook.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor de entrada|Introduzca el servidor pro**X**.mail.ovh.net. Deje marcada la casilla **Usar SSL para conectar (recomendado)**.|
|Puerto de entrada|Introduzca el puerto **993**.|
|Servidor de salida|Introduzca el servidor pro**X**.mail.ovh.net. Deje marcada la casilla **Usar SSL para conectar (recomendado)**.|
|Puerto de salida|Introduzca el puerto **587**.|

Una vez introducidos los datos, haga clic en el botón `Agregar cuenta`{.action}. Si son correctos, la aplicación se conectará a la cuenta.

![Email Pro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté bien configurada.

En caso de que la aplicación le pida que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución Email Pro:

|Tipo de servidor|Nombre del servidor|SSL|Puerto|
|---|---|---|---|
|Entrante|pro**X**.mail.ovh.net|Sí|993|
|Saliente|pro**X**.mail.ovh.net|Sí|587|

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud ofrece una aplicación web que tiene [funciones colaborativas](https://www.ovh.es/emails/){.external} y está disponible en la dirección [https://www.ovh.es/mail/](https://www.ovh.es/mail/). Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

[Configurar una cuenta de correo electrónico en Outlook 2016 para Mac](https://docs.ovh.com/es/emails/configuracion-outlook-2016-mac/){.external}

[Configurar una cuenta Exchange en Outlook 2016 para Mac](https://docs.ovh.com/es/microsoft-collaborative-solutions/configuracion-outlook-2016-mac/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.