---
title: "Zimbra - Configurar la cuenta de correo electrónico en un cliente de correo"
excerpt: "Elija el método de configuración adaptado a su plan Zimbra Starter o Pro y a su cliente de correo"
updated: 2026-05-04
---

## Objetivo

Con su plan Zimbra, OVHcloud le ofrece una plataforma de mensajería colaborativa open source con todas las funcionalidades necesarias para un uso profesional. Esta guía le ayuda a elegir el método de configuración adaptado a su plan Zimbra y a su cliente de correo.

**Descubra qué método elegir para configurar su cuenta de correo electrónico Zimbra en el cliente de correo de su elección.**

## Requisitos

- Haber contratado una cuenta de correo electrónico en una de nuestras [soluciones Zimbra](/links/web/emails-zimbra) (**Zimbra Starter** o **Zimbra Pro**).
- Haber instalado un cliente de correo en el dispositivo de su elección.
- Disponer de las credenciales de la dirección de correo electrónico que desea configurar.

<!-- CP-NAV-START:web-zimbra -->
---

### Acceso al área de cliente de OVHcloud

- **Enlace directo:** [Zimbra](/links/control-panel/web-zimbra)
- **Para acceder a sus servicios:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## Procedimiento

### Identificar su plan Zimbra <a name="identifier-offre"></a>

El método de configuración que debe utilizar depende de su plan Zimbra. Los dos planes no admiten los mismos protocolos.

| Plan | Protocolos admitidos | Funcionalidades sincronizadas |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | Solo correos electrónicos |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | Correos electrónicos, calendario, contactos, tareas |

> [!primary]
>
> Para identificar su plan, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a `Web Cloud`{.action} y, a continuación, a `Zimbra Mail`{.action}. En la pestaña `Cuentas de correo`{.action}, el plan se indica en la columna **Plan** de cada cuenta.

### Configurar una cuenta Zimbra Pro <a name="config-zimbra-pro"></a>

> [!success]
>
> Para aprovechar al máximo las funcionalidades colaborativas de Zimbra Pro (sincronización del calendario, los contactos y las tareas), utilice los protocolos **ActiveSync** o **EWS** mediante las guías dedicadas que aparecen a continuación. La configuración IMAP/POP sigue siendo posible, pero solo sincroniza los correos electrónicos.

Haga clic en la pestaña correspondiente al tipo de dispositivo que utiliza:

> [!tabs]
> **Ordenador Windows**
>>
>> - [Outlook clásico mediante ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Ordenador Apple Mac**
>>
>> - [Mail mediante EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook mediante EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone o iPad**
>>
>> - [Mail mediante ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook mediante ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Smartphone o tableta Android**
>>
>> - [Gmail mediante ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook mediante ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Configurar una cuenta Zimbra Starter (o una cuenta Zimbra Pro en IMAP/POP) <a name="mail-config"></a>

Para el plan **Zimbra Starter**, o si prefiere una configuración IMAP/POP para su cuenta **Zimbra Pro**, utilice las guías que aparecen a continuación.

> [!primary]
>
> Las guías que aparecen a continuación se comparten con el plan MX Plan, ya que los parámetros IMAP/POP/SMTP son estrictamente idénticos para ambos planes. Por ese motivo, los enlaces tienen la mención "MX Plan" en su título.

Haga clic en la pestaña correspondiente al tipo de dispositivo que utiliza:

> [!tabs]
> **Ordenador Windows**
>>
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Correo para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Ordenador Apple Mac**
>>
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone o iPad**
>>
>> - [Mail para iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Smartphone o tableta Android**
>>
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Interfaz web**
>>
>> - [Interfaz online de Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Utilizar la aplicación móvil Zimbra <a name="config-zimbra-app"></a>

Compatible con los planes **Zimbra Starter** y **Zimbra Pro**, la aplicación móvil Zimbra (Android e iOS) permite acceder a su cuenta mediante el protocolo nativo de Zimbra.

- [Configurar la aplicación móvil Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Parámetros IMAP, POP y SMTP de referencia <a name="popimap-settings"></a>

Si su cliente de correo requiere una configuración manual, utilice los siguientes parámetros.

#### Servidores de recepción

Para la recepción de los correos electrónicos, recomendamos el protocolo **IMAP**. El protocolo **POP** sigue estando disponible. Haga clic en la pestaña correspondiente al protocolo de su elección:

> [!tabs]
> **IMAP (recomendado)**
>>
>> - **Nombre de usuario**: dirección de correo electrónico **completa**
>> - **Contraseña**: contraseña de la dirección de correo electrónico
>> - **Servidor EUROPA (entrante)**: `imap.mail.ovh.net` **o** `ssl0.ovh.net`
>> - **Servidor AMÉRICA/ASIA-PACÍFICO (entrante)**: `imap.mail.ovh.ca`
>> - **Puerto**: 993
>> - **Tipo de seguridad**: SSL/TLS
>>
> **POP**
>>
>> - **Nombre de usuario**: dirección de correo electrónico **completa**
>> - **Contraseña**: contraseña de la dirección de correo electrónico
>> - **Servidor EUROPA (entrante)**: `pop.mail.ovh.net` **o** `ssl0.ovh.net`
>> - **Servidor AMÉRICA/ASIA-PACÍFICO (entrante)**: `pop.mail.ovh.ca`
>> - **Puerto**: 995
>> - **Tipo de seguridad**: SSL/TLS
>>

#### Servidor de envío

Para el envío de los correos electrónicos, utilice los siguientes parámetros **SMTP**:

- **Nombre de usuario**: dirección de correo electrónico **completa**
- **Contraseña**: contraseña de la dirección de correo electrónico
- **Servidor EUROPA (saliente)**: `smtp.mail.ovh.net` **o** `ssl0.ovh.net`
- **Servidor AMÉRICA/ASIA-PACÍFICO (saliente)**: `smtp.mail.ovh.ca`
- **Puerto**: 465
- **Tipo de seguridad**: SSL/TLS

## Más información <a name="go-further"></a>

[Primeros pasos con el plan Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar la aplicación móvil Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para servicios especializados (posicionamiento web, desarrollo, etc.), póngase en contacto con los [partners de OVHcloud](/links/partner).

Si necesita ayuda para el uso y la configuración de sus soluciones de OVHcloud, puede consultar nuestras [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
