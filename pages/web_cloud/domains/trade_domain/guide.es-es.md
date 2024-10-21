---
title: "Cómo cambiar el propietario de un nombre de dominio"
excerpt: "En esta guía, encontrará diversas informaciones en relación con el cambio de propietario del nombre de un dominio."
updated: 2024-09-04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

Además de [gestionar los contactos](/pages/account_and_service_management/account_information/managing_contacts), para registrar un dominio es necesario introducir la información relativa al propietario del mismo. En este contexto, el **propietario** designa a una persona, empresa, organización o asociación que posea los derechos sobre este dominio. **El cambio de propietario** hace referencia a la transferencia de los derechos de propiedad de una persona o empresa a otra. La información del **propietario** tiene valor jurídico. Este proceso es especialmente obligatorio si una empresa cambia de nombre.

> [!primary]
>Esta operación no migra el dominio a otra cuenta de cliente de OVHcloud.
>
>Para ello, debe [modificar los contactos](/pages/account_and_service_management/account_information/managing_contacts) del nombre de dominio.
>
> Si necesitas hacer un cambio de titular y un cambio de contacto para un mismo nombre de dominio, no hay orden preferente. Sin embargo, es el contacto del administrador quien puede iniciar estas operaciones. Por lo tanto, estos dos cambios se realizan en el área de clientes del contacto del administrador del nombre de dominio.
>
> Los datos relativos al propietario de un dominio solo tienen un valor administrativo y son totalmente independientes de los datos que puedan asociarse a un ID de cliente de OVHcloud. Por lo tanto, un particular o una organización (empresa, asociación, etc.) que únicamente esté declarado como propietario de un dominio no tendrá acceso al área de cliente de OVHcloud.
>

**Descubra cómo cambiar el propietario de un dominio**

## Requisitos

- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager){.external}.
- Tener un nombre de dominio registrado en OVHcloud y para el que no se está realizando ninguna operación (cambio de propietario, transferencia, creación). Si una operación ha finalizado recientemente en su dominio, es necesario un plazo mínimo de 60 días naturales antes de realizar una nueva operación.
- Ser el [contacto administrador](/pages/account_and_service_management/account_information/managing_contacts) del nombre de dominio en cuestión.
- Contar con el consentimiento del propietario actual del nombre de dominio para realizar el cambio de propietario.

## Procedimiento

> [!warning]
>
> Las instrucciones siguientes describen la forma más común de modificar el propietario de un dominio. Son válidas para la mayoría de los dominios de nivel superior, comúnmente llamados **T**op **L**evel **D**omain (**TLD**). 
>Los **TLD** designan el fin de su nombre de dominio, como por ejemplo el *.com*, *.net*, *.fr*, etc.
>
> Las reglas específicas de los procesos relativas a los dominios **TLD** son definidas únicamente por la autoridad de asignación correspondiente, es decir, el **registro**. Un agente registrador (o registrador) como OVHcloud debe respetar estas reglas y no influye en las decisiones de registro.
>
> Existen principalmente dos tipos de **TLD** : **ccTLD** y **gTLD**. Los **ccTLD** corresponden a **TLD** relativos a una región o un país (*.es*, *.be*, *.uk*, *.de*, *.paris*, etc.). **gTLD** correspondientes a **TLD** más genéricos (*.net*, *.com*, *.info*, *.org*, etc.).
>
> El procedimiento exacto para el cambio de propietario de un dominio puede variar, en particular para determinados dominios **ccTLD** (*.lu*, *.hk*, *.ro*, *.be*, *.lt*, *.dk*, *.at*, *.fi*, etc.) y para algunos **TLD** especiales (*.am* , *.fm*, etc.). Para algunos de ellos, un cambio de propietario es una operación de pago. El cambio de propietario también puede ser suspendido por varias razones, por ejemplo por impago, abuso o bloqueo por parte del registro. 
>
Si tiene alguna duda, le recomendamos que consulte los siguientes recursos:
>
> - el sitio web del registro **TLD** correspondiente;
> - la [lista de TLD disponibles en OVHcloud](/links/web/domains-tld);
> - actualizaciones de estado del dominio. Para comprobarlo, conéctese al [área de cliente de OVHcloud](/links/manager) y acceda a la sección `Web Cloud`{.action}  de la columna izquierda de la página web de OVHcloud. En la columna de la izquierda, haga clic en `Dominios`{.action} y seleccione `Operaciones en curso`{.action}.
>

### 1. seleccionar el dominio

Conéctese al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}. Haga clic en `Dominios`{.action} y seleccione el dominio genérico (gTLD) del que quiera cambiar el propietario.

### 2. iniciar el procedimiento de cambio de propietario

En la pestaña `Información general`{.action}, acceda a la sección **Suscripción** en la esquina inferior derecha. Haga clic en `...`{.action} delante de **Contactos** y, seguidamente, en `Cambiar de propietario`{.action}.

![cambio de propietario](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/change-owner.png){.thumbnail}

> [!warning]
>
> Toda modificación introducida en el nombre, el nombre, la organización, el estatuto jurídico y la dirección de correo electrónico del propietario se considerará un cambio de propietario.
>
> Si solo modifica los detalles del propietario distintos de los arriba mencionados, vaya a la sección [Actualización de la información del propietario](#updateownerinformation) que se muestra a continuación.
>

Se abrirá una nueva pestaña de su navegador con todos los dominios compatibles con el cambio de propietario. Seleccione un dominio de la lista marcando la casilla situada a la izquierda. Este paso también puede utilizarse para iniciar una operación conjunta: es posible cambiar el propietario de varios dominios a la vez, por ejemplo para cambiar el propietario de todos los dominios *.ovh*. A continuación, haga clic en `Continuar`{.action}.

![cambio de propietario](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/available-domains.png){.thumbnail}

En el formulario de información del propietario, asegúrese de ingresar información válida en todos los campos obligatorios. Manténgase alerta sobre los errores de entrada y, en la medida de lo posible, utilice [caracteres imprimibles ASCII](http://facweb.cs.depaul.edu/sjost/it212/documents/ascii-pr.htm). Tenga en cuenta que cualquier información inexacta o falsa puede conllevar un error técnico y, por tanto, un retraso de todo el proceso de intercambio.

Una vez que haya confirmado su solicitud de cambio, recibirá dos mensajes de correo electrónico para confirmar o cancelar la solicitud.

- un email enviado al propietario actual;
- un email enviado al futuro propietario.

Si la dirección de correo electrónico no se modifica como parte del cambio de propietario, la dirección de correo de referencia recibirá los dos mensajes, pero es necesario confirmar cada uno de ellos.
<br>Una vez que los dos destinatarios hayan confirmado la solicitud por correo electrónico, el cambio de propietario del dominio se hará efectivo.

> [!warning]
>
> - El procedimiento deberá ser validado por ambas partes en un plazo de 14 días a partir de la solicitud. **Pasado este plazo, el procedimiento queda cancelado**.
>
> - Si una de las partes rechaza la modificación, la solicitud se anulará.
>
> - Si la dirección de correo electrónico del propietario actual no está actualizada o no se puede acceder a ella, **en este caso**, puede contactar directamente con el soporte creando un tíquet de asistencia desde su [centro de ayuda de OVHcloud](https://help.ovhcloud.com/csm?id=csm_get_help).
>
> - Si el propietario del dominio ha sido modificado, el dominio no podrá ser [transferido a otro agente registrador](/pages/web_cloud/domains/transfer_outgoing_domain) durante un período de 60 días.

### Actualización de la información del propietario <a name="updateownerinformation"></a>

Si tiene que actualizar algunos datos secundarios como el número de teléfono, la dirección, etc., no necesita iniciar un procedimiento comercial. Estos datos pueden modificarse directamente desde el [área de cliente de OVHcloud](/links/manager).

En la sección **Suscripción** de la pestaña `Información general`{.action}, haga clic en `...`{.action} delante de **Contactos** y seleccione `Actualizar la información del propietario`{.action}.

![cambio de propietario](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/refresh-holder-information.png){.thumbnail}

No es necesario confirmar los cambios por correo electrónico.

## Más información

[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).