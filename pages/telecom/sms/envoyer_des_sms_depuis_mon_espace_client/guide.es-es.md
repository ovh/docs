---
title: 'Enviar SMS desde el área de cliente'
slug: enviar-sms-desde-el-area-de-cliente
excerpt: 'Cómo enviar SMS fácilmente desde el área de cliente de OVHcloud'
legacy_guide_number: g2142
section: 'Enviar SMS'
---

**Última actualización: 14/11/2019**

## Objetivo

Es posible enviar SMS directamente desde el área de cliente de OVHcloud. 

**Esta guía explica paso a paso cómo enviar sus primeros SMS.**

## Requisitos

- Disponer de una cuenta de SMS en OVHcloud con saldo de SMS.

## Procedimiento

Conéctese al [área de cliente de OVHcloud](https://www.ovhtelecom.fr/manager/) y haga clic en `Telecom`{.action} (1). A continuación, haga clic en `SMS`{.action} en la columna izquierda (2) y seleccione su cuenta de SMS (3).

En la pestaña **Inicio**, haga clic en el enlace `Enviar un SMS`{.action} (4) del apartado **Quiero...**.

![quiero enviar un sms](images/sms-send-control-panel01E.png){.thumbnail}

### 1. Configurar el remitente y el destinatario

Una vez en la página de envío de los SMS, podrá configurar distintos parámetros para adaptar el envío de SMS a sus necesidades.

![configurar remitente y destinatario](images/sms-send-control-panel02E.png){.thumbnail}

En el desplegable `Remitente`{.action} (1), seleccione un número corto que permita responder (solo para las cuentas de OVHcloud Francia) o un remitente alfanumérico. Para más información sobre cómo crear un remitente, consulte el apartado [3. Elegir el remitente de SMS](https://docs.ovh.com/es/sms/enviar-sms-desde-el-area-de-cliente/#3-elegir-el-remitente-del-sms){.external} de esta guía.

Introduzca a continuación el número del destinatario (2) en formato internacional (+346XXXXXXXX). También es posible enviar SMS a varios destinatarios. Puede hacerlo de dos formas diferentes:

- Mediante una lista de destinatarios en formato .CSV con el botón `Lista de destinatarios`{.action}.
Para más información, puede consultar nuestra guía relativa a las [listas de destinatarios de SMS](https://docs.ovh.com/es/sms/lista-de-destinatarios-sms).

- Mediante una agenda de contactos (3). Puede crearla directamente en el área de cliente o importarla a través de un archivo .CSV o .TXT.
Para más información, puede consultar nuestra guía relativa a las [agendas de contactos de SMS](https://docs.ovh.com/fr/sms/gerer_mes_carnets_dadresses_sms/).

### 2. Escribir un SMS

Una vez que haya seleccionado el remitente y los destinatarios, ya puede empezar a escribir el mensaje.

![escribir sms](images/sms-send-control-panel03E.png){.thumbnail}

Introduzca su mensaje en el área de texto (1). En la esquina inferior derecha podrá ver un contador en el que se indican el número de caracteres restantes y la cantidad de SMS correspondiente (2). La longitud máxima de un SMS es de 160 caracteres con codificación de 7 bits (norma GMS 03.38).

Las tablas que ofrecemos a continuación recogen los caracteres autorizados con codificación de 7 bits. Los caracteres de la tabla «**Extensiones**» cuentan por dos. Si utiliza caracteres que no figuran en estas tablas, la codificación pasará a Unicode y la longitud máxima del SMS se reducirá a 70 caracteres.

![Lista de caracteres de SMS](images/smsauthorizedcharacters.png){.thumbnail}

**Opciones avanzadas**

Desplegando estas opciones, puede realizar un envío de SMS en diferido. Por defecto, el envío será inmediato.

También puede configurar el tipo de envío, eligiendo entre los siguientes:

- Estándar: Es el SMS más utilizado.
- Flash: El SMS se muestra directamente en la pantalla del teléfono.
- SIM: El SMS se guarda automáticamente en la tarjeta SIM del teléfono.

### 3. Elegir el remitente del SMS

#### Número corto que permite responder

Permite recibir una respuesta en la pestaña de SMS recibidos (disponible únicamente en las cuentas de OVHcloud Francia).

#### Número móvil virtual

Si dispone de una solución de SMS con número móvil virtual, podrá utilizar este número como remitente (disponible únicamente en las cuentas de OVHcloud Francia).

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

- **Añadir remitentes manualmente**: Introduzca el nombre que quiera que aparezca como remitente, una descripción (opcional) y una breve explicación motivando el uso de dicho nombre (4). 

> [!primary]
>
> En caso de solicitar el nombre de una empresa tercera como remitente, deberá proporcionar un justificante que le autorice a utilizar dicho nombre. En ese caso, deberá enviarnos dicho justificante abriendo un tíquet de soporte desde el área de cliente. La validación de los remitentes creados manualmente es gratuita y se realiza en una plazo que oscila entre uno y dos días laborables, de lunes a viernes, de 08:00 a 20:00.
>

- **Añadir remitentes a partir de datos personales**: Puede solicitar un remitente basado en los datos de su cuenta de OVHcloud. Al seleccionar esta opción, aparecerá una tabla con los remitentes disponibles. Haga clic en `+`{.action} para añadir el remitente correspondiente.

- **Añadir remitentes a partir de sus dominios en OVHcloud**: Puede utilizar como remitente un dominio disponible en su cuenta de OVHcloud. Al seleccionar esta opción, aparecerá una tabla con los remitentes disponibles. Haga clic en `+`{.action} para añadir el remitente correspondiente.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).