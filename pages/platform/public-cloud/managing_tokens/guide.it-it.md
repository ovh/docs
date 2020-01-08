---
title: 'Gestisci i tuoi token'
excerpt: 'Gestisci i tuoi token'
slug: gestisci_i_tuoi_token
legacy_guide_number: g1872
---

## 

## Attenzione!
Le informazioni fornite in questa guida sono valide per la versione 3.0 dell'API di Keystone.


## Definizioni

- Endpoint: indirizzo HTTP per accedere alle API di un servizio. Ad esempio, https://auth.cloud.ovh.net/v2.0 per l'endpoint di autenticazione o https://image.compute.gra1.cloud.ovh.net/ per l'endpoint di gestione delle immagini della zona GRA1.

- Token: stringa univoca di caratteri associata a un'autenticazione e ai relativi permessi di accesso. Il token viene richiesto dall'utente fornendo le sue credenziali all'API di autenticazione e, una volta generato, ha una validità di 24h.

Un token può essere "scoped" o "unscoped", cioè può essere associato o meno a uno specifico titolare.


## Quadro generale
La maggior parte delle richieste inviate alle API OpenStack devono seguire una procedura di autorizzazione, che prevede la generazione di un token e la sua validazione.

Ecco i passaggi principali del funzionamento di una richiesta, dall'autenticazione alla sua esecuzione:

- richiesta di creazione del token all'endpoint di autenticazione fornendo le credenziali
- richiesta all'endpoint del servizio desiderato (storage, compute, network, ecc...) fornendo il token come parametro
- l'API del servizio recupera il token e richiede al servizio di autenticazione di verificarne la validità 
- una volta completata la verifica, la richiesta viene presa in carico ed eseguita


I token hanno una validità definita e alla loro scadenza devono essere rinnovati.

È possibile utilizzare l'API anche per annullare un token prima della data di scadenza.

Per maggiori informazioni, consulta la documentazione relativa all'[API OpenStack](http://docs.openstack.org/api/quick-start/content/) e al [meccanismo di autenticazione](http://docs.openstack.org/kilo/install-guide/install/apt/content/keystone-concepts.html).


## 
Le operazioni manuali vengono utilizzate generalmente per fini pedagogici o di debugging.

Per eseguirle, è necessario caricare il tuo ambiente utilizzando il file openrc.

Esempio: per recuperare le informazioni dei meta-dati di un oggetto archiviato con la tua soluzione Public Cloud Storage:


- richiedi la creazione di un token
- recupera le variabili "token ID" e "endpoint publicURL"
- effettua una richiesta sull'oggetto utilizzando le informazioni recuperate


Qualsiasi richiesta può essere costruita utilizzando cURL da riga di comando.


## Richiedi la creazione di un token

```
$ curl -X POST $OS_AUTH_URL/tokens -H "Content-Type: application/json" -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}' | python -mjson.tool
```



- -X POST: metodo HTTP utilizzato per inviare dati

- $OS_AUTH_URL/tokens: azione sull'elemento "tokens"

- -H "Content-Type: application/json": formato della richiesta in JSON

- -d '{"auth": {"tenantName": "'$OS_TENANT_NAME'", "passwordCredentials": {"username": "'$OS_USERNAME'", "password": "'$OS_PASSWORD'"}}}': corpo della richiesta,cioè le informazioni di autenticazione

- python -mjson.tool: strumento python che permette di visualizzare il risultato in modo leggibile


La risposta del server è di questo tipo:


```
{
"access": {
"metadata": {
"is_admin": 0,
"roles": [
"9fe...fd4"
]
},
"serviceCatalog": [
[...]
{
"endpoints": [
{
"adminURL": "https://image.compute.sbg1.cloud.ovh.net/",
"internalURL": "http://127.0.0.1:8888/v1/AUTH_9ea...ff0",
"publicURL": "https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0",
"region": "SBG1"
}
],
"endpoints_links": [],
"name": "swift",
"type": "object-store"
},

[...]
],
"token": {
"audit_ids": [
"Mka...cmTw"
],
"expires": "2015-10-02T14:53:15Z",
"id": "a4331ec98754472032f031e18b16bd00",
"issued_at": "2015-10-01T14:53:15.072501",
"tenant": {
"description": null,
"enabled": true,
"id": "9ea...ff0",
"name": "361...868"
}
},

[...]
}
}
```




## Recupera le variabili "token ID" e "endpoint publicURL"
Queste due informazioni sono disponibili nel risultato ottenuto dal comando precedente.

Per recuperare l'endpoint publicURL, è necessario ricercare nella sezione "endpoints" la "Region" corrispondente (in questo caso, "SBG1").


```
$ export endpoint="https://storage.sbg1.cloud.ovh.net/v1/AUTH_9ea...ff0"
```


È l'indirizzo dell'endpoint del servizio Object Storage che permette di recuperare le informazioni relative all'oggetto.


```
$ export token=a4331ec98754472032f031e18b16bd00
```


Questo token è l'elemento di autenticazione da utilizzare per la prossima richiesta.


## Effettua una richiesta sull'oggetto con le informazioni recuperate

```
$ curl -X GET $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg -H "X-Auth-Token: $token" -I
```



- -X GET: metodo HTTP GET
- $endpoint/photos/fullsize/ovh-summit-2014-backstage-DS.jpg: indirizzo dell'oggetto
- -H "X-Auth-Token: $token": elemento di autenticazione
- -I: opzione curl per recuperare solo i metadati


Ottieni una risposta di questo tipo:


```
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




## 
Ti consigliamo di utilizzare librerie che consentono una gestione trasparente dei token. In questo modo, fornendo semplicemente le credenziali di accesso alla libreria, i token vengono automaticamente generati, utilizzati e rinnovati senza doverli gestire a livello applicativo.

Esistono numerose librerie nei diversi linguaggi. Per maggiori informazioni, consulta la lista ufficiale.


## Esempio in Python
È possibile installare la libreria utilizzando pip.

```
$ pip install python-openstacksdk
```


Dopo aver avviato la connessione, i token vengono generati in background.

```
from openstack import connection
conn = connection.Connection(auth_url="https://auth.cloud.ovh.net/v2.0",
project_name="361...868",
username="vvQ...VBW",
password="jCr...RGj")
for cont in conn.object_store.containers():
if(cont.name == "photos"):
for obj in conn.object_store.objects(cont):
if(obj.name == "fullsize/ovh-summit-2014-backstage-DS.jpg"):
print conn.object_store.get_object_metadata(obj)
```




## Esempio in PHP
L'installazione della libreria richiede php-curl e composer.


```
$ apt-get install php5-curl
$ curl -sS https://getcomposer.org/installer | php
$ php composer.phar require rackspace/php-opencloud
```


Lo script funziona anche con un "connettore" che gestirà i token.


```
<?php
require '/var/www/vendor/autoload.php';
use OpenCloud\OpenStack;
$client = new OpenStack("https://auth.cloud.ovh.net/v2.0", array(
'username' => "vvQ...VBW",
'password' => "jCr...RGj",
'tenantName' => "361...868",
));
$objectStoreService = $client->objectStoreService('swift', "GRA1");
$cont = $objectStoreService->getContainer("photos");
$obj = $cont->getPartialObject('fullsize/ovh-summit-2014-backstage-DS.jpg');
print_r($obj->getMetadata());
?>
```




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

