---
title: 'Gestionar y utilizar las listas de difusión'
slug: guia_de_utilizacion_de_listas_de_difusion
excerpt: 'Cómo utilizar las listas de difusión'
section: 'Funcionalidades de las direcciones de correo electrónico'
order: 4
---

**Última actualización: 13/02/2020**

## Objetivo

Una lista de difusión permite contactar con los abonados en masa, es decir, transmitir un mensaje o una información a varios destinatarios a la vez. Dicha transmisión puede ser útil en el contexto de un email de información, por ejemplo, el lanzamiento de un nuevo producto (para un sitio web de <i>e-commerce</i>) o para informar sobre una próxima reunión (en el caso de un sitio web comunitario). 

**Cómo gestionar las listas de difusión**

### Principio de la moderación

Es posible moderar una lista de difusión para evitar que cualquiera envíe correos electrónicos a su lista de abonados. Una lista de difusión moderada servirá para enviar boletines informativos, mientras que una lista no moderada podrá entablar fácilmente un diálogo entre varios abonados por correo electrónico.

**Lista de difusión sin moderación**

![emails](images/manage_mailing-lists_no-modarate.png){.thumbnail}

El remitente (<i>sender</i>) transmite el correo electrónico a la lista de difusión, y los abonados (<i>subscribers</i>) lo reciben directamente.

**Lista de difusión con moderación**

![emails](images/manage_mailing-lists_modarate.png){.thumbnail}

El remitente (<i>sender</i>) transmite el correo electrónico a la lista de difusión. El moderador (<i>moderator</i>) recibe un correo electrónico con una solicitud de validación o de rechazo. Si el moderador lo valida, los abonados (<i>subscribers</i>) reciben el correo electrónico transmitido a la lista de difusión. Si el moderador lo rechaza, se elimina el correo electrónico del remitente, por lo que los abonados no lo reciben.

> [!warning]
>
> - Una lista de difusión no es una solución prevista para el envío de correo no deseado (spam o mensajes publicitarios) en masa. Este uso se tolera hasta cierto punto mientras que no se considere abusivo.
> - En cualquier momento, un abonado puede cancelar su suscripción de una lista de difusión. También puede denunciar cualquier abuso si lo juzga necesario.
>

## Requisitos

- Disponga al menos de una solución de correo electrónico MX Plan 100 o de un [Web hosting](https://www.ovh.es/hosting/){.external} compatible con las listas de difusión.
- Inicie sesión en el [área de cliente de OVHcloud](https://www.ovh.com/manager/web/login/){.external}.

## Procedimiento

### Crear una lista de difusión

Para crear una lista de difusión, inicie sesión en el [área de cliente de OVHcloud](http://www.ovh.com/manager/web){.external} y, seguidamente, seleccione la pestaña `Web`{.action} en la parte superior.

Una vez iniciada la sesión, haga clic en `Correos electrónicos`{.action} (en la columna de la izquierda) y, seguidamente, en el nombre del dominio correspondiente. Acceda a la pestaña `Listas de difusión`{.action} de su servicio de correo electrónico.

![emails](images/manage_mailing-lists_01.png){.thumbnail}

Si ya ha creado listas de difusión, estas aparecerán en la tabla de resumen. En el siguiente ejemplo, ya se ha creado una lista de difusión.

Para crear una nueva lista de difusión, haga clic en `Añadir una lista de difusión`{.action}.

![emails](images/manage_mailing-lists_02.png){.thumbnail}

Complete el formulario en función de la información recogida en la siguiente tabla:

| Dato                      	| Descripción                                                                                                            	|
|----------------------------------	|------------------------------------------------------------------------------------------------------------------------	|
| Nombre                              	| El nombre de su lista de difusión                                                                                          	|
| Propietario                     	| Introduzca la dirección de correo electrónico del propietario de la lista de difusión (el propietario también será moderador).                              	|
| Responder a                        	| Establezca el/los destinatario/s que recibirá/n el mensaje cuando un abonado responda a la lista de difusión.                                        	|
| Idioma                           	| Seleccione el idioma de las menciones automáticas de suscripción o de cancelación de la suscripción de su lista de difusión.				|
| Moderar todos los mensajes         | El propietario o un moderador debe aprobar cada correo electrónico enviado a la lista de difusión.                                     	|
| Solo los abonados pueden publicar 	| Restringir el envío de correos electrónicos solo entre los abonados de la lista de difusión.              								|
| Todos pueden publicar (no se requiere ninguna moderación) | El envío de un correo electrónico a la lista de difusión se transmite directamente a los abonados sin necesidad de ninguna validación.             		|
| Moderación de los abonados         	| El propietario o un moderador debe aprobar las suscripciones a la lista de difusión.                                    	|


![emails](images/manage_mailing-lists_03.png){.thumbnail}


> [!primary]
>
> Número máximo de abonados a la lista de difusión:
>
> - 5000 si hay moderación de mensajes,
> - 250 si no hay moderación de mensajes.
>


### Gestionar las opciones de la lista de difusión

Para modificar las opciones de la lista de difusión, haga clic en `...`{.action} a la derecha de esta. Luego, podrá actualizar las opciones, eliminar la lista de difusión e, incluso, compartir la lista de abonados por correo electrónico. 

![emails](images/manage_mailing-lists_04.png){.thumbnail}


### Gestionar a los abonados

Para gestionar a los abonados de su lista de difusión, haga clic en el icono con forma de silueta en la columna «Abonados».

![emails](images/manage_mailing-lists_05.png){.thumbnail}

Aparece la siguiente ventana:

![emails](images/manage_mailing-lists_06.png){.thumbnail}

#### Añadir/eliminar abonados

|Añadir abonados|Eliminar abonados|
|---|---|
|Haga clic en `Añadir abonados`{.action} a la derecha.|Haga clic en `Eliminar mediante un archivo`{.action} a la derecha.|
|![emails](images/manage_mailing-lists_07.png){.thumbnail}|![emails](images/manage_mailing-lists_07b.png){.thumbnail}|

Hay dos métodos para añadir o eliminar abonados:

- Para introducir manualmente las direcciones, haga clic en `Añadir una dirección de correo electrónico`{.action}.
- Para importar un archivo de texto que incluye una dirección de correo electrónico por línea, haga clic en el icono de descarga que se encuentra en la parte superior del cuadro de entrada.

#### Exportar una lista de abonados a un archivo CSV

Haga clic en `Exportar los abonados en formato CSV`{.action} para generar un archivo CSV con todos sus abonados. En el caso que nos ocupa, esta opción no está disponible porque no se ha añadido ningún abonado.
 
### Gestionar a los moderadores

Para gestionar a los moderadores de su lista de difusión, haga clic en el icono con forma de silueta en la columna «Moderadores».

![emails](images/manage_mailing-lists_08.png){.thumbnail}

Aparece la siguiente ventana:

![emails](images/manage_mailing-lists_09.png){.thumbnail}

#### Añadir/eliminar moderadores

|Añadir moderadores|Eliminar moderadores|
|---|---|
|Haga clic en `Añadir moderadores`{.action} a la derecha.|Haga clic en `Eliminar mediante un archivo`{.action} a la derecha.|
|![emails](images/manage_mailing-lists_10.png){.thumbnail}|![emails](images/manage_mailing-lists_10b.png){.thumbnail}|

Hay dos métodos para añadir o eliminar moderadores:

- Para introducir manualmente las direcciones, haga clic en `Añadir una dirección de correo electrónico`{.action}.
- Para importar un archivo de texto que incluye una dirección de correo electrónico por línea, haga clic en el icono de descarga que se encuentra en la parte superior del cuadro de entrada.

> [!primary]
> \- Cuando una lista de difusión tiene varios moderadores, solo se necesita la validación de uno de ellos para que el correo electrónico se transmita a todos los abonados.
> \- Cuando un moderador envía un correo electrónico a la lista de difusión, solo ese moderador recibe el correo electrónico de moderación.
> 

La operación de adición de abonados tardará en función del número de abonados que se vaya a añadir.


### Suscribirse a una lista de difusión

Si alguien desea suscribirse a su lista de difusión, basta con enviar un mensaje de correo electrónico a:


```bash
nombre_de_su_LD-suscripción@sudominio.com
```


### Cancelar la suscripción a una lista de difusión

Si un abonado desea cancelar la suscripción a su lista de difusión, basta con enviar un correo electrónico a:


```bash
nombre_de_su_LD-cancelarsuscripción@sudominio.com
```


### Eliminar automáticamente direcciones erróneas

El sistema de listas de difusión no elimina un abonado de la lista por una sola devolución de error (mensaje no entregado, dirección inexistente, etc.). Tras el primer envío fallido, transcurren aproximadamente doce días antes de enviar una notificación al abonado.

En la notificación, se indican las referencias de los mensajes perdidos. Si dicha notificación también es fallida, nuestro sistema de listas de difusión esperará otros doce días para enviar un mensaje de prueba. Si también ocurre un fallo con este mensaje, se eliminará el abonado de la lista de suscriptores.


### Errores recurrentes

#### Enviar un correo electrónico sin indicar el asunto

Obligatoriamente, todo mensaje enviado a una lista de difusión debe tener un asunto. Sin asunto, se genera automáticamente un error y se envía una notificación de error al remitente.

Por lo tanto, el remitente del correo electrónico sin asunto recibirá una notificación de error como la que se muestra a continuación:


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: Sorry, I don't accept message with empty Subject (#5.7.0)
```


#### Enviar la dirección de la lista de difusión en copia oculta

Para enviar un mensaje a una lista de difusión, es absolutamente necesario indicar su dirección, o bien en el campo «Para», o bien en el campo «CC» (con copia a).

Si el cliente introduce la dirección en el campo «CCO» (con copia oculta), recibirá una notificación de error.

El remitente del correo electrónico recibirá una notificación de error:


```bash
Hi. This is the qmail-send program at mx1.ovh.net.
I'm afraid I wasn't able to deliver your message to the following addresses.
This is a permanent error; I've given up. Sorry it didn't work out.

<newsletter@testinterne.ovh>:

ezmlm-reject: fatal: List address must be in To: or Cc: (#5.7.0)
```


### Personalización avanzada

Es posible personalizar la mayoría de los textos de una lista de difusión. Como moderador, debe enviar un correo electrónico vacío a nombre_de_su_LD- [edit@sudominio.com](mailto:edit@sudominio.com){.external}.

- Por ejemplo: Si su lista de difusión es [newsletter@testinterne.ovh](mailto:newsletter@testinterne.ovh){.external}. Desde su dirección de correo electrónico de moderador, enviará un mensaje a [newsletter-edit@testinterne.ovh](mailto:newsletter-edit@testinterne.ovh){.external}.

Luego, recibirá un correo electrónico con la información necesaria para guiarle en la realización de las modificaciones.

A continuación, le presentamos una lista de archivos con los textos de las respuestas y una breve descripción de la utilización de su contenido. Para editar un archivo, simplemente envíe un mensaje a envío-edit.archivo, sustituyendo el nombre del archivo por «archivo». Las instrucciones para la edición se enviarán con el archivo de texto.


|Archivo|Uso|
|---|---|
|bottom|Pie de página para todas las respuestas: información general.|
|digest|Sección «administrativa» de los boletines periódicos.|
|faq|Respuestas a las preguntas frecuentes en relación con esta lista.|
|get_bad|En caso de mensajes ausentes en los archivos.|
|help|Ayuda general (entre «top» y «bottom»).|
|info|Información sobre la lista. La primera línea de la lista es un resumen.|
|mod_help|Ayuda específica para los moderadores de listas.|
|mod_reject|Al remitente de envíos rechazados.|
|mod_request|A los moderadores con un envío.|
|mod_sub|Al abonado una vez confirmada la suscripción del moderador.|
|mod_sub_confirm|A los moderadores para validar una suscripción.|
|mod_timeout|Al remitente de un mensaje no válido una vez transcurrido mucho tiempo.|
|mod_unsub_confirm|A un administrador para solicitar una cancelación de suscripción.|
|sub_bad|Al abonado si la confirmación no fue correcta.|
|sub_confirm|Al abonado para confirmar su solicitud.|
|sub_nop|Al abonado tras una nueva suscripción.|
|sub_ok|Al abonado tras una suscripción exitosa.|
|top|Encabezado de cada respuesta.|
|trailer|Añadido al final de cada contribución a la lista.|
|unsub_bad|Al abonado si la confirmación de cancelación de la suscripción es falsa.|
|unsub_confirm|Al abonado para solicitar la confirmación de cancelación de la suscripción.|
|unsub_nop|A un no abonado tras una solicitud de cancelación de la suscripción.|
|unsub_ok|A un exabonado tras una cancelación de suscripción exitosa.|

> [!primary]
>
> Por ejemplo: Si desea modificar el pie de página por defecto de los correos electrónicos enviados a su lista de difusión, envíe un mensaje a la dirección «newsletter-edit.bottom@testinterne.ovh». Luego, recibirá un nuevo correo electrónico en el que se explica cómo personalizar el pie de página.
> 

## Más información

Interactúe con nuestra comunidad de usuarios en https://community.ovh.com/en.