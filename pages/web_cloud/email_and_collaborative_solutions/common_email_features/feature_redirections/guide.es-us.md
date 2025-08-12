---
title: 'Utilizar los alias y redirecciones de correo'
excerpt: 'Cómo gestionar los alias y redirecciones de correo'
updated: 2025-06-03
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objetivo

En esta guía encontrará toda la información necesaria para configurar las **redirecciones** y **alias** de correo, por ejemplo, para reenviar los mensajes recibidos en una dirección A a una dirección B.

![emails](images/schema-redirect00.png){.thumbnail .w-640}

**Cómo gestionar los alias y redirecciones de correo.**

/// details | ¿Qué es una redirección de correo?

Una redirección permite modificar el trayecto inicial de un email a otra o más direcciones de correo.

Por ejemplo: desea que cuando envíe un mensaje de correo electrónico en **contact@mydomain.ovh**, este también se reenvíe a **john.smith@otherdomain.ovh**. Esto permite que un mensaje de correo electrónico dirigido a **contact@mydomain.ovh** se reenvíe automáticamente a **john.smith@otherdomain.ovh**.

///

/// details | ¿Qué es un alias de correo?

A diferencia de la redirección, la dirección de correo electrónico asociada al alias no es una dirección que se consulte, sino que se trata de una "máscara".

Crear un alias para su dirección de correo le permite comunicar una dirección "máscara" a sus contactos, sin tener que comunicar su dirección personal al remitente. Una dirección de correo electrónico puede tener varios alias.

Por ejemplo: su dirección de correo electrónico es **john.smith@mydomain.ovh** y su alias **information@mydomain.ovh**. A continuación, podrá comunicar a sus contactos la dirección **information@mydomain.ovh** y recibir sus emails en **john.smith@mydomain.ovh**, sin que el remitente tenga conocimiento de **john.smith@mydomain.ovh**.

///

/// details | Redirección y alias en imágenes <a name="diagram"></a>

Haga clic en las fichas siguientes para obtener una explicación ilustrada del funcionamiento de los alias y redirecciones.

- `From`: Significa la dirección del remitente.
- `To`: Significa la dirección del destinatario.
- `Redirect to`: Es la dirección de correo electrónico de redirección que se ha configurado.

> [!tabs]
> **1. La redirección simple**
>>
>> El mensaje se reenvía directamente a la dirección de redirección, el destinatario inicial no recibe el mensaje.
>>
>> ![emails](images/schema-redirect01.png){.thumbnail .w-640}
>>
> **2. La redirección con copia local**
>>
>> El mensaje de correo electrónico se envía tanto al destinatario original como a la dirección de redirección.
>>
>> ![emails](images/schema-redirect02.png){.thumbnail .w-640}
>>
> **3. El alias e-mail**
>>
>> El mensaje de correo electrónico se dirige al alias, que lo reenvía al destinatario en el que se ha configurado el alias. La mención `Received by` designa la dirección de correo electrónico que recibe el mensaje.
>>
>> ![emails](images/schema-redirect03.png){.thumbnail .w-640}
>>

> [!primary]
>
> Tenga en cuenta que es posible configurar una redirección hacia varias direcciones de correo. Sin embargo, esto implica crear de una en una las redirecciones hacia cada destinatario.

///

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Disponer de una solución de correo de OVHcloud previamente configurada, que incluya:
    - **MX Plan** ofrecido con nuestros [planes de hosting](/links/web/hosting).
    - [Exchange](/links/web/emails).

## Procedimiento

**Contenido**

- [Crear una redirección](#redirect)
    - [Desde el área de cliente](#redirect-manager)
    - [Desde el webmail](#redirect-webmail)
- [Eliminar una redirección](#redirect-delete)
- [Crear alias](#alias)
- [Eliminar alias](#alias-delete)

### Crear una redirección <a name="redirect"></a>

#### Desde el área de cliente <a name="redirect-manager"></a>

Actualmente, solo los planes **MX plan** y **Redirect** disponen de una interfaz de gestión de las redirecciones a través del área de cliente de OVHcloud.

##### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action}.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio correspondiente.

En nuestro ejemplo, se trata de una **redirección con copia local** (consulte el [esquema 2](#diagram) al principio de esta guía). Si lo necesita, siga los pasos que se indican a continuación en la pestaña correspondiente a la tecnología webmail utilizada por su MX Plan:

Por defecto, se encuentra en la pestaña `Información general`{.action} de su MX Plan. Haga clic en la pestaña `Correo electrónico`{.action} y seleccione el botón `Gestionar las redirecciones`{.action} en el lado derecho.

![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}

Se mostrará una tabla con las redirecciones activas. A la derecha, haga clic en el botón `Crear una redirección`{.action}.

![emails](images/mxplan-legacy-2.png){.thumbnail .w-640}

En el formulario `Crear una redirección`, complete los siguientes elementos:

- **De la dirección**: Introduzca aquí la dirección de correo electrónico que quiera redirigir.
- **A la dirección**: Introduzca aquí la dirección de destino de su redirección. Puede ser una de sus direcciones de correo electrónico de OVHcloud o una dirección de correo electrónico externa.
- **Seleccione un modo de copia**: Elija si desea:
     - **Conservar una copia del correo en OVHcloud**: Recibir el correo en su dirección principal y la dirección de redirección (ver el [esquema 2](#diagram) al principio de esta guía).
     - **No conservar copia del correo**: Reenviar directamente a la dirección de redirección sin que la dirección principal lo reciba (ver el [esquema 1](#diagram) al principio de esta guía).

Haga clic en `Aceptar`{.action} para confirmar la redirección.

![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}

> [!primary]
>
> Para modificar la dirección de destino o eliminar una redirección, haga clic en `...`{.action}, a la derecha de la redirección correspondiente.

> [!primary]
>
> Al elegir el modo de copia "**Conservar una copia del correo en OVHcloud**", se crea automáticamente una redirección de la dirección de correo hacia ella misma en la lista de redirecciones, materializando esta copia local.
>

#### Desde el webmail <a name="redirect-webmail"></a>

Acceda al [webmail](/links/web/email). Introduzca **la dirección de correo electrónico** y **la contraseña** para conectarse.

![emails](images/webmail.png){.thumbnail .w-640}

La creación de una redirección se hace a través de reglas de bandeja de entrada, también llamadas "filtros" en el webmail. Estas reglas, que se aplican al recibir un email, permiten reenviar o redirigir un email entrante.

Desplácese por las fichas siguientes para configurar la redirección a través de Outlook Web App:

> [!tabs]
> **Etapa 1**
>>
>> Una vez que se haya conectado a su dirección de correo electrónico a través del [webmail](/links/web/email), haga clic en el icono con forma de rueda dentada situado en la esquina superior derecha y seleccione `Opciones`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Desde la ventana **Opciones**, en la columna izquierda, diríjase a la categoría **Procesamiento automático** de la sección **Correo** y haga clic en `Reglas de la bandeja de entrada y de almacenamiento`{.action}.
>>
>> ![emails](images/emails-all-02.png){.thumbnail .w-640}
>>
>> Esta ventana permite gestionar las redirecciones y aplicar filtros a todos los mensajes de correo entrantes.
>>
> **Etapa 3**
>>
>> Una vez en la ventana de gestión de **Reglas de bandeja de entrada**, haga clic en el icono `+`{.action} en la parte superior izquierda.
>>
>> ![emails](images/emails-all-03.png){.thumbnail .w-640}
>>
> **Etapa 4**
>>
>> En la nueva ventana, complete los siguientes campos:
>> - **Nombre**: Indique el nombre de la redirección.
>> - **Cuando llegue el mensaje y cumpla todas estas condiciones**: Si la redirección se aplica a todos los mensajes, seleccione `[Aplicar a todos los mensajes]`{.action}.
>>
>> ![emails](images/emails-all-04.png){.thumbnail .w-640}
>>
> **Etapa 5**
>>
>> A continuación, en la misma ventana:
>>
>> **Realizar todas las operaciones siguientes**: Aquí es donde aplica la redirección. Seleccione `Reenviar, redirigir o enviar`{.action} y luego `Redirigir el mensaje a...`{.action}.
>>
>> ![emails](images/emails-all-05.png){.thumbnail .w-640}
>>
> **Etapa 6**
>>
>> A continuación, introduzca la dirección a la que quiere redirigir el correo electrónico delante de "**Redirigir el mensaje hacia...**" y haga clic en `Guardar`{.action}. Por último, haga clic en `OK`{.action} (icono de disquete) para finalizar la redirección.
>>
>> ![emails](images/emails-all-06.png){.thumbnail .w-640}
>>

> [!primary]
>
> Para aplicar una **redirección simple** (consulte el [esquema 1](#diagram) al principio de esta guía), añada una regla adicional a su **redirección con copia local** desde esta ventana. Haga clic en `Añadir una acción`{.action} (recuadro 1), luego en `Mover, copiar o eliminar`{.action} y, por último, en `eliminar el mensaje`{.action}. Esta regla mueve el mensaje directamente a la papelera de reciclaje después de redirigir el mensaje a la dirección de redirección.
>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}
>

#### Eliminar una redirección <a name="redirect-delete"></a>

##### MX Plan desde el área de cliente <a name="redirect-delete-mxplan"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action} de la columna.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio correspondiente.

A continuación, abra la pestaña correspondiente a la tecnología de correo que utiliza su servicio MX Plan:

- Por defecto, se encuentra en la pestaña `Información general`{.action} de su MX Plan.
- Haga clic en la pestaña `Correo electrónico`{.action} y seleccione el botón `Gestiónar las redirecciones`{.action}.

![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}

- Haga clic en `...`{.action}, a la derecha de la redirección correspondiente y luego en `Eliminar la redirección`{.action}.

![emails](images/mxplan-redirect-delete01.png){.thumbnail .w-640}

##### Outlook Web App (OWA) <a name="redirect-delete-owa"></a>

Acceda al [webmail](/links/web/email). Introduzca **la dirección de correo electrónico** y **la contraseña** para conectarse. En la interfaz del webmail Outlook en la Web, siga los pasos en las pestañas que aparecen a continuación:

> [!tabs]
> **Etapa 1**
>>
>> Una vez conectado a la interfaz del webmail OWA, haga clic en el icono con forma de rueda dentada en la parte superior derecha y seleccione `Options`{.action}.
>>
>> ![emails](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Desde la ventana **Opciones**, en la columna izquierda, diríjase a la categoría **Procesamiento automático** de la sección **Correo** y haga clic en `Reglas de la bandeja de entrada y de almacenamiento`{.action}.
>>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail .w-640}
>>
>> Encontrará la ventana para gestionar las redirecciones y filtros.
>>
> **Etapa 3**
>>
>> Una vez en la ventana Gestión de **Reglas de Bandeja de Entrada**, haga clic en la redirección que desea suprimir y deberá aparecer resaltada. A continuación, haga clic en el icono de papelera.
>>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail .w-640}
>>

### Crear un alias <a name="alias"></a>

Crear un alias para su dirección de correo electrónico le permite comunicar una dirección "máscara" a sus contactos, sin tener que comunicar su dirección de correo electrónico personal al remitente.

Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`. Seleccione el menú en función de su solución de correo:

- **Exchange**: Acceda a la sección `Microsoft`{.action}, haga clic en `Exchange`{.action} y seleccione la plataforma correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}.

- **MX Plan**: Acceda a la sección `MX Plan`{.action}, seleccione la plataforma correspondiente y haga clic en la pestaña `Cuentas de correo`{.action}.

Para añadir un alias a su cuenta de correo, siga los pasos que se indican en cada pestaña:

> [!tabs]
> **Etapa 1**
>>
>> En la tabla que se abre, encontrará una columna `Alias`.
>>
>> ![emails](images/email-alias012.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Haga clic en el botón `...`{.action} y luego en `Configurar alias`{.action} (o `Gestionar alias`{.action}).
>>
>> ![emails](images/email-alias02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> Haga clic en `Añadir un alias`{.action} e introduzca la dirección que haya elegido para el alias y acepte su elección.
>>
>> ![emails](images/email-alias03.png){.thumbnail .w-640}

### Eliminar un alias <a name="alias-delete"></a>

Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`. Seleccione el menú en función de su solución de correo:

- **Exchange**: Acceda a la sección `Microsoft`{.action}, haga clic en `Exchange`{.action} y seleccione la plataforma correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}.

- **MX Plan**: Acceda a la sección `MX Plan`{.action}, seleccione la plataforma correspondiente y haga clic en la pestaña `Cuentas de correo`{.action}.

En la pestaña `Cuentas de correo electrónico`{.action}, haga clic en el botón `...`{.action} a la derecha de la dirección de correo electrónico correspondiente. A continuación, haga clic en `Configurar alias`{.action} (o `Gestionar alias`{.action}).

Haga clic en el botón `...`{.action} situado al final de la línea correspondiente al alias en el menú de gestión de alias. Por último, haga clic en `Eliminar el alias`{.action}

![emails](images/email-alias04.png){.thumbnail .w-640}

## Ir más allá

[Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeros pasos con el servicio Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).