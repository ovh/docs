---
title: 'Usuarios de la API'
slug: usuarios-de-sms
excerpt: 'Descubra las funcionalidades de los usuarios de la API de SMS'
legacy_guide_number: g2144
section: 'Gestionar el servicio'
---

**Última actualización: 30/03/2020** 

## Objetivo

Esta guía explica cómo crear y gestionar usuarios de la API de SMS.

## Requisitos

- Disponer de una cuenta de SMS en OVHcloud.
- Tener acceso al área de cliente de OVHcloud.

## Procedimiento

![Usuarios de SMS](images/smsusers.png){.thumbnail}

Existen diversos motivos por los que puede ser útil disponer de un usuario de la API de SMS:

- Los usuarios de la API permiten proteger los accesos a la cuenta de SMS al enviar SMS a través de una API externa, ya que el script que realiza la llamada solo conoce el identificador del usuario y su contraseña, pero no la sesión del ID de cliente del propietario.

- En una empresa, es posible crear varios usuarios de la API para disfrutar de una mejor trazabilidad
y poder identificar el origen en caso de que un usuario de la API envíe SMS de forma abusiva.

- Es posible imponer restricciones (cuotas) a los créditos de SMS de un usuario de la API.
De este modo, el propietario de la cuenta de SMS puede repartir sus créditos entre las diferentes cuentas de usuarios de la API.

Para gestionar mejor el saldo de su cuenta de SMS, es posible aplicar un límite y una cuota a los usuarios de la API. 

- La **cuota** es la cantidad de créditos de SMS asignada a un usuario de la API.

- El **límite** es el umbral de créditos de SMS del que debe bajar un usuario de la API para recibir una alerta que se lo notifique y así poder recargar créditos si lo desea.

### 1. Crear un usuario de la API

Conéctese al [área de cliente de OVHcloud](https://www.ovhtelecom.fr/manager/) en la sección `Telecom`{.action} (1). A continuación, haga clic en `SMS`{.action} en la columna izquierda (2) y seleccione su cuenta de SMS (3).

Por último, abra la pestaña `Usuarios API`{.action} (4).

![Usuarios API](images/smsusers01e.png){.thumbnail}

Para añadir un usuario, haga clic en el botón `Acciones`{.action} y seleccione `Añadir`{.action}. 

![Añadir un usuario API](images/smsusers02e.png){.thumbnail}

Introduzca el nombre que quiera asignarle a su usuario de la API. La contraseña del usuario de la API debe estar compuesta por 8 caracteres alfanuméricos. 


### 2. Añadir una cuota a un usuario de la API

Puede gestionar las cuotas desde la pestaña `Usuarios API`{.action}. Haga clic en el botón `···`{.action} situado al final de la fila correspondiente al usuario de la API y seleccione `Cuota`{.action}.

![Añadir una cuota a un usuario API](images/smsusers03e.png){.thumbnail}

Podrá realizar dos acciones:

- **Activar la cuota**: Marque la casilla `¿Quiere activar la cuota?`{.action} para activar una cuota para el usuario de la API.
- **Establecer una cuota**: Establezca una cuota para el usuario en el campo `Nueva cuota`{.action}. Una vez alcanzada la cuota asignada, el envío de SMS se bloqueará para ese usuario.

![Activar una cuota](images/smsusers04.png){.thumbnail}

> [!primary]
> 
> La asignación de una cuota a un usuario de la API reducirá considerablemente el crédito total de la cuenta de SMS.
> 
> Por ejemplo, si una cuenta de SMS tiene un total de 200 créditos y asigna 150 créditos a un usuario de la API, este crédito se descontará de la cuenta de SMS, que solo dispondrá de 50 créditos.
>

### 3. Asignar un límite a un usuario de la API

También en `Usuarios API`{.action}, es posible configurar un límite para un usuario de la API, haciendo clic en el botón `···`{.action} y seleccionando `Límite`{.action}.

Podrá realizar las siguientes acciones:

- **Activar una alerta**: Marque la casilla `¿Quiere activar la alerta?`{.action} para activar la alerta de límite.
- **Establecer un umbral de alerta**: Indique en el campo `Umbral de alerta`{.action} el número de créditos de SMS del que debe bajar para activar el envío de la notificación.
- **Configurar la notificación**: Elija el medio por el que desea recibir la notificación: correo electrónico, SMS o ambos, e indique la dirección de correo electrónico y/o el número de teléfono móvil.

> [!primary]
>
>El envío de las notificaciones por SMS se cargará a su saldo de SMS.
>

![Configuración de un límite](images/smsusers05.png){.thumbnail}


### 4. Aplicar una restricción por IP para la función http2sms

Es posible proteger la función http2sms (envío de SMS mediante una petición http) aplicando restricciones por IP a cada usuario de la API.

Para activar la restricción por IP, haga clic en el botón `···`{.action} situado al final de la fila correspondiente al usuario de la API y seleccione `Restricciones`{.action}.

Puede introducir hasta 5 direcciones IP públicas diferentes por usuario para enviar las peticiones http.

![Restricciones por IP](images/smsusers06.png){.thumbnail}

Para más información sobre la función http2sms, consulte la guía [Enviar SMS desde una URL](https://docs.ovh.com/es/sms/enviar-sms-desde-una-url).

### 5. Especificar una URL de callback

Para realizar un seguimiento personalizado de los acuses de recibo de los SMS (DLR, de *delivery reporting*) es posible indicar una URL de callback haciendo clic en botón `···`{.action} situado al final de la fila correspondiente al usuario de la API y seleccionando `Callback`{.action}.

![Indicar URL de callback](images/smsusers07.png){.thumbnail}

Cuando se actualiza el estado de envío del SMS, el servicio realiza una llamada a la URL indicada, añadiendo los siguientes parámetros:

- **id**: Número de identificación del SMS.
- **ptt**: Código que indica el estado del SMS. Los distintos códigos ptt se describen más abajo.
- **date**: Fecha del DLR.
- **description**: ID del DLR. Los distintos ID de DLR se describen más abajo.
- **descriptionDIr**: Descripción del estado del DLR.

**Códigos ptt**

|Estado|Descripción|
|---|---|
|1|Estado intermedio que indica que el mensaje todavía no se ha entregado debido a un problema relacionado con el teléfono, pero sigue intentando entregarse.|
|2|El mensaje todavía no se ha entregado debido a un problema relacionado con el operador, pero sigue intentando enviarse dentro de la red.|
|3|El mensaje ha sido aceptado por el operador.|
|4|El mensaje se ha entregado.|
|5|El mensaje no se ha entregado, pero no se dispone de información detallada sobre el fallo.|
|6|No se ha podido determinar si el mensaje se ha entregado o se ha producido un fallo debido a la falta de información sobre el estado final de la entrega por parte del operador.|
|8|El mensaje ha expirado (no se ha podido entregar durante su período de validez) en el operador SMSC, pero se indica la causa del fallo.|
|20|No es posible entregar el mensaje en su forma actual.|
|21|Este código solo se utiliza cuando el operador acepta los mensajes antes de comprobar el saldo del abonado. Si el saldo no es suficiente, el operador vuelve a intentar el envío hasta que haya suficiente saldo o el mensaje expire. Si el mensaje expira y la última causa del fallo está relacionada con el saldo, se utiliza este código de error.|
|23|El mensaje no se puede entregar debido a un MSISDN incorrecto, no válido, en lista negra o prohibido definitivamente por el operador. Este MSISDN no debe volver a utilizarse para enviar mensajes a este operador.|
|24|El mensaje no se puede entregar porque el abonado está temporalmente ausente, por ejemplo, si su teléfono está apagado y no se puede localizar en la red.|
|25|El mensaje no ha podido entregarse debido a una circunstancia temporal en la red del operador. Puede estar relacionado con la capa SS7, la pasarela o la SMSC.|
|26|El mensaje no ha podido entregarse debido a un error temporal del teléfono, por ejemplo, si la tarjeta SIM está llena, la entidad de mensajes cortos está ocupada, la memoria está llena, etc., sin que esto signifique que el teléfono no pueda recibir este tipo de mensaje o contenido (ver código de error 27).|
|27|El teléfono es definitivamente incompatible o no puede recibir ese tipo de mensajes.|
|28|El mensaje no ha podido entregarse o ha sido rechazado en la red del operador por ser sospechoso de spam. En algunas zonas geográficas, podría indicar que el operador no puede identificar el MO obligatorio para un MT.|
|29|El contenido concreto no está autorizado en la red / código abreviado.|
|33|El abonado no puede recibir contenido para adultos debido a un control parental.|
|39|Fallo del operador.|
|73|El mensaje no ha podido entregarse porque el número portado no está disponible.|
|74|El mensaje no ha podido entregarse porque el MSISDN está en itinerancia.|
|76|El mensaje no ha podido entregarse porque el número portado está bloqueado para el cliente (el cliente ha sido incluido en una lista negra por el destino portado).|
|202|El mensaje no ha podido entregarse porque el número portado está bloqueado para el cliente. Para más información, contacte con el servicio de atención al cliente.|

**ID del DLR**

|Estado|Descripción|
|---|---|
|0|En creación o pendiente|
|1|Éxito|
|2|Error|
|4|En espera|
|8|En búfer|
|16|En error / no facturado|

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/).