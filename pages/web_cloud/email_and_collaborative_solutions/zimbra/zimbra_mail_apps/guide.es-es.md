---
title: "Configurar una dirección de correo electrónico de Zimbra en un cliente de correo"
excerpt: "Cómo configurar su cliente de correo para consultar el correo de su cuenta de Zimbra"
updated: 2024-10-10
---

<style>
.w-400 {
max-width:400px!important;
}
</style>

> [!warning]
>
> **Importante**
>
> El producto Zimbra es un producto en fase beta.
>
> Solo está disponible para las personas que hayan completado el [formulario de inscripción en la beta](https://labs.ovhcloud.com/en/zimbra-beta/).
>

## Objetivo

Con el servicio Zimbra, OVHcloud le ofrece una plataforma de mensajería en colaboración open source que ofrece todas las funcionalidades necesarias para un uso profesional. Esta página contiene la información necesaria para configurar sus cuentas de correo electrónico de Zimbra en su cliente de correo preferido.

**Descubra cómo configurar su cliente de correo para consultar los mensajes de su cuenta Zimbra**

## Requisitos

- Tener una cuenta de correo en nuestra solución de correo Zimbra OVHcloud.
- Haber instalado un programa de correo en el dispositivo que usted elija.

## Procedimiento

### Configurar una cuenta de correo <a name="mail-config"></a>

La configuración de su cuenta de correo electrónico Zimbra utiliza los mismos parámetros que la solución MX Plan, incluida con los planes de hosting de OVHcloud o como solución de alojamiento individual. Por ese motivo, los enlaces de configuración que aparecen a continuación tienen la mención «MX Plan» en su título.

Haga clic en la ficha correspondiente al tipo de dispositivo que utilice:

> [!tabs]
> **Ordenador Windows**
>>
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Correo de Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Ordenador Apple mac**
>>
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone o iPad**
>>
>> - [Correo para iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone o tableta Android**
>>
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interfaz Web**
>>
>> - [Interfaz online de Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Aviso de los parámetros POP, IMAP y SMTP <a name="popimap-settings"></a>

Para la recepción de mensajes de correo, al elegir el tipo de cuenta, le recomendamos que utilice **IMAP**. Sin embargo, puede seleccionar **POP**.

- **Para una configuración en POP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor **EUROPA** (entrante)|pop.mail.ovh.net **o** ssl0.ovh.net|
|Servidor **AMÉRICA / ASIA-PACÍFICO** (entrante)|pop.mail.ovh.ca|
|Puerto|995|
|Tipo de seguridad|SSL/TLS|

- **Para una configuración en IMAP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor **EUROPA** (entrante)|imap.mail.ovh.net **o** ssl0.ovh.net|
|Servidor **AMÉRICA / ASIA-PACÍFICO** (entrante)|imap.mail.ovh.ca|
|Puerto|993|
|Tipo de seguridad|SSL/TLS|

Para el envío de mensajes de correo electrónico, si debe introducir manualmente los parámetros **SMTP** en las preferencias de la cuenta, encontrará a continuación los parámetros que debe utilizar:

- **Configuración SMTP**

|Información|Descripción|
|---|---|
|Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
|Contraseña|Introduzca la contraseña de la dirección de correo|
|Servidor **EUROPA** (entrante)|smtp.mail.ovh.net **o** ssl0.ovh.net|
|Servidor **AMÉRICA / ASIA-PACÍFICO** (entrante)|smtp.mail.ovh.ca|
|Puerto|465|
|Tipo de seguridad|SSL/TLS|

## Más información <a name="go-further"></a>

[Primeros pasos con Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para servicios especializados (posicionamiento web, desarrollo...), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si necesita ayuda para el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras distintas [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).