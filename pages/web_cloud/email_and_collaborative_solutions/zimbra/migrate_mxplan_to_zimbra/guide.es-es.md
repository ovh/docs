---
title: 'Migrar una dirección de correo MX Plan a una cuenta Zimbra OVHcloud'
excerpt: 'Descubra cómo migrar una cuenta MX Plan a una cuenta de OVHcloud'
updated: 2025-05-22
---

## Objetivo

En el marco de la transición progresiva de las cuentas MX Plan a Zimbra, es posible adelantarse a la migración y realizar usted mismo la transferencia de cuentas de correo antes de la puesta en marcha de una herramienta automatizada por OVHcloud. Esta guía explica cómo realizar la migración manualmente.

**Descubra cómo explica cómo migrar una cuenta MX Plan a una cuenta de OVHcloud.**

## Requisitos

- Disponer de una dirección de correo electrónico MX Plan (a través de un MX Plan o incluida en un plan de [hosting de OVHcloud](/links/web/hosting)).
- Disponer de una cuenta de correo electrónico de Zimbra OVHcloud.
- **No haber configurado una redirección en la dirección de correo electrónico MX Plan que quiera migrar**.
- Estar conectado a su [área de cliente de OVHcloud](/links/manager).

## Procedimiento

> [!warning]
>
> Si su cuenta de correo electrónico gestiona información sensible o si experimenta problemas durante la migración, le recomendamos que espere a la instalación de la herramienta de automatización en el área de cliente de OVHcloud.

La migración de una cuenta de correo MX Plan a una cuenta de correo de Zimbra se realiza en 2 fases. Para evitar cortar la recepción en la dirección de correo electrónico original, es necesario seguir el siguiente proceso:

1. **Transferir el contenido de la cuenta MX Plan a una cuenta Zimbra**
    - [1.1 - Creación de una dirección de correo electrónico Zimbra](#step11)
    - [1.2 - Migración de los mensajes de correo con OVHcloud Mail Migrator](#step12)
    - [1.3 - Backup de los mensajes de correo de la cuenta de origen (opcional)](#step13)
2. **Eliminar la cuenta MX Plan original y reasignar su dirección a la cuenta Zimbra**
    - [2.1 - Eliminación de la antigua dirección de correo MX Plan](#step21)
    - [2.2 - Renombrar la dirección de correo electrónico Zimbra](#step22)

En el ejemplo siguiente migramos la dirección `contact@mydomain.ovh`. Para ello, vamos a crear la cuenta Zimbra con el nombre `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1.1 - Creación de una dirección de correo electrónico Zimbra <a name="step11"></a>

> [!primary]
>
> Si ya tiene una dirección de correo electrónico de Zimbra, pásese a la [Migración del correo con OVHcloud Mail Migrator](#step12).

En primer lugar, cree una dirección de correo electrónico con un nombre temporal. Por ejemplo, puede crear la dirección `contact2@mydomain.ovh`{.action} si necesita migrar la dirección `contact@mydomain.ovh`{.action}.

Para crear una dirección de correo electrónico de Zimbra, consulte la sección "Crear una cuenta de correo electrónico" de nuestra guía [Primeros pasos con el servicio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

### 1.2 - Migración del correo electrónico con OVHcloud Mail Migrator <a name="step12"></a>

Utilice la herramienta de migración [**O**VH **M**ail **M**migrator](/links/web/omm) (**OMM**) para transferir el contenido de la cuenta MX Plan original a la nueva cuenta de destino Zimbra, siguiendo el ejemplo anterior.

#### Paso 1: Acceder a OVHcloud Mail Migrator

Acceda a [OVHcloud Mail Migrator](/links/web/omm).

En la página [OMM](/links/web/omm), en la pestaña `Migration`{.action}, haga clic en `New migration`{.action}.

![omm](images/omm-migration-create01.png){.thumbnail}

#### Paso 2: Introducir la información de migración

**Cuenta**

- **Source Account**:
    - **Server type**: Seleccione `Hosted by OVHcloud (Autodetect)` para completar automáticamente los datos, excepto la contraseña.
    - **Server URL**: Este campo se rellena automáticamente.
    - **Login**: Introduzca la dirección de correo electrónico completa de la cuenta que quiera migrar (por ejemplo: `contact@mydomain.ovh`).
    - **Password**: Introduzca la contraseña de la dirección de correo electrónico correspondiente.
- **Destination Account**:
    - **Server type**: Seleccione `Zimbra` para el tipo de servidor de destino.
    - **Server URL**: Introduzca la dirección del servidor Zimbra <https://zimbra1.mail.ovh.net>.
    - **Login**: Introduzca la dirección de correo electrónico completa de la cuenta Zimbra de destino (por ejemplo: `contact2@mydomain.ovh`).
    - **Password**: Introduzca la contraseña de la dirección de correo electrónico de la cuenta Zimbra de destino.

**Opciones**

Seleccione los elementos que desea migrar. Según el tipo de servidor elegido anteriormente, es posible que algunos contenidos no estén disponibles.

**Información**

Introduzca una dirección de correo electrónico para recibir notificaciones sobre el progreso de la migración. Active la casilla de verificación situada en la parte inferior de la página para aceptar los términos y condiciones de la OMM.

![omm](images/omm-migration-create02.png){.thumbnail}

#### Paso 3: Iniciar la migración

Compruebe que toda la información es correcta y haga clic en `Start migration`{.action}. En la página que aparece, se explica cómo realizar el seguimiento de la migración. Guarde el `Migration ID` mostrado y espere a que termine el proceso. El tiempo de espera varía según el número de elementos que se van a migrar.

#### Paso 4: Seguir la migración

Existen dos formas de realizar el seguimiento de una migración:

- Desde el mensaje de correo electrónico que le notifica el progreso de la migración.
- Desde la página [OMM](/links/web/omm): En la pestaña `Migration`{.action}, haga clic en `Track/Synchronize`{.action}. Introduzca el ID de migración (`Migration ID`{.action}) y la cuenta original (`Source account`{.action}) correspondiente.

![omm](images/omm-migration-track.png){.thumbnail}

Se abrirá una página en la que podrá consultar el progreso de la migración. Aparecerá un mensaje indicándole si el proceso va a comenzar, está en curso o ha finalizado. En función del estado, puede realizar diversas acciones:

- `Stop the process`{.action}: Permite cancelar la migración. Los elementos ya migrados se conservarán en la cuenta de destino.
- `Delete migrated elements`{.action}: Permite eliminar los elementos ya migrados a la cuenta de destino. Es posible borrar elementos de un punto de sincronización específico.
- `Synchronize`{.action}: Permite recuperar nuevos elementos no migrados durante una sincronización anterior entre la cuenta de origen y la de destino. Esta acción migra los elementos que faltan en la cuenta de destino con respecto a la cuenta de origen.

Para realizar una migración por archivo o múltiple, consulte las secciones "Migración por archivo" y "Realizar y seguir una migración múltiple (modo proyecto)" de nuestra guía "[Migrar cuentas de correo electrónico mediante OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> El tiempo de migración varía en función del volumen de datos y puede oscilar entre unos minutos y varias horas. Una vez completada la migración, compruebe que todos los mensajes de correo electrónico se hayan migrado correctamente.

### 1.3 - Copia de seguridad del correo electrónico de la cuenta de origen (opcional) <a name="step13"></a>

> [!warning]
>
> Antes de eliminar su cuenta MX Plan, **realice una copia de seguridad de sus mensajes de correo** para evitar cualquier pérdida de datos.

Utilice las opciones de exportación de su cliente de correo. En nuestra guía "[Migrar manualmente una dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) " encontrará los detalles sobre la exportación manual de una dirección de correo electrónico desde un cliente de correo.

### 2.1 - Eliminación de la antigua dirección de correo MX Plan <a name="step21"></a>

Para eliminar la dirección de correo electrónico MX Plan (p. ej.: `contact@mydomain.ovh`), siga nuestra guía "[Eliminar una cuenta de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account) ".

> [!warning]
>
> Si migra desde una cuenta MX Plan que utiliza el webmail Zimbra, espere 5 minutos a que la eliminación sea efectiva antes de renombrar la segunda cuenta de correo.

### 2.2 - Cambiar el nombre de la dirección de correo electrónico de Zimbra <a name="step22"></a>

En el área de cliente de OVHcloud, acceda a su servicio Zimbra Starter y cambie el nombre de la dirección de correo electrónico de su cuenta Zimbra por el de la cuenta de correo migrada (por ejemplo, `contact2@mydomain.ovh` en `contact@mydomain.ovh`).

### Conclusión <a name="conclusion"></a>

Su cuenta de correo electrónico ya está totalmente migrada a Zimbra Starter. Ya puede utilizar Zimbra para gestionar su correo electrónico.

## Más información <a name="go-further"></a>

[Primeros pasos con Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Configurar una dirección de correo electrónico de Zimbra en un cliente de correo](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[FAQ sobre la solución Zimbra OVHcloud](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).