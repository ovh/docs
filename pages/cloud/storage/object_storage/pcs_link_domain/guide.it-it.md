---
title: Object Storage Swift - Configura un dominio su un container del tuo Object Storage
excerpt: Configura un dominio su un container del tuo Object Storage
slug: pcs/link-domain
legacy_guide_number: g2006
section: OpenStack Swift Storage Class Specifics
order: 120
---

## Obiettivo

Quando crei un container di tipo Public, chiunque può accedere ai tuoi dati.
È la soluzione ideale per condividere file via Internet, ad esempio con i tuoi amici, ma per farlo devi fornire un URL lungo e complicato da ricordare.
In più, se vuoi pubblicare contenuti sul tuo sito, utilizzare il suo stesso dominio potrebbe risultare più semplice: in questo modo, infatti, puoi condividere i tuoi dati grazie a un URL personalizzato e quindi più semplice da ricordare.

Questa guida ti mostra come configurare un dominio sui tuoi container per facilitare l'accesso ad essi.


## Requisiti necessari

- [Aggiungi storage al tuo Cloud](https://docs.ovh.com/gb/en/storage/pcs/create-container/)
- un dominio


## In teoria
Quando una richiesta HTTP arriva all'Object Storage di OpenStack, viene effettuata una verifica dell'header host. Se è diverso dall'hostname utilizzato, il sistema lo considera come un record "mappato" e invia una richiesta DNS per ottenere il nome completo dell'host.
Se viene trovato un record DNS, la risposta viene analizzata per trovare ed estrarre il container, l'account e l'oggetto cercato e poi la richiesta viene riscritta.
Assicurati che il tuo client utilizzi l'header host corretto, in modo che l'Object Storage sia in grado di gestire la tua richiesta.


## HTTP e HTTPS
Le richieste funzionano correttamente con HTTP.
Con HTTPS, invece, potresti visualizzare errori di certificato (perché non possediamo il tuo certificato privato) e ricevere alert utilizzando la maggior parte dei browser.


## Record CNAME o TXT
È possibile utilizzare solo uno di questi 2 record per volta:


- CNAME: è il record predefinito. Utilizzalo per gestire la tua zona DNS. Il suo valore sarà seguito automaticamente dal nome del tuo endpoint, indipendentemente dal suo indirizzo IP.

- TXT: utilizzalo solo per configurare il tuo dominio su un altro supporto, ad esempio una CDN. Ricordati di verificare se l'indirizzo IP dell'endpoint cambia. Se il tuo provider CDN lo prevede, al suo posto puoi utilizzare anche un "virtual CNAME".




## Con CNAME
Scegli un sottodominio (ad esempio, static.tuodominio.it), aggiungi un record di tipo CNAME e poi la destinazione.

Per essere interpretato dall'Object Storage, il record CNAME deve rispettare regole specifiche. Adatta le [VARIABILI] del nostro esempio con i valori corretti:


```
[NOME_DEL_CONTAINER].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Esempio: per un container staticct e un progetto 123xxxx456 utilizzato su SBG


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


il tuo record DNS sarà


```
static IN CNAME staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```




## Con TXT
Aggiungi un record di tipo TXT.

Per essere interpretato dall'Object Storage, il record TXT deve rispettare queste regole:


```
'_swift-remap.' + sottodominio
```


Ad esempio, per un sottodominio static.tuodominio.it:


```
_swift-remap.static
```


Come per il record CNAME, sostituisci le [VARIABILI] con i valori corretti:


```
[NOME_DEL_CONTAINER].auth-[PROJECT_ID].storage.[REGION].cloud.ovh.net.
```


Esempio: per un container staticct e un progetto 123xxxx456 utilizzato su SBG


```
staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


il tuo record DNS sarà


```
_swift-remap.static IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


Se non vuoi utilizzare un sottodominio, esegui questo comando:


```
_swift-remap IN TXT staticct.auth-123xxxx456.storage.sbg.cloud.ovh.net.
```


L'ultimo step per la configurazione del record TXT è aggiungere un record di tipo A per il tuo (sotto)dominio, che punta all'indirizzo IP dell'Object Storage del Public Cloud.
Per farlo, esegui questi comandi:


```
dig storage.sbg.cloud.ovh.net
dig storage.gra.cloud.ovh.net
dig storage.bhs.cloud.ovh.net
```



## Attenzione!
Il nome del tuo container non può contenere questi caratteri:


- [ . ]
- [ _ ] (a seconda del tuo provider DNS)
- lettere maiuscole
- sostuituisci auth-ProjectID con auth_ProjectID




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

