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
    - **MX Plan** ofrecido con nuestros [planes de hosting](/links/web/hosting) o incluido en un [alojamiento gratuito 100M](/links/web/domains-free-hosting).
    - [Exchange](/links/web/emails).
    - [Email Pro](/links/web/email-pro).
    - [Zimbra](/links/web/emails-zimbra).

## Procedimiento

Esta guía explica todas nuestras soluciones de correo. En función del producto, la gestión de los alias y las redirecciones puede realizarse desde el área de cliente de OVHcloud o desde el webmail. Para mayor claridad, mencionamos los tipos de ofertas de correo electrónico afectados en cada capítulo de esta guía. Estos son los diferentes tipos de soluciones de correo de OVHcloud:

- **MX Plan Roundcube**: Correspondiente a la solución MX Plan que utiliza el webmail Roundcube.
- **MX Plan Zimbra**: Correspondiente a la solución MX Plan que utiliza el webmail Zimbra.
- **MX Plan OWA**: Correspondiente al MX Plan que utiliza el webmail Outlook Web App (OWA).
- **Exchange**: Aplicable a los productos **Hosted**, **Private** y **Dedicated** Exchange que utiliza el webmail Outlook Web App (OWA).
- **Email Pro**: Solución de correo basada en Exchange que utiliza Outlook Web App (OWA).
- **Zimbra**: Oferta dedicada que utiliza el webmail Zimbra.
- **Redirect**: Esta oferta gratuita está disponible automáticamente si dispone de un dominio en su área de cliente sin una oferta de correo asociada. Permite crear redirecciones de correo.

> [!primary]
>
> La tecnología de correo electrónico de su MX Plan puede variar en función de la fecha de activación de su servicio o de si se ha producido una migración reciente. Esta tecnología se distingue especialmente por la interfaz de su webmail. Para identificarlo desde el área de cliente, siga estos pasos:
>
> 1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
> 1. Acceda a la sección `Web Cloud`{.action} de la página.
> 1. Haga clic en `MX Plan`{.action}.
> 1. Seleccione el dominio correspondiente.
> 1. La pestaña `Información general`{.action} está seleccionada por defecto.
> 1. Revise la tecnología utilizada bajo el epígrafe **Webmail** en el recuadro `Suscripción`.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-640}
>

**Contenido**

- [Crear una redirección](#redirect)
    - [Desde el área de cliente](#redirect-manager)
        - [MX Plan / redirect](#redirect-manager-mxplan)
    - [Desde el webmail](#redirect-webmail)
        - [Outlook Web App (OWA)](#redirect-webmail-owa)
        - [Zimbra](#redirect-webmail-zimbra)
- [Eliminar una redirección](#redirect-delete)
    - [MX Plan desde el área de cliente](#redirect-delete)
    - [Outlook Web App (OWA)](#redirect-delete-owa)
    - [Zimbra](#redirect-delete-zimbra)
- [Crear alias](#alias)
    - [Exchange / Email Pro / MX Plan](#alias-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-mxplan-roundcube)
    - [Zimbra](#alias-mxplan-roundcube)
- [Eliminar alias](#alias-delete)
    - [Exchange / Email Pro / MX Plan](#alias-delete-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-delete-mxplan-roundcube)
    - [Zimbra](#alias-delete-zimbra)

### Crear una redirección <a name="redirect"></a>

#### Desde el área de cliente <a name="redirect-manager"></a>

Actualmente, solo los planes **MX plan** y **Redirect** disponen de una interfaz de gestión de las redirecciones a través del área de cliente de OVHcloud.

##### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action}.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio correspondiente.

En nuestro ejemplo, se trata de una **redirección con copia local** (consulte el [esquema 2](#diagram) al principio de esta guía). Si lo necesita, siga los pasos que se indican a continuación en la pestaña correspondiente a la tecnología webmail utilizada por su MX Plan:

> [!tabs]
> **MX Plan Roundcube / MX Plan Outlook Web App / Redirect**
>>
>> Por defecto, se encuentra en la pestaña `Información general`{.action} de su MX Plan. Haga clic en la pestaña `Correo electrónico`{.action} y seleccione el botón `Gestionar las redirecciones`{.action} en el lado derecho.
>>
>> ![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> Se mostrará una tabla con las redirecciones activas. A la derecha, haga clic en el botón `Crear una redirección`{.action}.
>>
>> ![emails](images/mxplan-legacy-2.png){.thumbnail .w-640}
>>
>> En el formulario `Crear una redirección`, complete los siguientes elementos:
>>
>> - **De la dirección**: Introduzca aquí la dirección de correo electrónico que quiera redirigir.
>> - **A la dirección**: Introduzca aquí la dirección de destino de su redirección. Puede ser una de sus direcciones de correo electrónico de OVHcloud o una dirección de correo electrónico externa.
>> - **Seleccione un modo de copia**: Elija si desea:
>>      - **Conservar una copia del correo en OVHcloud**: Recibir el correo en su dirección principal y la dirección de redirección (ver el [esquema 2](#diagram) al principio de esta guía).
>>      - **No conservar copia del correo**: Reenviar directamente a la dirección de redirección sin que la dirección principal lo reciba (ver el [esquema 1](#diagram) al principio de esta guía).
>>
>> Haga clic en `Aceptar`{.action} para confirmar la redirección.
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>
>> > [!primary]
>> >
>> > Para modificar la dirección de destino o eliminar una redirección, haga clic en `...`{.action}, a la derecha de la redirección correspondiente.
>>
> **MX Plan Zimbra**
>>
>> Por defecto, se encuentra en la pestaña `Información general`{.action} de su MX Plan. Haga clic en la pestaña `Redirecciones`{.action}.
>>
>> Se mostrará una tabla con las redirecciones activas. A la derecha, haga clic en el botón `Añadir una redirección`{.action}.
>>
>> ![emails](images/mxplan-zimbra-1.png){.thumbnail .w-640}
>>
>> En el formulario `Crear una redirección`, complete los siguientes elementos:
>>
>> - **De la dirección**: Introduzca aquí la dirección de correo electrónico que quiera redirigir.
>> - **A la dirección**: Introduzca aquí la dirección de destino de su redirección. Puede ser una de sus direcciones de correo electrónico de OVHcloud o una dirección de correo electrónico externa.
>> - **Seleccione un modo de copia**: Elija si desea:
>>      - **Conservar una copia del correo en OVHcloud**: Recibir el correo en su dirección principal y la dirección de redirección (ver el [esquema 2](#diagram) al principio de esta guía).
>>      - **No conservar copia del correo**: Reenviar directamente a la dirección de redirección sin que la dirección principal lo reciba (ver el [esquema 1](#diagram) al principio de esta guía).
>>
>> Haga clic en `Aceptar`{.action} para confirmar la redirección.
>>
>> ![emails](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>

> [!primary]
>
> Al elegir el modo de copia "**Conservar una copia del correo en OVHcloud**", se crea automáticamente una redirección de la dirección de correo hacia ella misma en la lista de redirecciones, materializando esta copia local.
>

#### Desde el webmail <a name="redirect-webmail"></a>

Acceda al [webmail](/links/web/email). Introduzca **la dirección de correo electrónico** y **la contraseña** para conectarse.

![emails](images/webmail.png){.thumbnail .w-640}

La creación de una redirección se hace a través de reglas de bandeja de entrada, también llamadas "filtros" en el webmail. Estas reglas, que se aplican al recibir un email, permiten reenviar o redirigir un email entrante.

##### Outlook Web App (OWA) <a name="redirect-webmail-owa"></a>

> [!success]
>
> Este capítulo cubre los siguientes productos:
>
> - **MX Plan OWA**.
> - **Exchange**.
> - **Email Pro**.
>

Outlook Web App es una interfaz utilizada para nuestras ofertas **Exchange**, **Email Pro** y una parte de las cuentas **MX Plan**.

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

##### Zimbra <a name="redirect-webmail-zimbra"></a>

> [!success]
>
> Este capítulo se refiere a los siguientes productos:
>
> - **MX Plan** con la mención zimbra para el webmail.
> - **Zimbra**.
>

Para redirigir los emails de su cuenta Zimbra hacia otra dirección de correo, vamos a aplicar una regla de transferencia.

> [!primary]
>
> En el ejemplo siguiente, hemos decidido redirigir todos los mensajes entrantes a otra dirección de correo electrónico. Para entender el ejemplo en las capturas de pantalla, hemos iniciado sesión en **zimbra@mydomain.ovh** y queremos redirigir los correos electrónicos de esta cuenta a **address@example.com**.
>

Siga los pasos que se indican a continuación haciendo clic en las fichas para realizar la redirección:

> [!tabs]
> **Etapa 1**
>>
>> Haga clic en el botón &#9881; en la esquina superior derecha de su ventana de webmail y seleccione `Parámetros`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Haga clic en la sección `Filtros`{.action} en la ventana de configuración y, a continuación, haga clic en el botón `Añadir un filtro`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> - En primer lugar, haga clic en <u>Modo avanzado</u> en la parte superior derecha para aplicar esta regla.
>> - Asigne un nombre al filtro en el cuadro `Nombre del filtro`.
>> - Deje el menú desplegable en `todas` en la frase "Si un mensaje entrante cumple ... estas condiciones".
>> - En el primer menú desplegable de reglas, seleccione `A` (To), deje `contiene` (contains) e introduzca la dirección de correo electrónico en la que ha iniciado sesión en el cuadro de la derecha.
>> - Bajo el epígrafe "Entonces" (Then), seleccione `Reenviar a` (Forward to) en el menú desplegable e introduzca la dirección de correo electrónico de destino.
>> - Haga clic en `+ Añadir acción`{.action} (Add an action) más abajo y seleccione `Mover a recepción` (Keep in Inbox).
>> - Haga clic en `Guardar`{.action} en la ventana de su filtro y también en la ventana de configuración.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-640}
>>

Para más información sobre el uso del webmail Zimbra, consulte nuestra guía "[Utilizar el webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

#### Eliminar una redirección <a name="redirect-delete"></a>

##### MX Plan desde el área de cliente <a name="redirect-delete-mxplan"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action} de la columna.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio correspondiente.

A continuación, abra la pestaña correspondiente a la tecnología de correo que utiliza su servicio MX Plan:

> [!tabs]
> **MX Plan Roundcube / MX Plan OWA / Redirect**
>>
>> - Por defecto, se encuentra en la pestaña `Información general`{.action} de su MX Plan.
>> - Haga clic en la pestaña `Correo electrónico`{.action} y seleccione el botón `Gestiónar las redirecciones`{.action}.
>>
>>    ![emails](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> - Haga clic en `...`{.action}, a la derecha de la redirección correspondiente y luego en `Eliminar la redirección`{.action}.
>>
>>    ![emails](images/mxplan-redirect-delete01.png){.thumbnail .w-640}
>>
> **MX Plan Zimbra**
>>
>> - Por defecto, se encuentra en la pestaña `Información general`{.action} de su MX Plan.
>> - Haga clic en la pestaña `Redirecciones`{.action}.
>> - Haga clic en `...`{.action}, a la derecha de la redirección correspondiente y luego en `Eliminar la redirección`{.action}.
>>
>>    ![emails](images/mxplan-redirect-delete02.png){.thumbnail .w-640}
>>

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

##### Zimbra <a name="redirect-delete-zimbra"></a>

Acceda al [webmail](/links/web/email). Introduzca **la dirección de correo electrónico** y **la contraseña** para conectarse. Siga los pasos que se indican en las fichas que aparecen a continuación:

> [!tabs]
> **Etapa 1**
>>
>> Una vez conectado a la interfaz del webmail Zimbra, haga clic en el botón &#9881; en la parte superior derecha de su ventana de webmail y seleccione `Parámetros`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Haga clic en la sección `Filtros`{.action} en la ventana de configuración.
>>
>> ![zimbra](images/zimbra_redirect-del-01.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> Haga clic en el botón `...`{.action} a la derecha del filtro correspondiente y seleccione `Eliminar`{.action}.
>>
>> ![zimbra](images/zimbra_redirect-del-02.png){.thumbnail .w-640}
>>

### Crear un alias <a name="alias"></a>

Crear un alias para su dirección de correo electrónico le permite comunicar una dirección "máscara" a sus contactos, sin tener que comunicar su dirección de correo electrónico personal al remitente.

#### Exchange / Email Pro / MX Plan <a name="alias-exchange-emp-mxplan"></a>

Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`. Seleccione el menú en función de su solución de correo:

- **Exchange**: Acceda a la sección `Microsoft`{.action}, haga clic en `Exchange`{.action} y seleccione la plataforma correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}.

- **Email Pro**: Acceda a la sección `Email Pro`{.action} de, seleccione la plataforma correspondiente y abra la pestaña `Cuentas de correo`{.action}.

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

#### MX Plan Roundcube <a name="alias-mxplan-roundcube"></a>

Para crear un alias en una cuenta MX Plan Roundcube, debe hacerlo de la misma manera que una redirección. Solo tiene que determinar una dirección de correo electrónico que no exista en su nombre de dominio y apuntar a una dirección existente. Siga el capítulo [MX Plan / MX redirect](#redirect-manager-mxplan) en el apartado "Crear una redirección" de esta guía.

#### Zimbra <a name="alias-mxplan-roundcube"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action}.
1. Haga clic en `Zimbra Mail`{.action}.
1. Haga clic en la pestaña `Cuentas de correo electrónico`{.action} del servicio Zimbra.

> [!tabs]
> **Etapa 1**
>>
>> - Haga clic en el botón `⁝`{.action} a la derecha de la cuenta de correo correspondiente.
>> - Haga clic en `Modificar`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Se abrirá la ventana de configuración de su cuenta de correo, haciendo clic en la pestaña `Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> La siguiente ventana contiene la lista de alias que puede asociar a la cuenta correspondiente. Haga clic en el botón `Crear un Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>
> **Etapa 4**
>>
>> Indique la dirección del alias y seleccione uno de los dominios asociados al servicio Zimbra.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-640}
>>

### Eliminar un alias <a name="alias-delete"></a>

#### Exchange / Email Pro / MX Plan <a name="alias-delete-exchange-emp-mxplan"></a>

Conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`. Seleccione el menú en función de su solución de correo:

- **Exchange**: Acceda a la sección `Microsoft`{.action}, haga clic en `Exchange`{.action} y seleccione la plataforma correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}.

- **Email Pro**: Acceda a la sección `Email Pro`{.action}, seleccione la plataforma correspondiente y abra la pestaña `Cuentas de correo`{.action}.

- **MX Plan**: Acceda a la sección `MX Plan`{.action}, seleccione la plataforma correspondiente y haga clic en la pestaña `Cuentas de correo`{.action}.

En la pestaña `Cuentas de correo electrónico`{.action}, haga clic en el botón `...`{.action} a la derecha de la dirección de correo electrónico correspondiente. A continuación, haga clic en `Configurar alias`{.action} (o `Gestionar alias`{.action}).

Haga clic en el botón `...`{.action} situado al final de la línea correspondiente al alias en el menú de gestión de alias. Por último, haga clic en `Eliminar el alias`{.action}

![emails](images/email-alias04.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-delete-mxplan-roundcube"></a>

Para eliminar un alias de una cuenta MX Plan Roundcube, debe hacerlo de la misma manera que una redirección. Para ello, deberá gestionar las redirecciones de su servicio MX Plan.

En la pestaña `Correo electrónico`{.action}, haga clic en `Gestión de las redirecciones`{.action} a la derecha de la ventana.

Haga clic en el botón `...`{.action} a la derecha de la redirección correspondiente y luego en `Eliminar la redirección`{.action}.

> [!warning]
>
> No es posible modificar una redirección o un alias. Debe quitarla y volver a crearla.
>

![emails](images/email-del-legacy-redirect01.png){.thumbnail .w-640}

#### Zimbra <a name="alias-delete-zimbra"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda a la sección `Web Cloud`{.action}.
1. Haga clic en `Zimbra Mail`{.action}.
1. Haga clic en la pestaña `Cuentas de correo electrónico`{.action} del servicio Zimbra.

> [!tabs]
> **Etapa 1**
>>
>> - Haga clic en el botón `⁝`{.action} a la derecha de la cuenta de correo correspondiente.
>> - Haga clic en `Modificar`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Etapa 2**
>>
>> Se abrirá la ventana de configuración de su cuenta de correo, haciendo clic en la pestaña `Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Etapa 3**
>>
>> La siguiente ventana contiene la lista de alias que puede asociar a la cuenta correspondiente. Haga clic en el botón `Crear un Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>

## Ir más allá

[Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeros pasos con el servicio Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeros pasos con el servicio Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Primeros pasos con la solución Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Primeros pasos con Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).