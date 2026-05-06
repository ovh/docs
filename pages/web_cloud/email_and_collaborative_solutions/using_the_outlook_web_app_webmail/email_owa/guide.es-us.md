---
title: 'Utilizar una dirección de correo desde el webmail Outlook Web App (OWA)'
excerpt: 'Cómo utilizar una dirección de correo electrónico desde el webmail OWA'
updated: 2026-05-04
---

## Objetivo

Con las soluciones de correo de OVHcloud, puede enviar y recibir sus correos electrónicos desde el dispositivo y el cliente de correo que prefiera. OVHcloud ofrece un servicio de correo en línea llamado Outlook Web App (OWA) que permite, a través de un navegador web, acceder a una cuenta desde cualquier lugar. Todas las cuentas de correo activas en MX Plan y Hosted Exchange tienen un único punto de acceso a la interfaz OWA correspondiente: nuestra [página de inicio de sesión del webmail](/links/web/email).

**Aprenda a realizar las acciones más habituales con su dirección de correo electrónico desde la interfaz OWA.**

## Requisitos

- Disponer de una solución de correo electrónico de OVHcloud previamente configurada, entre las siguientes ofertas:
    - [**MX Plan**](/links/web/hosting), incluida en nuestros planes de alojamiento web o contratada como solución independiente;
    - [**Hosted Exchange**](/links/web/emails-hosted-exchange).
- Conocer las credenciales de acceso de la dirección de correo electrónico que se desea utilizar.

## Procedimiento

Esta guía le ayudará a comprender mejor las tareas habituales disponibles en una cuenta de correo en OWA. Sin embargo, dado que esta interfaz no ha sido creada originalmente por OVHcloud, no podemos proporcionar instrucciones específicas sobre parámetros que no se aborden en esta guía.

En cuanto a las funcionalidades específicas de Exchange, encontrará algunas guías adicionales en la sección [Más información](./#mas-informacion) al final de esta guía.

> [!primary]
>
> Después de iniciar sesión y familiarizarse con la interfaz, no es necesario seguir las instrucciones en el orden indicado.

### Acceder a OWA

Para iniciar sesión en OWA con su dirección de correo electrónico, abra la [página de inicio de sesión del webmail](/links/web/email). Introduzca su dirección de correo electrónico completa y su contraseña. A continuación, haga clic en `Iniciar sesión`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

Si es la primera vez que inicia sesión en OWA con esta dirección de correo electrónico, se le pedirá que defina el idioma de la interfaz y la zona horaria. A continuación, haga clic en `Guardar`{.action} para continuar.

> [!primary]
>
> Las zonas horarias se enumeran según [el estándar UTC (tiempo universal coordinado)](https://es.wikipedia.org/wiki/Tiempo_universal_coordinado), no por orden alfabético de las ciudades.
>
> **Ejemplo**: Para Europa Occidental, se trata de UTC +1 (Bruselas, Copenhague, Madrid, París).

![useowa](images/use-owa-step2.png){.thumbnail}

A partir de ahora, su bandeja de entrada aparecerá por defecto en cuanto inicie sesión.

![useowa](images/use-owa-step3.png){.thumbnail}

### Comprender la interfaz de OWA

La interfaz de OWA consta de varias secciones. Consulte la siguiente tabla y la imagen para familiarizarse con ella.

|Secciones|Descripción|  
|---|---|  
|Sección superior (1)|Dispone de dos barras de pestañas: la primera permite acceder a los parámetros generales (como la [sección Opciones](./#acceder-a-la-seccion-opciones)). La segunda barra puede utilizarse para realizar acciones específicas con su dirección (como enviar o responder a correos electrónicos).|  
|Lado izquierdo (2)|Muestra la lista de carpetas de su dirección de correo electrónico. Estas carpetas se presentan en forma de árbol que puede expandir u ocultar.|
|Segmento central (3)|Muestra la lista de mensajes (leídos y no leídos) de la carpeta seleccionada en el menú de la izquierda. Esta sección también puede mostrar los resultados de búsqueda.|
|Lado derecho (4)|Muestra el panel de lectura cuando se ha seleccionado un correo electrónico.|

![useowa](images/use-owa-step4.png){.thumbnail}

Tenga en cuenta que puede modificar el tamaño de las secciones verticales haciendo clic en sus líneas de borde y arrastrándolas.

### Visualizar los correos electrónicos

Para consultar sus correos electrónicos, seleccione una carpeta en el lado izquierdo. Los correos entrantes que no estén procesados por las reglas de correo se mostrarán en la carpeta "Bandeja de entrada". Para saber si ha recibido nuevos correos electrónicos, compruebe si aparece un número junto a la carpeta correspondiente.

![useowa](images/use-owa-step5.png){.thumbnail}

Para leer un correo electrónico, seleccione su carpeta si es necesario. A continuación, haga clic en el correo para mostrar su contenido en el panel de lectura. Los mensajes no leídos aparecen en negrita para distinguirlos de los mensajes leídos.

![useowa](images/use-owa-step6.png){.thumbnail}

### Ordenar y filtrar los correos electrónicos

En la parte superior derecha de la lista de mensajes, el botón `Filtrar`{.action} abre un menú que agrupa todas las opciones de visualización de la carpeta seleccionada.

- **Filtrar por categoría**: seleccione una entrada para mostrar únicamente una selección de correos electrónicos entre `Todos`{.action}, `No leídos`{.action}, `A mí`{.action} (correos dirigidos directamente a su dirección), `Marcado`{.action} (correos marcados para su seguimiento) o `Menciones`{.action} (correos en los que se menciona su dirección).

- **Ordenar por**: pase el cursor sobre la entrada `Ordenar por`{.action} para elegir el criterio de clasificación de los correos electrónicos: **Fecha**, **De**, **Para**, **Asunto**, **Datos adjuntos**, **Importancia** o **Tamaño**. La flecha a la izquierda del criterio indica el orden actual; haga clic de nuevo en el mismo criterio para invertirlo.

- **Mostrar como**: pase el cursor sobre la entrada `Mostrar como`{.action} para alternar entre la vista **Mensajes** (un correo por línea) o **Conversaciones** (correos agrupados por hilo de conversación).

### Enviar y responder

Para **enviar un nuevo mensaje**, haga clic en el icono `Nuevo`{.action} en la parte superior de la interfaz OWA. El panel de edición aparecerá en el lado derecho. Rellene los campos de su correo electrónico (destinatarios, asunto, cuerpo del mensaje, archivos adjuntos). Haga clic en `Enviar`{.action} una vez redactado el correo.

![useowa](images/use-owa-step7.png){.thumbnail}

Para **responder a un mensaje**, haga clic primero en él para mostrarlo. A continuación, haga clic en `Responder a todos`{.action} para responder al conjunto de destinatarios. Utilice el botón con la flecha hacia abajo si solo desea responder al remitente del correo (excluyendo a los destinatarios en copia) y haga clic en `Responder`{.action}.

![useowa](images/use-owa-step8.png){.thumbnail}

Cuando elige responder, el editor de respuesta rápida aparecerá encima del correo electrónico. Escriba allí su respuesta y, en cuanto esté listo para enviar el mensaje, haga clic en `Enviar`{.action}. Tenga en cuenta que, para cada opción de respuesta (como añadir una firma), antes debe ampliarla al panel de edición completo haciendo clic en el símbolo de la doble flecha.

![useowa](images/use-owa-step9.png){.thumbnail}

### Organizar su correo

OWA ofrece varias formas de organizar su correo. Puede:

- [crear carpetas y subcarpetas](./#crear-una-carpeta),
- [mover correos electrónicos](./#mover-correos-electronicos),
- [definir reglas](./#crear-reglas-de-gestion-del-correo) para realizar automáticamente acciones cuando reciba un nuevo correo,
- [bloquear a un remitente](./#bloquear-a-un-remitente) para no recibir más sus mensajes.

#### Crear una carpeta

Para crear una nueva carpeta, haga clic con el botón derecho sobre el nombre de su dirección de correo electrónico en el árbol de carpetas y seleccione `Crear nueva carpeta`{.action}. Puede crear una subcarpeta dentro de carpetas existentes de la misma forma haciendo clic en `Crear nueva subcarpeta`{.action}.

![useowa](images/use-owa-step10.png){.thumbnail}

#### Mover correos electrónicos

Para **mover un correo electrónico**, puede simplemente arrastrarlo y soltarlo en la carpeta de destino o hacer clic con el botón derecho y seleccionar `Mover`{.action}.
Para **mover varios correos electrónicos** simultáneamente, selecciónelos todos mediante su casilla de verificación. A continuación, haga clic en `Mover`{.action} (en el lado derecho) o en `Mover a`{.action} (en la sección superior). Después, elija la carpeta de destino.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Crear reglas de gestión del correo

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para crear y gestionar reglas, haga clic primero en el icono del engranaje en la parte superior y, a continuación, en `Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

En la nueva página que se abre, haga clic en `Reglas de bandeja de entrada y de limpieza`{.action} en el menú de la izquierda. En el árbol "Opciones", puede encontrar esta funcionalidad en "Correo", bajo "Procesamiento automático". Aquí puede crear, modificar y mover reglas de la lista.

Para añadir una nueva regla, haga clic en el botón `+`{.action}.

![useowa](images/use-owa-step13.png){.thumbnail}

Rellene la información solicitada en función de la tarea que desee realizar con esta regla. A continuación, haga clic en `Aceptar`{.action}.

![useowa](images/use-owa-step14.png){.thumbnail}

Para obtener instrucciones más detalladas sobre la creación de reglas de gestión de correo, consulte nuestra guía: [Creación de reglas de gestión de correo en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Bloquear a un remitente

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Haga clic en el icono del engranaje en la parte superior derecha y, a continuación, en `Opciones`{.action}. Igualmente en la columna de la izquierda, recorra el árbol "Correo" en "Cuentas" y, después, "Bloquear o permitir".

En la sección "**Remitentes bloqueados**", escriba una dirección de correo electrónico o un nombre de dominio que desee bloquear y haga clic en el botón `+`{.action} para añadirlo a la lista.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Gestionar sus contactos

Para gestionar sus contactos, haga clic primero en el botón azul del iniciador de aplicaciones en la parte superior izquierda de la página (que también da acceso al calendario, las tareas y otros módulos) y, a continuación, en `Contactos`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

En la nueva página, puede añadir un nuevo contacto, crear una lista de contactos y eliminar contactos existentes.

#### Añadir un contacto

Haga clic en `Nuevo`{.action} y, a continuación, introduzca los datos del contacto que desea añadir. Una vez hecho esto, haga clic en `Guardar`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

#### Crear una lista de contactos

Haga clic en la flecha hacia abajo junto a `Nuevo`{.action} y, a continuación, en `Lista de contactos`{.action}. Asígnele un nombre, añada contactos y haga clic en `Guardar`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Cambiar la contraseña

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Puede cambiar la contraseña de su cuenta cuando haya iniciado sesión en OWA. Para ello, haga clic en el icono del engranaje en la parte superior y, a continuación, en `Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

En la nueva página, despliegue la pestaña "General" en el árbol de la izquierda y, a continuación, haga clic en `Mi cuenta`{.action}. Por último, haga clic en `Cambiar la contraseña`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

En la nueva ventana que se abre, introduzca su contraseña actual. A continuación, escriba una nueva contraseña y confírmela introduciéndola de nuevo. Haga clic en `Guardar`{.action} para guardar la nueva contraseña.

> [!primary]
>
> No olvide introducir la nueva contraseña en todos sus dispositivos utilizados para acceder a esta cuenta (por ejemplo, en el cliente de correo). Si tiene problemas con su contraseña, póngase en contacto con su administrador de servicios.

![useowa](images/use-owa-step19.png){.thumbnail}

### Añadir una respuesta automática

En OWA, puede crear una respuesta automática en su correo para no dejar correos sin responder durante sus ausencias. Para ello, haga clic en el icono del engranaje en la parte superior y, a continuación, en `Respuestas automáticas`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

En la ventana que se abre, seleccione la opción "Enviar respuestas automáticas". Puede entonces configurar la respuesta automática para que cumpla varios criterios, como:

- enviar correos de respuesta automática durante un intervalo de tiempo fijo, o de forma continua hasta que se desactive manualmente;
- definir los remitentes que recibirán los correos de respuesta automática (solo remitentes internos, o incluir a los remitentes externos).

Rellene la información solicitada en función de la tarea que desee realizar con esta regla. Una vez hecho esto, haga clic en `Aceptar`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

Para obtener instrucciones más detalladas sobre la creación de respuestas automáticas, consulte nuestra guía: [Crear una respuesta automática en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Añadir una firma

Para añadir una firma electrónica, haga clic en el icono del engranaje en la parte superior y, a continuación, en `Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

En el lado izquierdo de la nueva página, haga clic en `Firma de correo electrónico`{.action}. En las opciones del árbol, este elemento se encuentra en "Correo" y "Diseño". Desde ahí, puede activar, desactivar y modificar la firma.

![useowa](images/use-owa-step22.png){.thumbnail}

Componga su firma electrónica en el cuadro del editor. Puede especificar si desea incluir la firma por defecto solo en los correos nuevos o también en las respuestas y los correos reenviados. Una vez haya terminado, haga clic en `Guardar`{.action} para confirmar.

Para obtener instrucciones sobre la creación de firmas automáticas mediante plantillas para todo el dominio, consulte nuestra guía: [Crear firmas automáticas](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Acceder a la sección Opciones

Para acceder a todos sus parámetros, haga clic en el icono del engranaje en la parte superior y, a continuación, en `Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Después puede navegar por el árbol "Opciones" en el lado izquierdo de la página. Desde esta página pueden realizarse otros ajustes sobre la presentación y el comportamiento de su cuenta de correo electrónico. Tenga en cuenta que, por motivos de seguridad, OVHcloud puede haber desactivado algunas opciones de la cuenta.

![useowa](images/use-owa-step23.png){.thumbnail}

### Gestión de cookies

El webmail utilizado para nuestras ofertas de correo se basa en el software Microsoft Outlook Web App. Por lo tanto, es susceptible de intercambiar metadatos con los servidores de Microsoft, en forma de cookies denominadas `appsforoffice.microsoft.com`.

Si desea desactivar estos intercambios, puede utilizar en su navegador una extensión de tipo bloqueador de contenidos (como uBlock Origin o Ghostery).
No obstante, la desactivación de estas cookies puede afectar a la estabilidad de su webmail.

## Más información

[Crear respuestas automáticas en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Compartir una carpeta desde la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Compartir calendarios a través de la interfaz OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Crear un grupo de contactos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Interactúe con nuestra [comunidad de usuarios](/links/community).
