---
title: Risolvi i problemi SSL sul tuo sito Web
excerpt: Risolvi i problemi SSL sul tuo sito Web
slug: risolvi_i_problemi_ssl_sul_tuo_sito_web
section: SSL
order: 04
---


## Contenuti misti (mixed content)
Se il tuo sito non riesce a caricare elementi esterni come i pulsanti di Facebook o Twitter, o la tua pagina non funziona come in HTTP, probabilmente gli errori sono causati da problemi di contenuti misti.

Da qualche anno, i browser come Google Chrome, Mozilla Firefox o Internet Explorer, impediscono ai siti in HTTPS di caricare elementi della pagina se il loro URL è in HTTP, per evitare la violazione della sicurezza dei dati protetti da HTTPS.

Solitamente questi elementi sono script esterni che provengono da altri siti Web come i social network e, nella maggior parte dei casi, è sufficiente sostituire "http" con "https" per riuscire a caricarli.

Inoltre, alcuni siti utilizzano CDN per ospitare librerie Javascript (ad esempio, JQuery). Se l'URL di queste librerie è in "http", il sito potrebbe non funzionare correttamente.

Come sapere se il tuo sito presenta questo problema?

I tool di debug forniti da Mozilla Firefox e Google Chrome mostrano un messaggio quando la pagina del tuo sito contiene elementi bloccati per la presenza di contenuti misti. Per maggiori informazioni sui tool per individuare questo tipo di errore, consulta la documentazione disponibile sul [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content).


## Contenuti duplicati (duplicate content)
Il "duplicate content" indica la presenza di contenuti simili o uguali in diversi URL. I motori di ricerca tendono a penalizzare i siti che lo utilizzano perchè, in molti casi, i contenuti vengono duplicati per migliorare il posizionamento del proprio sito.

Se il tuo sito funziona correttamente in HTTPS e vuoi evitare questo problema, ti consigliamo di aggiungere un reindirizzamento dei tuoi contenuti da HTTP a HTTPS. In questo modo, i tuoi visitatori raggiungeranno automaticamente l'indirizzo in HTTPS e sarà disponibile un unico URL per lo stesso contenuto.

Per impostare il reindirizzamento, aggiungi queste righe nel file .htaccess che si trova nella root del tuo sito:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.tuodominio.it/$1 [R,L]
```




## Reindirizzamento da HTTPS a HTTP
Se vuoi limitare l'accesso al tuo sito in HTTP senza utilizzare il protocollo HTTPS, è sufficiente forzarne il reindirizzamento tramite il file .htaccess.

In questo modo, i tuoi visitatori raggiungeranno automaticamente l'indirizzo in HTTP anche accedendo in HTTPS e sarà disponibile un unico URL per lo stesso contenuto.

Per impostare il reindirizzamento da HTTPS a HTTP, aggiungi queste righe nel file .htaccess che si trova nella root del tuo sito:


```
RewriteEngine On
RewriteCond %{SERVER_PORT} 443
RewriteRule ^(.*)$ http://www.tuodominio.it/$1 [R,L]
```



