---
title: "MX Plan - Configurar una dirección de correo electrónico en Outlook para Windows"
excerpt: "Cómo configurar una cuenta MX Plan en Outlook para Windows"
updated: 2024-02-16
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Es posible configurar sus cuentas MX Plan en el cliente de correo que usted utilice, siempre que sea compatible, para poder acceder a ellas desde cualquiera de sus dispositivos.

**Esta guía explica cómo configurar una cuenta MX Plan en Outlook para Windows.**

> [!warning]
>
> La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.
>
> Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado «Más información» de esta guía.
>

## Requisitos

- Disponer de una cuenta MX Plan (incluida en un MX Plan o en un [plan de hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external}).
- Tener Microsoft Outlook o posterior.
- Disponer del nombre de usuario y la contraseña de la cuenta de correo electrónico que quiera configurar.

> [!primary]
>
>  ¿Utiliza Outlook para Mac? consulte nuestra guía [Configurar una dirección de correo electrónico en Outlook para Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac){.external}.
>

## Procedimiento

> [!alert]
>
> Antes de empezar a configurar el VPS con esta guía, asegúrese de que la bandera situada en la parte superior derecha de esta página se corresponde con su país o región, ya que la configuración depende de su ubicación.

### Añadir la cuenta

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya tiene una cuenta configurada**, haga clic en `Archivo`{.action} en el menú superior y luego en `Agregar cuenta`{.action}.

- Introduzca su dirección de correo electrónico y haga clic en `Opciones avanzadas`{.action}. Marque la casilla `Permitirme configurar manualmente mi cuenta`{.action} y haga clic en `Conectar`{.action}. 

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

> [!primary]
>
> ¿No sabe si debe configurar su cuenta de correo en **POP** o **IMAP**?
>
> Antes de continuar, consulte la sección «[POP o IMAP, ¿cuál es la diferencia?](#popimap)» de esta guía.
>
> En los siguientes parámetros, puede introducir dos nombres de host diferentes para el mismo servidor (entrante o saliente). Estos valores hacen referencia exactamente al mismo servidor y se han establecido para facilitar la introducción de datos y evitar la confusión entre los protocolos POP, IMAP y SMTP, que utilizan puertos diferentes.

Para configurar su dirección de correo electrónico, siga los pasos que se indican en las fichas que aparecen a continuación.

> [!tabs]
> **Paso 1**
>> Entre los distintos tipos de cuenta, elija IMAP o POP. <br>Le recomendamos que utilice IMAP.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-600}
>>
> **Paso 2**
>> Introduzca la contraseña de su dirección de correo electrónico y haga clic en `Siguiente`{.action}.
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-600}
>>
> **Paso 3**
>> Si Outlook no puede configurar su dirección automáticamente, se abrirá esta ventana. Haga clic en `Cambiar la configuración de la cuenta`{.action}. En función de su elección (**POP** o **IMAP**), vaya al paso 4 correspondiente.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-600}
>>
> **Paso 4 - IMAP**
>> Si ha elegido IMAP, introduzca los siguientes parámetros. Si ha elegido POP, vaya a la pestaña «**Paso 4 - POP**».<br>
>> En **Correo entrante**, escriba:<br>- El servidor **imap.mail.ovh.net** o **ssl0.ovh.net** <br>- Port **993**<br>- Método de cifrado **SSL/TLS**<br><br>En **Correo saliente**, escriba:<br>- El servidor **smtp.mail.ovh.net** o **ssl0.ovh.net** <br>- Port **465**<br>- Método de cifrado **SSL/TLS**<br><br>Haga clic en `Siguiente`{.action} para validar.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-600}
>>
> **Paso 4 - POP**
>> En **Correo entrante**, escriba:<br>- El servidor **pop.mail.ovh.net** o **ssl0.ovh.net** <br>- Puerto **995**<br>- Método de cifrado **SSL/TLS**<br><br>En **Correo saliente**, escriba:<br>- El servidor **smtp.mail.ovh.net** o **ssl0.ovh.net** <br>- Port **465**<br>- Método de cifrado **SSL/TLS**<br><br>Haga clic en `Siguiente`{.action} para validar.<br>
>>
>> ![Outlook](images/config-outlook-mxplan05-pop.png){.thumbnail .h-600}

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. y está disponible en la dirección <https://www.ovh.es/mail/>. Puede conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, no dude en consultar nuestra guía [Consultar su cuenta Exchange desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar desde Windows**" en nuestra guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-desde-windows).

### Modificar los parámetros existentes

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- Vaya a `Archivo`{.action} desde la barra de menú situada en la parte superior de su pantalla y seleccione la cuenta que quiera modificar en el menú desplegable **(1)**.
- Haga clic en `Configuración de la cuenta`{.action}**(2)**.
- Haga clic en `Configuración del servidor`{.action}**(3)** para acceder a la ventana de configuración.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

La ventana está dividida en dos partes, **Correo entrante** y **Correo saliente**. Haga clic en uno u otro para poder modificarlo.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Aviso de configuración POP, IMAP y SMTP <a name="popimap-settings"></a>

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. También puede seleccionar **POP**. Para entender cómo funcionan, consulte «[POP o IMAP, ¿cuál es la diferencia?](#popimap)» a continuación.

- **Configuración en POP**

|Elemento|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor (entrante)|pop.mail.ovh.net **o** ssl0.ovh.net|
|Puerto|995|
|Tipo de seguridad|SSL/TLS|

- **Configuración en IMAP**

|Elemento|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor (entrante)|imap.mail.ovh.net **o** ssl0.ovh.net|
|Puerto|993|
|Tipo de seguridad|SSL/TLS|

Para el envío de mensajes de correo electrónico, si tiene que introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, a continuación encontrará los parámetros que debe utilizar:

- **Configuración SMTP**

|Elemento|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor (saliente)|smtp.mail.ovh.net **o** ssl0.ovh.net|
|Puerto|465|
|Tipo de seguridad|SSL/TLS|

### POP o IMAP, ¿cuál es la diferencia? <a name="popimap"></a>

Cuando configure manualmente su dirección de correo electrónico, el cliente de correo le preguntará si desea utilizar el protocolo **POP** (**P**ost **O**ffice **P**rotocol) o **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). Para entender bien, es necesario conocer el papel de los protocolos POP e IMAP en la configuración de su dirección de correo.

Al configurar el cliente de correo, debe introducir la información del **servidor entrante** para recibir los mensajes de correo electrónico y el **servidor saliente** para enviar los mensajes de correo electrónico. Para enviar los emails no hay elección, se utiliza el protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). Para la recepción, podrá elegir entre **POP** o **IMAP**.

![MX Plan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Para entender la diferencia entre el uso del protocolo POP e IMAP, vamos a detallar los elementos que componen el tratamiento de sus mensajes de correo en recepción:

1. **Su dispositivo**: un ordenador, un smartphone o una tablet. Es su soporte de consulta.
2. **Su cliente de correo** : aplicación dedicada a la gestión de su correo. Su elección determinará el nivel de usabilidad y de funcionalidades que necesitará para consultar su correo.
3. **Protocolo de recepción**: la elección que determina la forma de registrar los mensajes de correo en su dispositivo. Su elección afectará a otros dispositivos que consulten la misma cuenta de correo.
    - **IMAP**: su cliente de correo consulta el servidor de correo y descarga los mensajes de correo en su dispositivo. Al consultar un mensaje de correo no leído, el servidor lo marca como «leído» por defecto. Otros dispositivos configurados con IMAP verán este estado y verán este correo electrónico hasta que se elimine en uno de los dispositivos.
    - **POP**: su cliente de correo consulta el servidor de correo y descarga los mensajes de correo en su dispositivo. De forma predeterminada, una vez que el mensaje de correo electrónico se ha descargado en el dispositivo, se elimina del servidor. Como resultado, otros dispositivos conectados a esta dirección de correo electrónico no podrán ver este correo electrónico.

![MX Plan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Esta descripción es un resumen y representa el funcionamiento estándar de ambos protocolos. Es posible configurar el PoP para que los mensajes de correo no se eliminen al recibir los mensajes. Nuestro objetivo es describir el funcionamiento nativo de estos dos protocolos.

## Más información

[Configurar una cuenta Email Pro en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016){.external}

[Configurar una cuenta Exchange en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016){.external}

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.