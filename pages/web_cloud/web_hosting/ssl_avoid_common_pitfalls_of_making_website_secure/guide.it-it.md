---
title: "Errori comuni associati alla protezione del sito Web con il certificato SSL"
excerpt: "Scopri come evitare i comuni errori di protezione del proprio sito Web con il certificato SSL"
updated: 2024-01-11
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questo tutorial contiene alcuni esempi di situazioni in cui proteggere il sito Web con l’SSL.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner). OVHcloud non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

**Questa guida ti mostra come evitare i comuni errori di protezione del tuo sito Web con SSL**

## Prerequisiti

- Disporre di un [hosting Web OVHcloud](/links/web/hosting){.external}.
- Aver registrato almeno un [dominio](/links/web/domains){.external}.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione "Web cloud".

## Procedura

### Contenuto misto (mixed content)

Il sito Web non carica elementi esterni, come i pulsanti *Facebook* e *X/Twitter*? Le interazioni sulle pagine Web non funzionano come quando si accede al sito Web in "HTTP"? Questo problema può essere dovuto al fatto che il sito contiene contenuto misto. 

Da alcuni anni, i browser come *Google Chrome*, *Mozilla Firefox* e *Microsoft Edge/Internet Explorer* impediscono ai siti Web in "HTTPS" di caricare gli elementi della pagina se sono accessibili tramite un URL in "HTTP". in modo che la confidenzialità fornita dal protocollo "HTTPS" non sia compromessa da un elemento caricato in "HTTP". 

Nella maggior parte dei casi, si tratta di script esterni, provenienti da altri siti web come i social network. In questo caso, è sufficiente sostituire nei tuoi script gli URL in "HTTP" con gli URL in "HTTPS" per poter caricare questi script.

> [!primary]
>
> Alcuni siti Web utilizzano [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) per ospitare, ad esempio, librerie *Javascript* (come *JQuery*). 
> Se le CDN consegnano la libreria con un URL in "HTTP", il tuo sito Web potrebbe essere interessato dal **mixed content**. 
>

Come sapere se il tuo sito è interessato?

Gli strumenti di debug disponibili in *Mozilla Firefox* e *Google Chrome* possono indicare se il sito Web contiene o meno elementi bloccati a causa di contenuto misto. La documentazione disponibile sul [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} spiega l’utilizzo di questi strumenti per individuare i contenuti misti.

### Contenuto duplicato (duplicate content)

"Duplicare contenuto" significa avere lo stesso contenuto su diversi URL. I motori di ricerca vedono questo come un tentativo di migliorare il posizionamento (SEO). e penalizzano quindi i siti Web con contenuti duplicati.

Per evitare situazioni di questo tipo, ti consigliamo di reindirizzare il contenuto "HTTP" verso "HTTPS" quando il sito funziona correttamente in "HTTPS". In questo modo i tuoi visitatori saranno automaticamente reindirizzati verso l’indirizzo del tuo contenuto Web in "HTTPS" e sarà disponibile un solo indirizzo per lo stesso contenuto. 

Ecco un esempio di reindirizzamento che potete aggiungere a un file "[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)", alla radice del vostro sito web (sostituendo l'URL *https://www.yourdomain.tld* con il vostro):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Per saperne di più <a name="go-further"></a>
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Contatta la nostra [Community di utenti](/links/community).