---
title: Enviar SMS desde el área de cliente
excerpt: Cómo enviar SMS fácilmente desde el área de cliente de OVHcloud
updated: 2022-08-05
---

## Objetivo

Es posible enviar SMS directamente desde el área de cliente de OVHcloud. 

**Esta guía explica paso a paso cómo enviar sus primeros SMS.**

## Requisitos

- Disponer de una cuenta de SMS en OVHcloud con saldo de SMS.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Telecom`{.action}{.action} > `SMS`{.action}.

![área de cliente Telecom SMS](/pages/assets/screens/control_panel/product-selection/telecom/tpl-telecom-03-en-sms.png){.thumbnail}

## Procedimiento

Conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y haga clic en `Telecom`{.action}. A continuación, haga clic en `SMS`{.action} y seleccione su cuenta de SMS.

En la pestaña **Inicio**, haga clic en el enlace `Enviar un SMS`{.action} del apartado **Quiero...**.

![quiero enviar un sms](images/sms-send-control-panel01E.png){.thumbnail}

### 1. Configurar el remitente y el destinatario

Una vez en la página de envío de los SMS, podrá configurar distintos parámetros para adaptar el envío de SMS a sus necesidades.

![configurar remitente y destinatario](images/sms-send-control-panel02E.png){.thumbnail}

En el desplegable `Remitente`{.action} (1), seleccione un número corto que permita responder (solo para las cuentas de OVHcloud Francia) o un remitente alfanumérico. Para más información sobre cómo crear un remitente, consulte el apartado [3. Elegir el remitente de SMS](./#3-elegir-el-remitente-del-sms) de esta guía.

Introduzca a continuación el número del destinatario (2) en formato internacional (+346XXXXXXXX). También es posible enviar SMS a varios destinatarios. Puede hacerlo de dos formas diferentes:

- Mediante una lista de destinatarios en formato .CSV con el botón `Lista de destinatarios`{.action}.
Para más información, puede consultar nuestra guía relativa a las [listas de destinatarios de SMS](/pages/web_cloud/messaging/sms/liste_de_destinataire_sms).

- Mediante una agenda de contactos (3). Puede crearla directamente en el área de cliente o importarla a través de un archivo .CSV o .TXT.
Para más información, puede consultar nuestra guía relativa a las [agendas de contactos de SMS](/pages/web_cloud/messaging/sms/gerer_mes_carnets_dadresses_sms).

### 2. Escribir un SMS

> [!primary]
>
> Por motivos legales, los SMS comerciales solo se enviarán **entre 8:00 y 20:00, de lunes a sábado**.

Una vez que haya seleccionado el remitente y los destinatarios, ya puede empezar a escribir el mensaje.

![escribir sms](images/sms-send-control-panel03E.png){.thumbnail}

Introduzca su mensaje en el área de texto (1). En la esquina inferior derecha podrá ver un contador en el que se indican el número de caracteres restantes y la cantidad de SMS correspondiente (2). La longitud máxima de un SMS es de 160 caracteres con codificación de 7 bits (norma GMS 03.38).

Las tablas que ofrecemos a continuación recogen los caracteres autorizados con codificación de 7 bits. Los caracteres de la tabla «**Extensiones**» cuentan por dos. Si utiliza caracteres que no figuran en estas tablas, la codificación pasará a Unicode y la longitud máxima del SMS se reducirá a 70 caracteres.

![Lista de caracteres de SMS](images/smsauthorizedcharacters.png){.thumbnail}

**Opciones avanzadas**

![envoi sms manager](images/sms-send-control-panel-advanced.png){.thumbnail}

Desplegando estas opciones, puede realizar un envío de SMS en diferido (1). Por defecto, el envío será inmediato.

También puede configurar el tipo de envío (2), eligiendo entre los siguientes:

- Estándar: Es el SMS más utilizado.
- Flash: El SMS se muestra directamente en la pantalla del teléfono.
- SIM: El SMS se guarda automáticamente en la tarjeta SIM del teléfono.

### 3. Elegir el remitente del SMS

#### Número corto que permite responder

**Sólo para cuentas OVHcloud en Francia excluyendo DOM-TOM**

Permite recibir una respuesta en la pestaña de SMS recibidos.

#### Número móvil virtual

**Sólo para cuentas OVHcloud en Francia.**

Si dispone de una solución de SMS con número móvil virtual, podrá utilizar este número como remitente.

> [!primary]
>
>Si ya dispone de una cuenta de SMS, no es posible crear un número móvil virtual para esa cuenta. Para crearlo, debe contratar una nueva cuenta de SMS a través de la [página web del número móvil virtual](https://www.ovhtelecom.fr/sms/reponse/numeros-virtuels.xml).
>

#### Remitente alfanumérico

Es posible personalizar el remitente, pero, en ese caso, ya no podrá recibir respuestas del destinatario del SMS. Para acceder a la gestión de los remitentes de SMS, abra la pestaña `Remitentes`{.action} (1) de la cuenta de SMS correspondiente.

![Remitentes](images/sms-send-control-panel04E.png){.thumbnail}

Si quiere añadir un remitente de SMS adicional, haga clic en el botón `Acciones`{.action} y seleccione `Añadir`{.action} (2).

![Añadir un remitente](images/sms-send-control-panel05E.png){.thumbnail}

Existen diversas opciones a la hora de añadir un nuevo remitente de SMS (3):

- **Añadir remitentes manualmente**: Introduzca el nombre que quiera que aparezca como remitente, una descripción (opcional) y una breve explicación motivando el uso de dicho nombre (4). También es necesario un justificante.

> [!primary]
>
> Le solicitamos un justificante en el marco de nuestra política de seguridad. Se trata por defecto de documento en papel con el membrete de la empresa o de la marca, incluyendo la autorización de un responsable con firma y sello de esa empresa,  documento de identidad, o extracto  de registro de comercio (CIF) si no es una marca registrada.
>

- **Añadir remitentes a partir de datos personales**: Puede solicitar un remitente basado en los datos de su cuenta de OVHcloud. Al seleccionar esta opción, aparecerá una tabla con los remitentes disponibles. Haga clic en `+`{.action} para añadir el remitente correspondiente.

- **Añadir remitentes a partir de sus dominios en OVHcloud**: Puede utilizar como remitente un dominio disponible en su cuenta de OVHcloud. Al seleccionar esta opción, aparecerá una tabla con los remitentes disponibles. Haga clic en `+`{.action} para añadir el remitente correspondiente.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
