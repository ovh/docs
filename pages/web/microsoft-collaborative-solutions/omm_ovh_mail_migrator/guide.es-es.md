---
title: Migrar una cuenta de correo con OVH Mail Migrator
slug: exchange-migracion-de-cuentas-correo-ovh-mail-migrator
legacy_guide_number: 1624
excerpt: Cómo utilizar OVH Mail Migrator para migrar una cuenta de correo electrónico
section: Migración de una cuenta
---

**Última actualización: 12/01/2018**

## Introducción

La herramienta OMM (OVH Mail Migrator) permite transferir el contenido de sus cuentas de correo electrónico a sus cuentas Exchange (correo, contactos, calendarios, tareas, etc.), Email Pro o MX Plan sin tener que recurrir a la exportación PST, que puede prolongarse y presenta limitaciones.

En primer lugar, acceda a [OVH Mail Migrator](https://omm.ovh.net){.external}.

## Realizar una migración
Haga clic en `Nueva migración`{.action}.

![emails](images/2795_en.png){.thumbnail}

### Cuenta de origen

Elija el tipo de cuenta actual y cumplimente los parámetros del servidor.

Si su cuenta de origen está alojada en OVH, elija **Hosted by OVH (Autodetect)**. Introduzca la dirección de correo electrónico y haga clic en `Detectar configuraciones`{.action}.

A continuación deberá introducir la contraseña.

Por ejemplo, para migrar un MX Plan a Email Pro:

- Tipo de servidor: Hosted by OVH
- Nombre de usuario: Dirección de correo electrónico MX Plan
- Haga clic en «Detectar configuraciones».
- Contraseña: Contraseña de su cuenta de correo


### Cuenta de destino

Elija el tipo de la nueva cuenta e introduzca su dirección de correo electrónico y la contraseña. Los parámetros del servidor se completarán automáticamente.

![emails](images/2796_en.png){.thumbnail}

Por ejemplo, para migrar un MX Plan a Email Pro:

- Tipo de servidor: Hosted by OVH
- Nombre de usuario: Dirección de correo electrónico Email Pro
- Haga clic en «Detectar configuraciones».
- Contraseña: Contraseña de su cuenta de correo Email Pro


### Opciones

Seleccione los elementos que desee migrar:

- **Mensajes de correo electrónico:** Mensajes de correo, conservando la jerarquía de carpetas.
- **Calendarios:** Calendarios asociados a la cuenta, volviendo a crear los eventos (sin las invitaciones).
- **Contactos:** Contactos añadidos a la cuenta.
- **Reglas:** Reglas creadas en la cuenta (requiere Exchange 2010 SP1 o superior).
- **Grupos de contactos:** Grupos de contactos creados en la cuenta.
- **Respuestas automáticas:** Reglas de respuesta automática creadas.
- **Tareas:** Tareas creadas en la cuenta.

![emails](images/3768_en.png){.thumbnail}

### Finalización

Para una migración POP/IMAP hacia Email Pro o Exchange, solo podrá seleccionar la opción `Mensajes de correo electrónico`{.action}.

Puede indicar una dirección de correo diferente para recibir las notificaciones relativas al proceso de migración.

Una vez haya introducido todos los datos, haga clic en `Iniciar migración`{.action} para ejecutar la operación.

Si la pareja usuario-contraseña o el servidor introducido no son correctos, aparecerá el siguiente mensaje de error:

![emails](images/2441.png){.thumbnail}

Una vez creada la tarea, se ejecutará la operación de migración, durante la cual podrá seguir su progreso.

![emails](images/2798_en.png){.thumbnail}

> [!warning]
>
> Importante: No olvide anotar el número de la tarea («ID de migración») para poder consultar en otro momento el progreso de la migración de su cuenta.
> 

## Importación de archivos PST

Si tiene un archivo .PST que quiera importar a su cuenta de correo, puede hacerlo desde el menú `PST`{.action}.

![emails](images/3769_EN.png){.thumbnail}

Haga clic en `Iniciar migración`{.action}.

A continuación seleccione el archivo PST con el botón `Examinar`{.action} o `Seleccionar archivo`{.action}.

![emails](images/3770.png){.thumbnail}

Una vez haya seleccionado el archivo .PST, deberá introducir la contraseña de la cuenta de destino antes de iniciar la migración.

Cuando comience la migración, se mostrará el ID de migración. Anote este número, ya que lo necesitará para consultar el progreso de la misma.

## Consultar el estado de una migración

Puede consultar el progreso de la migración de su cuenta.

Para ello, necesitará:

- el ID de migración (ver etapa anterior),
- la dirección de correo de origen.

Introduzca los datos arriba indicados y haga clic en `Seguir`{.action} para consultar el estado de la migración.

![emails](images/2799_en.png){.thumbnail}

Se abrirá una nueva ventana en la podrá ver el estado de la migración. Así sabrá en qué fase se encuentra o si ya ha finalizado.

![emails](images/2800_en.png){.thumbnail}

En dicha pantalla se muestran los siguientes datos:

- ID de la tarea correspondiente a la operación de migración.
- Fecha de creación de la operación de migración.
- Última modificación de la operación de migración.
- Botones `Cancelar`{.action} y `Deshacer`{.action}, cuyo funcionamiento se explica a continuación.

### Cancelar

El botón `Cancelar`{.action} cancela las etapas restantes, aunque finaliza aquella que se esté realizando.

Por ejemplo, si hace clic en el botón durante la migración de los contactos, la acción de migración de los contactos terminará, pero si había solicitado también la migración de los calendarios, esta no se realizará y la operación finalizará.

### Deshacer

El botón `Deshacer`{.action} permite restablecer la cuenta de destino a su estado inicial (anterior a la migración). Esta función solo está disponible durante las 48 horas posteriores a la finalización del proceso de migración.