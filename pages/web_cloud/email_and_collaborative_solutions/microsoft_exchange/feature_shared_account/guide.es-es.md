---
title: Crear y utilizar una cuenta compartida
excerpt: Añadir y utilizar una cuenta compartida en su solución Exchange
updated: 2023-09-15
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

Una **cuenta compartida** es una cuenta de correo compartida entre varias cuentas Exchange y accesible a través de ellas. Una cuenta compartida no tiene contraseña, por lo que es necesario delegar el acceso a una o varias cuentas de la plataforma Exchange.
<br>Es posible acceder a las cuentas compartidas, gracias a una delegación, desde OWA (webmail Exchange) o a través del cliente de correo Outlook.

**Esta guía explica cómo crear y gestionar una cuenta compartida en su plataforma Exchange.**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
- Haber contratado una solución [Exchange de OVHcloud](https://www.ovhcloud.com/es-es/emails/hosted-exchange/).

## Procedimiento

### Añadir una cuenta compartida

Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), Acceda a la sección `Web Cloud`{.action} y seleccione su servicio, en `Microsoft`{.action}, luego en `Exchange`{.action}.

Seleccione la pestaña `Cuentas compartidas`{.action} en el menú horizontal y haga clic en `Añadir cuenta compartida`{.action}.

![correo electrónico](images/exchange-shared_accounts01.png){.thumbnail}

Introduzca los campos solicitados:

|Función|Descripción|
|---|---|
|Cuenta de correo electrónico|Elija el nombre de su cuenta compartida. **No debe tratarse de una dirección de correo electrónico existente.**|
|Cuota|Indique la cuota de almacenamiento deseada para su cuenta compartida, [en función del espacio disponible](#size).|
|Nombre mostrado|El nombre mostrado que quiere que aparezca en un envío desde su cuenta compartida.|
|Ocultar la dirección en el directorio|Ocultar la dirección en el directorio permite evitar que la dirección de la cuenta compartida sea visible en la lista de direcciones de su plataforma Exchange.|

<a name="size"></a>

> [!primary]
>
> El espacio disponible para crear una cuenta compartida depende del número de cuentas contratadas en su plataforma. Cada cuenta Exchange suscrita en su plataforma desbloquea 5 GB para las cuentas compartidas.
>
> **Ejemplo:**
>
> Ha contratado 4 cuentas Exchange en su plataforma, por lo que tiene **4 x 5 GB**, es decir **20 GB** de espacio asignado para las cuentas compartidas de su plataforma Exchange.

Haga clic en `Siguiente`{.action} para acceder al resumen. Haga clic en `Aceptar`{.action} para finalizar la operación.

![correo electrónico](images/exchange-shared_accounts02.png){.thumbnail}

### Gestionar la delegación de una cuenta compartida

Una vez que haya creado la cuenta compartida, deberá delegar el acceso a una o varias cuentas de su plataforma.

No es posible acceder directamente a una cuenta compartida, ya que esta no tiene contraseña. Por lo tanto, no es posible configurarlo directamente en un cliente de tipo Outlook o acceder a él desde el webmail.

Es necesario establecer una delegación entre una cuenta Exchange y la cuenta compartida.

En la pestaña `Cuentas compartidas`{.action} de su plataforma Exchange, haga clic en el botón `...`{.action} delante de la cuenta compartida y seleccione `Configurar delegaciones`{.action}. A continuación, podrá elegir en su lista de cuentas quiénes tendrán la posibilidad de acceder a la cuenta compartida.

![correo electrónico](images/exchange-shared_accounts03.png){.thumbnail}

Elija las acciones posibles en la cuenta seleccionada:

|Función|Descripción|
|---|---|
|Permiso de envío|Permite que la cuenta de correo electrónico seleccionada envíe "como" la dirección de correo electrónico compartida.|
|Permiso de «envío como»|Permite que la cuenta de correo seleccionada envíe "en nombre de" la dirección de correo electrónico compartida.|
|Derecho de acceso|Autoriza a la cuenta de correo seleccionada a mostrar y gestionar la cuenta compartida desde OWA (webmail) o Outlook.|

Haga clic en `Siguiente`{.action} y `Acepte`{.action} para guardar los cambios.

![correo electrónico](images/exchange-shared_accounts04.png){.thumbnail}

En nuestro ejemplo, permitimos que las cuentas **guia-exchange@** y **test@** tengan acceso a la cuenta compartida **shared_test@**.
<br>La cuenta e-mail **guide-exchange@** también tendrá derecho a enviar mensajes "como" **shared_test@**.
<br>La cuenta e-mail **test@** también puede enviar emails "por parte de" **shared_test@**.

### Uso de la cuenta compartida desde OWA (webmail)

Conéctese al webmail Exchange (OWA) en la dirección <https://www.ovh.es/mail/> con una cuenta de correo con derecho de acceso a la cuenta compartida.
<br>En nuestro ejemplo, nos conectamos con la cuenta **guia-exchange@**.

Una vez que se haya conectado, haga clic derecho en el árbol principal de su dirección de correo electrónico y seleccione `Añadir carpeta compartida`{.action}. 

![correo electrónico](images/exchange-shared_accounts05.png){.thumbnail}

Introduzca el nombre de su cuenta compartida y haga clic en `Añadir`{.action} cuando se encuentre en el directorio Exchange.

![correo electrónico](images/exchange-shared_accounts06.png){.thumbnail}

En nuestro ejemplo, puede acceder a la cuenta compartida desde la cuenta **guia-exchange@**.

![correo electrónico](images/exchange-shared_accounts07.png){.thumbnail}

### Uso de la cuenta compartida desde Outlook

Desde Outlook, encontrará su cuenta compartida en la columna de la izquierda, del mismo modo que en el webmail.

![correo electrónico](images/exchange-shared_accounts10.png){.thumbnail}

## Más información

[Consultar una cuenta Exchange desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Desplegar permisos en una cuenta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[Compartir un calendario con el webmail OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Añadir un pie de página para sus cuentas Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
