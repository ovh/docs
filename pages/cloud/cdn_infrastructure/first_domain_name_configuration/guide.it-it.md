---
title: 'Prima configurazione di un dominio'
slug: prima-configurazione-dominio-su-cdn
excerpt: 'Come configurare un dominio sulla CDN OVH'
section: 'Per iniziare'
order: 2
---

**Ultimo aggiornamento: 17/05/2019**

## Obiettivo

Per iniziare a utilizzare il servizio Content Delivery Network (CDN) di OVH, è necessario dichiarare i domini dallo Spazio Cliente OVH e configurare alcuni parametri che ne garantiscono un utilizzo ottimale. 


**Questa guida ti mostra le operazioni da eseguire nello Spazio Cliente OVH per utilizzare la CDN OVH e descrive alcune best practice di utilizzo.**


## Prerequisiti

- Usufruire della [Content Delivery Network (CDN) OVH](https://www.ovh.it/cdn/){.external}
- Avere accesso alla gestione della zona DNS del dominio
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Procedura

### Aggiungi il dominio sulla CDN

Per prima cosa, è necessario aggiungere un sottodominio alla CDN in modo che possa accettare richieste HTTP(S) per questo dominio: accedi alla sezione `Dedicato`{.action} dello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} e clicca su `NAS e CDN`{.action} nel menu a sinistra. 

Clicca su `Aggiungi un dominio alla CDN`{.action}:

![Spazio Cliente CDN](images/cdn_customer_panel.png){.thumbnail}

Nella nuova finestra, seleziona il sottodominio da aggiungere alla CDN.

![Aggiungere un sottodominio alla CDN](images/add_cdn_domain_step_1.png){.thumbnail}

In seguito, seleziona un backend già esistente (se non è la prima volta che aggiungi un dominio) o inserisci l’indirizzo IP di uno nuovo.

![Aggiungere un back-end](images/add_cdn_domain_step_2.png){.thumbnail}


Dopo pochi minuti, il dominio sarà disponibile nello Spazio Cliente OVH e sarà possibile configurarlo.

Per fare in modo che le richieste inviate passino correttamente per la nostra infrastruttura CDN, modifica la zona DNS del sottodominio in modo che un record CNAME punti verso **cdn.*iltuodominio.ovh*.web.cdn.anycast.me**.


> [!warning]
>
> La configurazione del record CNAME è importante: permette il corretto funzionamento della funzione `Bypass`. Se utilizzi un record di tipo A, la CDN funzionerà ma il *bypass* non sarà più attivo.
>


Se la zona DNS del tuo dominio è ospitata in OVH, puoi configurarla dal tuo Spazio Cliente aggiungendo questa voce (ricordati di adattare il sottodominio alla tua configurazione): 

![Nome della foto](images/cname_field.png){.thumbnail}

 

### Verifica che un file sia salvato in cache
Per verificare che un file sia memorizzato nella cache, esegui questo comando:

```sh
curl -I http://sotto.dominio/
```

Viene restituito un risultato di questo tipo:

```bash
HTTP/1.1.200 OK
Date: Tue, 09 Jan 2018 10:30:57 GMT
Content-Type: text/plain
Last-Modified Fri, 29 Dec 2017 13:30:42 GMT
ETag W/"(5a464382-4ddf"
Expires: Wed, 09 Jan 2019 10:30:58 GMT
x-IPLB-Instance/: 5905
Vary: Accept-Encoding
X-CDN-Pop: rbx1
X-CDN-Pop-IP: 51.254.41.128/26
X-Cacheable Matched cache
Accept-Ranges: bytes
Connection: keep-alive
```

Se il tuo file si trova in cache, la risposta del comando conterrà la dicitura `Matched cache`.

Potrai inoltre visualizzare il punto di presenza (PoP) da cui è stato inviato il file (nel nostro esempio, *rbx1*).

Questa informazione è disponibile anche nel browser: su Firefox, ad esempio, si trova nella scheda `Rete` degli strumenti di sviluppo (F12). Cliccando sul file che vuoi verificare, visualizzerai la risposta HTTP e gli header.


### Prediligi l’utilizzo di un sottodominio specifico per la CDN al dominio principale

Aggiungere un record CNAME a un dominio principale non è possibile: questa restrizione è legata agli standard RFC e non può essere evitata a livello di zona DNS.

Inoltre, attribuire un dominio specifico ai file da memorizzare in cache permette di semplificare la gestione di file e fatturazione.

- File: saranno salvati in cache solo i file chiamati su questo sottodominio. In questo modo è possibile conservare la chiamata dei file dinamici o che non desideri mettere in cache sul tuo dominio principale, cosa che permette anche di individuare più rapidamente l’origine di un errore di visualizzazione sul tuo sito. 
- Fatturazione: tutto il traffico (in cache o meno) che passa per la CDN viene fatturato. In questo modo è possibile limitare il numero di richieste inutili effettuate verso la CDN per ottimizzare la quota disponibile. 


### Le conseguenze legate a un nuovo sottodominio

Per configurare un nuovo sottodominio con la nostra CDN, probabilmente sarà necessario modificare alcuni parametri del tuo sito e del tuo servizio Web.

Per prima cosa, assicurati che il servizio Web risponda correttamente al sottodominio. Per effettuare questa verifica, configura un [vhost](https://it.wikipedia.org/wiki/Virtual_hosting){.external} per il dominio, con la sua directory di destinazione o con l’alias di un altro dominio.

Se il dominio risponde correttamente nel tuo servizio Web, sarà sufficiente modificare il codice HTML per utilizzare i nuovi indirizzi dei file che passano per la CDN e assicurarti che ricevano le richieste tramite il sottodominio.

 
## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.