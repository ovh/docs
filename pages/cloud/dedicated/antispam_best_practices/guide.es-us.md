---
title: OVHcloud AntiSpam - Buenas prácticas y desbloqueo de una dirección IP
slug: antispam-best-practices
excerpt: Descubra nuestras buenas prácticas antispam y cómo desbloquear una dirección IP bloqueada para spam.
section: Diagnóstico y modo de rescate
order : 04
---

> [!primary]
> Esta traducción ha sido generada de forma automática por nuestro partner SYSTRAN. En algunos casos puede contener términos imprecisos, como en las etiquetas de los botones o los detalles técnicos. En caso de duda, le recomendamos que consulte la versión inglesa o francesa de la guía. Si quiere ayudarnos a mejorar esta traducción, por favor, utilice el botón «Contribuir» de esta página.
>

**Última actualización: 16/01/2023**

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
> Destination IP: 188.95.235.33 - Message-ID : d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score: 300 <br>
> Destination IP: 188.95.235.33 - Message-ID : fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID : P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID : 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID : zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score: 300<br>
> Destination IP: 188.95.235.33 - Message-ID : zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score: 300
> <br>
> <br>

## Procedimiento

**¿Qué hacer cuando se reciba el email de alerta?**

Identifique el problema, solucione y desbloquee la IP.

### Identificar y resolver el problema

**Antes de desbloquear una dirección IP, asegúrese de haber tomado las siguientes medidas:**

- Deje de enviar mensajes de correo electrónico (p. ej.: detener todos los programas de correo (como qmail, Postfix, Sendmail, etc.).
- Compruebe la cola de espera de los emails (por ejemplo, qmHandle para qmail, postrabo -p para Postfix) y vacídela.
- Analice sus logs gracias al **Message-ID** presente en la alerta de bloqueo.
- Si envía spam o mensajes de correo ilegítimos, le recomendamos encarecidamente que resuelva el problema **antes** de desbloquear la dirección IP. Consulte esta guía para conocer las [mejores prácticas (EN)](https://docs.ovh.com/ie/en/dedicated/antispam-best-practices/#bestpractices) al enviar correos electrónicos.

Una vez resuelto el problema, puede desbloquear la dirección IP realizando las siguientes acciones.

> [!alert]
> 
> En ningún caso desbloquee la dirección IP antes de haber suspendido el envío de los emails desde su servidor y de haber vaciado su cola de emails. En caso contrario, será inmediatamente bloqueado una segunda vez, por un período de tiempo más largo. 
>

### Desbloquear la dirección IP

#### Desbloquear la dirección IP desde el área de cliente

En el [área de cliente de OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/world/&ovhSubsidiary=ws), acceda a la sección `Bare Metal Cloud`{.action} y haga clic en `IP`{.action}.

En el marco amarillo dedicado a las alertas, haga clic en la flecha desplegable `Ver todas mis alertas`{.action} para mostrar todas las alertas en su o sus direcciones IP.

Si una de sus direcciones IP está afectada por una alerta, la información se mostrará justo debajo:

![Alerta antispam](images/alertblockedip.png){.thumbnail}

En la sección "Mis direcciones IP públicas y servicios asociados", haga clic en el botón `...`{.action} situado junto a la IP o el servicio correspondiente y seleccione `antispam`{.action}.

![antispam](images/antispam.png){.thumbnail}

En la nueva pestaña, haga clic en `Desbloquear el antispam`{.action} en la parte inferior y acepte.

![Desbloquear IP](images/unblockip.png){.thumbnail}

La IP se está desbloqueando. La operación puede tardar varios minutos.

Una vez realizado el tratamiento, la IP se desbloqueará.

#### Desbloquear la dirección IP desde la API de OVHcloud

Conéctese a la interfaz de la [API de OVHcloud](https://ca.api.ovh.com/) y siga los pasos que se indican a continuación. Para más información sobre el uso de las API de OVHcloud, consulte nuestra guía [Primeros pasos con las API de OVHcloud](https://docs.ovh.com/us/es/api/first-steps-with-ovh-api/).

Descargue en primer lugar la lista de direcciones IP de cada servicio de OVHcloud (Hosted Private Cloud, VPS, Public Cloud, servidor dedicado):

> [!api]
>
> @api {GET} /ip
>

**type** : Introduzca el tipo de IP (Dedicated, Dedicated Cloud, VPS, vRack, PCI, etc.).

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
> @api {GET} /ip/{ip}/spam
>

**ip** : especifique el bloque IP obtenido en el paso anterior con la máscara de red. Por ejemplo, 122.122.122.121/28.<br>
**state** : especifique el estado que busca.

A continuación le ofrecemos un ejemplo de resultado (en este caso, ha seleccionado el bloque 122.122.122.121/28):

```bash
"122.122.122.122" 
```

Puede obtener información sobre el bloqueo con la siguiente llamada, o bien pasar a la [siguiente](#unblockip) etapa.

> [!api]
>
> @api {GET} /ip/{ip}/spam/{ipSpamming}
>

**ip**: especifique el bloque IP obtenido en el paso anterior con la máscara de red.<br>
**ipSpamming** : introduzca la IP obtenida anteriormente en el estado "blockedForSpam", por ejemplo.

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
> @api {GET} /ip/{ip}/spam/{ipSpamming}/stats
>

**ip** : especifique el bloque IP obtenido en el paso anterior con la máscara de red.<br>
**ipSpamming** : introduzca la IP obtenida anteriormente en el estado "blockedForSpam", por ejemplo.<br>
**from and to** : utilice el formato de fecha utilizado en la función anterior (YYYY-MM-DDTHH:MM+01:SS).

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
No desbloquee la IP sin haber suspendido el envío de los emails desde su servidor y vaciado la cola de emails. En caso contrario, será inmediatamente bloqueado una segunda vez, por un período de tiempo más largo. 
>

Para desbloquear su dirección IP, utilice la siguiente llamada:

> [!api]
>
> @api {POST} /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : especifique el bloque de direcciones IP obtenido en el paso anterior con la máscara de red.<br>
**ipSpamming** : especifique la dirección IP recuperada anteriormente, por ejemplo, en el estado "blockedForSpam".

A continuación le ofrecemos un ejemplo:

```bash
"message": "This IP address is still blocked for 129 seconds"
```

Y un resultado poco más de 129 segundos después:

```bash
time: 3600,
date : "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "unblocking" 
```

La dirección IP se está desbloqueando. La operación puede tardar varios minutos.


### En caso de falsos positivos

En algunos casos, la alerta de spam puede ser un falso positivo. Si ha comprobado que el **Message-ID** está asociado a un correo electrónico legítimo, debe asegurarse de que sus correos electrónicos cumplen con el [RFC (EN)](https://docs.ovh.com/ie/en/dedicated/antispam-best-practices/#rfc) y las [buenas prácticas (EN)](https://docs.ovh.com/ie/en/dedicated/antispam-best-practices/#bestpractices).

## Más información
  
Interactúe con nuestra comunidad de usuarios en <https://community.ovh.com/en/>.