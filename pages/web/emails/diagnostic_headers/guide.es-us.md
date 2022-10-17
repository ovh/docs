---
title: Obtener la cabecera de un email
slug: obtener-los-cabeceras-emails
legacy_guide_number: 1365
excerpt: Cómo recuperar una cabecera de correo electrónico en su cliente de correo
section: Diagnóstico
order: 03
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón "Contribuir" de esta página.
>

**Última actualización: 19/11/2021**

## Objetivo

Una cabecera de correo permite trazar la ruta de dicho mensaje en la red desde el remitente al destinatario.<br>
Que permite, entre otras cosas, identificar un correo electrónico malicioso o detectar una lentitud de la recepción.

Cada mensaje de correo electrónico recibido tiene una cabecera (*cabecera*) que no aparece de forma predeterminada al consultar el mensaje de correo. No obstante, puede cargarlo en su cliente de correo o en su webmail.

También puede descargar el mensaje completo como archivo `.eml`. Es posible que se le pida que analice un mensaje de correo electrónico malicioso que haya recibido.<br>
Para obtener un archivo `.eml`, consulte nuestra sección [Webmail](#webmail).

**Esta guía explica cómo cargar una cabecera de correo en un cliente de correo.**

## Requisitos

- Tener una dirección de correo electrónico en una de nuestras [soluciones de correo electrónico de OVHcloud](https://www.ovhcloud.com/es/emails/) o en una solución externa.
- Tener acceso a la dirección de correo electrónico a través de un webmail o un cliente de correo.

## Procedimiento

### Entender el contenido de una cabecera

El encabezamiento consta de varios elementos que indican la ruta del correo electrónico. Está compuesto por elementos jerárquicos de forma anecronológica, desde los más recientes hasta los más antiguos, e información adicional.<br>
A continuación se muestra una lista no exhaustiva de los elementos que pueden componer una cabecera, así como su significado. 

- El campo `Received` aparece en la cabecera cada vez que pasa el email a un servidor de envío (SMTP). Por lo general, el nombre del host del servidor aparece con la dirección IP y la fecha. Los campos `Received` están clasificados desde el paso más reciente hasta el paso más antiguo de un servidor:
<pre class="console"><code>
Received: from mxplan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Aquí el mensaje de correo electrónico se transmitió desde el servidor mxplan7.mail.ovh.net al servidor mo3005.mail-out.ovh.net el 30 de junio de 2021 a las 13:12:40 (zona horaria UTC)*

- El campo `Return-Path` corresponde a la dirección de retorno cuando el mensaje no ha podido enviarse. La dirección de vuelta es generalmente la que ha realizado el envío.
<pre class="console"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- El campo `From` designa la dirección del remitente del email y su nombre de visualización.
<pre class="console"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- El campo `To` designa la dirección del destinatario del mensaje de correo electrónico y su nombre de visualización.
<pre class="console"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- El campo `Subject` designa el objeto del mensaje de correo electrónico.
<pre class="console"><code>
Subject: Hello my friend
</code></pre>

- El campo `Message-ID` designa el identificador único del mensaje y termina por el nombre del servidor de envío (después de "@"). 
<pre class="console"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- El campo `Received-SPF` muestra el resultado del control [SPF](https://docs.ovh.com/us/es/domains/web_hosting_el_registro_spf/) realizado sobre el dominio del remitente. El argumento `client-ip` permite, entre otras cosas, encontrar la dirección IP del servidor que ha utilizado para enviar el mensaje de correo. 
<pre class="console"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh 
</code></pre>

- Los campos `X-` son campos personalizados y se utilizan como complemento de los campos estándar. Estos servicios se implementan en los servidores en los que transitan los mensajes de correo.
<pre class="console"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE: 
</code></pre>>

### Obtener una cabecera en un cliente de correo

#### Microsoft Outlook 

Para leer el encabezado, abra el mensaje de correo electrónico que desee en una ventana separada haciendo doble clic sobre el encabezado de la lista.

En la nueva ventana, haga clic en `Archivo`{.action} en la parte superior derecha.

![correo electrónico](images/outlook01.png){.thumbnail}

A continuación, seleccione `Información`{.action} a la izquierda y haga clic en `Propiedades`{.action}.

![correo electrónico](images/outlook02.png){.thumbnail}

La cabecera completa del mensaje aparece en el recuadro inferior. Puede seleccionar todo el texto y copiarlo a un archivo.

![correo electrónico](images/outlook03.png){.thumbnail}

#### Mozilla Thunderbird

Para ver la cabecera, seleccione el mensaje de correo electrónico que desee y, a continuación, pulse las teclas `Ctrl` + `U`.

![correo electrónico](images/thunderbird01.png){.thumbnail}

La cabecera completa del email aparece en una ventana separada. Puede seleccionar todo el texto y copiarlo en un archivo.

#### Mail de macOS

Para ver la cabecera, seleccione el mensaje de correo electrónico que desee, haga clic en `Presentación`{.action} en el menú superior, seleccione `Mensaje`{.action} y haga clic en `Todos los encabezados`{.action}.

![correo electrónico](images/mailmac01.png){.thumbnail}

La cabecera completa del correo se muestra en una ventana separada. Puede seleccionar todo el texto y copiarlo a un archivo.

### Obtener una cabecera en un webmail <a name="webmail"></a>

#### Outlook Web Application (OWA) <a name="owa"></a>

##### **Obtener la cabecera**

Seleccione el email en el que quiera ver la cabecera. Haga clic **en la flecha** a la derecha de `Responder a todos`{.action} y luego en `Mostrar detalles del mensaje`{.action}. Se abrirá una nueva ventana con la cabecera completa del email, lo que le permitirá descargarlo.

![correo electrónico](images/owa01.png){.thumbnail}

Vea también nuestro tutorial en vídeo:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/2jia2s1_oIw?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Obtener el archivo .eml**

Para descargar el archivo `.eml`, haga clic en `(+) Nuevo`{.action} para crear un nuevo email. 

Seleccione el correo que desea extraer y arrástrelo al contenido del nuevo mensaje. 

Haga clic en la flecha que apunta hacia abajo al adjunto que acaba de generar y seleccione `Descargar`{.action} para guardar el archivo en su máquina.

![correo electrónico](images/owa02.gif){.thumbnail}

### Obtener una cabecera en otro cliente de correo

#### Gmail

Para consultar la cabecera, seleccione el mensaje de correo electrónico correspondiente y haga clic en los tres puntos situados al final de la línea correspondiente y seleccione `Mostrar origen del mensaje`{.action}. Se abrirá una nueva ventana con la cabecera completa del email, que también le permitirá descargarlo en formato `.eml`.

![correo electrónico](images/gmail01.png){.thumbnail}

#### Outlook.com

Para ver la cabecera en la interfaz webmail <Outlook.com>, consulte la sección [Outlook Web Application](#owa) de esta guía.

## Más información

[FAQ E-mail](https://docs.ovh.com/us/es/emails/correo-electronico-faq/)

Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.
