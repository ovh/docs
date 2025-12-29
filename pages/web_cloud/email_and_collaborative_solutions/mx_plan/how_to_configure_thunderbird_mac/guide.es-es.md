---
title: 'MX Plan - Configurar su dirección de correo electrónico en Thunderbird para macOS'
excerpt: Descubra cómo configurar su dirección de correo electrónico MX Plan en Thunderbird para macOS'
updated: 2025-09-19
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
.w-400 {
  max-width:400px !important;
}
</style>

## Objetivo

Las cuentas de correo electrónico MX Plan pueden configurarse en diferentes clientes de correo compatibles. Esto le permite utilizar su dirección de correo electrónico desde el dispositivo de su elección. Thunderbird es un cliente de correo electrónico libre y gratuito.

**Descubra cómo configurar su dirección de correo electrónico MX Plan en Thunderbird para macOS.**

## Requisitos

- Tener una oferta MX Plan. Esta está disponible a través de:
    - Una oferta de [alojamiento web](/links/web/hosting).
    - Un [alojamiento gratuito 100M](/links/web/domains-free-hosting) incluido con un nombre de dominio (previamente activado).
    - Una oferta MX Plan pedida por separado.
    - Tener una dirección de correo electrónico [Zimbra Starter](/links/web/zimbra).
- Tener instalado el software Thunderbird en su Mac.
- Poseer las credenciales relacionadas con la dirección de correo electrónico que desea configurar.

/// details | Información relacionada con la gestión y configuración de los servicios OVHcloud

Este guía le muestra cómo utilizar soluciones OVHcloud con herramientas externas y las modificaciones necesarias en contextos específicos. Es posible que deba adaptar las instrucciones según su situación.

Si tiene dificultades para realizar estas operaciones, le recomendamos contactar a un [proveedor de servicios especializado](/links/partner) y/o discutirlo con nuestra comunidad. OVHcloud no puede proporcionar soporte técnico sobre el uso de herramientas externas. Más información en la sección [Más información](#gofurther) de esta guía.

///

## Procedimiento

### Añadir la cuenta

- **Al iniciar la aplicación por primera vez**: aparece un asistente de configuración que le pide que introduzca su dirección de correo electrónico.

- **Si ya hay una cuenta configurada en la aplicación**:

    1. Haga clic en el menú `☰`{.action} en la barra horizontal superior.
    2. Haga clic en `Nueva Cuenta`{.action}.
    3. Haga clic en `Dirección de correo electrónico`{.action}.

![thunderbird](images/configuration-thunderbird-mac-01.png){.thumbnail .w-600}

> [!warning]
>
> Es necesario anotar el valor correspondiente a su ubicación (**EUROPA** o **AMÉRICA / ASIA-PACÍFICO**).

Siga los pasos de configuración haciendo clic sucesivamente en los **5** pestañas siguientes:

> [!tabs]
> **Paso 1**
>>
>> En la ventana que aparece, introduzca las 2 siguientes informaciones:
>>
>>  - Su nombre completo (nombre de visualización).
>>  - La dirección de correo electrónico a configurar.
>>
>> Haga clic en `Continuar`{.action} para completar los ajustes.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-02.png){.thumbnail .w-600}
>>
> **Paso 2**
>>
>> Cuando Thunderbird detecte un nombre de dominio OVHcloud, se propone una configuración automática relacionada con la oferta MX Plan:
>>
>>  - Si la información es correcta, haga clic en `Continuar`{.action} y pase al paso 5.
>>  - De lo contrario, haga clic en `MODIFICAR LA CONFIGURACIÓN`{.action} para realizar una configuración manual.
>>
>> ![thunderbird](images/configuration-thunderbird-ssl0-03.png){.thumbnail .w-600}
>>
> **Paso 3**
>>
>> Configuración del servidor de recepción:
>>
>>  - **Protocolo**: IMAP
>>  - **Nombre de host EUROPA (entrante)**: imap.mail.ovh.net **o** ssl0.ovh.net
>>  - **Nombre de host AMÉRICA/ASIA-PACÍFICO (entrante)**: imap.mail.ovh.ca
>>  - **Puerto**: 993
>>  - **Seguridad de la conexión**: SSL/TLS
>>  - **Método de autenticación**: Contraseña normal
>>  - **Nombre de usuario**: Su dirección de correo electrónico completa
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-04.png){.thumbnail .w-600}
>>
> **Paso 4**
>>
>> Configuración del servidor de envío:
>>
>>  - **Protocolo**: SMTP
>>  - **Servidor EUROPA (saliente)**: smtp.mail.ovh.net **o** ssl0.ovh.net
>>  - **Servidor AMÉRICA/ASIA-PACÍFICO (saliente)**: smtp.mail.ovh.ca
>>  - **Puerto**: 587
>>  - **Seguridad de la conexión**: STARTTLS
>>  - **Método de autenticación**: Contraseña normal
>>  - **Nombre de usuario**: Su dirección de correo electrónico completa
>> 
>> 1. Haga clic en `Probar`{.action} para verificar los parámetros introducidos.
>> 2. Haga clic en `Continuar`{.action} para validar estos parámetros.
>>
>> ![thunderbird](images/configuration-thunderbird-mxplan-05.png){.thumbnail .w-600}
>>
> **Paso 5**
>>
>> Introduzca la contraseña asociada a la dirección de correo electrónico, luego haga clic en `Continuar`{.action} para finalizar la configuración.
>>
>> ![thunderbird](images/configuration-thunderbird-password-06.png){.thumbnail .w-600}
>>

> [!primary]
>
> **Configuración POP**
>
> Si desea una configuración POP para su dirección de correo electrónico, reemplace los parámetros del **paso 3** por los siguientes:
>
> Configuración del servidor de recepción:
>
> - **Protocolo**: POP3
> - **Nombre de host EUROPA (entrante)**: pop.mail.ovh.net **o** ssl0.ovh.net
> - **Nombre de host AMÉRICA/ASIA-PACÍFICO (entrante)**: pop.mail.ovh.ca
> - **Puerto**: 995
> - **Seguridad de la conexión**: SSL/TLS
> - **Método de autenticación**: Contraseña normal
> - **Nombre de usuario**: Su dirección de correo electrónico completa

### Utilizar la dirección de correo electrónico

Una vez que su dirección de correo electrónico esté configurada, puede comenzar a utilizarla. Ahora puede enviar y recibir correos electrónicos.

OVHcloud también ofrece una aplicación web para acceder a su dirección de correo electrónico desde un navegador. Para acceder al Webmail de OVHcloud, haga clic en [este enlace](/links/web/email). Puede conectarse utilizando las credenciales de su dirección de correo electrónico.

### Recuperar una copia de seguridad de su dirección de correo electrónico

Si debe realizar una operación que podría provocar la pérdida de datos de su cuenta de correo, le recomendamos hacer una copia de seguridad previa de la cuenta de correo afectada. Para ello, consulte el apartado "**Exportar**" en la sección "**Thunderbird**" de nuestra guía "[Migrar manualmente una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

### Modificar los ajustes existentes

Si su cuenta de correo ya está configurada y debe acceder a los ajustes de la cuenta para modificarlos:

1. Haga clic en el menú `☰`{.action} en la barra horizontal superior.
2. Haga clic en `Ajustes de cuentas`{.action}.

![Thunderbird](images/configuration-thunderbird-mac-07.png){.thumbnail .w-600}

- Para modificar los ajustes relacionados con la **recepción** de sus correos, haga clic en `Ajustes del servidor`{.action} en la columna izquierda bajo su dirección de correo.

![thunderbird](images/configuration-thunderbird-mxplan-mac-08.png){.thumbnail .w-600}

- Para modificar los ajustes relacionados con el **envío** de sus correos, haga clic en `Servidor saliente (SMTP)`{.action} al final de la columna izquierda.
- Haga clic en la dirección de correo afectada en la lista, luego haga clic en `Modificar`{.action}.

![thunderbird](images/configuration-thunderbird-mxplan-mac-09.png){.thumbnail .w-600}

## Más información <a name="go-further"></a>

> [!primary]
>
> Para más información sobre la configuración de una dirección de correo electrónico desde el cliente de correo Thunderbird, consulte [el centro de ayuda de Mozilla](https://support.mozilla.org/products/thunderbird).

[Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).