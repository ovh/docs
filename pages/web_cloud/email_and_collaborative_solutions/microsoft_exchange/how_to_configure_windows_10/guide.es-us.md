---
title: 'Exchange - Configure su cuenta de correo electrónico en Correo para Windows'
excerpt: 'Cómo configurar una cuenta Exchange en la aplicación Correo de Windows'
updated: 2024-10-09
---

## Objetivo

Es posible configurar sus cuentas Exchange en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta Exchange en la aplicación Correo de Windows**.

## Requisitos

- Tener un servicio [Exchange](/links/web/emails).
- Tener la aplicación Correo instalada en su dispositivo.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

## Procedimiento

### 1. Añadir la cuenta

Abra la aplicación Correo en su dispositivo. Puede añadir una cuenta de dos formas distintas:

- **Si es la primera vez que usa la aplicación**, haga clic en el botón `Agregar cuenta`{.action}.
- **Si ya tiene una cuenta configurada**, haga clic en `Cuentas`{.action} en el menú izquierdo y, en el menú que aparecerá a la derecha, haga clic en `Agregar cuenta`{.action}.

![exchange](images/configuration-mail-windows-step1.png){.thumbnail}

En la nueva ventana, deslice hacia abajo los tipos de cuenta para hacer clic en `Configuración avanzada`{.action} y seleccione el tipo de cuenta `Exchange ActiveSync`{.action}.

Cumplimente la información de su cuenta:

|Campo|Descripción|
|---|---|
|Dirección de correo electrónico|Introduzca la dirección de correo electrónico completa.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|
|Dominio|Deje este campo vacío.|
|Servidor|Indique el servidor en el que está alojado su servicio Exchange. Puede consultar esta información en el [área de cliente de OVHcloud](/links/manager), en la pestaña `Información general`{.action} de su servicio Exchange, en el recuadro **Conexión**.|
|El servidor requiere conexión cifrada (SSL)|Deje marcada esta casilla.|
|Nombre de cuenta|Introduzca un nombre que le permita diferenciar su cuenta del resto de cuentas de su aplicación Correo.|

Una vez introducidos los datos, haga clic en el botón `Iniciar sesión`{.action}.  Si son correctos, la aplicación se conectará a la cuenta.

Aparecerá entonces una ventana preguntándole si desea añadir la cuenta e informándole de los cambios que afectarán a determinadas funcionalidades de su dispositivo. Lea atentamente esta información y confirme que quiere añadir la cuenta.

![exchange](images/configuration-mail-windows-exchange-step2.png){.thumbnail}

Si lo desea, puede realizar una prueba de envío para comprobar que la cuenta esté bien configurada.

### 2. Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud ofrece una aplicación web que tiene [funciones colaborativas](/links/web/emails) y está disponible en la dirección [Webmail](/links/web/email). Puede conectarse con el nombre de usuario y la contraseña de su dirección de correo electrónico.

## Más información

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde el cliente de correo de Windows, consulte [el Centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/config-l-mail-en-l-application-mail-7ff79e8b-439b-4b47-8ff9-3f9a33166c60).

[Configurar una cuenta de correo electrónico en la aplicación Correo de Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.