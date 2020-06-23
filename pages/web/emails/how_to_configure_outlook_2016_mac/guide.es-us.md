---
title: 'Configurar una cuenta de correo electrónico en Outlook 2016 para Mac'
slug: configuracion-outlook-2016-mac
excerpt: 'Cómo configurar una cuenta MX Plan en Outlook 2016 para Mac'
section: Outlook
---

**Última actualización: 05/05/2020**

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo.

**Esta guía explica cómo configurar una cuenta MX Plan en Outlook 2016 para Mac.**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.
> 

## Requisitos

- Tener una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}).
- Tener la aplicación Microsoft Outlook instalada en su dispositivo Mac.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Si utiliza Outlook 2016 para Windows, consulte nuestra guía [Configurar una cuenta de correo electrónico en Outlook 2016 para Windows](../configuracion-outlook-2016/){.external}.
>

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación Outlook en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Herramientas`{.action} en el menú superior y luego en `Cuentas`{.action}. A continuación, haga clic en el botón `+`{.action} situado en la esquina inferior izquierda y seleccione `Nueva cuenta`{.action}.

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Introduzca su dirección de correo electrónico y haga clic en `Continuar`{.action}. Seleccione el tipo `IMAP`{.action} o `POP`{.action} e introduzca la información solicitada.

|Campo|Descripción|
|---|---|
|Tipo de cuenta|Le recomendamos que utilice **IMAP** (opción por defecto). También puede elegir **POP** (almacenamiento de los mensajes de correo en local en su aplicación Outlook) en el menú desplegable.|
|Dirección de correo electrónico|Introduzca un nombre que le permita diferenciar su cuenta del resto de cuentas de su aplicación Outlook.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Servidor de entrada|Introduzca el servidor **ssl0.ovh.net**. Deje marcada la casilla **Usar SSL para conectar (recomendado)**.|
|Puerto de entrada|Introduzca el puerto **993**.|
|Servidor de salida|Introduzca el servidor **ssl0.ovh.net**. Deje marcada la casilla **Usar SSL para conectar (recomendado)**.|
|Puerto de salida|Introduzca el puerto **465**.|

Una vez introducidos los datos, haga clic en el botón `Agregar cuenta`{.action}. Si son correctos, la aplicación se conectará a la cuenta.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté bien configurada.

En caso de que la aplicación le pida que introduzca de forma manual algunos datos técnicos en las preferencias de la cuenta, estos son los valores que debe utilizar para la solución MX Plan:

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

OVH ofrece una aplicación web con la que podrá acceder a su cuenta de correo electrónico desde el navegador, disponible en la dirección <https://www.ovh.com/world/es/mail/>. Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/).
