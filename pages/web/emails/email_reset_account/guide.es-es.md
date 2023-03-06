---
title: "Eliminar una cuenta de correo"
slug: delete-email-account
excerpt: "Cómo eliminar o restaurar una dirección de correo electrónico en un servicio de correo"
section: 'Gestión de la cuenta de correo'
order: 02
updated: 2023-01-27
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 22/12/2022**

## Objetivo

Quiere:

- Eliminar una dirección de correo electrónico que ya no esté utilizando. 
- Restaurar una cuenta de correo para utilizarla en una nueva dirección de correo. 
- Restaurar una cuenta de correo para darlo de baja.

**Cómo eliminar o restaurar una dirección de correo en un servicio de correo**

## Requisitos

- Disponer de una solución de correo electrónico de OVHcloud previamente configurada (**MX Plan**, incluida en nuestros [planes de hosting](https://www.ovhcloud.com/es-es/web-hosting/), incluida en un [alojamiento Start10M gratuito](https://www.ovhcloud.com/es-es/domains/free-web-hosting/) o contratada por separado como solución autónoma, como [**Hosted Exchange**](https://www.ovhcloud.com/es-es/emails/hosted-exchange/) o [**Email Pro**](https://www.ovhcloud.com/es-es/emails/email-pro/)).
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}, en la sección `Web Cloud`{.action}.
- Disponer de la información de conexión a las direcciones de correo electrónico correspondientes.

## En la práctica <a name="instructions"></a>

OVHcloud ofrece 3 soluciones de correo electrónico. El concepto de eliminación de cuenta es diferente según su solución.

- **Email MXplan**: esta solución se vende en forma de pack de varias cuentas de correo. Cuando elimina una cuenta, libera una ubicación en su pack. 
- **Email Pro** y **Hosted Exchange**: estos dos productos son a la carta, usted contrata una suscripción individual por cuenta e-mail. Si quiere eliminar una dirección de correo, deberá **restaurar** la cuenta de correo. Una vez que haya restaurado la cuenta de correo, puede reutilizar la cuenta para crear una nueva dirección de correo. También puede [dar de baja la suscripción](https://docs.ovh.com/es/microsoft-collaborative-solutions/gestion-de-la-facturacion-exchange/#eliminar-cuentas) de esta cuenta si desea eliminarla definitivamente.

### Eliminar o restaurar una cuenta de correo

Seleccione la pestaña correspondiente a su servicio de correo:

> [!tabs]
> **MX Plan histórico**
>>
>> Para comprobar si su MXplan es una versión histórica o nueva, consulte el cuadro de la sección "[Identifique su solución MXplan](#whichmxplan)" de esta guía.<br><br>
>>
>> Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes. Haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> situado a la derecha de la cuenta que desea modificar y, seguidamente, en `Eliminar la cuenta`{.action}.<br><br>
>>![Correo electrónico](images/email-mxplan-legacy-reset.png){.thumbnail}<br>
>>
> **Emails MXplan nueva versión**
>>
>> Para comprobar si su MXplan es una versión histórica o nueva, consulte el cuadro de la sección "[Identifique su solución MXplan](#whichmxplan)" de esta guía.<br><br>
>>
>> Haga clic en `Correo electrónico`{.action} y seleccione el servicio MX Plan correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes. Haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> situado al final de la línea correspondiente a la cuenta que quiera modificar y seleccione `Restaurar la cuenta`{.action}.<br><br>
>>![Correo electrónico](images/email-mxplan-new-reset.png){.thumbnail}<br>
>>
> **Email Pro**
>>
>> Haga clic en `Email Pro`{.action} y seleccione el nombre de la plataforma correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Se abrirá una ventana en la que se mostrarán las cuentas de correo existentes. Haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> situado al final de la línea correspondiente a la cuenta que desea modificar y, seguidamente, en `Restaurar la cuenta`{.action}.<br><br>
>> Después de restaurar su cuenta, si desea eliminarla definitivamente, deberá darlo de baja. Para ello, consulte nuestra guía [Gestionar la facturación de sus cuentas Email-Pro](https://docs.ovh.com/es/emails-pro/gestion-facturacion-emailpro/).<br><br>
>>![Correo electrónico](images/emailpro-reset.png){.thumbnail}<br>
>>
> **Exchange**
>>
>> Haga clic en `Microsoft`{.action}, luego en `Exchange`{.action}, y seleccione el nombre de la plataforma correspondiente. Abra la pestaña `Cuentas de correo`{.action}. Haga clic en el botón <i class="icons-ellipsis icons-border-rounded icons-masterbrand-blue"></i> situado al final de la línea correspondiente a la cuenta que desea modificar y, seguidamente, en `Reiniciar`{.action}.<br><br>
>> Después de restaurar su cuenta, si desea eliminarla definitivamente, deberá darlo de baja. Para ello, consulte nuestra guía [Gestionar la facturación de sus cuentas Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/gestion-de-la-facturacion-exchange/).<br><br>
>>![Correo electrónico](images/exchange-reset.png){.thumbnail}<br>
>>

#### Identifique su solución MXplan <a name="whichmxplan"></a>

En la siguiente tabla encontrará la información necesaria para identificar su solución MXplan.

|Versión histórica de la solución MX Plan|Nueva versión de la solución MX Plan|
|---|---|
|![Correo electrónico](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> El nombre del producto aparece en el recuadro Suscripción, en el epígrafe Producto.|![Correo electrónico](images/mxplan-starter-new-step1.png){.thumbnail}<br>El nombre del producto aparece en el recuadro Resumen, en el epígrafe Referencia del servidor.|
|En esta guía, seleccione la pestaña **MXplan histórica** de esta guía.|Abra la pestaña **MXplan de la nueva versión** de esta guía.|<br>


## Más información

[Primeros pasos con la solución MXplan](https://docs.ovh.com/es/emails/primeros-pasos-correo-compartido/)

[Primeros pasos con la solución Email Pro](https://docs.ovh.com/es/emails-pro/primera-configuracion/)

[Primeros pasos con la solución Hosted Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/exchange_20132016_primera_configuracion_del_servicio/)

[Gestionar la facturación de las cuentas Email Pro](https://docs.ovh.com/es/emails-pro/gestion-facturacion-emailpro/)

[Gestionar la facturación de las cuentas Exchange](https://docs.ovh.com/es/microsoft-collaborative-solutions/gestion-de-la-facturacion-exchange/)

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestros distintos [servicios de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
