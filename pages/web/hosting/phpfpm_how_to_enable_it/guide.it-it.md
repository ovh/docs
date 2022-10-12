---
title: Attiva l’ottimizzazione PHP sul tuo hosting condiviso OVH
excerpt: Questa guida ti mostra come attivare PHP-FPM sul tuo hosting condiviso OVH, per migliorare i tempi di risposta PHP
slug: attiva_lottimizzazione_php_sul_tuo_hosting_condiviso_ovh
section: PHP
order: 03
---


## Cos'è PHP-FPM?
Abbiamo adattato PHP-FPM alla nostra infrastruttura Web, per consentirti di accelerare le risposte PHP.

È compilata con l'opcode-caching, che permette di ridurre le sollecitazioni al disco e il processing del tuo codice PHP.

I test che abbiamo condotto dimostrano che in questo modo puoi ottenere performance fino a 7 volte più rapide di prima.

## Nel tuo Spazio Cliente OVH
Questa guida ti mostra come attivare il PHP FPM e definire la versione di PHP utilizzando il file .ovhconfig. Se preferisci effettuare questa operazione direttamente dal tuo Spazio Cliente OVH, consulta questa guida: []({legacy}1999)

Attenzione: utilizzando PHP-FPM, per ragioni di sicurezza, queste opzioni sono disattivate (disabilitate da PHP):


```
register_globals
magic_quotes_gpc
```



Installa l'opzione magic_quote_gpc:


- Senza PHP-FPM:


PHP 5.4: magic_quotes_gpc disattivato


- Con PHP-FPM:


PHP 5.4: magic_quotes_gpc disattivato
PHP 5.5: magic_quotes_gpc disattivato

## Attenzione
Ti consigliamo di utilizzare le versioni di PHP più recenti (5.5 o 5.6): le versioni obsolete non sono più aggionate dall'editor e possono presentare problemi di sicurezza.


## Come si attiva PHP-FPM?
Ti basta salvare il file .ovhconfig nella root del tuo spazio disco utilizzando l'FTP.

ATTENZIONE: il file .ovhconfig è presente di default negli Hosting Web 2014. Sulle offerte precedenti, è necessario crearlo e inserirlo nella root del tuo spazio disco.
Non viene aggiunto automaticamente sulle vecchie offerte Plan e in caso di modifica dell'offerta, perché alcune impostazioni potrebbero non essere compatibili con la versione PHP che utilizzi.

NB: Il file .ovhconfig può essere salvato solo nella root o in una directory di primo livello. Utilizza un solo file .ovhconfig: non è possibile utilizzare più di una configurazione PHP su uno stesso hosting (tranne che in caso di un [multidomainio impostato correttamente](https://www.ovh.it/g1332.hosting_web_come_associare_un_dominio_o_un_sottodominio_al_tuo_hosting_web)).

Il file .ovhconfig deve contenere questo codice:


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```


Se PHP-FPM si blocca, viene utilizzato il vecchio interprete PHP.


## Quali versioni di PHP sono disponibili?
Puoi utilizzare queste versioni:

- PHP 7.0
- PHP 5.6 (versione di default)
- PHP 5.5 (versione obsoleta sconsigliata)
- PHP 5.4 (obsoleta)
- PHP 5.3 (obsoleta) 


È disponibile anche ionCube

Attenzione: dopo aver inserito il file .ovhconfig, la versione di PHP utilizzata è quella definita dall'app.engine.version. Le impostazioni del tuo .htaccess, come ad esempio SetEnv PHP_VER, vengono ignorate.


## Hai creato il tuo .ovhconfig e hai un errore "Not Implemented"
Questo problema si verifica se l'engine o la versione specificata nel tuo .ovhconfig non esiste. 
Per maggiori informazioni sul problema, controlla l'error.log del tuo sito.


## Che significa la direttiva Environment?
Permette di specificare la cache dei file statici e il comportamento degli errori PHP
in modalità development:

- nessuna regola di cache applicata
- i log PHP vengono visualizzati sul tuo sito (display_errors=On)


in modalità production(opzione di default):

- i file statici come immagini, video e audio hanno una durata superiore a quella dei file in cache sui browser Internet
- i log PHP non vengono visualizzati sul tuo sito (display_errors=Off)




## Cos'è la direttiva http.firewall?
Questa variabile ti permette di attivare un firewall applicativo di tipo mod_security,
inserendo security

http.firewall è impostato di default come none


## IonCube è disponibile con PHP-FPM?
Sì, IonCube è disponibile nelle versioni 

- 5.6
- 5.5
- 5.4


Codifica le tue applicazioni PHP con IonCube in modo che possano funzionare sul tuo Web hosting. Per maggiori informazioni, leggi le [FAQ IonCube](http://www.ioncube.com/faq.php).


## Come si disattiva PHP-FPM?
Inserisci nel tuo .ovhconfig:


```
app.engine=phpcgi
app.engine.version=AUTO
```




## Dettagli del file .ovhconfig
Ecco il dettaglio del contenuto del file di configurazione:


```
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
; php:
; IMPORTANT: register_globals and magic_quotes_gpc are off for security
; php optiones .htaccess (like php version) are ignored
; phpcgi:
; IMPORTANT this is a fallback to previous system
; in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
; (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
; default: 5.6
; for phpcgi:
; this options is ignored (= fallback in AUTO)
;
app.engine.version=5.6

; __http.firewall__ used to add application firewall (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
; production:
; apache will maximise local cache
; mod_expires will grow up TTL of js, css, pdf, images, video, audio
; you can override it changing expiration explicitly in your .htaccess
; feel free to look on our guide.
; development:
; no expiration is added, files are not locally in cache,
; will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=development
```



