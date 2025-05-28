---
title: FAQ soluciones de correo electrónico de OVHcloud
excerpt: "Encuentre las preguntas más frecuentes sobre el correo electrónico"
updated: 2025-04-07
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-500 {
  max-width:500px !important;
}
</style>

## FAQ e-mail

En esta página encontrará las preguntas más frecuentes sobre el uso de su correo electrónico en función de las ofertas de correo de OVHcloud.

### Productos de correo electrónico en OVHcloud

OVHcloud ofrece actualmente 4 soluciones de correo. Para entender sus especificaciones, navegue por las fichas de abajo:

> [!tabs]
> **Correo electrónico / MX Plan**
>>
>> ![MX Plan](images/mxplan01.png){.thumbnail .w-500}
>>
>> 1. La solución de correo electrónico más antigua de OVHcloud, que incluye las funciones esenciales de un servicio de correo con 5 GB de espacio de almacenamiento por cuenta de correo.
>> 2. Incluido con los planes de hosting, puede contratarlo desde el [área de cliente de OVHcloud](/links/manager).
>> 3. Esta oferta utiliza la interfaz webmail **OWA** (Outlook Web Access).
>>
> **Exchange**
>>
>> ![Exchange](images/exchange01.png){.thumbnail .w-500}
>>
>> 1. Una completa oferta de correo con funciones colaborativas con 50 GB o 300 GB de espacio de almacenamiento.
>> 2. Incluido con los planes de hosting, puede contratarlo desde el [área de cliente de OVHcloud](/links/manager).
>> 3. Esta oferta utiliza la interfaz webmail **OWA** (Outlook Web Access).
>>

> [!success]
> A menos que se indique lo contrario, las siguientes preguntas afectan a todos los servicios de correo de OVHcloud.

/// details | ¿En qué se diferencian las tecnologías de correo electrónico de las ofertas **MX Plan**?

La solución MX Plan se distingue por su evolución, que se basa en tres tecnologías de correo distintas. Cada una de ellas tiene su propia interfaz webmail:

- **Roundcube**.
- **OWA** (Outlook Web Access).
- **Zimbra**.

Esta diversidad de tecnologías implica una ergonomía de funcionamiento diferente para cada interfaz. Algunas funcionalidades pueden configurarse a través del área de cliente, mientras que otras pueden configurarse a través del webmail.

A continuación, se ofrece un resumen de las principales funcionalidades de correo electrónico, clasificadas por tecnología y ubicación de configuración:

![MX plan](images/email_feature_table.png){.thumbnail .w-500}

///

/// details | ¿Qué hay que saber antes de crear una dirección de correo electrónico?

Crear una dirección de correo electrónico no es una tarea compleja, pero es necesario seguir unas reglas que determinen el **nombre de su dirección de correo electrónico** y su **contraseña**.

El **nombre de su dirección de correo electrónico** debe respetar las siguientes reglas:

- Mínimo 2 caracteres.
- Máximo 32 caracteres.
- Sin caracteres acentuados.
- Sin caracteres especiales, excepto los siguientes: `.`, `,`, `-` y `_`.

La contraseña **contraseña** debe cumplir las siguientes reglas:

- Mínimo 9 caracteres.
- Máximo 30 caracteres.
- Sin caracteres acentuados.

> [!warning]
> Por motivos de seguridad, no utilice la misma contraseña dos veces. Elija un nombre que no guarde relación con sus datos personales (por ejemplo, no incluya su nombre, apellidos ni fecha de nacimiento). Cámbielo regularmente.

///

/// details | ¿Qué hago si no recibo más mensajes?

A continuación se indican las principales razones por las que no ha recibido sus mensajes de correo.

1. **Software de correo**: Un fallo de recepción de correo suele estar relacionado con la configuración de su dirección de correo en su cliente de correo (Outlook, Mail de macOS, Thunderbird, etc.). Para comprobarlo, conéctese al [webmail](/links/web/email). Si ve mensajes de correo en su bandeja de entrada en el webmail que no están presentes en su programa de correo, el fenómeno se debe a su configuración de software. Para más información, consulte nuestra página [No es posible enviar o recibir mensajes de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **Configuración DNS**: Su solución de correo está asociada a un dominio. En su zona DNS, los registros MX designan los servidores de recepción de correo. Si ha modificado recientemente los servidores DNS o la zona DNS, es posible que estos registros MX se hayan "cortado". Esto provocaría un corte en la recepción de los emails.Para más información al respecto, consulte nuestra página [Envío o recepción de emails imposible](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **Se ha superado la cuota de correo**: Si se ha alcanzado la cuota de almacenamiento de su cuenta de correo, no será posible recibir mensajes de correo y el remitente recibirá un mensaje de error indicando que su cuenta de correo está llena. Gestionar el espacio de almacenamiento de una cuenta de correo Para más información, consulte nuestra página [Gestionar el espacio de almacenamiento de una cuenta de correo ](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota).
1. **Reglas de la bandeja de entrada**: es posible que una regla de la bandeja de entrada impida la entrega de un mensaje de correo electrónico en la bandeja de entrada o lo redirija a la carpeta Correo basura. Consulte sus reglas desde su cliente de correo (Outlook, Mail de macOS, Thunderbird, etc.) o desde el [webmail](/links/web/email).
1. **Incidente o mantenimiento**: Consulte nuestra página [Web Cloud status](https://web-cloud.status-ovhcloud.com/) para comprobar si hay una operación en curso en su servicio de correo.

> [!primary]
> **Trucos y Trucos**: Si no puede conectarse a su webmail, es posible que su contraseña sea incorrecta. Consúltelo y, si fuera necesario, le invitamos a modificarlo desde su [área de cliente de OVHcloud](/links/manager) y a renovar su conexión.

///

/// details | ¿Qué hago si no puedo enviar mensajes de correo?

1. **Software de correo**: Un fallo de envío puede deberse a la configuración de su dirección de correo en su cliente de correo (Outlook, Mail de macOS, Thunderbird, etc.). Para comprobarlo, conéctese al [webmail](/links/web/email). Si descubre que puede enviar mensajes de correo desde el webmail, el problema se debe a su configuración de software. Para más información, consulte nuestra página [No es posible enviar o recibir mensajes de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **Código de error**: cuando envía un mensaje y el servidor de destino lo rechaza, el servidor de destino suele enviar un mensaje de error con un código de error. Analice el mensaje de error y explique el motivo (ha alcanzado el límite máximo de la cuenta de correo, no existe la dirección de correo del destinatario, etc.). Para más información, consulte nuestra página [No es posible enviar o recibir mensajes de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_advanced).
1. **Tamaño del correo electrónico**: Tanto si es su proveedor de correo electrónico como el servidor de destino, existe un límite de tamaño para un correo electrónico. Le recomendamos que transmita principalmente imágenes o archivos pdf de tamaño reducido. Para archivos de gran tamaño, es preferible utilizar herramientas de transferencia de archivos como [plik.ovh](https://plik.ovh/).

///


/// details | ¿Por qué configurar los registros SPF y DKIM?

**SPF (Sender Policy Framework)**

Permite a los servidores que reciben mensajes de correo electrónico asegurarse de que los mensajes se han enviado desde un servidor de confianza. Este protocolo se ha convertido en indispensable para legitimar el intercambio de mensajes de correo. Sin registro SPF en el dominio de su servicio de correo, los destinatarios podrían considerar que sus mensajes de correo no son deseados.

Para más información sobre cómo configurar un registro SPF en un servicio de correo, consulte nuestra guía [Mejorar la seguridad del correo electrónico mediante un registro SPF](/pages/web_cloud/domains/dns_zone_spf).

**DKIM (DomainKeys Identified Mail)**

Permite firmar los mensajes de correo para evitar el robo de identidad. Esta firma se basa en el principio de hash combinado con una criptografía asimétrica. Este protocolo es complementario del SPF. El SPF interviene en la legitimidad del nombre de dominio mientras que el DKIM se asegura de que cada correo esté firmado por el servicio de correo correcto durante el envío. Asimismo, se convierte en un referente en materia de seguridad del correo. Algunos servicios de correo electrónico también pueden considerar un correo electrónico como no deseado si no está protegido por una firma DKIM.

Para saber cómo configurar un registro DKIM en su servicio de correo, consulte nuestra guía [Mejorar la seguridad del correo electrónico mediante un registro DKIM](/pages/web_cloud/domains/dns_zone_dkim).

///


/// details | ¿Cómo configurar mi dirección de correo electrónico y utilizarla con el webmail?

Puede configurar su cuenta de correo con clientes como Outlook, Thunderbird o Mail de Mac, entre otros. OVHcloud pone a su disposición diferentes guías para ayudarle a configurar su dirección de correo. 
Puede consultar nuestras guías en la [siguiente página](/products/web-cloud-email-collaborative-solutions-mx-plan).

> [!tabs]
> **Correo electrónico**
>>
>> **Equipo Windows**
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).
>> - [Correo de Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
>> **Ordenador Apple Mac**
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
>> **iPhone o iPad**
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
>> **Smartphone o tableta Android**
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>
> **Microsoft Exchange**
>>
>> **Equipo Windows**
>> - [Outlook para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016).
>> - [Thunderbird para Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird).
>> - [Correo electrónico de Windows](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_windows_10).
>>
>> **Ordenador Apple Mac**
>> - [Outlook para macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_outlook_2016_mac).
>> - [Mail for macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_mail_macos).
>> - [Thunderbird para macOS](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_thunderbird_mac).
>>
>> **iPhone o iPad**
>> - [Mail for iPhone and iPad](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_ios).
>>
>> **Smartphone o tableta Android**
>> - [Gmail para Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).
>>

Gracias al [webmail](/links/web/email), podrá acceder a su correo en cualquier momento, desde cualquier dispositivo. Una vez que haya creado su cuenta de correo, haga clic aquí para acceder a ella.

**Ideas y consejos**: Si ha configurado su cuenta en un cliente de correo, le recomendamos que utilice el protocolo IMAP. De este modo, los mensajes se almacenarán en el servidor y podrá consultarlos desde cualquier dispositivo a través del [webmail](/links/web/email). Para más información, consulte la siguiente documentación: [Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

///

/// details | ¿Cómo gestionar mis servicios de correo electrónico?

Todas sus direcciones de correo se gestionan desde el [área de cliente de OVHcloud](/links/manager). Para ello, una vez que se haya conectado, acceda al producto correspondiente. Puede de esta manera modificar la contraseña de sus direcciones de correo, verificar su índice de llenado, crear nuevas direcciones o eliminar direcciones existentes.

**Trucos y consejos**: En los servicios MX Plan, puede delegar la gestión de una cuenta de correo en otra cuenta de OVHcloud, pero usted mismo podrá controlarla. Para ello, solo tiene que configurar una delegación desde su [área de cliente de OVHcloud](/links/manager). Puede basarse en [nuestra documentación](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation).

///

/// details | ¿Qué hay que saber antes de crear una dirección de correo electrónico?

Crear una dirección de correo electrónico no es una tarea compleja, pero es necesario seguir unas reglas que determinen el **nombre de su dirección de correo electrónico** y su **contraseña**.

El **nombre de su dirección de correo electrónico** debe respetar las siguientes reglas:

- Mínimo 2 caracteres.
- Máximo 32 caracteres.
- Sin caracteres acentuados.
- Sin caracteres especiales, excepto los siguientes: `.`, `,`, `-` y `_`.

La contraseña **contraseña** debe cumplir las siguientes reglas:

- Mínimo 9 caracteres.
- Máximo 30 caracteres.
- Sin caracteres acentuados.

> [!warning]
>
> Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.

///

/// details | ¿Cómo recuperar mi contraseña olvidada?

Por motivos de seguridad y confidencialidad, no es posible **recuperar** una contraseña. Como se describe en nuestra guía «[Cambiar la contraseña de una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)», es necesario restaurar su contraseña si ya no la conoce.

> [!primary]
>
> Si desea almacenar una contraseña, le recomendamos que utilice un gestor de contraseñas, como **Keepass**.

///

/// details | ¿Cómo limitar la recepción de spam?

Si desea limitar la recepción del spam, puede configurar filtros de correo (llamados «Filtros» en la solución MX Plan) para eliminar o mover estos mensajes de correo a la carpeta de correo no deseado. 
Para ello, desde su [área de cliente de OVHcloud](/links/manager), acceda a la sección `MX Plan` en la columna de la izquierda y seleccione el dominio correspondiente. A continuación, abra la pestaña `Correo electrónico`{.action} y, en la columna `Filtros`, haga clic en el icono de «Gestión de los filtros de la cuenta».

Si la columna `Filtro` no está presente en el área de cliente, deberá crear los filtros mediante reglas de gestión de la bandeja de entrada en el [webmail](/links/web/email). Para más información, consulte la siguiente guía: «[Reglas de la bandeja de entrada en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)».

**Ideas y consejos**:  Si configura un filtro para limitar la recepción de spam, es posible que los correos electrónicos legítimos también sean considerados como spam («falsos positivos»). En ese caso, le recomendamos que abra un tíquet de asistencia en su [área de cliente de OVHcloud](/links/manager). Nuestro equipo de soporte adoptará las medidas necesarias para que estos correos legítimos no sean considerados como spam.

///


/// details | Mi dirección de correo electrónico está llena, no tengo espacio. ¿Qué puedo hacer?

Si ha contratado [una de nuestras soluciones de correo de OVHcloud](/links/web/emails) y tiene una cuenta de correo llena, consulte nuestra guía «[Gestionar el espacio de almacenamiento de una cuenta de correo](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota) ». Esta guía le ayudará a determinar si puede optimizar el espacio existente o si es necesario cambiar de solución de correo para aumentar la capacidad de almacenamiento.

///

/// details | Quiero cambiar de plan de correo para mi dirección, ¿cómo puedo hacerlo conservando su contenido?

¿Quiere cambiar de [producto de correo](/links/web/emails) para disfrutar de más espacio y funcionalidades, pero quiere conservar el contenido de su dirección existente? Para ello, puede consultar la guía de migración correspondiente a sus necesidades:

- [Migrar una dirección de correo MX Plan a una cuenta Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrar las direcciones de correo electrónico de una plataforma de correo de OVHcloud a otra](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
- [Migrar manualmente una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration).
- [Migrar cuentas de correo electrónico mediante OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).
- [Migrar una cuenta de Gmail a una cuenta de correo electrónico de OVHcloud mediante OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail).

///

/// details | ¿La solución Office 365 Pro Plus incluye licencia Skype?

La solución Office 365 Pro Plus no incluye licencia Skype. Solo se incluye Skype for Business.

///

/// details | ¿Cómo transferir sin interrupción del servicio mi correo, sitio web, base de datos y dominio a los servidores de OVHcloud?

Para más información, consulte la guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///


## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).