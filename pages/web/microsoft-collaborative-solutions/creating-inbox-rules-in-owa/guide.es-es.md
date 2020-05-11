---
title: 'Crear reglas de la bandeja de entrada en OWA'
slug: crear-reglas-de-bandeja-de-entrada-en-owa
excerpt: 'Cómo crear redirecciones y filtros de correo electrónico con OWA'
section: 'Outlook Web Application (OWA)'
order: 2
---

**Última actualización: 11/3/2020**


## Objetivo

Con la opción «Reglas de la bandeja de entrada», puede crear un elaborado conjunto de reglas para gestionar los mensajes de correo electrónico entrantes. Estas reglas le permiten mantener su cuenta de correo electrónico organizada mediante la clasificación automática de los mensajes de correo electrónico en carpetas. También permiten establecer la configuración de reenvío (redireccionamientos) y filtrar los mensajes de correo no deseado.

**Descubra cómo crear filtros y redireccionamientos para los mensajes de correo electrónico con Outlook Web App (OWA).**


## Requisitos

- Tener una solución de correo electrónico de OVHcloud configurada (**solución MX Plan**, disponible como parte de nuestros [planes de hospedaje web](https://www.ovh.es/hosting/), incluida en un [alojamiento Start10M gratuito](https://www.ovh.es/dominios/oferta_hosting_start10m.xml) o contratada por separado como una solución independiente; [**Hosted Exchange**](https://www.ovh.es/emails/hosted-exchange/) o [**Email Pro**](https://www.ovh.es/emails/email-pro/))
- Tener las credenciales de acceso de la dirección de correo electrónico que quiere configurar


## Procedimiento

### Paso 1: acceder a la sección «Opciones»

Inicie sesión en su cuenta de Exchange a través del [correo electrónico basado en la web de OVHcloud](https://www.ovh.es/mail). Haga clic en el símbolo del engranaje en la parte superior derecha para desplegar el menú «Opciones» y seleccione `«Opciones»`{.action}.

![inboxrules](images/exchange-rules-step1.png){.thumbnail}

En el árbol de opciones, seleccione `«Reglas de la bandeja de entrada y de limpieza»`{.action} para acceder a la pantalla de las reglas. Aquí podrá ver una lista de las reglas que se aplican a esta cuenta. Haga clic en el icono `+`{.action} para crear una nueva regla.

![inboxrules](images/exchange-rules-step2.png){.thumbnail}

### Paso 2: crear reglas

![inboxrules](images/exchange-rules-step3.png){.thumbnail}

El editor de reglas le permite configurar distintas medidas para todos los mensajes de correo electrónico entrantes en función de diferentes supuestos. La configuración de una regla conlleva tres etapas:

|Etapa|Descripción|
|---|---|
|Añadir condición|Seleccione una o más condiciones que activarán la regla.|
|Añadir acción|Seleccione la acción que se aplicará a los mensajes de correo electrónico que cumplan las condiciones definidas.|
|Añadir excepción (opcional)|Puede crear una regla más restrictiva añadiendo una o más condiciones para excluir ciertos mensajes de correo electrónico.|

Por ejemplo, puede establecer «Recibido de...» como condición y especificar una dirección de correo electrónico y, seguidamente, optar por transferir estos mensajes a una carpeta específica.

#### Casilla de verificación «Detener el procesamiento de más reglas»

Si ha creado más de una regla, es posible que varias de ellas se apliquen a un mensaje de correo electrónico entrante. Deje esta opción activada para cualquier regla que no deba estar seguida de otras reglas. Se trata de una forma sencilla de evitar que se sigan procesando los mensajes de correo electrónico que cumplan con varias condiciones.

### Creación de reglas prácticas utilizando dos ejemplos: redirección y filtrado de correo no deseado 

Debido al gran número de condiciones y acciones disponibles, no podemos tratarlas todas en esta guía. A continuación, encontrará dos ejemplos que resultan de gran utilidad a la hora de utilizar una cuenta de correo electrónico de OVHcloud. 

> [!warning]
>OVHcloud le ofrece una serie de servicios cuya configuración y gestión recae sobre usted. Por lo tanto, es su responsabilidad asegurarse de que estos servicios funcionen correctamente.
>
>El propósito de esta guía es ayudarle, en la medida de lo posible, con las tareas generales. No obstante, póngase en contacto con un proveedor especializado y/o el editor de <i>software</i> del servicio si tiene dificultades. Nosotros no podremos ayudarle en este aspecto. Puede encontrar información adicional en la sección «Más información» de esta guía.
>

#### Ejemplo 1: redireccionamiento de mensajes de correo electrónico a otra dirección

Haga clic en el icono `+`{.action} para crear una nueva regla. Asigne un nombre a la regla y seleccione a qué mensajes de correo electrónico se debe aplicar. Para este ejemplo, primero elegiremos incluir **todos los mensajes**. A continuación, seleccione la acción adecuada. En este caso, vamos a centrarnos en cómo realizar un **redireccionamiento**. Tenga en cuenta la siguiente diferencia técnica: si «reenvía» un mensaje de correo electrónico, el destinatario final verá su dirección de correo electrónico como remitente. En cambio, si «redirecciona» un mensaje de correo electrónico, se enviará a su dirección de destino sin cambiar la dirección del remitente original. 

![inboxrules](images/exchange-rules-step4.png){.thumbnail}

En la siguiente pantalla, seleccione «Sus contactos» (`+`{.action}) o escriba una dirección de correo electrónico en la barra superior. También puede buscar usuarios que no aparecen aquí como contactos. Cuando termine, haga clic en `«Guardar»`{.action} para volver a la pantalla «Nueva regla de bandeja de entrada». Puede ampliar más esta regla haciendo clic en `«Añadir acción»`{.action}. Si procede, añada también excepciones; por ejemplo, para evitar el redireccionamiento si un mensaje entrante se ha enviado desde una dirección de correo electrónico específica o si contiene determinadas palabras clave. Haga clic en `«Aceptar»`{.action} para guardar la regla.

La nueva regla se muestra ahora con una explicación de su función y puede editarse, desactivarse o eliminarse.

![inboxrules](images/redirection_rulebis.gif){.thumbnail}


#### Ejemplo 2: filtrado de mensajes de correo electrónico no deseados (<i>spam</i>)

> [!primary]
>
Estas instrucciones solo son posibles si su dominio hace un uso correcto de los registros MX de OVHcloud. El servicio admite otras configuraciones, pero podrían no beneficiarse de nuestra protección contra correo no deseado.
>

Haga clic en el icono `+`{.action} para crear una nueva regla.

![inboxrules](images/exchange-rules-step7.png){.thumbnail}

Asigne un nombre a la regla y seleccione «Incluye estas palabras» y «En el asunto...» como condiciones. En la pantalla siguiente, escriba «\[SPAM]» para seleccionar los mensajes etiquetados previamente por nuestra protección contra correo no deseado. Añádala con `+`{.action} y después haga clic en `«Aceptar»`{.action}.

![inboxrules](images/exchange-rules-step8.png){.thumbnail}

Dado que ninguna protección automatizada contra correo no deseado puede determinar con absoluta precisión si un mensaje de correo electrónico es realmente <i>spam</i>, se recomienda transferir estos correos electrónicos a una carpeta dedicada. De este modo, puede revisar el contenido de esta carpeta de correo no deseado antes de vaciarla. Para ello, seleccione «Mover, copiar o eliminar» como acción y entonces, «Mover el mensaje a la carpeta...». Seleccione una carpeta de la lista. Haga clic en `«Aceptar»`{.action} para guardar la regla.

![inboxrules](images/exchange-rules-step9_2.png){.thumbnail}


> [!primary]
>
Tenga en cuenta que no es posible declarar falsos positivos de correo no deseado directamente desde OWA. Si recibe mensajes de correo electrónicos marcados erróneamente como \[SPAM], le recomendamos crear una solicitud de asistencia en el [panel de control de OVHcloud](https://www.ovh.com/manager/dedicated/#/support/tickets/new).  
>


## Más información

[Crear respuestas automáticas en OWA](../exchange_2016_crear_un_contestador_con_el_webmail_owa/)

[Compartir calendarios en OWA](../exchange_2016_compartir_un_calendario_con_el_webmail_owa/)

[Usar Outlook Web App con una cuenta de correo electrónico](../../emails/uso-outlook-en-la-web/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.