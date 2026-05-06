---
title: "Obtener la cabecera y el archivo .eml de un e-mail"
excerpt: "Descubra cómo obtener la cabecera de un e-mail o extraer un archivo .eml desde su cliente de correo, webmail o aplicación externa"
updated: 2026-03-06
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Objetivo

La cabecera de un correo electrónico permite trazar el camino seguido por dicho mensaje en la red, desde el remitente hasta el destinatario.<br>
Permite identificar un e-mail malicioso o detectar una lentitud en la recepción.

Cada correo electrónico recibido tiene una cabecera (*header*) que no se muestra por defecto cuando consulta su correo. No obstante, puede recuperarla desde su cliente de correo o su webmail.

También puede extraer el correo electrónico completo como archivo `.eml`. Este archivo puede serle solicitado para analizar un e-mail malicioso que haya recibido.<br>
Para recuperar un archivo `.eml`, consulte la sección [webmail](#webmail).

**Descubra cómo obtener la cabecera de un e-mail y extraer un archivo .eml desde su cliente de correo.**

## Requisitos

- Disponer de una dirección de correo electrónico en una de nuestras [soluciones de correo electrónico de OVHcloud](/links/web/emails) o en una solución externa.
- Tener acceso a la dirección de correo electrónico a través de su webmail o un cliente de correo.

## Procedimiento

### Comprender el contenido de una cabecera

La cabecera está compuesta por varios elementos que indican el camino del correo electrónico, ordenados de forma anticronológica, junto con información adicional.<br>
A continuación se muestra una lista no exhaustiva de los elementos que pueden componer una cabecera y su significado.

- El campo `Received` está presente en la cabecera en cada paso del correo electrónico por un servidor de envío (SMTP). Generalmente contiene el nombre de host del servidor con su dirección IP y la fecha. Los campos `Received` se ordenan del paso más reciente al más antiguo en un servidor:
<pre class="bgwhite"><code>
Received: from MX Plan7.mail.ovh.net (unknown [10.109.143.250])
	by mo3005.mail-out.ovh.net (Postfix) with ESMTPS id 448F4140309
	for &lt;john@mydomain.ovh&gt; ;Wed, 30 Jun 2021 13:12:40 +0000 (UTC)
</code></pre>
  *Aquí el correo electrónico fue transmitido del servidor MX Plan7.mail.ovh.net al servidor mo3005.mail-out.ovh.net el 30 de junio de 2021 a las 13:12:40 (zona horaria UTC)*

- El campo `Return-Path` corresponde a la dirección de retorno cuando el envío del mensaje ha fallado. La dirección de retorno es generalmente la del remitente.
<pre class="bgwhite"><code>
Return-Path: &lt;john@mydomain.ovh&gt;
</code></pre>

- El campo `From` indica la dirección del remitente del correo electrónico y su nombre para mostrar.
<pre class="bgwhite"><code>
From: John &lt;john@mydomain.ovh&gt;
</code></pre>

- El campo `To` indica la dirección del destinatario del correo electrónico y su nombre para mostrar.
<pre class="bgwhite"><code>
To: Robert &lt;robert@hisdomain.ovh&gt;
</code></pre>

- El campo `Subject` indica el asunto del correo electrónico.
<pre class="bgwhite"><code>
Subject: Hello my friend
</code></pre>

- El campo `Message-ID` indica el identificador único del correo electrónico y termina con el nombre del servidor de envío (después de la "@").
<pre class="bgwhite"><code>
Message-ID: &lt;Dc55+mK3j7hdZkf5_r-ff=fjq380ozc2h5@mailserver.domain.ovh&gt;
</code></pre>

- El campo `Received-SPF` muestra el resultado del control [SPF](/pages/web_cloud/domains/dns_zone_spf) efectuado sobre el dominio del remitente. El argumento `client-ip` permite obtener la dirección IP del servidor que envió el correo electrónico.
<pre class="bgwhite"><code>
Received-SPF: Pass (mailfrom) identity=mailfrom; client-ip=000.11.222.33; helo=mail-smtp-001.domain.ovh; envelope-from=john@mydomain.ovh; receiver=robert@hisdomain.ovh
</code></pre>

- Los campos `X-` son campos personalizados que complementan los campos estándar. Son implementados por los servidores a través de los cuales transitan los correos electrónicos.
<pre class="bgwhite"><code>
X-OVH-Remote: 000.11.222.33 (mail-smtp-001.domain.ovh)
X-Ovh-Tracer-Id: 1234567891011121314
X-VR-SPAMSTATE: OK
X-VR-SPAMSCORE: 0
X-VR-SPAMCAUSE:
</code></pre>

### Obtener una cabecera en un cliente de correo

#### Microsoft Outlook

##### **Obtener la cabecera**

Existen dos versiones de Outlook para Windows: **Outlook clásico** y el **Nuevo Outlook**. Para identificar su versión, escriba "Outlook" en la barra de búsqueda de Windows. Si aparece la mención "(clásico)", está usando Outlook clásico. En caso contrario, se trata del Nuevo Outlook.

![Outlook Windows - identificar la versión](images/outlook-windows-identify01.png){.thumbnail .h-500}

**Outlook clásico:**

1. Haga doble clic en el correo electrónico para abrirlo en una ventana separada.
2. En la nueva ventana, haga clic en `Archivo`{.action} en la parte superior izquierda.
3. Seleccione `Información`{.action} a la izquierda y haga clic en `Propiedades`{.action}.
4. La cabecera completa del correo electrónico aparece en el recuadro inferior. Seleccione todo el texto y cópielo en un archivo.

![Cabecera completa en Outlook](images/classic-outlook-01.png){.thumbnail}

**Nuevo Outlook:**

1. Abra el correo electrónico de su elección.
2. Haga **clic derecho** en el correo electrónico.
3. Seleccione `Ver`{.action} y luego `Ver detalles del mensaje`{.action}.
4. La cabecera completa del correo electrónico aparece en el panel de detalles del mensaje. Seleccione todo el texto y cópielo en un archivo.

![Cabecera completa en Outlook](images/new-outlook-01.png){.thumbnail}

##### **Obtener el archivo .eml**

**Outlook clásico:**

1. Seleccione el correo electrónico en su bandeja de entrada (no lo abra).
2. Haga clic en `Archivo`{.action} en la barra de menú.
3. Haga clic en `Guardar como`{.action}.
4. En el menú desplegable "Tipo de archivo", seleccione **Formato de mensaje de Outlook - Unicode (.msg)**. Elija una ubicación en su equipo (por ejemplo, el Escritorio) y haga clic en `Guardar`{.action}.

También puede **arrastrar y soltar** el correo electrónico desde su bandeja de entrada directamente al Escritorio. Esto crea un archivo `.msg` que puede adjuntar a su informe.

![Guardar msg en Outlook](images/classic-outlook-02.png){.thumbnail}

**Nuevo Outlook:**

1. En la lista de mensajes, haga **clic derecho** en el correo electrónico.
2. Seleccione `Guardar como`{.action} y luego `Guardar como archivo EML`{.action}.
3. Elija una ubicación en su equipo y haga clic en `Guardar`{.action}.

![Guardar un archivo EML en el Nuevo Outlook](images/new-outlook-02.png){.thumbnail}

#### Mozilla Thunderbird

##### **Obtener la cabecera**

1. Seleccione el correo electrónico de su elección.
2. Pulse simultáneamente las teclas `Ctrl` \+ `U` (`Cmd` \+ `U` en macOS).
3. La cabecera completa del correo electrónico aparece en una ventana separada. Seleccione todo el texto y cópielo en un archivo.

![Cabecera completa en Thunderbird](images/thunderbird-01.png){.thumbnail}

##### **Obtener el archivo .eml**

1. Seleccione el correo electrónico de su elección.
2. Pulse simultáneamente las teclas `Ctrl` \+ `S` (`Cmd` \+ `S` en macOS).
3. El archivo se guarda por defecto en formato `.eml`.

#### Mail de macOS

##### **Obtener la cabecera**

1. Seleccione el correo electrónico de su elección.
2. Pulse simultáneamente las teclas `Cmd` \+ `Shift` \+ `H`.
3. La cabecera completa del correo electrónico aparece. Seleccione el texto en gris y cópielo en un archivo.

![Cabecera completa en Mail de macOS](images/mailmacos-01.png){.thumbnail}

##### **Obtener el archivo .eml**

1. Seleccione el correo electrónico de su elección.
2. Pulse simultáneamente las teclas `Cmd` \+ `S`. El archivo `.eml` se crea automáticamente. Seleccione el formato `Código fuente del mensaje`.
3. Elija una ubicación en su equipo y haga clic en `Guardar`{.action}.

![Guardar un eml desde Mail de macOS](images/mailmacos-02.png){.thumbnail}

### Obtener una cabecera en un webmail <a name="webmail"></a>

#### Outlook Web App (OWA) <a name="owa"></a>

##### **Obtener la cabecera**

1. Seleccione el correo electrónico cuya cabecera desee ver.
2. Haga clic **en la flecha** a la derecha de `Responder a todos`{.action} y luego en `Ver detalles del mensaje`{.action}.
3. Se abrirá una nueva ventana con la cabecera completa del correo electrónico, lo que le permitirá descargarlo.

![Detalles del mensaje en OWA](images/owa01.png){.thumbnail}

Consulte también nuestro tutorial en vídeo:

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

##### **Obtener el archivo .eml**

1. Haga clic en `(+) Nuevo`{.action} para crear un nuevo correo electrónico.
2. Seleccione el correo electrónico que desee extraer y arrástrelo al contenido del nuevo mensaje.
3. Haga clic en la flecha hacia abajo junto al archivo adjunto generado y luego en `Descargar`{.action} para guardar el archivo en su equipo.

![Extraer un archivo eml desde OWA](images/owa02.gif){.thumbnail}

### Obtener una cabecera en otro cliente de correo

#### Gmail

##### **Obtener la cabecera**

1. Seleccione el correo electrónico en cuestión.
2. Haga clic en los 3 puntos verticales a la derecha y en `Mostrar mensaje original`{.action}.
3. Se abrirá una nueva ventana con la cabecera completa del correo electrónico.

![Ver el origen del mensaje en Gmail](images/gmail01.png){.thumbnail}

##### **Obtener el archivo .eml**

1. Seleccione el correo electrónico en cuestión.
2. Haga clic en los 3 puntos verticales a la derecha y seleccione `Descargar mensaje`{.action}.

#### Outlook.com

Para obtener la cabecera o extraer el archivo `.eml` desde la interfaz webmail &#60;Outlook.com&#62;, consulte la sección [Outlook Web App](#owa) de esta guía.

## Más información

[FAQ en e-mail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Interactúe con nuestra [comunidad de usuarios](/links/community).
