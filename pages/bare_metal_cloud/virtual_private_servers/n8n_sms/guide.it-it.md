---
title: "Automatizzare l'invio di SMS con n8n tramite l'API OVHcloud"
excerpt: "Scopri come inviare SMS da n8n utilizzando l'API OVHcloud"
updated: 2025-12-02
---

## Obiettivo

Questa guida ti spiega come integrare l'API SMS di OVHcloud in **n8n**, per inviare automaticamente SMS dai tuoi workflow. Imparerai a configurare una chiamata HTTP firmata tramite l'API OVHcloud per attivare l'invio di un messaggio.

**Scopri come inviare SMS da n8n utilizzando l'API OVHcloud.**

## Prerequisiti

- Disporre di un [account SMS OVHcloud](/links/telecom/sms) e un [mittente SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms) valido.
- Disporre di un [VPS OVHcloud](/links/bare-metal/vps), di un server o di un computer locale con [n8n](https://n8n.io/) installato e accessibile.

## Procedura

Se non hai ancora installato [n8n](https://n8n.io/) sul tuo VPS, segui le istruzioni del nostro tutorial "[Installare n8n su un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps)".

### Passo 1 – Generare le credenziali API OVHcloud

Prima di poter inviare SMS tramite l'API OVHcloud, devi disporre dei seguenti tre identificatori:

- Application key
- Application secret
- Consumer key

Per farlo, consulta la sezione **Utilizzo avanzato: associare le API OVHcloud con un'applicazione** del nostro tutorial "[Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps)", quindi copia e conserva i tre identificatori `Application key`, `Application secret` e `Consumer key`.

### Passo 2 — Creare il workflow e i nodi

Accedi alla tua interfaccia n8n e clicca sul pulsante **Create Workflow**.

Crea i seguenti nodi (vuoti per il momento):

- `Set - Credentials`: di tipo **Edit Fields (Set)**.
- `Set - Request Details`: di tipo **Edit Fields (Set)**.
- `Merge`: di tipo **Merge**.
- `Sign - Generate Signature`: di tipo **Code**.
- `SMS - Send`: di tipo **HTTP Request**.

Per ulteriori informazioni sulla creazione dei nodi, consulta la [documentazione ufficiale di n8n](https://docs.n8n.io/integrations/creating-nodes/overview/).

Collega i nodi in questo ordine:

![N8N SMS](images/nodes.png){.thumbnail}

Il nodo `Merge` riceve le uscite dei due nodi `Set - Credentials` e `Set - Request Details`, quindi alimenta `Sign - Generate Signature`, che alimenta `SMS - Send`.

### Passo 3 — Configurare il nodo `Set – Credentials`

Aggiungi i seguenti parametri nel tuo nodo `Set - Credentials`:

- Mode: `Manual Mapping`.

| Nome               | Valore                                                      |
| ----------------- | ------------------------------------------------------------ |
| applicationKey    | "IL_TUO_APPLICATION_KEY"                                     |
| consumerKey       | "IL_TUO_CONSUMER_KEY"                                        |
| serviceName       | "IL_TUO_ACCOUNT_SMS_OVHCLOUD" (ad esempio: "sms-ab12345-1") |
| applicationSecret | "IL_TUO_APPLICATION_SECRET"                                  |
| timestamp         | {{ Math.floor(Date.now() / 1000) }}                          |

### Passo 4 — Configurare il nodo `Set – Request Details`

Configura il nodo `Set - Request Details`:

- Mode: `Manual Mapping`.
- Aggiungi un campo denominato `body` di tipo `Object` con il contenuto seguente (esempio minimo).

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
> - Il numero del destinatario (`receivers`) deve essere nel formato internazionale e iniziare ad esempio con "+336" o "+337" per un numero mobile francese.
> - [Il mittente deve essere definito nel tuo account OVHcloud](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms). Per effettuare un test senza dichiarare un mittente e utilizzare un numero corto, sostituisci `"sender": "Your_sender"` con `"senderForResponse": true`.

### Passo 5 — Configurare il nodo `Merge`

Configura il nodo `Merge`:

- Mode: `Combine`.
- Combine by: `Position`.
- Number of Inputs: `2`.

Collega `Set - Credentials` in **Input 1** e `Set - Request Details` in **Input 2**.<br>
In uscita (output), dovresti ottenere a livello identico: `applicationKey`, `applicationSecret`, `consumerKey`, `serviceName`, `timestamp` e `body`.

### Passo 6 — Configurare il nodo `Sign – Generate Signature`

Configura il nodo `Sign - Generate Signature`:

- Mode: `Run once for each item`.
- Language: `JavaScript`.

Incolla il codice seguente:

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
> Non utilizzare **HMAC** qui (OVHcloud aspetta `"$1$" + SHA1(AppSecret + … + Timestamp)`). Il parametro `bodyString` è **esattamente** il JSON che verrà inviato successivamente (nessun altro `stringify`). L'URL firmata deve essere **strettamente identica** a quella dell'invio (stesso host, non aggiungere `/` finale).

### Passo 7 — Configurare il nodo `SMS - Send`

Configura il nodo `SMS - Send`:

- Method: `POST`.
- URL: `{{$json.url}}`.
- Authentication: `None`.
- Send Headers: `ON`.
- Specify Headers: `Using fields below`.

Aggiungi i seguenti parametri di header:

| Nome                | Valore                     |
| ------------------ | -------------------------- |
| Content-Type       | application/json           |
| X-Ovh-Application  | {{$json.applicationKey}}   |
| X-Ovh-Consumer     | {{$json.consumerKey}}      |
| X-Ovh-Timestamp    | {{$json.timestamp}}        |
| X-Ovh-Signature    | {{$json.signature}}        |

Attiva il `Send Body` e aggiungi i seguenti parametri di body:

| Nome               | Valore               |
| ----------------- | -------------------- |
| Body Content Type | Raw                  |
| Content Type      | application/json     |
| Body              | {{$json.bodyString}} |

### Testa il tuo workflow

Esegui il tuo workflow. Le seguenti fasi vengono eseguite:

1. Set - Credentials: mette a disposizione applicationKey, consumerKey, serviceName (e eventualmente applicationSecret se non l'hai esternalizzato).
2. Set - Request Details: prepara l'oggetto body contenente il corpo del SMS.
3. Merge (Combine/Position): unisce le due uscite dei nodi precedenti.
4. Sign - Generate Signature (Code): calcola bodyString, timestamp, signature (SHA-1 semplice) e l'URL di chiamata.
5. SMS - Send (HTTP Request): invia il POST verso l'URL con il body {{$json.bodyString}} e gli header X-Ovh-*.

Il messaggio viene quindi trasmesso tramite l'API OVHcloud al tuo destinatario.

### Errori frequenti

#### **Invalid_signature (400)**

- L'URL firmata è diversa dall'URL inviata (host diverso, `/` finale in più).
- Il body firmato è diverso dal body inviato (re-`stringify`, spazi, ordine, ecc.).
- L'orologio locale è troppo fuori sincrono. Utilizza invece l'ora del server OVHcloud (vedi la sezione [Industrializzazione e sicurezza](#industrialisation)).

#### **SMS sender ... does not exist (403)**

Il `sender` (mittente) non è dichiarato/validato nel tuo Spazio Cliente OVHcloud. Testa con `"senderForResponse": true` o valida il tuo mittente.

#### **Bad Request**

- Controlla in ogni nodo il nome e il valore dei tuoi parametri.
- Assicurati che gli header e i body siano completi.
- Verifica che l'URL del nodo `SMS - Send` rispetti bene il formato seguente: `https://eu.api.ovh.com/1.0/sms/sms-ab12345-1/jobs`

#### **Errori del nodo Code**

- Non utilizzare `require('crypto')` in n8n ma piuttosto **SHA-1 puro JavaScript** sopra.
- Utilizza la modalità *per item* e evita di chiamare `$input.all()` nel tuo codice.

### Industrializzazione e sicurezza <a name="industrialisation"></a>

Se desideri industrializzare il tuo workflow e renderlo più sicuro, applica i seguenti consigli.

#### Ora del server OVHcloud

Aggiungi un nodo di tipo **HTTP Request** prima della firma:

- `GET https://eu.api.ovh.com/1.0/auth/time`
- Recupera il valore e sostituisci `timestamp` con questo valore **esatto**.

#### Non far transitare l’`applicationSecret`

- Conservalo come **variabile d'ambiente** (ad esempio: `OVH_APP_SECRET`) e leggilo nel nodo di tipo Code (Sign - Generate Signature) tramite `$env.OVH_APP_SECRET`, o tramite la funzionalità **Secrets/Credentials** di n8n.
- In alternativa, **non restituirlo mai** in uscita dal nodo.

#### Gestione dei caratteri

Se il tuo messaggio contiene emoji/accents non GSM, utilizza `"coding": "ucs2"`.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).