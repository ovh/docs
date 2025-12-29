---
title: "Automatyzacja wysyłania SMS za pomocą n8n za pośrednictwem API OVHcloud"
excerpt: "Dowiedz się, jak wysyłać SMS z n8n, korzystając z API OVHcloud"
updated: 2025-12-02
---

## Wprowadzenie

Ten przewodnik wyjaśnia, jak zintegrować API SMS OVHcloud z **n8n**, aby automatycznie wysyłać SMS z poziomu swoich workflowów. Nauczysz się, jak skonfigurować podpisany wywołania HTTP za pomocą API OVHcloud, aby uruchomić wysyłkę wiadomości.

**Dowiedz się, jak wysyłać SMS z n8n, korzystając z API OVHcloud.**

## Wymagania początkowe

- Posiadanie [konta SMS OVHcloud](/links/telecom/sms) oraz [walidnego nadawcy SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms).
- Posiadanie [VPS OVHcloud](/links/bare-metal/vps), serwera lub lokalnego komputera z zainstalowanym i dostępnych [n8n](https://n8n.io/).

## W praktyce

Jeśli jeszcze nie zainstalowałeś [n8n](https://n8n.io/) na swoim VPS, postępuj zgodnie z instrukcjami w naszym przewodniku "[Instalacja n8n na VPS OVHcloud](/pages/bare_metal_cloud/virtual_private_servers/install_n8n_on_vps)".

### Krok 1 – Wygenerowanie identyfikatorów API OVHcloud

Przed wysłaniem SMS za pomocą API OVHcloud musisz mieć do dyspozycji trzy następujące identyfikatory:

- Application key
- Application secret
- Consumer key

Aby tego dokonać, odwiedź sekcję **Zaawansowane wykorzystanie: łączenie API OVHcloud z aplikacją** w naszym przewodniku "[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)", a następnie skopiuj i zapisz trzy identyfikatory `Application key`, `Application secret` i `Consumer key`.

### Krok 2 — Tworzenie workflowu i węzłów

Zaloguj się do swojej interfejsu n8n i kliknij przycisk **Create Workflow**.

Utwórz następujące węzły (puste na razie):

- `Set - Credentials`: typu **Edit Fields (Set)**.
- `Set - Request Details`: typu **Edit Fields (Set)**.
- `Merge`: typu **Merge**.
- `Sign - Generate Signature`: typu **Code**.
- `SMS - Send`: typu **HTTP Request**.

Aby uzyskać więcej informacji na temat tworzenia węzłów, odwiedź [oficjalną dokumentację n8n](https://docs.n8n.io/integrations/creating-nodes/overview/).

Połącz węzły w tej kolejności:

![N8N SMS](images/nodes.png){.thumbnail}

Węzeł `Merge` otrzymuje wyjścia z dwóch węzłów `Set - Credentials` i `Set - Request Details`, a następnie zasila `Sign - Generate Signature`, który zasila `SMS - Send`.

### Krok 3 — Konfiguracja węzła `Set – Credentials`

Dodaj następujące parametry do swojego węzła `Set - Credentials`:

- Mode: `Manual Mapping`.

| Nazwa               | Artość                                            |
| ------------------- | ------------------------------------------------- |
| applicationKey      | "TWÓJ_APPLICATION_KEY"                            |
| consumerKey         | "TWÓJ_CONSUMER_KEY"                               |
| serviceName         | "TWÓJ_KONTA_SMS_OVHCLOUD" (np. "sms-ab12345-1")   |
| applicationSecret   | "TWÓJ_APPLICATION_SECRET"                         |
| timestamp           | {{ Math.floor(Date.now() /1000) }}                |

### Krok 4 — Konfiguracja węzła `Set – Request Details`

Skonfiguruj węzeł `Set - Request Details`:

- Mode: `Manual Mapping`.
- Dodaj pole o nazwie `body` typu `Object` z poniższym zawartością (przykład minimalny).

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
> - Numer odbiorcy (`receivers`) musi być w formacie międzynarodowym i zaczynać się np. od "+336" lub "+337" dla francuskiego numeru komórkowego.
> - [Nadawca musi być zdefiniowany w Twoim koncie OVHcloud](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_expediteurs_sms). Aby przeprowadzić test bez deklaracji nadawcy i używania krótkiego numeru, zastąp `"sender": "Your_sender"` przez `"senderForResponse": true`.

### Krok 5 — Konfiguracja węzła `Merge`

Skonfiguruj węzeł `Merge`:

- Mode: `Combine`.
- Combine by: `Position`.
- Number of Inputs: `2`.

Połącz `Set - Credentials` w **Input 1** i `Set - Request Details` w **Input 2**.<br>
W wyjściu (output) powinieneś mieć na tym samym poziomie: `applicationKey`, `applicationSecret`, `consumerKey`, `serviceName`, `timestamp` i `body`.

### Krok 6 — Konfiguracja węzła `Sign – Generate Signature`

Skonfiguruj węzeł `Sign - Generate Signature`:

- Mode: `Run once for each item`.
- Language: `JavaScript`.

Wklej poniższy kod:

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
> Nie używaj **HMAC** tutaj (OVHcloud oczekuje `"$1$" + SHA1(AppSecret + … + Timestamp)`). Parametr `bodyString` jest **dokładnie** JSON, który zostanie wysłany później (bez dodatkowego `stringify`). Podpisana URL musi być **ściśle identyczna** jak URL wysyłki (taki sam host, bez dodatkowego `/` na końcu).

### Krok 7 — Konfiguracja węzła `SMS - Send`

Skonfiguruj węzeł `SMS - Send`:

- Method: `POST`.
- URL: `{{$json.url}}`.
- Authentication: `None`.
- Send Headers: `ON`.
- Specify Headers: `Using fields below`.

Dodaj następujące parametry nagłówka:

| Nazwa                | Wartość                     |
| -------------------- | --------------------------- |
| Content-Type         | application/json            |
| X-Ovh-Application    | {{$json.applicationKey}}    |
| X-Ovh-Consumer       | {{$json.consumerKey}}       |
| X-Ovh-Timestamp      | {{$json.timestamp}}         |
| X-Ovh-Signature      | {{$json.signature}}         |

Włącz `Send Body` i dodaj następujące parametry ciała:

| Nazwa               | Wartość               |
| ------------------- | -------------------- |
| Body Content Type   | Raw                  |
| Content Type        | application/json     |
| Body                | {{$json.bodyString}} |

### Testowanie swojego workflowu

Uruchom swój workflow. Następujące kroki zostaną wykonane:

1. Set - Credentials: udostępnia applicationKey, consumerKey, serviceName (i ewentualnie applicationSecret, jeśli nie został zewnętrzny).
2. Set - Request Details: przygotowuje obiekt body zawierający treść SMS.
3. Merge (Combine/Position): łączy dwa wyjścia z poprzednich węzłów.
4. Sign - Generate Signature (Code): oblicza bodyString, timestamp, signature (SHA-1 czysty JavaScript) i URL wywołania.
5. SMS - Send (HTTP Request): wysyła POST do URL z ciałem {{$json.bodyString}} i nagłówkami X-Ovh-*.

Wiadomość zostaje następnie przekazana przez API OVHcloud do odbiorcy.

### Częste błędy

#### **Invalid_signature (400)**

- Podpisana URL różni się od wysłanej URL (inny host, dodatkowy `/` na końcu).
- Podpisane ciało różni się od wysłanego ciała (ponowne `stringify`, spacje, kolejność itp.).
- Zegar lokalny jest zbyt odstający. Zamiast tego użyj godziny serwera OVHcloud (patrz sekcja [Industrializacja i bezpieczeństwo](#industrialisation)).

#### **SMS sender ... does not exist (403)**

Nadawca `sender` nie jest zadeklarowany/zweryfikowany w Twoim Panelu klienta OVHcloud. Przetestuj z `"senderForResponse": true` lub zweryfikuj swojego nadawcę.

#### **Bad Request**

- Sprawdź w każdym węźle nazwę i wartość swoich parametrów.
- Upewnij się, że nagłówki i ciała są pełne.
- Sprawdź, czy URL węzła `SMS - Send` spełnia następujący format: `https://eu.api.ovh.com/1.0/sms/sms-ab12345-1/jobs`

#### **Błędy węzła Code**

- Nie używaj `require('crypto')` w n8n, ale zamiast tego użyj **czystego JavaScript SHA-1** powyżej.
- Użyj trybu *po jednym elemencie* i unikaj wywoływania `$input.all()` w swoim kodzie.

### Industrializacja i bezpieczeństwo <a name="industrialisation"></a>

Jeśli chcesz przemysłowo wykorzystać swój workflow i zwiększyć jego bezpieczeństwo, zastosuj poniższe wskazówki.

#### Godzina serwera OVHcloud

Dodaj węzeł typu **HTTP Request** przed podpisem:

- `GET https://eu.api.ovh.com/1.0/auth/time`
- Pobierz wartość i zastąp `timestamp` tą **dokładną** wartością.

#### Nie przesyłaj `applicationSecret`

- Zapisz go jako **zmienną środowiskową** (np. `OVH_APP_SECRET`) i odczytaj w węźle typu Code (Sign - Generate Signature) za pomocą `$env.OVH_APP_SECRET`, lub za pomocą funkcji **Secrets/Credentials** w n8n.
- W przeciwnym razie **nigdy nie zwracaj** sekretu w wyjściu węzła.

#### Zarządzanie znakami

Jeśli wiadomość zawiera emoji/akcenty nie-GSM, użyj `"coding": "ucs2"`.

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).