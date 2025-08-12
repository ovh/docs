---
title: "Email Pro - Configurar una cuenta de correo en Outlook para iOS"
excerpt: "Descubra cómo configurar una dirección Email Pro en la aplicación móvil Outlook para iOS"
updated: 2025-04-28
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Objetivo

Las cuentas Email Pro pueden configurarse en distintos programas de correo compatibles. para que pueda utilizar su dirección de correo desde cualquier dispositivo. La aplicación Outlook de Microsoft en iOS está disponible gratuitamente desde la App Store de Apple.

**Descubra cómo configurar una dirección Email Pro en la aplicación móvil Outlook para iOS**

> [!warning]
>
> La responsabilidad sobre la configuración y la gestión de los servicios que OVHcloud pone a su disposición recae íntegramente en usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si tiene alguna duda le recomendamos que contacte con un proveedor de servicios especializado o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado [Más información](#go-further) de esta guía.

## Requisitos

- Tener una dirección [Email Pro](/links/web/email-pro).
- Tener la aplicación Outlook en su dispositivo móvil [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta <a name="add-account"></a>

> [!warning]
>
> En nuestros ejemplos, utilizamos la mención servidor: pro?.mail.ovh.net. Deberá sustituir el "?" por el número que designa el servidor del servicio Email Pro.
>
> Encontrará esta cifra en su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}, y en la columna izquierda, `Email Pro`{.action}. El nombre del servidor puede verse en el recuadro **Conexión** de la pestaña `Información general`{.action}.
>

- **Cuando inicie la aplicación por primera vez**, aparecerá un asistente de configuración y pulse `Añadir cuenta`{.action}.

![outlook iOS](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Si ya tiene una cuenta configurada**:
    1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa "&#8962;" en la parte superior izquierda de la pantalla.
    2. Pulse el engranaje "&#9881;" en la parte inferior izquierda de la pantalla.
    3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
    4. Pulsa `Añadir cuenta`{.action}.
    5. Pulsa `Cuenta de correo`{.action}.

![outlook iOS](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Siga los pasos de instalación haciendo clic en las fichas siguientes:

> [!tabs]
> **Paso 1**
>>
>> Introduzca su dirección de correo electrónico y pulse `Añadir una cuenta`{.action}.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Paso 2**
>>
>> Tiene dos posibilidades:
>>
>> - Si aparece "**IMAP**" en la parte superior de la página, vaya al paso 3.
>> - Si la ventana de configuración de la cuenta muestra "**Exchange**" en la parte superior, pulse el botón `?` en la esquina superior derecha de la pantalla **(1)** y elija `Cambiar proveedor de cuenta`{.action} **(2)**. A continuación, seleccione `IMAP` **(3)** y continúe con el paso 3.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Paso 3**
>>
>> En la siguiente ventana, marque `Parámetros avanzados`{.action} e introduzca la siguiente información:
>>
>> - **Dirección de correo electrónico**
>> - **Nombre completo** : Introduzca su dirección de correo electrónico completa
>> - **Descripción**
>> - **Servidor de correo electrónico de entrada IMAP**:<br>- **Nombre de host IMAP**: introduzca pro?.mail.ovh.net (sustituya bien "?" por el número de su servidor)<br>- **Puerto IMAP**: 993<br>- **Nombre de usuario IMAP**: su dirección de correo electrónico completa<br>- **Contraseña IMAP**: la de su dirección de correo electrónico<br>- **Seguridad del puerto**: SSL
>> - **Servidor de correo electrónico de saliente SMTP**:<br>- **Nombre de host SMTP**: introduzca pro?.mail.ovh.net (sustituya bien "?" por el número de su servidor)<br>- **Puerto SMTP**: 587<br>- **Nombre de usuario SMTP**: su dirección de correo electrónico completa<br>- **Contraseña SMTP**: la de su dirección de correo electrónico<br>- **Seguridad del puerto**: Fallos del comando STARTTLS
>>
>> Para finalizar la configuración, pulse `Conectar`{.action}.
>>
>> ![outlook iOS](images/outlook-app-ios-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Si, tras haber seguido los pasos de configuración anteriores, detecta un fallo de envío o recepción, consulte el apartado "[Modificar los parámetros existentes](#modify-settings)".

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede consultarla en el siguiente enlace: [Webmail](/links/web/email). Puede conectarse con las claves de su dirección de correo electrónico. Si tiene cualquier duda relativa a su uso, consulte nuestra guía [Consultar su cuenta en la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Cambiar la configuración existente <a name="modify-settings"></a>

1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa "&#8962;" en la parte superior izquierda de la pantalla.
2. Pulse el engranaje "&#9881;" en la parte inferior izquierda de la pantalla.
3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
4. Seleccione la cuenta.
5. Pulse `Editar la información de conexión`{.action}.

![outlook iOS](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Consulte los parámetros en **el paso 3** del capítulo [Añadir la cuenta](#add-account).

### Eliminar una cuenta de correo <a name="delete"></a>

1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa "&#8962;" en la parte superior izquierda de la pantalla.
2. Pulse el engranaje "&#9881;" en la parte inferior izquierda de la pantalla.
3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
4. Seleccione la cuenta.
5. Pulsa `Eliminar la cuenta`{.action}.

![outlook iOS](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

### Aviso de los parámetros POP, IMAP y SMTP <a name="popimap-settings"></a>

#### Parámetros de recepción IMAP y POP

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. Sin embargo, puede seleccionar **POP**.

Haga clic en la pestaña correspondiente a su protocolo de recepción:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo
>> - **Servidor (entrante)** : pro?.mail.ovh.net
>> - **Puerto**: 993
>> - **Tipo de seguridad**: SSL/TLS
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo
>> - **Servidor (entrante)** : pro?.mail.ovh.net
>> - **Puerto**: 995
>> - **Tipo de seguridad**: SSL/TLS

#### Parámetros de envío SMTP

Para el envío de mensajes de correo electrónico, si debe introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, consulte a continuación los parámetros que debe utilizar:

**Configuración SMTP**

- **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**
- **Contraseña**: Introduzca la contraseña de la dirección de correo
- **Servidor (entrante)**: pro?.mail.ovh.net
- **Puerto**: 587
- **Tipo de seguridad**: SSL/TLS

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en iOS, consulte [el Centro de ayuda de Microsoft](https://support.microsoft.com/office/set-up-the-outlook-app-for-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).