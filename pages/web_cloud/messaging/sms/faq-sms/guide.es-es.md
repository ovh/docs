---
title: "FAQ SMS OVHcloud"
excerpt: "Encuentre las respuestas a las preguntas más frecuentes sobre el servicio SMS de OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Objetivo

Encuentre aquí las preguntas más frecuentes sobre el servicio SMS de OVHcloud.

## FAQ

### Cuenta y créditos

/// details | ¿Cómo crear una cuenta SMS en OVHcloud?

Para crear una cuenta SMS en OVHcloud, acceda a la [página de ofertas SMS de OVHcloud](/links/telecom/sms) y elija el pack de créditos que mejor se adapte a sus necesidades. El pedido creará automáticamente una cuenta SMS accesible desde su [área de cliente de OVHcloud](/links/manager), en la [sección SMS](/links/control-panel/telecom-sms). Cada cuenta SMS se identifica con un nombre único (p. ej.: `sms-xx12345-1`). Es posible tener varias cuentas SMS en un mismo identificador de cliente OVHcloud, lo que permite separar los usos (transaccional, marketing, notificaciones internas) y los presupuestos.

///

/// details | ¿Cómo funciona el sistema de créditos SMS?

El servicio SMS de OVHcloud funciona con un sistema de créditos de prepago. Un crédito corresponde a un SMS estándar de 160 caracteres (codificación GSM 7-bit) hacia un número francés. El coste en créditos varía en función de:

- **El destino:** un SMS hacia Francia metropolitana consume 1 crédito. Los destinos internacionales consumen más créditos (consulte la [tabla de precios de OVHcloud](/links/telecom/sms-prices)).
- **La longitud del mensaje:** un SMS que supere los 160 caracteres se divide automáticamente en varios SMS concatenados. Un mensaje de 300 caracteres consume 2 créditos.
- **La codificación:** si su mensaje contiene caracteres especiales o acentos no compatibles con GSM 7-bit, se utiliza la codificación Unicode (UCS-2), lo que limita cada SMS a 70 caracteres.

El saldo de créditos puede consultarse en tiempo real desde el área de cliente de OVHcloud o a través de la API.

Para más información, consulte la guía "[Gestionar los créditos SMS y activar la recarga automática](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | ¿Cómo activar la recarga automática de créditos SMS?

La recarga automática permite recargar automáticamente su cuenta SMS cuando el saldo desciende por debajo de un umbral definido. [Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y acceda a `Opciones`{.action} > `Recarga automática`{.action}. Configure el umbral de activación y el importe de la recarga. Es necesario tener un método de pago válido registrado en su cuenta. Esta opción es indispensable para el envío de SMS transaccionales, donde una falta de créditos bloquearía sus notificaciones críticas.

Para más información, consulte la guía "[Gestionar los créditos SMS y activar la recarga automática](/pages/web_cloud/messaging/sms/activer_la_recharge_automatique_du_credit_sms)".

///

/// details | ¿Cómo consultar el historial de mis SMS enviados y recibidos?

[Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y acceda a la pestaña `Mensaje y campaña`{.action} > `Gestión de SMS`{.action} > `Historial de envíos`{.action} o `SMS recibidos`{.action}. Puede filtrar el historial por fecha, remitente, destinatario o mensaje. El historial se conserva durante 6 meses. También puede exportarse en formato CSV para su análisis.

Para más información, consulte la guía "[Gestionar el historial de SMS](/pages/web_cloud/messaging/sms/gerer_l_historique_des_sms)".

///

/// details | ¿Cómo configurar alertas de umbral de créditos SMS?

Para los **usuarios API**, [acceda a la sección SMS](/links/control-panel/telecom-sms), seleccione su cuenta y acceda a `Usuarios API`{.action}. Haga clic en `...`{.action} > `Límite`{.action} para el usuario en cuestión y configure:

- **Umbral de alerta:** número de créditos restantes por debajo del cual se envía la notificación.
- **Tipo de notificación:** correo electrónico, SMS, o ambos.

Para la **cuenta global**, la recarga automática ofrece una alternativa: recarga la cuenta automáticamente cuando el saldo cae por debajo de un umbral. Ambos mecanismos son complementarios.

Para más información, consulte la guía "[Todo sobre los usuarios SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

### Envío de SMS

/// details | ¿Cómo enviar un SMS desde el área de cliente de OVHcloud?

[Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y haga clic en `Enviar un SMS`{.action}. Complete los siguientes campos:

- **Remitente:** número corto (que permite respuesta, solo en Francia), remitente alfanumérico personalizado o número móvil virtual.
- **Destinatario(s):** introduzca uno o varios números en formato internacional (p. ej.: `+33612345678`), o seleccione una agenda de contactos/lista de destinatarios.
- **Mensaje:** redacte su texto (un contador muestra el número de caracteres y de SMS consumidos).

Puede programar el envío en una fecha/hora posterior. Se muestra una vista previa del coste en créditos antes del envío.

Para más información, consulte la guía "[Enviar SMS desde el área de cliente de OVHcloud](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_mon_espace_client)".

///

/// details | ¿Cómo enviar SMS a través de una URL (http2sms)?

La función http2sms permite enviar un SMS mediante una simple llamada HTTP GET o POST, sin necesidad de SDK ni autenticación OAuth. Es ideal para integraciones sencillas desde un script, un automatismo o una aplicación empresarial. La URL de llamada tiene el siguiente formato:

`https://www.ovh.com/cgi-bin/sms/http2sms.cgi?account=sms-xx12345-1&login=user&password=password&from=sender&to=+33612345678&message=Your+message`

Los parámetros obligatorios son: `account` (nombre de la cuenta SMS), `login` y `password` (credenciales del usuario API), `from` (remitente), `to` (destinatario en formato internacional), `message` (contenido del SMS). Para proteger el acceso, configure restricciones por IP en el usuario API utilizado. Se recomienda el método POST con HTTPS.

Para más información, consulte la guía "[Enviar SMS desde una URL - http2sms](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_url_-_http2sms)".

///

/// details | ¿Cómo enviar SMS desde una dirección de correo electrónico?

OVHcloud permite el envío de SMS desde su dirección de correo electrónico, independientemente del remitente. Envíe un correo electrónico a la dirección `número_destinatario@email2sms.ovh.net` (p. ej.: `0033612345678@email2sms.ovh.net`). El cuerpo del correo electrónico se convierte en el contenido del SMS. El asunto del correo electrónico debe contener sus credenciales en el formato: `account:login:password`. Este método es especialmente útil para alertas automatizadas desde sistemas que solo admiten el envío de correos electrónicos (servidores de monitorización, aplicaciones empresariales).

Para más información, consulte la guía "[Enviar SMS desde una dirección de correo electrónico](/pages/web_cloud/messaging/sms/envoyer_des_sms_depuis_une_adresse_email)".

///

/// details | ¿Cómo enviar SMS masivos de forma eficiente a través de la API?

Para enviar SMS masivos a través de la API de OVHcloud de forma óptima:

- **Utilice el envío por lotes:** el endpoint `POST /sms/{serviceName}/jobs` acepta un array de destinatarios. Envíe sus SMS por lotes (p. ej.: 500 destinatarios por llamada API) en lugar de una llamada API por SMS.
- **Gestione los errores y los reintentos:** implemente una lógica de reintento con backoff exponencial para los errores temporales (HTTP 429 Too Many Requests, HTTP 500).
- **Utilice los callbacks DLR:** configure una URL de callback en su usuario API en lugar de consultar la API para cada estado.
- **Programe sus envíos:** la API admite el envío diferido (`differedPeriod`).
- **Para volúmenes muy elevados:** utilice el protocolo SMPP.

Monitorice su consumo de créditos durante los envíos masivos y asegúrese de que la recarga automática está activada.

///

/// details | ¿Cómo crear mi primera campaña SMS?

[Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y haga clic en `Enviar un SMS`{.action}. Los pasos son:

1. **Elegir el remitente:** seleccione un número corto, un remitente alfanumérico o un VLN.
2. **Definir los destinatarios:** añádalos manualmente, importe una lista CSV o seleccione una agenda de contactos existente.
3. **Redactar el mensaje:** escriba su texto. Puede utilizar variables de personalización si ha importado una lista con columnas adicionales (nombre, apellidos, etc.).
4. **Programar el envío:** elija un envío inmediato o programado para una fecha/hora concreta.
5. **Confirmar y enviar:** compruebe el resumen (número de destinatarios, coste en créditos) y valide.

El seguimiento de la campaña está disponible en `Mensaje y campaña`{.action} > `Gestión de campañas`{.action} > `Estadísticas e historial`{.action}.

Para más información, consulte la guía "[Mi primera campaña SMS](/pages/web_cloud/messaging/sms/ma_premiere_campagne_sms)".

///

/// details | ¿Cómo gestionar mis listas de destinatarios SMS?

[Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y acceda a `Contactos`{.action} > `Crear una lista de contactos`{.action}. Puede:

- **Crear una lista** importando un archivo CSV que contenga una columna `number` con los números en formato internacional.
- **Limpiar una lista** con deduplicación y verificación sintáctica.
- **Eliminar** una lista obsoleta.

Para más información, consulte la guía "[Listas de destinatarios SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms)".

///

/// details | ¿Cómo gestionar mis agendas de contactos SMS?

Las agendas de contactos SMS ofrecen una gestión más completa de los contactos (nombre, apellidos, número). [Acceda a la sección SMS](/links/control-panel/telecom-sms), seleccione su cuenta SMS y acceda a `Contactos`{.action} > `Agenda de contactos`{.action}. Puede:

- Crear una nueva agenda y añadir contactos manualmente.
- Importar un archivo CSV con las columnas: apellidos, nombre, número (formato internacional).
- Editar o eliminar contactos individualmente.
- Utilizar una agenda de contactos como lista de destinatarios al enviar SMS.

La agenda de contactos es ideal para envíos recurrentes a un grupo estable de contactos. Para envíos puntuales a listas variables, las listas de destinatarios son más adecuadas.

Para más información, consulte la guía "[Gestionar mis agendas de contactos SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms)".

///

/// details | ¿Cuál es la diferencia entre un SMS estándar (160 caracteres) y un SMS largo?

Un SMS estándar con codificación GSM 7-bit puede contener hasta **160 caracteres**. Si su mensaje supera este límite, se divide en varios SMS concatenados (SMS largos) que se reensamblan en el teléfono del destinatario. Los límites son:

- **1 SMS:** hasta 160 caracteres.
- **2 SMS:** de 161 a 306 caracteres (153 caracteres útiles por segmento, los 7 bytes restantes se utilizan para la cabecera de concatenación).
- **3 SMS:** de 307 a 459 caracteres.
- Y así sucesivamente, hasta un máximo de 6 SMS concatenados (918 caracteres).

Si su mensaje utiliza la codificación **Unicode (UCS-2)** (necesaria para emojis, alfabetos no latinos), cada SMS se limita a **70 caracteres** (67 por segmento en modo concatenado). Cada segmento consume 1 crédito SMS.

///

/// details | ¿Qué caracteres especiales hacen que un SMS cambie a codificación Unicode?

La codificación GSM 7-bit (estándar) admite un conjunto limitado de caracteres. Los siguientes caracteres provocan el cambio a codificación Unicode (UCS-2), reduciendo la capacidad del SMS de 160 a 70 caracteres:

- Todos los **emojis** (sin excepción).
- Los **caracteres acentuados no GSM:** algunos acentos son compatibles (é, è, ê, ù, à, etc.) pero otros no (ő, ű, ā, etc.).
- Los caracteres de **alfabetos no latinos:** cirílico, árabe, chino, japonés, coreano, etc.
- Algunos **símbolos tipográficos:** comillas tipográficas " ", raya larga (—), etc.

La interfaz del área de cliente de OVHcloud muestra automáticamente el número de caracteres restantes y el número de SMS que se consumirán.

///

/// details | ¿Cuál es el plazo de entrega de un SMS enviado a través de OVHcloud?

En condiciones normales, un SMS se entrega en unos pocos segundos (generalmente **menos de 10 segundos** hacia los operadores franceses). Este plazo puede variar en función de:

- **El destino:** los SMS internacionales pueden tener un plazo más largo (hasta 30-60 segundos).
- **La carga de la red:** en períodos de alta demanda (Nochevieja, eventos nacionales), los operadores móviles pueden introducir retrasos adicionales.
- **El estado del teléfono del destinatario:** si el teléfono está apagado o fuera de cobertura, el SMS es almacenado por el operador y entregado en cuanto el teléfono vuelve a estar disponible (periodo de almacenamiento: de 48 a 72 horas según el operador).
- **Los envíos masivos:** las campañas de varios miles de SMS se envían de forma progresiva para respetar los límites de velocidad autorizados por los operadores.

Los acuses de recibo (DLR) permiten confirmar la entrega efectiva al destinatario.

///

/// details | Mis SMS no se entregan, ¿cómo diagnosticar el problema?

Realice las siguientes comprobaciones:

1. **Compruebe su saldo de créditos:** un saldo a cero bloquea inmediatamente todos los envíos.
2. **Consulte el historial de envío:** en `Mensaje y campaña`{.action} > `Gestión de SMS`{.action} > `Historial de envíos`{.action}, compruebe el estado de cada SMS. Un código PTT indica la razón del fallo.
3. **Compruebe el formato de los números:** todos los números deben estar en formato internacional (`+33...`). Un formato local (`06...`) provocará un fallo.
4. **Compruebe el remitente:** un remitente alfanumérico pendiente de validación no permitirá el envío.
5. **Compruebe la lista negra:** si el destinatario ha respondido STOP, su número está en la lista negra.
6. **Compruebe la cuota del usuario API:** si envía a través de la API, compruebe que la cuota no está agotada.
7. **Compruebe el contenido:** los SMS que contienen URL enviados a través de un número corto se bloquean.

///

### Remitentes y respuestas

/// details | ¿Qué tipos de remitentes SMS puedo utilizar?

OVHcloud ofrece tres tipos de remitentes:

- **Número corto que permite respuesta:** remitente por defecto, número corto de 5 dígitos asignado aleatoriamente. El destinatario puede responder al SMS. Atención: no es posible enviar un SMS que contenga una URL a través de un número corto.

> [!primary]
>
> El número corto que permite respuesta solo está disponible para las cuentas OVHcloud en Francia, excluyendo los departamentos y territorios franceses de ultramar.

- **Remitente alfanumérico:** nombre personalizado que se muestra como remitente (p. ej.: "MiEmpresa"). Máximo 11 caracteres. El destinatario no puede responder. La creación requiere documentación justificativa y se valida en un plazo medio de 72 horas.
- **Número móvil virtual (VLN):** número de móvil francés en formato 06/07 asignado a su cuenta SMS. Permite la respuesta y da la apariencia de un número de móvil estándar.

Para más información, consulte la guía "[Todo sobre los remitentes SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | ¿Cómo añadir un remitente alfanumérico personalizado?

[Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y haga clic en la pestaña `Remitentes`{.action}. Haga clic en `Acciones`{.action} > `Añadir`{.action} y elija "Añadir remitentes manualmente". Complete los siguientes campos:

- **Remitente deseado:** máximo 11 caracteres alfanuméricos (letras y cifras, sin caracteres especiales).
- **Una descripción** para su uso interno.
- **Una justificación:** explique la relación entre su identidad y el remitente solicitado.
- **Documentación justificativa:** membrete de la empresa, extracto del registro mercantil o cualquier documento que acredite su derecho a utilizar este nombre.

La validación la realiza el equipo de OVHcloud, generalmente en un plazo de 72 horas. También puede crear un remitente a partir de sus datos personales de OVHcloud o de sus nombres de dominio de OVHcloud, sin documentación adicional.

Para más información, consulte la guía "[Todo sobre los remitentes SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | ¿Por qué no puedo enviar un SMS que contenga una URL con un número corto?

Para combatir el spam y el phishing, OVHcloud bloquea los SMS que contienen URL (enlaces http/https) cuando el remitente es un número corto que permite respuesta. Si necesita incluir una URL en sus SMS, utilice un **remitente alfanumérico** validado. Al haber sido su remitente personalizado objeto de una verificación de identidad, el envío de SMS que contienen URL está autorizado con este tipo de remitente.

Para más información, consulte la guía "[Todo sobre los remitentes SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms)".

///

/// details | ¿Qué es un número móvil virtual (VLN) y cómo obtenerlo?

Un número móvil virtual (VLN — Virtual Long Number) es un número de móvil francés en formato 06 o 07, asignado a su cuenta SMS de OVHcloud. Ofrece varias ventajas:

- El destinatario ve un número de móvil estándar como remitente, lo que genera mayor confianza.
- El destinatario puede **responder** al SMS, y las respuestas se pueden consultar en el área de cliente de OVHcloud o recuperar a través de la API.
- Puede utilizarse para envíos que contengan URL.

El VLN requiere una oferta SMS específica que incluya un número móvil virtual. No puede añadirse a una cuenta SMS existente: se debe contratar una nueva cuenta SMS a través de la [página dedicada al número móvil virtual](/links/telecom/sms-vln). El VLN se asigna por una duración vinculada a la suscripción y no es portable a otro operador.

///

/// details | ¿Cómo funciona el servicio de SMS con respuesta?

El servicio de SMS con respuesta permite enviar un SMS al que el destinatario puede responder. El funcionamiento es el siguiente:

1. Envíe un SMS utilizando el "Número corto que permite respuesta" como remitente.
2. El destinatario recibe el SMS con un número corto de 5 dígitos como remitente.
3. El destinatario puede responder a este número corto en un plazo de **48 horas**.
4. La respuesta puede consultarse en su área de cliente de OVHcloud (`Mensaje y campaña`{.action} > `Gestión de SMS`{.action} > `SMS recibidos`{.action}).
5. Opcionalmente, puede configurar una **respuesta automática** (texto predefinido) o un **script CGI** que se ejecuta con cada respuesta recibida.

Este servicio solo está disponible para las cuentas OVHcloud en Francia (excluyendo los departamentos y territorios de ultramar) y las respuestas solo son posibles desde los operadores móviles franceses. Cada respuesta recibida y cada respuesta automática enviada consume créditos SMS.

///

/// details | ¿Cómo configurar una respuesta automática a los SMS recibidos?

[Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y acceda a `Opciones`{.action} > `Opciones de las respuestas`{.action}. En la sección "Acción a la recepción", elija "Responder con un texto predefinido" o "Llamar a un CGI" (URL de un script web que se ejecutará con cada respuesta recibida, lo que permite un tratamiento dinámico). También puede configurar notificaciones a la recepción (por correo electrónico o SMS).

///

/// details | ¿Cómo gestionar las solicitudes de baja (STOP)?

Cuando un destinatario responde "STOP" a uno de sus SMS, su número se añade automáticamente a una lista negra por parte de OVHcloud. Los SMS posteriores enviados a ese número desde su cuenta se bloquearán. Puede consultar y gestionar esta lista negra desde su [área de cliente de OVHcloud](/links/manager), pestaña `Opciones`{.action} > `Gestionar los destinatarios en lista negra`{.action}. Puede:

- Consultar los números que han enviado un STOP.
- Comprobar si un número específico está en la lista negra antes de un envío.

> [!warning]
>
> Eliminar un número de la lista negra sin el reconsentimiento del destinatario es contrario al RGPD y a las normas antispam.

La gestión STOP es obligatoria para los SMS de marketing. Para los SMS transaccionales, el mecanismo STOP no es aplicable.

///

### Integración técnica

/// details | ¿Cómo crear y gestionar usuarios API para SMS?

Los usuarios API SMS permiten delegar el envío de SMS a través de la API o la función http2sms sin exponer sus credenciales de cliente de OVHcloud. [Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta SMS y haga clic en `Usuarios API`{.action}. Añada un nuevo usuario definiendo un identificador y una contraseña. A cada usuario se le puede asignar:

- Una **cuota de créditos** deducida del saldo global de la cuenta.
- Una **alerta de umbral** que envía una notificación cuando el saldo del usuario cae por debajo de un umbral definido.
- **Restricciones por IP** (hasta 5 IP) para proteger el acceso a la función http2sms.
- Una **URL de callback** para recibir los acuses de recibo (DLR) en un endpoint personalizado.

Para más información, consulte la guía "[Todo sobre los usuarios SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | ¿Cómo enviar un SMS a través de la API de OVHcloud en PHP?

La API de OVHcloud permite enviar SMS de forma programática. En PHP, utilice el SDK oficial de OVHcloud:

1. **Cree claves API** desde la [página de creación de tokens de la API de OVHcloud](https://auth.eu.ovhcloud.com/api/createToken) autorizando los endpoints `/sms/*`.
2. **Instale el SDK** a través de Composer: `composer require ovh/ovh`.
3. **Envíe un SMS** con el endpoint `POST /sms/{serviceName}/jobs` especificando: el mensaje, los destinatarios (array de números en formato internacional), el remitente y las opciones.

La API devuelve un identificador de job que permite hacer seguimiento del estado del envío. También hay bibliotecas disponibles en Python, Node.js, Java y C#. La documentación completa de la API SMS está disponible en la [consola API de OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms).

Para más información, consulte la guía "[Enviar SMS con la API de OVHcloud en PHP](/pages/web_cloud/messaging/sms/envoyer_des_sms_avec_lapi_ovh_en_php)".

///

/// details | ¿Qué endpoints API están disponibles para el servicio SMS de OVHcloud?

La API de OVHcloud expone numerosos endpoints para gestionar su servicio SMS de forma programática. Los principales son:

- `GET /sms`: listar sus cuentas SMS.
- `GET /sms/{serviceName}`: detalles de una cuenta SMS (créditos restantes, opciones).
- `POST /sms/{serviceName}/jobs`: enviar un SMS.
- `GET /sms/{serviceName}/jobs`: listar los envíos.
- `GET /sms/{serviceName}/outgoing`: historial de SMS salientes.
- `GET /sms/{serviceName}/incoming`: historial de SMS entrantes.
- `GET /sms/{serviceName}/users`: listar los usuarios API.
- `GET /sms/{serviceName}/senders`: listar los remitentes.
- `GET /sms/{serviceName}/phonebooks`: listar las agendas de contactos.
- `GET /sms/ptts`: obtener la descripción de un código PTT (estado de entrega).

La documentación interactiva completa está disponible en la [consola API de OVHcloud](https://eu.api.ovh.com/console/?section=%2Fsms&branch=v1#/sms). La autenticación se realiza a través de claves API (Application Key, Application Secret, Consumer Key).

///

/// details | ¿Cómo recibir los acuses de recibo (DLR) de mis SMS a través de un callback?

Los acuses de recibo (Delivery Reports / DLR) confirman la correcta entrega de un SMS. Para recibirlos automáticamente, configure una URL de callback en su usuario API. [Acceda a la sección SMS](/links/control-panel/telecom-sms) y luego a `Usuarios API`{.action}, haga clic en `...`{.action} > `Callback`{.action} para el usuario en cuestión. Introduzca la URL de su endpoint web. Con cada actualización de estado, OVHcloud llamará a esta URL con los siguientes parámetros:

- `id`: identificador del SMS.
- `ptt`: código de estado de entrega (p. ej.: 1 = en curso, 4 = entregado, 5 = fallido).
- `date`: fecha del DLR.
- `description`: identificador descriptivo del DLR.

Su endpoint debe responder con HTTP 200 para confirmar la correcta recepción del callback.

Para más información, consulte la guía "[Todo sobre los usuarios SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)".

///

/// details | ¿Cómo utilizar el protocolo SMPP con OVHcloud?

El protocolo SMPP (Short Message Peer-to-Peer) es un protocolo industrial para el envío y la recepción de SMS en volumen. [Acceda a la sección SMS](/links/control-panel/telecom-sms) de su área de cliente de OVHcloud, seleccione su cuenta y acceda a `Opciones`{.action} > `Parámetros SMPP`{.action}. Obtendrá los parámetros de conexión: dirección del servidor SMPP, puerto, system_id y password. El protocolo SMPP ofrece una conexión persistente, un mayor rendimiento de envío y soporte nativo de DLR en modo push.

Para más información, consulte la guía "[Gestión de una cuenta SMS SMPP](/pages/web_cloud/messaging/sms/smpp-control-panel)".

///

/// details | ¿Cuáles son las especificaciones técnicas del servicio SMPP de OVHcloud?

El servicio SMPP de OVHcloud cumple con la especificación SMPP v3.4. Las principales características técnicas son:

- **Modo de conexión:** Transceiver (envío y recepción en la misma sesión) o Transmitter/Receiver separados.
- **Puerto de conexión:** comunicado en el momento de la activación del servicio SMPP.
- **Cifrado:** TLS compatible y recomendado.
- **Enquire Link:** intervalo recomendado de 30 segundos para mantener la sesión activa.
- **Ventana de envío (window size):** configurable, generalmente entre 1 y 10 según el rendimiento deseado.
- **Codificación compatible:** GSM 7-bit (data_coding=0) y UCS-2 (data_coding=8).
- **Longitud máxima:** 160 caracteres en GSM 7-bit, 70 en UCS-2, con soporte de concatenación mediante UDH.
- **DLR:** acuses de recibo transmitidos en modo push en la misma sesión SMPP.

La conexión SMPP está limitada a un número de sesiones simultáneas definido en su contrato.

Para más información, consulte la guía "[Especificaciones técnicas del SMPP](/pages/web_cloud/messaging/sms/smpp-specification)".

///

/// details | ¿Cómo integrar el envío de SMS de OVHcloud en mi aplicación empresarial o CRM?

La integración de SMS de OVHcloud puede realizarse de varias formas:

- **http2sms (la más sencilla):** una simple llamada HTTP GET/POST activa el envío de un SMS. Ideal para scripts básicos, automatismos industriales o aplicaciones empresariales que solo admiten llamadas HTTP.
- **API REST de OVHcloud:** integración completa con autenticación segura (OAuth), gestión de contactos, historial, estadísticas. Hay SDK disponibles en PHP, Python, Node.js, Java y C#.
- **SMPP:** conexión persistente de alto rendimiento para plataformas de mensajería.
- **Email2SMS:** envío por correo electrónico, útil para sistemas que solo admiten el envío de correos electrónicos (alertas de monitorización, ERP).

Para los CRM habituales (Salesforce, HubSpot, etc.), hay conectores de terceros que utilizan la API de OVHcloud disponibles en los respectivos marketplaces.

///

/// details | ¿Cuáles son los límites de velocidad de envío de SMS?

OVHcloud aplica límites de velocidad de envío para garantizar la calidad del servicio:

- **A través del área de cliente de OVHcloud:** sin límite explícito, pero las campañas voluminosas se distribuyen en el tiempo por la plataforma.
- **A través de la API REST:** el rendimiento depende del volumen de su cuenta y de su historial de uso.
- **A través de http2sms:** limitado al número de peticiones HTTP por segundo aceptadas por la infraestructura (normalmente unas pocas decenas por segundo).
- **A través de SMPP:** el rendimiento se define contractualmente y puede alcanzar varios cientos de SMS por segundo.

Si tiene previstas campañas de gran envergadura (más de 100 000 SMS), póngase en contacto con el soporte de OVHcloud para planificar el envío.

///

/// details | ¿Puedo enviar SMS que contengan variables personalizadas?

Sí, OVHcloud admite la personalización de SMS con variables dinámicas. Desde el área de cliente, al importar una lista de destinatarios en formato CSV, puede incluir columnas adicionales (p. ej.: `first_name`, `surname`, `appointment_date`). En el cuerpo de su SMS, utilice las variables con el formato `{first_name}`, `{surname}`, `{appointment_date}`, etc. Cada SMS se personalizará automáticamente con los datos del contacto correspondiente. A través de la API, puede utilizar el parámetro `message` con placeholders y proporcionar los datos de personalización en el payload de envío.

///

### Conformidad y entregabilidad

/// details | ¿Cuáles son las obligaciones legales para el envío de SMS de marketing en Francia?

El envío de SMS de marketing en Francia está regulado por el RGPD y el Código de Correos y Comunicaciones Electrónicas. Las principales obligaciones son:

- **Consentimiento previo (opt-in):** el destinatario debe haber consentido explícitamente la recepción de SMS comerciales.
- **Derecho de baja (opt-out):** cada SMS de marketing debe contener una indicación que permita al destinatario darse de baja (p. ej.: "STOP al 36xxx" o "Responda STOP").
- **Horarios de envío:** los SMS comerciales no deben enviarse entre las **20:00 y las 8:00** en días laborables, ni los **domingos y festivos**.
- **Identificación del remitente:** la identidad del anunciante debe ser reconocible.
- **Registro de consentimiento:** debe poder demostrar el consentimiento de cada destinatario en caso de inspección de la CNIL.

El incumplimiento de estas obligaciones le expone a sanciones de la CNIL y a multas de hasta el 4 % de la facturación.

///

/// details | ¿Cuál es la diferencia entre un SMS transaccional y un SMS de marketing?

- **SMS transaccional:** se envía como respuesta a una acción específica del destinatario (confirmación de pedido, código de verificación, notificación de entrega, recordatorio de cita). No requiere consentimiento de marketing previo, no está sujeto a restricciones horarias y no requiere mención STOP.
- **SMS de marketing:** se envía con fines de prospección comercial (ofertas promocionales, rebajas, newsletters). Exige un consentimiento opt-in previo, debe incluir una mención de baja (STOP) y está sujeto a restricciones horarias.

No mezcle ambos tipos de envío en una misma cuenta SMS para facilitar la gestión del cumplimiento normativo.

///

/// details | ¿Cómo optimizar la tasa de entregabilidad de mis SMS?

La tasa de entregabilidad es el porcentaje de SMS efectivamente entregados a los destinatarios. Para optimizarla:

- **Limpie sus bases de contactos:** elimine los números inválidos, inactivos o de líneas fijas.
- **Respete los formatos internacionales:** todos los números deben estar en formato internacional completo (p. ej.: `+33612345678`).
- **Controle la longitud de los mensajes:** los SMS cortos (1 segmento de 160 caracteres como máximo) tienen una mejor tasa de entrega que los SMS largos concatenados.
- **Evite contenidos similares al spam:** palabras en mayúsculas, puntuación excesiva, URL acortadas sospechosas.
- **Utilice un remitente validado:** los remitentes alfanuméricos verificados generan confianza.
- **Respete los horarios:** los SMS enviados en horario de oficina tienen una mejor tasa de apertura.
- **Monitorice sus DLR:** analice los códigos PTT de los SMS fallidos para identificar las causas recurrentes.

///

/// details | ¿Cómo enviar SMS a Estados Unidos?

El envío de SMS a Estados Unidos (código de país +1) está sujeto a normas específicas debido a la regulación antispam estadounidense (TCPA / 10DLC). En OVHcloud, el envío a Estados Unidos requiere:

- Un **remitente alfanumérico** validado o el número corto de OVHcloud (no es posible utilizar un número móvil virtual francés para envíos a EE. UU.).
- El cumplimiento de las normas de contenido: el SMS no debe contener contenido publicitario no solicitado.
- Un coste en créditos superior al de un SMS nacional (consulte la [tabla de precios](/links/telecom/sms-prices) para conocer la tarifa exacta).

La tasa de entregabilidad puede variar en función de los operadores estadounidenses y de sus filtros antispam.

Para más información, consulte la guía "[Envío de SMS a Estados Unidos](/pages/web_cloud/messaging/sms/envoi_de_sms_aux_etats-unis)".

///

/// details | ¿Cuáles son las restricciones geográficas para el envío de SMS con OVHcloud?

El servicio SMS de OVHcloud permite el envío a la gran mayoría de destinos internacionales. Sin embargo:

- **Destinos bloqueados:** algunos destinos con alto riesgo de fraude pueden estar bloqueados por defecto.
- **Precios variables:** el coste en créditos varía según el destino. Las tarifas pueden consultarse en su área de cliente de OVHcloud o en la [página de precios de OVHcloud](/links/telecom/sms-prices).
- **Estados Unidos:** el envío a EE. UU. está sujeto a normas específicas (consulte la FAQ correspondiente más arriba).
- **SMS con respuesta:** la funcionalidad de SMS con respuesta (número corto) solo está disponible para Francia metropolitana.
- **Número móvil virtual:** el VLN francés solo puede utilizarse como remitente para destinos franceses.

Antes de lanzar una campaña internacional, compruebe los precios y la disponibilidad del destino en su área de cliente.

///

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).
