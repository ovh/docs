---
title: "Automatiser l'envoi de SMS avec n8n via l'API OVHcloud"
excerpt: "Découvrez comment envoyer des SMS depuis n8n en utilisant l'API OVHcloud"
updated: 2025-12-02
---

## Objectif

Ce guide vous explique comment intégrer l'API SMS d'OVHcloud dans **n8n**, afin d'envoyer automatiquement des SMS depuis vos workflows. Vous apprendrez à configurer un appel HTTP signé via l'API OVHcloud pour déclencher l'envoi d’un message.

**Découvrez comment envoyer des SMS depuis n8n en utilisant l'API OVHcloud.**

## Prérequis

- Disposer d'un [compte SMS OVHcloud](/links/telecom/sms) et d'un [expéditeur SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms) valide.
- Disposer d'un [VPS OVHcloud](/links/bare-metal/vps), d'un serveur ou d'un poste local avec [n8n](https://n8n.io/) installé et accessible.

## En pratique

Si vous n'avez pas encore installé [n8n](https://n8n.io/) sur votre VPS, suivez les instructions de notre guide « [Installer n8n sur un VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps) ».

### Étape 1 – Générer les identifiants API OVHcloud

Avant de pouvoir envoyer des SMS via l’API OVHcloud, vous devez être en possession des trois identifiants suivants :

- Application key
- Application secret
- Consumer key

Pour cela, consultez la section **Utilisation avancée : coupler les API OVHcloud avec une application** de notre guide « [Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps) », puis copiez et conservez les trois identifiants `Application key`, `Application secret` et `Consumer key`.

### Étape 2 — Créer le workflow et les nœuds

Connectez-vous à votre interface n8n puis cliquez sur le bouton **Create Workflow**.

Créez les nœuds suivants (vides pour le moment) :

- `Set - Credentials` : de type **Edit Fields (Set)**.
- `Set - Request Details` : de type **Edit Fields (Set)**.
- `Merge` : de type **Merge**.
- `Sign - Generate Signature` : de type **Code**.
- `SMS - Send` : de type **HTTP Request**.

Pour plus de détails concernant la création de nœuds, consultez la [documentation officielle de n8n](https://docs.n8n.io/integrations/creating-nodes/overview/).

Reliez les nœuds dans cet ordre :

![N8N SMS](images/nodes.png){.thumbnail}

Le nœud `Merge` reçoit les sorties des deux nœuds `Set - Credentials` et `Set - Request Details`, puis alimente `Sign - Generate Signature`, qui alimente `SMS - Send`.

### Étape 3 — Paramétrer le nœud `Set – Credentials`

Ajoutez les paramètres suivants dans votre nœud `Set - Credentials` :

- Mode : `Manual Mapping`.

| Nom               | Valeur                                                      |
| ----------------- | ----------------------------------------------------------- |
| applicationKey    | "VOTRE_APPLICATION_KEY"                                     |
| consumerKey       | "VOTRE_CONSUMER_KEY"                                        |
| serviceName       | "VOTRE_COMPTE_SMS_OVHCLOUD" (par exemple : "sms-ab12345-1") |
| applicationSecret | "VOTRE_APPLICATION_SECRET"                                  |
| timestamp         | {{ Math.floor(Date.now() / 1000) }}                         |

### Étape 4 — Paramétrer le nœud `Set – Request Details`

Paramétrez le nœud `Set - Request Details` :

- Mode : `Manual Mapping`.
- Ajoutez un champ nommé `body` de type `Object` avec le contenu ci-dessous (exemple minimal).

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
> - Le numéro du destinataire (`receivers`) doit être au format international et commencer par exemple par « +336 » ou « +337 » pour un numéro de mobile français.
> - [L'expéditeur doit être défini dans votre compte OVHcloud](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms). Pour réaliser un test sans déclarer d'expéditeur et utiliser un numéro court, remplacez `"sender": "Your_sender"` par `"senderForResponse": true`.

### Étape 5 — Paramétrer le nœud `Merge`

Paramétrez le nœud `Merge` :

- Mode : `Combine`.
- Combine by : `Position`.
- Number of Inputs : `2`.

Reliez `Set - Credentials` en **Input 1** et `Set - Request Details` en **Input 2**.<br>
En sortie (output), vous devez avoir au même niveau : `applicationKey`, `applicationSecret`, `consumerKey`, `serviceName`, `timestamp` et `body`.

### Étape 6 — Paramétrer le nœud `Sign – Generate Signature`

Paramétrez le nœud `Sign - Generate Signature` :

- Mode : `Run once for each item`.
- Language : `JavaScript`.

Collez le code ci-dessous :

```js
// --- SHA1 pur (pas HMAC) ---
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

// -- SIGNATURE OVHcloud --
const j = $json;
const method = 'POST';
// Utilise l'endpoint EU standard recommandé:
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
> N'utilisez pas de **HMAC** ici (OVHcloud attend `"$1$" + SHA1(AppSecret + … + Timestamp)`). Le paramètre `bodyString` est **exactement** le JSON qui sera envoyé ensuite (pas d’autre `stringify`). L’URL signée doit être **strictement identique** à celle de l’envoi (même host, pas de `/` final en plus).

### Étape 7 — Paramétrer le nœud `SMS - Send`

Paramétrez le nœud `SMS - Send` :

- Method : `POST`.
- URL : `{{$json.url}}`.
- Authentication : `None`.
- Send Headers : `ON`.
- Specify Headers : `Using fields below`.

Ajoutez les paramètres de header suivants :

| Nom                | Valeur                     |
| ------------------ | -------------------------- |
| Content-Type       | application/json           |
| X-Ovh-Application  | {{$json.applicationKey}}   |
| X-Ovh-Consumer     | {{$json.consumerKey}}      |
| X-Ovh-Timestamp    | {{$json.timestamp}}        |
| X-Ovh-Signature    | {{$json.signature}}        |

Activez le `Send Body` et ajoutez les paramètres de body suivants :

| Nom               | Valeur               |
| ----------------- | -------------------- |
| Body Content Type | Raw                  |
| Content Type      | application/json     |
| Body              | {{$json.bodyString}} |

### Tester votre workflow

Exécutez votre workflow. Les étapes suivantes s'exécutent :

1. Set - Credentials : met à disposition applicationKey, consumerKey, serviceName (et éventuellement applicationSecret si vous ne l’avez pas externalisé).
2. Set - Request Details : prépare l’objet body contenant le corps du SMS.
3. Merge (Combine/Position) : fusionne les deux sorties des nœuds précédents.
4. Sign - Generate Signature (Code) : calcule bodyString, timestamp, signature (SHA‑1 simple) et l’URL d’appel.
5. SMS - Send (HTTP Request) : envoie le POST vers l'URL avec le body {{$json.bodyString}} et les headers X-Ovh-*.

Le message est alors transmis via l’API OVHcloud à votre destinataire.

### Erreurs fréquentes

#### **Invalid_signature (400)**

- L’URL signée est différente de l'URL envoyée (host différent, `/` final en trop).
- Le body signé est différent du body envoyé (re-`stringify`, espaces, ordre, etc.).
- L'horloge locale est trop décalée. Utilisez plutôt l’heure serveur OVHcloud (voir la partie [Industrialisation et sécurité](#industrialisation)).

#### **Sms sender ... does not exist (403)**

Le `sender` (expéditeur) n’est pas déclaré/validé dans votre espace client OVHcloud. Testez avec `"senderForResponse": true` ou validez votre expéditeur.

#### **Bad Request**

- Vérifiez dans chaque nœud le nom et la valeur de vos paramètres.
- Assurez-vous que les headers et les body soient complets.
- Vérifiez que l'URL du nœud `SMS - Send` respecte bien le format suivant : `https://eu.api.ovh.com/1.0/sms/sms-ab12345-1/jobs`

#### **Erreurs de nœud Code**

- N'utilisez pas de `require('crypto')` dans n8n mais plutôt **SHA-1 pur JavaScript** ci-dessus.
- Utilisez le mode *par item* et évitez d'appeler `$input.all()` dans votre code.

### Industrialisation et sécurité <a name="industrialisation"></a>

Si vous souhaitez industrialiser votre workflow et le sécuriser davantage, appliquez les conseils suivants.

#### Heure serveur OVHcloud

Ajoutez un nœud de type **HTTP Request** avant la signature :

- `GET https://eu.api.ovh.com/1.0/auth/time`
- Récupérez la valeur et remplacez `timestamp` par cette valeur **exacte**.

#### Ne pas faire transiter l’`applicationSecret`

- Stockez-le comme **variable d’environnement** (par exemple : `OVH_APP_SECRET`) et lisez-le dans le nœud de type Code (Sign - Generate Signature) via `$env.OVH_APP_SECRET`, ou via la fonctionnalité **Secrets/Credentials** de n8n.
- À défaut, **ne retournez jamais** le secret en sortie du nœud.

#### Gestion des caractères

Si votre message contient des emojis/accents non GSM, utilisez `"coding": "ucs2"`.

## Aller plus loin

Échangez avec notre [communauté d'utilisateurs](/links/community).