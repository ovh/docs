---
title: OVHcloud AntiSpam - Buenas prácticas y desbloqueo de una dirección IP
excerpt: Descubra nuestras buenas prácticas antispam y cómo desbloquear una dirección IP bloqueada para spam.
updated: 2026-01-06
---

## Objetivo

Para cada dirección IP disponible en los productos y servicios de OVHcloud, como proveedor de acceso a internet, la registramos y la reservamos en organizaciones como [RIPE](https://www.ripe.net/) o [ARIN](https://www.arin.net/). En este caso, nos parece el contacto *abuse* de la propiedad intelectual en caso de litigio en la base de datos *WHOIS*.

Si una dirección IP está asociada a organizaciones como Spamhaus, SpamCop, etc. que luchan contra el spam, los sitios maliciosos y el phishing, está en juego la reputación de toda la red de OVHcloud.

Por lo tanto, es importante que OVHcloud se ocupe de la reputación, la calidad y la seguridad de la red, que constituye también una parte importante del servicio.

### ¿Cómo funciona el sistema de protección?

Nuestro sistema está basado en la tecnología antispam de Vade Secure.

Una vez que una dirección IP haya sido bloqueada por spam, recibirá por correo electrónico la información que se indica a continuación:

> 
> Estimado/a cliente:
>
> Nuestro sistema de protección antispam ha detectado un envío de spam desde una de sus IP: 122.122.122.122
>
> Para garantizar la seguridad de nuestra red, hemos bloqueado el tráfico saliente de su servidor hacia el puerto 25.
> Para que pueda realizar las comprobaciones oportunas, le ofrecemos algunos ejemplos del correo bloqueado:
>
> Destination IP: 188.95.235.33 - Message-ID: d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP: 188.95.235.33 - Message-ID: fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID: zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

## Procedimiento

**¿Qué hacer cuando se reciba el email de alerta?**

El proceso consiste en identificar el problema, resolverlo y, a continuación, desbloquear su IP.

### Identificar y resolver el problema

**Antes de desbloquear una dirección IP, asegúrese de haber tomado las siguientes medidas:**

- Deje de enviar mensajes de correo electrónico (p. ej.: detener todos los programas de correo como qmail, Postfix, Sendmail, etc.).
- Compruebe la cola de espera de los emails (por ejemplo, qmHandle para qmail, postqueue -p para Postfix) y vacídela.
- Analice sus logs gracias al **Message-ID** presente en la alerta de bloqueo.
- Si envía spam o mensajes de correo ilegítimos, le recomendamos encarecidamente que resuelva el problema **antes** de desbloquear la dirección IP. Consulte esta guía para conocer las [mejores prácticas (EN)](/pages/bare_metal_cloud/dedicated_servers/antispam_best_practices#bestpractices) al enviar correos electrónicos. 

Una vez resuelto el problema, puede desbloquear la dirección IP realizando las siguientes acciones.

> [!alert]
> 
> En ningún caso desbloquee la dirección IP antes de haber suspendido el envío de los emails desde su servidor y de haber vaciado su cola de emails. En caso contrario, será inmediatamente bloqueado una segunda vez, por un período de tiempo más largo. 
>

### Desbloquear la dirección IP

#### Desbloquear la dirección IP desde el área de cliente

Conéctese al [área de cliente de OVHcloud](/links/manager), abra el menú `Network`{.action} en la columna izquierda y haga clic en `Direcciones IP públicas`{.action}.

Puede utilizar el menú desplegable bajo **Mis direcciones IP públicas y servicios asociados** para filtrar sus servicios por categoría, o escribir directamente la dirección IP deseada en la barra de búsqueda.

Si tiene una alerta sobre una de sus direcciónes IP, encontrará una insignia de estado roja en la columna **Alerta IP**.

![Alerta anti spam](images/blockedIP_new.png){.thumbnail}

Haga clic en el botón `⁝`{.action} junto a la IP o al servicio correspondiente y seleccione `Desbloqueo de correo antispam`{.action}.

![antispam](images/antispam_new.png){.thumbnail}

En la ventana que aparece, haga clic en `Desbloquear la IP`{.action} en la parte inferior y confirme.

![Desbloquear IP](images/unblockip_new.png){.thumbnail}

La IP se está desbloqueando. La operación puede tardar varios minutos.

Una vez realizado el tratamiento, la IP se desbloqueará.

#### Desbloquear la dirección IP desde la API de OVHcloud

Conéctese a la interfaz de la [API de OVHcloud](/links/api) y siga los pasos que se indican a continuación. Para más información sobre el uso de las API de OVHcloud, consulte nuestra guía [Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps).

Descargue en primer lugar la lista de direcciones IP de cada servicio de OVHcloud (Hosted Private Cloud, VPS, Public Cloud, servidor dedicado):

> [!api]
>
> @api {v1} /ip GET /ip
>

**type**: Introduzca el tipo de IP (Dedicated, Dedicated Cloud, VPS, vRack, PCI, etc.).

A continuación le ofrecemos un ejemplo:

```bash
"2001:41d0:67:d200::/56",
"2001:41d0:68:a00::/56",
"2001:41d0:68:f000::/56",
"2001:41d0:117:db00::/56",
"122.122.122.121/28",
"145.56.222.96/28",
"188.81.49.30/28",
```

Busque las IP en un estado particular gracias a la siguiente llamada. Si ya conoce la dirección IP bloqueada, puede pasar a la siguiente [etapa](#unblockip):

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam
>

**ip**: especifique el bloque IP obtenido en el paso anterior con la máscara de red. Por ejemplo, 122.122.122.121/28.<br>
**state**: especifique el estado que busca.

A continuación le ofrecemos un ejemplo de resultado (en este caso, ha seleccionado el bloque 122.122.122.121/28):

```bash
"122.122.122.122" 
```

Puede obtener información sobre el bloqueo con la siguiente llamada, o bien pasar a la [siguiente](#unblockip) etapa.

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}
>

**ip**: especifique el bloque IP obtenido en el paso anterior con la máscara de red.<br>
**ipSpamming**: introduzca la IP obtenida anteriormente en el estado "blockedForSpam", por ejemplo.

A continuación le ofrecemos un ejemplo de resultado (en este caso, se han seleccionado el bloque 122.122.122.121/28 y la IP 122.122.122.122):

```bash
time: 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "blockedForSpam" 
```

Entonces:

```bash
- The IP is blocked for 1 hour (or 3600 seconds).
- It was blocked on 29/08/2022 at 5:42 p.m.
- Its current state is blocked.
```

Si desea obtener las estadísticas sobre lo que se ha detectado, utilice la siguiente llamada a la API, o pase a la siguiente [etapa](#unblockip).

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}/stats
>

**ip**: especifique el bloque IP obtenido en el paso anterior con la máscara de red.<br>
**ipSpamming**: introduzca la IP obtenida anteriormente en el estado "blockedForSpam", por ejemplo.<br>
**from and to**: utilice el formato de fecha utilizado en la función anterior (YYYY-MM-DDTHH:MM+01:SS).

A continuación le ofrecemos un ejemplo:

```bash
{
"messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
"destinationIp": "188.95.235.33",
"date": 1385640992,
"spamscore": 410
}
```

##### **Desbloquear la IP** <a name="unblockip"></a>

> [!alert]
> ¡IMPORTANTE!
> No desbloquee la IP sin haber suspendido el envío de los emails desde su servidor y vaciado la cola de emails. En caso contrario, será inmediatamente bloqueado una segunda vez, por un período de tiempo más largo. 
>

Para desbloquear su dirección IP, utilice la siguiente llamada:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip**: especifique el bloque de direcciones IP obtenido en el paso anterior con la máscara de red.<br>
**ipSpamming**: especifique la dirección IP recuperada anteriormente, por ejemplo, en el estado "blockedForSpam".

A continuación le ofrecemos un ejemplo:

```bash
"message": "This IP address is still blocked for 129 seconds"
```

Y un resultado poco más de 129 segundos después:

```bash
time: 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "unblocking" 
```

La dirección IP se está desbloqueando. La operación puede tardar varios minutos.

### En caso de falsos positivos

En algunos casos, la alerta antispam puede ser un falso positivo. Si ha verificado y constatado que el **Message-ID** está asociado a un correo electrónico legítimo, debe asegurarse de que sus mensajes electrónicos sean compatibles con las [RFC](#rfc) y con las [buenas prácticas](#bestpractices) mencionadas a continuación.

#### RFC <a name="rfc"></a>

Las RFC (Request For Comments) son documentos destinados a describir aspectos técnicos de Internet. Estos documentos son producidos y publicados por la IETF (Internet Engineering Task Force), un grupo que produce y define esencialmente normas.
Encuentre más información en los siguientes enlaces: 
<br>
- [RFC](https://en.wikipedia.org/wiki/Request_for_Comments)<br>
- [IETF](https://www.ietf.org/)<br>
- [Internet Draft](https://en.wikipedia.org/wiki/Internet_Draft)

#### Buenas prácticas <a name="bestpractices"></a>

Las buenas prácticas son métodos recomendados que suelen basarse en los documentos RFC y que tienen como objetivo aconsejarle sobre la mejor manera de proceder. Se trata aquí de las reglas básicas que debe respetar para que sus correos electrónicos no sean considerados como spam.

**Volumen de envío**

Si el volumen de sus correos electrónicos salientes es muy importante, se recomienda:

- reservar un bloque de direcciones IP dedicado únicamente al uso de correos electrónicos.
- proporcionar una dirección *abuse* en este bloque para recibir quejas.
- configurar correctamente los [Reverses](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization#configurer-le-reverse-ip) en todas las direcciones IP. 

Esta última operación le permitirá aislar simultáneamente la IP y la reputación del dominio si envía correos electrónicos de diferentes dominios, recibir quejas y, por lo tanto, hacer lo necesario para ser desbloqueado por las diferentes organizaciones. El *reverse* también permite localizar más rápidamente un problema en un formulario que utiliza el dominio X o Y, ya que los correos electrónicos no se envían desde la misma IP y no tienen el mismo *reverse*.

**Contenido de su correo electrónico**

- Evite utilizar palabras clave de spam en sus correos electrónicos, como "comprar" o "última oportunidad". Evite mayúsculas innecesarias, asuntos impersonales, signos de exclamación y porcentajes de descuento.
- Piense en proporcionar un enlace de **deseo de baja** para las personas que no hayan solicitado recibir su correo electrónico o que consideren que es ilegítimo.
- Preste especial atención a que sus correos electrónicos contengan la dirección del remitente (o un alias), un asunto y un buen ratio de texto, imágenes y enlaces en el cuerpo del mensaje.
- El ratio texto/imagen y texto/enlace debe ser elevado. No sobrecargue el correo electrónico con enlaces hipertexto y evite el JavaScript.

**FBL (*Feedback Loop*) - Bucle de evaluación**

Este sistema permite hacer un seguimiento directo de los comentarios de ciertos proveedores de acceso a Internet, indicándole que sus usuarios han señalado su mensaje como ilegal y, por lo tanto, ha sido clasificado como spam. Esto le permitirá interactuar directamente con estos ISPs sobre su reputación. Aquí hay algunos FBL:

- [Yahoo & AOL Postmaster](https://senders.yahooinc.com/contact)
- [SpamCop](https://www.spamcop.net/)
- [Outlook & live.com](https://sendersupport.olc.protection.outlook.com/pm/)

**Autenticación**

Algunos servicios de autenticación le permiten proteger su reputación:

- **Sender-ID**: se trata de una tecnología de autenticación de correos electrónicos desarrollada por Microsoft que valida la autenticidad de su nombre de dominio verificando la dirección IP del remitente. Esta tecnología se basa en la norma IETF: [RFC4406](https://datatracker.ietf.org/doc/rfc4406/).
- **SPF**: *Sender Policy Framework* es un estándar de verificación del dominio del remitente. Se basa en la [RFC4408](https://datatracker.ietf.org/doc/rfc4408/) y consiste en añadir un campo SPF o TXT al DNS del dominio, que contiene la lista de las direcciones IP autorizadas a enviar correos electrónicos desde este dominio.
- **Reverse DNS o Reverse IP**: El *reverse* permite "traducir" una IP en un dominio. Esto permite encontrar el dominio asociado a la dirección IP.
- ****DKIM****: Esta norma se describe en la [RFC4871](https://datatracker.ietf.org/doc/html/rfc4871). AOL y Google (Gmail) funcionan sobre esta base. 

Para más información sobre los servicios anteriores, consulte nuestro tutorial "[Optimizar el envío de correos electrónicos](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization)".

#### Casos específicos de envío de correos electrónicos

- **Hacia un servidor Microsoft (Outlook, etc.)**

Microsoft utiliza una política de lista blanca. Esto significa que todo servidor se encuentra inicialmente en una lista negra. Se necesita un procedimiento específico para hacer validar su servidor de correo. Para más información, le invitamos a consultar la sección **Hacia un servidor de Microsoft (Outlook, etc.)** de nuestro tutorial "[Cómo evitar que sus correos electrónicos sean marcados como spam](/pages/bare_metal_cloud/dedicated_servers/mail_sending_optimization)".

- **Hacia un servidor Gmail**

La adición de registros específicos (por ejemplo, un registro DMARC) puede facilitar la recepción de los correos electrónicos si su destinatario tiene una dirección Gmail. La siguiente documentación de Google puede ayudarle en este sentido: [Añadir un campo DMARC](https://support.google.com/a/answer/2466563/).

Google también ofrece un [artículo dedicado](https://support.google.com/mail/answer/81126/) a la prevención del spam para los usuarios de Gmail.

### Declarar un falso positivo

Si sus correos electrónicos son compatibles, puede informarnos enviando un ejemplo de su correo electrónico (incluyendo el encabezado). Nuestro soporte técnico le ayudará con los pasos siguientes. Basta con crear un ticket de asistencia desde su área de cliente e incluir la siguiente información:

- La IP del servicio bloqueada para SPAM.
- Una copia original del o de los correos electrónicos marcados como SPAM (debería poder identificarlos gracias al **Message-ID** incluido en la alerta de bloqueo). Si no se proporciona ningún **Message-ID**, bastará con enviarnos una copia de los correos electrónicos enviados antes de recibir la alerta. Sólo proporcione la copia del correo electrónico señalado como SPAM.
- El archivo .EML del correo electrónico proporcionado. Debe incluir **el encabezado** y **el pie de página** del correo electrónico. Si no sabe cómo extraer un archivo .EML, le invitamos a consultar el siguiente tutorial: [Recuperar el encabezado de un correo electrónico](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/diagnostic_headers).

Una vez enviada la información, nuestro servicio de asistencia se pondrá en contacto con Vade Secure para un análisis más detallado de la situación.

## Más información
  
Interactúe con nuestra [comunidad de usuarios](/links/community).