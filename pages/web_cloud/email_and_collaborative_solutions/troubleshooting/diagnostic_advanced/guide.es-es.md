---
title: 'No se puede enviar o recibir mensajes'
excerpt: Cómo reaccionar ante un fallo de funcionamiento en el envío o recepción de los mensajes de correo electrónico a OVHcloud
updated: 2024-04-11
---

## Objetivo

¿No puede recibir o enviar mensajes de correo desde su cliente de correo o desde el webmail?

**Esta guía explica cómo diagnosticar un error de envío o recepción en una solución de correo de OVHcloud.**

> [!primary]
>
> Si tiene otros asuntos que no se tratan en esta guía, no dude en consultar nuestras [FAQ de correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

## Requisitos

- Tener una solución **MX Plan** o una solución **Email Pro** o una solución **Exchange**.
- Haber iniciado sesión en el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

## Procedimiento

> [!success]
>
> Identifique rápidamente, gracias a las menciones **envío** y **recepción**, la problemática que se aplica a cada caso práctico que se indica a continuación.

### ¿Mi solución de correo y/o mis cuentas están activas? (**envío** y **recepción**)

Para que sus mensajes de correo funcionen, debe tener un servicio de correo activo. Si su servicio de correo está asociado a un plan de alojamiento, compruebe que este no haya expirado. Puede comprobar esta información directamente desde el área de cliente. Asimismo, el dominio también debe estar activo.

En primer lugar, compruebe que está actualizado en los [pagos](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) y [renovaciones](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) de sus servicios.

Compruebe que los servicios están correctamente operativos:

- Para su **dominio**, acceda a la sección `Web Cloud`{.action}, haga clic en `Dominios`{.action} y seleccione su dominio. Si su dominio ha caducado, se le indicará en la parte superior de la página.
- Para su **alojamiento web**, acceda a la sección `Web Cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento. La fecha de expiración o de renovación automática del alojamiento se indica en la parte superior de la página.
- Para un servicio **MXplan**, acceda a la sección `Web Cloud`{.action}, haga clic en `Correo electrónico`{.action} y seleccione el dominio correspondiente. Haga clic en la pestaña `Cuentas de correo`{.action}. Compruebe el estado de la cuenta de correo en la columna `Estado`.
- Para un servicio **Email Pro**, acceda a la sección `Web Cloud`{.action}, haga clic en `Email Pro`{.action} y seleccione su plataforma. Haga clic en la pestaña `Cuentas de correo`{.action}. Compruebe el estado de la cuenta de correo en la columna `Estado`.
- Para un servicio **Exchange**, acceda a la sección `Web Cloud`{.action}, haga clic en `Microsoft`{.action} y seleccione `Exchange`{.action}. Haga clic en la pestaña `Cuentas de correo`{.action}. Compruebe el estado de la cuenta de correo en la columna `Estado`.

### No consigo enviar correos desde mi cliente de correo (**envío** y/o **recepción**)

Si utiliza un cliente de correo en su ordenador (Outlook, Mail de Mac, Thunderbird, etc.) o su smartphone (iOS, Android, etc.) y si experimenta un fallo de funcionamiento en el envío o en la recepción, compruebe los parámetros de configuración según su solución de correo electrónico y el programa de mensajería o aplicación utilizado.

- Para un servicio **MXplan**, en la sección [Correo electrónico](/products/web-cloud-email-collaborative-solutions-mx-plan) de nuestras guías **Web Cloud**.

- Para un servicio **Email Pro**, en la sección [Email Pro](/products/web-cloud-email-collaborative-solutions-email-pro) de nuestras guías de **Web Cloud**, compruebe la configuración de su cliente de correo en el apartado `Configuración del cliente de correo`.

- Para un servicio **Exchange**, en la sección [Soluciones colaborativas Microsoft](/products/web-cloud-email-collaborative-solutions-microsoft-exchange) de nuestras guías **Web Cloud**, compruebe la configuración de su cliente de correo en el apartado `Configuración del cliente de correo Exchange` o su smartphone en `Configuración en un smartphone o tablet compatible con Exchange`.

### No puedo recibir correos electrónicos porque mi dirección de correo electrónico está llena, no tengo espacio. ¿Qué puedo hacer?

Si ha contratado [una de nuestras soluciones de correo de OVHcloud](https://www.ovhcloud.com/es/emails/) y tiene una cuenta de correo llena, consulte nuestra guía "[Gestionar el espacio de almacenamiento de una cuenta de correo](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)". Esta guía le ayudará a determinar si puede optimizar el espacio existente o si es necesario cambiar de solución de correo para aumentar la capacidad de almacenamiento.

### ¿Los mensajes de correo funcionan desde el webmail? (**envío** y/o **recepción**)

Para asegurarse de que el fallo de funcionamiento no se deba a un error de configuración, realice una prueba de envío y de recepción directamente a través del webmail de OVHcloud. Si todo funciona correctamente, compruebe la configuración de su programa a través de las guías disponibles.

Desde el navegador de su ordenador o desde un smartphone, vaya a la dirección <https://www.ovh.es/mail/>.

![webmail](images/webmail.png){.thumbnail}

### No consigo conectarme al webmail

Asegúrese de tener la contraseña correcta. Si lo necesita, puede modificarlo. Compruebe también si la doble autenticación está activada (solo [Exchange](https://www.ovhcloud.com/es-es/emails/hosted-exchange/)).

Esta guía explica cómo cambiar la contraseña de una dirección de correo:

- Para un servicio **MXplan**, consulte nuestra guía [Cambiar la contraseña de una dirección de correo MX Plan.](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)

- Para un servicio **Email Pro**, acceda a la sección `Web Cloud`{.action}, haga clic en `Email Pro`{.action} y seleccione su plataforma. En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} y luego en `Cambiar`{.action} para cambiar la contraseña.

- Para un servicio **Exchange**, acceda a la sección `Web Cloud`{.action}, haga clic en `Microsoft`{.action} y seleccione `Exchange`{.action}. En la pestaña `Cuentas de correo`{.action}, haga clic en el botón `...`{.action} y luego en `Cambiar`{.action} para cambiar la contraseña. <br> Compruebe si la doble autenticación está activada en nuestra guía [Configurar la doble autenticación en una cuenta Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_2fa_exchange).

### ¿Hay algún incidente o mantenimiento en curso en mi servicio? (**envío** y/o **recepción**)

Puede consultar las distintas tareas en curso en <https://web-cloud.status-ovhcloud.com/> en este momento.

- Para **MXplan**, consulte la sección `Correo electrónico.`
- Para **Email Pro**, acceda a la sección `Microsoft.`
- Para **Exchange**, acceda a la sección `Microsoft.`

### ¿Es correcto apuntar el dominio a mi servicio de correo? (**recepción**)

Compruebe que el dominio apunta correctamente a los servidores de correo de OVHcloud. Para ello, es necesario configurar los registros de tipo MX en la zona DNS. <br>Para más información, consulte nuestra guía [Añadir un registro MX a la configuración del dominio](/pages/web_cloud/domains/dns_zone_mx).

![DNSzone](images/DNS.png){.thumbnail}

### Tras el envío de un email, recibo un mensaje indicando que no ha podido enviarse mi email, que incluye un código de 3 cifras. (**envío**)

Se trata de una devolución de error SMTP. Esto significa que el intercambio entre el servidor de envío y el servidor de correo de recepción no se ha podido realizar correctamente. El código se utiliza para determinar el tipo de error que el servidor ha encontrado. Por lo general, viene acompañado de un mensaje en el que se detalla el error.

Una respuesta SMTP es un número de tres dígitos. Cada uno de los tres dígitos tiene un significado especial:

- el primer dígito indica si la respuesta es buena, mala o incompleta. Un cliente SMTP será capaz de determinar su próxima acción examinando esta primera cifra.
- El segundo y el tercer dígito proporcionan información adicional.

Hay cuatro posibles valores para la primera cifra del código de respuesta:

|Código|Descripción|  
|---|---|  
|2 xx|Respuesta positiva: la acción solicitada se ha realizado correctamente. Se puede iniciar una nueva solicitud.|
|3 xx|Respuesta temporal positiva: se ha aceptado el pedido, pero la acción solicitada está pendiente de recibir más información. El cliente SMTP debería enviar otro comando que especifique esta información.|
|4 xx|Respuesta negativa de finalización transitoria: el pedido no ha sido aceptado y la acción solicitada no ha podido producirse. Sin embargo, la condición del error es temporal y la acción puede solicitarse de nuevo.|
|5 xx|Respuesta negativa: el pedido no ha sido aceptado y la acción solicitada no ha podido producirse. El cliente SMTP no debería repetir la misma petición.|

A continuación encontrará la mayoría de los códigos de respuesta negativos SMTP utilizados por los servidores:

|Códigos de respuesta|Detalles|Acciones|
|---|---|---|
|420|Tiempo excedido, problema de conexión|Este mensaje de error solo es devuelto por los servidores mail GroupWise. Contacte con el administrador del servidor de correo de destino|
|421|Servicio no disponible, canal de transmisión en curso de cierre|Procedente del error indeterminado, asegúrese de que el envío a otro dominio funciona. Si es así, vuelva a intentarlo más tarde|
|432|Recepción del email en el servidor Exchange detenido|Este mensaje de error solo es devuelto por los servidores de correo Microsoft Exchange. Contacte con el administrador del servidor de correo de destino|
|449|Un error de enrutado|Este mensaje de error solo es devuelto por los servidores de correo Microsoft Exchange. Microsoft recomienda realizar un diagnóstico con su herramienta WinRoute|
|450|Petición de acción de correo no efectuada: buzón de correo no disponible (por ejemplo, buzón de correo ocupado o temporalmente bloqueado por razones de seguridad o de blacklistage)|Compruebe si su dirección IP del servidor de correo no es blacklistada ([SpamHaus](https://check.spamhaus.org/){.external}) y si su email no incluye palabras que se refieran al spam.|
|451|Se ha interrumpido la acción necesaria: Error de procesamiento local|Esto puede deberse a una sobrecarga momentánea, o a una verificación del SPF del dominio emisor incorrecta. Consulte el mensaje complementario que le haya proporcionado el servidor o contacte con el administrador del servidor si persiste|
|452|Acción solicitada no realizada: sistema de almacenamiento insuficiente|Su servidor de correo está "sobrecargado". Esto también puede deberse a un gran número de mensajes que intentan ser enviados a la vez. Por favor, compruebe su bandeja de salida e inténtelo de nuevo|
|455|Servidor incapaz de recibir la configuración|Espere un tiempo y vuelva a intentarlo. En caso de fallo, contacte con el administrador del servidor de correo del destinatario|
|500|Error de sintaxis, comando no reconocido (puede incluir errores como una línea de comandos demasiado larga)|Esto suele ser causado por el antivirus o firewall del remitente. Compruebe esto y vuelva a intentarlo|
|501|Error de sintaxis en los parámetros o argumentos|Esto suele deberse a una dirección de correo de destinatario errónea o a un problema de antivirus o firewall en el lado del remitente. Compruebe la dirección de destino y su antivirus o firewall.|
|502|Pedido no implementado|Los parámetros o opciones utilizados al enviar el email con su servidor SMTP son reconocidos pero desactivados en su configuración. Por favor, contacte con su proveedor de servicio.|
|503|El servidor ha encontrado una mala secuencia de comandos.|Esto suele deberse a un problema de autenticación. Asegúrese de estar bien autenticado en el servidor SMTP en lo que respecta a la configuración de su cliente de correo.|
|504|Parámetro de órdenes no implementado|Los parámetros o opciones utilizados al enviar el email con su servidor SMTP son reconocidos pero desactivados en su configuración. Por favor, contacte con su proveedor de servicio.|
|535| falló durante la autenticación| Se ha generado la información de usuario/contraseña o el envío puede estar bloqueado en su dirección de correo. Compruebe el estado de su dirección de correo electrónico desde el área de cliente de OVHcloud. Un cambio de la contraseña puede desbloquear el envío si la cuenta ha sido bloqueada por spam, consulte nuestra guía [¿Qué hacer con una cuenta bloqueada debido a correo no deseado?](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/locked_for_spam) para más información|
|550|Acción solicitada no realizada: buzón de correo no disponible|El servidor de correo de destino no ha podido verificar la dirección de correo electrónico utilizada. Esto suele deberse a una dirección de correo electrónico de destino no válida, pero también puede significar que el servidor de correo de destino tenga problemas de cortafuegos o conectividad. Compruebe la dirección de correo electrónico del destinatario e inténtelo de nuevo|
|550 5.7.1|Email rejected per policy reason|El servidor de correo de destino rechazó la dirección de correo de envío por motivos de política de seguridad. Estas razones pueden ser múltiples, normalmente se detallan con el código de error. En algunos casos, puede ser una dirección IP de la cadena de transmisión que está presente en una lista de rechazo. Para comprobar la reputación de una dirección IP, puede probarla, por ejemplo, en [MXtoolbox](https://maxtoolbox.com/blacklists.aspx) o comprobar la cadena de transmisión de un mensaje de correo desde la dirección de correo electrónico correspondiente con [Mailtester](https://www.mail-tester.com/)|
|550 5.7.26|This message does not have authentication information or fails to pass authentication checks| El correo electrónico fue rechazado porque el servicio de correo electrónico del remitente no tiene configurado SPF o DKIM en su nombre de dominio.<br><br>Se recomienda configurar un registro SPF de prioridad, que es compatible con todas nuestras soluciones de correos electrónicos. Use nuestra guía "[Mejorar la seguridad del correo electrónico mediante el registro SPF](/pages/web_cloud/domains/dns_zone_spf)".<br><br>Si su oferta de correo electrónico tiene la opción DKIM, puede implementarla usando nuestra guía “[Mejorar la seguridad del correo electrónico mediante el registro DKIM](/pages/web_cloud/domains/dns_zone_dkim)”.|
|551|Usuario no local|Esto se usa generalmente como una estrategia de prevención contra el spam. Por alguna razón, el relevo de correo no está autorizado a transferir su mensaje a otro servidor distinto del suyo. Por favor, contacte con su proveedor de servicio.|
|552|Petición de acción de correo interrumpida: espacio de almacenamiento superado|El usuario al que ha intentado contactar ya no tiene espacio disponible para recibir mensajes. Desafortunadamente, la única solución es contactar con el destinatario a través de otro método|
|553|Acción solicitada no realizada: dirección de correo electrónico no autorizada|Esto suele deberse a una dirección de correo electrónico de destino incorrecta. Por favor, compruebe que la dirección de correo electrónico es correcta.|
|554|Transacción fallida, "Aquí no hay servicios SMTP"|En general, se trata de un problema de lista negra. Compruebe si su dirección IP del servidor de correo no es blacklistada ([SpamHaus](https://check.spamhaus.org/){.external})|
|555|MAIL FROM / RCPT TO, parámetros no reconocidos o no implementados|El servidor SMTP saliente no guarda correctamente la dirección de correo electrónico utilizada en los parámetros "De" o "A". Por favor, compruebe que las direcciones de correo electrónico indicadas son correctas y también que no ha superado el límite establecido por OVHcloud: 200 emails /hora por cuenta y 300 emails /hora/ip|

## Más información

[FAQ E-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
