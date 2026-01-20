---
title: "Migrar sus direcciones de correo de una plataforma de correo de OVHcloud a otra"
excerpt: "Cómo migrar las direcciones de correo de una plataforma Exchange o Email Pro a otra plataforma Exchange, Email Pro, MX Plan o Zimbra"
updated: 2026-01-16
---

## Objetivo

Si quiere migrar sus direcciones de correo electrónico a una plataforma Exchange o Email Pro a otra plataforma Exchange, Email Pro, MX Plan o Zimbra, Esta guía explica cómo realizar la migración en dos fases:

1. **Configurar la plataforma de destino**.
2. **Migrar las cuentas de correo** de su plataforma actual a la nueva.

![email-migración](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Para migrar una solución MX Plan a una plataforma Exchange o Email Pro, consulte nuestra guía [Migrar una dirección MX Plan a una cuenta Email Pro o Exchange](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel).
>

**Esta guía explica cómo migrar las direcciones de correo de una plataforma Exchange o Email Pro a otra plataforma Exchange o Email Pro.**

## Requisitos

- Disponer de una plataforma **"fuente"** con cuentas configuradas de [Exchange](/links/web/emails-hosted-exchange) o [Email Pro](/links/web/email-pro) o [Zimbra](/links/web/zimbra).
- Disponer de una plataforma de **"destino"** con cuentas [Exchange](/links/web/emails-hosted-exchange), [Email Pro](/links/web/email-pro) o MX Plan (a través de la solución MX Plan o incluida en un plan de [hosting de OVHcloud](/links/web/hosting)). Esta plataforma debe disponer de cuentas no configuradas o disponibles para recibir las direcciones de correo que deban migrarse.
- Haber iniciado sesión en el [área de cliente de OVHcloud](/links/manager).

## Procedimiento

### Configurar la plataforma de destino

> [!warning]
>
> Antes de comenzar su migración, si acaba de pedir su nueva oferta de correo electrónico, primero agregue el nombre de dominio a su plataforma de correo electrónico. Si migra a una plataforma MX Plan, el nombre de dominio asociado siendo "fijo", puede pasar directamente a la [siguiente etapa](#accountsmigration).
>
> Seleccione la pestaña `Dominios asociados`{.action} o `Dominio`{.action} en su plataforma, y haga clic en `Añadir un dominio`{.action}. Una vez que el nombre de dominio se haya agregado, asegúrese de que la mención `OK` o `Activo`{.action} esté bien presente en la columna `Estado`.
>
> ![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Para más detalles sobre la adición de un nombre de dominio, siga [la guía Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config), [la guía Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) o [la guía Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### Migrar las cuentas de correo <a name="accountsmigration"></a>

La migración de sus cuentas de correo se realizará en 3 grandes etapas: **Renombrar** la cuenta de correo original, **crear** la nueva cuenta de correo y **migrar** de la plataforma original a la nueva.

![email-migración](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Caso particular:
>
> - Si debe migrar **una cuenta Exchange o Zimbra PRO** a una cuenta **Email Pro** o **Zimbra STARTER**, debe asegurarse de que sus cuentas de correo electrónico no excedan los 10 Go (Email Pro) o 15 Go (Zimbra STARTER). Las funciones colaborativas, la sincronización de calendarios y contactos no están presentes en Email Pro o Zimbra STARTER y no pueden migrarse.
> - Si debe migrar **una cuenta Exchange, Email Pro o Zimbra** a una cuenta **MX Plan**, debe asegurarse de que su cuenta de correo electrónico no exceda los 5 Go. Las funciones colaborativas, la sincronización de calendarios y contactos no están presentes en MX Plan y no pueden migrarse.

#### Renombrar

Renombra la cuenta de correo que quiera migrar con un nombre provisional (por ejemplo: para migrar la cuenta de correo *john.smith@mydomain.ovh*, renombrarla a *john.smith01@mydomain.ovh*).

En la pestaña `Cuentas de correo`{.action} de su plataforma de correo, haga clic en el botón `...`{.action} y luego en `Editar`{.action}.

![email-migración](images/migration_platform04.png){.thumbnail}

#### Crear

Cree su dirección de correo electrónico en la nueva cuenta de su plataforma Email Pro, Exchange o MX Plan (tomando el ejemplo anterior, creará *john.smith@mydomain.ovh* en su nueva plataforma).

En la pestaña `Cuentas de correo`{.action} de su plataforma, haga clic en el botón `...`{.action}, a la derecha de la cuenta de correo de destino, y luego en `Editar`{.action}.

![email-migración](images/migration_platform05.png){.thumbnail}

#### Migrar

> [!warning]
>
> Solo se migrarán los datos de sus cuentas de correo (correo electrónico, contactos, calendarios, reglas de la bandeja de entrada, etc.). Las funcionalidades asociadas a su plataforma deberán crearse en la nueva plataforma:
>
> - [Alias](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)
> - [Delegación de derechos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)
> - [Grupos](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)
> - Contactos externos
> - [Pie de página](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers)

Migre la cuenta de correo de origen a la cuenta de su nueva plataforma utilizando nuestra herramienta [OMM](/links/web/omm) (OVHcloud Mail Migrator).

Para más información sobre OMM, consulte nuestra guía [Migrar cuentas de correo a través de OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![email-migración](images/migration_platform06.png){.thumbnail}

El tiempo de migración dependerá de la cantidad de datos que quiera migrar a la nueva cuenta. Éste puede variar desde unos minutos hasta varias horas.

Una vez realizada la migración, compruebe que todos sus elementos se encuentren conectándose al webmail en la dirección [Webmail](/links/web/email).

Una vez realizada la migración, podrá conservar o eliminar la cuenta de origen con el nombre provisional.

Si quiere eliminarlo, abra la pestaña `Cuentas de correo`{.action} de su plataforma de correo original y haga clic en el botón `...`{.action} y luego en `Restaurar la cuenta`{.action}.

### Comprobar o modificar la configuración de su dominio

En este punto, sus direcciones de correo ya deben migrarse y ser funcionales. Por seguridad, le recomendamos que se asegure de que la configuración del dominio es correcta consultando su área de cliente.

Para ello, seleccione el servicio Email Pro, Exchange o Zimbra concernido, y diríjase a la pestaña `Dominios asociados`{.action} o `Dominio`{.action} en su plataforma. Verifique la sección o la columna `Diagnóstico`{.action}.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

> [!primary]
>
> Si acaba de realizar la migración o de modificar un registro DNS de su dominio, es posible que la visualización en el [área de cliente de OVHcloud](/links/manager) necesite algunas horas para actualizarse.

Para modificar la configuración, haga clic en la etiqueta roja y realice la operación solicitada. Esta operación tarda entre 4 y 24 horas en propagarse y ser efectiva.

![email-migración](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Utilizar las direcciones de correo migradas

Ya puede utilizar las direcciones de correo electrónico migradas. Para ello, OVHcloud pone a su disposición una aplicación online (_web app_) disponible en la dirección [Webmail](/links/web/email). Introduzca las claves de su dirección de correo electrónico.

Si ha configurado una de las cuentas migradas en un cliente de correo (p.ej.: Outlook, Thunderbird), deberá volver a configurarlo. La información de conexión al servidor de OVHcloud ha cambiado tras la migración.

> [!primary]
>
> También puede migrar manualmente direcciones de correo a OVHcloud utilizando nuestra herramienta [OVHcloud Mail Migrator (OMM)](/links/web/omm). Para ello, debe disponer de la información (usuario, contraseña, servidores) del correo de origen y del correo electrónico de destino.

## Más información

[Gestionar los contactos de los servicios](/pages/account_and_service_management/account_information/managing_contacts)

[Primeros pasos con la oferta Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Primeros pasos con la oferta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeros pasos con la oferta Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Interactúe con nuestra [comunidad de usuarios](/links/community).