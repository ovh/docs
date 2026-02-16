---
title: "Zimbra - Sincronizar un calendario CalDAV en una aplicación"
excerpt: "Descubra cómo añadir un calendario Zimbra a una aplicación a través del protocolo CalDAV"
updated: 2026-01-29
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Objetivo

Las cuentas de correo electrónico Zimbra pueden configurarse en diferentes programas de mensajería compatibles. Esto le permite utilizar su dirección de correo desde el dispositivo que elija. Zimbra incluye la funcionalidad de calendario en línea, sincronizable desde un software compatible con el protocolo CalDAV.

**Descubra cómo añadir un calendario Zimbra a una aplicación a través del protocolo CalDAV.**

## Requisitos

- Disponer de una dirección de correo electrónico Zimbra OVHcloud.
- Haber instalado una aplicación compatible con el protocolo de calendario CalDAV.
- Disponer del nombre de usuario y la contraseña de la dirección de correo electrónico asociada al calendario que quiera configurar.

## Procedimiento

### ¿Qué es el protocolo CalDAV?

CalDAV es un protocolo para compartir calendarios y tareas en línea. Las direcciones de correo electrónico de Zimbra tienen calendarios que utilizan el protocolo CalDAV.

La configuración del calendario CalDAV es similar a la de una dirección de correo electrónico y requiere una aplicación que admita este protocolo.

### Compartir un calendario

> [!warning]
>
> Esta sección se aplica únicamente a las ofertas [Zimbra Starter o Pro](/links/web/emails) que disponen de la función de calendario compartido.

#### Compartición pública en formato ICS

> [!primary]
>
> El formato de archivo ICS utilizado aquí es estático: la versión del archivo corresponde al momento en que el usuario genera el enlace. Esto significa que un evento añadido después de generar el enlace hacia el archivo ICS no aparecerá en el archivo ni en el calendario en el que se importe. No hay sincronización.

Para generar un enlace de archivo ICS, siga los pasos siguientes:

- Inicie sesión en su dirección de correo Zimbra a través del [webmail](/links/web/email).
- Vaya a la pestaña `Calendario`{.action}.
- Haga clic derecho en el calendario correspondiente y haga clic en `Compartir...`{.action}.
- Haga clic en la pestaña `Hacer público`{.action}.
- Marque la casilla `Genera un enlace público`{.action}, copie o abra el enlace en una nueva pestaña y descargue el archivo ICS.

![zimbra_app](images/zimbra-calendar-webmail-01.png){.thumbnail .w-600 .h-600}

El archivo ICS que ha descargado puede importarse en un calendario existente o recién creado.

#### Compartición mediante invitación por correo electrónico

A diferencia de la compartición de archivos ICS, la compartición mediante invitación por correo electrónico permite compartir dinámicamente un calendario con otras cuentas de correo del mismo nombre de dominio. Los eventos y acciones en el calendario compartido se sincronizarán.

> [!warning]
>
> Solo las direcciones de correo del mismo nombre de dominio pueden recibir este tipo de compartición.

Para iniciar una compartición en otra dirección de correo:

- Inicie sesión en su dirección de correo Zimbra a través del [webmail](/links/web/email).
- Vaya a la pestaña `Calendario`{.action}.
- Haga clic derecho en el calendario correspondiente y haga clic en `Compartir...`{.action}.
- Haga clic en la pestaña `Invitar por correo electrónico`{.action}.

![zimbra_app](images/zimbra-calendar-webmail-02.png){.thumbnail .w-600 .h-600}

Siga los pasos siguientes para compartir un calendario con uno o varios correos electrónicos:

> [!tabs]
> **Paso 1**
>>
>> Introduzca la dirección de correo con la que desea compartir el calendario.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-03.png){.thumbnail .w-600 .h-600}
>>
> **Paso 2**
>>
>> Establezca los permisos de la cuenta de correo en el calendario y haga clic en `Añadir`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-04.png){.thumbnail .w-600 .h-600}
>>
> **Paso 3**
>>
>> Repita los pasos 1 y 2 para compartir el mismo calendario con otras cuentas de correo del mismo nombre de dominio y haga clic en `Guardar`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-05.png){.thumbnail .w-600 .h-600}
>>
> **Paso 4**
>>
>> Se envía un correo electrónico a cada destinatario de la compartición, permitiéndole aceptar o rechazar el calendario compartido. También indica los derechos otorgados en este calendario.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-06.png){.thumbnail .w-600 .h-600}

> [!primary]
>
> Si comparte su calendario con una cuenta de correo del mismo nombre de dominio que utiliza el webmail Roundcube (oferta MX Plan) u OWA (ofertas Email Pro y Exchange), la dirección de correo destinataria recibe un enlace de acceso al webmail Zimbra, permitiendo crear una cuenta "invitada" para consultar el calendario.
>
> ![zimbra_app](images/zimbra-calendar-webmail-07.png){.thumbnail .w-600 .h-600}

### Configurar el calendario de CalDAV en un software compatible

Hemos seleccionado aplicaciones estables compatibles con CalDAV.

- **Para Windows**: Siga el capítulo [Añadir un calendario en Thunderbird](#thunderbird)
- **Para macOS**: Siga el capítulo [Añadir un calendario en macOS](#apple-macos) o [Añadir un calendario en Thunderbird](#thunderbird)
- **Para Linux**: Siga el capítulo [Añadir un calendario en Thunderbird](#thunderbird)
- **Para iPhone e iPad**: Siga el capítulo [Añadir un calendario en iOS e iPad](#apple-ios)
- **Para Android**: Siga la guía [Zimbra - Configurar su cuenta de correo electrónico en la aplicación móvil Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios).

> [!warning]
>
> Actualmente, los dispositivos Android no ofrecen compatibilidad nativa con CalDAV. Tampoco hemos encontrado ninguna aplicación estable de terceros capaz de sincronizar los calendarios Zimbra de nuestros productos.
>
> Solo la aplicación Zimbra, basada en su webmail, puede consultar los calendarios en línea en un dispositivo Android.

#### Configuración general para un calendario CalDAV Zimbra <a name="general-settings"></a>

Si utiliza una aplicación compatible con CalDAV, debe tener en cuenta los siguientes parámetros generales para configurar un calendario de CalDAV Zimbra:

- **Servidor / Dirección / URL**: introduzca el valor `zimbra1.mail.ovh.net`. Para algunos programas de software es necesario añadir el protocolo "https" en la dirección, introduzca el valor `https://zimbra1.mail.ovh.net`.
- **Nombre de usuario**: introduzca la dirección de correo electrónico completa asociada al calendario.
- **Contraseña**: introduzca la contraseña de la dirección de correo electrónico asociada al calendario.

#### Agregar un calendario en Thunderbird <a name="thunderbird"></a>

> [!primary]
>
> [Mozilla Thunderbird](https://www.thunderbird.net/) está disponible en Windows, macOS y Linux. Los siguientes etapas de instalación se realizaron desde macOS, pero se aplican por igual a Windows y Linux.

Abra Thunderbird y haga clic en el icono "Agenda" en la columna izquierda.

Siga los etapas de instalación haciendo clic en las fichas siguientes:

> [!tabs]
> **Etapa 1**
>>
>> - Haga clic en `Nuevo calendario`{.action} en la parte inferior de la columna Calendario o haga clic derecho en un calendario existente y seleccione `Nuevo calendario`{.action} en el menú desplegable que aparece.
>> - Seleccione `En la red` y haga clic en `Siguiente`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird01.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 2**
>>
>> Introduzca la información de conexión al calendario:
>>
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico completa asociada al calendario.
>> - **Dirección**: introduzca el valor `zimbra1.mail.ovh.net`.
>> - **Esta dirección no solicita un usuario de conexión**: Deje esta casilla desmarcada, se le pedirá que introduzca la contraseña asociada a la dirección de correo electrónico indicada anteriormente.
>> - **Compatibilidad con el modo sin conexión**: puede dejar esta opción marcada.
>>
>> Haga clic en `Buscar calendarios`{.action} para iniciar la sincronización del calendario. Introduzca la contraseña de la dirección de correo electrónico asociada al nombre de usuario en la ventana que aparece y acepte.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird02.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 3**
>>
>> Aparecerá la siguiente ventana con los elementos CalDAV presentes en una cuenta de correo electrónico de Zimbra. Marque los elementos que quiera que aparezcan en el calendario de Thunderbird y haga clic en `Iniciar sesión`{.action} para completar la configuración.
>>
>> ![zimbra_app](images/zimbra-calendar-thunderbird03.png){.thumbnail .w-600 .h-600}
>>

#### Añadir un calendario en iOS e ipadOS <a name="apple-ios"></a>

> [!warning]
>
> La siguiente configuración se realizó desde un iPhone. Sin embargo, la manipulación es la misma desde un iPad.

Para añadir un calendario CalDAV a la aplicación Apple `Calendrier` de tu iPhone o iPad, sigue los etapas de instalación haciendo clic en las fichas siguientes:

> [!tabs]
> **Etapa 1**
>>
>> Acceda a los `Ajustes`{.action} de su iPhone o iPad. Consulte `Calendario`{.action} desplazándose por el menú o introduciendo "Calendario" en la barra de búsqueda de ajustes.
>>
>> ![zimbra_app](images/zimbra-calendar-ios01.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 2**
>>
>> Acceda a `Cuentas de calendario`{.action} y seleccione `Añadir una cuenta`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-ios02.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 3**
>>
>> Seleccione `Otro`{.action} y luego seleccione `Añadir una cuenta CalDAV`{.action} en la sección "CALENDARIO".
>>
>> ![zimbra_app](images/zimbra-calendar-ios03.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 4**
>>
>> Introduzca la información de conexión al calendario:
>>
>> - **Servidor**: introduzca el valor `zimbra1.mail.ovh.net`.
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico completa asociada al calendario.
>> - **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
>> - **Descripción**: agregue una descripción al calendario.
>>
>> Acepte con el botón `Siguiente`{.action}.
>>
>> Seleccione las aplicaciones `Calendrier` y `Recordatorio` que utilizarán la información del calendario de Zimbra.
>>
>> ![zimbra_app](images/zimbra-calendar-ios04.png){.thumbnail .w-600 .h-600}
>>

#### Agregar un calendario en macOS <a name="apple-macos"></a>

Para añadir un calendario CalDAV a la aplicación Apple `Calendrier` de tu Mac, inicia la aplicación y sigue los etapas de instalación haciendo clic en las siguientes pestañas:

> [!tabs]
> **Etapa 1**
>>
>> Haga clic en `Calendario`{.action} en la barra de menú superior y luego en `Añadir cuenta`{.action}. Seleccione `Añadir una cuenta CalDAV` y haga clic en `Continuar`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos01.png){.thumbnail .w-600 .h-600}
>>
> **Etapa 2**
>>
>> Desde la ventana de configuración, introduzca la siguiente información:
>>
>> - **Tipo de cuenta**: seleccione `Manuel` en el menú desplegable.
>> - **Nombre de usuario**: introduzca la dirección de correo electrónico completa asociada al calendario.
>> - **Contraseña**: introduzca la contraseña de la dirección de correo electrónico.
>> - **Dirección del servidor**: introduzca el valor `zimbra1.mail.ovh.net`.
>>
>> Para finalizar, haga clic en `Iniciar sesión`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-macos02.png){.thumbnail .w-600 .h-600}
>>

## Más información <a name="go-further"></a>

[Primeros pasos con Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar una dirección de correo electrónico de Zimbra en un cliente de correo](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).