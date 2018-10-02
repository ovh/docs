---
title: Uso avanzado del correo de OVH
excerpt: Uso avanzado del correo de OVH
slug: uso_avanzado_del_correo_de_ovh
legacy_guide_number: g2117
section: Uso avanzado
---

## ¿Qué debo comprobar si tengo algún problema con el correo?

Si los mensajes no se envían o reciben correctamente, compruebe los siguientes elementos: 

¿Su servicio de correo está activo?
Para que sus mensajes funcionen correctamente, debe tener un servicio de correo activo. Si utiliza las cuentas incluidas con un plan de hosting, compruebe que este no haya expirado. Puede consultar esta información directamente en el área de cliente. Igualmente, su dominio también debe estar activo.

¿El correo funciona desde el webmail?
Para asegurarse de que el problema no se deba a un error de configuración, realice una prueba de envío y recepción directamente desde el webmail de OVH. Si todo funciona correctamente, compruebe la configuración de su cliente de correo sirviéndose de las guías que ponemos a su disposición.

¿No puede conectarse al webmail?
Asegúrese de estar utilizando la contraseña correcta. Si lo necesita, puede cambiarla. Para ello, consulte el apartado correspondiente de esta guía.

¿Se está realizando una intervención en el servicio?
Puede consultar las intervenciones abiertas en la página [Status OVH](http://status.ovh.es/).

¿El dominio apunta correctamente al servidor de correo?
Compruebe que su dominio utilice los servidores de correo (registro MX) de su servicio de correo en OVH. Si desea más información, consulte nuestra [guía](https://docs.ovh.com/es/domains/anadir-registro-mx-configuracion-dominio/).

## Códigos de respuesta de un servidor SMTP

### Comandos SMTP

En la transferencia de correo electrónico se utilizan comandos SMTP.

Para consultar un servidor SMTP, es necesario dialogar con él enviándole  comandos.

Cuando el servidor recibe un comando, devuelve una respuesta SMTP.

### Respuestas SMTP

Las respuestas a los comandos SMTP sirven para garantizar la sincronización de las consultas y de las acciones en el proceso de transferencia de correo con el fin de garantizar que el cliente SMTP conozca siempre el estado del servidor SMTP.

Cada comando debe generar una respuesta.

Una respuesta SMTP está formada por un número de tres cifras seguido de un texto.

- El número es utilizado por los servidores para determinar cuál va a ser la siguiente etapa.
- El texto solo es útil para un usuario humano.

Cada una de las tres cifras de la respuesta tiene un significado:

- La primera cifra indica si la respuesta es correcta, incorrecta o incompleta. El cliente SMTP determinará su siguiente acción en función de esta primera cifra.
- La segunda y tercera cifras proporcionan información adicional.

### Análisis rápido de las respuestas SMTP

Hay cuatro valores posibles para la primera cifra del código de respuesta:

- 2xx: Respuesta positiva: La acción solicitada se ha realizado correctamente. Puede realizarse una nueva petición.

- 3xx: Respuesta positiva transitoria: Se ha aceptado el comando, pero la acción solicitada está pendiente de recibir más información. El cliente SMTP debería enviar otro comando indicando esa información.

- 4xx: Respuesta de terminación negativa transitoria: El comando no se ha aceptado y la acción solicitada no ha podido realizarse. Sin embargo, la condición de error es temporal y es posible volver a solicitar la acción.

- 5xx: Respuesta negativa: El comando no se ha aceptado y la acción solicitada no ha podido realizarse. El cliente SMTP no debería repetir la misma solicitud.

### Significado de los códigos

A continuación se describen la mayoría de los códigos de respuesta SMTP utilizados por los servidores:

|Código de respuesta|Descripción|Acción|
|---|---|---|
|211|Mensaje de estado del sistema o respuesta de ayuda|El mensaje va seguido de más información.|
|214|Mensaje de ayuda|Contiene información sobre el servidor y redirige normalmente a una página de preguntas frecuentes.|
|220|El servidor está listo|Indica que el servidor está listo.|
|221|Cierre del canal de transmisión|El servidor cierra la conexión una vez establecida la comunicación.|
|250|Transmisión del mensaje finalizada|El mensaje de correo se ha enviado correctamente.|
|251|El usuario final no está en el servidor, pero el mensaje de correo va a enviarse|El mensaje será enviado a otro servidor (redirección, otro servidor MX...).|
|252|El servidor no puede verificar el usuario final, pero va a intentar enviar el mensaje|El usuario final no puede verificarse en este momento, pero probablemente se enviará después.|
|354|El servidor ha recibido las direcciones de envío y recepción|Está esperando a recibir el contenido del mensaje de correo para enviarlo.|
|420|Plazo excedido, problema de conexión|Los servidores de correo GroupWise son los únicos que devuelven este mensaje de error. Contacte con el administrador del servidor de correo de destino.|
|421|Servicio no disponible, cerrando el canal de transmisión|No se ha podido determinar la procedencia del error, asegúrese de que el envío a otro dominio funciona. Si funciona, vuelva a intentar realizar el envío inicial más adelante.|
|432|Recepción del correo en el servidor Exchange detenida|Los servidores de correo Microsoft Exchange son los únicos que devuelven este mensaje de error. Contacte con el administrador del servidor de correo de destino.|
|449|Error de enrutado|Los servidores de correo Microsoft Exchange son los únicos que devuelven este mensaje de error. Microsoft recomienda realizar un diagnóstico con su herramienta [WinRoute](https://support.microsoft.com/es-es/kb/281382).|
|450|Acción de correo solicitada no realizada: buzón de correo no disponible|Puede ocurrir que el buzón de correo esté ocupado o haya sido bloqueado temporalmente por razones de seguridad o por haber sido incluido en una blacklist. Compruebe que la dirección IP del servidor de correo no haya sido blacklistada ([SpamHaus](https://www.spamhaus.org/lookup/)) y compruebe que su mensaje de correo no incluya palabras relativas al spam.|
|451|Acción solicitada abandonada: error de procesamiento local|Puede deberse a una sobrecarga momentánea o a que la verificación del SPF del dominio emisor ha sido incorrecta. Consulte el mensaje complementario proporcionado por el servidor o contacte con su administrador si el error persiste.|
|452|Acción solicitada no realizada: sistema de almacenamiento insuficiente|El servidor de correo está sobrecargado. También podría deberse a que se intenta enviar un número excesivo de mensajes al mismo tiempo. Compruebe su buzón de envío y vuelva a intentarlo.|
|455|Servidor incapaz de recibir los parámetros|Espere un tiempo y vuelva a intentarlo. Si vuelve a fallar, contacte con el administrador del servidor de correo de destino.|
|500|Error de sintaxis, comando no reconocido|Esto puede incluir errores como una línea de comandos demasiado larga. Por lo general se debe al antivirus o el cortafuegos del remitente. Compruébelo y vuelva a intentarlo.|
|501|Error de sintaxis en los parámetros o los argumentos|Con frecuencia se debe a que la dirección de correo electrónico del destinatario es errónea o a un problema de antivirus o cortafuegos en el remitente. Compruebe la dirección de correo de destino y su antivirus o cortafuegos.|
|502|Comando no implementado|Se han reconocido los parámetros u opciones utilizados en el envío del mensaje de correo con el servidor SMTP, pero están desactivados en su configuración. Contacte con su proveedor del servicio.|
|503|Secuencia de comandos incorrecta|Generalmente se debe a un problema de autenticación. Asegúrese de estar bien autenticado en el servidor SMTP en cuanto a la configuración de su cliente de correo.|
|504|Parámetro de comando no implementado|Se han reconocido los parámetros u opciones utilizados en el envío del mensaje de correo con el servidor SMTP, pero están desactivados en su configuración. Contacte con su proveedor del servicio.|
|550|Acción solicitada no realizada: buzón de correo no disponible|El servidor de correo de destino no ha podido verificar la dirección de correo electrónico utilizada. Por lo general se debe a que la dirección de correo de destino no es válida, pero también puede significar que el servidor de correo de destino tiene problemas de cortafuegos o conectividad. Compruebe la dirección de correo del destinatario y vuelva a intentarlo.|
|551|Usuario no local|Por lo general se utiliza como estrategia de prevención contra el spam. Indica que la redirección de correo a un servidor distinto del suyo no está autorizada por alguna razón. Contacte con su proveedor del servicio.|
|552|Acción de correo solicitada interrumpida: espacio de almacenamiento excedido|Al usuario con el que ha intentado contactar no le queda espacio disponible para recibir mensajes. Por desgracia, la única solución es contactar con el destinatario por otra vía.|
|553|Acción solicitada no realizada: dirección de correo electrónico no autorizada|Por lo general se debe a que la dirección de correo de destino es incorrecta. Compruebe que la dirección de correo que ha introducido es correcta.|
|554|No se ha podido realizar la transacción o, en caso de tratarse de la respuesta a una apertura de conexión, no hay ningún servicio SMTP|Por lo general se trata de un problema de blacklistado. Compruebe que la dirección IP del servidor de correo no esté blacklistada ([SpamHaus](https://www.spamhaus.org/lookup/)).|
|555|Parámetros MAIL FROM o RCPT TO no reconocidos o no implementados|El servidor SMTP saliente no registra correctamente la dirección de correo electrónico utilizada en los parámetros «De» o «Para». Compruebe que las direcciones de correo electrónico indicadas son correctas y que no ha superado los límites establecidos por OVH: 200 mensajes por hora y cuenta y 300 mensajes por hora e IP.|