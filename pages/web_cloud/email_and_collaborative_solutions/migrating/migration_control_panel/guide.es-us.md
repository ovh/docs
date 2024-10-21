---
title: 'Migrar una cuenta MX Plan a una cuenta Exchange'
excerpt: 'Cómo migrar una dirección MX Plan a una cuenta Exchange'
hidden: true
updated: 2022-11-22
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
> 

## Objetivo

OVHcloud ofrece varias soluciones de correo electrónico: MX Plan (incluido en un plan de hosting) y Exchange. Estas disfrutan de funcionalidades propias y pueden adaptarse a varios usos. ¿Sus necesidades evolucionan? OVHcloud pone a su disposición una herramienta de migración que le permitirá cambiar de una solución a otra.

**Esta guía explica cómo migrar una cuenta MX Plan a una cuenta Exchange.**

## Requisitos

- Disponer de una cuenta MX Plan (plan de [hosting de OVHcloud](https://www.ovhcloud.com/es/web-hosting/){.external}).
- Tener un servicio [Exchange](https://www.ovhcloud.com/es/emails/hosted-exchange/){.external} con al menos una cuenta no configurada (que aparecerá como "@configureme.me").
- **No haber configurado ninguna redirección en la dirección de correo MX Plan que quiera migrar.**
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.

## Procedimiento

### 1\. contratar sus cuentas Exchange

Este paso es opcional si ya tiene un servicio Exchange al que quiere realizar la migración.

En caso contrario, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws) y contrate el servicio Exchange que desee. Siga los pasos que se indican y espere a que se instale el servicio. Recibirá un mensaje de correo electrónico cuando haya finalizado la operación.

> [!primary]
>
> Una vez que haya contratado la cuenta, permítala en forma de @configureme.me. De hecho, se renombrará durante la migración.
>

### 2\. Realizar la migración

Antes de realizar la migración, deberá identificar la versión del MXPlan desde el que migrará.

Para ello, conéctese al [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}, en la sección `Web Cloud`{.action}. Haga clic en `Correo electrónico`{.action} y seleccione el servicio correspondiente. Continúe leyendo esta guía en el apartado correspondiente a la versión:

|Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![Correo electrónico](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Su plan se sitúa en el marco "Suscripción"|![Correo electrónico](images/mxplan-starter-new-step1.png){.thumbnail}<br>En el recuadro "Resumen", encontrará una `referencia del servidor` que empieza por "mxplan-".|
|Siga leyendo esta guía en el apartado [Versión histórica de la solución MX Plan](#VersionHistoriqueMxplan).|Siga leyendo esta guía en el apartado [Nueva versión de la solución MX Plan](#NouvelleVersionMxplan).|

#### 3.1 Migrar una solución MXPlan histórica <a name="VersionHistoriqueMxplan"></a>

> [!primary]
>
> Su cuenta de OVHcloud debe previamente ser contacto administrador **y** contacto técnico del servicio MX Plan que vaya a migrar, **así como** del servicio Exchange al que vaya migrando.
>
> Para más información sobre los cambios de contactos, consulte nuestra guía para [gestionar los contactos de sus servicios](/pages/account_and_service_management/account_information/managing_contacts).
>

La migración puede realizarse desde dos interfaces:<br>

- **el asistente de configuración Hosted Exchange**, solo si acaba de contratar un servicio Hosted Exchange y todavía no ha configurado nada en este último.
- **la del MX Plan**, desde el momento en que tiene un servicio Exchange (configurado o no) y una dirección MX Plan que desea migrar.

> Le recordamos que antes de iniciar la migración, asegúrese de que no haya ninguna **redirección** o ningún **contestador** configurado en su MXplan.
> ![email](images/mxplan-legacy-redirect.png){.thumbnail}

Continúe leyendo esta guía en la interfaz seleccionada. Le recordamos que el tiempo de migración dependerá de la cantidad de contenido que quiera migrar a su nueva cuenta. Éste puede variar desde unos minutos hasta varias horas.

> [!warning]
>
> Una vez confirmada la migración, no podrá acceder a su antigua dirección de correo MX Plan ni cancelar el proceso de migración. Le recomendamos encarecidamente que realice esta operación en un horario propicio.
>
> Aunque ya no podrá acceder a su dirección de correo electrónico actual, tanto los mensajes ya recibidos como los recibidos no se perderán. Podrá acceder a todos ellos inmediatamente desde su nueva cuenta.
>

##### **Migración desde el asistente de configuración de Exchange**

Para ello, seleccione el servicio en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}. El asistente aparecerá para ayudarle a configurar su nuevo servicio Exchange. Durante este proceso, podrá seleccionar las cuentas MX Plan que quiera migrar.

Si no aparece el asistente de configuración, la información general del servicio Exchange se mostrará en su lugar. En ese caso, deberá realizar la migración de sus cuentas a través de la interfaz MX Plan.

##### **Migración desde la interfaz MX Plan**

Para realizar la migración desde esta interfaz, acceda a la sección `Correo electrónico`{.action} del área de cliente de OVHcloud. Seleccione el servicio con el nombre de dominio de sus direcciones de correo. Haga clic en el icono con forma de engrane de la cuenta de correo correspondiente (también llamada cuenta de origen) y seleccione `Migrar la cuenta`{.action}.

![exchange](images/access_the_migration_tool.png){.thumbnail}

En la nueva ventana, seleccione el servicio de destino (el servicio al que quiere migrar la dirección) y haga clic en `Siguiente`{.action}. Si posee al menos una cuenta "libre" (es decir, aún no configurada), la migración se realizará hacia una de estas cuentas. Lea atentamente la información que se muestra y acepte y haga clic en `Siguiente`{.action} para continuar.

Si no tiene una cuenta "libre", aparecerá un botón `Contratar cuentas`{.action}. Siga los pasos que se indican y espere a que se instalen las cuentas para volver a realizar la operación.

Por último, confirme la contraseña de la dirección de correo de origen (la que quiera migrar) y haga clic en `Migrar`{.action}. Esta operación se repetirá tantas veces como sea necesario para la migración de otras cuentas.

![exchange](images/account_migration_steps.png){.thumbnail}

#### 3.2 Migrar la nueva versión del MXPlan <a name="NouvelleVersionMxplan"></a>

> [!warning]
>
> Si acaba de contratar un nuevo servicio de correo, añada el dominio a su plataforma de correo antes de realizar la migración. <br> - *Por ejemplo, para migrar la cuenta "myemail@mydomain.ovh", debe añadir el dominio "mydomain.ovh" a su plataforma.*
>
>Seleccione la pestaña `Dominios asociados`{.action} en su plataforma y haga clic en `Añadir un dominio`{.action}. Una vez añadido el dominio, asegúrese de que la mención `OK` aparezca en la columna `Estado`.
>
>![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Para más información sobre la adición de un dominio, consulte [la guía Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

La migración de su MXPlan se realizará en 3 grandes etapas: **Renombrar**, **Crear** y **Migrar**.

![exchange](images/mxplan-migration-configure-account.gif){.thumbnail}

1\. **Cambie el nombre** de la cuenta MXPlan que quiera migrar con un nombre provisional (por ejemplo: para migrar la cuenta MX Plan *john.smith@mydomain.ovh*, cambie su nombre a *john.smith01@mydomain.ovh*).

En la pestaña `Cuentas de correo`{.action} de su plataforma MX Plan, haga clic en el botón `...`{.action} y luego en `Editar`{.action}.

![exchange](images/mxplan-migration-configure-account01.png){.thumbnail}

> [!primary]
>
> El cambio de la cuenta no es inmediato. Espere hasta que finalice la operación antes de continuar en el siguiente paso.

2\. **Cree** su dirección de correo electrónico en la nueva cuenta de su plataforma Exchange (tomando el ejemplo anterior, creará *john.smith@mydomain.ovh* en su nueva plataforma).

En la pestaña `Cuentas de correo`{.action} de su plataforma Exchange, haga clic en el botón `...`{.action} y luego en `Editar`{.action}.

![exchange](images/mxplan-migration-configure-account02.png){.thumbnail}

3\. **Migre** la cuenta MXPlan a la cuenta de su nueva plataforma utilizando nuestra herramienta [OMM](https://omm.ovh.net/) (OVH Mail Migrator).

Para más información sobre OMM, consulte nuestra guía [Migrar cuentas de correo a través de OVH Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

El tiempo de migración dependerá de cuánto contenido quiera migrar a la nueva cuenta. Éste puede variar desde unos minutos hasta varias horas.

Una vez realizada la migración, compruebe que los elementos que contiene se encuentren conectándose al webmail en la dirección <https://www.ovh.com/world/es/mail/>

Una vez realizada la migración, puede conservar o eliminar la cuenta original con el nombre provisional.

Si quiere eliminarlo, abra la pestaña `Cuentas de correo`{.action} de su MXPlan y haga clic en el botón `...`{.action} y luego en `Restaurar la cuenta`{.action}.

### 4\. Comprobar o modificar la configuración del dominio

En este punto, sus direcciones de correo ya deben migrarse y ser funcionales. Por seguridad, le recomendamos que se asegure de que la configuración del dominio es correcta consultando su área de cliente.

Para ello, seleccione el servicio Exchange correspondiente y abra la pestaña `Dominios asociados`{.action}. A continuación, en la columna "Diagnóstico", explicaremos si la configuración DNS es correcta: se mostrará una etiqueta roja si la configuración ha de modificarse.

> [!primary]
>
> Si acaba de realizar la migración o de modificar un registro DNS del dominio, es posible que la actualización tarde unas horas en mostrarse en el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws){.external}.
>

Para modificar la configuración, haga clic en la etiqueta roja y realice la operación solicitada. Esta operación tarda entre 4 y 24 horas en propagarse y ser efectiva.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

### 5\. Utilizar las direcciones de correo migradas

Ya puede utilizar las direcciones de correo electrónico migradas. Para ello, OVHcloud pone a su disposición una aplicación online (_web app_) disponible en la dirección <https://www.ovh.com/world/es/mail/>. Introduzca las claves de su dirección de correo electrónico.

Si ha configurado alguna de las cuentas migradas en un cliente de correo (p. ej. Outlook), deberá volver a configurarlas. La información de conexión al servidor de OVHcloud ha cambiado tras la migración. Para más información, consulte nuestra guía en las secciones relativas a [Hosted Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan). Si no puede reconfigurar la cuenta de forma inmediata, siempre es posible acceder a través de la aplicación online.

### Organización del contenido de sus direcciones de correo tras una migración <a name="content-after-migration"></a>

Al conectarse por primera vez a su nueva cuenta de correo, el contenido migrado puede ocultarse parcialmente. Para ver todos los elementos, haga clic en la cabecera situada al lado de la `bandeja de entrada` para revelar los subdirectorios. El contenido migrado de su antigua cuenta de correo debe aparecer.

![exchange](images/owa_migrate_content.png){.thumbnail}

Las carpetas predeterminadas, como "elementos enviados" o "papelera", aparecen en inglés ("Sent items" y "Trash"), a excepción de las carpetas que haya creado.

Una vez realizada la migración, podrá explorar todas las carpetas y subcarpetas de su cuenta para asegurarse de que dispone de todos los elementos.

### Migrar Manualmente

También puede migrar manualmente sus direcciones de correo a su nueva solución de correo de OVHcloud utilizando únicamente su cliente de correo. Pulse nuestra guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration). No obstante, le recomendamos que utilice este método únicamente cuando no sea posible utilizar los métodos principales.

## Más información

[Guías Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan){.external}.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
