---
title: "Gestionar los mensajes de correo automatizados"
slug: web_hosting_seguimiento_de_los_mensajes_de_correo_automatizados
excerpt: "Cómo realizar el seguimiento y la gestión de los emails automatizados enviados desde un alojamiento web de OVHcloud"
section: Diagnóstico
order: 01
---

**Última actualización: 12/10/2022**

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

## Objetivo

Los emails automatizados son mensajes enviados a través de scripts. Generalmente usando la función "mail()" de PHP. Se utilizan, por ejemplo, para el formulario de contacto de su sitio web y permiten a sus visitas enviarle mensajes.

> [!primary]
>
> Esta guía se refiere principalmente a los mensajes de correo enviados desde scripts situados en su [alojamiento web de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/) mediante la función "mail()" de PHP.
>
> Si quiere gestionar las direcciones de correo electrónico incluidas en su MX Plan o en su plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external}, consulte nuestra documentación sobre los [MX Plan](https://docs.ovh.com/es/emails/).
>

> [!success]
>
> Aunque recomendamos encarecidamente utilizar la función "mail()" de PHP, también puede enviar mensajes desde su alojamiento compartido pasando por un script que utiliza el [protocolo SMTP (Simple Mail Transfer Protocol)](#SMTP).
>

**Descubra cómo realizar el seguimiento y gestión de los mensajes de correo automatizados enviados desde su alojamiento web de OVHcloud.**

## Requisitos

- Tener contratado un plan de [hosting de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/){.external}.
- Estar conectado a su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}.

## Procedimiento

El seguimiento y la gestión del correo automatizado de su alojamiento web de OVHcloud se realizan desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es){.external}. Una vez que se haya conectado, acceda al apartado `Web cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Más`{.action} y haga clic en `Scripts de correo electrónico`{.action}.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

Se abrirá una página en la que podrá consultar y gestionar los mensajes de correo automatizados enviados desde su [alojamiento web de OVHcloud](https://www.ovhcloud.com/es-es/web-hosting/).

### Presentación del apartado "Scripts de correo electrónico"

![hosting](images/Interface.png){.thumbnail}

La página muestra varios datos que le permiten visualizar la actividad del envío de mensajes de correo automatizados generados desde sus scripts:

- **Estado del servicio**: estado actual del servicio que realiza el envío de mensajes de correo automatizados de su alojamiento web:
    - Si es verde (*"Activado"* o *"Force"*), significa que los envíos están operativos. 
    - Si es rojo (*"Desactivado"*, *"Bounce"* o *"SPAM"*), los envíos ya no se efectúan. <br>

    Según el estado, la gestión de los envíos será diferente.

- **Informe de errores a**: recibirá la etiqueta en la dirección de correo electrónico que usted elija. Establezca esta opción utilizando el botón `Cambiar el destinatario`{.action}. en el que se indican los mensajes de correo enviados desde el alojamiento web que han vuelto a OVHcloud. El botón `Mensajes en error`{.action} también permite consultar estos informes en cualquier momento a la derecha de la página `Scripts de correo electrónico`{.action}.
- **Total de mensajes enviados**: número total de mensajes de correo automatizados enviados desde la creación del alojamiento web de OVHcloud.
- **Emails enviados hoy**: número total de mensajes de correo automatizados enviados hoy.
- **Total de mensajes en error**: número total de mensajes de correo automatizados enviados desde la creación del alojamiento web que han vuelto a OVHcloud.
- **Histórico de mensajes enviados**: gráfico que muestra el historial de mensajes enviados desde el alojamiento web en los días anteriores.

A la derecha, varios botones permiten gestionar el envío de mensajes de correo automatizados desde el alojamiento web. En función del estado del servicio, algunas opciones pueden no estar disponibles.

- **Bloquear el envío** : bloquea la distribución de los envíos de mensajes de correo automatizados de su alojamiento web. Los emails generados por sus scripts después del bloqueo no se enviarán, sino que se conservarán en una cola de espera durante un máximo de 72 horas.
- **Desbloquear el envío**: desbloquea el envío de los emails automatizados de su alojamiento web. Los mensajes de correo presentes en la cola de espera también se reenviarán.
- **Purgar el correo**: borra los emails que haya en la cola de espera y desbloquea el envío de emails.

Para realizar la acción deseada, haga clic en el botón correspondiente y seleccione `Aceptar`{.action}. En algunos casos, la acción deseada puede tardar varias decenas de minutos en ser plenamente efectiva.

> [!primary]
>
Para evitar un uso no deseado de los mensajes de correo automatizados de su alojamiento web, le recomendamos encarecidamente que establezca un sistema de seguridad, como un "captcha", en los formularios de su sitio web que envíen mensajes de correo electrónico (por ejemplo, un formulario de contacto).
>

Si el estado del servicio permite el envío de mensajes de correo electrónico generados desde sus scripts (*"Activado"* o *"Fuerza"*), le recomendamos que realice las siguientes acciones:

- **Comprobar los scripts de envío**: los scripts no pueden enviar mensajes de correo electrónico debido a un error de sintaxis. Compruebe el contenido de sus scripts, corríjalo si es necesario y vuelva a intentarlo.

- **probar el envío de un email a través de un script de prueba** : cree un script de prueba que envíe un mensaje de correo electrónico a su dirección personal utilizando el siguiente código:

```bash
<?php
$to = "RecipientEmail@adress.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

En el caso de los `$headers`, introduzca dos veces la misma dirección de correo electrónico de emisión.

Si recibe el mensaje correctamente *The email has been sent successfully!* en la dirección de correo electrónico que ha definido en la línea `$to`, significa que los scripts que realizan el envío tienen errores.

- **Asegúrese de que sus envíos no utilicen servidores SMTP** : no especifique ningún servidor SMTP en los parámetros de sus scripts cuando use la función "mail()" de PHP. Si dispone de una interfaz para administrar el envío de mensajes de correo desde su sitio web, deberá modificar esta configuración en la configuración de este último.

- **Compruebe el tamaño total de su email**: El mensaje de correo electrónico enviado no debe superar el tamaño total de **10 MB** (encapsulación y cabecera incluidos). El contenido del mensaje de correo electrónico no deberá exceder de **7/8 MB**.

### Gestionar los estados "Desactivado", "Bounce" y "SPAM"

#### El estado "Desactivado"

Este estado se produce cuando:

- se han enviado demasiados mensajes de correo muy rápidamente.
- se han devuelto demasiados mensajes de correo.
- usted mismo ha desactivado la funcionalidad desde su [área de cliente de OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).

Para desbloquear la situación, acceda a la sección `Web cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente en la lista. A continuación, abra la pestaña `Más`{.action} y haga clic en `Scripts de correo electrónico`{.action}.

Haga clic en `Desbloquear el envío`{.action} y espere unos minutos a que vuelva a activar el servicio de envío.

#### El estado "Bounce"

Este estado se produce cuando un cierto porcentaje de los mensajes de correo enviados automáticamente se ha vuelto a error.

Para desbloquear la situación, acceda a la sección `Web cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente en la lista. A continuación, abra la pestaña `Más`{.action} y haga clic en `Scripts de correo electrónico`{.action}.

Existen dos opciones:

- Si hace clic en `Desbloquear el envío`{.action}, el estado del servicio pasará a *"Force"*. El ratio **e-mails devueltos a error / número total de mensajes enviados** autorizado antes de un bloqueo se duplicará. El envío volverá a estar operativo unos minutos después del desbloqueo.
- Si hace clic en `Purgar los mensajes de correo`{.action}, se borrarán todos los mensajes de la cola de espera y el estado del servicio pasará a *"Activado"* sin duplicar la relación.

#### El estado "SPAM"

Este estado se produce cuando se han enviado mensajes considerados de spam desde el alojamiento.

Por lo general, el bloqueo se acompaña por el envío de un email titulado **"Abuso con su alojamiento dominio.tld"** generado automáticamente por nuestros robots de seguridad:

![hosting](images/AbuseMail.png){.thumbnail}

Existen tres posibles situaciones en relación con esta situación:

- **Caso n°1: Explotación de un formulario de contacto por un robot**:

Para corregir esta situación, debe proteger todos los scripts que puedan enviar correo desde su alojamiento utilizando un sistema de tipo "Captcha".

Acceda a la sección `Web cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente en la lista. A continuación, abra la pestaña `Más`{.action} y haga clic en `Scripts de correo electrónico`{.action}.

A continuación, haga clic en `Purgar los mensajes de correo`{.action}. Esto borrará todos los mensajes de la cola de espera y el estado del servicio pasará a *"Activado"*.

En este caso, es obligatorio realizar una purga para eliminar los spam pendientes de envío.

- **Caso n°2: inyección de archivos maliciosos en su alojamiento** :

Para corregir esta situación, debe realizar al menos las siguientes acciones:

- Analice los [logs de su alojamiento](https://docs.ovh.com/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/) para identificar los fallos de seguridad y los archivos infectados.
- Elimine o corrija los archivos o módulos maliciosos.
- Para los CMS (WordPress, Joomla, PrestaShop, Drupal...), actualice el CMS, los plugin y el tema asociados.
- Proteja sus formularios de contacto con un captcha.

Si utiliza un CMS, priorice el uso de plugin/tema(s) "oficial(s)".
Actualice el CMS, los plugins y el tema asociados con la mayor frecuencia posible para evitar que esto vuelva a suceder.

Una vez que haya contratado un plan de hosting seguro, acceda a la sección `Web cloud`{.action}, haga clic en `Alojamientos`{.action} y seleccione el alojamiento correspondiente. A continuación, abra la pestaña `Más`{.action} y haga clic en `Scripts de correo electrónico`{.action}.

A continuación, haga clic en `Purgar los mensajes de correo`{.action}. Esto borrará todos los mensajes de la cola de espera y el estado del servicio pasará a *"Activado"*.

En este caso, es obligatorio realizar una purga para eliminar los spam pendientes de envío.

- **Caso n°3: Envío de correos legítimos considerados spam** :

Si el origen de los mensajes de correo electrónico ha provocado el bloqueo, a continuación ofrecemos algunos ejemplos de uso recomendable **para evitar** cuando envíe un mensaje de correo electrónico (de forma que no se considere demasiado "fácil" como spam):

- 3 palabras o más en mayúsculas en el asunto/asunto del mensaje de correo electrónico.
- No hay asunto/texto que se indique en el mensaje de correo electrónico.
- El mensaje de correo solo contiene una imagen de más de 1 MB y unas pocas palabras.
- El asunto del mensaje de correo electrónico empieza por: Hi, FREE, BUY, BUYING,....
- El mensaje de correo electrónico contiene más del 70% de espacio en blanco (abuso de la tecla "ESPACE" o "ENTRADA" del teclado).
- El tipo de letra utilizado para escribir el correo es extremadamente grande.
- El color de escritura y el color de fondo son los mismos para escribir el correo electrónico.
- La dirección IP pública (IP de su punto de acceso a internet, por ejemplo) está listada en organismos de reputación.
- La cabecera del mensaje enviado no cumple con los RFC de correo (estándares o estándares de correo).
- Los enlaces del mensaje de correo electrónico son incorrectos.
- Una URL en el correo no es segura (por ejemplo: declarada en ` https://` mientras que la URL sólo existe en `http://`)
- El mensaje de correo electrónico incluye términos pornográficos o que se acercan a él.
- El email contiene un ejecutable (EXE, BAT, PIF, XML, XLSX o documentos con "macros"), aunque esté "zippé".

Si, a pesar de ello, el estado del servicio vuelve a estar*"SPAM"*, responda al email automático que haya recibido indicando que ha hecho lo necesario.

Nuestro servicio antispam analizará la situación y nuestro soporte volverá a ofrecerle una explicación del procedimiento de desbloqueo.

## Envío de emails mediante un script "SMTP" <a name="SMTP"></a>

> [!warning]
>
La configuración, la gestión y la responsabilidad de los servicios que OVHcloud pone a su disposición recaen sobre usted. Por lo tanto, usted deberá asegurarse de que estos funcionan correctamente.
> 
> Ponemos a su disposición la parte que viene a continuación para acompañarle lo mejor posible en tareas habituales. No obstante, si tiene alguna duda, le recomendamos que contacte con un [proveedor especializado](https://partner.ovhcloud.com/es-es/). Nosotros no podremos asistirle. Más información en la sección ["Más información"](#go-further) de esta guía.
>

Aunque le recomendamos encarecidamente que prefiera utilizar la función "mail()" de PHP, los alojamientos compartidos permiten enviar emails pasando por un script que utiliza el protocolo SMTP (Simple Mail Transfer Protocol). El tamaño total del mensaje de correo electrónico no podrá ser superior a **10 MB* (es decir, **7/8 MB sin encapsular**).

> [!warning]
> 
> Los emails enviados con un script que utilicen una configuración SMTP no podrán ser gestionados y seguidos desde su [área de cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.es/&ovhSubsidiary=es).
> 

Para ello, puede utilizar el siguiente script sustituyendo únicamente los valores `Host`, `Username` y `Password` por sus propios parámetros SMTP:

```bash
$mail->Host = "your.smtp.server";
$mail->SMTPAuth = true; 
$mail->SMTPSecure = "ssl";
$mail->Port = 465; 
$mail->Username = "e-mail@adress.tld"; 
$mail->Password = "YourEmailPassword"; 
```

> [!primary]
>
> Si utiliza una dirección de correo electrónico de OVHcloud y únicamente en este caso, puede utilizar también el `SMTPSecure` *"starttls"* o *"tls"* con el `Port` **587**. No obstante, debe darse prioridad al `SMTPSecure` *"ssl"* con el `Port` **465**.
> 

## Más información <a name="go-further"></a>

[Consultar los logs de su alojamiento](https://docs.ovh.com/es/hosting/web_hosting_consultar_las_estadisticas_y_logs_de_un_sitio_web/)

[Corregir la página "403 Forbidden" que aparece en su sitio web](https://docs.ovh.com/es/hosting/diagnostico-403-forbidden/)

[Restaurar el espacio de almacenamiento FTP de su alojamiento](https://docs.ovh.com/es/hosting/restaurar-espacio-almacenamiento-alojamiento-web/)

Para servicios especializados (posicionamiento, desarrollo, etc.), contacte con [partners de OVHcloud](https://partner.ovhcloud.com/es-es/).

Si quiere disfrutar de ayuda para utilizar y configurar sus soluciones de OVHcloud, puede consultar nuestras distintas soluciones [pestañas de soporte](https://www.ovhcloud.com/es-es/support-levels/).

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.