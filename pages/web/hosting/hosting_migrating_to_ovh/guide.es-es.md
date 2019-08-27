---
title: 'Migrar un sitio web y el correo a OVH'
slug: web_hosting_transferir_un_sitio_web_y_el_correo_sin_cortes_del_servicio
excerpt: 'Cómo migrar un sitio web y el correo a OVH sin cortes del servicio'
section: 'Primeros pasos'
---

**Última actualización: 31/08/2018**

## Objetivo

Esta guía explica cómo migrar un sitio web, una o más bases de datos y sus cuentas de correo desde cualquier plataforma a OVH. El procedimiento de migración puede ser diferente si desea hacerlo sin interrupción del servicio.

**Descubra cómo transferir el sitio web y el correo a OVH sin cortes del servicio.**

## Requisitos

- Poder administrar el dominio.
- Tener acceso a los archivos del sitio web.
- Tener acceso a la base de datos del sitio web, en su caso.
- Disponer de la información (nombre de usuario, contraseña, servidores) necesaria para conectarse a las direcciones de correo actuales.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Procedimiento

Para transferir su sitio web y su correo a OVH, es necesario realizar un procedimiento de migración que puede dividirse en varias etapas.

|Etapa|Descripción| 
|---|---| 
|Contratación del alojamiento|Permite disponer de un alojamiento de OVH que albergará el sitio web y con el que podrá disfrutar de direcciones de correo.| 
|Transferencia del sitio web|Realización de una copia de seguridad completa del sitio para poder transferirlo posteriormente a su nuevo alojamiento de OVH.| 
|Transferencia de las cuentas de correo|Es necesario crear previamente las mismas direcciones de correo en OVH para poder transferir su contenido desde su anterior proveedor hacia OVH.| 
|Modificación de la configuración DNS del dominio|Cambio de la configuración del dominio para que utilice el alojamiento de OVH (tanto para el sitio web como para las direcciones de correo) en lugar de los servicios de su anterior proveedor.| 
|Transferencia del dominio|Cambio del agente registrador del dominio para elegir a OVH.| 

El orden de estas etapas puede variar en función del agente registrador que gestione el dominio.

> [!warning]
>
> Cuando algunos agentes registradores reciben una solicitud de transferencia saliente hacia otro proveedor, cortan la resolución DNS del dominio (en caso de que dicha resolución esté configurada con ellos). Como resultado, el dominio y los servicios que de él dependan, como el sitio web o las direcciones de correo, dejarían de estar disponibles.
>
> Por lo tanto, le recomendamos encarecidamente que se ponga en contacto con el agente registrador de su dominio para informarse sobre su política de transferencia saliente de dominios.
>

Teniendo en cuenta esta posibilidad, OVH pone a su disposición dos procedimientos de migración:

- migración sin interrupción del servicio, y
- migración con previsible interrupción del servicio.

### Migración sin interrupción del servicio

#### 1. Contratar un alojamiento web con OVH

Puede contratar su alojamiento en el [sitio web de OVH](https://www.ovh.es/hosting/){.external}. No solicite todavía la transferencia del dominio; espere a más adelante. Una vez recibido el pago, se iniciará la instalación del alojamiento. Recibirá un mensaje de correo electrónico cuando la instalación haya finalizado.

#### 2. Transferir el sitio web

Deberá realizar varias acciones.

|Acción|Descripción|
|---|---|
|1. Realizar una copia de seguridad del sitio web|Debe tratarse de una copia de seguridad completa del sitio web, incluyendo los archivos y, en su caso, las bases de datos. Dicha copia de seguridad es fundamental para realizar la migración del sitio web a OVH.|
|2. Publicar el sitio web con OVH|Conéctese a su espacio de almacenamiento (FTP) y suba los archivos del sitio web a la carpeta **www**. Las claves de conexión al espacio FTP se envían por correo electrónico al instalar el alojamiento.|
|3. Crear una base de datos en OVH|Si su sitio web utiliza una base de datos, deberá [crear una nueva en OVH](https://docs.ovh.com/es/hosting/crear-base-de-datos/){.external} desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|4. Importar los datos de la base de datos|Importe la copia de seguridad de la base de datos utilizando [la herramienta que OVH pone a su disposición](https://docs.ovh.com/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/){.external} en el área de cliente.|
|5. Conectar el sitio web a la nueva base de datos|En el archivo de configuración de su sitio web seguirá guardada la información de su anterior base de datos. Edite dicho archivo, presente en su espacio de almacenamiento de OVH, indicando la información de la nueva base de datos en OVH.|

Al no haber cambiado todavía la configuración del dominio, el alojamiento utilizado para mostrar el sitio web seguirá siendo el de su actual proveedor.

#### 3. Crear las direcciones de correo en OVH

Una vez transferido el sitio web, deberá [crear en OVH las mismas direcciones](https://docs.ovh.com/es/emails/correo_guia_de_creacion_de_una_direccion_de_correo_electronico/){.external} que utiliza con su actual proveedor (es decir, que deberán tener el mismo nombre). En el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la columna izquierda, haga clic en `Correo electrónico`{.action} y seleccione el alojamiento que acaba de contratar (el nombre será el mismo que el de su dominio). Abra la pestaña `Correo electrónico`{.action} y haga clic en el botón `Crear una dirección de correo`{.action}. A continuación, siga los pasos que se indican.

Al no haber cambiado todavía la configuración del dominio, los nuevos mensajes se seguirán recibiendo en las direcciones de correo que tiene con su actual proveedor. Asimismo, deberá seguir utilizando dichas direcciones para enviar mensajes de correo.

#### 4. Modificar la configuración del dominio

Una vez que haya transferido su sitio web y haya creado sus direcciones de correo en OVH, debe modificar la configuración del dominio. Para ello, sustituya los servidores DNS del dominio por los de OVH. Esta información se envía por correo electrónico y también puede consultarla en el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. El objetivo de esta operación es doble:

- Por un lado, **vincular técnicamente su dominio a las soluciones de OVH**: Su alojamiento de OVH será el utilizado para publicar el sitio web, y recibirá los nuevos mensajes de correo electrónico en su dirección de OVH.
- Por otro, **evitar que se produzca una interrupción del servicio**: Si, al recibir su solicitud de transferencia del dominio a OVH, su agente registrador decide cortar su propia configuración de DNS, no se producirá ninguna interrupción, ya que usted ya estará utilizando la configuración de OVH.

> [!warning]
>
> El cambio de los servidores DNS se realiza en el actual agente registrador del dominio. El tiempo de propagación necesario para que la modificación sea plenamente efectiva es de un máximo de 24 a 48 horas.
>

#### 5. Transferir el contenido de sus cuentas de correo

Deberá realizar varias acciones.

|Acción|Descripción|
|---|---|
|1. Migrar el contenido de las cuentas de correo a OVH|La herramienta [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} permite copiar el contenido de las cuentas de correo electrónico que tuviera con su anterior proveedor a sus cuentas creadas en OVH.|
|2. Usar sus direcciones |Ya puede acceder a sus cuentas de correo electrónico de OVH desde una aplicación web ([webmail](https://www.ovh.es/mail/){.external}). Si ha configurado alguna de las direcciones en un cliente de correo (p. ej. Outlook), deberá volver a configurarla para sustituir los servidores de su anterior proveedor [por los de OVH](../primeros-pasos-correo-compartido/){.external}.|

#### 6. Transferir el dominio a OVH

¡Ya solo queda transferir su dominio a OVH! Para ello, deberá realizar varias acciones.

|Acción|Descripción|
|---|---|
|1. Desbloquear el dominio|El bloqueo del dominio impide que este se transfiera a otro agente registrador, como OVH. Por lo tanto, es necesario desbloquear el dominio previamente contactando con su actual agente registrador.|
|2. Obtener el código de transferencia|El actual agente registrador del dominio le proporcionará el código de transferencia cuando solicite su desbloqueo.|
|3. Solicitar la transferencia a OVH|Realice el pedido correspondiente a la transferencia del dominio desde el sitio web de [OVH](https://www.ovh.es/){.external}. Durante el proceso, deberá introducir el código de transferencia anteriormente obtenido.|
|4. Pagar la orden de pedido|Una vez recibido el pago, se iniciará la transferencia del dominio.|
|5. Confirmar o esperar la confirmación de la transferencia| Esta etapa será diferente según la extensión del dominio. Si es necesaria la confirmación, recibirá una solicitud por correo electrónico en la que se indica el procedimiento a seguir. Siga dicho procedimiento para confirmar la solicitud de transferencia.| 

Una vez finalizada la transferencia, su sitio web, sus cuentas de correo y su dominio habrán sido migrados a OVH ¡sin interrupción del servicio!

### Migración con previsible interrupción del servicio

#### 1. Realizar el pedido correspondiente a la transferencia y el alojamiento web de sus servicios en OVH

Deberá realizar varias acciones.

|Acción|Descripción|
|---|---|
|1. Desbloquear el dominio|El bloqueo del dominio impide que este se transfiera a otro agente registrador, como OVH. Por lo tanto, es necesario desbloquear el dominio previamente contactando con su actual agente registrador.|
|2. Obtener el código de transferencia|El actual agente registrador del dominio le proporcionará el código de transferencia cuando solicite su desbloqueo.|
|3. Realizar el pedido en OVH|Realice el pedido correspondiente a la transferencia del dominio y del alojamiento desde el sitio web de [OVH](https://www.ovh.es/){.external}. Durante el proceso, deberá introducir el código de transferencia anteriormente obtenido. Al seleccionar los servidores DNS, indique los de su actual proveedor.|
|4. Pagar la orden de pedido|Una vez recibido el pago, se iniciarán la transferencia del dominio y la instalación del alojamiento web. **Según la política interna del actual agente registrador, este podría cortar la resolución DNS de su dominio, haciendo que tanto el dominio como los servicios que de él dependen (sitio web o direcciones de correo) dejen de estar disponibles.**|
|5. Confirmar o esperar la confirmación de la transferencia|Esta etapa será diferente según la extensión del dominio. Si es necesaria la confirmación, recibirá una solicitud por correo electrónico en la que se indica el procedimiento a seguir. Siga dicho procedimiento para confirmar la solicitud de transferencia.|

#### 2. Transferir el sitio web

Deberá realizar varias acciones.

|Acción|Descripción|
|---|---|
|1. Realizar una copia de seguridad del sitio web|Debe tratarse de una copia de seguridad completa del sitio web, incluyendo los archivos y, en su caso, las bases de datos. Dicha copia de seguridad es fundamental para realizar la migración del sitio web a OVH.|
|2. Publicar el sitio web con OVH|Conéctese a su espacio de almacenamiento (FTP) y suba los archivos del sitio web a la carpeta **www**. Las claves de conexión al espacio FTP se envían por correo electrónico al instalar el alojamiento.|
|3. Crear una base de datos en OVH|Si su sitio web utiliza una base de datos, deberá crear una nueva en OVH desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.|
|4. Importar los datos de la base de datos|Importe la copia de seguridad de la base de datos utilizando [la herramienta que OVH pone a su disposición](https://docs.ovh.com/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/){.external} en el área de cliente.|
|5. Conectar el sitio web a la nueva base de datos|En el archivo de configuración de su sitio web seguirá guardada la información de su anterior base de datos. Edite dicho archivo, presente en su espacio de almacenamiento de OVH, indicando la información de la nueva base de datos en OVH.|

Al no haber cambiado todavía la configuración del dominio, el alojamiento utilizado para mostrar el sitio web seguirá siendo el de su actual proveedor, en caso de que la resolución DNS siga activa.

#### 3. Crear las direcciones de correo en OVH

**Una vez finalizada la transferencia del dominio**, recibirá un mensaje de correo electrónico informándole de que el servicio de correo asociado a su alojamiento web acaba de ser instalado. A continuación, deberá [crear en OVH las mismas direcciones](https://docs.ovh.com/es/emails/correo_guia_de_creacion_de_una_direccion_de_correo_electronico/){.external} que utiliza con su actual proveedor (es decir, que deberán tener el mismo nombre). Desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, en la columna izquierda, haga clic en `Correo electrónico`{.action} y seleccione el alojamiento web que acaba de contratar (el nombre será el mismo que el del dominio). Abra la pestaña `Correo electrónico`{.action} y haga clic en el botón `Crear una dirección de correo`{.action}. Siga las indicaciones para finalizar la creación.

Al no haber cambiado todavía la configuración del dominio, los nuevos mensajes se seguirán recibiendo en las direcciones de correo que tiene con su actual proveedor, en caso de que la resolución DNS siga activa. Asimismo, deberá seguir utilizando dichas direcciones para enviar mensajes de correo.

#### 4. Modificar la configuración del dominio

Una vez que haya transferido su sitio web, haya creado sus direcciones de correo en OVH y haya transferido su dominio a OVH, deberá modificar la configuración de este último. Para ello, sustituya los servidores DNS del dominio por los de OVH desde el [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Si necesita ayuda, puede consultar la guía [Información general sobre los servidores DNS](https://docs.ovh.com/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/){.external}.

El objetivo de esta operación es doble:

- Por un lado, **vincular técnicamente su dominio a las soluciones de OVH**: Su alojamiento de OVH será el utilizado para publicar el sitio web, y recibirá los nuevos mensajes de correo electrónico en su dirección de OVH.
- Por otro, **reanudar el servicio interrumpido**: Si su agente registrador ha cortado su propia configuración de DNS al recibir su solicitud de transferencia del dominio, esto le permitirá que el servicio vuelva a estar disponible.

> [!warning]
>
> El tiempo de propagación necesario para que la modificación de los servidores DNS sea plenamente efectiva es de un máximo de 24 a 48 horas.
>

#### 5. Transferir el contenido de sus cuentas de correo

Deberá realizar varias acciones.

|Acción|Descripción|
|---|---|
|1. Migrar el contenido de las cuentas de correo a OVH|La herramienta [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} permite copiar el contenido de las cuentas de correo electrónico que tuviera con su anterior proveedor a sus cuentas creadas con OVH.|
|2. Usar sus direcciones |Ya puede acceder a sus cuentas de correo electrónico de OVH desde una aplicación web ([webmail](https://www.ovh.es/mail/){.external}). Si ha configurado alguna de las direcciones en un cliente de correo (p. ej. Outlook), deberá volver a configurarla para sustituir los servidores de su anterior proveedor [por los de OVH](../primeros-pasos-correo-compartido/){.external}.|

¡Su sitio web, sus cuentas de correo y su dominio ya están en OVH!

## Más información

[Primeros pasos con la solución MX Plan](https://docs.ovh.com/es/emails/primeros-pasos-correo-compartido/){.external}

[Información general sobre los servidores DNS](https://docs.ovh.com/es/domains/web_hosting_informacion_general_sobre_los_servidores_dns/){.external}

[Crear una dirección de correo electrónico](https://docs.ovh.com/es/emails/correo_guia_de_creacion_de_una_direccion_de_correo_electronico/){.external}

[Importar una base de datos MySQL](https://docs.ovh.com/es/hosting/web_hosting_importacion_de_una_base_de_datos_mysql/){.external}

[Gestionar una base de datos desde un alojamiento compartido](https://docs.ovh.com/es/hosting/gestion-de-una-base-de-datos-desde-un-alojamiento-compartido/){.external}

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.