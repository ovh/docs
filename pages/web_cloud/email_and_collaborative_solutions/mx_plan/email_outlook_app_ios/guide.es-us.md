---
title: "MX Plan - Configurar una cuenta de correo en Outlook para iOS"
excerpt: "Descubra cómo configurar una cuenta MX Plan en la aplicación móvil Outlook para iOS"
updated: 2025-02-10
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

Es posible configurar las cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible. para que pueda utilizar su dirección de correo desde cualquier dispositivo. La aplicación Outlook de Microsoft en iOS está disponible gratuitamente desde la App Store de Apple.

**Descubra cómo configurar una cuenta MX Plan en la aplicación móvil Outlook para iOS**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [partner especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado «Más información» de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico MX Plan (incluida en la solución MX Plan o en un [plan de hosting de OVHcloud](/links/web/hosting)).
- Tener la aplicación Outlook en su dispositivo móvil [iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico que quiera configurar.

## Procedimiento

### Añadir la cuenta <a name="add-account"></a>

- **Cuando inicie la aplicación por primera vez**, aparecerá un asistente de configuración y pulse `Añadir cuenta`{.action}.

![outlook ios](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Si ya tiene una cuenta configurada**:
    1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa "&#8962;" en la parte superior izquierda de la pantalla.
    2. Pulse el engranaje "&#9881;" en la parte inferior izquierda de la pantalla.
    3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
    4. Pulsa `Añadir cuenta`{.action}.
    5. Pulsa `Cuenta de correo`{.action}.

![outlook ios](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Siga los pasos de instalación haciendo clic en las fichas siguientes:

> [!tabs]
> **Etapa 1**
>>
>> Introduzca su dirección de correo electrónico y pulse `Añadir una cuenta`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 2**
>>
>> Tiene dos posibilidades:
>>
>> - Si aparece "**IMAP**" en la parte superior de la página, vaya al etapa 3.
>> - Si la ventana de configuración de la cuenta muestra "**Exchange**" en la parte superior, pulse el botón `?` en la esquina superior derecha de la pantalla **(1)** y elija `Cambiar proveedor de cuenta`{.action} **(2)**. A continuación, seleccione `IMAP` **(3)** y continúe con la etapa 3.
>>
>> ![outlook ios](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Etapa 3**
>>
>> En la siguiente ventana, marque `Parámetros avanzados`{.action} e introduzca la siguiente información:
>>
>> - **Dirección de correo electrónico**
>> - **Nombre completo**: Introduzca su dirección de correo electrónico completa
>> - **Descripción**
>> - **Servidor de correo electrónico de entrada IMAP**:<br>- **Nombre de host IMAP**: Para **EUROPA**, introduzca `imap.mail.ovh.net` o `ssl0.ovh.net`. Para **AMÉRICA/ASIA**, introduzca `imap.mail.ovh.ca`<br>- **Puerto IMAP**: 993<br>- **Nombre de usuario IMAP**: su dirección de correo electrónico completa<br>- **Contraseña IMAP**: la de su dirección de correo electrónico<br>- **Seguridad del puerto**: SSL
>> - **Servidor de correo electrónico entrante SMTP**:<br>- **Nombre de host SMTP**: Para **EUROPA**, introduzca `smtp.mail.ovh.net` o `ssl0.ovh.net`. Para **AMÉRICA/ASIA**, introduzca `smtp.mail.ovh.ca`<br>- **Puerto SMTP**: 465<br>- **Nombre de usuario SMTP**: su dirección de correo electrónico completa<br>- **Contraseña SMTP**: la de su dirección de correo electrónico<br>- **Seguridad del puerto**: SSL
>>
>> Para finalizar la configuración, pulse `Conectar`{.action}.
>>
>> ![outlook ios](images/outlook-app-ios-add-step03-imap-eu.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Si, tras haber seguido los pasos de configuración anteriores, detecta un fallo de envío o recepción, consulte el apartado "[Modificar los parámetros existentes](#modify-settings)".

### Utilizar la dirección de correo electrónico

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes.

OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador. Puede consultarla en el siguiente enlace: [Webmail](/links/web/email). Puede conectarse con las claves de su dirección de correo electrónico. Si tiene cualquier duda relativa a su uso y en función del webmail asociado a su producto, consulte nuestras guías:

- [Consultar su cuenta desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)
- [Utilizar una dirección de correo electrónico desde el webmail RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)
- [Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra).

### Cambiar la configuración existente <a name="modify-settings"></a>

1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa "&#8962;" en la parte superior izquierda de la pantalla.
2. Pulse el engranaje "&#9881;" en la parte inferior izquierda de la pantalla.
3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
4. Seleccione la cuenta.
5. Pulse `Editar la información de conexión`{.action}.

![outlook ios](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Consulte los parámetros en **la etapa 3** del capítulo [Añadir la cuenta](#add-account).

### Eliminar una cuenta de correo <a name="delete"></a>

1. Pulse el círculo que contiene las iniciales de la cuenta de correo consultada o el icono de la casa "&#8962;" en la parte superior izquierda de la pantalla.
2. Pulse el engranaje "&#9881;" en la parte inferior izquierda de la pantalla.
3. A continuación, pulse `Cuentas`{.action} en el menú **Ajustes**.
4. Seleccione la cuenta.
5. Pulsa `Eliminar la cuenta`{.action}.

![outlook ios](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

### Aviso de los parámetros POP, IMAP y SMTP <a name="popimap-settings"></a>

#### Parámetros de recepción IMAP y POP

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. Sin embargo, puede seleccionar **POP**.

> [!warning]
>
> Es necesario indicar el valor correspondiente a su localización (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**)

Siga los pasos de instalación haciendo clic en las fichas siguientes:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo
>> - **Servidor EUROPA (entrante)**: imap.mail.ovh.net **o** ssl0.ovh.net
>> - **Servidor AMERICA/ASIA-PACÍFICO (entrante)**: imap.mail.ovh.ca
>> - **Puerto**: 993
>> - **Tipo de seguridad**: SSL/TLS
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**
>> - **Contraseña**: Introduzca la contraseña de la dirección de correo
>> - **Servidor EUROPA (entrante)**: pop.mail.ovh.net **o** ssl0.ovh.net
>> - **Servidor AMERICA/ASIA-PACÍFICO (entrante)**: pop.mail.ovh.ca
>> - **Puerto**: 995
>> - **Tipo de seguridad**: SSL/TLS

#### Parámetros de envío SMTP

Para el envío de mensajes de correo electrónico, si debe introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, consulte a continuación los parámetros que debe utilizar:

**Configuración SMTP**

- **Nombre de usuario**: Introduzca la dirección de correo electrónico **completa**
- **Contraseña**: Introduzca la contraseña de la dirección de correo
- **Servidor EUROPA (entrante)**: pop.mail.ovh.net **o** ssl0.ovh.net
- **Servidor AMERICANO/ASIA-PACÍFICO (entrante)**: pop.mail.ovh.ca
- **Puerto**: 465
- **Tipo de seguridad**: SSL/TLS

> [!primary]
>
> **Cambiar la configuración**
>
> Si su dirección de correo electrónico está configurada en **IMAP** y desea cambiar esta configuración a **POP**, debe eliminar la cuenta y volver a crearla en **POP**. Consulte el capítulo "[Modificar la configuración existente](#modify-settings)" de esta guía.

## Más información <a name="go-further"></a>
 
Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).
 
Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).
 
Interactúe con nuestra [comunidad de usuarios](/links/community).