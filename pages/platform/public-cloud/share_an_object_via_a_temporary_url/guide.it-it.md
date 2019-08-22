---
title: Condividi un oggetto con un URL temporaneo
excerpt: Condividi un oggetto con un URL temporaneo
slug: condividi_un_oggetto_con_un_url_temporaneo
legacy_guide_number: g2007
---


## 
OpenStack Swift ti permette di archiviare un grande numero di file.
Per poterli gestire, è necessario autenticarsi con un token ad ogni richiesta indirizzata all'API. In questo modo, è possibile verificare i tuoi permessi (lettura, scrittura, ecc...) su Swift.
Il token viene generato dal sistema di autenticazione tramite le tue credenziali.

Se vuoi condividere un file con un amico o un collega senza fornire le informazioni personali relative all'autenticazione, puoi creare un URL temporaneo (Temp URL).

Il Temp URL è una funzionalità che ti permette di decidere i file che vuoi condividere e di metterli a disposizione per il tempo che vuoi, stabilendo la durata di validità del link.


## Come funziona?
La funzione Temp URL genera un indirizzo temporaneo utilizzando questi elementi:


- l'indirizzo dell'endpoint, ad esempio "https://storage.sbg1.cloud.ovh.net/"
- il percorso completo dell'oggetto, che contiene il tuo progetto, il container e il nome dell'oggetto. Ad esempio: "v1/AUTH_tenant/default/file"
- un primo parametro aggiuntivo tempurlsign, che corrisponde alla firma generata in base alla tua password, metodo HTTP, percorso del file e data di scadenza
- un secondo parametro url_expires, che corrisponde alla data di scadenza del tuo link




## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851)
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)
- Python installato sulla tua macchina
- Lo script Python: [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url)




## Genera la tua chiave
Innanzi tutto genera una chiave, che potrai utilizzare per tutti i file del tuo progetto e tutti i futuri Temp URL. Ti consigliamo di scegliere una chiave lunga (almeno 20 caratteri), anche se potrai generarne un'altra in qualsiasi momento.

Per generare la tua chiave puoi utilizzare strumenti come:

- [http://www.random.org/strings/](http://www.random.org/strings/)
- il comando Linux /dev/urandom
- o semplicemente il comando date +%s | md5sum


Una volta generata la chiave, è possibile configurarla sul tuo progetto tramite il client Swift (sostituisci la stringa "12345" con la tua chiave):


```
swift post -m "Temp-URL-Key: 12345"
```


o con curl:


```
curl -i -X POST \ -H "X-Account-Meta-Temp-URL-Key: 12345" \ -H "X-Auth-Token: abcdef12345" \ https://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```



## Informazioni:
Il nome completo dell'header è X-Account-Meta-Temp-Url-Key ma il client Swift utilizza Temp-Url-Key perché aggiunge automaticamente X-Account-Meta.
Una volta configurata la chiave sul tuo account, verifica che l'header sia stato applicato correttamente utilizzando il client Swift:


```
swift stat
```


O con curl:


```
curl -i -X HEAD \ -H "X-Auth-Token: abcdef12345" \ ttps://storage.sbg1.cloud.ovh.net/v1/AUTH_ProjectID
```




## Genera il tuo URL
Queste operazioni possono essere effettuate offline.

Genera l'indirizzo URL temporaneo utilizzando lo script swift-temp-url:


```
python swift-temp-url GET 60 /v1/AUTH_tenant/default/file 12345
```



- GET: metodo HTTP
- 60: link disponibile per 60 secondi (valore personalizzabile)
- 12345: da sostituire con la tua chiave
- /v1/AUTH_tenant/default/file: percorso verso il tuo file. In questa fase, non è necessario aggiungere l'endpoint.


Questo script fornirà un Temp URL di questo tipo:


```
v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


Nel link puoi vedere il percorso del file, la firma e la data di scadenza.

Per il corretto funzionamento del tuo URL, aggiungi semplicemente l'indirizzo dell'endpoint davanti al tuo Temp URL:


```
https://storage.sbg1.cloud.ovh.net/v1/AUTH_tenant/default/file?temp_url_sig=8016dsdf3122d526afds60911cde59fds3&temp_url_expires=1401548543
```


Nel nostro esempio, l'URL permette a chiunque di scaricare l'oggetto file dal container default entro 60 secondi e senza autenticazione.
Scaduti i 60 secondi, l'URL non funziona più.
Per generare un Temp URL senza utilizzare lo script [swift-temp-url](https://raw.githubusercontent.com/openstack/swift/master/bin/swift-temp-url), consulta la [documentazione OpenStack](http://docs.openstack.org/liberty/config-reference/content/object-storage-tempurl.html).


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

