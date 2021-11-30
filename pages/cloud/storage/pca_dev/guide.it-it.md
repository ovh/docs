---
title: Guida per sviluppatori
slug: pca/dev
excerpt: Linee guida su OVH Public Cloud Archive per gli sviluppatori
section: Public Cloud Archive
order: 10
---


## Cose OVH Public Cloud Archive?
[OVH Public Cloud Archive](https://www.ovhcloud.com/it/public-cloud/cloud-archive/){.external} è una soluzione di storage low cost destinata all’archiviazione a lungo termine dei dati. È basata su [OpenStack Swift](https://swift.openstack.org){.external}, un sistema di storage open source, ridondato, distribuito e consistente che permette agli sviluppatori di accedere a un’infrastruttura estremamente scalabile, affidabile e dal prezzo contenuto. Su questa piattaforma OVH implementa alcune delle sue soluzioni interne.

Il servizio OVH Public Cloud Archive è progettato per dati consultati raramente: meno frequentemente viene richiesto lo sblocco di un archivio, minore sarà il tempo necessario al suo recupero. Per questo motivo è la soluzione ideale per chi cerca uno storage durevole, a basso costo e che non richiede ore di attesa per il recupero dei dati importanti quando necessario.

Per chi invece ha necessità di accedere di frequente ai propri dati, è preferibile utilizzare la soluzione [OVH Public Cloud Storage](https://www.ovhcloud.com/it/public-cloud/object-storage/){.external}.



> [!primary]
>
> Cerchi un Software Development Kit? Consulta la lista ufficiale dei SDK di OpenStack.
> 

Questa guida descrive nel dettaglio i concetti chiave della soluzione OVH Public Cloud Archive quali region, account, container, archivi e come utilizzare queste risorse tramite le API di OpenStack.


## Autenticazione
OVH Public Cloud Archive è basato su OpenStack Swift: come tutti gli altri servizi OpenStack, anche questa soluzione utilizza [Keystone](https://docs.openstack.org/developer/keystone/){.external} per la gestione dell'autenticazione degli utenti.



> [!primary]
>
> Per consultare la pagina ufficiale delle API di OpenStack Keystone,
> clicca qui.
> 

Un’autenticazione corretta restituisce un **token di autenticazione**, un **ID del progetto** e un **catalogo dei servizi**, consentendo un ulteriore utilizzo dei servizi OpenStack. Il token deve essere trasmesso parallelamente alle interazioni con le API di un dato servizio. È valido per uno scopo definito e un determinato periodo di tempo, specificato dal servizio di autenticazione remota. La generazione del token è un’operazione soggetta a limiti: un utente non può generare più di 60 token al minuto.

NB: la sintassi riportata di seguito si riferisce ad autorizzazioni “unscoped”, cioè con scopo non definito (es: il token è valido per l’ID del progetto di default). Per autorizzazioni “scoped” (con scopo definito), fai riferimento alle API Keystone.

**Sintassi**

```
 POST /v3/auth/tokens HTTP/1.1
 Host: auth.cloud.ovh.net
 Content-Length: <length>
 Content-Type: application/json
 
 {
     "auth": {
         "identity": {
             "methods": [
                 "password"
             ],
             "password": {
                 "user": {
                     "name": "<username>",
                     "domain": {
                         "name": "Default"
                     },
                     "password": "<password>"
                 }
             }
         }
     }
 }
 ```
**Esempio di risposta**

```
 HTTP/1.1 201 Created
 Vary: X-Auth-Token
 X-Subject-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 2299
 Content-Type: application/json
 Date: Thu, 09 Mar 2017 11:21:04 GMT
 
 {
    "token" : {
       "methods" : [
          "password"
       ],
       "expires_at" : "2017-03-10T12:38:46.046846Z",
       "issued_at" : "2017-03-09T12:38:46.046871Z",
       "catalog" : [
          {
             "type" : "object-store",
             "id" : "9afff7a684eb4830b08366fce2b94c57",
             "endpoints" : [
                {
                   "url" : "https://storage.bhs1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "35ed7954cd8241b384da3c2d6c7277bb",
                   "interface" : "public",
                   "region_id" : "BHS1"
                },
                {
                   "region_id" : "SBG1",
                   "interface" : "public",
                   "id" : "3ccc82bbd33d4cdfbc5f03aef2724ab0",
                   "url" : "https://storage.sbg1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f"
                },
                {
                   "url" : "https://storage.gra1.cloud.ovh.net/v1/AUTH_e80c212388cd4d509abc959643993b9f",
                   "id" : "c96f61d071a74e36bd3c07e53d241ce3",
                   "region_id" : "GRA1",
                   "interface" : "public"
                }
             ]
          },
       ],
       "roles" : [
          {
             "name" : "_member_",
             "id" : "9fe3fd9ee4291b1895a90975d3e92baf"
          }
       ],
       "extras" : {},
       "user" : {
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "ktZeF8Uqluqm",
          "id" : "200ba261af11471db447526575dcb9fb"
       },
       "audit_ids" : [
          "BN_StzM0SFmGB5uYiIhA7Q"
       ],
       "project" : {
          "id" : "e80c212388cd4d509abc959643993b9f",
          "domain" : {
             "name" : "Default",
             "id" : "default"
          },
          "name" : "3635872342124167"
       }
    }
 }
 ```

## Region
OVH Public Cloud Archive è disponibile in diverse region, composte da zone che a loro volta includono risorse potenzialmente localizzate in diversi datacenter. A ogni region è associato un endpoint di servizio. Nel catalogo riportato nell’esempio di risposta del paragrafo [Autenticazione](#autenticazione){.internal} è indicata una lista delle region in cui sono disponibili i servizi OVH Public Cloud Archive e OVH Public Cloud Storage.


## Policy di storage
I dati salvati sui servizi OVH Object Storage e OVH Public Cloud Archive vengono allocati da un livello di storage dedicato alla gestione delle diverse policy. Una policy di storage solitamente differisce in base al tipo di storage in uso o all’algoritmo di ridondanza responsabile di distribuire i dati per massimizzare la loro durabilità.

Le policy di storage applicate alle soluzioni OVH sono le seguenti:

Policy per il servizio OVH **P**ublic **C**loud **A**rchive. Ottimizzata per lo storage a freddo, con accesso poco frequente. I dati vengono archiviati utilizzando un [Erasure Code](https://en.wikipedia.org/wiki/Erasure_code){.external} caratterizzato da un *code rate* di 0.8, formato da 12 frammenti di dati e 3 frammenti di parità. L’accesso è regolato da una latenza di recupero che può variare da pochi minuti a diverse ore in base alle operazioni eseguite precedentemente.

Policy per il servizio OVH **P**ublic **C**loud **S**torage. Ottimizzata per lo storage a caldo, con accesso frequente. Prevede la tripla replica dei dati tramite scrittura di 3 copie di ogni oggetto e il suo accesso è immediato.


## Account
Ogni progetto OVH Public Cloud è identificato da un ID univoco. Per permetterti di gestire al meglio i tuoi dati, OVH Public Cloud Archive e OVH Public Cloud Storage mettono a disposizione un elemento importante: l’Account. Un account è simile a un progetto Cloud Storage ed è in grado di contenere insiemi di dati chiamati container. Il nome dell’account corrisponde a *AUTH_<ID del progetto>*, dove l’identificativo del progetto deriva dall’[Autenticazione](#autenticazione){.internal} dell’utente.


## Container
OVH Public Cloud Archive è un servizio di Cloud Storage. Per poter archiviare i tuoi dati, per prima cosa è necessario creare un container in una delle region OVH Public Cloud.

Questa sezione mostra come utilizzare i container con le [API OpenStack Swift](https://developer.openstack.org/api-ref/object-storage/){.external}.


### Crea un container
Quando crei un container, è necessario assegnare un nome, specificare una policy di storage e scegliere una region selezionando l’endpoint di servizio a cui inviare la richiesta di creazione. È possibile creare un numero illimitato di container e, all’interno di essi, un numero illimitato di archivi.

Puoi creare i tuoi container tramite:

- sezione Cloud del tuo Spazio Cliente OVH
- gateway basato sui protocolli SSH
- API OVH
- API OpenStack

Se scegli di utilizzare le API OpenStack Swift, la policy di storage di default è *PCS* (se non specificato diversamente al momento della creazione del container). Per creare un container su OVH Public Cloud Archive è invece necessario specificare la policy corrispondente.

NB: una volta assegnata, la policy di storage di un container non è modificabile.

**Sintassi**

```
 PUT /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 X-Storage-Policy: PCA
 ```
**Esempio di richiesta**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 X-Storage-Policy: PCA
 ```
**Esempio di risposta**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 X-Trans-Id: tx2acf06eb506d441ab605a-0058c15384
 X-Openstack-Request-Id: tx2acf06eb506d441ab605a-0058c15384
 Date: Thu, 09 Mar 2017 13:07:17 GMT
 ```

### Recupera linventario di un container
Quando esegui l’upload di un archivio, OVH Public Cloud Archive aggiorna l’inventario del container con le nuove informazioni. L’inventario viene creato ed è disponibile alla lettura solo dopo che l’archivio di dati è stato interamente ricevuto.

Per supportare le caratteristiche del suo servizio di storage a freddo, OVH ha leggermente modificato la procedura di generazione dell’inventario rispetto alle infrastrutture OpenStack Swift standard. In questo modo, è in grado di includere le informazioni aggiuntive specifiche al processo di storage utilizzato, garantendoti l’accesso a informazioni essenziali del tuo archivio come lo stato di unsealing e il tempo di recupero prima che sia disponibile al download.

Per maggiori dettagli sull’operazione di recupero di un archivio, [clicca qui](https://docs.ovh.com/it/storage/pca/api/).

**Sintassi**

```
 GET /v1/<account>/<container>?policy_extra=true HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: <token>
 ```
**Esempio di richiesta**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives?policy_extra=true HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 Accept: application/json
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Esempio di risposta**

```
 HTTP/1.1 200 OK
 Content-Length: 913
 Accept-Ranges: bytes
 X-Container-Object-Count: 3
 X-Storage-Policy: PCA
 Last-Modified: Fri, 24 Feb 2017 10:06:54 GMT
 X-Timestamp: 1487930813.23049
 X-Container-Bytes-Used: 3072
 Content-Type: application/json; charset=utf-8
 X-Trans-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 X-Openstack-Request-Id: tx1f9a222e5d004f3198fcf-0058c15d1a
 Date: Thu, 09 Mar 2017 13:48:10 GMT
 
 [
    {
       "hash" : "l0dad6ursvjudy1ea4xyfftbwdsfqhqq",
       "policy_retrieval_state" : "sealed",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.026940",
       "policy_retrieval_delay" : null,
       "name" : "archive1.zip",
       "content_type" : "application/octet-stream"
    },
    {
       "hash" : "d69eegihauxczrutglltkkz4k9xwwfsp",
       "policy_retrieval_state" : "unsealing",
       "bytes" : 1024,
       "last_modified" : "2017-02-24T10:09:12.031512",
       "policy_retrieval_delay" : 1851,
       "name" : "archive2.tar.gz",
       "content_type" : "application/octet-stream"
    },
    {
       "policy_retrieval_delay" : null,
       "content_type" : "application/octet-stream",
       "name" : "archive3.xz",
       "bytes" : 1024,
       "policy_retrieval_state" : "unsealed",
       "hash" : "k9pzyglnvupkqbrniqoo16kb95y68vms",
       "last_modified" : "2017-03-07T15:13:42.624310"
    }
 ]
 ```

### Elimina un container
Per eliminare un container è prima necessario rimuovere tutti gli archivi al suo interno. Una volta cancellati tutti gli elementi, l’unica informazione richiesta per finalizzare l’operazione è il nome del container.

**Sintassi**

```
 DELETE /v1/<account>/<container> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Esempio di richiesta**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Esempio di risposta**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txc578ec094c764908a9feb-0058c153cc
 X-Openstack-Request-Id: txc578ec094c764908a9feb-0058c153cc
 Date: Thu, 09 Mar 2017 13:08:28 GMT
 ```

## Archivi
OVH Public Cloud Archive ti permette di trasferire oggetti generici chiamati archivi. Un archivio può essere di qualsiasi dimensione e il suo contenuto di qualunque tipo. Differisce da un oggetto OpenStack Swift standard per un attributo aggiuntivo: il *retrieval state*. L’archivio, infatti, può essere “sealed” (sigillato) o “unsealed” (non sigillato).


### Effettua lupload di un archivio
Un archivio caricato su OVH Public Cloud Archive viene immediatamente sigillato dal livello di storage e per recuperarlo è necessario sbloccarlo.

È possibile caricare archivi con una dimensione fino a 5 GB per singola operazione. Gli archivi con dimensione maggiore devono essere suddivisi in segmenti non superiori a 5 GiB, identificati da un manifest. Il manifest è un elemento di OpenStack Swift che permette di gestire oggetti di grandi dimensioni. Per maggiori informazioni, clicca [qui](https://docs.openstack.org/developer/swift/overview_large_objects.html){.external}. La dimensione minima del segmento è 1 byte. Gli Static Large Objects (SLO) sono limitati a 1000 segmenti e la dimensione massima del manifest è 2 MiB.

Quando carichi un archivio su OVH Public Cloud Archive, è molto importante verificare che la copia locale dei dati e quella remota siano identiche, per assicurarsi che i dati ricevuti siano corretti e che nessuno ne abbia alterato i contenuti.

- Quando esegui l’upload di archivi segmentati, è necessario calcolare il checksum md5 di ogni segmento e concatenare i singoli risultati nell’ordine corretto per generare una stringa. Il checksum md5 di questa stringa deve poi essere trasmesso durante la richiesta di creazione del manifest.
- Quando esegui l’upload di archivi non segmentati, è necessario calcolare il checksum md5 e includerlo nella richiesta di creazione dell’archivio.

**Sintassi**

```
 PUT /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 Content-Length: <archive_size>
 Etag: <archive_md5sum>
 ```
**Esempio di richiesta**

```
 PUT /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 Content-Length: 1024
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
 ```
**Esempio di risposta**

```
 HTTP/1.1 201 Created
 Content-Length: 0
 Last-Modified: Thu, 09 Mar 2017 15:02:12 GMT
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 X-Trans-Id: txa1e833e835c749a883ff4-0058c16e71
 X-Openstack-Request-Id: txa1e833e835c749a883ff4-0058c16e71
 Date: Thu, 09 Mar 2017 15:02:18 GMT
 ```

### Sblocca un archivio
OVH Public Cloud Archive memorizza i tuoi dati ottimizzando i costi, ma prevede un tempo variabile di attesa durante il processo di recupero. Per accedere ai propri archivi, è necessario inviare una richiesta di unsealing contenente il nome del container e dell’archivio.

Le richieste di sblocco sono identiche a quelle per il download. L’unica differenza tra queste due operazioni è la risposta inviata da OVH Public Cloud Archive, che rappresenta una particolarità dell’infrastruttura OpenStack Swift sottostante utilizzata da OVH. Una volta che la richiesta di unsealing viene ricevuta, non è possibile cancellarla. Ulteriori richieste avranno come unico effetto quello di recuperare il tempo di attesa stimato dell’operazione.

Per maggiori informazioni su questa richiesta, [clicca qui](https://docs.ovh.com/it/storage/pca/api/).

**Sintassi**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Esempio di richiesta**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Esempio di risposta**

```
 HTTP/1.1 429 Too Many Requests
 Retry-After: 637
 Content-Length: 64
 X-Trans-Id: txe9fad9afaf7b4950a16af-0058c17f11
 X-Openstack-Request-Id: txe9fad9afaf7b4950a16af-0058c17f11
 Date: Thu, 09 Mar 2017 16:13:05 GMT
 
 <html><h1>Too Many Requests</h1><p>Too Many Requests.</p></html>
 ```

### Effettua il download di un archivio
Una volta sbloccato, è possibile scaricare l’archivio nelle successive 24 ore, senza limiti di banda e frequenza di accesso. Allo scadere del tempo disponibile per il recupero, l’archivio viene nuovamente sigillato.

Ricorda che OVH Public Cloud Archive è un servizio ottimizzato per lo storage a freddo: se una nuova richiesta di sblocco viene inviata in un periodo di tempo relativamente ravvicinato, il recupero dei dati richiederà una durata **significativamente maggiore** per essere completata.

**Sintassi**

```
 GET /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Esempio di richiesta**

```
 GET /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Esempio di risposta**

```
 HTTP/1.1 200 OK
 Content-Length: 1024
 Content-Type: application/octet-stream
 Etag: 1e50210a0202497fb79bc38b6ade6c34
 
 [bytes]
 ```

### Elimina un archivio
Contrariamente al download di un archivio, che implica una latenza intrinseca, l’eliminazione richiede un solo comando. Questa operazione viene gestita immediatamente, è irrevocabile e non può essere annullata. Per eliminare un archivio è necessario fornire il suo nome e il container in cui è memorizzato.

**Sintassi**

```
 DELETE /v1/<account>/<container>/<archive> HTTP/1.1
 Host: storage.<region>.cloud.ovh.net
 X-Auth-Token: <token>
 ```
**Esempio di richiesta**

```
 DELETE /v1/AUTH_e80c212388cd4d509abc959643993b9f/archives/archive1.zip HTTP/1.1
 Host: storage.gra1.cloud.ovh.net
 X-Auth-Token: 3caec5b614a94326b0e9b847661e3d6a
 ```
**Esempio di risposta**

```
 HTTP/1.1 204 No Content
 Content-Length: 0
 X-Trans-Id: txcf8e98d30f714c85a323d-0058c16813
 X-Openstack-Request-Id: txcf8e98d30f714c85a323d-0058c16813
 Date: Thu, 09 Mar 2017 14:35:00 GMT
 ```