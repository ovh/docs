---
title: 'Configurar la política de seguridad de un servicio de correo'
excerpt: 'Esta guía explica cómo configurar la política de seguridad de un servicio de correo'
updated: 2021-08-31
---

## Objetivo

El servicio de correo de OVHcloud permite disfrutar de direcciones de correo profesionales. Para preservar el entorno, es posible configurar los parámetros globales relativos a la seguridad de las cuentas de correo.

**Esta guía explica cómo configurar la política de seguridad de un servicio de correo.**

## Requisitos

- Tener un [plan de correo en OVHcloud](https://www.ovh.com/es/emails/){.external}.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es) y accedido a la sección `«Web»`{.action}.

## Procedimiento

En un servicio de correo, es posible configurar la política de seguridad para adoptar las siguientes medidas:

- reforzar la seguridad de las cuentas de correo cuando los usuarios intentan conectarse;
- aumentar la seguridad de las contraseñas de las cuentas del servicio de correo;
- reforzar la comprobación de los mensajes entrantes en nuestros servidores destinados a sus direcciones de correo (solo para las cuentas [Exchange](https://www.ovh.com/es/emails/hosted-exchange/){.external});
- determinar cómo se mostrarán los mensajes no deseados en sus buzones de correo (solo para las cuentas [Exchange](https://www.ovh.com/es/emails/hosted-exchange/){.external}).

Para acceder a la política de seguridad de su servicio de correo, conéctese al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es), y diríjase a la sección `Web Cloud`{.action}. 

|Correo electrónico y Email Pro|Exchange| 
|---|---| 
|Haga clic en `Correo electrónico`{.action} o `Email Pro`{.action} y seleccione el servicio correspondiente. Haga clic en `Más`{.action} y seleccione `Editar la política de seguridad`{.action}.| Haga clic en `Microsoft`{.action}, después en `Exchange`{.action}, y seleccione el servicio correspondiente. Haga clic en `Más` y seleccione `Editar la política de seguridad`{.action}|
|![Política de seguridad Exchange](images/manage-security01.png){.thumbnail}|![Política de seguridad Exchange](images/manage-security02.png){.thumbnail}|

> [!primary]
>
> Si no encuentra la pestaña `Más`{.action} en el panel de control de su solución de correo, significa que está en una solución MX Plan histórica. No hay gestión de la política de seguridad en la solución MX Plan histórica.

Continúe leyendo esta guía en el apartado correspondiente a la acción que desee realizar:

- [**Reforzar la seguridad de la conexión**](#enhanced-security): Permite indicar si las cuentas deben bloquearse después de un cierto número de intentos de conexión fallidos.
- [**Aumentar la seguridad de las contraseñas**](#password-complexity): Permite establecer requisitos de complejidad y reglas relativas al cambio de las contraseñas.
- [**Reforzar la comprobación de los mensajes entrantes (solo para Exchange)**](#incoming-messages-verification): Permite indicar si los servidores de OVHcloud deben comprobar si los mensajes recibidos provienen de un origen legítimo (verificación DKIM y/o SPF).
- [**Configurar la visualización de los mensajes no deseados (solo para Exchange)**](#unwanted-messages-management): Permite indicar si los mensajes no deseados deben llevar una etiqueta que permita identificarlos o deben trasladarse automáticamente a la papelera.

### Reforzar la seguridad de la conexión <a name="enhanced-security"></a>

Permite indicar si las cuentas de correo deben bloquearse al cabo de un cierto número de intentos de conexión fallidos.

Para ello, complete la información que figura a continuación:

- **Umbral de bloqueo**: Introduzca el número de intentos de conexión fallidos permitidos antes de que se bloquee la cuenta. Indique «0» si no desea que se bloquee la cuenta.
- **Intervalo de puesta a cero del contador**: Este campo solo aparece si se ha establecido un umbral de bloqueo. Indique el tiempo en minutos que tarda el contador de intentos de conexión fallidos en volver a cero.
- **Duración de bloqueo**: Este campo solo aparece si se ha establecido un umbral de bloqueo. Indique el tiempo en minutos que la cuenta de correo permanecerá bloqueada después de haber alcanzado el umbral de bloqueo.

Una vez que haya completado esta información, acepte los cambios haciendo clic en el botón `Siguiente`{.action} y luego en `Aceptar`{.action} para los servicios «Correo electrónico» y «Email Pro». Haga clic en `Guardar los cambios`{.action} para el servicio Exchange.

### Aumentar la seguridad de las contraseñas <a name="password-complexity"></a>

Permite establecer requisitos de complejidad y reglas relativas al cambio de las contraseñas.

Para ello, complete la información que figura a continuación:

- **Requisitos de complejidad**: Permite establecer reglas relativas a la complejidad de las contraseñas:<br> - no contener la totalidad o parte del nombre de la cuenta del usuario;<br> - tener una longitud de al menos 6 caracteres;<br> - contener caracteres en mayúsculas, minúsculas, no alfabéticos (por ejemplo, «!» o «$») y cifras.
- **Impedir el cambio de la contraseña**: Permite imponer una duración de validez mínima a las contraseñas de las cuentas de correo. Esto significa que los usuarios deberán esperar un número de días determinado antes de poder volver a cambiar la contraseña.
- **Tiempo máximo de validez de la contraseña**: Permite imponer una duración de validez máxima a las contraseñas de las cuentas de correo, es decir, que los usuarios se verán obligados a cambiar su contraseña una vez transcurrido ese plazo.
- **Conservar el historial de contraseñas (solo para Exchange)**: Este campo solo aparece al establecer un tiempo máximo de validez. Permite indicar el tiempo de validez, en días, de las contraseñas anteriores que pueden utilizarse de nuevo.
- **Longitud mínima de la contraseña**: Permite imponer un número mínimo de caracteres para las contraseñas.

Una vez que haya completado esta información, acepte los cambios haciendo clic en el botón `Siguiente`{.action} y luego en `Aceptar`{.action} para los servicios «Correo electrónico» y «Email Pro». Haga clic en `Guardar los cambios`{.action} para el servicio Exchange.

### Reforzar la comprobación de los mensajes entrantes (solo para Exchange) <a name="incoming-messages-verification"></a>

Permite indicar si los servidores de OVHcloud deben verificar que los mensajes recibidos en las cuentas de correo provengan de un origen legítimo (verificación DKIM y/o SPF).

Para ello, marque las casillas correspondientes:

- **Activar la verificación de la firma DKIM**: Indique si los servidores de OVHcloud deben comprobar la firma DKIM de los mensajes que usted reciba en las cuentas Exchange. Al marcar la casilla, se garantiza la autenticidad del dominio remitente y la integridad del mensaje, permitiendo identificar envíos no legítimos, que serán etiquetados como spam.
- **Activar la verificación de la protección SPF**: Indique si los servidores de OVHcloud deben comprobar que el origen de envío de los mensajes que usted reciba figura en el registro SPF del dominio remitente. Esta comprobación permite identificar envíos no legítimos, que serán etiquetados como spam.

Una vez que haya elegido, acepte los cambios haciendo clic en `Guardar los cambios`{.action}.

### Configurar la visualización de los mensajes no deseados (solo para Exchange) <a name="unwanted-messages-management"></a>

Permite indicar si los mensajes no deseados que reciba en las cuentas de correo deben llevar una etiqueta que permita identificarlos o deben trasladarse automáticamente a la papelera.

Para ello, marque las casillas correspondientes:

- **Identificar el correo no deseado**: Indique si los servidores de OVHcloud deben añadir una etiqueta que permita identificar como spam los mensajes no deseados que reciba.
- **Mover a la papelera el correo no deseado**: Indique si los servidores de OVHcloud deben trasladar automáticamente a la papelera los mensajes no deseados que reciba.

Una vez que haya elegido, acepte los cambios haciendo clic en `Guardar los cambios`{.action}.

## Más información

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
