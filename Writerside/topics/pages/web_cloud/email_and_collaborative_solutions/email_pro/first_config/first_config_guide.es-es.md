---
title: 'Primeros pasos con la solución Email Pro'
excerpt: 'Cómo configurar por primera vez la solución Email Pro'
updated: 2024-01-29
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

## Objetivo

La solución E-mail Pro le permite disfrutar de direcciones de correo electrónico profesionales al precio más razonable con vistas a impulsar o comenzar su negocio.

**Esta guía explica cómo configurar por primera vez la solución E-mail Pro.**

## Requisitos

- Tener una cuenta [E-mail Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external}.
- Haber recibido el mensaje de correo electrónico de confirmación de la instalación de la solución E-mail Pro.
- Tener un nombre de dominio.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

### 1. Acceder a la gestión del servicio

Una vez creado y activado el servicio E-mail Pro, puede administrarlo desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

Para ello, inicie sesión en el área de cliente. Haga clic en `E-mail Pro`{.action} y seleccione el nombre del servicio correspondiente.

> [!primary]
>
> El nombre de un servicio E-mail Pro en el área de cliente de OVHcloud comienza por «*emailpro-*», además, contiene una parte de su referencia de cliente y termina por una cifra (1 para el primer servicio E-mail Pro instalado, 2 para el segundo y así sucesivamente).
>

### 2. Añadir su nombre de dominio

Después de contratar el servicio E-mail Pro, se abrirá automáticamente una ventana en la que se le invita a `añadir un dominio`{.action}. Si la ventana no aparece, acceda a la pestaña `Dominios asociados`{.action} y haga clic en el botón `Añadir un dominio`{.action}.

uede elegir entre dos opciones:

- **Seleccionar un dominio de la lista** : En el área de cliente de OVHcloud solo se muestran los dominios que gestiona. Si el dominio está registrado con OVHcloud, pero no aparece en el área de cliente, deberá añadirlo con la opción «Introducir un dominio no gestionado por su cuenta de OVHcloud»
- **Introducir un dominio no gestionado por su cuenta de OVHcloud** : Seleccione esta opción si el dominio está registrado en OVHcloud, pero puede configurarse desde otro área de cliente de OVHcloud, **o** si el dominio está registrado en otro agente registrador. Para que el servicio Email Pro funcione correctamente, deberá poder modificar la configuración del dominio (su zona DNS).

A continuación, haga clic en `«Siguiente»`{.action}.

![emailpro](emailpro-01.png){.thumbnail}

Se mostrará un mensaje informativo relativo al modo de configuración del dominio.

![emailpro](emailpro-02.png){.thumbnail}

- **Si ha introducido un dominio no gestionado por OVHcloud** : este se configurará por defecto en modo no autoritario.

- **Si ha seleccionado en la lista un dominio gestionado por OVHcloud**, deberá elegir entre dos modos.
    - **Autoritario** : Es adecuado si su solución Email Pro es la única solución de correo que utiliza con su dominio. No permite utilizar otra solución de correo con su servicio.
    - **No autoritario** : Es adecuado si utiliza con su nombre de dominio la solución Email Pro **así como otra solución de correo**.

> **Descripción de los modos Autoritario y No Autoritario**
>
> - Cuando un mensaje de correo electrónico se transmite a su plataforma Email Pro (*Inbound mail server Email Pro*) en modo **autoritario**, significa que todas las direcciones de correo electrónico de su dominio solo están alojadas en dicha plataforma. <br> <br> Por ejemplo, si se envía un mensaje de correo electrónico a la dirección «*mary.johnson@mydomain.ovh*», el servidor Email Pro «*Inbound mail server Email Pro*» devuelve un mensaje de fallo al remitente, ya que esta dirección no existe en el servidor Email Pro «*Inbound mail server Email Pro*».
> - Cuando un mensaje de correo electrónico se transmite a su plataforma Email Pro (*Inbound mail server Email Pro*) en modo **no autoritario**, las direcciones de correo de su dominio se reparten entre su plataforma de correo principal (*Inbound mail server Email Pro*) y otro servicio de correo (*Inbound mail server MXplan*). <br> <br> Por ejemplo, si se envía un mensaje de correo electrónico a la dirección «*mary.johnson@mydomain.ovh*», el servidor Email Pro *Inbound mail Server Email Pro* enviará el mensaje de correo electrónico al servidor MXplan «*Inbound mail server MXplan*» para que este último pueda entregarlo.
>
> ![Add Domain](authoritative-mode.png){.thumbnail}
>

> [!warning]
>
> Si recibe el mensaje «**Authoritative Domain Detected**» al añadir su dominio a su plataforma de correo, significa que dicho dominio está declarado en modo **autoritario** en otra plataforma de correo. Por lo tanto, deberá cambiarlo a modo **no autoritario** para que ambas plataformas puedan coexistir.

Si elige el modo **no autoritario** y utiliza un servicio:

- **Por correo electrónico de OVHcloud (Exchange o MXplan)**, introduzca directamente como servidor de correo de destino «*mx1.mail.ovh.net*» ( funciona del mismo modo con *mx0.mail.ovh.net*, *mx2.mail.ovh.net*, *mx3.mail.ovh.net*, *mx4.mail.ovh.net*).
- **Correo electrónico externo a OVHcloud (oferta de correo de la competencia, servidor de correo privado)**, introduzca en la casilla Servidor de correo de destino el nombre del servidor de entrada de este servicio externo, asegurándose de que este último autorice las peticiones de correo procedentes de su servicio Email Pro.

La elección del modo no es definitiva y puede modificarse más adelante desde el área de cliente de OVHcloud.

Haga clic en el botón `«Siguiente»`{.action} para continuar con la adición del dominio.

**Si ha seleccionado un nombre de dominio gestionado por OVHcloud**, su configuración se puede llevar a cabo de forma automática. Para ello, marque las casillas deseadas y haga clic en el botón `Siguiente`{.action} para continuar con la adición del dominio.

![emailpro](emailpro-03.png){.thumbnail}

- **SRV**: registro DNS que permite la configuración automática de su cliente de correo al añadir su dirección de correo electrónico.
- **MX**: registro DNS de los servidores de correo electrónico necesarios para recibir mensajes de correo electrónico con el nombre de dominio correspondiente.
- **DKIM**: Implementación de una firma digital cifrada para proteger los intercambios de correo. Para más información, consulte nuestra guía [Configurar un registro DKIM ](dns_zone_dkim1.).

**Para un dominio no gestionado por OVHcloud**, realice el paso 3.

Una vez realizada la configuración, compruebe que la información mostrada sea la correcta y haga clic en `Confirmar`{.action} para añadir el dominio.

### 3. Configurar el nombre de dominio

Una vez añadido el nombre de dominio como dominio asociado, compruebe su configuración usando la tabla que aparece.

En la columna «`Diagnóstico`{.action}», podrá ver si la configuración DNS del nombre de dominio es correcta. Si debe modificarla, se mostrará una señal roja. Existen dos posibilidades:

- **Configuración automática al añadir un nombre de dominio de OVHcloud** : si acaba de realizar el cambio, pueden pasar algunas horas antes de que se muestre en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

- **Configuración manual de un nombre dominio no gestionado por OVHcloud** : haga clic en la señal roja para ver los cambios que debe realizar.
    - *Para un registro CNAME*, consulte nuestra guía "[Crear un registro CNAME para añadir un dominio asociado](exchange_dns_cname1.)".
    - *Para un registro MX*, consulte nuestra guía "[Añadir un registro MX a la configuración del dominio](dns_zone_mx1.)".
    - *Para un registro SRV*, complete la zona DNS con la información proporcionada al hacer clic en la etiqueta roja. Para añadir este registro, puede consultar la guía "[Editar una zona DNS de OVHcloud](dns_zone_edit1.)".
    - *Para un registro SPF*, complete la zona DNS con la información proporcionada al hacer clic en la etiqueta. Para añadir este registro, puede consultar la guía "[Configurar un registro SPF](dns_zone_spf1.)".
    *Para un registro DKIM*, complete la zona DNS con la información proporcionada al hacer clic en la etiqueta. Para añadir este registro, puede consultar la guía "[Configurar un registro DKIM ](dns_zone_dkim1.)".

![emailpro](emailpro-04.png){.thumbnail}

### 4. Configurar las cuentas E-mail Pro

Para configurar las direcciones de correo, abra la pestaña `Cuentas de correo`{.action}. La tabla muestra las cuentas que haya contratado con el formato «*@configureme.me*».

Para configurarlos, haga clic en el botón `...`{.action} y, seguidamente, en `Modificar`{.action}.

![emailpro](emailpro-05.png){.thumbnail}

Complete la información solicitada.

|Campo|Descripción|
|---|---|
|Cuenta de correo electrónico|Introduzca el nombre que quiera asignarle a la cuenta de correo electrónico (por ejemplo, nombre.apellido) y seleccione un dominio de la lista.|
|Nombre|Introduzca un nombre.|
|Apellidos|Introduzca los apellidos.|
|Nombre mostrado|Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.|
|Contraseña y confirmación|Cree una contraseña segura que tenga un mínimo de ocho caracteres e incluya al menos una mayúscula, una minúscula y un número.|

Una vez introducida toda la información, haga clic en el botón `Siguiente`{.action}. Compruebe que la información mostrada es correcta y haga clic en `Confirmar`{.action} para iniciar la configuración de la cuenta.

> [!primary]
>
> Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición. Si necesita más cuentas, puede realizar el pedido utilizando el botón `Contratar cuentas`{.action}.
>

### 5. Utilizar las direcciones de correo electrónico

Una vez configuradas las cuentas, ¡ya puede utilizarlas! Para ello, OVHcloud pone a su disposición una aplicación en internet (*webmail*). Puede acceder a ella en la dirección [webmail](https://www.ovh.com/es/mail/){.external}, donde deberá introducir las credenciales de su dirección de correo electrónico.

Para configurar su dirección de correo electrónico en un cliente de correo o en un dispositivo (_teléfono inteligente_ o tableta), consulte nuestras [guías de configuración](web-cloud-email-collaborative-solutions-email-pro1.). A continuación, se indican los parámetros necesarios para configurar una cuenta E-mail Pro:

|Tipo de servidor|Nombre del servidor|Tipo de seguridad|Puerto|
|---|---|---|---|
|Entrante|pro**?**.mail.ovh.net|SSL/TLS|993|
|Saliente|pro**?**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> En nuestro ejemplo, utilizamos el nombre de servidor pro**?**.mail.ovh.net. Deberá sustituir la «?» por el número que designa el servidor del servicio E-mail Pro.
> 
> Encontrará este número en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en el apartado `Web Cloud`{.action} de la sección `E-mail Pro`{.action}. El nombre del servidor puede verse en el recuadro **« Conexión »** de la pestaña `Información General`{.action}.
> 

## Más información

[Usar Outlook Web App con una cuenta de correo](email_owa1.)

[Crear reglas de la bandeja de entrada en OWA](creating-inbox-rules-in-owa-mx-plan1.)

[Añadir un alias a una cuenta de correo](feature_redirections1.)

[Crear firmas automáticas](feature_footers1.)

[Gestionar la facturación de sus cuentas Email Pro](manage_billing_emailpro1.)

[Configurar la política de seguridad de un servicio de correo](security-policy1.)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
