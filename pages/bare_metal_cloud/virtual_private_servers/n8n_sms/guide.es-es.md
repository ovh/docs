---
title: "Automatizar el envío de SMS con n8n a través de la API de OVHcloud"
excerpt: "Descubra cómo enviar SMS desde n8n utilizando la API de OVHcloud"
updated: 2025-12-02
---

## Objetivo

Esta guía explica cómo integrar la API SMS de OVHcloud en **n8n**, para enviar automáticamente SMS desde sus workflows. Aprenderá a configurar una llamada HTTP firmada a través de la API de OVHcloud para desencadenar el envío de un mensaje.

**Descubra cómo enviar SMS desde n8n utilizando la API de OVHcloud.**

## Requisitos

- Tener una [cuenta SMS de OVHcloud](/links/telecom/sms) y un [remitente SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms) válido.
- Tener un [VPS de OVHcloud](/links/bare-metal/vps), un servidor o una máquina local con [n8n](https://n8n.io/) instalado y accesible.

## Procedimiento

Si aún no ha instalado [n8n](https://n8n.io/) en su VPS, siga las instrucciones de nuestro tutorial "[Instalar n8n en un VPS de OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps)".

### Paso 1 – Generar las credenciales de la API de OVHcloud

Antes de poder enviar SMS a través de la API de OVHcloud, debe disponer de los tres identificadores siguientes:

- Application key
- Application secret
- Consumer key

Para ello, consulte la sección **Uso avanzado: combinar las API de OVHcloud con una aplicación** de nuestro tutorial "[Primeros pasos con las API de OVHcloud](/pages/manage_and_operate/api/first-steps)", y copie y guarde los tres identificadores `Application key`, `Application secret` y `Consumer key`.

### Paso 2 — Crear el workflow y los nodos

Conéctese a su interfaz de n8n y haga clic en el botón **Create Workflow**.

Cree los siguientes nodos (vacíos por ahora):

- `Set - Credentials`: de tipo **Edit Fields (Set)**.
- `Set - Request Details`: de tipo **Edit Fields (Set)**.
- `Merge`: de tipo **Merge**.
- `Sign - Generate Signature`: de tipo **Code**.
- `SMS - Send`: de tipo **HTTP Request**.

Para más detalles sobre la creación de nodos, consulte la [documentación oficial de n8n](https://docs.n8n.io/integrations/creating-nodes/overview/).

Conecte los nodos en este orden:

![N8N SMS](images/nodes.png){.thumbnail}

El nodo `Merge` recibe las salidas de los dos nodos `Set - Credentials` y `Set - Request Details`, y luego alimenta `Sign - Generate Signature`, que alimenta `SMS - Send`.

### Paso 3 — Configurar el nodo `Set – Credentials`

Agregue los siguientes parámetros en su nodo `Set - Credentials`:

- Mode: `Manual Mapping`.

| Nombre            | Valor                                                       |
| ----------------- | ----------------------------------------------------------- |
| applicationKey    | "SU_APPLICATION_KEY"                                        |
| consumerKey       | "SU_CONSUMER_KEY"                                           |
| serviceName       | "SU_CUENTA_SMS_DE_OVHCLOUD" (por ejemplo: "sms-ab12345-1") |
| applicationSecret | "SU_APPLICATION_SECRET"                                     |
| timestamp         | {{ Math.floor(Date.now() / 1000) }}                         |

### Paso 4 — Configurar el nodo `Set – Request Details`

Configure el nodo `Set - Request Details`:

- Mode: `Manual Mapping`.
- Agregue un campo llamado `body` de tipo `Object` con el contenido siguiente (ejemplo mínimo).

```json
{
  "charset": "UTF-8",
  "coding": "7bit",
  "message": "Message test",
  "noStopClause": true,
  "priority": "high",
  "receivers": ["+33612345678"],
  "sender": "Your_sender"
}
```

> [!primary]
>
> - El número del destinatario (`receivers`) debe estar en formato internacional y comenzar, por ejemplo, por "+336" o "+337" para un número de móvil francés.
> - [El remitente debe estar definido en su cuenta de OVHcloud](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms). Para realizar una prueba sin declarar un remitente y utilizar un número corto, reemplace `"sender": "Your_sender"` por `"senderForResponse": true`.

### Paso 5 — Configurar el nodo `Merge`

Configure el nodo `Merge`:

- Mode: `Combine`.
- Combine by: `Position`.
- Number of Inputs: `2`.

Conecte `Set - Credentials` en **Input 1** y `Set - Request Details` en **Input 2**.<br>
En salida (output), debe tener al mismo nivel: `applicationKey`, `applicationSecret`, `consumerKey`, `serviceName`, `timestamp` y `body`.

### Paso 6 — Configurar el nodo `Sign – Generate Signature`

Configure el nodo `Sign - Generate Signature`:

- Mode: `Run once for each item`.
- Language: `JavaScript`.

Pegue el código siguiente:

```js
// --- SHA1 pure (not HMAC) ---
function sha1(input) {
  function rotl(n, s) { return (n << s) | (n >>> (32 - s)); }
  function hex(v){ let s=''; for(let i=7;i>=0;i--) s+=((v >>> (i*4)) & 0xf).toString(16); return s; }
  function utf8(str){
    str=str.replace(/\r\n/g,'\n');
    let out=''; for (let i=0;i<str.length;i++){
      const c=str.charCodeAt(i);
      if (c<128) out+=String.fromCharCode(c);
      else if (c<2048) out+=String.fromCharCode((c>>6)|192, (c&63)|128);
      else out+=String.fromCharCode((c>>12)|224, ((c>>6)&63)|128, (c&63)|128);
    } return out;
  }
  let i,j,A,B,C,D,E,temp,H0=0x67452301,H1=0xEFCDAB89,H2=0x98BADCFE,H3=0x10325476,H4=0xC3D2E1F0;
  const W=new Array(80), m=utf8(input), ml=m.length, wa=[];
  for(i=0;i<ml-3;i+=4){ j=(m.charCodeAt(i)<<24)|(m.charCodeAt(i+1)<<16)|(m.charCodeAt(i+2)<<8)|m.charCodeAt(i+3); wa.push(j); }
  let last; switch(ml%4){case 0:last=0x080000000;break;case 1:last=(m.charCodeAt(ml-1)<<24)|0x0800000;break;case 2:last=(m.charCodeAt(ml-2)<<24)|(m.charCodeAt(ml-1)<<16)|0x08000;break;case 3:last=(m.charCodeAt(ml-3)<<24)|(m.charCodeAt(ml-2)<<16)|(m.charCodeAt(ml-1)<<8)|0x80;break;}
  wa.push(last); while ((wa.length%16)!==14) wa.push(0); wa.push(ml>>>29); wa.push((ml<<3)&0x0ffffffff);
  for(let bs=0; bs<wa.length; bs+=16){
    for(i=0;i<16;i++) W[i]=wa[bs+i]; for(i=16;i<=79;i++) W[i]=rotl(W[i-3]^W[i-8]^W[i-14]^W[i-16],1);
    A=H0; B=H1; C=H2; D=H3; E=H4;
    for(i=0;i<=19;i++){ temp=(rotl(A,5)+((B&C)|(~B&D))+E+W[i]+0x5A827999)&0x0ffffffff; E=D; D=C; C=rotl(B,30); B=A; A=temp; }
    for(i=20;i<=39;i++){ temp=(rotl(A,5)+(B^C^D)+E+W[i]+0x6ED9EBA1)&0x0ffffffff; E=D; D=C; C=rotl(B,30); B=A; A=temp; }
    for(i=40;i<=59;i++){ temp=(rotl(A,5)+((B&C)|(B&D)|(C&D))+E+W[i]+0x8F1BBCDC)&0x0ffffffff; E=D; D=C; C=rotl(B,30); B=A; A=temp; }
    for(i=60;i<=79;i++){ temp=(rotl(A,5)+(B^C^D)+E+W[i]+0xCA62C1D6)&0x0ffffffff; E=D; D=C; C=rotl(B,30); B=A; A=temp; }
    H0=(H0+A)&0x0ffffffff; H1=(H1+B)&0x0ffffffff; H2=(H2+C)&0x0ffffffff; H3=(H3+D)&0x0ffffffff; H4=(H4+E)&0x0ffffffff;
  }
  return (hex(H0)+hex(H1)+hex(H2)+hex(H3)+hex(H4)).toLowerCase();
}

// -- OVHcloud SIGNATURE --
const j = $json;
const method = 'POST';
// Use the recommended standard EU endpoint:
const url = `https://eu.api.ovh.com/1.0/sms/${j.serviceName}/jobs`;
const bodyString = JSON.stringify(j.body);
const timestamp = Math.floor(Date.now()/1000).toString();

// AppSecret + ConsumerKey + Method + URL + Body + Timestamp
const toSign = [ j.applicationSecret, j.consumerKey, method, url, bodyString, timestamp ].join('+');
const signature = `$1$${sha1(toSign)}`;

return { json: { ...j, url, bodyString, timestamp, signature } };
```

> [!warning]
>
> No utilice **HMAC** aquí (OVHcloud espera `"$1$" + SHA1(AppSecret + … + Timestamp)`). El parámetro `bodyString` es **exactamente** el JSON que se enviará después (sin otro `stringify`). La URL firmada debe ser **estrictamente idéntica** a la del envío (mismo host, sin `/` final adicional).

### Paso 7 — Configurar el nodo `SMS - Send`

Configure el nodo `SMS - Send`:

- Method: `POST`.
- URL: `{{$json.url}}`.
- Authentication: `None`.
- Send Headers: `ON`.
- Specify Headers: `Using fields below`.

Agregue los siguientes parámetros de header:

| Nombre                | Valor                     |
| ------------------ | -------------------------- |
| Content-Type       | application/json           |
| X-Ovh-Application  | {{$json.applicationKey}}   |
| X-Ovh-Consumer     | {{$json.consumerKey}}      |
| X-Ovh-Timestamp    | {{$json.timestamp}}        |
| X-Ovh-Signature    | {{$json.signature}}        |

Active el `Send Body` y agregue los siguientes parámetros de body:

| Nombre               | Valor               |
| ----------------- | -------------------- |
| Body Content Type | Raw                  |
| Content Type      | application/json     |
| Body              | {{$json.bodyString}} |

### Probar su workflow

Ejecute su workflow. Los siguientes pasos se ejecutan:

1. Set - Credentials: pone a disposición applicationKey, consumerKey, serviceName (y eventualmente applicationSecret si no lo ha externalizado).
2. Set - Request Details: prepara el objeto body conteniendo el cuerpo del SMS.
3. Merge (Combine/Position): fusiona las dos salidas de los nodos anteriores.
4. Sign - Generate Signature (Code): calcula bodyString, timestamp, signature (SHA‑1 simple) y la URL de llamada.
5. SMS - Send (HTTP Request): envía el POST hacia la URL con el body {{$json.bodyString}} y los headers X-Ovh-*.

El mensaje se transmite entonces a través de la API de OVHcloud a su destinatario.

### Errores frecuentes

#### **Invalid_signature (400)**

- La URL firmada es diferente de la URL enviada (host diferente, `/` final de más).
- El cuerpo firmado es diferente del cuerpo enviado (re-`stringify`, espacios, orden, etc.).
- El reloj local está demasiado desincronizado. Utilice mejor la hora del servidor OVHcloud (ver la parte [Industrialización y seguridad](#industrialisation)).

#### **SMS sender ... does not exist (403)**

El `sender` (remitente) no está declarado/validado en su área de cliente de OVHcloud. Pruebe con `"senderForResponse": true` o valide su remitente.

#### **Bad Request**

- Compruebe en cada nodo el nombre y el valor de sus parámetros.
- Asegúrese de que los headers y los body sean completos.
- Compruebe que la URL del nodo `SMS - Send` respete bien el siguiente formato: `https://eu.api.ovh.com/1.0/sms/sms-ab12345-1/jobs`

#### **Errores de nodo Code**

- No utilice `require('crypto')` en n8n sino más bien **SHA-1 pur JavaScript** arriba.
- Utilice el modo *por item* y evite llamar a `$input.all()` en su código.

### Industrialización y seguridad <a name="industrialisation"></a>

Si desea industrializar su workflow y protegerlo más, aplique los siguientes consejos.

#### Hora del servidor OVHcloud

Agregue un nodo de tipo **HTTP Request** antes de la firma:

- `GET https://eu.api.ovh.com/1.0/auth/time`
- Recupere el valor y reemplace `timestamp` por este valor **exacto**.

#### No hacer transitar el `applicationSecret`

- Almacénelo como **variable de entorno** (por ejemplo: `OVH_APP_SECRET`) y léalo en el nodo de tipo Code (Sign - Generate Signature) a través de `$env.OVH_APP_SECRET`, o a través de la funcionalidad **Secrets/Credentials** de n8n.
- A falta de ello, **nunca devuelva** el secreto en la salida del nodo.

#### Gestión de caracteres

Si su mensaje contiene emojis/acentos no GSM, utilice `"coding": "ucs2"`.

## Más información

Interactúe con nuestra [comunidad de usuarios](/links/community).