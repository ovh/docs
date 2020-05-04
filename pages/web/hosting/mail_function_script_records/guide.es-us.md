---
title: 'Gestionar los mensajes de correo automatizados'
slug: web_hosting_seguimiento_de_los_mensajes_de_correo_automatizados
excerpt: 'Cómo realizar el seguimiento y la gestión de los emails automatizados enviados desde un alojamiento web de OVHcloud'
section: Diagnóstico
---

**Última actualización: 04/05/2020**

## Objetivo

Los mensajes de correo automatizados son emails enviados mediante scripts. Se utilizan, por ejemplo, para que los visitantes de un sitio web puedan enviarle mensajes de correo electrónico a través de un formulario de contacto.

**Esta guía explica cómo gestionar los mensajes de correo automatizados enviados desde un alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}.
- Estar conectado al [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!primary]
>
> Esta guía solo es aplicable a los mensajes de correo electrónico enviados desde los scripts de un alojamiento web de OVHcloud. Si quiere gestionar las direcciones de correo electrónico incluidas en su solución MX Plan o en su [plan de hosting de OVHcloud](https://www.ovh.com/world/es/hosting/){.external}, vaya a la sección `Correo electrónico`{.action} del [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.
>

## Procedimiento

El seguimiento y la gestión de los emails automatizados de un alojamiento web de OVH se realizan desde el [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}. Para ello, en la columna izquierda, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, haga clic en `Más +`{.action} y seleccione `Scripts de correo electrónico`{.action}.

En la nueva página podrá gestionar los emails automatizados enviados desde el alojamiento web de OVHcloud y realizar un seguimiento de los envíos.

![Alojamiento](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Seguimiento del envío de mensajes de correo automatizados

En `Scripts de correo electrónico`{.action} también podrá consultar toda la información relativa al envío de los emails automatizados generados desde los scripts.

|Campo|Detalles|
|---|---|
|Estado del servicio|Muestra el estado actual del servicio que realiza los envíos de mensajes de correo automatizados del alojamiento web. El color verde indica que los envíos se están realizando correctamente, mientras que el color rojo indica que no se están enviando mensajes. En función del estado, las operaciones que podrá realizar sobre los envíos serán diferentes. Para más información, vaya a la sección [Gestionar el envío de mensajes de correo automatizados](./#gestionar-el-envio-de-mensajes-de-correo-automatizados){.external}.|
|Informes de error a|Envía un informe de errores diario a la dirección de correo electrónico que usted indique. Puede cambiar dicha dirección haciendo clic en el botón `Cambiar el destinatario`{.action}. En el informe se indican los mensajes de correo enviados desde el alojamiento web que han vuelto a OVHcloud porque no han podido entregarse. En cualquier momento puede consultar estos informes haciendo clic en el botón `Mensajes en error`{.action} situado a la derecha. |
|Total de mensajes enviados|Indica el número de mensajes de correo automatizados enviados desde la creación del alojamiento web en OVHcloud.|
|Mensajes enviados hoy|Indica el número de mensajes de correo automatizados enviados ese día.|
|Total de mensajes en error|Indica el número total de mensajes de correo automatizados enviados desde la creación del alojamiento web que han vuelto a OVHcloud porque no han podido entregarse.|
|Historial de mensajes enviados|Muestra una gráfica con los mensajes enviados desde el alojamiento web en los días previos.|

> [!primary]
>
> Para evitar un uso no deseado de los mensajes de correo automatizados de su alojamiento web, le recomendamos encarecidamente que establezca un sistema de seguridad (como un captcha) en los formularios de su sitio web que envíen mensajes de correo electrónico (como formularios de contacto).
>

![Alojamiento](images/monitoring-automatic-emails-step2.png){.thumbnail}

Si el estado del servicio permite el envío, pero los mensajes de correo electrónico generados desde sus scripts no se envían, le recomendamos que realice las siguientes acciones:

- **Revisar los scripts que realizan el envío**: Es posible que los scripts no puedan enviar mensajes de correo electrónico debido a un error de sintaxis. Revise el contenido de los scripts, corríjalo si es necesario y vuelva a intentar enviar mensajes.

- **Enviar un mensaje de correo mediante un script de prueba**: Cree un script de prueba que envíe un mensaje de correo electrónico a su dirección personal. Si recibe el mensaje, significa que los scripts encargados de realizar el envío contienen errores. Si necesita ayuda, puede encontrar scripts de prueba en internet.

- **Realizar el envío sin utilizar un servidor SMTP**: No especifique ningún servidor SMTP en los parámetros de sus scripts. Si dispone de una interfaz para administrar el envío de mensaje de correo electrónico desde su sitio web, puede modificar este parámetro en la configuración del sitio web.

### Gestionar el envío de mensajes de correo automatizados

La pestaña `Scripts de correo electrónico`{.action} incluye diversos botones con los que podrá gestionar el envío de emails automatizados desde su alojamiento web. Según el estado del servicio, algunas opciones podrían no estar disponibles.

|Acciones|Descripción|
|---|---|
|Bloquear el envío|Bloquea el envío de mensajes de correo automatizados de su alojamiento web. Con el bloqueo activado, los emails generados por sus scripts no se enviarán y se guardarán en una cola de espera durante un máximo de 72 horas.|
|Desbloquear el envío|Desbloquea el envío de los mensajes de correo automatizados de su alojamiento web. Los emails que estén en la cola de espera también se enviarán.|
|Eliminar los mensajes|Elimina los mensajes de correo electrónico de la cola de espera y desbloquea su envío.|

Para realizar cualquiera de las acciones anteriores, haga clic en el botón correspondiente y a continuación en `Aceptar`{.action}. En algunos casos, la acción seleccionada puede tardar unos minutos en realizarse.

![Alojamiento](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Más información

Interactúe con nuestra comunidad de usuarios en [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
