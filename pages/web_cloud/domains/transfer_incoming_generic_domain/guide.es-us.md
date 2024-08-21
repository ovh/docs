---
title: 'Transferir un dominio a OVHcloud'
excerpt: 'Descubra cómo realizar la transferencia de un dominio a OVHcloud'
updated: 2024-06-28
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/d-sBduMODQg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Objetivo

¿Su nombre de dominio está registrado actualmente en un registrador y desea transferirlo a OVHcloud? Es posible, mediante un procedimiento de transferencia.

La transferencia de un dominio permite cambiar el **registrar** del dominio. Puede transferir su dominio a OVHcloud creando un pedido. Este proceso suele tardar entre uno y diez días.

**Esta guía explica cómo transferir un dominio genérico a OVHcloud.**

> [!warning]
>
> El *registrar* de un dominio representa la organización o proveedor acreditado en la que el dominio está registrado/suscrito por un particular, una asociación o una organización. Renovar la suscripción de su dominio (generalmente una vez al año) es a través del mismo *registrar*.
>
Si OVHcloud ya es el *registrar* de su dominio **antes** para iniciar el procedimiento que se va a seguir, la *transferencia entrante de dominio* no es el procedimiento adecuado. El procedimiento de *transferencia entrante de dominio* se aplica **únicamente** a los dominios registrados en otro *registrar* que no sea OVHcloud.
>
> Para transferir la gestión de su dominio a otra cuenta de cliente de OVHcloud, el método adecuado es un *cambio de contactos*. El procedimiento se describe en [esta guía](/pages/account_and_service_management/account_information/managing_contacts).
>
Si también debe cambiar el **propietario** del dominio, debe hacerlo **antes** de cambiar los contactos del dominio. Para ello, siga las indicaciones que le indicamos en la guía sobre el [cambio de propietario de los dominios](/pages/web_cloud/domains/trade_domain).
>
> Si, además de la transferencia del dominio, quiere migrar los servicios asociados al mismo (sitio web, correo electrónico...), consulte en primer lugar nuestra guía "[Migrar un sitio web y los servicios asociados a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" antes de continuar.
> Esta guía explica en detalle cómo migrar todos sus servicios sin cortes del servicio.
>
> Si solo va a transferir su dominio sin trasladar los demás servicios, recuerde recuperar los servidores DNS activos para su dominio en su actual **registrar** para informarlos directamente en el paso 3 de esta guía.
> De este modo, no tendrá que interrumpir la asociación entre su dominio y los servicios externos asociados.
>

## Requisitos

- El dominio está registrado en otro agente registrador.
- El nombre de dominio existe desde hace más de 60 días.
- El nombre de dominio no ha sido transferido o no ha cambiado de propietario en los últimos 60 días.
- El estado del dominio es "OK" o "Transferible".
- El dominio no ha caducado y tiene una fecha de expiración que permite finalizar la transferencia a su debido tiempo (se recomienda: más de 60 días).
- Poder desbloquear el dominio.
- Poseer el código de transferencia o tener la posibilidad de obtenerlo.
- Estar facultado para solicitar la transferencia del dominio.
- Haber informado al propietario del dominio y a sus administradores de la solicitud de transferencia.

## Procedimiento

> [!success]
>
> Para conocer las condiciones tarifarias para la transferencia de un dominio en función de su extensión, introduzca el dominio que desea transferir a nuestra página [www.ovhcloud.com/es/domains/tld/](/links/web/domains-tld) y siga los pasos que se indican en esta guía.
>

El procedimiento de transferencia se desarrolla en varias etapas e involucra a varias entidades, entre ellas su actual agente registrador, OVHcloud y otras partes. La siguiente tabla resume las etapas de una transferencia.

|Etapa|Descripción|Quién realiza la acción|Dónde|Plazo|
|---|---|---|---|---|
|[1](#step1)|[Comprobar la información relativa al dominio](#step1)|El administrador del dominio|En el actual agente registrador|Depende de sus acciones|
|[2](#step2)|[Desbloquear el dominio y obtener el código de transferencia](#step2)|El administrador del dominio, con la autorización del propietario|En el actual agente registrador|Depende de sus acciones|
|[3](#step3)|[Solicitar la transferencia del dominio](#step3)|Cualquiera que posea el código de transferencia, también con el permiso del propietario|Con el nuevo agente registrador (por ejemplo, OVHcloud)|Depende de sus acciones|
|[4](#step4)|[Validación de la transferencia](#step4)|El actual agente registrador|A través de una solicitud enviada por la entidad que gestiona la extensión del dominio|Máximo 5 días|

> [!warning]
>
> El procedimiento exacto de transferencia de dominio puede variar, especialmente en el caso de determinados **TLD** de código de país (**ccTLD**, como .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, etc.) y de algunos **TLD** especiales (.am, .fm, etc.). Según la extensión del dominio, es posible que sea necesario cumplir requisitos adicionales. Le recomendamos que compruebe en primer lugar la información mostrada para la extensión en cuestión, en nuestro sitio web: <https://www.ovhcloud.com/es/domains/tld/>.
>

### 1. Comprobar la información relativa al dominio <a name="step1"></a>

**En primer lugar, es importante comprobar que la información relativa al dominio esté actualizada.** Desde la introducción del RGPD, los datos visibles en el ["Whois"](/links/web/domains-whois) se han vuelto muy limitados. Por lo tanto, le recomendamos que consulte la información relativa al dominio en su agente registrador actual.

- ** Si los datos son correctos: vaya al siguiente paso de esta guía.**

- ** Si los datos son incorrectos o invisibles: contacte con su actual agente registrador para comprobarlo y/o modificarlo.**

> [!primary]
>
> Si no sabe qué agente registrador es responsable del dominio, las líneas Registrar, que aparecerán en el resultado de la búsqueda de la [herramienta Whois](/links/web/domains-whois){.external}, le facilitarán información sobre su identidad.
>

### 2. Desbloquear el dominio y obtener el código de transferencia <a name="step2"></a>

Una vez que haya comprobado la información, es necesario desbloquear el dominio. Esta operación solo puede realizarse en el actual agente registrador. Por lo tanto, le invitamos a que se ponga en contacto con él para conocer el procedimiento que este haya establecido.

Una vez desbloqueado el dominio, el agente registrador deberá enviarle el código de transferencia correspondiente. A veces este código se hace referencia con diferentes nombres, como por ejemplo: "código de transferencia", "Código Auth", "InfosAuth" o "Código EPP".

Tenga en cuenta que OVHcloud no es el agente registrador del dominio al iniciar la transferencia, por lo que no podemos desbloquearlo ni proporcionarle el código de transferencia.

> [!warning]
>
> Una vez desbloqueado el dominio, tendrá 7 (7) días para realizar la transferencia a OVHcloud. Después de este período, el dominio se bloqueará automáticamente si no solicita la modificación del agente registrador.
>

### 3. solicitar la transferencia del dominio a OVHcloud <a name="step3"></a>

Una vez desbloqueado el dominio, y con el código obtenido, puede solicitar la transferencia a OVHcloud desde [nuestro sitio web](/links/web/domains){.external}. Para ello, introduzca el dominio en el campo de registro de un dominio y continúe con el pedido.

![domain](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail

Cuando se le pida el código de transferencia, introdúzcalo en el campo situado junto al dominio. Si todavía no tiene el código de transferencia, puede marcar la casilla `Introducir código de transferencia más adelante`{.action}. No obstante, le recomendamos que, antes de continuar, se asegure previamente de que podrá obtener el código. Tenga en cuenta que la transferencia no se iniciará hasta que se haya proporcionado un código válido.

![domain](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

También puede completar el pedido con un [alojamiento web](/links/web/hosting){.external} y otras soluciones de OVHcloud. Esto le puede interesar si quiere migrar sus servicios a OVHcloud. Nuestra guía [Migrar un sitio web y el correo a OVHcloud ](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh) explica cómo hacerlo.

> [!warning]
>
> Durante el proceso de contratación, le recomendamos que tenga en cuenta los siguientes aspectos:
>
> - **datos sobre el propietario del dominio.** Particularmente desde la entrada en vigor del RGPD, es fundamental asegurarse de que la información sobre el propietario del dominio se corresponde con la almacenada por su actual agente registrador. para evitar cualquier sospecha de robo de dominios.
>
> - **introduciendo los servidores DNS para su dominio.** Si está utilizando su dominio para mantener un sitio web o un servicio de correo en internet, deberá indicar sus servidores DNS para evitar interrupciones del servicio.
>

#### Gestión del propietario y detalles de los servidores DNS

- Al hacer clic en `Cambiar la configuración`{.action}, puede introducir los nombres de los servidores DNS que el dominio utiliza actualmente. De este modo, el dominio ya estará asociado a estos servidores DNS en la configuración de OVHcloud.

- Si continúa sin realizar esta operación, el dominio se añadirá a los servidores DNS de OVHcloud con una nueva zona DNS. En ese caso, puede ser necesario [modificar manualmente la zona DNS](/pages/web_cloud/domains/dns_zone_edit).

- En algunos casos, es posible que sea necesario disponer de información adicional sobre el propietario del dominio. Para añadir esta información, haga clic en la opción `Gestionar los contactos o el propietario`{.action}.

![dominio](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

#### Seguimiento de la transferencia tras el pedido

Una vez validado el pedido, recibirá una orden de pedido. La transferencia no se iniciará hasta que se reciba el pago. Una vez realizada esta operación, puede consultar el progreso de la transferencia desde [el área de cliente de OVHcloud](/links/manager){.external}. Para consultar el progreso, haga clic en `Dominios`{.action} y seleccione `Operaciones en curso`{.action}.

> [!primary]
>
> Si el código de transferencia no se ha introducido durante el pedido, podrá introducirlo en la ventana `Operaciones en curso`{.action} para validar la transferencia.

### 4. validación de la transferencia por el actual agente registrador <a name="step4"></a>

Una vez validados el pedido y el código de transferencia, el actual agente registrador (que todavía no es OVHcloud) recibirá una solicitud de validación. Aquí también pueden darse varias situaciones.

|Escenarios posibles|Resultado|
|---|---|
|Validación del actual agente registrador.|La transferencia se realiza en un plazo de **24 horas**.|
|El actual agente registrador no responde a la solicitud.|La transferencia se realiza al cabo de **5 días**.|
|El actual agente registrador rechaza la solicitud.|La transferencia se **anula** en cuanto se rechaza.|

Si el actual agente registrador rechaza la solicitud, contacte con él para conocer el motivo por el que la rechazó.

El proceso de transferencia puede reanudarse desde el [área de cliente de OVHcloud](/links/manager){.external}. Seleccione `Web Cloud`{.action} y acceda a la sección `Dominios`{.action} y haga clic en `Operaciones en curso`{.action}.

> [!primary]
>
> La transferencia de un dominio con la extensión ".fr" difiere ligeramente del proceso arriba descrito. Desbloquee el dominio y obtenga el código de transferencia del actual agente registrador.
> Inicie el pedido de la transferencia e introduzca el código de transferencia como se ha descrito anteriormente.
>
> Una vez iniciada la transferencia, el plazo total de **transferencia de un nombre de dominio a ".fr" tarda al menos 8 días incompresibles**.
>
> En caso de **oposición a la transferencia por el actual agente registrador**, la transferencia **se realizará de todas formas**, pero tardará un **mínimo de 22 días en completarse**.
>

### 5. gestionar su dominio con OVHcloud

Una vez finalizado el procedimiento de transferencia, podrá administrar su dominio desde el [área de cliente de OVHcloud](/links/manager){.external}. Para ello, seleccione `Web Cloud`{.action}, haga clic en `Dominios`{.action} y seleccione el dominio correspondiente.

> [!warning]
>
> Para los dominios con una extensión *genérica* (los **gTLD** como *.com*, *.net*, *.info*, *.org*, etc.), la fecha de expiración inicial del nombre de dominio se conserva. OVHcloud añade de forma gratuita un año adicional de suscripción además de la transferencia realizada.
> Por ejemplo, somos el 04/06/2023 y su nombre de dominio con una extensión *genérica* expira el 29/09/2023 **antes** la transferencia. Una vez transferido a OVHcloud, el dominio expirará el 29/09/2024.
>
> Para los dominios con una extensión *local* o *regional* (los **ccTLD**, como *.fr*, *.be*, *.de*, *.es*, etc.), esto depende de las extensiones y de las reglas establecidas por el **registro** de la extensión en cuestión.
> Una vez finalizada la transferencia, compruebe la fecha de expiración del dominio directamente desde el área de cliente de OVHcloud.
>
> Para ello, conéctese a su [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}. En la columna izquierda, haga clic en el botón `Dominios`{.action} y seleccione el dominio correspondiente. En la nueva página, situada justo debajo del dominio, podrá consultar la fecha de renovación prevista en el **mes** y **el año**.
>
> En función de la situación y de la nueva fecha de expiración de su nombre de dominio, podrá ser necesaria una renovación del dominio justo después de la transferencia.
>

## Más información

[Migración de un sitio web y el correo a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).