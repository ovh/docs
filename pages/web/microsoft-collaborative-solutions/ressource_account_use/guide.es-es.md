---
title: Exchange 2013/2016 Uso de las cuentas de recursos
excerpt: Esta guía describe cómo añadir y utilizar las cuentas de recursos con el servicio Exchange
slug: exchange_20132016_uso_de_las_cuentas_de_recursos
legacy_guide_number: g1325
section: Funcionalidades de Exchange
---


## Crear un recurso, etapa 1
Para crear el recurso, conéctese al área de cliente.

En la sección «Exchange», seleccione el servicio Exchange y, en la esquina superior derecha del área de cliente, seleccione el modo experto.

Abra la pestaña «Recursos» y haga clic en «Añadir una cuenta de recursos».

![](images/img_1346.jpg){.thumbnail}


## Crear un recurso, etapa 2
Cumplimente los campos: 

Nombre del recurso: Indique el nombre que quiera asignar al recurso.

Correo electrónico del recurso: Introduzca una dirección de correo electrónico para el recurso. No puede ser una dirección de correo existente.

Capacidad: Indique el tamaño del recurso a título informativo.

Permitir conflictos: Si la casilla está marcada, no se mostrará ninguna alerta si un usuario intenta reservar una sala o equipo que ya estén asignados a un evento.

Tipo de recurso: Hay dos tipos de recursos: «Equipo» y «Sala».

Haga clic en «Siguiente» para acceder a la siguiente etapa y finalice la operación haciendo clic en «Crear».

![](images/img_1347.jpg){.thumbnail}


## Crear un recurso, etapa 3
Una vez creados los recursos, puede modificarlos o eliminarlos desde la pestaña «Cuentas de recursos», donde encontrará una tabla con el nombre del recurso, su tipo (equipo o sala), su capacidad y el correo electrónico del recurso.

A continuación se describe cómo utilizar las cuentas de recursos activas.

![](images/img_1348.jpg){.thumbnail}


## Calendario de un recurso, etapa 1
A continuación, se describe cómo ver el calendario de un recurso desde la interfaz de [Webmail Exchange](https://ex.mail.ovh.net/owa/).

Acceda a Outlook Web App e identifíquese con su dirección de correo electrónico completa y la contraseña.

En el menú superior, seleccione «Calendario», haga clic derecho en «OTROS CALENDARIOS» y seleccione «abrir calendario».

![](images/img_1349.jpg){.thumbnail}


## Calendario de un recurso, etapa 2
Introduzca el nombre del recurso. El servidor Exchange lo localizará automáticamente, ya que está incluido en la lista global de direcciones.

Seleccione «Abrir» para finalizar la operación.

![](images/img_1350.jpg){.thumbnail}


## Calendario de un recurso, etapa 3
Los calendarios de recursos creados podrán verse en Outlook Web App.

En la esquina superior izquierda aparecerá un botón «nuevo evento» que podrá utilizar para crear un nuevo evento para sus colaboradores.

![](images/img_1351.jpg){.thumbnail}


## Gestionar un recurso, etapa 1
En primer lugar, vamos a crear un evento utilizando los recursos previamente creados.

Para ello, en el menú «Calendario», seleccione el botón situado en la esquina superior izquierda «nuevo evento».

Se abrirá la pantalla de la imagen.

Cumplimente los campos:

Evento: Nombre que desee asignar al evento.

Ubicación: Aquí puede añadir un recurso de tipo «sala».

Asistentes: Introduzca los colaboradores y los recursos de tipo «equipo».

Iniciar: Indique la fecha y hora de comienzo del evento. 

Duración: Seleccione la duración del evento.

Se muestra como: Determina el estado que quiere que aparezca en el calendario.

Aviso: Establece la antelación con la que se envía el recordatorio del evento. 

Repetir: Determina la periodicidad del evento.

Haga clic en «Enviar» para crear el evento.

![](images/img_1352.jpg){.thumbnail}


## Gestionar un recurso, etapa 2
En la imagen, el recurso «MaSalle1» de tipo sala y el recurso «Equipement1» de tipo equipo han aceptado el evento «Réunion».

Como se ha dejado marcada la opción de «Solicitar respuestas», recibirá por correo electrónico si la petición ha sido aceptada o rechazada.

![](images/img_1356.jpg){.thumbnail}


## Gestionar un recurso, etapa 3
Desde la pantalla del calendario, puede ver el estado de los recursos. 

Como se puede ver en la imagen, después de añadir el evento, el estado de los recursos cambia a «Ocupado».

![](images/img_1357.jpg){.thumbnail}


## Gestionar un recurso, etapa 4
Ahora vamos a intentar añadir otro evento el mismo día que el anterior. 

Como puede verse en la imagen, en este caso, también recibimos la notificación, pero para este segundo evento «Discours», el recurso «MaSalle1» ha rechazado el evento por existir conflictos debido a que ya hay un evento previsto en la misma fecha y los conflictos no están autorizados en ese recurso.

En cambio, el recurso «Equipement1» ha aceptado el evento porque, aunque hay otro evento previsto para esa fecha, la gestión de conflictos está desactivada para ese recurso.

![](images/img_1358.jpg){.thumbnail}

