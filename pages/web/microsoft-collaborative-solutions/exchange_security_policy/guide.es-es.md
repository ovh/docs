---
title: 'Configurar la política de seguridad de un servicio Exchange'
slug: configurar-politica-seguridad-exchange
excerpt: 'Cómo configurar la política de seguridad de un servicio Exchange'
section: 'Primeros pasos con Exchange'
order: 6
---

**Última actualización: 27/03/2019**

## Objetivo

El servicio Exchange permite disfrutar de direcciones de correo profesionales, que facilitan el trabajo colaborativo gracias a sus diversas funcionalidades. Para preservar el entorno, es posible configurar los parámetros globales relativos a la seguridad de las cuentas Exchange.

**Esta guía explica cómo configurar la política de seguridad de un servicio Exchange.**

## Requisitos

- Tener un servicio [Exchange](https://www.ovh.es/emails/){.external}.
- Estar conectado al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager), en la sección `Web`{.action}.

## Procedimiento

En un servicio Exchange, es posible configurar la política de seguridad para adoptar las siguientes medidas:

- reforzar la seguridad de las cuentas Exchange cuando los usuarios intentan conectarse; 
- aumentar la seguridad de las contraseñas de las cuentas del servicio Exchange;
- reforzar la comprobación de los mensajes entrantes en nuestros servidores destinados a sus direcciones Exchange;
- determinar cómo se mostrarán los mensajes no deseados en sus direcciones Exchange.

Para acceder a la política de seguridad de su servicio Exchange, conéctese al [área de cliente de OVH](https://www.ovh.com/auth/?action=gotomanager), en la sección `Web`{.action}. En la columna izquierda, haga clic en `Microsoft`{.action}, seleccione `Exchange`{.action} y, por último, seleccione el servicio Exchange.

Haga clic en `Más +`{.action} y seleccione `Editar la política de seguridad`{.action}.

![Política de seguridad Exchange](images/exchange-security-step1.png){.external}

Continúe leyendo esta guía en el apartado correspondiente a la acción que desee realizar:

|Acción|Descripción| 
|---|---| 
|[Reforzar la seguridad de la conexión](./#reforzar-la-seguridad-de-la-conexion){.external}|Permite indicar si las cuentas deben bloquearse después de un cierto número de intentos de conexión fallidos.|
|[Aumentar la seguridad de las contraseñas](./#aumentar-la-seguridad-de-las-contrasenas){.external}|Permite establecer requisitos de complejidad y reglas relativas al cambio de las contraseñas.|
|[Reforzar la comprobación de los mensajes entrantes](./#reforzar-la-comprobacion-de-los-mensajes-entrantes){.external}|Permite indicar si los servidores de OVH deben comprobar si los mensajes recibidos provienen de un origen legítimo (verificación DKIM y/o SPF).|
|[Configurar la visualización de los mensajes no deseados](./#configurar-la-visualizacion-de-los-mensajes-no-deseados){.external}|Permite indicar si los mensajes no deseados deben llevar una etiqueta que permita identificarlos o deben trasladarse automáticamente a la papelera.|

### Reforzar la seguridad de la conexión

Permite indicar si las cuentas Exchange deben bloquearse al cabo de un cierto número de intentos de conexión fallidos.

Para ello, complete los campos siguiendo las indicaciones de la tabla:

|Campo|Descripción| 
|---|---| 
|Umbral de bloqueo|Introduzca el número de intentos de conexión fallidos permitidos antes de que se bloquee la cuenta. Indique «0» si no desea que se bloquee la cuenta.|
|Intervalo de puesta a cero del contador|Este campo aparece al establecer un umbral de bloqueo. Indique el tiempo en minutos que debe transcurrir para que el contador de intentos de conexión fallidos se ponga a cero.|
|Duración de bloqueo|Este campo aparece al establecer un umbral de bloqueo. Indique el tiempo en minutos que la cuenta Exchange permanecerá bloqueada después de haber alcanzado el umbral de bloqueo.|

Una vez que haya completado esta información, puede aceptar los cambios directamente haciendo clic en el botón `Siguiente`{.action} y luego en `Aceptar`{.action}, o puede continuar editando la política de seguridad.

### Aumentar la seguridad de las contraseñas

Permite establecer requisitos de complejidad y reglas relativas al cambio de las contraseñas.

Para ello, complete los campos siguiendo las indicaciones de la tabla:

|Campo|Descripción| 
|---|---| 
|Requisitos de complejidad|Permite establecer reglas relativas a la complejidad de las contraseñas:<br> - no contener la totalidad o parte del nombre de la cuenta del usuario;<br> - tener una longitud de al menos 6 caracteres;<br> - contener caracteres en mayúsculas, minúsculas, no alfabéticos (por ejemplo, «!» o «$») y cifras.|
|Impedir el cambio de la contraseña|Permite imponer una duración de validez mínima a las contraseñas de las cuentas Exchange, es decir, que los usuarios deberán esperar un número de días determinado antes de poder volver a cambiar la contraseña.|
|Tiempo máximo de validez de la contraseña|Permite imponer una duración de validez máxima a las contraseñas de las cuentas Exchange, es decir, que los usuarios se verán obligados a cambiar su contraseña una vez transcurrido ese plazo.|
|Conservar el historial de contraseñas|Este campo solo aparece al establecer un tiempo máximo de validez. Permite indicar si las anteriores contraseñas pueden volver a utilizarse y, en caso afirmativo, cuánto tiempo después.|
|Longitud mínima de la contraseña|Permite imponer un número mínimo de caracteres para las contraseñas.|

Una vez que haya completado esta información, puede aceptar los cambios directamente haciendo clic en el botón `Siguiente`{.action} y luego en `Aceptar`{.action}, o puede continuar editando la política de seguridad.

### Reforzar la comprobación de los mensajes entrantes

Permite indicar si los servidores de OVH deben verificar que los mensajes recibidos en las cuentas Exchange provengan de un origen legítimo (verificación DKIM y/o SPF).

Para ello, complete los campos siguiendo las indicaciones de la tabla:

|Campo|Descripción| 
|---|---| 
|Activar la verificación de la firma DKIM|Indique si los servidores de OVH deben comprobar la firma DKIM de los mensajes que usted reciba en las cuentas Exchange. Al marcar la casilla, se garantiza la autenticidad del dominio remitente y la integridad del mensaje, permitiendo identificar envíos no legítimos, que serán etiquetados como spam.|
|Activar la verificación de la protección SPF|Indique si los servidores de OVH deben comprobar que el origen de envío de los mensajes que usted reciba figura en el registro SPF del dominio remitente. Esta comprobación permite identificar envíos no legítimos, que serán etiquetados como spam.|

Una vez que haya completado esta información, puede aceptar los cambios directamente haciendo clic en el botón `Siguiente`{.action} y luego en `Aceptar`{.action}, o puede continuar editando la política de seguridad.

### Configurar la visualización de los mensajes no deseados

Permite indicar si los mensajes no deseados que reciba en las cuentas Exchange deben llevar una etiqueta que permita identificarlos o deben trasladarse automáticamente a la papelera.

Para ello, complete los campos siguiendo las indicaciones de la tabla:

|Campo|Descripción| 
|---|---| 
|Identificar el correo no deseado|Indique si los servidores de OVH deben añadir una etiqueta que permita identificar como spam los mensajes no deseados que reciba.|
|Mover a la papelera el correo no deseado|Indique si los servidores de OVH deben trasladar automáticamente a la papelera los mensajes no deseados que reciba.|

Una vez que haya completado esta información, acepte los cambios haciendo clic en el botón `Siguiente`{.action} y luego en `Aceptar`{.action}.

## Más información

Interactúe con nuestra comunidad de usuarios en [ovh.es/community](https://www.ovh.es/community/){.external}.