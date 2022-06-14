---
title: 'Webmail: Guía de uso de Roundcube'
slug: webmail_guia_de_uso_de_roundcube
section: Primeros pasos
order: 05
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 31/05/2022**

## Objetivo

Con el MX Plan de OVHcloud, puede enviar y recibir mensajes de correo desde un programa de terceros o a través de un webmail. OVHcloud ofrece un servicio de correo en línea llamado Roundcube, que permite acceder a una cuenta de correo a través de un navegador web.

**Cómo utilizar el webmail Roundcube para sus direcciones de correo de OVHcloud**

## Requisitos

- Disponer de una solución de correo **MX Plan** de OVHcloud, [incluida](https://www.ovhcloud.com/es-es/web-hosting/) con un [alojamiento Start10M gratuito](https://www.ovhcloud.com/es-es/domains/free-web-hosting/) o contratada por separado como solución autónoma.
- Disponer de los datos de conexión a la dirección de correo electrónico MX Plan que quiera consultar. Para más información, consulte nuestra guía Primeros [pasos con la solución MX Plan](https://docs.ovh.com/es/emails/primeros-pasos-correo-compartido/).

## Procedimiento

### Conectarse al webmail Roundcube

Acceda a la página <https://www.ovh.com/es/mail/>. Introduzca una dirección de correo electrónico y la contraseña, y haga clic en `Conexión` {.action}. 

![hosting](images/webmail_login.png){.thumbnail}

El sistema le redirigirá a la interfaz Roundcube.

![hosting](images/roundcube01.png){.thumbnail}

> [!warning]
> 
> Si es redirigido a una interfaz **O**utlook **W**eb **A**ccess (OWA), significa que está en la última versión de la solución MX Plan. Para más información sobre la solución MX Plan, consulte nuestra página [Primeros pasos con la solución MX Plan](https://docs.ovh.com/es/emails/primeros-pasos-correo-compartido/).
>
> Para familiarizarse con la interfaz **OWA**, consulte nuestra guía [Consultar su cuenta de correo desde la interfaz OWA](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_2016_guia_de_uso_de_outlook_web_app/).

### Interfaz general del webmail Roundcube <a name="general-interface"></a>

Una vez que se haya conectado a su cuenta de correo, acceda a la ventana principal de Roundcube, que se compone de 3 zonas:

- [**Columna izquierda**](#leftcolumn): el árbol de su cuenta e-mail, compuesto de carpetas y subcarpetas. La carpeta principal es la `bandeja de entrada`.

- [**Ventana superior**](#topwindow): la lista de mensajes de correo de la carpeta seleccionada en la columna izquierda.

- [**Ventana inferior**](#lowerwindow): el contenido del correo electrónico seleccionado en la ventana superior.

#### Gestión de carpetas (columna izquierda) <a name="leftcolumn"></a>

En esta área aparecen las carpetas de su cuenta de correo.

Para gestionar con mayor precisión las carpetas, haga clic en la rueda dentada situada en la parte inferior de la columna y seleccione `Administrar carpetas`{.action}

![hosting](images/roundcube02.png){.thumbnail}

Para crear una carpeta, haga clic en el botón `+`{.action} en la parte inferior de la columna `Carpetas`.

Para eliminar una carpeta, seleccione la carpeta correspondiente, haga clic en el icono con forma de rueda dentada situado en la parte inferior de la columna `Carpetas` y seleccione `Eliminar`{.action}. Para borrar el contenido pero mantener la carpeta, haga clic en `Vaciar`{.action}.

Las casillas de verificación de las carpetas corresponden a "suscripciones". La suscripción determina si la carpeta debe mostrarse o no a nivel de la interfaz webmail o del cliente de correo, conservando el contenido de la carpeta. El objetivo es solo ocultar o mostrar una carpeta en la cuenta de correo.

> [!primary]
>
> Las carpetas con una casilla de verificación gris son carpetas especiales. No es posible eliminarlas o retirarlas.

#### Lista de mensajes recibidos/enviados (ventana superior) <a name="topwindow"></a>

Esta ventana muestra el contenido de la carpeta seleccionada en la columna izquierda. 

##### **Tipo de visualización**

Esta ventana se presenta en una forma que se puede personalizar. Para ello, haga clic en la rueda dentada situada en la parte superior izquierda de esta ventana.

![hosting](images/roundcube03.png){.thumbnail}

Es posible configurar los siguientes elementos:

- **Disposición**: permite determinar la disposición de las ventanas de gestión de una cuenta de correo.
- **Listar columnas**: permite añadir columnas (prioridades del correo, etc.).
- **Columna de ordenación**: permite elegir la columna en la que se realizará la ordenación predeterminada.
- **Criterio de ordenación**: permite elegir el orden ascendente o descendente, en función de la columna de orden.

##### **Acción sobre un mensaje de correo electrónico seleccionado**

Cuando se selecciona un mensaje de correo electrónico, es posible realizar cambios en el mismo. Acceda a las siguientes acciones:

- `Responder`{.action}: responder directamente al remitente.
- `Responder a todos`{.action}: responder directamente a todos los destinatarios de los campos "A" y "Copia".
- `Reenviar`{.action}: transferir el mensaje seleccionado a uno o más destinatarios.
- `Eliminar`{.action}: poner el e-mail seleccionado a la papelera.
- `SPAM`{.action}: colocar el correo electrónico seleccionado directamente en la bandeja de correo basura (Junk), etiquetarlo como **spam**.
- `Marcar`{.action}: determinar manualmente el estado de un email.
- `Más`{.action} 
    - `Imprimir este email`{.action}.
    - `Descargar (.eml)`{.action}: cargar la cabecera del mensaje de correo electrónico y su contenido.
    - `Editar como nuevo`{.action}: crear un nuevo mensaje de correo electrónico basado en la dirección de correo electrónico seleccionada.
    - `Mostrar código`{.action}: mostrar el mensaje de correo en bruto con el encabezado.
    - `Mover a`{.action}: mover el email a una carpeta.
    - `Copiar a`{.action}: copiar el email a una carpeta.
    - `Abrir en una nueva ventana`{.action}.


![hosting](images/roundcube04.png){.thumbnail}

> [!primary]
>
> Si uno de sus interlocutores solicita que se le acuse de lectura al leer su mensaje de correo electrónico, recibirá el siguiente mensaje: `el remitente de este mensaje ha solicitado que le avisen cuando lea este mensaje. ¿Desea avisar al remitente ?`
> 

##### **Buscar un email**

Una herramienta de búsqueda está disponible en la parte superior derecha de la interfaz.

Haga clic en la flecha situada a la derecha de la lupa para ver los filtros de búsqueda.


#### Contenido de un mensaje de correo (ventana inferior) <a name="lowerwindow"></a>

Cuando se selecciona un mensaje de correo electrónico en la lista, éste se muestra en la ventana inferior.

A la derecha encontrará los atajos para las siguientes funciones:

- Mostrar en formato HTML (predeterminado)
- Mostrar en formato de texto simple
- Responder
- Responder a todos
- Reenviar
- Abrir en nueva ventana

![hosting](images/roundcube05.png){.thumbnail}

### Configurar preferencias de la interfaz de Roundcube

Los siguientes capítulos de esta guía corresponden a las pestañas que componen la sección `Preferencias`{.action} de `Configuración`{.action} de Roundcube. Su descripción es incompleta.

![hosting](images/roundcube06.png){.thumbnail}

#### Interfaz de Usuario

Establezca aquí el `idioma` de uso de la interfaz de usuario Roundcube, la `zona horaria`, el `formato de hora` y el `formato de fecha`.

La opción `Transformar fechas recientes` permite mostrar la fecha de recepción/envío con términos relativos como "Hoy", "Ayer", etc.<br>
**Por ejemplo**: estamos el **19/05/2022**, se mostrará un email enviado/recibido el **17/05/2022** a las **17:38** en **Mar 17:38**, ya que el email corresponde al martes anterior.

La casilla `Display next list entry after delete/move` significa que después de realizar una acción de borrado o mover a un email, el elemento de la línea inferior se seleccionará sistemáticamente, independientemente del orden de clasificación. 

#### Vista de Buzón

Establezca aquí la usabilidad para visualizar y actuar en el correo. La opción `Disposición` permite organizar las 3 ventanas descritas en la sección [Interfaz general del webmail Roundcube](#topwindow).

#### Vista de Mensajes

Indique cómo se muestran los mensajes de correo.<br>
Es recomendable que la casilla `Mostrar en HTML` esté marcada para asegurarse de que los mensajes que haya recibido el remitente se muestren correctamente.<br>
También se recomienda mantener la opción `Allow remote resources (images, styles)` en `nunca`. para evitar que se carguen los elementos de un mensaje de correo electrónico que parezca malicioso.

#### Composición de Mensajes

Establezca la forma predeterminada para redactar un mensaje de correo o una respuesta.<br>
Le recomendamos que elija la opción `Redactar mensajes HTML` para `siempre`, ya que por defecto la herramienta de edición HTML no alterará la firma HTML.

#### Contactos

Personalice aquí la organización de los datos en su libreta de direcciones.

#### Carpetas especiales

Roundcube dispone de 4 carpetas especiales: `Borradores`, `Enviados`, `SPAM`, `Papelera`.

No recomendamos cambiarlos, pero es posible atribuir el comportamiento de una carpeta especial a otra carpeta creada posteriormente, gracias a los menús desplegables.<br>
**Por ejemplo**, puede asignar el comportamiento "borradores" a otra carpeta que haya creado. Los mensajes de correo electrónico que se registren en él serán considerados una mezcla hasta que se envíen efectivamente.

#### Configuración del servidor

En esta pestaña, puede optimizar el espacio ocupado de una cuenta de correo. La opción `Vaciar Papelera al cerrar sesión` permite evitar la acumulación de elementos eliminados. La opción `Directamente eliminar mensajes en SPAM` eliminará automáticamente todos los emails considerados como spam.

> [!warning]
> 
> No es recomendable activar la opción `Vaciar Papelera al cerrar sesión`, en caso de que un falso positivo (correo electrónico erróneamente declarado como "spam") se declare como spam para el servidor de recepción. De hecho, cuando un mensaje de correo electrónico se incluye en la carpeta "Correo electrónico", es posible comprobar si el correo es legítimo.

### Gestionar las identidades y su firma <a name="identity"></a>

En Roundcube, haga clic en `Configuración`{.action} en la barra superior y seleccione `Identidades`{.action} en la columna izquierda. "La identidad" permite personalizar los datos enviados a los destinatarios como, por ejemplo, el nombre de muestra o la firma.

![hosting](images/roundcube07.png){.thumbnail}

#### Configurar atributos de identidad 

- **Nombre de visualización**: este nombre aparecerá en el apartado "Remitente" del destinatario.
- **Correo electrónico**: es la dirección desde la que se envía el email.
- **Organización**: campo destinado al nombre de empresa, asociación, u otra entidad.
- **Responder a**: asignar otra dirección de correo electrónico de respuesta distinta de la del remitente.
- **Cco**: copiar una dirección de correo en caché durante un envío.
- **Establecer como predeterminado**: si hay varias identidades (firmas), esta se asigna por defecto.
- **Firma**: personalizar el pie de página de un mensaje de correo electrónico al redactar el código (nombre, apellidos, cargo ocupado, frases, imágenes..).
- **Firma HTML**: activa el formato HTML para la firma. 

> [!alert]
> 
> Completar la casilla **Correo electrónico** con una dirección de correo electrónico distinta de la que está conectado se considera una usurpación de identidad electrónica (*spoofing*). La dirección IP utilizada para el envío podría estar "prohibida" y/o considerarse "spam" ante sus destinatarios. 

#### Añadir una firma

Por defecto, la casilla de `firma` es "texto en claro". Este formato no permite editar o insertar una imagen en la firma. Para disfrutar de las opciones de edición avanzada para una firma, le recomendamos que active el modo HTML haciendo clic en **Firma HTML** bajo el recuadro de entrada.

> [!warning]
> 
> Por lo tanto, si la firma está en formato HTML, deberá pasar a modo HTML para redactar un mensaje de correo. Puede activar esta opción predeterminada para cada cuenta de correo electrónico desde la sección `Configuración`{.action} de la interfaz de Roundcube.
> Haga clic en `Preferencias`{.action} en la columna izquierda y seleccione `Composición de Mensajes`{.action}. Para la opción **Redactar mensajes HTMLL**, seleccione `Siempre`.
>

Para insertar una imagen en una firma, la imagen debe alojarse en un servidor (un alojamiento de OVHcloud u otro).<br>
**Importar una imagen desde un ordenador no permitirá su visualización**.

Haga clic en el botón `< >`{.action} de la barra de herramientas HTML e inserte el siguiente código, sustituyendo `your-image-url` por la dirección (URL) de la imagen y `text-if-image-is-not-displayed` por un texto que sustituya a la imagen si no puede mostrarse.

```bash
<img src="your-image-url" border="0" alt="text-if-image-is-not-displayed" />
```

![hosting](images/roundcube08.png){.thumbnail}

### Agenda de contactos

En la barra superior, haga clic en `Contactos`{.action} para acceder a la agenda de contactos. Este se divide en **3 columnas**:

- **Grupos**: en la libreta de direcciones, puede crear grupos para clasificar los contactos.
- **Contactos**: visualice los contactos de la libreta de direcciones o del grupo seleccionado.
- **Propiedades del contacto** o **Añadir contacto**: esta ventana aparece cuando se selecciona un contacto o se crea. Puede leer o modificar la información de un contacto.

![hosting](images/roundcube09.png){.thumbnail}

#### Grupos <a name="group"></a>

Los grupos son subcategorías de la libreta de direcciones. Permiten clasificar los contactos en subconjuntos. Por ejemplo, encontrará más fácilmente un contacto en un grupo que haya creado que en el conjunto de su libreta de direcciones. También permite enviar mensajes de correo electrónico añadiendo un grupo al destinatario, en lugar de añadir uno a uno de los contactos del grupo.

Para crear un grupo, haga clic en el botón `+`{.action} en la parte inferior de la columna `Grupos`. Indique el nombre del grupo y haga clic en `Guardar`{.action} para aceptar.

![hosting](images/roundcube10.png){.thumbnail}

Para asignar un contacto a uno de los grupos, seleccione un contacto en la columna `Contactos` y, en la ventana que aparece, haga clic en la pestaña `Grupos`{.action}. Marque el grupo que desee asignar al contacto.

#### Contactos <a name="contacts"></a>

En la columna `Grupos`, seleccione la libreta de direcciones o uno de los grupos.

> [!primary]
> 
> Cuando se crea un contacto desde un grupo seleccionado, el contacto se añadirá automáticamente al grupo.

Haga clic en el botón `+`{.action} de la columna `Contactos` para crear un contacto.

![hosting](images/roundcube11.png){.thumbnail}

Introduzca la información del contacto.

> [!primary]
> Puede añadir campos adicionales en el menú desplegable `Añadir campo...`{.action}, situado bajo los campos `Nombre` y `Dirección`.


#### Importar contactos

En la barra superior de la ventana de `Contactos`{.action}, haga clic en `importar`{.action} para abrir la ventana de importación.

- `Importar desde archivo`: seleccione un archivo CSV o vCard en su ordenador. Los contactos dentro de un archivo CSV deben estar separados por comas. El archivo no debe tener más de 20 MB.
- `Importar asignaciones de grupo`: Si los contactos de su archivo están repartidos por grupos, puede activar esta opción para volver a esta organización o dejar esta opción en `ninguna` para que ningún grupo esté asignado a los contactos.
- `Reemplazar toda la lista de contactos`: Si ya tiene configurada una agenda, le recomendamos que la exporte antes de marcar esta opción o que esté seguro de que quiere reemplazarla definitivamente.

![hosting](images/roundcube-import-contact.png){.thumbnail}

#### Exportar contactos Roundcube

En la ventana `Contactos`{.action}, haga clic en la flecha situada en la esquina superior derecha del botón `Exportar`{.action}.

Puede elegir entre:

- `Exportar todo`{.action} y todos los contactos se exportará a un archivo **.vcf**.
- `Exportar seleccionados`{.action} para exportar sólo los elementos seleccionados en la columna `Contactos`{.action}.

![hosting](images/roundcube-export-contact.png){.thumbnail}

### Respuestas (plantillas) <a name="responses"></a>

Esta función permite crear plantillas de respuesta al redactar un mensaje de correo electrónico.

En Roundcube, haga clic en `Configuración`{.action} en la columna izquierda y seleccione `Respuestas`{.action}.

Para añadir una respuesta, haga clic en el botón `+`{.action} situado en la parte inferior de la columna `Respuestas`.

![hosting](images/roundcube12.png){.thumbnail}

> [!primary]
> 
> Las "respuestas" se redactan en el formato "texto en claro".

### Redacción de un email

En la pestaña `Correo electrónico`{.action} de la barra superior, haga clic en `Editar`{.action}.

En la ventana de redacción de un mensaje de correo electrónico, encontrará los siguientes campos: 

- **De**: elegir una [identidad](#identity) para definir el remitente.
- **Destinatario** : añadir destinatarios y/o un [grupo de destinatarios](#group).

> [!primary]
> 
> El campo **"Destinatario"** no debe tener más de 100 destinatarios, sino que incluye los contactos contenidos en un [grupo](#group).

- **Añadir Cc** : añadir destinatarios en una simple copia.
- **Añadir Cco+** : añadir destinatarios en copia oculta. Los demás destinatarios del mensaje de correo electrónico no verán estos en Cci.
- **Añadir Seguir a** : enviar el mensaje de correo electrónico a los destinatarios.
- **Tipo de editor**:  
    - `sólo texto`: sólo texto sin formato.
    - `HTML`: texto con formato. Una barra de herramientas HTML aparece sobre la ventana de entrada.
- **Prioridad** del email.
- **Confirmación de recibo**: se solicita un acuse de recibo al destinatario.
- **Notificación de estado de la entrega** cuando el correo electrónico se haya enviado al destinatario.
- **Guardar mensaje enviado en**: elegir la carpeta en la que se almacenará una copia del email.

En la barra superior, puede elegir entre las siguientes acciones:

- `Cancelar`{.action} la redacción de un email con una solicitud de confirmación.
- `Enviar`{.action} un email.
- `Guardar`{.action} un email en la carpeta especial "borrado"
- ` Corrector ortográfico`{.action}, para verificar el texto, con un menú que permite elegir el idioma.
- `Adjuntar`{.action} un archivo a un email.
- `Firma`{.action}: añade la firma asociada a [la identidad](#identity) seleccionada.
- `Respuestas`{.action}: añade una plantilla preregistrada en la sección [Respuestas](#responses).

![hosting](images/roundcube13.png){.thumbnail}

## Más información

[Primeros pasos con la solución MX Plan](https://docs.ovh.com/es/emails/primeros-pasos-correo-compartido/)

[Cambiar la contraseña de una dirección de correo MX Plan](https://docs.ovh.com/es/emails/cambiar-contrasena-direccion-correo/)

[Crear filtros para sus direcciones de correo](https://docs.ovh.com/es/emails/correo_configuracion_de_los_filtros_de_correo_desde_el_area_de_cliente/)

[Utilizar las redirecciones de correo](https://docs.ovh.com/es/emails/correo_redirecciones_de_correo/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com>.
