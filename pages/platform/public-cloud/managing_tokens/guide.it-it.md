---
title: Gestione dei token
excerpt: Come utilizzare i token via API Keystone
slug: gestisci_i_tuoi_token
legacy_guide_number: g1872
section: Gestione via OpenStack
updated: 2023-03-02
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 02/03/2023**

## Obiettivo

**Scopri come configurare le connessioni alle API keystone sul tuo servizio con l'aiuto dei token.**

> [!primary]
>
> Le informazioni dettagliate sono valide per la versione 3.0 dell'API di
> Keystone.
> 

## Procedura

### Definizioni

- Endpoint: Indirizzo HTTP che punta direttamente su un'API di un servizio. ad esempio [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/){.external} per l'endpoint di autenticazione o [https://image.compute.gra1.cloud.ovh.net/](https://image.compute.gra1.cloud.ovh.net/){.external} per l'endpoint di gestione delle immagini della zona GRA1.

- Token: Carattere unico associato all'autenticazione e ai diritti di accesso. L'utente richiede un token fornendo i propri credenziali (informazioni di login) all'API di autenticazione. e viene generato e fornito con una validità limitata di 24 ore. Un token può essere "scoped" o "unscoped", cioè può essere direttamente collegato a una parte o non essere collegato ad alcun elemento.


### Principio generale

La maggior parte delle richieste sottoposte alle API OpenStack devono rispondere a un meccanismo di autorizzazione. Questo meccanismo funziona ottenendo il token e confermando il token, Ecco le grandi linee del funzionamento di una chiamata dall'autenticazione all'esecuzione della chiamata.

- Richiesta di creazione di token presso l'endpoint di autenticazione con i credentials
- Richiesta sull'endpoint del servizio desiderato (storage, compute, network, ecc...) fornendo il token come parametro
- L'API del servizio recupera il token e richiede la verifica della validità presso il servizio di autenticazione
- Se la validità è verificata, la chiamata è presa in carico ed eseguita

Dato che i token hanno una durata di validità definita, essi scadono e devono essere rinnovati ogni volta che necessario.

Analogamente, se un token deve essere revocato prima della data di scadenza, è possibile farlo via API.

Per maggiori informazioni, consulta la documentazione di [OpenStack dell'API](https://docs.openstack.org/keystone/train/api_curl_examples.html){.external}.


### Operazioni manuali

Le operazioni che seguono possono essere effettuate manualmente, sono generalmente utilizzate a fini pedagogici o di debugging.

Per caricare l'ambiente è necessario utilizzare il file openrc (consulta la guida).

Nel nostro esempio, vogliamo ottenere le informazioni di metadata di un oggetto archiviato grazie all'offerta Public Cloud Storage. Gli step sono:

- Richiesta di creazione di un token
- Recupero delle variabili token ID e endpoint publicURL
- Richiesta sull'oggetto con le informazioni recuperate

Il tool da riga di comando cURL permette di costruire richieste da qualsiasi parte.


#### Step 1: Richiesta di creazione di un token

```bash
curl -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type: applicazione/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "dominio": { "id": "default" }, "password": "'$OS_PASSWORD' }", "scope": { "project": { "name": "'$OS_TENANT_NAME'", "dominio": { "id": "default" } } } } | python -mjson.tool
```

La risposta del server è questa:


```json
 {
  "token": {
    "is_domain": false,
    "methods": [
      "password"
    ],
    "roles": [
      {
        "id": "9543e89aeb484aee8ec7d01e87223b16",
        "name": "objectstore_operator"
      }
    ],
    "is_admin_project": false,
    "project": {
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE PROJECT>",
      "name": "<NAME OF THE PROJECT>"
    },
    "catalog": [
      {
        "endpoints": [
          {
            "url": "https://network.compute.sbg1.cloud.ovh.net/",
            "interface": "internal",
            "region": "SBG1",
            "region_id": "SBG1",
            "id": "075839111e7a41f1bb458926e5f04cec"
          },
          [...]
        ],
        "type": "network",
        "id": "0be6ed3dce244b8295ff643739a86809",
        "name": "neutron"
      },
      [...]
    ],
    "expires_at": "2020-01-17T14:53:32.000000Z",
    "user": {
      "password_expires_at": null,
      "domain": {
        "id": "default",
        "name": "Default"
      },
      "id": "<ID OF THE USER>",
      "name": "<NAME OF THE USER>"
    },
    "audit_ids": [
      "IuNOR-lKQ9GJGQd8taWBnQ"
    ],
    "issued_at": "2020-01-16T14:53:32.000000Z"
  }
}
```


#### Step 2: Recupero delle variabili token ID e endpoint publicURL

Entrambe le informazioni sono disponibili nell'uscita dell'ordine precedente.

Per l'endpoint pubblicoURL, occorre ricercare nella sezione "object-store" e nella regione appropriata, qui "SBG".


```bash
export endpoint="https://storage.sbg.cloud.ovh.net/v1/AUTH_9ea...ff0"
```

E' l'indirizzo del endpoint del servizio di object storage che permetterà di richiedere le informazioni sull'oggetto.


```bash
export token=$(curl -is -X POST ${OS_AUTH_URL}auth/tokens -H "Content-Type" application/json" -d ' { "auth": { "identity": { "methods": ["password"], "password": { "user": { "name": "'$OS_USERNAME'", "domain": { "id": "default" }, "password": "'$OS_PASSWORD' }, "scope": { "project": { "name": "'$OS_tenant_NAME'", "domain": { "id": "default" } } }' | grep -i '^X-Subject-Token' | cut -d" " -f2)
```

Questo token è l'elemento di autenticazione che verrà utilizzato per la richiesta successiva.


#### Step 3: Richiesta sull'oggetto con le informazioni recuperate

```bash
curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```

- -X GET : metodo HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: indirizzo dell'oggetto
- -H "X-Auth-Token: $token": elemento di autenticazione
- -I: opzione curl per recuperare solo i metadatas

La risposta è:


```bash
HTTP/1.1 200 OK
Content-Length: 190046
Content-Type: image/jpeg
Accept-Ranges: bytes
Last-Modified: Thu, 24 Sep 2015 14:20:11 GMT
Etag: c93e12530b66f121d4bd5a6ae096ee77
X-Timestamp: 1443104410.15437
X-Object-Meta-Mtime: 1424095540.000000
X-Trans-Id: 95CAB26E:D200_052711B1:01BB_560D4CE7_1631931:2BB4
Date: Thu, 01 Oct 2015 15:10:31 GMT
Connection: close
```


### Gestione automatica: libreria e SDK

Si raccomanda vivamente di utilizzare le librerie che permettono la gestione trasparente dei token. In questo modo, fornendo semplicemente i credenziali di accesso alla libreria, i token saranno automaticamente generati, utilizzati e rinnovati senza doverne gestire a livello applicativo.

Ci sono molte librerie nei diversi linguaggi. Per maggiori informazioni, consulta [la lista ufficiale](https://wiki.openstack.org/wiki/SDKs){.external}.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.