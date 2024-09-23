---
title: "MXplan - Configurar una dirección de correo electrónico en Gmail para Android"
excerpt: "Cómo configurar una cuenta MX Plan en Android utilizando la aplicación Gmail"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para enviar y recibir mensajes desde su dispositivo sin necesidad de una nueva aplicación. Esta guía explica cómo configurar una cuenta MXplan desde la aplicación Gmail de los dispositivos Android.

**Esta guía explica cómo configurar una cuenta MX Plan en Android utilizando la aplicación Gmail.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado «Más información» de esta guía.

## Requisitos

- Disponer de una dirección de correo electrónico MX Plan (incluida en la solución MX Plan o en un plan de [hosting de OVHcloud](/links/web/hosting)).
- Tener la aplicación Gmail instalada en su dispositivo. Puede instalarla desde Google Play Store si aún no está presente.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
> Esta documentación se ha realizado desde un dispositivo que utiliza la versión 13 de Android.
>

## Procedimiento

### Cómo añadir una cuenta de correo

Abra la aplicación `Gmail`{.action} desde la pantalla de inicio de su dispositivo.

![MX Plan](images/mxplan-android-00.png){.thumbnail .w-400}

La adición de una cuenta se realizará de forma diferente **si no hay ninguna cuenta configurada** o **si ya hay una cuenta configurada**. Seleccione la ficha correspondiente a una de las dos situaciones mencionadas:

> [!tabs]
> **Primera configuración:**
>>
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-first.png){.thumbnail}|Seleccione `Añadir una dirección de correo`{.action}|
>>
> **Configuración existente**
>>
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-existing.png){.thumbnail}|1. Acceda al menú situado en la parte superior izquierda de la pantalla<br><br>2. Seleccione `Configuración`{.action}<br><br>3. Seleccione `Añadir una cuenta`{.action}|
>>

Siga los siguientes pasos de configuración en las fichas siguientes:

> [!tabs]
> **Paso 1**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-01.png){.thumbnail}|En el menú de tipos de cuenta de correo, seleccione `Otra`{.action}.|
>>
> **Paso 2**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-02.png){.thumbnail}|Introduzca su dirección de correo electrónico.|
>>
> **Paso 3**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-03.png){.thumbnail}|Seleccione el protocolo de recepción de correo. Le recomendamos que seleccione `Personal (IMAP)`{.action}<br><br>Encontrará [más información sobre los protocolos POP e IMAP](#popimap) al final de esta guía para entender sus diferencias.|
>>
> **Paso 4**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-04.png){.thumbnail}|Introduzca la contraseña de su dirección de correo electrónico. |
>>
> **Paso 5**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-05.png){.thumbnail}|Complete la configuración de "**servidor de entrada**"<br><br>- **Nombre de usuario**: Su dirección de correo electrónico completa<br>- **Contraseña**: La contraseña de su dirección de correo<br>- **Servidor**: introduzca **ssl0.ovh.net** |
>>
> **Paso 6**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-06.png){.thumbnail}|Complete la **configuración del servidor saliente**<br><br>- **Nombre de usuario**: Su dirección de correo electrónico completa<br>- **Contraseña**: La contraseña de su dirección de correo<br>- **Servidor SMTP**: introduzca **ssl0.ovh.net** |
>>
> **Paso 7**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-07.png){.thumbnail}|Elija la frecuencia con la que quiere sincronizar el correo.|
>>
> **Paso 8**
>> | | |
>> |---|---|
>> |![MX Plan](images/mxplan-android-08.png){.thumbnail}|Averigüe el nombre mostrado de su dirección de correo electrónico en la aplicación Gmail y pulse `Siguiente`{.action}|
>>

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla Ya puede enviar y recibir mensajes desde su aplicación Gmail.

> [!success]
>
> OVHcloud ofrece una aplicación web con la que podrá acceder a su dirección de correo electrónico desde el navegador, disponible en la dirección [Webmail](/links/web/email). Puede conectarse con las credenciales de acceso de su dirección de correo electrónico.

### Configuración POP, IMAP y SMTP

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. También puede seleccionar **POP**. Para entender cómo funcionan, consulte nuestra sección [«POP o IMAP, ¿cuál es la diferencia?».](#popimap)

- **Configuración en POP**

|Elemento|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor|ssl0.ovh.net|
|Puerto|995|
|Tipo de seguridad|SSL/TLS|

- **Configuración en IMAP**

|Elemento|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor|ssl0.ovh.net|
|Puerto|993|
|Tipo de seguridad|SSL/TLS|

Para el envío de mensajes de correo electrónico, si tiene que introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, a continuación encontrará los parámetros que debe utilizar:

- **Configuración SMTP**

|Elemento|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor|ssl0.ovh.net|
|Puerto|465|
|Tipo de seguridad|SSL/TLS|

### POP o IMAP, ¿cuál es la diferencia? <a name="popimap"></a>

Cuando configure manualmente su dirección de correo electrónico, el cliente de correo le preguntará si desea utilizar el protocolo **POP** (**P**ost **O**ffice **P**rotocol) o **IMAP** (**I**nternet **M**essage **A**ccess Protocol). Para entender mejor los protocolos POP e IMAP, es necesario configurar la dirección de correo electrónico.

Al configurar el cliente de correo, debe introducir la información del **servidor entrante** para recibir los mensajes de correo electrónico y el **servidor saliente** para enviar los mensajes de correo electrónico. Para enviar los emails no hay elección, se utiliza el protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). Para la recepción, podrá elegir entre **POP** o **IMAP**.

![MX Plan](images/mxplan-android-popimap-01.png){.thumbnail}

Para entender la diferencia entre el uso del protocolo POP e IMAP, vamos a desglosar los elementos que componen el tratamiento de sus mensajes de correo en recepción:

1. **Su dispositivo**: un ordenador, un smartphone o una tablet. Es su soporte de consulta.

2. **Su cliente de correo** : programa o aplicación dedicado() a la gestión de su correo. Su elección determinará el nivel de usabilidad y de funcionalidades que necesitará para consultar su correo.

3. **Protocolo de recepción**: la elección que determina la forma de registrar los mensajes de correo en su dispositivo. Su elección afectará a otros dispositivos que consulten la misma cuenta de correo.
    - **IMAP**: su cliente de correo consulta el servidor de correo y descarga los mensajes de correo en su dispositivo. Al consultar un mensaje de correo no leído, el servidor lo marca como «leído» por defecto. Otros dispositivos configurados con IMAP verán este estado y verán este correo electrónico hasta que se elimine en uno de los dispositivos.
    - **POP**: su cliente de correo consulta el servidor de correo y descargará los mensajes de correo en su dispositivo. De forma predeterminada, una vez que el mensaje de correo electrónico se ha descargado en el dispositivo, se elimina del servidor. Como resultado, otros dispositivos conectados a esta dirección de correo electrónico no podrán ver este correo electrónico.

![MX Plan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> Esta descripción es un resumen y representa el funcionamiento estándar de ambos protocolos. Es posible configurar el PoP para que los mensajes de correo no se eliminen al recibir los mensajes. El objetivo aquí es describir el funcionamiento nativo de estos dos protocolos y evitar manipulaciones adicionales para ajustarse a sus necesidades.

## Más información

[Configurar una cuenta Email Pro en Android utilizando la aplicación Gmail](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android)

[Configurar una cuenta Exchange en Android utilizando la aplicación Gmail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.