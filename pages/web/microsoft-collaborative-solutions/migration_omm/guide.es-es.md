---
title: 'Migrar una cuenta de correo con OVH Mail Migrator'
slug: exchange-migracion-de-cuentas-correo-ovh-mail-migrator
excerpt: 'Cómo utilizar OVH Mail Migrator para migrar una cuenta de correo electrónico'
section: 'Migración de una cuenta'
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 25/11/2021**

## Objetivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} es una herramienta creada por OVHcloud. Permite migrar sus cuentas de correo a sus direcciones de correo de OVHcloud o a un servicio de correo externo. Es posible migrar mensajes de correo electrónico, contactos, calendarios y tareas, siempre que estas últimas sean compatibles con sus cuentas de correo electrónico. 

**Esta guía explica cómo migrar una cuenta de correo a OVHcloud con nuestra herramienta OVH Mail Migrator.**


## Requisitos

- Disponer de un servicio de correo en OVHcloud, como las soluciones [Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/){.external}, [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external} o MX Plan (teniendo contratado un plan MX Plan o un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external} que incluya este servicio).
- Disponer de las claves de acceso de las cuentas de correo que quiera migrar (las cuentas de origen).
- Disponer de las claves de acceso de las cuentas de correo de OVH a las que quiera migrar el contenido (las cuentas de destino).

## Procedimiento

Acceda a la herramienta **OVH Mail Migrator** en la dirección <https://omm.ovh.net/>. Gestiona 3 tipos de migración:

- [Migración única](#standalone): Migrar una cuenta de correo a otra cuenta de correo. Esta opción es recomendable para migrar una o varias cuentas de correo (es necesario repetir los pasos para cada dirección migrada).
- [Migración por archivo](#file): Migrar el contenido de una cuenta de correo electrónico, guardado previamente en un archivo, a otra dirección de correo electrónico. Admite los formatos de archivo PST, ICS y VCF.
- [Migración múltiple (modo proyecto)](#project): Permite gestionar varias migraciones en un único proyecto. Es el tipo de migración recomendado para migrar un gran número de direcciones de correo electrónico.

### Migración única <a name="standalone"></a>

#### Iniciar la migración

Desde la página <https://omm.ovh.net/>, en la pestaña `Migración`{.action}, haga clic en `Nueva migración`{.action}.

![omm](images/omm-migration-create.png){.thumbnail}

Introduzca la información solicitada en cada apartado.

- **Cuenta**: Introduzca los datos de la **cuenta de origen** y de la **cuenta de destino**. Le recordamos que el contenido de la **cuenta de origen** será migrado a la **cuenta de destino**.

|Elemento|Descripción|
|---|---|
|Tipo de servidor|Seleccione el tipo de servidor correspondiente a sus cuentas. Si una de ellas es una dirección de OVHcloud, **Hosted by OVHcloud (Autodetect)**, permite completar automáticamente la información, excepto la contraseña.|
|URL del servidor|Introduzca la dirección del servidor en el que están alojadas sus cuentas. Es posible que este campo se autocomplete al elegir el tipo de servidor.|
|Nombre de usuario|Introduzca la dirección de correo electrónico completa.|
|Cuenta de administrador con delegación|Este campo solo aparece con determinados tipos de servidores.|
|Contraseña|Introduzca la contraseña de la dirección de correo electrónico.|

- **Opciones**: Seleccione el tipo de contenido que quiera migrar. En función del tipo de servidor elegido anteriormente, algunos elementos podrían no estar disponibles.

- **Información**: introduzca una dirección de correo electrónico para recibir una notificación sobre el progreso de la migración.

Una vez que haya introducido la información, haga clic en `Iniciar migración`{.action}. Si la información es correcta, comenzará la migración.

La página mostrará el progreso de la migración. Anote el `ID de migración`{.action} y espere a que termine la operación. Su duración dependerá de la cantidad de contenido migrada. A continuación se explica cómo consultar el estado de la migración.

#### Seguimiento de la migración  

Existen dos formas de consultar el estado de una migración única:

- desde el mensaje de correo electrónico recibido, informándole del progreso de la migración;
- desde la página <https://omm.ovh.net/>, en la pestaña `Migración`{.action}, haga clic en `Seguimiento / sincronización`{.action}. Una vez en la página, introduzca el `ID de migración` y la `Cuenta de origen`.

![Consultar el estado de la migración](images/omm-migration-track.png){.thumbnail}

Se mostrará el estado de la migración. También aparecerá un mensaje indicándole si el proceso va a comenzar, ha comenzado o ya ha finalizado. Según el estado de la migración, podrá realizar diversas acciones:


- `Detener el proceso `{.action}: Permite cancelar la migración. Los elementos que ya se hayan migrado permanecerán en la cuenta de destino.
- `Eliminar los elementos migrados`{.action}: Permite eliminar de la cuenta de destino los elementos que ya se hayan migrado. Es posible eliminar los elementos a partir de un punto de sincronización determinado.
- `Sincronizar`{.action}: Permite recuperar nuevos elementos no migrados durante una sincronización anterior entre la cuenta de origen y la cuenta de destino. Esta operación migra los elementos que faltan en la cuenta de destino con respecto a la cuenta de origen.

### Migración mediante archivo <a name="file"></a>

#### Iniciar la migración

Desde la página <https://omm.ovh.net/>, en la pestaña `PST/ICS/VCF`{.action}, haga clic en `Nueva migración PST/ICS/VCF`{.action} .

En ese caso, debe tener el archivo con el contenido que quiera migrar a la cuenta de correo.

![omm](images/omm-migration-files.png){.thumbnail}

Introduzca la información de la **cuenta de destino** y haga clic en `Iniciar migración`{.action}.

Si la información introducida es correcta, deberá seleccionar el archivo en su ordenador. A continuación, haga clic en el botón `Subir`{.action} y espere mientras se descarga. esto puede tardar un tiempo en función del tamaño del archivo. Puede consultar el progreso desde esa misma página.

Una vez que haya cargado el archivo en la herramienta OMM, vuelva a introducir la contraseña de la **cuenta de destino** y haga clic en `Iniciar migración`{.action}. Si la información introducida es correcta, podrá realizar la migración haciendo clic en el botón `Iniciar migración`{.action}.

La página mostrará el progreso de la migración. Conserve el `ID de migración`{.action} mostrado y espere hasta que finalice la migración. este plazo varía en función del número de elementos que se vayan a migrar. Si quiere acceder de nuevo a este seguimiento, vaya a la siguiente sección.

#### Seguimiento de la migración

Existen dos formas de consultar el estado de una migración mediante archivo PST, ICS o VCF:

- desde el mensaje de correo electrónico de notificación del inicio de la migración;

- desde la página <https://omm.ovh.net/>, pasando el ratón sobre la pestaña `Migración`{.action} en el menú situado sobre la página y haciendo clic en `Seguimiento / Sincronización`{.action}. Una vez en la página, introduzca el `ID de migración` y la `Cuenta de destino`.

![Consultar el estado de la migración](images/omm-migration-track.png){.thumbnail}

Se mostrará el estado de la migración. También aparecerá un mensaje indicándole si el proceso va a comenzar, ha comenzado o ya ha finalizado. Según el estado de la migración, podrá realizar diversas acciones:

- Detener el proceso: Permite cancelar la migración. Los elementos que ya se hayan migrado permanecerán en la cuenta de destino.
- Eliminar los elementos migrados: Permite eliminar los elementos migrados de la cuenta de destino.

### Realizar y seguir una migración por lotes (modo proyecto) <a name="project"></a>

Desde la página <https://omm.ovh.net/>, en la pestaña `Proyecto`{.action}, haga clic en `Nuevo proyecto de migración múltiple`{.action}.

![omm](images/omm-migration-project.png){.thumbnail}

Complete la información del **Nuevo Proyecto**:

- Asigne un nombre al proyecto de migración.
- Contraseña para acceder a la interfaz de seguimiento de su proyecto de migración.
- una dirección de correo electrónico para recibir una notificación sobre el progreso de su proyecto de migración.

Haga clic en `Crear el proyecto`{.action}. En la siguiente página podrá gestionar y consultar el estado del proyecto de migración. Conserve **el número del proyecto** mostrado arriba.

![omm](images/omm-migration-project01.png){.thumbnail}

Ya puede iniciar la migración de sus cuentas. La interfaz presenta diferentes pestañas:

- `Continuar`: Permite consultar el progreso de las migraciones en su proyecto. Dispone de un botón que permite poner en espera y reanudar las migraciones en curso.

- `Creación múltiple`: Permite añadir a la cola de espera varias migraciones mediante la importación de un archivo CSV o Excel. Este último debe tener un formato preciso; le recomendamos que utilice los modelos proporcionados. El archivo se presenta de esta forma:

``` 

"Source Type(IMAP/Exchange/POP)";Source Server url;Source Login/Mail;Source Password;Destination Type;"Destination Url(can be leaved empty if hosted by OVH)";Destination Mail;Destination Password;Source admin mail (delegation);Destination Admin Mail (delegation)
IMAP;myimap.server.com;mywonderfulmail@myserver.com;My_password;Exchange;https://ex3.mail.ovh.net/ews/exchange.asmx;mygreatmailaddress@mydomain.ovh;My_password2;"";""

```

Es mejor abrirlo con un programa de hojas de cálculo para completarlo.

- `Añadir`: Permite añadir, en cada cuenta, migraciones a la cola de espera. No obstante, podrá conservar los servidores fuente y destino como valores por defecto.

![omm](images/omm-migration-project02.png){.thumbnail}

- `Opciones`: Permite personalizar los elementos que debe migrar la herramienta OVH Mail Migrator, así como el número de peticiones simultáneas que la herramienta puede realizar al ejecutar las migraciones.

![omm](images/omm-migration-project03.png){.thumbnail}

- `Desconexión`: Permite desconectarse de la página de seguimiento del proyecto, sin que ello afecte al desarrollo de la migración.

Para consultar el estado de su proyecto de migración, conéctese a la página <https://omm.ovh.net/>situada en la pestaña `Proyecto`{.action}. Haga clic en `Consultar el estado de un proyecto`{.action}. Una vez en la página correspondiente, introduzca el `ID del proyecto de migración` y la `Contraseña`.

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
