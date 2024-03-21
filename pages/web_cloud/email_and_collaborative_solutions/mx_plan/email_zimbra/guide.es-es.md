---
title: "MX Plan - Utilizar el webmail Zimbra"
excerpt: "Descubra la interfaz del webmail Zimbra para sus cuentas MX Plan OVHcloud"
updated: 2024-03-11
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
>
> **Importante**
>
> El webmail Zimbra para MX Plan es un producto en desarrollo.
>
> Actualmente solo está disponible para migraciones relacionadas con la evolución de nuestra solución MX Plan. Esta migración es automática. Nuestros equipos le enviarán un mensaje de correo electrónico cuando la migración le afecte.
>
> Para más información, consulte nuestras [FAQ sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra).

## Objetivo

Con el MX Plan de OVHcloud, puede enviar y recibir mensajes de correo electrónico desde un cliente de correo (Thunderbird, Outlook, Mail de Mac) o a través de un webmail directamente en el navegador de internet de su dispositivo.<br>
OVHcloud ofrece un servicio de webmail denominado Zimbra para acceder a una cuenta de correo de tipo MX Plan. En esta página explicaremos las funcionalidades necesarias para utilizar este webmail.

**Cómo utilizar el webmail Zimbra para las cuentas MX Plan de OVHcloud**

## Requisitos

- Disponer de una solución de correo electrónico **MX Plan** de OVHcloud, incluida en nuestros [planes de hosting](https://www.ovhcloud.com/es-es/web-hosting/), incluida en un [alojamiento gratuito 100M](https://www.ovhcloud.com/es-es/domains/free-web-hosting/) o contratada como solución independiente.
- Disponer de los datos de conexión a la dirección de correo electrónico MX Plan que quiera consultar. Para más información, consulte nuestra guía [Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

## Procedimiento

**Índice**

- [Conectarse al webmail Zimbra](#login)
- [Interfaz general del webmail Zimbra](#general-interface)
- [Gestión de las carpetas de su cuenta de correo](#folders-management)
    - [Los expedientes especiales](#folders-specials)
    - [Crear carpetas](#folders-creation)
 - [Tratamiento del correo](#email-management)
    - [Acción en un correo electrónico seleccionado](#email-action)
    - [Buscar un correo electrónico](#email-search)
- [Redactar un email](#email-writing)
- [Configurar las preferencias de la interfaz Zimbra](#settings)
- [Contactos](#contacts)
    - [Gestión de carpetas](#contacts-folders)
    - [Gestión de listas](#contacts-lists)
    - [Importar y exportar contactos](#import-export)
- [Filtros](#filters)
    - [Cómo configurar los filtros](#filters-howto)
    - [Crear un filtro](#filters-creation)
- [Delegaciones](#delegations)
- [Firmas](#signatures)
- [Respuestas automáticas / Respondedor](#auto-reply)

### Conectarse al webmail Zimbra <a name="login"></a>

Acceda a la página <https://www.ovh.com/es-es/mail/>. Introduzca su dirección de correo electrónico y la contraseña y haga clic en `Conexión`{.action}.

![Zimbra - connexion](images/ovhcloud-login-webmail.png){.thumbnail}

Será redirigido a la interfaz Zimbra.

![Zimbra - interface](images/zimbra-01.png){.thumbnail}

### Interfaz general del webmail Zimbra <a name="general-interface"></a>

Una vez que se haya conectado a su cuenta de correo electrónico, podrá acceder a la ventana principal de Zimbra, que se compone de 3 zonas:

> [!tabs]
> **Menú superior**
>>
>> - **(1)** Esta área de la interfaz le permite elegir una de las funcionalidades disponibles en su cuenta de correo electrónico, `correo` o `contactos`. De forma predeterminada, se encuentra en la ficha `correo`.
>> - **(2)** Una barra de búsqueda le permite encontrar mensajes o contactos.
>> - **(3)** El menú de gestión del perfil de su cuenta de correo y el botón de acceso a los ajustes **(4)**.
>>
>> ![Zimbra - menú superior](images/zimbra-02.png){.thumbnail}
>>
> **Columna izquierda**
>>
>> De forma predeterminada, es el árbol de su cuenta de correo, compuesto por carpetas y subcarpetas. La carpeta principal es `Recepción`.
>>
>> ![Zimbra - arborescence](images/zimbra-03.png){.thumbnail}
>>
> **Ventana central**
>>
>> De forma predeterminada, los mensajes de correo electrónico se muestran en esta área, que contiene dos partes:
>>
>> - **(1)** la lista de elementos
>> - **(2)** el contenido del elemento seleccionado
>>
>> ![Zimbra - E-mails](images/zimbra-04.png){.thumbnail}
>>

### Gestión de las carpetas de su cuenta de correo (columna izquierda) <a name="folders-management"></a>

En esta área aparecen las carpetas de su cuenta de correo. En ella encontrará las carpetas **especiales** que ya existen (en naranja) y las carpetas que usted haya **creado** (en verde).

![Zimbra - dossiers](images/zimbra-05.png){.thumbnail}

#### Los expedientes especiales <a name="folders-specials"></a>

Las carpetas especiales son creadas automáticamente por el servidor de correo y constituyen la mayor parte de una cuenta de correo.

- **Bandeja de entrada**: los mensajes de correo electrónico se entregan de forma predeterminada en esta carpeta (sin filtros aplicados).
- **Borradores**: los mensajes redactados pero no enviados se guardan en esta carpeta.
- **Enviados**: los mensajes enviados se almacenan automáticamente en esta carpeta.
- **Archivo**: carpeta por defecto para clasificar los mensajes de correo electrónico procesados.
- **Spam**: carpeta en la que se almacenan los mensajes de correo electrónico que se consideran correo no deseado.
- **Papelera** de reciclaje: Los mensajes eliminados se almacenan en esta carpeta antes de eliminarse definitivamente.

> [!primary]
>
> Las carpetas especiales no se pueden eliminar.

#### Crear carpetas <a name="folders-creation"></a>

Para clasificar el correo según sus necesidades, puede crear sus propios registros.

Para crear una carpeta, haga clic en el botón `+ Agregar una carpeta`{.action} en la parte inferior de la columna.

También puede crear una subcarpeta haciendo clic derecho en la carpeta que desee y, a continuación, haciendo clic en `Crear subcarpeta`{.action}.

> [!primary]
>
> Las carpetas "Borradores", "Spam" y "Papelera" no pueden contener subcarpetas.

### Tratamiento del correo <a name="email-management"></a>

Al seleccionar una carpeta o subcarpeta en la columna de la izquierda, la lista de mensajes de correo electrónico contenidos en ella se muestra en la columna del centro. A continuación, haga clic en el mensaje de correo electrónico que desee para ver su contenido en la ventana de la derecha.

> [!primary]
>
> **Tipo de visualización**
>
> La presentación de sus mensajes de correo se presenta de una forma que puede modificarse. Para ello, haga clic en el botón `Ver`{.action} situado en la esquina superior derecha de esta ventana.

#### Acción en un correo electrónico seleccionado <a name="email-action"></a>

Al seleccionar un mensaje de correo electrónico, podrá realizar diversas acciones:

- 1.**Responder**: responder directamente al remitente.
- 2.**Responder a todos**: responder directamente a todos los destinatarios de los campos "Para" y "CC".
- 3.**Reenviar**: reenviar el correo electrónico seleccionado a uno o varios destinatarios.
- 4.**Archivo** : Mover el correo a la carpeta "Archivo" de su cuenta de correo.
- 5.**Mover**: mover el correo a una de las carpetas de la cuenta de correo.
- 6.**Eliminar**: Colocar el correo electrónico seleccionado en la papelera de reciclaje.
- 7.**Basura**: Colocar el correo electrónico seleccionado directamente en la carpeta de correo no deseado (SPAM).
- 8.**Más**
    - **Marcar como leído**.
    - **Marcar como no leído**.
    - **Estrella**: asignar una estrella a su correo electrónico para resaltarlo e identificarlo más fácilmente.
    - **Desmarcar estrella**: eliminar la estrella asignada a este mensaje de correo electrónico.
    - **Mostrar original**: Mostrar el mensaje completo, cuerpo y encabezado.
    - **Nuevo filtro**: crea un filtro a partir del remitente y el asunto del mensaje seleccionado.
    - **Imprimir**: Imprimir la conversación o el mensaje de correo electrónico seleccionados.
- 9.**Ver**: seleccione una de las 3 distribuciones para ver sus carpetas y mensajes de correo electrónico.

![Zimbra - acciones](images/zimbra-07.png){.thumbnail}

Para acceder a estas opciones, haga clic derecho en cada uno de los mensajes de la columna central.

> [!primary]
>
> Si uno de sus interlocutores solicita una confirmación de lectura cuando lea su mensaje de correo electrónico, recibirá el siguiente mensaje: `John ha solicitado un acuse de lectura para este mensaje. Enviar una confirmación de lectura`.
>

#### Buscar un correo electrónico <a name="email-search"></a>

Si quiere encontrar un mensaje de correo electrónico, utilice la barra de búsqueda situada en la parte superior de la interfaz. A continuación, puede realizar una **búsqueda simple** o una **búsqueda avanzada**, como se describe en las fichas siguientes:

> [!tabs]
> **Búsqueda simple**
>>
>> Escriba la palabra o palabras clave que desea buscar en la barra de búsqueda y pulse la tecla `Entrar` para confirmar la búsqueda. Las palabras aparecerán resaltadas en los resultados.
>>
>> > Si sabe dónde buscar el elemento, puede escribir palabras clave (**from**, **to**, **cc**, **subject**, etc.) seguidas de dos puntos (`:`) y buscar el elemento en el cuadro de texto de búsqueda. Por ejemplo, si desea buscar rápidamente un remitente, puede escribir "from:" antes de la dirección de correo electrónico que desea buscar. Por ejemplo, "from: address@example.com".
>>
>> ![Zimbra - recherche simple](images/zimbra-08.png){.thumbnail}
>>
> **Búsqueda avanzada**
>>
>> Para obtener una búsqueda más precisa, haga clic en la esquina superior derecha de la barra de búsqueda. De esta forma, podrá limitar la búsqueda a una carpeta, un intervalo de tiempo, el asunto o el cuerpo del mensaje, etc.
>>
>> ![Zimbra - Búsqueda avanzada](images/zimbra-09.png){.thumbnail}
>>

### Redactar un email <a name="email-writing"></a>

Para redactar un nuevo mensaje de correo electrónico, haga clic en el botón `Nuevo Mensaje`{.action} (1) situado en la parte superior izquierda de la ventana de Zimbra.

![Zimbra - Redactar un email](images/zimbra-10.png){.thumbnail}

> [!tabs]
> **Encabezado**
>>
>> El encabezado permite completar los siguientes campos:
>>
>> - **De** : la dirección desde la que se envía el correo. Por defecto, es su dirección de correo electrónico. Puede cambiar su dirección de correo electrónico haciendo clic en el paréntesis angular situado al final de la línea correspondiente a su dirección de correo electrónico, solo si se ha establecido una [delegación](#delegations).<br>
>> - **Para**: el/los destinatario/s de su correo electrónico. Haga clic en `Para`{.action} para acceder a su [agenda de contactos](#contacts) y seleccionar sus destinatarios.<br>
>> - **CC**: Haga clic en `Cc/Cco`{.action} a la derecha del campo `Para`{.action} mostrar este campo. La copia es un campo destinatario que permite enviar el correo en copia a las personas que desea integrar en un bucle sin que se consideren como destinatarios directos del correo (a diferencia de los destinatarios del campo "**Para**").<br>
>> - **CCO**: Haga clic en `CCO`{.action} a la derecha del campo `Para`{.action} mostrar este campo. La copia oculta es un campo de destinatario que permite transmitir un mensaje de correo electrónico sin que los otros destinatarios vean a la persona o personas en "**CCO**".<br>
>> - **Asunto**: título del mensaje de correo electrónico, el primer elemento visible en la recepción antes de abrir el mensaje.<br>
>> - `...`{.action}: situado a la derecha del campo `De`{.action}, le da acceso a 3 opciones:<br>
>>    - Puede marcar su correo como prioritario marcando la opción `Prioridad alta`.<br>
>>    - Haga clic en `Solicitar confirmación de lectura` para solicitar confirmación de lectura del destinatario.<br>
>>    - La función `Texto sin formato` desactivará las funciones de diseño HTML del correo electrónico. <br>
>>
>> ![Zimbra - en-tête](images/zimbra-11.png){.thumbnail}
>>
> **Cuerpo del mensaje**
>>
>> Para redactar el cuerpo de su mensaje, dispone de una barra de herramientas HTML en la parte inferior de su ventana. De este modo, podrá redactar sus mensajes de correo electrónico con el diseño de la página directamente desde su navegador. Además, el botón `< >`{.action} (situado al final de la línea correspondiente a la barra de herramientas) abre una ventana en la que puede pegar un mensaje de correo electrónico preescrito desde una herramienta externa.
>>
>> ![Zimbra - cuerpo](images/zimbra-12.png){.thumbnail}
>>

Después de redactar el mensaje de correo electrónico, antes de hacer clic en `Enviar`{.action}, puede adjuntarlo haciendo clic en el icono de clip situado junto al botón `Enviar`{.action}.

![Zimbra - archivo adjunto](images/zimbra-13.png){.thumbnail}

> [!success]
> **Cancelar un envío**
> 
> Si ha activado la opción `Deshacer envío` en la sección "**Escribir un email**" de las preferencias de Zimbra, puede hacer clic en `DESHACER`{.action} para cancelar el envío.
> Este botón permanece disponible durante unos 5 segundos.
>
> ![Zimbra - cancelar un envío](images/zimbra-cancel-email.png){.thumbnail .w-400}

### Configurar las preferencias de la interfaz Zimbra <a name="settings"></a>

Su interfaz Zimbra dispone de 2 menús de configuración:

![Zimbra: preferencias](images/zimbra-14.png){.thumbnail}

- **(1) Perfil**: haga clic en el nombre de su cuenta de correo en la parte superior derecha de su interfaz. Desde este menú, podrá "**Cambiar contraseña**" de su dirección de correo electrónico, "**Cambiar la imagen del perfil**" o desconectarse haciendo clic en "**Cerrar sesión**".

- **(2) Ajustes**: haga clic en la rueda dentada en la parte superior derecha de su interfaz para acceder a los cambios de "**Idioma**" de su interfaz. En la sección "**Ayuda**" puede consultar la documentación oficial de Zimbra. En "**Configuración**", encontrará todos los elementos de configuración descritos en las fichas siguientes:

> [!tabs]
> **General**
>>
>> Desde esta pestaña, puede consultar el espacio ocupado en su cuenta de correo y configurar el formato en el que quiere que se muestren la fecha y la hora de sus mensajes.
>>
> **Ver mensajes**
>>
>> Consulte aquí los elementos asociados a la visualización de sus elementos en su cuenta de correo.
>>
>> - **Al ver la lista de mensajes**: estas opciones permiten organizar la lista de los mensajes de correo en grupos de conversaciones y mostrar más detalles en la vista previa.
>> - **Panel de vista previa** : seleccione una de las tres configuraciones para ver sus carpetas y mensajes de correo electrónico. Esta opción recoge las opciones que aparecen en el botón `Ver`{.action} cuando se visualizan los mensajes de correo.
>> - **Densidad de la lista de mensajes**
>> - **Marcar como leído** : Puede retrasar el cambio de estado de su correo electrónico a "leído" cuando haga clic en él o decidir no hacer nada y dejarlo como "no leído" sin que usted realice ninguna acción.
>> - **Revisar correo nuevo** : establezca la frecuencia de sincronización de los mensajes recibidos desde su interfaz Zimbra.
>> - **Confirmaciones de lectura** : permite definir el comportamiento de Zimbra al abrir un mensaje de correo electrónico con confirmación de lectura.
>> - **Notificaciones de correo nuevo** : habilite las notificaciones cuando se reciba un mensaje.
>> - **Mostrar imágenes en mensajes** : muestra o no las fotos al abrir un correo electrónico.
>> - **Ver correo como texto sin formato** : esta opción muestra el mensaje de correo electrónico en formato sin formato.
>> - **Mostrar imágenes de forma predeterminada en el correo de estas direcciones o dominios de confianza**: defina las direcciones de correo electrónico de confianza para las que pueden mostrarse las imágenes al abrirlas.
>>
> **Redactar mensajes**
>>
>> - **Deshacer envío** : Esta opción permite mostrar un banner, durante 5 segundos, que permite cancelar el envío de un email.
>> - **Solicitar notificación de lectura** : esta opción envía una solicitud de confirmación de lectura a los destinatarios cuando les envía un mensaje de correo electrónico.
>> - **Guardar una copia en la carpeta Enviados** : Esta opción, marcada por defecto, guarda los mensajes enviados en la carpeta "*Enviado" de su cuenta de correo.
>> - **Delegados** : consulte la sección [Delegaciones](#delegations) de esta guía para comprender su uso.
>> - **Delegar la configuración de envío** : consulte el tema [Delegaciones](#delegations) de esta guía para comprender cómo se utiliza.
>> - **Redactor**: puede establecer su estilo de escritura predeterminado al iniciar la redacción de un mensaje de correo electrónico.
>>
> **Firmas**
>>
>> Este espacio le permite crear sus firmas.<br>
>>
>> - **Firma Estándar**: Introduzca la firma que desea que aparezca al redactar un nuevo mensaje de correo electrónico.
>> - **Firma de respuesta o reenvío**: permite añadir una firma diferente al responder o reenviar un mensaje de correo electrónico.
>>
> **Fuera de la oficina**
>>
>> Esta pestaña designa la funcionalidad de "contestador". Para configurar sus contestadores, consulte la sección "[Respuestas automáticas / Contestador](#auto-reply)" de esta guía.
>>
> **Filtros**
>>
>> Para configurar los filtros, consulte la sección "[Filtros](#filters)" de esta documentación.
>>

### Contactos <a name="contacts"></a>

Haga clic en `Contactos` en la barra superior para acceder a la agenda de contactos. Este se divide en **3 partes**:

- **(1) Carpetas** (izquierda): en la Libreta de direcciones, puede crear carpetas para clasificar y agrupar los contactos.
- **(2) Lista de contactos** (centro): vea los contactos de la libreta de direcciones o carpeta seleccionada.
- **(3) Propiedades del contacto** o **Nuevo contacto** (derecha): esta ventana aparece cuando se selecciona un contacto o se está creando. Puede leer o editar la información de un contacto.

![Zimbra - contactos](images/zimbra-15.png){.thumbnail}

Para crear un nuevo contacto, haga clic en el botón `Nuevo contacto`{.action} situado en la parte superior de la columna izquierda.

Rellene los campos según la información de contacto que tenga. Puede agregar una imagen haciendo clic en el icono de perfil en la parte superior derecha del formulario.

A continuación, haga clic en `Guardar`{.action}.

![Zimbra: nuevo contacto](images/zimbra-16.png){.thumbnail}

#### Gestión de carpetas de contactos <a name="contacts-folders"></a>

Al igual que en los mensajes de correo, las carpetas de contactos especiales las crea automáticamente el servidor de correo.

- **Contactos**: los contactos se almacenan de forma predeterminada en esta carpeta.
- **Papelera** de reciclaje: los contactos eliminados se almacenan en esta carpeta antes de eliminarse definitivamente.
- **Contactos por correo** electrónico: los contactos con los que ha intercambiado se guardan en esta carpeta.

Puede crear carpetas y subcarpetas. Permiten clasificar los contactos en subconjuntos. Esto facilita la búsqueda de un contacto en una carpeta que haya creado en lugar de en toda la libreta de direcciones.

Para crear una carpeta, haga clic en el botón `+ Agregar una carpeta`{.action} en la parte inferior de la columna izquierda.

También puede crear una subcarpeta haciendo clic derecho en la carpeta que desee y, a continuación, haciendo clic en `Crear subcarpeta`{.action}. Las carpetas "Contactos por correo electrónico" y "Papelera de reciclaje" no permiten la creación de subcarpetas.

Para mover un contacto a una de las carpetas, selecciónelo en la columna central y, en la ventana de contacto que aparece a la derecha, haga clic en el botón `Mover`{.action}. A continuación, seleccione la carpeta que desea asignar al contacto.

![Zimbra - carpetas de contactos](images/zimbra-17.png){.thumbnail}

> [!primary]
>
> Cuando crea un contacto a partir de una carpeta seleccionada, el contacto se agregará automáticamente a esa carpeta.

#### Gestión de listas <a name="contacts-lists"></a>

Puede asociar un contacto a una o varias listas. Las listas permiten agrupar los contactos para facilitar el envío conjunto de un mensaje de correo electrónico a todos ellos. Por ejemplo, para enviar un mensaje de correo electrónico a un gran número de destinatarios habituales, sólo tiene que añadir el nombre de lù lista como destinatario, en lugar de añadir uno a uno los contactos de una lista.

Para crear una lista, haga clic en el cuadro `Lista nueva` situado en la parte inferior de la columna izquierda e introduzca un nombre para la lista.

Para asignar un contacto a una de las listas, selecciónelo en la columna central y, en la ventana que aparece a la derecha, haga clic en `Asignar a Listas`{.action}. Marque la lista o listas que desee asignar al contacto. También puede escribir el nombre de una nueva lista y hacer clic en `Agregar`{.action}.

![Zimbra - listes](images/zimbra-list.png){.thumbnail}

#### Importar y exportar contactos <a name="import-export"></a>

Seleccione una de las dos fichas siguientes:

> [!tabs]
> **Importar contactos**
>>
>> Desde la ventana `Contactos`, haga clic derecho en la carpeta de contactos que desee, a excepción de las carpetas "Contactos por correo electrónico" y "Papelera de reciclaje", que no permiten la importación y exportación de contactos.<br>
>>
>> A continuación, haga clic en `Importar`{.action} para abrir la ventana de importación. El botón `Browse...` le permite descargar el archivo que contiene sus contactos en formato ".CSV" o ".vcf". <br><br>
>> ![Zimbra - Importer](images/zimbra-19.png){.thumbnail}
>>
> **Exportar contactos**
>>
>> Desde la ventana `Contactos`, haga clic derecho en la carpeta de contactos que desee, a excepción de las carpetas "Contactos por correo electrónico" y "Papelera de reciclaje", que no permiten la importación y exportación de contactos.
>>
>> A continuación, haga clic en `Exportar`{.action} para abrir la ventana de exportación. Elija el tipo de archivo que desea exportar y haga clic en `Exportar ahora`{.action}.<br><br>
>> ![Zimbra - Exporter](images/zimbra-20.png){.thumbnail}
>>

### Filtres <a name="filters"></a>

#### Cómo configurar los filtros <a name="filters-howto"></a>

La aplicación de filtros en su cuenta de correo es un parámetro importante que le permite aplicar un sistema de clasificación automática al recibir sus mensajes de correo.

Una regla de filtrado en Zimbra consta de 4 elementos:

1 - [Campo de comparación](#filters-comp-field): en qué parte del correo electrónico se va a aplicar el filtro.<br>
2 - [Operador de comparación](#filters-comp-operator): con qué precisión se debe aplicar el filtro.<br>
3 - [Valor](#filters-value): qué palabras o elementos del correo electrónico serán el objetivo del filtro.<br>
4 - [Acciones del filtro](#filters-action): qué va a hacer el filtro en el correo electrónico.<br>

![Zimbra - filtres](images/zimbra-filters.png){.thumbnail}

> Ejemplo: Si el campo **Asunto (1)** del mensaje de correo electrónico **contiene (2)** la palabra `factura`**(3)**, **transferir a (4)** la dirección de `contabilidad@example.com`.

En los subcapítulos siguientes, encontrará los detalles de cada uno de los elementos de una regla de filtrado.

##### 1 - Campo de comparación <a name="filters-comp-field"></a>

El campo de comparación hace referencia a la sección del mensaje de correo electrónico que se debe comprobar para el operador de comparación. Los campos de comparación pueden incluir los siguientes:

- **De** : especifique un remitente en el campo "De" del correo electrónico.
- **Para** : buscar nombres de destinatarios en el campo "Para".
- **CC** : buscar nombres de destinatarios en copia en el campo "CC".
- **Asunto** : especificar elementos en el asunto del mensaje de correo electrónico.
- **Cabecera con nombre** : cuando se selecciona esta opción, aparece un campo de entrada adicional antes del operador de comparación. Este campo permite introducir cualquier elemento del encabezado de un mensaje de correo electrónico. Puede especificar los campos estándar "De", "Para", "Asunto" u otros campos que puedan estar presentes en el encabezado del mensaje de correo electrónico. Por ejemplo, algunos servidores de correo pueden incluir campos específicos en el encabezado que se pueden incluir en la regla de filtrado utilizando este campo de comparación.
- **Texto del mensaje** : se refiere a las palabras que aparecen o no en el cuerpo del mensaje de correo electrónico.

##### 2. Operador de comparación <a name="filters-comp-operator"></a>

En función del campo de comparación designado anteriormente, el operador de comparación determinará el nivel de coincidencia que se aplicará al valor.

> [!primary]
>
> Los operadores de comparación disponibles varían en función del campo de comparación seleccionado.

- **Coincide exactamente / No coincide exactamente**: lo que escriba debe coincidir exactamente.<br>
    *Por ejemplo*, al indicar que el asunto del correo corresponde exactamente a "house", la correspondencia se hará únicamente con "house" y no con "houses" o "a blue house".

- **Contiene / No contiene**: lo que introduzca debe estar presente en el(los) campo(s).<br>
    *Por ejemplo*, al indicar que el asunto del email debe contener "house", la correspondencia se hará con "house", "houses" y también "a blue house".

- **Coincide con comodín / No coincide con comodín**: Especifica que el asunto debe coincidir con la cadena especificada, que incluye caracteres comodín.

- **Existe / No existe**: especifica que el campo de comparación especificado debe existir o no debe existir en el mensaje. Este operador de comparación se utiliza con los campos de comparación "Encabezado con nombre".

> **Uso de comodines en filtros**
>
> Los caracteres comodín, caracteres comodín o también llamados "wildcard" pueden utilizarse en el campo de entrada para la comparación que utilizan el operador de comparación "**Coincide con comodín / No coincide con comodín**". Los dos caracteres comodín son `*` y `?`.
>
> - El asterisco `*` es un marcador de posición de cero o más caracteres de cualquier tipo.<br><br> Por ejemplo, para la cadena de búsqueda "blue\*house", devolvería las coincidencias "blue house", "houses" o incluso "blue wooden house". Sin embargo, no devolvería "lightning blue house". <br><br> Otro ejemplo de cadena de búsqueda "w\*house" que devolvería las coincidencias "white house", "watch TV in your house". Sin embargo, no devolvería "watch TV in your house with a friend".
>
> - El signo de interrogación `?` es un marcador de posición para un solo carácter.<br><br>Por ejemplo, para la cadena de búsqueda "blue\*house", devolvería las coincidencias "blue house", "blue-house", "blue_house".
>

##### 3 - Valor <a name="filters-value"></a>

Una vez que haya seleccionado el campo y el operador de comparación, introduzca el valor que desee que coincida en el cuadro correspondiente.

##### 4. Acciones de filtro <a name="filters-action"></a>

El campo `Entonces` define la acción que debe realizarse en el mensaje de correo electrónico que cumple las condiciones del filtro . Las acciones de filtrado pueden incluir la eliminación, clasificación e incluso marcación del correo electrónico entrante.

- **Mantener en la bandeja de entrada** : guarda los mensajes de correo electrónico en la bandeja de entrada. Si ninguna de las reglas de filtrado coincide con un mensaje de correo electrónico, esta acción se realiza de forma predeterminada.
- **Mover a la carpeta** : permite mover el mensaje de correo electrónico a una carpeta especificada.
- **Borrar permanenteme** : elimina el mensaje de correo electrónico sin entregarlo. El mensaje no se encuentra en ninguna de las carpetas, incluida la papelera.
- **Reenviar a** : reenvía el correo electrónico a la dirección que especifique.
- **Marcar como leído**
- **Estrella** : marca el correo electrónico con una estrella.

#### Crear un filtro <a name="filters-creation"></a>

Para acceder a la creación de filtros, haga clic en el icono con forma de rueda dentada situado en la esquina superior derecha de la interfaz de Zimbra, seleccione `Configuración`{.action} y, por último, haga clic en `Filtros`{.action} en la columna izquierda.

![Zimbra - crear filtro](images/zimbra-21.png){.thumbnail}

Si existen filtros, la lista se muestra en el orden en que se aplican:

- **(1)** Para obtener una vista previa de cada filtro, haga clic en el botón `...`{.action} situado a la derecha del filtro y seleccione `Detalles`{.action}. El botón `Ejecutar`{.action} inicia la acción configurada para este filtro.

- **(2)** Este botón funciona como un controlador, lo que le permite mover el filtro a la lista para asignarle un orden de aplicación. Esto se debe a que cada filtro se aplica en el orden que se define en la lista.

Haga clic en el botón `y Añadir un filtro`{.action} para empezar a crear el filtro. Por defecto, se muestra la ventana de modo simple. Puede cambiar al modo avanzado haciendo clic en `Cambiar a Avanzado`{.action} para que todos los operadores de comparación estén disponibles. Para más información, consulte la sección "[Cómo configurar los filtros](#filters-howto)".

> [!tabs]
> **Modo simple**
>>
>> ![Zimbra - filtros - modo simple](images/zimbra-22.png){.thumbnail}
>>
> **Modo avanzado**
>>
>> ![Zimbra - filtros - modo avanzado](images/zimbra-23.png){.thumbnail}
>>

### Delegaciones <a name="delegations"></a>

Para acceder al parámetro de delegación, haga clic en el icono con forma de rueda dentada situado en la esquina superior derecha de la interfaz de Zimbra, seleccione `Configuración`{.action} y, por último, haga clic en `Redactar mensajes`{.action} en la columna izquierda.

Es posible delegar su cuenta de correo a otra cuenta de correo. que deben compartir la misma plataforma de correo.

> [!primary]
>
> Una cuenta de correo con el mismo nombre de dominio pero en otra solución de correo no puede recibir la delegación.

![Correo electrónico](images/zimbra-delegation.png){.thumbnail}

**(1) Delegados**. Para delegar su cuenta de correo electrónico en otra cuenta, haga clic en `Añadir delegados`{.action}.

- **Enviar como"** : la persona delegada podrá enviar un mensaje de correo electrónico con su dirección de correo electrónico, igual que si lo hubiera enviado. El destinatario no mencionará la dirección de correo electrónico del delegado.
- **Enviar de parte de** : la persona delegada podrá enviar un mensaje de correo electrónico con su dirección de correo electrónico, indicando "en nombre de" dicha dirección. El destinatario tiene por tanto la mención de las dos direcciones de correo electrónico implicadas en el intercambio.

**(2) Delegar la configuración de envío**. Al delegar su dirección de correo electrónico a otra, puede:

- **Guardar los mensajes enviados en mi carpeta Enviados** : Si la persona delegada en su cuenta envía un mensaje de correo electrónico desde su dirección de correo electrónico, dicho mensaje aparecerá en la carpeta "Enviados".
- **Guardar los mensajes enviados en la carpeta Enviados del delegado** : Si la persona delegada en su cuenta envía un email desde su dirección de correo, este email aparecerá en su carpeta "Enviados".
- **Guardar los mensajes enviados en mi carpeta Enviados y en la del delegado** : Si la persona delegada en su cuenta envía un email desde su dirección de correo, este email aparecerá en su carpeta "Enviados" así como en su carpeta "Enviados".
- **No guardar los mensajes enviados**: si la persona delegada en su cuenta envía un email desde su dirección de correo electrónico, no habrá ninguna copia de hecho.

### Firma <a name="signatures"></a>

Haga clic en el icono con forma de rueda dentada situado en la esquina superior derecha de la interfaz de Zimbra, seleccione `Configuración`{.action} y, por último, `Firmas`{.action} en la columna izquierda.

Encontrará los detalles de configuración en la sección "[Configurar las preferencias de la interfaz Zimbra](#settings)" de esta guía (haga clic en la pestaña "**Firmas**").

### Respuestas automáticas / Respondedor <a name="auto-reply"></a>

Cuando no esté presente y no pueda consultar su cuenta de correo, puede implementar un mensaje de ausencia que se enviará automáticamente al remitente. En el webmail Zimbra, esta funcionalidad recibe el nombre de "Fuera de la oficina".

Para acceder a la gestión de su contestador, haga clic en la rueda dentada en la parte superior derecha de su interfaz, luego en `Parámetros`{.action} y finalmente en `Fuera de la oficina`{.action}.

De forma predeterminada, la opción `Habilitar respuesta automática durante este período (ambas fechas incluidas)` está desactivada. Marque esta casilla para activar la respuesta automática. Ahora puede introducir el contenido de su mensaje de ausencia en el campo de entrada.

- Si no está seguro de cuándo desea detener la respuesta automática, active la casilla de verificación `Sin fecha final`.
- El botón `Enviarme un mensaje de muestra`{.action} le enviará una vista previa de esta respuesta automática a su bandeja de entrada.
- `Remitentes externos`: puede definir un mensaje diferente cuando el remitente es externo a su nombre de dominio y/o libreta de direcciones. De forma predeterminada, todos los remitentes reciben el mismo mensaje.

## Más información <a name="go-further"></a>

[Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Cambiar la contraseña de una dirección de correo MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

[Crear filtros para sus direcciones de correo](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_filters)

[Utilizar las redirecciones de correo](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
