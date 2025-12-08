---
title: 'Migrar una cuenta de correo con OVH Mail Migrator'
excerpt: 'Cómo utilizar OVH Mail Migrator para migrar una cuenta de correo electrónico'
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Objetivo

[OVH Mail Migrator](/links/web/omm) es una herramienta creada por OVHcloud que responde a la necesidad de reversibilidad. Permite migrar sus cuentas de correo electrónico a sus direcciones de correo electrónico de OVHcloud o a un servicio de correo electrónico externo. El proceso admite diferentes tipos de contenido, como correos electrónicos, contactos, calendarios y tareas, siempre que estos sean compatibles con sus direcciones de correo electrónico.

**Aprenda a migrar sus cuentas de correo electrónico a OVHcloud con nuestra herramienta OVH Mail Migrator.**

## Requisitos

- Disponer de un servicio de correo electrónico externo o en OVHcloud, como una oferta [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-mail Pro](/links/web/email-pro) o MX Plan (a través de la oferta MX Plan sola o incluida en una oferta de [alojamiento web OVHcloud](/links/web/hosting)).
- Disponer de las credenciales relacionadas con las cuentas de correo electrónico que desea migrar (las cuentas de correo electrónico de origen).
- Disponer de las credenciales relacionadas con las cuentas de correo electrónico de destino.

## Procedimiento

Para acceder a OMM, vaya a la dirección <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Crear un proyecto de migración <a name="create-project"></a>

Antes de iniciar una migración, es necesario crear un proyecto. Este proyecto le permitirá iniciar una o varias migraciones y seguir su progreso.

Haga clic en `New migration`{.action} para comenzar la creación de su proyecto:

**Project contact email**: Introduzca una dirección de correo electrónico que servirá para recibir las credenciales y las notificaciones de seguimiento de sus migraciones. No se recomienda introducir una de las direcciones de correo electrónico que se migrarán en su proyecto.
***Project password**: Introduzca una contraseña que servirá para conectarse a su proyecto. Debe contener al menos 10 caracteres, incluir al menos 1 carácter especial, 1 número, 1 mayúscula y 1 minúscula.

Haga clic en `Create my project`{.action} para iniciar la creación del proyecto.

En la dirección de correo electrónico de contacto del proyecto, recibirá un correo electrónico de confirmación que contiene el identificador único del proyecto y un enlace para acceder a él.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> El proyecto de migración y los datos asociados a él se eliminarán automáticamente después de 60 días de inactividad.

### Crear una migración <a name="create-migration"></a>

Una vez que su proyecto esté creado, inicie sesión en él desde la página de inicio de [OMM](/links/web/omm):

- Haga clic en `Track a migration`{.action}.
- Introduzca el `Project ID` recibido por correo electrónico.
- Introduzca la `Project password` que definió al crearlo.
- Haga clic en `Connect to project`{.action} para terminar.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Ahora está en la página de inicio del proyecto, desde la cual podrá iniciar su primera migración.

- Haga clic en `New migration`{.action} en la esquina superior izquierda de la tabla.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Se abre una nueva página en la que definirá las informaciones de conexión de la cuenta de origen y de la cuenta de destino para poder programar o iniciar directamente esta migración. Para recordar, el contenido de la **source account** se migrará a la **destination account**.

Antes de comenzar su migración, es importante conocer bien los 3 tipos de cuentas que se pueden migrar y hacia dónde puede migrar:

- **OVHcloud** : se recomienda la `Auto detection` si debe migrar una cuenta alojada en cualquier oferta de correo electrónico de OVHcloud. Si posee un gran número de cuentas de correo electrónico de OVHcloud, elija entre las ofertas `MX plan`, `E-mail Pro`, `Exchange` y `Zimbra`. Se le pedirá que se conecte a la cuenta de OVHcloud asociada a la oferta asociada a la migración. Para más información, consulte la sección « [Migrar mediante una conexión a la cuenta cliente de OVHcloud](#sso-migration) ».
- **Others**: se refieren a servicios de correo electrónico contratados fuera de OVHcloud, encontrará una lista no exhaustiva de servicios de correo electrónico compatibles con OMM. Si el tipo de servicio de su cuenta de correo electrónico no está en la lista, utilice los protocolos `Imap` o `Pop`, que son compatibles con la mayoría de los servidores de correo electrónico.
- **Importing files**: Es posible migrar el contenido de archivos PST, ICS, CSV y Xml Rules a través de OMM a una cuenta de correo electrónico de destino. Cuando se selecciona esta función, basta con arrastrar y soltar su documento en la zona correspondiente o navegar por su terminal a través del botón `Browse your files`{.action}.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Complete las informaciones según el tipo de cuenta:

- **Source account**
    - **Account type**: seleccione el tipo de cuenta de origen.
    - **Email**: introduzca la dirección de correo electrónico de la cuenta de origen.
    - **Password**: introduzca la contraseña de la cuenta de origen.
    - **Server URL** / **Server domain** *(según el tipo)*: introduzca el nombre de host del servidor de correo electrónico asociado a la cuenta de correo electrónico que desea migrar.
    - **OVHcloud Account ID** *(según el tipo)*: este campo se rellena automáticamente cuando está conectado a una cuenta de OVHcloud. Para más información, consulte la sección « [Migrar mediante una conexión a la cuenta cliente de OVHcloud](#sso-migration) ».
    - **Organization** *(según el tipo)*: seleccione la organización asociada a la cuenta de correo electrónico de origen.
    - **Platform** *(según el tipo)*: seleccione la plataforma asociada a la cuenta de correo electrónico de origen.
    - **Service** *(según el tipo)*: seleccione el servicio asociado a la cuenta de correo electrónico de origen.
    - **Advanced settings** > **Delegation account ID** *(según el tipo)*: Cuando la cuenta de correo electrónico que migra es una cuenta compartida, debe introducir la dirección de correo electrónico de la cuenta administradora en esta cuenta de delegación.
- **Destination account**
    - **Account type**: seleccione el tipo de cuenta de destino.
    - **Email**: introduzca la dirección de correo electrónico de destino.
    - **Password**: introduzca la contraseña asociada a la cuenta de destino.
    - **Server URL** / **Server domain** *(según el tipo)*: introduzca el nombre de host del servidor de correo electrónico asociado a la cuenta de correo electrónico de destino.
    - **OVHcloud Account ID** *(según el tipo)*: este campo se rellena automáticamente cuando está conectado a una cuenta de OVHcloud. Para más información, consulte la sección « [Migrar mediante una conexión a la cuenta cliente de OVHcloud](#sso-migration) ».
    - **Organization** *(según el tipo)*: seleccione la organización asociada a la cuenta de correo electrónico de destino.
    - **Platform** *(según el tipo)*: seleccione la plataforma asociada a la cuenta de correo electrónico de destino.
    - **Service** *(según el tipo)*: seleccione el servicio asociado a la cuenta de correo electrónico de destino.
    - **Advanced settings** > **Delegation account ID** *(según el tipo)*: Cuando la cuenta de correo electrónico de destino es una cuenta compartida, debe introducir la dirección de correo electrónico de la cuenta administradora en esta cuenta de delegación.
- **Start of transfer**: puede iniciar la migración `inmediatamente` o marcar `Más tarde` para posponer la migración. La migración pospuesta le permite iniciarla automáticamente en una fecha y hora que usted defina.
- **Data to transfer**: Según el tipo de cuenta de correo electrónico que migre y la cuenta de destino, esta sección le indicará los diferentes tipos de datos que se admiten durante la migración. Esto depende de la cuenta de origen y de la cuenta de destino.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Si migra una cuenta que dispone de funcionalidades que la cuenta de destino no posee, será necesario que usted guarde por sus propios medios los elementos que no podrán ser migrados por OMM. Para ayudarle, consulte nuestro guía « [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) ».

Una vez completados los parámetros de las cuentas de origen y de destino, haga clic en:

- `Migrate and add another account`{.action} si desea añadir otra migración a la lista de su proyecto 
- `Migrate my account`{.action} para iniciar la migración configurada y volver a la página de inicio del proyecto.

### Migrar mediante una conexión a la cuenta cliente de OVHcloud <a name="sso-migration"></a>

Durante una migración hacia o desde una cuenta de OVHcloud, es posible elegir entre una de nuestras ofertas `MX plan`, `E-mail Pro`, `Exchange` y `Zimbra`.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Cuando seleccione una de estas ofertas, siga los pasos siguientes:

> [!tabs]
> **Paso 1**
>>
>> - Haga clic en `Login`{.action} para mostrar la ventana de conexión al espacio cliente de OVHcloud.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Paso 2**
>>
>> Conéctese a la cuenta cliente de OVHcloud:
>>
>> - Introduzca el identificador o la dirección de correo electrónico asociada a la cuenta de OVHcloud, introduzca la contraseña asociada y haga clic en `Login`{.action}.
>> - Haga clic en `Continue`{.action} si ya estaba identificado.
>>
>> > [!primary]
>> >
>> > La cuenta cliente de OVHcloud debe estar asociada a la oferta de correo electrónico que se somete a migración.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Paso 3**
>>
>> - Se abre una nueva ventana, esta le permite autorizar a OMM para acceder a las funciones de su espacio cliente listando las ofertas y cuentas de correo electrónico presentes. Por defecto, la validez (Validity) de estos derechos es de 24h (1day). Defina la temporalidad que le convenga, y haga clic en `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Paso 4**
>>
>> - Ahora podrá seleccionar sus servicios y cuentas mediante menús desplegables, lo que facilita la búsqueda de los elementos y evita errores de escritura. Sin embargo, será necesario introducir la contraseña asociada a la cuenta de correo electrónico seleccionada.
>>
>> Ejemplo con un servicio Zimbra:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> Es posible desconectar los accesos en curso desde un espacio cliente de OVHcloud haciendo clic en `Log out`{.action}, y bajo la mención `OVHcloud account ID` haga clic en `Log out the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Seguir un proyecto de migración <a name="follow-migration"></a>

Existen dos maneras de acceder al seguimiento del proyecto de migración:

- Desde el correo electrónico recibido durante la creación de su proyecto. Encontrará un enlace que le permite acceder a la página de conexión del proyecto con el `Project ID` prellenado, solo el `Project password` debe introducirse.
- Desde la página de inicio de OMM, haga clic en `Track a migration`{.action}. Introduzca su `Project ID` y su `Project password`.

Haga clic a continuación en `Conectarse al proyecto`{.action} para acceder a la página de inicio del proyecto y seguir sus migraciones.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Desde esta página, encontrará la lista de migraciones en curso o programadas. El estado del proyecto también se muestra a la derecha.

Haga clic en el botón `⋮`{.action} a la derecha de la línea de una migración para mostrar las opciones:

- `See more details`{.action} : Se le redirige a una página que le permite seguir el progreso de una migración o leer el informe una vez que haya terminado.
- `Cancel migration`{.action} : Permite cancelar la migración en curso. Los elementos ya migrados se conservarán en la cuenta de destino.
- `Delete migration data (GDPR)`{.action} : Esta opción desencadena la eliminación de todos los datos relacionados con la migración de la cuenta. Sin embargo, conservará la información sobre los eventos ocurridos durante la migración.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Ejemplo de seguimiento de migración:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Si ocurre un error durante la migración, se le proporciona un enlace al registro de errores en la ventana `See more details`{.action}.

## Más información

[Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[Migrar una dirección de correo electrónico MX Plan a una cuenta E-mail Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con los [socios de OVHcloud](/links/partner).

Si desea beneficiarse de una asistencia en el uso y la configuración de sus soluciones OVHcloud, le proponemos consultar nuestras diferentes [ofertas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).