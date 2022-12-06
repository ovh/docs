---
title: 'Migrar una cuenta de correo con OVH Mail Migrator'
slug: exchange-migracion-de-cuentas-correo-ovh-mail-migrator
excerpt: 'Cómo utilizar OVH Mail Migrator para migrar una cuenta de correo electrónico'
section: 'Migración de una cuenta'
order: 03
---

**Última actualización: 01/06/2018**

## Objetivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} es una herramienta creada por OVHcloud que permite migrar el contenido de una o más direcciones de correo electrónico a sus cuentas de correo en OVHcloud. Es posible migrar mensajes de correo electrónico, contactos, calendarios y tareas, siempre que estas últimas sean compatibles con sus cuentas de correo electrónico. 

**Esta guía explica cómo migrar una cuenta de correo hacia OVHcloud con la herramienta OVH Mail Migrator.**

## Requisitos

- Disponer de un servicio de correo en OVHcloud, como las soluciones [Exchange](https://www.ovhcloud.com/es/emails/hosted-exchange/){.external} o MX Plan (plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external} que incluya este servicio).
- Disponer de las claves de acceso de las cuentas de correo que quiera migrar (las cuentas de origen).
- Disponer de las claves de acceso de las cuentas de correo de OVHcloud a las que quiera migrar el contenido (las cuentas de destino).

## Procedimiento

Acceda a la herramienta [OVH Mail Migrator](https://omm.ovh.net/){.external} en la dirección <https://omm.ovh.net/>. Es posible realizar tres tipos de migración:

|Tipo de migración|Descripción|
|---|---|
|Migración única|Permite migrar el contenido de una dirección de correo electrónico a otra dirección. Es el tipo de migración recomendado para migrar el contenido de una o varias direcciones (deberá repetir los pasos para cada cuenta que quiera migrar).|
|Migración mediante archivo|Permite migrar el contenido de una dirección de correo electrónico, guardado previamente en un archivo, a otra dirección. Admite los formatos de archivo PST, ICS y VCF.|
|Migración por lotes (modo proyecto)|Permite gestionar varias migraciones en un único proyecto. Es el tipo de migración recomendado para migrar un gran número de direcciones de correo electrónico.|

Continúe esta guía en el apartado correspondiente al tipo de migración más adecuado en función de su proyecto.

### Realizar una migración única

Vaya a la página <https://omm.ovh.net/>. Sitúe el ratón sobre `Migración`{.action} en el menú superior y seleccione `Nueva migración`{.action}.

![Nueva migración OMM](images/omm-migration-create.png){.thumbnail}

Introduzca la información solicitada en cada apartado.

- **Cuenta**: Introduzca los datos de la **cuenta de origen** y de la **cuenta de destino**. Le recordamos que el contenido de la **cuenta de origen** será migrado a la **cuenta de destino**.

|Campo|Descripción|
|---|---|
|Tipo de servidor|Seleccione el tipo de servidor correspondiente a sus cuentas. Si una de ellas está en OVHcloud, puede seleccionar **Hosted by OVHcloud (Autodetect)** para que se autocomplete la información.|
|URL del servidor|Introduzca la dirección del servidor en el que están alojadas sus cuentas. Es posible que este campo se autocomplete al elegir el tipo de servidor.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa de sus cuentas.|
|Cuenta de administrador con delegación|Este campo solo aparece con determinados tipos de servidores.|
|Contraseña|Introduzca la contraseña de sus cuentas de correo electrónico.|

- **Opciones**: Seleccione el tipo de contenido que quiera migrar. En función del tipo de servidor elegido anteriormente, algunos elementos podrían no estar disponibles.

- **Notificaciones**: Introduzca la dirección de correo electrónico en la que quiera recibir las notificaciones relativas a la migración.

Una vez que haya introducido los datos, haga clic en el botón `Iniciar migración`{.action}. Si la información es correcta, comenzará la migración.

La página mostrará el progreso de la migración. Anote el **ID de migración** y espere a que termine la operación. Su duración dependerá de la cantidad de contenido migrada. A continuación se explica cómo consultar el estado de la migración.

### Consultar el estado de una migración única

Existen dos formas de consultar el estado de una migración única:

- desde el mensaje de correo electrónico en el que se informa de que la migración ha comenzado;
- desde la página correspondiente de la herramienta <https://omm.ovh.net/>, situando el ratón sobre `Migración`{.action} en el menú superior y seleccionando `Consultar/Sincronizar`{.action}. Una vez en la página, introduzca el **ID de migración** y la **Cuenta de origen**.

![Consultar el estado de la migración](images/omm-migration-track.png){.thumbnail}

Se mostrará el estado de la migración. También aparecerá un mensaje indicándole si el proceso va a comenzar, ha comenzado o ya ha finalizado. Según el estado de la migración, podrá realizar diversas acciones:

|Acción|Descripción|
|---|---|
|Cancelar el proceso|Permite cancelar la migración. Los elementos que ya se hayan migrado permanecerán en la cuenta de destino.|
|Deshacer|Permite eliminar de la cuenta de destino los elementos que ya se hayan migrado. Es posible eliminar los elementos a partir de un punto de sincronización determinado.|
|Sincronizar|Permite recuperar nuevos elementos no migrados durante una sincronización anterior entre la cuenta de origen y la cuenta de destino. Esta operación migra los elementos que faltan en la cuenta de destino con respecto a la cuenta de origen.|

### Realizar una migración mediante archivo

Vaya a la página <https://omm.ovh.net/>. Sitúe el ratón sobre `Importación`{.action} en el menú superior y seleccione el tipo de migración que quiera realizar:  `Nueva migración PST`{.action}, `Nueva migración ICS`{.action} o `Nueva migración VCF`{.action}.

Para poder realizar la migración de esta forma, debe disponer del archivo con el contenido que quiera migrar.

![Migración mediante un archivo](images/omm-migration-files.png){.thumbnail}

Introduzca la información de la **cuenta de destino** y haga clic en `Iniciar migración`{.action}. Le recordamos que el contenido del archivo PST, ICS o VCF será migrado a la **cuenta de destino**.

Si la información introducida es correcta, deberá seleccionar el archivo en su ordenador. Haga clic en `Cargar`{.action} y espere mientras se carga. El tiempo de espera dependerá del tamaño del archivo. Puede consultar el progreso desde esa misma página.

Una vez cargado el archivo, vuelva a introducir la contraseña de la **cuenta de destino** y haga clic en `Iniciar migración`{.action}. Si la información introducida es correcta, podrá iniciar la migración volviendo a hacer clic en el botón `Iniciar migración`{.action}.

La página mostrará el progreso de la migración. Anote el **ID de migración** y espere a que termine la operación. Su duración dependerá de la cantidad de contenido migrada. A continuación se explica cómo consultar el estado de la migración.

### Consultar una migración mediante archivo

Existen dos formas de consultar el estado de una migración mediante archivo PST, ICS o VCF:

- desde el mensaje de correo electrónico en el que se informa de que la migración ha comenzado;
- desde la página correspondiente de la herramienta <https://omm.ovh.net/>, situando el ratón sobre `Migración`{.action} en el menú superior y seleccionando `Consultar/Sincronizar`{.action}. Una vez en la página, introduzca el **ID de migración** y la **Cuenta de destino**.

![Consultar el estado de la migración](images/omm-migration-track.png){.thumbnail}

Se mostrará el estado de la migración. También aparecerá un mensaje indicándole si el proceso va a comenzar, ha comenzado o ya ha finalizado. Según el estado de la migración, podrá realizar diversas acciones:

|Acción|Descripción|
|---|---|
|Cancelar el proceso|Permite cancelar la migración. Los elementos que ya se hayan migrado permanecerán en la cuenta de destino.|
|Deshacer|Permite eliminar de la cuenta de destino los elementos que ya se hayan migrado.|

### Realizar una migración por lotes (modo proyecto) y consultar su estado

Vaya a la página <https://omm.ovh.net/>. Sitúe el ratón sobre la opción `Proyecto`{.action} en el menú superior y seleccione `Nuevo proyecto de migración por lotes`{.action}.

![Migración por lotes](images/omm-migration-project.png){.thumbnail}

Introduzca la información del **nuevo proyecto**:

|Campo|Descripción|
|---|---|
|Nombre|Asigne un nombre al proyecto de migración.|
|Contraseña|Establezca una contraseña para poder gestionar el proyecto de migración desde la herramienta OVH Mail Migrator.|
|Correo electrónico|Introduzca la dirección de correo electrónico en la que quiera recibir las notificaciones relativas a la migración.|

Haga clic en `Crear el proyecto`{.action}. A continuación podrá gestionar y consultar el estado del proyecto de migración. No olvide anotar el **ID del proyecto**.

Ya puede empezar a migrar el contenido de sus cuentas. Existen diversas pestañas disponibles:

|Pestaña|Descripción|
|---|---|
|Continuar|Permite consultar el estado de las migraciones del proyecto. También puede poner en cola de espera o reanudar las migraciones.|
|Creación por lotes|Permite añadir a la cola de espera varias migraciones mediante la importación de un archivo CSV o Excel. En este último caso, el archivo Excel debe tener un formato concreto, por lo que le recomendamos que utilice el modelo que le facilitamos.|
|Añadir|Permite añadir migraciones a la cola de espera una a una. Es posible conservar los servidores de origen y de destino como valores por defecto.|
|Opciones|Permite personalizar los elementos que debe migrar la herramienta OVH Mail Migrator, así como el número de peticiones simultáneas que la herramienta puede realizar al ejecutar las migraciones.|
|Desconexión|Permite desconectarse de la página de seguimiento del proyecto para así poder volver a identificarse para consultar otro proyecto de migración, por ejemplo.|

Si quiere consultar el estado de un proyecto de migración, acceda a la página <https://omm.ovh.net/>. Sitúe el ratón sobre la opción `Proyecto`{.action} en el menú superior y seleccione `Consultar el progreso de un proyecto`{.action}. Una vez en la página correspondiente, introduzca el **ID del proyecto de migración** y la **Contraseña**.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/.
