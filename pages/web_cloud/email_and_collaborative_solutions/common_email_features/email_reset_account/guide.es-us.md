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

- Disponer de una solución de correo electrónico de OVHcloud previamente configurada (**MX Plan**, incluida en nuestros [planes de hosting](/links/web/hosting) o contratada por separado como solución autónoma, como [**Hosted Exchange**](/links/web/emails-hosted-exchange)).
- Disponer de la información de conexión a las direcciones de correo electrónico correspondientes.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-exchange -->
---

### Acceso al área de cliente de OVHcloud

**MX Plan:**

- **Enlace directo:** [MX Plan](/links/control-panel/web-mx-plan)
- **Ruta de navegación:** `Web Cloud`{.action} > `MX Plan`{.action} > Seleccione su servicio MX Plan

**Exchange:**

- **Enlace directo:** [Exchange](/links/control-panel/web-exchange)
- **Ruta de navegación:** `Web Cloud`{.action} > `Exchange`{.action} > Seleccione su plataforma

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-mx-plan -->

## Procedimiento <a name="instructions"></a>

OVHcloud ofrece 2 soluciones de correo electrónico. El concepto de eliminación de cuenta es diferente según su solución.

- **Email MX Plan**: esta solución se vende en forma de pack de varias cuentas de correo. Cuando elimina una cuenta, libera una ubicación en su pack. 
- **Hosted Exchange**: estos dos productos son a la carta, usted contrata una suscripción individual por cuenta e-mail. Si quiere eliminar una dirección de correo, deberá **restaurar** la cuenta de correo. Una vez que haya restaurado la cuenta de correo, puede reutilizar la cuenta para crear una nueva dirección de correo. También puede [dar de baja la suscripción](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#eliminar-cuentas) de esta cuenta si desea eliminarla definitivamente.

### Eliminar o restaurar una cuenta de correo

Seleccione la pestaña correspondiente a su servicio de correo:

> [!tabs]
> **Emails MX Plan**
>>
>> Para comprobar si su MX Plan es una versión histórica o nueva, consulte el cuadro de la sección "[Identifique su solución MX Plan](#whichmxplan)" de esta guía.
>>
>> 1. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes.
>> 1. Haga clic en el botón `...`{.action} situado a la derecha de la cuenta que desea modificar y, seguidamente, en `Eliminar la cuenta`{.action}.
>>
>> ![Correo electrónico](images/email-mxplan-new-reset.png){.thumbnail}
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

## Más información

[Primeros pasos con la solución MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Primeros pasos con la solución Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Gestionar la facturación de las cuentas Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](/links/support).

Interactúe con nuestra [comunidad de usuarios](/links/community).
