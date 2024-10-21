---
title: "Email Pro - Configurar una dirección de correo electrónico en Gmail para Android"
excerpt: "Cómo configurar una cuenta Email Pro en Android utilizando la aplicación Gmail"
updated: 2024-03-15
---

<style>
.w-400 {
max-width:400px!importante;
}
.h-600 {
max-height:600px!importante;
}
</style>

## Objetivo

Las direcciones de correo electrónico de la solución Email Pro pueden configurarse en distintos programas de correo compatibles. De este modo, podrá enviar y recibir mensajes desde cualquier dispositivo. Esta guía explica cómo configurar una dirección de correo Email Pro desde la aplicación Gmail para dispositivos Android.

**Esta guía explica cómo configurar una cuenta Email Pro en Android utilizando la aplicación Gmail.**

> [!warning]
>
> OVHcloud pone a su disposición servicios cuya configuración, gestión y responsabilidad recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las tareas más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle. Para más información, consulte el apartado "Más información" de esta guía.


## Requisitos

- Tener una cuenta [Email Pro](/links/web/email-pro).
- Tener la aplicación Gmail instalada en su dispositivo. Puede instalarla desde Google Play Store.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta documentación se ha realizado desde un dispositivo que utiliza la versión 13 de Android.

## En la práctica

### Cómo añadir una cuenta de correo

> [!primary]
>
> En nuestro ejemplo, hemos utilizado la mención servidor: pro**?**.mail.ovh.net. Sustituya la "?" por la cifra que designa al servidor de su servicio Email Pro.
>
> Puede consultar esta cifra en su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action} y `Email Pro`{.action}. El nombre del servidor aparece en el marco **Conexión** de la pestaña `Información general`{.action}.
>

En la pantalla de inicio de su dispositivo, acceda a la aplicación `Gmail`{.action}.

![emailpro](images/emailpro-android-00.png){.thumbnail .w-400}

Añadir una cuenta se realizará de forma diferente **si no se ha configurado ninguna cuenta** o **si ya se ha configurado una cuenta**. Seleccione la ficha correspondiente a una de las dos situaciones mencionadas:

> [!tabs]
> **Primera configuración**
>>
>> Seleccione `Añadir una dirección de correo electrónico`{.action}<br><br>![emailpro](images/android-first.png){.thumbnail .h-600}
>>
> **Configuración existente**
>>
>> 1. Acceda al menú situado en la parte superior izquierda de la pantalla<br><br>
>> 2. Seleccione `Parámetros`{.action}<br><br>
>> 3. Seleccione `Añadir una cuenta`{.action}<br><br>![emailpro](images/android-existing.png){thumbnail .h-600}

Siga los siguientes pasos de configuración en las fichas siguientes:

> [!tabs]
> **Paso 1**
>> En el menú de tipos de cuentas de correo, seleccione `Otro`{.action}.<br><br>
>>![emailpro](images/emailpro-android-01.png){.thumbnail .h-600}
>>
> **Paso 2**
>> Introduzca su dirección de correo electrónico.<br><br>
>>![emailpro](images/emailpro-android-02.png){.thumbnail .h-600}
>>
> **Paso 3**
>> Seleccione el protocolo de recepción de correo. Le recomendamos que seleccione `Personal (IMAP)`{.action}<br><br>Consulte [más información sobre los protocolos POP e IMAP](#popimap) al final de esta guía para entender sus diferencias.<br><br>
>>![emailpro](images/emailpro-android-03.png){.thumbnail .h-600}
>>
> **Paso 4**
>> Introduzca la contraseña de su dirección de correo.<br><br>
>>![emailpro](images/emailpro-android-04.png){.thumbnail .h-600}
>>
> **Paso 5**
>> Complete los campos "**Parámetros de servidor entrante**"<br><br>- **Nombre de usuario** : Dirección de correo electrónico completa<br>- **Contraseña** : Contraseña de su dirección de correo electrónico<br>- **Servidor** : introduzca **pro**?**.mail.ovh.net** (sustituya el número de servidor por "*?****"). <br><br>
>>![emailpro](images/emailpro-android-05.png){.thumbnail .h-600}
>>
> **Paso 6**
>> Complete los campos "**Parámetros del servidor saliente**"<br><br>- **Nombre de usuario** : Dirección de correo electrónico completa<br>- **Contraseña** : Contraseña de su dirección de correo electrónico<br>- **Servidor SMTP** : introduzca **pro**?**.mail.ovh.net** (sustituya el número de servidor por "**?****"). <br><br>
>>![emailpro](images/emailpro-android-06.png){.thumbnail .h-600}
>>
> **Paso 7**
>> Elija la frecuencia con la que quiere sincronizar el correo.<br><br>
>>![emailpro](images/emailpro-android-07.png){.thumbnail .h-600}
>>
> **Paso 8**
>> Indique el nombre mostrado de su dirección de correo electrónico en la aplicación Gmail y pulse `Siguiente`{.action}.<br><br>
>>![emailpro](images/emailpro-android-08.png){.thumbnail .h-600}
>>

Una vez que haya configurado la dirección de correo electrónico, ¡ya puede empezar a utilizarla! Ya puede enviar y recibir mensajes desde su aplicación Gmail.

> [!success]
>
> OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde un navegador web en la dirección <https://www.ovhcloud.com/es-es/mail/>. Puede conectarse con las claves de su dirección de correo electrónico.

### Configuración POP, IMAP y SMTP

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. También puede seleccionar **POP**. Para entender cómo funcionan, consulte nuestra sección ["POP o IMAP, ¿cuál es la diferencia?".](#popimap)

- **Para una configuración en POP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor|pro*?**.mail.ovh.net (sustituya "**?**" por el número de su servidor)|
|Puerto|995|
|Tipo de seguridad|SSL/TLS|

- **Para una configuración en IMAP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor|pro*?**.mail.ovh.net (sustituya "**?**" por el número de su servidor)|
|Puerto|993|
|Tipo de seguridad|SSL/TLS|

Para el envío de mensajes de correo electrónico, si debe introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, encontrará a continuación los parámetros que debe utilizar:

- **Configuración SMTP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor|pro*?**.mail.ovh.net (sustituya "**?**" por el número de su servidor)|
|Puerto|587|
|Tipo de seguridad|STARTTLS|

### POP o IMAP, ¿cuál es la diferencia? <a name="popimap"></a>

Cuando configure manualmente su dirección de correo electrónico, el cliente de correo le preguntará si desea utilizar el protocolo **POP** (**P**ost **O**ffice **P**rotocol) o **IMAP** (**I**nternet **M**essage **A**ccess Protocol). Para entender mejor los protocolos POP e IMAP, es necesario configurar la dirección de correo electrónico.

Al configurar el cliente de correo, debe introducir la información del **servidor entrante** para recibir los mensajes de correo electrónico y el **servidor saliente** para enviar los mensajes de correo electrónico. Para enviar los emails no hay elección, se utiliza el protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). Para la recepción, podrá elegir entre **POP** o **IMAP**.

![emailpro](images/popimap-01.png){.thumbnail}

Para entender la diferencia entre el uso del protocolo POP e IMAP, vamos a desglosar los elementos que componen el tratamiento de sus mensajes de correo en recepción:

1. **Su dispositivo**: un ordenador, un smartphone o una tablet. Es su soporte de consulta.

2. **Su cliente de correo** : programa o aplicación dedicado() a la gestión de su correo. Su elección determinará el nivel de usabilidad y de funcionalidades que necesitará para consultar su correo.

3. **Protocolo de recepción**: la elección que determina la forma de registrar los mensajes de correo en su dispositivo. Su elección afectará a otros dispositivos que consulten la misma cuenta de correo.
    - **IMAP**: su cliente de correo consulta el servidor de correo y descarga los mensajes de correo en su dispositivo. Al consultar un mensaje de correo no leído, el servidor lo marca como "leído" por defecto. Otros dispositivos configurados con IMAP verán este estado y verán este correo electrónico hasta que se elimine en uno de los dispositivos.
    - **POP**: su cliente de correo consulta el servidor de correo y descargará los mensajes de correo en su dispositivo. De forma predeterminada, una vez que el mensaje de correo electrónico se ha descargado en el dispositivo, se elimina del servidor. Como resultado, otros dispositivos conectados a esta dirección de correo electrónico no podrán ver este correo electrónico.

![emailpro](images/popimap-02.png){.thumbnail}

> [!primary]
>
> Esta descripción es un resumen y representa el funcionamiento estándar de ambos protocolos. Es posible configurar el PoP para que los mensajes de correo no se eliminen al recibir los mensajes. El objetivo aquí es describir el funcionamiento nativo de estos dos protocolos y evitar manipulaciones adicionales para ajustarse a sus necesidades.

## Más información

[MXplan - Configurar una dirección de correo electrónico en Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[Exchange - Configurar una dirección de correo electrónico en Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.