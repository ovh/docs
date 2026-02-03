---
title: "MX Plan - Configurar una dirección de correo electrónico en Outlook clásico para Windows"
excerpt: "Cómo configurar una cuenta MX Plan en Outlook clásico para Windows"
updated: 2026-01-09
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
.h-500 {
  max-width:500px !important;
}
</style>

## Objetivo

Las direcciones de correo electrónico de la oferta **MX Plan** pueden configurarse en un software de mensajería compatible. Esto le permite enviar y recibir mensajes desde la aplicación de su elección.

**Esta guía explica cómo configurar una cuenta MX Plan en Outlook para Windows.**

## Requisitos

- Disponer de una solución de correo electrónico OVHcloud configurada previamente, entre las siguientes **Plan MX** ofrecido con nuestras [ofertas de hosting web](/links/web/hosting).
- Disponer de la [nueva versión de Outlook](https://support.microsoft.com/es-es/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) instalada en su Windows.
- Poseer las credenciales relacionadas con la dirección de correo electrónico que desea configurar.

/// details | Información relativa a la gestión y configuración de los servicios de OVHcloud

La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionen correctamente.

Esta guía le ayudará a realizar las operaciones más habituales. No obstante, si necesita ayuda, le recomendamos que contacte con un [proveedor especializado](/links/partner) o con el editor del servicio. Nosotros no podremos asistirle al respecto. Para más información, consulte el apartado "[Más información](#go-further)" de esta guía.

///

> [!primary]
>
> ¿Utiliza Outlook para Mac? consulte nuestra guía "[Configurar una dirección de correo electrónico en Outlook para Mac](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)".
>

## Procedimiento

> [!warning]
>
> Esta documentación se aplica únicamente a **Outlook clásico** disponible en la suite Microsoft 365. Si está utilizando el nuevo Outlook, consulte nuestro guía "[MX Plan - Añadir una cuenta de correo electrónico en el nuevo Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)".
>
> Para instalar Outlook clásico en su ordenador Windows, descárguelo desde la página de Microsoft "[Instalar o reinstalar Outlook clásico en un PC Windows](https://support.microsoft.com/es-es/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)" e instálelo.
>
> Una vez finalizada la instalación, para distinguir las dos versiones cuando estén instaladas, escriba "Outlook" en la barra de búsqueda de Windows. Podrá entonces constatar la diferencia como se muestra a continuación.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}

### Añadir la cuenta <a name="add-account"></a>

> [!primary]
>
> ¿No sabe si debe configurar su cuenta de correo en **POP** o **IMAP**?
>
> Antes de continuar, consulte la sección "[POP o IMAP, ¿cuál es la diferencia?](#popimap)" de esta guía.
>
> En los siguientes parámetros, puede introducir dos nombres de host diferentes para el mismo servidor (entrante o saliente). Estos valores hacen referencia exactamente al mismo servidor y se han establecido para facilitar la introducción de datos y evitar la confusión entre los protocolos POP, IMAP y SMTP, que utilizan puertos diferentes.

- **Si es la primera vez que usa la aplicación**, aparecerá un asistente de configuración solicitándole su dirección de correo electrónico.

- **Si ya se ha configurado una cuenta**: haga clic en `Archivo`{.action} en la barra de menú en la parte superior de su pantalla, y luego en `Añadir una cuenta`{.action}.

![Outlook](images/config-outlook-mxplan01.png){.thumbnail}

Para configurar su dirección de correo electrónico, siga los pasos pinchando en las pestañas que aparecen a continuación.

> [!warning]
>
> Es necesario introducir correctamente el valor correspondiente a su ubicación (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**).

> **Paso 1**
>>
>> - Desde la ventana **Añadir una cuenta**, seleccione `Configuración manual o tipos de servidores adicionales`{.action}.
>> - Haga clic en `Siguiente`{.action} para continuar.
>> - Seleccione `POP o IMAP`{.action}.
>> - Haga clic en `Siguiente`{.action} para continuar.
>>
>> ![Outlook](images/config-outlook-mxplan02.png){.thumbnail .h-500}
>>
> **Paso 2**
>>
>> Introduzca las informaciones de conexión a su cuenta **(1)**:
>>
>> Informaciones del usuario <br>
>> **Su nombre**: defina un nombre de visualización.<br>
>> **Dirección de correo**: introduzca su dirección de correo electrónico completa.<br>
>>
>> Informaciones del servidor <br>
>> - **Tipo de cuenta**: seleccione IMAP<br>
>> - **Servidor de correo entrante**: <br>
>>      - **EUROPA**: imap.mail.ovh.net **o** ssl0.ovh.net <br>
>>      - **AMÉRICA/ASIA-PACÍFICO**: imap.mail.ovh.ca <br>
>> - **Servidor de correo saliente (SMTP)**: <br>
>>      - **EUROPA**: smtp.mail.ovh.net **o** ssl0.ovh.net <br>
>>      - **AMÉRICA/ASIA-PACÍFICO**: smtp.mail.ovh.ca <br>
>>
>> Informaciones de conexión <br>
>> **Nombre de usuario**: introduzca su dirección de correo electrónico completa.<br>
>> **Contraseña**: introduzca la contraseña asociada a su dirección de correo electrónico.<br>
>>
>> Haga clic en `Configuración adicional...`{.action} **(2)** y pase al paso siguiente
>>
>> ![Outlook](images/config-outlook-mxplan03.png){.thumbnail .h-500}
>>
> **Paso 3**
>>
>> Desde la pestaña `Servidor saliente`, marque `Mi servidor saliente (SMTP) requiere autenticación`{.action} y deje `Utilizar los mismos parámetros que mi servidor de correo entrante`{.action} seleccionado.
>>
>> Desde la pestaña `Opciones avanzadas`:
>>
>> - **Servidor entrante (IMAP)**: 993
>> - **Utilizar el tipo de conexión cifrada siguiente**: SSL/TLS
>> - **Servidor de correo saliente (SMTP)**: 465
>> - **Utilizar el tipo de conexión cifrada siguiente**: SSL/TLS
>>
>> Haga clic en `Aceptar`{.action} para validar las informaciones. Haga clic en `Siguiente`{.action} para iniciar la configuración de la cuenta.
>>
>> ![Outlook](images/config-outlook-mxplan04.png){.thumbnail .h-500}
>>
> **Paso 4**
>>
>> Haga clic en `Siguiente`{.action} para iniciar la configuración de la cuenta. Si los parámetros son validados, obtendrá la ventana siguiente.
>>
>> ![Outlook](images/config-outlook-mxplan05.png){.thumbnail .h-500}
>>

### Utilizar la dirección de correo

Una vez que haya configurado la dirección de correo electrónico, ya puede empezar a utilizarla enviando y recibiendo mensajes.

OVHcloud también ofrece una aplicación web que permite acceder a su dirección de correo electrónico desde un navegador de internet. Puede acceder al webmail de OVHcloud [aquí](/links/web/email) y conectarse con las credenciales de acceso de su dirección de correo electrónico. Si tiene cualquier duda sobre su uso, no dude en consultar nuestra guía "[Consultar su cuenta Exchange desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

### Obtener una copia de seguridad de su dirección de correo

Si necesita realizar alguna operación que pueda provocar la pérdida de los datos de su cuenta de correo, le recomendamos que realice una copia de seguridad previa de la cuenta de correo. Para ello, consulte el apartado "**Exportar desde Windows**" en nuestra guía "[Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration#exportar-desde-windows)".

### Modificar los parámetros existentes

Si su cuenta de correo ya está configurada y debe acceder a los parámetros de la cuenta para modificarlos:

- Vaya a `Archivo`{.action} desde la barra de menú en la parte superior de su pantalla.
- Seleccione la cuenta a modificar en el menú desplegable **(1)**.
- Haga clic en `Configuración de la cuenta`{.action} **(2)** debajo.
- Haga clic en `Configuración de la cuenta...`{.action} **(3)** para acceder a la ventana de configuración.

![Outlook](images/config-outlook-mxplan06.png){.thumbnail}

- Se mostrará la ventana de configuración de cuentas, seleccione la cuenta de correo electrónico correspondiente y haga clic en `Modificar...`{.action}.

![Outlook](images/config-outlook-mxplan07.png){.thumbnail}

### Parámetros generales de envío y recepción <a name="settings-account"></a>

#### Parámetros de recepción IMAP y POP <a name="imap-pop"></a>

Para la recepción de correos electrónicos, al elegir el tipo de cuenta, le recomendamos utilizar **IMAP**. Sin embargo, puede seleccionar **POP**.

> [!warning]
>
> Es necesario anotar correctamente el valor correspondiente a su ubicación (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**).

Seleccione la pestaña correspondiente a su tipo de configuración:

> [!tabs]
> **Configuración IMAP**
>>
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor EUROPA (entrante)**: imap.mail.ovh.net **o** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ASIA-PACÍFICO (entrante)**: imap.mail.ovh.ca.
>> - **Puerto**: 993.
>> - **Tipo de seguridad**: SSL/TLS.
>>
> **Configuración POP**
>>
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico **completa**.
>> - **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
>> - **Servidor EUROPA (entrante)**: pop.mail.ovh.net **o** ssl0.ovh.net.
>> - **Servidor AMÉRICA/ASIA-PACÍFICO (entrante)**: pop.mail.ovh.ca.
>> - **Puerto**: 995.
>> - **Tipo de seguridad**: SSL/TLS.

#### Parámetros de envío SMTP <a name="smtp"></a>

Para el envío de correos electrónicos, a continuación encontrará los parámetros **SMTP** a utilizar:

**Configuración SMTP**

- **Nombre de usuario**: introduzca la dirección de correo electrónico **completa**.
- **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
- **Servidor EUROPA (saliente)**: smtp.mail.ovh.net **o** ssl0.ovh.net.
- **Servidor AMÉRICA/ASIA-PACÍFICO (saliente)**: smtp.mail.ovh.ca.
- **Puerto**: 465.
- **Tipo de seguridad**: SSL/TLS.

### POP o IMAP, ¿cuál es la diferencia? <a name="popimap"></a>

Cuando configure manualmente su dirección de correo electrónico, el cliente de correo le preguntará si desea utilizar el protocolo **POP** (**P**ost **O**ffice **P**rotocol) o **IMAP**(**I**nternet **M**essage **A**ccess **P**rotocol). Para entender bien, es necesario conocer el papel de los protocolos POP e IMAP en la configuración de su dirección de correo.

Al configurar el cliente de correo, debe introducir la información del **servidor entrante** para recibir los mensajes de correo electrónico y el **servidor saliente** para enviar los mensajes de correo electrónico. Para enviar los emails no hay elección, se utiliza el protocolo **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol). Para la recepción, podrá elegir entre **POP** o **IMAP**.

![MX Plan](images/mxplan-popimap-01.png){.thumbnail .w-400}

Para entender la diferencia entre el uso del protocolo POP e IMAP, vamos a detallar los elementos que componen el tratamiento de sus mensajes de correo en recepción:

1. **Su dispositivo**: un ordenador, un smartphone o una tablet. Es su soporte de consulta.
2. **Su cliente de correo**: aplicación dedicada a la gestión de su correo. Su elección determinará el nivel de usabilidad y de funcionalidades que necesitará para consultar su correo.
3. **Protocolo de recepción**: la elección que determina la forma de registrar los mensajes de correo en su dispositivo. Su elección afectará a otros dispositivos que consulten la misma cuenta de correo.
    - **IMAP**: su cliente de correo consulta el servidor de correo y descarga los mensajes de correo en su dispositivo. Al consultar un mensaje de correo no leído, el servidor lo marca como "leído" por defecto. Otros dispositivos configurados con IMAP verán este estado y verán este correo electrónico hasta que se elimine en uno de los dispositivos.
    - **POP**: su cliente de correo consulta el servidor de correo y descarga los mensajes de correo en su dispositivo. De forma predeterminada, una vez que el mensaje de correo electrónico se ha descargado en el dispositivo, se elimina del servidor. Como resultado, otros dispositivos conectados a esta dirección de correo electrónico no podrán ver este correo electrónico.

![MX Plan](images/mxplan-popimap-02.png){.thumbnail .w-400}

> [!primary]
>
> Esta descripción es un resumen y representa el funcionamiento estándar de ambos protocolos. Es posible configurar el PoP para que los mensajes de correo no se eliminen al recibir los mensajes. Nuestro objetivo es describir el funcionamiento nativo de estos dos protocolos.

## Más información <a name="go-further"></a>

> [!primary]
>
> Para obtener más información sobre la configuración de una dirección de correo electrónico desde la aplicación Outlook en macOS, consulte [el Centro de ayuda de Microsoft](https://support.microsoft.com/es-es/office/agregar-cuenta-de-correo-en-outlook-6e27792a-9267-4aa4-8bb6-c84ef146101b).

[Configurar una cuenta Email Pro en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_outlook_2016)

[Configurar una cuenta Exchange en Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016)

Interactúe con nuestra [comunidad de usuarios](/links/community).