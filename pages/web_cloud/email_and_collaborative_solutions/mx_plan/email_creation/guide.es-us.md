---
title: 'Crear una dirección de correo electrónico en un MX Plan'
excerpt: 'Cómo crear una dirección de correo electrónico en la solución MX Plan'
updated: 2025-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Objetivo

La solución MX Plan le permite disfrutar de direcciones de correo asociadas a un dominio.

**Esta guía explica cómo crear una dirección de correo electrónico en un MX Plan.**

## Requisitos

- Tener una solución MX Plan. Esta está disponible a través de:
    - Un [plan de hosting](/links/web/hosting).
    - Una solución MX Plan contratada por separado.
- Estar conectado al [área de cliente de OVHcloud](/links/manager), en la sección `Web Cloud`{.action}.

> [!primary]
>
> **Casos particulares**
>
> - En el caso del Alojamiento gratuito 100M, es necesario activar previamente el alojamiento para poder crear una dirección de correo. Puede realizar esta operación desde el [área de cliente de OVHcloud](/links/manager), accediendo al dominio correspondiente.
> - Si tiene un [alojamiento web](/links/web/hosting), deberá activar su solución MX Plan incluida antes de continuar la lectura de esta guía. Para ello, consulte nuestra guía [Activar las direcciones de correo incluidas en su alojamiento web](/pages/web_cloud/web_hosting/activate-email-hosting).

## Procedimiento <a name="instructions"></a>

1. Conéctese a su [área de cliente de OVHcloud](/links/manager).
1. Acceda al apartado `Web Cloud`{.action}.
1. Haga clic en `MX Plan`{.action}.
1. Seleccione el dominio.

#### Crear una cuenta de correo

Para crear una dirección de correo electrónico, abra la pestaña `Cuentas de correo`{.action}. Se mostrarán las cuentas de correo ya creadas y el número de cuentas que puede crear. Para crear una nueva, haga clic en el botón `Añadir una cuenta`{.action}.

![Correo electrónico](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

A continuación, introduzca la información solicitada:

- **Cuenta de correo**: Un nombre temporal se autocompletará en el cuadro de texto. Sustituya por el que quiera para su dirección de correo electrónico (por ejemplo, nombre.apellido). El dominio que formará la dirección de correo completa aparecerá preseleccionado en la lista.

> [!warning]
>
> La elección del nombre de su dirección de correo electrónico debe respetar las siguientes condiciones:
>
> - Mínimo 2 caracteres
> - Máximo 32 caracteres
> - Sin caracteres acentuados
> - Sin caracteres especiales, excepto los siguientes: `.`, `,`, `-` y `_`

- **Nombre**: Introduzca un nombre.
- **Nombre**: Introduzca los apellidos.
- **Nombre mostrado**: Introduzca el nombre que quiera que figure como remitente cuando envíe mensajes de correo desde esa dirección.
- **Contraseña**: Introduzca una contraseña y luego confírmela en el último campo. Por motivos de seguridad, le recomendamos que no utilice dos veces la misma contraseña, que la contraseña no guarde ninguna relación con sus datos personales (evite mencionar su nombre, apellidos o fecha de nacimiento, por ejemplo) y que la cambie periódicamente.

> [!warning]
>
> La elección de la contraseña debe respetar las siguientes condiciones:
>
> - Mínimo 9 caracteres
> - Máximo 30 caracteres
> - Sin caracteres acentuados

Una vez que haya completado todos los campos, haga clic en `Siguiente`{.action}. 

![Correo electrónico](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

Compruebe que la información indicada en el resumen es correcta. Si lo es, haga clic en `Aceptar`{.action}. La cuenta que acaba de crear aparecerá en la tabla. Espere a que la cuenta esté disponible.

Repita el procedimiento descrito en este apartado para crear las cuentas que desee, en función del número de cuentas a su disposición.

#### Consultar los mensajes de correo

Vaya a la [página de conexión al webmail](/links/web/email) e introduzca su dirección de correo y contraseña. Haga clic en el botón `Conexión`{.action}.

Seleccione la pestaña correspondiente a la tecnología de correo de su solución MX Plan:

La primera vez que se conecte al webmail, deberá seleccionar el idioma de la interfaz y la zona horaria en la que se encuentra. A continuación se abrirá la bandeja de entrada. Para más información, consulte nuestra guía "[Utilizar una dirección de correo desde Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".

![Correo electrónico](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Para consultar su correo desde un cliente de correo, consulte la sección "[Consultar una cuenta de correo desde un dispositivo](#configdevices)".

#### Eliminar una cuenta de correo

Desde la nueva versión MX Plan, cuando debe eliminarla, se habla de *reinicialización de la cuenta*.

> [!warning]
>
> Antes de eliminar las cuentas de correo, asegúrese de que no se utilizan. Es posible que necesite guardar estas cuentas. Si lo necesita, consulte la guía [Migrar manualmente su dirección de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), en la que se explica cómo exportar los datos de una cuenta desde el área de cliente o desde un cliente de correo.

En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} a la derecha de la cuenta que desea eliminar y luego en `Restaurar la cuenta`{.action}.

![Correo electrónico](images/mxplan-new-reset.png){.thumbnail .w-400}

### Casos de uso

**Ha utilizado todas las direcciones incluidas en su plan?**

- Consulte las preguntas de [nuestras FAQ de correo](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
- Consulte nuestra solución de correo electrónico [Exchange] (/links/web/emails) para completar su MX Plan con el mismo dominio.


## Más información <a name="go-further"></a>

[Utilizar el webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](/links/partner).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).