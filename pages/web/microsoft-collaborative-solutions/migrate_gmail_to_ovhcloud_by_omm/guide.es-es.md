---
title: 'Migrar una cuenta de Gmail a una cuenta de correo electrónico de OVHcloud a través de OVH Mail Migrator'
slug: migracion-de-gmail-mediante-ovh-mail-migrator
excerpt: 'Cómo migrar sus cuentas de Gmail a OVHcloud con nuestra herramienta OVH Mail Migrator'
section: 'Migrar una cuenta de Exchange'
order: 3
---

**Última actualización: 03/02/2020**

## Objetivo

[OVH Mail Migrator](https://omm.ovh.net/){.external} (OMM) es una herramienta creada por OVHcloud. Le permite migrar sus cuentas de correo electrónico de un proveedor de hosting a otro. El proceso tiene en cuenta los diferentes tipos de contenidos, por ejemplo, los correos electrónicos, los contactos, los calendarios y las tareas, siempre que estas últimas sean compatibles con sus cuentas de correo electrónico de OVHcloud. 

<b>Esta guía explica cómo utilizar la herramienta OMM para importar los distintos elementos de su cuenta de Gmail a su cuenta de correo electrónico de OVHcloud.</b>

**Aprenda a migrar su cuenta de Gmail a una cuenta de correo electrónico de OVHcloud mediante nuestra herramienta OMM.**


## Requisitos

- Disponer de un servicio de correo electrónico en OVHcloud, como [Exchange](https://www.ovh.es/emails/){.external}, [Email Pro](https://www.ovh.es/emails/email-pro/){.external} o MX Plan (teniendo contratado un plan MX Plan o, incluso, mediante un plan de [Web hosting de OVHcloud](https://www.ovh.es/hosting/){.external}).
- Disponer del nombre de usuario y la contraseña de las cuentas de correo electrónico que quiera migrar (las cuentas de origen).
- Disponer del nombre de usuario y la contraseña de las cuentas de correo electrónico de OVHcloud que recibirán los datos que se migran (las cuentas de destino).

## Procedimiento

### Etapa 1: Migrar los correos electrónicos y las carpetas

> [!primary]
> Para posibilitar la migración, es necesario activar el protocolo IMAP de su cuenta Gmail. Para ello, consulte la guía de Google
> [«Consulta tu correo de Gmail a través de otras plataformas de correo electrónico»](https://support.google.com/mail/answer/7126229?hl=es){.external}.

Una vez activado el protocolo IMAP en su cuenta de Gmail, acceda a [la página de la herramienta OMM](https://omm.ovh.net/){.external}.

Haga clic en `Migración`{.action} y, seguidamente, en `Nueva migración`{.action}.

![omm](images/OMM-gmail-step01-01.png){.thumbnail}

Aparece la siguiente ventana:

![omm](images/OMM-gmail-step01-02.png){.thumbnail}

Rellene los campos necesarios según las indicaciones de las siguientes dos tablas:

**Cuenta de origen**

| Dato            	| Descripción                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Tipo de servidor         	| Seleccione **«IMAP»** en el menú desplegable.         									|
| URL del servidor          	| Introduzca **«imap.gmail.com»**.                       					 			  	|
| Nombre de usuario						| Introduzca su dirección de Gmail.															|
| Contraseña				| Introduzca la contraseña de su dirección de Gmail.										|

**Cuenta de destino**

| Dato            	| Descripción                                                                              							|
|------------------------	|-------------------------------------------------------------------------------------------------------------------|
| Tipo de servidor         	| Seleccione **«Alojado en OVHcloud (autodetección)»** en el menú desplegable.   											|
| URL del servidor          	| El campo se rellena automáticamente.                     					  		 							|
| Nombre de usuario						| Introduzca su dirección de correo electrónico de OVHcloud.																			|
| Contraseña				| Haga clic en `Encontrar los parámetros`{.action} y, seguidamente, introduzca la contraseña de su dirección de correo electrónico de OVHcloud.	|

En la sección **«Opciones»**, active únicamente **«Mensajes de correo electrónico»**, ya que las otras opciones no están disponibles en IMAP. La migración de los contactos y los calendarios se realizará en las etapas 2 y 3.

![omm](images/OMM-gmail-step01-03.png){.thumbnail}

En el marco de texto **«Información»**, puede introducir una dirección de correo electrónico en la que se le notificará sobre el progreso de la migración. Este campo es opcional. A continuación, haga clic en `Iniciar la migración`{.action}

![omm](images/OMM-gmail-step01-04.png){.thumbnail}

Aparece la ventana de seguimiento de la migración (véase a continuación). Puede dejarla abierta para monitorizar la migración en directo o cerrarla, lo que no tendrá ningún efecto en la migración.

![omm](images/OMM-gmail-step01-06.png){.thumbnail}

> [!warning]
> Al ejecutar la migración, es posible que visualice el siguiente mensaje

![omm](images/OMM-gmail-step01-05.png){.thumbnail}

En tal caso, acceda a la bandeja de entrada de su cuenta de Gmail y revise si ha recibido un correo electrónico con el asunto **«Alerta de seguridad importante sobre tu cuenta de Google vinculada»**. Se trata de una medida de seguridad instrumentada por Gmail. Para solucionar esta situación, consulte la guía [Cómo autorizar las conexiones poco seguras de Gmail](https://docs.ovh.com/es/microsoft-collaborative-solutions/migracion-de-gmail-mediante-ovh-mail-migrator/seguridad_gmail){.external}.

Una vez **autorizadas las «Conexiones poco seguras»** en Gmail, puede reanudar la migración.

### Etapa 2: Migrar calendarios

#### 2.1\. Recuperar una copia de seguridad del calendario de Gmail

Para importar su calendario a su cuenta de OVHcloud, recupere una copia de seguridad de dicho calendario en la interfaz de Gmail. Para ello, consulte la guía oficial de Google:

[Cómo exportar tu calendario de Google](https://support.google.com/calendar/answer/37111?hl=es){.external}

Si tiene varios calendarios en su cuenta de Gmail, descargue un archivo comprimido. Cada calendario está disponible en formato **.ics**.

#### 2.2\. Importar un calendario mediante la herramienta OMM

> [!primary]
> La migración de los calendarios mediante la herramienta OMM solo es compatible con las cuentas de Exchange.

Una vez recuperada la copia de seguridad de su calendario en formato **.ics**, acceda a [la página de la herramienta OMM](https://omm.ovh.net/){.external}.

Acceda a la pestaña `PST/ICS/VCF`{.action} en la parte superior y, seguidamente, haga clic en `Nueva migración PST/ICS/VCF`{.action}.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Rellene los campos necesarios según la siguiente tabla y luego, haga clic en `Iniciar la migración`{.action}.

| Dato            	| Descripción                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Nombre de usuario                  	| Indique la dirección de correo electrónico de OVHcloud a la que migrará su calendario.           	|
| Contraseña           	| Introduzca la contraseña de la dirección de correo electrónico de destino.                          	|
| Correo electrónico de comunicación 	| Introduzca una dirección de correo electrónico a efectos de recibir información sobre el progreso de la migración, lo que le permitirá reanudar la descarga de un fichero.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

 Haga clic en `Seleccionar un archivo`{.action} para recuperar, en su ordenador, el archivo **.ics** correspondiente a su calendario y, seguidamente, haga clic en `Cargar`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

A continuación, introduzca la contraseña de su cuenta de correo electrónico de destino y, luego, haga clic en `Iniciar la migración`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

Aparece la ventana de seguimiento de la migración (véase a continuación). Puede dejarla abierta para monitorizar la migración en directo o cerrarla, lo que no tendrá ningún efecto en la migración.

![omm](images/OMM-gmail-step02.png){.thumbnail}


### Etapa 3: Migrar contactos

> [!primary]
> La migración de los contactos mediante la herramienta OMM solo es compatible hacia las cuentas de Exchange.

Para importar los contactos a su cuenta de OVHcloud, recupere una copia de seguridad de estos en su interfaz de Gmail. Para ello, consulte la guía oficial de Google:

[Crear copias de seguridad de contactos o exportarlos](https://support.google.com/contacts/answer/7199294?hl=es
){.external}

> [!warning]
> La exportación se debe hacer en formato vCard (**.vcf**) a través de la interfaz de Gmail. Esta opción se propone al final de la exportación.

![omm](images/OMM-gmail-step23-01.png){.thumbnail}

Rellene los campos necesarios según la siguiente tabla y luego, haga clic en `Iniciar la migración`{.action}.

| Dato            	| Descripción                                                                              	|
|------------------------	|------------------------------------------------------------------------------------------	|
| Nombre de usuario                  	| Indique la dirección de correo electrónico de OVHcloud a la que migrarán sus contactos.            	|
| Contraseña           	| Introduzca la contraseña de la dirección de correo electrónico de destino.                          	|
| Correo electrónico de comunicación 	| Introduzca una dirección de correo electrónico a efectos de recibir información sobre el progreso de la migración, lo que le permitirá reanudar la descarga de un fichero.	|

![omm](images/OMM-gmail-step23-02.png){.thumbnail}

Haga clic en `Seleccionar un archivo`{.action} para recuperar, en su ordenador, el archivo **.vcf** correspondiente a sus contactos y, seguidamente, haga clic en `Cargar`{.action}.

![omm](images/OMM-gmail-step23-03.png){.thumbnail}

A continuación, introduzca la contraseña de su cuenta de correo electrónico de destino y, luego, haga clic en `Iniciar la migración`{.action}.

![omm](images/OMM-gmail-step23-04.png){.thumbnail}

Aparece la ventana de seguimiento de la migración, la que puede dejar abierta para monitorizar la migración en directo o cerrarla, lo que no tendrá ningún efecto en la migración.

![omm](images/OMM-gmail-step03.png){.thumbnail}


## Más información

[Cómo autorizar las conexiones poco seguras en Gmail](https://docs.ovh.com/es/microsoft-collaborative-solutions/migracion-de-gmail-mediante-ovh-mail-migrator/seguridad_gmail){.external}.

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en](https://community.ovh.com/en){.external}.

