---
title: "Migrar sus direcciones de correo de una plataforma de correo de OVHcloud a otra"
slug: migration-email-platform
excerpt: "Cómo migrar las direcciones de correo de una plataforma Exchange o Email Pro a otra plataforma Exchange, Email Pro o MX Plan"
section: Migración de una cuenta
order: 02
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 21/10/2020**

## Objetivo

Si quiere migrar sus direcciones de correo electrónico a una plataforma Exchange o Email Pro a otra plataforma Exchange, Email Pro o MX Plan, Esta guía explica cómo realizar la migración en dos fases:

1. **Configurar la plataforma de destino**.
2. **Migrar las cuentas de correo** de su plataforma actual a la nueva.

![email-migración](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Para migrar una solución MX Plan a una plataforma Exchange o Email Pro, consulte nuestra guía [Migrar una dirección MX Plan a una cuenta Email Pro o Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/migrar-direccion-correo-en-alojamiento-correo-a-exchange/).
>

**Esta guía explica cómo migrar las direcciones de correo de una plataforma Exchange o Email Pro a otra plataforma Exchange o Email Pro.**

## Requisitos

- Tener una plataforma **"source"** con cuentas [Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/){.external} o [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external} configuradas.
- Disponer de una plataforma de **"destino"** con cuentas [Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/){.external}, [Email Pro](https://www.ovhcloud.com/es-es/emails/email-pro/){.external} o MX Plan (a través de la solución MX Plan o incluida en un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external}). Esta plataforma debe disponer de cuentas no configuradas o disponibles para recibir las direcciones de correo que deban migrarse.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

### Configurar la plataforma de destino

Antes de realizar la migración, si acaba de contratar la nueva solución de correo, añada el dominio a su plataforma [Email Pro](https://docs.ovh.com/es/emails-pro/primera-configuracion/#2-anadir-su-nombre-de-dominio) o [Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/anadir-dominio-exchange/). Si migra a una plataforma MX Plan, ya que el dominio es "fijo", puede pasar directamente a [la siguiente etapa](#accountsmigration) .

> Seleccione la pestaña `Dominios asociados`{.action} en su plataforma y haga clic en `Añadir un dominio`{.action}. Configure su dominio **no autoritario**. Una vez añadido el dominio, asegúrese de que la mención `OK` esté presente en la columna `Estado`.
>
> ![email-migración](images/migration_platform02.png){.thumbnail}
>
> Para más información sobre la adición de un dominio, consulte [la guía Email Pro](https://docs.ovh.com/es/emails-pro/primera-configuracion/#2-anadir-su-nombre-de-dominio) o [la guía Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/anadir-dominio-exchange/).

### Migrar las cuentas de correo <a name="accountsmigration"></a>

La migración de sus cuentas de correo se realizará en 3 grandes etapas: **Renombrar** la cuenta de correo original, **crear** la nueva cuenta de correo y **migrar** de la plataforma original a la nueva.

![email-migración](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Caso particular:
>
> - Si debe migrar **una cuenta Exchange** a una cuenta **Email Pro**, debe asegurarse de que sus cuentas de correo no superen los 10 GB. Las funciones colaborativas, la sincronización de calendarios y contactos no están presentes en Email Pro y no pueden migrarse.
> - Si debe migrar **una cuenta Exchange o Email Pro** a una cuenta **MX Plan**, debe asegurarse de que su cuenta de correo no exceda de 5 GB. Las funciones colaborativas, la sincronización de calendarios y contactos no están presentes en MX Plan y no pueden migrarse.

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
> - [Alias](https://docs.ovh.com/es/microsoft-collaborative-solutions/email-alias/)
> - [Delegación de derechos](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_2013_dar_permisos_full_access_a_una_cuenta/)
> - [Grupos](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_20132016_uso_de_los_grupos_listas_de_correo/)
> - Contactos externos
> - [Pie de página](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_20132016_firma_automatica_disclaimer/)

Migre la cuenta de correo de origen a la cuenta de su nueva plataforma utilizando nuestra herramienta [OMM](https://omm.ovh.net/) (OVH Mail Migrator).

> Si debe migrar varias cuentas de correo, le recomendamos que utilice el modo [Proyecto](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange-migracion-de-cuentas-correo-ovh-mail-migrator/#project) a través de [OMM](https://omm.ovh.net/Project/Create), para importar una tabla en formato CSV con la información de las cuentas de correo que vaya a migrar.

Para más información sobre OMM, consulte nuestra guía [Migrar cuentas de correo a través de OVH Mail Migrator](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange-migracion-de-cuentas-correo-ovh-mail-migrator/).

![email-migración](images/migration_platform06.png){.thumbnail}

El tiempo de migración dependerá de la cantidad de datos que quiera migrar a la nueva cuenta. Éste puede variar desde unos minutos hasta varias horas.

Una vez realizada la migración, compruebe que todos sus elementos se encuentren conectándose al webmail en la dirección <https://www.ovh.es/mail/>.

Una vez realizada la migración, podrá conservar o eliminar la cuenta de origen con el nombre provisional.

Si quiere eliminarlo, abra la pestaña `Cuentas de correo`{.action} de su plataforma de correo original y haga clic en el botón `...`{.action} y luego en `Restaurar la cuenta`{.action}.

### Comprobar o modificar la configuración de su dominio

En este punto, sus direcciones de correo ya deben migrarse y ser funcionales. Por seguridad, le recomendamos que se asegure de que la configuración del dominio es correcta consultando su área de cliente.

Para ello, seleccione el servicio Email Pro o Exchange correspondiente y abra la pestaña `Dominios asociados`{.action}. A continuación, en la columna "Diagnóstico", explicaremos si la configuración DNS es correcta: se mostrará una etiqueta roja si la configuración ha de modificarse.

> [!primary]
>
> Si acaba de realizar la migración o de modificar un registro DNS del dominio, es posible que la actualización tarde unas horas en mostrarse en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.
>

Para modificar la configuración, haga clic en la etiqueta roja y realice la operación solicitada. Esta operación tarda entre 4 y 24 horas en propagarse y ser efectiva.

![email-migración](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Utilizar las direcciones de correo migradas

Ya puede utilizar las direcciones de correo electrónico migradas. Para ello, OVHcloud pone a su disposición una aplicación online (_web app_) disponible en la dirección <https://www.ovh.es/mail/>. Introduzca las claves de su dirección de correo electrónico.

Si ha configurado una de las cuentas migradas en un cliente de correo (p.ej.: Outlook, Thunderbird), deberá volver a configurarlo. La información de conexión al servidor de OVHcloud ha cambiado tras la migración.
<br>Para más información, consulte nuestra guía en las secciones relativas a [Email Pro](https://docs.ovh.com/es/emails-pro/){.external} y [Hosted Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/){.external}. Si no puede reconfigurar la cuenta de forma inmediata, siempre es posible acceder a través de la aplicación online.

> [!primary]
>
> También puede migrar manualmente direcciones de correo a OVHcloud utilizando nuestra herramienta [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external}. Para ello, debe disponer de la información (usuario, contraseña, servidores) del correo de origen y del correo electrónico de destino.
>

## Más información

[Gestionar los contactos de los servicios](https://docs.ovh.com/es/customer/gestion-de-los-contactos/){.external}.

[Guías Email Pro](https://docs.ovh.com/es/emails-pro/){.external}.

[Guides Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/){.external}.

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
