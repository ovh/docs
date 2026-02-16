---
title: 'Migrar una cuenta MX Plan a una cuenta Exchange'
excerpt: 'Cómo migrar una dirección MX Plan a una cuenta Exchange'
hidden: true
updated: 2026-01-16
---

## Objetivo

OVHcloud ofrece varias soluciones de correo electrónico: MX Plan (incluido en un plan de hosting) y Exchange. Estas disfrutan de funcionalidades propias y pueden adaptarse a varios usos. ¿Sus necesidades evolucionan? OVHcloud pone a su disposición una herramienta de migración que le permitirá cambiar de una solución a otra.

**Esta guía explica cómo migrar una cuenta MX Plan a una cuenta Exchange.**

> [!warning]
>
> [OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) permite migrar sus mensajes de un servidor de correo electrónico a otro.<br>
> Si sus correos electrónicos están almacenados únicamente de forma local (configuración en POP o archivo local), puede realizar un [export desde su software de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), y luego [importar su archivo PST a través de OMM](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm#realiser-une-migration-par-fichier) o [importar directamente desde su software de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration).

## Requisitos

- Disponer de una cuenta MX Plan (plan de [hosting de OVHcloud](/links/web/hosting)).
- Tener un servicio [Exchange](/links/web/emails-hosted-exchange) con al menos una cuenta no configurada (que aparecerá como "@configureme.me").
- **No haber configurado ninguna redirección en la dirección de correo MX Plan que quiera migrar.**
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Étape 1 : delimitador de tu proyecto

Con una dirección Exchange, puede utilizar funciones colaborativas, calendarios y sincronización de contactos. Consulte la [página de ofertas de Exchange](/links/web/emails-hosted-exchange) para obtener una lista detallada de funciones.

Si vous devez migrer plusieurs comptes, nous vous conseillons de mettre en place un plan de migración.

### Etapa 2 : contratar sus cuentas Exchange

Este paso es opcional si ya tiene un servicio Exchange al que quiere realizar la migración.

En caso contrario, conéctese al [área de cliente de OVHcloud](/links/manager) y contrate el servicio Exchange que desee. Siga los pasos que se indican y espere a que se instale el servicio. Recibirá un mensaje de correo electrónico cuando haya finalizado la operación.

> [!primary]
>
> Una vez que haya contratado la cuenta, permítala en forma de @configureme.me. De hecho, se renombrará durante la migración.

### Etapa 3 : Realizar la migración

Antes de realizar la migración, deberá identificar la versión del MX Plan desde el que migrará.

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda al apartado `Web Cloud`{.action}.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio.

> [!warning]
>
> Si acaba de contratar un nuevo servicio de correo, añada el dominio a su plataforma de correo antes de realizar la migración. <br> - *Por ejemplo, para migrar la cuenta "myemail@mydomain.ovh", debe añadir el dominio "mydomain.ovh" a su plataforma.*
>
>Seleccione la pestaña `Dominios asociados`{.action} en su plataforma y haga clic en `Añadir un dominio`{.action}. Una vez añadido el dominio, asegúrese de que la mención `OK` aparezca en la columna `Estado`.
>
>![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Para más información sobre la adición de un dominio, consulte [la guía Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain).

La migración de su MX Plan se realizará en 3 grandes etapas: **Renombrar**, **Crear** y **Migrar**.

![exchange](images/mxplan-migration-configure-account.gif){.thumbnail}

1\. **Cambie el nombre** de la cuenta MX Plan que quiera migrar con un nombre provisional (por ejemplo: para migrar la cuenta MX Plan *john.smith@mydomain.ovh*, cambie su nombre a *john.smith01@mydomain.ovh*).

En la pestaña `Cuentas de correo`{.action} de su plataforma MX Plan, haga clic en el botón `...`{.action} y luego en `Editar`{.action}.

![exchange](images/mxplan-migration-configure-account01.png){.thumbnail}

> [!primary]
>
> El cambio de la cuenta no es inmediato. Espere hasta que finalice la operación antes de continuar en el siguiente paso.

2\. **Cree** su dirección de correo electrónico en la nueva cuenta de su plataforma Exchange (tomando el ejemplo anterior, creará *john.smith@mydomain.ovh* en su nueva plataforma).

En la pestaña `Cuentas de correo`{.action} de su plataforma Exchange, haga clic en el botón `...`{.action} y luego en `Editar`{.action}.

![exchange](images/mxplan-migration-configure-account02.png){.thumbnail}

3\. **Migre** la cuenta MX Plan a la cuenta de su nueva plataforma utilizando nuestra herramienta [OMM](/links/web/omm) (OVHcloud Mail Migrator).

Para más información sobre OMM, consulte nuestra guía [Migrar cuentas de correo a través de OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

El tiempo de migración dependerá de cuánto contenido quiera migrar a la nueva cuenta. Éste puede variar desde unos minutos hasta varias horas.

Una vez realizada la migración, compruebe que los elementos que contiene se encuentren conectándose al webmail en la dirección [Webmail](/links/web/email)

Una vez realizada la migración, puede conservar o eliminar la cuenta original con el nombre provisional.

Si quiere eliminarlo, abra la pestaña `Cuentas de correo`{.action} de su MX Plan y haga clic en el botón `...`{.action} y luego en `Restaurar la cuenta`{.action}.

### Etapa 4 : Comprobar o modificar la configuración del dominio

En este punto, sus direcciones de correo ya deben migrarse y ser funcionales. Por seguridad, le recomendamos que se asegure de que la configuración del dominio es correcta consultando su área de cliente.

Para ello, seleccione el servicio Exchange correspondiente y abra la pestaña `Dominios asociados`{.action}. A continuación, en la columna "Diagnóstico", explicaremos si la configuración DNS es correcta: se mostrará una etiqueta roja si la configuración ha de modificarse.

> [!primary]
>
> Si acaba de realizar la migración o de modificar un registro DNS del dominio, es posible que la actualización tarde unas horas en mostrarse en el [área de cliente de OVHcloud](/links/manager).
>

Para modificar la configuración, haga clic en la etiqueta roja y realice la operación solicitada. Esta operación tarda entre 4 y 24 horas en propagarse y ser efectiva.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Etapa 5 : Utilizar las direcciones de correo migradas

Ya puede utilizar las direcciones de correo electrónico migradas. Para ello, OVHcloud pone a su disposición una aplicación online (_web app_) disponible en la dirección [Webmail](/links/web/email). Introduzca las claves de su dirección de correo electrónico.

Si ha configurado alguna de las cuentas migradas en un cliente de correo (p. ej. Outlook), deberá volver a configurarlas. La información de conexión al servidor de OVHcloud ha cambiado tras la migración. Para más información, consulte nuestra guía en las secciones relativas a [Hosted Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan). Si no puede reconfigurar la cuenta de forma inmediata, siempre es posible acceder a través de la aplicación online.

### Organización del contenido de sus direcciones de correo tras una migración <a name="content-after-migration"></a>

Al conectarse por primera vez a su nueva cuenta de correo, el contenido migrado puede ocultarse parcialmente. Para ver todos los elementos, haga clic en la cabecera situada al lado de la `bandeja de entrada` para revelar los subdirectorios. El contenido migrado de su antigua cuenta de correo debe aparecer.

![exchange](images/owa_migrate_content.png){.thumbnail}

Las carpetas predeterminadas, como "elementos enviados" o "papelera", aparecen en inglés ("Sent items" y "Trash"), a excepción de las carpetas que haya creado.

Una vez realizada la migración, podrá explorar todas las carpetas y subcarpetas de su cuenta para asegurarse de que dispone de todos los elementos.

### Migrar Manualmente

También puede migrar manualmente sus direcciones de correo a su nueva solución de correo de OVHcloud utilizando únicamente su cliente de correo. Pulse nuestra guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration). No obstante, le recomendamos que utilice este método únicamente cuando no sea posible utilizar los métodos principales.

## Más información

[Guías Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan).

Interactúe con nuestra [comunidad de usuarios](/links/community).
