---
title: "Eliminar una cuenta de correo"
excerpt: "Cómo eliminar o restaurar una dirección de correo electrónico en un servicio de correo"
updated: 2026-02-19
---

## Objetivo

Quiere:

- Eliminar una dirección de correo electrónico que ya no esté utilizando. 
- Restaurar una cuenta de correo para utilizarla en una nueva dirección de correo. 
- Restaurar una cuenta de correo para darlo de baja.

**Cómo eliminar o restaurar una dirección de correo en un servicio de correo**

## Requisitos

- Disponer de una solución de correo electrónico de OVHcloud previamente configurada:
    - **MX Plan**, incluida en nuestros [planes de hosting](/links/web/hosting), incluida en un [Alojamiento gratuito 100M](/links/web/domains-free-hosting) o contratada por separado como solución autónoma.
    - [**Exchange**](/links/web/emails-exchange).
    - [**Email Pro**](/links/web/email-pro).
    - [**Zimbra**](/links/web/zimbra).
- Ser el contacto administrador del servicio de correo electrónico en cuestión.
- Disponer de la información de conexión a las direcciones de correo electrónico correspondientes.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Acceso al área de cliente de OVHcloud

**MX Plan:**

- **Enlace directo:** [MX Plan](/links/control-panel/web-mx-plan)
- **Ruta de navegación:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleccione su servicio MX Plan

**Zimbra:**

- **Enlace directo:** [Zimbra](/links/control-panel/web-zimbra)
- **Ruta de navegación:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

**Email Pro:**

- **Enlace directo:** [Email Pro](/links/control-panel/web-email-pro)
- **Ruta de navegación:** `Web Cloud`{.action} > `Email Pro`{.action} > Seleccione su plataforma

**Exchange:**

- **Enlace directo:** [Exchange](/links/control-panel/web-exchange)
- **Ruta de navegación:** `Web Cloud`{.action} > `Exchange`{.action} > Seleccione su plataforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

<a name="whichmxplan"></a>

> [!primary]
>
> **Identificar la tecnología de correo de su solución MX Plan.**
>
> En función de la fecha de activación de su solución MX Plan o de una migración reciente, la tecnología de correo electrónico asociada puede diferir. Esta tecnología se caracteriza por la interfaz de su webmail. Para identificarla:
>
> - Desde la pestaña `Información general`{.action}, indique la tecnología utilizada en la mención **Webmail** presente en el recuadro `Suscripción`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

## Procedimiento <a name="instructions"></a>

OVHcloud ofrece 4 soluciones de correo electrónico. El concepto de eliminación de cuenta es diferente según su solución.

- **Correo electrónico MX Plan**: esta solución se vende en forma de pack de varias cuentas de correo. Cuando elimina una cuenta, libera una ubicación en su pack.
- **Email Pro**, **Hosted Exchange** y **Zimbra**: estas soluciones son a la carta, usted contrata una suscripción individual por cuenta de correo electrónico. Si quiere eliminar una dirección de correo, deberá **restaurar** la cuenta de correo. Una vez que haya restaurado la cuenta de correo, puede reutilizar la cuenta para crear una nueva dirección de correo. También puede [dar de baja la suscripción](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#eliminar-cuentas) de esta cuenta si desea eliminarla definitivamente.

### Eliminar o restaurar una cuenta de correo

Seleccione la pestaña correspondiente a su servicio de correo:

> [!tabs]
> **MX Plan Roundcube**
>>
>> Para identificar la tecnología de correo electrónico asociada a su servicio MX Plan, consulte la sección "[Identificar la tecnología de correo de su solución MX Plan](#whichmxplan)" de esta guía.
>>
>> 1. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes.
>> 1. Haga clic en el botón `...`{.action} situado a la derecha de la cuenta que desea modificar y, seguidamente, en `Eliminar la cuenta`{.action}.
>>
>> ![Correo electrónico](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> Para identificar la tecnología de correo electrónico asociada a su servicio MX Plan, consulte la sección "[Identificar la tecnología de correo de su solución MX Plan](#whichmxplan)" de esta guía.
>>
>> 1. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes.
>> 1. Haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la cuenta que quiera modificar y seleccione `Restaurar la cuenta`{.action}.
>>
>> ![Correo electrónico](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **Email Pro**
>>
>> 1. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes.
>> 1. Haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la cuenta que desea modificar y, seguidamente, en `Restaurar la cuenta`{.action}.
>>
>> Después de restaurar su cuenta, si desea eliminarla definitivamente, deberá darlo de baja. Para ello, consulte nuestra guía [Gestionar la facturación de sus cuentas Email-Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro).
>>
>> ![Correo electrónico](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Abra la pestaña `Cuentas de correo`{.action}.
>> 1. Haga clic en el botón `...`{.action} situado al final de la línea correspondiente a la cuenta que desea modificar y, seguidamente, en `Reiniciar`{.action}.
>>
>> Después de restaurar su cuenta, si desea eliminarla definitivamente, deberá darlo de baja. Para ello, consulte nuestra guía [Gestionar la facturación de sus cuentas Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange).
>>
>> ![Correo electrónico](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Abra la pestaña `Cuenta email`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes.
>> 1. Haga clic en el botón `⋮`{.action} situado a la derecha de la cuenta que desea modificar y, seguidamente, haga clic en `Eliminar`{.action}.
>>
>> ![Correo electrónico](images/email-zimbra-reset.png){.thumbnail}
>>

## Más información

[Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeros pasos con la solución Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Primeros pasos con la solución Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Primeros pasos con Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Gestionar la facturación de las cuentas Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Gestionar la facturación de las cuentas Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
