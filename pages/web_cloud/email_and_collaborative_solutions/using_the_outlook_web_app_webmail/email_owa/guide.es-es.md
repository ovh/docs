---
title: 'Utilizar una dirección de correo desde Outlook en la Web'
excerpt: 'Cómo utilizar una dirección de correo electrónico desde el webmail Outlook en la Web'
updated: 2024-09-03
---

## Objetivo

Con las soluciones de correo de OVHcloud puede enviar y recibir correo utilizando el dispositivo y el cliente de correo que usted desee. Para poder iniciar sesión en una cuenta desde cualquier lugar a través de un navegador, OVHcloud ofrece un cliente de correo online llamado Outlook Web App (OWA). Nuestra [página de inicio de sesión de webmail](/links/web/email) es el único punto de acceso al OWA correspondiente para todas las cuentas activas de correo en MX Plan, Email Pro y Hosted Exchange.

**En esta guía aprenderá a realizar las acciones más habituales con su dirección de correo en la interfaz de OWA.**

## Requisitos

- Tener una solución de correo electrónico de OVHcloud configurada (**solución MX Plan**, disponible como parte de nuestros [planes de hospedaje web](/links/web/hosting), incluida en un [Alojamiento gratuito 100M](/links/web/domains-free-hosting) o contratada por separado como una solución independiente; [**Hosted Exchange**](/links/web/emails-hosted-exchange) o [**Email Pro**](/links/web/email-pro))
- Tener las credenciales de acceso de la dirección de correo electrónico que quiere configurar

## Procedimiento

Esta guía le permitirá comprender mejor las tareas más habituales de la cuenta de correo disponibles en el webmail de OWA. Sin embargo, como esta interfaz no ha sido creada originalmente por OVHcloud, no podemos proporcionarle instrucciones específicas sobre ninguna configuración que no aparezca en esta guía. En cuanto a las funcionalidades de Exchange, hemos preparado unas guías adicionales que podrá encontrar en la sección [**Más información**](./#mas-informacion_1).

> [!primary]
>
> Después de los dos primeros pasos, no es necesario seguir las instrucciones en un orden concreto.
>

### 1. Acceder a OWA

Para acceder al webmail de OWA con su dirección de correo electrónico, diríjase a la [página de inicio de sesión](/links/web/email). Introduzca su dirección de correo electrónico completa y su contraseña, y haga clic en el botón `Iniciar sesión`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

> [!warning]
> 
> Si se le redirige a una interfaz **Roundcube**, significa que se encuentra en la versión antigua del servicio MX Plan. Para más información sobre la solución MX Plan, consulte nuestra página [Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Para familiarizarse con la interfaz **Roundcube**, consulte nuestra guía [Webmail: Guía de uso de Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

Si es la primera vez que inicia sesión en OWA con esta dirección de correo electrónico, se le pedirá que especifique el idioma de la interfaz y la zona horaria. Haga clic en `Guardar`{.action} para continuar.

> [!primary]
>
> Las zonas horarias se enumeran según [el estándar UTC (hora universal coordinada)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time#/media/File:World_Time_Zones_Map.png), no por orden alfabético de ciudades.
>
> **Ejemplo** : Para Europa Occidental, se trata de UTC +1 (Bruselas, Copenhague, Madrid, París).

![useowa](images/use-owa-step2.png){.thumbnail}

De aquí en adelante, tras iniciar sesión, accederá por defecto a su bandeja de entrada.

![useowa](images/use-owa-step3.png){.thumbnail}

### 2. Comprender la disposición de OWA

Existen varias secciones en la interfaz de OWA. Por favor, consulte la tabla y la imagen siguientes para familiarizase con ellas.

|Secciones|Descripción|  
|---|---|  
|Parte superior (1)|Contiene dos barras de pestaña: la primera permite acceder a la configuración general (como la [sección de opciones](./#acceder-a-la-seccion-de-opciones)), y la segunda se utiliza para acceder a acciones específicas con su dirección de correo (como enviar o responder correos electrónicos).|  
|Barra lateral izquierda (2)|Muestra la lista de carpetas de su dirección de correo. Aparecen en un árbol de carpetas que se puede expandir u ocultar.|
|Parte central (3)|Muestra la lista de mensajes (leídos y no leídos) de la carpeta seleccionada en el menú de la izquierda. En esta sección también se muestran los resultados de una búsqueda.|
|Barra lateral derecha (4)|Muestra el panel de lectura cuando se ha seleccionado un correo electrónico.|

![useowa](images/use-owa-step4.png){.thumbnail}

Puede cambiar el tamaño de las secciones verticales haciendo clic en las líneas de los bordes y arrastrándolas.

### Visualizar los correos electrónicos

Para ver sus correos, seleccione una carpeta de la barra de la izquierda. Los correos entrantes que no sigan ninguna regla de la bandeja de entrada llegarán a la carpeta «Bandeja de entrada». Para ver si ha recibido algún correo nuevo, compruebe si aparece un número junto a la carpeta correspondiente.

![useowa](images/use-owa-step5.png){.thumbnail}

Para leer un correo, seleccione la carpeta correspondiente en caso necesario. Haga clic en el correo para mostrar su contenido en la sección de lectura. Los mensajes no leídos aparecen en un color diferente para diferenciarlos de los mensajes leídos.

![useowa](images/use-owa-step6.png){.thumbnail}

### Enviar y responder

**Para enviar un correo nuevo**, haga clic en `Nuevo`{.action} en la parte superior de la interfaz del webmail. El panel de edición aparecerá en el lado derecho. Complete los campos del correo (destinatarios, asunto, cuerpo del mensaje, archivos adjuntos). Cuando el correo esté listo, haga clic en el botón `Enviar`{.action}.

![useowa](images/use-owa-step7.png){.thumbnail}

**Para responder a un correo**, [pulse sobre él](./#visualizar-los-correos-electronicos) para visualizarlo. A continuación, haga clic en el botón `Responder a todos`{.action}. Utilice el botón de flecha hacia abajo si solo desea responder al remitente del correo (eliminando a cualquier destinatario que esté en copia).

![useowa](images/use-owa-step8.png){.thumbnail}

Cuando elige responder, el editor de respuesta rápida aparece encima del correo. Escriba su respuesta en esta sección y una vez que haya terminado, haga clic en `Enviar`{.action}. Tenga en cuenta que si quiere añadir cualquier opción de respuesta (como, por ejemplo, adjuntar una firma), debe abrir primero el panel de edición al completo haciendo clic en el símbolo de flecha doble.

![useowa](images/use-owa-step9.png){.thumbnail}

### Organizar su bandeja de entrada

OWA le permite organizar su bandeja de entrada de distintas formas. Puede

- [crear carpetas y subcarpetas](./#crear-una-carpeta)
- [mover correos](./#mover-correos)
- [crear reglas](./#crear-reglas-de-la-bandeja-de-entrada) para determinar las acciones que se realizarán de manera automática cuando llegue un correo nuevo

#### Crear una carpeta

Para crear una carpeta nueva, haga clic derecho sobre el nombre de su dirección de correo en el árbol de carpetas y seleccione `Crear carpeta nueva`{.action}. Puede crear subcarpetas en carpetas existentes de la misma formar (`Crear subcarpeta nueva`{.action}). 

![useowa](images/use-owa-step10.png){.thumbnail}

#### Mover correos

**Para mover un correo**, puede simplemente arrastrarlo y soltarlo en la carpeta de destino o hacer clic derecho sobre él y seleccionar `Mover`{.action}.
**Para mover varios correos** a la vez, selecciónelos marcando sus casillas de verificación, y haga clic en `Mover`{.action} (en la barra lateral derecha) o en `Mover a`{.action}(en la sección superior). A continuación, seleccione la carpeta de destino.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Crear reglas de la bandeja de entrada

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/xnq6wvANUFs?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Para gestionar las reglas, haga clic en el símbolo de engranaje en la parte superior, y después en`Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

En la página nueva que aparece, seleccione `Reglas de la bandeja de entrada y de limpieza`{.action} del menú de la izquierda. En el árbol de «Opciones» puede encontrar este elemento dentro de «Correo», en «Procesamiento automático». Desde aquí puede crear, editar, eliminar y mover reglas en la lista. 

Para añadir una nueva regla, haga clic en el botón `+`{.action}. 

![useowa](images/use-owa-step13.png){.thumbnail}

Rellene la información solicitada según la acción que quiere que lleve a cabo la regla. Después, haga clic en `OK`{.action}. 

![useowa](images/use-owa-step14.png){.thumbnail}

Para obtener instrucciones más detalladas sobre la creación de reglas de la bandeja de entrada, consulte nuestra guía: [Crear reglas de la bandeja de entrada en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Bloquear un remitente

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/2jia2s1_oIw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Haga clic en el símbolo de engranaje en la esquina superior derecha y seleccione `Opciones`{.action}. En la columna de la izquierda, siga el árbol "Correo" en "Cuentas" > "Bloquear o autorizar".

En la sección "**Remitentes bloqueados**", escriba una dirección de correo electrónico o un nombre de dominio que desea bloquear y haga clic en el botón `+`{.action} para añadirlo a la lista.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Gestionar una lista de contactos

Para gestionar sus contactos, haga clic en el botón azul del «lanzador de aplicaciones» de la parte superior, y haga clic en `Personas`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

En la página que aparece, puede añadir nuevos contactos, crear una lista de contactos o eliminar contactos existentes.

**Para añadir un nuevo contacto**, haga clic en `Nuevo`{.action} e introduzca la información del contacto que desea añadir. Una vez hecho esto, haga clic en `Guardar`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

**Para crear una lista de contactos**, haga clic en el icono de la flecha desplegable junto a «Nuevo» y haga clic en `Lista de contactos`{.action}. Asígnele un nombre a la lista, añada los contactos y haga clic en `Guardar`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Cambiar la contraseña

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/xnq6wvANUFs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Puede cambiar la contraseña de su cuenta cuando haya iniciado sesión en OWA. Para ello, haga clic en el símbolo de engranaje en la parte superior, y después en`Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

En la página que aparece, amplíe la pestaña «General» en el árbol de opciones de la barra de la izquierda y haga clic en `Mi cuenta`{.action}. Finalmente, haga clic en `Cambiar contraseña`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

En la nueva ventana emergente, introduzca su contraseña actual. A continuación, introduzca la nueva contraseña, y escríbala de nuevo para confirmarla. Haga clic en el botón `Guardar`{.action} para guardar la nueva contraseña.

> [!primary]
>
> Recuerde que debe introducir la nueva contraseña en todos los dispositivos que utilice, es decir, en los clientes de correo que utilice para acceder a esta cuenta. Si tiene algún problema con su contraseña, póngase en contacto con el administrador del servicio.
>

![useowa](images/use-owa-step19.png){.thumbnail}

### Añadir una respuesta automática

En OWA puede crear una respuesta automática en su dirección de correo para no dejar correos sin responder durante su ausencia. Para ello, haga clic en el símbolo de engranaje en la parte superior, y después en`Respuestas automáticas`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

En la ventana que aparece, seleccione la opción «Enviar respuestas automáticas». Aquí podrá configurar el contestador automático para que se adapte a varios criterios:

- Enviar correos electrónicos de respuesta automática durante un intervalo de tiempo determinado, o de forma continua hasta que se desactive manualmente.
- Definir los remitentes que recibirán correos de respuesta automática (solo remitentes internos, o incluir remitentes externos).

Rellene la información solicitada según la acción que quiere que se lleve a cabo. Una vez hecho esto, haga clic en OK.

![useowa](images/use-owa-step21.png){.thumbnail}

Para obtener instrucciones más detalladas sobre la creación de respuestas automáticas, consulte nuestra guía: [Crear respuestas automáticas en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Añadir una firma

Para añadir una firma, haga clic en el símbolo de engranaje en la parte superior, y después en`Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

En la barra de la izquierda de la página nueva, haga clic en `Firma de correo electrónico`{.action}. En el árbol de opciones, este elemento se encuentra en «Correo», en «Disposición». En esta sección puede activar, desactivar y editar la firma.

![useowa](images/use-owa-step22.png){.thumbnail}

Introduzca su firma electrónica en el cuadro de edición. Puede especificar si quiere incluir la firma por defecto solo en los correos nuevos o también en respuestas o correos reenviados. Una vez haya terminado, haga clic en `Guardar`{.action} para confirmar.

Para obtener instrucciones sobre la creación de firmas automáticas mediante el uso de plantillas para todos los dominios, consulte nuestra guía: [Creación de firmas automáticas](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Acceder a la sección de opciones

Para acceder a todos los ajustes, haga clic en el símbolo de engranaje en la parte superior, y después en `Opciones`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Puede navegar por el árbol de «Opciones» de la parte izquierda de la página. Desde esta sección podrá realizar más ajustes en cuanto a la disposición y comportamiento de su cuenta de correo electrónico. Tenga en cuenta que algunas de las opciones de la cuenta pueden estar desactivadas por nuestra parte por razones de seguridad.

![useowa](images/use-owa-step23.png){.thumbnail}

### Gestión de cookies

El webmail utilizado para nuestros productos de correo está basado en el programa Microsoft Outlook Web App. por lo que es susceptible de intercambiar metadatos con los servidores de Microsoft, en forma de cookies llamadas `appsforoffice.microsoft.com`.

Si desea desactivar estos intercambios, puede utilizar en su navegador una extensión de tipo bloqueador de contenidos (como uBlock Origin o Ghostery).
No obstante, la desactivación de estas cookies puede afectar a la estabilidad de su webmail.

## Más información

[Crear respuestas automáticas en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Compartir carpetas en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Compartir calendarios en OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Crear grupos de contactos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.