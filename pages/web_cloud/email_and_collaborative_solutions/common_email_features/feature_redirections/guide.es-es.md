---
title: 'Utilizar los alias y redirecciones de correo'
excerpt: 'Cómo gestionar los alias y redirecciones de correo'
updated: 2024-06-10
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Objetivo

En esta guía encontrará toda la información necesaria para configurar las **redirecciones** y **alias** de correo, por ejemplo, para reenviar los mensajes recibidos en una dirección A a una dirección B.

![emails](images/schema-redirect00.png){.thumbnail}

**Cómo gestionar los alias y redirecciones de correo.**

### ¿Qué es una redirección de correo?

Una redirección permite modificar el trayecto inicial de un email a otra o más direcciones de correo.

Por ejemplo, desea que cuando envíe un mensaje de correo electrónico en **contact@mydomain.ovh**, este también se reenvíe a **john.smith@otherdomain.ovh**. Esto permite que un mensaje de correo electrónico dirigido a **contact@mydomain.ovh** se reenvíe automáticamente a **john.smith@otherdomain.ovh**.

### ¿Qué es un alias de correo?

A diferencia de la redirección, la dirección de correo electrónico asociada al alias no es una dirección que se consulte, sino que se trata de una "máscara".

Crear un alias para su dirección de correo le permite comunicar una dirección "máscara" a sus contactos, sin tener que comunicar su dirección personal al remitente. Una dirección de correo electrónico puede tener varios alias.

Por ejemplo, su dirección de correo electrónico es **john.smith@mydomain.ovh** y su alias **information@mydomain.ovh**. A continuación, podrá comunicar a sus contactos la dirección **information@mydomain.ovh** y recibir sus emails en **john.smith@mydomain.ovh**, sin que el remitente tenga conocimiento de **john.smith@mydomain.ovh**.

### Redirección y alias en imágenes <a name="diagram"></a>

Haga clic en las fichas siguientes para obtener una explicación ilustrada del funcionamiento de los alias y redirecciones.

- `From` significa la dirección del remitente
- `To` significa la dirección del destinatario
- `Redirect to` es la dirección de correo electrónico de redirección que se ha configurado.

> [!tabs]
> **1. La redirección simple**
>>
>> El mensaje se reenvía directamente a la dirección de redirección, el destinatario inicial no recibe el mensaje.<br><br>
>> ![emails](images/schema-redirect01.png){.thumbnail}
>>
> **2. La redirección con copia local**
>>
>> El mensaje de correo electrónico se envía tanto al destinatario original como a la dirección de redirección.<br><br>
>> ![emails](images/schema-redirect02.png){.thumbnail}
>>
> **3. El alias e-mail**
>>
>> El mensaje de correo electrónico se dirige al alias, que lo reenvía al destinatario en el que se ha configurado el alias. La mención `Received by` designa la dirección de correo electrónico que recibe el mensaje.<br><br>
>> ![emails](images/schema-redirect03.png){.thumbnail}
>>

> [!primary]
>
> Tenga en cuenta que es posible configurar una redirección hacia varias direcciones de correo. Sin embargo, esto implica crear de una en una las redirecciones hacia cada destinatario.

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).
- Disponer de una solución de correo electrónico de OVHcloud previamente configurada (**MX Plan**, incluida en nuestros [planes de hosting](https://www.ovhcloud.com/es-es/web-hosting/), incluida en un [Alojamiento gratuito 100M](https://www.ovhcloud.com/es-es/domains/free-web-hosting/) o contratada por separado como solución autónoma, como [Hosted Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/) o [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/)).

## Procedimiento

> [!warning]
>
> Los capítulos "[crear una redirección](#redirect)" y "[crear un alias](#alias)" se refieren al conjunto de nuestros productos de correo de OVHcloud, **excepto**:
>
> - Si tiene la versión histórica de la solución MX plan, puede comprobarla en el siguiente cuadro.
> - Si tiene un dominio registrado con OVHcloud y no tiene ningún servicio de correo asociado.
> 
> Para estas dos excepciones, solo es posible la redirección. Le invitamos a consultar directamente el capítulo "[Crear una redirección o un alias en un MX Plan histórico o un dominio sin servicio de correo](#mxplanlegacy)".
> 

>
> En función de la fecha de activación de su MX plan o si [esta ha sido migrada recientemente](https://www.ovhcloud.com/es-es/web-hosting/mxplan-migration/), es posible que disponga de la versión histórica o de la nueva versión del producto. Antes de continuar, es necesario identificarla.<br>
>
> Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}. Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente. Siga leyendo esta guía en función de su versión:<br>
>
> |Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
> |---|---|
> |![email](images/mxplan-starter-legacy.png){.thumbnail}<br> Encontrar la oferta en el recuadro "Suscripción"|![email](images/mxplan-starter-new.png){.thumbnail}<br>Consulte la `referencia del servidor` en el recuadro "Resumen"|
> |Continúe leyendo esta guía en el apartado "[Versión histórica de la solución MX Plan](#mxplanlegacy)".|Continúe leyendo esta guía en el apartado [Crear una redirección](#redirect) o [Crear un alias.](#alias)|

### Crear una redirección <a name="redirect"></a>

Las redirecciones no se gestionan desde el área de cliente, sino directamente desde el webmail de la dirección de correo electrónico correspondiente.

Acceda a la dirección del [webmail](/links/web/email). Introduzca **la dirección de correo** y la **contraseña** para conectarse.

![correo electrónico](images/webmail.png){.thumbnail}

En nuestro ejemplo, se muestra una **redirección con copia local** (véase el [esquema 2](#diagram) al inicio de esta guía). Si esto es lo que necesita, haga clic en `OK`{.action} (con el icono de disquete) en la parte superior izquierda y se aplicará la regla. De lo contrario, vaya al paso siguiente.

Siga los pasos que se describen haciendo clic en cada pestaña:

> [!tabs]
> **Etapa 1**
>>
>> Una vez que se haya conectado a su dirección de correo electrónico a través del [webmail](/links/web/email), haga clic en la rueda dentada en la parte superior derecha y, seguidamente, en el menú `Opciones`{.action}.<br><br>
>> ![emails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Etapa 2**
>> Desde la ventana **Opciones**, en la columna de la izquierda, diríjase a la categoría de **Tratamiento automático** en la sección de **Correo** y haga clic en `Reglas de bandeja de entrada y de almacenamiento`{.action}. <br><br>
>> ![correo electrónico](images/emails-all-02.png){.thumbnail}<br><br>
>> Esta ventana permite gestionar las redirecciones y aplicar filtros a todos los mensajes de correo entrante.<br>
>>
> **Etapa 3**
>>
>> Una vez en la ventana de gestión de las **Reglas de bandeja de entrada**, haga clic sobre el icono `+`{.action} en la parte superior izquierda.<br><br>
>> ![correo electrónico](images/emails-all-03.png){.thumbnail}<br><br>
>>
> **Etapa 4**
>>
>> **Nombre**: indique el nombre de la redirección. <br>
>> **Cuando llega el mensaje, cumple todas estas condiciones**: si su redirección se aplica a todos los mensajes, seleccione `[Aplicar a todos los mensajes]`{.action}.<br><br>
>> ![correo electrónico](images/emails-all-04.png){.thumbnail .w-640}<br><br>
>>
> **Etapa 5**
>>
>> **Realizar todas las siguientes** operaciones: aquí es donde realiza la redirección, seleccione `Transferir, redirigir o enviar`{.action} y `Redirigir el mensaje a...`{.action}.<br><br>
>> ![correo electrónico](images/emails-all-05.png){.thumbnail .w-640}<br><br>
>>
> **Etapa 6**
>>
>> Introduzca a continuación la dirección hacia la que quiere redirigir el correo delante de "**Redirigir el mensaje a...**" y haga clic en `Guardar`{.action}. A continuación, haga clic en `OK`{.action} (en el icono del disquete) para finalizar la redirección.<br><br>
>> ![correo electrónico](images/emails-all-06.png){.thumbnail .w-640}<br><br>
>>

> [!primary]
>
> Para aplicar una **redirección simple** (véase el [esquema 1](#diagram) al inicio de esta guía), añada una regla adicional a su **redirección con copia local** desde esta ventana. Haga clic en `Añadir una acción`{.action} (recuadro 1), luego en `Mover, copiar o eliminar`{.action} y luego en `eliminar el mensaje`{.action}. Esta regla mueve el mensaje directamente a la papelera después de haberlo redirigido hacia el correo de redirección.<br><br>
> ![emails](images/emails-all-07.png){.thumbnail .w-640}

### Eliminar una redirección

Siga los pasos que se indican haciendo clic en cada ficha:

> [!tabs]
> **Paso 1**
>>
>> Una vez que se haya conectado a su dirección de correo electrónico a través del [webmail](/links/web/email), haga clic en la rueda dentada situada en la esquina superior derecha y seleccione `Opciones`{.action}.<br><br>
>> ![emails](images/emails-all-01.png){.thumbnail}<br>
>>
> **Paso 2**
>> Desde la ventana **Opciones**, en la columna izquierda, diríjase a la categoría **Procesamiento automático** de la sección **Correo** y haga clic en `Reglas de la bandeja de entrada y de almacenamiento`{.action}. <br><br>
>> ![emails](images/owa-redirect-del-01.png){.thumbnail}<br><br>
>> Encontrará la ventana para gestionar las redirecciones y filtros.<br>
>>
> **Paso 3**
>>
>> Una vez en la ventana Gestión de **Reglas de Bandeja de Entrada**, haga clic en la redirección que desea suprimir y deberá aparecer resaltada. Haga clic en el icono de papelera<br><br>
>> ![emails](images/owa-redirect-del-02.png){.thumbnail}<br><br>
>>

### Crear un alias <a name="alias"></a>

Inicie sesión en el [área de cliente de OVHcloud](/links/manager) y acceda al apartado `Web Cloud`. A continuación, seleccione el menú en función de su servicio de correo:

- **Exchange**: en `Microsoft`{.action}, luego en `Exchange`{.action} y seleccione la plataforma correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}.

- **Email Pro**: en `Email Pro`{.action}, seleccione la plataforma correspondiente y haga clic en la pestaña `Cuentas de correo`{.action}.

- **Emails** (MX plan): en `Correo electrónico`{.action}, seleccione la plataforma correspondiente y haga clic en la pestaña `Cuentas de correo`{.action}.

Para añadir un alias a su cuenta de correo, siga los pasos descritos haciendo clic en cada pestaña:

> [!tabs]
> **Etapa 1**
>>
>> Se abrirá una columna llamada `Alias`.<br><br>
>> ![correo electrónico](images/email-alias012.png){.thumbnail}<br>
>>
> **Etapa 2**
>>
>> Haga clic en el botón `...`{.action} y, a continuación, en `Configurar alias`{.action} (o `Gestionar alias`{.action}).<br><br>
>> ![correo electrónico](images/email-alias02.png){.thumbnail}<br>
>>
> **Etapa 3**
>>
>> Haga clic en `Añadir un alias`{.action} e introduzca la dirección que ha elegido para el alias y acepte su elección.<br><br>
>> ![correo electrónico](images/email-alias03.png){.thumbnail}<br>

### Eliminar un alias

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} situado a la derecha de la dirección de correo electrónico correspondiente. A continuación, haga clic en `Configurar alias`{.action} (o `Gestionar alias`{.action}).

Haga clic en el botón `...`{.action} situado a la derecha del alias correspondiente en el menú de gestión de alias. Por último, haga clic en `Eliminar el alias`{.action}

![correo electrónico](images/email-alias04.png){.thumbnail}

#### Crear una redirección o un alias en un MX Plan histórico o en un dominio sin servicio de correo <a name="mxplanlegacy"></a>

Inicie sesión en el [área de cliente de OVHcloud](/links/manager) y acceda al apartado `Web Cloud`. Acceda a la sección `Correo electrónico`{.action}:

> [!warning]
>
> - El método para crear un alias o una redirección es exactamente el mismo.
> - Es posible crear un máximo de 2000 alias y redirecciones, copias locales incluidas.
>

 Siga los pasos que se describen haciendo clic en cada pestaña:

> [!tabs]
> **Etapa 1**
>> Por defecto, estará en la pestaña de `Información general`{.action} de su MX Plan. Haga clic sobre la pestaña `Correo electrónico`{.action} y a continuación en el botón de la derecha `Gestión de las redirecciones`{.action}.<br><br>
>> ![correo electrónico](images/mxplan-legacy-1.png){.thumbnail}<br>
>>
> **Etapa 2**
>>
>> Se mostrará una tabla con las redirecciones activas. Haga clic a la derecha, sobre el botón `Añadir una redirección`{.action}.<br><br>
>>
>> > [!primary]
>> >
>> > Para modificar o eliminar una redirección, haga clic en `...`{.action}, a la derecha de la redirección correspondiente.
>>
>> ![correo electrónico](images/mxplan-legacy-2.png){.thumbnail}<br>
>>
> **Etapa 3**
>>
>> **De la dirección**: introduzca la dirección de correo electrónico que quiera redirigir.<br><br>
>> **A la dirección**: introduzca la dirección de destino de la redirección. Puede utilizar una de sus direcciones de correo de OVHcloud o una dirección de correo externo.<br><br>
>> **Elija un modo de copia**: elija si desea: <br> - **Conservar una copia del email en OVHcloud** (recibir el email en su dirección principal y la dirección de redirección)<br> *cf. el [esquema 2](#diagram) al principio de esta guía.*<br><br> - **No conservar copia del email** (reenviar directamente a la dirección de redirección sin que la dirección principal lo reciba) <br> *cf. el [esquema 1](#diagram) al comienzo de esta guía.*<br><br>
>> Haga clic en `Aceptar`{.action} para confirmar la adición de esta redirección.<br><br>
>> ![correo electrónico](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
>
> Al elegir el modo de copia "**Conservar una copia del correo en OVHcloud**", una redirección de la dirección de correo hacia ella se crea automáticamente en la lista de redirecciones, materializando esta copia local.
>

### Eliminar una redirección o un alias en un MX Plan histórico o un dominio sin una solución de correo <a name="del-mxplanlegacy"></a>

En la pestaña `Correo electrónico`{.action} de , haga clic en `Gestión de las redirecciones`{.action} a la derecha de la ventana.

Haga clic en el botón `...`{.action} a la derecha de la redirección correspondiente y seleccione `Eliminar la redirección`{.action}

> [!warning]
>
> No es posible modificar una redirección o un alias. Debe quitarla y volver a crearla.

![emails](images/email-del-legacy-redirect01.png){.thumbnail}

## Más información <a name="go-further"></a>

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](https://community.ovh.com/en/).