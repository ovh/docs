---
title: 'Crear una dirección de correo electrónico en un MX Plan'
excerpt: 'Cómo crear una dirección de correo electrónico en la solución MX Plan'
updated: 2024-06-13
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

La solución MX Plan le permite disfrutar de direcciones de correo asociadas a un dominio.

**Esta guía explica cómo crear una dirección de correo electrónico en un MX Plan.**

## Requisitos

- Tener una solución MX Plan (incluida en un [plan de hosting de OVHcloud](/links/web/hosting), en un [Alojamiento gratuito 100M](/links/web/domains-free-hosting) o contratada por separado).
- Estar conectado al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

> [!primary]
>
> **Casos particulares**
>
> - En el caso del Alojamiento gratuito 100M, es necesario activar previamente el alojamiento para poder crear una dirección de correo. Puede realizar esta operación desde el [área de cliente de OVHcloud](/links/manager), accediendo al dominio correspondiente.
> - Si tiene un [alojamiento web](/links/web/hosting), deberá activar su solución MX Plan incluida antes de continuar la lectura de esta guía. Para ello, consulte nuestra guía [Activar las direcciones de correo incluidas en su alojamiento web](/pages/web_cloud/web_hosting/activate-email-hosting).

## Procedimiento <a name="instructions"></a>

En función de cuándo haya activado su MX Plan o de si el servicio ha sido migrado recientemente, tendrá una versión diferente. Antes de continuar, compruebe de qué versión dispone. 

Para ello, conéctese al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}. Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente. Siga leyendo esta guía en función de su versión:

|Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![Correo electrónico](images/mxplan-creation-legacy-step1.png){.thumbnail}<br> El nombre del producto aparece en el recuadro Suscripción, en el epígrafe Producto.|![Correo electrónico](images/mxplan-creation-new-step1.png){.thumbnail}<br>El nombre del producto aparece en el recuadro `Resumen`, en el epígrafe `Referencia del servidor`.|
|Siga leyendo esta guía en el apartado [Versión histórica de la solución MX Plan](#mxplanlegacy).|Siga leyendo esta guía en el apartado [Nueva versión de la solución MX Plan](#newmxplan).|

### Nueva versión de la solución MX Plan <a name="newmxplan"></a>

#### Acceder a la gestión del servicio de correo

Si dispone de la nueva versión de la solución MX Plan, la pestaña Información general del servicio debería tener la distribución que se muestra en la imagen de abajo. De lo contrario, [vuelva al apartado anterior](#instructions) y asegúrese de que esta es su versión de la solución.  

![Correo electrónico](images/mxplan-creation-new-step1.png){.thumbnail}

#### Crear una cuenta de correo

Para crear una dirección de correo electrónico, abra la pestaña `Cuentas de correo`{.action}. Se mostrarán las cuentas de correo ya creadas y el número de cuentas que puede crear. Para crear una nueva, haga clic en el botón `Añadir una cuenta`{.action}.

![Correo electrónico](images/mxplan-creation-new-step2.png){.thumbnail}

A continuación, introduzca la información solicitada:

- **Cuenta de correo**: Un nombre temporal se autocompletará en el cuadro de texto. Sustituya por el que quiera para su dirección de correo electrónico (por ejemplo, nombre.apellido). El dominio que formará la dirección de correo completa aparecerá preseleccionado en la lista.
- **Nombre**: Introduzca un nombre.
- **Nombre**: Introduzca los apellidos.
- **Nombre mostrado**: Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.
- **Contraseña**: Introduzca una contraseña y luego confírmela en el último campo. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action}. 

![Correo electrónico](images/mxplan-creation-new-step3.png){.thumbnail}

Compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Aceptar`{.action}. La cuenta que acaba de crear aparecerá en la tabla. Espere a que la cuenta esté disponible.

Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición.

#### Consultar los mensajes de correo

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

La primera vez que se conecte al webmail, deberá seleccionar el idioma de la interfaz y la zona horaria en la que se encuentra. A continuación se abrirá la bandeja de entrada. Para más información, consulte nuestra guía "[Utilizar una dirección de correo desde Outlook Web App (OWA)"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

![Correo electrónico](images/mxplan-creation-new-step5.png){.thumbnail}

Para consultar su correo desde un cliente de correo, consulte la sección "[Consultar una cuenta de correo desde un dispositivo](#configdevices)".

#### Eliminar una cuenta de correo

Desde la nueva versión MX Plan, cuando debe eliminarla, se habla de *reinicialización de la cuenta*.

> [!warning]
>
> Antes de eliminar las cuentas de correo, asegúrese de que no se utilizan. Es posible que necesite guardar estas cuentas. Si lo necesita, consulte la guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), en la que se explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} a la derecha de la cuenta que desea eliminar y luego en `Restaurar la cuenta`{.action}.

![Correo electrónico](images/mxplan-new-reset.png){.thumbnail}

### Versión histórica de la solución MX Plan <a name="mxplanlegacy"></a>

#### Acceder a la gestión del servicio de correo

Si dispone de la versión histórica de la solución MX Plan, la pestaña Información general del servicio debería tener la distribución que se muestra en la imagen de abajo. De lo contrario, [vuelva al apartado anterior](#instructions) y asegúrese de que esta es su versión de la solución. 

![Correo electrónico](images/mxplan-creation-legacy-step1.png){.thumbnail}

#### Crear una cuenta de correo

Para crear una dirección de correo, abra la pestaña `Correo electrónico`{.action}. Se mostrará una tabla con todas las cuentas de correo creadas en la solución MX Plan. Haga clic en el botón `Crear una dirección de correo`{.action}.

![Correo electrónico](images/mxplan-creation-legacy-step2.png){.thumbnail}

A continuación, introduzca la información solicitada:

- **Cuenta de correo electrónico**: El cuadro de texto ya contiene un nombre temporal. Reemplácelo por el nombre que desee para su dirección de correo electrónico (por ejemplo, su nombre.apellido). El dominio que compone la dirección de correo ya está preseleccionado en la lista.

> [!warning]
>
> La elección del nombre de su dirección de correo electrónico debe respetar las siguientes condiciones:
>
> - Mínimo 2 caracteres
> - Máximo 32 caracteres
> - Sin caracteres acentuados
> - Sin caracteres especiales, excepto los siguientes: `.`, `,`, `-` y `_`

- **Nombre**: introduzca un nombre.
- **Apellido**: introduzca un apellido.
- **Nombre mostrado**: indique el nombre que se mostrará como remitente cuando se envíen mensajes desde esta dirección.
- **Contraseña**: establezca una contraseña segura y confírmela. Por motivos de seguridad, no utilice la misma contraseña dos veces. Elija un nombre que no guarde relación con sus datos personales (por ejemplo, no incluya su nombre, apellidos ni fecha de nacimiento). Cámbielo regularmente.

> [!warning]
>
> La elección de la contraseña debe respetar las siguientes condiciones:
>
> - Mínimo 9 caracteres
> - Máximo 30 caracteres
> - Sin caracteres acentuados

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action}. 

![Correo electrónico](images/mxplan-creation-legacy-step3.png){.thumbnail}

Compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Siguiente`{.action}. Por último, haga clic en `Aceptar`{.action} para terminar de crear la dirección de correo y espere a que la cuenta esté disponible.

Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición.

#### Consultar los mensajes de correo 

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

A continuación, podrá consultar su bandeja de entrada. Para más información, consulte nuestra [Guía de uso de Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

![Correo electrónico](images/mxplan-creation-legacy-step4.png){.thumbnail}

Para consultar sus mensajes de correo desde un cliente de correo, consulte la sección [Consultar una cuenta de correo desde un dispositivo](#configdevices).

#### Eliminar una cuenta de correo

> [!warning]
>
> Antes de eliminar las cuentas de correo, asegúrese de que no se utilizan. Es posible que necesite guardar estas cuentas. Si lo necesita, consulte la guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), en la que se explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} a la derecha de la cuenta que desea eliminar y luego en `Eliminar la cuenta`{.action}.

![Correo electrónico](images/mxplan-legacy-reset.png){.thumbnail}

### Consultar una cuenta de correo desde un dispositivo <a name="configdevices"></a>

Puede configurar su dirección de correo en el dispositivo que desee (smartphone o tablet, por ejemplo). Si lo necesita, consulte la guía correspondiente:

> [!tabs]
> **Windows**
>>
>> - [Correo en Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail de macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Correo electrónico para iPhone o iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Otros**
>>
>> - [Interfaz Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

A continuación se indican los parámetros necesarios para configurar una cuenta MX Plan:

> [!alert]
>
> Asegúrese de que la bandera que aparece en la parte superior derecha de esta página de documentación corresponde a su país o región. **Los siguientes parámetros varían según el país o la región**.

> [!tabs]
> **Configuración IMAP (recomendada)**
>>
>> |Información|Descripción|
>> |---|---|
>> |Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
>> |Contraseña|Introduzca la contraseña de la dirección de correo|
>> |Servidor (entrante)|imap.mail.ovh.net **o** ssl0.ovh.net|
>> |Puerto|993|
>> |Tipo de seguridad|SSL/TLS|
>>
> **Configuración POP**
>>
>> |Información|Descripción|
>> |---|---|
>> |Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
>> |Contraseña|Introduzca la contraseña de la dirección de correo|
>> |Servidor (entrante)|pop.mail.ovh.net **o** ssl0.ovh.net|
>> |Puerto|995|
>> |Tipo de seguridad|SSL/TLS|
>>
> **Configuración SMTP**
>>
>> |Información|Descripción|
>> |---|---|
>> |Nombre de usuario|Introduzca la dirección de correo electrónico **completa**|
>> |Contraseña|Introduzca la contraseña de la dirección de correo|
>> |Servidor (saliente)|smtp.mail.ovh.net **o** ssl0.ovh.net|
>> |Puerto|465|
>> |Tipo de seguridad|SSL/TLS|
>>

> [!warning]
>
> Si necesita ayuda para configurar la dirección de correo en su dispositivo, consulte nuestras [guías de configuración](/products/web-cloud-email-collaborative-solutions-mx-plan) o contacte con el editor de la aplicación que utilice.
>

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.